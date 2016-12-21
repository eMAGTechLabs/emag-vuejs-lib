(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(1);

	var _keys2 = _interopRequireDefault(_keys);

	var _components = __webpack_require__(36);

	_Object$keys(_components).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;

	  _Object$defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _components[key];
	    }
	  });
	});

	var components = _interopRequireWildcard(_components);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function plugin(Vue) {
	  if (plugin.installed) {
	    return;
	  }

	  (0, _keys2.default)(components).forEach(function (key) {
	    components[key].install = function (Vue) {};
	    Vue.component(key, components[key]);
	  });
	}

	if (window && window.Vue) {
	  window.Vue.use(plugin);
	}

	exports.default = plugin;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(2), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = __webpack_require__(23).Object.keys;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(4)
	  , $keys    = __webpack_require__(6);

	__webpack_require__(21)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(5);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(7)
	  , enumBugKeys = __webpack_require__(20);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(8)
	  , toIObject    = __webpack_require__(9)
	  , arrayIndexOf = __webpack_require__(12)(false)
	  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(10)
	  , defined = __webpack_require__(5);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(11);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(9)
	  , toLength  = __webpack_require__(13)
	  , toIndex   = __webpack_require__(15);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(14)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(14)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(17)('keys')
	  , uid    = __webpack_require__(19);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(18)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 19 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(22)
	  , core    = __webpack_require__(23)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(18)
	  , core      = __webpack_require__(23)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
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
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 23 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(18).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Translations = exports.SidebarControl = exports.Sidebar = exports.JqGrid = exports.Header = exports.Chosen = undefined;

	var _Chosen = __webpack_require__(37);

	var _Chosen2 = _interopRequireDefault(_Chosen);

	var _Header = __webpack_require__(46);

	var _Header2 = _interopRequireDefault(_Header);

	var _JqGrid = __webpack_require__(50);

	var _JqGrid2 = _interopRequireDefault(_JqGrid);

	var _Sidebar = __webpack_require__(53);

	var _Sidebar2 = _interopRequireDefault(_Sidebar);

	var _SidebarControl = __webpack_require__(58);

	var _SidebarControl2 = _interopRequireDefault(_SidebarControl);

	var _messages = __webpack_require__(62);

	var _messages2 = _interopRequireDefault(_messages);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Chosen = _Chosen2.default;
	exports.Header = _Header2.default;
	exports.JqGrid = _JqGrid2.default;
	exports.Sidebar = _Sidebar2.default;
	exports.SidebarControl = _SidebarControl2.default;
	exports.Translations = _messages2.default;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(38)

	/* template */
	var __vue_template__ = __webpack_require__(45)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/valentin/emag-vuejs-lib/src/components/Chosen.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a9108cc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5a9108cc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Chosen.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(39);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'chosen',
	  props: ['dataOptions'],
	  data: function data() {
	    var defaultOptions = {
	      placeholder_text_multiple: this.translations.chosen.multipleText,
	      placeholder_text_single: this.translations.chosen.singleText,
	      no_results_text: this.translations.chosen.noResult,
	      allow_single_deselect: true
	    };
	    return {
	      options: (0, _assign2.default)(defaultOptions, this.dataOptions || {})
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    this.id = this._uid;
	    this.translations = this.$store.state.translations[this.$store.state.lang];
	  },
	  mounted: function mounted() {
	    $('#chosen_' + this.id).chosen(this.options);
	  }
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(40), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	module.exports = __webpack_require__(23).Object.assign;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(42)});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(6)
	  , gOPS     = __webpack_require__(43)
	  , pIE      = __webpack_require__(44)
	  , toObject = __webpack_require__(4)
	  , IObject  = __webpack_require__(10)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(32)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 43 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 44 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('select', {
	    staticClass: "form-control",
	    attrs: {
	      "id": 'chosen_' + _vm.id
	    }
	  }, [_c('option', {
	    attrs: {
	      "value": ""
	    }
	  }), _vm._v(" "), _vm._l((_vm.options.items), function(item) {
	    return _c('option', {
	      domProps: {
	        "value": item.value
	      }
	    }, [_vm._v("\n    " + _vm._s(item.name) + "\n  ")])
	  })], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5a9108cc", module.exports)
	  }
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(47)

	/* template */
	var __vue_template__ = __webpack_require__(48)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/valentin/emag-vuejs-lib/src/components/Header.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-13c3d535", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-13c3d535", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Header.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'navbar'
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('nav', {
	    staticClass: "navbar navbar-default navbar-fixed-top"
	  }, [_c('div', {
	    staticClass: "container-fluid"
	  }, [_c('div', {
	    staticClass: "navbar-header"
	  }, [_c('div', {
	    staticClass: "nav-controls visible-xs-inline-block pull-left"
	  }, [_c('button', {
	    staticClass: "btn btn-default navbar-btn",
	    attrs: {
	      "id": "toggle-sidebar-btn",
	      "type": "button",
	      "aria-expanded": "false"
	    }
	  }, [_c('span', {
	    staticClass: "sr-only"
	  }, [_vm._v("Toggle sidepanel")]), _c('i', {
	    staticClass: "fa fa-bars"
	  })])]), _vm._v(" "), _c('a', {
	    staticClass: "navbar-brand",
	    attrs: {
	      "href": "javascript:void(0)"
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": __webpack_require__(49)
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "nav-controls visible-xs-inline-block pull-right"
	  }, [_c('button', {
	    staticClass: "btn btn-default navbar-btn",
	    attrs: {
	      "id": "toggle-nav-btn",
	      "type": "button",
	      "data-toggle": "collapse",
	      "data-target": "#main-nav",
	      "aria-expanded": "false"
	    }
	  }, [_c('span', {
	    staticClass: "sr-only"
	  }, [_vm._v("Toggle navigation")]), _c('i', {
	    staticClass: "fa fa-angle-down"
	  })])])]), _vm._v(" "), _c('div', {
	    staticClass: "collapse navbar-collapse",
	    attrs: {
	      "id": "main-nav"
	    }
	  }, [_c('h4', {
	    staticClass: "navbar-text"
	  }, [_vm._v("Vue demo boilerplate")])])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-13c3d535", module.exports)
	  }
	}

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(51)

	/* template */
	var __vue_template__ = __webpack_require__(52)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/valentin/emag-vuejs-lib/src/components/JqGrid.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-4d52b3d5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-4d52b3d5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] JqGrid.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(39);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'jqGrid',
	  props: ['dataOptions'],
	  beforeCreate: function beforeCreate() {
	    this.id = this._uid;
	  },
	  created: function created() {
	    window.photonPageLang = 'en';
	  },
	  mounted: function mounted() {
	    var options = (0, _assign2.default)(this.dataOptions, {
	      table: '#grid_table_' + this.id,
	      pager: '#grid_pager_' + this.id
	    });

	    var photonGrid = new PhotonJqGrid(options);
	    photonGrid.init();
	    if (this.dataOptions && this.dataOptions.mountCallback) {
	      this.dataOptions.mountCallback(photonGrid.grid || {});
	    }
	  }
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', [_c('table', {
	    staticClass: "table table-bordered",
	    attrs: {
	      "id": 'grid_table_' + _vm.id
	    }
	  }), _vm._v(" "), _c('div', {
	    attrs: {
	      "id": 'grid_pager_' + _vm.id
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-4d52b3d5", module.exports)
	  }
	}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(54)

	/* template */
	var __vue_template__ = __webpack_require__(61)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/valentin/emag-vuejs-lib/src/components/Sidebar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-08473364", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-08473364", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Sidebar.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Submenu = __webpack_require__(55);

	var _Submenu2 = _interopRequireDefault(_Submenu);

	var _SidebarControl = __webpack_require__(58);

	var _SidebarControl2 = _interopRequireDefault(_SidebarControl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'sidebar',
	  data: function data() {
	    return {
	      items: [{
	        label: 'Dashboard',
	        link: '#/demo/',
	        icon: 'fa fa-dashboard',
	        children: [],
	        visible: true,
	        current: true,
	        open: false
	      }, {
	        label: 'Main Layout',
	        link: '#',
	        icon: 'fa fa-file-text',
	        children: [{
	          label: 'Page template',
	          link: '#/boilerplate',
	          icon: 'fa fa-angle-double-right',
	          visible: true,
	          current: false,
	          open: false,
	          chidren: [{
	            label: 'Children 2',
	            link: '#/demo/',
	            icon: 'fa fa-dashboard',
	            children: [],
	            visible: true,
	            current: true,
	            open: false
	          }]
	        }],
	        visible: true,
	        current: false,
	        open: false
	      }]
	    };
	  },

	  components: {
	    Submenu: _Submenu2.default, SidebarControl: _SidebarControl2.default
	  },
	  mounted: function mounted() {
	    try {
	      initScrollbarForSidebar();
	    } catch (ex) {
	      console.log(ex);
	    }
	  }
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(56)

	/* template */
	var __vue_template__ = __webpack_require__(57)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/valentin/emag-vuejs-lib/src/components/Submenu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-47450227", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-47450227", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Submenu.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 56 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'submenu',
	  props: ['item']
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('ul', {
	    staticClass: "sidebar-submenu"
	  }, _vm._l((_vm.item.children), function(child) {
	    return _c('li', {
	      staticClass: "menu-item"
	    }, [_c('a', {
	      attrs: {
	        "href": child.link
	      }
	    }, [_c('span', {
	      staticClass: "menu-text"
	    }, [_vm._v(_vm._s(child.label))])]), _vm._v(" "), _c('submenu', {
	      attrs: {
	        "item": child
	      }
	    })])
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-47450227", module.exports)
	  }
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(59)

	/* template */
	var __vue_template__ = __webpack_require__(60)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/home/valentin/emag-vuejs-lib/src/components/SidebarControl.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8669e9ee", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8669e9ee", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] SidebarControl.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'sidebar-control'
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "sidebar-control"
	  }, [_c('div', {
	    staticClass: "sidebar-toggle"
	  }, [_c('button', {
	    staticClass: "btn btn-default btn-sm",
	    attrs: {
	      "id": "toggle-sidebar-size-btn"
	    }
	  }, [_c('i', {
	    staticClass: "menu-icon fa fa-arrow-left"
	  })])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-8669e9ee", module.exports)
	  }
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "sidebar sidebar-fixed",
	    attrs: {
	      "id": "sidebar"
	    }
	  }, [_c('div', {
	    staticClass: "sidebar-outer scrollable default-skin",
	    attrs: {
	      "tabindex": "-1"
	    }
	  }, [_c('div', {
	    staticClass: "viewport"
	  }, [_c('div', {
	    staticClass: "overview"
	  }, [_c('ul', {
	    staticClass: "sidebar-inner"
	  }, _vm._l((_vm.items), function(item) {
	    return _c('li', {
	      class: ['menu-item', item.children && item.children.length ? 'menu-item-has-children' : '', item.open ? 'active' : '']
	    }, [_c('a', {
	      attrs: {
	        "href": item.link
	      }
	    }, [_c('i', {
	      class: ['menu-icon', item.icon]
	    }), _vm._v(" "), _c('span', {
	      staticClass: "menu-text"
	    }, [_vm._v(_vm._s(item.label))])]), _vm._v(" "), _c('div', {
	      staticClass: "menu-item-data"
	    }, [_c('a', {
	      staticClass: "menu-item-min-link",
	      attrs: {
	        "href": item.link
	      }
	    }, [_c('span', {
	      staticClass: "menu-text"
	    }, [_vm._v(_vm._s(item.label))])]), _vm._v(" "), (item.children.length) ? _c('submenu', {
	      attrs: {
	        "item": item
	      }
	    }) : _vm._e()])])
	  }))])])]), _vm._v(" "), _c('sidebar-control')])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-08473364", module.exports)
	  }
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(39);

	var _assign2 = _interopRequireDefault(_assign);

	var _messages_en = __webpack_require__(63);

	var _messages_en2 = _interopRequireDefault(_messages_en);

	var _messages_ro = __webpack_require__(64);

	var _messages_ro2 = _interopRequireDefault(_messages_ro);

	var _messages_hu = __webpack_require__(65);

	var _messages_hu2 = _interopRequireDefault(_messages_hu);

	var _messages_bg = __webpack_require__(66);

	var _messages_bg2 = _interopRequireDefault(_messages_bg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  'translations': (0, _assign2.default)(_messages_en2.default, _messages_ro2.default, _messages_bg2.default, _messages_hu2.default)
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'en': {
	    'welcome': {
	      'message': 'logged as',
	      'messageNoLogin': 'Unauthenticated user'
	    },
	    'label': {
	      'logout': 'Logout',
	      'profile': 'Profile',
	      'home': 'Home',
	      'loginName': 'Login',
	      'loginRemember': 'Remember me',
	      'loginText': 'Login',
	      'userPlaceholder': 'Username',
	      'passwordPlaceholder': 'Password',
	      'filterSubmit': 'Search',
	      'filterReset': 'Reset',
	      'filterTitle': 'Filter',
	      'submitBarSubmit': 'Save',
	      'submitBarUpdate': 'Update',
	      'submitBarUpload': 'Upload',
	      'submitBarBack': 'Back',
	      'mandatory': 'Mandatory fields',
	      'wizardSubmitBarNext': 'Next',
	      'wizardSubmitBarPrev': 'Prev',
	      'wizardSubmitBarFinish': 'Finish',
	      'wizardSubmitBarCancel': 'Cancel',
	      'selectNoResults': 'No results match',
	      'fileNoFile': 'No file',
	      'fileChoose': 'Choose',
	      'fileChange': 'Change',
	      'save': 'Save',
	      'cancel': 'Cancel',
	      'preview': 'Preview',
	      'close': 'Close',
	      'confirm': 'Confirm',
	      'change': 'Change',
	      'language': 'Language',
	      'accountSettings': 'Account settings',
	      'support': 'Support',
	      'pageSettings': 'Page settings',
	      'yes': 'Yes',
	      'no': 'No'
	    },
	    'localeName': {
	      'ro_RO': 'romanian',
	      'en_GB': 'english',
	      'bg_BG': 'bulgarian',
	      'hu_HU': 'hungarian',
	      'pl_PL': 'polish',
	      'ro-RO': 'romanian',
	      'en-GB': 'english',
	      'bg-BG': 'bulgarian',
	      'hu-HU': 'hungarian',
	      'pl-PL': 'polish',
	      'ro': 'romanian',
	      'en': 'english',
	      'bg': 'bulgarian',
	      'hu': 'hungarian',
	      'pl': 'polish'
	    },
	    'baseNotifications': {
	      'titleError': 'Check errors',
	      'titleInfo': 'Info',
	      'titleNotice': 'Notifications',
	      'titleSuccess': 'Success',
	      'titleDelete': 'Success',
	      'viewAll': 'View all'
	    },
	    'tree': {
	      'modalTitle': 'Select',
	      'modalResetLabel': 'Reset',
	      'modalCancelLabel': 'Cancel',
	      'modalOkLabel': 'Select',
	      'textUnmatched': 'Hide unmatched',
	      'textSelected': 'selected',
	      'searchPlaceholder': 'Search',
	      'textSelectHierarchy': 'Hierarchical multi-selection'
	    },
	    'chosen': {
	      'multipleText': 'Select Some Options',
	      'singleText': 'Select an Option',
	      'noResult': 'No results match'
	    },
	    'chosenAjax': {
	      'multipleText': 'Search some options',
	      'singleText': 'Search an option',
	      'noResult': 'No results match',
	      'typing': 'Keep typing...',
	      'looking': 'Looking for...'
	    },
	    'html5': {
	      'value': 'Please fill out this field.',
	      'numberMin': 'Please select a value that is no less than',
	      'numberMax': 'Please select a value that is no more than',
	      'url': 'Please fill out this field with a valid url.',
	      'email': 'Please fill out this field with a valid email.',
	      'list': 'Please select an item in the list.'
	    },
	    'daterange': {
	      'apply': 'Apply',
	      'cancel': 'Cancel',
	      'from': 'From',
	      'to': 'To',
	      'january': 'Jan',
	      'february': 'Feb',
	      'march': 'Mar',
	      'april': 'Apr',
	      'may': 'May',
	      'june': 'Jun',
	      'july': 'Jul',
	      'august': 'Aug',
	      'september': 'Sep',
	      'october': 'Oct',
	      'november': 'Nov',
	      'december': 'Dec',
	      'sunday': 'Su',
	      'monday': 'Mo',
	      'tuesday': 'Tu',
	      'wednesday': 'We',
	      'thursday': 'Th',
	      'friday': 'Fr',
	      'saturday': 'Sa'
	    },
	    'page': {
	      'notFound': 'Page not found',
	      'subHeaderMessage': 'This page has been moved or it doesn\'t exist!',
	      'adviceTitle': 'Try one of the following:',
	      'verifyAddress': 'Re-check the url.',
	      'readFaq': 'Read the frequently asked questions.',
	      'tellUs': 'Inform us about the problem.',
	      'wentWrong': 'Refresh the page. Something went wrong.',
	      'workingOnIt': 'Give it a minute or two. We are working on it!'
	    }
	  }
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'ro': {
	    'welcome': {
	      'message': 'Autentificat ca',
	      'messageNoLogin': 'Utilizator neautentificat'
	    },
	    'label': {
	      'logout': 'Deconectare',
	      'profile': 'Profil',
	      'home': 'Acasă',
	      'loginName': 'Autentificare',
	      'loginRemember': 'Ține-mă minte',
	      'loginText': 'Autentifică-te',
	      'userPlaceholder': 'Utilizator',
	      'passwordPlaceholder': 'Parola',
	      'filterSubmit': 'Caută',
	      'filterReset': 'Resetează',
	      'filterTitle': 'Filtrare',
	      'submitBarSubmit': 'Salvează',
	      'submitBarUpload': 'Încarcă',
	      'submitBarUpdate': 'Modifică',
	      'submitBarBack': 'Înapoi',
	      'mandatory': 'Câmpuri obligatorii',
	      'wizardSubmitBarNext': 'Înainte',
	      'wizardSubmitBarPrev': 'Înapoi',
	      'wizardSubmitBarFinish': 'Finalizează',
	      'wizardSubmitBarCancel': 'Anulează',
	      'selectNoResults': 'Niciun rezultat',
	      'fileNoFile': 'Niciun fișier',
	      'fileChoose': 'Selectează',
	      'fileChange': 'Schimbă',
	      'save': 'Salvează',
	      'cancel': 'Anulează',
	      'preview': 'Pre-vizualizează',
	      'close': 'Închide',
	      'confirm': 'Confirmă',
	      'change': 'Modifică',
	      'language': 'Limbă',
	      'accountSettings': 'Setările contului',
	      'support': 'Suport tehnic',
	      'pageSettings': 'Setări pagină',
	      'yes': 'Da',
	      'no': 'Nu'
	    },
	    'localeName': {
	      'ro_RO': 'română',
	      'en_GB': 'engleză',
	      'bg_BG': 'bulgară',
	      'hu_HU': 'maghiară',
	      'pl_PL': 'poloneză',
	      'ro-RO': 'română',
	      'en-GB': 'engleză',
	      'bg-BG': 'bulgară',
	      'hu-HU': 'maghiară',
	      'pl-PL': 'poloneză',
	      'ro': 'română',
	      'en': 'engleză',
	      'bg': 'bulgară',
	      'hu': 'maghiară',
	      'pl': 'poloneză'
	    },
	    'baseNotifications': {
	      'titleError': 'Verificați următoarele erori',
	      'titleInfo': 'Info',
	      'titleNotice': 'Notificări',
	      'titleSuccess': 'Acțiunea a avut loc cu succes',
	      'titleDelete': 'Ștergerea a avut loc cu succes',
	      'viewAll': 'Vizualizează totul'
	    },
	    'tree': {
	      'modalTitle': 'Selectează',
	      'modalResetLabel': 'Resetează',
	      'modalCancelLabel': 'Anulează',
	      'modalOkLabel': 'Selectează',
	      'textUnmatched': 'Ascunde rezultatele nerelevante',
	      'textSelectare': 'Selectează toate elementele din categorie',
	      'textSelected': 'selectate',
	      'searchPlaceholder': 'Caută',
	      'textSelectHierarchy': 'Selectare multiplă ierarhică'
	    },
	    'chosen': {
	      'multipleText': 'Selectează o opțiune',
	      'singleText': 'Selectează o opțiune',
	      'noResult': 'Niciun rezultat'
	    },
	    'chosenAjax': {
	      'multipleText': 'Caută o opțiune',
	      'singleText': 'Caută o opțiune',
	      'noResult': 'Niciun rezultat',
	      'typing': 'Scrie...',
	      'looking': 'Se caută...'
	    },
	    'html5': {
	      'value': 'Vă rog să introduceți o valoare.',
	      'numberMin': 'Valoarea minimă trebuie să fie',
	      'numberMax': 'Valoarea maximă trebuie să fie',
	      'url': 'Vă rog să introduceți o adresă url validă.',
	      'email': 'Vă rog să introduceți o adresă de email validă.',
	      'list': 'Vă rog să selectați un element din listă.'
	    },
	    'daterange': {
	      'apply': 'Aplică',
	      'cancel': 'Anulează',
	      'from': 'De la',
	      'to': 'Până la',
	      'january': 'Ian',
	      'february': 'Feb',
	      'march': 'Mar',
	      'april': 'Apr',
	      'may': 'Mai',
	      'june': 'Iun',
	      'july': 'Iul',
	      'august': 'Aug',
	      'september': 'Sep',
	      'october': 'Oct',
	      'november': 'Noi',
	      'december': 'Dec',
	      'sunday': 'Du',
	      'monday': 'Lu',
	      'tuesday': 'Ma',
	      'wednesday': 'Mi',
	      'thursday': 'Jo',
	      'friday': 'Vi',
	      'saturday': 'Sâ'
	    },
	    'page': {
	      'notFound': 'Pagina nu a fost gasită',
	      'subHeaderMessage': 'Această pagină a fost mutată sau nu mai există!',
	      'adviceTitle': 'Încearcă următoarele:',
	      'verifyAddress': 'Verifică adresa',
	      'readFaq': 'Citește în categoria întrebărilor adresate frecvent',
	      'tellUs': 'Informează-ne despre problemă',
	      'wentWrong': 'Ceva nu a funcționat',
	      'workingOnIt': 'Lucrăm la rezolvarea problemei!'
	    }
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'hu': {
	    'welcome': {
	      'message': 'bejelentkezve mint',
	      'messageNoLogin': 'Hitelesített felhasználó'
	    },
	    'label': {
	      'logout': 'Leválasztás',
	      'profile': 'Saját fiók',
	      'home': 'Otthon',
	      'loginName': 'Bejelentkezés',
	      'loginRemember': 'Emlékezz rám',
	      'loginText': 'Bejelentkezés',
	      'userPlaceholder': 'Használó',
	      'passwordPlaceholder': 'Jelszó',
	      'filterSubmit': 'Keresés',
	      'filterReset': 'újrakezd',
	      'filterTitle': 'Szűr',
	      'submitBarSubmit': 'Megóv',
	      'submitBarUpdate': 'Frissítés',
	      'submitBarUpload': 'Feltöltés',
	      'submitBarBack': 'Vissza',
	      'mandatory': 'kötelező mezők',
	      'wizardSubmitBarNext': 'következő',
	      'wizardSubmitBarPrev': 'Előző',
	      'wizardSubmitBarFinish': 'befejez',
	      'wizardSubmitBarCancel': 'töröl',
	      'selectNoResults': 'Nincs eredmény mérkőzés',
	      'fileNoFile': 'Nincs fájl',
	      'fileChoose': 'kiválaszt',
	      'fileChange': 'változik',
	      'save': 'Megment',
	      'cancel': 'Visszavonásához',
	      'preview': 'Előnézet',
	      'close': 'Közel',
	      'confirm': 'Erősítse',
	      'change': 'Változás',
	      'language': 'Nyelv',
	      'accountSettings': 'Fiók beállítások',
	      'support': 'Támogatás',
	      'pageSettings': 'Oldal beállítások',
	      'yes': 'Igen',
	      'no': 'Nem'
	    },
	    'localeName': {
	      'ro_RO': 'román',
	      'en_GB': 'angol',
	      'bg_BG': 'bolgár',
	      'hu_HU': 'magyar',
	      'pl_PL': 'lengyel',
	      'ro-RO': 'román',
	      'en-GB': 'angol',
	      'bg-BG': 'bolgár',
	      'hu-HU': 'magyar',
	      'pl-PL': 'lengyel',
	      'ro': 'román',
	      'en': 'angol',
	      'bg': 'bolgár',
	      'hu': 'magyar',
	      'pl': 'lengyel'
	    },
	    'baseNotifications': {
	      'titleError': 'Ellenőrizze a hibákat',
	      'titleInfo': 'Info',
	      'titleNotice': 'Értesítések',
	      'titleSuccess': 'Siker',
	      'titleDelete': 'Siker',
	      'viewAll': 'Mindet megnéz'
	    },
	    'tree': {
	      'modalTitle': 'választ',
	      'modalResetLabel': 'újrakezd',
	      'modalCancelLabel': 'Tiszta',
	      'modalOkLabel': 'választ',
	      'textUnmatched': 'elrejtése páratlan',
	      'textSelected': 'kiválasztott',
	      'searchPlaceholder': 'keresés',
	      'textSelectHierarchy': 'Hierarchikus több választás'
	    },
	    'chosen': {
	      'multipleText': 'Válassza ki néhány opció',
	      'singleText': 'Válasszon ki egy lehetőséget',
	      'noResult': 'Nem találtam mérkőzés'
	    },
	    'chosenAjax': {
	      'multipleText': 'Keresés néhány opció',
	      'singleText': 'Keresés egy lehetőség',
	      'noResult': 'Nem találtam mérkőzés',
	      'typing': 'ír...',
	      'looking': 'Keresés a...'
	    },
	    'html5': {
	      'value': 'Kérem töltse ki ezt mező.',
	      'numberMin': 'Kérem választ érték hogy van cnagyobb mint',
	      'numberMax': 'Kérem választ érték hogy van kisebb mint',
	      'url': 'Kérem töltse ki ezt mező a érvényes url.',
	      'email': 'Kérem töltse ki ezt mező a érvényes email.',
	      'list': 'Kérem választ egy tétel -tól lista.'
	    },
	    'daterange': {
	      'apply': 'Alkalmaz',
	      'cancel': 'Visszavonásához',
	      'from': 'Tól',
	      'to': 'Hogy',
	      'january': 'Jan',
	      'february': 'Feb',
	      'march': 'Már',
	      'april': 'Ápr',
	      'may': 'Leh',
	      'june': 'Jún',
	      'july': 'Júl',
	      'august': 'Aug',
	      'september': 'Sze',
	      'october': 'Okt',
	      'november': 'Nov',
	      'december': 'Dec',
	      'sunday': 'Va',
	      'monday': 'Hé',
	      'tuesday': 'Ke',
	      'wednesday': 'Sz',
	      'thursday': 'Cs',
	      'friday': 'Pé',
	      'saturday': 'Sz'
	    },
	    'page': {
	      'notFound': 'Az oldal nem található',
	      'subHeaderMessage': 'Ez az oldal áthelyezésre került vagy már nem létezik!',
	      'adviceTitle': 'Próbáld ki a következő:',
	      'verifyAddress': 'Ellenőrizze a cím',
	      'readFaq': 'Olvas gyakran ismételt kérdések',
	      'tellUs': 'Értesítsen minket a problémát',
	      'wentWrong': 'Valami elromlott',
	      'workingOnIt': 'Dolgozunk rajta!'
	    }
	  }
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'bg': {
	    'welcome': {
	      'message': 'влезли като',
	      'messageNoLogin': 'Неудостоверен потребител'
	    },
	    'label': {
	      'logout': 'излезете',
	      'profile': 'моята сметка',
	      'home': 'вкъщи',
	      'loginName': 'логин',
	      'loginRemember': 'запомни ме',
	      'loginText': 'логин',
	      'userPlaceholder': 'потребителско име',
	      'passwordPlaceholder': 'парола',
	      'filterSubmit': 'търсене',
	      'filterReset': 'набирам отново',
	      'filterTitle': 'филтър',
	      'submitBarSubmit': 'спасявам',
	      'submitBarUpdate': 'Актуализация',
	      'submitBarUpload': 'Качи',
	      'submitBarBack': 'обратно',
	      'mandatory': 'Задължителни полета',
	      'wizardSubmitBarNext': 'до',
	      'wizardSubmitBarPrev': 'визуализации',
	      'wizardSubmitBarFinish': 'завършеност',
	      'wizardSubmitBarCancel': 'отмените',
	      'selectNoResults': 'Няма мач резултати',
	      'fileNoFile': 'не файл',
	      'fileChoose': 'избирам',
	      'fileChange': 'Промяна',
	      'save': 'Cпасяване',
	      'cancel': 'Aнулира',
	      'preview': 'Изглед',
	      'close': 'близо',
	      'confirm': 'одобрявам',
	      'change': 'Промяна',
	      'language': 'Eзик',
	      'accountSettings': 'Настройки на профила',
	      'support': 'Подкрепа',
	      'pageSettings': 'настройки на страница',
	      'yes': 'да',
	      'no': 'Не'
	    },
	    'localeName': {
	      'ro_RO': 'румънски',
	      'en_GB': 'английски',
	      'bg_BG': 'български',
	      'hu_HU': 'унгарски',
	      'pl_PL': 'полски',
	      'ro-RO': 'румънски',
	      'en-GB': 'английски',
	      'bg-BG': 'български',
	      'hu-HU': 'унгарски',
	      'pl-PL': 'полски',
	      'ro': 'румънски',
	      'en': 'английски',
	      'bg': 'български',
	      'hu': 'унгарски',
	      'pl': 'полски'
	    },
	    'baseNotifications': {
	      'titleError': 'Проверете грешки',
	      'titleInfo': 'Информация',
	      'titleNotice': 'Известия',
	      'titleSuccess': 'Yспех',
	      'titleDelete': 'Yспех',
	      'viewAll': 'Bиж всички'
	    },
	    'tree': {
	      'modalTitle': 'избирам',
	      'modalResetLabel': 'набирам отново',
	      'modalCancelLabel': 'Отказ',
	      'modalOkLabel': 'избирам',
	      'textUnmatched': 'Скриване несравнимо',
	      'textSelected': 'подбран',
	      'searchPlaceholder': 'търсене',
	      'textSelectHierarchy': 'Йерархично мулти - избор'
	    },
	    'chosen': {
	      'multipleText': 'Изберете Някои Options',
	      'singleText': 'Изберете опция',
	      'noResult': 'Няма резултат резултати'
	    },
	    'chosenAjax': {
	      'multipleText': 'Търсене някои опции',
	      'singleText': 'Търсене опция',
	      'noResult': 'Няма мач резултати',
	      'typing': 'пиша...',
	      'looking': 'Търся...'
	    },
	    'html5': {
	      'value': 'моля попълнете това област.',
	      'numberMin': 'моля изберете стойност по-голям от',
	      'numberMax': 'моля изберете стойност по-малък от',
	      'url': 'моля попълнете това област с валиден Url.',
	      'email': 'моля попълнете това област с валиден Email.',
	      'list': 'моля изберете един елемент от списък.'
	    },
	    'daterange': {
	      'apply': 'Прилага',
	      'cancel': 'Aнулира',
	      'from': 'Oт',
	      'to': 'Kъм',
	      'january': 'Яну',
	      'february': 'Фев',
	      'march': 'Мар',
	      'april': 'Апр',
	      'may': 'мож',
	      'june': 'юн',
	      'july': 'юл',
	      'august': 'Авг',
	      'september': 'Сеп',
	      'october': 'Окт',
	      'november': 'Ное',
	      'december': 'Дек',
	      'sunday': 'Нед',
	      'monday': 'пон',
	      'tuesday': 'вто',
	      'wednesday': 'Cp',
	      'thursday': 'Че',
	      'friday': 'Пe',
	      'saturday': 'Cъ'
	    },
	    'page': {
	      'notFound': 'Cтраницата не е намерена',
	      'subHeaderMessage': 'Тази страница беше преместена и вече не съществува!',
	      'adviceTitle': 'Oпитайте следното:',
	      'verifyAddress': 'Проверка адреса',
	      'readFaq': 'Чета често задавани въпроси',
	      'tellUs': 'Информирайте ни за проблема',
	      'wentWrong': 'Hещо се обърка',
	      'workingOnIt': 'Ние работим върху него!'
	    }
	  }
	};

/***/ }
/******/ ])
});
;