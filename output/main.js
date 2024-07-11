/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ \"./sass/style.scss\");\n/* harmony import */ var _js_sticky_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/sticky-header */ \"./js/sticky-header.js\");\n/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slider */ \"./js/slider.js\");\n//imports\r\n\r\n\r\n\r\n//--------------------------------\r\n\r\n(0,_js_slider__WEBPACK_IMPORTED_MODULE_2__.sliding)()\r\n\r\nwindow.addEventListener('scroll', _js_sticky_header__WEBPACK_IMPORTED_MODULE_1__.stickyHeader)\n\n//# sourceURL=webpack://book-shop/./index.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkCount: () => (/* binding */ checkCount),\n/* harmony export */   count: () => (/* binding */ count),\n/* harmony export */   goToSlide: () => (/* binding */ goToSlide),\n/* harmony export */   images: () => (/* binding */ images),\n/* harmony export */   previosCount: () => (/* binding */ previosCount),\n/* harmony export */   sliderButtons: () => (/* binding */ sliderButtons),\n/* harmony export */   sliding: () => (/* binding */ sliding)\n/* harmony export */ });\n\r\n\r\nconst sliderButtons = Array.from(document.getElementsByClassName(\"slider__button\"))\r\nconst images = Array.from(document.getElementsByClassName(\"slider__images\"))\r\n\r\nlet previosCount = 0\r\nlet count = 1\r\n\r\nfor (let sliderButton of sliderButtons){\r\n  sliderButton.addEventListener(\"click\", goToSlide)\r\n}\r\n\r\nfunction goToSlide(e){\r\n  previosCount = count\r\n  count = sliderButtons.indexOf(e.target)+1\r\n  console.log(count)\r\n  sliding()\r\n}\r\n\r\nfunction checkCount(count){\r\n  if (count>3){\r\n    return 1\r\n  }\r\n  if (count<1){\r\n    return 3\r\n  }\r\n  else {\r\n    return count\r\n  }\r\n}\r\n\r\nfunction sliding(){\r\n  if (previosCount!==count){\r\n    images[count-1].style.display = \"inline-block\"\r\n    sliderButtons[count-1].style.backgroundColor = \"#9E98DC\"\r\n  }\r\n\r\n  if(previosCount!==count&&previosCount!==0){\r\n    images[previosCount-1].style.display= \"none\"\r\n    sliderButtons[previosCount-1].style.backgroundColor = \"\"\r\n  }\r\n}\r\n\r\nlet intervalSliding = setInterval(()=>{\r\n  previosCount=count\r\n  count++\r\n  count = checkCount(count)\r\n  sliding()\r\n},5000)\n\n//# sourceURL=webpack://book-shop/./js/slider.js?");

/***/ }),

/***/ "./js/sticky-header.js":
/*!*****************************!*\
  !*** ./js/sticky-header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stickyHeader: () => (/* binding */ stickyHeader)\n/* harmony export */ });\n\r\n\r\nfunction stickyHeader(){\r\n  const headerContainer = document.querySelector(\".header-container\")\r\n  const header = document.querySelector(\".header\")\r\n  if (headerContainer.clientHeight<window.scrollY){\r\n    headerContainer.style.position = \"sticky\"\r\n    headerContainer.style.top = \"0\"\r\n    header.style.padding = \"15px 0\"\r\n  } else {\r\n    headerContainer.style.position = \"static\"\r\n    header.style.padding = \"\"\r\n  }\r\n}\n\n//# sourceURL=webpack://book-shop/./js/sticky-header.js?");

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://book-shop/./sass/style.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;