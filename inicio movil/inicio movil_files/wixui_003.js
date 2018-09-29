((typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || []).push([[24],{

/***/ 14:
/*!*********************************************!*\
  !*** ../node_modules/fbjs/lib/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ 2:
/*!**********************************************************************!*\
  !*** ../node_modules/stylable-runtime/cjs/css-runtime-stylesheet.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function create(root, namespace, locals, css, depth, id) {
    var dataNamespace = 'data-' + namespace.toLowerCase() + '-';
    function cssStates(stateMapping) {
        return stateMapping
            ? Object.keys(stateMapping).reduce(function (states, key) {
                var stateValue = stateMapping[key];
                if (stateValue === undefined ||
                    stateValue === null ||
                    stateValue === false) {
                    return states;
                }
                states[dataNamespace + key.toLowerCase()] = stateValue;
                return states;
            }, {})
            : {};
    }
    function get(localName) {
        return locals[localName];
    }
    function mapClasses(className) {
        return className
            .split(/\s+/g)
            .map(function (className) { return get(className) || className; })
            .join(' ');
    }
    locals.$root = root;
    locals.$namespace = namespace;
    locals.$depth = depth;
    locals.$id = id;
    locals.$css = css;
    locals.$get = get;
    locals.$cssStates = cssStates;
    function stylable_runtime_stylesheet(className, states, inheritedAttributes) {
        className = className ? mapClasses(className) : '';
        var base = cssStates(states);
        if (inheritedAttributes) {
            for (var k in inheritedAttributes) {
                if (k.match(/^data-/)) {
                    base[k] = inheritedAttributes[k];
                }
            }
            if (inheritedAttributes.className) {
                className += ' ' + inheritedAttributes.className;
            }
        }
        if (className) {
            base.className = className;
        }
        return base;
    }
    Object.setPrototypeOf(stylable_runtime_stylesheet, locals);
    return stylable_runtime_stylesheet;
}
exports.create = create;
function createTheme(css, depth, id) {
    return { $css: css, $depth: depth, $id: id, $theme: true };
}
exports.createTheme = createTheme;
//# sourceMappingURL=css-runtime-stylesheet.js.map

/***/ }),

/***/ 229:
/*!*****************************************!*\
  !*** ./components/Slider/Slider.st.css ***!
  \*****************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/stylable-runtime/cjs/css-runtime-stylesheet.js */ 2);
var $renderer = __webpack_require__(/*! ../node_modules/stylable-runtime/cjs/css-runtime-renderer.js */ 3).$;
exports.default = $stylesheet.create(
  "root",
  "Slider2360290017",
  {"root":"Slider2360290017--root","thumbBackground":"color_25","thumbBackgroundHover":"color_23","thumbBackgroundFocus":"color_22","thumbBackgroundDisabled":"color_21","thumbBoxShadow":"0 1px 4px rgba(0, 0, 0, .6)","trackFill":"color_22","trackFillHover":"color_23","trackFillFocus":"color_24","trackFillDisabled":"color_25","trackBoxShadow":"0 1px 4px rgba(0, 0, 0, .6)","trackBackground":"color_26","trackBackgroundHover":"color_27","trackBackgroundFocus":"color_28","trackBackgroundDisabled":"color_29","tooltipBackground":"color_30","tooltipFontSize":"14","tooltipFontFamily":"arial","tooltipFontColor":"color_1","tooltipBoxShadow":"initial","tickMarkColor":"color_4","thumbBorderColor":"color_22","thumbBorderColorHover":"color_23","thumbBorderColorFocus":"color_24","thumbBorderColorDisabled":"color_25","thumbBorderWidth":"4","thumbBorderWidthHover":"4","thumbBorderWidthFocus":"4","thumbBorderWidthDisabled":"4","thumbBorderRadius":"8px","trackBorderColor":"color_28","trackBorderColorHover":"color_29","trackBorderColorFocus":"color_30","trackBorderColorDisabled":"color_31","trackBorderWidth":"7","trackBorderWidthHover":"6","trackBorderWidthFocus":"6","trackBorderWidthDisabled":"6","tooltipBorderRadius":"2px","trackBorderRadius":"8px"},
  "",
  7,
  /*! ./components/Slider/Slider.st.css */ 229
);
exports.default.$skin = {"params":{"thumbBackground":"COLOR_ALPHA","thumbBackgroundHover":"COLOR_ALPHA","thumbBackgroundFocus":"COLOR_ALPHA","thumbBackgroundDisabled":"COLOR_ALPHA","thumbBoxShadow":"BOX_SHADOW","trackFill":"COLOR_ALPHA","trackFillHover":"COLOR_ALPHA","trackFillFocus":"COLOR_ALPHA","trackFillDisabled":"COLOR_ALPHA","trackBoxShadow":"BOX_SHADOW","trackBackground":"COLOR_ALPHA","trackBackgroundHover":"COLOR_ALPHA","trackBackgroundFocus":"COLOR_ALPHA","trackBackgroundDisabled":"COLOR_ALPHA","tooltipBackground":"COLOR_ALPHA","tooltipFontSize":"TEXT_SIZE","tooltipFontFamily":"FONT_FAMILY","tooltipFontColor":"TEXT_COLOR","tooltipBoxShadow":"BOX_SHADOW","tickMarkColor":"COLOR_ALPHA","thumbBorderColor":"COLOR_ALPHA","thumbBorderColorHover":"COLOR_ALPHA","thumbBorderColorFocus":"COLOR_ALPHA","thumbBorderColorDisabled":"COLOR_ALPHA","thumbBorderWidth":"BORDER_SIZE","thumbBorderWidthHover":"BORDER_SIZE","thumbBorderWidthFocus":"BORDER_SIZE","thumbBorderWidthDisabled":"BORDER_SIZE","thumbBorderRadius":"BORDER_RADIUS","trackBorderColor":"COLOR_ALPHA","trackBorderColorHover":"COLOR_ALPHA","trackBorderColorFocus":"COLOR_ALPHA","trackBorderColorDisabled":"COLOR_ALPHA","trackBorderWidth":"BORDER_SIZE","trackBorderWidthHover":"BORDER_SIZE","trackBorderWidthFocus":"BORDER_SIZE","trackBorderWidthDisabled":"BORDER_SIZE","tooltipBorderRadius":"BORDER_RADIUS","trackBorderRadius":"BORDER_RADIUS"},"paramsDefaults":{"thumbBackground":"color_25","thumbBackgroundHover":"color_23","thumbBackgroundFocus":"color_22","thumbBackgroundDisabled":"color_21","thumbBoxShadow":"0 1px 4px rgba(0, 0, 0, .6)","trackFill":"color_22","trackFillHover":"color_23","trackFillFocus":"color_24","trackFillDisabled":"color_25","trackBoxShadow":"0 1px 4px rgba(0, 0, 0, .6)","trackBackground":"color_26","trackBackgroundHover":"color_27","trackBackgroundFocus":"color_28","trackBackgroundDisabled":"color_29","tooltipBackground":"color_30","tooltipFontSize":"14","tooltipFontFamily":"arial","tooltipFontColor":"color_1","tooltipBoxShadow":"initial","tickMarkColor":"color_4","thumbBorderColor":"color_22","thumbBorderColorHover":"color_23","thumbBorderColorFocus":"color_24","thumbBorderColorDisabled":"color_25","thumbBorderWidth":"4","thumbBorderWidthHover":"4","thumbBorderWidthFocus":"4","thumbBorderWidthDisabled":"4","thumbBorderRadius":"8px","trackBorderColor":"color_28","trackBorderColorHover":"color_29","trackBorderColorFocus":"color_30","trackBorderColorDisabled":"color_31","trackBorderWidth":"7","trackBorderWidthHover":"6","trackBorderWidthFocus":"6","trackBorderWidthDisabled":"6","tooltipBorderRadius":"2px","trackBorderRadius":"8px"}};
exports.default.$skin.$render = function render_css($id, $params, $functions) {
  return "\n" + $id + " .DropdownOption3163115132--root{cursor: pointer}\n" + $id + " .DropdownOption3163115132--root[data-dropdownoption3163115132-hovered]{background-color: lightgrey}\n" + $id + " .DropdownOption3163115132--root[data-dropdownoption3163115132-disabled]{cursor: default;background-color: white}\n" + $id + " .DropdownOption3163115132--root[data-dropdownoption3163115132-selected]{background-color: grey}\n" + $id + " .DropdownOption3163115132--root[data-dropdownoption3163115132-selected][data-dropdownoption3163115132-hovered]{background-color: dimgrey}\n" + $id + " .DropdownOption3163115132--root:not([data-dropdownoption3163115132-selectable]){cursor: default}\n" + $id + " .DropdownOption3163115132--root .DropdownOption3163115132--highlight{background-color: transparent;font-weight: bold}\n" + $id + " .Popover2783324381--root{}\n" + $id + " .Popover2783324381--root.Popover2783324381--manager{position: relative;display: inline-block}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation-enter{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation-enter.Popover2783324381--popoverAnimation-enter-active{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation-exit{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation-exit.Popover2783324381--popoverAnimation-exit-active{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverContent{background-color: white;border-width: 1px;border-style: solid;border-color: black;border-radius: initial;padding: initial}\n" + $id + " .Popover2783324381--root .Popover2783324381--arrow{width: 0;height: 0;border-style: solid;position: absolute;margin: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover{z-index: 1000}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"right\"].Popover2783324381--withArrow{padding-left: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"right\"].Popover2783324381--withArrow .Popover2783324381--arrow{border-width: 5px 5px 5px 0;left: calc(-1 * 5px);margin-left: 5px;margin-right: 0;border-color: transparent black transparent transparent}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"left\"].Popover2783324381--withArrow{padding-right: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"left\"].Popover2783324381--withArrow .Popover2783324381--arrow{border-width: 5px 0 5px 5px;right: calc(-1 * 5px);margin-left: 0;margin-right: 5px;border-color: transparent transparent transparent black}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"bottom\"].Popover2783324381--withArrow{padding-top: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"bottom\"].Popover2783324381--withArrow .Popover2783324381--arrow{border-width: 0 5px 5px 5px;top: calc(-1 * 5px);margin-top: 5px;margin-bottom: 0;border-color: transparent transparent black transparent}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"top\"].Popover2783324381--withArrow{padding-bottom: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"top\"].Popover2783324381--withArrow .Popover2783324381--arrow{border-width: 5px 5px 0 5px;bottom: calc(-1 * 5px);margin-top: 0;margin-bottom: 5px;border-color: black transparent transparent transparent}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverElement{}\n" + $id + " .Tickers500429984--root{display: inline-flex;flex-direction: column;vertical-align: top}\n" + $id + " .Tickers500429984--root .Tickers500429984--ticker{border: none;outline: none;cursor: pointer;background-color: transparent;padding: 0;margin: 0;flex-grow: 1;display: flex;justify-content: center}\n" + $id + ".Slider2876383323--root{position: relative;box-sizing: border-box;outline: none}\n" + $id + ".Slider2876383323--root *{box-sizing: border-box}\n" + $id + ".Slider2876383323--root .Slider2876383323--tooltip{position: absolute;background: #363636;color: #fff;padding: 4px 12px;text-align: center;font-size: 14px;line-height: 1.5;border-radius: 3px;white-space: nowrap}\n" + $id + ".Slider2876383323--root .Slider2876383323--tooltip::after, " + $id + ".Slider2876383323--root .Slider2876383323--tooltip::before{content: ' ';position: absolute;margin-left: -8px;border-width: 8px;border-style: solid}\n" + $id + ".Slider2876383323--root .Slider2876383323--track{z-index: 0;width: 100%;height: 25%;position: relative;cursor: pointer;background: #dadada;opacity: 1;border-radius: 8px;overflow: hidden;border: 2px solid transparent;min-height: 1px}\n" + $id + ".Slider2876383323--root .Slider2876383323--inner{display: flex;position: relative;align-items: center;justify-content: center;width: 100%;height: 100%}\n" + $id + ".Slider2876383323--root .Slider2876383323--trackFill{position: absolute;background: linear-gradient(to right,#4992e3,#70bff3);height: 100%;width: 100%}\n" + $id + ".Slider2876383323--root[data-slider2876383323-dir=\"rtl\"] .Slider2876383323--trackFill{right: 0}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--track{width: 25%;height: 100%}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--trackFill{background: linear-gradient(to top,#4992e3,#70bff3)}\n" + $id + ".Slider2876383323--root .Slider2876383323--thumb{z-index: 2;position: absolute;cursor: pointer}\n" + $id + ".Slider2876383323--root .Slider2876383323--thumbShape{width: 100%;height: 100%;background: green;border: 2px solid blue}\n" + $id + ".Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"circle\"]{border-radius: 50%}\n" + $id + ".Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"square\"]{border-radius: 7px}\n" + $id + ".Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"rectangle\"]{border-radius: 37px}\n" + $id + ".Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"bar\"]{border-radius: 7px}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]{left: 50%;top: calc(-7px - 10px);transform: translate(-50%,-100%)}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]{left: 50%;bottom: calc(-7px - 10px);transform: translate(-50%,100%)}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]{left: 50%;left: calc(-7px - 10px);transform: translate(-100%,-50%)}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]{right: calc(-7px - 10px);transform: translate(100%,-50%)}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::after, " + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::before{border-color: #363636 transparent transparent transparent;top: 100%;left: 50%}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::after, " + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::before{border-color: transparent transparent #363636 transparent;bottom: 100%;left: 50%}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip{top: 50%}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip::after, " + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip::before{top: 50%;transform: translateY(-50%)}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::after, " + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::before{left: 100%;margin-left: 0;border-color: transparent transparent transparent #363636}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::after, " + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::before{right: 100%;border-color: transparent #363636 transparent transparent}\n" + $id + ".Slider2876383323--root .Slider2876383323--tick{display: inline-block;position: absolute;background: #000;cursor: pointer}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksshape=\"line\"] .Slider2876383323--tick{width: 1px;height: 10px}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksshape=\"line\"] .Slider2876383323--tick{height: 1px;width: 10px}\n" + $id + ".Slider2876383323--root[data-slider2876383323-tickmarksshape=\"dot\"] .Slider2876383323--tick{width: 3px;height: 3px;border-radius: 50%}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksshape=\"dot\"] .Slider2876383323--tick{transform: translateX(calc(- 3px,2))}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksshape=\"dot\"] .Slider2876383323--tick{transform: translateY(calc(3px,2))}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksposition=\"normal\"] .Slider2876383323--tick{bottom: 0}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksposition=\"normal\"] .Slider2876383323--tick{right: 0}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksposition=\"middle\"] .Slider2876383323--tick{top: 50%;transform: translateY(-50%)}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksposition=\"middle\"] .Slider2876383323--tick{left: 50%;transform: translateX(-50%)}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksposition=\"across\"] .Slider2876383323--tick{top: 0}\n" + $id + ".Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksposition=\"across\"] .Slider2876383323--tick{left: 0}\n" + $id + " .Input3489380451--root{position: relative}\n" + $id + " .Input3489380451--root .Input3489380451--nativeInput{}\n" + $id + " .RadioButton14693577--root{display: inline-block}\n" + $id + " .RadioButton14693577--root .RadioButton14693577--icon{cursor: pointer;height: auto}\n" + $id + " .RadioButton14693577--root .RadioButton14693577--label{}\n" + $id + " .RadioButton14693577--root[data-radiobutton14693577-checked] .RadioButton14693577--icon, " + $id + " .RadioButton14693577--root:hover .RadioButton14693577--icon{}\n" + $id + " .RadioButton14693577--root[data-radiobutton14693577-disabled]{filter: grayscale(75%);opacity: 0.7}\n" + $id + " .RadioButton14693577--root .RadioButton14693577--hiddenRadio{position: absolute;overflow: hidden;height: 1px;width: 1px;margin: -1px;padding: 0;border: 0;opacity: 0}\n" + $id + " .Divider3251605325--root{}\n" + $id + " .Divider3251605325--root[data-divider3251605325-customdivider]{reset: all}\n" + $id + " .Divider3251605325--root:not([data-divider3251605325-customdivider]){height: 1px;background-color: black;opacity: initial;margin-top: initial;margin-bottom: initial}\n" + $id + " .Divider3251605325--root[data-divider3251605325-vertical]{height: auto;width: 1px}\n" + $id + " .Pagination918583540--root .Pagination918583540--button-common-mixin{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination918583540--root{display: inline-flex;user-select: none}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButton{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButton:not(.Pagination918583540--disabled){cursor: pointer}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButtonFirst{order: 1}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButtonPrevious{order: 2}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButtonNext{order: 4}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButtonLast{order: 5}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageStrip{order: 3;overflow-x: hidden}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageStripInner{display: flex}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageStripTemplate{height: 0;overflow: hidden}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageButton{display: inline-flex;flex-shrink: 0;cursor: pointer}\n" + $id + " .Pagination918583540--root .Pagination918583540--currentPage{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination918583540--root .Pagination918583540--gap{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageForm{display: flex;order: 3}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageInput{}\n" + $id + " .Pagination918583540--root .Pagination918583540--totalPages{}\n" + $id + " .Pagination918583540--root .Pagination918583540--slash{}\n" + $id + " .Video3051166948--root{position: relative}\n" + $id + " .Video3051166948--root .Video3051166948--playerContainer{position: relative}\n" + $id + " .Video3051166948--root .Video3051166948--cover{position: absolute;top: 0;left: 0;height: 100%;width: 100%;background: #000 50% 50% no-repeat;background-size: cover;cursor: pointer}\n" + $id + " .Video3051166948--root .Video3051166948--overlay{display: flex;height: 100%;justify-content: center;flex-direction: column;align-items: center;background-color: rgba(0,0,0,0.35)}\n" + $id + " .Video3051166948--root .Video3051166948--title{margin: 0 15px 15px;text-align: center}\n" + $id + " .DropdownContent3583402205--root{outline: 0}\n" + $id + " .DropdownContent3583402205--root .DropdownContent3583402205--optionsContainer{outline: 0;overflow: auto;max-height: 260px;position: relative}\n" + $id + " .DropdownContent3583402205--root .DropdownContent3583402205--dropdownOption.DropdownOption3163115132--root{}\n" + $id + " .TimePicker3498728913--root.Input3489380451--root{}\n" + $id + " .TimePicker3498728913--root .TimePicker3498728913--tickers.Tickers500429984--root{}\n" + $id + " .Dropdown3042512354--root.Popover2783324381--root{}\n" + $id + " .Dropdown3042512354--root.Popover2783324381--root .Popover2783324381--popover{min-width: 100%}\n" + $id + " .Dropdown3042512354--root .Dropdown3042512354--dropdownContent.DropdownContent3583402205--root{}\n" + $id + " .InputWithOptions4220938856--root.Dropdown3042512354--root{}\n" + $id + " .InputWithOptions4220938856--root .InputWithOptions4220938856--inputComponent.Input3489380451--root{}\n" + $id + " .AddressInput3172332421--root.InputWithOptions4220938856--root{}\n" + $id + " .AddressInput3172332421--root .AddressInput3172332421--option{display: flex}\n" + $id + " .AddressInput3172332421--root .AddressInput3172332421--iconWrapper{display: flex;align-items: center;padding: 0 6px}\n" + $id + " .AddressInput3172332421--root .AddressInput3172332421--icon{}\n" + $id + " .AddressInput3172332421--root .AddressInput3172332421--optionContent{flex: 1}\n" + $id + ".Slider2360290017--root.Slider2876383323--root{z-index: 0}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape{background: " + $params["thumbBackground"] + ";border-color: " + $params["thumbBorderColor"] + ";border-width: " + $params["thumbBorderWidth"] + ";box-shadow: " + $params["thumbBoxShadow"] + ";border-style: solid}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--tick{background: " + $params["tickMarkColor"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--tooltip{font-family: " + $params["tooltipFontFamily"] + ";font-size: " + $params["tooltipFontSize"] + ";color: " + $params["tooltipFontColor"] + ";background: " + $params["tooltipBackground"] + ";border-width: 0;border-radius: " + $params["tooltipBorderRadius"] + ";box-shadow: " + $params["tooltipBoxShadow"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--tooltip::before{border-width: 0}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::after{border-color: " + $params["tooltipBackground"] + " transparent transparent transparent}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::after{border-color: transparent transparent " + $params["tooltipBackground"] + " transparent}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::after{border-color: transparent transparent transparent " + $params["tooltipBackground"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::after{border-color: transparent " + $params["tooltipBackground"] + " transparent transparent}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-hover] .Slider2876383323--thumbShape, " + $id + ".Slider2360290017--root.Slider2876383323--root:hover .Slider2876383323--thumbShape{background: " + $params["thumbBackgroundHover"] + ";border-color: " + $params["thumbBorderColorHover"] + ";border-width: " + $params["thumbBorderWidthHover"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-focus] .Slider2876383323--thumbShape, " + $id + ".Slider2360290017--root.Slider2876383323--root:focus .Slider2876383323--thumbShape{background: " + $params["thumbBackgroundFocus"] + ";border-color: " + $params["thumbBorderColorFocus"] + ";border-width: " + $params["thumbBorderWidthFocus"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-disabled] .Slider2876383323--thumbShape, " + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-disabled] .Slider2876383323--thumbShape{background: " + $params["thumbBackgroundDisabled"] + ";border-color: " + $params["thumbBorderColorDisabled"] + ";border-width: " + $params["thumbBorderWidthDisabled"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--track{background: " + $params["trackBackground"] + ";border-radius: " + $params["trackBorderRadius"] + ";border-color: " + $params["trackBorderColor"] + ";border-width: " + $params["trackBorderWidth"] + ";box-shadow: " + $params["trackBoxShadow"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--trackFill{background: " + $params["trackFill"] + ";border-radius: " + $params["trackBorderRadius"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-dir=\"ltr\"] .Slider2876383323--trackFill{border-top-left-radius: 0;border-bottom-left-radius: 0}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-dir=\"rtl\"] .Slider2876383323--trackFill{border-top-right-radius: 0;border-bottom-right-radius: 0}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--trackFill{border-bottom-right-radius: 0;border-bottom-left-radius: 0}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-hover] .Slider2876383323--trackFill, " + $id + ".Slider2360290017--root.Slider2876383323--root:hover .Slider2876383323--trackFill{background: " + $params["trackFillHover"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-focus] .Slider2876383323--trackFill, " + $id + ".Slider2360290017--root.Slider2876383323--root:focus .Slider2876383323--trackFill{background: " + $params["trackFillFocus"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-disabled] .Slider2876383323--trackFill, " + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-disabled] .Slider2876383323--trackFill{background: " + $params["trackFillDisabled"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-hover] .Slider2876383323--track, " + $id + ".Slider2360290017--root.Slider2876383323--root:hover .Slider2876383323--track{background: " + $params["trackBackgroundHover"] + ";border-color: " + $params["trackBorderColorHover"] + ";border-width: " + $params["trackBorderWidthHover"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-focus] .Slider2876383323--track, " + $id + ".Slider2360290017--root.Slider2876383323--root:focus .Slider2876383323--track{background: " + $params["trackBackgroundFocus"] + ";border-color: " + $params["trackBorderColorFocus"] + ";border-width: " + $params["trackBorderWidthFocus"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2360290017-preview-disabled] .Slider2876383323--track, " + $id + ".Slider2360290017--root.Slider2876383323--root[data-slider2876383323-disabled] .Slider2876383323--track{background: " + $params["trackBackgroundDisabled"] + ";border-color: " + $params["trackBorderColorDisabled"] + ";border-width: " + $params["trackBorderWidthDisabled"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"circle\"]{border-radius: 50%}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"circle\"][data-slider2876383323-shapetype=\"circle\"]{border-radius: " + $params["thumbBorderRadius"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"square\"]{border-radius: 17px}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"square\"][data-slider2876383323-shapetype=\"square\"]{border-radius: " + $params["thumbBorderRadius"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"rectangle\"]{border-radius: 37px}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"rectangle\"][data-slider2876383323-shapetype=\"rectangle\"]{border-radius: " + $params["thumbBorderRadius"] + "}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"bar\"]{border-radius: 5px}\n" + $id + ".Slider2360290017--root.Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"bar\"][data-slider2876383323-shapetype=\"bar\"]{border-radius: " + $params["thumbBorderRadius"] + "}\n";
};

/***/ }),

/***/ 242:
/*!************************************!*\
  !*** ./components/Slider/index.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Slider = __webpack_require__(/*! ./Slider */ 365);

var _SliderSt = __webpack_require__(/*! ./Slider.st.css */ 229);

var _SliderSt2 = _interopRequireDefault(_SliderSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentType: 'wixui.Slider',
  component: _Slider.Slider,
  santaComponent: _Slider.santaSlider,
  skin: _SliderSt2.default.$skin
};

/***/ }),

/***/ 25:
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 3:
/*!********************************************************************!*\
  !*** ../node_modules/stylable-runtime/cjs/css-runtime-renderer.js ***!
  \********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cached_node_renderer_1 = __webpack_require__(/*! ./cached-node-renderer */ 38);
var keyed_list_renderer_1 = __webpack_require__(/*! ./keyed-list-renderer */ 39);
var RuntimeRenderer = /** @class */ (function () {
    function RuntimeRenderer() {
        var _this = this;
        this.styles = [];
        this.stylesMap = {};
        this.renderer = null;
        this.window = null;
        this.id = null;
        this.update = function () {
            if (_this.renderer) {
                _this.renderer.render(_this.window.document.head, _this.styles);
            }
        };
    }
    RuntimeRenderer.prototype.init = function (_window) {
        if (this.window || !_window) {
            return;
        }
        _window.__stylable_renderer_global_counter =
            _window.__stylable_renderer_global_counter || 0;
        this.id = _window.__stylable_renderer_global_counter++;
        this.window = _window;
        this.renderer = keyed_list_renderer_1.createDOMListRenderer(new cached_node_renderer_1.CacheStyleNodeRenderer({
            attrKey: 'st-id' + (this.id ? '-' + this.id : ''),
            createElement: _window.document.createElement.bind(_window.document)
        }));
        this.update();
    };
    RuntimeRenderer.prototype.onRegister = function () {
        if (this.window) {
            this.window.requestAnimationFrame(this.update);
        }
    };
    RuntimeRenderer.prototype.register = function (stylesheet) {
        var registered = this.stylesMap[stylesheet.$id];
        if (registered) {
            this.removeStyle(registered);
        }
        var i = this.findDepthIndex(stylesheet.$depth);
        this.styles.splice(i + 1, 0, stylesheet);
        this.stylesMap[stylesheet.$id] = stylesheet;
        this.onRegister();
    };
    RuntimeRenderer.prototype.removeStyle = function (stylesheet) {
        var i = this.styles.indexOf(stylesheet);
        if (~i) {
            this.styles.splice(i, 1);
        }
        delete this.stylesMap[stylesheet.$id];
    };
    RuntimeRenderer.prototype.findDepthIndex = function (depth) {
        var index = this.styles.length;
        while (index--) {
            var stylesheet = this.styles[index];
            if (stylesheet.$depth <= depth) {
                return index;
            }
        }
        return index;
    };
    RuntimeRenderer.prototype.getStyles = function (ids, sortIndexes) {
        var _this = this;
        return this.sortStyles(ids.map(function (id) { return _this.stylesMap[id]; }), sortIndexes);
    };
    RuntimeRenderer.prototype.sortStyles = function (styles, sortIndexes) {
        var _this = this;
        if (sortIndexes === void 0) { sortIndexes = false; }
        var s = styles.slice();
        if (sortIndexes) {
            s.sort(function (a, b) {
                return _this.styles.indexOf(a) - _this.styles.indexOf(b);
            });
        }
        s.sort(function (a, b) {
            return a.$depth - b.$depth;
        });
        return s;
    };
    return RuntimeRenderer;
}());
exports.RuntimeRenderer = RuntimeRenderer;
// The $ export is a convention with the webpack plugin if changed both needs a change
exports.$ = new RuntimeRenderer();
//# sourceMappingURL=css-runtime-renderer.js.map

/***/ }),

/***/ 365:
/*!*************************************!*\
  !*** ./components/Slider/Slider.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.santaSlider = exports.Slider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(/*! create-react-class */ 94);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _lodash = __webpack_require__(/*! lodash */ 4);

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _Slider = __webpack_require__(/*! wix-ui-core/dist/src/components/Slider/Slider */ 366);

var _SliderSt = __webpack_require__(/*! ./Slider.st.css */ 229);

var _SliderSt2 = _interopRequireDefault(_SliderSt);

var _santaComponents = __webpack_require__(/*! santa-components */ 70);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = exports.Slider = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: 'focus',
    value: function focus() {
      this.node.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.node.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          previewState = _props.previewState,
          componentViewMode = _props.componentViewMode,
          isMobileView = _props.isMobileView,
          tooltipPosition = _props.tooltipPosition,
          orientation = _props.orientation,
          isDisabled = _props.isDisabled,
          restOfProps = _objectWithoutProperties(_props, ['previewState', 'componentViewMode', 'isMobileView', 'tooltipPosition', 'orientation', 'isDisabled']);

      var styles = (0, _SliderSt2.default)('root', _defineProperty({}, 'preview-' + previewState, true), restOfProps);
      var shouldAlwaysShowTooltip = componentViewMode === 'editor' && this.props.tooltipVisibility !== 'none';
      var overriddenProps = {
        tooltipVisibility: shouldAlwaysShowTooltip ? 'always' : this.props.tooltipVisibility,
        tooltipPosition: isMobileView ? 'normal' : tooltipPosition,
        orientation: isMobileView ? 'horizontal' : orientation
      };
      var overriddenStyle = {
        width: this.props.style.width,
        height: this.props.style.height
      };

      return _react2.default.createElement(_Slider.Slider, _extends({
        ref: function ref(node) {
          return _this2.node = node;
        }
      }, restOfProps, styles, overriddenProps, {
        disabled: isDisabled,
        style: overriddenStyle
      }));
    }
  }]);

  return Slider;
}(_react2.default.Component);

Slider.displayName = 'Slider';
Slider.propTypes = {
  previewState: _propTypes.string,
  tooltipVisibility: _propTypes.string,
  componentViewMode: _propTypes.string,
  tooltipPosition: _propTypes.string,
  orientation: _propTypes.string,
  isMobileView: _propTypes.bool,
  isDisabled: _propTypes.bool,
  style: _propTypes.object
};
Slider.defaultProps = {
  style: { width: 0, height: 0 }
};

var skinBasedComp = _santaComponents.mixins.skinBasedComp,
    runTimeCompData = _santaComponents.mixins.runTimeCompData,
    inputFocusMixin = _santaComponents.mixins.inputFocusMixin;


var getComponentSkins = function getComponentSkins() {
  return {
    'wixui.skins.Slider': _SliderSt2.default.$skin
  };
};

/**
 * @class components.slider
 * @extends {core.skinBasedComp}
 */

var santaSlider = exports.santaSlider = (0, _createReactClass2.default)({
  displayName: 'Slider',

  mixins: [skinBasedComp(getComponentSkins()), runTimeCompData, inputFocusMixin],

  propTypes: {
    structure: _santaComponents.santaTypesDefinitions.Component.structure.isRequired,
    compProp: _santaComponents.santaTypesDefinitions.Component.compProp.isRequired,
    compData: _santaComponents.santaTypesDefinitions.Component.compData.isRequired,
    componentViewMode: _santaComponents.santaTypesDefinitions.RenderFlags.componentViewMode,
    componentPreviewState: _santaComponents.santaTypesDefinitions.RenderFlags.componentPreviewState,
    styleId: _santaComponents.santaTypesDefinitions.Component.styleId,
    style: _santaComponents.santaTypesDefinitions.Component.style,
    isMobileView: _santaComponents.santaTypesDefinitions.isMobileView
  },

  statics: {
    compSpecificIsDomOnlyOverride: function compSpecificIsDomOnlyOverride() {
      return false;
    },
    behaviors: _lodash2.default.clone(inputFocusMixin.INPUT_FOCUS_BEHAVIORS),
    getComponentSkins: getComponentSkins
  },

  getInitialState: function getInitialState() {
    return {
      value: this.props.compData.value
    };
  },
  UNSAFE_componentWillReceiveProps: function UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line
    this.setState({ value: nextProps.compData.value });
  },
  handleChange: function handleChange(value) {
    var nextState = { value: value };
    this.setState(nextState);
    this.updateData(nextState);
    this.handleAction('change', nextState);
  },
  focus: function focus() {
    this.sliderRef.focus();
  },
  blur: function blur() {
    this.sliderRef.blur();
  },
  handleFocus: function handleFocus() {
    this.handleAction('focus');
  },
  handleBlur: function handleBlur() {
    this.handleAction('blur');
  },
  getSkinProperties: function getSkinProperties() {
    var _this3 = this;

    var sliderProps = _lodash2.default.assign({}, this.props.compData, this.props.compProp, {
      styleId: this.props.styleId,
      className: this.props.styleId,
      style: this.props.style,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      value: this.state.value,
      width: _lodash2.default.get(this.props.structure, 'layout.width', 0),
      height: _lodash2.default.get(this.props.structure, 'layout.height', 0),
      previewState: this.props.componentPreviewState,
      componentViewMode: this.props.componentViewMode,
      isMobileView: this.props.isMobileView,
      ref: function ref(sliderRef) {
        _this3.sliderRef = sliderRef;
      }
    });

    return {
      '': {
        children: [_santaComponents.utils.createReactElement(Slider, sliderProps)]
      }
    };
  }
});

/***/ }),

/***/ 366:
/*!************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Slider/Slider.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var prop_types_1 = __webpack_require__(/*! prop-types */ 1);
var Ticks_1 = __webpack_require__(/*! ./Ticks */ 367);
var Thumb_1 = __webpack_require__(/*! ./Thumb */ 368);
var Slider_st_css_1 = __webpack_require__(/*! ./Slider.st.css */ 42);
var omit = __webpack_require__(/*! lodash/omit */ 81);
var noop = __webpack_require__(/*! lodash/noop */ 369);
var CONTINUOUS_STEP = 0.01;
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dragging: false,
            mouseDown: false,
            thumbHover: false,
            inKeyPress: false,
        };
        _this.setTrackNode = function (track) {
            _this.track = track;
        };
        _this.handleBlur = function () {
            _this.setState({ inKeyPress: false });
            _this.props.onBlur();
        };
        _this.handleMouseDown = function () {
            _this.setState({ mouseDown: true });
        };
        _this.handleMouseUp = function () {
            _this.setState({ mouseDown: false, dragging: false });
        };
        _this.handleKeyDown = function (ev) {
            var _a = _this.props, min = _a.min, max = _a.max, value = _a.value, disabled = _a.disabled, readOnly = _a.readOnly, dir = _a.dir;
            var ltr = dir === 'ltr';
            if (disabled || readOnly) {
                return;
            }
            var step = _this.getStepValue();
            var nextValue;
            switch (ev.key) {
                case 'ArrowDown':
                    nextValue = value - step;
                    break;
                case 'ArrowLeft':
                    if (ltr) {
                        nextValue = value - step;
                    }
                    else {
                        nextValue = value + step;
                    }
                    break;
                case 'ArrowUp':
                    nextValue = value + step;
                    break;
                case 'ArrowRight':
                    if (ltr) {
                        nextValue = value + step;
                    }
                    else {
                        nextValue = value - step;
                    }
                    break;
                case 'PageDown':
                    nextValue = value - 0.1 * (max - min);
                    break;
                case 'PageUp':
                    nextValue = value + 0.1 * (max - min);
                    break;
                case 'Home':
                    nextValue = min;
                    break;
                case 'End':
                    nextValue = max;
                    break;
                default:
                    nextValue = undefined;
            }
            if (typeof nextValue !== 'undefined') {
                _this.handleChange(nextValue);
                _this.setState({
                    inKeyPress: true
                });
                ev.preventDefault();
            }
        };
        _this.handleMouseMove = function (ev) {
            if (_this.state.mouseDown && !_this.state.dragging) {
                _this.setState({ dragging: true });
            }
            if (_this.state.dragging) {
                _this.moveThumbByMouse(ev);
            }
        };
        _this.handleThumbEnter = function () {
            _this.setState({ thumbHover: true });
        };
        _this.handleThumbLeave = function () {
            _this.setState({ thumbHover: false });
        };
        _this.moveThumbByMouse = function (ev) {
            if (ev.touches) {
                ev.preventDefault();
                ev = ev.touches[0];
            }
            var _a = _this.props, min = _a.min, max = _a.max, disabled = _a.disabled, readOnly = _a.readOnly, dir = _a.dir;
            var rtl = _this.isRtl();
            if (disabled || readOnly) {
                return;
            }
            var isVertical = _this.isVertical();
            var step = _this.getStepValue();
            var thumbSize = _this.getThumbSizeMainAxis();
            var totalSteps = Math.ceil((max - min) / step);
            var rect = _this.track.getBoundingClientRect();
            var value, pxStep, sliderPos;
            if (isVertical) {
                sliderPos = rect.bottom - (ev.clientY + thumbSize / 2);
                pxStep = (rect.height - thumbSize) / totalSteps;
            }
            else {
                if (rtl) {
                    sliderPos = (rect.left + rect.width - thumbSize / 2) - ev.clientX;
                }
                else {
                    sliderPos = ev.clientX - (rect.left + thumbSize / 2);
                }
                pxStep = (rect.width - thumbSize) / totalSteps;
            }
            value = min + step * Math.round(sliderPos / pxStep);
            _this.handleChange(value);
        };
        return _this;
    }
    Slider.prototype.componentDidMount = function () {
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('touchend', this.handleMouseUp);
        document.addEventListener('touchmove', this.handleMouseMove, { passive: false });
    };
    Slider.prototype.componentWillUnmount = function () {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('touchend', this.handleMouseUp);
        document.removeEventListener('touchmove', this.handleMouseMove);
    };
    Slider.prototype.focus = function () {
        this.root.focus();
        this.props.onFocus();
    };
    Slider.prototype.blur = function () {
        this.root.blur();
        this.props.onBlur();
    };
    Slider.prototype.getStartPos = function () {
        return this.props.dir === 'rtl' ? 'right' : 'left';
    };
    Slider.prototype.calcDiscreteStepValue = function (min, max, step, stepType) {
        if (stepType === 'count') {
            return (max - min) / step;
        }
        return step;
    };
    Slider.prototype.getStepValue = function () {
        var _a = this.props, min = _a.min, max = _a.max, step = _a.step, stepType = _a.stepType;
        if (step > 0) {
            return this.calcDiscreteStepValue(min, max, step, stepType);
        }
        return CONTINUOUS_STEP;
    };
    Slider.prototype.isShallowEqual = function (v, o) {
        for (var key in v) {
            if (!(key in o) || v[key] !== o[key]) {
                return false;
            }
        }
        for (var key in o) {
            if (!(key in v) || v[key] !== o[key]) {
                return false;
            }
        }
        return true;
    };
    Slider.prototype.getSliderSize = function () {
        var _a = this.props.style, width = _a.width, height = _a.height;
        var isVertical = this.isVertical();
        var val = isVertical ? width : height;
        return Math.min(val, Math.min(width, height));
    };
    Slider.prototype.getSliderLength = function () {
        return this.isVertical() ? this.props.style.height : this.props.style.width;
    };
    Slider.prototype.getThumbSize = function () {
        var size = Thumb_1.getThumbSize(this.props.thumbShape, this.getSliderSize(), this.isVertical());
        var offsets = this.getInnerOffsets();
        var offset = offsets.offsetHeight || offsets.offsetWidth || 0;
        return {
            width: size.width - offset,
            height: size.height - offset
        };
    };
    Slider.prototype.getThumbSizeMainAxis = function () {
        var size = this.getThumbSize();
        return this.isVertical() ? size.height : size.width;
    };
    Slider.prototype.getThumbSizeCrossAxis = function () {
        var size = this.getThumbSize();
        return this.isVertical() ? size.width : size.height;
    };
    Slider.prototype.handleChange = function (value) {
        value = this.floorValue(this.clamp(value, this.props.min, this.props.max), 2);
        if (value !== this.props.value) {
            this.props.onChange(value);
        }
    };
    Slider.prototype.clamp = function (val, min, max) {
        return Math.min(Math.max(val, min), max);
    };
    Slider.prototype.isRtl = function () {
        return this.props.dir === 'rtl';
    };
    Slider.prototype.isVertical = function () {
        return this.props.orientation === 'vertical';
    };
    Slider.prototype.isContinuous = function () {
        return !this.props.step;
    };
    Slider.prototype.shouldShowTooltip = function () {
        switch (this.props.tooltipVisibility) {
            case 'always':
                return true;
            case 'none':
                return false;
            default:
            case 'hover':
                return this.state.dragging || this.state.thumbHover || this.state.inKeyPress;
        }
    };
    Slider.prototype.calcThumbProgressPosition = function () {
        var thumbSize = this.getThumbSizeMainAxis();
        var _a = this.props, value = _a.value, min = _a.min, max = _a.max;
        var pct = (value - min) / (max - min);
        var clampedPct = this.clamp(pct, 0, 1);
        return "calc(" + clampedPct + " *(100% - " + thumbSize + "px))";
    };
    Slider.prototype.calcTrackFillPosition = function () {
        var thumbSize = this.getThumbSizeMainAxis();
        var _a = this.props, value = _a.value, min = _a.min, max = _a.max;
        var pct = (value - min) / (max - min);
        var clampedPct = this.clamp(pct, 0, 1);
        return "calc(" + clampedPct + " *(100% - " + thumbSize + "px) + " + thumbSize + "px - 2px)";
    };
    Slider.prototype.calcThumbCrossPosition = function () {
        var thumbSize = this.getThumbSizeCrossAxis();
        return "calc(50% - " + thumbSize / 2 + "px)";
    };
    Slider.prototype.calcThumbPosition = function () {
        var _a;
        var progressVal = this.calcThumbProgressPosition();
        var crossVal = this.calcThumbCrossPosition();
        if (this.isVertical()) {
            return { bottom: progressVal, left: 0 };
        }
        return _a = {}, _a[this.getStartPos()] = progressVal, _a.top = 0, _a;
    };
    Slider.prototype.floorValue = function (value, precision) {
        if (precision === void 0) { precision = 1; }
        var clampedValue = Math.floor(Math.pow(10, precision) * value) / Math.pow(10, precision);
        return clampedValue;
    };
    Slider.prototype.renderTooltip = function () {
        var _a;
        if (!this.shouldShowTooltip()) {
            return null;
        }
        var tooltipPosition = this.props.tooltipPosition;
        var positionClassname = tooltipPosition + 'Position';
        var clampedValue = this.floorValue(this.props.value);
        return (React.createElement("div", __assign({ "data-hook": "tooltip" }, Slider_st_css_1.default('tooltip', (_a = {}, _a[positionClassname] = true, _a))),
            this.props.tooltipPrefix,
            clampedValue,
            this.props.tooltipSuffix));
    };
    Slider.prototype.ticksShown = function () {
        return !this.isContinuous() && this.props.tickMarksShape !== 'none';
    };
    Slider.prototype.getInnerOffsets = function () {
        var showTicks = this.ticksShown();
        if (!showTicks) {
            return {};
        }
        var isHorizontal = !this.isVertical();
        var tickSize = this.props.tickMarksShape === 'line' ? 10 : 3;
        var tickMarksPos = this.props.tickMarksPosition;
        var tickMarksGap = 12;
        var offsetWidth, offsetHeight, offsetLeft, offsetTop;
        if (tickMarksPos === 'normal') {
            offsetHeight = tickSize + tickMarksGap;
        }
        else if (tickMarksPos === 'across') {
            offsetTop = tickSize + tickMarksGap;
            offsetHeight = tickSize + tickMarksGap;
        }
        if (isHorizontal) {
            return { offsetHeight: offsetHeight, offsetTop: offsetTop };
        }
        else {
            return { offsetWidth: offsetHeight, offsetLeft: offsetTop };
        }
    };
    Slider.prototype.getInnerDims = function () {
        var offsets = this.getInnerOffsets();
        var style = {};
        if (offsets.offsetTop) {
            style.top = offsets.offsetTop;
        }
        if (offsets.offsetLeft) {
            style.left = offsets.offsetLeft;
        }
        if (offsets.offsetHeight) {
            style.height = "calc(100% - " + offsets.offsetHeight + "px)";
        }
        if (offsets.offsetWidth) {
            style.width = "calc(100% - " + offsets.offsetWidth + "px)";
        }
        return style;
    };
    Slider.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, min = _a.min, max = _a.max, trackSize = _a.trackSize, disabled = _a.disabled, dir = _a.dir, onFocus = _a.onFocus, tickMarksPosition = _a.tickMarksPosition, tickMarksShape = _a.tickMarksShape, thumbShape = _a.thumbShape, orientation = _a.orientation, style = _a.style;
        var vertical = this.isVertical();
        var thumbSize = this.getThumbSize();
        var crossThumbSize = this.getThumbSizeCrossAxis();
        var mainThumbSize = this.getThumbSizeMainAxis();
        var showTicks = this.ticksShown();
        var step = this.getStepValue();
        var thumbPosition = this.calcThumbPosition();
        var trackStyle = vertical ? { width: trackSize + '%' } : { height: trackSize + '%' };
        var trackFillPosition = vertical ? {
            bottom: 0,
            height: this.calcTrackFillPosition()
        } : {
            width: this.calcTrackFillPosition()
        };
        return (React.createElement("div", __assign({}, Slider_st_css_1.default('root', {
            orientation: vertical ? 'vertical' : 'horizontal',
            dir: dir,
            tickMarksPosition: tickMarksPosition,
            tickMarksShape: tickMarksShape,
            disabled: disabled,
        }, this.props), { onMouseDown: this.handleMouseDown, onTouchStart: this.handleMouseDown, onKeyDown: this.handleKeyDown, onFocus: onFocus, onBlur: this.handleBlur, "data-value": value, "data-min": min, "data-max": max, "data-orientation": orientation, "data-dir": dir, tabIndex: 0, style: style, ref: function (root) { return _this.root = root; }, role: "slider", "aria-valuemin": min, "aria-valuemax": max, "aria-valuenow": value }),
            React.createElement("div", { className: Slider_st_css_1.default.inner, style: this.getInnerDims() },
                React.createElement("div", { "data-hook": "track", ref: this.setTrackNode, className: Slider_st_css_1.default.track, onClick: this.moveThumbByMouse, style: trackStyle },
                    React.createElement("div", { className: Slider_st_css_1.default.trackFill, style: trackFillPosition })),
                React.createElement(Thumb_1.Thumb, { shape: thumbShape, thumbPosition: thumbPosition, thumbSize: thumbSize, onMouseEnter: this.handleThumbEnter, onMouseLeave: this.handleThumbLeave }, this.renderTooltip())),
            showTicks && (React.createElement(Ticks_1.Ticks, { pStyle: Slider_st_css_1.default, step: step, min: min, max: max, thumbSize: mainThumbSize, vertical: vertical, trackSize: vertical ? this.props.style.height - mainThumbSize : this.props.style.width - crossThumbSize, tickMarksShape: tickMarksShape, onTickClick: this.moveThumbByMouse }))));
    };
    Slider.displayName = 'Slider';
    Slider.propTypes = {
        /** The minimum value of the slider */
        min: prop_types_1.number,
        /** The maximum value of the slider */
        max: prop_types_1.number,
        /** The current value of the slider */
        value: prop_types_1.number,
        /** Callback for handling value changes */
        onChange: prop_types_1.func,
        /** Callback for handling focus events */
        onFocus: prop_types_1.func,
        /** Callback for handling blur events */
        onBlur: prop_types_1.func,
        /** Whether the slider has a horizontal or a vertical layout */
        orientation: prop_types_1.oneOf(['horizontal', 'vertical']),
        /** If stepType = 'value', 'step' determines the value of each slider step. If stepType = 'count', 'step' determines the total number of jumps */
        step: prop_types_1.number,
        /** If stepType = 'value', 'step' determines the value of each slider step. If stepType = 'count', 'step' determines the total number of jumps */
        stepType: prop_types_1.oneOf(['value', 'count']),
        /** Determines the tooltip position */
        tooltipPosition: prop_types_1.oneOf(['normal', 'across']),
        /** Determines what triggers the tooltip pop */
        tooltipVisibility: prop_types_1.oneOf(['none', 'always', 'hover']),
        /** Determines the tick marks position */
        tickMarksPosition: prop_types_1.oneOf(['normal', 'middle', 'across']),
        /** A prefix for the value inside the tooltip */
        tooltipPrefix: prop_types_1.string,
        /** A suffix for the value inside the tooltip */
        tooltipSuffix: prop_types_1.string,
        /** The track size as a percentage of the bounding box height */
        trackSize: prop_types_1.number,
        /** The shape of the thumb */
        thumbShape: prop_types_1.oneOf(['circle', 'square', 'rectangle', 'bar']),
        /** The shape of the tick marks */
        tickMarksShape: prop_types_1.oneOf(['none', 'line', 'dot']),
        /** Determines whether the slider is disabled or not */
        disabled: prop_types_1.bool,
        /** Determines whether the slider is in read-only mode or not (disabled is temporary, readOnly is permanent) */
        readOnly: prop_types_1.bool,
        /** Determines whether values go from right to left in a horizontal position */
        dir: prop_types_1.oneOf(['rtl', 'ltr']),
        /** Sets the width and height of the slider */
        style: prop_types_1.object.isRequired
    };
    Slider.defaultProps = {
        min: 0,
        max: 10,
        value: 5,
        stepType: 'value',
        thumbShape: 'circle',
        orientation: 'horizontal',
        disabled: false,
        readOnly: false,
        tooltipVisibility: 'hover',
        tooltipPosition: 'normal',
        tooltipPrefix: '',
        tooltipSuffix: '',
        tickMarksPosition: 'normal',
        tickMarksShape: 'line',
        dir: 'ltr',
        onFocus: noop,
        onBlur: noop,
        style: {
            width: 0,
            height: 0
        }
    };
    return Slider;
}(React.PureComponent));
exports.Slider = Slider;
//# sourceMappingURL=Slider.js.map

/***/ }),

/***/ 367:
/*!***********************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Slider/Ticks.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var Ticks = /** @class */ (function (_super) {
    __extends(Ticks, _super);
    function Ticks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ticks.prototype.calcMaximumTickDensity = function () {
        if (this.props.tickMarksShape === 'line') {
            return 1 / 8;
        }
        return 1 / 16;
    };
    Ticks.prototype.calcStep = function () {
        var _a = this.props, step = _a.step, min = _a.min, max = _a.max, trackSize = _a.trackSize;
        var totalTickCount = (max - min) / Number(step);
        var density = Math.min(totalTickCount / trackSize, this.calcMaximumTickDensity());
        var adjustedStep = (max - min) / (trackSize * density);
        return adjustedStep;
    };
    Ticks.prototype.renderTick = function (i, min, max, vertical, thumbSize, pStyle) {
        var tickMarksShape = this.props.tickMarksShape;
        var pct = (i - min) / (max - min);
        var val = "calc(" + pct + " * calc(100% - " + thumbSize + "px) + " + thumbSize / 2 + "px)";
        return (React.createElement("div", __assign({}, pStyle('tick', { tickMarksShape: tickMarksShape }), { key: i, "data-hook": "tick", onClick: this.props.onTickClick, style: vertical ? { bottom: val } : { left: val } })));
    };
    Ticks.prototype.render = function () {
        var _a = this.props, min = _a.min, max = _a.max, thumbSize = _a.thumbSize, vertical = _a.vertical, trackSize = _a.trackSize, pStyle = _a.pStyle;
        if (!trackSize) {
            return null;
        }
        var step = this.calcStep();
        var ticks = [];
        for (var i = min; i < max; i += step) {
            ticks.push(this.renderTick(i, min, max, vertical, thumbSize, pStyle));
        }
        ticks.push(this.renderTick(max, min, max, vertical, thumbSize, pStyle));
        return (React.createElement("div", { "data-hook": "ticks-wrapper" }, ticks));
    };
    return Ticks;
}(React.PureComponent));
exports.Ticks = Ticks;
//# sourceMappingURL=Ticks.js.map

/***/ }),

/***/ 368:
/*!***********************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Slider/Thumb.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var PropTypes = __webpack_require__(/*! prop-types */ 1);
var Slider_st_css_1 = __webpack_require__(/*! ./Slider.st.css */ 42);
var Thumb = /** @class */ (function (_super) {
    __extends(Thumb, _super);
    function Thumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Thumb.prototype.render = function () {
        var _a = this.props, shape = _a.shape, thumbSize = _a.thumbSize;
        var ThumbShape = thumbShapes[shape];
        return (React.createElement("div", { "data-hook": "thumb", className: Slider_st_css_1.default.thumb, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave, style: __assign({}, this.props.thumbPosition, thumbSize) },
            React.createElement(ThumbShape.component, null),
            this.props.children));
    };
    Thumb.propTypes = {
        shape: PropTypes.string.isRequired,
        thumbPosition: PropTypes.object.isRequired,
        thumbSize: PropTypes.object.isRequired,
        onMouseEnter: PropTypes.func.isRequired,
        onMouseLeave: PropTypes.func.isRequired,
    };
    return Thumb;
}(React.Component));
exports.Thumb = Thumb;
function getThumbSize(shape) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var _a;
    return (_a = thumbShapes[shape]).getThumbSize.apply(_a, rest);
}
exports.getThumbSize = getThumbSize;
var CircleThumb = /** @class */ (function (_super) {
    __extends(CircleThumb, _super);
    function CircleThumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleThumb.prototype.render = function () {
        return (React.createElement("div", __assign({}, Slider_st_css_1.default('thumbShape', { shapeType: 'circle' }), { style: { borderRadius: '50%' } })));
    };
    return CircleThumb;
}(React.PureComponent));
var RectangleThumb = /** @class */ (function (_super) {
    __extends(RectangleThumb, _super);
    function RectangleThumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RectangleThumb.prototype.render = function () {
        return (React.createElement("div", __assign({}, Slider_st_css_1.default('thumbShape', { shapeType: 'rectangle' }))));
    };
    return RectangleThumb;
}(React.PureComponent));
var SquareThumb = /** @class */ (function (_super) {
    __extends(SquareThumb, _super);
    function SquareThumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SquareThumb.prototype.render = function () {
        return (React.createElement("div", __assign({}, Slider_st_css_1.default('thumbShape', { shapeType: 'square' }))));
    };
    return SquareThumb;
}(React.PureComponent));
var BarThumb = /** @class */ (function (_super) {
    __extends(BarThumb, _super);
    function BarThumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarThumb.prototype.render = function () {
        return (React.createElement("div", __assign({}, Slider_st_css_1.default('thumbShape', { shapeType: 'bar' }))));
    };
    return BarThumb;
}(React.PureComponent));
var thumbShapes = {
    circle: {
        component: CircleThumb,
        getThumbSize: function (sliderSize) { return ({ width: sliderSize, height: sliderSize }); }
    },
    rectangle: {
        component: RectangleThumb,
        getThumbSize: function (sliderSize, isVertical) {
            var _a;
            return (_a = {},
                _a[isVertical ? 'height' : 'width'] = 1.5 * sliderSize,
                _a[isVertical ? 'width' : 'height'] = sliderSize,
                _a);
        }
    },
    square: {
        component: SquareThumb,
        getThumbSize: function (sliderSize) { return ({ width: sliderSize, height: sliderSize }); }
    },
    bar: {
        component: BarThumb,
        getThumbSize: function (sliderSize, isVertical) {
            var _a;
            return (_a = {},
                _a[isVertical ? 'height' : 'width'] = 0.5 * sliderSize,
                _a[isVertical ? 'width' : 'height'] = sliderSize,
                _a);
        }
    }
};
//# sourceMappingURL=Thumb.js.map

/***/ }),

/***/ 369:
/*!**************************************!*\
  !*** ../node_modules/lodash/noop.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 4).noop

/***/ }),

/***/ 38:
/*!********************************************************************!*\
  !*** ../node_modules/stylable-runtime/cjs/cached-node-renderer.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CacheStyleNodeRenderer = /** @class */ (function () {
    function CacheStyleNodeRenderer(options) {
        var _this = this;
        this.options = options;
        this.create = function (stylesheet, key) {
            var node = _this.options.createElement('style');
            node.textContent = stylesheet.$css || '';
            node.setAttribute(_this.options.attrKey, key);
            node.setAttribute('st-depth', stylesheet.$depth + '');
            return node;
        };
        this.hasKey = function (node) { return node.hasAttribute(_this.options.attrKey); };
        this.update = function (stylesheet, node) {
            if (node.textContent !== stylesheet.$css) {
                node.textContent = stylesheet.$css || '';
            }
            return node;
        };
        this.renderKey = function (stylesheet) { return stylesheet.$id; };
    }
    return CacheStyleNodeRenderer;
}());
exports.CacheStyleNodeRenderer = CacheStyleNodeRenderer;
//# sourceMappingURL=cached-node-renderer.js.map

/***/ }),

/***/ 39:
/*!*******************************************************************!*\
  !*** ../node_modules/stylable-runtime/cjs/keyed-list-renderer.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createDOMListRenderer(nodeRenderer) {
    var first;
    var nodes = {};
    var setNode = function (dataItem, node) {
        return (nodes[nodeRenderer.renderKey(dataItem)] = node);
    };
    var renderNode = function (dataItem) {
        var key = nodeRenderer.renderKey(dataItem);
        var node = nodes[key];
        return node
            ? nodeRenderer.update(dataItem, node)
            : setNode(dataItem, nodeRenderer.create(dataItem, key));
    };
    var render = function (container, data) {
        if (data === void 0) { data = []; }
        var node;
        if (data.length) {
            var next = first;
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < data.length; i++) {
                node = renderNode(data[i]);
                if (node !== next) {
                    container.insertBefore(node, next || null);
                }
                else {
                    next = node.nextElementSibling;
                }
            }
            first = nodes[nodeRenderer.renderKey(data[0])];
            while (node.nextElementSibling) {
                if (nodeRenderer.hasKey(node.nextElementSibling)) {
                    container.removeChild(node.nextElementSibling);
                }
                else {
                    break;
                }
            }
        }
        else {
            while (first) {
                var next = first.nextElementSibling;
                container.removeChild(first);
                first = next && nodeRenderer.hasKey(next) ? next : undefined;
            }
        }
    };
    return { render: render, nodes: nodes };
}
exports.createDOMListRenderer = createDOMListRenderer;
//# sourceMappingURL=keyed-list-renderer.js.map

/***/ }),

/***/ 42:
/*!****************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Slider/Slider.st.css ***!
  \****************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/stylable-runtime/cjs/css-runtime-stylesheet.js */ 2);
var $renderer = __webpack_require__(/*! ../node_modules/stylable-runtime/cjs/css-runtime-renderer.js */ 3).$;
exports.default = $stylesheet.create(
  "root",
  "Slider2876383323",
  {"root":"Slider2876383323--root","tooltip":"Slider2876383323--tooltip","track":"Slider2876383323--track","inner":"Slider2876383323--inner","trackFill":"Slider2876383323--trackFill","thumb":"Slider2876383323--thumb","thumbShape":"Slider2876383323--thumbShape","tick":"Slider2876383323--tick","tickLineWidth":"1px","tickLineHeight":"10px","tickDotSize":"3px","tickMarksGap":"12px","tooltipGap":"10px"},
  "",
  1,
  /*! ../node_modules/wix-ui-core/dist/src/components/Slider/Slider.st.css */ 42
);


/***/ }),

/***/ 80:
/*!***********************************************!*\
  !*** ../node_modules/fbjs/lib/emptyObject.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),

/***/ 81:
/*!**************************************!*\
  !*** ../node_modules/lodash/omit.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 4).omit

/***/ }),

/***/ 94:
/*!***************************************************!*\
  !*** ../node_modules/create-react-class/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(/*! react */ 0);
var factory = __webpack_require__(/*! ./factory */ 95);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ 95:
/*!*****************************************************!*\
  !*** ../node_modules/create-react-class/factory.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(/*! object-assign */ 25);

var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 80);
var _invariant = __webpack_require__(/*! fbjs/lib/invariant */ 14);

if (false) { var warning; }

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {}
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {}
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {}
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {}
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) { var isMixinValid, typeofSpec; }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {}
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) { var _bind, componentName; }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {}
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {}

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {}
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {}

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {}

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ })

}]);
//# sourceMappingURL=wixui.Slider.chunk.js.map