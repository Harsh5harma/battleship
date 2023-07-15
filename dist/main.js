/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/backimg.jpg */ \"./src/images/backimg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n  margin:0px;\n}\nbody{\n  color:rgba(211, 211, 211, 1);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n.header{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  width:100vw;\n  height:7.5vh;\n  background-color: rgba(32, 32, 32, 1);\n  box-shadow: 0px 9px 10px 2px rgba(0, 0, 0, 0.25);\n  z-index: 1;\n}\n.main{\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: 100% 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-grow: 1;\n}\n\n.gridContainer{\n  display: flex;\n  flex-direction: column;\n  width:552px;\n  height:551px;\n  align-items: flex-end;\n}\n\n.gridColMarks{\n  width:501px;\n  height:50px;\n  background-color: black;\n}\n\n.gridSubDiv{\n  width:100%;\n  height:501px;\n  display: flex;\n}\n\n.gridRowMarks{\n  width:50.15px;\n  height:100%;\n  background-color: black;\n}\n.grid{\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  background-color: rgba(217, 217, 217, 0.738);\n  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.37);\n  width: 501px;\n  height:501px;\n}\n\n.gridElement{\n  border:1px solid rgba(32, 32, 32, 0.34);\n}\n.gridColMarks{\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-size: 32px;\n}\n\n.gridRowMarks{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 32px;\n}\n\n.fcontainer{\n  margin-left:200px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 982px;\n  height:809px;\n}\n\n.sContainer{\n  width: 552px;\n  height:809px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.nameParent{\n  display: flex;\n  justify-content: space-around;\n  font-size: 36px;\n}\n.name{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nameInput{\n  color:black;\n  background-color: rgba(217, 217, 217, 1);\n  width:306px;\n  height:54px;\n  margin-left:20px;\n  padding-left:10px;\n  font-size: 32px;\n  border-radius: 7px;\n}\n\n.infoTextParent{\n  height:91px;\n  font-weight: 800;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.whatShip{\n  font-size:40px;\n  display: flex;\n  justify-content: center; \n  align-items: center; \n}\n.whatLength{\n  font-size:28px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.cContainer{\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 340px;\n  height:333px;\n}\n\n.cTitle{\n  display: flex;\n  justify-content: flex-end;\n  margin-right: 50px;\n  align-items: center;\n  font-size:36px;\n}\n\n.posContainer{\n  display: grid;\n  grid-template-columns: repeat(4, 85px);\n  grid-template-rows: repeat(2, 45px);\n  row-gap: 27px;\n}\n\n.coordtxt{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size:20px;\n}\n\n.coordinput{\n  color:black;\n  font-size: 20px;\n  padding-left: 10px;\n  background-color: rgba(217, 217, 217, 1);\n}\n\n.placeBtn{\n  color:black;\n  font-weight: bold;\n  background-color: rgba(217, 217, 217, 1);\n  width: 105px;\n  height:45px;\n  font-size: 20px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n  margin-right: 75px;\n  border:0px;\n}\n\n.board{\n  display: flex;\n  flex-direction: column;\n\n  height: 704px;\n  font-size: 40px;\n  justify-content: space-between;\n}\n.pName, .pStatus{\n  display: flex;\n  justify-content: center;\n  align-tracks: center;\n}\n.pStatus{\n  font-size: 32px;\n}\n.papadiv{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width:1302px;\n}\n.minipapadiv{\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.moveStatus{\n  font-size: 40px;\n  margin-top: 10px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_elements_SetupForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-elements/SetupForm.js */ \"./src/ui-elements/SetupForm.js\");\n/* harmony import */ var _ui_elements_playerBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-elements/playerBoard.js */ \"./src/ui-elements/playerBoard.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst loadPage = (()=> {\n  const body = document.querySelector('body');\n  const header = document.createElement('div');\n  header.className = 'header';\n  header.textContent = 'Battleship';\n  const main = document.createElement('div');\n  main.className = 'main';\n  const placementForm = (0,_ui_elements_SetupForm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  placementForm.classList.add('placementForm');\n  placementForm.classList.toggle('active');\n  body.appendChild(header);\n  main.appendChild(placementForm);\n  body.appendChild(main);\n  const startBtn = document.querySelector('.placeBtn');\n  startBtn.addEventListener('click', ()=> {\n    const temp = (0,_ui_elements_playerBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('Harsh', 'AI');\n    temp.classList.add('temp');\n    main.replaceChild(temp, placementForm);\n  });\n})();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ui-elements/SetupForm.js":
/*!**************************************!*\
  !*** ./src/ui-elements/SetupForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ nameAndBoard)\n/* harmony export */ });\n/* harmony import */ var _numberedGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberedGrid */ \"./src/ui-elements/numberedGrid.js\");\n/* harmony import */ var _numberedGrid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_numberedGrid__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable require-jsdoc */\n\n\nfunction nameAndBoard() {\n  const fcontainer = document.createElement('div');\n  fcontainer.classList.add('fcontainer');\n\n  // 1\n  const sContainer = document.createElement('div');\n  sContainer.classList.add('sContainer');\n\n  // 1.1\n  const nameParent = document.createElement('div');\n  nameParent.classList.add('nameParent');\n  const name = document.createElement('div');\n  name.classList.add('name');\n  name.textContent = 'Player Name: ';\n  const nameInput = document.createElement('input');\n  nameInput.classList.add('nameInput');\n\n  nameInput.type = 'text';\n  nameInput.maxLength = 10;\n  nameInput.placeholder = 'Name';\n  nameInput.default = 'Player 1';\n  nameParent.append(name, nameInput);\n\n  // 1.2\n  const placementGrid = _numberedGrid__WEBPACK_IMPORTED_MODULE_0___default()();\n  placementGrid.classList.add('placementGrid');\n\n  // 1.3\n  const infoTextParent = document.createElement('div');\n  infoTextParent.classList.add('infoTextParent');\n  const whatShip = document.createElement('div');\n  whatShip.classList.add('whatShip');\n  const whatLength = document.createElement('div');\n  whatLength.classList.add('whatLength');\n  whatShip.textContent = 'Place Carrier!';\n  whatLength.textContent = 'Length: 5';\n  infoTextParent.append(whatShip, whatLength);\n\n  sContainer.append(nameParent, placementGrid, infoTextParent);\n\n  // 2\n  const cContainer = document.createElement('div');\n  cContainer.classList.add('cContainer');\n\n  // 2.1\n  const cTitle = document.createElement('div');\n  cTitle.classList.add('cTitle');\n  cTitle.textContent = 'Coordinates';\n\n  // 2.2\n  const posContainer = document.createElement('div');\n  posContainer.classList.add('posContainer');\n\n  const x1Text = document.createElement('div');\n  x1Text.textContent = 'X1:';\n  x1Text.classList.add('coordtxt', 'x1Text');\n  const x1 = document.createElement('input');\n  x1.classList.add('coordinput', 'x1');\n  x1.type = 'number';\n  x1.maxLength = 2;\n  x1.max = 10;\n  x1.min = 1;\n  x1.placeholder = 'X1';\n\n  const x2Text = document.createElement('div');\n  x2Text.textContent = 'X2:';\n  x2Text.classList.add('coordtxt', 'x2Text');\n  const x2 = document.createElement('input');\n  x2.classList.add('coordinput', 'x2');\n  x2.type = 'number';\n  x2.maxLength = 2;\n  x2.max = 10;\n  x2.min = 1;\n  x2.placeholder = 'X2';\n\n  const y1Text = document.createElement('div');\n  y1Text.textContent = 'Y1:';\n  y1Text.classList.add('coordtxt', 'y1Text');\n  const y1 = document.createElement('input');\n  y1.classList.add('coordinput', 'y1');\n  y1.type = 'number';\n  y1.maxLength = 2;\n  y1.max = 10;\n  y1.min = 1;\n  y1.placeholder = 'Y1:';\n\n  const y2Text = document.createElement('div');\n  y2Text.textContent = 'Y2:';\n  y2Text.classList.add('coordtxt', 'y2Text');\n  const y2 = document.createElement('input');\n  y2.classList.add('coordinput', 'y2');\n  y2.type = 'number';\n  y2.maxLength = 2;\n  y2.max = 10;\n  y2.min = 1;\n  y2.placeholder = 'Y2';\n\n  posContainer.append(x1Text, x1, x2Text, x2, y1Text, y1, y2Text, y2);\n\n  // 3\n  const placeBtn = document.createElement('button');\n  placeBtn.classList.add('placeBtn');\n  placeBtn.type = 'number';\n  placeBtn.textContent = 'Place';\n\n  cContainer.append(cTitle, posContainer, placeBtn);\n  fcontainer.append(sContainer, cContainer);\n\n  return fcontainer;\n};\n\n\n\n//# sourceURL=webpack://battleship/./src/ui-elements/SetupForm.js?");

/***/ }),

/***/ "./src/ui-elements/board.js":
/*!**********************************!*\
  !*** ./src/ui-elements/board.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _numberedGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numberedGrid */ \"./src/ui-elements/numberedGrid.js\");\n/* harmony import */ var _numberedGrid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_numberedGrid__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable require-jsdoc */\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(num='0', pname='defaultPlayer') {\n  const board = document.createElement('div');\n  board.classList.add('board', `board${num}`);\n  const pName = document.createElement('div');\n  pName.classList.add('pName');\n  pName.textContent = pname;\n  const pgrid = _numberedGrid__WEBPACK_IMPORTED_MODULE_0___default()();\n  pgrid.classList.add('pgrid');\n\n  const pStatus = document.createElement('div');\n  pStatus.classList.add('pStatus');\n  pStatus.textContent = 'placeholder';\n\n  board.append(pName, pgrid, pStatus);\n  return board;\n}\n\n\n//# sourceURL=webpack://battleship/./src/ui-elements/board.js?");

/***/ }),

/***/ "./src/ui-elements/numberedGrid.js":
/*!*****************************************!*\
  !*** ./src/ui-elements/numberedGrid.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/* eslint-disable max-len */\nconst gridGenerator = ()=> {\n  const gridContainer = document.createElement('div');\n  gridContainer.classList.add('gridContainer');\n  const gridColMarks = document.createElement('div');\n  gridColMarks.classList.add('gridColMarks');\n  const gridSubDiv = document.createElement('div');\n  gridSubDiv.classList.add('gridSubDiv');\n  const gridRowMarks = document.createElement('div');\n  gridRowMarks.classList.add('gridRowMarks');\n  const grid = document.createElement('div');\n  grid.classList.add('grid');\n  gridSubDiv.append(gridRowMarks, grid);\n  gridContainer.append(gridColMarks, gridSubDiv);\n\n  // edge cases are 0,0 and 9,9\n  for (let col = 0; col<10; col++ ) {\n    for (let row = 0; row<10; row++) {\n      const temp = document.createElement('div');\n      temp.classList.add('gridElement', String(col), String(row));\n      grid.append(temp);\n    }\n  };\n  for (let col = 0; col<10; col++ ) {\n    const temp = document.createElement('div');\n    temp.classList.add('colNumbering');\n    temp.textContent = String(col+1);\n    gridColMarks.append(temp);\n  };\n\n  for (let row = 0; row<10; row++) {\n    const temp = document.createElement('div');\n    temp.classList.add('rowNumbering');\n    temp.textContent = String(row+1);\n    gridRowMarks.append(temp);\n  }\n  return gridContainer;\n};\n\nmodule.exports = gridGenerator;\n\n\n//# sourceURL=webpack://battleship/./src/ui-elements/numberedGrid.js?");

/***/ }),

/***/ "./src/ui-elements/playerBoard.js":
/*!****************************************!*\
  !*** ./src/ui-elements/playerBoard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ playerBoard)\n/* harmony export */ });\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/ui-elements/board.js\");\n/* eslint-disable require-jsdoc */\n\n\nfunction playerBoard(player1='', player2 = '') {\n  const papadiv = document.createElement('div');\n  papadiv.classList.add('papadiv');\n  const minipapadiv = document.createElement('div');\n  minipapadiv.classList.add('minipapadiv');\n  const temp = (0,_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, player1);\n  const temp2 = (0,_board__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, 'AI');\n  minipapadiv.append(temp, temp2);\n\n  const moveStatus = document.createElement('div');\n  moveStatus.classList.add('moveStatus');\n  moveStatus.textContent = 'some text here';\n  papadiv.append(minipapadiv, moveStatus);\n  return papadiv;\n};\n\n\n//# sourceURL=webpack://battleship/./src/ui-elements/playerBoard.js?");

/***/ }),

/***/ "./src/images/backimg.jpg":
/*!********************************!*\
  !*** ./src/images/backimg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e6bd71d5bacad7ba5699.jpg\";\n\n//# sourceURL=webpack://battleship/./src/images/backimg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;