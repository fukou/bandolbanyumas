webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _components_products_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/products/Post */ "./components/products/Post.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "C:\\Users\\Asus\\bandolbanyumas\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  max-width: 90rem;\n  margin: auto;\n  padding: 2.5rem 1.8rem;\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #fff;\n  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.05);\n\n  font-size: 2em;\n  font-weight: bold;\n  grid-column: 1/-1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  max-width: 90vw;\n  margin: -5rem auto 5rem auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2.5rem;\n\n  @media (max-width: 80rem) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (max-width: 40rem) {\n    grid-template-columns: 1fr;\n    grid-gap: 1.5rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  padding: 6.5rem 3.5rem 10rem 3.5rem;\n  background-image: linear-gradient(120deg, #00ccaa 0%, #8fd3f4 100%);\n\n  font-size: 1.1em;\n  color: #eee;\n\n  h1 {\n    color: #f9f9f9;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



 // import Products from "../components/products/Grid";


 // CONTENTFUL_SPACE_ID=pwqt3c72vj9v
// CONTENTFUL_ACCESS_TOKEN=mTty2H7ONePrpF8kxIfq0RjxMmrUp2CVBdiRMlqlVL0
// space: process.env.SPACE_ID,
// accessToken: process.env.ACCESS_TOKEN

var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "pwqt3c72vj9v",
  accessToken: "mTty2H7ONePrpF8kxIfq0RjxMmrUp2CVBdiRMlqlVL0"
});

var Header = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].header(_templateObject());
var Root = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());
var Error = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject3());

function Home() {
  function fetchContentTypes() {
    return _fetchContentTypes.apply(this, arguments);
  }

  function _fetchContentTypes() {
    _fetchContentTypes = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var types;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.getContentTypes();

            case 2:
              types = _context2.sent;

              if (!types.items) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", types.items);

            case 5:
              console.log("Error getting Content Types.");

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchContentTypes.apply(this, arguments);
  }

  function fetchEntriesForContentType(_x) {
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  function _fetchEntriesForContentType() {
    _fetchEntriesForContentType = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(contentType) {
      var entries;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.getEntries({
                content_type: contentType.sys.id
              });

            case 2:
              entries = _context3.sent;
              console.log(entries);

              if (!entries.items) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", entries.items);

            case 6:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function getPosts() {
      return _getPosts.apply(this, arguments);
    }

    function _getPosts() {
      _getPosts = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var contentTypes, allPosts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchContentTypes();

              case 2:
                contentTypes = _context.sent;
                _context.next = 5;
                return fetchEntriesForContentType(contentTypes[0]);

              case 5:
                allPosts = _context.sent;
                setPosts(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allPosts));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getPosts.apply(this, arguments);
    }

    getPosts();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Bandol Banyumas"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), __jsx(Root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, posts.length > 0 ? posts.map(function (p) {
    return __jsx(_components_products_Post__WEBPACK_IMPORTED_MODULE_6__["default"], {
      alt: p.fields.alt,
      key: p.fields.title,
      media: p.fields.media.fields.file.url,
      title: p.fields.title,
      description: p.fields.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    });
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(Error, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Error showing the posts, please check your internet connection")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.fd735ce722a821e8592e.hot-update.js.map