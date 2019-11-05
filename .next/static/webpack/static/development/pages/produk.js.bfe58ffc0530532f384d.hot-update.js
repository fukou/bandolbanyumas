webpackHotUpdate("static\\development\\pages\\produk.js",{

/***/ "./pages/produk.js":
/*!*************************!*\
  !*** ./pages/produk.js ***!
  \*************************/
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_products_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/products/Post */ "./components/products/Post.js");




var _jsxFileName = "C:\\Users\\Asus\\bandolbanyumas\\pages\\produk.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  max-width: 90vw;\n  margin: 3.5rem auto;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2.5rem;\n\n  @media (max-width: 70rem) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (max-width: 50rem) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var LazyImage = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/utils/lazy-image */ "./components/utils/lazy-image.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/utils/lazy-image */ "./components/utils/lazy-image.js")];
    },
    modules: ["../components/utils/lazy-image"]
  }
});
var Root = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());

var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "pwqt3c72vj9v",
  accessToken: "mTty2H7ONePrpF8kxIfq0RjxMmrUp2CVBdiRMlqlVL0"
});

function Produk() {
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

              if (!entries.items) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
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
      lineNumber: 60
    },
    __self: this
  }, __jsx(Root, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, posts.length > 0 ? posts.map(function (p) {
    return __jsx(_components_products_Post__WEBPACK_IMPORTED_MODULE_8__["default"], {
      alt: p.fields.alt,
      key: p.fields.title,
      media: p.fields.media.fields.file.url,
      title: p.fields.title,
      description: p.fields.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
  }) : null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Produk); // class Produk extends React.Component {
//   render() {
//     return (
//       <>
//         <Layout pageTitle="Produk Kami">
//           <Root>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model1.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model2.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model3.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model4.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model5.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//             <Grid>
//               <LazyImage
//                 srcset="/img/model9.png"
//                 src="/img/model1.png"
//                 alt="Product"
//               />
//             </Grid>
//           </Root>
//         </Layout>
//       </>
//     );
//   }
// }
// export default Produk;

/***/ })

})
//# sourceMappingURL=produk.js.bfe58ffc0530532f384d.hot-update.js.map