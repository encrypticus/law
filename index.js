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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/about-us/about-us.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/blocks/about-us/about-us.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".about-us__img{width:48.54369%}.about-us img{max-width:400px}@media (max-width:800px){.about-us img{margin-bottom:30px}}.about-us__info{padding-top:2px}@media (max-width:480px){.about-us__info{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}}.about-us__title{font-size:2.25rem;font-family:Playfair Display,Arial,sans-serif;font-weight:700;line-height:19.21px;color:#404040;margin-top:0;margin-bottom:26px;text-transform:uppercase}.about-us__text{margin-top:0;margin-bottom:39px;font-size:13px;font-family:Roboto Thin,Arial,sans-serif;font-weight:400;line-height:18.79px;color:#151515;max-width:399px}.about-us__consultation{margin-top:0;font-size:15px;font-family:Playfair Display,Arial,sans-serif;font-weight:700;line-height:19.21px;color:#404040;text-transform:uppercase}", "",{"version":3,"sources":["about-us.scss"],"names":[],"mappings":"AAAA,eACE,eAAkB,CAEpB,cACE,eAAkB,CAClB,yBACE,cACE,kBAAqB,CAAE,CAE7B,gBACE,eAAkB,CAClB,yBACE,gBACE,mBAAa,CAAb,YAAa,CACb,2BAAsB,CAAtB,4BAAsB,CAAtB,qBAAsB,CACtB,wBAAmB,CAAnB,kBAAqB,CAAE,CAE7B,iBACE,iBAAkB,CAClB,6CAAkD,CAClD,eAAgB,CAChB,mBAAoB,CACpB,aAAc,CACd,YAAa,CACb,kBAAmB,CACnB,wBAA2B,CAE7B,gBACE,YAAa,CACb,kBAAmB,CACnB,cAAe,CACf,wCAA6C,CAC7C,eAAgB,CAChB,mBAAoB,CACpB,aAAc,CACd,eAAkB,CAEpB,wBACE,YAAa,CACb,cAAe,CACf,6CAAkD,CAClD,eAAgB,CAChB,mBAAoB,CACpB,aAAc,CACd,wBAA2B","file":"about-us.scss","sourcesContent":[".about-us__img {\n  width: 48.54369%; }\n\n.about-us img {\n  max-width: 400px; }\n  @media (max-width: 800px) {\n    .about-us img {\n      margin-bottom: 30px; } }\n\n.about-us__info {\n  padding-top: 2px; }\n  @media (max-width: 480px) {\n    .about-us__info {\n      display: flex;\n      flex-direction: column;\n      align-items: center; } }\n\n.about-us__title {\n  font-size: 2.25rem;\n  font-family: 'Playfair Display', Arial, sans-serif;\n  font-weight: 700;\n  line-height: 19.21px;\n  color: #404040;\n  margin-top: 0;\n  margin-bottom: 26px;\n  text-transform: uppercase; }\n\n.about-us__text {\n  margin-top: 0;\n  margin-bottom: 39px;\n  font-size: 13px;\n  font-family: 'Roboto Thin', Arial, sans-serif;\n  font-weight: 400;\n  line-height: 18.79px;\n  color: #151515;\n  max-width: 399px; }\n\n.about-us__consultation {\n  margin-top: 0;\n  font-size: 15px;\n  font-family: 'Playfair Display', Arial, sans-serif;\n  font-weight: 700;\n  line-height: 19.21px;\n  color: #404040;\n  text-transform: uppercase; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/block-contacts/block-contacts.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/blocks/block-contacts/block-contacts.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ./img/bg.jpg */ "./src/blocks/block-contacts/img/bg.jpg"));
// Module
exports.push([module.i, ".block-contacts{height:616px;margin-bottom:6.4375rem;background-image:url(" + ___CSS_LOADER_URL___0___ + ");background-size:auto;background-repeat:no-repeat}.block-contacts__overlay{width:100%;height:100%;box-sizing:border-box;padding-top:7.3125rem;background-color:rgba(0,0,0,.7)}@media (max-width:768px){.block-contacts__overlay{padding-top:3.125rem}}.block-contacts__text{padding-top:7.1875rem}@media (max-width:768px){.block-contacts__text{padding-top:0;margin-bottom:2.5rem;text-align:center}}.block-contacts__slogan-1,.block-contacts__slogan-2{margin:0;font-size:1.3125rem;font-family:Playfair Display,Arial,sans-serif;font-weight:700;line-height:21.35px;color:#fff;text-transform:uppercase}.block-contacts__slogan-1{margin-bottom:.875rem}.block-contacts__slogan-2{font-size:2.25rem;line-height:19.21px;margin-bottom:2.375rem}", "",{"version":3,"sources":["block-contacts.scss"],"names":[],"mappings":"AAAA,gBACE,YAAa,CACb,uBAAwB,CACxB,8CAAmC,CACnC,oBAAqB,CACrB,2BAA8B,CAC9B,yBACE,UAAW,CACX,WAAY,CACZ,qBAAsB,CACtB,qBAAsB,CACtB,+BAAsC,CACtC,yBACE,yBACE,oBAAuB,CAAE,CAC/B,sBACE,qBAAwB,CACxB,yBACE,sBACE,aAAc,CACd,oBAAqB,CACrB,iBAAoB,CAAE,CAC5B,oDACE,QAAS,CACT,mBAAoB,CACpB,6CAAkD,CAClD,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,wBAA2B,CAC7B,0BACE,qBAAyB,CAC3B,0BACE,iBAAkB,CAClB,mBAAoB,CACpB,sBAAyB","file":"block-contacts.scss","sourcesContent":[".block-contacts {\n  height: 616px;\n  margin-bottom: 6.4375rem;\n  background-image: url(./img/bg.jpg);\n  background-size: auto;\n  background-repeat: no-repeat; }\n  .block-contacts__overlay {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    padding-top: 7.3125rem;\n    background-color: rgba(0, 0, 0, 0.7); }\n    @media (max-width: 768px) {\n      .block-contacts__overlay {\n        padding-top: 3.125rem; } }\n  .block-contacts__text {\n    padding-top: 7.1875rem; }\n    @media (max-width: 768px) {\n      .block-contacts__text {\n        padding-top: 0;\n        margin-bottom: 2.5rem;\n        text-align: center; } }\n  .block-contacts__slogan-1, .block-contacts__slogan-2 {\n    margin: 0;\n    font-size: 1.3125rem;\n    font-family: 'Playfair Display', Arial, sans-serif;\n    font-weight: 700;\n    line-height: 21.35px;\n    color: #fff;\n    text-transform: uppercase; }\n  .block-contacts__slogan-1 {\n    margin-bottom: 0.875rem; }\n  .block-contacts__slogan-2 {\n    font-size: 2.25rem;\n    line-height: 19.21px;\n    margin-bottom: 2.375rem; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/header/header.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/blocks/header/header.scss ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".page-header{padding:13px 0 11px;background-color:#fff}@media (max-width:768px){.page-header{margin:0 10px}}", "",{"version":3,"sources":["header.scss"],"names":[],"mappings":"AAAA,aACE,mBAAsB,CACtB,qBAAwB,CACxB,yBACE,aACE,aAAgB,CAAE","file":"header.scss","sourcesContent":[".page-header {\n  padding: 13px 0 11px 0;\n  background-color: #fff; }\n  @media (max-width: 768px) {\n    .page-header {\n      margin: 0 10px; } }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/burger/burger.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/burger/burger.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".burger{display:none;width:30px;padding:0;line-height:30px;background-color:transparent;border:0;cursor:pointer;-webkit-box-ordinal-group:1;order:0;margin-left:auto}@media (max-width:640px){.burger{display:inline-block;margin-right:5%}}.burger>span{position:relative;display:inline-block;width:100%;height:3px;font-size:0;vertical-align:middle;background-color:#000;-webkit-transition:background .3s;transition:background .3s}.burger>span:after,.burger>span:before{content:\"\";position:absolute;left:0;width:100%;height:100%;background-color:#000;-webkit-transition:top .3s .3s,-webkit-transform .3s;transition:top .3s .3s,-webkit-transform .3s;transition:top .3s .3s,transform .3s;transition:top .3s .3s,transform .3s,-webkit-transform .3s}.burger>span:before{top:-10px}.burger>span:after{top:10px}.burger_light>span,.burger_light>span:after,.burger_light>span:before{background-color:#fff}.burger_close>span{background-color:transparent}.burger_close>span:after,.burger_close>span:before{top:0;-webkit-transition:top .3s,-webkit-transform .3s .3s;transition:top .3s,-webkit-transform .3s .3s;transition:transform .3s .3s,top .3s;transition:transform .3s .3s,top .3s,-webkit-transform .3s .3s}.burger_close>span:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.burger_close>span:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}", "",{"version":3,"sources":["burger.scss"],"names":[],"mappings":"AAAA,QACE,YAAa,CACb,UAAW,CACX,SAAU,CACV,gBAAiB,CACjB,4BAA6B,CAC7B,QAAS,CACT,cAAe,CACf,2BAAQ,CAAR,OAAQ,CACR,gBAAmB,CACnB,yBACE,QACE,oBAAqB,CACrB,eAAkB,CAAE,CACxB,aACE,iBAAkB,CAClB,oBAAqB,CACrB,UAAW,CACX,UAAW,CACX,WAAY,CACZ,qBAAsB,CACtB,qBAAsB,CACtB,iCAA0B,CAA1B,yBAA4B,CAC5B,uCACE,UAAW,CACX,iBAAkB,CAClB,MAAO,CACP,UAAW,CACX,WAAY,CACZ,qBAAsB,CACtB,oDAAsC,CAAtC,4CAAsC,CAAtC,oCAAsC,CAAtC,0DAAwC,CAC1C,oBACE,SAAY,CACd,mBACE,QAAW,CAGb,sEACE,qBAAwB,CAC5B,mBACE,4BAA+B,CAC/B,mDACE,KAAM,CACN,oDAAsC,CAAtC,4CAAsC,CAAtC,oCAAsC,CAAtC,8DAAwC,CAC1C,0BACE,+BAAwB,CAAxB,uBAA0B,CAC5B,yBACE,gCAAyB,CAAzB,wBAA2B","file":"burger.scss","sourcesContent":[".burger {\n  display: none;\n  width: 30px;\n  padding: 0;\n  line-height: 30px;\n  background-color: transparent;\n  border: 0;\n  cursor: pointer;\n  order: 0;\n  margin-left: auto; }\n  @media (max-width: 640px) {\n    .burger {\n      display: inline-block;\n      margin-right: 5%; } }\n  .burger > span {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    height: 3px;\n    font-size: 0;\n    vertical-align: middle;\n    background-color: #000;\n    transition: background .3s; }\n    .burger > span:before, .burger > span:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-color: #000;\n      transition: top .3s .3s, transform .3s; }\n    .burger > span:before {\n      top: -10px; }\n    .burger > span:after {\n      top: 10px; }\n  .burger_light > span {\n    background-color: #fff; }\n    .burger_light > span::before, .burger_light > span::after {\n      background-color: #fff; }\n  .burger_close > span {\n    background-color: transparent; }\n    .burger_close > span::before, .burger_close > span::after {\n      top: 0;\n      transition: transform .3s .3s, top .3s; }\n    .burger_close > span::before {\n      transform: rotate(45deg); }\n    .burger_close > span::after {\n      transform: rotate(-45deg); }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/button/button.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/button/button.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".button{display:inline-block;font-family:Roboto,Arial,sans-serif;font-weight:700;border:0;box-sizing:border-box;text-transform:uppercase;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;text-decoration:none;-webkit-transition:background-color .3s;transition:background-color .3s}.button_theme_blue{padding:.625rem 1.9375rem .625rem 1.5625rem;font-size:11px;line-height:19.21px;color:#fff;background-color:#0d2e69}.button_theme_white{padding:.625rem 4.1875rem;font-size:14px;font-weight:700;line-height:21.49px;color:#0d2e69;background-color:#fff}.button_about-us{padding-left:2.5rem;padding-right:2.5rem}", "",{"version":3,"sources":["button.scss"],"names":[],"mappings":"AAAA,QACE,oBAAqB,CACrB,mCAAsC,CACtC,eAAgB,CAChB,QAAS,CACT,qBAAsB,CACtB,wBAAyB,CACzB,cAAe,CACf,wBAAiB,CAAjB,qBAAiB,CAAjB,oBAAiB,CAAjB,gBAAiB,CACjB,qBAAsB,CACtB,oBAAqB,CACrB,uCAAgC,CAAhC,+BAAkC,CAClC,mBACE,2CAA8C,CAC9C,cAAe,CACf,mBAAoB,CACpB,UAAW,CACX,wBAA2B,CAC7B,oBACE,yBAA2B,CAC3B,cAAe,CACf,eAAgB,CAChB,mBAAoB,CACpB,aAAc,CACd,qBAAwB,CAC1B,iBACE,mBAAoB,CACpB,oBAAuB","file":"button.scss","sourcesContent":[".button {\n  display: inline-block;\n  font-family: Roboto, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  box-sizing: border-box;\n  text-transform: uppercase;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  text-decoration: none;\n  transition: background-color .3s; }\n  .button_theme_blue {\n    padding: 0.625rem 1.9375rem 0.625rem 1.5625rem;\n    font-size: 11px;\n    line-height: 19.21px;\n    color: #fff;\n    background-color: #0d2e69; }\n  .button_theme_white {\n    padding: 0.625rem 4.1875rem;\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 21.49px;\n    color: #0d2e69;\n    background-color: #fff; }\n  .button_about-us {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/contact/contact.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/contact/contact.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".contact{display:-webkit-box;display:flex;width:235px;margin-left:auto;margin-top:6px;margin-bottom:14px;-webkit-box-pack:justify;justify-content:space-between;font-size:10px;font-family:Roboto,Arial,sans-serif;font-weight:700;line-height:10.67px;color:inherit;text-transform:uppercase}@media (max-width:640px){.contact{margin-top:0}}.contact__text{width:84px;margin:0;text-align:right}.contact__phone{margin:0}.contact__link{font-size:23px;font-family:inherit;font-weight:700;line-height:19.21px;color:inherit;text-decoration:none}@media (max-width:640px){.contact__link{font-size:20px}}", "",{"version":3,"sources":["contact.scss"],"names":[],"mappings":"AAAA,SACE,mBAAa,CAAb,YAAa,CACb,WAAY,CACZ,gBAAiB,CACjB,cAAe,CACf,kBAAmB,CACnB,wBAA8B,CAA9B,6BAA8B,CAC9B,cAAe,CACf,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,aAAc,CACd,wBAA2B,CAC3B,yBACE,SACE,YAAe,CAAE,CACrB,eACE,UAAW,CACX,QAAS,CACT,gBAAmB,CACrB,gBACE,QAAW,CACb,eACE,cAAe,CACf,mBAAoB,CACpB,eAAgB,CAChB,mBAAoB,CACpB,aAAc,CACd,oBAAuB,CACvB,yBACE,eACE,cAAiB,CAAE","file":"contact.scss","sourcesContent":[".contact {\n  display: flex;\n  width: 235px;\n  margin-left: auto;\n  margin-top: 6px;\n  margin-bottom: 14px;\n  justify-content: space-between;\n  font-size: 10px;\n  font-family: Roboto, Arial, sans-serif;\n  font-weight: 700;\n  line-height: 10.67px;\n  color: inherit;\n  text-transform: uppercase; }\n  @media (max-width: 640px) {\n    .contact {\n      margin-top: 0; } }\n  .contact__text {\n    width: 84px;\n    margin: 0;\n    text-align: right; }\n  .contact__phone {\n    margin: 0; }\n  .contact__link {\n    font-size: 23px;\n    font-family: inherit;\n    font-weight: 700;\n    line-height: 19.21px;\n    color: inherit;\n    text-decoration: none; }\n    @media (max-width: 640px) {\n      .contact__link {\n        font-size: 20px; } }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/logo/logo.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/logo/logo.scss ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".logo{display:-webkit-box;display:flex;width:8rem;height:3.8125rem;box-sizing:border-box;font-size:1.625rem;font-family:Roboto,Arial,sans-serif;font-weight:700;line-height:19.21px;color:#0d2e69;border:2px solid #0d2e69;text-transform:uppercase;text-decoration:none;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}", "",{"version":3,"sources":["logo.scss"],"names":[],"mappings":"AAAA,MACE,mBAAa,CAAb,YAAa,CACb,UAAW,CACX,gBAAiB,CACjB,qBAAsB,CACtB,kBAAmB,CACnB,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,aAAc,CACd,wBAAyB,CACzB,wBAAyB,CACzB,oBAAqB,CACrB,uBAAuB,CAAvB,sBAAuB,CACvB,wBAAmB,CAAnB,kBAAqB","file":"logo.scss","sourcesContent":[".logo {\n  display: flex;\n  width: 8rem;\n  height: 3.8125rem;\n  box-sizing: border-box;\n  font-size: 1.625rem;\n  font-family: Roboto, Arial, sans-serif;\n  font-weight: 700;\n  line-height: 19.21px;\n  color: #0d2e69;\n  border: 2px solid #0d2e69;\n  text-transform: uppercase;\n  text-decoration: none;\n  justify-content: center;\n  align-items: center; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/main-nav/main-nav.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/main-nav/main-nav.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".main-nav{width:407px}@media (max-width:640px){.main-nav{width:auto}}.main-nav__wrapper{color:#0d2e69;background-color:#fff}@media (max-width:640px){.main-nav__wrapper{position:fixed;top:0;right:0;padding:20px 10px 50px 30px;-webkit-transform:translateX(275px);transform:translateX(275px);color:#fff;background-color:#0d2e69}}.main-nav__wrapper_opened{-webkit-transform:translateX(0);transform:translateX(0)}.main-nav__wrapper_animated{-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s}.main-nav__list{display:-webkit-box;display:flex;margin:0;padding:0;list-style:none;-webkit-box-pack:justify;justify-content:space-between}@media (max-width:640px){.main-nav__list{display:block}}.main-nav__link{font-size:11px;font-family:Roboto,Arial,sans-serif;font-weight:700;line-height:19.21px;color:inherit;text-transform:uppercase;text-decoration:none}@media (max-width:640px){.main-nav__link{font-size:14px;line-height:30px}}.main-nav__burger{position:absolute;top:0;left:0}", "",{"version":3,"sources":["main-nav.scss"],"names":[],"mappings":"AAAA,UACE,WAAc,CACd,yBACE,UACE,UAAa,CAAE,CACnB,mBACE,aAAc,CACd,qBAAwB,CACxB,yBACE,mBACE,cAAe,CACf,KAAM,CACN,OAAQ,CACR,2BAA4B,CAC5B,mCAA4B,CAA5B,2BAA4B,CAC5B,UAAW,CACX,wBAA2B,CAAE,CACjC,0BACE,+BAAwB,CAAxB,uBAA0B,CAC5B,4BACE,wCAAyB,CAAzB,gCAAyB,CAAzB,wBAAyB,CAAzB,8CAA2B,CAC/B,gBACE,mBAAa,CAAb,YAAa,CACb,QAAS,CACT,SAAU,CACV,eAAgB,CAChB,wBAA8B,CAA9B,6BAAgC,CAChC,yBACE,gBACE,aAAgB,CAAE,CACxB,gBACE,cAAe,CACf,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,aAAc,CACd,wBAAyB,CACzB,oBAAuB,CACvB,yBACE,gBACE,cAAe,CACf,gBAAmB,CAAE,CAC3B,kBACE,iBAAkB,CAClB,KAAM,CACN,MAAS","file":"main-nav.scss","sourcesContent":[".main-nav {\n  width: 407px; }\n  @media (max-width: 640px) {\n    .main-nav {\n      width: auto; } }\n  .main-nav__wrapper {\n    color: #0d2e69;\n    background-color: #fff; }\n    @media (max-width: 640px) {\n      .main-nav__wrapper {\n        position: fixed;\n        top: 0;\n        right: 0;\n        padding: 20px 10px 50px 30px;\n        transform: translateX(275px);\n        color: #fff;\n        background-color: #0d2e69; } }\n    .main-nav__wrapper_opened {\n      transform: translateX(0); }\n    .main-nav__wrapper_animated {\n      transition: transform .5s; }\n  .main-nav__list {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    justify-content: space-between; }\n    @media (max-width: 640px) {\n      .main-nav__list {\n        display: block; } }\n  .main-nav__link {\n    font-size: 11px;\n    font-family: Roboto, Arial, sans-serif;\n    font-weight: 700;\n    line-height: 19.21px;\n    color: inherit;\n    text-transform: uppercase;\n    text-decoration: none; }\n    @media (max-width: 640px) {\n      .main-nav__link {\n        font-size: 14px;\n        line-height: 30px; } }\n  .main-nav__burger {\n    position: absolute;\n    top: 0;\n    left: 0; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/message-form/message-form.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/message-form/message-form.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".message-form{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;padding:1.3125rem 1.4375rem 1.9375rem 1.3125rem;background-color:#0d2e69}.message-form__title{margin:0;font-size:1.25rem;font-family:Roboto,Arial,sans-serif;font-weight:700;line-height:34.23px;color:#fff;text-align:center;text-transform:uppercase}.message-form__sub-title{font-size:12px;font-family:Roboto Thin,Arial,sans-serif;font-weight:400;line-height:21.49px;color:#fff;text-align:center;margin-top:0;margin-bottom:1.5rem}.message-form__field,.message-form__textarea{width:267px;padding:.3125rem 0 .3125rem .5625rem;font-size:12px;font-family:Roboto,Arial,sans-serif;font-weight:400;line-height:21.49px;color:#fff;background-color:#0d2e69;border:1px solid #ccc;box-sizing:border-box;margin-bottom:.5625rem}.message-form__textarea{height:87px;margin-bottom:.6875rem;resize:none}.message-form__field::-webkit-input-placeholder,.message-form__textarea::-webkit-input-placeholder{font-size:11px;font-family:Roboto,Arial,sans-serif;font-weight:400;line-height:21.49px;color:#fff;opacity:.53}.message-form__field::-moz-placeholder,.message-form__textarea::-moz-placeholder{font-size:11px;font-family:Roboto,Arial,sans-serif;font-weight:400;line-height:21.49px;color:#fff;opacity:.53}.message-form__field:-ms-input-placeholder,.message-form__textarea:-ms-input-placeholder{font-size:11px;font-family:Roboto,Arial,sans-serif;font-weight:400;line-height:21.49px;color:#fff;opacity:.53}.message-form__field::-ms-input-placeholder,.message-form__textarea::-ms-input-placeholder{font-size:11px;font-family:Roboto,Arial,sans-serif;font-weight:400;line-height:21.49px;color:#fff;opacity:.53}.message-form__field::placeholder,.message-form__textarea::placeholder{font-size:11px;font-family:Roboto,Arial,sans-serif;font-weight:400;line-height:21.49px;color:#fff;opacity:.53}", "",{"version":3,"sources":["message-form.scss"],"names":[],"mappings":"AAAA,cACE,mBAAa,CAAb,YAAa,CACb,2BAAsB,CAAtB,4BAAsB,CAAtB,qBAAsB,CACtB,wBAAmB,CAAnB,kBAAmB,CACnB,+CAAgD,CAChD,wBAA2B,CAC3B,qBACE,QAAS,CACT,iBAAkB,CAClB,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,iBAAkB,CAClB,wBAA2B,CAC7B,yBACE,cAAe,CACf,wCAA6C,CAC7C,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,iBAAkB,CAClB,YAAa,CACb,oBAAuB,CACzB,6CACE,WAAY,CACZ,oCAAwC,CACxC,cAAe,CACf,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,wBAAyB,CACzB,qBAAsB,CACtB,qBAAsB,CACtB,sBAA0B,CAC5B,wBACE,WAAY,CACZ,sBAAwB,CACxB,WAAc,CAChB,mGACE,cAAe,CACf,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,WAAc,CANhB,iFACE,cAAe,CACf,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,WAAc,CANhB,yFACE,cAAe,CACf,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,WAAc,CANhB,2FACE,cAAe,CACf,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,WAAc,CANhB,uEACE,cAAe,CACf,mCAAsC,CACtC,eAAgB,CAChB,mBAAoB,CACpB,UAAW,CACX,WAAc","file":"message-form.scss","sourcesContent":[".message-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1.3125rem 1.4375rem 1.9375rem 1.3125rem;\n  background-color: #0d2e69; }\n  .message-form__title {\n    margin: 0;\n    font-size: 1.25rem;\n    font-family: Roboto, Arial, sans-serif;\n    font-weight: 700;\n    line-height: 34.23px;\n    color: #fff;\n    text-align: center;\n    text-transform: uppercase; }\n  .message-form__sub-title {\n    font-size: 12px;\n    font-family: 'Roboto Thin', Arial, sans-serif;\n    font-weight: 400;\n    line-height: 21.49px;\n    color: #fff;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 1.5rem; }\n  .message-form__field, .message-form__textarea {\n    width: 267px;\n    padding: 0.3125rem 0 0.3125rem 0.5625rem;\n    font-size: 12px;\n    font-family: Roboto, Arial, sans-serif;\n    font-weight: 400;\n    line-height: 21.49px;\n    color: #fff;\n    background-color: #0d2e69;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    margin-bottom: 0.5625rem; }\n  .message-form__textarea {\n    height: 87px;\n    margin-bottom: 0.6875rem;\n    resize: none; }\n  .message-form__field::placeholder, .message-form__textarea::placeholder {\n    font-size: 11px;\n    font-family: Roboto, Arial, sans-serif;\n    font-weight: 400;\n    line-height: 21.49px;\n    color: #fff;\n    opacity: .53; }\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/sass/common.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/sass/common.scss ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".wrapper{max-width:1366px;min-width:320px}.inner-wrapper{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;flex-wrap:wrap;max-width:824px;margin:auto}@media (max-width:768px){.inner-wrapper_contacts{-webkit-box-pack:center;justify-content:center}}.inner-wrapper_about-us{flex-wrap:nowrap}@media (max-width:800px){.inner-wrapper_about-us{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}}@media (max-width:480px){.inner-wrapper_about-us{padding:0 10px}}html{font-size:16px;overflow-x:hidden}@media (max-width:640px){html{font-size:14px}}@media (max-width:480px){html{font-size:12px}}body{position:relative;margin:0;padding:0;overflow-x:hidden}img{width:100%;height:auto}", "",{"version":3,"sources":["common.scss"],"names":[],"mappings":"AAAA,SACE,gBAAiB,CACjB,eAAkB,CAEpB,eACE,mBAAa,CAAb,YAAa,CACb,wBAA8B,CAA9B,6BAA8B,CAC9B,cAAe,CACf,eAAgB,CAChB,WAAc,CACd,yBACE,wBACE,uBAAuB,CAAvB,sBAAyB,CAAE,CAC/B,wBACE,gBAAmB,CACnB,yBACE,wBACE,2BAAsB,CAAtB,4BAAsB,CAAtB,qBAAsB,CACtB,wBAAmB,CAAnB,kBAAqB,CAAE,CAC3B,yBACE,wBACE,cAAiB,CAAE,CAE3B,KACE,cAAe,CACf,iBAAoB,CACpB,yBACE,KACE,cAAiB,CAAE,CACvB,yBACE,KACE,cAAiB,CAAE,CAEzB,KACE,iBAAkB,CAClB,QAAS,CACT,SAAU,CACV,iBAAoB,CAEtB,IACE,UAAW,CACX,WAAc","file":"common.scss","sourcesContent":[".wrapper {\n  max-width: 1366px;\n  min-width: 320px; }\n\n.inner-wrapper {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  max-width: 824px;\n  margin: auto; }\n  @media (max-width: 768px) {\n    .inner-wrapper_contacts {\n      justify-content: center; } }\n  .inner-wrapper_about-us {\n    flex-wrap: nowrap; }\n    @media (max-width: 800px) {\n      .inner-wrapper_about-us {\n        flex-direction: column;\n        align-items: center; } }\n    @media (max-width: 480px) {\n      .inner-wrapper_about-us {\n        padding: 0 10px; } }\n\nhtml {\n  font-size: 16px;\n  overflow-x: hidden; }\n  @media (max-width: 640px) {\n    html {\n      font-size: 14px; } }\n  @media (max-width: 480px) {\n    html {\n      font-size: 12px; } }\n\nbody {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden; }\n\nimg {\n  width: 100%;\n  height: auto; }\n"]}]);


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
exports.push([module.i, "@font-face{font-family:Roboto;font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL___0___ + ");src:local(\"Roboto\"),local(\"Roboto-Regular\"),url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___4___ + ") format(\"truety    \"),url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\")}@font-face{font-family:Roboto;font-style:normal;font-weight:500;src:url(" + ___CSS_LOADER_URL___6___ + ");src:local(\"Roboto Medium\"),local(\"Roboto-Medium\"),url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\")}@font-face{font-family:Roboto;font-style:normal;font-weight:700;src:url(" + ___CSS_LOADER_URL___12___ + ");src:local(\"Roboto Bold\"),local(\"Roboto-Bold\"),url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\")}@font-face{font-family:Playfair Display;font-style:normal;font-weight:700;src:url(" + ___CSS_LOADER_URL___18___ + ");src:local(\"Playfair Display Bold\"),local(\"PlayfairDisplay-Bold\"),url(" + ___CSS_LOADER_URL___19___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___20___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___21___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___22___ + ") format(\"    uetype\"),url(" + ___CSS_LOADER_URL___23___ + ") format(\"svg\")}", "",{"version":3,"sources":["fonts.scss"],"names":[],"mappings":"AACA,WACE,kBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,iCAAiD,CAEjD,+RACiB,CAGnB,WACE,kBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,iCAA6C,CAE7C,qSACiB,CAGnB,WACE,kBAAqB,CACrB,iBAAkB,CAClB,eAAgB,CAChB,kCAA6C,CAE7C,oSACiB,CAGnB,WACE,4BAA+B,CAC/B,iBAAkB,CAClB,eAAgB,CAChB,kCAAuD,CAEvD,yTACiB","file":"fonts.scss","sourcesContent":["/* roboto-regular - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"../fonts/roboto-v20-latin-regular.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto\"), local(\"Roboto-Regular\"), url(\"../fonts/roboto-v20-latin-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto-v20-latin-regular.woff2\") format(\"woff2\"), url(\"../fonts/roboto-v20-latin-regular.woff\") format(\"woff\"), url(\"../fonts/roboto-v20-latin-regular.ttf\") format(\"truety    \"), url(\"../fonts/roboto-v20-latin-regular.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* roboto-500 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"../fonts/roboto-v20-latin-500.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Medium\"), local(\"Roboto-Medium\"), url(\"../fonts/roboto-v20-latin-500.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto-v20-latin-500.woff2\") format(\"woff2\"), url(\"../fonts/roboto-v20-latin-500.woff\") format(\"woff\"), url(\"../fonts/roboto-v20-latin-500.ttf\") format(\"truetype\"), url(\"../fonts/roboto-v20-latin-500.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* roboto-700 - latin */\n@font-face {\n  font-family: 'Roboto';\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"../fonts/roboto-v20-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Roboto Bold\"), local(\"Roboto-Bold\"), url(\"../fonts/roboto-v20-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/roboto-v20-latin-700.woff2\") format(\"woff2\"), url(\"../fonts/roboto-v20-latin-700.woff\") format(\"woff\"), url(\"../fonts/roboto-v20-latin-700.ttf\") format(\"truetype\"), url(\"../fonts/roboto-v20-latin-700.svg#Roboto\") format(\"svg\");\n  /* Legacy iOS */ }\n\n/* playfair-display-700 - latin */\n@font-face {\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 700;\n  src: url(\"../fonts/playfair-display-v15-latin-700.eot\");\n  /* IE9 Compat Modes */\n  src: local(\"Playfair Display Bold\"), local(\"PlayfairDisplay-Bold\"), url(\"../fonts/playfair-display-v15-latin-700.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/playfair-display-v15-latin-700.woff2\") format(\"woff2\"), url(\"../fonts/playfair-display-v15-latin-700.woff\") format(\"woff\"), url(\"../fonts/playfair-display-v15-latin-700.ttf\") format(\"    uetype\"), url(\"../fonts/playfair-display-v15-latin-700.svg#PlayfairDisplay\") format(\"svg\");\n  /* Legacy iOS */ }\n"]}]);


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

/***/ "./src/blocks/about-us/about-us.js":
/*!*****************************************!*\
  !*** ./src/blocks/about-us/about-us.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_us_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us.scss */ "./src/blocks/about-us/about-us.scss");
/* harmony import */ var _about_us_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_about_us_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/about-us/about-us.scss":
/*!*******************************************!*\
  !*** ./src/blocks/about-us/about-us.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./about-us.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/about-us/about-us.scss");

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

/***/ "./src/blocks/block-contacts/block-contacts.js":
/*!*****************************************************!*\
  !*** ./src/blocks/block-contacts/block-contacts.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_contacts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-contacts.scss */ "./src/blocks/block-contacts/block-contacts.scss");
/* harmony import */ var _block_contacts_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_block_contacts_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/blocks/block-contacts/block-contacts.scss":
/*!*******************************************************!*\
  !*** ./src/blocks/block-contacts/block-contacts.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./block-contacts.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/blocks/block-contacts/block-contacts.scss");

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

/***/ "./src/blocks/block-contacts/img/bg.jpg":
/*!**********************************************!*\
  !*** ./src/blocks/block-contacts/img/bg.jpg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/bg.jpg";

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

/***/ "./src/components/burger/burger.js":
/*!*****************************************!*\
  !*** ./src/components/burger/burger.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.scss */ "./src/components/burger/burger.scss");
/* harmony import */ var _burger_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_scss__WEBPACK_IMPORTED_MODULE_0__);

var burgers = document.querySelectorAll('.burger');
var wrapper = document.querySelector('.main-nav__wrapper');
var forEach = Array.prototype.forEach;
forEach.call(burgers, function (burger) {
  burger.addEventListener('click', function () {
    forEach.call(burgers, function (burg) {
      burg.classList.toggle('burger_close');
    });
    wrapper.classList.toggle('main-nav__wrapper_opened');
    wrapper.classList.add('main-nav__wrapper_animated');
  });
});

/***/ }),

/***/ "./src/components/burger/burger.scss":
/*!*******************************************!*\
  !*** ./src/components/burger/burger.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./burger.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/burger/burger.scss");

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

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./src/components/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./button.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/button/button.scss");

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

/***/ "./src/components/contact/contact.js":
/*!*******************************************!*\
  !*** ./src/components/contact/contact.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.scss */ "./src/components/contact/contact.scss");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_contact_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/contact/contact.scss":
/*!*********************************************!*\
  !*** ./src/components/contact/contact.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./contact.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/contact/contact.scss");

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

/***/ "./src/components/main-nav/main-nav.js":
/*!*********************************************!*\
  !*** ./src/components/main-nav/main-nav.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-nav.scss */ "./src/components/main-nav/main-nav.scss");
/* harmony import */ var _main_nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_nav_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/main-nav/main-nav.scss":
/*!***********************************************!*\
  !*** ./src/components/main-nav/main-nav.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./main-nav.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/main-nav/main-nav.scss");

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

/***/ "./src/components/message-form/message-form.js":
/*!*****************************************************!*\
  !*** ./src/components/message-form/message-form.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_form_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-form.scss */ "./src/components/message-form/message-form.scss");
/* harmony import */ var _message_form_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_message_form_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/message-form/message-form.scss":
/*!*******************************************************!*\
  !*** ./src/components/message-form/message-form.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./message-form.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/message-form/message-form.scss");

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
/* harmony import */ var _components_main_nav_main_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/main-nav/main-nav */ "./src/components/main-nav/main-nav.js");
/* harmony import */ var _components_contact_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/contact/contact */ "./src/components/contact/contact.js");
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/burger/burger */ "./src/components/burger/burger.js");
/* harmony import */ var _blocks_block_contacts_block_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/block-contacts/block-contacts */ "./src/blocks/block-contacts/block-contacts.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/button/button */ "./src/components/button/button.js");
/* harmony import */ var _components_message_form_message_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/message-form/message-form */ "./src/components/message-form/message-form.js");
/* harmony import */ var _blocks_about_us_about_us__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../blocks/about-us/about-us */ "./src/blocks/about-us/about-us.js");












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