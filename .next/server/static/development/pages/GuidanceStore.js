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

/***/ "./pages/GuidanceStore.js":
/*!********************************!*\
  !*** ./pages/GuidanceStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/gksdudxkr/\\uC81C\\uB85C\\uCD08/homepage/pages/GuidanceStore.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst {\n  Title\n} = antd__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"];\nconst style = {\n  background: '#0092ff',\n  padding: '8px 0'\n};\nconst array = ['안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양', '안양'];\n\nconst GuidanceStore = () => {\n  const DisplayArray = array.map((result, key) => {\n    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      span: 6,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      style: style,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }\n    }, __jsx(Title, {\n      level: 2,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }\n    }, result)));\n  });\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n    autoplay: true,\n    effect: \"fade\",\n    style: {\n      textAlign: \"center\",\n      height: \"350px\",\n      lineHeight: \"200px\",\n      background: \"#364d79\",\n      overflow: \"hidden\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  }, \"1\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 17\n    }\n  }, \"2\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }\n  }, \"3\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 17\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 17\n    }\n  }, \"4\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    gutter: [{\n      xs: 8,\n      sm: 16,\n      md: 24,\n      lg: 32\n    }, {\n      xs: 8,\n      sm: 16,\n      md: 24,\n      lg: 32\n    }],\n    style: {\n      padding: \"100px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, DisplayArray));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuidanceStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9HdWlkYW5jZVN0b3JlLmpzP2M3YTIiXSwibmFtZXMiOlsiVGl0bGUiLCJUeXBvZ3JhcGh5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImFycmF5IiwiR3VpZGFuY2VTdG9yZSIsIkRpc3BsYXlBcnJheSIsIm1hcCIsInJlc3VsdCIsImtleSIsInRleHRBbGlnbiIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJvdmVyZmxvdyIsInhzIiwic20iLCJtZCIsImxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBLE1BQU07QUFBRUE7QUFBRixJQUFZQywrQ0FBbEI7QUFDQSxNQUFNQyxLQUFLLEdBQUc7QUFBRUMsWUFBVSxFQUFFLFNBQWQ7QUFBeUJDLFNBQU8sRUFBRTtBQUFsQyxDQUFkO0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLEVBQWdCLElBQWhCLEVBQXFCLElBQXJCLEVBQTBCLElBQTFCLEVBQStCLElBQS9CLEVBQW9DLElBQXBDLEVBQXlDLElBQXpDLEVBQThDLElBQTlDLEVBQW1ELElBQW5ELEVBQXdELElBQXhELEVBQTZELElBQTdELEVBQWtFLElBQWxFLEVBQXVFLElBQXZFLEVBQTRFLElBQTVFLEVBQWlGLElBQWpGLENBQWQ7O0FBRUEsTUFBTUMsYUFBYSxHQUFDLE1BQUk7QUFFcEIsUUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxDQUFDQyxNQUFELEVBQVFDLEdBQVIsS0FBYztBQUN6QyxXQUNJLE1BQUMsd0NBQUQ7QUFBSyxVQUFJLEVBQUUsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxXQUFLLEVBQUVSLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsS0FBRDtBQUFPLFdBQUssRUFBRSxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS08sTUFETCxDQURKLENBREosQ0FESjtBQVNILEdBVm9CLENBQXJCO0FBWUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFVLFlBQVEsTUFBbEI7QUFBbUIsVUFBTSxFQUFDLE1BQTFCO0FBQWlDLFNBQUssRUFBRTtBQUFDRSxlQUFTLEVBQUUsUUFBWjtBQUFxQkMsWUFBTSxFQUFFLE9BQTdCO0FBQXFDQyxnQkFBVSxFQUFFLE9BQWpEO0FBQXlEVixnQkFBVSxFQUFFLFNBQXJFO0FBQStFVyxjQUFRLEVBQUU7QUFBekYsS0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREEsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREEsQ0FKSixFQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREEsQ0FQSixFQVVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREEsQ0FWSixDQURKLEVBZUksTUFBQyx3Q0FBRDtBQUFLLFVBQU0sRUFBRSxDQUFDO0FBQUVDLFFBQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUUsRUFBRSxFQUFiO0FBQWlCQyxRQUFFLEVBQUUsRUFBckI7QUFBeUJDLFFBQUUsRUFBRTtBQUE3QixLQUFELEVBQW1DO0FBQUVILFFBQUUsRUFBRSxDQUFOO0FBQVNDLFFBQUUsRUFBRSxFQUFiO0FBQWlCQyxRQUFFLEVBQUUsRUFBckI7QUFBeUJDLFFBQUUsRUFBRTtBQUE3QixLQUFuQyxDQUFiO0FBQW9GLFNBQUssRUFBRTtBQUFDZCxhQUFPLEVBQUM7QUFBVCxLQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0lHLFlBREosQ0FmSixDQURKO0FBcUJILENBbkNEOztBQXlDZUQsNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9HdWlkYW5jZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdywgQ29sLFR5cG9ncmFwaHksQ2Fyb3VzZWwgfSBmcm9tICdhbnRkJztcbmNvbnN0IHsgVGl0bGUgfSA9IFR5cG9ncmFwaHk7XG5jb25zdCBzdHlsZSA9IHsgYmFja2dyb3VuZDogJyMwMDkyZmYnLCBwYWRkaW5nOiAnOHB4IDAnIH07XG5cbmNvbnN0IGFycmF5ID0gWyfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnLCfslYjslpEnXVxuXG5jb25zdCBHdWlkYW5jZVN0b3JlPSgpPT57XG5cbiAgICBjb25zdCBEaXNwbGF5QXJyYXkgPSBhcnJheS5tYXAoKHJlc3VsdCxrZXkpPT57XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxDb2wgc3Bhbj17Nn0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGUgbGV2ZWw9ezJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdH1cbiAgICAgICAgICAgICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICApXG4gICAgfSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDYXJvdXNlbCBhdXRvcGxheSBlZmZlY3Q9XCJmYWRlXCIgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsaGVpZ2h0OiBcIjM1MHB4XCIsbGluZUhlaWdodDogXCIyMDBweFwiLGJhY2tncm91bmQ6IFwiIzM2NGQ3OVwiLG92ZXJmbG93OiBcImhpZGRlblwifX0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+MTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+MjwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+MzwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+NDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9e1t7IHhzOiA4LCBzbTogMTYsIG1kOiAyNCwgbGc6IDMyIH0seyB4czogOCwgc206IDE2LCBtZDogMjQsIGxnOiAzMiB9XX0gc3R5bGU9e3twYWRkaW5nOlwiMTAwcHhcIn19ID5cbiAgICAgICAgICAgICAgIHtEaXNwbGF5QXJyYXl9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEd1aWRhbmNlU3RvcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/GuidanceStore.js\n");

/***/ }),

/***/ 5:
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