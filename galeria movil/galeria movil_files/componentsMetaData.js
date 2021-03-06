(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash")) : factory(root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__4__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.15.0/";
/******/
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 720);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/*!***************************************************!*\
  !*** ./components/TimePicker/propertiesSchema.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var propertiesSchema = {
  TimePickerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left'
        },
        useAmPmFormat: {
          type: 'boolean',
          default: false,
          description: 'Should the display format be 12 hours (or 24)'
        },
        controller: {
          type: 'string',
          enum: ['text', 'stepper', 'dropdown'],
          default: 'text',
          description: 'The display of the time picker'
        },
        initialTime: {
          type: 'string',
          enum: ['none', 'current', 'value', 'placeholder'],
          default: 'current',
          description: 'What the time picker should display on load'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

exports.default = propertiesSchema;

/***/ }),

/***/ 101:
/*!*****************************************************!*\
  !*** ./components/RatingsInput/propertiesSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var propertiesSchema = {
  RatingsInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showTitle: {
          type: 'boolean',
          default: true
        },
        showLabels: {
          type: 'boolean',
          default: true
        },
        labelPosition: {
          type: 'string',
          enum: ['top', 'bottom', 'side'],
          default: 'top'
        },
        labelAlignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'center'
        },
        shapeSize: {
          type: 'number',
          minimum: 15,
          maximum: 100,
          default: 24
        },
        shapeSpacing: {
          type: 'number',
          minimum: 1,
          maximum: 50,
          default: 5
        },
        direction: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        },
        required: {
          type: 'boolean',
          default: false
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

exports.default = propertiesSchema;

/***/ }),

/***/ 109:
/*!*******************************************!*\
  !*** ./components/TimePicker/ds/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 121);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 122);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 123);

var _metaData2 = _interopRequireDefault(_metaData);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 100);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentType = 'wixui.TimePicker';

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: _dataSchema2.default,
  metaData: _metaData2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 110:
/*!*********************************************!*\
  !*** ./components/RatingsInput/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 125);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 101);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 126);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 127);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentType = 'wixui.RatingsInput';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 121:
/*!******************************************************!*\
  !*** ./components/TimePicker/componentDefinition.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.TimePicker': {
    skins: ['wixui.skins.TimePicker'],
    dataTypes: ['TimePickerData'],
    propertyType: 'TimePickerProperties',
    nickname: 'timePicker',
    styles: {
      tp1: 'wixui.skins.TimePicker'
    }
  }
};

/***/ }),

/***/ 122:
/*!*********************************************!*\
  !*** ./components/TimePicker/dataSchema.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataSchema = {
  TimePickerData: {
    type: 'object',
    allOf: [{
      properties: {
        placeholder: {
          type: 'string',
          description: 'The value of the placeholder if chosen',
          maxLength: 1000
        },
        step: {
          type: 'number',
          minimum: 1,
          maximum: 60,
          default: 1,
          description: 'Increment step in minutes'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

exports.default = dataSchema;

/***/ }),

/***/ 123:
/*!*******************************************!*\
  !*** ./components/TimePicker/metaData.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false
};

/***/ }),

/***/ 125:
/*!********************************************************!*\
  !*** ./components/RatingsInput/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RatingsInput': {
    skins: ['wixui.skins.Rating'],
    dataTypes: ['RatingsInput'],
    propertyType: 'RatingsInputProperties',
    nickname: 'ratingsInput',
    styles: {
      ri1: 'wixui.skins.Rating'
    }
  }
};

/***/ }),

/***/ 126:
/*!***********************************************!*\
  !*** ./components/RatingsInput/dataSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataSchema = {
  RatingsInput: {
    type: 'object',
    properties: {
      value: {
        type: ['number', 'null'],
        description: 'The rating value currently selected',
        minimum: 0,
        maximum: 5
      },
      titleText: {
        type: 'string',
        description: 'the title before a value is selected',
        maxLength: 300
      },
      labels: {
        type: 'object',
        description: 'contains the labels for the different values. maps 1-5 as keys to strings',
        default: {
          1: 'Bad', 2: 'Fine', 3: 'OK', 4: 'Good', 5: 'Great'
        }
      }
    }
  }
};

exports.default = dataSchema;

/***/ }),

/***/ 127:
/*!*********************************************!*\
  !*** ./components/RatingsInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 25,
    shapeSpacing: 5
  }
};

/***/ }),

/***/ 4:
/*!****************************************************************************************************!*\
  !*** external {"amd":"lodash","umd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 720:
/*!*******************************!*\
  !*** ./componentsMetaData.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slider$componentType;

var _ds = __webpack_require__(/*! ./components/Slider/ds */ 84);

var _ds2 = _interopRequireDefault(_ds);

var _ds3 = __webpack_require__(/*! ./components/TimePicker/ds */ 109);

var _ds4 = _interopRequireDefault(_ds3);

var _ds5 = __webpack_require__(/*! ./components/RatingsInput/ds */ 110);

var _ds6 = _interopRequireDefault(_ds5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_slider$componentType = {}, _defineProperty(_slider$componentType, _ds2.default.componentType, _ds2.default.metaData), _defineProperty(_slider$componentType, _ds4.default.componentType, _ds4.default.metaData), _defineProperty(_slider$componentType, _ds6.default.componentType, _ds6.default.metaData), _slider$componentType);

/***/ }),

/***/ 82:
/*!***********************************************!*\
  !*** ./components/Slider/propertiesSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var propertiesSchema = {
  SliderProperties: {
    type: 'object',
    allOf: [{
      properties: {
        trackSize: {
          type: 'number',
          default: 25
        },
        orientation: {
          type: 'string',
          enum: ['horizontal', 'vertical'],
          default: 'horizontal'
        },
        thumbShape: {
          type: 'string',
          enum: ['circle', 'square', 'rectangle', 'bar'],
          default: 'circle'
        },
        tickMarksShape: {
          type: 'string',
          enum: ['none', 'line', 'dot'],
          default: 'line'
        },
        tooltipVisibility: {
          type: 'string',
          enum: ['none', 'hover', 'always'],
          default: 'hover'
        },
        tooltipPosition: {
          type: 'string',
          enum: ['normal', 'across'],
          default: 'normal'
        },
        tooltipPrefix: {
          type: 'string',
          maxLength: 30
        },
        tooltipSuffix: {
          type: 'string',
          maxLength: 30
        },
        tickMarksPosition: {
          type: 'string',
          enum: ['normal', 'middle', 'across'],
          default: 'normal'
        },
        dir: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

exports.default = propertiesSchema;

/***/ }),

/***/ 84:
/*!***************************************!*\
  !*** ./components/Slider/ds/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 96);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 82);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 97);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _hooks = __webpack_require__(/*! ../hooks */ 98);

var _hooks2 = _interopRequireDefault(_hooks);

var _metaData = __webpack_require__(/*! ../metaData */ 99);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentType = 'wixui.Slider';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  hooks: _hooks2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 96:
/*!**************************************************!*\
  !*** ./components/Slider/componentDefinition.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Slider': {
    skins: ['wixui.skins.Slider'],
    dataTypes: ['Slider'],
    propertyType: 'SliderProperties',
    nickname: 'slider',
    styles: {
      slider1: 'wixui.skins.Slider'
    }
  }
};

/***/ }),

/***/ 97:
/*!*****************************************!*\
  !*** ./components/Slider/dataSchema.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataSchema = {
  Slider: {
    type: 'object',
    properties: {
      min: {
        type: 'number',
        default: 0,
        description: 'Minimum value'
      },
      max: {
        type: 'number',
        default: 100,
        description: 'Maximum value'
      },
      value: {
        type: 'number',
        default: 50,
        description: 'Current value'
      },
      step: {
        type: 'number',
        default: 0,
        description: 'Step value'
      },
      stepType: {
        type: 'string',
        default: 'value',
        enum: ['value', 'count'],
        description: 'When set to \'value\', step represents the value of each step. When set to \'count\', step represents the total steps count'
      },
      disabled: {
        type: 'boolean',
        default: false,
        description: 'Determines whether the slider is disabled or not'
      },
      readOnly: {
        type: 'boolean',
        default: false,
        description: 'Determines whether the slider is read-only or not'
      }
    }
  }
};

exports.default = dataSchema;

/***/ }),

/***/ 98:
/*!************************************!*\
  !*** ./components/Slider/hooks.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash */ 4);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateOrientationLayout(prevLayout) {
  return _lodash2.default.assign({}, prevLayout, {
    width: prevLayout.height,
    height: prevLayout.width
  });
}

function getTicksSize(tickShape, tickPosition) {
  if (tickPosition === 'middle') {
    return 0;
  }

  switch (tickShape) {
    default:
    case 'line':
      return 22;
    case 'dot':
      return 15;
    case 'none':
      return 0;
  }
}

function shouldShowTicks(data, props) {
  return data.step > 0 && props.tickMarksShape !== 'none';
}

function updateTicksLayout(_ref) {
  var prevLayout = _ref.prevLayout,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      prevData = _ref.prevData,
      nextData = _ref.nextData;

  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var showTicks = shouldShowTicks(nextData, nextProps);
  var lastSize = lastShowTicks ? getTicksSize(prevProps.tickMarksShape, prevProps.tickMarksPosition) : 0;
  var size = showTicks ? getTicksSize(nextProps.tickMarksShape, nextProps.tickMarksPosition) : 0;
  var sizeDiff = size - lastSize;
  var dim = nextProps.orientation === 'horizontal' ? 'height' : 'width';

  return _lodash2.default.assign({}, prevLayout, _defineProperty({}, dim, prevLayout[dim] + sizeDiff));
}

function didOrientationChange(prevProps, nextProps) {
  return nextProps.orientation && prevProps.orientation && nextProps.orientation !== prevProps.orientation;
}

function didTicksChange(prevProps, nextProps, prevData, nextData) {
  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var nextShowTicks = shouldShowTicks(nextData, nextProps);
  var lastTickMarksShape = prevProps.tickMarksShape;
  var nextTickMarksShape = nextProps.tickMarksShape;
  var lastTickMarksPosition = prevProps.tickMarksPosition;
  var nextTickMarksPosition = nextProps.tickMarksPosition;

  return lastShowTicks !== nextShowTicks || lastTickMarksShape !== nextTickMarksShape || lastTickMarksPosition !== nextTickMarksPosition;
}

var beforeUpdate = function beforeUpdate(_ref2) {
  var compDriver = _ref2.compDriver,
      prevProps = _ref2.prevProps,
      nextProps = _ref2.nextProps,
      prevData = _ref2.prevData,
      nextData = _ref2.nextData;

  var prevLayout = compDriver.layout.get();
  var newLayout = void 0;

  if (didOrientationChange(prevProps, nextProps)) {
    newLayout = updateOrientationLayout(prevLayout);
  } else if (didTicksChange(prevProps, nextProps, prevData, nextData)) {
    newLayout = updateTicksLayout({ prevLayout: prevLayout, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: nextData });
  }

  if (newLayout) {
    compDriver.layout.update(newLayout);
  }
};

var beforeUpdateProperties = function beforeUpdateProperties(compDriver, nextProps) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: prevData });
};

var beforeUpdateData = function beforeUpdateData(compDriver, nextData) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: prevProps, prevData: prevData, nextData: nextData });
};

var getSize = function getSize(currentLayout, nextLayout) {
  return {
    width: nextLayout.width || currentLayout.width,
    height: nextLayout.height || currentLayout.height
  };
};

var beforeUpdateLayout = function beforeUpdateLayout(compDriver, nextLayout) {
  if (!nextLayout.width && !nextLayout.height) {
    return;
  }

  var currentLayout = compDriver.layout.get();
  var compProperties = compDriver.properties.get();

  var _getSize = getSize(currentLayout, nextLayout),
      width = _getSize.width,
      height = _getSize.height;

  var newLayout = _lodash2.default.cloneDeep(nextLayout);

  if (compProperties.orientation === 'vertical') {
    var minHeight = 4 * width;
    newLayout.height = Math.max(height, minHeight);
  } else if (compProperties.orientation === 'horizontal') {
    var minWidth = 4 * height;
    newLayout.width = Math.max(width, minWidth);
  }

  compDriver.layout.update(newLayout);
};

var hooks = {
  beforeUpdateProperties: beforeUpdateProperties,
  beforeUpdateData: beforeUpdateData,
  beforeUpdateLayout: beforeUpdateLayout
};

exports.default = hooks;

/***/ }),

/***/ 99:
/*!***************************************!*\
  !*** ./components/Slider/metaData.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false
};

/***/ })

/******/ });
});
//# sourceMappingURL=componentsMetaData.bundle.js.map