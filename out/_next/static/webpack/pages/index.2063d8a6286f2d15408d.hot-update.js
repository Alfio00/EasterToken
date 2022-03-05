webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PageWrapper/PageWrapper.js":
/*!***************************************************!*\
  !*** ./src/components/PageWrapper/PageWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PageWrapper; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../../../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ \"./src/components/Header/index.js\");\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Link */ \"./src/components/Link/index.js\");\n/* harmony import */ var _assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/favicon.png */ \"./src/assets/image/favicon.png\");\n/* harmony import */ var _assets_image_preloader_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/preloader.gif */ \"./src/assets/image/preloader.gif\");\n/* harmony import */ var _assets_image_preloader_gif__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_preloader_gif__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/alessioalfieri/Desktop/Sandar React Files 3/sandar-next-files/sandar-next/src/components/PageWrapper/PageWrapper.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar innerHeader = {\n  headerClasses: \"site-header--menu-center light-header position-relative\",\n  containerFluid: true,\n  darkLogo: true\n};\nvar Loader = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"PageWrapper__Loader\",\n  componentId: \"sc-1boqnlh-0\"\n})([\"position:fixed;top:0;left:0;width:100vw;height:100vh;background:#fff;z-index:9999999999;opacity:1;visibility:visible;transition:all 1.5s linear;transition:all 1.5s linear;display:flex;align-items:center;justify-content:center;&.inActive{opacity:0;visibility:hidden;}\"]);\n_c = Loader;\n\nvar InnerHeaderButton = function InnerHeaderButton() {\n  return __jsx(\"div\", {\n    className: \"inner-header-buttons ms-auto d-none d-xs-inline-flex pe-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"btn log-in-btn focus-reset\",\n    to: \"/sign-in\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"Login\"), __jsx(_Link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    className: \"btn sign-in-btn focus-reset\",\n    to: \"/sign-up\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"Sign In\"));\n};\n\n_c2 = InnerHeaderButton;\nfunction PageWrapper(_ref) {\n  _s();\n\n  var headerConfig = _ref.headerConfig,\n      HeaderButton = _ref.HeaderButton,\n      children = _ref.children,\n      innerPageHeader = _ref.innerPageHeader,\n      _ref$preloader = _ref.preloader,\n      preloader = _ref$preloader === void 0 ? true : _ref$preloader;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      visibleLoader = _React$useState2[0],\n      setVisibleLoader = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    setTimeout(function () {\n      setVisibleLoader(false);\n    }, 1000);\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Sandar\"), __jsx(\"link\", {\n    rel: \"icon\",\n    type: \"image/png\",\n    href: _assets_image_favicon_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  })), __jsx(Loader, {\n    id: \"loading\",\n    className: visibleLoader ? \"\" : \"inActive\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: _assets_image_preloader_gif__WEBPACK_IMPORTED_MODULE_7___default.a,\n    alt: \"loader\",\n    className: visibleLoader ? \"d-block\" : \"d-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"site-wrapper \".concat(preloader && visibleLoader ? \"\" : \"show\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    headerConfig: innerPageHeader ? innerHeader : headerConfig,\n    buttonBlock: innerPageHeader ? __jsx(InnerHeaderButton, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 42\n      }\n    }) : HeaderButton,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }\n  }), children));\n}\n\n_s(PageWrapper, \"QAEdgOCGo15JVD1AEtxMue0S7SM=\");\n\n_c3 = PageWrapper;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Loader\");\n$RefreshReg$(_c2, \"InnerHeaderButton\");\n$RefreshReg$(_c3, \"PageWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXIuanM/NmM1ZCJdLCJuYW1lcyI6WyJpbm5lckhlYWRlciIsImhlYWRlckNsYXNzZXMiLCJjb250YWluZXJGbHVpZCIsImRhcmtMb2dvIiwiTG9hZGVyIiwic3R5bGVkIiwiZGl2IiwiSW5uZXJIZWFkZXJCdXR0b24iLCJQYWdlV3JhcHBlciIsImhlYWRlckNvbmZpZyIsIkhlYWRlckJ1dHRvbiIsImNoaWxkcmVuIiwiaW5uZXJQYWdlSGVhZGVyIiwicHJlbG9hZGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpc2libGVMb2FkZXIiLCJzZXRWaXNpYmxlTG9hZGVyIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImZhdmljb24iLCJQcmVsb2FkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxXQUFXLEdBQUc7QUFDbEJDLGVBQWEsRUFBRSx5REFERztBQUVsQkMsZ0JBQWMsRUFBRSxJQUZFO0FBR2xCQyxVQUFRLEVBQUM7QUFIUyxDQUFwQjtBQU1BLElBQU1DLE1BQU0sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrUkFBWjtLQUFNRixNOztBQXFCTixJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUIsU0FDRTtBQUFLLGFBQVMsRUFBQywyREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFNLGFBQVMsRUFBQyw0QkFBaEI7QUFBNkMsTUFBRSxFQUFDLFVBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUlFLE1BQUMsNkNBQUQ7QUFBTSxhQUFTLEVBQUMsNkJBQWhCO0FBQThDLE1BQUUsRUFBQyxVQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsQ0FERjtBQVVELENBWEQ7O01BQU1BLGlCO0FBYVMsU0FBU0MsV0FBVCxPQU1aO0FBQUE7O0FBQUEsTUFMREMsWUFLQyxRQUxEQSxZQUtDO0FBQUEsTUFKREMsWUFJQyxRQUpEQSxZQUlDO0FBQUEsTUFIREMsUUFHQyxRQUhEQSxRQUdDO0FBQUEsTUFGREMsZUFFQyxRQUZEQSxlQUVDO0FBQUEsNEJBRERDLFNBQ0M7QUFBQSxNQUREQSxTQUNDLCtCQURXLElBQ1g7O0FBQUEsd0JBRXlDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUZ6QztBQUFBO0FBQUEsTUFFTUMsYUFGTjtBQUFBLE1BRXFCQyxnQkFGckI7O0FBR0RILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsY0FBVSxDQUFDLFlBQU07QUFDZkYsc0JBQWdCLENBQUMsS0FBRCxDQUFoQjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQUpELEVBSUcsRUFKSDtBQUtBLFNBQ0UsbUVBQ0EsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUROLEVBRU07QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsV0FBdEI7QUFBa0MsUUFBSSxFQUFFRyxpRUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZOLENBREEsRUFLRSxNQUFDLE1BQUQ7QUFBUSxNQUFFLEVBQUMsU0FBWDtBQUFxQixhQUFTLEVBQUVKLGFBQWEsR0FBRyxFQUFILEdBQVEsVUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFFSyxrRUFBVjtBQUFxQixPQUFHLEVBQUMsUUFBekI7QUFBa0MsYUFBUyxFQUFFTCxhQUFhLEdBQUcsU0FBSCxHQUFlLFFBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxGLEVBUUU7QUFBSyxhQUFTLHlCQUFrQkgsU0FBUyxJQUFJRyxhQUFiLEdBQThCLEVBQTlCLEdBQW1DLE1BQXJELENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdFLE1BQUMsK0NBQUQ7QUFDRSxnQkFBWSxFQUFFSixlQUFlLEdBQUdaLFdBQUgsR0FBaUJTLFlBRGhEO0FBRUUsZUFBVyxFQUFFRyxlQUFlLEdBQUcsTUFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUgsR0FBMkJGLFlBRnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQU9HQyxRQVBILENBUkYsQ0FERjtBQW9CRDs7R0FsQ3VCSCxXOztNQUFBQSxXIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGFnZVdyYXBwZXIvUGFnZVdyYXBwZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXJcIlxyXG5pbXBvcnQgTGluayAgZnJvbSBcIi4uL0xpbmtcIjtcclxuaW1wb3J0IGZhdmljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlL2Zhdmljb24ucG5nJ1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZS9wcmVsb2FkZXIuZ2lmJ1xyXG5jb25zdCBpbm5lckhlYWRlciA9IHtcclxuICBoZWFkZXJDbGFzc2VzOiBcInNpdGUtaGVhZGVyLS1tZW51LWNlbnRlciBsaWdodC1oZWFkZXIgcG9zaXRpb24tcmVsYXRpdmVcIixcclxuICBjb250YWluZXJGbHVpZDogdHJ1ZSxcclxuICBkYXJrTG9nbzp0cnVlXHJcbn1cclxuXHJcbmNvbnN0IExvYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgei1pbmRleDogOTk5OTk5OTk5OTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzIGxpbmVhcjtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgJi5pbkFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElubmVySGVhZGVyQnV0dG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWhlYWRlci1idXR0b25zIG1zLWF1dG8gZC1ub25lIGQteHMtaW5saW5lLWZsZXggcGUtM1wiPlxyXG4gICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gbG9nLWluLWJ0biBmb2N1cy1yZXNldFwiIHRvPVwiL3NpZ24taW5cIj5cclxuICAgICAgICBMb2dpblxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0biBzaWduLWluLWJ0biBmb2N1cy1yZXNldFwiIHRvPVwiL3NpZ24tdXBcIj5cclxuICAgICAgICBTaWduIEluXHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVdyYXBwZXIoe1xyXG4gIGhlYWRlckNvbmZpZyxcclxuICBIZWFkZXJCdXR0b24sXHJcbiAgY2hpbGRyZW4sXHJcbiAgaW5uZXJQYWdlSGVhZGVyLFxyXG4gIHByZWxvYWRlciA9IHRydWUsXHJcbn0pIHtcclxuXHJcbiAgY29uc3QgW3Zpc2libGVMb2FkZXIsIHNldFZpc2libGVMb2FkZXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRWaXNpYmxlTG9hZGVyKGZhbHNlKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlNhbmRhcjwvdGl0bGU+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9e2Zhdmljb259IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICAgIDxMb2FkZXIgaWQ9XCJsb2FkaW5nXCIgY2xhc3NOYW1lPXt2aXNpYmxlTG9hZGVyID8gXCJcIiA6IFwiaW5BY3RpdmVcIn0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17UHJlbG9hZGVyfSBhbHQ9XCJsb2FkZXJcIiBjbGFzc05hbWU9e3Zpc2libGVMb2FkZXIgPyBcImQtYmxvY2tcIiA6IFwiZC1ub25lXCJ9Lz5cclxuICAgICAgPC9Mb2FkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2l0ZS13cmFwcGVyICR7cHJlbG9hZGVyICYmIHZpc2libGVMb2FkZXIgPyAgXCJcIiA6IFwic2hvd1wifWB9PlxyXG5cclxuICAgICAgXHJcbiAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgaGVhZGVyQ29uZmlnPXtpbm5lclBhZ2VIZWFkZXIgPyBpbm5lckhlYWRlciA6IGhlYWRlckNvbmZpZ31cclxuICAgICAgICAgIGJ1dHRvbkJsb2NrPXtpbm5lclBhZ2VIZWFkZXIgPyA8SW5uZXJIZWFkZXJCdXR0b24gLz4gOiBIZWFkZXJCdXR0b259XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PageWrapper/PageWrapper.js\n");

/***/ })

})