(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("draft-js"), require("immutable"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "draft-js", "immutable"], factory);
	else if(typeof exports === 'object')
		exports["reactDraftWysiwyg"] = factory(require("react"), require("draft-js"), require("immutable"));
	else
		root["reactDraftWysiwyg"] = factory(root["react"], root["draft-js"], root["immutable"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(18)();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if ("function" === 'function' && _typeof(__webpack_require__(10)) === 'object' && __webpack_require__(10)) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = function (_Component) {
  _inherits(Option, _Component);

  function Option() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Option);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Option.__proto__ || Object.getPrototypeOf(Option)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          value = _this$props.value;

      if (!disabled) {
        onClick(value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          activeClassName = _props.activeClassName,
          active = _props.active,
          disabled = _props.disabled,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-option-wrapper', className, (_classNames = {}, _defineProperty(_classNames, 'rdw-option-active ' + activeClassName, active), _defineProperty(_classNames, 'rdw-option-disabled', disabled), _classNames)),
          onClick: this.onClick,
          'aria-selected': active,
          title: title
        },
        children
      );
    }
  }]);

  return Option;
}(_react.Component);

Option.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.any,
  value: _propTypes2.default.string,
  className: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  title: _propTypes2.default.string
};
exports.default = Option;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(3),__webpack_require__(9)):"function"==typeof define&&define.amd?define(["draft-js","immutable"],t):"object"==typeof exports?exports.draftjsUtils=t(require("draft-js"),require("immutable")):e.draftjsUtils=t(e["draft-js"],e.immutable)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){var t=e.getSelection(),n=e.getCurrentContent(),r=t.getStartKey(),o=t.getEndKey(),i=n.getBlockMap();return i.toSeq().skipUntil(function(e,t){return t===r}).takeUntil(function(e,t){return t===o}).concat([[o,i.get(o)]])}function o(e){return r(e).toList()}function i(e){if(e)return o(e).get(0)}function l(e){if(e){var t=i(e),n=e.getCurrentContent(),r=n.getBlockMap().toSeq().toList(),o=0;if(r.forEach(function(e,n){e.get("key")===t.get("key")&&(o=n-1)}),o>-1)return r.get(o)}}function c(e){return e?e.getCurrentContent().getBlockMap().toList():new v.List}function a(e){var t=o(e);if(!t.some(function(e){return e.type!==t.get(0).type}))return t.get(0).type}function f(e){var t=p.RichUtils.tryToRemoveBlockStyle(e);return t?p.EditorState.push(e,t,"change-block-type"):e}function u(e){var t="",n=e.getSelection(),r=n.getAnchorOffset(),i=n.getFocusOffset(),l=o(e);if(l.size>0){if(n.getIsBackward()){var c=r;r=i,i=c}for(var a=0;a<l.size;a+=1){var f=0===a?r:0,u=a===l.size-1?i:l.get(a).getText().length;t+=l.get(a).getText().slice(f,u)}}return t}function s(e){var t=e.getCurrentContent(),n=e.getSelection(),r=p.Modifier.removeRange(t,n,"forward"),o=r.getSelectionAfter(),i=r.getBlockForKey(o.getStartKey());return r=p.Modifier.insertText(r,o,"\n",i.getInlineStyleAt(o.getStartOffset()),null),p.EditorState.push(e,r,"insert-fragment")}function g(e){var t=p.Modifier.splitBlock(e.getCurrentContent(),e.getSelection());return f(p.EditorState.push(e,t,"split-block"))}function d(e){var t=e.getCurrentContent().getBlockMap().toList(),n=e.getSelection().merge({anchorKey:t.first().get("key"),anchorOffset:0,focusKey:t.last().get("key"),focusOffset:t.last().getLength()}),r=p.Modifier.removeRange(e.getCurrentContent(),n,"forward");return p.EditorState.push(e,r,"remove-range")}function S(e,t){var n=p.Modifier.setBlockData(e.getCurrentContent(),e.getSelection(),t);return p.EditorState.push(e,n,"change-block-data")}function y(e){var t=new v.Map({}),n=o(e);if(n&&n.size>0)for(var r=0;r<n.size;r+=1){var i=function(e){var r=n.get(e).getData();if(!r||0===r.size)return t=t.clear(),"break";if(0===e)t=r;else if(t.forEach(function(e,n){r.get(n)&&r.get(n)===e||(t=t.delete(n))}),0===t.size)return t=t.clear(),"break"}(r);if("break"===i)break}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.blockRenderMap=void 0,t.getSelectedBlocksMap=r,t.getSelectedBlocksList=o,t.getSelectedBlock=i,t.getBlockBeforeSelectedBlock=l,t.getAllBlocks=c,t.getSelectedBlocksType=a,t.removeSelectedBlocksStyle=f,t.getSelectionText=u,t.addLineBreakRemovingSelection=s,t.insertNewUnstyledBlock=g,t.clearEditorContent=d,t.setBlockData=S,t.getSelectedBlocksMetadata=y;var p=n(0),v=n(6),k=(0,v.Map)({code:{element:"pre"}});t.blockRenderMap=p.DefaultDraftBlockRenderMap.merge(k)},function(e,t,n){"use strict";function r(e){if(e){var t=e.getType();return"unordered-list-item"===t||"ordered-list-item"===t}return!1}function o(e,t,n){var r=e.getSelection(),o=e.getCurrentContent(),i=o.getBlockMap(),l=(0,c.getSelectedBlocksMap)(e).map(function(e){var r=e.getDepth()+t;return r=Math.max(0,Math.min(r,n)),e.set("depth",r)});return i=i.merge(l),o.merge({blockMap:i,selectionBefore:r,selectionAfter:r})}function i(e,t,n){var r=e.getSelection(),i=void 0;i=r.getIsBackward()?r.getFocusKey():r.getAnchorKey();var c=e.getCurrentContent(),a=c.getBlockForKey(i),f=a.getType();if("unordered-list-item"!==f&&"ordered-list-item"!==f)return e;var u=c.getBlockBefore(i);if(!u)return e;if(u.getType()!==f)return e;var s=a.getDepth();if(1===t&&s===n)return e;var g=Math.min(u.getDepth()+1,n),d=o(e,t,g);return l.EditorState.push(e,d,"adjust-depth")}Object.defineProperty(t,"__esModule",{value:!0}),t.isListBlock=r,t.changeDepth=i;var l=n(0),c=n(1)},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";var r=n(5),o=n(1),i=n(7),l=function(e){return e&&e.__esModule?e:{default:e}}(i),c=n(2);e.exports={getSelectedBlocksMap:o.getSelectedBlocksMap,getSelectedBlocksList:o.getSelectedBlocksList,getSelectedBlock:o.getSelectedBlock,getBlockBeforeSelectedBlock:o.getBlockBeforeSelectedBlock,getAllBlocks:o.getAllBlocks,getSelectedBlocksType:o.getSelectedBlocksType,removeSelectedBlocksStyle:o.removeSelectedBlocksStyle,getSelectionText:o.getSelectionText,addLineBreakRemovingSelection:o.addLineBreakRemovingSelection,insertNewUnstyledBlock:o.insertNewUnstyledBlock,clearEditorContent:o.clearEditorContent,setBlockData:o.setBlockData,getSelectedBlocksMetadata:o.getSelectedBlocksMetadata,blockRenderMap:o.blockRenderMap,getEntityRange:r.getEntityRange,getCustomStyleMap:r.getCustomStyleMap,toggleCustomInlineStyle:r.toggleCustomInlineStyle,getSelectionEntity:r.getSelectionEntity,extractInlineStyle:r.extractInlineStyle,removeAllInlineStyles:r.removeAllInlineStyles,getSelectionInlineStyle:r.getSelectionInlineStyle,getSelectionCustomInlineStyle:r.getSelectionCustomInlineStyle,handleNewLine:l.default,isListBlock:c.isListBlock,changeDepth:c.changeDepth}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){var t=e.getSelection();if(t.isCollapsed()){var n={},r=e.getCurrentInlineStyle().toList().toJS();if(r)return["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"].forEach(function(e){n[e]=r.indexOf(e)>=0}),n}var o=t.getStartOffset(),i=t.getEndOffset(),l=(0,p.getSelectedBlocksList)(e);if(l.size>0){var c=function(){for(var e={BOLD:!0,ITALIC:!0,UNDERLINE:!0,STRIKETHROUGH:!0,CODE:!0,SUPERSCRIPT:!0,SUBSCRIPT:!0},t=0;t<l.size;t+=1){var n=0===t?o:0,r=t===l.size-1?i:l.get(t).getText().length;n===r&&0===n?(n=1,r=2):n===r&&(n-=1);for(var c=n;c<r;c+=1)!function(n){var r=l.get(t).getInlineStyleAt(n);["BOLD","ITALIC","UNDERLINE","STRIKETHROUGH","CODE","SUPERSCRIPT","SUBSCRIPT"].forEach(function(t){e[t]=e[t]&&r.get(t)===t})}(c)}return{v:e}}();if("object"===(void 0===c?"undefined":S(c)))return c.v}return{}}function i(e){var t=void 0,n=e.getSelection(),r=n.getStartOffset(),o=n.getEndOffset();r===o&&0===r?o=1:r===o&&(r-=1);for(var i=(0,p.getSelectedBlock)(e),l=r;l<o;l+=1){var c=i.getEntityAt(l);if(!c){t=void 0;break}if(l===r)t=c;else if(t!==c){t=void 0;break}}return t}function l(e,t){var n=(0,p.getSelectedBlock)(e),r=void 0;return n.findEntityRanges(function(e){return e.get("entity")===t},function(e,t){r={start:e,end:t,text:n.get("text").slice(e,t)}}),r}function c(e,t,n){var r=e.getSelection(),o=Object.keys(v[t]).reduce(function(e,t){return y.Modifier.removeInlineStyle(e,r,t)},e.getCurrentContent()),i=y.EditorState.push(e,o,"changeinline-style"),l=e.getCurrentInlineStyle();if(r.isCollapsed()&&(i=l.reduce(function(e,t){return y.RichUtils.toggleInlineStyle(e,t)},i)),"SUPERSCRIPT"===t||"SUBSCRIPT"==t)l.has(n)||(i=y.RichUtils.toggleInlineStyle(i,n));else{var c="bgcolor"===t?"backgroundColor":t;l.has(c+"-"+n)||(i=y.RichUtils.toggleInlineStyle(i,t.toLowerCase()+"-"+n),k(t,c,n))}return i}function a(e){if(e){e.getCurrentContent().getBlockMap().map(function(e){return e.get("characterList")}).toList().flatten().forEach(function(e){e&&0===e.indexOf("color-")?k("color","color",e.substr(6)):e&&0===e.indexOf("bgcolor-")?k("bgcolor","backgroundColor",e.substr(8)):e&&0===e.indexOf("fontsize-")?k("fontSize","fontSize",+e.substr(9)):e&&0===e.indexOf("fontfamily-")&&k("fontFamily","fontFamily",e.substr(11))})}}function f(e,t,n){var r=e.getInlineStyleAt(n).toList(),o=r.filter(function(e){return e.startsWith(t.toLowerCase())});if(o&&o.size>0)return o.get(0)}function u(e,t){var n=e.getCurrentInlineStyle().toList(),r=n.filter(function(e){return e.startsWith(t.toLowerCase())});if(r&&r.size>0)return r.get(0)}function s(e,t){if(e&&t&&t.length>0){var n=function(){var n=e.getSelection(),r={};if(n.isCollapsed())return t.forEach(function(t){r[t]=u(e,t)}),{v:r};var o=n.getStartOffset(),i=n.getEndOffset(),l=(0,p.getSelectedBlocksList)(e);if(l.size>0){for(var c=0;c<l.size;c+=1)!function(e){var n=0===e?o:0,c=e===l.size-1?i:l.get(e).getText().length;n===c&&0===n?(n=1,c=2):n===c&&(n-=1);for(var a=n;a<c;a+=1)!function(o){o===n?t.forEach(function(t){r[t]=f(l.get(e),t,o)}):t.forEach(function(t){r[t]&&r[t]!==f(l.get(e),t,o)&&(r[t]=void 0)})}(a)}(c);return{v:r}}}();if("object"===(void 0===n?"undefined":S(n)))return n.v}return{}}function g(e){var t=e.getCurrentInlineStyle(),n=e.getCurrentContent();return t.forEach(function(t){n=y.Modifier.removeInlineStyle(n,e.getSelection(),t)}),y.EditorState.push(e,n,"change-inline-style")}Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomStyleMap=void 0;var d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getSelectionInlineStyle=o,t.getSelectionEntity=i,t.getEntityRange=l,t.toggleCustomInlineStyle=c,t.extractInlineStyle=a,t.getSelectionCustomInlineStyle=s,t.removeAllInlineStyles=g;var y=n(0),p=n(1),v={color:{},bgcolor:{},fontSize:{},fontFamily:{},CODE:{fontFamily:"monospace",wordWrap:"break-word",background:"#f1f1f1",borderRadius:3,padding:"1px 3px"},SUPERSCRIPT:{fontSize:11,position:"relative",top:-8,display:"inline-flex"},SUBSCRIPT:{fontSize:11,position:"relative",bottom:-8,display:"inline-flex"}},k=function(e,t,n){v[e][e.toLowerCase()+"-"+n]=r({},""+t,n)};t.getCustomStyleMap=function(){return d({},v.color,v.bgcolor,v.fontSize,v.fontFamily,{CODE:v.CODE,SUPERSCRIPT:v.SUPERSCRIPT,SUBSCRIPT:v.SUBSCRIPT})}},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){var t=e.getSelection();if(t.isCollapsed()){var n=e.getCurrentContent(),r=t.getStartKey(),o=n.getBlockForKey(r);if(!(0,a.isListBlock)(o)&&"unstyled"!==o.getType()&&o.getLength()===t.getStartOffset())return(0,c.insertNewUnstyledBlock)(e);if((0,a.isListBlock)(o)&&0===o.getLength()){var i=o.getDepth();if(0===i)return(0,c.removeSelectedBlocksStyle)(e);if(i>0)return(0,a.changeDepth)(e,-1,i)}}}function o(e){return 13===e.which&&(e.getModifierState("Shift")||e.getModifierState("Alt")||e.getModifierState("Control"))}function i(e,t){if(o(t)){return e.getSelection().isCollapsed()?l.RichUtils.insertSoftNewline(e):(0,c.addLineBreakRemovingSelection)(e)}return r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var l=n(0),c=n(1),a=n(2)}])});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = forEach;
exports.hasProperty = hasProperty;
exports.isEmptyString = isEmptyString;
exports.isMap = isMap;
exports.filter = filter;
exports.stopPropagation = stopPropagation;


/**
* Utility function to execute callback for eack key->value pair.
*/
function forEach(obj, callback) {
  if (obj) {
    for (var key in obj) {
      // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key, obj[key]);
      }
    }
  }
}

function hasProperty(obj, property) {
  var result = false;
  if (obj) {
    for (var key in obj) {
      // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key) && property === key) {
        result = true;
        break;
      }
    }
  }
  return result;
}

/**
* The function returns true if the string passed to it has no content.
*/
function isEmptyString(str) {
  return !str || !str.trim();
}

/**
* The function will return true for simple javascript object,
* which is not any other built in type like Array.
*/
function isMap(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
* The function will return filter out props fron and return new props.
*/
function filter(obj, keys) {
  var filteredKeys = Object.keys(obj).filter(function (key) {
    return keys.indexOf(key) < 0;
  });
  var filteredObject = {};
  if (filteredKeys && filteredKeys.length > 0) {
    filteredKeys.forEach(function (key) {
      filteredObject[key] = obj[key];
    });
  }
  return filteredObject;
}

function stopPropagation(event) {
  event.stopPropagation();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Dropdown = __webpack_require__(32);

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _DropdownOption = __webpack_require__(34);

var _DropdownOption2 = _interopRequireDefault(_DropdownOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Dropdown: _Dropdown2.default,
  DropdownOption: _DropdownOption2.default
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _common = __webpack_require__(6);

/**
* This function is used when displaying options in drop-down.
* Icon for first available options is used in drop-down placeholder.
*/
var getFirstIcon = function getFirstIcon(config) {
  return config[config.options[0]].icon;
};

/**
* The function is used to recursively merge toolbar options.
* It assumes all the options are peresent in obj1.
* It recursively merges objects but not arrays.
*/


var mergeRecursive = function mergeRecursive(obj1, obj2) {
  if (obj1 && obj2 === undefined) {
    return obj1;
  }
  var mergedValue = {};
  (0, _common.forEach)(obj1, function (key, value) {
    if ((0, _common.isMap)(value)) {
      mergedValue[key] = mergeRecursive(value, obj2[key]);
    } else {
      mergedValue[key] = obj2[key] !== undefined ? obj2[key] : value;
    }
  });
  return mergedValue;
};

module.exports = {
  getFirstIcon: getFirstIcon,
  mergeRecursive: mergeRecursive
};

// todo: writing test cases for these methods and new methods added in common.js

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var callBacks = [];

exports.default = {
  onKeyDown: function onKeyDown(event) {
    callBacks.forEach(function (callBack) {
      callBack(event);
    });
  },

  registerCallBack: function registerCallBack(callBack) {
    callBacks.push(callBack);
  },

  deregisterCallBack: function deregisterCallBack(callBack) {
    callBacks = callBacks.filter(function (cb) {
      return cb !== callBack;
    });
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var suggestionDropdownOpen = void 0;

exports.default = {
  open: function open() {
    suggestionDropdownOpen = true;
  },

  close: function close() {
    suggestionDropdownOpen = false;
  },

  isOpen: function isOpen() {
    return suggestionDropdownOpen;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//

function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) {
      return;
    }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function isString(obj) {
  return _class(obj) === '[object String]';
}
function isObject(obj) {
  return _class(obj) === '[object Object]';
}
function isRegExp(obj) {
  return _class(obj) === '[object RegExp]';
}
function isFunction(obj) {
  return _class(obj) === '[object Function]';
}

function escapeRE(str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};

function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}

var defaultSchemas = {
  'http:': {
    validate: function validate(text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http = new RegExp('^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i');
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:': 'http:',
  'ftp:': 'http:',
  '//': {
    validate: function validate(text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http = new RegExp('^' + self.re.src_auth +
        // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' + self.re.src_port + self.re.src_host_terminator + self.re.src_path, 'i');
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') {
          return 0;
        }
        if (pos >= 3 && text[pos - 3] === '/') {
          return 0;
        }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function validate(text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto = new RegExp('^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i');
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__ = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = __webpack_require__(56)(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) {
    return tpl.replace('%TLDS%', re.src_tlds);
  }

  re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) {
      return;
    }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__).filter(function (name) {
    // Filter disabled & fake schemas
    return name.length > 0 && self.__compiled__[name];
  }).map(escapeRE).join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test = RegExp('(^|(?!_)(?:[><\uFF5C]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uFF5C]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest = RegExp('(' + self.re.schema_test.source + ')|' + '(' + self.re.host_fuzzy_test.source + ')|' + '@', 'i');

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end = self.__last_index__,
      text = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}

/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__ = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__ = -1;
  this.__last_index__ = -1; // Next scan position
  this.__schema__ = '';
  this.__text_cache__ = '';

  this.__schemas__ = assign({}, defaultSchemas, schemas);
  this.__compiled__ = {};

  this.__tlds__ = tlds_default;
  this.__tlds_replaced__ = false;

  this.re = {};

  compile(this);
}

/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};

/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};

/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__ = -1;

  if (!text.length) {
    return false;
  }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__ = m[2];
        this.__index__ = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__ = '';
            this.__index__ = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
          this.__schema__ = 'mailto:';
          this.__index__ = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};

/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};

/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};

/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0,
      result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};

/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [list];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list).sort().filter(function (el, idx, arr) {
    return el !== arr[idx - 1];
  }).reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) {
    match.url = 'http://' + match.url;
  }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};

/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {};

module.exports = LinkifyIt;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { className: 'rdw-spinner' },
    _react2.default.createElement('div', { className: 'rdw-bounce1' }),
    _react2.default.createElement('div', { className: 'rdw-bounce2' }),
    _react2.default.createElement('div', { className: 'rdw-bounce3' })
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Editor = __webpack_require__(17);

var _Editor2 = _interopRequireDefault(_Editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Editor: _Editor2.default
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _draftjsUtils = __webpack_require__(5);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _modals = __webpack_require__(22);

var _modals2 = _interopRequireDefault(_modals);

var _focus = __webpack_require__(23);

var _focus2 = _interopRequireDefault(_focus);

var _keyDown = __webpack_require__(11);

var _keyDown2 = _interopRequireDefault(_keyDown);

var _suggestions = __webpack_require__(12);

var _suggestions2 = _interopRequireDefault(_suggestions);

var _BlockStyle = __webpack_require__(24);

var _BlockStyle2 = _interopRequireDefault(_BlockStyle);

var _toolbar = __webpack_require__(8);

var _common = __webpack_require__(6);

var _handlePaste = __webpack_require__(25);

var _controls = __webpack_require__(28);

var _controls2 = _interopRequireDefault(_controls);

var _Link = __webpack_require__(85);

var _Link2 = _interopRequireDefault(_Link);

var _CTABox = __webpack_require__(88);

var _CTABox2 = _interopRequireDefault(_CTABox);

var _Mention = __webpack_require__(91);

var _Mention2 = _interopRequireDefault(_Mention);

var _HashTag = __webpack_require__(97);

var _HashTag2 = _interopRequireDefault(_HashTag);

var _renderer = __webpack_require__(99);

var _renderer2 = _interopRequireDefault(_renderer);

var _defaultToolbar = __webpack_require__(105);

var _defaultToolbar2 = _interopRequireDefault(_defaultToolbar);

var _i18n = __webpack_require__(133);

var _i18n2 = _interopRequireDefault(_i18n);

__webpack_require__(148);

__webpack_require__(149);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WysiwygEditor = function (_Component) {
  _inherits(WysiwygEditor, _Component);

  function WysiwygEditor(props) {
    _classCallCheck(this, WysiwygEditor);

    var _this = _possibleConstructorReturn(this, (WysiwygEditor.__proto__ || Object.getPrototypeOf(WysiwygEditor)).call(this, props));

    _initialiseProps.call(_this);

    var toolbar = (0, _toolbar.mergeRecursive)(_defaultToolbar2.default, props.toolbar);

    _this.state = {
      editorState: undefined,
      editorFocused: false,
      toolbar: toolbar
    };
    var wrapperId = props.wrapperId ? props.wrapperId : Math.floor(Math.random() * 10000);
    _this.wrapperId = "rdw-wrapper-" + wrapperId;
    _this.modalHandler = new _modals2.default();
    _this.focusHandler = new _focus2.default();
    _this.blockRendererFn = (0, _renderer2.default)({
      isReadOnly: _this.isReadOnly,
      isImageAlignmentEnabled: _this.isImageAlignmentEnabled,
      isVideoAlignmentEnabled: _this.isVideoAlignmentEnabled,
      getEditorState: _this.getEditorState,
      onChange: _this.onChange
    }, props.customBlockRenderFunc);
    _this.editorProps = _this.filterEditorProps(props);
    _this.customStyleMap = (0, _draftjsUtils.getCustomStyleMap)();
    return _this;
  }

  _createClass(WysiwygEditor, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.compositeDecorator = this.getCompositeDecorator();
      var editorState = this.createEditorState(this.compositeDecorator);
      (0, _draftjsUtils.extractInlineStyle)(editorState);
      this.setState({
        editorState: editorState
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.modalHandler.init(this.wrapperId);
    }
    // todo: change decorators depending on properties recceived in componentWillReceiveProps.

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var newState = {};
      if (this.props.toolbar !== props.toolbar) {
        var toolbar = (0, _toolbar.mergeRecursive)(_defaultToolbar2.default, props.toolbar);
        newState.toolbar = toolbar;
      }
      if ((0, _common.hasProperty)(props, "editorState") && this.props.editorState !== props.editorState) {
        if (props.editorState) {
          newState.editorState = _draftJs.EditorState.set(props.editorState, {
            decorator: this.compositeDecorator
          });
        } else {
          newState.editorState = _draftJs.EditorState.createEmpty(this.compositeDecorator);
        }
      } else if ((0, _common.hasProperty)(props, "contentState") && this.props.contentState !== props.contentState) {
        if (props.contentState) {
          var newEditorState = this.changeEditorState(props.contentState);
          if (newEditorState) {
            newState.editorState = newEditorState;
          }
        } else {
          newState.editorState = _draftJs.EditorState.createEmpty(this.compositeDecorator);
        }
      }
      if (props.editorState !== this.props.editorState || props.contentState !== this.props.contentState) {
        (0, _draftjsUtils.extractInlineStyle)(newState.editorState);
      }
      this.setState(newState);
      this.editorProps = this.filterEditorProps(props);
      this.customStyleMap = (0, _draftjsUtils.getCustomStyleMap)();
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          editorState = _state.editorState,
          editorFocused = _state.editorFocused,
          toolbar = _state.toolbar;
      var _props = this.props,
          locale = _props.locale,
          _props$localization = _props.localization,
          newLocale = _props$localization.locale,
          translations = _props$localization.translations,
          toolbarCustomButtons = _props.toolbarCustomButtons,
          toolbarOnFocus = _props.toolbarOnFocus,
          toolbarClassName = _props.toolbarClassName,
          toolbarHidden = _props.toolbarHidden,
          editorClassName = _props.editorClassName,
          wrapperClassName = _props.wrapperClassName,
          toolbarStyle = _props.toolbarStyle,
          editorStyle = _props.editorStyle,
          wrapperStyle = _props.wrapperStyle,
          uploadCallback = _props.uploadCallback,
          ariaLabel = _props.ariaLabel;


      var controlProps = {
        modalHandler: this.modalHandler,
        editorState: editorState,
        onChange: this.onChange,
        translations: _extends({}, _i18n2.default[locale || newLocale], translations)
      };
      var toolbarShow = editorFocused || this.focusHandler.isInputFocused() || !toolbarOnFocus;
      return _react2.default.createElement(
        "div",
        {
          id: this.wrapperId,
          className: (0, _classnames2.default)(wrapperClassName, "rdw-editor-wrapper"),
          style: wrapperStyle,
          onClick: this.modalHandler.onEditorClick,
          onBlur: this.onWrapperBlur,
          "aria-label": "rdw-wrapper"
        },
        !toolbarHidden && _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)("rdw-editor-toolbar", toolbarClassName),
            style: _extends({
              visibility: toolbarShow ? "visible" : "hidden"
            }, toolbarStyle),
            onMouseDown: this.preventDefault,
            "aria-label": "rdw-toolbar",
            "aria-hidden": (!editorFocused && toolbarOnFocus).toString(),
            onFocus: this.onToolbarFocus
          },
          toolbar.options.map(function (opt, index) {
            var Control = _controls2.default[opt];
            var config = toolbar[opt];

            if ((opt === "image" || opt === "video") && uploadCallback) {
              config.uploadCallback = uploadCallback;
            }
            return _react2.default.createElement(Control, _extends({ key: index }, controlProps, { config: config }));
          }),
          toolbarCustomButtons && toolbarCustomButtons.map(function (button, index) {
            return _react2.default.cloneElement(button, _extends({ key: index }, controlProps));
          })
        ),
        _react2.default.createElement(
          "div",
          {
            ref: this.setWrapperReference,
            className: (0, _classnames2.default)(editorClassName, "rdw-editor-main"),
            style: editorStyle,
            onClick: this.focusEditor,
            onFocus: this.onEditorFocus,
            onBlur: this.onEditorBlur,
            onKeyDown: _keyDown2.default.onKeyDown,
            onMouseDown: this.onEditorMouseDown
          },
          _react2.default.createElement(_draftJs.Editor, _extends({
            ref: this.setEditorReference,
            onTab: this.onTab,
            onUpArrow: this.onUpDownArrow,
            onDownArrow: this.onUpDownArrow,
            editorState: editorState,
            onChange: this.onChange,
            blockStyleFn: _BlockStyle2.default,
            customStyleMap: (0, _draftjsUtils.getCustomStyleMap)(),
            handleReturn: this.handleReturn,
            handlePastedText: this.handlePastedText,
            blockRendererFn: this.blockRendererFn,
            handleKeyCommand: this.handleKeyCommand,
            ariaLabel: ariaLabel || "rdw-editor",
            blockRenderMap: _draftjsUtils.blockRenderMap
          }, this.editorProps))
        )
      );
    }
  }]);

  return WysiwygEditor;
}(_react.Component);
// todo: evaluate draftjs-utils to move some methods here
// todo: move color near font-family


WysiwygEditor.propTypes = {
  onChange: _propTypes2.default.func,
  onEditorStateChange: _propTypes2.default.func,
  onContentStateChange: _propTypes2.default.func,
  // initialContentState is deprecated
  initialContentState: _propTypes2.default.object,
  defaultContentState: _propTypes2.default.object,
  contentState: _propTypes2.default.object,
  editorState: _propTypes2.default.object,
  defaultEditorState: _propTypes2.default.object,
  toolbarOnFocus: _propTypes2.default.bool,
  spellCheck: _propTypes2.default.bool, // eslint-disable-line react/no-unused-prop-types
  stripPastedStyles: _propTypes2.default.bool, // eslint-disable-line react/no-unused-prop-types
  toolbar: _propTypes2.default.object,
  toolbarCustomButtons: _propTypes2.default.array,
  toolbarClassName: _propTypes2.default.string,
  toolbarHidden: _propTypes2.default.bool,
  locale: _propTypes2.default.string,
  localization: _propTypes2.default.object,
  editorClassName: _propTypes2.default.string,
  wrapperClassName: _propTypes2.default.string,
  toolbarStyle: _propTypes2.default.object,
  editorStyle: _propTypes2.default.object,
  wrapperStyle: _propTypes2.default.object,
  uploadCallback: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onTab: _propTypes2.default.func,
  mention: _propTypes2.default.object,
  hashtag: _propTypes2.default.object,
  textAlignment: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  readOnly: _propTypes2.default.bool,
  tabIndex: _propTypes2.default.number, // eslint-disable-line react/no-unused-prop-types
  placeholder: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  ariaLabel: _propTypes2.default.string,
  ariaOwneeID: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  ariaActiveDescendantID: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  ariaAutoComplete: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  ariaDescribedBy: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  ariaExpanded: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  ariaHasPopup: _propTypes2.default.string, // eslint-disable-line react/no-unused-prop-types
  customBlockRenderFunc: _propTypes2.default.func,
  wrapperId: _propTypes2.default.number,
  customDecorators: _propTypes2.default.array,
  editorRef: _propTypes2.default.func
};
WysiwygEditor.defaultProps = {
  toolbarOnFocus: false,
  toolbarHidden: false,
  stripPastedStyles: false,
  localization: { locale: "en", translations: {} },
  customDecorators: []
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onEditorBlur = function () {
    _this2.setState({
      editorFocused: false
    });
  };

  this.onEditorFocus = function (event) {
    var onFocus = _this2.props.onFocus;

    _this2.setState({
      editorFocused: true
    });
    var editFocused = _this2.focusHandler.isEditorFocused();
    if (onFocus && editFocused) {
      onFocus(event);
    }
  };

  this.onEditorMouseDown = function () {
    _this2.focusHandler.onEditorMouseDown();
  };

  this.onTab = function (event) {
    var onTab = _this2.props.onTab;

    if (!onTab || !onTab(event)) {
      var editorState = (0, _draftjsUtils.changeDepth)(_this2.state.editorState, event.shiftKey ? -1 : 1, 4);
      if (editorState && editorState !== _this2.state.editorState) {
        _this2.onChange(editorState);
        event.preventDefault();
      }
    }
  };

  this.onUpDownArrow = function (event) {
    if (_suggestions2.default.isOpen()) {
      event.preventDefault();
    }
  };

  this.onToolbarFocus = function (event) {
    var onFocus = _this2.props.onFocus;

    if (onFocus && _this2.focusHandler.isToolbarFocused()) {
      onFocus(event);
    }
  };

  this.onWrapperBlur = function (event) {
    var onBlur = _this2.props.onBlur;

    if (onBlur && _this2.focusHandler.isEditorBlur(event)) {
      onBlur(event, _this2.getEditorState());
    }
  };

  this.onChange = function (editorState) {
    var _props2 = _this2.props,
        readOnly = _props2.readOnly,
        onEditorStateChange = _props2.onEditorStateChange;

    if (!readOnly && !((0, _draftjsUtils.getSelectedBlocksType)(editorState) === "atomic" && editorState.getSelection().isCollapsed)) {
      if (onEditorStateChange) {
        onEditorStateChange(editorState, _this2.props.wrapperId);
      }
      if (!(0, _common.hasProperty)(_this2.props, "editorState")) {
        _this2.setState({ editorState: editorState }, _this2.afterChange(editorState));
      } else {
        _this2.afterChange(editorState);
      }
    }
  };

  this.setWrapperReference = function (ref) {
    _this2.wrapper = ref;
  };

  this.setEditorReference = function (ref) {
    if (_this2.props.editorRef) {
      _this2.props.editorRef(ref);
    }
    _this2.editor = ref;
  };

  this.getCompositeDecorator = function () {
    var decorators = [].concat(_toConsumableArray(_this2.props.customDecorators), [(0, _Link2.default)({
      showOpenOptionOnHover: _this2.state.toolbar.link.showOpenOptionOnHover
    }), (0, _CTABox2.default)({
      showOpenOptionOnHover: _this2.state.toolbar.ctaBox.showOpenOptionOnHover
    })]);
    if (_this2.props.mention) {
      decorators.push.apply(decorators, _toConsumableArray((0, _Mention2.default)(_extends({}, _this2.props.mention, {
        onChange: _this2.onChange,
        getEditorState: _this2.getEditorState,
        getSuggestions: _this2.getSuggestions,
        getWrapperRef: _this2.getWrapperRef,
        modalHandler: _this2.modalHandler
      }))));
    }
    if (_this2.props.hashtag) {
      decorators.push((0, _HashTag2.default)(_this2.props.hashtag));
    }
    return new _draftJs.CompositeDecorator(decorators);
  };

  this.getWrapperRef = function () {
    return _this2.wrapper;
  };

  this.getEditorState = function () {
    return _this2.state.editorState;
  };

  this.getSuggestions = function () {
    return _this2.props.mention && _this2.props.mention.suggestions;
  };

  this.afterChange = function (editorState) {
    setTimeout(function () {
      var _props3 = _this2.props,
          onChange = _props3.onChange,
          onContentStateChange = _props3.onContentStateChange;

      if (onChange) {
        onChange((0, _draftJs.convertToRaw)(editorState.getCurrentContent()));
      }
      if (onContentStateChange) {
        onContentStateChange((0, _draftJs.convertToRaw)(editorState.getCurrentContent()));
      }
    });
  };

  this.isReadOnly = function () {
    return _this2.props.readOnly;
  };

  this.isImageAlignmentEnabled = function () {
    return _this2.state.toolbar.image.alignmentEnabled;
  };

  this.isVideoAlignmentEnabled = function () {
    return _this2.state.toolbar.video.alignmentEnabled;
  };

  this.createEditorState = function (compositeDecorator) {
    var editorState = void 0;
    if ((0, _common.hasProperty)(_this2.props, "editorState")) {
      if (_this2.props.editorState) {
        editorState = _draftJs.EditorState.set(_this2.props.editorState, {
          decorator: compositeDecorator
        });
      }
    } else if ((0, _common.hasProperty)(_this2.props, "defaultEditorState")) {
      if (_this2.props.defaultEditorState) {
        editorState = _draftJs.EditorState.set(_this2.props.defaultEditorState, {
          decorator: compositeDecorator
        });
      }
    } else if ((0, _common.hasProperty)(_this2.props, "contentState")) {
      if (_this2.props.contentState) {
        var contentState = (0, _draftJs.convertFromRaw)(_this2.props.contentState);
        editorState = _draftJs.EditorState.createWithContent(contentState, compositeDecorator);
        editorState = _draftJs.EditorState.moveSelectionToEnd(editorState);
      }
    } else if ((0, _common.hasProperty)(_this2.props, "defaultContentState") || (0, _common.hasProperty)(_this2.props, "initialContentState")) {
      var _contentState = _this2.props.defaultContentState || _this2.props.initialContentState;
      if (_contentState) {
        _contentState = (0, _draftJs.convertFromRaw)(_contentState);
        editorState = _draftJs.EditorState.createWithContent(_contentState, compositeDecorator);
        editorState = _draftJs.EditorState.moveSelectionToEnd(editorState);
      }
    }
    if (!editorState) {
      editorState = _draftJs.EditorState.createEmpty(compositeDecorator);
    }
    return editorState;
  };

  this.filterEditorProps = function (props) {
    return (0, _common.filter)(props, ["onChange", "onEditorStateChange", "onContentStateChange", "initialContentState", "defaultContentState", "contentState", "editorState", "defaultEditorState", "locale", "localization", "toolbarOnFocus", "toolbar", "toolbarCustomButtons", "toolbarClassName", "editorClassName", "toolbarHidden", "wrapperClassName", "toolbarStyle", "editorStyle", "wrapperStyle", "uploadCallback", "onFocus", "onBlur", "onTab", "mention", "hashtag", "ariaLabel", "customBlockRenderFunc", "customDecorators", "handlePastedText"]);
  };

  this.changeEditorState = function (contentState) {
    var newContentState = (0, _draftJs.convertFromRaw)(contentState);
    var editorState = _this2.state.editorState;

    editorState = _draftJs.EditorState.push(editorState, newContentState, "insert-characters");
    editorState = _draftJs.EditorState.moveSelectionToEnd(editorState);
    return editorState;
  };

  this.focusEditor = function () {
    setTimeout(function () {
      _this2.editor.focus();
    });
  };

  this.handleKeyCommand = function (command) {
    var _state2 = _this2.state,
        editorState = _state2.editorState,
        inline = _state2.toolbar.inline;

    if (inline && inline.options.indexOf(command) >= 0) {
      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        _this2.onChange(newState);
        return true;
      }
    }
    return false;
  };

  this.handleReturn = function (event) {
    if (_suggestions2.default.isOpen()) {
      return true;
    }
    var editorState = (0, _draftjsUtils.handleNewLine)(_this2.state.editorState, event);
    if (editorState) {
      _this2.onChange(editorState);
      return true;
    }
    return false;
  };

  this.handlePastedText = function (text, html) {
    var editorState = _this2.state.editorState;


    if (_this2.props.handlePastedText) {
      return _this2.props.handlePastedText(text, html, editorState, _this2.onChange);
    }
    if (!_this2.props.stripPastedStyles) {
      return (0, _handlePaste.handlePastedText)(text, html, editorState, _this2.onChange);
    }
    return false;
  };

  this.preventDefault = function (event) {
    if (event.target.tagName === "INPUT" || event.target.tagName === "LABEL") {
      _this2.focusHandler.onInputMouseDown();
    } else {
      event.preventDefault();
    }
  };
};

exports.default = WysiwygEditor;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(19);
var invariant = __webpack_require__(20);
var ReactPropTypesSecret = __webpack_require__(21);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalHandler = function ModalHandler() {
  var _this = this;

  _classCallCheck(this, ModalHandler);

  this.callBacks = [];
  this.suggestionCallback = undefined;
  this.editorFlag = false;
  this.suggestionFlag = false;

  this.closeAllModals = function (event) {
    _this.callBacks.forEach(function (callBack) {
      callBack(event);
    });
  };

  this.init = function (wrapperId) {
    var wrapper = document.getElementById(wrapperId); // eslint-disable-line no-undef
    if (wrapper) {
      wrapper.addEventListener('click', function () {
        _this.editorFlag = true;
      });
    }
    if (document) {
      document.addEventListener('click', function () {
        // eslint-disable-line no-undef
        if (!_this.editorFlag) {
          _this.closeAllModals();
          if (_this.suggestionCallback) {
            _this.suggestionCallback();
          }
        } else {
          _this.editorFlag = false;
        }
      });
      document.addEventListener('keydown', function (event) {
        // eslint-disable-line no-undef
        if (event.key === 'Escape') {
          _this.closeAllModals();
        }
      });
    }
  };

  this.onEditorClick = function () {
    _this.closeModals();
    if (!_this.suggestionFlag && _this.suggestionCallback) {
      _this.suggestionCallback();
    } else {
      _this.suggestionFlag = false;
    }
  };

  this.closeModals = function (event) {
    _this.closeAllModals(event);
  };

  this.registerCallBack = function (callBack) {
    _this.callBacks.push(callBack);
  };

  this.deregisterCallBack = function (callBack) {
    _this.callBacks = _this.callBacks.filter(function (cb) {
      return cb !== callBack;
    });
  };

  this.setSuggestionCallback = function (callBack) {
    _this.suggestionCallback = callBack;
  };

  this.removeSuggestionCallback = function () {
    _this.suggestionCallback = undefined;
  };

  this.onSuggestionClick = function () {
    _this.suggestionFlag = true;
  };
};

exports.default = ModalHandler;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FocusHandler = function FocusHandler() {
  var _this = this;

  _classCallCheck(this, FocusHandler);

  this.inputFocused = false;
  this.editorMouseDown = false;

  this.onEditorMouseDown = function () {
    _this.editorFocused = true;
  };

  this.onInputMouseDown = function () {
    _this.inputFocused = true;
  };

  this.isEditorBlur = function (event) {
    if ((event.target.tagName === 'INPUT' || event.target.tagName === 'LABEL') && !_this.editorFocused) {
      _this.inputFocused = false;
      return true;
    } else if ((event.target.tagName !== 'INPUT' || event.target.tagName !== 'LABEL') && !_this.inputFocused) {
      _this.editorFocused = false;
      return true;
    }
    return false;
  };

  this.isEditorFocused = function () {
    if (!_this.inputFocused) {
      return true;
    }
    _this.inputFocused = false;
    return false;
  };

  this.isToolbarFocused = function () {
    if (!_this.editorFocused) {
      return true;
    }
    _this.editorFocused = false;
    return false;
  };

  this.isInputFocused = function () {
    return _this.inputFocused;
  };
};

exports.default = FocusHandler;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blockStyleFn;
// The function will return block inline styles using block level meta-data
function blockStyleFn(block) {
  var blockAlignment = block.getData() && block.getData().get('text-align');
  if (blockAlignment) {
    return 'rdw-' + blockAlignment + '-aligned-block';
  }
  return '';
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePastedText = undefined;

var _draftjsUtils = __webpack_require__(5);

var _draftJs = __webpack_require__(3);

var _htmlToDraftjs = __webpack_require__(26);

var _htmlToDraftjs2 = _interopRequireDefault(_htmlToDraftjs);

var _immutable = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlePastedText = exports.handlePastedText = function handlePastedText(text, html, editorState, onChange) {
  var selectedBlock = (0, _draftjsUtils.getSelectedBlock)(editorState);
  if (selectedBlock && selectedBlock.type === "code") {
    var contentState = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), text, editorState.getCurrentInlineStyle());
    onChange(_draftJs.EditorState.push(editorState, contentState, "insert-characters"));
    return true;
  } else if (html) {
    var contentBlock = (0, _htmlToDraftjs2.default)(html);
    var _contentState = editorState.getCurrentContent();
    contentBlock.entityMap.forEach(function (value, key) {
      _contentState = _contentState.mergeEntityData(key, value);
    });
    _contentState = _draftJs.Modifier.replaceWithFragment(_contentState, editorState.getSelection(), new _immutable.List(contentBlock.contentBlocks));
    onChange(_draftJs.EditorState.push(editorState, _contentState, "insert-characters"));
    return true;
  }
  return false;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t(__webpack_require__(9), __webpack_require__(3)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.htmlToDraftjs = t(require("immutable"), require("draft-js")) : e.htmlToDraftjs = t(e.immutable, e["draft-js"]);
}("undefined" != typeof self ? self : undefined, function (e, t) {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;var i = n[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
    }var n = {};return t.m = e, t.c = n, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 2);
  }([function (t, n) {
    t.exports = e;
  }, function (e, n) {
    e.exports = t;
  }, function (e, t, n) {
    e.exports = n(3);
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : { default: e };
    }function i(e, t, n, r, o, u) {
      var a = e.nodeName.toLowerCase();if (u) {
        var c = u(a, e);if (c) {
          var s = l.Entity.__create(c.type, c.mutability, c.data || {});return { chunk: (0, d.getAtomicBlockChunk)(s) };
        }
      }if ("#text" === a && "\n" !== e.textContent) return (0, d.createTextChunk)(e, t, o);if ("br" === a) return { chunk: (0, d.getSoftNewlineChunk)() };if ("img" === a && e instanceof HTMLImageElement) {
        var f = {};f.src = e.getAttribute ? e.getAttribute("src") || e.src : e.src, f.alt = e.alt, f.height = e.style.height, f.width = e.style.width, e.style.float && (f.alignment = e.style.float);var m = l.Entity.__create("IMAGE", "MUTABLE", f);return { chunk: (0, d.getAtomicBlockChunk)(m) };
      }if ("iframe" === a && e instanceof HTMLIFrameElement) {
        var k = {};k.src = e.getAttribute ? e.getAttribute("src") || e.src : e.src, k.height = e.height, k.width = e.width;var y = l.Entity.__create("EMBEDDED_LINK", "MUTABLE", k);return { chunk: (0, d.getAtomicBlockChunk)(y) };
      }var b = (0, h.default)(a, r),
          x = void 0;b && ("ul" === a || "ol" === a ? (r = a, n += 1) : ("unordered-list-item" !== b && "ordered-list-item" !== b && (r = "", n = -1), M ? (x = (0, d.getFirstBlockChunk)(b, (0, g.default)(e)), M = !1) : x = (0, d.getBlockDividerChunk)(b, n, (0, g.default)(e)))), x || (x = (0, d.getEmptyChunk)()), t = (0, p.default)(a, e, t);for (var C = e.firstChild; C;) {
        var E = (0, v.default)(C),
            w = i(C, t, n, r, E || o, u),
            _ = w.chunk;x = (0, d.joinChunks)(x, _);C = C.nextSibling;
      }return { chunk: x };
    }function o(e, t) {
      var n = e.trim().replace(x, b),
          r = (0, s.default)(n);return r ? (M = !0, { chunk: i(r, new a.OrderedSet(), -1, "", void 0, t).chunk }) : null;
    }function u(e, t) {
      var n = o(e, t);if (n) {
        var r = n.chunk,
            i = new a.OrderedMap({});r.entities && r.entities.forEach(function (e) {
          e && (i = i.set(e, l.Entity.__get(e)));
        });var u = 0;return { contentBlocks: r.text.split("\r").map(function (e, t) {
            var n = u + e.length,
                i = r && r.inlines.slice(u, n),
                o = r && r.entities.slice(u, n),
                c = new a.List(i.map(function (e, t) {
              var n = { style: e, entity: null };return o[t] && (n.entity = o[t]), l.CharacterMetadata.create(n);
            }));return u = n, new l.ContentBlock({ key: (0, l.genKey)(), type: r && r.blocks[t] && r.blocks[t].type || "unstyled", depth: r && r.blocks[t] && r.blocks[t].depth, data: r && r.blocks[t] && r.blocks[t].data || new a.Map({}), text: e, characterList: c });
          }), entityMap: i };
      }return null;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = u;var l = n(1),
        a = n(0),
        c = n(4),
        s = r(c),
        d = n(5),
        f = n(6),
        h = r(f),
        m = n(7),
        p = r(m),
        k = n(8),
        g = r(k),
        y = n(9),
        v = r(y),
        b = " ",
        x = new RegExp("&nbsp;", "g"),
        M = !0;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = function r(e) {
      var t,
          n = null;return document.implementation && document.implementation.createHTMLDocument && (t = document.implementation.createHTMLDocument("foo"), t.documentElement.innerHTML = e, n = t.getElementsByTagName("body")[0]), n;
    };t.default = r;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.joinChunks = t.getAtomicBlockChunk = t.getBlockDividerChunk = t.getFirstBlockChunk = t.getEmptyChunk = t.getSoftNewlineChunk = t.createTextChunk = t.getWhitespaceChunk = void 0;var r = n(0),
        i = t.getWhitespaceChunk = function (e) {
      return { text: " ", inlines: [new r.OrderedSet()], entities: [e], blocks: [] };
    };t.createTextChunk = function (e, t, n) {
      var r = e.textContent;return "" === r.trim() ? { chunk: i(n) } : { chunk: { text: r, inlines: Array(r.length).fill(t), entities: Array(r.length).fill(n), blocks: [] } };
    }, t.getSoftNewlineChunk = function () {
      return { text: "\n", inlines: [new r.OrderedSet()], entities: new Array(1), blocks: [] };
    }, t.getEmptyChunk = function () {
      return { text: "", inlines: [], entities: [], blocks: [] };
    }, t.getFirstBlockChunk = function (e, t) {
      return { text: "", inlines: [], entities: [], blocks: [{ type: e, depth: 0, data: t || new r.Map({}) }] };
    }, t.getBlockDividerChunk = function (e, t, n) {
      return { text: "\r", inlines: [], entities: [], blocks: [{ type: e, depth: Math.max(0, Math.min(4, t)), data: n || new r.Map({}) }] };
    }, t.getAtomicBlockChunk = function (e) {
      return { text: "\r ", inlines: [new r.OrderedSet()], entities: [e], blocks: [{ type: "atomic", depth: 0, data: new r.Map({}) }] };
    }, t.joinChunks = function (e, t) {
      return { text: e.text + t.text, inlines: e.inlines.concat(t.inlines), entities: e.entities.concat(t.entities), blocks: e.blocks.concat(t.blocks) };
    };
  }, function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = o.filter(function (n) {
        return n.element === e && (!n.wrapper || n.wrapper === t) || n.wrapper === e || n.aliasedElements && n.aliasedElements.indexOf(e) > -1;
      }).keySeq().toSet().toArray();if (1 === n.length) return n[0];
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = r;var i = n(0),
        o = new i.Map({ "header-one": { element: "h1" }, "header-two": { element: "h2" }, "header-three": { element: "h3" }, "header-four": { element: "h4" }, "header-five": { element: "h5" }, "header-six": { element: "h6" }, "unordered-list-item": { element: "li", wrapper: "ul" }, "ordered-list-item": { element: "li", wrapper: "ol" }, blockquote: { element: "blockquote" }, code: { element: "pre" }, atomic: { element: "figure" }, unstyled: { element: "p", aliasedElements: ["div"] } });
  }, function (e, t, n) {
    "use strict";
    function r(e, t, n) {
      var r = i[e],
          o = void 0;if (r) o = n.add(r).toOrderedSet();else if (t instanceof HTMLElement) {
        o = n;var u = t;o = o.withMutations(function (e) {
          var t = u.style.color,
              n = u.style.backgroundColor,
              r = u.style.fontSize,
              i = u.style.fontFamily.replace(/^"|"$/g, "");t && e.add("color-" + t.replace(/ /g, "")), n && e.add("bgcolor-" + n.replace(/ /g, "")), r && e.add("fontsize-" + r.replace(/px$/g, "")), i && e.add("fontfamily-" + i);
        }).toOrderedSet();
      }return o;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = r;var i = { code: "CODE", del: "STRIKETHROUGH", em: "ITALIC", strong: "BOLD", ins: "UNDERLINE", sub: "SUBSCRIPT", sup: "SUPERSCRIPT" };
  }, function (e, t, n) {
    "use strict";
    function r(e) {
      if (e.style.textAlign) return new i.Map({ "text-align": e.style.textAlign });
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.default = r;var i = n(0);
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(1),
        i = function i(e) {
      var t = void 0;if (e instanceof HTMLAnchorElement) {
        var n = {};e.dataset && void 0 !== e.dataset.mention ? (n.url = e.href, n.text = e.innerHTML, n.value = e.dataset.value, t = r.Entity.__create("MENTION", "IMMUTABLE", n)) : (n.url = e.getAttribute ? e.getAttribute("href") || e.href : e.href, n.title = e.innerHTML, n.targetOption = e.target, t = r.Entity.__create("LINK", "MUTABLE", n));
      }return t;
    };t.default = i;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Inline = __webpack_require__(29);

var _Inline2 = _interopRequireDefault(_Inline);

var _BlockType = __webpack_require__(37);

var _BlockType2 = _interopRequireDefault(_BlockType);

var _FontSize = __webpack_require__(40);

var _FontSize2 = _interopRequireDefault(_FontSize);

var _FontFamily = __webpack_require__(43);

var _FontFamily2 = _interopRequireDefault(_FontFamily);

var _List = __webpack_require__(46);

var _List2 = _interopRequireDefault(_List);

var _TextAlign = __webpack_require__(49);

var _TextAlign2 = _interopRequireDefault(_TextAlign);

var _ColorPicker = __webpack_require__(52);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _Link = __webpack_require__(55);

var _Link2 = _interopRequireDefault(_Link);

var _CTABox = __webpack_require__(63);

var _CTABox2 = _interopRequireDefault(_CTABox);

var _Embedded = __webpack_require__(66);

var _Embedded2 = _interopRequireDefault(_Embedded);

var _Emoji = __webpack_require__(69);

var _Emoji2 = _interopRequireDefault(_Emoji);

var _Image = __webpack_require__(72);

var _Image2 = _interopRequireDefault(_Image);

var _Video = __webpack_require__(76);

var _Video2 = _interopRequireDefault(_Video);

var _Remove = __webpack_require__(79);

var _Remove2 = _interopRequireDefault(_Remove);

var _History = __webpack_require__(82);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  inline: _Inline2.default,
  blockType: _BlockType2.default,
  fontSize: _FontSize2.default,
  fontFamily: _FontFamily2.default,
  list: _List2.default,
  textAlign: _TextAlign2.default,
  colorPicker: _ColorPicker2.default,
  link: _Link2.default,
  ctaBox: _CTABox2.default,
  embedded: _Embedded2.default,
  emoji: _Emoji2.default,
  image: _Image2.default,
  video: _Video2.default,
  remove: _Remove2.default,
  history: _History2.default
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftjsUtils = __webpack_require__(5);

var _draftJs = __webpack_require__(3);

var _common = __webpack_require__(6);

var _Component2 = __webpack_require__(30);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Component) {
  _inherits(Inline, _Component);

  function Inline() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Inline);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Inline.__proto__ || Object.getPrototypeOf(Inline)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentStyles: {}
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.toggleInlineStyle = function (style) {
      var newStyle = style === 'monospace' ? 'CODE' : style.toUpperCase();
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      var newState = _draftJs.RichUtils.toggleInlineStyle(editorState, newStyle);
      if (style === 'subscript' || style === 'superscript') {
        var removeStyle = style === 'subscript' ? 'SUPERSCRIPT' : 'SUBSCRIPT';
        var contentState = _draftJs.Modifier.removeInlineStyle(newState.getCurrentContent(), newState.getSelection(), removeStyle);
        newState = _draftJs.EditorState.push(newState, contentState, 'change-inline-style');
      }
      if (newState) {
        onChange(newState);
      }
    }, _this.changeKeys = function (style) {
      if (style) {
        var st = {};
        (0, _common.forEach)(style, function (key, value) {
          st[key === 'CODE' ? 'monospace' : key.toLowerCase()] = value;
        });
        return st;
      }
      return undefined;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Inline, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({
          currentStyles: this.changeKeys((0, _draftjsUtils.getSelectionInlineStyle)(editorState))
        });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        this.setState({
          currentStyles: this.changeKeys((0, _draftjsUtils.getSelectionInlineStyle)(properties.editorState))
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var _state = this.state,
          expanded = _state.expanded,
          currentStyles = _state.currentStyles;

      var InlineComponent = config.component || _Component3.default;
      return _react2.default.createElement(InlineComponent, {
        config: config,
        translations: translations,
        currentState: currentStyles,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onChange: this.toggleInlineStyle
      });
    }
  }]);

  return Inline;
}(_react.Component);
// make subscript less low


Inline.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  editorState: _propTypes2.default.object.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = Inline;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _toolbar = __webpack_require__(8);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

var _Dropdown = __webpack_require__(7);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Inline = function (_Component) {
  _inherits(Inline, _Component);

  function Inline() {
    _classCallCheck(this, Inline);

    return _possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  _createClass(Inline, [{
    key: 'renderInFlatList',
    value: function renderInFlatList() {
      var _props = this.props,
          config = _props.config,
          currentState = _props.currentState,
          onChange = _props.onChange,
          translations = _props.translations;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rdw-inline-wrapper', config.className), 'aria-label': 'rdw-inline-control' },
        config.options.map(function (style, index) {
          return _react2.default.createElement(
            _Option2.default,
            {
              key: index,
              value: style,
              onClick: onChange,
              className: (0, _classnames2.default)(config[style].className),
              active: currentState[style] === true || style === 'MONOSPACE' && currentState.CODE,
              title: config[style].title || translations['components.controls.inline.' + style]
            },
            _react2.default.createElement('img', {
              alt: '',
              src: config[style].icon
            })
          );
        })
      );
    }
  }, {
    key: 'renderInDropDown',
    value: function renderInDropDown() {
      var _props2 = this.props,
          config = _props2.config,
          expanded = _props2.expanded,
          doExpand = _props2.doExpand,
          onExpandEvent = _props2.onExpandEvent,
          doCollapse = _props2.doCollapse,
          currentState = _props2.currentState,
          onChange = _props2.onChange,
          translations = _props2.translations;
      var className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;

      return _react2.default.createElement(
        _Dropdown.Dropdown,
        {
          className: (0, _classnames2.default)('rdw-inline-dropdown', className),
          optionWrapperClassName: (0, _classnames2.default)(dropdownClassName),
          onChange: onChange,
          expanded: expanded,
          doExpand: doExpand,
          doCollapse: doCollapse,
          onExpandEvent: onExpandEvent,
          'aria-label': 'rdw-inline-control',
          title: title
        },
        _react2.default.createElement('img', {
          src: (0, _toolbar.getFirstIcon)(config),
          alt: ''
        }),
        config.options.map(function (style, index) {
          return _react2.default.createElement(
            _Dropdown.DropdownOption,
            {
              key: index,
              value: style,
              className: (0, _classnames2.default)('rdw-inline-dropdownoption', config[style].className),
              active: currentState[style] === true || style === 'MONOSPACE' && currentState.CODE,
              title: config[style].title || translations['components.controls.inline.' + style]
            },
            _react2.default.createElement('img', {
              src: config[style].icon,
              alt: ''
            })
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }
      return this.renderInFlatList();
    }
  }]);

  return Inline;
}(_react.Component);

// todo: make subscript less low


Inline.propTypes = {
  expanded: _propTypes2.default.bool,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onExpandEvent: _propTypes2.default.func,
  config: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = Inline;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-option-wrapper":"rdw-option-wrapper","rdw-option-active":"rdw-option-active","rdw-option-disabled":"rdw-option-disabled"};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(33);

var _common = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      highlighted: -1
    }, _this.onChange = function (value) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(value);
      }
      _this.toggleExpansion();
    }, _this.setHighlighted = function (highlighted) {
      _this.setState({
        highlighted: highlighted
      });
    }, _this.toggleExpansion = function () {
      var _this$props = _this.props,
          doExpand = _this$props.doExpand,
          doCollapse = _this$props.doCollapse,
          expanded = _this$props.expanded;

      if (expanded) {
        doCollapse();
      } else {
        doExpand();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.expanded && !props.expanded) {
        this.setState({
          highlighted: -1
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          expanded = _props.expanded,
          children = _props.children,
          className = _props.className,
          optionWrapperClassName = _props.optionWrapperClassName,
          ariaLabel = _props.ariaLabel,
          onExpandEvent = _props.onExpandEvent,
          title = _props.title;
      var highlighted = this.state.highlighted;

      var options = children.slice(1, children.length);
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-dropdown-wrapper', className),
          'aria-expanded': expanded,
          'aria-label': ariaLabel || 'rdw-dropdown'
        },
        _react2.default.createElement(
          'a',
          {
            className: 'rdw-dropdown-selectedtext',
            onClick: onExpandEvent,
            title: title
          },
          children[0],
          _react2.default.createElement('div', {
            className: (0, _classnames2.default)({
              'rdw-dropdown-carettoclose': expanded,
              'rdw-dropdown-carettoopen': !expanded
            })
          })
        ),
        expanded ? _react2.default.createElement(
          'ul',
          {
            className: (0, _classnames2.default)('rdw-dropdown-optionwrapper', optionWrapperClassName),
            onClick: _common.stopPropagation
          },
          _react2.default.Children.map(options, function (option, index) {
            var temp = option && _react2.default.cloneElement(option, {
              onSelect: _this2.onChange,
              highlighted: highlighted === index,
              setHighlighted: _this2.setHighlighted,
              index: index
            });
            return temp;
          })
        ) : undefined
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  children: _propTypes2.default.any,
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string,
  expanded: _propTypes2.default.bool,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onExpandEvent: _propTypes2.default.func,
  optionWrapperClassName: _propTypes2.default.string,
  ariaLabel: _propTypes2.default.string,
  title: _propTypes2.default.string
};
exports.default = Dropdown;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-dropdown-wrapper":"rdw-dropdown-wrapper","rdw-dropdown-carettoopen":"rdw-dropdown-carettoopen","rdw-dropdown-carettoclose":"rdw-dropdown-carettoclose","rdw-dropdown-selectedtext":"rdw-dropdown-selectedtext","rdw-dropdown-optionwrapper":"rdw-dropdown-optionwrapper"};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDownOption = function (_Component) {
  _inherits(DropDownOption, _Component);

  function DropDownOption() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DropDownOption);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropDownOption.__proto__ || Object.getPrototypeOf(DropDownOption)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (event) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          onClick = _this$props.onClick,
          value = _this$props.value,
          disabled = _this$props.disabled;

      if (!disabled) {
        if (onSelect) {
          onSelect(value);
        }
        if (onClick) {
          event.stopPropagation();
          onClick(value);
        }
      }
    }, _this.setHighlighted = function () {
      var _this$props2 = _this.props,
          setHighlighted = _this$props2.setHighlighted,
          index = _this$props2.index;

      setHighlighted(index);
    }, _this.resetHighlighted = function () {
      var setHighlighted = _this.props.setHighlighted;

      setHighlighted(-1);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DropDownOption, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          active = _props.active,
          disabled = _props.disabled,
          highlighted = _props.highlighted,
          className = _props.className,
          activeClassName = _props.activeClassName,
          disabledClassName = _props.disabledClassName,
          highlightedClassName = _props.highlightedClassName,
          title = _props.title;

      return _react2.default.createElement(
        'li',
        {
          className: (0, _classnames2.default)('rdw-dropdownoption-default', className, (_classNames = {}, _defineProperty(_classNames, 'rdw-dropdownoption-active ' + activeClassName, active), _defineProperty(_classNames, 'rdw-dropdownoption-highlighted ' + highlightedClassName, highlighted), _defineProperty(_classNames, 'rdw-dropdownoption-disabled ' + disabledClassName, disabled), _classNames)),
          onMouseEnter: this.setHighlighted,
          onMouseLeave: this.resetHighlighted,
          onClick: this.onClick,
          title: title
        },
        children
      );
    }
  }]);

  return DropDownOption;
}(_react.Component);
// todo: review classname use above.


DropDownOption.propTypes = {
  children: _propTypes2.default.any,
  value: _propTypes2.default.any,
  onClick: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  setHighlighted: _propTypes2.default.func,
  index: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  highlighted: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  activeClassName: _propTypes2.default.string,
  disabledClassName: _propTypes2.default.string,
  highlightedClassName: _propTypes2.default.string,
  title: _propTypes2.default.string
};
exports.default = DropDownOption;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-dropdownoption-default":"rdw-dropdownoption-default","rdw-dropdownoption-highlighted":"rdw-dropdownoption-highlighted","rdw-dropdownoption-active":"rdw-dropdownoption-active","rdw-dropdownoption-disabled":"rdw-dropdownoption-disabled"};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-inline-wrapper":"rdw-inline-wrapper","rdw-inline-dropdown":"rdw-inline-dropdown","rdw-inline-dropdownoption":"rdw-inline-dropdownoption"};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftjsUtils = __webpack_require__(5);

var _draftJs = __webpack_require__(3);

var _Component2 = __webpack_require__(38);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockType = function (_Component) {
  _inherits(BlockType, _Component);

  function BlockType() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BlockType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BlockType.__proto__ || Object.getPrototypeOf(BlockType)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false,
      currentBlockType: 'unstyled'
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.blocksTypes = [{ label: 'Normal', style: 'unstyled' }, { label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'H4', style: 'header-four' }, { label: 'H5', style: 'header-five' }, { label: 'H6', style: 'header-six' }, { label: 'Blockquote', style: 'blockquote' }, { label: 'Code', style: 'code' }], _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.toggleBlockType = function (blockType) {
      var blockTypeValue = _this.blocksTypes.find(function (bt) {
        return bt.label === blockType;
      }).style;
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      var newState = _draftJs.RichUtils.toggleBlockType(editorState, blockTypeValue);
      if (newState) {
        onChange(newState);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BlockType, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({
          currentBlockType: (0, _draftjsUtils.getSelectedBlocksType)(editorState)
        });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        this.setState({
          currentBlockType: (0, _draftjsUtils.getSelectedBlocksType)(properties.editorState)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var _state = this.state,
          expanded = _state.expanded,
          currentBlockType = _state.currentBlockType;

      var BlockTypeComponent = config.component || _Component3.default;
      var blockType = this.blocksTypes.find(function (bt) {
        return bt.style === currentBlockType;
      });
      return _react2.default.createElement(BlockTypeComponent, {
        config: config,
        translations: translations,
        currentState: { blockType: blockType && blockType.label },
        onChange: this.toggleBlockType,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return BlockType;
}(_react.Component);

BlockType.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  editorState: _propTypes2.default.object,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = BlockType;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

var _Dropdown = __webpack_require__(7);

__webpack_require__(39);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent(props) {
    _classCallCheck(this, LayoutComponent);

    var _this = _possibleConstructorReturn(this, (LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call(this, props));

    _this.getBlockTypes = function (translations) {
      return [{ label: 'Normal', displayName: translations['components.controls.blocktype.normal'] }, { label: 'H1', displayName: translations['components.controls.blocktype.h1'] }, { label: 'H2', displayName: translations['components.controls.blocktype.h2'] }, { label: 'H3', displayName: translations['components.controls.blocktype.h3'] }, { label: 'H4', displayName: translations['components.controls.blocktype.h4'] }, { label: 'H5', displayName: translations['components.controls.blocktype.h5'] }, { label: 'H6', displayName: translations['components.controls.blocktype.h6'] }, { label: 'Blockquote', displayName: translations['components.controls.blocktype.blockquote'] }, { label: 'Code', displayName: translations['components.controls.blocktype.code'] }];
    };

    _this.state = {
      blockTypes: _this.getBlockTypes(props.translations)
    };
    return _this;
  }

  _createClass(LayoutComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (this.props.translations !== properties.translations) {
        this.setState({
          blockTypes: this.getBlockTypes(properties.translations)
        });
      }
    }
  }, {
    key: 'renderFlat',
    value: function renderFlat(blocks) {
      var _props = this.props,
          className = _props.config.className,
          onChange = _props.onChange,
          blockType = _props.currentState.blockType;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rdw-inline-wrapper', className) },
        blocks.map(function (block, index) {
          return _react2.default.createElement(
            _Option2.default,
            {
              key: index,
              value: block.label,
              active: blockType === block.label,
              onClick: onChange
            },
            block.displayName
          );
        })
      );
    }
  }, {
    key: 'renderInDropdown',
    value: function renderInDropdown(blocks) {
      var _props2 = this.props,
          _props2$config = _props2.config,
          className = _props2$config.className,
          dropdownClassName = _props2$config.dropdownClassName,
          title = _props2$config.title,
          blockType = _props2.currentState.blockType,
          expanded = _props2.expanded,
          doExpand = _props2.doExpand,
          onExpandEvent = _props2.onExpandEvent,
          doCollapse = _props2.doCollapse,
          onChange = _props2.onChange,
          translations = _props2.translations;
      var blockTypes = this.state.blockTypes;

      var currentBlockData = blockTypes.filter(function (blk) {
        return blk.label === blockType;
      });
      var currentLabel = currentBlockData && currentBlockData[0] && currentBlockData[0].displayName;
      return _react2.default.createElement(
        'div',
        { className: 'rdw-block-wrapper', 'aria-label': 'rdw-block-control' },
        _react2.default.createElement(
          _Dropdown.Dropdown,
          {
            className: (0, _classnames2.default)('rdw-block-dropdown', className),
            optionWrapperClassName: (0, _classnames2.default)(dropdownClassName),
            onChange: onChange,
            expanded: expanded,
            doExpand: doExpand,
            doCollapse: doCollapse,
            onExpandEvent: onExpandEvent,
            title: title || translations['components.controls.blocktype.blocktype']
          },
          _react2.default.createElement(
            'span',
            null,
            currentLabel || translations['components.controls.blocktype.blocktype']
          ),
          blocks.map(function (block, index) {
            return _react2.default.createElement(
              _Dropdown.DropdownOption,
              {
                active: blockType === block.label,
                value: block.label,
                key: index
              },
              block.displayName
            );
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var config = this.props.config;
      var inDropdown = config.inDropdown;
      var blockTypes = this.state.blockTypes;

      var blocks = blockTypes.filter(function (_ref) {
        var label = _ref.label;
        return config.options.includes(label);
      });
      return inDropdown ? this.renderInDropdown(blocks) : this.renderFlat(blocks);
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  onExpandEvent: _propTypes2.default.func,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-block-wrapper":"rdw-block-wrapper","rdw-block-dropdown":"rdw-block-dropdown"};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftjsUtils = __webpack_require__(5);

var _Component2 = __webpack_require__(41);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FontSize = function (_Component) {
  _inherits(FontSize, _Component);

  function FontSize() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FontSize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FontSize.__proto__ || Object.getPrototypeOf(FontSize)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: undefined,
      currentFontSize: undefined
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.toggleFontSize = function (fontSize) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      var newState = (0, _draftjsUtils.toggleCustomInlineStyle)(editorState, 'fontSize', fontSize);
      if (newState) {
        onChange(newState);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FontSize, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({
          currentFontSize: (0, _draftjsUtils.getSelectionCustomInlineStyle)(editorState, ['FONTSIZE']).FONTSIZE
        });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        this.setState({
          currentFontSize: (0, _draftjsUtils.getSelectionCustomInlineStyle)(properties.editorState, ['FONTSIZE']).FONTSIZE
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var _state = this.state,
          expanded = _state.expanded,
          currentFontSize = _state.currentFontSize;

      var FontSizeComponent = config.component || _Component3.default;
      var fontSize = currentFontSize && Number(currentFontSize.substring(9));
      return _react2.default.createElement(FontSizeComponent, {
        config: config,
        translations: translations,
        currentState: { fontSize: fontSize },
        onChange: this.toggleFontSize,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return FontSize;
}(_react.Component);

FontSize.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  editorState: _propTypes2.default.object,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = FontSize;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Dropdown = __webpack_require__(7);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      defaultFontSize: undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var editorElm = document.getElementsByClassName('DraftEditor-root');
      if (editorElm && editorElm.length > 0) {
        var editorStyles = window.getComputedStyle(editorElm[0]);
        var defaultFontSize = editorStyles.getPropertyValue('font-size');
        defaultFontSize = defaultFontSize.substring(0, defaultFontSize.length - 2);
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
          defaultFontSize: defaultFontSize
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$config = _props.config,
          icon = _props$config.icon,
          className = _props$config.className,
          dropdownClassName = _props$config.dropdownClassName,
          options = _props$config.options,
          title = _props$config.title,
          onChange = _props.onChange,
          expanded = _props.expanded,
          doCollapse = _props.doCollapse,
          onExpandEvent = _props.onExpandEvent,
          doExpand = _props.doExpand,
          translations = _props.translations;
      var currentFontSize = this.props.currentState.fontSize;
      var defaultFontSize = this.state.defaultFontSize;

      defaultFontSize = Number(defaultFontSize);
      currentFontSize = currentFontSize || options && options.indexOf(defaultFontSize) >= 0 && defaultFontSize;
      return _react2.default.createElement(
        'div',
        { className: 'rdw-fontsize-wrapper', 'aria-label': 'rdw-font-size-control' },
        _react2.default.createElement(
          _Dropdown.Dropdown,
          {
            className: (0, _classnames2.default)('rdw-fontsize-dropdown', className),
            optionWrapperClassName: (0, _classnames2.default)(dropdownClassName),
            onChange: onChange,
            expanded: expanded,
            doExpand: doExpand,
            doCollapse: doCollapse,
            onExpandEvent: onExpandEvent,
            title: title || translations['components.controls.fontsize.fontsize']
          },
          currentFontSize ? _react2.default.createElement(
            'span',
            null,
            currentFontSize
          ) : _react2.default.createElement('img', { src: icon, alt: '' }),
          options.map(function (size, index) {
            return _react2.default.createElement(
              _Dropdown.DropdownOption,
              {
                className: 'rdw-fontsize-option',
                active: currentFontSize === size,
                value: size,
                key: index
              },
              size
            );
          })
        )
      );
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  onExpandEvent: _propTypes2.default.func,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-fontsize-wrapper":"rdw-fontsize-wrapper","rdw-fontsize-dropdown":"rdw-fontsize-dropdown","rdw-fontsize-option":"rdw-fontsize-option"};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftjsUtils = __webpack_require__(5);

var _Component2 = __webpack_require__(44);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FontFamily = function (_Component) {
  _inherits(FontFamily, _Component);

  function FontFamily() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FontFamily);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FontFamily.__proto__ || Object.getPrototypeOf(FontFamily)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: undefined,
      currentFontFamily: undefined
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.toggleFontFamily = function (fontFamily) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      var newState = (0, _draftjsUtils.toggleCustomInlineStyle)(editorState, 'fontFamily', fontFamily);
      if (newState) {
        onChange(newState);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FontFamily, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({
          currentFontFamily: (0, _draftjsUtils.getSelectionCustomInlineStyle)(editorState, ['FONTFAMILY']).FONTFAMILY
        });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        this.setState({
          currentFontFamily: (0, _draftjsUtils.getSelectionCustomInlineStyle)(properties.editorState, ['FONTFAMILY']).FONTFAMILY
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var _state = this.state,
          expanded = _state.expanded,
          currentFontFamily = _state.currentFontFamily;

      var FontFamilyComponent = config.component || _Component3.default;
      var fontFamily = currentFontFamily && currentFontFamily.substring(11);
      return _react2.default.createElement(FontFamilyComponent, {
        translations: translations,
        config: config,
        currentState: { fontFamily: fontFamily },
        onChange: this.toggleFontFamily,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return FontFamily;
}(_react.Component);

FontFamily.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  editorState: _propTypes2.default.object,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = FontFamily;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Dropdown = __webpack_require__(7);

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      defaultFontFamily: undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var editorElm = document.getElementsByClassName('DraftEditor-root');
      if (editorElm && editorElm.length > 0) {
        var editorStyles = window.getComputedStyle(editorElm[0]);
        var defaultFontFamily = editorStyles.getPropertyValue('font-family');
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
          defaultFontFamily: defaultFontFamily
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultFontFamily = this.state.defaultFontFamily;
      var _props = this.props,
          _props$config = _props.config,
          className = _props$config.className,
          dropdownClassName = _props$config.dropdownClassName,
          options = _props$config.options,
          title = _props$config.title,
          translations = _props.translations,
          onChange = _props.onChange,
          expanded = _props.expanded,
          doCollapse = _props.doCollapse,
          onExpandEvent = _props.onExpandEvent,
          doExpand = _props.doExpand;
      var currentFontFamily = this.props.currentState.fontFamily;

      currentFontFamily = currentFontFamily || options && defaultFontFamily && options.some(function (opt) {
        return opt.toLowerCase() === defaultFontFamily.toLowerCase();
      }) && defaultFontFamily;
      return _react2.default.createElement(
        'div',
        { className: 'rdw-fontfamily-wrapper', 'aria-label': 'rdw-font-family-control' },
        _react2.default.createElement(
          _Dropdown.Dropdown,
          {
            className: (0, _classnames2.default)('rdw-fontfamily-dropdown', className),
            optionWrapperClassName: (0, _classnames2.default)('rdw-fontfamily-optionwrapper', dropdownClassName),
            onChange: onChange,
            expanded: expanded,
            doExpand: doExpand,
            doCollapse: doCollapse,
            onExpandEvent: onExpandEvent,
            title: title || translations['components.controls.fontfamily.fontfamily']
          },
          _react2.default.createElement(
            'span',
            { className: 'rdw-fontfamily-placeholder' },
            currentFontFamily || translations['components.controls.fontfamily.fontfamily']
          ),
          options.map(function (family, index) {
            return _react2.default.createElement(
              _Dropdown.DropdownOption,
              {
                active: currentFontFamily === family,
                value: family,
                key: index
              },
              family
            );
          })
        )
      );
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  onExpandEvent: _propTypes2.default.func,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-fontfamily-wrapper":"rdw-fontfamily-wrapper","rdw-fontfamily-dropdown":"rdw-fontfamily-dropdown","rdw-fontfamily-placeholder":"rdw-fontfamily-placeholder","rdw-fontfamily-optionwrapper":"rdw-fontfamily-optionwrapper"};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _draftjsUtils = __webpack_require__(5);

var _Component2 = __webpack_require__(47);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false,
      currentBlock: undefined
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.onChange = function (value) {
      if (value === 'unordered') {
        _this.toggleBlockType('unordered-list-item');
      } else if (value === 'ordered') {
        _this.toggleBlockType('ordered-list-item');
      } else if (value === 'indent') {
        _this.adjustDepth(1);
      } else {
        _this.adjustDepth(-1);
      }
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.toggleBlockType = function (blockType) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          editorState = _this$props.editorState;

      var newState = _draftJs.RichUtils.toggleBlockType(editorState, blockType);
      if (newState) {
        onChange(newState);
      }
    }, _this.adjustDepth = function (adjustment) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          editorState = _this$props2.editorState;

      var newState = (0, _draftjsUtils.changeDepth)(editorState, adjustment, 4);
      if (newState) {
        onChange(newState);
      }
    }, _this.isIndentDisabled = function () {
      var editorState = _this.props.editorState;
      var currentBlock = _this.state.currentBlock;

      var previousBlock = (0, _draftjsUtils.getBlockBeforeSelectedBlock)(editorState);
      if (!previousBlock || !(0, _draftjsUtils.isListBlock)(currentBlock) || previousBlock.get('type') !== currentBlock.get('type') || previousBlock.get('depth') < currentBlock.get('depth')) {
        return true;
      }
      return false;
    }, _this.isOutdentDisabled = function () {
      var currentBlock = _this.state.currentBlock;

      return !currentBlock || !(0, _draftjsUtils.isListBlock)(currentBlock) || currentBlock.get('depth') <= 0;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(List, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({ currentBlock: (0, _draftjsUtils.getSelectedBlock)(editorState) });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        var currentBlock = (0, _draftjsUtils.getSelectedBlock)(properties.editorState);
        this.setState({ currentBlock: (0, _draftjsUtils.getSelectedBlock)(properties.editorState) });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var _state = this.state,
          expanded = _state.expanded,
          currentBlock = _state.currentBlock;

      var ListComponent = config.component || _Component3.default;
      var listType = void 0;
      if (currentBlock.get('type') === 'unordered-list-item') {
        listType = 'unordered';
      } else if (currentBlock.get('type') === 'ordered-list-item') {
        listType = 'ordered';
      }
      var indentDisabled = this.isIndentDisabled();
      var outdentDisabled = this.isOutdentDisabled();
      return _react2.default.createElement(ListComponent, {
        config: config,
        translations: translations,
        currentState: { listType: listType },
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onChange: this.onChange,
        indentDisabled: indentDisabled,
        outdentDisabled: outdentDisabled
      });
    }
  }]);

  return List;
}(_react.Component);

List.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  editorState: _propTypes2.default.object.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = List;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _toolbar = __webpack_require__(8);

var _Dropdown = __webpack_require__(7);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.options = ['unordered', 'ordered', 'indent', 'outdent'], _this.toggleBlockType = function (blockType) {
      var onChange = _this.props.onChange;

      onChange(blockType);
    }, _this.indent = function () {
      var onChange = _this.props.onChange;

      onChange('indent');
    }, _this.outdent = function () {
      var onChange = _this.props.onChange;

      onChange('outdent');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'renderInFlatList',


    // todo: evaluate refactoring this code to put a loop there and in other places also in code
    // hint: it will require moving click handlers
    value: function renderInFlatList() {
      var _props = this.props,
          config = _props.config,
          listType = _props.currentState.listType,
          translations = _props.translations,
          indentDisabled = _props.indentDisabled,
          outdentDisabled = _props.outdentDisabled;
      var options = config.options,
          unordered = config.unordered,
          ordered = config.ordered,
          indent = config.indent,
          outdent = config.outdent,
          className = config.className;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rdw-list-wrapper', className), 'aria-label': 'rdw-list-control' },
        options.indexOf('unordered') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'unordered',
            onClick: this.toggleBlockType,
            className: (0, _classnames2.default)(unordered.className),
            active: listType === 'unordered',
            title: unordered.title || translations['components.controls.list.unordered']
          },
          _react2.default.createElement('img', {
            src: unordered.icon,
            alt: ''
          })
        ),
        options.indexOf('ordered') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'ordered',
            onClick: this.toggleBlockType,
            className: (0, _classnames2.default)(ordered.className),
            active: listType === 'ordered',
            title: ordered.title || translations['components.controls.list.ordered']
          },
          _react2.default.createElement('img', {
            src: ordered.icon,
            alt: ''
          })
        ),
        options.indexOf('indent') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            onClick: this.indent,
            disabled: indentDisabled,
            className: (0, _classnames2.default)(indent.className),
            title: indent.title || translations['components.controls.list.indent']
          },
          _react2.default.createElement('img', {
            src: indent.icon,
            alt: ''
          })
        ),
        options.indexOf('outdent') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            onClick: this.outdent,
            disabled: outdentDisabled,
            className: (0, _classnames2.default)(outdent.className),
            title: outdent.title || translations['components.controls.list.outdent']
          },
          _react2.default.createElement('img', {
            src: outdent.icon,
            alt: ''
          })
        )
      );
    }
  }, {
    key: 'renderInDropDown',
    value: function renderInDropDown() {
      var _this2 = this;

      var _props2 = this.props,
          config = _props2.config,
          expanded = _props2.expanded,
          doCollapse = _props2.doCollapse,
          doExpand = _props2.doExpand,
          onExpandEvent = _props2.onExpandEvent,
          onChange = _props2.onChange,
          listType = _props2.currentState.listType,
          translations = _props2.translations;
      var options = config.options,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;

      return _react2.default.createElement(
        _Dropdown.Dropdown,
        {
          className: (0, _classnames2.default)('rdw-list-dropdown', className),
          optionWrapperClassName: (0, _classnames2.default)(dropdownClassName),
          onChange: onChange,
          expanded: expanded,
          doExpand: doExpand,
          doCollapse: doCollapse,
          onExpandEvent: onExpandEvent,
          'aria-label': 'rdw-list-control',
          title: title || translations['components.controls.list.list']
        },
        _react2.default.createElement('img', {
          src: (0, _toolbar.getFirstIcon)(config),
          alt: ''
        }),
        this.options.filter(function (option) {
          return options.indexOf(option) >= 0;
        }).map(function (option, index) {
          return _react2.default.createElement(
            _Dropdown.DropdownOption,
            {
              key: index,
              value: option,
              disabled: _this2.props[option + 'Disabled'],
              className: (0, _classnames2.default)('rdw-list-dropdownOption', config[option].className),
              active: listType === option,
              title: config[option].title || translations['components.controls.list.' + option]
            },
            _react2.default.createElement('img', {
              src: config[option].icon,
              alt: ''
            })
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }
      return this.renderInFlatList();
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onExpandEvent: _propTypes2.default.func,
  config: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object,
  indentDisabled: _propTypes2.default.bool,
  outdentDisabled: _propTypes2.default.bool
};
exports.default = LayoutComponent;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-list-wrapper":"rdw-list-wrapper","rdw-list-dropdown":"rdw-list-dropdown","rdw-list-dropdownOption":"rdw-list-dropdownOption"};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftjsUtils = __webpack_require__(5);

var _Component2 = __webpack_require__(50);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextAlign = function (_Component) {
  _inherits(TextAlign, _Component);

  function TextAlign() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextAlign);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextAlign.__proto__ || Object.getPrototypeOf(TextAlign)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentTextAlignment: undefined
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.addBlockAlignmentData = function (value) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var currentTextAlignment = _this.state.currentTextAlignment;

      if (currentTextAlignment !== value) {
        onChange((0, _draftjsUtils.setBlockData)(editorState, { 'text-align': value }));
      } else {
        onChange((0, _draftjsUtils.setBlockData)(editorState, { 'text-align': undefined }));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextAlign, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState !== this.props.editorState) {
        this.setState({
          currentTextAlignment: (0, _draftjsUtils.getSelectedBlocksMetadata)(properties.editorState).get('text-align')
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          translations = _props.translations;
      var _state = this.state,
          expanded = _state.expanded,
          currentTextAlignment = _state.currentTextAlignment;

      var TextAlignmentComponent = config.component || _Component3.default;
      return _react2.default.createElement(TextAlignmentComponent, {
        config: config,
        translations: translations,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        currentState: { textAlignment: currentTextAlignment },
        onChange: this.addBlockAlignmentData
      });
    }
  }]);

  return TextAlign;
}(_react.Component);

TextAlign.propTypes = {
  editorState: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = TextAlign;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

var _Dropdown = __webpack_require__(7);

var _toolbar = __webpack_require__(8);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextAlign = function (_Component) {
  _inherits(TextAlign, _Component);

  function TextAlign() {
    _classCallCheck(this, TextAlign);

    return _possibleConstructorReturn(this, (TextAlign.__proto__ || Object.getPrototypeOf(TextAlign)).apply(this, arguments));
  }

  _createClass(TextAlign, [{
    key: 'renderInFlatList',
    value: function renderInFlatList() {
      var _props = this.props,
          _props$config = _props.config,
          options = _props$config.options,
          left = _props$config.left,
          center = _props$config.center,
          right = _props$config.right,
          justify = _props$config.justify,
          className = _props$config.className,
          onChange = _props.onChange,
          textAlignment = _props.currentState.textAlignment,
          translations = _props.translations;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rdw-text-align-wrapper', className), 'aria-label': 'rdw-textalign-control' },
        options.indexOf('left') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'left',
            className: (0, _classnames2.default)(left.className),
            active: textAlignment === 'left',
            onClick: onChange,
            title: left.title || translations['components.controls.textalign.left']
          },
          _react2.default.createElement('img', {
            src: left.icon,
            alt: ''
          })
        ),
        options.indexOf('center') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'center',
            className: (0, _classnames2.default)(center.className),
            active: textAlignment === 'center',
            onClick: onChange,
            title: center.title || translations['components.controls.textalign.center']
          },
          _react2.default.createElement('img', {
            src: center.icon,
            alt: ''
          })
        ),
        options.indexOf('right') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'right',
            className: (0, _classnames2.default)(right.className),
            active: textAlignment === 'right',
            onClick: onChange,
            title: right.title || translations['components.controls.textalign.right']
          },
          _react2.default.createElement('img', {
            src: right.icon,
            alt: ''
          })
        ),
        options.indexOf('justify') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'justify',
            className: (0, _classnames2.default)(justify.className),
            active: textAlignment === 'justify',
            onClick: onChange,
            title: justify.title || translations['components.controls.textalign.justify']
          },
          _react2.default.createElement('img', {
            src: justify.icon,
            alt: ''
          })
        )
      );
    }
  }, {
    key: 'renderInDropDown',
    value: function renderInDropDown() {
      var _props2 = this.props,
          config = _props2.config,
          expanded = _props2.expanded,
          doExpand = _props2.doExpand,
          onExpandEvent = _props2.onExpandEvent,
          doCollapse = _props2.doCollapse,
          textAlignment = _props2.currentState.textAlignment,
          onChange = _props2.onChange,
          translations = _props2.translations;
      var options = config.options,
          left = config.left,
          center = config.center,
          right = config.right,
          justify = config.justify,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;

      return _react2.default.createElement(
        _Dropdown.Dropdown,
        {
          className: (0, _classnames2.default)('rdw-text-align-dropdown', className),
          optionWrapperClassName: (0, _classnames2.default)(dropdownClassName),
          onChange: onChange,
          expanded: expanded,
          doExpand: doExpand,
          doCollapse: doCollapse,
          onExpandEvent: onExpandEvent,
          'aria-label': 'rdw-textalign-control',
          title: title || translations['components.controls.textalign.textalign']
        },
        _react2.default.createElement('img', {
          src: textAlignment && config[textAlignment] && config[textAlignment].icon || (0, _toolbar.getFirstIcon)(config),
          alt: ''
        }),
        options.indexOf('left') >= 0 && _react2.default.createElement(
          _Dropdown.DropdownOption,
          {
            value: 'left',
            active: textAlignment === 'left',
            className: (0, _classnames2.default)('rdw-text-align-dropdownOption', left.className),
            title: left.title || translations['components.controls.textalign.left']
          },
          _react2.default.createElement('img', {
            src: left.icon,
            alt: ''
          })
        ),
        options.indexOf('center') >= 0 && _react2.default.createElement(
          _Dropdown.DropdownOption,
          {
            value: 'center',
            active: textAlignment === 'center',
            className: (0, _classnames2.default)('rdw-text-align-dropdownOption', center.className),
            title: center.title || translations['components.controls.textalign.center']
          },
          _react2.default.createElement('img', {
            src: center.icon,
            alt: ''
          })
        ),
        options.indexOf('right') >= 0 && _react2.default.createElement(
          _Dropdown.DropdownOption,
          {
            value: 'right',
            active: textAlignment === 'right',
            className: (0, _classnames2.default)('rdw-text-align-dropdownOption', right.className),
            title: right.title || translations['components.controls.textalign.right']
          },
          _react2.default.createElement('img', {
            src: right.icon,
            alt: ''
          })
        ),
        options.indexOf('justify') >= 0 && _react2.default.createElement(
          _Dropdown.DropdownOption,
          {
            value: 'justify',
            active: textAlignment === 'justify',
            className: (0, _classnames2.default)('rdw-text-align-dropdownOption', justify.className),
            title: justify.title || translations['components.controls.textalign.justify']
          },
          _react2.default.createElement('img', {
            src: justify.icon,
            alt: ''
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }
      return this.renderInFlatList();
    }
  }]);

  return TextAlign;
}(_react.Component);

TextAlign.propTypes = {
  expanded: _propTypes2.default.bool,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onExpandEvent: _propTypes2.default.func,
  config: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = TextAlign;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-text-align-wrapper":"rdw-text-align-wrapper","rdw-text-align-dropdown":"rdw-text-align-dropdown","rdw-text-align-dropdownOption":"rdw-text-align-dropdownOption","rdw-right-aligned-block":"rdw-right-aligned-block","rdw-left-aligned-block":"rdw-left-aligned-block","rdw-center-aligned-block":"rdw-center-aligned-block","rdw-justify-aligned-block":"rdw-justify-aligned-block"};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftjsUtils = __webpack_require__(5);

var _Component2 = __webpack_require__(53);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorPicker = function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false,
      currentColor: undefined,
      currentBgColor: undefined
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.toggleColor = function (style, color) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      var newState = (0, _draftjsUtils.toggleCustomInlineStyle)(editorState, style, color);
      if (newState) {
        onChange(newState);
      }
      _this.doCollapse();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorPicker, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({
          currentColor: (0, _draftjsUtils.getSelectionCustomInlineStyle)(editorState, ['COLOR']).COLOR,
          currentBgColor: (0, _draftjsUtils.getSelectionCustomInlineStyle)(editorState, ['BGCOLOR']).BGCOLOR
        });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      var newState = {};
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        newState.currentColor = (0, _draftjsUtils.getSelectionCustomInlineStyle)(properties.editorState, ['COLOR']).COLOR;
        newState.currentBgColor = (0, _draftjsUtils.getSelectionCustomInlineStyle)(properties.editorState, ['BGCOLOR']).BGCOLOR;
      }
      this.setState(newState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var _state = this.state,
          currentColor = _state.currentColor,
          currentBgColor = _state.currentBgColor,
          expanded = _state.expanded;

      var ColorPickerComponent = config.component || _Component3.default;
      var color = currentColor && currentColor.substring(6);
      var bgColor = currentBgColor && currentBgColor.substring(8);
      return _react2.default.createElement(ColorPickerComponent, {
        config: config,
        translations: translations,
        onChange: this.toggleColor,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        currentState: { color: color, bgColor: bgColor }
      });
    }
  }]);

  return ColorPicker;
}(_react.Component);

ColorPicker.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  editorState: _propTypes2.default.object.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = ColorPicker;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _common = __webpack_require__(6);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

__webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentStyle: 'color'
    }, _this.onChange = function (color) {
      var onChange = _this.props.onChange;
      var currentStyle = _this.state.currentStyle;

      onChange(currentStyle, color);
    }, _this.setCurrentStyleColor = function () {
      _this.setState({
        currentStyle: 'color'
      });
    }, _this.setCurrentStyleBgcolor = function () {
      _this.setState({
        currentStyle: 'bgcolor'
      });
    }, _this.renderModal = function () {
      var _this$props = _this.props,
          _this$props$config = _this$props.config,
          popupClassName = _this$props$config.popupClassName,
          colors = _this$props$config.colors,
          _this$props$currentSt = _this$props.currentState,
          color = _this$props$currentSt.color,
          bgColor = _this$props$currentSt.bgColor,
          translations = _this$props.translations;
      var currentStyle = _this.state.currentStyle;

      var currentSelectedColor = currentStyle === 'color' ? color : bgColor;
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-colorpicker-modal', popupClassName),
          onClick: _common.stopPropagation
        },
        _react2.default.createElement(
          'span',
          { className: 'rdw-colorpicker-modal-header' },
          _react2.default.createElement(
            'span',
            {
              className: (0, _classnames2.default)('rdw-colorpicker-modal-style-label', { 'rdw-colorpicker-modal-style-label-active': currentStyle === 'color' }),
              onClick: _this.setCurrentStyleColor
            },
            translations['components.controls.colorpicker.text']
          ),
          _react2.default.createElement(
            'span',
            {
              className: (0, _classnames2.default)('rdw-colorpicker-modal-style-label', { 'rdw-colorpicker-modal-style-label-active': currentStyle === 'bgcolor' }),
              onClick: _this.setCurrentStyleBgcolor
            },
            translations['components.controls.colorpicker.background']
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'rdw-colorpicker-modal-options' },
          colors.map(function (c, index) {
            return _react2.default.createElement(
              _Option2.default,
              {
                value: c,
                key: index,
                className: 'rdw-colorpicker-option',
                activeClassName: 'rdw-colorpicker-option-active',
                active: currentSelectedColor === c,
                onClick: _this.onChange
              },
              _react2.default.createElement('span', {
                style: { backgroundColor: c },
                className: 'rdw-colorpicker-cube'
              })
            );
          })
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (!this.props.expanded && props.expanded) {
        this.setState({
          currentStyle: 'color'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$config = _props.config,
          icon = _props$config.icon,
          className = _props$config.className,
          title = _props$config.title,
          expanded = _props.expanded,
          onExpandEvent = _props.onExpandEvent,
          translations = _props.translations;

      return _react2.default.createElement(
        'div',
        {
          className: 'rdw-colorpicker-wrapper',
          'aria-haspopup': 'true',
          'aria-expanded': expanded,
          'aria-label': 'rdw-color-picker',
          title: title || translations['components.controls.colorpicker.colorpicker']
        },
        _react2.default.createElement(
          _Option2.default,
          {
            onClick: onExpandEvent,
            className: (0, _classnames2.default)(className)
          },
          _react2.default.createElement('img', {
            src: icon,
            alt: ''
          })
        ),
        expanded ? this.renderModal() : undefined
      );
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  onExpandEvent: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-colorpicker-wrapper":"rdw-colorpicker-wrapper","rdw-colorpicker-modal":"rdw-colorpicker-modal","rdw-colorpicker-modal-header":"rdw-colorpicker-modal-header","rdw-colorpicker-modal-style-label":"rdw-colorpicker-modal-style-label","rdw-colorpicker-modal-style-label-active":"rdw-colorpicker-modal-style-label-active","rdw-colorpicker-modal-options":"rdw-colorpicker-modal-options","rdw-colorpicker-cube":"rdw-colorpicker-cube","rdw-colorpicker-option":"rdw-colorpicker-option","rdw-colorpicker-option-active":"rdw-colorpicker-option-active"};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _draftjsUtils = __webpack_require__(5);

var _linkifyIt = __webpack_require__(13);

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _Component2 = __webpack_require__(61);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var linkify = (0, _linkifyIt2.default)();

var Link = function (_Component) {
  _inherits(Link, _Component);

  function Link() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false,
      link: undefined,
      selectionText: undefined
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.onChange = function (action, title, target, targetOption) {
      if (action === 'link') {
        var links = linkify.match(target);
        var linkifiedTarget = links && links[0] ? links[0].url : '';
        _this.addLink(title, linkifiedTarget, targetOption);
      } else {
        _this.removeLink();
      }
    }, _this.getCurrentValues = function () {
      var editorState = _this.props.editorState;
      var currentEntity = _this.state.currentEntity;

      var contentState = editorState.getCurrentContent();
      var currentValues = {};
      if (currentEntity && contentState.getEntity(currentEntity).get('type') === 'LINK') {
        currentValues.link = {};
        var entityRange = currentEntity && (0, _draftjsUtils.getEntityRange)(editorState, currentEntity);
        currentValues.link.target = currentEntity && contentState.getEntity(currentEntity).get('data').url;
        currentValues.link.targetOption = currentEntity && contentState.getEntity(currentEntity).get('data').targetOption;
        currentValues.link.title = entityRange && entityRange.text;
      }
      currentValues.selectionText = (0, _draftjsUtils.getSelectionText)(editorState);
      return currentValues;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.removeLink = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var currentEntity = _this.state.currentEntity;

      var selection = editorState.getSelection();
      if (currentEntity) {
        var entityRange = (0, _draftjsUtils.getEntityRange)(editorState, currentEntity);
        selection = selection.merge({
          anchorOffset: entityRange.start,
          focusOffset: entityRange.end
        });
        onChange(_draftJs.RichUtils.toggleLink(editorState, selection, null));
      }
    }, _this.addLink = function (linkTitle, linkTarget, linkTargetOption) {
      var _this$props2 = _this.props,
          editorState = _this$props2.editorState,
          onChange = _this$props2.onChange;
      var currentEntity = _this.state.currentEntity;

      var selection = editorState.getSelection();

      if (currentEntity) {
        var entityRange = (0, _draftjsUtils.getEntityRange)(editorState, currentEntity);
        selection = selection.merge({
          anchorOffset: entityRange.start,
          focusOffset: entityRange.end
        });
      }
      var entityKey = editorState.getCurrentContent().createEntity('LINK', 'MUTABLE', { url: linkTarget, targetOption: linkTargetOption }).getLastCreatedEntityKey();

      var contentState = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), selection, '' + linkTitle, editorState.getCurrentInlineStyle(), entityKey);
      var newEditorState = _draftJs.EditorState.push(editorState, contentState, 'insert-characters');

      // insert a blank space after link
      selection = newEditorState.getSelection().merge({
        anchorOffset: selection.get('anchorOffset') + linkTitle.length,
        focusOffset: selection.get('anchorOffset') + linkTitle.length
      });
      newEditorState = _draftJs.EditorState.acceptSelection(newEditorState, selection);
      contentState = _draftJs.Modifier.insertText(newEditorState.getCurrentContent(), selection, ' ', newEditorState.getCurrentInlineStyle(), undefined);
      onChange(_draftJs.EditorState.push(newEditorState, contentState, 'insert-characters'));
      _this.doCollapse();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Link, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({
          currentEntity: (0, _draftjsUtils.getSelectionEntity)(editorState)
        });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      var newState = {};
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        newState.currentEntity = (0, _draftjsUtils.getSelectionEntity)(properties.editorState);
      }
      this.setState(newState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var expanded = this.state.expanded;

      var _getCurrentValues = this.getCurrentValues(),
          link = _getCurrentValues.link,
          selectionText = _getCurrentValues.selectionText;

      var LinkComponent = config.component || _Component3.default;
      return _react2.default.createElement(LinkComponent, {
        config: config,
        translations: translations,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        currentState: {
          link: link,
          selectionText: selectionText
        },
        onChange: this.onChange
      });
    }
  }]);

  return Link;
}(_react.Component);

Link.propTypes = {
  editorState: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = Link;

// todo refct
// 1. better action names here
// 2. align update signatue
// 3. align current value signature

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (opts) {
  var re = {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = __webpack_require__(57).source;
  re.src_Cc = __webpack_require__(58).source;
  re.src_Z = __webpack_require__(59).source;
  re.src_P = __webpack_require__(60).source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [re.src_Z, re.src_P, re.src_Cc].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [re.src_Z, re.src_Cc].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uFF5C]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 = '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port = '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator = '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path = '(?:' + '[/?#]' + '(?:' + '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' + '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' + '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' + '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' + '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' + "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" + "\\'(?=" + re.src_pseudo_letter + '|[-]).|' + // allow `I'm_king` if no pair found
  '\\.{2,3}[a-zA-Z0-9%/]|' + // github has ... in commit range links. Restrict to
  // - english
  // - percent-encoded
  // - parts of file path
  // until more examples found.
  '\\.(?!' + re.src_ZCc + '|[.]).|' + (opts && opts['---'] ? '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
  : '\\-+|') + '\\,(?!' + re.src_ZCc + ').|' + // allow `,,,` in paths
  '\\!(?!' + re.src_ZCc + '|[!]).|' + '\\?(?!' + re.src_ZCc + '|[?]).' + ')+' + '|\\/' + ')?';

  re.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';

  re.src_xn = 'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

  // Allow letters & digits (http://test1)
  '(?:' + re.src_xn + '|' + re.src_pseudo_letter + '{1,63}' + ')';

  re.src_domain = '(?:' + re.src_xn + '|' + '(?:' + re.src_pseudo_letter + ')' + '|' +
  // don't allow `--` in domain names, because:
  // - that can conflict with markdown &mdash; / &ndash;
  // - nobody use those anyway
  '(?:' + re.src_pseudo_letter + '(?:-(?!-)|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' + ')';

  re.src_host = '(?:' +
  // Don't need IP check, because digits are already allowed in normal domain names
  //   src_ip4 +
  // '|' +
  '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain /*_root*/ + ')' + ')';

  re.tpl_host_fuzzy = '(?:' + re.src_ip4 + '|' + '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' + ')';

  re.tpl_host_no_ip_fuzzy = '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict = re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;

  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test = 'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy = '(^|' + text_separators + '|\\(|' + re.src_ZCc + ')(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
  // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|' + re.src_ZPCc + '))' + '((?![$+<=>^`|\uFF5C])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
  // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|' + re.src_ZPCc + '))' + '((?![$+<=>^`|\uFF5C])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = /[\0-\x1F\x7F-\x9F]/;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = /[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E44\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _common = __webpack_require__(6);

var _toolbar = __webpack_require__(8);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

var _Dropdown = __webpack_require__(7);

__webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showModal: false,
      linkTarget: '',
      linkTitle: '',
      linkTargetOption: _this.props.config.defaultTargetOption
    }, _this.removeLink = function () {
      var onChange = _this.props.onChange;

      onChange('unlink');
    }, _this.addLink = function () {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          linkTitle = _this$state.linkTitle,
          linkTarget = _this$state.linkTarget,
          linkTargetOption = _this$state.linkTargetOption;

      onChange('link', linkTitle, linkTarget, linkTargetOption);
    }, _this.updateValue = function (event) {
      _this.setState(_defineProperty({}, '' + event.target.name, event.target.value));
    }, _this.updateTargetOption = function (event) {
      _this.setState({
        linkTargetOption: event.target.checked ? '_blank' : '_self'
      });
    }, _this.hideModal = function () {
      _this.setState({
        showModal: false
      });
    }, _this.signalExpandShowModal = function () {
      var _this$props = _this.props,
          onExpandEvent = _this$props.onExpandEvent,
          _this$props$currentSt = _this$props.currentState,
          link = _this$props$currentSt.link,
          selectionText = _this$props$currentSt.selectionText;
      var linkTargetOption = _this.state.linkTargetOption;

      onExpandEvent();
      _this.setState({
        showModal: true,
        linkTarget: link && link.target || '',
        linkTargetOption: link && link.targetOption || linkTargetOption,
        linkTitle: link && link.title || selectionText
      });
    }, _this.forceExpandAndShowModal = function () {
      var _this$props2 = _this.props,
          doExpand = _this$props2.doExpand,
          _this$props2$currentS = _this$props2.currentState,
          link = _this$props2$currentS.link,
          selectionText = _this$props2$currentS.selectionText;
      var linkTargetOption = _this.state.linkTargetOption;

      doExpand();
      _this.setState({
        showModal: true,
        linkTarget: link && link.target,
        linkTargetOption: link && link.targetOption || linkTargetOption,
        linkTitle: link && link.title || selectionText
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.expanded && !props.expanded) {
        this.setState({
          showModal: false,
          linkTarget: '',
          linkTitle: '',
          linkTargetOption: this.props.config.defaultTargetOption
        });
      }
    }
  }, {
    key: 'renderAddLinkModal',
    value: function renderAddLinkModal() {
      var _props = this.props,
          popupClassName = _props.config.popupClassName,
          doCollapse = _props.doCollapse,
          translations = _props.translations;
      var _state = this.state,
          linkTitle = _state.linkTitle,
          linkTarget = _state.linkTarget,
          linkTargetOption = _state.linkTargetOption;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-link-modal', popupClassName),
          onClick: _common.stopPropagation
        },
        _react2.default.createElement(
          'label',
          { className: 'rdw-link-modal-label', htmlFor: 'linkTitle' },
          translations['components.controls.link.linkTitle']
        ),
        _react2.default.createElement('input', {
          id: 'linkTitle',
          className: 'rdw-link-modal-input',
          onChange: this.updateValue,
          onBlur: this.updateValue,
          name: 'linkTitle',
          value: linkTitle
        }),
        _react2.default.createElement(
          'label',
          { className: 'rdw-link-modal-label', htmlFor: 'linkTarget' },
          translations['components.controls.link.linkTarget']
        ),
        _react2.default.createElement('input', {
          id: 'linkTarget',
          className: 'rdw-link-modal-input',
          onChange: this.updateValue,
          onBlur: this.updateValue,
          name: 'linkTarget',
          value: linkTarget
        }),
        _react2.default.createElement(
          'label',
          { className: 'rdw-link-modal-target-option', htmlFor: 'openLinkInNewWindow' },
          _react2.default.createElement('input', {
            id: 'openLinkInNewWindow',
            type: 'checkbox',
            defaultChecked: linkTargetOption === '_blank',
            value: '_blank',
            onChange: this.updateTargetOption
          }),
          _react2.default.createElement(
            'span',
            null,
            translations['components.controls.link.linkTargetOption']
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'rdw-link-modal-buttonsection' },
          _react2.default.createElement(
            'button',
            {
              className: 'rdw-link-modal-btn',
              onClick: this.addLink,
              disabled: !linkTarget || !linkTitle
            },
            translations['generic.add']
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'rdw-link-modal-btn',
              onClick: doCollapse
            },
            translations['generic.cancel']
          )
        )
      );
    }
  }, {
    key: 'renderInFlatList',
    value: function renderInFlatList() {
      var _props2 = this.props,
          _props2$config = _props2.config,
          options = _props2$config.options,
          link = _props2$config.link,
          unlink = _props2$config.unlink,
          className = _props2$config.className,
          currentState = _props2.currentState,
          expanded = _props2.expanded,
          translations = _props2.translations;
      var showModal = this.state.showModal;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rdw-link-wrapper', className), 'aria-label': 'rdw-link-control' },
        options.indexOf('link') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'unordered-list-item',
            className: (0, _classnames2.default)(link.className),
            onClick: this.signalExpandShowModal,
            'aria-haspopup': 'true',
            'aria-expanded': showModal,
            title: link.title || translations['components.controls.link.link']
          },
          _react2.default.createElement('img', {
            src: link.icon,
            alt: ''
          })
        ),
        options.indexOf('unlink') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            disabled: !currentState.link,
            value: 'ordered-list-item',
            className: (0, _classnames2.default)(unlink.className),
            onClick: this.removeLink,
            title: unlink.title || translations['components.controls.link.unlink']
          },
          _react2.default.createElement('img', {
            src: unlink.icon,
            alt: ''
          })
        ),
        expanded && showModal ? this.renderAddLinkModal() : undefined
      );
    }
  }, {
    key: 'renderInDropDown',
    value: function renderInDropDown() {
      var _props3 = this.props,
          expanded = _props3.expanded,
          onExpandEvent = _props3.onExpandEvent,
          doCollapse = _props3.doCollapse,
          doExpand = _props3.doExpand,
          onChange = _props3.onChange,
          config = _props3.config,
          currentState = _props3.currentState,
          translations = _props3.translations;
      var options = config.options,
          link = config.link,
          unlink = config.unlink,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;
      var showModal = this.state.showModal;

      return _react2.default.createElement(
        'div',
        {
          className: 'rdw-link-wrapper',
          'aria-haspopup': 'true',
          'aria-label': 'rdw-link-control',
          'aria-expanded': expanded,
          title: title
        },
        _react2.default.createElement(
          _Dropdown.Dropdown,
          {
            className: (0, _classnames2.default)('rdw-link-dropdown', className),
            optionWrapperClassName: (0, _classnames2.default)(dropdownClassName),
            onChange: onChange,
            expanded: expanded && !showModal,
            doExpand: doExpand,
            doCollapse: doCollapse,
            onExpandEvent: onExpandEvent
          },
          _react2.default.createElement('img', {
            src: (0, _toolbar.getFirstIcon)(config),
            alt: ''
          }),
          options.indexOf('link') >= 0 && _react2.default.createElement(
            _Dropdown.DropdownOption,
            {
              onClick: this.forceExpandAndShowModal,
              className: (0, _classnames2.default)('rdw-link-dropdownoption', link.className),
              title: link.title || translations['components.controls.link.link']
            },
            _react2.default.createElement('img', {
              src: link.icon,
              alt: ''
            })
          ),
          options.indexOf('unlink') >= 0 && _react2.default.createElement(
            _Dropdown.DropdownOption,
            {
              onClick: this.removeLink,
              disabled: !currentState.link,
              className: (0, _classnames2.default)('rdw-link-dropdownoption', unlink.className),
              title: unlink.title || translations['components.controls.link.unlink']
            },
            _react2.default.createElement('img', {
              src: unlink.icon,
              alt: ''
            })
          )
        ),
        expanded && showModal ? this.renderAddLinkModal() : undefined
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }
      return this.renderInFlatList();
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onExpandEvent: _propTypes2.default.func,
  config: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-link-wrapper":"rdw-link-wrapper","rdw-link-dropdown":"rdw-link-dropdown","rdw-link-dropdownOption":"rdw-link-dropdownOption","rdw-link-dropdownPlaceholder":"rdw-link-dropdownPlaceholder","rdw-link-modal":"rdw-link-modal","rdw-link-modal-label":"rdw-link-modal-label","rdw-link-modal-input":"rdw-link-modal-input","rdw-link-modal-buttonsection":"rdw-link-modal-buttonsection","rdw-link-modal-target-option":"rdw-link-modal-target-option","rdw-link-modal-btn":"rdw-link-modal-btn","rdw-link-dropdownoption":"rdw-link-dropdownoption","rdw-history-dropdown":"rdw-history-dropdown"};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _draftjsUtils = __webpack_require__(5);

var _linkifyIt = __webpack_require__(13);

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _Component2 = __webpack_require__(64);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var linkify = (0, _linkifyIt2.default)();

var CTABox = function (_Component) {
  _inherits(CTABox, _Component);

  function CTABox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CTABox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CTABox.__proto__ || Object.getPrototypeOf(CTABox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false,
      link: undefined,
      selectionText: undefined
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.onChange = function (action, boxTitle, boxText, buttonText, target, targetOption) {
      if (action === 'ctaBox') {
        var links = linkify.match(target);
        var linkifiedTarget = links && links[0] ? links[0].url : '';
        _this.addCTABox(boxTitle, boxText, buttonText, linkifiedTarget, targetOption);
      }
    }, _this.getCurrentValues = function () {
      var editorState = _this.props.editorState;
      var currentEntity = _this.state.currentEntity;

      var contentState = editorState.getCurrentContent();
      var currentValues = {};
      if (currentEntity && contentState.getEntity(currentEntity).get('type') === 'CTA_BOX') {
        currentValues.ctaBox = {};
        var entityRange = currentEntity && (0, _draftjsUtils.getEntityRange)(editorState, currentEntity);
        currentValues.ctaBox.ctaTargetLink = currentEntity && contentState.getEntity(currentEntity).get('data').url;
        currentValues.ctaBox.ctaTargetLinkOption = currentEntity && contentState.getEntity(currentEntity).get('data').targetOption;
        currentValues.ctaBox.buttonText = entityRange && entityRange.text;
        currentValues.ctaBox.boxTitle = currentEntity && contentState.getEntity(currentEntity).get('data').ctaTitle;
        currentValues.ctaBox.boxText = currentEntity && contentState.getEntity(currentEntity).get('data').ctaText;
      }
      currentValues.selectionText = (0, _draftjsUtils.getSelectionText)(editorState);
      return currentValues;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.addCTABox = function (boxTitle, boxText, buttonText, ctaTargetLink, ctaTargetLinkOption) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;
      var currentEntity = _this.state.currentEntity;

      var selection = editorState.getSelection();

      if (currentEntity) {
        var entityRange = (0, _draftjsUtils.getEntityRange)(editorState, currentEntity);
        selection = selection.merge({
          anchorOffset: entityRange.start,
          focusOffset: entityRange.end
        });
      }
      var entityKey = editorState.getCurrentContent().createEntity('CTA_BOX', 'MUTABLE', { ctaTitle: boxTitle, ctaText: boxText, ctaButtonText: buttonText, url: ctaTargetLink, targetOption: ctaTargetLinkOption }).getLastCreatedEntityKey();

      var contentState = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), selection, '' + buttonText, editorState.getCurrentInlineStyle(), entityKey);
      var newEditorState = _draftJs.EditorState.push(editorState, contentState, 'insert-characters');

      // insert a blank space after ctaBox
      selection = newEditorState.getSelection().merge({
        anchorOffset: selection.get('anchorOffset') + buttonText.length,
        focusOffset: selection.get('anchorOffset') + buttonText.length
      });
      newEditorState = _draftJs.EditorState.acceptSelection(newEditorState, selection);
      contentState = _draftJs.Modifier.insertText(newEditorState.getCurrentContent(), selection, ' ', newEditorState.getCurrentInlineStyle(), undefined);
      onChange(_draftJs.EditorState.push(newEditorState, contentState, 'insert-characters'));
      _this.doCollapse();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CTABox, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({
          currentEntity: (0, _draftjsUtils.getSelectionEntity)(editorState)
        });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      var newState = {};
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        newState.currentEntity = (0, _draftjsUtils.getSelectionEntity)(properties.editorState);
      }
      this.setState(newState);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var expanded = this.state.expanded;

      var _getCurrentValues = this.getCurrentValues(),
          ctaBox = _getCurrentValues.ctaBox,
          selectionText = _getCurrentValues.selectionText;

      var CTABoxComponent = config.component || _Component3.default;
      return _react2.default.createElement(CTABoxComponent, {
        config: config,
        translations: translations,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        currentState: {
          ctaBox: ctaBox,
          selectionText: selectionText
        },
        onChange: this.onChange
      });
    }
  }]);

  return CTABox;
}(_react.Component);

CTABox.propTypes = {
  editorState: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = CTABox;

// todo refct
// 1. better action names here
// 2. align update signatue
// 3. align current value signature

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _common = __webpack_require__(6);

var _toolbar = __webpack_require__(8);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

var _Dropdown = __webpack_require__(7);

__webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showModal: false,
      boxTitle: '',
      boxText: '',
      ctaTargetLink: '',
      buttonText: '',
      ctaTargetLinkOption: _this.props.config.defaultTargetOption
    }, _this.addCTABox = function () {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          boxTitle = _this$state.boxTitle,
          boxText = _this$state.boxText,
          buttonText = _this$state.buttonText,
          ctaTargetLink = _this$state.ctaTargetLink,
          ctaTargetLinkOption = _this$state.ctaTargetLinkOption;

      onChange('ctaBox', boxTitle, boxText, buttonText, ctaTargetLink, ctaTargetLinkOption);
    }, _this.updateValue = function (event) {
      _this.setState(_defineProperty({}, '' + event.target.name, event.target.value));
    }, _this.updateTargetOption = function (event) {
      _this.setState({
        ctaTargetLinkOption: event.target.checked ? '_blank' : '_self'
      });
    }, _this.hideModal = function () {
      _this.setState({
        showModal: false
      });
    }, _this.signalExpandShowModal = function () {
      var _this$props = _this.props,
          onExpandEvent = _this$props.onExpandEvent,
          _this$props$currentSt = _this$props.currentState,
          ctaBox = _this$props$currentSt.ctaBox,
          selectionText = _this$props$currentSt.selectionText;
      var ctaTargetLinkOption = _this.state.ctaTargetLinkOption;

      onExpandEvent();
      _this.setState({
        showModal: true,
        boxTitle: ctaBox && ctaBox.boxTitle || '',
        boxText: ctaBox && ctaBox.boxText || '',
        ctaTargetLink: ctaBox && ctaBox.ctaTargetLink || '',
        ctaTargetLinkOption: ctaBox && ctaBox.targetOption || ctaTargetLinkOption,
        buttonText: ctaBox && ctaBox.buttonText || ''
      });
    }, _this.forceExpandAndShowModal = function () {
      var _this$props2 = _this.props,
          doExpand = _this$props2.doExpand,
          _this$props2$currentS = _this$props2.currentState,
          ctaBox = _this$props2$currentS.ctaBox,
          selectionText = _this$props2$currentS.selectionText;
      var ctaTargetLinkOption = _this.state.ctaTargetLinkOption;

      doExpand();
      _this.setState({
        showModal: true,
        boxTitle: ctaBox && ctaBox.boxTitle || '',
        boxText: ctaBox && ctaBox.boxText || '',
        ctaTargetLink: ctaBox && ctaBox.target,
        ctaTargetLinkOption: ctaBox && ctaBox.targetOption || ctaTargetLinkOption,
        buttonText: ctaBox && ctaBox.buttonText || ''
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.expanded && !props.expanded) {
        this.setState({
          showModal: false,
          boxTitle: '',
          boxText: '',
          ctaTargetLink: '',
          buttonText: '',
          ctaTargetLinkOption: this.props.config.defaultTargetOption
        });
      }
    }
  }, {
    key: 'renderAddCTABoxModal',
    value: function renderAddCTABoxModal() {
      var _props = this.props,
          popupClassName = _props.config.popupClassName,
          doCollapse = _props.doCollapse,
          translations = _props.translations;
      var _state = this.state,
          buttonText = _state.buttonText,
          ctaTargetLink = _state.ctaTargetLink,
          ctaTargetLinkOption = _state.ctaTargetLinkOption,
          boxTitle = _state.boxTitle,
          boxText = _state.boxText;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-ctabox-modal', popupClassName),
          onClick: _common.stopPropagation
        },
        _react2.default.createElement(
          'h5',
          null,
          translations['components.controls.ctaBox.headline']
        ),
        _react2.default.createElement(
          'label',
          { className: 'rdw-ctabox-modal-label', htmlFor: 'boxTitle' },
          translations['components.controls.ctaBox.boxTitle']
        ),
        _react2.default.createElement('input', {
          id: 'boxTitle',
          className: 'rdw-ctabox-modal-input',
          onChange: this.updateValue,
          onBlur: this.updateValue,
          name: 'boxTitle',
          value: boxTitle
        }),
        _react2.default.createElement(
          'label',
          { className: 'rdw-ctabox-modal-label', htmlFor: 'boxText' },
          translations['components.controls.ctaBox.boxText']
        ),
        _react2.default.createElement('input', {
          id: 'boxText',
          className: 'rdw-ctabox-modal-input',
          onChange: this.updateValue,
          onBlur: this.updateValue,
          name: 'boxText',
          value: boxText
        }),
        _react2.default.createElement(
          'label',
          { className: 'rdw-ctabox-modal-label', htmlFor: 'buttonText' },
          translations['components.controls.ctaBox.buttonText']
        ),
        _react2.default.createElement('input', {
          id: 'buttonText',
          className: 'rdw-ctabox-modal-input',
          onChange: this.updateValue,
          onBlur: this.updateValue,
          name: 'buttonText',
          value: buttonText
        }),
        _react2.default.createElement(
          'label',
          { className: 'rdw-ctabox-modal-label', htmlFor: 'ctaTargetLink' },
          translations['components.controls.ctaBox.ctaTargetLink']
        ),
        _react2.default.createElement('input', {
          id: 'ctaTargetLink',
          className: 'rdw-ctabox-modal-input',
          onChange: this.updateValue,
          onBlur: this.updateValue,
          name: 'ctaTargetLink',
          value: ctaTargetLink
        }),
        _react2.default.createElement(
          'span',
          { className: 'rdw-ctabox-modal-buttonsection' },
          _react2.default.createElement(
            'button',
            {
              className: 'rdw-ctabox-modal-btn',
              onClick: this.addCTABox,
              disabled: !ctaTargetLink || !buttonText
            },
            translations['generic.add']
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'rdw-ctabox-modal-btn',
              onClick: doCollapse
            },
            translations['generic.cancel']
          )
        )
      );
    }
  }, {
    key: 'renderInFlatList',
    value: function renderInFlatList() {
      var _props2 = this.props,
          _props2$config = _props2.config,
          options = _props2$config.options,
          link = _props2$config.link,
          className = _props2$config.className,
          currentState = _props2.currentState,
          expanded = _props2.expanded,
          translations = _props2.translations;
      var showModal = this.state.showModal;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rdw-ctabox-wrapper', className), 'aria-label': 'rdw-ctabox-control' },
        options.indexOf('link') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'unordered-list-item',
            className: (0, _classnames2.default)(link.className),
            onClick: this.signalExpandShowModal,
            'aria-haspopup': 'true',
            'aria-expanded': showModal,
            title: link.title || translations['components.controls.ctaBox.link']
          },
          _react2.default.createElement('img', {
            src: link.icon,
            alt: ''
          })
        ),
        expanded && showModal ? this.renderAddCTABoxModal() : undefined
      );
    }
  }, {
    key: 'renderInDropDown',
    value: function renderInDropDown() {
      var _props3 = this.props,
          expanded = _props3.expanded,
          onExpandEvent = _props3.onExpandEvent,
          doCollapse = _props3.doCollapse,
          doExpand = _props3.doExpand,
          onChange = _props3.onChange,
          config = _props3.config,
          currentState = _props3.currentState,
          translations = _props3.translations;
      var options = config.options,
          link = config.link,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;
      var showModal = this.state.showModal;

      return _react2.default.createElement(
        'div',
        {
          className: 'rdw-ctabox-wrapper',
          'aria-haspopup': 'true',
          'aria-label': 'rdw-ctabox-control',
          'aria-expanded': expanded,
          title: title
        },
        _react2.default.createElement(
          _Dropdown.Dropdown,
          {
            className: (0, _classnames2.default)('rdw-ctabox-dropdown', className),
            optionWrapperClassName: (0, _classnames2.default)(dropdownClassName),
            onChange: onChange,
            expanded: expanded && !showModal,
            doExpand: doExpand,
            doCollapse: doCollapse,
            onExpandEvent: onExpandEvent
          },
          _react2.default.createElement('img', {
            src: (0, _toolbar.getFirstIcon)(config),
            alt: ''
          }),
          options.indexOf('link') >= 0 && _react2.default.createElement(
            _Dropdown.DropdownOption,
            {
              onClick: this.forceExpandAndShowModal,
              className: (0, _classnames2.default)('rdw-ctabox-dropdownoption', link.className),
              title: link.title || translations['components.controls.ctaBox.link']
            },
            _react2.default.createElement('img', {
              src: link.icon,
              alt: ''
            })
          )
        ),
        expanded && showModal ? this.renderAddCTABoxModal() : undefined
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var inDropdown = this.props.config.inDropdown;

      if (inDropdown) {
        return this.renderInDropDown();
      }
      return this.renderInFlatList();
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onExpandEvent: _propTypes2.default.func,
  config: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-ctabox-wrapper":"rdw-ctabox-wrapper","rdw-ctabox-dropdown":"rdw-ctabox-dropdown","rdw-ctabox-dropdownOption":"rdw-ctabox-dropdownOption","rdw-ctabox-dropdownPlaceholder":"rdw-ctabox-dropdownPlaceholder","rdw-ctabox-modal":"rdw-ctabox-modal","rdw-ctabox-modal-label":"rdw-ctabox-modal-label","rdw-ctabox-modal-input":"rdw-ctabox-modal-input","rdw-ctabox-modal-buttonsection":"rdw-ctabox-modal-buttonsection","rdw-ctabox-modal-target-option":"rdw-ctabox-modal-target-option","rdw-ctabox-modal-btn":"rdw-ctabox-modal-btn","rdw-ctabox-dropdownoption":"rdw-ctabox-dropdownoption","rdw-history-dropdown":"rdw-history-dropdown"};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _Component2 = __webpack_require__(67);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Embedded = function (_Component) {
  _inherits(Embedded, _Component);

  function Embedded() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Embedded);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Embedded.__proto__ || Object.getPrototypeOf(Embedded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.addEmbeddedLink = function (embeddedLink, height, width) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      var entityKey = editorState.getCurrentContent().createEntity('EMBEDDED_LINK', 'MUTABLE', { src: embeddedLink, height: height, width: width }).getLastCreatedEntityKey();
      var newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
      onChange(newEditorState);
      _this.doCollapse();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Embedded, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          translations = _props.translations;
      var expanded = this.state.expanded;

      var EmbeddedComponent = config.component || _Component3.default;
      return _react2.default.createElement(EmbeddedComponent, {
        config: config,
        translations: translations,
        onChange: this.addEmbeddedLink,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return Embedded;
}(_react.Component);

Embedded.propTypes = {
  editorState: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = Embedded;

// todo: make default heights configurable

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _common = __webpack_require__(6);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

__webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      embeddedLink: '',
      height: _this.props.config.defaultSize.height,
      width: _this.props.config.defaultSize.width
    }, _this.onChange = function () {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          embeddedLink = _this$state.embeddedLink,
          height = _this$state.height,
          width = _this$state.width;

      onChange(embeddedLink, height, width);
    }, _this.updateValue = function (event) {
      _this.setState(_defineProperty({}, '' + event.target.name, event.target.value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.expanded && !props.expanded) {
        var _props$config$default = this.props.config.defaultSize,
            height = _props$config$default.height,
            width = _props$config$default.width;

        this.setState({
          embeddedLink: '',
          height: height,
          width: width
        });
      }
    }
  }, {
    key: 'rendeEmbeddedLinkModal',
    value: function rendeEmbeddedLinkModal() {
      var _state = this.state,
          embeddedLink = _state.embeddedLink,
          height = _state.height,
          width = _state.width;
      var _props = this.props,
          popupClassName = _props.config.popupClassName,
          doCollapse = _props.doCollapse,
          translations = _props.translations;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-embedded-modal', popupClassName),
          onClick: _common.stopPropagation
        },
        _react2.default.createElement(
          'div',
          { className: 'rdw-embedded-modal-header' },
          _react2.default.createElement(
            'span',
            { className: 'rdw-embedded-modal-header-option' },
            translations['components.controls.embedded.embeddedlink'],
            _react2.default.createElement('span', { className: 'rdw-embedded-modal-header-label' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rdw-embedded-modal-link-section' },
          _react2.default.createElement(
            'span',
            { className: 'rdw-embedded-modal-link-input-wrapper' },
            _react2.default.createElement('input', {
              className: 'rdw-embedded-modal-link-input',
              placeholder: translations['components.controls.embedded.enterlink'],
              onChange: this.updateValue,
              onBlur: this.updateValue,
              value: embeddedLink,
              name: 'embeddedLink'
            }),
            _react2.default.createElement(
              'span',
              { className: 'rdw-image-mandatory-sign' },
              '*'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'rdw-embedded-modal-size' },
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('input', {
                onChange: this.updateValue,
                onBlur: this.updateValue,
                value: height,
                name: 'height',
                className: 'rdw-embedded-modal-size-input',
                placeholder: 'Height'
              }),
              _react2.default.createElement(
                'span',
                { className: 'rdw-image-mandatory-sign' },
                '*'
              )
            ),
            _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('input', {
                onChange: this.updateValue,
                onBlur: this.updateValue,
                value: width,
                name: 'width',
                className: 'rdw-embedded-modal-size-input',
                placeholder: 'Width'
              }),
              _react2.default.createElement(
                'span',
                { className: 'rdw-image-mandatory-sign' },
                '*'
              )
            )
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'rdw-embedded-modal-btn-section' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'rdw-embedded-modal-btn',
              onClick: this.onChange,
              disabled: !embeddedLink || !height || !width
            },
            translations['generic.add']
          ),
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'rdw-embedded-modal-btn',
              onClick: doCollapse
            },
            translations['generic.cancel']
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          _props2$config = _props2.config,
          icon = _props2$config.icon,
          className = _props2$config.className,
          title = _props2$config.title,
          expanded = _props2.expanded,
          onExpandEvent = _props2.onExpandEvent,
          translations = _props2.translations;

      return _react2.default.createElement(
        'div',
        {
          className: 'rdw-embedded-wrapper',
          'aria-haspopup': 'true',
          'aria-expanded': expanded,
          'aria-label': 'rdw-embedded-control'
        },
        _react2.default.createElement(
          _Option2.default,
          {
            className: (0, _classnames2.default)(className),
            value: 'unordered-list-item',
            onClick: onExpandEvent,
            title: title || translations['components.controls.embedded.embedded']
          },
          _react2.default.createElement('img', {
            src: icon,
            alt: ''
          })
        ),
        expanded ? this.rendeEmbeddedLinkModal() : undefined
      );
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  onExpandEvent: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object,
  doCollapse: _propTypes2.default.func
};
exports.default = LayoutComponent;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-embedded-wrapper":"rdw-embedded-wrapper","rdw-embedded-modal":"rdw-embedded-modal","rdw-embedded-modal-header":"rdw-embedded-modal-header","rdw-embedded-modal-header-option":"rdw-embedded-modal-header-option","rdw-embedded-modal-header-label":"rdw-embedded-modal-header-label","rdw-embedded-modal-link-section":"rdw-embedded-modal-link-section","rdw-embedded-modal-link-input":"rdw-embedded-modal-link-input","rdw-embedded-modal-link-input-wrapper":"rdw-embedded-modal-link-input-wrapper","rdw-embedded-modal-btn-section":"rdw-embedded-modal-btn-section","rdw-embedded-modal-btn":"rdw-embedded-modal-btn","rdw-embedded-modal-size":"rdw-embedded-modal-size","rdw-embedded-modal-size-input":"rdw-embedded-modal-size-input"};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _Component2 = __webpack_require__(70);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emoji = function (_Component) {
  _inherits(Emoji, _Component);

  function Emoji() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Emoji);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Emoji.__proto__ || Object.getPrototypeOf(Emoji)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.addEmoji = function (emoji) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      var contentState = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), editorState.getSelection(), emoji, editorState.getCurrentInlineStyle());
      onChange(_draftJs.EditorState.push(editorState, contentState, 'insert-characters'));
      _this.doCollapse();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Emoji, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          translations = _props.translations;
      var expanded = this.state.expanded;

      var EmojiComponent = config.component || _Component3.default;
      return _react2.default.createElement(EmojiComponent, {
        config: config,
        translations: translations,
        onChange: this.addEmoji,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onCollpase: this.closeModal
      });
    }
  }]);

  return Emoji;
}(_react.Component);

// todo: unit test cases


Emoji.propTypes = {
  editorState: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = Emoji;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _common = __webpack_require__(6);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (event) {
      var onChange = _this.props.onChange;

      onChange(event.target.innerHTML);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'renderEmojiModal',
    value: function renderEmojiModal() {
      var _this2 = this;

      var _props$config = this.props.config,
          popupClassName = _props$config.popupClassName,
          emojis = _props$config.emojis;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-emoji-modal', popupClassName),
          onClick: _common.stopPropagation
        },
        emojis.map(function (emoji, index) {
          return _react2.default.createElement(
            'span',
            {
              key: index,
              className: 'rdw-emoji-icon',
              alt: '',
              onClick: _this2.onChange
            },
            emoji
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$config2 = _props.config,
          icon = _props$config2.icon,
          className = _props$config2.className,
          title = _props$config2.title,
          expanded = _props.expanded,
          onExpandEvent = _props.onExpandEvent,
          translations = _props.translations;

      return _react2.default.createElement(
        'div',
        {
          className: 'rdw-emoji-wrapper',
          'aria-haspopup': 'true',
          'aria-label': 'rdw-emoji-control',
          'aria-expanded': expanded,
          title: title || translations['components.controls.emoji.emoji']
        },
        _react2.default.createElement(
          _Option2.default,
          {
            className: (0, _classnames2.default)(className),
            value: 'unordered-list-item',
            onClick: onExpandEvent
          },
          _react2.default.createElement('img', {
            src: icon,
            alt: ''
          })
        ),
        expanded ? this.renderEmojiModal() : undefined
      );
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  onExpandEvent: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-emoji-wrapper":"rdw-emoji-wrapper","rdw-emoji-modal":"rdw-emoji-modal","rdw-emoji-icon":"rdw-emoji-icon"};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _Component2 = __webpack_require__(73);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageControl = function (_Component) {
  _inherits(ImageControl, _Component);

  function ImageControl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ImageControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ImageControl.__proto__ || Object.getPrototypeOf(ImageControl)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.addImage = function (src, height, width, alt) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange,
          config = _this$props.config;

      var entityData = { src: src, height: height, width: width };
      if (config.alt.present) {
        entityData.alt = alt;
      }
      var entityKey = editorState.getCurrentContent().createEntity('IMAGE', 'MUTABLE', entityData).getLastCreatedEntityKey();
      var newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
      onChange(newEditorState);
      _this.doCollapse();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ImageControl, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          translations = _props.translations;
      var expanded = this.state.expanded;

      var ImageComponent = config.component || _Component3.default;
      return _react2.default.createElement(ImageComponent, {
        config: config,
        translations: translations,
        onChange: this.addImage,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return ImageControl;
}(_react.Component);

ImageControl.propTypes = {
  editorState: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = ImageControl;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

var _Spinner = __webpack_require__(14);

var _Spinner2 = _interopRequireDefault(_Spinner);

__webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      imgSrc: '',
      dragEnter: false,
      uploadHighlighted: _this.props.config.uploadEnabled && !!_this.props.config.uploadCallback,
      showImageLoading: false,
      height: _this.props.config.defaultSize.height,
      width: _this.props.config.defaultSize.width,
      alt: ''
    }, _this.onDragEnter = function (event) {
      _this.stopPropagation(event);
      _this.setState({
        dragEnter: true
      });
    }, _this.onImageDrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.setState({
        dragEnter: false
      });

      // Check if property name is files or items
      // IE uses 'files' instead of 'items'
      var data = void 0;
      var dataIsItems = void 0;
      if (event.dataTransfer.items) {
        data = event.dataTransfer.items;
        dataIsItems = true;
      } else {
        data = event.dataTransfer.files;
        dataIsItems = false;
      }
      for (var i = 0; i < data.length; i += 1) {
        if ((!dataIsItems || data[i].kind === 'file') && data[i].type.match('^image/')) {
          var file = dataIsItems ? data[i].getAsFile() : data[i];
          _this.uploadImage(file);
        }
      }
    }, _this.showImageUploadOption = function () {
      _this.setState({
        uploadHighlighted: true
      });
    }, _this.addImageFromState = function () {
      var _this$state = _this.state,
          imgSrc = _this$state.imgSrc,
          alt = _this$state.alt;
      var _this$state2 = _this.state,
          height = _this$state2.height,
          width = _this$state2.width;
      var onChange = _this.props.onChange;

      if (!isNaN(height)) {
        height += 'px';
      }
      if (!isNaN(width)) {
        width += 'px';
      }
      onChange(imgSrc, height, width, alt);
    }, _this.showImageURLOption = function () {
      _this.setState({
        uploadHighlighted: false
      });
    }, _this.toggleShowImageLoading = function () {
      var showImageLoading = !_this.state.showImageLoading;
      _this.setState({
        showImageLoading: showImageLoading
      });
    }, _this.updateValue = function (event) {
      _this.setState(_defineProperty({}, '' + event.target.name, event.target.value));
    }, _this.selectImage = function (event) {
      if (event.target.files && event.target.files.length > 0) {
        _this.uploadImage(event.target.files[0]);
      }
    }, _this.uploadImage = function (file) {
      _this.toggleShowImageLoading();
      var uploadCallback = _this.props.config.uploadCallback;

      uploadCallback(file).then(function (_ref2) {
        var data = _ref2.data;

        _this.setState({
          showImageLoading: false,
          dragEnter: false,
          imgSrc: data.link || data.url
        });
        _this.fileUpload = false;
      }).catch(function () {
        _this.setState({
          showImageLoading: false,
          dragEnter: false
        });
      });
    }, _this.fileUploadClick = function (event) {
      _this.fileUpload = true;
      event.stopPropagation();
    }, _this.stopPropagation = function (event) {
      if (!_this.fileUpload) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        _this.fileUpload = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.expanded && !props.expanded) {
        this.setState({
          imgSrc: '',
          dragEnter: false,
          uploadHighlighted: this.props.config.uploadEnabled && !!this.props.config.uploadCallback,
          showImageLoading: false,
          height: this.props.config.defaultSize.height,
          width: this.props.config.defaultSize.width,
          alt: ''
        });
      } else if (props.config.uploadCallback !== this.props.config.uploadCallback || props.config.uploadEnabled !== this.props.config.uploadEnabled) {
        this.setState({
          uploadHighlighted: props.config.uploadEnabled && !!props.config.uploadCallback
        });
      }
    }
  }, {
    key: 'renderAddImageModal',
    value: function renderAddImageModal() {
      var _state = this.state,
          imgSrc = _state.imgSrc,
          uploadHighlighted = _state.uploadHighlighted,
          showImageLoading = _state.showImageLoading,
          dragEnter = _state.dragEnter,
          height = _state.height,
          width = _state.width,
          alt = _state.alt;
      var _props = this.props,
          _props$config = _props.config,
          popupClassName = _props$config.popupClassName,
          uploadCallback = _props$config.uploadCallback,
          uploadEnabled = _props$config.uploadEnabled,
          urlEnabled = _props$config.urlEnabled,
          previewImage = _props$config.previewImage,
          inputAccept = _props$config.inputAccept,
          altConf = _props$config.alt,
          doCollapse = _props.doCollapse,
          translations = _props.translations;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-image-modal', popupClassName),
          onClick: this.stopPropagation
        },
        _react2.default.createElement(
          'div',
          { className: 'rdw-image-modal-header' },
          uploadEnabled && uploadCallback && _react2.default.createElement(
            'span',
            {
              onClick: this.showImageUploadOption,
              className: 'rdw-image-modal-header-option'
            },
            translations['components.controls.image.fileUpload'],
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('rdw-image-modal-header-label', { 'rdw-image-modal-header-label-highlighted': uploadHighlighted })
            })
          ),
          urlEnabled && _react2.default.createElement(
            'span',
            {
              onClick: this.showImageURLOption,
              className: 'rdw-image-modal-header-option'
            },
            translations['components.controls.image.byURL'],
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('rdw-image-modal-header-label', { 'rdw-image-modal-header-label-highlighted': !uploadHighlighted })
            })
          )
        ),
        uploadHighlighted ? _react2.default.createElement(
          'div',
          { onClick: this.fileUploadClick },
          _react2.default.createElement(
            'div',
            {
              onDragEnter: this.onDragEnter,
              onDragOver: this.stopPropagation,
              onDrop: this.onImageDrop,
              className: (0, _classnames2.default)('rdw-image-modal-upload-option', { 'rdw-image-modal-upload-option-highlighted': dragEnter })
            },
            _react2.default.createElement(
              'label',
              {
                htmlFor: 'file',
                className: 'rdw-image-modal-upload-option-label'
              },
              previewImage && imgSrc ? _react2.default.createElement('img', {
                src: imgSrc,
                alt: imgSrc,
                className: 'rdw-image-modal-upload-option-image-preview'
              }) : imgSrc || translations['components.controls.image.dropFileText']
            )
          ),
          _react2.default.createElement('input', {
            type: 'file',
            id: 'file',
            accept: inputAccept,
            onChange: this.selectImage,
            className: 'rdw-image-modal-upload-option-input'
          })
        ) : _react2.default.createElement(
          'div',
          { className: 'rdw-image-modal-url-section' },
          _react2.default.createElement('input', {
            className: 'rdw-image-modal-url-input',
            placeholder: translations['components.controls.image.enterlink'],
            name: 'imgSrc',
            onChange: this.updateValue,
            onBlur: this.updateValue,
            value: imgSrc
          }),
          _react2.default.createElement(
            'span',
            { className: 'rdw-image-mandatory-sign' },
            '*'
          )
        ),
        altConf.present && _react2.default.createElement(
          'div',
          { className: 'rdw-image-modal-size' },
          _react2.default.createElement(
            'span',
            { className: 'rdw-image-modal-alt-lbl' },
            'Alt Text'
          ),
          _react2.default.createElement('input', {
            onChange: this.updateValue,
            onBlur: this.updateValue,
            value: alt,
            name: 'alt',
            className: 'rdw-image-modal-alt-input',
            placeholder: 'alt'
          }),
          _react2.default.createElement(
            'span',
            { className: 'rdw-image-mandatory-sign' },
            altConf.mandatory && '*'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rdw-image-modal-size' },
          '\u2195\xA0',
          _react2.default.createElement('input', {
            onChange: this.updateValue,
            onBlur: this.updateValue,
            value: height,
            name: 'height',
            className: 'rdw-image-modal-size-input',
            placeholder: 'Height'
          }),
          _react2.default.createElement(
            'span',
            { className: 'rdw-image-mandatory-sign' },
            '*'
          ),
          '\xA0\u2194\xA0',
          _react2.default.createElement('input', {
            onChange: this.updateValue,
            onBlur: this.updateValue,
            value: width,
            name: 'width',
            className: 'rdw-image-modal-size-input',
            placeholder: 'Width'
          }),
          _react2.default.createElement(
            'span',
            { className: 'rdw-image-mandatory-sign' },
            '*'
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'rdw-image-modal-btn-section' },
          _react2.default.createElement(
            'button',
            {
              className: 'rdw-image-modal-btn',
              onClick: this.addImageFromState,
              disabled: !imgSrc || !height || !width || altConf.mandatory && !alt
            },
            translations['generic.add']
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'rdw-image-modal-btn',
              onClick: doCollapse
            },
            translations['generic.cancel']
          )
        ),
        showImageLoading ? _react2.default.createElement(
          'div',
          { className: 'rdw-image-modal-spinner' },
          _react2.default.createElement(_Spinner2.default, null)
        ) : undefined
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          _props2$config = _props2.config,
          icon = _props2$config.icon,
          className = _props2$config.className,
          title = _props2$config.title,
          expanded = _props2.expanded,
          onExpandEvent = _props2.onExpandEvent,
          translations = _props2.translations;

      return _react2.default.createElement(
        'div',
        {
          className: 'rdw-image-wrapper',
          'aria-haspopup': 'true',
          'aria-expanded': expanded,
          'aria-label': 'rdw-image-control'
        },
        _react2.default.createElement(
          _Option2.default,
          {
            className: (0, _classnames2.default)(className),
            value: 'unordered-list-item',
            onClick: onExpandEvent,
            title: title || translations['components.controls.image.image']
          },
          _react2.default.createElement('img', {
            src: icon,
            alt: ''
          })
        ),
        expanded ? this.renderAddImageModal() : undefined
      );
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  onExpandEvent: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-spinner":"rdw-spinner","sk-bouncedelay":"sk-bouncedelay","rdw-bounce1":"rdw-bounce1","rdw-bounce2":"rdw-bounce2"};

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-image-wrapper":"rdw-image-wrapper","rdw-image-modal":"rdw-image-modal","rdw-image-modal-header":"rdw-image-modal-header","rdw-image-modal-header-option":"rdw-image-modal-header-option","rdw-image-modal-header-label":"rdw-image-modal-header-label","rdw-image-modal-header-label-highlighted":"rdw-image-modal-header-label-highlighted","rdw-image-modal-upload-option":"rdw-image-modal-upload-option","rdw-image-modal-upload-option-highlighted":"rdw-image-modal-upload-option-highlighted","rdw-image-modal-upload-option-label":"rdw-image-modal-upload-option-label","rdw-image-modal-upload-option-image-preview":"rdw-image-modal-upload-option-image-preview","rdw-image-modal-upload-option-input":"rdw-image-modal-upload-option-input","rdw-image-modal-url-section":"rdw-image-modal-url-section","rdw-image-modal-url-input":"rdw-image-modal-url-input","rdw-image-modal-btn-section":"rdw-image-modal-btn-section","rdw-image-modal-btn":"rdw-image-modal-btn","rdw-image-modal-spinner":"rdw-image-modal-spinner","rdw-image-modal-alt-input":"rdw-image-modal-alt-input","rdw-image-modal-alt-lbl":"rdw-image-modal-alt-lbl","rdw-image-modal-size":"rdw-image-modal-size","rdw-image-modal-size-input":"rdw-image-modal-size-input","rdw-image-mandatory-sign":"rdw-image-mandatory-sign"};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _Component2 = __webpack_require__(77);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VideoControl = function (_Component) {
  _inherits(VideoControl, _Component);

  function VideoControl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, VideoControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoControl.__proto__ || Object.getPrototypeOf(VideoControl)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.addVideo = function (src, height, width, alt) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange,
          config = _this$props.config;

      var entityData = { src: src, height: height, width: width };
      if (config.alt.present) {
        entityData.alt = alt;
      }
      var entityKey = editorState.getCurrentContent().createEntity('VIDEO', 'MUTABLE', entityData).getLastCreatedEntityKey();
      var newEditorState = _draftJs.AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
      onChange(newEditorState);
      _this.doCollapse();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(VideoControl, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          translations = _props.translations;
      var expanded = this.state.expanded;

      var VideoComponent = config.component || _Component3.default;
      return _react2.default.createElement(VideoComponent, {
        config: config,
        translations: translations,
        onChange: this.addVideo,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse
      });
    }
  }]);

  return VideoControl;
}(_react.Component);

VideoControl.propTypes = {
  editorState: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = VideoControl;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

var _Spinner = __webpack_require__(14);

var _Spinner2 = _interopRequireDefault(_Spinner);

__webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayoutComponent = function (_Component) {
  _inherits(LayoutComponent, _Component);

  function LayoutComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LayoutComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LayoutComponent.__proto__ || Object.getPrototypeOf(LayoutComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      imgSrc: '',
      dragEnter: false,
      uploadHighlighted: _this.props.config.uploadEnabled && !!_this.props.config.uploadCallback,
      showVideoLoading: false,
      height: _this.props.config.defaultSize.height,
      width: _this.props.config.defaultSize.width,
      alt: ''
    }, _this.onDragEnter = function (event) {
      _this.stopPropagation(event);
      _this.setState({
        dragEnter: true
      });
    }, _this.onVideoDrop = function (event) {
      event.preventDefault();
      event.stopPropagation();
      _this.setState({
        dragEnter: false
      });

      // Check if property name is files or items
      // IE uses 'files' instead of 'items'
      var data = void 0;
      var dataIsItems = void 0;
      if (event.dataTransfer.items) {
        data = event.dataTransfer.items;
        dataIsItems = true;
      } else {
        data = event.dataTransfer.files;
        dataIsItems = false;
      }
      for (var i = 0; i < data.length; i += 1) {
        if ((!dataIsItems || data[i].kind === 'file') && data[i].type.match('^video/')) {
          var file = dataIsItems ? data[i].getAsFile() : data[i];
          _this.uploadVideo(file);
        }
      }
    }, _this.showVideoUploadOption = function () {
      _this.setState({
        uploadHighlighted: true
      });
    }, _this.addVideoFromState = function () {
      var _this$state = _this.state,
          imgSrc = _this$state.imgSrc,
          alt = _this$state.alt;
      var _this$state2 = _this.state,
          height = _this$state2.height,
          width = _this$state2.width;
      var onChange = _this.props.onChange;

      if (!isNaN(height)) {
        height += 'px';
      }
      if (!isNaN(width)) {
        width += 'px';
      }
      onChange(imgSrc, height, width, alt);
    }, _this.showVideoURLOption = function () {
      _this.setState({
        uploadHighlighted: false
      });
    }, _this.toggleShowVideoLoading = function () {
      var showVideoLoading = !_this.state.showVideoLoading;
      _this.setState({
        showVideoLoading: showVideoLoading
      });
    }, _this.updateValue = function (event) {
      _this.setState(_defineProperty({}, '' + event.target.name, event.target.value));
    }, _this.selectVideo = function (event) {
      if (event.target.files && event.target.files.length > 0) {
        _this.uploadVideo(event.target.files[0]);
      }
    }, _this.uploadVideo = function (file) {
      _this.toggleShowVideoLoading();
      var uploadCallback = _this.props.config.uploadCallback;

      uploadCallback(file).then(function (_ref2) {
        var data = _ref2.data;

        _this.setState({
          showVideoLoading: false,
          dragEnter: false,
          imgSrc: data.link || data.url
        });
        _this.fileUpload = false;
      }).catch(function () {
        _this.setState({
          showVideoLoading: false,
          dragEnter: false
        });
      });
    }, _this.fileUploadClick = function (event) {
      _this.fileUpload = true;
      event.stopPropagation();
    }, _this.stopPropagation = function (event) {
      if (!_this.fileUpload) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        _this.fileUpload = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LayoutComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.expanded && !props.expanded) {
        this.setState({
          imgSrc: '',
          dragEnter: false,
          uploadHighlighted: this.props.config.uploadEnabled && !!this.props.config.uploadCallback,
          showVideoLoading: false,
          height: this.props.config.defaultSize.height,
          width: this.props.config.defaultSize.width,
          alt: ''
        });
      } else if (props.config.uploadCallback !== this.props.config.uploadCallback || props.config.uploadEnabled !== this.props.config.uploadEnabled) {
        this.setState({
          uploadHighlighted: props.config.uploadEnabled && !!props.config.uploadCallback
        });
      }
    }
  }, {
    key: 'renderAddVideoModal',
    value: function renderAddVideoModal() {
      var _state = this.state,
          imgSrc = _state.imgSrc,
          uploadHighlighted = _state.uploadHighlighted,
          showVideoLoading = _state.showVideoLoading,
          dragEnter = _state.dragEnter,
          height = _state.height,
          width = _state.width,
          alt = _state.alt;
      var _props = this.props,
          _props$config = _props.config,
          popupClassName = _props$config.popupClassName,
          uploadCallback = _props$config.uploadCallback,
          uploadEnabled = _props$config.uploadEnabled,
          urlEnabled = _props$config.urlEnabled,
          previewVideo = _props$config.previewVideo,
          inputAccept = _props$config.inputAccept,
          altConf = _props$config.alt,
          doCollapse = _props.doCollapse,
          translations = _props.translations;


      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)('rdw-video-modal', popupClassName),
          onClick: this.stopPropagation
        },
        _react2.default.createElement(
          'div',
          { className: 'rdw-video-modal-header' },
          uploadEnabled && uploadCallback && _react2.default.createElement(
            'span',
            {
              onClick: this.showVideoUploadOption,
              className: 'rdw-video-modal-header-option'
            },
            translations['components.controls.video.fileUpload'],
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('rdw-video-modal-header-label', { 'rdw-video-modal-header-label-highlighted': uploadHighlighted })
            })
          ),
          urlEnabled && _react2.default.createElement(
            'span',
            {
              onClick: this.showVideoURLOption,
              className: 'rdw-video-modal-header-option'
            },
            translations['components.controls.video.byURL'],
            _react2.default.createElement('span', {
              className: (0, _classnames2.default)('rdw-video-modal-header-label', { 'rdw-video-modal-header-label-highlighted': !uploadHighlighted })
            })
          )
        ),
        uploadHighlighted ? _react2.default.createElement(
          'div',
          { onClick: this.fileUploadClick },
          _react2.default.createElement(
            'div',
            {
              onDragEnter: this.onDragEnter,
              onDragOver: this.stopPropagation,
              onDrop: this.onVideoDrop,
              className: (0, _classnames2.default)('rdw-video-modal-upload-option', { 'rdw-video-modal-upload-option-highlighted': dragEnter })
            },
            _react2.default.createElement(
              'label',
              {
                htmlFor: 'file',
                className: 'rdw-video-modal-upload-option-label'
              },
              previewVideo && imgSrc ? _react2.default.createElement('video', {
                controls: true,
                src: imgSrc,
                alt: imgSrc,
                className: 'rdw-video-modal-upload-option-video-preview'
              }) : imgSrc || translations['components.controls.video.dropFileText']
            )
          ),
          _react2.default.createElement('input', {
            type: 'file',
            id: 'file',
            accept: inputAccept,
            onChange: this.selectVideo,
            className: 'rdw-video-modal-upload-option-input'
          })
        ) : _react2.default.createElement(
          'div',
          { className: 'rdw-video-modal-url-section' },
          _react2.default.createElement('input', {
            className: 'rdw-video-modal-url-input',
            placeholder: translations['components.controls.video.enterlink'],
            name: 'imgSrc',
            onChange: this.updateValue,
            onBlur: this.updateValue,
            value: imgSrc
          }),
          _react2.default.createElement(
            'span',
            { className: 'rdw-video-mandatory-sign' },
            '*'
          )
        ),
        altConf.present && _react2.default.createElement(
          'div',
          { className: 'rdw-video-modal-size' },
          _react2.default.createElement(
            'span',
            { className: 'rdw-video-modal-alt-lbl' },
            'Alt Text'
          ),
          _react2.default.createElement('input', {
            onChange: this.updateValue,
            onBlur: this.updateValue,
            value: alt,
            name: 'alt',
            className: 'rdw-video-modal-alt-input',
            placeholder: 'alt'
          }),
          _react2.default.createElement(
            'span',
            { className: 'rdw-video-mandatory-sign' },
            altConf.mandatory && '*'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'rdw-video-modal-size' },
          '\u2195\xA0',
          _react2.default.createElement('input', {
            onChange: this.updateValue,
            onBlur: this.updateValue,
            value: height,
            name: 'height',
            className: 'rdw-video-modal-size-input',
            placeholder: 'Height'
          }),
          _react2.default.createElement(
            'span',
            { className: 'rdw-video-mandatory-sign' },
            '*'
          ),
          '\xA0\u2194\xA0',
          _react2.default.createElement('input', {
            onChange: this.updateValue,
            onBlur: this.updateValue,
            value: width,
            name: 'width',
            className: 'rdw-video-modal-size-input',
            placeholder: 'Width'
          }),
          _react2.default.createElement(
            'span',
            { className: 'rdw-video-mandatory-sign' },
            '*'
          )
        ),
        _react2.default.createElement(
          'span',
          { className: 'rdw-video-modal-btn-section' },
          _react2.default.createElement(
            'button',
            {
              className: 'rdw-video-modal-btn',
              onClick: this.addVideoFromState,
              disabled: !imgSrc || !height || !width || altConf.mandatory && !alt
            },
            translations['generic.add']
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'rdw-video-modal-btn',
              onClick: doCollapse
            },
            translations['generic.cancel']
          )
        ),
        showVideoLoading ? _react2.default.createElement(
          'div',
          { className: 'rdw-video-modal-spinner' },
          _react2.default.createElement(_Spinner2.default, null)
        ) : undefined
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          _props2$config = _props2.config,
          icon = _props2$config.icon,
          className = _props2$config.className,
          title = _props2$config.title,
          expanded = _props2.expanded,
          onExpandEvent = _props2.onExpandEvent,
          translations = _props2.translations;

      return _react2.default.createElement(
        'div',
        {
          className: 'rdw-video-wrapper',
          'aria-haspopup': 'true',
          'aria-expanded': expanded,
          'aria-label': 'rdw-video-control'
        },
        _react2.default.createElement(
          _Option2.default,
          {
            className: (0, _classnames2.default)(className),
            value: 'unordered-list-item',
            onClick: onExpandEvent,
            title: title || translations['components.controls.video.video']
          },
          _react2.default.createElement('img', {
            src: icon,
            alt: ''
          })
        ),
        expanded ? this.renderAddVideoModal() : undefined
      );
    }
  }]);

  return LayoutComponent;
}(_react.Component);

LayoutComponent.propTypes = {
  expanded: _propTypes2.default.bool,
  onExpandEvent: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = LayoutComponent;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-video-wrapper":"rdw-video-wrapper","rdw-video-modal":"rdw-video-modal","rdw-video-modal-header":"rdw-video-modal-header","rdw-video-modal-header-option":"rdw-video-modal-header-option","rdw-video-modal-header-label":"rdw-video-modal-header-label","rdw-video-modal-header-label-highlighted":"rdw-video-modal-header-label-highlighted","rdw-video-modal-upload-option":"rdw-video-modal-upload-option","rdw-video-modal-upload-option-highlighted":"rdw-video-modal-upload-option-highlighted","rdw-video-modal-upload-option-label":"rdw-video-modal-upload-option-label","rdw-video-modal-upload-option-video-preview":"rdw-video-modal-upload-option-video-preview","rdw-video-modal-upload-option-input":"rdw-video-modal-upload-option-input","rdw-video-modal-url-section":"rdw-video-modal-url-section","rdw-video-modal-url-input":"rdw-video-modal-url-input","rdw-video-modal-btn-section":"rdw-video-modal-btn-section","rdw-video-modal-btn":"rdw-video-modal-btn","rdw-video-modal-spinner":"rdw-video-modal-spinner","rdw-video-modal-alt-input":"rdw-video-modal-alt-input","rdw-video-modal-alt-lbl":"rdw-video-modal-alt-lbl","rdw-video-modal-size":"rdw-video-modal-size","rdw-video-modal-size-input":"rdw-video-modal-size-input","rdw-video-mandatory-sign":"rdw-video-mandatory-sign"};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _draftjsUtils = __webpack_require__(5);

var _common = __webpack_require__(6);

var _Component2 = __webpack_require__(80);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Remove = function (_Component) {
  _inherits(Remove, _Component);

  function Remove() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Remove);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Remove.__proto__ || Object.getPrototypeOf(Remove)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _this.removeInlineStyles = function () {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      onChange(_this.removeAllInlineStyles(editorState));
    }, _this.removeAllInlineStyles = function (editorState) {
      var contentState = editorState.getCurrentContent();
      ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'MONOSPACE', 'SUPERSCRIPT', 'SUBSCRIPT'].forEach(function (style) {
        contentState = _draftJs.Modifier.removeInlineStyle(contentState, editorState.getSelection(), style);
      });
      var customStyles = (0, _draftjsUtils.getSelectionCustomInlineStyle)(editorState, ['FONTSIZE', 'FONTFAMILY', 'COLOR', 'BGCOLOR']);
      (0, _common.forEach)(customStyles, function (key, value) {
        if (value) {
          contentState = _draftJs.Modifier.removeInlineStyle(contentState, editorState.getSelection(), value);
        }
      });

      return _draftJs.EditorState.push(editorState, contentState, 'change-inline-style');
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Remove, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          translations = _props.translations;
      var expanded = this.state.expanded;

      var RemoveComponent = config.component || _Component3.default;
      return _react2.default.createElement(RemoveComponent, {
        config: config,
        translations: translations,
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onChange: this.removeInlineStyles
      });
    }
  }]);

  return Remove;
}(_react.Component);

// todo: unit test coverage


Remove.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  editorState: _propTypes2.default.object.isRequired,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object,
  modalHandler: _propTypes2.default.object
};
exports.default = Remove;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

__webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveComponent = function RemoveComponent(_ref) {
  var config = _ref.config,
      onChange = _ref.onChange,
      translations = _ref.translations;
  var icon = config.icon,
      className = config.className,
      title = config.title;

  return _react2.default.createElement(
    'div',
    { className: 'rdw-remove-wrapper', 'aria-label': 'rdw-remove-control' },
    _react2.default.createElement(
      _Option2.default,
      {
        className: (0, _classnames2.default)(className),
        onClick: onChange,
        title: title || translations['components.controls.remove.remove']
      },
      _react2.default.createElement('img', {
        src: icon,
        alt: ''
      })
    )
  );
};

RemoveComponent.propTypes = {
  onChange: _propTypes2.default.func,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};

exports.default = RemoveComponent;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-remove-wrapper":"rdw-remove-wrapper"};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _Component2 = __webpack_require__(83);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Component) {
  _inherits(History, _Component);

  function History() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, History);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = History.__proto__ || Object.getPrototypeOf(History)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      expanded: false,
      undoDisabled: false,
      redoDisabled: false
    }, _this.onExpandEvent = function () {
      _this.signalExpanded = !_this.state.expanded;
    }, _this.onChange = function (action) {
      var _this$props = _this.props,
          editorState = _this$props.editorState,
          onChange = _this$props.onChange;

      var newState = _draftJs.EditorState[action](editorState);
      if (newState) {
        onChange(newState);
      }
    }, _this.doExpand = function () {
      _this.setState({
        expanded: true
      });
    }, _this.doCollapse = function () {
      _this.setState({
        expanded: false
      });
    }, _this.expandCollapse = function () {
      _this.setState({
        expanded: _this.signalExpanded
      });
      _this.signalExpanded = false;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(History, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          editorState = _props.editorState,
          modalHandler = _props.modalHandler;

      if (editorState) {
        this.setState({
          undoDisabled: editorState.getUndoStack().size === 0,
          redoDisabled: editorState.getRedoStack().size === 0
        });
      }
      modalHandler.registerCallBack(this.expandCollapse);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(properties) {
      if (properties.editorState && this.props.editorState !== properties.editorState) {
        this.setState({
          undoDisabled: properties.editorState.getUndoStack().size === 0,
          redoDisabled: properties.editorState.getRedoStack().size === 0
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var modalHandler = this.props.modalHandler;

      modalHandler.deregisterCallBack(this.expandCollapse);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          config = _props2.config,
          translations = _props2.translations;
      var _state = this.state,
          undoDisabled = _state.undoDisabled,
          redoDisabled = _state.redoDisabled,
          expanded = _state.expanded;

      var HistoryComponent = config.component || _Component3.default;
      return _react2.default.createElement(HistoryComponent, {
        config: config,
        translations: translations,
        currentState: { undoDisabled: undoDisabled, redoDisabled: redoDisabled },
        expanded: expanded,
        onExpandEvent: this.onExpandEvent,
        doExpand: this.doExpand,
        doCollapse: this.doCollapse,
        onChange: this.onChange
      });
    }
  }]);

  return History;
}(_react.Component);

History.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  editorState: _propTypes2.default.object,
  modalHandler: _propTypes2.default.object,
  config: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = History;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _toolbar = __webpack_require__(8);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

var _Dropdown = __webpack_require__(7);

__webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_Component) {
  _inherits(History, _Component);

  function History() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, History);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = History.__proto__ || Object.getPrototypeOf(History)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (obj) {
      var onChange = _this.props.onChange;

      onChange(obj);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(History, [{
    key: 'renderInDropDown',
    value: function renderInDropDown() {
      var _props = this.props,
          config = _props.config,
          expanded = _props.expanded,
          doExpand = _props.doExpand,
          onExpandEvent = _props.onExpandEvent,
          doCollapse = _props.doCollapse,
          _props$currentState = _props.currentState,
          undoDisabled = _props$currentState.undoDisabled,
          redoDisabled = _props$currentState.redoDisabled,
          translations = _props.translations;
      var options = config.options,
          undo = config.undo,
          redo = config.redo,
          className = config.className,
          dropdownClassName = config.dropdownClassName,
          title = config.title;

      return _react2.default.createElement(
        _Dropdown.Dropdown,
        {
          className: (0, _classnames2.default)('rdw-history-dropdown', className),
          optionWrapperClassName: (0, _classnames2.default)(dropdownClassName),
          expanded: expanded,
          doExpand: doExpand,
          doCollapse: doCollapse,
          onExpandEvent: onExpandEvent,
          'aria-label': 'rdw-history-control',
          title: title || translations['components.controls.history.history']
        },
        _react2.default.createElement('img', {
          src: (0, _toolbar.getFirstIcon)(config),
          alt: ''
        }),
        options.indexOf('undo') >= 0 && _react2.default.createElement(
          _Dropdown.DropdownOption,
          {
            value: 'undo',
            onClick: this.onChange,
            disabled: undoDisabled,
            className: (0, _classnames2.default)('rdw-history-dropdownoption', undo.className),
            title: undo.title || translations['components.controls.history.undo']
          },
          _react2.default.createElement('img', {
            src: undo.icon,
            alt: ''
          })
        ),
        options.indexOf('redo') >= 0 && _react2.default.createElement(
          _Dropdown.DropdownOption,
          {
            value: 'redo',
            onClick: this.onChange,
            disabled: redoDisabled,
            className: (0, _classnames2.default)('rdw-history-dropdownoption', redo.className),
            title: redo.title || translations['components.controls.history.redo']
          },
          _react2.default.createElement('img', {
            src: redo.icon,
            alt: ''
          })
        )
      );
    }
  }, {
    key: 'renderInFlatList',
    value: function renderInFlatList() {
      var _props2 = this.props,
          _props2$config = _props2.config,
          options = _props2$config.options,
          undo = _props2$config.undo,
          redo = _props2$config.redo,
          className = _props2$config.className,
          _props2$currentState = _props2.currentState,
          undoDisabled = _props2$currentState.undoDisabled,
          redoDisabled = _props2$currentState.redoDisabled,
          translations = _props2.translations;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rdw-history-wrapper', className), 'aria-label': 'rdw-history-control' },
        options.indexOf('undo') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'undo',
            onClick: this.onChange,
            className: (0, _classnames2.default)(undo.className),
            disabled: undoDisabled,
            title: undo.title || translations['components.controls.history.undo']
          },
          _react2.default.createElement('img', {
            src: undo.icon,
            alt: ''
          })
        ),
        options.indexOf('redo') >= 0 && _react2.default.createElement(
          _Option2.default,
          {
            value: 'redo',
            onClick: this.onChange,
            className: (0, _classnames2.default)(redo.className),
            disabled: redoDisabled,
            title: redo.title || translations['components.controls.history.redo']
          },
          _react2.default.createElement('img', {
            src: redo.icon,
            alt: ''
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var config = this.props.config;

      if (config.inDropdown) {
        return this.renderInDropDown();
      }
      return this.renderInFlatList();
    }
  }]);

  return History;
}(_react.Component);

History.propTypes = {
  expanded: _propTypes2.default.bool,
  doExpand: _propTypes2.default.func,
  doCollapse: _propTypes2.default.func,
  onExpandEvent: _propTypes2.default.func,
  config: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  currentState: _propTypes2.default.object,
  translations: _propTypes2.default.object
};
exports.default = History;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-history-wrapper":"rdw-history-wrapper","rdw-history-dropdownoption":"rdw-history-dropdownoption","rdw-history-dropdown":"rdw-history-dropdown"};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _openlink = __webpack_require__(86);

var _openlink2 = _interopRequireDefault(_openlink);

__webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

function getLinkComponent(config) {
  var _class, _temp2;

  var showOpenOptionOnHover = config.showOpenOptionOnHover;
  return _temp2 = _class = function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Link);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        showPopOver: false
      }, _this.openLink = function () {
        var _this$props = _this.props,
            entityKey = _this$props.entityKey,
            contentState = _this$props.contentState;

        var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
            url = _contentState$getEnti.url;

        var linkTab = window.open(url, 'blank'); // eslint-disable-line no-undef
        // linkTab can be null when the window failed to open.
        if (linkTab) {
          linkTab.focus();
        }
      }, _this.toggleShowPopOver = function () {
        var showPopOver = !_this.state.showPopOver;
        _this.setState({
          showPopOver: showPopOver
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            entityKey = _props.entityKey,
            contentState = _props.contentState;

        var _contentState$getEnti2 = contentState.getEntity(entityKey).getData(),
            url = _contentState$getEnti2.url,
            targetOption = _contentState$getEnti2.targetOption;

        var showPopOver = this.state.showPopOver;

        return _react2.default.createElement(
          'span',
          {
            className: 'rdw-link-decorator-wrapper',
            onMouseEnter: this.toggleShowPopOver,
            onMouseLeave: this.toggleShowPopOver
          },
          _react2.default.createElement(
            'a',
            { href: url, target: targetOption },
            children
          ),
          showPopOver && showOpenOptionOnHover ? _react2.default.createElement('img', {
            src: _openlink2.default,
            alt: '',
            onClick: this.openLink,
            className: 'rdw-link-decorator-icon'
          }) : undefined
        );
      }
    }]);

    return Link;
  }(_react.Component), _class.propTypes = {
    entityKey: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.array,
    contentState: _propTypes2.default.object
  }, _temp2;
}

exports.default = function (config) {
  return {
    strategy: findLinkEntities,
    component: getLinkComponent(config)
  };
};

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE1IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+b3Blbmxpbms8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ib3BlbmxpbmsiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iQ2FwYV8xIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjA3MTU4NDUsMCBMOC45MTUzMzQ1MSwwIEM4LjQwNTY1MTQxLDAgNy45OTEwMzg3MywwLjQxNDY2NTQ5MyA3Ljk5MTAzODczLDAuOTI0Mjk1Nzc1IEM3Ljk5MTAzODczLDEuNDMzOTI2MDYgOC40MDU2NTE0MSwxLjg0ODU5MTU1IDguOTE1MzM0NTEsMS44NDg1OTE1NSBMMTEuODQwMTc2MSwxLjg0ODU5MTU1IEw2Ljk2MTIxNDc5LDYuNzI3NSBDNi43ODY1NDkzLDYuOTAyMDU5ODYgNi42OTA0MjI1NCw3LjEzNDEzNzMyIDYuNjkwNDIyNTQsNy4zODExMDkxNSBDNi42OTA0MjI1NCw3LjYyODA4MDk5IDYuNzg2NDk2NDgsNy44NjAxMDU2MyA2Ljk2MTEwOTE1LDguMDM0NTA3MDQgQzcuMTM1NzIxODMsOC4yMDkyNzgxNyA3LjM2Nzc0NjQ4LDguMzA1NDU3NzUgNy42MTQ3MTgzMSw4LjMwNTQ1Nzc1IEM3Ljg2MTU4NDUxLDguMzA1NDU3NzUgOC4wOTM3MTQ3OSw4LjIwOTMzMDk5IDguMjY4MzgwMjgsOC4wMzQ2NjU0OSBMMTMuMTQ3Mjg4NywzLjE1NTcwNDIzIEwxMy4xNDcyODg3LDYuMDgwNTQ1NzcgQzEzLjE0NzI4ODcsNi41OTAxNzYwNiAxMy41NjE5NTQyLDcuMDA0ODQxNTUgMTQuMDcxNTg0NSw3LjAwNDg0MTU1IEMxNC41ODEyMTQ4LDcuMDA0ODQxNTUgMTQuOTk1ODgwMyw2LjU5MDE3NjA2IDE0Ljk5NTg4MDMsNi4wODA1NDU3NyBMMTQuOTk1ODgwMywwLjkyNDI5NTc3NSBDMTQuOTk1ODgwMywwLjQxNDY2NTQ5MyAxNC41ODEyMTQ4LDAgMTQuMDcxNTg0NSwwIEwxNC4wNzE1ODQ1LDAgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjYyMzQzMzEsMTMuNDExMzczMiBMMS41ODQ1MDcwNCwxMy40MTEzNzMyIEwxLjU4NDUwNzA0LDQuMzcyNDQ3MTggTDguMzgyNjIzMjQsNC4zNzI0NDcxOCBMOS45NjcxMzAyOCwyLjc4Nzk0MDE0IEwwLjc5MjI1MzUyMSwyLjc4Nzk0MDE0IEMwLjM1NDcxODMxLDIuNzg3OTQwMTQgMCwzLjE0MjY1ODQ1IDAsMy41ODAxOTM2NiBMMCwxNC4yMDM2MjY4IEMwLDE0LjY0MTE2MiAwLjM1NDcxODMxLDE0Ljk5NTg4MDMgMC43OTIyNTM1MjEsMTQuOTk1ODgwMyBMMTEuNDE1Njg2NiwxNC45OTU4ODAzIEMxMS44NTMyMjE4LDE0Ljk5NTg4MDMgMTIuMjA3OTQwMSwxNC42NDExNjIgMTIuMjA3OTQwMSwxNC4yMDM2MjY4IEwxMi4yMDc5NDAxLDUuMDI4NzUgTDEwLjYyMzQzMzEsNi42MTMyNTcwNCBMMTAuNjIzNDMzMSwxMy40MTEzNzMyIEwxMC42MjM0MzMxLDEzLjQxMTM3MzIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-link-decorator-wrapper":"rdw-link-decorator-wrapper","rdw-link-decorator-icon":"rdw-link-decorator-icon"};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _openCTABox = __webpack_require__(89);

var _openCTABox2 = _interopRequireDefault(_openCTABox);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function findCTABoxEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'CTA_BOX';
  }, callback);
}

function getCTABoxComponent(config) {
  var _class, _temp2;

  var showOpenOptionOnHover = config.showOpenOptionOnHover;
  return _temp2 = _class = function (_Component) {
    _inherits(CTABox, _Component);

    function CTABox() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, CTABox);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CTABox.__proto__ || Object.getPrototypeOf(CTABox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        showPopOver: false
      }, _this.openCTABox = function () {
        var _this$props = _this.props,
            entityKey = _this$props.entityKey,
            contentState = _this$props.contentState;

        var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
            url = _contentState$getEnti.url;

        var ctaBoxTab = window.open(url, 'blank'); // eslint-disable-line no-undef
        // ctaBoxTab can be null when the window failed to open.
        if (ctaBoxTab) {
          ctaBoxTab.focus();
        }
      }, _this.toggleShowPopOver = function () {
        var showPopOver = !_this.state.showPopOver;
        _this.setState({
          showPopOver: showPopOver
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CTABox, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            entityKey = _props.entityKey,
            contentState = _props.contentState;

        var _contentState$getEnti2 = contentState.getEntity(entityKey).getData(),
            ctaTitle = _contentState$getEnti2.ctaTitle,
            ctaText = _contentState$getEnti2.ctaText,
            ctaButtonText = _contentState$getEnti2.ctaButtonText,
            url = _contentState$getEnti2.url,
            targetOption = _contentState$getEnti2.targetOption;

        var showPopOver = this.state.showPopOver;

        return _react2.default.createElement(
          'div',
          {
            className: 'rdw-ctabox-decorator-wrapper'
            // onMouseEnter={this.toggleShowPopOver}
            // onMouseLeave={this.toggleShowPopOver}
          },
          _react2.default.createElement(
            'h3',
            null,
            ctaTitle
          ),
          _react2.default.createElement(
            'p',
            null,
            ctaText
          ),
          _react2.default.createElement(
            'a',
            { href: url, target: targetOption },
            ctaButtonText
          ),
          showPopOver && showOpenOptionOnHover ? _react2.default.createElement('img', {
            src: _openCTABox2.default,
            alt: '',
            onClick: this.openCTABox,
            className: 'rdw-ctabox-decorator-icon'
          }) : undefined
        );
      }
    }]);

    return CTABox;
  }(_react.Component), _class.propTypes = {
    entityKey: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.array,
    contentState: _propTypes2.default.object
  }, _temp2;
}

exports.default = function (config) {
  return {
    strategy: findCTABoxEntities,
    component: getCTABoxComponent(config)
  };
};

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8IS0tIENyZWF0ZWQgd2l0aCBNZXRob2QgRHJhdyAtIGh0dHA6Ly9naXRodWIuY29tL2R1b3BpeGVsL01ldGhvZC1EcmF3LyAtLT4KIDxnPgogIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4KICA8cmVjdCBmaWxsPSIjZmZmIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIGhlaWdodD0iMTYiIHdpZHRoPSIxNyIgeT0iLTEiIHg9Ii0xIi8+CiAgPGcgZGlzcGxheT0ibm9uZSIgb3ZlcmZsb3c9InZpc2libGUiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJjYW52YXNHcmlkIj4KICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPgogIDwvZz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSInVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmIiBmb250LXNpemU9IjgiIGlkPSJzdmdfMyIgeT0iNi4yNTEyNDgiIHg9Ii0wLjI3MDM4MyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiMwMDAwMDAiPkNUQTwvdGV4dD4KICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSInVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmIiBmb250LXNpemU9IjYiIGlkPSJzdmdfNCIgeT0iMTIuMDc0ODc1IiB4PSIxLjE5Mzg0NCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiMwMDAwMDAiPkJPWDwvdGV4dD4KIDwvZz4KPC9zdmc+"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-ctabox-decorator-wrapper":"rdw-ctabox-decorator-wrapper","rdw-ctabox-decorator-icon":"rdw-ctabox-decorator-icon"};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Mention = __webpack_require__(92);

var _Mention2 = _interopRequireDefault(_Mention);

var _Suggestion = __webpack_require__(94);

var _Suggestion2 = _interopRequireDefault(_Suggestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDecorators = function getDecorators(config) {
  return [new _Mention2.default(config.mentionClassName).getMentionDecorator(), new _Suggestion2.default(config).getSuggestionDecorator()];
};

module.exports = getDecorators;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(93);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mention = function Mention(className) {
  _classCallCheck(this, Mention);

  _initialiseProps.call(this);

  this.className = className;
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.getMentionComponent = function () {
    var className = _this.className;
    var MentionComponent = function MentionComponent(_ref) {
      var entityKey = _ref.entityKey,
          children = _ref.children,
          contentState = _ref.contentState;

      var _contentState$getEnti = contentState.getEntity(entityKey).getData(),
          url = _contentState$getEnti.url,
          value = _contentState$getEnti.value;

      return _react2.default.createElement(
        'a',
        { href: url || value, className: (0, _classnames2.default)('rdw-mention-link', className) },
        children
      );
    };
    MentionComponent.propTypes = {
      entityKey: _propTypes2.default.number,
      children: _propTypes2.default.array,
      contentState: _propTypes2.default.object
    };
    return MentionComponent;
  };

  this.getMentionDecorator = function () {
    return {
      strategy: _this.findMentionEntities,
      component: _this.getMentionComponent()
    };
  };
};

Mention.prototype.findMentionEntities = function (contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'MENTION';
  }, callback);
};

module.exports = Mention;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-mention-link":"rdw-mention-link"};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _addMention = __webpack_require__(95);

var _addMention2 = _interopRequireDefault(_addMention);

var _keyDown = __webpack_require__(11);

var _keyDown2 = _interopRequireDefault(_keyDown);

var _suggestions = __webpack_require__(12);

var _suggestions2 = _interopRequireDefault(_suggestions);

__webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Suggestion = function Suggestion(config) {
  _classCallCheck(this, Suggestion);

  _initialiseProps.call(this);

  var separator = config.separator,
      trigger = config.trigger,
      getSuggestions = config.getSuggestions,
      onChange = config.onChange,
      getEditorState = config.getEditorState,
      getWrapperRef = config.getWrapperRef,
      caseSensitive = config.caseSensitive,
      dropdownClassName = config.dropdownClassName,
      optionClassName = config.optionClassName,
      modalHandler = config.modalHandler;

  this.config = {
    separator: separator,
    trigger: trigger,
    getSuggestions: getSuggestions,
    onChange: onChange,
    getEditorState: getEditorState,
    getWrapperRef: getWrapperRef,
    caseSensitive: caseSensitive,
    dropdownClassName: dropdownClassName,
    optionClassName: optionClassName,
    modalHandler: modalHandler
  };
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.findSuggestionEntities = function (contentBlock, callback) {
    if (_this3.config.getEditorState()) {
      var _config = _this3.config,
          separator = _config.separator,
          trigger = _config.trigger,
          getSuggestions = _config.getSuggestions,
          getEditorState = _config.getEditorState;

      var selection = getEditorState().getSelection();
      if (selection.get('anchorKey') === contentBlock.get('key') && selection.get('anchorKey') === selection.get('focusKey')) {
        var text = contentBlock.getText();
        text = text.substr(0, selection.get('focusOffset') === text.length - 1 ? text.length : selection.get('focusOffset') + 1);
        var index = text.lastIndexOf(separator + trigger);
        var preText = separator + trigger;
        if ((index === undefined || index < 0) && text[0] === trigger) {
          index = 0;
          preText = trigger;
        }
        if (index >= 0) {
          var mentionText = text.substr(index + preText.length, text.length);
          var suggestionPresent = getSuggestions().some(function (suggestion) {
            if (suggestion.value) {
              if (_this3.config.caseSensitive) {
                return suggestion.value.indexOf(mentionText) >= 0;
              }
              return suggestion.value.toLowerCase().indexOf(mentionText && mentionText.toLowerCase()) >= 0;
            }
            return false;
          });
          if (suggestionPresent) {
            callback(index === 0 ? 0 : index + 1, text.length);
          }
        }
      }
    }
  };

  this.getSuggestionComponent = getSuggestionComponent.bind(this);

  this.getSuggestionDecorator = function () {
    return {
      strategy: _this3.findSuggestionEntities,
      component: _this3.getSuggestionComponent()
    };
  };
};

function getSuggestionComponent() {
  var _class, _temp2;

  var config = this.config;

  return _temp2 = _class = function (_Component) {
    _inherits(SuggestionComponent, _Component);

    function SuggestionComponent() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, SuggestionComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SuggestionComponent.__proto__ || Object.getPrototypeOf(SuggestionComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        style: { left: 15 },
        activeOption: -1,
        showSuggestions: true
      }, _this.onEditorKeyDown = function (event) {
        var activeOption = _this.state.activeOption;

        var newState = {};
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          if (activeOption === _this.filteredSuggestions.length - 1) {
            newState.activeOption = 0;
          } else {
            newState.activeOption = activeOption + 1;
          }
        } else if (event.key === 'ArrowUp') {
          if (activeOption <= 0) {
            newState.activeOption = _this.filteredSuggestions.length - 1;
          } else {
            newState.activeOption = activeOption - 1;
          }
        } else if (event.key === 'Escape') {
          newState.showSuggestions = false;
          _suggestions2.default.close();
        } else if (event.key === 'Enter') {
          _this.addMention();
        }
        _this.setState(newState);
      }, _this.onOptionMouseEnter = function (event) {
        var index = event.target.getAttribute('data-index');
        _this.setState({
          activeOption: index
        });
      }, _this.onOptionMouseLeave = function () {
        _this.setState({
          activeOption: -1
        });
      }, _this.setSuggestionReference = function (ref) {
        _this.suggestion = ref;
      }, _this.setDropdownReference = function (ref) {
        _this.dropdown = ref;
      }, _this.closeSuggestionDropdown = function () {
        _this.setState({
          showSuggestions: false
        });
      }, _this.filteredSuggestions = [], _this.filterSuggestions = function (props) {
        var mentionText = props.children[0].props.text.substr(1);
        var suggestions = config.getSuggestions();
        _this.filteredSuggestions = suggestions && suggestions.filter(function (suggestion) {
          if (!mentionText || mentionText.length === 0) {
            return true;
          }
          if (config.caseSensitive) {
            return suggestion.value.indexOf(mentionText) >= 0;
          }
          return suggestion.value.toLowerCase().indexOf(mentionText && mentionText.toLowerCase()) >= 0;
        });
      }, _this.addMention = function () {
        var activeOption = _this.state.activeOption;

        var editorState = config.getEditorState();
        var onChange = config.onChange,
            separator = config.separator,
            trigger = config.trigger;

        var selectedMention = _this.filteredSuggestions[activeOption];
        if (selectedMention) {
          (0, _addMention2.default)(editorState, onChange, separator, trigger, selectedMention);
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SuggestionComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var editorRect = config.getWrapperRef().getBoundingClientRect();
        var suggestionRect = this.suggestion.getBoundingClientRect();
        var dropdownRect = this.dropdown.getBoundingClientRect();
        var left = void 0;
        var right = void 0;
        var bottom = void 0;
        if (editorRect.width < suggestionRect.left - editorRect.left + dropdownRect.width) {
          right = 15;
        } else {
          left = 15;
        }
        if (editorRect.bottom < dropdownRect.bottom) {
          bottom = 0;
        }
        this.setState({ // eslint-disable-line react/no-did-mount-set-state
          style: { left: left, right: right, bottom: bottom }
        });
        _keyDown2.default.registerCallBack(this.onEditorKeyDown);
        _suggestions2.default.open();
        config.modalHandler.setSuggestionCallback(this.closeSuggestionDropdown);
        this.filterSuggestions(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(props) {
        if (this.props.children !== props.children) {
          this.filterSuggestions(props);
          this.setState({
            showSuggestions: true
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _keyDown2.default.deregisterCallBack(this.onEditorKeyDown);
        _suggestions2.default.close();
        config.modalHandler.removeSuggestionCallback();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var children = this.props.children;
        var _state = this.state,
            activeOption = _state.activeOption,
            showSuggestions = _state.showSuggestions;
        var dropdownClassName = config.dropdownClassName,
            optionClassName = config.optionClassName;

        return _react2.default.createElement(
          'span',
          {
            className: 'rdw-suggestion-wrapper',
            ref: this.setSuggestionReference,
            onClick: config.modalHandler.onSuggestionClick,
            'aria-haspopup': 'true',
            'aria-label': 'rdw-suggestion-popup'
          },
          _react2.default.createElement(
            'span',
            null,
            children
          ),
          showSuggestions && _react2.default.createElement(
            'span',
            {
              className: (0, _classnames2.default)('rdw-suggestion-dropdown', dropdownClassName),
              contentEditable: 'false',
              suppressContentEditableWarning: true,
              style: this.state.style,
              ref: this.setDropdownReference
            },
            this.filteredSuggestions.map(function (suggestion, index) {
              return _react2.default.createElement(
                'span',
                {
                  key: index,
                  spellCheck: false,
                  onClick: _this2.addMention,
                  'data-index': index,
                  onMouseEnter: _this2.onOptionMouseEnter,
                  onMouseLeave: _this2.onOptionMouseLeave,
                  className: (0, _classnames2.default)('rdw-suggestion-option', optionClassName, { 'rdw-suggestion-option-active': index === activeOption })
                },
                suggestion.text
              );
            })
          )
        );
      }
    }]);

    return SuggestionComponent;
  }(_react.Component), _class.propTypes = {
    children: _propTypes2.default.array
  }, _temp2;
}

module.exports = Suggestion;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addMention;

var _draftJs = __webpack_require__(3);

var _draftjsUtils = __webpack_require__(5);

function addMention(editorState, onChange, separator, trigger, suggestion) {
  var value = suggestion.value,
      url = suggestion.url;

  var entityKey = editorState.getCurrentContent().createEntity('MENTION', 'IMMUTABLE', { text: '' + trigger + value, value: value, url: url }).getLastCreatedEntityKey();
  var selectedBlock = (0, _draftjsUtils.getSelectedBlock)(editorState);
  var selectedBlockText = selectedBlock.getText();
  var focusOffset = editorState.getSelection().focusOffset;
  var mentionIndex = (selectedBlockText.lastIndexOf(separator + trigger, focusOffset) || 0) + 1;
  var spaceAlreadyPresent = false;
  if (selectedBlockText.length === mentionIndex + 1) {
    focusOffset = selectedBlockText.length;
  }
  if (selectedBlockText[focusOffset] === ' ') {
    spaceAlreadyPresent = true;
  }
  var updatedSelection = editorState.getSelection().merge({
    anchorOffset: mentionIndex,
    focusOffset: focusOffset
  });
  var newEditorState = _draftJs.EditorState.acceptSelection(editorState, updatedSelection);
  var contentState = _draftJs.Modifier.replaceText(newEditorState.getCurrentContent(), updatedSelection, '' + trigger + value, newEditorState.getCurrentInlineStyle(), entityKey);
  newEditorState = _draftJs.EditorState.push(newEditorState, contentState, 'insert-characters');

  if (!spaceAlreadyPresent) {
    // insert a blank space after mention
    updatedSelection = newEditorState.getSelection().merge({
      anchorOffset: mentionIndex + value.length + trigger.length,
      focusOffset: mentionIndex + value.length + trigger.length
    });
    newEditorState = _draftJs.EditorState.acceptSelection(newEditorState, updatedSelection);
    contentState = _draftJs.Modifier.insertText(newEditorState.getCurrentContent(), updatedSelection, ' ', newEditorState.getCurrentInlineStyle(), undefined);
  }
  onChange(_draftJs.EditorState.push(newEditorState, contentState, 'insert-characters'));
}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-suggestion-wrapper":"rdw-suggestion-wrapper","rdw-suggestion-dropdown":"rdw-suggestion-dropdown","rdw-suggestion-option":"rdw-suggestion-option","rdw-suggestion-option-active":"rdw-suggestion-option-active"};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hashtag = function Hashtag(config) {
  var _this = this;

  _classCallCheck(this, Hashtag);

  this.getHashtagComponent = function () {
    var className = _this.className;

    var HashtagComponent = function HashtagComponent(_ref) {
      var children = _ref.children;

      var text = children[0].props.text;
      return _react2.default.createElement(
        'a',
        { href: text, className: (0, _classnames2.default)('rdw-hashtag-link', className) },
        children
      );
    };
    HashtagComponent.propTypes = {
      children: _propTypes2.default.object
    };
    return HashtagComponent;
  };

  this.findHashtagEntities = function (contentBlock, callback) {
    var text = contentBlock.getText();
    var startIndex = 0;
    var counter = 0;

    for (; text.length > 0 && startIndex >= 0;) {
      if (text[0] === _this.hashCharacter) {
        startIndex = 0;
        counter = 0;
        text = text.substr(_this.hashCharacter.length);
      } else {
        startIndex = text.indexOf(_this.separator + _this.hashCharacter);
        if (startIndex >= 0) {
          text = text.substr(startIndex + (_this.separator + _this.hashCharacter).length);
          counter += startIndex + _this.separator.length;
        }
      }
      if (startIndex >= 0) {
        var endIndex = text.indexOf(_this.separator) >= 0 ? text.indexOf(_this.separator) : text.length;
        var hashtagText = text.substr(0, endIndex);
        if (hashtagText && hashtagText.length > 0) {
          callback(counter, counter + hashtagText.length + _this.hashCharacter.length);
          counter += _this.hashCharacter.length;
        }
      }
    }
  };

  this.getHashtagDecorator = function () {
    return {
      strategy: _this.findHashtagEntities,
      component: _this.getHashtagComponent()
    };
  };

  this.className = config.className;
  this.hashCharacter = config.hashCharacter || '#';
  this.separator = config.separator || ' ';
};

var getDecorator = function getDecorator(config) {
  return new Hashtag(config).getHashtagDecorator();
};

module.exports = getDecorator;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-hashtag-link":"rdw-hashtag-link"};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Embedded = __webpack_require__(100);

var _Embedded2 = _interopRequireDefault(_Embedded);

var _Image = __webpack_require__(101);

var _Image2 = _interopRequireDefault(_Image);

var _Video = __webpack_require__(103);

var _Video2 = _interopRequireDefault(_Video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBlockRenderFunc = function getBlockRenderFunc(config, customBlockRenderer) {
  return function (block) {
    if (typeof customBlockRenderer === 'function') {
      var renderedComponent = customBlockRenderer(block, config, config.getEditorState);
      if (renderedComponent) return renderedComponent;
    }
    if (block.getType() === 'atomic') {
      var contentState = config.getEditorState().getCurrentContent();
      var entity = contentState.getEntity(block.getEntityAt(0));
      if (entity && entity.type === 'IMAGE') {
        return {
          component: (0, _Image2.default)(config),
          editable: false
        };
      } else if (entity && entity.type === 'VIDEO') {
        return {
          component: (0, _Video2.default)(config),
          editable: false
        };
      } else if (entity && entity.type === 'EMBEDDED_LINK') {
        return {
          component: _Embedded2.default,
          editable: false
        };
      }
    }
    return undefined;
  };
};

exports.default = getBlockRenderFunc;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Embed = function Embed(_ref) {
  var block = _ref.block,
      contentState = _ref.contentState;

  var entity = contentState.getEntity(block.getEntityAt(0));

  var _entity$getData = entity.getData(),
      src = _entity$getData.src,
      height = _entity$getData.height,
      width = _entity$getData.width;

  return _react2.default.createElement('iframe', { height: height, width: width, src: src, frameBorder: '0', allowFullScreen: true, title: 'Wysiwyg Embedded Content' });
};

Embed.propTypes = {
  block: _propTypes2.default.object,
  contentState: _propTypes2.default.object
};

exports.default = Embed;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getImageComponent = function getImageComponent(config) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(Image, _Component);

    function Image() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Image);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false
      }, _this.setEntityAlignmentLeft = function () {
        _this.setEntityAlignment('left');
      }, _this.setEntityAlignmentRight = function () {
        _this.setEntityAlignment('right');
      }, _this.setEntityAlignmentCenter = function () {
        _this.setEntityAlignment('none');
      }, _this.setEntityAlignment = function (alignment) {
        var _this$props = _this.props,
            block = _this$props.block,
            contentState = _this$props.contentState;

        var entityKey = block.getEntityAt(0);
        contentState.mergeEntityData(entityKey, { alignment: alignment });
        config.onChange(_draftJs.EditorState.push(config.getEditorState(), contentState, 'change-block-data'));
        _this.setState({
          dummy: true
        });
      }, _this.toggleHovered = function () {
        var hovered = !_this.state.hovered;
        _this.setState({
          hovered: hovered
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Image, [{
      key: 'renderAlignmentOptions',
      value: function renderAlignmentOptions(alignment) {
        return _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('rdw-image-alignment-options-popup', {
              'rdw-image-alignment-options-popup-right': alignment === 'right'
            })
          },
          _react2.default.createElement(
            _Option2.default,
            {
              onClick: this.setEntityAlignmentLeft,
              className: 'rdw-image-alignment-option'
            },
            'L'
          ),
          _react2.default.createElement(
            _Option2.default,
            {
              onClick: this.setEntityAlignmentCenter,
              className: 'rdw-image-alignment-option'
            },
            'C'
          ),
          _react2.default.createElement(
            _Option2.default,
            {
              onClick: this.setEntityAlignmentRight,
              className: 'rdw-image-alignment-option'
            },
            'R'
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            block = _props.block,
            contentState = _props.contentState;
        var hovered = this.state.hovered;
        var isReadOnly = config.isReadOnly,
            isImageAlignmentEnabled = config.isImageAlignmentEnabled;

        var entity = contentState.getEntity(block.getEntityAt(0));

        var _entity$getData = entity.getData(),
            src = _entity$getData.src,
            alignment = _entity$getData.alignment,
            height = _entity$getData.height,
            width = _entity$getData.width,
            alt = _entity$getData.alt;

        return _react2.default.createElement(
          'span',
          {
            onMouseEnter: this.toggleHovered,
            onMouseLeave: this.toggleHovered,
            className: (0, _classnames2.default)('rdw-image-alignment', {
              'rdw-image-left': alignment === 'left',
              'rdw-image-right': alignment === 'right',
              'rdw-image-center': !alignment || alignment === 'none'
            })
          },
          _react2.default.createElement(
            'span',
            { className: 'rdw-image-imagewrapper' },
            _react2.default.createElement('img', {
              src: src,
              alt: alt,
              style: {
                height: height,
                width: width
              }
            }),
            !isReadOnly() && hovered && isImageAlignmentEnabled() ? this.renderAlignmentOptions(alignment) : undefined
          )
        );
      }
    }]);

    return Image;
  }(_react.Component), _class.propTypes = {
    block: _propTypes2.default.object,
    contentState: _propTypes2.default.object
  }, _temp2;
};

exports.default = getImageComponent;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-image-alignment-options-popup":"rdw-image-alignment-options-popup","rdw-alignment-option-left":"rdw-alignment-option-left","rdw-image-alignment-option":"rdw-image-alignment-option","rdw-image-alignment":"rdw-image-alignment","rdw-image-imagewrapper":"rdw-image-imagewrapper","rdw-image-center":"rdw-image-center","rdw-image-left":"rdw-image-left","rdw-image-right":"rdw-image-right","rdw-image-alignment-options-popup-right":"rdw-image-alignment-options-popup-right"};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _draftJs = __webpack_require__(3);

var _classnames = __webpack_require__(2);

var _classnames2 = _interopRequireDefault(_classnames);

var _Option = __webpack_require__(4);

var _Option2 = _interopRequireDefault(_Option);

__webpack_require__(104);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getVideoComponent = function getVideoComponent(config) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(Video, _Component);

    function Video() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Video);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Video.__proto__ || Object.getPrototypeOf(Video)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hovered: false
      }, _this.setEntityAlignmentLeft = function () {
        _this.setEntityAlignment('left');
      }, _this.setEntityAlignmentRight = function () {
        _this.setEntityAlignment('right');
      }, _this.setEntityAlignmentCenter = function () {
        _this.setEntityAlignment('none');
      }, _this.setEntityAlignment = function (alignment) {
        var _this$props = _this.props,
            block = _this$props.block,
            contentState = _this$props.contentState;

        var entityKey = block.getEntityAt(0);
        contentState.mergeEntityData(entityKey, { alignment: alignment });
        config.onChange(_draftJs.EditorState.push(config.getEditorState(), contentState, 'change-block-data'));
        _this.setState({
          dummy: true
        });
      }, _this.toggleHovered = function () {
        var hovered = !_this.state.hovered;
        _this.setState({
          hovered: hovered
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Video, [{
      key: 'renderAlignmentOptions',
      value: function renderAlignmentOptions(alignment) {
        return _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('rdw-video-alignment-options-popup', {
              'rdw-video-alignment-options-popup-right': alignment === 'right'
            })
          },
          _react2.default.createElement(
            _Option2.default,
            {
              onClick: this.setEntityAlignmentLeft,
              className: 'rdw-video-alignment-option'
            },
            'L'
          ),
          _react2.default.createElement(
            _Option2.default,
            {
              onClick: this.setEntityAlignmentCenter,
              className: 'rdw-video-alignment-option'
            },
            'C'
          ),
          _react2.default.createElement(
            _Option2.default,
            {
              onClick: this.setEntityAlignmentRight,
              className: 'rdw-video-alignment-option'
            },
            'R'
          )
        );
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            block = _props.block,
            contentState = _props.contentState;
        var hovered = this.state.hovered;
        var isReadOnly = config.isReadOnly,
            isVideoAlignmentEnabled = config.isVideoAlignmentEnabled;

        var entity = contentState.getEntity(block.getEntityAt(0));

        var _entity$getData = entity.getData(),
            src = _entity$getData.src,
            alignment = _entity$getData.alignment,
            height = _entity$getData.height,
            width = _entity$getData.width,
            alt = _entity$getData.alt;

        return _react2.default.createElement(
          'span',
          {
            onMouseEnter: this.toggleHovered,
            onMouseLeave: this.toggleHovered,
            className: (0, _classnames2.default)('rdw-video-alignment', {
              'rdw-video-left': alignment === 'left',
              'rdw-video-right': alignment === 'right',
              'rdw-video-center': !alignment || alignment === 'none'
            })
          },
          _react2.default.createElement(
            'span',
            { className: 'rdw-video-videowrapper' },
            _react2.default.createElement('video', {
              controls: true,
              src: src,
              alt: alt,
              style: {
                height: height,
                width: width
              }
            }),
            !isReadOnly() && hovered && isVideoAlignmentEnabled() ? this.renderAlignmentOptions(alignment) : undefined
          )
        );
      }
    }]);

    return Video;
  }(_react.Component), _class.propTypes = {
    block: _propTypes2.default.object,
    contentState: _propTypes2.default.object
  }, _temp2;
};

exports.default = getVideoComponent;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-video-alignment-options-popup":"rdw-video-alignment-options-popup","rdw-alignment-option-left":"rdw-alignment-option-left","rdw-video-alignment-option":"rdw-video-alignment-option","rdw-video-alignment":"rdw-video-alignment","rdw-video-videowrapper":"rdw-video-videowrapper","rdw-video-center":"rdw-video-center","rdw-video-left":"rdw-video-left","rdw-video-right":"rdw-video-right","rdw-video-alignment-options-popup-right":"rdw-video-alignment-options-popup-right"};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bold = __webpack_require__(106);

var _bold2 = _interopRequireDefault(_bold);

var _italic = __webpack_require__(107);

var _italic2 = _interopRequireDefault(_italic);

var _underline = __webpack_require__(108);

var _underline2 = _interopRequireDefault(_underline);

var _strikethrough = __webpack_require__(109);

var _strikethrough2 = _interopRequireDefault(_strikethrough);

var _monospace = __webpack_require__(110);

var _monospace2 = _interopRequireDefault(_monospace);

var _fontSize = __webpack_require__(111);

var _fontSize2 = _interopRequireDefault(_fontSize);

var _indent = __webpack_require__(112);

var _indent2 = _interopRequireDefault(_indent);

var _outdent = __webpack_require__(113);

var _outdent2 = _interopRequireDefault(_outdent);

var _listOrdered = __webpack_require__(114);

var _listOrdered2 = _interopRequireDefault(_listOrdered);

var _listUnordered = __webpack_require__(115);

var _listUnordered2 = _interopRequireDefault(_listUnordered);

var _alignLeft = __webpack_require__(116);

var _alignLeft2 = _interopRequireDefault(_alignLeft);

var _alignCenter = __webpack_require__(117);

var _alignCenter2 = _interopRequireDefault(_alignCenter);

var _alignRight = __webpack_require__(118);

var _alignRight2 = _interopRequireDefault(_alignRight);

var _alignJustify = __webpack_require__(119);

var _alignJustify2 = _interopRequireDefault(_alignJustify);

var _color = __webpack_require__(120);

var _color2 = _interopRequireDefault(_color);

var _eraser = __webpack_require__(121);

var _eraser2 = _interopRequireDefault(_eraser);

var _link = __webpack_require__(122);

var _link2 = _interopRequireDefault(_link);

var _openCtaBox = __webpack_require__(123);

var _openCtaBox2 = _interopRequireDefault(_openCtaBox);

var _unlink = __webpack_require__(124);

var _unlink2 = _interopRequireDefault(_unlink);

var _emoji = __webpack_require__(125);

var _emoji2 = _interopRequireDefault(_emoji);

var _embedded = __webpack_require__(126);

var _embedded2 = _interopRequireDefault(_embedded);

var _image = __webpack_require__(127);

var _image2 = _interopRequireDefault(_image);

var _video = __webpack_require__(128);

var _video2 = _interopRequireDefault(_video);

var _undo = __webpack_require__(129);

var _undo2 = _interopRequireDefault(_undo);

var _redo = __webpack_require__(130);

var _redo2 = _interopRequireDefault(_redo);

var _subscript = __webpack_require__(131);

var _subscript2 = _interopRequireDefault(_subscript);

var _superscript = __webpack_require__(132);

var _superscript2 = _interopRequireDefault(_superscript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* This is default toolbar configuration,
* whatever user passes in toolbar property is deeply merged with this to over-ride defaults.
*/
exports.default = {
  options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'ctaBox', 'embedded', 'emoji', 'image', 'video', 'remove', 'history'],
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
    bold: { icon: _bold2.default, className: undefined, title: undefined },
    italic: { icon: _italic2.default, className: undefined, title: undefined },
    underline: { icon: _underline2.default, className: undefined, title: undefined },
    strikethrough: { icon: _strikethrough2.default, className: undefined, title: undefined },
    monospace: { icon: _monospace2.default, className: undefined, title: undefined },
    superscript: { icon: _superscript2.default, className: undefined, title: undefined },
    subscript: { icon: _subscript2.default, className: undefined, title: undefined }
  },
  blockType: {
    inDropdown: true,
    options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: undefined
  },
  fontSize: {
    icon: _fontSize2.default,
    options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: undefined
  },
  fontFamily: {
    options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    title: undefined
  },
  list: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['unordered', 'ordered', 'indent', 'outdent'],
    unordered: { icon: _listUnordered2.default, className: undefined, title: undefined },
    ordered: { icon: _listOrdered2.default, className: undefined, title: undefined },
    indent: { icon: _indent2.default, className: undefined, title: undefined },
    outdent: { icon: _outdent2.default, className: undefined, title: undefined },
    title: undefined
  },
  textAlign: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['left', 'center', 'right', 'justify'],
    left: { icon: _alignLeft2.default, className: undefined, title: undefined },
    center: { icon: _alignCenter2.default, className: undefined, title: undefined },
    right: { icon: _alignRight2.default, className: undefined, title: undefined },
    justify: { icon: _alignJustify2.default, className: undefined, title: undefined },
    title: undefined
  },
  colorPicker: {
    icon: _color2.default,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)', 'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)', 'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)', 'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)', 'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)', 'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)'],
    title: undefined
  },
  link: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    dropdownClassName: undefined,
    showOpenOptionOnHover: true,
    defaultTargetOption: '_self',
    options: ['link', 'unlink'],
    link: { icon: _link2.default, className: undefined, title: undefined },
    unlink: { icon: _unlink2.default, className: undefined, title: undefined }
  },
  ctaBox: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    dropdownClassName: undefined,
    showOpenOptionOnHover: true,
    defaultTargetOption: '_self',
    options: ['link'],
    link: { icon: _openCtaBox2.default, className: undefined, title: undefined }
  },
  emoji: {
    icon: _emoji2.default,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    emojis: ['😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌', '🤓', '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈', '🙉', '🙊', '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃', '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕', '👇', '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶', '🐇', '🐥', '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸', '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈', '🎉', '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷', '💰', '🖊', '📅', '✅', '❎', '💯'],
    title: undefined
  },
  embedded: {
    icon: _embedded2.default,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    defaultSize: {
      height: 'auto',
      width: 'auto'
    },
    title: undefined
  },
  image: {
    icon: _image2.default,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    previewImage: false,
    alignmentEnabled: true,
    uploadCallback: undefined,
    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
    alt: { present: false, mandatory: false },
    defaultSize: {
      height: 'auto',
      width: 'auto'
    },
    title: undefined
  },
  video: {
    icon: _video2.default,
    className: undefined,
    component: undefined,
    popupClassName: undefined,
    urlEnabled: true,
    uploadEnabled: true,
    previewVideo: false,
    alignmentEnabled: true,
    uploadCallback: undefined,
    inputAccept: 'video/webm,video/mp4,video/ogg',
    alt: { present: false, mandatory: false },
    defaultSize: {
      height: 'auto',
      width: 'auto'
    },
    title: undefined
  },
  remove: { icon: _eraser2.default, className: undefined, component: undefined, title: undefined },
  history: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['undo', 'redo'],
    undo: { icon: _undo2.default, className: undefined, title: undefined },
    redo: { icon: _redo2.default, className: undefined, title: undefined },
    title: undefined
  }
};

/**
 * - add option property to color-picker, emoji.
 */

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEycHgiIGhlaWdodD0iMTNweCIgdmlld0JveD0iMCAwIDEyIDEzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Ym9sZDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJib2xkIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iYm9sZCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDYWxxdWVfMSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi4yMzY0LDAgQzcuODg3NiwwIDkuMTc2NCwwLjI5NzkxNjY2NyAxMC4xMDE2LDAuODkyNjY2NjY3IEMxMS4wMjY4LDEuNDg4NSAxMS40OSwyLjM3NzkxNjY3IDExLjQ5LDMuNTYyIEMxMS40OSw0LjE2MzI1IDExLjMxNzIsNC43MDA1ODMzMyAxMC45NzQsNS4xNzI5MTY2NyBDMTAuNjMwOCw1LjY0NjMzMzMzIDEwLjEzMDQsNi4wMDI3NSA5LjQ3NTIsNi4yNCBDMTAuMzE3Niw2LjQwNjgzMzMzIDEwLjk0ODgsNi43NjMyNSAxMS4zNyw3LjMxMTQxNjY3IEMxMS43ODg4LDcuODYwNjY2NjcgMTIsOC40OTQ0MTY2NyAxMiw5LjIxMzc1IEMxMiwxMC40NTg1IDExLjU1NiwxMS40MDEgMTAuNjcwNCwxMi4wMzkwODMzIEM5Ljc4MzYsMTIuNjgwNDE2NyA4LjUyNiwxMyA2LjkwMTIsMTMgTDAsMTMgTDAsMTAuODMzMzMzMyBMMS40OTQsMTAuODMzMzMzMyBMMS40OTQsMi4xNjY2NjY2NyBMMCwyLjE2NjY2NjY3IEwwLDAgTDEuNDk0LDAgTDYuMjM2NCwwIEw2LjIzNjQsMCBMNi4yMzY0LDAgWiBNNC4zMDgsNS40NDU5MTY2NyBMNi4zMzI0LDUuNDQ1OTE2NjcgQzcuMDgzNiw1LjQ0NTkxNjY3IDcuNjYyLDUuMzAyOTE2NjcgOC4wNjY0LDUuMDE2OTE2NjcgQzguNDcwOCw0LjczMDkxNjY3IDguNjczNiw0LjMxNDkxNjY3IDguNjczNiwzLjc2Njc1IEM4LjY3MzYsMy4xNjU1IDguNDY5NiwyLjcyMjQxNjY3IDguMDYxNiwyLjQzNjQxNjY3IEM3LjY1MzYsMi4xNTA0MTY2NyA3LjA0NjQsMi4wMDg1IDYuMjM2NCwyLjAwODUgTDQuMzA4LDIuMDA4NSBMNC4zMDgsNS40NDU5MTY2NyBMNC4zMDgsNS40NDU5MTY2NyBMNC4zMDgsNS40NDU5MTY2NyBaIE00LjMwOCw3LjI0OTY2NjY3IEw0LjMwOCwxMC45OTkwODMzIEw2LjkwMTIsMTAuOTk5MDgzMyBDNy42NDc2LDEwLjk5OTA4MzMgOC4yMTUyLDEwLjg0ODUgOC42MDc2LDEwLjU0ODQxNjcgQzguOTk4OCwxMC4yNDgzMzMzIDkuMTk1Niw5LjgwMzA4MzMzIDkuMTk1Niw5LjIxMzc1IEM5LjE5NTYsOC41Nzc4MzMzMyA5LjAyNzYsOC4wOTAzMzMzMyA4LjY5NTIsNy43NTQ1IEM4LjM2MDQsNy40MTg2NjY2NyA3LjgzMjQsNy4yNDk2NjY2NyA3LjExMzYsNy4yNDk2NjY2NyBMNC4zMDgsNy4yNDk2NjY2NyBMNC4zMDgsNy4yNDk2NjY2NyBMNC4zMDgsNy4yNDk2NjY2NyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNywzVjJoNHYxSDkuNzUzbC0zLDEwSDh2MUg0di0xaDEuMjQ3bDMtMTBIN3oiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE2IDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNi4wNDUsMnYwLjk5Mkw0Ljc4NSwzdjUuMTcyYzAsMC44NTksMC4yNDMsMS41MTIsMC43MjcsMS45NTdzMS4xMjQsMC42NjgsMS45MTgsMC42NjhjMC44MzYsMCwxLjUwOS0wLjIyMSwyLjAxOS0wLjY2NAoJCWMwLjUxMS0wLjQ0MiwwLjc2Ni0xLjA5NiwwLjc2Ni0xLjk2MVYzbC0xLjI2LTAuMDA4VjJoMi43ODRIMTN2MC45OTJMMTEuNzM5LDN2NS4xNzJjMCwxLjIzNC0wLjM5OCwyLjE4MS0xLjE5NSwyLjg0CgkJQzkuNzQ3LDExLjY3MSw4LjcwOSwxMiw3LjQzLDEyYy0xLjI0MiwwLTIuMjQ4LTAuMzI5LTMuMDE3LTAuOTg4Yy0wLjc2OS0wLjY1OS0xLjE1Mi0xLjYwNS0xLjE1Mi0yLjg0VjNMMiwyLjk5MlYyaDEuMjYxSDYuMDQ1eiIKCQkvPgo8L2c+CjxyZWN0IHg9IjIiIHk9IjEzIiB3aWR0aD0iMTEiIGhlaWdodD0iMSIvPgo8L3N2Zz4K"

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTNweCIgdmlld0JveD0iMCAwIDE1IDEzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c3RyaWtldGhyb3VnaDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJzdHJpa2V0aHJvdWdoIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic3RyaWtldGhyb3VnaCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDYXBhXzEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNC4wNDAwNjgzNiw1Ljk1NDM4NDA5IEwxMC4yNTQ2Mzg2LDUuOTU0Mzg0MDkgQzEwLjA0ODMzMDEsNS44MTk1NjgxOCA5Ljc4MzQyNzc2LDUuNjczMjU5MDkgOS40NTk5OTAyNiw1LjUxNTc4MTgyIEM4Ljg4MDMyMjI0LDUuMjU3MTQwOTEgOC4zOTc2NTYyNSw1LjA3MTUwNjgyIDguMDEyODQxNzksNC45NTkwODYzNyBDNi44MjUyMzQzNyw0LjYxMDUwOTA5IDYuMDQ3MzQzNzUsNC4yNDc2OTA5MSA1LjY3OTI4NzExLDMuODcwOTU2ODIgQzUuMzExMjMwNDcsMy40OTQxNjM2MyA1LjEyNzI0NjEsMy4xMDA1NTkwOSA1LjEyNzI0NjEsMi42ODk5OTU0NSBDNS4xMjcyNDYxLDIuMTk1MDIwNDUgNS4zMTQxMzA4NiwxLjc4NDQ1NjgyIDUuNjg3Njk1MzEsMS40NTgzMzQwOSBDNi4wNjY4ODQ3NiwxLjEyNjYyNzI3IDYuNTc0MzM1OTQsMC45NjA2MTEzNjggNy4yMTAwMTk1MywwLjk2MDYxMTM2OCBDNy44OTAzMjIyNiwwLjk2MDYxMTM2OCA4LjQ3NTgyMDMxLDEuMjE2NDc1IDguOTY2NjAxNTMsMS43MjgyMzE4MiBDOS4yNjIwNjA1OSwyLjA0MzA2ODE4IDkuNTQ5NDA0MjksMi42MTk1IDkuODI4MTA1NDQsMy40NTc0OTc3MyBMOS45NDU0MTAxMiwzLjQ3NDI3OTU1IEwxMC42NDgwMDc4LDMuNTI0ODYxMzcgTDEwLjc0ODQ5NjEsMy40OTk2Mjk1NSBDMTAuNzc2MzU3NCwzLjM0NzcwNjgyIDEwLjc5MDM5MDYsMy4yMjEzNDA5MSAxMC43OTAzOTA2LDMuMTE5OTcwNDUgQzEwLjc5MDM5MDYsMi43ODI1MzE4MiAxMC43NTEzMDg2LDIuMjY4MDg2MzcgMTAuNjczMDg2LDEuNTc2MzM4NjMgQzEwLjYxMTUzMzIsMS4xMjY1OTc3MyAxMC41NTMxNzM5LDAuNzk0NjU0NTQ1IDEwLjQ5NzQ1MTEsMC41ODA5MjI3MjcgQzkuODc4NjQyNTYsMC4zNzg1NjU5MDkgOS4zODQ5NjA5NywwLjI0MzU0MzE4MiA5LjAxNjkzMzU5LDAuMTc2MTIwNDU1IEM4LjM2NDU1MDc4LDAuMDY5MjU0NTQ1NSA3Ljg5ODc1OTc2LDAuMDE1ODA2ODE4MiA3LjYyMDIzNDM4LDAuMDE1ODA2ODE4MiBDNi4xNzAyNDQxNCwwLjAxNTgwNjgxODIgNS4wNzQ1OTk2MSwwLjM3MzA0MDkwOSA0LjMzMjg2MTMzLDEuMDg3MTI1IEMzLjU4NTY0NDUzLDEuODA2OTExMzcgMy4yMTIwODAwOCwyLjY3NTkwMjI3IDMuMjEyMDgwMDgsMy42OTM3NzI3MyBDMy4yMTIwODAwOCw0LjIwNTQ0MDkxIDMuMzQ1OTA4MjEsNC43MzQwMDkwOSAzLjYxMzYyMzA0LDUuMjc5NTM2MzcgQzMuNzQxNzA4OTksNS41MzI2ODE4MiAzLjg4MzkxNjAxLDUuNzU3NjQwOTEgNC4wNDAwNjgzNiw1Ljk1NDM4NDA5IEw0LjA0MDA2ODM2LDUuOTU0Mzg0MDkgTDQuMDQwMDY4MzYsNS45NTQzODQwOSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC4yODA3NjE3Miw4LjExMzg5MDkxIEM4Ljg1NTEyNjkxLDguMzUwMDc3MjcgOS4yMzcyMTY3OSw4LjU0OTg2MzYzIDkuNDI2NzA4OTcsOC43MTI3NzcyNyBDOS44Nzg0NjY3OSw5LjEyMzM3MDQ1IDEwLjEwNDI1NzgsOS41NjQ4MDkwNiAxMC4xMDQyNTc4LDEwLjAzNzA5MzIgQzEwLjEwNDI1NzgsMTAuNDE5NTg4NyA5Ljk3MzA5NTcxLDEwLjc4MjI4ODcgOS43MTEwMzUxMiwxMS4xMjUzNDA5IEM5LjQ2MDE5NTMyLDExLjQ2MjYzMTggOS4xMjAxMTcxOCwxMS43MDQ3ODYzIDguNjkwNjI1LDExLjg1MDcxMTMgQzguMjcyNjE3MTksMTIuMDAyODcwNSA3Ljg4NDkzMTY0LDEyLjA3ODU5NTUgNy41MjgyMTI4OSwxMi4wNzg1OTU1IEM3LjEyMTE5MTQsMTIuMDc4NTk1NSA2Ljc1MzE2NDA2LDEyLjAxNjYwOTEgNi40MjQxNjAxNSwxMS44OTI5NjEzIEM2LjA3ODQ1NzAzLDExLjc3NDc3OTUgNS43ODU2NjQwNiwxMS42MTQ3MDIzIDUuNTQ1ODM5ODUsMTEuNDEyMTA5MSBDNS4yOTQ5NDE0LDExLjIwNDAyMDUgNS4wNzE4MTY0LDEwLjkzOTczNjMgNC44NzY2Njk5MiwxMC42MTkxMDkxIEM0Ljg0ODc1LDEwLjU3NDI4ODcgNC44MTM4NTc0MiwxMC40OTgyNjgyIDQuNzcyMDUwNzgsMTAuMzkxNTIwNSBDNC43MzAzMDI3NCwxMC4yODQ1MzYzIDQuNjY3NDMxNjQsMTAuMTI3MjA2OCA0LjU4Mzg3Njk2LDkuOTE5MjM2MzIgQzQuNTAwMjA1MDgsOS43MTEwNTkwNiA0LjQxNjY1MDM5LDkuNTExNDUgNC4zMzI5Nzg1MSw5LjMyMDI5MDk0IEwzLjQ3OTgyNDIyLDkuMzM3MTYxMzIgTDMuNDc5ODI0MjIsOS43MDgzMTEzMiBMMy40NjMwOTU3MSwxMC4wMjA2MzYzIEMzLjQ1NzU4Nzg5LDEwLjIzNDE5MDkgMy40NTc1ODc4OSwxMC40MjUzNzk1IDMuNDYzMDk1NzEsMTAuNTk0MTEzNyBDMy40NzQxNjk5MiwxMC44NjM5ODE4IDMuNDc5ODI0MjIsMTEuMzAyNjcyNyAzLjQ3OTgyNDIyLDExLjkxMDE1NjggTDMuNDc5ODI0MjIsMTIuMDE5ODU5MSBDMy40Nzk4MjQyMiwxMi4wOTg2MjczIDMuNTAyMDg5ODUsMTIuMTYwMzE4MiAzLjU0NjY1MDM5LDEyLjIwNTQ5MzIgQzMuNjMwMjkyOTcsMTIuMjcyNzA5MSAzLjgzMTAzNTE1LDEyLjM1MTU5NTUgNC4xNDg5MDYyNSwxMi40NDE1OTA5IEw1LjMxOTg3MzA0LDEyLjc3ODk3MDUgQzUuNzcxNDg0MzcsMTIuOTA4NDA5MSA2LjMxNTIzNDM3LDEyLjk3MzExMzcgNi45NTA5MTc5NywxMi45NzMxMTM3IEM3LjYzNjg3NSwxMi45NzMxMTM3IDguMjAyNTY4MzYsMTIuOTE0MDUyMyA4LjY0ODkwNjI1LDEyLjc5NTg3MDUgQzkuMDU2MDQ0OTQsMTIuNjk0NDQwOSA5LjQ4MjIyNjUzLDEyLjUwODg5NTUgOS45Mjg3MTA5NywxMi4yMzkxNDU1IEMxMC4zMzAxMzY3LDExLjk4MDI5NzcgMTAuNjM0MTIxMSwxMS43NTI3MDkxIDEwLjg0MDQ1OSwxMS41NTU2NDA5IEMxMS4xMDc4NTE1LDExLjI4MDIxODIgMTEuMzA2MDc0MiwxMC45ODc4MDY4IDExLjQzNDMwNjcsMTAuNjc4MzE4MiBDMTEuNjYzMTE1MywxMC4xMTAzOTU1IDExLjc3NzI4NTEsOS41MTQyNTY3OSAxMS43NzcyODUxLDguODkwMTk3NzMgQzExLjc3NzI4NTEsOC41OTIwMjUgMTEuNzU3OTQ5Miw4LjMzMzQ3MjczIDExLjcxOTA0MjksOC4xMTQwNjgxOCBMOC4yODA3NjE3Miw4LjExNDA2ODE4IEw4LjI4MDc2MTcyLDguMTEzODkwOTEgTDguMjgwNzYxNzIsOC4xMTM4OTA5MSBMOC4yODA3NjE3Miw4LjExMzg5MDkxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC45MTM4NjcyLDYuNTcwMTQwOTEgQzE0Ljg2MzUzNTEsNi41MTk1ODg2MyAxNC43OTk1ODAxLDYuNDk0MzI3MjcgMTQuNzIxMzg2Nyw2LjQ5NDMyNzI3IEwwLjI2NzYyNjk1Myw2LjQ5NDMyNzI3IEMwLjE4OTUyMTQ4NSw2LjQ5NDMyNzI3IDAuMTI1NDQ5MjE5LDYuNTE5NTg4NjMgMC4wNzUyMzQzNzUsNi41NzAxNDA5MSBDMC4wMjUxNjYwMTU2LDYuNjIwNjkzMTggMCw2LjY4NTM5NzczIDAsNi43NjQyODQwOSBMMCw3LjMwMzk5MDkxIEMwLDcuMzgyODc3MjcgMC4wMjUwNDg4MjgxLDcuNDQ3NDYzNjMgMC4wNzUyMzQzNzUsNy40OTgxMzQwOSBDMC4xMjU0NDkyMTksNy41NDg2ODYzNyAwLjE4OTYzODY3Miw3LjU3Mzc3MDQ1IDAuMjY3NjI2OTUzLDcuNTczNzcwNDUgTDE0LjcyMTM4NjcsNy41NzM3NzA0NSBDMTQuNzk5NTgwMSw3LjU3Mzc3MDQ1IDE0Ljg2MzU2NDQsNy41NDg2ODYzNyAxNC45MTM4NjcyLDcuNDk4MTM0MDkgQzE0Ljk2Mzk5NDIsNy40NDc0NjM2MyAxNC45ODkwNDI5LDcuMzgyODc3MjcgMTQuOTg5MDQyOSw3LjMwMzk5MDkxIEwxNC45ODkwNDI5LDYuNzY0Mjg0MDkgQzE0Ljk4OTA0MjksNi42ODUzOTc3MyAxNC45NjM5OTQyLDYuNjIwNjkzMTggMTQuOTEzODY3Miw2LjU3MDE0MDkxIEwxNC45MTM4NjcyLDYuNTcwMTQwOTEgTDE0LjkxMzg2NzIsNi41NzAxNDA5MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEzcHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDEzIDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Y29kZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJjb2RlIiBmaWxsPSIjNDQ0NDQ0Ij4KICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iY29kZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMS4wMjE0Mjg1NywyLjkwNjI1IEMxLjIwNzE0Mjg2LDQuMTI1IDEuMzkyODU3MTQsNC40MDYyNSAxLjM5Mjg1NzE0LDUuNjI1IEMxLjM5Mjg1NzE0LDYuMzc1IDAsNy4wMzEyNSAwLDcuMDMxMjUgTDAsNy45Njg3NSBDMCw3Ljk2ODc1IDEuMzkyODU3MTQsOC42MjUgMS4zOTI4NTcxNCw5LjM3NSBDMS4zOTI4NTcxNCwxMC41OTM3NSAxLjIwNzE0Mjg2LDEwLjg3NSAxLjAyMTQyODU3LDEyLjA5Mzc1IEMwLjc0Mjg1NzE0MywxNC4wNjI1IDEuNzY0Mjg1NzEsMTUgMi42OTI4NTcxNCwxNSBMNC42NDI4NTcxNCwxNSBMNC42NDI4NTcxNCwxMy4xMjUgQzQuNjQyODU3MTQsMTMuMTI1IDIuOTcxNDI4NTcsMTMuMzEyNSAyLjk3MTQyODU3LDEyLjE4NzUgQzIuOTcxNDI4NTcsMTEuMzQzNzUgMy4xNTcxNDI4NiwxMS4zNDM3NSAzLjM0Mjg1NzE0LDkuNDY4NzUgQzMuNDM1NzE0MjksOC42MjUgMi44Nzg1NzE0Myw3Ljk2ODc1IDIuMzIxNDI4NTcsNy41IEMyLjg3ODU3MTQzLDcuMDMxMjUgMy40MzU3MTQyOSw2LjQ2ODc1IDMuMzQyODU3MTQsNS42MjUgQzMuMDY0Mjg1NzEsMy43NSAyLjk3MTQyODU3LDMuNzUgMi45NzE0Mjg1NywyLjkwNjI1IEMyLjk3MTQyODU3LDEuNzgxMjUgNC42NDI4NTcxNCwxLjg3NSA0LjY0Mjg1NzE0LDEuODc1IEw0LjY0Mjg1NzE0LDAgTDIuNjkyODU3MTQsMCBDMS42NzE0Mjg1NywwIDAuNzQyODU3MTQzLDAuOTM3NSAxLjAyMTQyODU3LDIuOTA2MjUgTDEuMDIxNDI4NTcsMi45MDYyNSBMMS4wMjE0Mjg1NywyLjkwNjI1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjk3ODU3MTQsMi45MDYyNSBDMTEuNzkyODU3MSw0LjEyNSAxMS42MDcxNDI5LDQuNDA2MjUgMTEuNjA3MTQyOSw1LjYyNSBDMTEuNjA3MTQyOSw2LjM3NSAxMyw3LjAzMTI1IDEzLDcuMDMxMjUgTDEzLDcuOTY4NzUgQzEzLDcuOTY4NzUgMTEuNjA3MTQyOSw4LjYyNSAxMS42MDcxNDI5LDkuMzc1IEMxMS42MDcxNDI5LDEwLjU5Mzc1IDExLjc5Mjg1NzEsMTAuODc1IDExLjk3ODU3MTQsMTIuMDkzNzUgQzEyLjI1NzE0MjksMTQuMDYyNSAxMS4yMzU3MTQzLDE1IDEwLjMwNzE0MjksMTUgTDguMzU3MTQyODYsMTUgTDguMzU3MTQyODYsMTMuMTI1IEM4LjM1NzE0Mjg2LDEzLjEyNSAxMC4wMjg1NzE0LDEzLjMxMjUgMTAuMDI4NTcxNCwxMi4xODc1IEMxMC4wMjg1NzE0LDExLjM0Mzc1IDkuODQyODU3MTQsMTEuMzQzNzUgOS42NTcxNDI4Niw5LjQ2ODc1IEM5LjU2NDI4NTcxLDguNjI1IDEwLjEyMTQyODYsNy45Njg3NSAxMC42Nzg1NzE0LDcuNSBDMTAuMTIxNDI4Niw3LjAzMTI1IDkuNTY0Mjg1NzEsNi40Njg3NSA5LjY1NzE0Mjg2LDUuNjI1IEM5Ljg0Mjg1NzE0LDMuNzUgMTAuMDI4NTcxNCwzLjc1IDEwLjAyODU3MTQsMi45MDYyNSBDMTAuMDI4NTcxNCwxLjc4MTI1IDguMzU3MTQyODYsMS44NzUgOC4zNTcxNDI4NiwxLjg3NSBMOC4zNTcxNDI4NiwwIEwxMC4zMDcxNDI5LDAgQzExLjMyODU3MTQsMCAxMi4yNTcxNDI5LDAuOTM3NSAxMS45Nzg1NzE0LDIuOTA2MjUgTDExLjk3ODU3MTQsMi45MDYyNSBMMTEuOTc4NTcxNCwyLjkwNjI1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE0IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Zm9udC1zaXplPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImZvbnQtc2l6ZSIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImZvbnQtc2l6ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDYXBhXzEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuOTIwOTU3MSwzLjExOTAyNSBDMTIuMDAyNDY2MywzLjIyMjQwNjI1IDEyLjEyNTYzMTksMy4yODI1MTg3NSAxMi4yNTU3OTc2LDMuMjgyNTE4NzUgTDEzLjIyNTgzNDMsMy4yODI1MTg3NSBDMTMuMzQwMDY3NCwzLjI4MjUxODc1IDEzLjQ0OTYxOTYsMy4yMzYxIDEzLjUzMDIyNywzLjE1MzYzMTI1IEMxMy42MTA4MzQzLDMuMDcxMTYyNSAxMy42NTU4ODM1LDIuOTU5MzM3NSAxMy42NTUyODIyLDIuODQyOTE4NzUgTDEzLjY1Njc4NTIsMC40MzM4Njg3NSBDMTMuNjU0MDM2OSwwLjE5NDE2MjUgMTMuNDYyNTQ2LDAuMDAxMjY4NzUgMTMuMjI3MzM3NCwwLjAwMTI2ODc1IEwwLjQyOTQ0Nzg1MiwwLjAwMTI2ODc1IEMwLjE5MjI2MzgwNCwwLjAwMTI2ODc1IDAsMC4xOTcxODEyNSAwLDAuNDM4NzY4NzUgTDAsMi44NDUwMTg3NSBDMCwzLjA4NjYwNjI1IDAuMTkyMjYzODA0LDMuMjgyNTE4NzUgMC40Mjk0NDc4NTIsMy4yODI1MTg3NSBMMS4zOTk4MjgyMiwzLjI4MjUxODc1IEMxLjUzMDMzNzQyLDMuMjgyNTE4NzUgMS42NTM3MTc3OSwzLjIyMjEgMS43MzUxODQwNSwzLjExODMyNSBMMi40NjUxNTk1MSwyLjE4ODgxMjUgTDUuNTM5NjYyNTgsMi4xODg4MTI1IEw1LjUzOTY2MjU4LDEzLjU0Nzg0MzggQzUuNTM5NjYyNTgsMTMuNzg5Mzg3NSA1LjczMTkyNjM4LDEzLjk4NTM0MzggNS45NjkxMTA0MywxMy45ODUzNDM4IEw3LjY4NjkwMTg0LDEzLjk4NTM0MzggQzcuOTI0LDEzLjk4NTM0MzggOC4xMTYzNDk3LDEzLjc4OTM4NzUgOC4xMTYzNDk3LDEzLjU0Nzg0MzggTDguMTE2MzQ5NywyLjE4ODg1NjI1IEwxMS4xODc0NjAxLDIuMTg4ODU2MjUgTDExLjkyMDk1NzEsMy4xMTkwMjUgTDExLjkyMDk1NzEsMy4xMTkwMjUgTDExLjkyMDk1NzEsMy4xMTkwMjUgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjg5NzY2MjYsMTEuMjYzMzUgQzEzLjc4NDg0NjYsMTEuMTE0MjA2MiAxMy41OTA5MDgsMTEuMDU1MzYyNSAxMy40MTYzODA0LDExLjExNzEzNzUgTDEyLjg2ODU3NjcsMTEuMzExMjU2MiBMMTIuODY4NjYyNiw5LjYxNzEyNSBDMTIuODY4NjYyNiw5LjUwMTEgMTIuODIzNDQxNyw5LjM4OTggMTIuNzQyOTIwMiw5LjMwNzcyNSBDMTIuNjYyMzk4Nyw5LjIyNTY5Mzc1IDEyLjU1MzEwNDMsOS4xNzk1ODEyNSAxMi40MzkyMTQ4LDkuMTc5NTgxMjUgTDEyLjAxMDE5NjMsOS4xNzk1ODEyNSBDMTEuNzczMDk4MSw5LjE3OTU4MTI1IDExLjU4MDc0ODUsOS4zNzU1Mzc1NSAxMS41ODA3NDg1LDkuNjE3MDgxMjMgTDExLjU4MDc0ODUsMTEuMzExMjU2MiBMMTEuMDMyODU4OSwxMS4xMTcxMzc1IEMxMC44NTg0MTcyLDExLjA1NTE4NzUgMTAuNjY0NTY0NCwxMS4xMTQyMDYyIDEwLjU1MTc0ODUsMTEuMjYzMzUgQzEwLjQzODg0NjYsMTEuNDEyNDUgMTAuNDMyNDA0OSwxMS42MTgzODEyIDEwLjUzNTY0NDIsMTEuNzc0NyBMMTEuODY4MzQ5NywxMy43OTIxNDM4IEMxMS45NDgxODQxLDEzLjkxMjk4MTIgMTIuMDgxODI4MywxMy45ODU0MzEyIDEyLjIyNDY2MjYsMTMuOTg1NDMxMiBDMTIuMzY3NTgyOCwxMy45ODU0MzEyIDEyLjUwMTE4NDEsMTMuOTEyOTgxMiAxMi41ODA5NzU1LDEzLjc5MjE0MzggTDEzLjkxMzc2NjksMTEuNzc0NyBDMTQuMDE2OTYzMSwxMS42MTgzODEyIDE0LjAxMDQ3ODUsMTEuNDEyNDUgMTMuODk3NjYyNiwxMS4yNjMzNSBMMTMuODk3NjYyNiwxMS4yNjMzNSBMMTMuODk3NjYyNiwxMS4yNjMzNSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE3IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW5kZW50PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImluZGVudCIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJMYXllcl8xIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiB4PSI1LjcxNjQ4MzUyIiB5PSIzLjIxMDgyNjIxIiB3aWR0aD0iMTEuMjgzNTE2NSIgaGVpZ2h0PSIxLjE5NjU4MTIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLXBhdGgiIHg9IjAiIHk9IjAuMDE5OTQzMDE5OSIgd2lkdGg9IjE3IiBoZWlnaHQ9IjEuMTk2NTgxMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtcGF0aCIgeD0iMCIgeT0iMTIuNzgzNDc1OCIgd2lkdGg9IjE3IiBoZWlnaHQ9IjEuMTk2NTgxMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtcGF0aCIgeD0iNS43MTY0ODM1MiIgeT0iOS41OTI1OTI1OSIgd2lkdGg9IjExLjI4MzUxNjUiIGhlaWdodD0iMS4xOTY1ODEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiB4PSI1LjcxNjQ4MzUyIiB5PSI2LjQwMTcwOTQiIHdpZHRoPSIxMS4yODM1MTY1IiBoZWlnaHQ9IjEuMTk2NTgxMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSIwLjE4NjgxMzE4NyA5LjQ5MTQwMTcxIDIuNTIwNTk1NiA3IDAuMTg2ODEzMTg3IDQuNTA4NTk4MjkiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE2IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+b3V0ZGVudDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJvdXRkZW50IiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IkxheWVyXzEiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLXBhdGgiIHg9IjUuMzk2MTY2MyIgeT0iMy4xOTM0MzU5IiB3aWR0aD0iMTAuNTczMzA0MiIgaGVpZ2h0PSIxLjE5NjU4MTIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLXBhdGgiIHg9IjAuMDM5NDkyMzQxNCIgeT0iMC4wMDI1NTI3MDY1NSIgd2lkdGg9IjE1LjkyOTk3ODEiIGhlaWdodD0iMS4xOTY1ODEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZS1wYXRoIiB4PSIwLjAzOTQ5MjM0MTQiIHk9IjEyLjc2NjA4NTUiIHdpZHRoPSIxNS45Mjk5NzgxIiBoZWlnaHQ9IjEuMTk2NTgxMiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtcGF0aCIgeD0iNS4zOTYxNjYzIiB5PSI5LjU3NTIwMjI4IiB3aWR0aD0iMTAuNTczMzA0MiIgaGVpZ2h0PSIxLjE5NjU4MTIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLXBhdGgiIHg9IjUuMzk2MTY2MyIgeT0iNi4zODQzMTkwOSIgd2lkdGg9IjEwLjU3MzMwNDIiIGhlaWdodD0iMS4xOTY1ODEyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjIuMTg2ODg4NCA0LjQ5MTIwNzk4IDAgNi45ODI2MDk2OSAyLjE4Njg4ODQgOS40NzQwMTE0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEzcHgiIGhlaWdodD0iMTNweCIgdmlld0JveD0iMCAwIDEzIDEzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGlzdC1vcmRlcmVkPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imxpc3Qtb3JkZXJlZCIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiPgogICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Imxpc3Qtb3JkZXJlZCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJDYXBhXzEiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNC4yMDE5MzQxNiwxLjQ2NTczODAxIEwxMi4zNTI0MDQzLDEuNDY1NzM4MDEgQzEyLjY4OTk5NjksMS40NjU3MzgwMSAxMi45NjM2ODk3LDEuMTQzNTY4MjYgMTIuOTYzNjg5NywwLjc0NjE4MDgxMiBDMTIuOTYzNjg5NywwLjM0ODc5MzM1OCAxMi42ODk5OTY5LDAuMDI2NjIzNjE2MyAxMi4zNTI0MDQzLDAuMDI2NjIzNjE2MyBMNC4yMDE5MzQxNiwwLjAyNjYyMzYxNjMgQzMuODY0MzQxNywwLjAyNjYyMzYxNjMgMy41OTA2NDg5LDAuMzQ4NzkzMzU4IDMuNTkwNjQ4OSwwLjc0NjE4MDgxMiBDMy41OTA2NDg5LDEuMTQzNTY4MjYgMy44NjQzNDE3LDEuNDY1NzM4MDEgNC4yMDE5MzQxNiwxLjQ2NTczODAxIEw0LjIwMTkzNDE2LDEuNDY1NzM4MDEgTDQuMjAxOTM0MTYsMS40NjU3MzgwMSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMzUyNDA0Myw1Ljc4MzA4MTE4IEw0LjIwMTkzNDE2LDUuNzgzMDgxMTggQzMuODY0MzQxNyw1Ljc4MzA4MTE4IDMuNTkwNjQ4OSw2LjEwNTI1MDkyIDMuNTkwNjQ4OSw2LjUwMjYzODM3IEMzLjU5MDY0ODksNi45MDAwMjU4MyAzLjg2NDM0MTcsNy4yMjIxOTU1NyA0LjIwMTkzNDE2LDcuMjIyMTk1NTcgTDEyLjM1MjQwNDMsNy4yMjIxOTU1NyBDMTIuNjg5OTk2OSw3LjIyMjE5NTU3IDEyLjk2MzY4OTcsNi45MDAwMjU4MyAxMi45NjM2ODk3LDYuNTAyNjM4MzcgQzEyLjk2MzY4OTcsNi4xMDUyMDI5NSAxMi42OTAwMzc3LDUuNzgzMDgxMTggMTIuMzUyNDA0Myw1Ljc4MzA4MTE4IEwxMi4zNTI0MDQzLDUuNzgzMDgxMTggTDEyLjM1MjQwNDMsNS43ODMwODExOCBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMzUyNDA0MywxMS41Mzk1Mzg3IEw0LjIwMTkzNDE2LDExLjUzOTUzODcgQzMuODY0MzQxNywxMS41Mzk1Mzg3IDMuNTkwNjQ4OSwxMS44NjE3MDg1IDMuNTkwNjQ4OSwxMi4yNTkwOTYgQzMuNTkwNjQ4OSwxMi42NTY0ODM0IDMuODY0MzQxNywxMi45Nzg2NTMxIDQuMjAxOTM0MTYsMTIuOTc4NjUzMSBMMTIuMzUyNDA0MywxMi45Nzg2NTMxIEMxMi42ODk5OTY5LDEyLjk3ODY1MzEgMTIuOTYzNjg5NywxMi42NTY0ODM0IDEyLjk2MzY4OTcsMTIuMjU5MDk2IEMxMi45NjM2ODk3LDExLjg2MTcwODUgMTIuNjkwMDM3NywxMS41Mzk1Mzg3IDEyLjM1MjQwNDMsMTEuNTM5NTM4NyBMMTIuMzUyNDA0MywxMS41Mzk1Mzg3IEwxMi4zNTI0MDQzLDExLjUzOTUzODcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNzY3MjAzNzYyLDEuMjQ4OTU5NDEgTDAuNzY3MjAzNzYyLDMuMDUwOTIyNTEgQzAuNzY3MjAzNzYyLDMuMjQ2MzU0MjUgMC45MDI1MDE1NjgsMy4zOTM3MTk1NiAxLjA4MTk3NDkyLDMuMzkzNzE5NTYgQzEuMjU4NDMyNiwzLjM5MzcxOTU2IDEuMzk2NjIzODMsMy4yNDMxNDAyMyAxLjM5NjYyMzgzLDMuMDUwOTIyNTEgTDEuMzk2NjIzODMsMC4zNTYyMjg3ODIgQzEuMzk2NjIzODMsMC4xNjYyNjU2ODIgMS4yNjQzMDA5NCwwLjAxNzQxMzI4NDEgMS4wOTUzODI0NCwwLjAxNzQxMzI4NDEgQzAuOTQ2Nzk5MzY5LDAuMDE3NDEzMjg0MSAwLjg3MjQ2NzA4NCwwLjEzNDc0OTA3NyAwLjg0ODA1NjQyNiwwLjE3MzMxNzM0MyBDMC44NDcwMzc2MTcsMC4xNzQ5NDgzMzkgMC44NDYwMTg4MDksMC4xNzY1NzkzMzYgMC44NDUsMC4xNzgzMDYyNzMgTDAuNTc5MDUwMTU2LDAuNjIxMTY5NzQyIEMwLjUyNzQxNjkyOCwwLjY4NzI3MzA2MyAwLjQ4MTQ4OTAyOCwwLjc5MyAwLjQ4MTQ4OTAyOCwwLjg5NDQwOTU5NiBDMC40ODE0NDgyNzYsMS4wODc3MzA2MyAwLjYwOTE2NjE0NCwxLjI0NTQwOTYgMC43NjcyMDM3NjIsMS4yNDg5NTk0MSBMMC43NjcyMDM3NjIsMS4yNDg5NTk0MSBMMC43NjcyMDM3NjIsMS4yNDg5NTk0MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4zNTE2OTI3OSw4LjE5MDc2NzQ5IEwxLjU1MDA1NjQzLDguMTkwNzY3NDkgQzEuNzA2OTEyMjMsOC4xOTA3Njc0OSAxLjgzNDU0ODU5LDguMDI4MDk5NjMgMS44MzQ1NDg1OSw3LjgyODE1ODY3IEMxLjgzNDU0ODU5LDcuNjMwMzI4NDEgMS43MDY5NTI5Nyw3LjQ2OTM4NzQ1IDEuNTUwMDU2NDMsNy40NjkzODc0NSBMMC42Nzk5MTIyMjYsNy40NjkzODc0NSBMMC42Nzk5MTIyMjYsNy40NjM0ODcwOSBDMC42Nzk5MTIyMjYsNy4zNTU3OTMzNiAwLjg4OTcwNTMyOSw3LjE4MTUxNjYxIDEuMDU4Mjk3ODEsNy4wNDE0OTA3NyBDMS4zOTM2NDg5LDYuNzYyOTI2MiAxLjgxMDk5MzczLDYuNDE2MjkxNTEgMS44MTA5OTM3Myw1LjgxNTEyNTQ2IEMxLjgxMDk5MzczLDUuMjQ0NjEyNTUgMS40MzU0MjAwNiw0LjgxNDQ2MTI1IDAuOTM3MzQ0ODMxLDQuODE0NDYxMjUgQzAuNDYwNDIwMDYzLDQuODE0NDYxMjUgMC4xMDA4MjEzMTcsNS4yMDAzMzU3OSAwLjEwMDgyMTMxNyw1LjcxMjAzNjkgQzAuMTAwODIxMzE3LDYuMDA4OTc0MTcgMC4yNjUwMTI1MzksNi4xMTQzNjUzMSAwLjQwNTYwODE1LDYuMTE0MzY1MzEgQzAuNjA2ODQzMjYsNi4xMTQzNjUzMSAwLjcyNzEwMzQ0OSw1LjkzNzk3Nzg2IDAuNzI3MTAzNDQ5LDUuNzY3NTM4NzUgQzAuNzI3MTAzNDQ5LDUuNjYxNTcxOTYgMC43NTAyNTA3ODMsNS41Mzk5MTg4MiAwLjkzMDYyMDY5Myw1LjUzOTkxODgyIEMxLjE3NDI3OSw1LjUzOTkxODgyIDEuMTgxMjg4NCw1Ljc5NDA2NjQyIDEuMTgxMjg4NCw1LjgyMzA0MDU5IEMxLjE4MTI4ODQsNi4wNTE0NzYwMiAwLjkyOTQzODg3Miw2LjI2NTA0MDU5IDAuNjg1ODYyMDY5LDYuNDcxNTUzNTEgQzAuMzg0NzgzNjk5LDYuNzI2ODA0NDMgMC4wNDM1MjM1MTEsNy4wMTYxNjIzNiAwLjA0MzUyMzUxMSw3LjQ2MzU4MzAzIEwwLjA0MzUyMzUxMSw3Ljg0NzkyMjUxIEMwLjA0MzQ4Mjc1ODYsOC4wNTI5OTYzMSAwLjIwMjg2NTIwMyw4LjE5MDc2NzQ5IDAuMzUxNjkyNzksOC4xOTA3Njc0OSBMMC4zNTE2OTI3OSw4LjE5MDc2NzQ5IEwwLjM1MTY5Mjc5LDguMTkwNzY3NDkgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNzcwNTI2NjQsMTAuNTQzMDk2IEMxLjc3MDUyNjY0LDkuOTUxMDQ0MjcgMS40NzM1MjM1MSw5LjYxMTUwOTIxIDAuOTU1NzI0MTM5LDkuNjExNTA5MjEgQzAuMjc2Nzg5OTY5LDkuNjExNTA5MjEgMC4wOTczOTgxMTksMTAuMTgyMjYyIDAuMDk3Mzk4MTE5LDEwLjQ4NDA0NDMgQzAuMDk3Mzk4MTE5LDEwLjgzNTM4MDEgMC4zMTkyOTQ2NywxMC44NzMzMjQ3IDAuNDE0Njk1OTI1LDEwLjg3MzMyNDcgQzAuNjAwNDg1ODkzLDEwLjg3MzMyNDcgMC43MjUyNjk1OTIsMTAuNzI2MzkxMiAwLjcyNTI2OTU5MiwxMC41MDc2OTM3IEMwLjcyNTI2OTU5MiwxMC40MjM1NTM1IDAuNzUwNjk5MDYsMTAuMzI2OTg4OSAwLjk0ODg3Nzc0NCwxMC4zMjY5ODg5IEMxLjA5MTMwNzIxLDEwLjMyNjk4ODkgMS4xNDkyOTc4MSwxMC4zNTExNjYxIDEuMTQ5Mjk3ODEsMTAuNTk0MDg4NSBDMS4xNDkyOTc4MSwxMC44MzE0NDY1IDEuMTA2MDE4ODEsMTAuODU3MzAyNSAwLjkzNTU1MTcyMywxMC44NTczMDI1IEMwLjc3MTgwODc3NywxMC44NTczMDI1IDAuNjQ4MzY5OTA2LDExLjAwOTQxNyAwLjY0ODM2OTkwNiwxMS4yMTEwODQ5IEMwLjY0ODM2OTkwNiwxMS40MTA1OTQxIDAuNzczMzE2NjE1LDExLjU2MTA3NzUgMC45Mzg5NzQ5MiwxMS41NjEwNzc1IEMxLjE2NDEzMTY2LDExLjU2MTA3NzUgMS4yMDkzNjY3NywxMS42NjkyOTg5IDEuMjA5MzY2NzcsMTEuODQzOTU5NCBMMS4yMDkzNjY3NywxMS45MTg3NDU0IEMxLjIwOTM2Njc3LDEyLjIxMjYxMjUgMS4xMTIwMDk0MSwxMi4yNjgzMDYzIDAuOTMyMzMyMjkxLDEyLjI2ODMwNjMgQzAuNjg0NDM1NzM2LDEyLjI2ODMwNjMgMC42NjUxNTk4NzUsMTIuMTE4MDYyNyAwLjY2NTE1OTg3NSwxMi4wNzIwMTExIEMwLjY2NTE1OTg3NSwxMS44OTc4MzAzIDAuNTY3MDY4OTY1LDExLjcyMjA2NjQgMC4zNDc5MDI4MjIsMTEuNzIyMDY2NCBDMC4xNTU1NTE3MjQsMTEuNzIyMDY2NCAwLjA0MDcxMTU5ODgsMTEuODYzMTQ3NiAwLjA0MDcxMTU5ODgsMTIuMDk5NTQ2MSBDMC4wNDA3MTE1OTg4LDEyLjUzMDEyOTEgMC4zNTQzNDE2OTMsMTIuOTg3NzY3NSAwLjkzNTU1MTcyMywxMi45ODc3Njc1IEMxLjUwMDEzNDgsMTIuOTg3NzY3NSAxLjgzNzIzODI0LDEyLjU4ODEyNTUgMS44MzcyMzgyNCwxMS45MTg3NDU0IEwxLjgzNzIzODI0LDExLjg0Mzk1OTQgQzEuODM3MjM4MjQsMTEuNTY5NTIwMyAxLjc2MjY2MTQ0LDExLjM0MTk0ODMgMS42MjI3MTc4NywxMS4xNzgzMjEgQzEuNzE4NTY3NCwxMS4wMTUwNzc1IDEuNzcwNTI2NjQsMTAuNzk3MjQzNSAxLjc3MDUyNjY0LDEwLjU0MzA5NiBMMS43NzA1MjY2NCwxMC41NDMwOTYgTDEuNzcwNTI2NjQsMTAuNTQzMDk2IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE2IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGlzdC11bm9yZGVyZWQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibGlzdC11bm9yZGVyZWQiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iQ2FwYV8xIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNzIwODE2MzMsMy40MjcwODMzMyBDMi42NzEwMjA0MSwzLjQyNzA4MzMzIDMuNDQxNjMyNjUsMi42NTkwMjc3OCAzLjQ0MTYzMjY1LDEuNzE5MjEyOTYgQzMuNDQxNjMyNjUsMC43NzkzOTgxNDggMi42NzEwMjA0MSwwLjAwODEwMTg1MTg1IDEuNzIwODE2MzMsMC4wMDgxMDE4NTE4NSBDMC43NzA2MTIyNDUsMC4wMDgxMDE4NTE4NSAwLDAuNzc2MTU3NDA3IDAsMS43MTU5NzIyMiBDMCwyLjY1NTc4NzA0IDAuNzczODc3NTUxLDMuNDI3MDgzMzMgMS43MjA4MTYzMywzLjQyNzA4MzMzIEwxLjcyMDgxNjMzLDMuNDI3MDgzMzMgWiBNMS43MjA4MTYzMywwLjgwMjA4MzMzMyBDMi4yMzAyMDQwOCwwLjgwMjA4MzMzMyAyLjY0MTYzMjY1LDEuMjEzNjU3NDEgMi42NDE2MzI2NSwxLjcxNTk3MjIyIEMyLjY0MTYzMjY1LDIuMjE4Mjg3MDQgMi4yMjY5Mzg3OCwyLjYyOTg2MTExIDEuNzIwODE2MzMsMi42Mjk4NjExMSBDMS4yMTQ2OTM4OCwyLjYyOTg2MTExIDAuOCwyLjIxODI4NzA0IDAuOCwxLjcxNTk3MjIyIEMwLjgsMS4yMTM2NTc0MSAxLjIxNDY5Mzg4LDAuODAyMDgzMzMzIDEuNzIwODE2MzMsMC44MDIwODMzMzMgTDEuNzIwODE2MzMsMC44MDIwODMzMzMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNzIwODE2MzMsOC43MDMwMDkyNiBDMi42NzEwMjA0MSw4LjcwMzAwOTI2IDMuNDQxNjMyNjUsNy45MzQ5NTM3IDMuNDQxNjMyNjUsNi45OTUxMzg4OSBDMy40NDE2MzI2NSw2LjA1NTMyNDA3IDIuNjcxMDIwNDEsNS4yODcyNjg1MiAxLjcyMDgxNjMzLDUuMjg3MjY4NTIgQzAuNzcwNjEyMjQ1LDUuMjg3MjY4NTIgMCw2LjA1MjA4MzMzIDAsNi45OTUxMzg4OSBDMCw3LjkzODE5NDQ0IDAuNzczODc3NTUxLDguNzAzMDA5MjYgMS43MjA4MTYzMyw4LjcwMzAwOTI2IEwxLjcyMDgxNjMzLDguNzAzMDA5MjYgWiBNMS43MjA4MTYzMyw2LjA4MTI1IEMyLjIzMDIwNDA4LDYuMDgxMjUgMi42NDE2MzI2NSw2LjQ5MjgyNDA3IDIuNjQxNjMyNjUsNi45OTUxMzg4OSBDMi42NDE2MzI2NSw3LjQ5NzQ1MzcgMi4yMjY5Mzg3OCw3LjkwOTAyNzc4IDEuNzIwODE2MzMsNy45MDkwMjc3OCBDMS4yMTQ2OTM4OCw3LjkwOTAyNzc4IDAuOCw3LjUwMDY5NDQ0IDAuOCw2Ljk5NTEzODg5IEMwLjgsNi40ODk1ODMzMyAxLjIxNDY5Mzg4LDYuMDgxMjUgMS43MjA4MTYzMyw2LjA4MTI1IEwxLjcyMDgxNjMzLDYuMDgxMjUgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuNzIwODE2MzMsMTMuOTgyMTc1OSBDMi42NzEwMjA0MSwxMy45ODIxNzU5IDMuNDQxNjMyNjUsMTMuMjE0MTIwNCAzLjQ0MTYzMjY1LDEyLjI3NDMwNTYgQzMuNDQxNjMyNjUsMTEuMzMxMjUgMi42Njc3NTUxLDEwLjU2NjQzNTIgMS43MjA4MTYzMywxMC41NjY0MzUyIEMwLjc3Mzg3NzU1MSwxMC41NjY0MzUyIDAsMTEuMzM0NDkwNyAwLDEyLjI3NDMwNTYgQzAsMTMuMjE0MTIwNCAwLjc3Mzg3NzU1MSwxMy45ODIxNzU5IDEuNzIwODE2MzMsMTMuOTgyMTc1OSBMMS43MjA4MTYzMywxMy45ODIxNzU5IFogTTEuNzIwODE2MzMsMTEuMzU3MTc1OSBDMi4yMzAyMDQwOCwxMS4zNTcxNzU5IDIuNjQxNjMyNjUsMTEuNzY4NzUgMi42NDE2MzI2NSwxMi4yNzEwNjQ4IEMyLjY0MTYzMjY1LDEyLjc3NjYyMDQgMi4yMjY5Mzg3OCwxMy4xODQ5NTM3IDEuNzIwODE2MzMsMTMuMTg0OTUzNyBDMS4yMTQ2OTM4OCwxMy4xODQ5NTM3IDAuOCwxMi43NzMzNzk2IDAuOCwxMi4yNzEwNjQ4IEMwLjgsMTEuNzY4NzUgMS4yMTQ2OTM4OCwxMS4zNTcxNzU5IDEuNzIwODE2MzMsMTEuMzU3MTc1OSBMMS43MjA4MTYzMywxMS4zNTcxNzU5IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljc0MzY3MzQ3LDIuMTE0NTgzMzMgTDE1LjU4ODU3MTQsMi4xMTQ1ODMzMyBDMTUuODEwNjEyMiwyLjExNDU4MzMzIDE1Ljk5MDIwNDEsMS45MzYzNDI1OSAxNS45OTAyMDQxLDEuNzE1OTcyMjIgQzE1Ljk5MDIwNDEsMS40OTU2MDE4NSAxNS44MTA2MTIyLDEuMzE3MzYxMTEgMTUuNTg4NTcxNCwxLjMxNzM2MTExIEw1Ljc0MzY3MzQ3LDEuMzE3MzYxMTEgQzUuNTIxNjMyNjUsMS4zMTczNjExMSA1LjM0MjA0MDgyLDEuNDk1NjAxODUgNS4zNDIwNDA4MiwxLjcxNTk3MjIyIEM1LjM0MjA0MDgyLDEuOTM2MzQyNTkgNS41MjE2MzI2NSwyLjExNDU4MzMzIDUuNzQzNjczNDcsMi4xMTQ1ODMzMyBMNS43NDM2NzM0NywyLjExNDU4MzMzIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljc0MzY3MzQ3LDcuMzkzNzUgTDE1LjU4ODU3MTQsNy4zOTM3NSBDMTUuODEwNjEyMiw3LjM5Mzc1IDE1Ljk5MDIwNDEsNy4yMTU1MDkyNiAxNS45OTAyMDQxLDYuOTk1MTM4ODkgQzE1Ljk5MDIwNDEsNi43NzQ3Njg1MiAxNS44MTA2MTIyLDYuNTk2NTI3NzggMTUuNTg4NTcxNCw2LjU5NjUyNzc4IEw1Ljc0MzY3MzQ3LDYuNTk2NTI3NzggQzUuNTIxNjMyNjUsNi41OTY1Mjc3OCA1LjM0MjA0MDgyLDYuNzc0NzY4NTIgNS4zNDIwNDA4Miw2Ljk5NTEzODg5IEM1LjM0MjA0MDgyLDcuMjE1NTA5MjYgNS41MjE2MzI2NSw3LjM5Mzc1IDUuNzQzNjczNDcsNy4zOTM3NSBMNS43NDM2NzM0Nyw3LjM5Mzc1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01Ljc0MzY3MzQ3LDEyLjY2OTY3NTkgTDE1LjU4ODU3MTQsMTIuNjY5Njc1OSBDMTUuODEwNjEyMiwxMi42Njk2NzU5IDE1Ljk5MDIwNDEsMTIuNDkxNDM1MiAxNS45OTAyMDQxLDEyLjI3MTA2NDggQzE1Ljk5MDIwNDEsMTIuMDUwNjk0NCAxNS44MTA2MTIyLDExLjg3MjQ1MzcgMTUuNTg4NTcxNCwxMS44NzI0NTM3IEw1Ljc0MzY3MzQ3LDExLjg3MjQ1MzcgQzUuNTIxNjMyNjUsMTEuODcyNDUzNyA1LjM0MjA0MDgyLDEyLjA1MDY5NDQgNS4zNDIwNDA4MiwxMi4yNzEwNjQ4IEM1LjM0MjA0MDgyLDEyLjQ5MTQzNTIgNS41MjE2MzI2NSwxMi42Njk2NzU5IDUuNzQzNjczNDcsMTIuNjY5Njc1OSBMNS43NDM2NzM0NywxMi42Njk2NzU5IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE1IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YWxpZ24tbGVmdDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbGlnbi1sZWZ0IiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IkNhcGFfMSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik04LjQ5MzI2MDg3LDE0Ljg4NzE3MzkgTDAuMzI2MDg2OTU3LDE0Ljg4NzE3MzkgQzAuMTQ2MDg2OTU3LDE0Ljg4NzE3MzkgMCwxNC43NDEwODcgMCwxNC41NjEwODcgQzAsMTQuMzgxMDg3IDAuMTQ2MDg2OTU3LDE0LjIzNSAwLjMyNjA4Njk1NywxNC4yMzUgTDguNDkzMjYwODcsMTQuMjM1IEM4LjY3MzI2MDg3LDE0LjIzNSA4LjgxOTM0NzgzLDE0LjM4MTA4NyA4LjgxOTM0NzgzLDE0LjU2MTA4NyBDOC44MTkzNDc4MywxNC43NDEwODcgOC42NzM5MTMwNCwxNC44ODcxNzM5IDguNDkzMjYwODcsMTQuODg3MTczOSBMOC40OTMyNjA4NywxNC44ODcxNzM5IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC42MTc4MjYxLDEwLjE2MTUyMTcgTDAuMzI2MDg2OTU3LDEwLjE2MTUyMTcgQzAuMTQ2MDg2OTU3LDEwLjE2MTUyMTcgMCwxMC4wMTU0MzQ4IDAsOS44MzU0MzQ3OCBDMCw5LjY1NTQzNDc4IDAuMTQ2MDg2OTU3LDkuNTA5MzQ3ODMgMC4zMjYwODY5NTcsOS41MDkzNDc4MyBMMTQuNjE3ODI2MSw5LjUwOTM0NzgzIEMxNC43OTc4MjYxLDkuNTA5MzQ3ODMgMTQuOTQzOTEzLDkuNjU1NDM0NzggMTQuOTQzOTEzLDkuODM1NDM0NzggQzE0Ljk0MzkxMywxMC4wMTU0MzQ4IDE0Ljc5NzgyNjEsMTAuMTYxNTIxNyAxNC42MTc4MjYxLDEwLjE2MTUyMTcgTDE0LjYxNzgyNjEsMTAuMTYxNTIxNyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOC40OTMyNjA4Nyw1LjQzNTIxNzM5IEwwLjMyNjA4Njk1Nyw1LjQzNTIxNzM5IEMwLjE0NjA4Njk1Nyw1LjQzNTIxNzM5IDAsNS4yODkxMzA0MyAwLDUuMTA5MTMwNDMgQzAsNC45MjkxMzA0MyAwLjE0NjA4Njk1Nyw0Ljc4MzA0MzQ4IDAuMzI2MDg2OTU3LDQuNzgzMDQzNDggTDguNDkzMjYwODcsNC43ODMwNDM0OCBDOC42NzMyNjA4Nyw0Ljc4MzA0MzQ4IDguODE5MzQ3ODMsNC45MjkxMzA0MyA4LjgxOTM0NzgzLDUuMTA5MTMwNDMgQzguODE5MzQ3ODMsNS4yODkxMzA0MyA4LjY3MzkxMzA0LDUuNDM1MjE3MzkgOC40OTMyNjA4Nyw1LjQzNTIxNzM5IEw4LjQ5MzI2MDg3LDUuNDM1MjE3MzkgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYxNzgyNjEsMC43MDg5MTMwNDMgTDAuMzI2MDg2OTU3LDAuNzA4OTEzMDQzIEMwLjE0NjA4Njk1NywwLjcwODkxMzA0MyAwLDAuNTYyODI2MDg3IDAsMC4zODI4MjYwODcgQzAsMC4yMDI4MjYwODcgMC4xNDYwODY5NTcsMC4wNTY3MzkxMzA0IDAuMzI2MDg2OTU3LDAuMDU2NzM5MTMwNCBMMTQuNjE3ODI2MSwwLjA1NjczOTEzMDQgQzE0Ljc5NzgyNjEsMC4wNTY3MzkxMzA0IDE0Ljk0MzkxMywwLjIwMjgyNjA4NyAxNC45NDM5MTMsMC4zODI4MjYwODcgQzE0Ljk0MzkxMywwLjU2MjgyNjA4NyAxNC43OTc4MjYxLDAuNzA4OTEzMDQzIDE0LjYxNzgyNjEsMC43MDg5MTMwNDMgTDE0LjYxNzgyNjEsMC43MDg5MTMwNDMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE1IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YWxpZ24tY2VudGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImFsaWduLWNlbnRlciIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuNTU1ODY5NiwxNC44ODcxNzM5IEwzLjM4ODA0MzQ4LDE0Ljg4NzE3MzkgQzMuMjA4MDQzNDgsMTQuODg3MTczOSAzLjA2MTk1NjUyLDE0Ljc0MTA4NyAzLjA2MTk1NjUyLDE0LjU2MTA4NyBDMy4wNjE5NTY1MiwxNC4zODEwODcgMy4yMDgwNDM0OCwxNC4yMzUgMy4zODgwNDM0OCwxNC4yMzUgTDExLjU1NTIxNzQsMTQuMjM1IEMxMS43MzUyMTc0LDE0LjIzNSAxMS44ODEzMDQzLDE0LjM4MTA4NyAxMS44ODEzMDQzLDE0LjU2MTA4NyBDMTEuODgxMzA0MywxNC43NDEwODcgMTEuNzM1ODY5NiwxNC44ODcxNzM5IDExLjU1NTg2OTYsMTQuODg3MTczOSBMMTEuNTU1ODY5NiwxNC44ODcxNzM5IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYxNzgyNjEsMTAuMTYxNTIxNyBMMC4zMjYwODY5NTcsMTAuMTYxNTIxNyBDMC4xNDYwODY5NTcsMTAuMTYxNTIxNyAwLDEwLjAxNTQzNDggMCw5LjgzNTQzNDc4IEMwLDkuNjU1NDM0NzggMC4xNDYwODY5NTcsOS41MDkzNDc4MyAwLjMyNjA4Njk1Nyw5LjUwOTM0NzgzIEwxNC42MTc4MjYxLDkuNTA5MzQ3ODMgQzE0Ljc5NzgyNjEsOS41MDkzNDc4MyAxNC45NDM5MTMsOS42NTU0MzQ3OCAxNC45NDM5MTMsOS44MzU0MzQ3OCBDMTQuOTQzOTEzLDEwLjAxNTQzNDggMTQuNzk3ODI2MSwxMC4xNjE1MjE3IDE0LjYxNzgyNjEsMTAuMTYxNTIxNyBMMTQuNjE3ODI2MSwxMC4xNjE1MjE3IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjU1NTg2OTYsNS40MzUyMTczOSBMMy4zODgwNDM0OCw1LjQzNTIxNzM5IEMzLjIwODA0MzQ4LDUuNDM1MjE3MzkgMy4wNjE5NTY1Miw1LjI4OTEzMDQzIDMuMDYxOTU2NTIsNS4xMDkxMzA0MyBDMy4wNjE5NTY1Miw0LjkyOTEzMDQzIDMuMjA4MDQzNDgsNC43ODMwNDM0OCAzLjM4ODA0MzQ4LDQuNzgzMDQzNDggTDExLjU1NTIxNzQsNC43ODMwNDM0OCBDMTEuNzM1MjE3NCw0Ljc4MzA0MzQ4IDExLjg4MTMwNDMsNC45MjkxMzA0MyAxMS44ODEzMDQzLDUuMTA5MTMwNDMgQzExLjg4MTMwNDMsNS4yODkxMzA0MyAxMS43MzU4Njk2LDUuNDM1MjE3MzkgMTEuNTU1ODY5Niw1LjQzNTIxNzM5IEwxMS41NTU4Njk2LDUuNDM1MjE3MzkgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjE3ODI2MSwwLjcwODkxMzA0MyBMMC4zMjYwODY5NTcsMC43MDg5MTMwNDMgQzAuMTQ2MDg2OTU3LDAuNzA4OTEzMDQzIDAsMC41NjI4MjYwODcgMCwwLjM4MjgyNjA4NyBDMCwwLjIwMjgyNjA4NyAwLjE0NjA4Njk1NywwLjA1NjczOTEzMDQgMC4zMjYwODY5NTcsMC4wNTY3MzkxMzA0IEwxNC42MTc4MjYxLDAuMDU2NzM5MTMwNCBDMTQuNzk3ODI2MSwwLjA1NjczOTEzMDQgMTQuOTQzOTEzLDAuMjAyODI2MDg3IDE0Ljk0MzkxMywwLjM4MjgyNjA4NyBDMTQuOTQzOTEzLDAuNTYyODI2MDg3IDE0Ljc5NzgyNjEsMC43MDg5MTMwNDMgMTQuNjE3ODI2MSwwLjcwODkxMzA0MyBMMTQuNjE3ODI2MSwwLjcwODkxMzA0MyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE1IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YWxpZ24tcmlnaHQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iYWxpZ24tcmlnaHQiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iQ2FwYV8xIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYxNzgyNjEsMTQuODg3MTczOSBMNi40NTA2NTIxNywxNC44ODcxNzM5IEM2LjI3MDY1MjE3LDE0Ljg4NzE3MzkgNi4xMjQ1NjUyMiwxNC43NDEwODcgNi4xMjQ1NjUyMiwxNC41NjEwODcgQzYuMTI0NTY1MjIsMTQuMzgxMDg3IDYuMjcwNjUyMTcsMTQuMjM1IDYuNDUwNjUyMTcsMTQuMjM1IEwxNC42MTc4MjYxLDE0LjIzNSBDMTQuNzk3ODI2MSwxNC4yMzUgMTQuOTQzOTEzLDE0LjM4MTA4NyAxNC45NDM5MTMsMTQuNTYxMDg3IEMxNC45NDM5MTMsMTQuNzQxMDg3IDE0Ljc5NzgyNjEsMTQuODg3MTczOSAxNC42MTc4MjYxLDE0Ljg4NzE3MzkgTDE0LjYxNzgyNjEsMTQuODg3MTczOSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjE3ODI2MSwxMC4xNjE1MjE3IEwwLjMyNjA4Njk1NywxMC4xNjE1MjE3IEMwLjE0NjA4Njk1NywxMC4xNjE1MjE3IDAsMTAuMDE1NDM0OCAwLDkuODM1NDM0NzggQzAsOS42NTU0MzQ3OCAwLjE0NjA4Njk1Nyw5LjUwOTM0NzgzIDAuMzI2MDg2OTU3LDkuNTA5MzQ3ODMgTDE0LjYxNzgyNjEsOS41MDkzNDc4MyBDMTQuNzk3ODI2MSw5LjUwOTM0NzgzIDE0Ljk0MzkxMyw5LjY1NTQzNDc4IDE0Ljk0MzkxMyw5LjgzNTQzNDc4IEMxNC45NDM5MTMsMTAuMDE1NDM0OCAxNC43OTc4MjYxLDEwLjE2MTUyMTcgMTQuNjE3ODI2MSwxMC4xNjE1MjE3IEwxNC42MTc4MjYxLDEwLjE2MTUyMTcgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYxNzgyNjEsNS40MzUyMTczOSBMNi40NTA2NTIxNyw1LjQzNTIxNzM5IEM2LjI3MDY1MjE3LDUuNDM1MjE3MzkgNi4xMjQ1NjUyMiw1LjI4OTEzMDQzIDYuMTI0NTY1MjIsNS4xMDkxMzA0MyBDNi4xMjQ1NjUyMiw0LjkyOTEzMDQzIDYuMjcwNjUyMTcsNC43ODMwNDM0OCA2LjQ1MDY1MjE3LDQuNzgzMDQzNDggTDE0LjYxNzgyNjEsNC43ODMwNDM0OCBDMTQuNzk3ODI2MSw0Ljc4MzA0MzQ4IDE0Ljk0MzkxMyw0LjkyOTEzMDQzIDE0Ljk0MzkxMyw1LjEwOTEzMDQzIEMxNC45NDM5MTMsNS4yODkxMzA0MyAxNC43OTc4MjYxLDUuNDM1MjE3MzkgMTQuNjE3ODI2MSw1LjQzNTIxNzM5IEwxNC42MTc4MjYxLDUuNDM1MjE3MzkgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjYxNzgyNjEsMC43MDg5MTMwNDMgTDAuMzI2MDg2OTU3LDAuNzA4OTEzMDQzIEMwLjE0NjA4Njk1NywwLjcwODkxMzA0MyAwLDAuNTYyODI2MDg3IDAsMC4zODI4MjYwODcgQzAsMC4yMDI4MjYwODcgMC4xNDYwODY5NTcsMC4wNTY3MzkxMzA0IDAuMzI2MDg2OTU3LDAuMDU2NzM5MTMwNCBMMTQuNjE3ODI2MSwwLjA1NjczOTEzMDQgQzE0Ljc5NzgyNjEsMC4wNTY3MzkxMzA0IDE0Ljk0MzkxMywwLjIwMjgyNjA4NyAxNC45NDM5MTMsMC4zODI4MjYwODcgQzE0Ljk0MzkxMywwLjU2MjgyNjA4NyAxNC43OTc4MjYxLDAuNzA4OTEzMDQzIDE0LjYxNzgyNjEsMC43MDg5MTMwNDMgTDE0LjYxNzgyNjEsMC43MDg5MTMwNDMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE1IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+YWxpZ24tanVzdGlmeTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbGlnbi1qdXN0aWZ5IiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IkNhcGFfMSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC42MTkxMzA0LDE0Ljg4NzgyNjEgTDAuMzI2MDg2OTU3LDE0Ljg4NzgyNjEgQzAuMTQ2MDg2OTU3LDE0Ljg4NzgyNjEgMCwxNC43NDE3MzkxIDAsMTQuNTYxNzM5MSBDMCwxNC4zODE3MzkxIDAuMTQ2MDg2OTU3LDE0LjIzNTY1MjIgMC4zMjYwODY5NTcsMTQuMjM1NjUyMiBMMTQuNjE5MTMwNCwxNC4yMzU2NTIyIEMxNC43OTkxMzA0LDE0LjIzNTY1MjIgMTQuOTQ1MjE3NCwxNC4zODE3MzkxIDE0Ljk0NTIxNzQsMTQuNTYxNzM5MSBDMTQuOTQ1MjE3NCwxNC43NDE3MzkxIDE0Ljc5OTEzMDQsMTQuODg3ODI2MSAxNC42MTkxMzA0LDE0Ljg4NzgyNjEgTDE0LjYxOTEzMDQsMTQuODg3ODI2MSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjE5MTMwNCwxMC4xNjIxNzM5IEwwLjMyNjA4Njk1NywxMC4xNjIxNzM5IEMwLjE0NjA4Njk1NywxMC4xNjIxNzM5IDAsMTAuMDE2MDg3IDAsOS44MzYwODY5NiBDMCw5LjY1NjA4Njk2IDAuMTQ2MDg2OTU3LDkuNTEgMC4zMjYwODY5NTcsOS41MSBMMTQuNjE5MTMwNCw5LjUxIEMxNC43OTkxMzA0LDkuNTEgMTQuOTQ1MjE3NCw5LjY1NjA4Njk2IDE0Ljk0NTIxNzQsOS44MzYwODY5NiBDMTQuOTQ1MjE3NCwxMC4wMTYwODcgMTQuNzk5MTMwNCwxMC4xNjIxNzM5IDE0LjYxOTEzMDQsMTAuMTYyMTczOSBMMTQuNjE5MTMwNCwxMC4xNjIxNzM5IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC42MTkxMzA0LDUuNDM1ODY5NTcgTDAuMzI2MDg2OTU3LDUuNDM1ODY5NTcgQzAuMTQ2MDg2OTU3LDUuNDM1ODY5NTcgMCw1LjI4OTc4MjYxIDAsNS4xMDk3ODI2MSBDMCw0LjkyOTc4MjYxIDAuMTQ2MDg2OTU3LDQuNzgzNjk1NjUgMC4zMjYwODY5NTcsNC43ODM2OTU2NSBMMTQuNjE5MTMwNCw0Ljc4MzY5NTY1IEMxNC43OTkxMzA0LDQuNzgzNjk1NjUgMTQuOTQ1MjE3NCw0LjkyOTc4MjYxIDE0Ljk0NTIxNzQsNS4xMDk3ODI2MSBDMTQuOTQ1MjE3NCw1LjI4OTc4MjYxIDE0Ljc5OTEzMDQsNS40MzU4Njk1NyAxNC42MTkxMzA0LDUuNDM1ODY5NTcgTDE0LjYxOTEzMDQsNS40MzU4Njk1NyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuNjE5MTMwNCwwLjcwOTU2NTIxNyBMMC4zMjYwODY5NTcsMC43MDk1NjUyMTcgQzAuMTQ2MDg2OTU3LDAuNzA5NTY1MjE3IDAsMC41NjM0NzgyNjEgMCwwLjM4MzQ3ODI2MSBDMCwwLjIwMzQ3ODI2MSAwLjE0NjA4Njk1NywwLjA1NzM5MTMwNDMgMC4zMjYwODY5NTcsMC4wNTczOTEzMDQzIEwxNC42MTkxMzA0LDAuMDU3MzkxMzA0MyBDMTQuNzk5MTMwNCwwLjA1NzM5MTMwNDMgMTQuOTQ1MjE3NCwwLjIwMzQ3ODI2MSAxNC45NDUyMTc0LDAuMzgzNDc4MjYxIEMxNC45NDUyMTc0LDAuNTYzNDc4MjYxIDE0Ljc5OTEzMDQsMC43MDk1NjUyMTcgMTQuNjE5MTMwNCwwLjcwOTU2NTIxNyBMMTQuNjE5MTMwNCwwLjcwOTU2NTIxNyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE1IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Y29sb3I8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iY29sb3IiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iQ2FwYV8xIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjQwNjM4NzEsMC41ODUyNTgwNjUgQzEzLjYyNjI5MDMsLTAuMTk0ODcwOTY4IDEyLjM2MTQ1MTYsLTAuMTk1MDk2Nzc0IDExLjU4MDgzODcsMC41ODUgTDExLjA0MTU4MDYsMS4xMjQyNTgwNiBDMTAuNzUxOTAzMiwwLjgzNDYxMjkwMyAxMC4yODI3MDk3LDAuODM0NjEyOTAzIDkuOTkzMDY0NTIsMS4xMjQyNTgwNiBDOS43MDMzNTQ4NCwxLjQxMzY3NzQyIDkuNzAzMzU0ODQsMS44ODMzODcxIDkuOTkzMDY0NTIsMi4xNzI4MDY0NSBMMTAuMTY3Nzc0MiwyLjM0NzYxMjkgTDQuMzQyMzU0ODQsOC4xNzM0NTE2MSBMNC4zNDE4Mzg3MSw4LjE3MzQ1MTYxIEwyLjMxOTc0MTk0LDEwLjE5NTc0MTkgQzIuMTU5MDMyMjYsMTAuMzU2NDUxNiAyLjA2NDI5MDMyLDEwLjU3MTQxOTQgMi4wNTQwOTY3NywxMC43OTg0NTE2IEwyLjA0OTI1ODA2LDEwLjkwNjMyMjYgTDIuMDQ5MjU4MDYsMTAuOTA3ODA2NSBMMS45Njc2Nzc0MiwxMi43MzY5Njc3IEMxLjk2NDMyMjU4LDEyLjgyMTkwMzIgMS45OTYxNjEyOSwxMi45MDQyMjU4IDIuMDU2MDMyMjYsMTIuOTY0MzIyNiBDMi4xMTI1MTYxMywxMy4wMjEwNjQ1IDIuMTg5NzQxOTQsMTMuMDUyNjQ1MiAyLjI2OTkwMzIzLDEzLjA1MjY0NTIgQzIuMjc0MjU4MDYsMTMuMDUyNjQ1MiAyLjI3ODU4MDY1LDEzLjA1MjY0NTIgMi4yODM0NTE2MSwxMy4wNTIzODcxIEwzLjI1MzI1ODA2LDEzLjAwOTQ1MTYgTDMuMjUzNzc0MTksMTMuMDA5NDUxNiBMMy44NDQ2Nzc0MiwxMi45ODMxNjEzIEw0LjExMywxMi45NzEzNTQ4IEM0LjQwOTg3MDk3LDEyLjk1ODA2NDUgNC42OTE4Mzg3MSwxMi44MzM5Njc3IDQuOTAyMzIyNTgsMTIuNjIzNzQxOSBMMTIuNjczMjI1OCw0Ljg1MzA2NDUyIEwxMi44MTg1ODA2LDQuOTk4Mzg3MSBDMTIuOTYzNDE5NCw1LjE0MzE2MTI5IDEzLjE1MzE2MTMsNS4yMTU1ODA2NSAxMy4zNDI4Mzg3LDUuMjE1NTgwNjUgQzEzLjUzMjU0ODQsNS4yMTU1ODA2NSAxMy43MjIzMjI2LDUuMTQzMTYxMjkgMTMuODY3MTI5LDQuOTk4Mzg3MSBDMTQuMTU2ODA2NSw0LjcwODkzNTQ4IDE0LjE1NjgwNjUsNC4yMzkyMjU4MSAxMy44NjcxMjksMy45NDk4Mzg3MSBMMTQuNDA2MzU0OCwzLjQxMDU0ODM5IEMxNS4xODY1MTYxLDIuNjMwNDUxNjEgMTUuMTg2NTE2MSwxLjM2NTYxMjkgMTQuNDA2Mzg3MSwwLjU4NTI1ODA2NSBMMTQuNDA2Mzg3MSwwLjU4NTI1ODA2NSBaIE04Ljc5NDgwNjQ1LDcuMzMzMjI1ODEgTDYuMDY1Nzc0MTksNy44NDgwNjQ1MiBMMTAuNTE3MzIyNiwzLjM5NjMyMjU4IEwxMS42MjQ4MDY1LDQuNTAzMjkwMzIgTDguNzk0ODA2NDUsNy4zMzMyMjU4MSBMOC43OTQ4MDY0NSw3LjMzMzIyNTgxIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjA4MDY0NTE2LDEzLjY3MzI5MDMgQzAuOTMxNzA5Njc3LDEzLjY3MzI5MDMgMCwxMy45NjgyOTAzIDAsMTQuMzMyNDgzOSBDMCwxNC42OTY0ODM5IDAuOTMxNzA5Njc3LDE0Ljk5MTQ1MTYgMi4wODA2NDUxNiwxNC45OTE0NTE2IEMzLjIyOTU4MDY1LDE0Ljk5MTQ1MTYgNC4xNjA4Mzg3MSwxNC42OTY1MTYxIDQuMTYwODM4NzEsMTQuMzMyNDgzOSBDNC4xNjA4Mzg3MSwxMy45NjgyNTgxIDMuMjI5NTgwNjUsMTMuNjczMjkwMyAyLjA4MDY0NTE2LDEzLjY3MzI5MDMgTDIuMDgwNjQ1MTYsMTMuNjczMjkwMyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTguMSAxNGw2LjQtNy4yYzAuNi0wLjcgMC42LTEuOC0wLjEtMi41bC0yLjctMi43Yy0wLjMtMC40LTAuOC0wLjYtMS4zLTAuNmgtMS44Yy0wLjUgMC0xIDAuMi0xLjQgMC42bC02LjcgNy42Yy0wLjYgMC43LTAuNiAxLjkgMC4xIDIuNWwyLjcgMi43YzAuMyAwLjQgMC44IDAuNiAxLjMgMC42aDExLjR2LTFoLTcuOXpNNi44IDEzLjljMCAwIDAtMC4xIDAgMGwtMi43LTIuN2MtMC40LTAuNC0wLjQtMC45IDAtMS4zbDMuNC0zLjloLTFsLTMgMy4zYy0wLjYgMC43LTAuNiAxLjcgMC4xIDIuNGwyLjMgMi4zaC0xLjNjLTAuMiAwLTAuNC0wLjEtMC42LTAuMmwtMi44LTIuOGMtMC4zLTAuMy0wLjMtMC44IDAtMS4xbDMuNS0zLjloMS44bDMuNS00aDFsLTMuNSA0IDMuMSAzLjctMy41IDRjLTAuMSAwLjEtMC4yIDAuMS0wLjMgMC4yeiI+PC9wYXRoPgo8L3N2Zz4K"

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE1IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGluazwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsaW5rIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IkNhcGFfMSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuOTY3LDAuOTUgQzEzLjM1NTUsMC4zMzg1IDEyLjUzOTc1LDAuMDAxNzUgMTEuNjY5NzUsMC4wMDE3NSBDMTAuOCwwLjAwMTc1IDkuOTg0LDAuMzM4NSA5LjM3MjUsMC45NSBMNy4xMDUsMy4yMTc1IEM2LjI4NjI1LDQuMDM2MjUgNiw1LjE4NjUgNi4yMzk3NSw2LjI0IEM2LjAwNDUsNi4xODcgNS43NjIyNSw2LjE1Njc1IDUuNTE0NzUsNi4xNTY3NSBDNC42NDUsNi4xNTY3NSAzLjgyOSw2LjQ5MzUgMy4yMTc3NSw3LjEwNSBMMC45NSw5LjM3Mjc1IEMtMC4zMTY1LDEwLjYzOTI1IC0wLjMxNjUsMTIuNzAwNzUgMC45NSwxMy45NjcyNSBDMS41NjE1LDE0LjU3ODc1IDIuMzc3MjUsMTQuOTE1NSAzLjI0NzI1LDE0LjkxNTUgQzQuMTE3MjUsMTQuOTE1NSA0LjkzMywxNC41Nzg3NSA1LjU0NDUsMTMuOTY3MjUgTDcuODEyLDExLjY5OTc1IEM4LjYzMDc1LDEwLjg4MSA4LjkxNyw5LjczMDc1IDguNjc3MjUsOC42NzcyNSBDOC45MTI1LDguNzMwMjUgOS4xNTQ3NSw4Ljc2MDUgOS40MDIyNSw4Ljc2MDUgQzEwLjI3MjI1LDguNzYwNSAxMS4wODgyNSw4LjQyMzc1IDExLjY5OTUsNy44MTIyNSBMMTMuOTY3MjUsNS41NDQ3NSBDMTUuMjM0LDQuMjc4IDE1LjIzNCwyLjIxNjc1IDEzLjk2NywwLjk1IEwxMy45NjcsMC45NSBaIE03LjEwNSwxMC45OTI1IEw0LjgzNzUsMTMuMjYgQzQuNDE1LDEzLjY4MjUgMy44NSwxMy45MTUyNSAzLjI0NzI1LDEzLjkxNTI1IEMyLjY0NDUsMTMuOTE1MjUgMi4wNzk3NSwxMy42ODI1IDEuNjU3LDEzLjI2IEMwLjc4MDI1LDEyLjM4MyAwLjc4MDI1LDEwLjk1NjUgMS42NTcsMTAuMDc5NSBMMy45MjQ3NSw3LjgxMiBDNC4zNDcyNSw3LjM4OTUgNC45MTIsNy4xNTY3NSA1LjUxNDc1LDcuMTU2NzUgQzUuOTQ1NzUsNy4xNTY3NSA2LjM1NjI1LDcuMjc3NSA2LjcxMDI1LDcuNDk5NzUgTDQuNzcyMjUsOS40Mzc3NSBDNC41NzcsOS42MzMgNC41NzcsOS45NDk1IDQuNzcyMjUsMTAuMTQ0NzUgQzQuODY5NzUsMTAuMjQyNSA0Ljk5Nzc1LDEwLjI5MTI1IDUuMTI1NzUsMTAuMjkxMjUgQzUuMjUzNzUsMTAuMjkxMjUgNS4zODE3NSwxMC4yNDI1IDUuNDc5MjUsMTAuMTQ0NzUgTDcuNDE3NSw4LjIwNjUgQzcuOTYzLDkuMDc1IDcuODYsMTAuMjM3MjUgNy4xMDUsMTAuOTkyNSBMNy4xMDUsMTAuOTkyNSBaIE0xMy4yNiw0LjgzNzUgTDEwLjk5MjI1LDcuMTA1IEMxMC41Njk3NSw3LjUyNzUgMTAuMDA1LDcuNzYwMjUgOS40MDIsNy43NjAyNSBDOC45NzEsNy43NjAyNSA4LjU2MDc1LDcuNjM5NSA4LjIwNjc1LDcuNDE3MjUgTDEwLjE0NDc1LDUuNDc5MjUgQzEwLjM0LDUuMjg0IDEwLjM0LDQuOTY3NSAxMC4xNDQ3NSw0Ljc3MjI1IEM5Ljk0OTc1LDQuNTc3IDkuNjMyNzUsNC41NzcgOS40Mzc3NSw0Ljc3MjI1IEw3LjQ5OTUsNi43MTA1IEM2Ljk1NCw1Ljg0MiA3LjA1Nyw0LjY4IDcuODEyLDMuOTI0NzUgTDEwLjA3OTUsMS42NTcyNSBDMTAuNTAyLDEuMjM0NzUgMTEuMDY3LDEuMDAyIDExLjY2OTc1LDEuMDAyIEMxMi4yNzI3NSwxLjAwMiAxMi44MzcyNSwxLjIzNDc1IDEzLjI2LDEuNjU3MjUgQzEzLjY4Mjc1LDIuMDc5NzUgMTMuOTE1MjUsMi42NDQ1IDEzLjkxNTI1LDMuMjQ3NSBDMTMuOTE1MjUsMy44NTAyNSAxMy42ODI1LDQuNDE1IDEzLjI2LDQuODM3NSBMMTMuMjYsNC44Mzc1IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8IS0tIENyZWF0ZWQgd2l0aCBNZXRob2QgRHJhdyAtIGh0dHA6Ly9naXRodWIuY29tL2R1b3BpeGVsL01ldGhvZC1EcmF3LyAtLT4KIDxnPgogIDx0aXRsZT5iYWNrZ3JvdW5kPC90aXRsZT4KICA8cmVjdCBmaWxsPSIjZmZmIiBpZD0iY2FudmFzX2JhY2tncm91bmQiIGhlaWdodD0iMTYiIHdpZHRoPSIxNyIgeT0iLTEiIHg9Ii0xIi8+CiAgPGcgZGlzcGxheT0ibm9uZSIgb3ZlcmZsb3c9InZpc2libGUiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJjYW52YXNHcmlkIj4KICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPgogIDwvZz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSInVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmIiBmb250LXNpemU9IjgiIGlkPSJzdmdfMyIgeT0iNi4yNTEyNDgiIHg9Ii0wLjI3MDM4MyIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiMwMDAwMDAiPkNUQTwvdGV4dD4KICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIGZvbnQtZmFtaWx5PSInVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmIiBmb250LXNpemU9IjYiIGlkPSJzdmdfNCIgeT0iMTIuMDc0ODc1IiB4PSIxLjE5Mzg0NCIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2U9IiMwMDAiIGZpbGw9IiMwMDAwMDAiPkJPWDwvdGV4dD4KIDwvZz4KPC9zdmc+"

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDE1IDE1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dW5saW5rPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InVubGluayIgZmlsbD0iIzAwMDAwMCI+CiAgICAgICAgICAgIDxnIGlkPSJDYXBhXzEiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuOTU2MjcyNywxLjAzNjYzNjM2IEMxMi41NzQwOTA5LC0wLjM0NTU0NTQ1NSAxMC4zMjQ5MDkxLC0wLjM0NSA4Ljk0MjQ1NDU1LDEuMDM2NjM2MzYgTDYuNDM1NTQ1NDUsMy41NDM1NDU0NSBDNi4yMjI1NDU0NSwzLjc1NjU0NTQ1IDYuMjIyNTQ1NDUsNC4xMDE4MTgxOCA2LjQzNTU0NTQ1LDQuMzE0ODE4MTggQzYuNjQ4NTQ1NDUsNC41Mjc4MTgxOCA2Ljk5MzgxODE4LDQuNTI3ODE4MTggNy4yMDY4MTgxOCw0LjMxNDgxODE4IEw5LjcxMzcyNzI3LDEuODA3OTA5MDkgQzEwLjE3NDkwOTEsMS4zNDcgMTAuNzkxMjcyNywxLjA5MjgxODE4IDExLjQ0OTA5MDksMS4wOTI4MTgxOCBDMTIuMTA3MTgxOCwxLjA5MjgxODE4IDEyLjcyMzU0NTUsMS4zNDcgMTMuMTg0NzI3MywxLjgwODE4MTgyIEMxMy42NDU5MDkxLDIuMjY5MzYzNjQgMTMuOTAwMDkwOSwyLjg4NTcyNzI3IDEzLjkwMDA5MDksMy41NDM4MTgxOCBDMTMuOTAwMDkwOSw0LjIwMTYzNjM2IDEzLjY0NTkwOTEsNC44MTggMTMuMTg0NzI3Myw1LjI3OTE4MTgyIEw5LjkwNjgxODE4LDguNTU3OTA5MDkgQzguOTQ5NTQ1NDUsOS41MTQ2MzYzNiA3LjM5MjU0NTQ1LDkuNTE0NjM2MzYgNi40MzUyNzI3Myw4LjU1NzkwOTA5IEM2LjIyMjI3MjczLDguMzQ0OTA5MDkgNS44NzcsOC4zNDQ5MDkwOSA1LjY2NCw4LjU1NzkwOTA5IEM1LjQ1MSw4Ljc3MDkwOTA5IDUuNDUxLDkuMTE2NDU0NTUgNS42NjQsOS4zMjkxODE4MiBDNi4zNTUwOTA5MSwxMC4wMjAyNzI3IDcuMjYzLDEwLjM2NTgxODIgOC4xNzA5MDkwOSwxMC4zNjU4MTgyIEM5LjA3ODgxODE4LDEwLjM2NTgxODIgOS45ODY3MjcyNywxMC4wMjAyNzI3IDEwLjY3NzgxODIsOS4zMjkxODE4MiBMMTMuOTU2MjcyNyw2LjA1MDcyNzI3IEMxNC42MjM2MzY0LDUuMzgzNjM2MzYgMTQuOTkxMjcyNyw0LjQ5MzE4MTgyIDE0Ljk5MTI3MjcsMy41NDM4MTgxOCBDMTQuOTkxMjcyNywyLjU5NDE4MTgyIDE0LjYyMzYzNjQsMS43MDQgMTMuOTU2MjcyNywxLjAzNjYzNjM2IEwxMy45NTYyNzI3LDEuMDM2NjM2MzYgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuMzk5NjM2MzYsMTEuMDY0NTQ1NSBMNS4yNzgzNjM2NCwxMy4xODU4MTgyIEM0LjgxNzE4MTgyLDEzLjY0NyA0LjIwMDgxODE4LDEzLjkwMTE4MTggMy41NDI3MjcyNywxMy45MDExODE4IEMyLjg4NDkwOTA5LDEzLjkwMTE4MTggMi4yNjgyNzI3MywxMy42NDcgMS44MDcwOTA5MSwxMy4xODU4MTgyIEMwLjg1MDA5MDkwOSwxMi4yMjg4MTgyIDAuODUwMDkwOTA5LDEwLjY3MTU0NTUgMS44MDcwOTA5MSw5LjcxNDU0NTQ1IEw0Ljg5MjcyNzI3LDYuNjI4OTA5MDkgQzUuMzUzOTA5MDksNi4xNjggNS45NzAyNzI3Myw1LjkxMzgxODE4IDYuNjI4MzYzNjQsNS45MTM4MTgxOCBDNy4yODYxODE4Miw1LjkxMzgxODE4IDcuOTAyNTQ1NDUsNi4xNjggOC4zNjM3MjcyNyw2LjYyODkwOTA5IEM4LjU3NjcyNzI3LDYuODQxOTA5MDkgOC45MjIsNi44NDE5MDkwOSA5LjEzNSw2LjYyODkwOTA5IEM5LjM0OCw2LjQxNTkwOTA5IDkuMzQ4LDYuMDcwNjM2MzYgOS4xMzUsNS44NTc2MzYzNiBDNy43NTMwOTA5MSw0LjQ3NTcyNzI3IDUuNTAzOTA5MDksNC40NzU0NTQ1NSA0LjEyMTE4MTgyLDUuODU3NjM2MzYgTDEuMDM1NTQ1NDUsOC45NDM1NDU0NSBDMC4zNjg0NTQ1NDUsOS42MTA2MzYzNiAwLjAwMDgxODE4MTgxOCwxMC41MDEwOTA5IDAuMDAwODE4MTgxODE4LDExLjQ1MDQ1NDUgQzAuMDAwODE4MTgxODE4LDEyLjM5OTU0NTUgMC4zNjg0NTQ1NDUsMTMuMjkgMS4wMzU4MTgxOCwxMy45NTcwOTA5IEMxLjcwMjkwOTA5LDE0LjYyNDQ1NDUgMi41OTMzNjM2NCwxNC45OTIwOTA5IDMuNTQyNDU0NTUsMTQuOTkyMDkwOSBDNC40OTE4MTgxOCwxNC45OTIwOTA5IDUuMzgyMjcyNzMsMTQuNjI0NDU0NSA2LjA0OTM2MzY0LDEzLjk1NzA5MDkgTDguMTcwNjM2MzYsMTEuODM1ODE4MiBDOC4zODM2MzYzNiwxMS42MjI4MTgyIDguMzgzNjM2MzYsMTEuMjc3NTQ1NSA4LjE3MDYzNjM2LDExLjA2NDU0NTUgQzcuOTU3NjM2MzYsMTAuODUxNTQ1NSA3LjYxMjYzNjM2LDEwLjg1MTU0NTUgNy4zOTk2MzYzNiwxMS4wNjQ1NDU1IEw3LjM5OTYzNjM2LDExLjA2NDU0NTUgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkuMjczNTQ1NDUsMTIuMDAxOTA5MSBDOC45NzI0NTQ1NSwxMi4wMDE5MDkxIDguNzI4MDkwOTEsMTIuMjQ2MjcyNyA4LjcyODA5MDkxLDEyLjU0NzM2MzYgTDguNzI4MDkwOTEsMTQuMTgzNzI3MyBDOC43MjgwOTA5MSwxNC40ODQ4MTgyIDguOTcyNDU0NTUsMTQuNzI5MTgxOCA5LjI3MzU0NTQ1LDE0LjcyOTE4MTggQzkuNTc0NjM2MzYsMTQuNzI5MTgxOCA5LjgxOSwxNC40ODQ4MTgyIDkuODE5LDE0LjE4MzcyNzMgTDkuODE5LDEyLjU0NzM2MzYgQzkuODE5LDEyLjI0NiA5LjU3NDkwOTA5LDEyLjAwMTkwOTEgOS4yNzM1NDU0NSwxMi4wMDE5MDkxIEw5LjI3MzU0NTQ1LDEyLjAwMTkwOTEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjIyOTU0NTUsMTEuNjE2MjcyNyBDMTEuMDE2NTQ1NSwxMS40MDMyNzI3IDEwLjY3MTI3MjcsMTEuNDAzMjcyNyAxMC40NTgyNzI3LDExLjYxNjI3MjcgQzEwLjI0NTI3MjcsMTEuODI5MjcyNyAxMC4yNDUyNzI3LDEyLjE3NDU0NTUgMTAuNDU4MjcyNywxMi4zODc1NDU1IEwxMS42MTUxODE4LDEzLjU0NDQ1NDUgQzExLjcyMTgxODIsMTMuNjUxMDkwOSAxMS44NjExODE4LDEzLjcwNDI3MjcgMTIuMDAwODE4MiwxMy43MDQyNzI3IEMxMi4xNDA0NTQ1LDEzLjcwNDI3MjcgMTIuMjc5ODE4MiwxMy42NTEwOTA5IDEyLjM4NjQ1NDUsMTMuNTQ0NDU0NSBDMTIuNTk5NDU0NSwxMy4zMzE0NTQ1IDEyLjU5OTQ1NDUsMTIuOTg2MTgxOCAxMi4zODY0NTQ1LDEyLjc3MzE4MTggTDExLjIyOTU0NTUsMTEuNjE2MjcyNyBMMTEuMjI5NTQ1NSwxMS42MTYyNzI3IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMi41MzY3MjczLDkuODIwMDkwOTEgTDEwLjkwMDM2MzYsOS44MjAwOTA5MSBDMTAuNTk5MjcyNyw5LjgyMDA5MDkxIDEwLjM1NDkwOTEsMTAuMDY0NDU0NSAxMC4zNTQ5MDkxLDEwLjM2NTU0NTUgQzEwLjM1NDkwOTEsMTAuNjY2NjM2NCAxMC41OTkyNzI3LDEwLjkxMSAxMC45MDAzNjM2LDEwLjkxMSBMMTIuNTM2NzI3MywxMC45MTEgQzEyLjgzNzgxODIsMTAuOTExIDEzLjA4MjE4MTgsMTAuNjY2NjM2NCAxMy4wODIxODE4LDEwLjM2NTU0NTUgQzEzLjA4MjE4MTgsMTAuMDY0NDU0NSAxMi44MzgwOTA5LDkuODIwMDkwOTEgMTIuNTM2NzI3Myw5LjgyMDA5MDkxIEwxMi41MzY3MjczLDkuODIwMDkwOTEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQuOTA5OTA5MDksMy41NDczNjM2NCBDNS4yMTEsMy41NDczNjM2NCA1LjQ1NTM2MzY0LDMuMzAzIDUuNDU1MzYzNjQsMy4wMDE5MDkwOSBMNS40NTUzNjM2NCwxLjM2NTU0NTQ1IEM1LjQ1NTM2MzY0LDEuMDY0NDU0NTUgNS4yMTEsMC44MjAwOTA5MDkgNC45MDk5MDkwOSwwLjgyMDA5MDkwOSBDNC42MDg4MTgxOCwwLjgyMDA5MDkwOSA0LjM2NDQ1NDU1LDEuMDY0NDU0NTUgNC4zNjQ0NTQ1NSwxLjM2NTU0NTQ1IEw0LjM2NDQ1NDU1LDMuMDAxOTA5MDkgQzQuMzY0NDU0NTUsMy4zMDMgNC42MDg4MTgxOCwzLjU0NzM2MzY0IDQuOTA5OTA5MDksMy41NDczNjM2NCBMNC45MDk5MDkwOSwzLjU0NzM2MzY0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjg4NzkwOTA5LDMuOTMzIEMyLjk5NDU0NTQ1LDQuMDM5NjM2MzYgMy4xMzM5MDkwOSw0LjA5MjgxODE4IDMuMjczNTQ1NDUsNC4wOTI4MTgxOCBDMy40MTMxODE4Miw0LjA5MjgxODE4IDMuNTUyNTQ1NDUsNC4wMzk2MzYzNiAzLjY1OTE4MTgyLDMuOTMzIEMzLjg3MjE4MTgyLDMuNzIgMy44NzIxODE4MiwzLjM3NDcyNzI3IDMuNjU5MTgxODIsMy4xNjE3MjcyNyBMMi41MDIyNzI3MywyLjAwNDU0NTQ1IEMyLjI4OTI3MjczLDEuNzkxNTQ1NDUgMS45NDQsMS43OTE1NDU0NSAxLjczMSwyLjAwNDU0NTQ1IEMxLjUxOCwyLjIxNzU0NTQ1IDEuNTE4LDIuNTYyODE4MTggMS43MzEsMi43NzU4MTgxOCBMMi44ODc5MDkwOSwzLjkzMyBMMi44ODc5MDkwOSwzLjkzMyBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMS42Mjc2MzYzNiw1LjcyOTE4MTgyIEwzLjI2NCw1LjcyOTE4MTgyIEMzLjU2NTA5MDkxLDUuNzI5MTgxODIgMy44MDk0NTQ1NSw1LjQ4NDgxODE4IDMuODA5NDU0NTUsNS4xODM3MjcyNyBDMy44MDk0NTQ1NSw0Ljg4MjYzNjM2IDMuNTY1MDkwOTEsNC42MzgyNzI3MyAzLjI2NCw0LjYzODI3MjczIEwxLjYyNzYzNjM2LDQuNjM4MjcyNzMgQzEuMzI2NTQ1NDUsNC42MzgyNzI3MyAxLjA4MjE4MTgyLDQuODgyNjM2MzYgMS4wODIxODE4Miw1LjE4MzcyNzI3IEMxLjA4MjE4MTgyLDUuNDg0ODE4MTggMS4zMjY1NDU0NSw1LjcyOTE4MTgyIDEuNjI3NjM2MzYsNS43MjkxODE4MiBMMS42Mjc2MzYzNiw1LjcyOTE4MTgyIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTYuOTk5OTgyODMzODYyMzA1IiBoZWlnaHQ9IjE2Ljk5OTk4MDkyNjUxMzY3MiIgdmlld0JveD0iMTUuNzI4OSAyMi4wODI0IDE3IDE3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMTY1NTE1OTg5MDY1MTcwMywgMCwgMCwgMC4xNjU1MTU5ODkwNjUxNzAzLCAxNi41ODUwNjc3NDkwMjM0MzgsIDIyLjkzODQyNjk3MTQzNTU0NykiPgogICAgPHBhdGggZD0iTSA3OS4yODUgMTMuMDg0IEMgNjEuMDMxIC01LjE3MiAzMS4zMzIgLTUuMTcyIDEzLjA4MSAxMy4wOCBDIC01LjE3MyAzMS4zMzEgLTUuMTcxIDYxLjAzMSAxMy4wODMgNzkuMjg2IEMgMzEuMzMyIDk3LjUzNyA2MS4wMzEgOTcuNTM3IDc5LjI4MyA3OS4yODMgQyA5Ny41MzYgNjEuMDMxIDk3LjUzNSAzMS4zMzMgNzkuMjg1IDEzLjA4NCBaIE0gNzQuMTc3IDc0LjE3OCBDIDU4Ljc0MSA4OS42MTQgMzMuNjI1IDg5LjYxNiAxOC4xODcgNzQuMTggQyAyLjc0OCA1OC43NDIgMi43NSAzMy42MjIgMTguMTg3IDE4LjE4NiBDIDMzLjYyMyAyLjc1MSA1OC43NCAyLjc0OSA3NC4xNzkgMTguMTg4IEMgODkuNjE1IDMzLjYyMyA4OS42MTMgNTguNzQzIDc0LjE3NyA3NC4xNzggWiBNIDI4LjcyMSAzMy41MTMgQyAyOC43MjEgMzAuNDkyIDMxLjE3MSAyOC4wNDIgMzQuMTkyIDI4LjA0MiBDIDM3LjIxMyAyOC4wNDIgMzkuNjYzIDMwLjQ5MSAzOS42NjMgMzMuNTEzIEMgMzkuNjYzIDM2LjUzNiAzNy4yMTMgMzguOTg2IDM0LjE5MiAzOC45ODYgQyAzMS4xNzEgMzguOTg2IDI4LjcyMSAzNi41MzYgMjguNzIxIDMzLjUxMyBaIE0gNTMuNTMgMzMuNTEzIEMgNTMuNTMgMzAuNDkyIDU1Ljk4MiAyOC4wNDIgNTkuMDA0IDI4LjA0MiBDIDYyLjAyNCAyOC4wNDIgNjQuNDc0IDMwLjQ5MSA2NC40NzQgMzMuNTEzIEMgNjQuNDc0IDM2LjUzNiA2Mi4wMjUgMzguOTg2IDU5LjAwNCAzOC45ODYgQyA1NS45ODIgMzguOTg2IDUzLjUzIDM2LjUzNiA1My41MyAzMy41MTMgWiBNIDY2LjQ2NSA1NS45MjIgQyA2My4wNzUgNjMuNzY0IDU1LjEzNCA2OC44MyA0Ni4yMzYgNjguODMgQyAzNy4xNDcgNjguODMgMjkuMTU5IDYzLjczOCAyNS44ODUgNTUuODU3IEMgMjUuMzI0IDU0LjUwOCAyNS45NjQgNTIuOTU5IDI3LjMxNCA1Mi4zOTcgQyAyNy42NDYgNTIuMjYgMjcuOTkgNTIuMTk2IDI4LjMyOSA1Mi4xOTYgQyAyOS4zNjcgNTIuMTk2IDMwLjM1MiA1Mi44MDggMzAuNzc0IDUzLjgyNyBDIDMzLjIyNCA1OS43MjcgMzkuMjkzIDYzLjUzNyA0Ni4yMzYgNjMuNTM3IEMgNTMuMDIxIDYzLjUzNyA1OS4wNTQgNTkuNzI0IDYxLjYwNiA1My44MjEgQyA2Mi4xODcgNTIuNDggNjMuNzQ1IDUxLjg2MSA2NS4wODcgNTIuNDQyIEMgNjYuNDI3IDUzLjAyNCA2Ny4wNDYgNTQuNTgxIDY2LjQ2NSA1NS45MjIgWiIvPgogIDwvZz4KPC9zdmc+"

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTYuOTk5OTM3MDU3NDk1MTE3IiBoZWlnaHQ9IjE2Ljk5OTkzNzA1NzQ5NTExNyIgdmlld0JveD0iNS44MTI3NmUtNyAzLjA1NDIwZS04IDE2Ljk5OTkgMTYuOTk5OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzMzIwMjk5ODM0MDEyOTg1LCAwLCAwLCAwLjAzMzIwMjk5ODM0MDEyOTg1LCAtMi44NDIxNzA5NDMwNDA0MDFlLTE0LCAwKSI+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTIwMi4wNDIsMTk5LjIzOGMtNi45MzgtMi4xMDMtMTQuMjY4LDEuODItMTYuMzcxLDguNzU5bC01NS4xMzgsMTgyLjA0NWMtMi4xMDIsNi45MzgsMS44MiwxNC4yNjgsOC43NTksMTYuMzcmIzEwOyYjOTsmIzk7JiM5O2MxLjI3LDAuMzg1LDIuNTQ5LDAuNTY4LDMuODExLDAuNTY4YzUuNjMzLDAsMTAuODQxLTMuNjU2LDEyLjU2LTkuMzI2bDU1LjEzOC0xODIuMDQ1JiMxMDsmIzk7JiM5OyYjOTtDMjEyLjkwMSwyMDguNjY4LDIwOC45ODEsMjAxLjMzOCwyMDIuMDQyLDE5OS4yMzh6Ii8+CiAgICA8L2c+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDMzMjAyOTk4MzQwMTI5ODUsIDAsIDAsIDAuMDMzMjAyOTk4MzQwMTI5ODUsIC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsIDApIj4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNMjY4Ljk5NCwxOTkuMjM4Yy02LjkzLTIuMTAzLTE0LjI2OCwxLjgyLTE2LjM3LDguNzU5bC01NS4xMzgsMTgyLjA0NWMtMi4xMDIsNi45MzgsMS44MiwxNC4yNjgsOC43NTksMTYuMzcmIzEwOyYjOTsmIzk7JiM5O2MxLjI2OSwwLjM4NSwyLjU0OSwwLjU2OCwzLjgxMSwwLjU2OGM1LjYzMywwLDEwLjg0MS0zLjY1NiwxMi41Ni05LjMyNmw1NS4xMzgtMTgyLjA0NSYjMTA7JiM5OyYjOTsmIzk7QzI3OS44NTcsMjA4LjY2OCwyNzUuOTM1LDIwMS4zMzgsMjY4Ljk5NCwxOTkuMjM4eiIvPgogICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzMzIwMjk5ODM0MDEyOTg1LCAwLCAwLCAwLjAzMzIwMjk5ODM0MDEyOTg1LCAtMi44NDIxNzA5NDMwNDA0MDFlLTE0LCAwKSI+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTQ5OC44NzIsMEgxMy4xMjhDNS44NzgsMCwwLDUuODc5LDAsMTMuMTI4djQ4NS43NDRDMCw1MDYuMTIxLDUuODc4LDUxMiwxMy4xMjgsNTEyaDQ4NS43NDQmIzEwOyYjOTsmIzk7JiM5O2M3LjI0OSwwLDEzLjEyOC01Ljg3OSwxMy4xMjgtMTMuMTI4VjEzLjEyOEM1MTIsNS44NzksNTA2LjEyMSwwLDQ5OC44NzIsMHogTTEwNS4wMjYsMjYuMjU2aDMwMS45NDl2NTIuNTEzSDEwNS4wMjZWMjYuMjU2eiYjMTA7JiM5OyYjOTsmIzk7IE0yNi4yNTYsMjYuMjU2aDUyLjUxM3Y1Mi41MTNIMjYuMjU2VjI2LjI1NnogTTQ4NS43NDQsNDg1Ljc0NEgyNi4yNTZWMTA1LjAyNmg0NTkuNDg3VjQ4NS43NDR6IE00ODUuNzQ0LDc4Ljc2OWgtNTIuNTEzVjI2LjI1NiYjMTA7JiM5OyYjOTsmIzk7aDUyLjUxM1Y3OC43Njl6Ii8+CiAgICA8L2c+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDMzMjAyOTk4MzQwMTI5ODUsIDAsIDAsIDAuMDMzMjAyOTk4MzQwMTI5ODUsIC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsIDApIj4KICAgIDxnPgogICAgICA8Y2lyY2xlIGN4PSI5My44NjciIGN5PSIyNDUuMDY0IiByPSIxMy4xMjgiLz4KICAgIDwvZz4KICA8L2c+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzMyMDI5OTgzNDAxMjk4NSwgMCwgMCwgMC4wMzMyMDI5OTgzNDAxMjk4NSwgLTIuODQyMTcwOTQzMDQwNDAxZS0xNCwgMCkiPgogICAgPGc+CiAgICAgIDxjaXJjbGUgY3g9IjkzLjg2NyIgY3k9IjM2MC41OTIiIHI9IjEzLjEyOCIvPgogICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzMzIwMjk5ODM0MDEyOTg1LCAwLCAwLCAwLjAzMzIwMjk5ODM0MDEyOTg1LCAtMi44NDIxNzA5NDMwNDA0MDFlLTE0LCAwKSI+CiAgICA8Zz4KICAgICAgPHBhdGggZD0iTTQyOS4yOTIsMzgwLjcxOEgzMDcuMmMtNy4yNDksMC0xMy4xMjgsNS44NzktMTMuMTI4LDEzLjEyOGMwLDcuMjQ5LDUuODc5LDEzLjEyOCwxMy4xMjgsMTMuMTI4aDEyMi4wOTImIzEwOyYjOTsmIzk7JiM5O2M3LjI0OSwwLDEzLjEyOC01Ljg3OSwxMy4xMjgtMTMuMTI4QzQ0Mi40MjEsMzg2LjU5Nyw0MzYuNTQyLDM4MC43MTgsNDI5LjI5MiwzODAuNzE4eiIvPgogICAgPC9nPgogIDwvZz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzMzIwMjk5ODM0MDEyOTg1LCAwLCAwLCAwLjAzMzIwMjk5ODM0MDEyOTg1LCAtMi44NDIxNzA5NDMwNDA0MDFlLTE0LCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDMzMjAyOTk4MzQwMTI5ODUsIDAsIDAsIDAuMDMzMjAyOTk4MzQwMTI5ODUsIC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzMyMDI5OTgzNDAxMjk4NSwgMCwgMCwgMC4wMzMyMDI5OTgzNDAxMjk4NSwgLTIuODQyMTcwOTQzMDQwNDAxZS0xNCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzMzIwMjk5ODM0MDEyOTg1LCAwLCAwLCAwLjAzMzIwMjk5ODM0MDEyOTg1LCAtMi44NDIxNzA5NDMwNDA0MDFlLTE0LCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDMzMjAyOTk4MzQwMTI5ODUsIDAsIDAsIDAuMDMzMjAyOTk4MzQwMTI5ODUsIC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzMyMDI5OTgzNDAxMjk4NSwgMCwgMCwgMC4wMzMyMDI5OTgzNDAxMjk4NSwgLTIuODQyMTcwOTQzMDQwNDAxZS0xNCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzMzIwMjk5ODM0MDEyOTg1LCAwLCAwLCAwLjAzMzIwMjk5ODM0MDEyOTg1LCAtMi44NDIxNzA5NDMwNDA0MDFlLTE0LCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDMzMjAyOTk4MzQwMTI5ODUsIDAsIDAsIDAuMDMzMjAyOTk4MzQwMTI5ODUsIC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzMyMDI5OTgzNDAxMjk4NSwgMCwgMCwgMC4wMzMyMDI5OTgzNDAxMjk4NSwgLTIuODQyMTcwOTQzMDQwNDAxZS0xNCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzMzIwMjk5ODM0MDEyOTg1LCAwLCAwLCAwLjAzMzIwMjk5ODM0MDEyOTg1LCAtMi44NDIxNzA5NDMwNDA0MDFlLTE0LCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDMzMjAyOTk4MzQwMTI5ODUsIDAsIDAsIDAuMDMzMjAyOTk4MzQwMTI5ODUsIC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzMyMDI5OTgzNDAxMjk4NSwgMCwgMCwgMC4wMzMyMDI5OTgzNDAxMjk4NSwgLTIuODQyMTcwOTQzMDQwNDAxZS0xNCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzMzIwMjk5ODM0MDEyOTg1LCAwLCAwLCAwLjAzMzIwMjk5ODM0MDEyOTg1LCAtMi44NDIxNzA5NDMwNDA0MDFlLTE0LCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDMzMjAyOTk4MzQwMTI5ODUsIDAsIDAsIDAuMDMzMjAyOTk4MzQwMTI5ODUsIC0yLjg0MjE3MDk0MzA0MDQwMWUtMTQsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzMyMDI5OTgzNDAxMjk4NSwgMCwgMCwgMC4wMzMyMDI5OTgzNDAxMjk4NSwgLTIuODQyMTcwOTQzMDQwNDAxZS0xNCwgMCkiLz4KPC9zdmc+"

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTRweCIgdmlld0JveD0iMCAwIDE1IDE0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW1hZ2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaW1hZ2UiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICA8ZyBpZD0iQ2FwYV8xIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0Ljc0MTM3OTMsMCBMMC4yNTg2MjA2OSwwIEMwLjExNTg2MjA2OSwwIDAsMC4xMzYwNDM0NzggMCwwLjMwNDM0NzgyNiBMMCwxMy42OTU2NTIyIEMwLDEzLjg2Mzk1NjUgMC4xMTU4NjIwNjksMTQgMC4yNTg2MjA2OSwxNCBMMTQuNzQxMzc5MywxNCBDMTQuODg0MTM3OSwxNCAxNSwxMy44NjM5NTY1IDE1LDEzLjY5NTY1MjIgTDE1LDAuMzA0MzQ3ODI2IEMxNSwwLjEzNjA0MzQ3OCAxNC44ODQxMzc5LDAgMTQuNzQxMzc5MywwIEwxNC43NDEzNzkzLDAgWiBNMTQuNDgyNzU4NiwxMy4zOTEzMDQzIEwwLjUxNzI0MTM3OSwxMy4zOTEzMDQzIEwwLjUxNzI0MTM3OSwwLjYwODY5NTY1MiBMMTQuNDgyNzU4NiwwLjYwODY5NTY1MiBMMTQuNDgyNzU4NiwxMy4zOTEzMDQzIEwxNC40ODI3NTg2LDEzLjM5MTMwNDMgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTQuMTM3OTMxMDMsNi43Mzc2NTIxNyBDNC45MzIxNTUxNyw2LjczNzY1MjE3IDUuNTc4MTg5NjYsNS45NzczOTEzIDUuNTc4MTg5NjYsNS4wNDMwNDM0OCBDNS41NzgxODk2Niw0LjEwODA4Njk2IDQuOTMyMTU1MTcsMy4zNDc4MjYwOSA0LjEzNzkzMTAzLDMuMzQ3ODI2MDkgQzMuMzQzNzA2OSwzLjM0NzgyNjA5IDIuNjk3NjcyNDEsNC4xMDgwODY5NiAyLjY5NzY3MjQxLDUuMDQyNzM5MTMgQzIuNjk3NjcyNDEsNS45NzczOTEzIDMuMzQzNzA2OSw2LjczNzY1MjE3IDQuMTM3OTMxMDMsNi43Mzc2NTIxNyBMNC4xMzc5MzEwMyw2LjczNzY1MjE3IFogTTQuMTM3OTMxMDMsMy45NTY1MjE3NCBDNC42NDY4OTY1NSwzLjk1NjUyMTc0IDUuMDYwOTQ4MjgsNC40NDQwODY5NiA1LjA2MDk0ODI4LDUuMDQyNzM5MTMgQzUuMDYwOTQ4MjgsNS42NDEzOTEzIDQuNjQ2ODk2NTUsNi4xMjg5NTY1MiA0LjEzNzkzMTAzLDYuMTI4OTU2NTIgQzMuNjI4OTY1NTIsNi4xMjg5NTY1MiAzLjIxNDkxMzc5LDUuNjQxNjk1NjUgMy4yMTQ5MTM3OSw1LjA0MzA0MzQ4IEMzLjIxNDkxMzc5LDQuNDQ0MzkxMyAzLjYyODk2NTUyLDMuOTU2NTIxNzQgNC4xMzc5MzEwMywzLjk1NjUyMTc0IEw0LjEzNzkzMTAzLDMuOTU2NTIxNzQgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEuODEwMzQ0ODMsMTIuMTczOTEzIEMxLjg3MDg2MjA3LDEyLjE3MzkxMyAxLjkzMTg5NjU1LDEyLjE0ODk1NjUgMS45ODEwMzQ0OCwxMi4wOTgxMzA0IEw2LjE5OTkxMzc5LDcuNzI3MDg2OTYgTDguODY0MjI0MTQsMTAuODYyMTczOSBDOC45NjUzNDQ4MywxMC45ODExNzM5IDkuMTI4NzkzMSwxMC45ODExNzM5IDkuMjI5OTEzNzksMTAuODYyMTczOSBDOS4zMzEwMzQ0OCwxMC43NDMxNzM5IDkuMzMxMDM0NDgsMTAuNTUwODI2MSA5LjIyOTkxMzc5LDEwLjQzMTgyNjEgTDcuOTg2NzI0MTQsOC45Njg4MjYwOSBMMTAuMzYxMTIwNyw1LjkwODkxMzA0IEwxMy4yNzM0NDgzLDkuMDUwNjk1NjUgQzEzLjM3ODcwNjksOS4xNjQyMTczOSAxMy41NDI0MTM4LDkuMTU1Njk1NjUgMTMuNjM4ODc5Myw5LjAzMTgyNjA5IEMxMy43MzUzNDQ4LDguOTA3OTU2NTIgMTMuNzI4MzYyMSw4LjcxNTMwNDM1IDEzLjYyMjg0NDgsOC42MDE3ODI2MSBMMTAuNTE5Mzk2Niw1LjI1Mzk1NjUyIEMxMC40Njg3MDY5LDUuMTk5NDc4MjYgMTAuNDAxMjA2OSw1LjE3MjM5MTMgMTAuMzMzMTg5Nyw1LjE3NDIxNzM5IEMxMC4yNjQ2NTUyLDUuMTc3ODY5NTcgMTAuMiw1LjIxMzQ3ODI2IDEwLjE1MzcwNjksNS4yNzMxMzA0MyBMNy42MjA3NzU4Niw4LjUzNzg2OTU3IEw2LjM5NDEzNzkzLDcuMDk0MzQ3ODMgQzYuMjk3NDEzNzksNi45ODA4MjYwOSA2LjE0Mjc1ODYyLDYuOTc1MDQzNDggNi4wNDAzNDQ4Myw3LjA4MDk1NjUyIEwxLjYzOTM5NjU1LDExLjY0MSBDMS41MzIwNjg5NywxMS43NTIwODcgMS41MjE3MjQxNCwxMS45NDQ0MzQ4IDEuNjE2MTIwNjksMTIuMDcwNzM5MSBDMS42NjczMjc1OSwxMi4xMzkyMTc0IDEuNzM4NzA2OSwxMi4xNzM5MTMgMS44MTAzNDQ4MywxMi4xNzM5MTMgTDEuODEwMzQ0ODMsMTIuMTczOTEzIFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0OCA0OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE1cHgiIGhlaWdodD0iMTRweCI+CiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLDQySDVjLTIuMjA5LDAtNC0xLjc5MS00LTRWMTBjMC0yLjIwOSwxLjc5MS00LDQtNGgzOGMyLjIwOSwwLDQsMS43OTEsNCw0djI4ICBDNDcsNDAuMjA5LDQ1LjIwOSw0Miw0Myw0MnogTTEyLDhINWMtMS4xMDQsMC0yLDAuODk2LTIsMnYyaDlWOHogTTIzLDhoLTl2NGg5Vjh6IE0zNCw4aC05djRoOVY4eiBNNDUsMTBjMC0xLjEwNC0wLjg5Ni0yLTItMmgtN3Y0ICBoOWwwLDBWMTB6IE00NSwxNEw0NSwxNEgzdjIwaDQybDAsMFYxNHogTTQ1LDM2TDQ1LDM2aC05djRoLTJ2LTRoLTl2NGgtMnYtNGgtOXY0aC0ydi00SDN2MmMwLDEuMTA0LDAuODk2LDIsMiwyaDM4ICBjMS4xMDQsMCwyLTAuODk2LDItMlYzNnogTTIxLjYyMSwyOS43NjVDMjEuNDQ5LDI5LjkwNCwyMS4yMzgsMzAsMjEsMzBjLTAuNTUzLDAtMS0wLjQ0Ny0xLTFWMTljMC0wLjU1MiwwLjQ0Ny0xLDEtMSAgYzAuMjEzLDAsMC40LDAuMDgyLDAuNTYzLDAuMTk2bDcuNzcxLDQuODcyQzI5LjcyLDIzLjIwNSwzMCwyMy41NjYsMzAsMjRjMCwwLjMyNS0wLjE2NSwwLjYwMS0wLjQwNSwwLjc4M0wyMS42MjEsMjkuNzY1eiI+PC9wYXRoPgo8L3N2Zz4K"

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE0cHgiIGhlaWdodD0iMTdweCIgdmlld0JveD0iMCAwIDE0IDE3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+dW5kbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJ1bmRvIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IkNhcGFfMSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNywxNC44NzUgQzkuNjcyMzE3MzEsMTQuODc1IDExLjg0NjE1MzgsMTIuNzMwMjc3MyAxMS44NDYxNTM4LDEwLjA5Mzc1IEMxMS44NDYxNTM4LDcuNDU3MjIyNjYgOS42NzIzMTczMSw1LjMxMjUgNyw1LjMxMjUgTDcsOC41IEwxLjYxNTM4NDYyLDQuMjUgTDcsMCBMNywzLjE4NzUgQzEwLjg1OTY5MjMsMy4xODc1IDE0LDYuMjg1NzgzMiAxNCwxMC4wOTM3NSBDMTQsMTMuOTAxNzUgMTAuODU5NjkyMywxNyA3LDE3IEMzLjE0MDM0MTM1LDE3IDAsMTMuOTAxNzUgMCwxMC4wOTM3NSBMMi4xNTM4NDYxNSwxMC4wOTM3NSBDMi4xNTM4NDYxNSwxMi43MzAyNzczIDQuMzI3NjgyNjksMTQuODc1IDcsMTQuODc1IEw3LDE0Ljg3NSBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjEzcHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDEzIDE2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MC4zICgzMzgzOSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+cmVkbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJyZWRvIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9IkNhcGFfMSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi41MDM1MjE1MiwxMy45NzcyNTEgQzQuMDI2ODczNDIsMTMuOTc3MjUxIDIuMDEyMTY5NjIsMTEuOTYyMTM5OSAyLjAxMjE2OTYyLDkuNDg0NTc2MTMgQzIuMDEyMTY5NjIsNy4wMDcxNDQwMyA0LjAyNjg3MzQyLDQuOTkxODY4MzEgNi41MDM1MjE1Miw0Ljk5MTg2ODMxIEw2LjUwMzUyMTUyLDcuOTg3MDI4ODEgTDExLjQ5Mzg0MywzLjk5MzU0NzMzIEw2LjUwMzUyMTUyLDAgTDYuNTAzNTIxNTIsMi45OTUxNjA0OSBDMi45MjY0ODEwMSwyLjk5NTE2MDQ5IDAuMDE2MTI2NTgyMyw1LjkwNjUwMjA2IDAuMDE2MTI2NTgyMyw5LjQ4NDYwOTA1IEMwLjAxNjEyNjU4MjMsMTMuMDYyOTEzNiAyLjkyNjQ4MTAxLDE1Ljk3NDA5MDUgNi41MDM1MjE1MiwxNS45NzQwOTA1IEMxMC4wODA1NjIsMTUuOTc0MDkwNSAxMi45OTA4MTc3LDEzLjA2MjkxMzYgMTIuOTkwODE3Nyw5LjQ4NDYwOTA1IEwxMC45OTQ5MDYzLDkuNDg0NjA5MDUgQzEwLjk5NDkzOTIsMTEuOTYyMTM5OSA4Ljk4MDE2OTYyLDEzLjk3NzI1MSA2LjUwMzUyMTUyLDEzLjk3NzI1MSBMNi41MDM1MjE1MiwxMy45NzcyNTEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTYuOTk5ODQ1NTA0NzYwNzQyIiBoZWlnaHQ9IjE0Ljk5OTg1MjE4MDQ4MDk1NyIgdmlld0JveD0iMC4wMDAwMDIzMzA0MyAxLjY4NzY3ZS03IDE2Ljk5OTggMTQuOTk5OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNDU2ODAwMDU4NDg0MDc3NSwgMCwgMCwgMC4wMzQxNjkwMDMzNjc0MjQwMSwgMCwgMCkiPgogICAgPHBhdGggZD0iTTM0My4yNzMsMzQwLjgyNGgtODEuMTc5bC05Mi4zNzktMTA4LjM3N0w3OS40MjksMzQwLjgyNEgwbDEzMC44NjQtMTQ4LjE4N0w2LjI5NSw1Mi43OTJIODYuNDNsODYuNzk3LDEwMS4zODgmIzEwOyYjOTsmIzk7bDg3LjQ2MS0xMDEuMzg4aDc2LjYzOUwyMTEuMzUyLDE5Mi42MzdMMzQzLjI3MywzNDAuODI0eiBNMzkzLjE1NCw0MDEuMDZsNTIuODYtNDAuMDM0YzE4LjU0Mi0xMi43MzEsMzAuNzI0LTI0LjU1OSwzNi41NjMtMzUuNDY0JiMxMDsmIzk7JiM5O2M1Ljg0LTEwLjksOC43NDgtMjIuNjIxLDguNzQ4LTM1LjE3NmMwLTIwLjUwNC02Ljg1Ni0zNy4wNTUtMjAuNTU4LTQ5LjY1M2MtMTMuNzAxLTEyLjYwMi0zMS43MjMtMTguODk2LTU0LjA0OC0xOC44OTYmIzEwOyYjOTsmIzk7Yy0yMS41MjEsMC0zOC43NTEsNi4zNzItNTEuNjM2LDE5LjExMmMtMTIuOTIyLDEyLjc1LTE5LjM3LDMxLjk2LTE5LjM3LDU3LjY0OGg0MS41MjNjMC0xNS4zMjcsMi43MTMtMjUuOTI1LDguMTMzLTMxLjgwMSYjMTA7JiM5OyYjOTtjNS40MjYtNS44NzUsMTIuODYyLTguODE4LDIyLjMzMS04LjgxOGM5LjQ2MywwLDE2Ljk0LDIuOTksMjIuNDg0LDguOTYxYzUuNTA5LDUuOTcsOC4yNywxMy4zOTQsOC4yNywyMi4yNiYjMTA7JiM5OyYjOTtjMCw4Ljg1NC0yLjU1NCwxNi44NjktNy42OSwyNC4wMzljLTUuMTMsNy4xNy0xOS4zODEsMTkuMjYzLTQyLjc3NiwzNi4yODZjLTIwLjAyLDE0LjYzNS00Ny4wOTEsMjguNDMxLTU1LjIxOCw0MS4zNjMmIzEwOyYjOTsmIzk7bDAuNDA3LDQ4LjEwM2gxNDguNjAzdi0zNy45MzZoLTk4LjYyN1Y0MDEuMDZ6Ii8+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTY4MDAwNTg0ODQwNzc1LCAwLCAwLCAwLjAzNDE2OTAwMzM2NzQyNDAxLCAwLCAwKSIvPgo8L3N2Zz4="

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB3aWR0aD0iMTYuOTk5OTMxMzM1NDQ5MjIiIGhlaWdodD0iMTUuMDAwMTk4MzY0MjU3ODEyIiB2aWV3Qm94PSItMC4wMDAwMDQxMjc5NiAyLjI2MjUzZS03IDE2Ljk5OTkgMTUuMDAwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNDU2MTAwMDc2NDM2OTk3LCAwLCAwLCAwLjAzMjYyNzAwMTQwNDc2MjI3LCAwLCAwKSI+CiAgICA8cGF0aCBkPSJNMjExLjM1NywzMTEuNTZsMTMxLjkyMiwxNDguMTg4aC04MS4xNzhsLTkyLjM4LTEwOC4zNzlMNzkuNDM1LDQ1OS43NDhIMEwxMzAuODYxLDMxMS41Nkw2LjMwMSwxNzEuNzE0aDgwLjEzNSYjMTA7JiM5OyYjOTtsODYuNzk0LDEwMS4zOTFsODcuNDctMTAxLjM5MWg3Ni42MzlMMjExLjM1NywzMTEuNTZ6IE0zOTEuNzM2LDIxMS4zNmw1NC4zNzMtNDAuMDMzYzE4LjU0Mi0xMi43NDEsMzAuNzI0LTI0LjU2LDM2LjU2My0zNS40NjgmIzEwOyYjOTsmIzk7YzUuODM0LTEwLjkwMiw4Ljc0OC0yMi42MTgsOC43NDgtMzUuMTcyYzAtMjAuNTA4LTYuODU2LTM3LjA2MS0yMC41NTItNDkuNjU2Yy0xMy43MDctMTIuNjAyLTMxLjcyOS0xOC44OTctNTQuMDU0LTE4Ljg5NyYjMTA7JiM5OyYjOTtjLTIxLjUyNywwLTM4Ljc0NSw2LjM3NS01MS42MzcsMTkuMTE1QzM1Mi4yNTgsNjMuOTk2LDM0NS44MSw4My4yMDYsMzQ1LjgxLDEwOC45aDQxLjUyM2MwLTE1LjMzLDIuNzE5LTI1LjkyOCw4LjE0NS0zMS44MDYmIzEwOyYjOTsmIzk7YzUuNDI2LTUuODc5LDEyLjg2MS04LjgxOSwyMi4zMzEtOC44MTljOS40NTcsMCwxNi45MjksMi45OTEsMjIuNDczLDguOTY0YzUuNTIxLDUuOTY3LDguMjc1LDEzLjM4OCw4LjI3NSwyMi4yNTcmIzEwOyYjOTsmIzk7YzAsOC44NTQtMi41NTQsMTYuODY2LTcuNjg1LDI0LjAzOXMtMTkuMzg3LDE5LjI3Mi00Mi43ODIsMzYuMjk4Yy0yMC4wMTQsMTQuNjM1LTQ3LjA5NywyOC40MjItNTUuMjE4LDQxLjM2NGwwLjQwNyw0OC4wOTMmIzEwOyYjOTsmIzk7aDE0OC42MDN2LTM3LjkzSDM5MS43MzZ6Ii8+CiAgPC9nPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTYxMDAwNzY0MzY5OTcsIDAsIDAsIDAuMDMyNjI3MDAxNDA0NzYyMjcsIDAsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzQ1NjEwMDA3NjQzNjk5NywgMCwgMCwgMC4wMzI2MjcwMDE0MDQ3NjIyNywgMCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNDU2MTAwMDc2NDM2OTk3LCAwLCAwLCAwLjAzMjYyNzAwMTQwNDc2MjI3LCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTYxMDAwNzY0MzY5OTcsIDAsIDAsIDAuMDMyNjI3MDAxNDA0NzYyMjcsIDAsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzQ1NjEwMDA3NjQzNjk5NywgMCwgMCwgMC4wMzI2MjcwMDE0MDQ3NjIyNywgMCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNDU2MTAwMDc2NDM2OTk3LCAwLCAwLCAwLjAzMjYyNzAwMTQwNDc2MjI3LCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTYxMDAwNzY0MzY5OTcsIDAsIDAsIDAuMDMyNjI3MDAxNDA0NzYyMjcsIDAsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzQ1NjEwMDA3NjQzNjk5NywgMCwgMCwgMC4wMzI2MjcwMDE0MDQ3NjIyNywgMCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNDU2MTAwMDc2NDM2OTk3LCAwLCAwLCAwLjAzMjYyNzAwMTQwNDc2MjI3LCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTYxMDAwNzY0MzY5OTcsIDAsIDAsIDAuMDMyNjI3MDAxNDA0NzYyMjcsIDAsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzQ1NjEwMDA3NjQzNjk5NywgMCwgMCwgMC4wMzI2MjcwMDE0MDQ3NjIyNywgMCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNDU2MTAwMDc2NDM2OTk3LCAwLCAwLCAwLjAzMjYyNzAwMTQwNDc2MjI3LCAwLCAwKSIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMDM0NTYxMDAwNzY0MzY5OTcsIDAsIDAsIDAuMDMyNjI3MDAxNDA0NzYyMjcsIDAsIDApIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4wMzQ1NjEwMDA3NjQzNjk5NywgMCwgMCwgMC4wMzI2MjcwMDE0MDQ3NjIyNywgMCwgMCkiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjAzNDU2MTAwMDc2NDM2OTk3LCAwLCAwLCAwLjAzMjYyNzAwMTQwNDc2MjI3LCAwLCAwKSIvPgo8L3N2Zz4="

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _en = __webpack_require__(134);

var _en2 = _interopRequireDefault(_en);

var _fr = __webpack_require__(135);

var _fr2 = _interopRequireDefault(_fr);

var _zh = __webpack_require__(136);

var _zh2 = _interopRequireDefault(_zh);

var _ru = __webpack_require__(137);

var _ru2 = _interopRequireDefault(_ru);

var _pt = __webpack_require__(138);

var _pt2 = _interopRequireDefault(_pt);

var _ko = __webpack_require__(139);

var _ko2 = _interopRequireDefault(_ko);

var _it = __webpack_require__(140);

var _it2 = _interopRequireDefault(_it);

var _nl = __webpack_require__(141);

var _nl2 = _interopRequireDefault(_nl);

var _de = __webpack_require__(142);

var _de2 = _interopRequireDefault(_de);

var _da = __webpack_require__(143);

var _da2 = _interopRequireDefault(_da);

var _zh_tw = __webpack_require__(144);

var _zh_tw2 = _interopRequireDefault(_zh_tw);

var _pl = __webpack_require__(145);

var _pl2 = _interopRequireDefault(_pl);

var _es = __webpack_require__(146);

var _es2 = _interopRequireDefault(_es);

var _ja = __webpack_require__(147);

var _ja2 = _interopRequireDefault(_ja);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  en: _en2.default,
  fr: _fr2.default,
  zh: _zh2.default,
  ru: _ru2.default,
  pt: _pt2.default,
  ko: _ko2.default,
  it: _it2.default,
  nl: _nl2.default,
  de: _de2.default,
  da: _da2.default,
  zh_tw: _zh_tw2.default,
  pl: _pl2.default,
  es: _es2.default,
  ja: _ja2.default
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Add',
  'generic.cancel': 'Cancel',

  // BlockType
  'components.controls.blocktype.h1': 'H1',
  'components.controls.blocktype.h2': 'H2',
  'components.controls.blocktype.h3': 'H3',
  'components.controls.blocktype.h4': 'H4',
  'components.controls.blocktype.h5': 'H5',
  'components.controls.blocktype.h6': 'H6',
  'components.controls.blocktype.blockquote': 'Blockquote',
  'components.controls.blocktype.code': 'Code',
  'components.controls.blocktype.blocktype': 'Block Type',
  'components.controls.blocktype.normal': 'Normal',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Color Picker',
  'components.controls.colorpicker.text': 'Text',
  'components.controls.colorpicker.background': 'Highlight',

  // Embedded
  'components.controls.embedded.embedded': 'Embedded',
  'components.controls.embedded.embeddedlink': 'Embedded Link',
  'components.controls.embedded.enterlink': 'Enter link',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Font',

  // FontSize
  'components.controls.fontsize.fontsize': 'Font Size',

  // History
  'components.controls.history.history': 'History',
  'components.controls.history.undo': 'Undo',
  'components.controls.history.redo': 'Redo',

  // Image
  'components.controls.image.image': 'Image',
  'components.controls.image.fileUpload': 'File Upload',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Drop the file or click to upload',

  // Video
  'components.controls.video.video': 'Video',
  'components.controls.video.fileUpload': 'File Upload',
  'components.controls.video.byURL': 'URL',
  'components.controls.video.dropFileText': 'Drop the file or click to upload',

  // Inline
  'components.controls.inline.bold': 'Bold',
  'components.controls.inline.italic': 'Italic',
  'components.controls.inline.underline': 'Underline',
  'components.controls.inline.strikethrough': 'Strikethrough',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Superscript',
  'components.controls.inline.subscript': 'Subscript',

  // Link
  'components.controls.link.linkTitle': 'Link Title',
  'components.controls.link.linkTarget': 'Link Target',
  'components.controls.link.linkTargetOption': 'Open link in new window',
  'components.controls.link.link': 'Link',
  'components.controls.link.unlink': 'Unlink',

  // CTABox
  'components.controls.ctaBox.headline': 'Insert a Call-to-Action Box',
  'components.controls.ctaBox.boxTitle': 'CTA Title',
  'components.controls.ctaBox.boxText': 'CTA Text',
  'components.controls.ctaBox.buttonText': 'Button Text',
  'components.controls.ctaBox.ctaTargetLink': 'Link',
  'components.controls.ctaBox.linkTargetOption': 'Open CTA Box in new window',
  'components.controls.ctaBox.link': 'Insert a Call-to-Action Box',

  // List
  'components.controls.list.list': 'List',
  'components.controls.list.unordered': 'Unordered',
  'components.controls.list.ordered': 'Ordered',
  'components.controls.list.indent': 'Indent',
  'components.controls.list.outdent': 'Outdent',

  // Remove
  'components.controls.remove.remove': 'Remove',

  // TextAlign
  'components.controls.textalign.textalign': 'Text Align',
  'components.controls.textalign.left': 'Left',
  'components.controls.textalign.center': 'Center',
  'components.controls.textalign.right': 'Right',
  'components.controls.textalign.justify': 'Justify'
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // Generic
  'generic.add': 'Ok',
  'generic.cancel': 'Annuler',

  // BlockType
  'components.controls.blocktype.h1': 'Titre 1',
  'components.controls.blocktype.h2': 'Titre 2',
  'components.controls.blocktype.h3': 'Titre 3',
  'components.controls.blocktype.h4': 'Titre 4',
  'components.controls.blocktype.h5': 'Titre 5',
  'components.controls.blocktype.h6': 'Titre 6',
  'components.controls.blocktype.blockquote': 'Citation',
  'components.controls.blocktype.code': 'Code',
  'components.controls.blocktype.blocktype': 'Type bloc',
  'components.controls.blocktype.normal': 'Normal',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Palette de couleur',
  'components.controls.colorpicker.text': 'Texte',
  'components.controls.colorpicker.background': 'Fond',

  // Embedded
  'components.controls.embedded.embedded': 'Embedded',
  'components.controls.embedded.embeddedlink': 'Lien iFrame',
  'components.controls.embedded.enterlink': 'Entrer le lien',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Police',

  // FontSize
  'components.controls.fontsize.fontsize': 'Taille de police',

  // History
  'components.controls.history.history': 'Historique',
  'components.controls.history.undo': 'Précédent',
  'components.controls.history.redo': 'Suivant',

  // Image
  'components.controls.image.image': 'Image',
  'components.controls.image.fileUpload': 'Téléchargement',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Glisser une image ou cliquer pour télécharger',

  // Inline
  'components.controls.inline.bold': 'Gras',
  'components.controls.inline.italic': 'Italique',
  'components.controls.inline.underline': 'Souligner',
  'components.controls.inline.strikethrough': 'Barrer',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Exposant',
  'components.controls.inline.subscript': 'Indice',

  // Link
  'components.controls.link.linkTitle': 'Titre du lien',
  'components.controls.link.linkTarget': 'Cible du lien',
  'components.controls.link.linkTargetOption': 'Ouvrir le lien dans une nouvelle fenêtre',
  'components.controls.link.link': 'Lier',
  'components.controls.link.unlink': 'Délier',

  // List
  'components.controls.list.list': 'Liste',
  'components.controls.list.unordered': 'Désordonnée',
  'components.controls.list.ordered': 'Ordonnée',
  'components.controls.list.indent': 'Augmenter le retrait',
  'components.controls.list.outdent': 'Diminuer le retrat',

  // Remove
  'components.controls.remove.remove': 'Supprimer',

  // TextAlign
  'components.controls.textalign.textalign': 'Alignement du texte',
  'components.controls.textalign.left': 'Gauche',
  'components.controls.textalign.center': 'Centre',
  'components.controls.textalign.right': 'Droite',
  'components.controls.textalign.justify': 'Justifier'
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': '添加',
  'generic.cancel': '取消',

  // BlockType
  'components.controls.blocktype.h1': '标题1',
  'components.controls.blocktype.h2': '标题2',
  'components.controls.blocktype.h3': '标题3',
  'components.controls.blocktype.h4': '标题4',
  'components.controls.blocktype.h5': '标题5',
  'components.controls.blocktype.h6': '标题6',
  'components.controls.blocktype.blockquote': '引用',
  'components.controls.blocktype.code': '源码',
  'components.controls.blocktype.blocktype': '样式',
  'components.controls.blocktype.normal': '正文',

  // Color Picker
  'components.controls.colorpicker.colorpicker': '选色器',
  'components.controls.colorpicker.text': '文字',
  'components.controls.colorpicker.background': '背景',

  // Embedded
  'components.controls.embedded.embedded': '内嵌',
  'components.controls.embedded.embeddedlink': '内嵌网页',
  'components.controls.embedded.enterlink': '输入网页地址',

  // Emoji
  'components.controls.emoji.emoji': '表情符号',

  // FontFamily
  'components.controls.fontfamily.fontfamily': '字体',

  // FontSize
  'components.controls.fontsize.fontsize': '字号',

  // History
  'components.controls.history.history': '历史',
  'components.controls.history.undo': '撤销',
  'components.controls.history.redo': '恢复',

  // Image
  'components.controls.image.image': '图片',
  'components.controls.image.fileUpload': '来自文件',
  'components.controls.image.byURL': '在线图片',
  'components.controls.image.dropFileText': '点击或者拖拽文件上传',

  // Inline
  'components.controls.inline.bold': '粗体',
  'components.controls.inline.italic': '斜体',
  'components.controls.inline.underline': '下划线',
  'components.controls.inline.strikethrough': '删除线',
  'components.controls.inline.monospace': '等宽字体',
  'components.controls.inline.superscript': '上标',
  'components.controls.inline.subscript': '下标',

  // Link
  'components.controls.link.linkTitle': '超链接',
  'components.controls.link.linkTarget': '输入链接地址',
  'components.controls.link.linkTargetOption': '在新窗口中打开链接',
  'components.controls.link.link': '链接',
  'components.controls.link.unlink': '删除链接',

  // List
  'components.controls.list.list': '列表',
  'components.controls.list.unordered': '项目符号',
  'components.controls.list.ordered': '编号',
  'components.controls.list.indent': '增加缩进量',
  'components.controls.list.outdent': '减少缩进量',

  // Remove
  'components.controls.remove.remove': '清除格式',

  // TextAlign
  'components.controls.textalign.textalign': '文本对齐',
  'components.controls.textalign.left': '文本左对齐',
  'components.controls.textalign.center': '居中',
  'components.controls.textalign.right': '文本右对齐',
  'components.controls.textalign.justify': '两端对齐'
};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Добавить',
  'generic.cancel': 'Отменить',

  // BlockType
  'components.controls.blocktype.h1': 'Заголовок 1',
  'components.controls.blocktype.h2': 'Заголовок 2',
  'components.controls.blocktype.h3': 'Заголовок 3',
  'components.controls.blocktype.h4': 'Заголовок 4',
  'components.controls.blocktype.h5': 'Заголовок 5',
  'components.controls.blocktype.h6': 'Заголовок 6',
  'components.controls.blocktype.blockquote': 'Цитата',
  'components.controls.blocktype.code': 'Код',
  'components.controls.blocktype.blocktype': 'Форматирование',
  'components.controls.blocktype.normal': 'Обычный',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Выбор цвета',
  'components.controls.colorpicker.text': 'Текст',
  'components.controls.colorpicker.background': 'Фон',

  // Embedded
  'components.controls.embedded.embedded': 'Встраивание',
  'components.controls.embedded.embeddedlink': 'Ссылка в iFrame',
  'components.controls.embedded.enterlink': 'Вставьте ссылку',

  // Emoji
  'components.controls.emoji.emoji': 'Эмодзи',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Шрифт',

  // FontSize
  'components.controls.fontsize.fontsize': 'Размер шрифта',

  // History
  'components.controls.history.history': 'История',
  'components.controls.history.undo': 'Отменить',
  'components.controls.history.redo': 'Вернуть',

  // Image
  'components.controls.image.image': 'Изображение',
  'components.controls.image.fileUpload': 'Файлы',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Переместите в эту область файлы или кликните для загрузки',

  // Inline
  'components.controls.inline.bold': 'Жирный',
  'components.controls.inline.italic': 'Курсив',
  'components.controls.inline.underline': 'Подчеркивание',
  'components.controls.inline.strikethrough': 'Зачеркивание',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Верхний индекс',
  'components.controls.inline.subscript': 'Нижний индекс',

  // Link
  'components.controls.link.linkTitle': 'Текст',
  'components.controls.link.linkTarget': 'Адрес ссылки',
  'components.controls.link.linkTargetOption': 'Открывать в новом окне',
  'components.controls.link.link': 'Ссылка',
  'components.controls.link.unlink': 'Убрать ссылку',

  // List
  'components.controls.list.list': 'Список',
  'components.controls.list.unordered': 'Неупорядоченный',
  'components.controls.list.ordered': 'Упорядоченный',
  'components.controls.list.indent': 'Отступ',
  'components.controls.list.outdent': 'Выступ',

  // Remove
  'components.controls.remove.remove': 'Удалить',

  // TextAlign
  'components.controls.textalign.textalign': 'Выравнивание текста',
  'components.controls.textalign.left': 'Слева',
  'components.controls.textalign.center': 'По центру',
  'components.controls.textalign.right': 'Справа',
  'components.controls.textalign.justify': 'Выравнить'
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Ok',
  'generic.cancel': 'Cancelar',

  // BlockType
  'components.controls.blocktype.h1': 'Título 1',
  'components.controls.blocktype.h2': 'Título 2',
  'components.controls.blocktype.h3': 'Título 3',
  'components.controls.blocktype.h4': 'Título 4',
  'components.controls.blocktype.h5': 'Título 5',
  'components.controls.blocktype.h6': 'Título 6',
  'components.controls.blocktype.blockquote': 'Citação',
  'components.controls.blocktype.code': 'Code',
  'components.controls.blocktype.blocktype': 'Estilo',
  'components.controls.blocktype.normal': 'Normal',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Paleta de cores',
  'components.controls.colorpicker.text': 'Texto',
  'components.controls.colorpicker.background': 'Fundo',

  // Embedded
  'components.controls.embedded.embedded': 'Embarcado',
  'components.controls.embedded.embeddedlink': 'Link embarcado',
  'components.controls.embedded.enterlink': 'Coloque o link',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Fonte',

  // FontSize
  'components.controls.fontsize.fontsize': 'Tamanho da Fonte',

  // History
  'components.controls.history.history': 'Histórico',
  'components.controls.history.undo': 'Desfazer',
  'components.controls.history.redo': 'Refazer',

  // Image
  'components.controls.image.image': 'Imagem',
  'components.controls.image.fileUpload': 'Carregar arquivo',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Arraste uma imagem aqui ou clique para carregar',

  // Inline
  'components.controls.inline.bold': 'Negrito',
  'components.controls.inline.italic': 'Itálico',
  'components.controls.inline.underline': 'Sublinhado',
  'components.controls.inline.strikethrough': 'Strikethrough',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Sobrescrito',
  'components.controls.inline.subscript': 'Subscrito',

  // Link
  'components.controls.link.linkTitle': 'Título do link',
  'components.controls.link.linkTarget': 'Alvo do link',
  'components.controls.link.linkTargetOption': 'Abrir link em outra janela',
  'components.controls.link.link': 'Adicionar Link',
  'components.controls.link.unlink': 'Remover link',

  // List
  'components.controls.list.list': 'Lista',
  'components.controls.list.unordered': 'Sem ordenção',
  'components.controls.list.ordered': 'Ordenada',
  'components.controls.list.indent': 'Aumentar recuo',
  'components.controls.list.outdent': 'Diminuir recuo',

  // Remove
  'components.controls.remove.remove': 'Remover',

  // TextAlign
  'components.controls.textalign.textalign': 'Alinhamento do texto',
  'components.controls.textalign.left': 'À Esquerda',
  'components.controls.textalign.center': 'Centralizado',
  'components.controls.textalign.right': 'À Direita',
  'components.controls.textalign.justify': 'Justificado'
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': '입력',
  'generic.cancel': '취소',

  // BlockType
  'components.controls.blocktype.h1': '제목1',
  'components.controls.blocktype.h2': '제목2',
  'components.controls.blocktype.h3': '제목3',
  'components.controls.blocktype.h4': '제목4',
  'components.controls.blocktype.h5': '제목5',
  'components.controls.blocktype.h6': '제목6',
  'components.controls.blocktype.blockquote': '인용',
  'components.controls.blocktype.code': 'Code',
  'components.controls.blocktype.blocktype': '블록',
  'components.controls.blocktype.normal': '표준',

  // Color Picker
  'components.controls.colorpicker.colorpicker': '색상 선택',
  'components.controls.colorpicker.text': '글꼴색',
  'components.controls.colorpicker.background': '배경색',

  // Embedded
  'components.controls.embedded.embedded': '임베드',
  'components.controls.embedded.embeddedlink': '임베드 링크',
  'components.controls.embedded.enterlink': '주소를 입력하세요',

  // Emoji
  'components.controls.emoji.emoji': '이모지',

  // FontFamily
  'components.controls.fontfamily.fontfamily': '글꼴',

  // FontSize
  'components.controls.fontsize.fontsize': '글꼴 크기',

  // History
  'components.controls.history.history': '히스토리',
  'components.controls.history.undo': '실행 취소',
  'components.controls.history.redo': '다시 실행',

  // Image
  'components.controls.image.image': '이미지',
  'components.controls.image.fileUpload': '파일 업로드',
  'components.controls.image.byURL': '주소',
  'components.controls.image.dropFileText': '클릭하거나 파일을 드롭하여 업로드하세요',

  // Inline
  'components.controls.inline.bold': '굵게',
  'components.controls.inline.italic': '기울임꼴',
  'components.controls.inline.underline': '밑줄',
  'components.controls.inline.strikethrough': '취소선',
  'components.controls.inline.monospace': '고정 너비',
  'components.controls.inline.superscript': '위 첨자',
  'components.controls.inline.subscript': '아래 첨자',

  // Link
  'components.controls.link.linkTitle': '링크 제목',
  'components.controls.link.linkTarget': '링크 타겟',
  'components.controls.link.linkTargetOption': '새창으로 열기',
  'components.controls.link.link': '링크',
  'components.controls.link.unlink': '링크 제거',

  // List
  'components.controls.list.list': '리스트',
  'components.controls.list.unordered': '일반 리스트',
  'components.controls.list.ordered': '순서 리스트',
  'components.controls.list.indent': '들여쓰기',
  'components.controls.list.outdent': '내어쓰기',

  // Remove
  'components.controls.remove.remove': '삭제',

  // TextAlign
  'components.controls.textalign.textalign': '텍스트 정렬',
  'components.controls.textalign.left': '왼쪽',
  'components.controls.textalign.center': '중앙',
  'components.controls.textalign.right': '오른쪽',
  'components.controls.textalign.justify': '양쪽'
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Aggiungi',
  'generic.cancel': 'Annulla',

  // BlockType
  'components.controls.blocktype.h1': 'H1',
  'components.controls.blocktype.h2': 'H2',
  'components.controls.blocktype.h3': 'H3',
  'components.controls.blocktype.h4': 'H4',
  'components.controls.blocktype.h5': 'H5',
  'components.controls.blocktype.h6': 'H6',
  'components.controls.blocktype.blockquote': 'Citazione',
  'components.controls.blocktype.code': 'Codice',
  'components.controls.blocktype.blocktype': 'Stili',
  'components.controls.blocktype.normal': 'Normale',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Colore testo',
  'components.controls.colorpicker.text': 'Testo',
  'components.controls.colorpicker.background': 'Evidenziazione',

  // Embedded
  'components.controls.embedded.embedded': 'Incorpora',
  'components.controls.embedded.embeddedlink': 'Incorpora link',
  'components.controls.embedded.enterlink': 'Inserisci link',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Carattere',

  // FontSize
  'components.controls.fontsize.fontsize': 'Dimensione carattere',

  // History
  'components.controls.history.history': 'Modifiche',
  'components.controls.history.undo': 'Annulla',
  'components.controls.history.redo': 'Ripristina',

  // Image
  'components.controls.image.image': 'Immagine',
  'components.controls.image.fileUpload': 'Carica immagine',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Trascina il file o clicca per caricare',

  // Inline
  'components.controls.inline.bold': 'Grassetto',
  'components.controls.inline.italic': 'Corsivo',
  'components.controls.inline.underline': 'Sottolineato',
  'components.controls.inline.strikethrough': 'Barrato',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Apice',
  'components.controls.inline.subscript': 'Pedice',

  // Link
  'components.controls.link.linkTitle': 'Testo',
  'components.controls.link.linkTarget': 'Link',
  'components.controls.link.linkTargetOption': 'Apri link in una nuova finestra',
  'components.controls.link.link': 'Inserisci link',
  'components.controls.link.unlink': 'Rimuovi link',

  // List
  'components.controls.list.list': 'Lista',
  'components.controls.list.unordered': 'Elenco puntato',
  'components.controls.list.ordered': 'Elenco numerato',
  'components.controls.list.indent': 'Indent',
  'components.controls.list.outdent': 'Outdent',

  // Remove
  'components.controls.remove.remove': 'Rimuovi formattazione',

  // TextAlign
  'components.controls.textalign.textalign': 'Allineamento del testo',
  'components.controls.textalign.left': 'Allinea a sinistra',
  'components.controls.textalign.center': 'Allinea al centro',
  'components.controls.textalign.right': 'Allinea a destra',
  'components.controls.textalign.justify': 'Giustifica'
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Toevoegen',
  'generic.cancel': 'Annuleren',

  // BlockType
  'components.controls.blocktype.h1': 'H1',
  'components.controls.blocktype.h2': 'H2',
  'components.controls.blocktype.h3': 'H3',
  'components.controls.blocktype.h4': 'H4',
  'components.controls.blocktype.h5': 'H5',
  'components.controls.blocktype.h6': 'H6',
  'components.controls.blocktype.blockquote': 'Blockquote',
  'components.controls.blocktype.code': 'Code',
  'components.controls.blocktype.blocktype': 'Blocktype',
  'components.controls.blocktype.normal': 'Normaal',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Kleurkiezer',
  'components.controls.colorpicker.text': 'Tekst',
  'components.controls.colorpicker.background': 'Achtergrond',

  // Embedded
  'components.controls.embedded.embedded': 'Ingevoegd',
  'components.controls.embedded.embeddedlink': 'Ingevoegde link',
  'components.controls.embedded.enterlink': 'Voeg link toe',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Lettertype',

  // FontSize
  'components.controls.fontsize.fontsize': 'Lettergrootte',

  // History
  'components.controls.history.history': 'Geschiedenis',
  'components.controls.history.undo': 'Ongedaan maken',
  'components.controls.history.redo': 'Opnieuw',

  // Image
  'components.controls.image.image': 'Afbeelding',
  'components.controls.image.fileUpload': 'Bestand uploaden',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Drop het bestand hier of klik om te uploaden',

  // Inline
  'components.controls.inline.bold': 'Dikgedrukt',
  'components.controls.inline.italic': 'Schuingedrukt',
  'components.controls.inline.underline': 'Onderstrepen',
  'components.controls.inline.strikethrough': 'Doorstrepen',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Superscript',
  'components.controls.inline.subscript': 'Subscript',

  // Link
  'components.controls.link.linkTitle': 'Linktitel',
  'components.controls.link.linkTarget': 'Link bestemming',
  'components.controls.link.linkTargetOption': 'Open link in een nieuw venster',
  'components.controls.link.link': 'Link',
  'components.controls.link.unlink': 'Unlink',

  // List
  'components.controls.list.list': 'Lijst',
  'components.controls.list.unordered': 'Ongeordend',
  'components.controls.list.ordered': 'Geordend',
  'components.controls.list.indent': 'Inspringen',
  'components.controls.list.outdent': 'Inspringen verkleinen',

  // Remove
  'components.controls.remove.remove': 'Verwijderen',

  // TextAlign
  'components.controls.textalign.textalign': 'Tekst uitlijnen',
  'components.controls.textalign.left': 'Links',
  'components.controls.textalign.center': 'Gecentreerd',
  'components.controls.textalign.right': 'Rechts',
  'components.controls.textalign.justify': 'Uitgelijnd'
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Hinzufügen',
  'generic.cancel': 'Abbrechen',

  // BlockType
  'components.controls.blocktype.h1': 'Überschrift 1',
  'components.controls.blocktype.h2': 'Überschrift 2',
  'components.controls.blocktype.h3': 'Überschrift 3',
  'components.controls.blocktype.h4': 'Überschrift 4',
  'components.controls.blocktype.h5': 'Überschrift 5',
  'components.controls.blocktype.h6': 'Überschrift 6',
  'components.controls.blocktype.blockquote': 'Zitat',
  'components.controls.blocktype.code': 'Quellcode',
  'components.controls.blocktype.blocktype': 'Blocktyp',
  'components.controls.blocktype.normal': 'Normal',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Farbauswahl',
  'components.controls.colorpicker.text': 'Text',
  'components.controls.colorpicker.background': 'Hintergrund',

  // Embedded
  'components.controls.embedded.embedded': 'Eingebettet',
  'components.controls.embedded.embeddedlink': 'Eingebetteter Link',
  'components.controls.embedded.enterlink': 'Link eingeben',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Schriftart',

  // FontSize
  'components.controls.fontsize.fontsize': 'Schriftgröße',

  // History
  'components.controls.history.history': 'Historie',
  'components.controls.history.undo': 'Zurücknehmen',
  'components.controls.history.redo': 'Wiederholen',

  // Image
  'components.controls.image.image': 'Bild',
  'components.controls.image.fileUpload': 'Datei-Upload',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Dateien ziehen und ablegen, oder klicken zum Hochladen',

  // Inline
  'components.controls.inline.bold': 'Fett',
  'components.controls.inline.italic': 'Kursiv',
  'components.controls.inline.underline': 'Unterstreichen',
  'components.controls.inline.strikethrough': 'Durchstreichen',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Hochgestellt',
  'components.controls.inline.subscript': 'Tiefgestellt',

  // Link
  'components.controls.link.linkTitle': 'Link-Titel',
  'components.controls.link.linkTarget': 'Link-Ziel',
  'components.controls.link.linkTargetOption': 'Link in neuem Fenster öffnen',
  'components.controls.link.link': 'Link',
  'components.controls.link.unlink': 'Aufheben',

  // List
  'components.controls.list.list': 'Liste',
  'components.controls.list.unordered': 'Aufzählung',
  'components.controls.list.ordered': 'Nummerierte Liste',
  'components.controls.list.indent': 'Einzug vergrößern',
  'components.controls.list.outdent': 'Einzug reduzieren',

  // Remove
  'components.controls.remove.remove': 'Entfernen',

  // TextAlign
  'components.controls.textalign.textalign': 'Textausrichtung',
  'components.controls.textalign.left': 'Linksbündig',
  'components.controls.textalign.center': 'Zentrieren',
  'components.controls.textalign.right': 'Rechtsbündig',
  'components.controls.textalign.justify': 'Blocksatz'
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Tilføj',
  'generic.cancel': 'Annuller',

  // BlockType
  'components.controls.blocktype.h1': 'Overskrift 1',
  'components.controls.blocktype.h2': 'Overskrift 2',
  'components.controls.blocktype.h3': 'Overskrift 3',
  'components.controls.blocktype.h4': 'Overskrift 4',
  'components.controls.blocktype.h5': 'Overskrift 5',
  'components.controls.blocktype.h6': 'Overskrift 6',
  'components.controls.blocktype.blockquote': 'Blokcitat',
  'components.controls.blocktype.code': 'Kode',
  'components.controls.blocktype.blocktype': 'Blok Type',
  'components.controls.blocktype.normal': 'Normal',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Farver',
  'components.controls.colorpicker.text': 'Tekst',
  'components.controls.colorpicker.background': 'Baggrund',

  // Embedded
  'components.controls.embedded.embedded': 'Indlejre',
  'components.controls.embedded.embeddedlink': 'Indlejre Link',
  'components.controls.embedded.enterlink': 'Indtast link',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Fonttype',

  // FontSize
  'components.controls.fontsize.fontsize': 'Fontstørrelser',

  // History
  'components.controls.history.history': 'Historie',
  'components.controls.history.undo': 'Fortryd',
  'components.controls.history.redo': 'Gendan',

  // Image
  'components.controls.image.image': 'Billede',
  'components.controls.image.fileUpload': 'Filoverførsel',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Drop filen eller klik for at uploade',

  // Inline
  'components.controls.inline.bold': 'Fed',
  'components.controls.inline.italic': 'Kursiv',
  'components.controls.inline.underline': 'Understrege',
  'components.controls.inline.strikethrough': 'Gennemstreget',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Hævet',
  'components.controls.inline.subscript': 'Sænket',

  // Link
  'components.controls.link.linkTitle': 'Link Titel',
  'components.controls.link.linkTarget': 'Link Mål',
  'components.controls.link.linkTargetOption': 'Åbn link i nyt vindue',
  'components.controls.link.link': 'Link',
  'components.controls.link.unlink': 'Fjern link',

  // List
  'components.controls.list.list': 'Liste',
  'components.controls.list.unordered': 'Uordnet',
  'components.controls.list.ordered': 'Ordnet',
  'components.controls.list.indent': 'Indrykning',
  'components.controls.list.outdent': 'Udrykning',

  // Remove
  'components.controls.remove.remove': 'Fjern',

  // TextAlign
  'components.controls.textalign.textalign': 'Tekstjustering',
  'components.controls.textalign.left': 'Venstre',
  'components.controls.textalign.center': 'Center',
  'components.controls.textalign.right': 'Højre',
  'components.controls.textalign.justify': 'Margener'
};

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

    // Generic
    'generic.add': '新增',
    'generic.cancel': '取消',

    // BlockType
    'components.controls.blocktype.h1': '標題1',
    'components.controls.blocktype.h2': '標題2',
    'components.controls.blocktype.h3': '標題3',
    'components.controls.blocktype.h4': '標題4',
    'components.controls.blocktype.h5': '標題5',
    'components.controls.blocktype.h6': '標題6',
    'components.controls.blocktype.blockquote': '引用',
    'components.controls.blocktype.code': '程式碼',
    'components.controls.blocktype.blocktype': '樣式',
    'components.controls.blocktype.normal': '正文',

    // Color Picker
    'components.controls.colorpicker.colorpicker': '選色器',
    'components.controls.colorpicker.text': '文字',
    'components.controls.colorpicker.background': '背景',

    // Embedded
    'components.controls.embedded.embedded': '內嵌',
    'components.controls.embedded.embeddedlink': '內嵌網頁',
    'components.controls.embedded.enterlink': '輸入網頁地址',

    // Emoji
    'components.controls.emoji.emoji': '表情符號',

    // FontFamily
    'components.controls.fontfamily.fontfamily': '字體',

    // FontSize
    'components.controls.fontsize.fontsize': '字體大小',

    // History
    'components.controls.history.history': '歷史紀錄',
    'components.controls.history.undo': '復原',
    'components.controls.history.redo': '重做',

    // Image
    'components.controls.image.image': '圖片',
    'components.controls.image.fileUpload': '檔案上傳',
    'components.controls.image.byURL': '網址',
    'components.controls.image.dropFileText': '點擊或拖曳檔案上傳',

    // Inline
    'components.controls.inline.bold': '粗體',
    'components.controls.inline.italic': '斜體',
    'components.controls.inline.underline': '底線',
    'components.controls.inline.strikethrough': '刪除線',
    'components.controls.inline.monospace': '等寬字體',
    'components.controls.inline.superscript': '上標',
    'components.controls.inline.subscript': '下標',

    // Link
    'components.controls.link.linkTitle': '超連結',
    'components.controls.link.linkTarget': '輸入連結位址',
    'components.controls.link.linkTargetOption': '在新視窗打開連結',
    'components.controls.link.link': '連結',
    'components.controls.link.unlink': '刪除連結',

    // List
    'components.controls.list.list': '列表',
    'components.controls.list.unordered': '項目符號',
    'components.controls.list.ordered': '編號',
    'components.controls.list.indent': '增加縮排',
    'components.controls.list.outdent': '減少縮排',

    // Remove
    'components.controls.remove.remove': '清除格式',

    // TextAlign
    'components.controls.textalign.textalign': '文字對齊',
    'components.controls.textalign.left': '文字向左對齊',
    'components.controls.textalign.center': '文字置中',
    'components.controls.textalign.right': '文字向右對齊',
    'components.controls.textalign.justify': '兩端對齊'
};

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Dodaj',
  'generic.cancel': 'Anuluj',

  // BlockType
  'components.controls.blocktype.h1': 'Nagłówek 1',
  'components.controls.blocktype.h2': 'Nagłówek 2',
  'components.controls.blocktype.h3': 'Nagłówek 3',
  'components.controls.blocktype.h4': 'Nagłówek 4',
  'components.controls.blocktype.h5': 'Nagłówek 5',
  'components.controls.blocktype.h6': 'Nagłówek 6',
  'components.controls.blocktype.blockquote': 'Cytat',
  'components.controls.blocktype.code': 'Kod',
  'components.controls.blocktype.blocktype': 'Format',
  'components.controls.blocktype.normal': 'Normalny',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Kolor',
  'components.controls.colorpicker.text': 'Tekst',
  'components.controls.colorpicker.background': 'Tło',

  // Embedded
  'components.controls.embedded.embedded': 'Osadź',
  'components.controls.embedded.embeddedlink': 'Osadź odnośnik',
  'components.controls.embedded.enterlink': 'Wprowadź odnośnik',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Krój czcionki',

  // FontSize
  'components.controls.fontsize.fontsize': 'Rozmiar czcionki',

  // History
  'components.controls.history.history': 'Historia',
  'components.controls.history.undo': 'Cofnij',
  'components.controls.history.redo': 'Ponów',

  // Image
  'components.controls.image.image': 'Obrazek',
  'components.controls.image.fileUpload': 'Prześlij plik',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Upuść plik lub kliknij, aby przesłać',

  // Inline
  'components.controls.inline.bold': 'Pogrubienie',
  'components.controls.inline.italic': 'Kursywa',
  'components.controls.inline.underline': 'Podkreślenie',
  'components.controls.inline.strikethrough': 'Przekreślenie',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Indeks górny',
  'components.controls.inline.subscript': 'Indeks dolny',

  // Link
  'components.controls.link.linkTitle': 'Tytuł odnośnika',
  'components.controls.link.linkTarget': 'Adres odnośnika',
  'components.controls.link.linkTargetOption': 'Otwórz odnośnik w nowej karcie',
  'components.controls.link.link': 'Wstaw odnośnik',
  'components.controls.link.unlink': 'Usuń odnośnik',

  // List
  'components.controls.list.list': 'Lista',
  'components.controls.list.unordered': 'Lista nieuporządkowana',
  'components.controls.list.ordered': 'Lista uporządkowana',
  'components.controls.list.indent': 'Zwiększ wcięcie',
  'components.controls.list.outdent': 'Zmniejsz wcięcie',

  // Remove
  'components.controls.remove.remove': 'Usuń',

  // TextAlign
  'components.controls.textalign.textalign': 'Wyrównaj tekst',
  'components.controls.textalign.left': 'Do lewej',
  'components.controls.textalign.center': 'Do środka',
  'components.controls.textalign.right': 'Do prawej',
  'components.controls.textalign.justify': 'Wyjustuj'
};

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': 'Añadir',
  'generic.cancel': 'Cancelar',

  // BlockType
  'components.controls.blocktype.h1': 'H1',
  'components.controls.blocktype.h2': 'H2',
  'components.controls.blocktype.h3': 'H3',
  'components.controls.blocktype.h4': 'H4',
  'components.controls.blocktype.h5': 'H5',
  'components.controls.blocktype.h6': 'H6',
  'components.controls.blocktype.blockquote': 'Blockquote',
  'components.controls.blocktype.code': 'Código',
  'components.controls.blocktype.blocktype': 'Tipo de bloque',
  'components.controls.blocktype.normal': 'Normal',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Seleccionar color',
  'components.controls.colorpicker.text': 'Texto',
  'components.controls.colorpicker.background': 'Subrayado',

  // Embedded
  'components.controls.embedded.embedded': 'Adjuntar',
  'components.controls.embedded.embeddedlink': 'Adjuntar Link',
  'components.controls.embedded.enterlink': 'Introducir link',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Fuente',

  // FontSize
  'components.controls.fontsize.fontsize': 'Tamaño de fuente',

  // History
  'components.controls.history.history': 'Histórico',
  'components.controls.history.undo': 'Deshacer',
  'components.controls.history.redo': 'Rehacer',

  // Image
  'components.controls.image.image': 'Imagen',
  'components.controls.image.fileUpload': 'Subir archivo',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Arrastra el archivo o haz click para subirlo',

  // Inline
  'components.controls.inline.bold': 'Negrita',
  'components.controls.inline.italic': 'Cursiva',
  'components.controls.inline.underline': 'Subrayado',
  'components.controls.inline.strikethrough': 'Tachado',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Sobreíndice',
  'components.controls.inline.subscript': 'Subíndice',

  // Link
  'components.controls.link.linkTitle': 'Título del enlace',
  'components.controls.link.linkTarget': 'Objetivo del enlace',
  'components.controls.link.linkTargetOption': 'Abrir en nueva ventana',
  'components.controls.link.link': 'Enlazar',
  'components.controls.link.unlink': 'Desenlazar',

  // List
  'components.controls.list.list': 'Lista',
  'components.controls.list.unordered': 'Desordenada',
  'components.controls.list.ordered': 'Ordenada',
  'components.controls.list.indent': 'Indentada',
  'components.controls.list.outdent': 'Dentada',

  // Remove
  'components.controls.remove.remove': 'Eliminar',

  // TextAlign
  'components.controls.textalign.textalign': 'Alineación del texto',
  'components.controls.textalign.left': 'Izquierda',
  'components.controls.textalign.center': 'Centrado',
  'components.controls.textalign.right': 'Derecha',
  'components.controls.textalign.justify': 'Justificado'
};

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {

  // Generic
  'generic.add': '追加',
  'generic.cancel': 'キャンセル',

  // BlockType
  'components.controls.blocktype.h1': '見出し1',
  'components.controls.blocktype.h2': '見出し2',
  'components.controls.blocktype.h3': '見出し3',
  'components.controls.blocktype.h4': '見出し4',
  'components.controls.blocktype.h5': '見出し5',
  'components.controls.blocktype.h6': '見出し6',
  'components.controls.blocktype.blockquote': '引用',
  'components.controls.blocktype.code': 'コード',
  'components.controls.blocktype.blocktype': 'スタイル',
  'components.controls.blocktype.normal': '標準テキスト',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'テキストの色',
  'components.controls.colorpicker.text': 'テキスト',
  'components.controls.colorpicker.background': 'ハイライト',

  // Embedded
  'components.controls.embedded.embedded': '埋め込み',
  'components.controls.embedded.embeddedlink': '埋め込みリンク',
  'components.controls.embedded.enterlink': 'リンクを入力してください',

  // Emoji
  'components.controls.emoji.emoji': '絵文字',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'フォント',

  // FontSize
  'components.controls.fontsize.fontsize': 'フォントサイズ',

  // History
  'components.controls.history.history': '履歴',
  'components.controls.history.undo': '元に戻す',
  'components.controls.history.redo': 'やり直し',

  // Image
  'components.controls.image.image': '画像',
  'components.controls.image.fileUpload': 'ファイルをアップロード',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'ここに画像をドラッグするか、クリックしてください',

  // Inline
  'components.controls.inline.bold': '太字',
  'components.controls.inline.italic': '斜体',
  'components.controls.inline.underline': '下線',
  'components.controls.inline.strikethrough': '取り消し線',
  'components.controls.inline.monospace': '等幅フォント',
  'components.controls.inline.superscript': '上付き文字',
  'components.controls.inline.subscript': '下付き文字',

  // Link
  'components.controls.link.linkTitle': 'リンクタイトル',
  'components.controls.link.linkTarget': 'リンク対象',
  'components.controls.link.linkTargetOption': '新しいウィンドウで開く',
  'components.controls.link.link': 'リンク',
  'components.controls.link.unlink': 'リンクを解除',

  // List
  'components.controls.list.list': 'リスト',
  'components.controls.list.unordered': '箇条書き',
  'components.controls.list.ordered': '番号付き',
  'components.controls.list.indent': 'インデント増',
  'components.controls.list.outdent': 'インデント減',

  // Remove
  'components.controls.remove.remove': '書式をクリア',

  // TextAlign
  'components.controls.textalign.textalign': '整列',
  'components.controls.textalign.left': '左揃え',
  'components.controls.textalign.center': '中央揃え',
  'components.controls.textalign.right': '右揃え',
  'components.controls.textalign.justify': '両端揃え'
};

/***/ }),
/* 148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rdw-editor-main":"rdw-editor-main","rdw-editor-toolbar":"rdw-editor-toolbar","public-DraftStyleDefault-block":"public-DraftStyleDefault-block","rdw-editor-wrapper":"rdw-editor-wrapper"};

/***/ }),
/* 149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"DraftEditor-editorContainer":"DraftEditor-editorContainer","DraftEditor-root":"DraftEditor-root","public-DraftEditor-content":"public-DraftEditor-content","public-DraftEditor-block":"public-DraftEditor-block","DraftEditor-alignLeft":"DraftEditor-alignLeft","public-DraftStyleDefault-block":"public-DraftStyleDefault-block","public-DraftEditorPlaceholder-root":"public-DraftEditorPlaceholder-root","DraftEditor-alignCenter":"DraftEditor-alignCenter","DraftEditor-alignRight":"DraftEditor-alignRight","public-DraftEditorPlaceholder-hasFocus":"public-DraftEditorPlaceholder-hasFocus","DraftEditorPlaceholder-hidden":"DraftEditorPlaceholder-hidden","public-DraftStyleDefault-ltr":"public-DraftStyleDefault-ltr","public-DraftStyleDefault-rtl":"public-DraftStyleDefault-rtl","public-DraftStyleDefault-listLTR":"public-DraftStyleDefault-listLTR","public-DraftStyleDefault-listRTL":"public-DraftStyleDefault-listRTL","public-DraftStyleDefault-ol":"public-DraftStyleDefault-ol","public-DraftStyleDefault-ul":"public-DraftStyleDefault-ul","public-DraftStyleDefault-depth0":"public-DraftStyleDefault-depth0","public-DraftStyleDefault-depth1":"public-DraftStyleDefault-depth1","public-DraftStyleDefault-depth2":"public-DraftStyleDefault-depth2","public-DraftStyleDefault-depth3":"public-DraftStyleDefault-depth3","public-DraftStyleDefault-depth4":"public-DraftStyleDefault-depth4","public-DraftStyleDefault-unorderedListItem":"public-DraftStyleDefault-unorderedListItem","public-DraftStyleDefault-orderedListItem":"public-DraftStyleDefault-orderedListItem","public-DraftStyleDefault-reset":"public-DraftStyleDefault-reset"};

/***/ })
/******/ ]);
});
//# sourceMappingURL=react-draft-wysiwyg.js.map