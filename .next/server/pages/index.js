(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/BlogPost.js":
/*!********************************!*\
  !*** ./components/BlogPost.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\15162\\Documents\\nextjs-prisma\\graphql-prisma\\components\\BlogPost.js";




const BlogPost = ({
  text,
  id,
  onDelete,
  onEdit
}) => {
  const {
    0: isEdit,
    1: setIsEdit
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: inputText,
    1: setInputText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const onEditSubmit = e => {
    onEdit(e);
    setIsEdit(false);
  };

  const onEditOpen = () => {
    setIsEdit(true);
    setInputText(text);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().card),
    children: [!isEdit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().flexcol),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          className: `${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().red)}`,
          onClick: () => onDelete(id),
          children: "Delete"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          className: `${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().grey)}`,
          onClick: () => onEditOpen(),
          children: "Edit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, undefined), isEdit && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      onSubmit: onEditSubmit,
      id: id,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().flexcol),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          name: "editName",
          value: inputText,
          onChange: e => setInputText(e.target.value),
          className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().fullinput),
          placeholder: "ex. Fix the printer... please ;-;"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 25
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: `${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().blue)}`,
            type: "submit",
            children: "Save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
            className: `${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().grey)}`,
            onClick: () => setIsEdit(false),
            children: "Cancel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

/***/ }),

/***/ "./components/BlogPosts.js":
/*!*********************************!*\
  !*** ./components/BlogPosts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BlogPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogPost */ "./components/BlogPost.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\15162\\Documents\\nextjs-prisma\\graphql-prisma\\components\\BlogPosts.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const BlogPosts = ({
  onDelete,
  onEdit,
  data
}) => {
  return data.blogPosts.map(blogPostData => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_BlogPost__WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread({
    onEdit: onEdit,
    onDelete: onDelete
  }, blogPostData), blogPostData.id, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 49
  }, undefined));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPosts);

/***/ }),

/***/ "./components/SubmitBlogPostForm.js":
/*!******************************************!*\
  !*** ./components/SubmitBlogPostForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\15162\\Documents\\nextjs-prisma\\graphql-prisma\\components\\SubmitBlogPostForm.js";




const SubmitBlogPostForm = ({
  onSubmit
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().fullform),
    onSubmit: onSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().flexcol),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        children: "Post Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        name: "text",
        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().fullinput),
        placeholder: "ex. Fix the printer... please ;-;"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().fullbutton),
      type: "submit",
      children: "Submit"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitBlogPostForm);

/***/ }),

/***/ "./graphql/queries.js":
/*!****************************!*\
  !*** ./graphql/queries.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_BLOGPOSTS": () => (/* binding */ GET_BLOGPOSTS),
/* harmony export */   "ADD_BLOGPOST": () => (/* binding */ ADD_BLOGPOST),
/* harmony export */   "DELETE_BLOGPOST": () => (/* binding */ DELETE_BLOGPOST),
/* harmony export */   "EDIT_BLOGPOST": () => (/* binding */ EDIT_BLOGPOST)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_BLOGPOSTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
{
    blogPosts{
      id
      text
    }
}
`;
const ADD_BLOGPOST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation AddBlogPost($text: String){
    addBlogPost(text: $text){
      id 
      text
    }
  }
`;
const DELETE_BLOGPOST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation DeleteBlogPost($id: String){
    deleteBlogPost(id: $id){
      id
      text
    }
  }
`;
const EDIT_BLOGPOST = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation EditBlogPost($id: String, $text: String){
    editBlogPost(id: $id, text: $text){
      id
      text
    }
  }
`;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_BlogPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BlogPosts */ "./components/BlogPosts.js");
/* harmony import */ var _components_SubmitBlogPostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubmitBlogPostForm */ "./components/SubmitBlogPostForm.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/queries */ "./graphql/queries.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\15162\\Documents\\nextjs-prisma\\graphql-prisma\\pages\\index.js";







function Home() {
  const [addBlogPost] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__.ADD_BLOGPOST, {
    onCompleted: () => {
      refetch();
    }
  });

  const onSubmit = e => {
    e.preventDefault();
    addBlogPost({
      variables: {
        text: e.target.text.value
      }
    });
    e.target.text.value = "";
  };

  const [deleteBlogPost] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__.DELETE_BLOGPOST, {
    onCompleted: () => {
      refetch();
    }
  });

  const onDelete = id => deleteBlogPost({
    variables: {
      id
    }
  });

  const [editBlogPost] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__.EDIT_BLOGPOST);

  const onEdit = e => {
    e.preventDefault();
    editBlogPost({
      variables: {
        id: e.target.id,
        text: e.target.editName.value
      }
    });
  };

  const {
    loading,
    error,
    data,
    refetch
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_3__.GET_BLOGPOSTS);

  if (loading) {
    return "loading";
  }

  if (error) {
    return "error";
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "Create Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_SubmitBlogPostForm__WEBPACK_IMPORTED_MODULE_2__.default, {
      onSubmit: onSubmit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_BlogPosts__WEBPACK_IMPORTED_MODULE_1__.default, {
      data: data,
      onDelete: onDelete,
      onEdit: onEdit
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/Home.module.scss":
/*!*********************************!*\
  !*** ./styles/Home.module.scss ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__3sao-",
	"main": "Home_main__1Z1aG",
	"title": "Home_title__28pEg",
	"description": "Home_description__3GmI3",
	"code": "Home_code__2X25X",
	"card": "Home_card__PT3hq",
	"textTest": "Home_textTest__2iavU",
	"logo": "Home_logo__3GqVp",
	"button": "Home_button__2hScn",
	"red": "Home_red__7u9JL",
	"blue": "Home_blue__380zO",
	"green": "Home_green__3s0Yx",
	"grey": "Home_grey__152cm",
	"flexcol": "Home_flexcol__2r2up",
	"fullbutton": "Home_fullbutton__xgKdK",
	"fullinput": "Home_fullinput__2D5Bi",
	"fullform": "Home_fullform__3iF5z",
	"grid": "Home_grid__QT_Bm"
};


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOzs7Ozs7Ozs7O0FDOUREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JhcGhxbC1wcmlzbWEvLi9jb21wb25lbnRzL0Jsb2dQb3N0LmpzIiwid2VicGFjazovL2dyYXBocWwtcHJpc21hLy4vY29tcG9uZW50cy9CbG9nUG9zdHMuanMiLCJ3ZWJwYWNrOi8vZ3JhcGhxbC1wcmlzbWEvLi9jb21wb25lbnRzL1N1Ym1pdEJsb2dQb3N0Rm9ybS5qcyIsIndlYnBhY2s6Ly9ncmFwaHFsLXByaXNtYS8uL2dyYXBocWwvcXVlcmllcy5qcyIsIndlYnBhY2s6Ly9ncmFwaHFsLXByaXNtYS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2dyYXBocWwtcHJpc21hLy4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZ3JhcGhxbC1wcmlzbWEvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL2dyYXBocWwtcHJpc21hL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZ3JhcGhxbC1wcmlzbWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2dyYXBocWwtcHJpc21hL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuY29uc3QgQmxvZ1Bvc3QgPSAoe3RleHQsIGlkLCBvbkRlbGV0ZSwgb25FZGl0fSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtpc0VkaXQsIHNldElzRWRpdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuXHJcbiAgICBjb25zdCBvbkVkaXRTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIG9uRWRpdChlKVxyXG4gICAgICAgIHNldElzRWRpdChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25FZGl0T3BlbiA9ICgpID0+e1xyXG4gICAgICAgIHNldElzRWRpdCh0cnVlKTtcclxuICAgICAgICBzZXRJbnB1dFRleHQodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gPlxyXG4gICAgICAgICAgICB7IWlzRWRpdCAmJiAoXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleGNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMucmVkfWB9IG9uQ2xpY2s9eygpPT5vbkRlbGV0ZShpZCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLmdyZXl9YH0gb25DbGljaz17KCk9Pm9uRWRpdE9wZW4oKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2lzRWRpdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25FZGl0U3VibWl0fSBpZD17aWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmxleGNvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZWRpdE5hbWVcIiB2YWx1ZT17aW5wdXRUZXh0fSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSl9IGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxpbnB1dH0gcGxhY2Vob2xkZXI9XCJleC4gRml4IHRoZSBwcmludGVyLi4uIHBsZWFzZSA7LTtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMuYmx1ZX1gfSB0eXBlPVwic3VibWl0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLmdyZXl9YH0gb25DbGljaz17KCk9PnNldElzRWRpdChmYWxzZSl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgKX1cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdCIsImltcG9ydCB7IHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJsb2dQb3N0IGZyb20gXCIuL0Jsb2dQb3N0XCI7XHJcblxyXG5jb25zdCBCbG9nUG9zdHMgPSAoe29uRGVsZXRlLCBvbkVkaXQsIGRhdGF9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIGRhdGEuYmxvZ1Bvc3RzLm1hcCgoYmxvZ1Bvc3REYXRhKSA9PiA8QmxvZ1Bvc3Qgb25FZGl0PXtvbkVkaXR9IG9uRGVsZXRlPXtvbkRlbGV0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YmxvZ1Bvc3REYXRhLmlkfSB7Li4uYmxvZ1Bvc3REYXRhfSAvPilcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0czsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3VibWl0QmxvZ1Bvc3RGb3JtID0gKHsgb25TdWJtaXQgfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZ1bGxmb3JtfSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhjb2x9PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsPlBvc3QgQmxvZzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInRleHRcIiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsaW5wdXR9IHBsYWNlaG9sZGVyPVwiZXguIEZpeCB0aGUgcHJpbnRlci4uLiBwbGVhc2UgOy07XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5mdWxsYnV0dG9ufSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJtaXRCbG9nUG9zdEZvcm07IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcclxuXHJcbmV4cG9ydCBjb25zdCBHRVRfQkxPR1BPU1RTID0gZ3FsYFxyXG57XHJcbiAgICBibG9nUG9zdHN7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRleHRcclxuICAgIH1cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9CTE9HUE9TVCA9IGdxbGBcclxuICBtdXRhdGlvbiBBZGRCbG9nUG9zdCgkdGV4dDogU3RyaW5nKXtcclxuICAgIGFkZEJsb2dQb3N0KHRleHQ6ICR0ZXh0KXtcclxuICAgICAgaWQgXHJcbiAgICAgIHRleHRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0JMT0dQT1NUID0gZ3FsYFxyXG4gIG11dGF0aW9uIERlbGV0ZUJsb2dQb3N0KCRpZDogU3RyaW5nKXtcclxuICAgIGRlbGV0ZUJsb2dQb3N0KGlkOiAkaWQpe1xyXG4gICAgICBpZFxyXG4gICAgICB0ZXh0XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRfQkxPR1BPU1QgPSBncWxgXHJcbiAgbXV0YXRpb24gRWRpdEJsb2dQb3N0KCRpZDogU3RyaW5nLCAkdGV4dDogU3RyaW5nKXtcclxuICAgIGVkaXRCbG9nUG9zdChpZDogJGlkLCB0ZXh0OiAkdGV4dCl7XHJcbiAgICAgIGlkXHJcbiAgICAgIHRleHRcclxuICAgIH1cclxuICB9XHJcbmBcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCBCbG9nUG9zdHMgZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nUG9zdHMnXG5pbXBvcnQgU3VibWl0QmxvZ1Bvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU3VibWl0QmxvZ1Bvc3RGb3JtJ1xuaW1wb3J0IHsgQUREX0JMT0dQT1NUICwgREVMRVRFX0JMT0dQT1NULCBFRElUX0JMT0dQT1NULCBHRVRfQkxPR1BPU1RTfSBmcm9tICcuLi9ncmFwaHFsL3F1ZXJpZXMnXG5pbXBvcnQgeyB1c2VRdWVyeSwgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFthZGRCbG9nUG9zdF0gPSB1c2VNdXRhdGlvbihBRERfQkxPR1BPU1QsIHtcbiAgICBvbkNvbXBsZXRlZDogKCkgPT4ge1xuICAgICAgcmVmZXRjaCgpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBhZGRCbG9nUG9zdCh7dmFyaWFibGVzOiB7dGV4dDogZS50YXJnZXQudGV4dC52YWx1ZX19KVxuICAgIGUudGFyZ2V0LnRleHQudmFsdWUgPSBcIlwiO1xuICB9XG5cblxuICBjb25zdCBbZGVsZXRlQmxvZ1Bvc3RdID0gdXNlTXV0YXRpb24oREVMRVRFX0JMT0dQT1NULCB7XG4gICAgb25Db21wbGV0ZWQ6ICgpID0+IHtcbiAgICAgIHJlZmV0Y2goKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBvbkRlbGV0ZSA9IChpZCkgPT4gZGVsZXRlQmxvZ1Bvc3Qoe3ZhcmlhYmxlczogeyBpZCB9fSlcblxuXG4gIGNvbnN0IFtlZGl0QmxvZ1Bvc3RdID0gdXNlTXV0YXRpb24oRURJVF9CTE9HUE9TVClcblxuICBjb25zdCBvbkVkaXQgPSAgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBlZGl0QmxvZ1Bvc3Qoe3ZhcmlhYmxlczoge2lkOiBlLnRhcmdldC5pZCwgdGV4dDogZS50YXJnZXQuZWRpdE5hbWUudmFsdWV9fSlcbiAgfVxuXG5cbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoR0VUX0JMT0dQT1NUUykgICBcblxuICBpZihsb2FkaW5nKSB7XG4gICAgICByZXR1cm4gXCJsb2FkaW5nXCJcbiAgfVxuICBpZihlcnJvcil7XG4gICAgICByZXR1cm4gXCJlcnJvclwiXG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTdWJtaXRCbG9nUG9zdEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT48L1N1Ym1pdEJsb2dQb3N0Rm9ybT5cbiAgICAgIDxCbG9nUG9zdHMgZGF0YT17ZGF0YX0gb25EZWxldGU9e29uRGVsZXRlfSBvbkVkaXQ9e29uRWRpdH0+PC9CbG9nUG9zdHM+XG4gICAgIFxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fM3Nhby1cIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xWjFhR1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fMjhwRWdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzNHbUkzXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fMlgyNVhcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19QVDNocVwiLFxuXHRcInRleHRUZXN0XCI6IFwiSG9tZV90ZXh0VGVzdF9fMmlhdlVcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18zR3FWcFwiLFxuXHRcImJ1dHRvblwiOiBcIkhvbWVfYnV0dG9uX18yaFNjblwiLFxuXHRcInJlZFwiOiBcIkhvbWVfcmVkX183dTlKTFwiLFxuXHRcImJsdWVcIjogXCJIb21lX2JsdWVfXzM4MHpPXCIsXG5cdFwiZ3JlZW5cIjogXCJIb21lX2dyZWVuX18zczBZeFwiLFxuXHRcImdyZXlcIjogXCJIb21lX2dyZXlfXzE1MmNtXCIsXG5cdFwiZmxleGNvbFwiOiBcIkhvbWVfZmxleGNvbF9fMnIydXBcIixcblx0XCJmdWxsYnV0dG9uXCI6IFwiSG9tZV9mdWxsYnV0dG9uX194Z0tkS1wiLFxuXHRcImZ1bGxpbnB1dFwiOiBcIkhvbWVfZnVsbGlucHV0X18yRDVCaVwiLFxuXHRcImZ1bGxmb3JtXCI6IFwiSG9tZV9mdWxsZm9ybV9fM2lGNXpcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19RVF9CbVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJCbG9nUG9zdCIsInRleHQiLCJpZCIsIm9uRGVsZXRlIiwib25FZGl0IiwiaXNFZGl0Iiwic2V0SXNFZGl0IiwiaW5wdXRUZXh0Iiwic2V0SW5wdXRUZXh0Iiwib25FZGl0U3VibWl0IiwiZSIsIm9uRWRpdE9wZW4iLCJjYXJkIiwiZmxleGNvbCIsImJ1dHRvbiIsInJlZCIsImdyZXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZ1bGxpbnB1dCIsImJsdWUiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiQmxvZ1Bvc3RzIiwiZGF0YSIsImJsb2dQb3N0cyIsIm1hcCIsImJsb2dQb3N0RGF0YSIsIlJlYWN0IiwiU3VibWl0QmxvZ1Bvc3RGb3JtIiwib25TdWJtaXQiLCJmdWxsZm9ybSIsImZ1bGxidXR0b24iLCJncWwiLCJHRVRfQkxPR1BPU1RTIiwiQUREX0JMT0dQT1NUIiwiREVMRVRFX0JMT0dQT1NUIiwiRURJVF9CTE9HUE9TVCIsIkhlYWQiLCJ1c2VRdWVyeSIsInVzZU11dGF0aW9uIiwiSG9tZSIsImFkZEJsb2dQb3N0Iiwib25Db21wbGV0ZWQiLCJyZWZldGNoIiwicHJldmVudERlZmF1bHQiLCJ2YXJpYWJsZXMiLCJkZWxldGVCbG9nUG9zdCIsImVkaXRCbG9nUG9zdCIsImVkaXROYW1lIiwibG9hZGluZyIsImVycm9yIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==