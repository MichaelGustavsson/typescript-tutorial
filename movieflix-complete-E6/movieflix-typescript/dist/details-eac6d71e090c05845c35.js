/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/detail.ts":
/*!***********************!*\
  !*** ./src/detail.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/http */ "./src/utilities/http.ts");



var getMovieInfo = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(id) {
    var response, _yield$response$json, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,_utilities_http__WEBPACK_IMPORTED_MODULE_2__["default"])("movies/".concat(id));
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.json();
        case 5:
          _yield$response$json = _context.sent;
          data = _yield$response$json.data;
          return _context.abrupt("return", data);
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getMovieInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieInfo);

/***/ }),

/***/ "./src/utilities/http.ts":
/*!*******************************!*\
  !*** ./src/utilities/http.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/utilities/state.ts");



var fetchData = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(endpoint) {
    var page,
      criteria,
      API_URL,
      url,
      response,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          page = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
          criteria = _args.length > 2 ? _args[2] : undefined;
          API_URL = _state__WEBPACK_IMPORTED_MODULE_2__.state.api.baseUrl;
          url = '';
          if (criteria) {
            url = "".concat(API_URL).concat(endpoint, "/").concat(criteria, "&page=").concat(page);
          } else {
            url = "".concat(API_URL).concat(endpoint, "?page=").concat(page);
          }
          _context.next = 7;
          return fetch(url);
        case 7:
          response = _context.sent;
          return _context.abrupt("return", response);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function fetchData(_x) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);

/***/ }),

/***/ "./src/utilities/state.ts":
/*!********************************!*\
  !*** ./src/utilities/state.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
var state = {
  api: {
    baseUrl: 'http://localhost:3000/api/v1/'
  }
};

/***/ }),

/***/ "./src/assets/css/main.css":
/*!*********************************!*\
  !*** ./src/assets/css/main.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/dom/movie-dom.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detail */ "./src/detail.ts");
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/main.css */ "./src/assets/css/main.css");




function getMovie() {
  return _getMovie.apply(this, arguments);
}
function _getMovie() {
  _getMovie = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var movieId, movie;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          movieId = window.location.search.split('=')[1];
          _context.next = 3;
          return (0,_detail__WEBPACK_IMPORTED_MODULE_2__["default"])(+movieId);
        case 3:
          movie = _context.sent;
          displayMovie(movie);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getMovie.apply(this, arguments);
}
function displayMovie(movie) {
  var div = document.createElement('div');
  div.innerHTML = "\n      <div class=\"details-top\">\n        <div>".concat(movie.poster_path ? "<img src=\"https://image.tmdb.org/t/p/w500".concat(movie.poster_path, "\" alt=\"").concat(movie.title, "\"/>") : "<img src=\"./src/assets/images/No-Image.jpg\" alt=\"".concat(movie.title, "\" />"), "</div>\n        <div  class=\"info\">\n          <h2>").concat(movie.title, "</h2>\n          <p>\n            <i class=\"fas fa-star rating\"></i>\n            ").concat(movie.vote_average.toFixed(1), " / 10\n          </p>\n          <p class=\"text-muted\">Premi\xE4r: ").concat(movie.release_date, "</p>\n          <p>").concat(movie.overview, "</p>\n          <h5>Genre</h5>\n          <ul>\n            ").concat(movie.genres.map(function (genre) {
    return "<li>".concat(genre.name, "</li>");
  }).join(''), "\n          </ul>\n          <p class=\"text-muted\">L\xE4ngd ").concat(Math.floor(movie.runtime / 60), " tim ").concat(movie.runtime % 60, " min</p>\n        </div>\n      </div>\n    ");
  document.querySelector('#details').appendChild(div);
  document.querySelector('#details').appendChild(createOverlay(movie));
}
function createOverlay(movie) {
  var overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = movie.backdrop_path ? "url(https://image.tmdb.org/t/p/original/".concat(movie.backdrop_path, ")") : '';
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.4';
  return overlayDiv;
}
getMovie();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VztFQUMvQ04sVUFBVSxDQUFDQyxLQUFLLENBQUNNLE1BQU0sR0FBRyxPQUFPO0VBQ2pDUCxVQUFVLENBQUNDLEtBQUssQ0FBQ08sS0FBSyxHQUFHLE9BQU87RUFDaENSLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDUSxRQUFRLEdBQUcsVUFBVTtFQUN0Q1QsVUFBVSxDQUFDQyxLQUFLLENBQUNTLEdBQUcsR0FBRyxHQUFHO0VBQzFCVixVQUFVLENBQUNDLEtBQUssQ0FBQ1UsSUFBSSxHQUFHLEdBQUc7RUFDM0JYLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDVyxNQUFNLEdBQUcsSUFBSTtFQUM5QlosVUFBVSxDQUFDQyxLQUFLLENBQUNZLE9BQU8sR0FBRyxLQUFLO0VBRWhDLE9BQU9iLFVBQVU7QUFDbkI7QUFFQTlCLFFBQVEsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL3NyYy9kZXRhaWwudHMiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvLi9zcmMvdXRpbGl0aWVzL2h0dHAudHMiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvLi9zcmMvdXRpbGl0aWVzL3N0YXRlLnRzIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0Ly4vc3JjL2Fzc2V0cy9jc3MvbWFpbi5jc3M/N2JlNiIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvLi9zcmMvZG9tL21vdmllLWRvbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vdXRpbGl0aWVzL2h0dHAnO1xuaW1wb3J0IHsgTW92aWVJbmZvIH0gZnJvbSAnLi9tb2RlbHMvbW92aWUtaW5mbyc7XG5cbmNvbnN0IGdldE1vdmllSW5mbyA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTxNb3ZpZUluZm8+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGEoYG1vdmllcy8ke2lkfWApO1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YSBhcyBNb3ZpZUluZm87XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZUluZm87XG4iLCJpbXBvcnQgeyBzdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xuXG5jb25zdCBmZXRjaERhdGEgPSBhc3luYyAoZW5kcG9pbnQ6IHN0cmluZywgcGFnZSA9IDEsIGNyaXRlcmlhPzogc3RyaW5nKTogUHJvbWlzZTxSZXNwb25zZT4gPT4ge1xuICBjb25zdCBBUElfVVJMID0gc3RhdGUuYXBpLmJhc2VVcmw7XG5cbiAgbGV0IHVybDogc3RyaW5nID0gJyc7XG5cbiAgaWYgKGNyaXRlcmlhKSB7XG4gICAgdXJsID0gYCR7QVBJX1VSTH0ke2VuZHBvaW50fS8ke2NyaXRlcmlhfSZwYWdlPSR7cGFnZX1gO1xuICB9IGVsc2Uge1xuICAgIHVybCA9IGAke0FQSV9VUkx9JHtlbmRwb2ludH0/cGFnZT0ke3BhZ2V9YDtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmZXRjaERhdGE7XG4iLCJleHBvcnQgY29uc3Qgc3RhdGUgPSB7XG4gIGFwaToge1xuICAgIGJhc2VVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3YxLycsXG4gIH0sXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZTtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgdCxcbiAgICBlID0ge30sXG4gICAgciA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgbiA9IHIuaGFzT3duUHJvcGVydHksXG4gICAgbyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAodCwgZSwgcikge1xuICAgICAgdFtlXSA9IHIudmFsdWU7XG4gICAgfSxcbiAgICBpID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICBhID0gaS5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBjID0gaS5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdSA9IGkudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZSh0LCBlLCByKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBlLCB7XG4gICAgICB2YWx1ZTogcixcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pLCB0W2VdO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAodCkge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZSh0LCBlLCByKSB7XG4gICAgICByZXR1cm4gdFtlXSA9IHI7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKHQsIGUsIHIsIG4pIHtcbiAgICB2YXIgaSA9IGUgJiYgZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBlIDogR2VuZXJhdG9yLFxuICAgICAgYSA9IE9iamVjdC5jcmVhdGUoaS5wcm90b3R5cGUpLFxuICAgICAgYyA9IG5ldyBDb250ZXh0KG4gfHwgW10pO1xuICAgIHJldHVybiBvKGEsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZCh0LCByLCBjKVxuICAgIH0pLCBhO1xuICB9XG4gIGZ1bmN0aW9uIHRyeUNhdGNoKHQsIGUsIHIpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiB0LmNhbGwoZSwgcilcbiAgICAgIH07XG4gICAgfSBjYXRjaCAodCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IHRcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGUud3JhcCA9IHdyYXA7XG4gIHZhciBoID0gXCJzdXNwZW5kZWRTdGFydFwiLFxuICAgIGwgPSBcInN1c3BlbmRlZFlpZWxkXCIsXG4gICAgZiA9IFwiZXhlY3V0aW5nXCIsXG4gICAgcyA9IFwiY29tcGxldGVkXCIsXG4gICAgeSA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIHAgPSB7fTtcbiAgZGVmaW5lKHAsIGEsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBkID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIHYgPSBkICYmIGQoZCh2YWx1ZXMoW10pKSk7XG4gIHYgJiYgdiAhPT0gciAmJiBuLmNhbGwodiwgYSkgJiYgKHAgPSB2KTtcbiAgdmFyIGcgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShwKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHQpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZGVmaW5lKHQsIGUsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UoZSwgdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKHQsIGUpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UociwgbywgaSwgYSkge1xuICAgICAgdmFyIGMgPSB0cnlDYXRjaCh0W3JdLCB0LCBvKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IGMudHlwZSkge1xuICAgICAgICB2YXIgdSA9IGMuYXJnLFxuICAgICAgICAgIGggPSB1LnZhbHVlO1xuICAgICAgICByZXR1cm4gaCAmJiBcIm9iamVjdFwiID09IF90eXBlb2YoaCkgJiYgbi5jYWxsKGgsIFwiX19hd2FpdFwiKSA/IGUucmVzb2x2ZShoLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHQsIGksIGEpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIHQsIGksIGEpO1xuICAgICAgICB9KSA6IGUucmVzb2x2ZShoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgdS52YWx1ZSA9IHQsIGkodSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIHQsIGksIGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGEoYy5hcmcpO1xuICAgIH1cbiAgICB2YXIgcjtcbiAgICBvKHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUodCwgbikge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IGUoZnVuY3Rpb24gKGUsIHIpIHtcbiAgICAgICAgICAgIGludm9rZSh0LCBuLCBlLCByKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gciA9IHIgPyByLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChlLCByLCBuKSB7XG4gICAgdmFyIG8gPSBoO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaSwgYSkge1xuICAgICAgaWYgKG8gPT09IGYpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAobyA9PT0gcykge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBpKSB0aHJvdyBhO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiB0LFxuICAgICAgICAgIGRvbmU6ICEwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IgKG4ubWV0aG9kID0gaSwgbi5hcmcgPSBhOzspIHtcbiAgICAgICAgdmFyIGMgPSBuLmRlbGVnYXRlO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHZhciB1ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShjLCBuKTtcbiAgICAgICAgICBpZiAodSkge1xuICAgICAgICAgICAgaWYgKHUgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIHU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gbi5tZXRob2QpIG4uc2VudCA9IG4uX3NlbnQgPSBuLmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IG4ubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKG8gPT09IGgpIHRocm93IG8gPSBzLCBuLmFyZztcbiAgICAgICAgICBuLmRpc3BhdGNoRXhjZXB0aW9uKG4uYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IG4ubWV0aG9kICYmIG4uYWJydXB0KFwicmV0dXJuXCIsIG4uYXJnKTtcbiAgICAgICAgbyA9IGY7XG4gICAgICAgIHZhciBwID0gdHJ5Q2F0Y2goZSwgciwgbik7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSBwLnR5cGUpIHtcbiAgICAgICAgICBpZiAobyA9IG4uZG9uZSA/IHMgOiBsLCBwLmFyZyA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IG4uZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSBwLnR5cGUgJiYgKG8gPSBzLCBuLm1ldGhvZCA9IFwidGhyb3dcIiwgbi5hcmcgPSBwLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpIHtcbiAgICB2YXIgbiA9IHIubWV0aG9kLFxuICAgICAgbyA9IGUuaXRlcmF0b3Jbbl07XG4gICAgaWYgKG8gPT09IHQpIHJldHVybiByLmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBuICYmIGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKHIubWV0aG9kID0gXCJyZXR1cm5cIiwgci5hcmcgPSB0LCBtYXliZUludm9rZURlbGVnYXRlKGUsIHIpLCBcInRocm93XCIgPT09IHIubWV0aG9kKSB8fCBcInJldHVyblwiICE9PSBuICYmIChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBuICsgXCInIG1ldGhvZFwiKSksIHk7XG4gICAgdmFyIGkgPSB0cnlDYXRjaChvLCBlLml0ZXJhdG9yLCByLmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gaS50eXBlKSByZXR1cm4gci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gaS5hcmcsIHIuZGVsZWdhdGUgPSBudWxsLCB5O1xuICAgIHZhciBhID0gaS5hcmc7XG4gICAgcmV0dXJuIGEgPyBhLmRvbmUgPyAocltlLnJlc3VsdE5hbWVdID0gYS52YWx1ZSwgci5uZXh0ID0gZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSByLm1ldGhvZCAmJiAoci5tZXRob2QgPSBcIm5leHRcIiwgci5hcmcgPSB0KSwgci5kZWxlZ2F0ZSA9IG51bGwsIHkpIDogYSA6IChyLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIHIuZGVsZWdhdGUgPSBudWxsLCB5KTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkodCkge1xuICAgIHZhciBlID0ge1xuICAgICAgdHJ5TG9jOiB0WzBdXG4gICAgfTtcbiAgICAxIGluIHQgJiYgKGUuY2F0Y2hMb2MgPSB0WzFdKSwgMiBpbiB0ICYmIChlLmZpbmFsbHlMb2MgPSB0WzJdLCBlLmFmdGVyTG9jID0gdFszXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGUpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkodCkge1xuICAgIHZhciBlID0gdC5jb21wbGV0aW9uIHx8IHt9O1xuICAgIGUudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSBlLmFyZywgdC5jb21wbGV0aW9uID0gZTtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHQpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKGUpIHtcbiAgICBpZiAoZSB8fCBcIlwiID09PSBlKSB7XG4gICAgICB2YXIgciA9IGVbYV07XG4gICAgICBpZiAocikgcmV0dXJuIHIuY2FsbChlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUubmV4dCkgcmV0dXJuIGU7XG4gICAgICBpZiAoIWlzTmFOKGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgbyA9IC0xLFxuICAgICAgICAgIGkgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgZm9yICg7ICsrbyA8IGUubGVuZ3RoOykgaWYgKG4uY2FsbChlLCBvKSkgcmV0dXJuIG5leHQudmFsdWUgPSBlW29dLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGkubmV4dCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoX3R5cGVvZihlKSArIFwiIGlzIG5vdCBpdGVyYWJsZVwiKTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIG8oZywgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIG8oR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdCAmJiB0LmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWUgJiYgKGUgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGUuZGlzcGxheU5hbWUgfHwgZS5uYW1lKSk7XG4gIH0sIGUubWFyayA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZih0LCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAodC5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKHQsIHUsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCB0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZyksIHQ7XG4gIH0sIGUuYXdyYXAgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiB0XG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBjLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBlLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBlLmFzeW5jID0gZnVuY3Rpb24gKHQsIHIsIG4sIG8sIGkpIHtcbiAgICB2b2lkIDAgPT09IGkgJiYgKGkgPSBQcm9taXNlKTtcbiAgICB2YXIgYSA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAodCwgciwgbiwgbyksIGkpO1xuICAgIHJldHVybiBlLmlzR2VuZXJhdG9yRnVuY3Rpb24ocikgPyBhIDogYS5uZXh0KCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIHQuZG9uZSA/IHQudmFsdWUgOiBhLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKGcpLCBkZWZpbmUoZywgdSwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShnLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoZywgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBlLmtleXMgPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gT2JqZWN0KHQpLFxuICAgICAgciA9IFtdO1xuICAgIGZvciAodmFyIG4gaW4gZSkgci5wdXNoKG4pO1xuICAgIHJldHVybiByLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyByLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIHQgPSByLnBvcCgpO1xuICAgICAgICBpZiAodCBpbiBlKSByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGUudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoZSkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB0LCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFlKSBmb3IgKHZhciByIGluIHRoaXMpIFwidFwiID09PSByLmNoYXJBdCgwKSAmJiBuLmNhbGwodGhpcywgcikgJiYgIWlzTmFOKCtyLnNsaWNlKDEpKSAmJiAodGhpc1tyXSA9IHQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGUpIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGU7XG4gICAgICB2YXIgciA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobiwgbykge1xuICAgICAgICByZXR1cm4gYS50eXBlID0gXCJ0aHJvd1wiLCBhLmFyZyA9IGUsIHIubmV4dCA9IG4sIG8gJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksICEhbztcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIG8gPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgbyA+PSAwOyAtLW8pIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLnRyeUVudHJpZXNbb10sXG4gICAgICAgICAgYSA9IGkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBpLnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBjID0gbi5jYWxsKGksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICB1ID0gbi5jYWxsKGksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoYyAmJiB1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShpLmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgaS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0LCBlKSB7XG4gICAgICBmb3IgKHZhciByID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IHIgPj0gMDsgLS1yKSB7XG4gICAgICAgIHZhciBvID0gdGhpcy50cnlFbnRyaWVzW3JdO1xuICAgICAgICBpZiAoby50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIG4uY2FsbChvLCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgby5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGkgPSBvO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpICYmIChcImJyZWFrXCIgPT09IHQgfHwgXCJjb250aW51ZVwiID09PSB0KSAmJiBpLnRyeUxvYyA8PSBlICYmIGUgPD0gaS5maW5hbGx5TG9jICYmIChpID0gbnVsbCk7XG4gICAgICB2YXIgYSA9IGkgPyBpLmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiBhLnR5cGUgPSB0LCBhLmFyZyA9IGUsIGkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gaS5maW5hbGx5TG9jLCB5KSA6IHRoaXMuY29tcGxldGUoYSk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUodCwgZSkge1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gdC50eXBlKSB0aHJvdyB0LmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHQudHlwZSA/IHRoaXMubmV4dCA9IHQuYXJnIDogXCJyZXR1cm5cIiA9PT0gdC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gdC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSB0LnR5cGUgJiYgZSAmJiAodGhpcy5uZXh0ID0gZSksIHk7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaCh0KSB7XG4gICAgICBmb3IgKHZhciBlID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGUgPj0gMDsgLS1lKSB7XG4gICAgICAgIHZhciByID0gdGhpcy50cnlFbnRyaWVzW2VdO1xuICAgICAgICBpZiAoci5maW5hbGx5TG9jID09PSB0KSByZXR1cm4gdGhpcy5jb21wbGV0ZShyLmNvbXBsZXRpb24sIHIuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KHIpLCB5O1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIudHJ5TG9jID09PSB0KSB7XG4gICAgICAgICAgdmFyIG4gPSByLmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbi50eXBlKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG4uYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoZSwgciwgbikge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHIsXG4gICAgICAgIG5leHRMb2M6IG5cbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB0KSwgeTtcbiAgICB9XG4gIH0sIGU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG8pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLy8gVE9ETyhCYWJlbCA4KTogUmVtb3ZlIHRoaXMgZmlsZS5cblxudmFyIHJ1bnRpbWUgPSByZXF1aXJlKFwiLi4vaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWVcIikoKTtcbm1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcblxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9wYWNrYWdlcy9ydW50aW1lL3J1bnRpbWUuanMjTDczNj1cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRNb3ZpZUluZm8gZnJvbSAnLi4vZGV0YWlsJztcbmltcG9ydCB7IE1vdmllSW5mbyB9IGZyb20gJy4uL21vZGVscy9tb3ZpZS1pbmZvJztcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9tYWluLmNzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1vdmllKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBtb3ZpZUlkID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPScpWzFdO1xuICBjb25zdCBtb3ZpZSA9IGF3YWl0IGdldE1vdmllSW5mbygrbW92aWVJZCk7XG4gIGRpc3BsYXlNb3ZpZShtb3ZpZSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlNb3ZpZShtb3ZpZTogTW92aWVJbmZvKTogdm9pZCB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlscy10b3BcIj5cbiAgICAgICAgPGRpdj4ke21vdmllLnBvc3Rlcl9wYXRoID8gYDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7bW92aWUucG9zdGVyX3BhdGh9XCIgYWx0PVwiJHttb3ZpZS50aXRsZX1cIi8+YCA6IGA8aW1nIHNyYz1cIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTm8tSW1hZ2UuanBnXCIgYWx0PVwiJHttb3ZpZS50aXRsZX1cIiAvPmB9PC9kaXY+XG4gICAgICAgIDxkaXYgIGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICAgIDxoMj4ke21vdmllLnRpdGxlfTwvaDI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zdGFyIHJhdGluZ1wiPjwvaT5cbiAgICAgICAgICAgICR7bW92aWUudm90ZV9hdmVyYWdlLnRvRml4ZWQoMSl9IC8gMTBcbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+UHJlbWnDpHI6ICR7bW92aWUucmVsZWFzZV9kYXRlfTwvcD5cbiAgICAgICAgICA8cD4ke21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgICAgICA8aDU+R2VucmU8L2g1PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICR7bW92aWUuZ2VucmVzLm1hcCgoZ2VucmUpID0+IGA8bGk+JHtnZW5yZS5uYW1lfTwvbGk+YCkuam9pbignJyl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtbXV0ZWRcIj5Mw6RuZ2QgJHtNYXRoLmZsb29yKG1vdmllLnJ1bnRpbWUgLyA2MCl9IHRpbSAke21vdmllLnJ1bnRpbWUgJSA2MH0gbWluPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMnKSEuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscycpIS5hcHBlbmRDaGlsZChjcmVhdGVPdmVybGF5KG1vdmllKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkobW92aWU6IE1vdmllSW5mbyk6IEhUTUxEaXZFbGVtZW50IHtcbiAgY29uc3Qgb3ZlcmxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5RGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG1vdmllLmJhY2tkcm9wX3BhdGggPyBgdXJsKGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsLyR7bW92aWUuYmFja2Ryb3BfcGF0aH0pYCA6ICcnO1xuICBvdmVybGF5RGl2LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcbiAgb3ZlcmxheURpdi5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnY2VudGVyJztcbiAgb3ZlcmxheURpdi5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XG4gIG92ZXJsYXlEaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcbiAgb3ZlcmxheURpdi5zdHlsZS53aWR0aCA9ICcxMDB2dyc7XG4gIG92ZXJsYXlEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBvdmVybGF5RGl2LnN0eWxlLnRvcCA9ICcwJztcbiAgb3ZlcmxheURpdi5zdHlsZS5sZWZ0ID0gJzAnO1xuICBvdmVybGF5RGl2LnN0eWxlLnpJbmRleCA9ICctMSc7XG4gIG92ZXJsYXlEaXYuc3R5bGUub3BhY2l0eSA9ICcwLjQnO1xuXG4gIHJldHVybiBvdmVybGF5RGl2O1xufVxuXG5nZXRNb3ZpZSgpO1xuIl0sIm5hbWVzIjpbImZldGNoRGF0YSIsImdldE1vdmllSW5mbyIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImlkIiwicmVzcG9uc2UiLCJfeWllbGQkcmVzcG9uc2UkanNvbiIsImRhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiY29uY2F0Iiwic2VudCIsImpzb24iLCJhYnJ1cHQiLCJzdG9wIiwiX3giLCJhcHBseSIsImFyZ3VtZW50cyIsInN0YXRlIiwiZW5kcG9pbnQiLCJwYWdlIiwiY3JpdGVyaWEiLCJBUElfVVJMIiwidXJsIiwiX2FyZ3MiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhcGkiLCJiYXNlVXJsIiwiZmV0Y2giLCJnZXRNb3ZpZSIsIl9nZXRNb3ZpZSIsIm1vdmllSWQiLCJtb3ZpZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic3BsaXQiLCJkaXNwbGF5TW92aWUiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJwb3N0ZXJfcGF0aCIsInRpdGxlIiwidm90ZV9hdmVyYWdlIiwidG9GaXhlZCIsInJlbGVhc2VfZGF0ZSIsIm92ZXJ2aWV3IiwiZ2VucmVzIiwibWFwIiwiZ2VucmUiLCJuYW1lIiwiam9pbiIsIk1hdGgiLCJmbG9vciIsInJ1bnRpbWUiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVPdmVybGF5Iiwib3ZlcmxheURpdiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2Ryb3BfcGF0aCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4Iiwib3BhY2l0eSJdLCJzb3VyY2VSb290IjoiIn0=