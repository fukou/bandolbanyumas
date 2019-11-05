exports.ids = [0];
exports.modules = {

/***/ "./components/utils/config/lazyload.js":
/*!*********************************************!*\
  !*** ./components/utils/config/lazyload.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  elements_selector: ".lazy"
});

/***/ }),

/***/ "./components/utils/lazy-image.js":
/*!****************************************!*\
  !*** ./components/utils/lazy-image.js ***!
  \****************************************/
/*! exports provided: LazyImage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyImage", function() { return LazyImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-lazyload */ "vanilla-lazyload");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/lazyload */ "./components/utils/config/lazyload.js");
var _jsxFileName = "C:\\Users\\Asus\\bandolbanyumas\\components\\utils\\lazy-image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Only initialize it one time for the entire application

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_1___default.a(_config_lazyload__WEBPACK_IMPORTED_MODULE_2__["default"]);
}

class LazyImage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  // Update lazyLoad after first rendering of every image
  componentDidMount() {
    document.lazyLoadInstance.update();
  } // Update lazyLoad after rerendering of every image


  componentDidUpdate() {
    document.lazyLoadInstance.update();
  } // Just render the image with data-src


  render() {
    const {
      alt,
      src,
      srcset,
      sizes,
      width,
      height
    } = this.props;
    return __jsx("img", {
      alt: alt,
      className: "lazy",
      "data-src": src,
      "data-srcset": srcset,
      "data-sizes": sizes,
      width: width,
      height: height,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (LazyImage);

/***/ })

};;
//# sourceMappingURL=0.js.map