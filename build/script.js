this["wp-theme-support"] = this["wp-theme-support"] || {}; this["wp-theme-support"]["main"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(12);
var IE8_DOM_DEFINE = __webpack_require__(36);
var toPrimitive = __webpack_require__(21);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(35);
var hide = __webpack_require__(7);
var has = __webpack_require__(3);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(16);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(74);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(20)('wks');
var uid = __webpack_require__(15);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PreferencesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordpress_element__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__wordpress_element__);






/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


// Context for preferences data
var PreferencesContext = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createContext();

// Provider
var PreferencesProvider = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(PreferencesProvider, _Component);

  function PreferencesProvider(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, PreferencesProvider);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PreferencesProvider.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PreferencesProvider)).call(this, props));

    _this.getDefault = _this.getDefault.bind(_this);
    _this.updatePreferences = _this.updatePreferences.bind(_this);

    _this.state = null;
    return _this;
  }

  // get default preferences


  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(PreferencesProvider, [{
    key: "getDefault",
    value: function getDefault() {
      var defaultPreferences = {
        colors: {
          shades: [],
          custom: false
        },
        fontsizes: {
          sizes: [],
          custom: false
        },
        widths: {
          main: "720px",
          wide: "1080px",
          full: "none"
        },
        misc: {
          defaultBlockStyles: false,
          responsiveEmbed: false
        }
      };

      return defaultPreferences;
    }

    // Fetch settings

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var wpSettings = void 0;

      // load api
      wp.api.loadPromise.then(function () {
        wpSettings = new wp.api.models.Settings();

        // get settings
        wpSettings.fetch().then(function (settings) {
          if (!Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["isEmpty"])(settings.lubusin_theme_support)) {
            _this2.setState(JSON.parse(settings.lubusin_theme_support));
          } else {
            _this2.setState(_this2.getDefault());
          }
        });
      });
    }

    // Update preferences

  }, {
    key: "updatePreferences",
    value: function updatePreferences(data) {
      this.setState(data);

      var wpSettings = new wp.api.models.Settings({
        lubusin_theme_support: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.state)
      });

      wpSettings.save();
    }
  }, {
    key: "render",
    value: function render() {
      return !Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["isEmpty"])(this.state) && wp.element.createElement(
        PreferencesContext.Provider,
        {
          value: {
            preferences: this.state,
            updatePreferences: this.updatePreferences
          }
        },
        this.props.children
      );
    }
  }]);

  return PreferencesProvider;
}(__WEBPACK_IMPORTED_MODULE_8__wordpress_element__["Component"]);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(20)('keys');
var uid = __webpack_require__(15);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(12);
var dPs = __webpack_require__(73);
var enumBugKeys = __webpack_require__(27);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(37)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(78).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(41);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(3);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(23);
var wksExt = __webpack_require__(29);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["editPost"]; }());

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(3);
var toObject = __webpack_require__(33);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(61);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(37)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(68);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(83);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(23);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(40);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(24);
var $iterCreate = __webpack_require__(72);
var setToStringTag = __webpack_require__(28);
var getPrototypeOf = __webpack_require__(34);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(3);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(75)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(41);
var hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(31);
var createDesc = __webpack_require__(16);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(21);
var has = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(36);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const deburr = __webpack_require__(106);
const escapeStringRegexp = __webpack_require__(108);
const builtinReplacements = __webpack_require__(109);
const builtinOverridableReplacements = __webpack_require__(110);

const decamelize = string => {
	return string
		.replace(/([a-z\d])([A-Z])/g, '$1 $2')
		.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1 $2');
};

const doCustomReplacements = (string, replacements) => {
	for (const [key, value] of replacements) {
		string = string.replace(new RegExp(escapeStringRegexp(key), 'g'), value);
	}

	return string;
};

const removeMootSeparators = (string, separator) => {
	return string
		.replace(new RegExp(`${separator}{2,}`, 'g'), separator)
		.replace(new RegExp(`^${separator}|${separator}$`, 'g'), '');
};

module.exports = (string, options) => {
	if (typeof string !== 'string') {
		throw new TypeError(`Expected a string, got \`${typeof string}\``);
	}

	options = Object.assign({
		separator: '-',
		lowercase: true,
		decamelize: true,
		customReplacements: []
	}, options);

	const separator = escapeStringRegexp(options.separator);
	const customReplacements = new Map([
		...builtinOverridableReplacements,
		...options.customReplacements,
		...builtinReplacements
	]);

	string = doCustomReplacements(string, customReplacements);
	string = deburr(string);
	string = string.normalize('NFKD');

	if (options.decamelize) {
		string = decamelize(string);
	}

	let patternSlug = /[^a-zA-Z\d]+/g;

	if (options.lowercase) {
		string = string.toLowerCase();
		patternSlug = /[^a-z\d]+/g;
	}

	string = string.replace(patternSlug, separator);
	string = string.replace(/\\/g, '');
	string = removeMootSeparators(string, separator);

	return string;
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_plugins__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_plugins___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_plugins__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_menuitem__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sidebar__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




var WpEditorPreferencesPlugin = function WpEditorPreferencesPlugin() {
  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_0__wordpress_element__["Fragment"],
    null,
    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_menuitem__["a" /* default */], null),
    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_sidebar__["a" /* default */], null)
  );
};

Object(__WEBPACK_IMPORTED_MODULE_1__wordpress_plugins__["registerPlugin"])("wp-theme-support", {
  render: WpEditorPreferencesPlugin
});

/***/ }),
/* 49 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["plugins"]; }());

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_i18n___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_editPost__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_editPost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_editPost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_icon__ = __webpack_require__(52);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


var PreferencesMenuItem = function PreferencesMenuItem() {
  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_1__wordpress_editPost__["PluginSidebarMoreMenuItem"],
    { icon: __WEBPACK_IMPORTED_MODULE_2__components_icon__["a" /* Icon */], target: "wp-theme-support-sidebar" },
    Object(__WEBPACK_IMPORTED_MODULE_0__wordpress_i18n__["__"])("Theme Support")
  );
};

/* harmony default export */ __webpack_exports__["a"] = (PreferencesMenuItem);

/***/ }),
/* 51 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/**
 * Plugin icon
 */

var Icon = wp.element.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    style: { isolation: "isolate" },
    viewBox: "0 0 20 20",
    width: "20",
    height: "20"
  },
  wp.element.createElement(
    "defs",
    null,
    wp.element.createElement(
      "clipPath",
      { id: "_clipPath_pVld55WxHH2C6yl5o8bKtE0WNPNiV1iZ" },
      wp.element.createElement("rect", { width: "20", height: "20" })
    )
  ),
  wp.element.createElement(
    "g",
    { clipPath: "url(#_clipPath_pVld55WxHH2C6yl5o8bKtE0WNPNiV1iZ)" },
    wp.element.createElement("path", {
      d: "M 19.902 10.098 L 17.569 7.764 C 17.439 7.634 17.228 7.634 17.098 7.764 L 10.667 14.195 L 7.805 11.333 L 8.5 11.333 C 9.006 11.965 9.771 12.332 10.58 12.333 C 11.604 12.334 12.536 11.739 12.967 10.81 C 13.016 10.707 13.009 10.586 12.948 10.489 C 12.887 10.392 12.781 10.334 12.667 10.333 L 11 10.333 L 11 9 L 12.667 9 C 12.781 9 12.887 8.941 12.948 8.844 C 13.009 8.748 13.016 8.627 12.967 8.523 C 12.536 7.594 11.604 7 10.58 7 C 9.771 7.001 9.006 7.369 8.5 8 L 7.138 8 L 11.236 3.902 C 11.275 3.863 11.303 3.815 11.319 3.762 L 12.319 0.429 C 12.355 0.312 12.322 0.184 12.236 0.098 C 12.149 0.011 12.022 -0.021 11.904 0.014 L 8.571 1.014 C 8.518 1.03 8.47 1.059 8.431 1.098 L 1.471 8.058 C 0.68 8.51 0.146 9.305 0.026 10.208 C -0.095 11.111 0.213 12.018 0.857 12.662 L 7.338 19.143 C 7.868 19.675 8.583 19.98 9.333 19.996 L 9.333 20 L 11 20 C 11.111 20 11.215 19.944 11.277 19.852 C 11.368 19.727 11.513 19.653 11.667 19.653 C 11.821 19.653 11.965 19.727 12.056 19.852 C 12.118 19.944 12.222 20 12.333 20 L 13.333 20 C 13.517 20 13.667 19.851 13.667 19.667 L 13.667 19 L 16.959 19 L 18.252 19.323 C 18.306 19.337 18.361 19.337 18.414 19.323 L 19.748 18.99 C 19.896 18.953 20 18.82 20 18.667 L 20 17.333 C 20 17.181 19.896 17.047 19.748 17.01 L 18.414 16.677 C 18.361 16.663 18.305 16.663 18.252 16.677 L 16.959 17 L 13.471 17 L 19.902 10.569 C 20.032 10.439 20.032 10.228 19.902 10.098 Z M 13.667 17.667 L 17 17.667 C 17.027 17.667 17.055 17.663 17.081 17.657 L 18.333 17.344 L 19.333 17.594 L 19.333 18.406 L 18.333 18.656 L 17.081 18.343 C 17.055 18.337 17.027 18.333 17 18.333 L 13.667 18.333 L 13.667 17.667 Z M 8.667 8.667 C 8.776 8.667 8.878 8.613 8.94 8.524 C 9.314 7.988 9.926 7.668 10.58 7.667 C 11.144 7.666 11.681 7.909 12.053 8.333 L 11 8.333 C 10.632 8.333 10.333 8.632 10.333 9 L 10.333 10.333 C 10.333 10.702 10.632 11 11 11 L 12.053 11 C 11.681 11.425 11.144 11.668 10.58 11.667 C 9.926 11.666 9.314 11.346 8.94 10.809 C 8.878 10.72 8.776 10.667 8.667 10.667 L 7.138 10.667 L 6.471 10 L 8.667 10 L 8.667 9.333 L 5.805 9.333 L 5.138 8.667 L 8.667 8.667 Z M 6.195 8 L 4.805 8 L 9.833 2.971 L 10.529 3.667 L 6.195 8 Z M 11.503 0.83 L 11.303 1.497 L 10.836 1.03 L 11.503 0.83 Z M 10.11 1.248 L 11.085 2.223 L 10.841 3.036 L 9.297 1.492 L 10.11 1.248 Z M 8.667 1.805 L 9.362 2.5 L 3.993 7.869 C 3.653 7.735 3.291 7.667 2.926 7.667 C 2.883 7.667 2.841 7.671 2.799 7.673 L 8.667 1.805 Z M 9.407 19.333 C 8.808 19.335 8.232 19.097 7.81 18.672 L 1.328 12.19 C 0.446 11.308 0.446 9.877 1.328 8.995 C 2.211 8.113 3.641 8.113 4.524 8.995 L 11.005 15.476 C 11.651 16.123 11.845 17.094 11.495 17.939 C 11.145 18.783 10.321 19.333 9.407 19.333 Z M 13 18.667 L 13 19.333 L 12.493 19.333 C 12.279 19.106 11.98 18.976 11.667 18.977 C 11.651 18.977 11.637 18.981 11.622 18.981 C 11.742 18.841 11.85 18.69 11.942 18.529 L 13 17.471 L 13 18.667 Z M 12.327 17.2 C 12.327 17.157 12.333 17.115 12.333 17.072 C 12.335 16.296 12.027 15.551 11.476 15.003 L 11.138 14.667 L 12.333 13.471 L 13.098 14.236 L 13.569 13.764 L 12.805 13 L 13.333 12.471 L 13.764 12.902 L 14.236 12.431 L 13.805 12 L 14.333 11.471 L 15.098 12.236 L 15.569 11.764 L 14.805 11 L 15.333 10.471 L 15.764 10.902 L 16.236 10.431 L 15.805 10 L 16.333 9.471 L 17.098 10.236 L 17.569 9.764 L 16.805 9 L 17.333 8.471 L 19.195 10.333 L 12.327 17.2 Z",
      fill: "#555D66"
    })
  )
);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editPost__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_editPost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_editPost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_preferences__ = __webpack_require__(54);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var PreferencesSidebar = function PreferencesSidebar() {
  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_0__wordpress_editPost__["PluginSidebar"],
    {
      name: "wp-theme-support-sidebar",
      isPinnable: false,
      title: "Theme Support"
    },
    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__components_preferences__["a" /* default */], null)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (PreferencesSidebar);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__context__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__misc__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__colors__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fontsizes__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widths__ = __webpack_require__(116);
/**
 * Internal dependencies
 */






// Preference Component
var Preferences = function Preferences() {
  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_0__context__["b" /* PreferencesProvider */],
    null,
    wp.element.createElement(
      "div",
      { className: "wp-theme-support-sidebar" },
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__colors__["a" /* default */], null),
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__fontsizes__["a" /* default */], null),
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__widths__["a" /* default */], null),
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__misc__["a" /* default */], null)
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Preferences);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(58), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(33);
var $getPrototypeOf = __webpack_require__(34);

__webpack_require__(60)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(6);
var core = __webpack_require__(0);
var fails = __webpack_require__(13);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(64);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(38);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
__webpack_require__(79);
module.exports = __webpack_require__(29).f('iterator');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(71)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(18);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(25);
var descriptor = __webpack_require__(16);
var setToStringTag = __webpack_require__(28);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(12);
var getKeys = __webpack_require__(26);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(42);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(76);
var toAbsoluteIndex = __webpack_require__(77);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(24);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(81);
var step = __webpack_require__(82);
var Iterators = __webpack_require__(24);
var toIObject = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(39)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
__webpack_require__(90);
__webpack_require__(91);
__webpack_require__(92);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(40);
var META = __webpack_require__(86).KEY;
var $fails = __webpack_require__(13);
var shared = __webpack_require__(20);
var setToStringTag = __webpack_require__(28);
var uid = __webpack_require__(15);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(29);
var wksDefine = __webpack_require__(30);
var enumKeys = __webpack_require__(87);
var isArray = __webpack_require__(88);
var anObject = __webpack_require__(12);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(21);
var createDesc = __webpack_require__(16);
var _create = __webpack_require__(25);
var gOPNExt = __webpack_require__(89);
var $GOPD = __webpack_require__(45);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(26);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(44).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f = $propertyIsEnumerable;
  __webpack_require__(43).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(23)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(15)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(3);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(13)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(26);
var gOPS = __webpack_require__(43);
var pIE = __webpack_require__(31);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(42);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(44).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {



/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('asyncIterator');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30)('observable');


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(94);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(98);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(38);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(6);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(97).set });


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(12);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(35)(Function.call, __webpack_require__(45).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(99), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(100);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(25) });


/***/ }),
/* 101 */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context__ = __webpack_require__(11);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var Misc = function Misc() {
  var update = function update(context, key, value) {
    var misc = context.preferences.misc;
    misc[key] = value;
    context.updatePreferences(misc);
  };

  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_1__context__["a" /* PreferencesContext */].Consumer,
    null,
    function (context) {
      return wp.element.createElement(
        __WEBPACK_IMPORTED_MODULE_0__wordpress_components__["PanelBody"],
        { title: "Misc", initialOpen: false },
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["ToggleControl"], {
          label: "Default Block Styles",
          checked: context.preferences.misc.defaultBlockStyles,
          onChange: function onChange(value) {
            return update(context, "defaultBlockStyles", value);
          }
        }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["ToggleControl"], {
          label: "Responsive Embeds",
          checked: context.preferences.misc.responsiveEmbed,
          onChange: function onChange(value) {
            return update(context, "responsiveEmbed", value);
          }
        })
      );
    }
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Misc);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__context__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__color_add__ = __webpack_require__(105);
/**
 * External Dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var Colors = function Colors() {
  // Update color preferences
  var update = function update(context, key, value) {
    var colors = context.preferences.colors;
    colors[key] = value;
    context.updatePreferences(colors);
  };

  // Delete color
  var _onDelete = function _onDelete(context, index) {
    var shades = context.preferences.colors.shades;
    var newShades = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["filter"])(shades, function (shade, i) {
      return index !== i;
    });
    update(context, "shades", newShades);
  };

  // Update color
  var _onUpdate = function _onUpdate(context, index, key, value) {
    var shades = context.preferences.colors.shades;
    shades[index][key] = value;
    update(context, "shades", shades);
  };

  // Add color
  var _onAdd = function _onAdd(context, value) {
    var shades = context.preferences.colors.shades;
    shades.push(value);
    update(context, "shades", shades);
  };

  // Component
  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_2__context__["a" /* PreferencesContext */].Consumer,
    null,
    function (context) {
      return wp.element.createElement(
        __WEBPACK_IMPORTED_MODULE_1__wordpress_components__["PanelBody"],
        { title: "Colors", initialOpen: false },
        context.preferences.colors.shades.map(function (shade, index) {
          return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */], {
            key: index,
            code: shade.color,
            name: shade.name,
            onDelete: function onDelete() {
              return _onDelete(context, index);
            },
            onUpdate: function onUpdate(key, value) {
              return _onUpdate(context, index, key, value);
            }
          });
        }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__color_add__["a" /* default */], { onAdd: function onAdd(value) {
            return _onAdd(context, value);
          } }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__["ToggleControl"], {
          label: "Disable Custom Color",
          checked: context.preferences.colors.custom,
          onChange: function onChange(value) {
            return update(context, "custom", value);
          }
        })
      );
    }
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Colors);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__);
/**
 * WordPress dependencies
 */


var Color = function Color(_ref) {
  var code = _ref.code,
      name = _ref.name,
      onDelete = _ref.onDelete,
      onUpdate = _ref.onUpdate;

  // Update color
  var _onChange = function _onChange(key, value) {
    onUpdate(key, value);
  };

  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_0__wordpress_components__["PanelRow"],
    { className: "wp-theme-support-sidebar__color" },
    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["Dropdown"], {
      className: "wp-theme-support-sidebar__color-picker-container",
      contentClassName: "wp-theme-support-sidebar__color-picker-content",
      position: "bottom left",
      renderToggle: function renderToggle(_ref2) {
        var isOpen = _ref2.isOpen,
            onToggle = _ref2.onToggle;
        return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["ColorIndicator"], {
          isPrimary: true,
          onClick: onToggle,
          "aria-expanded": isOpen,
          colorValue: code
        });
      },
      renderContent: function renderContent() {
        return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["ColorPicker"], {
          color: code,
          onChangeComplete: function onChangeComplete(value) {
            return _onChange("color", value.hex);
          },
          disableAlpha: true
        });
      }
    }),
    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["TextControl"], {
      label: "Name",
      value: name,
      className: "wp-theme-support-sidebar__color-name",
      onChange: function onChange(value) {
        return _onChange("name", value);
      }
    }),
    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["IconButton"], {
      className: "wp-theme-support-sidebar__color-remove button-link-delete",
      label: "Remove",
      icon: "no-alt",
      isLink: true,
      isDestructive: true,
      onClick: onDelete
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Color);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sindresorhus_slugify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sindresorhus_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sindresorhus_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_compose__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


// Component
var add = function add(_ref) {
  var onAdd = _ref.onAdd,
      code = _ref.code,
      name = _ref.name,
      setState = _ref.setState;

  return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["Dropdown"], {
    className: "wp-theme-support-sidebar__color-add-container",
    contentClassName: "wp-theme-support-sidebar__color-add-content",
    position: "bottom left",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return wp.element.createElement(
        __WEBPACK_IMPORTED_MODULE_3__wordpress_components__["Button"],
        {
          isDefault: true,
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "wp-theme-support-sidebar__color-add"
        },
        "Add"
      );
    },
    renderContent: function renderContent(_ref3) {
      var onClose = _ref3.onClose;
      return wp.element.createElement(
        "div",
        null,
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["ColorPicker"], {
          color: code,
          onChangeComplete: function onChangeComplete(code) {
            return setState(function () {
              return {
                code: code.hex
              };
            });
          },
          disableAlpha: true
        }),
        wp.element.createElement(
          __WEBPACK_IMPORTED_MODULE_3__wordpress_components__["PanelRow"],
          { className: "wp-theme-support-sidebar__color" },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["ColorIndicator"], { colorValue: code }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["TextControl"], {
            label: "Name",
            value: name,
            className: "wp-theme-support-sidebar__color-name",
            onChange: function onChange(name) {
              return setState(function () {
                return { name: name };
              });
            }
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["IconButton"], {
            className: "wp-theme-support-sidebar__color-save",
            label: "Save",
            icon: "yes",
            disabled: Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"])(name) || Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"])(code),
            isPrimary: true,
            onClick: function onClick() {
              onAdd({ name: name, slug: __WEBPACK_IMPORTED_MODULE_1__sindresorhus_slugify___default()(name), color: code });
              setState(function () {
                return { code: "#333333", name: "" };
              });
              onClose();
            }
          })
        )
      );
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__wordpress_compose__["withState"])({ code: "#333333", name: "" })(add));

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0';

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(107)))

/***/ }),
/* 107 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
	// German umlauts
	['ß', 'ss'],
	['ä', 'ae'],
	['Ä', 'Ae'],
	['ö', 'oe'],
	['Ö', 'Oe'],
	['ü', 'ue'],
	['Ü', 'Ue'],

	// Vietnamese
	['à', 'a'],
	['À', 'A'],
	['á', 'a'],
	['Á', 'A'],
	['â', 'a'],
	['Â', 'A'],
	['ã', 'a'],
	['Ã', 'A'],
	['è', 'e'],
	['È', 'E'],
	['é', 'e'],
	['É', 'E'],
	['ê', 'e'],
	['Ê', 'E'],
	['ì', 'i'],
	['Ì', 'I'],
	['í', 'i'],
	['Í', 'I'],
	['ò', 'o'],
	['Ò', 'O'],
	['ó', 'o'],
	['Ó', 'O'],
	['ô', 'o'],
	['Ô', 'O'],
	['õ', 'o'],
	['Õ', 'O'],
	['ù', 'u'],
	['Ù', 'U'],
	['ú', 'u'],
	['Ú', 'U'],
	['ý', 'y'],
	['Ý', 'Y'],
	['ă', 'a'],
	['Ă', 'A'],
	['Đ', 'D'],
	['đ', 'd'],
	['ĩ', 'i'],
	['Ĩ', 'I'],
	['ũ', 'u'],
	['Ũ', 'U'],
	['ơ', 'o'],
	['Ơ', 'O'],
	['ư', 'u'],
	['Ư', 'U'],
	['ạ', 'a'],
	['Ạ', 'A'],
	['ả', 'a'],
	['Ả', 'A'],
	['ấ', 'a'],
	['Ấ', 'A'],
	['ầ', 'a'],
	['Ầ', 'A'],
	['ẩ', 'a'],
	['Ẩ', 'A'],
	['ẫ', 'a'],
	['Ẫ', 'A'],
	['ậ', 'a'],
	['Ậ', 'A'],
	['ắ', 'a'],
	['Ắ', 'A'],
	['ằ', 'a'],
	['Ằ', 'A'],
	['ẳ', 'a'],
	['Ẳ', 'A'],
	['ẵ', 'a'],
	['Ẵ', 'A'],
	['ặ', 'a'],
	['Ặ', 'A'],
	['ẹ', 'e'],
	['Ẹ', 'E'],
	['ẻ', 'e'],
	['Ẻ', 'E'],
	['ẽ', 'e'],
	['Ẽ', 'E'],
	['ế', 'e'],
	['Ế', 'E'],
	['ề', 'e'],
	['Ề', 'E'],
	['ể', 'e'],
	['Ể', 'E'],
	['ễ', 'e'],
	['Ễ', 'E'],
	['ệ', 'e'],
	['Ệ', 'E'],
	['ỉ', 'i'],
	['Ỉ', 'I'],
	['ị', 'i'],
	['Ị', 'I'],
	['ọ', 'o'],
	['Ọ', 'O'],
	['ỏ', 'o'],
	['Ỏ', 'O'],
	['ố', 'o'],
	['Ố', 'O'],
	['ồ', 'o'],
	['Ồ', 'O'],
	['ổ', 'o'],
	['Ổ', 'O'],
	['ỗ', 'o'],
	['Ỗ', 'O'],
	['ộ', 'o'],
	['Ộ', 'O'],
	['ớ', 'o'],
	['Ớ', 'O'],
	['ờ', 'o'],
	['Ờ', 'O'],
	['ở', 'o'],
	['Ở', 'O'],
	['ỡ', 'o'],
	['Ỡ', 'O'],
	['ợ', 'o'],
	['Ợ', 'O'],
	['ụ', 'u'],
	['Ụ', 'U'],
	['ủ', 'u'],
	['Ủ', 'U'],
	['ứ', 'u'],
	['Ứ', 'U'],
	['ừ', 'u'],
	['Ừ', 'U'],
	['ử', 'u'],
	['Ử', 'U'],
	['ữ', 'u'],
	['Ữ', 'U'],
	['ự', 'u'],
	['Ự', 'U'],
	['ỳ', 'y'],
	['Ỳ', 'Y'],
	['ỵ', 'y'],
	['Ỵ', 'Y'],
	['ỷ', 'y'],
	['Ỷ', 'Y'],
	['ỹ', 'y'],
	['Ỹ', 'Y'],

	// Arabic
	['ء', 'e'],
	['آ', 'a'],
	['أ', 'a'],
	['ؤ', 'w'],
	['إ', 'i'],
	['ئ', 'y'],
	['ا', 'a'],
	['ب', 'b'],
	['ة', 't'],
	['ت', 't'],
	['ث', 'th'],
	['ج', 'j'],
	['ح', 'h'],
	['خ', 'kh'],
	['د', 'd'],
	['ذ', 'dh'],
	['ر', 'r'],
	['ز', 'z'],
	['س', 's'],
	['ش', 'sh'],
	['ص', 's'],
	['ض', 'd'],
	['ط', 't'],
	['ظ', 'z'],
	['ع', 'e'],
	['غ', 'gh'],
	['ـ', '_'],
	['ف', 'f'],
	['ق', 'q'],
	['ك', 'k'],
	['ل', 'l'],
	['م', 'm'],
	['ن', 'n'],
	['ه', 'h'],
	['و', 'w'],
	['ى', 'a'],
	['ي', 'y'],
	['َ‎', 'a'],
	['ُ', 'u'],
	['ِ‎', 'i'],
	['٠', '0'],
	['١', '1'],
	['٢', '2'],
	['٣', '3'],
	['٤', '4'],
	['٥', '5'],
	['٦', '6'],
	['٧', '7'],
	['٩', '9'],
	['۸', '8'],

	// Russian
	['А', 'A'],
	['а', 'a'],
	['Б', 'B'],
	['б', 'b'],
	['В', 'V'],
	['в', 'v'],
	['Г', 'G'],
	['г', 'g'],
	['Д', 'D'],
	['д', 'd'],
	['Е', 'E'],
	['е', 'e'],
	['Ж', 'Zh'],
	['ж', 'zh'],
	['З', 'Z'],
	['з', 'z'],
	['И', 'I'],
	['и', 'i'],
	['Й', 'J'],
	['й', 'j'],
	['К', 'K'],
	['к', 'k'],
	['Л', 'L'],
	['л', 'l'],
	['М', 'M'],
	['м', 'm'],
	['Н', 'N'],
	['н', 'n'],
	['О', 'O'],
	['о', 'o'],
	['П', 'P'],
	['п', 'p'],
	['Р', 'R'],
	['р', 'r'],
	['С', 'S'],
	['с', 's'],
	['Т', 'T'],
	['т', 't'],
	['У', 'U'],
	['у', 'u'],
	['Ф', 'F'],
	['ф', 'f'],
	['Х', 'H'],
	['х', 'h'],
	['Ц', 'Cz'],
	['ц', 'cz'],
	['Ч', 'Ch'],
	['ч', 'ch'],
	['Ш', 'Sh'],
	['ш', 'sh'],
	['Щ', 'Shh'],
	['щ', 'shh'],
	['Ъ', ''],
	['ъ', ''],
	['Ы', 'Y'],
	['ы', 'y'],
	['Ь', ''],
	['ь', ''],
	['Э', 'E'],
	['э', 'e'],
	['Ю', 'Yu'],
	['ю', 'yu'],
	['Я', 'Ya'],
	['я', 'ya'],
	['Ё', 'Yo'],
	['ё', 'yo'],

	// Romanian
	['ș', 's'],
	['Ș', 's'],
	['ț', 't'],
	['Ț', 't']
];


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
	['&', ' and '],
	['🦄', ' unicorn '],
	['♥', ' love ']
];


/***/ }),
/* 111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__context__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fontsize__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fontsize_add__ = __webpack_require__(114);
/**
 * External Dependencies
 */


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




var FontSizes = function FontSizes() {
  // Update Fontsizes preferences
  var update = function update(context, key, value) {
    var fontsizes = context.preferences.fontsizes;
    fontsizes[key] = value;
    context.updatePreferences(fontsizes);
  };

  // Delete Fontsize
  var _onDelete = function _onDelete(context, index) {
    var sizes = context.preferences.fontsizes.sizes;
    var newSizes = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["filter"])(sizes, function (size, i) {
      return index !== i;
    });
    update(context, "sizes", newSizes);
  };

  // Update Fontsize
  var _onUpdate = function _onUpdate(context, index, key, value) {
    var sizes = context.preferences.fontsizes.sizes;
    sizes[index][key] = value;
    update(context, "sizes", sizes);
  };

  // Add color
  var _onAdd = function _onAdd(context, value) {
    var sizes = context.preferences.fontsizes.sizes;
    sizes.push(value);
    update(context, "sizes", sizes);
  };

  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_2__context__["a" /* PreferencesContext */].Consumer,
    null,
    function (context) {
      return wp.element.createElement(
        __WEBPACK_IMPORTED_MODULE_1__wordpress_components__["PanelBody"],
        { title: "Font Sizes", initialOpen: false },
        context.preferences.fontsizes.sizes.map(function (fontsize, index) {
          return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__fontsize__["a" /* default */], {
            key: index,
            name: fontsize.name,
            value: fontsize.size,
            onDelete: function onDelete() {
              return _onDelete(context, index);
            },
            onUpdate: function onUpdate(key, value) {
              return _onUpdate(context, index, key, value);
            }
          });
        }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4__fontsize_add__["a" /* default */], { onAdd: function onAdd(value) {
            return _onAdd(context, value);
          } }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__["ToggleControl"], {
          label: "Disable Custom Fontsize",
          checked: context.preferences.fontsizes.custom,
          onChange: function onChange(value) {
            return update(context, "custom", value);
          }
        })
      );
    }
  );
};

/* harmony default export */ __webpack_exports__["a"] = (FontSizes);

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_element___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_element__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__);
/**
 * WordPress dependencies
 */



var FontSize = function FontSize(_ref) {
  var name = _ref.name,
      value = _ref.value,
      onDelete = _ref.onDelete,
      onUpdate = _ref.onUpdate;

  // Update color
  var _onChange = function _onChange(key, value) {
    onUpdate(key, value);
  };

  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_0__wordpress_element__["Fragment"],
    null,
    wp.element.createElement(
      __WEBPACK_IMPORTED_MODULE_1__wordpress_components__["PanelRow"],
      { className: "wp-theme-support-sidebar__fontsize" },
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__["TextControl"], {
        label: "Name",
        value: name,
        className: "wp-theme-support-sidebar__fontsize-name",
        onChange: function onChange(value) {
          return _onChange("name", value);
        }
      }),
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__["TextControl"], {
        type: "number",
        label: "size",
        value: value,
        className: "wp-theme-support-sidebar__fontsize-size",
        onChange: function onChange(value) {
          return _onChange("size", value);
        }
      }),
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__wordpress_components__["IconButton"], {
        className: "wp-theme-support-sidebar__fontsize-remove",
        label: "Remove",
        icon: "no-alt",
        isLink: true,
        isDestructive: true,
        onClick: onDelete
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (FontSize);

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sindresorhus_slugify__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sindresorhus_slugify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__sindresorhus_slugify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_compose__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wordpress_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__wordpress_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);
/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


// Component
var add = function add(_ref) {
  var onAdd = _ref.onAdd,
      name = _ref.name,
      size = _ref.size,
      setState = _ref.setState;

  return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["Dropdown"], {
    className: "wp-theme-support-sidebar__fontsize-add-container",
    contentClassName: "wp-theme-support-sidebar__fontsize-add-content",
    position: "bottom left",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return wp.element.createElement(
        __WEBPACK_IMPORTED_MODULE_3__wordpress_components__["Button"],
        {
          isDefault: true,
          onClick: onToggle,
          "aria-expanded": isOpen,
          className: "wp-theme-support-sidebar__fontsize-add"
        },
        "Add"
      );
    },
    renderContent: function renderContent(_ref3) {
      var onClose = _ref3.onClose;
      return wp.element.createElement(
        "div",
        { className: "wp-theme-support-sidebar__fontsize-wrapper" },
        wp.element.createElement(
          __WEBPACK_IMPORTED_MODULE_3__wordpress_components__["PanelRow"],
          { className: "wp-theme-support-sidebar__fontsize" },
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["TextControl"], {
            label: "Name",
            value: name,
            className: "wp-theme-support-sidebar__fontsize-name",
            onChange: function onChange(name) {
              return setState(function () {
                return { name: name };
              });
            }
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["TextControl"], {
            type: "number",
            label: "size",
            value: size,
            className: "wp-theme-support-sidebar__fontsize-size",
            onChange: function onChange(size) {
              return setState(function () {
                return { size: size };
              });
            }
          }),
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__wordpress_components__["IconButton"], {
            className: "wp-theme-support-sidebar__fontsize-save",
            disabled: Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"])(name) || Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["isEmpty"])(size),
            label: "Save",
            icon: "yes",
            isPrimary: true,
            onClick: function onClick() {
              onAdd({
                name: name,
                slug: __WEBPACK_IMPORTED_MODULE_1__sindresorhus_slugify___default()(name),
                size: size
              });
              setState(function () {
                return { name: "", size: "" };
              });
              onClose();
            }
          })
        )
      );
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__wordpress_compose__["withState"])({ name: "", size: "" })(add));

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wordpress_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__context__ = __webpack_require__(11);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


var Widths = function Widths() {
  var update = function update(context, key, value) {
    var widths = context.preferences.widths;
    widths[key] = value;
    context.updatePreferences(widths);
  };

  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_1__context__["a" /* PreferencesContext */].Consumer,
    null,
    function (context) {
      return wp.element.createElement(
        __WEBPACK_IMPORTED_MODULE_0__wordpress_components__["PanelBody"],
        { title: "Block Editor Width", initialOpen: false },
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["TextControl"], {
          label: "Main Column",
          value: context.preferences.widths.main,
          className: "wp-theme-support-sidebar__width-main",
          onChange: function onChange(value) {
            return update(context, "main", value);
          }
        }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["TextControl"], {
          label: "Wide Blocks",
          value: context.preferences.widths.wide,
          className: "wp-theme-support-sidebar__width-wide",
          onChange: function onChange(value) {
            return update(context, "wide", value);
          }
        }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__wordpress_components__["TextControl"], {
          label: "Full Wide Blocks",
          value: context.preferences.widths.full,
          className: "wp-theme-support-sidebar__width-full",
          onChange: function onChange(value) {
            return update(context, "full", value);
          }
        })
      );
    }
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Widths);

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);