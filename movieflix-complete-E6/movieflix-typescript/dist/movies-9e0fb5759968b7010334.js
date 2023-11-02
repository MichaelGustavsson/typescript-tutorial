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
/*!*******************************!*\
  !*** ./src/dom/movies-dom.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies */ "./src/movies.ts");
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/main.css */ "./src/assets/css/main.css");

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
              image.src = movie.poster_path ? "https://image.tmdb.org/t/p/w500".concat(movie.poster_path) : '../dist/assets/images/No-Image.jpg';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZUFBZTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQyx5QkFBeUIsU0FBUyx5QkFBeUI7Ozs7Ozs7Ozs7QUMvU2pHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUcsRUFBRSx5QkFBeUIsU0FBUyx5QkFBeUI7QUFDaEU7QUFDQSwwQkFBMEIseUJBQXlCLFNBQVMseUJBQXlCOzs7Ozs7Ozs7O0FDVHJGOztBQUVBLGNBQWMsbUJBQU8sQ0FBQyxrR0FBK0I7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMd0Q7QUFDeEI7QUFFaENHLFFBQVEsQ0FBQ0MsYUFBYSxDQUFrQixhQUFhLENBQUMsQ0FBRUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFQyxRQUFRLENBQUM7QUFDNUZILFFBQVEsQ0FBQ0MsYUFBYSxDQUFrQixZQUFZLENBQUMsQ0FBRUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFRSxzQkFBc0IsQ0FBQztBQUN4R0osUUFBUSxDQUFDQyxhQUFhLENBQWtCLGVBQWUsQ0FBQyxDQUFFQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVHLGlCQUFpQixDQUFDO0FBQ3RHTCxRQUFRLENBQUNDLGFBQWEsQ0FBa0IsV0FBVyxDQUFDLENBQUVDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUkscUJBQXFCLENBQUM7QUFDdEdOLFFBQVEsQ0FBQ0MsYUFBYSxDQUFrQixXQUFXLENBQUMsQ0FBRUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFSyxxQkFBcUIsQ0FBQztBQUV0RyxJQUFNQyxVQUFVLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFrQixTQUFTLENBQUM7QUFDckUsSUFBTVEsS0FBSyxHQUFHVCxRQUFRLENBQUNDLGFBQWEsQ0FBa0IsUUFBUSxDQUFDO0FBQUMsU0FFakRTLFNBQVNBLENBQUE7RUFBQSxPQUFBQyxVQUFBLENBQUE3QixLQUFBLE9BQUFaLFNBQUE7QUFBQTtBQUFBLFNBQUF5QyxXQUFBO0VBQUFBLFVBQUEsR0FBQWxELG1GQUFBLGVBQUFDLHNFQUFBLENBQXhCLFNBQUFFLFFBQUE7SUFBQSxJQUFBQyxJQUFBO01BQUErQyxNQUFBO01BQUFDLEtBQUE7TUFBQTVDLEtBQUEsR0FBQUMsU0FBQTtJQUFBLE9BQUFSLHNFQUFBLFVBQUFVLFNBQUFDLFFBQUE7TUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtRQUFBO1VBQXlCVixJQUFZLEdBQUFJLEtBQUEsQ0FBQU8sTUFBQSxRQUFBUCxLQUFBLFFBQUFRLFNBQUEsR0FBQVIsS0FBQSxNQUFHLENBQUM7VUFFbkM0QyxLQUFhLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBYSxDQUFtQixjQUFjLENBQUMsQ0FBRWEsS0FBSztVQUFBLEtBRS9FRCxLQUFLO1lBQUF4QyxRQUFBLENBQUFFLElBQUE7WUFBQTtVQUFBO1VBQUFGLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BQ1FRLHFEQUFZLENBQUM4QixLQUFLLEVBQUVoRCxJQUFJLENBQUM7UUFBQTtVQUF4QytDLE1BQU0sR0FBQXZDLFFBQUEsQ0FBQUssSUFBQTtVQUFBTCxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRVNoQixzREFBYSxDQUFDTSxJQUFJLENBQUM7UUFBQTtVQUFsQytDLE1BQU0sR0FBQXZDLFFBQUEsQ0FBQUssSUFBQTtRQUFBO1VBR1JxQyxpQkFBaUIsQ0FBQ0gsTUFBTSxDQUFDO1VBQ3pCSSxhQUFhLENBQUNKLE1BQU0sQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBdkMsUUFBQSxDQUFBUSxJQUFBO01BQUE7SUFBQSxHQUFBakIsT0FBQTtFQUFBLENBQ3ZCO0VBQUEsT0FBQStDLFVBQUEsQ0FBQTdCLEtBQUEsT0FBQVosU0FBQTtBQUFBO0FBQUEsU0FFYzhDLGFBQWFBLENBQUF6QixFQUFBO0VBQUEsT0FBQTBCLGNBQUEsQ0FBQW5DLEtBQUEsT0FBQVosU0FBQTtBQUFBO0FBQUEsU0FBQStDLGVBQUE7RUFBQUEsY0FBQSxHQUFBeEQsbUZBQUEsZUFBQUMsc0VBQUEsQ0FBNUIsU0FBQXVCLFNBQTZCMkIsTUFBZ0I7SUFBQSxJQUFBTSxHQUFBLEVBQUFDLE1BQUEsRUFBQUMsU0FBQSxFQUFBQyxLQUFBLEVBQUFDLEtBQUEsRUFBQUMsR0FBQSxFQUFBQyxXQUFBLEVBQUFDLEtBQUEsRUFBQUMsUUFBQSxFQUFBQyxPQUFBLEVBQUFDLENBQUEsRUFBQUMsS0FBQTtJQUFBLE9BQUFuRSxzRUFBQSxVQUFBMkIsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFoQixJQUFBLEdBQUFnQixTQUFBLENBQUFmLElBQUE7UUFBQTtVQUNyQzJDLEdBQUcsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztVQUNqRGlCLEdBQUcsQ0FBQ1ksU0FBUyxHQUFHLEVBQUU7VUFFWlgsTUFBTSxHQUFHUCxNQUFNLENBQUNtQixPQUFPO1VBQUFYLFNBQUEsR0FBQVksMEJBQUEsQ0FFWGIsTUFBTTtVQUFBO1lBQXhCLEtBQUFDLFNBQUEsQ0FBQWEsQ0FBQSxNQUFBWixLQUFBLEdBQUFELFNBQUEsQ0FBQWMsQ0FBQSxJQUFBQyxJQUFBLEdBQTBCO2NBQWpCYixLQUFLLEdBQUFELEtBQUEsQ0FBQVAsS0FBQTtjQUNOUyxHQUFHLEdBQUd2QixRQUFRLENBQUNvQyxhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ25DWixXQUFXLEdBQUd4QixRQUFRLENBQUNvQyxhQUFhLENBQUMsR0FBRyxDQUFDO2NBQ3pDWCxLQUFLLEdBQUd6QixRQUFRLENBQUNvQyxhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ3JDVixRQUFRLEdBQUcxQixRQUFRLENBQUNvQyxhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ3hDVCxPQUFPLEdBQUczQixRQUFRLENBQUNvQyxhQUFhLENBQUMsSUFBSSxDQUFDO2NBQ3RDUixDQUFDLEdBQUc1QixRQUFRLENBQUNvQyxhQUFhLENBQUMsR0FBRyxDQUFDO2NBQy9CUCxLQUFLLEdBQUc3QixRQUFRLENBQUNvQyxhQUFhLENBQUMsT0FBTyxDQUFDO2NBRTdDYixHQUFHLENBQUNjLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztjQUN6QmQsV0FBVyxDQUFDZSxJQUFJLDhCQUFBekMsTUFBQSxDQUE4QndCLEtBQUssQ0FBQ2tCLEVBQUUsQ0FBRTtjQUN4RGYsS0FBSyxDQUFDZ0IsR0FBRyxVQUFBM0MsTUFBQSxDQUFVd0IsS0FBSyxDQUFDb0IsS0FBSyxDQUFFO2NBQ2hDakIsS0FBSyxDQUFDa0IsR0FBRyxHQUFHckIsS0FBSyxDQUFDc0IsV0FBVyxxQ0FBQTlDLE1BQUEsQ0FBcUN3QixLQUFLLENBQUNzQixXQUFXLElBQUssb0NBQW9DO2NBQzVIcEIsV0FBVyxDQUFDcUIsV0FBVyxDQUFDcEIsS0FBSyxDQUFDO2NBQzlCRixHQUFHLENBQUNzQixXQUFXLENBQUNyQixXQUFXLENBQUM7Y0FFNUJFLFFBQVEsQ0FBQ1csU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO2NBQ25DWCxPQUFPLENBQUNVLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztjQUNuQ1gsT0FBTyxDQUFDbUIsV0FBVyxHQUFHeEIsS0FBSyxDQUFDb0IsS0FBSztjQUVqQ2QsQ0FBQyxDQUFDUyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7Y0FDNUJWLENBQUMsQ0FBQ1MsU0FBUyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO2NBQzdCVCxLQUFLLENBQUNpQixXQUFXLHdCQUFBaEQsTUFBQSxDQUFxQndCLEtBQUssQ0FBQ3lCLFlBQVksQ0FBRTtjQUMxRG5CLENBQUMsQ0FBQ2lCLFdBQVcsQ0FBQ2hCLEtBQUssQ0FBQztjQUVwQkgsUUFBUSxDQUFDbUIsV0FBVyxDQUFDbEIsT0FBTyxDQUFDO2NBQzdCRCxRQUFRLENBQUNtQixXQUFXLENBQUNqQixDQUFDLENBQUM7Y0FDdkJMLEdBQUcsQ0FBQ3NCLFdBQVcsQ0FBQ25CLFFBQVEsQ0FBQztjQUN6QlIsR0FBRyxDQUFDMkIsV0FBVyxDQUFDdEIsR0FBRyxDQUFDO1lBQ3RCO1VBQUMsU0FBQXlCLEdBQUE7WUFBQTVCLFNBQUEsQ0FBQTZCLENBQUEsQ0FBQUQsR0FBQTtVQUFBO1lBQUE1QixTQUFBLENBQUE4QixDQUFBO1VBQUE7UUFBQTtRQUFBO1VBQUEsT0FBQTVELFNBQUEsQ0FBQVQsSUFBQTtNQUFBO0lBQUEsR0FBQUksUUFBQTtFQUFBLENBQ0Y7RUFBQSxPQUFBZ0MsY0FBQSxDQUFBbkMsS0FBQSxPQUFBWixTQUFBO0FBQUE7QUFFRCxTQUFTNkMsaUJBQWlCQSxDQUFDL0MsSUFBYyxFQUFRO0VBQy9DLElBQU15QyxLQUFLLEdBQUd6QyxJQUFJLENBQUNtRixXQUFXLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBR25GLElBQUksQ0FBQ21GLFdBQVc7RUFDN0QsSUFBTUMsV0FBVyxHQUFHcEQsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFFO0VBQ3RELElBQU1vRCxVQUFVLEdBQUdyRCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUU7RUFDcERtRCxXQUFXLENBQUN0QixTQUFTLEdBQUc5RCxJQUFJLENBQUNILElBQUksQ0FBQ3lGLFFBQVEsQ0FBQyxDQUFDO0VBQzVDRCxVQUFVLENBQUN2QixTQUFTLEdBQUdyQixLQUFLLENBQUM2QyxRQUFRLENBQUMsQ0FBQztBQUN6QztBQUVBLFNBQVNsRCxzQkFBc0JBLENBQUEsRUFBUztFQUN0Q00sU0FBUyxDQUFDLENBQUMsQ0FBQztBQUNkO0FBRUEsU0FBU0wsaUJBQWlCQSxDQUFBLEVBQVM7RUFDakMsSUFBSXhDLElBQVksR0FBRyxDQUFDMkMsVUFBVSxDQUFFc0IsU0FBUztFQUN6Q2pFLElBQUksR0FBRyxDQUFDLEdBQUdBLElBQUksRUFBRSxHQUFHLENBQUM7RUFDckI2QyxTQUFTLENBQUM3QyxJQUFJLENBQUM7QUFDakI7QUFBQyxTQUVjeUMscUJBQXFCQSxDQUFBO0VBQUEsT0FBQWlELHNCQUFBLENBQUF6RSxLQUFBLE9BQUFaLFNBQUE7QUFBQTtBQUFBLFNBQUFxRix1QkFBQTtFQUFBQSxzQkFBQSxHQUFBOUYsbUZBQUEsZUFBQUMsc0VBQUEsQ0FBcEMsU0FBQThGLFNBQUE7SUFBQSxJQUFBSCxVQUFBLEVBQUF4RixJQUFBO0lBQUEsT0FBQUgsc0VBQUEsVUFBQStGLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBcEYsSUFBQSxHQUFBb0YsU0FBQSxDQUFBbkYsSUFBQTtRQUFBO1VBQ1E4RSxVQUFrQixHQUFHLENBQUM1QyxLQUFLLENBQUVxQixTQUFTO1VBQ3hDakUsSUFBWSxHQUFHLENBQUMyQyxVQUFVLENBQUVzQixTQUFTO1VBQ3pDakUsSUFBSSxHQUFHd0YsVUFBVSxHQUFHeEYsSUFBSSxFQUFFLEdBQUcsR0FBRztVQUNoQzZDLFNBQVMsQ0FBQzdDLElBQUksQ0FBQztRQUFDO1FBQUE7VUFBQSxPQUFBNkYsU0FBQSxDQUFBN0UsSUFBQTtNQUFBO0lBQUEsR0FBQTJFLFFBQUE7RUFBQSxDQUNqQjtFQUFBLE9BQUFELHNCQUFBLENBQUF6RSxLQUFBLE9BQUFaLFNBQUE7QUFBQTtBQUVELFNBQVNxQyxxQkFBcUJBLENBQUEsRUFBUztFQUNyQ0csU0FBUyxDQUFDLENBQUNELEtBQUssQ0FBRXFCLFNBQVMsQ0FBQztBQUM5QjtBQUFDLFNBRWMzQixRQUFRQSxDQUFBd0QsR0FBQTtFQUFBLE9BQUFDLFNBQUEsQ0FBQTlFLEtBQUEsT0FBQVosU0FBQTtBQUFBO0FBQUEsU0FBQTBGLFVBQUE7RUFBQUEsU0FBQSxHQUFBbkcsbUZBQUEsZUFBQUMsc0VBQUEsQ0FBdkIsU0FBQW1HLFNBQXdCWixDQUFjO0lBQUEsT0FBQXZGLHNFQUFBLFVBQUFvRyxVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQXpGLElBQUEsR0FBQXlGLFNBQUEsQ0FBQXhGLElBQUE7UUFBQTtVQUNwQzBFLENBQUMsQ0FBQ2UsY0FBYyxDQUFDLENBQUM7VUFFbEJ0RCxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQUM7UUFBQTtVQUFBLE9BQUFxRCxTQUFBLENBQUFsRixJQUFBO01BQUE7SUFBQSxHQUFBZ0YsUUFBQTtFQUFBLENBQ2Q7RUFBQSxPQUFBRCxTQUFBLENBQUE5RSxLQUFBLE9BQUFaLFNBQUE7QUFBQTtBQUVEd0MsU0FBUyxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0Ly4vc3JjL21vdmllcy50cyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL3NyYy91dGlsaXRpZXMvaHR0cC50cyIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL3NyYy91dGlsaXRpZXMvc3RhdGUudHMiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvLi9zcmMvYXNzZXRzL2Nzcy9tYWluLmNzcz83YmU2Iiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vdmllZmxpeC10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW92aWVmbGl4LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb3ZpZWZsaXgtdHlwZXNjcmlwdC8uL3NyYy9kb20vbW92aWVzLWRvbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2hEYXRhIGZyb20gJy4vdXRpbGl0aWVzL2h0dHAnO1xuaW1wb3J0IHsgQmFzZUluZm8gfSBmcm9tICcuL21vZGVscy9iYXNlSW5mbyc7XG5cbmNvbnN0IGxpc3RBbGxNb3ZpZXMgPSBhc3luYyAocGFnZTogbnVtYmVyID0gMSk6IFByb21pc2U8QmFzZUluZm8+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaERhdGEoJ21vdmllcy9saXN0JywgcGFnZSk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YSBhcyBCYXNlSW5mbztcbn07XG5cbmNvbnN0IHNlYXJjaE1vdmllcyA9IGFzeW5jIChjcml0ZXJpYTogc3RyaW5nLCBwYWdlOiBudW1iZXIgPSAxKTogUHJvbWlzZTxCYXNlSW5mbz4gPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoRGF0YSgnbW92aWVzL3NlYXJjaCcsIHBhZ2UsIGNyaXRlcmlhKTtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGEgYXMgQmFzZUluZm87XG59O1xuXG5leHBvcnQgeyBsaXN0QWxsTW92aWVzLCBzZWFyY2hNb3ZpZXMgfTtcbiIsImltcG9ydCB7IHN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbmNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChlbmRwb2ludDogc3RyaW5nLCBwYWdlID0gMSwgY3JpdGVyaWE/OiBzdHJpbmcpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGNvbnN0IEFQSV9VUkwgPSBzdGF0ZS5hcGkuYmFzZVVybDtcblxuICBsZXQgdXJsOiBzdHJpbmcgPSAnJztcblxuICBpZiAoY3JpdGVyaWEpIHtcbiAgICB1cmwgPSBgJHtBUElfVVJMfSR7ZW5kcG9pbnR9LyR7Y3JpdGVyaWF9JnBhZ2U9JHtwYWdlfWA7XG4gIH0gZWxzZSB7XG4gICAgdXJsID0gYCR7QVBJX1VSTH0ke2VuZHBvaW50fT9wYWdlPSR7cGFnZX1gO1xuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZldGNoRGF0YTtcbiIsImV4cG9ydCBjb25zdCBzdGF0ZSA9IHtcbiAgYXBpOiB7XG4gICAgYmFzZVVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvJyxcbiAgfSxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICAgIHJldHVybiBlO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHZhciB0LFxuICAgIGUgPSB7fSxcbiAgICByID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBuID0gci5oYXNPd25Qcm9wZXJ0eSxcbiAgICBvID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uICh0LCBlLCByKSB7XG4gICAgICB0W2VdID0gci52YWx1ZTtcbiAgICB9LFxuICAgIGkgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgIGEgPSBpLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgIGMgPSBpLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICB1ID0gaS50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcbiAgZnVuY3Rpb24gZGVmaW5lKHQsIGUsIHIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIGUsIHtcbiAgICAgIHZhbHVlOiByLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIHRbZV07XG4gIH1cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoICh0KSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKHQsIGUsIHIpIHtcbiAgICAgIHJldHVybiB0W2VdID0gcjtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdyYXAodCwgZSwgciwgbikge1xuICAgIHZhciBpID0gZSAmJiBlLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IGUgOiBHZW5lcmF0b3IsXG4gICAgICBhID0gT2JqZWN0LmNyZWF0ZShpLnByb3RvdHlwZSksXG4gICAgICBjID0gbmV3IENvbnRleHQobiB8fCBbXSk7XG4gICAgcmV0dXJuIG8oYSwgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKHQsIHIsIGMpXG4gICAgfSksIGE7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2godCwgZSwgcikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICBhcmc6IHQuY2FsbChlLCByKVxuICAgICAgfTtcbiAgICB9IGNhdGNoICh0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogdFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZS53cmFwID0gd3JhcDtcbiAgdmFyIGggPSBcInN1c3BlbmRlZFN0YXJ0XCIsXG4gICAgbCA9IFwic3VzcGVuZGVkWWllbGRcIixcbiAgICBmID0gXCJleGVjdXRpbmdcIixcbiAgICBzID0gXCJjb21wbGV0ZWRcIixcbiAgICB5ID0ge307XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICB2YXIgcCA9IHt9O1xuICBkZWZpbmUocCwgYSwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgdiA9IGQgJiYgZChkKHZhbHVlcyhbXSkpKTtcbiAgdiAmJiB2ICE9PSByICYmIG4uY2FsbCh2LCBhKSAmJiAocCA9IHYpO1xuICB2YXIgZyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHApO1xuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHModCkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWZpbmUodCwgZSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShlLCB0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IodCwgZSkge1xuICAgIGZ1bmN0aW9uIGludm9rZShyLCBvLCBpLCBhKSB7XG4gICAgICB2YXIgYyA9IHRyeUNhdGNoKHRbcl0sIHQsIG8pO1xuICAgICAgaWYgKFwidGhyb3dcIiAhPT0gYy50eXBlKSB7XG4gICAgICAgIHZhciB1ID0gYy5hcmcsXG4gICAgICAgICAgaCA9IHUudmFsdWU7XG4gICAgICAgIHJldHVybiBoICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZihoKSAmJiBuLmNhbGwoaCwgXCJfX2F3YWl0XCIpID8gZS5yZXNvbHZlKGguX19hd2FpdCkudGhlbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0pIDogZS5yZXNvbHZlKGgpLnRoZW4oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICB1LnZhbHVlID0gdCwgaSh1KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgdCwgaSwgYSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYShjLmFyZyk7XG4gICAgfVxuICAgIHZhciByO1xuICAgIG8odGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZSh0LCBuKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgZShmdW5jdGlvbiAoZSwgcikge1xuICAgICAgICAgICAgaW52b2tlKHQsIG4sIGUsIHIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByID0gciA/IHIudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGUsIHIsIG4pIHtcbiAgICB2YXIgbyA9IGg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpLCBhKSB7XG4gICAgICBpZiAobyA9PT0gZikgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChvID09PSBzKSB7XG4gICAgICAgIGlmIChcInRocm93XCIgPT09IGkpIHRocm93IGE7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IHQsXG4gICAgICAgICAgZG9uZTogITBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGZvciAobi5tZXRob2QgPSBpLCBuLmFyZyA9IGE7Oykge1xuICAgICAgICB2YXIgYyA9IG4uZGVsZWdhdGU7XG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgdmFyIHUgPSBtYXliZUludm9rZURlbGVnYXRlKGMsIG4pO1xuICAgICAgICAgIGlmICh1KSB7XG4gICAgICAgICAgICBpZiAodSA9PT0geSkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gdTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBuLm1ldGhvZCkgbi5zZW50ID0gbi5fc2VudCA9IG4uYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gbi5tZXRob2QpIHtcbiAgICAgICAgICBpZiAobyA9PT0gaCkgdGhyb3cgbyA9IHMsIG4uYXJnO1xuICAgICAgICAgIG4uZGlzcGF0Y2hFeGNlcHRpb24obi5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gbi5tZXRob2QgJiYgbi5hYnJ1cHQoXCJyZXR1cm5cIiwgbi5hcmcpO1xuICAgICAgICBvID0gZjtcbiAgICAgICAgdmFyIHAgPSB0cnlDYXRjaChlLCByLCBuKTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHAudHlwZSkge1xuICAgICAgICAgIGlmIChvID0gbi5kb25lID8gcyA6IGwsIHAuYXJnID09PSB5KSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHAuYXJnLFxuICAgICAgICAgICAgZG9uZTogbi5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHAudHlwZSAmJiAobyA9IHMsIG4ubWV0aG9kID0gXCJ0aHJvd1wiLCBuLmFyZyA9IHAuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZSwgcikge1xuICAgIHZhciBuID0gci5tZXRob2QsXG4gICAgICBvID0gZS5pdGVyYXRvcltuXTtcbiAgICBpZiAobyA9PT0gdCkgcmV0dXJuIHIuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IG4gJiYgZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoci5tZXRob2QgPSBcInJldHVyblwiLCByLmFyZyA9IHQsIG1heWJlSW52b2tlRGVsZWdhdGUoZSwgciksIFwidGhyb3dcIiA9PT0gci5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG4gJiYgKHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG4gKyBcIicgbWV0aG9kXCIpKSwgeTtcbiAgICB2YXIgaSA9IHRyeUNhdGNoKG8sIGUuaXRlcmF0b3IsIHIuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSBpLnR5cGUpIHJldHVybiByLm1ldGhvZCA9IFwidGhyb3dcIiwgci5hcmcgPSBpLmFyZywgci5kZWxlZ2F0ZSA9IG51bGwsIHk7XG4gICAgdmFyIGEgPSBpLmFyZztcbiAgICByZXR1cm4gYSA/IGEuZG9uZSA/IChyW2UucmVzdWx0TmFtZV0gPSBhLnZhbHVlLCByLm5leHQgPSBlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IHIubWV0aG9kICYmIChyLm1ldGhvZCA9IFwibmV4dFwiLCByLmFyZyA9IHQpLCByLmRlbGVnYXRlID0gbnVsbCwgeSkgOiBhIDogKHIubWV0aG9kID0gXCJ0aHJvd1wiLCByLmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgci5kZWxlZ2F0ZSA9IG51bGwsIHkpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeSh0KSB7XG4gICAgdmFyIGUgPSB7XG4gICAgICB0cnlMb2M6IHRbMF1cbiAgICB9O1xuICAgIDEgaW4gdCAmJiAoZS5jYXRjaExvYyA9IHRbMV0pLCAyIGluIHQgJiYgKGUuZmluYWxseUxvYyA9IHRbMl0sIGUuYWZ0ZXJMb2MgPSB0WzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeSh0KSB7XG4gICAgdmFyIGUgPSB0LmNvbXBsZXRpb24gfHwge307XG4gICAgZS50eXBlID0gXCJub3JtYWxcIiwgZGVsZXRlIGUuYXJnLCB0LmNvbXBsZXRpb24gPSBlO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHQuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoZSkge1xuICAgIGlmIChlIHx8IFwiXCIgPT09IGUpIHtcbiAgICAgIHZhciByID0gZVthXTtcbiAgICAgIGlmIChyKSByZXR1cm4gci5jYWxsKGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZS5uZXh0KSByZXR1cm4gZTtcbiAgICAgIGlmICghaXNOYU4oZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBvID0gLTEsXG4gICAgICAgICAgaSA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytvIDwgZS5sZW5ndGg7KSBpZiAobi5jYWxsKGUsIG8pKSByZXR1cm4gbmV4dC52YWx1ZSA9IGVbb10sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB0LCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gaS5uZXh0ID0gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihfdHlwZW9mKGUpICsgXCIgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgbyhnLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgbyhHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB1LCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBlLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAodCkge1xuICAgIHZhciBlID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0ICYmIHQuY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhZSAmJiAoZSA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoZS5kaXNwbGF5TmFtZSB8fCBlLm5hbWUpKTtcbiAgfSwgZS5tYXJrID0gZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHQsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6ICh0Ll9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUodCwgdSwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShnKSwgdDtcbiAgfSwgZS5hd3JhcCA9IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IHRcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGMsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGUuYXN5bmMgPSBmdW5jdGlvbiAodCwgciwgbiwgbywgaSkge1xuICAgIHZvaWQgMCA9PT0gaSAmJiAoaSA9IFByb21pc2UpO1xuICAgIHZhciBhID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcCh0LCByLCBuLCBvKSwgaSk7XG4gICAgcmV0dXJuIGUuaXNHZW5lcmF0b3JGdW5jdGlvbihyKSA/IGEgOiBhLm5leHQoKS50aGVuKGZ1bmN0aW9uICh0KSB7XG4gICAgICByZXR1cm4gdC5kb25lID8gdC52YWx1ZSA6IGEubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoZyksIGRlZmluZShnLCB1LCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKGcsIGEsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShnLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGUua2V5cyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgdmFyIGUgPSBPYmplY3QodCksXG4gICAgICByID0gW107XG4gICAgZm9yICh2YXIgbiBpbiBlKSByLnB1c2gobik7XG4gICAgcmV0dXJuIHIucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IHIubGVuZ3RoOykge1xuICAgICAgICB2YXIgdCA9IHIucG9wKCk7XG4gICAgICAgIGlmICh0IGluIGUpIHJldHVybiBuZXh0LnZhbHVlID0gdCwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZS52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChlKSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB0LCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIWUpIGZvciAodmFyIHIgaW4gdGhpcykgXCJ0XCIgPT09IHIuY2hhckF0KDApICYmIG4uY2FsbCh0aGlzLCByKSAmJiAhaXNOYU4oK3Iuc2xpY2UoMSkpICYmICh0aGlzW3JdID0gdCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgdCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gdC50eXBlKSB0aHJvdyB0LmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZSkge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZTtcbiAgICAgIHZhciByID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShuLCBvKSB7XG4gICAgICAgIHJldHVybiBhLnR5cGUgPSBcInRocm93XCIsIGEuYXJnID0gZSwgci5uZXh0ID0gbiwgbyAmJiAoci5tZXRob2QgPSBcIm5leHRcIiwgci5hcmcgPSB0KSwgISFvO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgbyA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBvID49IDA7IC0tbykge1xuICAgICAgICB2YXIgaSA9IHRoaXMudHJ5RW50cmllc1tvXSxcbiAgICAgICAgICBhID0gaS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICBpZiAoaS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGMgPSBuLmNhbGwoaSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgIHUgPSBuLmNhbGwoaSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgIGlmIChjICYmIHUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF1KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBpLmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoaS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHQsIGUpIHtcbiAgICAgIGZvciAodmFyIHIgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgciA+PSAwOyAtLXIpIHtcbiAgICAgICAgdmFyIG8gPSB0aGlzLnRyeUVudHJpZXNbcl07XG4gICAgICAgIGlmIChvLnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgbi5jYWxsKG8sIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBvLmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgaSA9IG87XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGkgJiYgKFwiYnJlYWtcIiA9PT0gdCB8fCBcImNvbnRpbnVlXCIgPT09IHQpICYmIGkudHJ5TG9jIDw9IGUgJiYgZSA8PSBpLmZpbmFsbHlMb2MgJiYgKGkgPSBudWxsKTtcbiAgICAgIHZhciBhID0gaSA/IGkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIGEudHlwZSA9IHQsIGEuYXJnID0gZSwgaSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBpLmZpbmFsbHlMb2MsIHkpIDogdGhpcy5jb21wbGV0ZShhKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSh0LCBlKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSB0LnR5cGUpIHRocm93IHQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gdC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gdC50eXBlID8gdGhpcy5uZXh0ID0gdC5hcmcgOiBcInJldHVyblwiID09PSB0LnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSB0LmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHQudHlwZSAmJiBlICYmICh0aGlzLm5leHQgPSBlKSwgeTtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKHQpIHtcbiAgICAgIGZvciAodmFyIGUgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgZSA+PSAwOyAtLWUpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnRyeUVudHJpZXNbZV07XG4gICAgICAgIGlmIChyLmZpbmFsbHlMb2MgPT09IHQpIHJldHVybiB0aGlzLmNvbXBsZXRlKHIuY29tcGxldGlvbiwgci5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkociksIHk7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0KSB7XG4gICAgICBmb3IgKHZhciBlID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGUgPj0gMDsgLS1lKSB7XG4gICAgICAgIHZhciByID0gdGhpcy50cnlFbnRyaWVzW2VdO1xuICAgICAgICBpZiAoci50cnlMb2MgPT09IHQpIHtcbiAgICAgICAgICB2YXIgbiA9IHIuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBuLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciBvID0gbi5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChlLCByLCBuKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcixcbiAgICAgICAgbmV4dExvYzogblxuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHQpLCB5O1xuICAgIH1cbiAgfSwgZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yobyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQmFzZUluZm8gfSBmcm9tICcuLi9tb2RlbHMvYmFzZUluZm8nO1xuaW1wb3J0IHsgbGlzdEFsbE1vdmllcywgc2VhcmNoTW92aWVzIH0gZnJvbSAnLi4vbW92aWVzJztcbmltcG9ydCAnLi4vYXNzZXRzL2Nzcy9tYWluLmNzcyc7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEZvcm1FbGVtZW50PignI3NlYXJjaEZvcm0nKSEuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgb25TZWFyY2gpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KCcjZ290b0ZpcnN0JykhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25Hb3RvRmlyc3RQYWdlSGFuZGxlcik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oJyNnb3RvUHJldmlvdXMnKSEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkdvdG9QcmV2SGFuZGxlcik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oJyNnb3RvTmV4dCcpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uR290b05leHRQYWdlSGFuZGxlcik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oJyNnb3RvTGFzdCcpIS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uR290b0xhc3RQYWdlSGFuZGxlcik7XG5cbmNvbnN0IHBhZ2VOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oJyNwYWdlTm8nKTtcbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU3BhbkVsZW1lbnQ+KCcjcGFnZXMnKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0TW92aWVzKHBhZ2U6IG51bWJlciA9IDEpOiBQcm9taXNlPHZvaWQ+IHtcbiAgbGV0IHJlc3VsdDogQmFzZUluZm87XG4gIGxldCBxdWVyeTogc3RyaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PignI3NlYXJjaElucHV0JykhLnZhbHVlO1xuXG4gIGlmIChxdWVyeSkge1xuICAgIHJlc3VsdCA9IGF3YWl0IHNlYXJjaE1vdmllcyhxdWVyeSwgcGFnZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gYXdhaXQgbGlzdEFsbE1vdmllcyhwYWdlKTtcbiAgfVxuXG4gIGRpc3BsYXlQYWdpbmF0aW9uKHJlc3VsdCk7XG4gIGRpc3BsYXlNb3ZpZXMocmVzdWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheU1vdmllcyhyZXN1bHQ6IEJhc2VJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3AtbW92aWVzJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIGFwcC5pbm5lckhUTUwgPSAnJztcblxuICBjb25zdCBtb3ZpZXMgPSByZXN1bHQucmVzdWx0cztcblxuICBmb3IgKGxldCBtb3ZpZSBvZiBtb3ZpZXMpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZUFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGNhcmRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzbWFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGltYWdlQW5jaG9yLmhyZWYgPSBgLi9tb3ZpZS1kZXRhaWxzLmh0bWw/aWQ9JHttb3ZpZS5pZH1gO1xuICAgIGltYWdlLmFsdCA9IGBhbHQ9JHttb3ZpZS50aXRsZX1gO1xuICAgIGltYWdlLnNyYyA9IG1vdmllLnBvc3Rlcl9wYXRoID8gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAke21vdmllLnBvc3Rlcl9wYXRofWAgOiAnLi4vZGlzdC9hc3NldHMvaW1hZ2VzL05vLUltYWdlLmpwZyc7XG4gICAgaW1hZ2VBbmNob3IuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZUFuY2hvcik7XG5cbiAgICBjYXJkQm9keS5jbGFzc0xpc3QuYWRkKCdjYXJkLWJvZHknKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gbW92aWUudGl0bGU7XG5cbiAgICBwLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGV4dCcpO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgndGV4dC1tdXRlZCcpO1xuICAgIHNtYWxsLnRleHRDb250ZW50ID0gYFByZW1pw6RyIGRhdHVtOiAke21vdmllLnJlbGVhc2VfZGF0ZX1gO1xuICAgIHAuYXBwZW5kQ2hpbGQoc21hbGwpO1xuXG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgY2FyZEJvZHkuYXBwZW5kQ2hpbGQocCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNhcmRCb2R5KTtcbiAgICBhcHAuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGFnaW5hdGlvbihkYXRhOiBCYXNlSW5mbyk6IHZvaWQge1xuICBjb25zdCBwYWdlcyA9IGRhdGEudG90YWxfcGFnZXMgPiA1MDAgPyA1MDAgOiBkYXRhLnRvdGFsX3BhZ2VzO1xuICBjb25zdCBjdXJyZW50UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYWdlTm8nKSE7XG4gIGNvbnN0IG51bU9mUGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFnZXMnKSE7XG4gIGN1cnJlbnRQYWdlLmlubmVySFRNTCA9IGRhdGEucGFnZS50b1N0cmluZygpO1xuICBudW1PZlBhZ2VzLmlubmVySFRNTCA9IHBhZ2VzLnRvU3RyaW5nKCk7XG59XG5cbmZ1bmN0aW9uIG9uR290b0ZpcnN0UGFnZUhhbmRsZXIoKTogdm9pZCB7XG4gIGdldE1vdmllcygxKTtcbn1cblxuZnVuY3Rpb24gb25Hb3RvUHJldkhhbmRsZXIoKTogdm9pZCB7XG4gIGxldCBwYWdlOiBudW1iZXIgPSArcGFnZU51bWJlciEuaW5uZXJIVE1MO1xuICBwYWdlID4gMSA/IHBhZ2UtLSA6IDE7XG4gIGdldE1vdmllcyhwYWdlKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb25Hb3RvTmV4dFBhZ2VIYW5kbGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBudW1PZlBhZ2VzOiBudW1iZXIgPSArcGFnZXMhLmlubmVySFRNTDtcbiAgbGV0IHBhZ2U6IG51bWJlciA9ICtwYWdlTnVtYmVyIS5pbm5lckhUTUw7XG4gIHBhZ2UgPCBudW1PZlBhZ2VzID8gcGFnZSsrIDogNTAwO1xuICBnZXRNb3ZpZXMocGFnZSk7XG59XG5cbmZ1bmN0aW9uIG9uR290b0xhc3RQYWdlSGFuZGxlcigpOiB2b2lkIHtcbiAgZ2V0TW92aWVzKCtwYWdlcyEuaW5uZXJIVE1MKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb25TZWFyY2goZTogU3VibWl0RXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGdldE1vdmllcygxKTtcbn1cblxuZ2V0TW92aWVzKCk7XG4iXSwibmFtZXMiOlsiZmV0Y2hEYXRhIiwibGlzdEFsbE1vdmllcyIsIl9yZWYiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsInBhZ2UiLCJyZXNwb25zZSIsIl95aWVsZCRyZXNwb25zZSRqc29uIiwiZGF0YSIsIl9hcmdzIiwiYXJndW1lbnRzIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImxlbmd0aCIsInVuZGVmaW5lZCIsInNlbnQiLCJqc29uIiwiYWJydXB0Iiwic3RvcCIsImFwcGx5Iiwic2VhcmNoTW92aWVzIiwiX3JlZjIiLCJfY2FsbGVlMiIsImNyaXRlcmlhIiwiX3lpZWxkJHJlc3BvbnNlJGpzb24yIiwiX2FyZ3MyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiX3giLCJzdGF0ZSIsImVuZHBvaW50IiwiQVBJX1VSTCIsInVybCIsImFwaSIsImJhc2VVcmwiLCJjb25jYXQiLCJmZXRjaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblNlYXJjaCIsIm9uR290b0ZpcnN0UGFnZUhhbmRsZXIiLCJvbkdvdG9QcmV2SGFuZGxlciIsIm9uR290b05leHRQYWdlSGFuZGxlciIsIm9uR290b0xhc3RQYWdlSGFuZGxlciIsInBhZ2VOdW1iZXIiLCJwYWdlcyIsImdldE1vdmllcyIsIl9nZXRNb3ZpZXMiLCJyZXN1bHQiLCJxdWVyeSIsInZhbHVlIiwiZGlzcGxheVBhZ2luYXRpb24iLCJkaXNwbGF5TW92aWVzIiwiX2Rpc3BsYXlNb3ZpZXMiLCJhcHAiLCJtb3ZpZXMiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIm1vdmllIiwiZGl2IiwiaW1hZ2VBbmNob3IiLCJpbWFnZSIsImNhcmRCb2R5IiwiaGVhZGluZyIsInAiLCJzbWFsbCIsImlubmVySFRNTCIsInJlc3VsdHMiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsInMiLCJuIiwiZG9uZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJocmVmIiwiaWQiLCJhbHQiLCJ0aXRsZSIsInNyYyIsInBvc3Rlcl9wYXRoIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Q29udGVudCIsInJlbGVhc2VfZGF0ZSIsImVyciIsImUiLCJmIiwidG90YWxfcGFnZXMiLCJjdXJyZW50UGFnZSIsIm51bU9mUGFnZXMiLCJ0b1N0cmluZyIsIl9vbkdvdG9OZXh0UGFnZUhhbmRsZXIiLCJfY2FsbGVlMyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl94MiIsIl9vblNlYXJjaCIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9