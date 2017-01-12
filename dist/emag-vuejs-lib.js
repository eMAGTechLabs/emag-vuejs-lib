(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmagVueLib"] = factory();
	else
		root["EmagVueLib"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Chosen = __webpack_require__(11);
	
	var _Chosen2 = _interopRequireDefault(_Chosen);
	
	var _Header = __webpack_require__(60);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _JqGrid = __webpack_require__(63);
	
	var _JqGrid2 = _interopRequireDefault(_JqGrid);
	
	var _Sidebar = __webpack_require__(66);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _Footer = __webpack_require__(79);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Submenu = __webpack_require__(68);
	
	var _Submenu2 = _interopRequireDefault(_Submenu);
	
	var _SidebarControl = __webpack_require__(75);
	
	var _SidebarControl2 = _interopRequireDefault(_SidebarControl);
	
	var _Autocomplete = __webpack_require__(82);
	
	var _Autocomplete2 = _interopRequireDefault(_Autocomplete);
	
	var _messages = __webpack_require__(54);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	var _Datetimepicker = __webpack_require__(85);
	
	var _Datetimepicker2 = _interopRequireDefault(_Datetimepicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EmagVueLib = {
	  Chosen: _Chosen2.default,
	  Footer: _Footer2.default,
	  Header: _Header2.default,
	  JqGrid: _JqGrid2.default,
	  Sidebar: _Sidebar2.default,
	  Submenu: _Submenu2.default,
	  SidebarControl: _SidebarControl2.default,
	  Translations: _messages2.default,
	  Autocomplete: _Autocomplete2.default,
	  Datetimepicker: _Datetimepicker2.default
	};
	
	module.exports = EmagVueLib;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(12)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(59)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Chosen.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Chosen.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Chosen.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Chosen.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Chosen.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(13);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _assign = __webpack_require__(48);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _messages = __webpack_require__(54);
	
	var _messages2 = _interopRequireDefault(_messages);
	
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
	    this.translations = _messages2.default.translations[getDefaultLang(this)];
	  },
	  mounted: function mounted() {
	    /* eslint-disable no-undef */
	    $('#chosen_' + this.id).chosen(this.options);
	  }
	};
	
	// Helpers
	// <template>
	//   <select :id="'chosen_' + id" class="form-control">
	//     <option value=''></option>
	//     <option :value="item.value" v-for="item in options.items">
	//       {{ item.name }}
	//     </option>
	//   </select>
	// </template>
	// <script>
	
	var getDefaultLang = function getDefaultLang(self) {
	  if (self.$store.state && self.$store.state.lang) {
	    return self.$store.state.lang;
	  }
	  return (0, _keys2.default)(_messages2.default.translations)[0];
	};
	// </script>

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	module.exports = __webpack_require__(35).Object.keys;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(16)
	  , $keys    = __webpack_require__(18);
	
	__webpack_require__(33)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(17);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(19)
	  , enumBugKeys = __webpack_require__(32);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(20)
	  , toIObject    = __webpack_require__(21)
	  , arrayIndexOf = __webpack_require__(24)(false)
	  , IE_PROTO     = __webpack_require__(28)('IE_PROTO');
	
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
/* 20 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(22)
	  , defined = __webpack_require__(17);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(23);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(21)
	  , toLength  = __webpack_require__(25)
	  , toIndex   = __webpack_require__(27);
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(26)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(26)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(29)('keys')
	  , uid    = __webpack_require__(31);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(30)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 31 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(34)
	  , core    = __webpack_require__(35)
	  , fails   = __webpack_require__(44);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(30)
	  , core      = __webpack_require__(35)
	  , ctx       = __webpack_require__(36)
	  , hide      = __webpack_require__(38)
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
/* 35 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(37);
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
/* 37 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(39)
	  , createDesc = __webpack_require__(47);
	module.exports = __webpack_require__(43) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(40)
	  , IE8_DOM_DEFINE = __webpack_require__(42)
	  , toPrimitive    = __webpack_require__(46)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(43) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(43) && !__webpack_require__(44)(function(){
	  return Object.defineProperty(__webpack_require__(45)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(44)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(41)
	  , document = __webpack_require__(30).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(41);
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
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(49), __esModule: true };

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	module.exports = __webpack_require__(35).Object.assign;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(34);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(51)});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(18)
	  , gOPS     = __webpack_require__(52)
	  , pIE      = __webpack_require__(53)
	  , toObject = __webpack_require__(16)
	  , IObject  = __webpack_require__(22)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(44)(function(){
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
/* 52 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 53 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(48);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _messages_en = __webpack_require__(55);
	
	var _messages_en2 = _interopRequireDefault(_messages_en);
	
	var _messages_ro = __webpack_require__(56);
	
	var _messages_ro2 = _interopRequireDefault(_messages_ro);
	
	var _messages_hu = __webpack_require__(57);
	
	var _messages_hu2 = _interopRequireDefault(_messages_hu);
	
	var _messages_bg = __webpack_require__(58);
	
	var _messages_bg2 = _interopRequireDefault(_messages_bg);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  'translations': (0, _assign2.default)(_messages_en2.default, _messages_ro2.default, _messages_bg2.default, _messages_hu2.default)
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'en_GB': {
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
/* 56 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'ro_RO': {
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
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'hu_HU': {
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
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'bg_BG': {
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

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<select :id=\"'chosen_' + id\" class=\"form-control\">\n    <option value=''></option>\n    <option :value=\"item.value\" v-for=\"item in options.items\">\n      {{ item.name }}\n    </option>\n  </select>";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(61)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(62)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Header.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Header.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Header.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Header.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Header.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 61 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <nav class="navbar navbar-default navbar-fixed-top">
	//     <div class="container-fluid">
	//       <div class="navbar-header">
	//         <div class="nav-controls visible-xs-inline-block pull-left">
	//           <button id="toggle-sidebar-btn" type="button" class="btn btn-default navbar-btn"
	//                   aria-expanded="false">
	//             <span class="sr-only">Toggle sidepanel</span><i class="fa fa-bars"></i>
	//           </button>
	//         </div>
	//         <a class="navbar-brand" href="javascript:void(0)">
	//           <img v-if="logoPath" :src="logoPath"/>
	//         </a>
	//         <div class="nav-controls visible-xs-inline-block pull-right">
	//           <button id="toggle-nav-btn" type="button" class="btn btn-default navbar-btn" data-toggle="collapse"
	//                   data-target="#main-nav" aria-expanded="false">
	//             <span class="sr-only">Toggle navigation</span><i class="fa fa-angle-down"></i>
	//           </button>
	//         </div>
	//       </div>
	//       <div class="collapse navbar-collapse" id="main-nav">
	//         <h4 class="navbar-text" v-if="appName">{{ appName }}</h4>
	//       </div>
	//     </div>
	//   </nav>
	// </template>
	// <script>
	exports.default = {
	  name: 'header',
	  props: ['dataOptions'],
	  data: function data() {
	    return {
	      logoPath: this.dataOptions ? this.dataOptions.logoPath : '',
	      appName: this.dataOptions ? this.dataOptions.appName : ''
	    };
	  }
	};
	// </script>

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <div class=\"nav-controls visible-xs-inline-block pull-left\">\n          <button id=\"toggle-sidebar-btn\" type=\"button\" class=\"btn btn-default navbar-btn\"\n                  aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle sidepanel</span><i class=\"fa fa-bars\"></i>\n          </button>\n        </div>\n        <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n          <img v-if=\"logoPath\" :src=\"logoPath\"/>\n        </a>\n        <div class=\"nav-controls visible-xs-inline-block pull-right\">\n          <button id=\"toggle-nav-btn\" type=\"button\" class=\"btn btn-default navbar-btn\" data-toggle=\"collapse\"\n                  data-target=\"#main-nav\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span><i class=\"fa fa-angle-down\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"main-nav\">\n        <h4 class=\"navbar-text\" v-if=\"appName\">{{ appName }}</h4>\n      </div>\n    </div>\n  </nav>";

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(65)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./JqGrid.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./JqGrid.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./JqGrid.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./JqGrid.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./JqGrid.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(48);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <div>
	//     <table :id="'grid_table_' + id" class="table table-bordered"></table>
	//     <div :id="'grid_pager_' + id"></div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  name: 'jqGrid',
	  props: ['dataOptions'],
	  beforeCreate: function beforeCreate() {
	    this.id = this._uid;
	  },
	  mounted: function mounted() {
	    var options = (0, _assign2.default)(this.dataOptions, {
	      table: '#grid_table_' + this.id,
	      pager: '#grid_pager_' + this.id
	    });
	    /* eslint-disable no-undef */
	    var photonGrid = new PhotonJqGrid(options);
	    photonGrid.init();
	    if (this.dataOptions && this.dataOptions.mountCallback) {
	      this.dataOptions.mountCallback(photonGrid.grid || {});
	    }
	  }
	};
	// </script>

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<div>\n    <table :id=\"'grid_table_' + id\" class=\"table table-bordered\"></table>\n    <div :id=\"'grid_pager_' + id\"></div>\n  </div>";

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(78)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Sidebar.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Sidebar.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Sidebar.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Sidebar.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Sidebar.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(48);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _Submenu = __webpack_require__(68);
	
	var _Submenu2 = _interopRequireDefault(_Submenu);
	
	var _SidebarItem = __webpack_require__(71);
	
	var _SidebarItem2 = _interopRequireDefault(_SidebarItem);
	
	var _SidebarControl = __webpack_require__(75);
	
	var _SidebarControl2 = _interopRequireDefault(_SidebarControl);
	
	var _Sidebar = __webpack_require__(70);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div id="sidebar" class="sidebar sidebar-fixed">
	//         <div class="sidebar-outer scrollable default-skin" tabindex="-1">
	//             <div class="viewport">
	//                 <div class="overview">
	//                     <ul class="sidebar-inner">
	//                         <li v-for="item in items"
	//                             :class="getMenuItemCssClass(item)">
	//                             <sidebar-item :item="item"></sidebar-item>
	//                             <div class="menu-item-data">
	//                                 <sidebar-item :item="item" :collapsed="true"></sidebar-item>
	//                                 <submenu :item="item" v-if="item.children.length"></submenu>
	//                             </div>
	//                         </li>
	//                     </ul>
	//                 </div>
	//             </div>
	//         </div>
	//         <sidebar-control></sidebar-control>
	//     </div>
	// </template>
	
	// <script>
	/* eslint-disable no-unused-vars */
	exports.default = {
	  name: 'sidebar',
	  props: ['dataOptions'],
	  mixins: [_Sidebar2.default],
	  data: function data() {
	    return (0, _assign2.default)({}, { items: this.dataOptions && this.dataOptions.items ? this.dataOptions.items : [] });
	  },
	
	  components: {
	    Submenu: _Submenu2.default, SidebarItem: _SidebarItem2.default, SidebarControl: _SidebarControl2.default
	  },
	  mounted: function mounted() {
	    try {
	      var routePath = this.$route.path;
	      if (this.$router.mode === 'hash') {
	        routePath = '#' + routePath;
	      }
	      /* eslint-disable no-undef */
	      // Methods from emag-apps-ui-kit
	      initSidebarEvents();
	      staticNavigation(routePath);
	      initScrollbarForSidebar();
	    } catch (ex) {
	      console.log(ex);
	    }
	  }
	};
	// </script>

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(69)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(74)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Submenu.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Submenu.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Submenu.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Submenu.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Submenu.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Sidebar = __webpack_require__(70);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _SidebarItem = __webpack_require__(71);
	
	var _SidebarItem2 = _interopRequireDefault(_SidebarItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//   <ul class="sidebar-submenu">
	//     <li v-for="child in item.children" :class="getMenuItemCssClass(child)">
	//       <sidebar-item :item="child" :collapsed="true"></sidebar-item>
	//       <submenu :item="child"></submenu>
	//     </li>
	//   </ul>
	// </template>
	// <script>
	/* eslint-disable no-unused-vars */
	exports.default = {
	  name: 'submenu',
	  props: ['item'],
	  mixins: [_Sidebar2.default],
	  components: { SidebarItem: _SidebarItem2.default }
	};
	// </script>

/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  methods: {
	    getHrefForMenuItem: function getHrefForMenuItem(item) {
	      return item.link || 'javascript:void(0)';
	    },
	    isAbsolute: function isAbsolute(item) {
	      return !!item.absolute;
	    },
	    hasEmptyLink: function hasEmptyLink(item) {
	      return !(item.link && item.link.length);
	    },
	    getMenuItemCssClass: function getMenuItemCssClass(item) {
	      var menuItemCssClass = 'menu-item';
	      if (item.children && item.children.length) {
	        menuItemCssClass += ' menu-item-has-children';
	      }
	      if (item.open) {
	        menuItemCssClass += ' active';
	      }
	      return menuItemCssClass;
	    },
	    getCollapsedCssClass: function getCollapsedCssClass(collapsed) {
	      return collapsed ? 'menu-item-min-link' : '';
	    }
	  }
	};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(72)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(73)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./SidebarItem.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./SidebarItem.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./SidebarItem.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./SidebarItem.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./SidebarItem.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Sidebar = __webpack_require__(70);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'sidebar-item',
	  props: ['item', 'collapsed'],
	  mixins: [_Sidebar2.default]
	};
	// </script>
	// <template>
	//     <a :href="getHrefForMenuItem(item)" :class="getCollapsedCssClass(collapsed)" v-if="isAbsolute(item) || hasEmptyLink(item)">
	//         <i :class="['menu-icon', item.icon]" v-if="!collapsed"></i>
	//         <span class="menu-text">{{ item.label }}</span>
	//     </a>
	//     <router-link :to="item.link" :class="getCollapsedCssClass(collapsed)" v-else>
	//         <i :class="['menu-icon', item.icon]" v-if="!collapsed"></i>
	//         <span class="menu-text">{{ item.label }}</span>
	//     </router-link>
	// </template>
	// <script>

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<a :href=\"getHrefForMenuItem(item)\" :class=\"getCollapsedCssClass(collapsed)\" v-if=\"isAbsolute(item) || hasEmptyLink(item)\">\n        <i :class=\"['menu-icon', item.icon]\" v-if=\"!collapsed\"></i>\n        <span class=\"menu-text\">{{ item.label }}</span>\n    </a>\n    <router-link :to=\"item.link\" :class=\"getCollapsedCssClass(collapsed)\" v-else>\n        <i :class=\"['menu-icon', item.icon]\" v-if=\"!collapsed\"></i>\n        <span class=\"menu-text\">{{ item.label }}</span>\n    </router-link>";

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<ul class=\"sidebar-submenu\">\n    <li v-for=\"child in item.children\" :class=\"getMenuItemCssClass(child)\">\n      <sidebar-item :item=\"child\" :collapsed=\"true\"></sidebar-item>\n      <submenu :item=\"child\"></submenu>\n    </li>\n  </ul>";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(76)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(77)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./SidebarControl.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./SidebarControl.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./SidebarControl.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./SidebarControl.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./SidebarControl.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 76 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="sidebar-control">
	//     <div class="sidebar-toggle">
	//       <button id="toggle-sidebar-size-btn" class="btn btn-default btn-sm">
	//         <i class="menu-icon fa fa-arrow-left"></i>
	//       </button>
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	  name: 'sidebar-control'
	};
	// </script>

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<div class=\"sidebar-control\">\n    <div class=\"sidebar-toggle\">\n      <button id=\"toggle-sidebar-size-btn\" class=\"btn btn-default btn-sm\">\n        <i class=\"menu-icon fa fa-arrow-left\"></i>\n      </button>\n    </div>\n  </div>";

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<div id=\"sidebar\" class=\"sidebar sidebar-fixed\">\n        <div class=\"sidebar-outer scrollable default-skin\" tabindex=\"-1\">\n            <div class=\"viewport\">\n                <div class=\"overview\">\n                    <ul class=\"sidebar-inner\">\n                        <li v-for=\"item in items\"\n                            :class=\"getMenuItemCssClass(item)\">\n                            <sidebar-item :item=\"item\"></sidebar-item>\n                            <div class=\"menu-item-data\">\n                                <sidebar-item :item=\"item\" :collapsed=\"true\"></sidebar-item>\n                                <submenu :item=\"item\" v-if=\"item.children.length\"></submenu>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <sidebar-control></sidebar-control>\n    </div>";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(80)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(81)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Footer.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Footer.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Footer.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Footer.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Footer.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(48);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <template>
	//     <div id="main_footer" :class="['footer', fixed ? 'footer-fixed' : '']">
	//         <div class="footer-inner">
	//             <div class="footer-content" v-if='fixed'>
	//                 <div class="container-fluid">
	//                     <div class="pull-left hidden-xs" v-html="content">
	//                     </div>
	//                     <div class="panel-controls pull-right" v-html="actions">
	//                     </div>
	//                 </div>
	//                 <div class="clearfix text-center pad-top-20 visible-xs-block">
	//                 </div>
	//             </div>
	//             <div class="footer-content text-center" v-if="!fixed" v-html="content">
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script>
	exports.default = {
	  name: 'footer',
	  props: ['dataOptions'],
	  data: function data() {
	    return (0, _assign2.default)({ fixed: false, content: '', actions: '' }, this.dataOptions);
	  }
	};
	// </script>

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div id=\"main_footer\" :class=\"['footer', fixed ? 'footer-fixed' : '']\">\n        <div class=\"footer-inner\">\n            <div class=\"footer-content\" v-if='fixed'>\n                <div class=\"container-fluid\">\n                    <div class=\"pull-left hidden-xs\" v-html=\"content\">\n                    </div>\n                    <div class=\"panel-controls pull-right\" v-html=\"actions\">\n                    </div>\n                </div>\n                <div class=\"clearfix text-center pad-top-20 visible-xs-block\">\n                </div>\n            </div>\n            <div class=\"footer-content text-center\" v-if=\"!fixed\" v-html=\"content\">\n            </div>\n        </div>\n    </div>";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(83)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(84)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Autocomplete.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Autocomplete.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Autocomplete.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(13);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _assign = __webpack_require__(48);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _messages = __webpack_require__(54);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable no-undef */
	exports.default = {
	  name: 'autocomplete',
	  props: ['dataOptions'],
	  updated: function updated() {
	    $('#autocomplete_' + this.id).trigger('chosen:updated');
	  },
	  data: function data() {
	    this.id = this._uid;
	    this.translations = _messages2.default.translations[getDefaultLang(this)];
	
	    var defaultOptions = {
	      type: 'GET',
	      dataType: 'json',
	      keepTypingMsg: this.translations.chosenAjax.typing,
	      lookingForMsg: this.translations.chosenAjax.looking,
	      placeholder_text_multiple: this.translations.chosenAjax.multipleText,
	      placeholder_text_single: this.translations.chosenAjax.singleText,
	      no_results_text: this.translations.chosenAjax.noResult,
	      id: this.id,
	      filters: {},
	      allow_single_deselect: true,
	      dataCallback: function dataCallback() {
	        var filterValues = {};
	        try {
	          if (typeof this.filters === 'string' || this.filters instanceof String) {
	            this.filters = JSON.parse(this.filters);
	          }
	        } catch (ex) {}
	        for (var prop in this.filters) {
	          if ($(this.filters[prop]).length) {
	            filterValues[prop] = $(this.filters[prop]).val();
	          } else {
	            filterValues[prop] = this.filters[prop];
	          }
	        }
	        var term = $('#autocomplete_' + this.id + '_chosen').find('input').val();
	        var dataSend = {
	          'filters': filterValues,
	          'term': term
	        };
	        return dataSend;
	      }
	    };
	    return {
	      options: (0, _assign2.default)(defaultOptions, this.dataOptions || {})
	    };
	  },
	  mounted: function mounted() {
	    $('#autocomplete_' + this.id).ajaxChosen(this.options, function (data) {
	      var terms = {};
	      $.each(data.results, function (i, val) {
	        terms[i] = val;
	      });
	      if (data.isError) {
	        var errorMessage = '';
	        $.each(data.errors, function (i, val) {
	          errorMessage += '<li>' + val + '</li>';
	        });
	        addNotification('<ul>' + errorMessage + '</ul>', 'danger');
	      }
	      return terms;
	    });
	  }
	};
	
	// Helpers
	// <template>
	//     <select :id="'autocomplete_' + id" class="form-control" :multiple="this.options.multiple ? this.options.multiple : false">
	//         <option value=''></option>
	//         <option v-for="item in dataOptions.items" :value="item.value" selected>
	//             {{ item.name }}
	//         </option>
	//     </select>
	// </template>
	// <script>
	
	var getDefaultLang = function getDefaultLang(self) {
	  if (self.$store.state && self.$store.state.lang) {
	    return self.$store.state.lang;
	  }
	  return (0, _keys2.default)(_messages2.default.translations)[0];
	};
	// </script>

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<select :id=\"'autocomplete_' + id\" class=\"form-control\" :multiple=\"this.options.multiple ? this.options.multiple : false\">\n        <option value=''></option>\n        <option v-for=\"item in dataOptions.items\" :value=\"item.value\" selected>\n            {{ item.name }}\n        </option>\n    </select>";

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(88)
	if (false) {
	(function () {
	var hotAPI = require("vue-hot-reload-api")
	hotAPI.install(require("vue"))
	if (!hotAPI.compatible) return
	var id = "-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datetimepicker.vue"
	hotAPI.createRecord(id, module.exports)
	module.hot.accept(["-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datetimepicker.vue","-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datetimepicker.vue"], function () {
	var newOptions = require("-!babel!./../../node_modules/vue-loader/lib/selector.js?type=script&index=0!./Datetimepicker.vue")
	if (newOptions && newOptions.__esModule) newOptions = newOptions.default
	var newTemplate = require("-!vue-html-loader!./../../node_modules/vue-loader/lib/selector.js?type=template&index=0!./Datetimepicker.vue")
	hotAPI.update(id, newOptions, newTemplate)
	})
	})()
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _assign = __webpack_require__(48);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _Datetimepicker = __webpack_require__(87);
	
	var _Datetimepicker2 = _interopRequireDefault(_Datetimepicker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* eslint-disable no-undef */
	exports.default = {
	  name: 'datetimepicker',
	  props: ['dataOptions'],
	  mixins: [_Datetimepicker2.default],
	  data: function data() {
	    this.id = this._uid;
	    var defaultOptions = {
	      format: 'YYYY-MM-DD HH:mm:ss',
	      icons: {
	        date: ''
	      }
	    };
	    var options = (0, _assign2.default)(defaultOptions, this.dataOptions || {});
	    options.icons.date = this.getIcon(options.format);
	    return options;
	  },
	  mounted: function mounted() {
	    $('#date_time_' + this.id).datetimepicker(this.options);
	  },
	
	  destroyed: function destroyed() {
	    try {
	      $(this.$el).find('#date_time_' + this.id).data('DateTimePicker').destroy();
	    } catch (ex) {}
	  }
	};
	// </script>
	// <template>
	//     <div class="input-group">
	//         <input type="text" :id="'date_time_' + id" class="form-control" autocomplete="off">
	//         <div class="input-group-addon"><i :class="icons.date"></i>
	//         </div>
	//     </div>
	// </template>
	// <script>

/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getIcon = function getIcon(format) {
	  /* eslint-disable no-unused-vars */
	  var icon = 'fa fa-calendar';
	  if (typeof format === 'string') {
	    if (hasDate(format) && hasTime(format)) {
	      icon = 'fa fa-calendar';
	    } else if (hasDate(format)) {
	      icon = 'fa fa-calendar-o';
	    } else if (hasTime(format)) {
	      icon = 'fa fa-clock-o';
	    }
	  }
	  return icon;
	};
	
	var hasDate = function hasDate(format) {
	  var characters = ['Y', 'S', 'd', 'M'];
	  return hasCharacters(format, characters);
	};
	
	var hasTime = function hasTime(format) {
	  var characters = ['H', 'h', 'k', 'm', 'S', 's'];
	  return hasCharacters(format, characters);
	};
	
	var hasCharacters = function hasCharacters(format, characters) {
	  var regx = new RegExp('[' + characters.join('') + ']', 'g');
	  var regxResult = format.match(regx);
	  if (regxResult) {
	    return regxResult.length > 0;
	  }
	  return false;
	};
	
	exports.default = {
	  methods: {
	    getIcon: getIcon,
	    hasDate: hasDate,
	    hasTime: hasTime,
	    hasCharacters: hasCharacters
	  }
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group\">\n        <input type=\"text\" :id=\"'date_time_' + id\" class=\"form-control\" autocomplete=\"off\">\n        <div class=\"input-group-addon\"><i :class=\"icons.date\"></i>\n        </div>\n    </div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=emag-vuejs-lib.js.map