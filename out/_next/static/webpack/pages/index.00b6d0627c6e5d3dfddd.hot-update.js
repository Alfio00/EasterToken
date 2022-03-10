webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/software/Testimonial/index.js":
/*!****************************************************!*\
  !*** ./src/sections/software/Testimonial/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-charts */ \"../../../../node_modules/react-google-charts/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/alessioalfieri/Desktop/Sandar React Files 3/sandar-next-files/sandar-next/src/sections/software/Testimonial/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar data = [[\"Task\", \"Hours per Day\"], [\"Work\", 11], [\"Eat\", 2], [\"Commute\", 2], [\"Watch TV\", 2], [\"Sleep\", 7]];\nvar options = {\n  title: 'Token Supply Distribution',\n  pieHole: 0.5,\n  legend: {\n    position: 'right',\n    alignment: 'center'\n  },\n  pieSliceText: 'none',\n  colors: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],\n  backgroundColor: {\n    fill: 'trasparent'\n  }\n};\nvar options2 = {\n  title: 'Buy/Sell Taxes',\n  pieHole: 0.5,\n  legend: {\n    position: 'right',\n    alignment: 'center'\n  },\n  pieSliceText: 'none',\n  colors: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']\n};\n\nvar TestimonialSection = function TestimonialSection() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"section__heading text-center\",\n    id: \"tokenomics\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 1\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 6\n    }\n  }, \"Tokenomics\")), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"col-6\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 3\n    }\n  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], {\n    chartType: \"PieChart\",\n    data: data,\n    options: options,\n    height: \"100%\",\n    width: \"1000px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  })), __jsx(\"div\", {\n    className: \"col-6 chart2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 3\n    }\n  }, __jsx(react_google_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], {\n    chartType: \"PieChart\",\n    data: data,\n    options: options2,\n    height: \"550px\",\n    width: \"800px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }))));\n};\n\n_c = TestimonialSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TestimonialSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"TestimonialSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NvZnR3YXJlL1Rlc3RpbW9uaWFsL2luZGV4LmpzP2ZlZTIiXSwibmFtZXMiOlsiZGF0YSIsIm9wdGlvbnMiLCJ0aXRsZSIsInBpZUhvbGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImFsaWdubWVudCIsInBpZVNsaWNlVGV4dCIsImNvbG9ycyIsImJhY2tncm91bmRDb2xvciIsImZpbGwiLCJvcHRpb25zMiIsIlRlc3RpbW9uaWFsU2VjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBSUEsSUFBSSxHQUFHLENBQ1QsQ0FBQyxNQUFELEVBQVMsZUFBVCxDQURTLEVBRVQsQ0FBQyxNQUFELEVBQVMsRUFBVCxDQUZTLEVBR1QsQ0FBQyxLQUFELEVBQVEsQ0FBUixDQUhTLEVBSVQsQ0FBQyxTQUFELEVBQVksQ0FBWixDQUpTLEVBS1QsQ0FBQyxVQUFELEVBQWEsQ0FBYixDQUxTLEVBTVQsQ0FBQyxPQUFELEVBQVUsQ0FBVixDQU5TLENBQVg7QUFTQSxJQUFJQyxPQUFPLEdBQUc7QUFDWkMsT0FBSyxFQUFFLDJCQURLO0FBRVpDLFNBQU8sRUFBRSxHQUZHO0FBR1pDLFFBQU0sRUFBRTtBQUNOQyxZQUFRLEVBQUUsT0FESjtBQUVOQyxhQUFTLEVBQUU7QUFGTCxHQUhJO0FBT1pDLGNBQVksRUFBRSxNQVBGO0FBUVpDLFFBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLENBUkk7QUFTWkMsaUJBQWUsRUFBQztBQUNkQyxRQUFJLEVBQUU7QUFEUTtBQVRKLENBQWQ7QUFjQSxJQUFJQyxRQUFRLEdBQUc7QUFDYlQsT0FBSyxFQUFFLGdCQURNO0FBRWJDLFNBQU8sRUFBRSxHQUZJO0FBR2JDLFFBQU0sRUFBRTtBQUNOQyxZQUFRLEVBQUUsT0FESjtBQUVOQyxhQUFTLEVBQUU7QUFGTCxHQUhLO0FBT2JDLGNBQVksRUFBRSxNQVBEO0FBUWJDLFFBQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDO0FBUkssQ0FBZjs7QUFXQSxJQUFNSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFDL0IsU0FDRSxtRUFDSjtBQUFLLGFBQVMsRUFBQyw4QkFBZjtBQUE4QyxNQUFFLEVBQUMsWUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREwsQ0FESSxFQUlGO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDQSxhQUFTLEVBQUMsVUFEVjtBQUVBLFFBQUksRUFBRVosSUFGTjtBQUdBLFdBQU8sRUFBRUMsT0FIVDtBQUlBLFVBQU0sRUFBRSxNQUpSO0FBS0EsU0FBSyxFQUFDLFFBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREEsRUFVQTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0EsYUFBUyxFQUFDLFVBRFY7QUFFQSxRQUFJLEVBQUVELElBRk47QUFHQSxXQUFPLEVBQUVXLFFBSFQ7QUFJQSxVQUFNLEVBQUMsT0FKUDtBQUtBLFNBQUssRUFBQyxPQUxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZBLENBSkUsQ0FERjtBQTJCRCxDQTVCRDs7S0FBTUMsa0I7QUE4QlNBLGlGQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL3NvZnR3YXJlL1Rlc3RpbW9uaWFsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJ3JlYWN0LWdvb2dsZS1jaGFydHMnO1xuaW1wb3J0ICdjaGFydC5qcy9hdXRvJztcblxuXG52YXIgZGF0YSA9IFtcbiAgW1wiVGFza1wiLCBcIkhvdXJzIHBlciBEYXlcIl0sXG4gIFtcIldvcmtcIiwgMTFdLFxuICBbXCJFYXRcIiwgMl0sXG4gIFtcIkNvbW11dGVcIiwgMl0sXG4gIFtcIldhdGNoIFRWXCIsIDJdLFxuICBbXCJTbGVlcFwiLCA3XSxcbl07XG5cbnZhciBvcHRpb25zID0ge1xuICB0aXRsZTogJ1Rva2VuIFN1cHBseSBEaXN0cmlidXRpb24nLFxuICBwaWVIb2xlOiAwLjUsXG4gIGxlZ2VuZDoge1xuICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgIGFsaWdubWVudDogJ2NlbnRlcicsXG4gIH0sXG4gIHBpZVNsaWNlVGV4dDogJ25vbmUnLFxuICBjb2xvcnM6IFsnIzAwM2Y1YycsICcjNTg1MDhkJywgJyNiYzUwOTAnLCAnI2ZmNjM2MScsICcjZmZhNjAwJ10sXG4gIGJhY2tncm91bmRDb2xvcjp7XG4gICAgZmlsbDogJ3RyYXNwYXJlbnQnXG4gIH1cbn1cblxudmFyIG9wdGlvbnMyID0ge1xuICB0aXRsZTogJ0J1eS9TZWxsIFRheGVzJyxcbiAgcGllSG9sZTogMC41LFxuICBsZWdlbmQ6IHtcbiAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICBhbGlnbm1lbnQ6ICdjZW50ZXInLFxuICB9LFxuICBwaWVTbGljZVRleHQ6ICdub25lJyxcbiAgY29sb3JzOiBbJyMwMDNmNWMnLCAnIzU4NTA4ZCcsICcjYmM1MDkwJywgJyNmZjYzNjEnLCAnI2ZmYTYwMCddXG59XG5cbmNvbnN0IFRlc3RpbW9uaWFsU2VjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuKCBcbiAgICA8PlxuPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19oZWFkaW5nIHRleHQtY2VudGVyXCIgaWQ9XCJ0b2tlbm9taWNzXCI+XG4gICAgIDxoMj5Ub2tlbm9taWNzPC9oMj5cbjwvZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgPENoYXJ0XG4gICAgY2hhcnRUeXBlPVwiUGllQ2hhcnRcIlxuICAgIGRhdGE9e2RhdGF9XG4gICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICBoZWlnaHQ9ICcxMDAlJ1xuICAgIHdpZHRoPVwiMTAwMHB4XCJcbiAgICAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjaGFydDJcIj5cbiAgICA8Q2hhcnRcbiAgICBjaGFydFR5cGU9XCJQaWVDaGFydFwiXG4gICAgZGF0YT17ZGF0YX1cbiAgICBvcHRpb25zPXtvcHRpb25zMn1cbiAgICBoZWlnaHQ9JzU1MHB4J1xuICAgIHdpZHRoPSc4MDBweCcvPlxuICA8L2Rpdj5cbjwvZGl2PlxuPC8+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbFNlY3Rpb25cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sections/software/Testimonial/index.js\n");

/***/ })

})