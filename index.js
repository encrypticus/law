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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/header/header.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/blocks/header/header.scss ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".page-header{background-color:#fff;padding:13px 0}", "",{"version":3,"sources":["header.scss"],"names":[],"mappings":"AAAA,aACE,qBAAsB,CACtB,cAAiB","file":"header.scss","sourcesContent":[".page-header {\n  background-color: #fff;\n  padding: 13px 0; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/logo/logo.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/logo/logo.scss ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".logo{width:8rem;height:3.8125rem;box-sizing:border-box;border:2px solid #0d2e69;margin-left:7px;color:#0d2e69;font-family:Roboto,Arial,sans-serif;font-size:1.625rem;font-weight:700;line-height:19.21px;text-transform:uppercase;text-decoration:none;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}", "",{"version":3,"sources":["logo.scss"],"names":[],"mappings":"AAAA,MACE,UAAW,CACX,gBAAiB,CACjB,qBAAsB,CACtB,wBAAyB,CACzB,eAAgB,CAChB,aAAc,CACd,mCAAsC,CACtC,kBAAmB,CACnB,eAAgB,CAChB,mBAAoB,CACpB,wBAAyB,CACzB,oBAAqB,CACrB,mBAAa,CAAb,YAAa,CACb,uBAAuB,CAAvB,sBAAuB,CACvB,wBAAmB,CAAnB,kBAAqB","file":"logo.scss","sourcesContent":[".logo {\n  width: 8rem;\n  height: 3.8125rem;\n  box-sizing: border-box;\n  border: 2px solid #0d2e69;\n  margin-left: 7px;\n  color: #0d2e69;\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 1.625rem;\n  font-weight: 700;\n  line-height: 19.21px;\n  text-transform: uppercase;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/common.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/sass/common.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".wrapper{max-width:1366px;min-width:320px}.inner-wrapper{max-width:824px;margin:auto}html{font-size:16px}body{margin:0;padding:0}", "",{"version":3,"sources":["common.scss"],"names":[],"mappings":"AAAA,SACE,gBAAiB,CACjB,eAAkB,CAEpB,eACE,eAAgB,CAChB,WAAc,CAEhB,KACE,cAAiB,CAEnB,KACE,QAAS,CACT,SAAY","file":"common.scss","sourcesContent":[".wrapper {\n  max-width: 1366px;\n  min-width: 320px; }\n\n.inner-wrapper {\n  max-width: 824px;\n  margin: auto; }\n\nhtml {\n  font-size: 16px; }\n\nbody {\n  margin: 0;\n  padding: 0; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/fonts.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/sass/fonts.scss ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var getUrl = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-regular.eot */ "./src/fonts/roboto-v20-latin-regular.eot"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-regular.eot */ "./src/fonts/roboto-v20-latin-regular.eot") + "?#iefix");
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-regular.woff2 */ "./src/fonts/roboto-v20-latin-regular.woff2"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-regular.woff */ "./src/fonts/roboto-v20-latin-regular.woff"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-regular.ttf */ "./src/fonts/roboto-v20-latin-regular.ttf"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-regular.svg */ "./src/fonts/roboto-v20-latin-regular.svg") + "#Roboto");
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-500.eot */ "./src/fonts/roboto-v20-latin-500.eot"));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-500.eot */ "./src/fonts/roboto-v20-latin-500.eot") + "?#iefix");
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-500.woff2 */ "./src/fonts/roboto-v20-latin-500.woff2"));
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-500.woff */ "./src/fonts/roboto-v20-latin-500.woff"));
var ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-500.ttf */ "./src/fonts/roboto-v20-latin-500.ttf"));
var ___CSS_LOADER_URL___11___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-500.svg */ "./src/fonts/roboto-v20-latin-500.svg") + "#Roboto");
var ___CSS_LOADER_URL___12___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-700.eot */ "./src/fonts/roboto-v20-latin-700.eot"));
var ___CSS_LOADER_URL___13___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-700.eot */ "./src/fonts/roboto-v20-latin-700.eot") + "?#iefix");
var ___CSS_LOADER_URL___14___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-700.woff2 */ "./src/fonts/roboto-v20-latin-700.woff2"));
var ___CSS_LOADER_URL___15___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-700.woff */ "./src/fonts/roboto-v20-latin-700.woff"));
var ___CSS_LOADER_URL___16___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-700.ttf */ "./src/fonts/roboto-v20-latin-700.ttf"));
var ___CSS_LOADER_URL___17___ = getUrl(__webpack_require__(/*! ../fonts/roboto-v20-latin-700.svg */ "./src/fonts/roboto-v20-latin-700.svg") + "#Roboto");
var ___CSS_LOADER_URL___18___ = getUrl(__webpack_require__(/*! ../fonts/playfair-display-v15-latin-700.eot */ "./src/fonts/playfair-display-v15-latin-700.eot"));
var ___CSS_LOADER_URL___19___ = getUrl(__webpack_require__(/*! ../fonts/playfair-display-v15-latin-700.eot */ "./src/fonts/playfair-display-v15-latin-700.eot") + "?#iefix");
var ___CSS_LOADER_URL___20___ = getUrl(__webpack_require__(/*! ../fonts/playfair-display-v15-latin-700.woff2 */ "./src/fonts/playfair-display-v15-latin-700.woff2"));
var ___CSS_LOADER_URL___21___ = getUrl(__webpack_require__(/*! ../fonts/playfair-display-v15-latin-700.woff */ "./src/fonts/playfair-display-v15-latin-700.woff"));
var ___CSS_LOADER_URL___22___ = getUrl(__webpack_require__(/*! ../fonts/playfair-display-v15-latin-700.ttf */ "./src/fonts/playfair-display-v15-latin-700.ttf"));
var ___CSS_LOADER_URL___23___ = getUrl(__webpack_require__(/*! ../fonts/playfair-display-v15-latin-700.svg */ "./src/fonts/playfair-display-v15-latin-700.svg") + "#PlayfairDisplay");
// Module
exports.push([module.i, "@font-face{font-family:Roboto;font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL___0___ + ");src:local(\"Roboto\"),local(\"Roboto-Regular\"),url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\")}@font-face{font-family:Roboto;font-style:normal;font-weight:500;src:url(" + ___CSS_LOADER_URL___6___ + ");src:local(\"Roboto Medium\"),local(\"Roboto-Medium\"),url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\")}@font-face{font-family:Roboto;font-style:normal;font-weight:700;src:url(" + ___CSS_LOADER_URL___12___ + ");src:local(\"Roboto Bold\"),local(\"Roboto-Bold\"),url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\")}@font-face{font-family:Playfair Display;font-style:normal;font-weight:700;src:url(" + ___CSS_LOADER_URL___18___ + ");src:local(\"Playfair Display Bold\"),local(\"PlayfairDisplay-Bold\"),url(" + ___CSS_LOADER_URL___19___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___20___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___21___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___22___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___23___ + ") format(\"svg\")}", "",{"version":3,"sources":["fonts.scss"],"names":[],"mappings":"AACA,WACE,kBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,iCAAiD,CAEjD,6RACiB,CAGnB,WACE,kBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,iCAA6C,CAE7C,qSACiB,CAGnB,WACE,kBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,kCAA6C,CAE7C,oSACiB,CAGnB,WACE,4BAA+B,CAC/B,iBAAkB,CAClB,eAAgB,CAChB,kCAAuD,CAEvD,uTACiB","file":"fonts.scss","sourcesContent":["/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"../fonts/roboto-v20-latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(\"../fonts/roboto-v20-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto-v20-latin-regular.woff2\") format(\"woff2\"), url(\"../fonts/roboto-v20-latin-regular.woff\") format(\"woff\"), url(\"../fonts/roboto-v20-latin-regular.ttf\") format(\"truetype\"), url(\"../fonts/roboto-v20-latin-regular.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* roboto-500 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"../fonts/roboto-v20-latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"../fonts/roboto-v20-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto-v20-latin-500.woff2\") format(\"woff2\"), url(\"../fonts/roboto-v20-latin-500.woff\") format(\"woff\"), url(\"../fonts/roboto-v20-latin-500.ttf\") format(\"truetype\"), url(\"../fonts/roboto-v20-latin-500.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* roboto-700 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"../fonts/roboto-v20-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(\"../fonts/roboto-v20-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto-v20-latin-700.woff2\") format(\"woff2\"), url(\"../fonts/roboto-v20-latin-700.woff\") format(\"woff\"), url(\"../fonts/roboto-v20-latin-700.ttf\") format(\"truetype\"), url(\"../fonts/roboto-v20-latin-700.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* playfair-display-700 - latin */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"../fonts/playfair-display-v15-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Playfair Display Bold\"), local(\"PlayfairDisplay-Bold\"), url(\"../fonts/playfair-display-v15-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/playfair-display-v15-latin-700.woff2\") format(\"woff2\"), url(\"../fonts/playfair-display-v15-latin-700.woff\") format(\"woff\"), url(\"../fonts/playfair-display-v15-latin-700.ttf\") format(\"truetype\"), url(\"../fonts/playfair-display-v15-latin-700.svg#PlayfairDisplay\") format(\"svg\");\n  /* Legacy iOS */ }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/blocks/header/header.js":
/*!*************************************!*\
  !*** ./src/blocks/header/header.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./src/blocks/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/header/header.scss":
/*!***************************************!*\
  !*** ./src/blocks/header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./header.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/header/header.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"singletonStyleTag"}

options.insert = "head";
options.singleton = true;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/components/logo/logo.js":
/*!*************************************!*\
  !*** ./src/components/logo/logo.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.scss */ "./src/components/logo/logo.scss");
/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/logo/logo.scss":
/*!***************************************!*\
  !*** ./src/components/logo/logo.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./logo.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/logo/logo.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"singletonStyleTag"}

options.insert = "head";
options.singleton = true;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/fonts/playfair-display-v15-latin-700.eot":
/*!******************************************************!*\
  !*** ./src/fonts/playfair-display-v15-latin-700.eot ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/playfair-display-v15-latin-700.eot";

/***/ }),

/***/ "./src/fonts/playfair-display-v15-latin-700.svg":
/*!******************************************************!*\
  !*** ./src/fonts/playfair-display-v15-latin-700.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/playfair-display-v15-latin-700.svg";

/***/ }),

/***/ "./src/fonts/playfair-display-v15-latin-700.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/playfair-display-v15-latin-700.ttf ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/playfair-display-v15-latin-700.ttf";

/***/ }),

/***/ "./src/fonts/playfair-display-v15-latin-700.woff":
/*!*******************************************************!*\
  !*** ./src/fonts/playfair-display-v15-latin-700.woff ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/playfair-display-v15-latin-700.woff";

/***/ }),

/***/ "./src/fonts/playfair-display-v15-latin-700.woff2":
/*!********************************************************!*\
  !*** ./src/fonts/playfair-display-v15-latin-700.woff2 ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/playfair-display-v15-latin-700.woff2";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-500.eot":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-500.eot ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-500.eot";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-500.svg":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-500.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-500.svg";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-500.ttf":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-500.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-500.ttf";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-500.woff":
/*!*********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-500.woff ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-500.woff";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-500.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-500.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-500.woff2";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-700.eot":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-700.eot ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-700.eot";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-700.svg":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-700.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-700.svg";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-700.ttf":
/*!********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-700.ttf ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-700.ttf";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-700.woff":
/*!*********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-700.woff ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-700.woff";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-700.woff2":
/*!**********************************************!*\
  !*** ./src/fonts/roboto-v20-latin-700.woff2 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-700.woff2";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-regular.eot":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v20-latin-regular.eot ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-regular.eot";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-regular.svg":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v20-latin-regular.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-regular.svg";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/roboto-v20-latin-regular.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-regular.ttf";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-regular.woff":
/*!*************************************************!*\
  !*** ./src/fonts/roboto-v20-latin-regular.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-regular.woff";

/***/ }),

/***/ "./src/fonts/roboto-v20-latin-regular.woff2":
/*!**************************************************!*\
  !*** ./src/fonts/roboto-v20-latin-regular.woff2 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/roboto-v20-latin-regular.woff2";

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sass/common.scss */ "./src/sass/common.scss");
/* harmony import */ var _sass_common_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_common_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_fonts_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sass/fonts.scss */ "./src/sass/fonts.scss");
/* harmony import */ var _sass_fonts_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_fonts_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/header/header */ "./src/blocks/header/header.js");
/* harmony import */ var _components_logo_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/logo/logo */ "./src/components/logo/logo.js");





/***/ }),

/***/ "./src/sass/common.scss":
/*!******************************!*\
  !*** ./src/sass/common.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./common.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/common.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"singletonStyleTag"}

options.insert = "head";
options.singleton = true;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/sass/fonts.scss":
/*!*****************************!*\
  !*** ./src/sass/fonts.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src??ref--5-2!../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./fonts.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/fonts.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {"injectType":"singletonStyleTag"}

options.insert = "head";
options.singleton = true;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map