/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/movies.ts":
/*!***********************!*\
  !*** ./src/movies.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listAllMovies: () => (/* binding */ listAllMovies),
/* harmony export */   searchMovies: () => (/* binding */ searchMovies)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/http */ "./src/utilities/http.ts");



var listAllMovies = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var page,
      response,
      _yield$response$json,
      data,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
          _context.next = 3;
          return (0,_utilities_http__WEBPACK_IMPORTED_MODULE_2__["default"])('movies/list', page);
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          _yield$response$json = _context.sent;
          data = _yield$response$json.data;
          return _context.abrupt("return", data);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function listAllMovies() {
    return _ref.apply(this, arguments);
  };
}();
var searchMovies = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(criteria) {
    var page,
      response,
      _yield$response$json2,
      data,
      _args2 = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          page = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1;
          _context2.next = 3;
          return (0,_utilities_http__WEBPACK_IMPORTED_MODULE_2__["default"])('movies/search', page, criteria);
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          _yield$response$json2 = _context2.sent;
          data = _yield$response$json2.data;
          return _context2.abrupt("return", data);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function searchMovies(_x) {
    return _ref2.apply(this, arguments);
  };
}();


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

/***/ "./src/assets/images/No-Image.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/No-Image.jpg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/No-Image-29e2084db9e51b9a41359935c16ae3e5.jpg");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/dom/movies-dom.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies */ "./src/movies.ts");
/* harmony import */ var _assets_images_No_Image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/No-Image.jpg */ "./src/assets/images/No-Image.jpg");
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/main.css */ "./src/assets/css/main.css");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




document.querySelector('#searchForm').addEventListener('submit', onSearch);
document.querySelector('#gotoFirst').addEventListener('click', onGotoFirstPageHandler);
document.querySelector('#gotoPrevious').addEventListener('click', onGotoPrevHandler);
document.querySelector('#gotoNext').addEventListener('click', onGotoNextPageHandler);
document.querySelector('#gotoLast').addEventListener('click', onGotoLastPageHandler);
var pageNumber = document.querySelector('#pageNo');
var pages = document.querySelector('#pages');
function getMovies() {
  return _getMovies.apply(this, arguments);
}
function _getMovies() {
  _getMovies = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var page,
      result,
      query,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
          query = document.querySelector('#searchInput').value;
          if (!query) {
            _context.next = 8;
            break;
          }
          _context.next = 5;
          return (0,_movies__WEBPACK_IMPORTED_MODULE_2__.searchMovies)(query, page);
        case 5:
          result = _context.sent;
          _context.next = 11;
          break;
        case 8:
          _context.next = 10;
          return (0,_movies__WEBPACK_IMPORTED_MODULE_2__.listAllMovies)(page);
        case 10:
          result = _context.sent;
        case 11:
          displayPagination(result);
          displayMovies(result);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getMovies.apply(this, arguments);
}
function displayMovies(_x) {
  return _displayMovies.apply(this, arguments);
}
function _displayMovies() {
  _displayMovies = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(result) {
    var app, movies, _iterator, _step, movie, div, imageAnchor, image, cardBody, heading, p, small;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          app = document.querySelector('#top-movies');
          app.innerHTML = '';
          movies = result.results;
          _iterator = _createForOfIteratorHelper(movies);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              movie = _step.value;
              div = document.createElement('div');
              imageAnchor = document.createElement('a');
              image = document.createElement('img');
              cardBody = document.createElement('div');
              heading = document.createElement('h5');
              p = document.createElement('p');
              small = document.createElement('small');
              div.classList.add('card');
              imageAnchor.href = "./movie-details.html?id=".concat(movie.id);
              image.alt = "alt=".concat(movie.title);
              image.src = movie.poster_path ? "https://image.tmdb.org/t/p/w500".concat(movie.poster_path) : _assets_images_No_Image_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]; //'../assets/images/No-Image.jpg';
              imageAnchor.appendChild(image);
              div.appendChild(imageAnchor);
              cardBody.classList.add('card-body');
              heading.classList.add('card-title');
              heading.textContent = movie.title;
              p.classList.add('card-text');
              p.classList.add('text-muted');
              small.textContent = "Premi\xE4r datum: ".concat(movie.release_date);
              p.appendChild(small);
              cardBody.appendChild(heading);
              cardBody.appendChild(p);
              div.appendChild(cardBody);
              app.appendChild(div);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _displayMovies.apply(this, arguments);
}
function displayPagination(data) {
  var pages = data.total_pages > 500 ? 500 : data.total_pages;
  var currentPage = document.querySelector('#pageNo');
  var numOfPages = document.querySelector('#pages');
  currentPage.innerHTML = data.page.toString();
  numOfPages.innerHTML = pages.toString();
}
function onGotoFirstPageHandler() {
  getMovies(1);
}
function onGotoPrevHandler() {
  var page = +pageNumber.innerHTML;
  page > 1 ? page-- : 1;
  getMovies(page);
}
function onGotoNextPageHandler() {
  return _onGotoNextPageHandler.apply(this, arguments);
}
function _onGotoNextPageHandler() {
  _onGotoNextPageHandler = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    var numOfPages, page;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          numOfPages = +pages.innerHTML;
          page = +pageNumber.innerHTML;
          page < numOfPages ? page++ : 500;
          getMovies(page);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _onGotoNextPageHandler.apply(this, arguments);
}
function onGotoLastPageHandler() {
  getMovies(+pages.innerHTML);
}
function onSearch(_x2) {
  return _onSearch.apply(this, arguments);
}
function _onSearch() {
  _onSearch = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(e) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          e.preventDefault();
          getMovies(1);
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _onSearch.apply(this, arguments);
}
getMovies();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9tb3ZpZXMudHMiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvLi9zcmMvdXRpbGl0aWVzL2h0dHAudHMiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvLi9zcmMvdXRpbGl0aWVzL3N0YXRlLnRzIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0Ly4vc3JjL2Fzc2V0cy9pbWFnZXMvTm8tSW1hZ2UuanBnIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0Ly4vc3JjL2Fzc2V0cy9jc3MvbWFpbi5jc3M/N2JlNiIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZS5qcyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL3NyYy9kb20vbW92aWVzLWRvbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vdXRpbGl0aWVzL2h0dHAnO1xuaW1wb3J0IHsgQmFzZUluZm8gfSBmcm9tICcuL21vZGVscy9iYXNlSW5mbyc7XG5cbmNvbnN0IGxpc3RBbGxNb3ZpZXMgPSBhc3luYyAocGFnZTogbnVtYmVyID0gMSk6IFByb21pc2U8QmFzZUluZm8+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGEoJ21vdmllcy9saXN0JywgcGFnZSk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YSBhcyBCYXNlSW5mbztcbn07XG5cbmNvbnN0IHNlYXJjaE1vdmllcyA9IGFzeW5jIChjcml0ZXJpYTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxKTogUHJvbWlzZTxCYXNlSW5mbz4gPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoRGF0YSgnbW92aWVzL3NlYXJjaCcsIHBhZ2UsIGNyaXRlcmlhKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGEgYXMgQmFzZUluZm87XG59O1xuXG5leHBvcnQgeyBsaXN0QWxsTW92aWVzLCBzZWFyY2hNb3ZpZXMgfTtcbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChlbmRwb2ludDogc3RyaW5nLCBwYWdlID0gMSwgY3JpdGVyaWE/OiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IEFQSV9VUkwgPSBzdGF0ZS5hcGkuYmFzZVVybDtcblxuICBsZXQgdXJsOiBzdHJpbmcgPSAnJztcblxuICBpZiAoY3JpdGVyaWEpIHtcbiAgICB1cmwgPSBgJHtBUElfVVJMfSR7ZW5kcG9pbnR9LyR7Y3JpdGVyaWF9JnBhZ2U9JHtwYWdlfWA7XG4gIH0gZWxzZSB7XG4gICAgdXJsID0gYCR7QVBJX1VSTH0ke2VuZHBvaW50fT9wYWdlPSR7cGFnZX1gO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgYXBpOiB7XG4gICAgYmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvJyxcbiAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL05vLUltYWdlLTI5ZTIwODRkYjllNTFiOWE0MTM1OTkzNWMxNmFlM2U1LmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIHQsXG4gICAgZSA9IHt9LFxuICAgIHIgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIG4gPSByLmhhc093blByb3BlcnR5LFxuICAgIG8gPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKHQsIGUsIHIpIHtcbiAgICAgIHRbZV0gPSByLnZhbHVlO1xuICAgIH0sXG4gICAgaSA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgYSA9IGkuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYyA9IGkuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHUgPSBpLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgZSwge1xuICAgICAgdmFsdWU6IHIsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgdFtlXTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKHQpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUodCwgZSwgcikge1xuICAgICAgcmV0dXJuIHRbZV0gPSByO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcCh0LCBlLCByLCBuKSB7XG4gICAgdmFyIGkgPSBlICYmIGUucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gZSA6IEdlbmVyYXRvcixcbiAgICAgIGEgPSBPYmplY3QuY3JlYXRlKGkucHJvdG90eXBlKSxcbiAgICAgIGMgPSBuZXcgQ29udGV4dChuIHx8IFtdKTtcbiAgICByZXR1cm4gbyhhLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QodCwgciwgYylcbiAgICB9KSwgYTtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaCh0LCBlLCByKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogdC5jYWxsKGUsIHIpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiB0XG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBlLndyYXAgPSB3cmFwO1xuICB2YXIgaCA9IFwic3VzcGVuZGVkU3RhcnRcIixcbiAgICBsID0gXCJzdXNwZW5kZWRZaWVsZFwiLFxuICAgIGYgPSBcImV4ZWN1dGluZ1wiLFxuICAgIHMgPSBcImNvbXBsZXRlZFwiLFxuICAgIHkgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBwID0ge307XG4gIGRlZmluZShwLCBhLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICB2ID0gZCAmJiBkKGQodmFsdWVzKFtdKSkpO1xuICB2ICYmIHYgIT09IHIgJiYgbi5jYWxsKHYsIGEpICYmIChwID0gdik7XG4gIHZhciBnID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocCk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyh0KSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlZmluZSh0LCBlLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKGUsIHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcih0LCBlKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKHIsIG8sIGksIGEpIHtcbiAgICAgIHZhciBjID0gdHJ5Q2F0Y2godFtyXSwgdCwgbyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSBjLnR5cGUpIHtcbiAgICAgICAgdmFyIHUgPSBjLmFyZyxcbiAgICAgICAgICBoID0gdS52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGggJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKGgpICYmIG4uY2FsbChoLCBcIl9fYXdhaXRcIikgPyBlLnJlc29sdmUoaC5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB0LCBpLCBhKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSkgOiBlLnJlc29sdmUoaCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHUudmFsdWUgPSB0LCBpKHUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCB0LCBpLCBhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhKGMuYXJnKTtcbiAgICB9XG4gICAgdmFyIHI7XG4gICAgbyh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHQsIG4pIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBlKGZ1bmN0aW9uIChlLCByKSB7XG4gICAgICAgICAgICBpbnZva2UodCwgbiwgZSwgcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHIgPSByID8gci50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoZSwgciwgbikge1xuICAgIHZhciBvID0gaDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGksIGEpIHtcbiAgICAgIGlmIChvID09PSBmKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgaWYgKG8gPT09IHMpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gaSkgdGhyb3cgYTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogdCxcbiAgICAgICAgICBkb25lOiAhMFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZm9yIChuLm1ldGhvZCA9IGksIG4uYXJnID0gYTs7KSB7XG4gICAgICAgIHZhciBjID0gbi5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICB2YXIgdSA9IG1heWJlSW52b2tlRGVsZWdhdGUoYywgbik7XG4gICAgICAgICAgaWYgKHUpIHtcbiAgICAgICAgICAgIGlmICh1ID09PSB5KSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiB1O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IG4ubWV0aG9kKSBuLnNlbnQgPSBuLl9zZW50ID0gbi5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBuLm1ldGhvZCkge1xuICAgICAgICAgIGlmIChvID09PSBoKSB0aHJvdyBvID0gcywgbi5hcmc7XG4gICAgICAgICAgbi5kaXNwYXRjaEV4Y2VwdGlvbihuLmFyZyk7XG4gICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBuLm1ldGhvZCAmJiBuLmFicnVwdChcInJldHVyblwiLCBuLmFyZyk7XG4gICAgICAgIG8gPSBmO1xuICAgICAgICB2YXIgcCA9IHRyeUNhdGNoKGUsIHIsIG4pO1xuICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcC50eXBlKSB7XG4gICAgICAgICAgaWYgKG8gPSBuLmRvbmUgPyBzIDogbCwgcC5hcmcgPT09IHkpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcC5hcmcsXG4gICAgICAgICAgICBkb25lOiBuLmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFwidGhyb3dcIiA9PT0gcC50eXBlICYmIChvID0gcywgbi5tZXRob2QgPSBcInRocm93XCIsIG4uYXJnID0gcC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShlLCByKSB7XG4gICAgdmFyIG4gPSByLm1ldGhvZCxcbiAgICAgIG8gPSBlLml0ZXJhdG9yW25dO1xuICAgIGlmIChvID09PSB0KSByZXR1cm4gci5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbiAmJiBlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChyLm1ldGhvZCA9IFwicmV0dXJuXCIsIHIuYXJnID0gdCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShlLCByKSwgXCJ0aHJvd1wiID09PSByLm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbiAmJiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbiArIFwiJyBtZXRob2RcIikpLCB5O1xuICAgIHZhciBpID0gdHJ5Q2F0Y2gobywgZS5pdGVyYXRvciwgci5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IGkudHlwZSkgcmV0dXJuIHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IGkuYXJnLCByLmRlbGVnYXRlID0gbnVsbCwgeTtcbiAgICB2YXIgYSA9IGkuYXJnO1xuICAgIHJldHVybiBhID8gYS5kb25lID8gKHJbZS5yZXN1bHROYW1lXSA9IGEudmFsdWUsIHIubmV4dCA9IGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gci5tZXRob2QgJiYgKHIubWV0aG9kID0gXCJuZXh0XCIsIHIuYXJnID0gdCksIHIuZGVsZWdhdGUgPSBudWxsLCB5KSA6IGEgOiAoci5tZXRob2QgPSBcInRocm93XCIsIHIuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCByLmRlbGVnYXRlID0gbnVsbCwgeSk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHtcbiAgICAgIHRyeUxvYzogdFswXVxuICAgIH07XG4gICAgMSBpbiB0ICYmIChlLmNhdGNoTG9jID0gdFsxXSksIDIgaW4gdCAmJiAoZS5maW5hbGx5TG9jID0gdFsyXSwgZS5hZnRlckxvYyA9IHRbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlKTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KHQpIHtcbiAgICB2YXIgZSA9IHQuY29tcGxldGlvbiB8fCB7fTtcbiAgICBlLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgZS5hcmcsIHQuY29tcGxldGlvbiA9IGU7XG4gIH1cbiAgZnVuY3Rpb24gQ29udGV4dCh0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhlKSB7XG4gICAgaWYgKGUgfHwgXCJcIiA9PT0gZSkge1xuICAgICAgdmFyIHIgPSBlW2FdO1xuICAgICAgaWYgKHIpIHJldHVybiByLmNhbGwoZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlLm5leHQpIHJldHVybiBlO1xuICAgICAgaWYgKCFpc05hTihlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIG8gPSAtMSxcbiAgICAgICAgICBpID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK28gPCBlLmxlbmd0aDspIGlmIChuLmNhbGwoZSwgbykpIHJldHVybiBuZXh0LnZhbHVlID0gZVtvXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBpLm5leHQgPSBpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKF90eXBlb2YoZSkgKyBcIiBpcyBub3QgaXRlcmFibGVcIik7XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBvKGcsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBvKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHUsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgdC5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFlICYmIChlID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChlLmRpc3BsYXlOYW1lIHx8IGUubmFtZSkpO1xuICB9LCBlLm1hcmsgPSBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YodCwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKHQuX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZSh0LCB1LCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGcpLCB0O1xuICB9LCBlLmF3cmFwID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogdFxuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZS5hc3luYyA9IGZ1bmN0aW9uICh0LCByLCBuLCBvLCBpKSB7XG4gICAgdm9pZCAwID09PSBpICYmIChpID0gUHJvbWlzZSk7XG4gICAgdmFyIGEgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKHQsIHIsIG4sIG8pLCBpKTtcbiAgICByZXR1cm4gZS5pc0dlbmVyYXRvckZ1bmN0aW9uKHIpID8gYSA6IGEubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0LmRvbmUgPyB0LnZhbHVlIDogYS5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhnKSwgZGVmaW5lKGcsIHUsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoZywgYSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKGcsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZS5rZXlzID0gZnVuY3Rpb24gKHQpIHtcbiAgICB2YXIgZSA9IE9iamVjdCh0KSxcbiAgICAgIHIgPSBbXTtcbiAgICBmb3IgKHZhciBuIGluIGUpIHIucHVzaChuKTtcbiAgICByZXR1cm4gci5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBmb3IgKDsgci5sZW5ndGg7KSB7XG4gICAgICAgIHZhciB0ID0gci5wb3AoKTtcbiAgICAgICAgaWYgKHQgaW4gZSkgcmV0dXJuIG5leHQudmFsdWUgPSB0LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBlLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KGUpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhZSkgZm9yICh2YXIgciBpbiB0aGlzKSBcInRcIiA9PT0gci5jaGFyQXQoMCkgJiYgbi5jYWxsKHRoaXMsIHIpICYmICFpc05hTigrci5zbGljZSgxKSkgJiYgKHRoaXNbcl0gPSB0KTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciB0ID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSB0LnR5cGUpIHRocm93IHQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihlKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBlO1xuICAgICAgdmFyIHIgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKG4sIG8pIHtcbiAgICAgICAgcmV0dXJuIGEudHlwZSA9IFwidGhyb3dcIiwgYS5hcmcgPSBlLCByLm5leHQgPSBuLCBvICYmIChyLm1ldGhvZCA9IFwibmV4dFwiLCByLmFyZyA9IHQpLCAhIW87XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBvID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IG8gPj0gMDsgLS1vKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy50cnlFbnRyaWVzW29dLFxuICAgICAgICAgIGEgPSBpLmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gaS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChpLnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgYyA9IG4uY2FsbChpLCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgdSA9IG4uY2FsbChpLCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgaWYgKGMgJiYgdSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoaS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYykge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoaS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXUpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShpLmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodCwgZSkge1xuICAgICAgZm9yICh2YXIgciA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyByID49IDA7IC0tcikge1xuICAgICAgICB2YXIgbyA9IHRoaXMudHJ5RW50cmllc1tyXTtcbiAgICAgICAgaWYgKG8udHJ5TG9jIDw9IHRoaXMucHJldiAmJiBuLmNhbGwobywgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IG8uZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBpID0gbztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaSAmJiAoXCJicmVha1wiID09PSB0IHx8IFwiY29udGludWVcIiA9PT0gdCkgJiYgaS50cnlMb2MgPD0gZSAmJiBlIDw9IGkuZmluYWxseUxvYyAmJiAoaSA9IG51bGwpO1xuICAgICAgdmFyIGEgPSBpID8gaS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gYS50eXBlID0gdCwgYS5hcmcgPSBlLCBpID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGkuZmluYWxseUxvYywgeSkgOiB0aGlzLmNvbXBsZXRlKGEpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHQsIGUpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHQudHlwZSkgdGhyb3cgdC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSB0LnR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0LnR5cGUgPyB0aGlzLm5leHQgPSB0LmFyZyA6IFwicmV0dXJuXCIgPT09IHQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gdC50eXBlICYmIGUgJiYgKHRoaXMubmV4dCA9IGUpLCB5O1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2godCkge1xuICAgICAgZm9yICh2YXIgZSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBlID49IDA7IC0tZSkge1xuICAgICAgICB2YXIgciA9IHRoaXMudHJ5RW50cmllc1tlXTtcbiAgICAgICAgaWYgKHIuZmluYWxseUxvYyA9PT0gdCkgcmV0dXJuIHRoaXMuY29tcGxldGUoci5jb21wbGV0aW9uLCByLmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShyKSwgeTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLnRyeUxvYyA9PT0gdCkge1xuICAgICAgICAgIHZhciBuID0gci5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IG4udHlwZSkge1xuICAgICAgICAgICAgdmFyIG8gPSBuLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkocik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGUsIHIsIG4pIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGUpLFxuICAgICAgICByZXN1bHROYW1lOiByLFxuICAgICAgICBuZXh0TG9jOiBuXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdCksIHk7XG4gICAgfVxuICB9LCBlO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IEJhc2VJbmZvIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2VJbmZvJztcbmltcG9ydCB7IGxpc3RBbGxNb3ZpZXMsIHNlYXJjaE1vdmllcyB9IGZyb20gJy4uL21vdmllcyc7XG5pbXBvcnQgbm9JbWFnZSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL05vLUltYWdlLmpwZyc7XG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3MvbWFpbi5jc3MnO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxGb3JtRWxlbWVudD4oJyNzZWFyY2hGb3JtJykhLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU2VhcmNoKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNwYW5FbGVtZW50PignI2dvdG9GaXJzdCcpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uR290b0ZpcnN0UGFnZUhhbmRsZXIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KCcjZ290b1ByZXZpb3VzJykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Hb3RvUHJldkhhbmRsZXIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KCcjZ290b05leHQnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkdvdG9OZXh0UGFnZUhhbmRsZXIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KCcjZ290b0xhc3QnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkdvdG9MYXN0UGFnZUhhbmRsZXIpO1xuXG5jb25zdCBwYWdlTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KCcjcGFnZU5vJyk7XG5jb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNwYW5FbGVtZW50PignI3BhZ2VzJyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE1vdmllcyhwYWdlOiBudW1iZXIgPSAxKTogUHJvbWlzZTx2b2lkPiB7XG4gIGxldCByZXN1bHQ6IEJhc2VJbmZvO1xuICBsZXQgcXVlcnk6IHN0cmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTElucHV0RWxlbWVudD4oJyNzZWFyY2hJbnB1dCcpIS52YWx1ZTtcblxuICBpZiAocXVlcnkpIHtcbiAgICByZXN1bHQgPSBhd2FpdCBzZWFyY2hNb3ZpZXMocXVlcnksIHBhZ2UpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGF3YWl0IGxpc3RBbGxNb3ZpZXMocGFnZSk7XG4gIH1cblxuICBkaXNwbGF5UGFnaW5hdGlvbihyZXN1bHQpO1xuICBkaXNwbGF5TW92aWVzKHJlc3VsdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlNb3ZpZXMocmVzdWx0OiBCYXNlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wLW1vdmllcycpIGFzIEhUTUxEaXZFbGVtZW50O1xuICBhcHAuaW5uZXJIVE1MID0gJyc7XG5cbiAgY29uc3QgbW92aWVzID0gcmVzdWx0LnJlc3VsdHM7XG5cbiAgZm9yIChsZXQgbW92aWUgb2YgbW92aWVzKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBjYXJkQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgc21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICBpbWFnZUFuY2hvci5ocmVmID0gYC4vbW92aWUtZGV0YWlscy5odG1sP2lkPSR7bW92aWUuaWR9YDtcbiAgICBpbWFnZS5hbHQgPSBgYWx0PSR7bW92aWUudGl0bGV9YDtcbiAgICBpbWFnZS5zcmMgPSBtb3ZpZS5wb3N0ZXJfcGF0aCA/IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHttb3ZpZS5wb3N0ZXJfcGF0aH1gIDogbm9JbWFnZTsgLy8nLi4vYXNzZXRzL2ltYWdlcy9Oby1JbWFnZS5qcGcnO1xuICAgIGltYWdlQW5jaG9yLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2VBbmNob3IpO1xuXG4gICAgY2FyZEJvZHkuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5Jyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IG1vdmllLnRpdGxlO1xuXG4gICAgcC5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3RleHQtbXV0ZWQnKTtcbiAgICBzbWFsbC50ZXh0Q29udGVudCA9IGBQcmVtacOkciBkYXR1bTogJHttb3ZpZS5yZWxlYXNlX2RhdGV9YDtcbiAgICBwLmFwcGVuZENoaWxkKHNtYWxsKTtcblxuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNhcmRCb2R5LmFwcGVuZENoaWxkKHApO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjYXJkQm9keSk7XG4gICAgYXBwLmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVBhZ2luYXRpb24oZGF0YTogQmFzZUluZm8pOiB2b2lkIHtcbiAgY29uc3QgcGFnZXMgPSBkYXRhLnRvdGFsX3BhZ2VzID4gNTAwID8gNTAwIDogZGF0YS50b3RhbF9wYWdlcztcbiAgY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZU5vJykhO1xuICBjb25zdCBudW1PZlBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2VzJykhO1xuICBjdXJyZW50UGFnZS5pbm5lckhUTUwgPSBkYXRhLnBhZ2UudG9TdHJpbmcoKTtcbiAgbnVtT2ZQYWdlcy5pbm5lckhUTUwgPSBwYWdlcy50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiBvbkdvdG9GaXJzdFBhZ2VIYW5kbGVyKCk6IHZvaWQge1xuICBnZXRNb3ZpZXMoMSk7XG59XG5cbmZ1bmN0aW9uIG9uR290b1ByZXZIYW5kbGVyKCk6IHZvaWQge1xuICBsZXQgcGFnZTogbnVtYmVyID0gK3BhZ2VOdW1iZXIhLmlubmVySFRNTDtcbiAgcGFnZSA+IDEgPyBwYWdlLS0gOiAxO1xuICBnZXRNb3ZpZXMocGFnZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9uR290b05leHRQYWdlSGFuZGxlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgbnVtT2ZQYWdlczogbnVtYmVyID0gK3BhZ2VzIS5pbm5lckhUTUw7XG4gIGxldCBwYWdlOiBudW1iZXIgPSArcGFnZU51bWJlciEuaW5uZXJIVE1MO1xuICBwYWdlIDwgbnVtT2ZQYWdlcyA/IHBhZ2UrKyA6IDUwMDtcbiAgZ2V0TW92aWVzKHBhZ2UpO1xufVxuXG5mdW5jdGlvbiBvbkdvdG9MYXN0UGFnZUhhbmRsZXIoKTogdm9pZCB7XG4gIGdldE1vdmllcygrcGFnZXMhLmlubmVySFRNTCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9uU2VhcmNoKGU6IFN1Ym1pdEV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBnZXRNb3ZpZXMoMSk7XG59XG5cbmdldE1vdmllcygpO1xuIl0sIm5hbWVzIjpbImZldGNoRGF0YSIsImxpc3RBbGxNb3ZpZXMiLCJfcmVmIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJwYWdlIiwicmVzcG9uc2UiLCJfeWllbGQkcmVzcG9uc2UkanNvbiIsImRhdGEiLCJfYXJncyIsImFyZ3VtZW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzZW50IiwianNvbiIsImFicnVwdCIsInN0b3AiLCJhcHBseSIsInNlYXJjaE1vdmllcyIsIl9yZWYyIiwiX2NhbGxlZTIiLCJjcml0ZXJpYSIsIl95aWVsZCRyZXNwb25zZSRqc29uMiIsIl9hcmdzMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94Iiwic3RhdGUiLCJlbmRwb2ludCIsIkFQSV9VUkwiLCJ1cmwiLCJhcGkiLCJiYXNlVXJsIiwiY29uY2F0IiwiZmV0Y2giLCJub0ltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uU2VhcmNoIiwib25Hb3RvRmlyc3RQYWdlSGFuZGxlciIsIm9uR290b1ByZXZIYW5kbGVyIiwib25Hb3RvTmV4dFBhZ2VIYW5kbGVyIiwib25Hb3RvTGFzdFBhZ2VIYW5kbGVyIiwicGFnZU51bWJlciIsInBhZ2VzIiwiZ2V0TW92aWVzIiwiX2dldE1vdmllcyIsInJlc3VsdCIsInF1ZXJ5IiwidmFsdWUiLCJkaXNwbGF5UGFnaW5hdGlvbiIsImRpc3BsYXlNb3ZpZXMiLCJfZGlzcGxheU1vdmllcyIsImFwcCIsIm1vdmllcyIsIl9pdGVyYXRvciIsIl9zdGVwIiwibW92aWUiLCJkaXYiLCJpbWFnZUFuY2hvciIsImltYWdlIiwiY2FyZEJvZHkiLCJoZWFkaW5nIiwicCIsInNtYWxsIiwiaW5uZXJIVE1MIiwicmVzdWx0cyIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwicyIsIm4iLCJkb25lIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhyZWYiLCJpZCIsImFsdCIsInRpdGxlIiwic3JjIiwicG9zdGVyX3BhdGgiLCJhcHBlbmRDaGlsZCIsInRleHRDb250ZW50IiwicmVsZWFzZV9kYXRlIiwiZXJyIiwiZSIsImYiLCJ0b3RhbF9wYWdlcyIsImN1cnJlbnRQYWdlIiwibnVtT2ZQYWdlcyIsInRvU3RyaW5nIiwiX29uR290b05leHRQYWdlSGFuZGxlciIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3gyIiwiX29uU2VhcmNoIiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=