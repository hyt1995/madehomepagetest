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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/GuidanceStore.js":
/*!********************************!*\
  !*** ./pages/GuidanceStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/gksdudxkr/\\uC81C\\uB85C\\uCD08/homepage/pages/GuidanceStore.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst {\n  Title\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"];\nconst style = {\n  background: '#0092ff',\n  padding: '8px 0'\n};\nconst array = ['안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양'];\n\nconst GuidanceStore = () => {\n  const DisplayArray = array.map((result, key) => {\n    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      span: 6,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      style: style,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }\n    }, __jsx(Title, {\n      level: 2,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }\n    }, result)));\n  });\n  return __jsx(\"div\", {\n    style: {\n      backgroundColor: \"#000000\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n    autoplay: true,\n    effect: \"fade\",\n    style: {\n      textAlign: \"center\",\n      height: \"350px\",\n      lineHeight: \"200px\",\n      background: \"#364d79\",\n      overflow: \"hidden\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"1\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, \"2\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"3\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, \"4\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    gutter: [{\n      xs: 8,\n      sm: 16,\n      md: 24,\n      lg: 32\n    }, {\n      xs: 8,\n      sm: 16,\n      md: 24,\n      lg: 32\n    }],\n    style: {\n      padding: \"100px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, DisplayArray));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuidanceStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9HdWlkYW5jZVN0b3JlLmpzP2M3YTIiXSwibmFtZXMiOlsiVGl0bGUiLCJUeXBvZ3JhcGh5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImFycmF5IiwiR3VpZGFuY2VTdG9yZSIsIkRpc3BsYXlBcnJheSIsIm1hcCIsInJlc3VsdCIsImtleSIsImJhY2tncm91bmRDb2xvciIsInRleHRBbGlnbiIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJvdmVyZmxvdyIsInhzIiwic20iLCJtZCIsImxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU07QUFBRUE7QUFBRixJQUFZQywrQ0FBbEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFBRUMsWUFBVSxFQUFFLFNBQWQ7QUFBeUJDLFNBQU8sRUFBRTtBQUFsQyxDQUFkO0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLEVBQWdCLElBQWhCLEVBQXFCLElBQXJCLEVBQTBCLElBQTFCLEVBQStCLElBQS9CLEVBQW9DLElBQXBDLEVBQXlDLElBQXpDLEVBQThDLElBQTlDLEVBQW1ELElBQW5ELEVBQXdELElBQXhELEVBQTZELElBQTdELEVBQWtFLElBQWxFLEVBQXVFLElBQXZFLEVBQTRFLElBQTVFLEVBQWlGLElBQWpGLENBQWQ7O0FBRUEsTUFBTUMsYUFBYSxHQUFDLE1BQUk7QUFFcEIsUUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxDQUFDQyxNQUFELEVBQVFDLEdBQVIsS0FBYztBQUN6QyxXQUNJLE1BQUMsd0NBQUQ7QUFBSyxVQUFJLEVBQUUsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxXQUFLLEVBQUVSLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsS0FBRDtBQUFPLFdBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS08sTUFETCxDQURKLENBREosQ0FESjtBQVNILEdBVm9CLENBQXJCO0FBWUEsU0FDSTtBQUFLLFNBQUssRUFBRTtBQUFDRSxxQkFBZSxFQUFDO0FBQWpCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkNBQUQ7QUFBVSxZQUFRLE1BQWxCO0FBQW1CLFVBQU0sRUFBQyxNQUExQjtBQUFpQyxTQUFLLEVBQUU7QUFBQ0MsZUFBUyxFQUFFLFFBQVo7QUFBcUJDLFlBQU0sRUFBRSxPQUE3QjtBQUFxQ0MsZ0JBQVUsRUFBRSxPQUFqRDtBQUF5RFgsZ0JBQVUsRUFBRSxTQUFyRTtBQUErRVksY0FBUSxFQUFFO0FBQXpGLEtBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBLENBREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBLENBSkosRUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBLENBUEosRUFVSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURBLENBVkosQ0FESixFQWVJLE1BQUMsd0NBQUQ7QUFBSyxVQUFNLEVBQUUsQ0FBQztBQUFFQyxRQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFFLEVBQUUsRUFBYjtBQUFpQkMsUUFBRSxFQUFFLEVBQXJCO0FBQXlCQyxRQUFFLEVBQUU7QUFBN0IsS0FBRCxFQUFtQztBQUFFSCxRQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFFLEVBQUUsRUFBYjtBQUFpQkMsUUFBRSxFQUFFLEVBQXJCO0FBQXlCQyxRQUFFLEVBQUU7QUFBN0IsS0FBbkMsQ0FBYjtBQUFvRixTQUFLLEVBQUU7QUFBQ2YsYUFBTyxFQUFDO0FBQVQsS0FBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJRyxZQURKLENBZkosQ0FESjtBQXFCSCxDQW5DRDs7QUF5Q2VELDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvR3VpZGFuY2VTdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3csIENvbCxUeXBvZ3JhcGh5LENhcm91c2VsIH0gZnJvbSAnYW50ZCc7XG5jb25zdCB7IFRpdGxlIH0gPSBUeXBvZ3JhcGh5O1xuY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmQ6ICcjMDA5MmZmJywgcGFkZGluZzogJzhweCAwJyB9O1xuXG5jb25zdCBhcnJheSA9IFsn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJywn7JWI7JaRJ11cblxuY29uc3QgR3VpZGFuY2VTdG9yZT0oKT0+e1xuXG4gICAgY29uc3QgRGlzcGxheUFycmF5ID0gYXJyYXkubWFwKChyZXN1bHQsa2V5KT0+e1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8Q29sIHNwYW49ezZ9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlIGxldmVsPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHR9XG4gICAgICAgICAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCIjMDAwMDAwXCJ9fSA+XG4gICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgZWZmZWN0PVwiZmFkZVwiIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwiLGhlaWdodDogXCIzNTBweFwiLGxpbmVIZWlnaHQ6IFwiMjAwcHhcIixiYWNrZ3JvdW5kOiBcIiMzNjRkNzlcIixvdmVyZmxvdzogXCJoaWRkZW5cIn19PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPjE8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPjI8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPjM8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPjQ8L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbeyB4czogOCwgc206IDE2LCBtZDogMjQsIGxnOiAzMiB9LHsgeHM6IDgsIHNtOiAxNiwgbWQ6IDI0LCBsZzogMzIgfV19IHN0eWxlPXt7cGFkZGluZzpcIjEwMHB4XCJ9fSA+XG4gICAgICAgICAgICAgICB7RGlzcGxheUFycmF5fVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBHdWlkYW5jZVN0b3JlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/GuidanceStore.js\n");

/***/ }),

/***/ 6:
/*!**************************************!*\
  !*** multi ./pages/GuidanceStore.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gksdudxkr/제로초/homepage/pages/GuidanceStore.js */"./pages/GuidanceStore.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });