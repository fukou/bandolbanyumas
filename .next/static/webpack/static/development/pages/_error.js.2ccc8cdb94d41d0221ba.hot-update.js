webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./components/layout/Navigation.js":
/*!*****************************************!*\
  !*** ./components/layout/Navigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveLink */ "./components/layout/ActiveLink.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\Asus\\bandolbanyumas\\components\\layout\\Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: block;\n  margin: 0 2.5rem;\n  color: #aaa;\n  cursor: pointer;\n  transition: 0.5s;\n\n  @media (max-width: 60rem) {\n    margin: 1rem 1rem;\n  }\n\n  &:hover {\n    color: #111;\n  }\n\n  svg {\n    vertical-align: middle;\n    margin-right: 0.5rem;\n  }\n\n  text-decoration: none;\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 0 auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-wrap: nowrap;\n\n  @media (max-width: 60rem) {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: \"PT Serif\", serif;\n  padding: 2.5rem 1.5rem;\n\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n  background-color: #fff;\n  z-index: 99999;\n\n  @media (max-width: 60rem) {\n    padding: 1rem 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Root = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav(_templateObject());
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].ul(_templateObject2());
var InnerItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li(_templateObject3());
var InnerLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject4(), function (props) {
  return props.active && "& { color:#111; font-weight:bold;} &:before { content:''; position:absolute; left:50%; transform:translateX(-50%);bottom:-12px; width:40%; height:5px; background:#00ccaa; border-radius:30px;";
});

var Navigation = function Navigation() {
  return __jsx(Root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(InnerItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(InnerLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Beranda"))), __jsx(InnerItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/tentang",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(InnerLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Tentang kami"))), __jsx(InnerItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/produk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(InnerLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Produk"))), __jsx(InnerItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/pemesanan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(InnerLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Tata cara pemesanan")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ })

})
//# sourceMappingURL=_error.js.2ccc8cdb94d41d0221ba.hot-update.js.map