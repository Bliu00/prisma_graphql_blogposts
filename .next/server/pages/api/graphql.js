"use strict";
(() => {
var exports = {};
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./pages/api/graphql.js":
/*!******************************!*\
  !*** ./pages/api/graphql.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();
const typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`

    type BlogPost{
        id: String
        text: String
    }

    type Query {
        blogPosts: [BlogPost]
    }

    type Mutation { 
        addBlogPost(text: String): BlogPost
        editBlogPost(id: String, text: String): BlogPost
        deleteBlogPost(id: String): BlogPost
    }

`;
const resolvers = {
  Query: {
    blogPosts: (_parent, _args, _context) => {
      return prisma.blogPost.findMany();
    }
  },
  Mutation: {
    addBlogPost: (_parent, {
      text
    }, _context) => {
      return prisma.blogPost.create({
        data: {
          text
        }
      });
    },
    editBlogPost: (_parent, {
      id,
      text
    }, _context) => {
      return prisma.blogPost.update({
        where: {
          id
        },
        data: {
          text
        }
      });
    },
    deleteBlogPost: (_parent, {
      id
    }, _context) => {
      return prisma.blogPost.delete({
        where: {
          id
        }
      });
    }
  }
};
const config = {
  api: {
    bodyParser: false
  }
};
const apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
  typeDefs,
  resolvers
});
const handler = apolloServer.createHandler({
  path: "/api/graphql"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("apollo-server-micro");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2dyYXBocWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxNQUFNRyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZjtBQUVBLE1BQU1FLFFBQVEsR0FBR0osb0RBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCQTtBQW1CQSxNQUFNSyxTQUFTLEdBQUc7QUFDZEMsRUFBQUEsS0FBSyxFQUFFO0FBQ0hDLElBQUFBLFNBQVMsRUFBRSxDQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBaUJDLFFBQWpCLEtBQThCO0FBQ3JDLGFBQU9QLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkMsUUFBaEIsRUFBUDtBQUNIO0FBSEUsR0FETztBQU9kQyxFQUFBQSxRQUFRLEVBQUU7QUFDTkMsSUFBQUEsV0FBVyxFQUFFLENBQUNOLE9BQUQsRUFBVTtBQUFDTyxNQUFBQTtBQUFELEtBQVYsRUFBa0JMLFFBQWxCLEtBQStCO0FBQ3hDLGFBQU9QLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkssTUFBaEIsQ0FBdUI7QUFBQ0MsUUFBQUEsSUFBSSxFQUFFO0FBQUNGLFVBQUFBO0FBQUQ7QUFBUCxPQUF2QixDQUFQO0FBQ0gsS0FISztBQUlORyxJQUFBQSxZQUFZLEVBQUUsQ0FBQ1YsT0FBRCxFQUFVO0FBQUNXLE1BQUFBLEVBQUQ7QUFBS0osTUFBQUE7QUFBTCxLQUFWLEVBQXNCTCxRQUF0QixLQUFtQztBQUM3QyxhQUFPUCxNQUFNLENBQUNRLFFBQVAsQ0FBZ0JTLE1BQWhCLENBQXVCO0FBQUNDLFFBQUFBLEtBQUssRUFBRTtBQUFDRixVQUFBQTtBQUFELFNBQVI7QUFBY0YsUUFBQUEsSUFBSSxFQUFFO0FBQUNGLFVBQUFBO0FBQUQ7QUFBcEIsT0FBdkIsQ0FBUDtBQUNILEtBTks7QUFPTk8sSUFBQUEsY0FBYyxFQUFFLENBQUNkLE9BQUQsRUFBVTtBQUFDVyxNQUFBQTtBQUFELEtBQVYsRUFBZ0JULFFBQWhCLEtBQTZCO0FBQ3pDLGFBQU9QLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQlksTUFBaEIsQ0FBdUI7QUFBQ0YsUUFBQUEsS0FBSyxFQUFFO0FBQUNGLFVBQUFBO0FBQUQ7QUFBUixPQUF2QixDQUFQO0FBQ0g7QUFUSztBQVBJLENBQWxCO0FBcUJPLE1BQU1LLE1BQU0sR0FBRztBQUNsQkMsRUFBQUEsR0FBRyxFQUFFO0FBQ0RDLElBQUFBLFVBQVUsRUFBRTtBQURYO0FBRGEsQ0FBZjtBQU1QLE1BQU1DLFlBQVksR0FBRyxJQUFJMUIsNkRBQUosQ0FBaUI7QUFDbENHLEVBQUFBLFFBRGtDO0FBRWxDQyxFQUFBQTtBQUZrQyxDQUFqQixDQUFyQjtBQU9BLE1BQU11QixPQUFPLEdBQUdELFlBQVksQ0FBQ0UsYUFBYixDQUEyQjtBQUFDQyxFQUFBQSxJQUFJLEVBQUU7QUFBUCxDQUEzQixDQUFoQjtBQUdBLGlFQUFlRixPQUFmOzs7Ozs7Ozs7O0FDOURBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFwaHFsLXByaXNtYS8uL3BhZ2VzL2FwaS9ncmFwaHFsLmpzIiwid2VicGFjazovL2dyYXBocWwtcHJpc21hL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9ncmFwaHFsLXByaXNtYS9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItbWljcm9cIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIEFwb2xsb1NlcnZlciB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbWljcm8nXHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuXHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG5cclxuICAgIHR5cGUgQmxvZ1Bvc3R7XHJcbiAgICAgICAgaWQ6IFN0cmluZ1xyXG4gICAgICAgIHRleHQ6IFN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgUXVlcnkge1xyXG4gICAgICAgIGJsb2dQb3N0czogW0Jsb2dQb3N0XVxyXG4gICAgfVxyXG5cclxuICAgIHR5cGUgTXV0YXRpb24geyBcclxuICAgICAgICBhZGRCbG9nUG9zdCh0ZXh0OiBTdHJpbmcpOiBCbG9nUG9zdFxyXG4gICAgICAgIGVkaXRCbG9nUG9zdChpZDogU3RyaW5nLCB0ZXh0OiBTdHJpbmcpOiBCbG9nUG9zdFxyXG4gICAgICAgIGRlbGV0ZUJsb2dQb3N0KGlkOiBTdHJpbmcpOiBCbG9nUG9zdFxyXG4gICAgfVxyXG5cclxuYDtcclxuXHJcbmNvbnN0IHJlc29sdmVycyA9IHtcclxuICAgIFF1ZXJ5OiB7XHJcbiAgICAgICAgYmxvZ1Bvc3RzOiAoX3BhcmVudCwgX2FyZ3MsIF9jb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmlzbWEuYmxvZ1Bvc3QuZmluZE1hbnkoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBNdXRhdGlvbjoge1xyXG4gICAgICAgIGFkZEJsb2dQb3N0OiAoX3BhcmVudCwge3RleHR9LCBfY29udGV4dCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcHJpc21hLmJsb2dQb3N0LmNyZWF0ZSh7ZGF0YToge3RleHR9fSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVkaXRCbG9nUG9zdDogKF9wYXJlbnQsIHtpZCwgdGV4dH0sIF9jb250ZXh0KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcmlzbWEuYmxvZ1Bvc3QudXBkYXRlKHt3aGVyZToge2lkfSwgZGF0YToge3RleHR9fSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZUJsb2dQb3N0OiAoX3BhcmVudCwge2lkfSwgX2NvbnRleHQpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHByaXNtYS5ibG9nUG9zdC5kZWxldGUoe3doZXJlOiB7aWR9fSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0geyBcclxuICAgIGFwaTogeyBcclxuICAgICAgICBib2R5UGFyc2VyOiBmYWxzZSBcclxuICAgIH0gXHJcbn07XHJcblxyXG5jb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHsgXHJcbiAgICB0eXBlRGVmcywgXHJcbiAgICByZXNvbHZlcnNcclxufSk7XHJcblxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcih7cGF0aDogXCIvYXBpL2dyYXBocWxcIn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1taWNyb1wiKTsiXSwibmFtZXMiOlsiZ3FsIiwiQXBvbGxvU2VydmVyIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsImJsb2dQb3N0cyIsIl9wYXJlbnQiLCJfYXJncyIsIl9jb250ZXh0IiwiYmxvZ1Bvc3QiLCJmaW5kTWFueSIsIk11dGF0aW9uIiwiYWRkQmxvZ1Bvc3QiLCJ0ZXh0IiwiY3JlYXRlIiwiZGF0YSIsImVkaXRCbG9nUG9zdCIsImlkIiwidXBkYXRlIiwid2hlcmUiLCJkZWxldGVCbG9nUG9zdCIsImRlbGV0ZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJhcG9sbG9TZXJ2ZXIiLCJoYW5kbGVyIiwiY3JlYXRlSGFuZGxlciIsInBhdGgiXSwic291cmNlUm9vdCI6IiJ9