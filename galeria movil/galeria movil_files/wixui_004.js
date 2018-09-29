((typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || []).push([[27],{

/***/ 108:
/*!*****************************************!*\
  !*** ./components/Rating/Rating.st.css ***!
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
  "Rating2769505843",
  {"root":"Rating2769505843--root","displayMode":"Rating2769505843--displayMode","inputMode":"Rating2769505843--inputMode","stars":"Rating2769505843--stars","ratingValue":"Rating2769505843--ratingValue","reviewsCount":"Rating2769505843--reviewsCount","noReviewsPlaceholder":"Rating2769505843--noReviewsPlaceholder","labelsContainer":"Rating2769505843--labelsContainer","label":"Rating2769505843--label","title":"Rating2769505843--title","icon":"Rating2769505843--icon","halfIcon":"Rating2769505843--halfIcon","radioButton":"Rating2769505843--radioButton","filledShapeColor":"color_5","emptyShapeColor":"color_15","shapeBorderColor":"color_32","shapeBorderWidth":"3","labelFont":"font_8","labelFontColor":"color_15","errorFilledShapeColor":"color_7","errorShapeBorderColor":"color_37","errorShapeBorderWidth":"7","errorLabelFontColor":"color_17"},
  "",
  7,
  /*! ./components/Rating/Rating.st.css */ 108
);
exports.default.$skin = {"params":{"filledShapeColor":"COLOR_ALPHA","emptyShapeColor":"COLOR_ALPHA","shapeBorderColor":"BORDER_COLOR_ALPHA","shapeBorderWidth":"BORDER_SIZE","labelFont":"FONT","labelFontColor":"TEXT_COLOR","errorFilledShapeColor":"COLOR_ALPHA","errorShapeBorderColor":"BORDER_COLOR_ALPHA","errorShapeBorderWidth":"BORDER_SIZE","errorLabelFontColor":"TEXT_COLOR"},"paramsDefaults":{"filledShapeColor":"color_5","emptyShapeColor":"color_15","shapeBorderColor":"color_32","shapeBorderWidth":"3","labelFont":"font_8","labelFontColor":"color_15","errorFilledShapeColor":"color_7","errorShapeBorderColor":"color_37","errorShapeBorderWidth":"7","errorLabelFontColor":"color_17"}};
exports.default.$skin.$render = function render_css($id, $params, $functions) {
  return "\n" + $id + " .DropdownOption3163115132--root{cursor: pointer}\n" + $id + " .DropdownOption3163115132--root[data-dropdownoption3163115132-hovered]{background-color: lightgrey}\n" + $id + " .DropdownOption3163115132--root[data-dropdownoption3163115132-disabled]{cursor: default;background-color: white}\n" + $id + " .DropdownOption3163115132--root[data-dropdownoption3163115132-selected]{background-color: grey}\n" + $id + " .DropdownOption3163115132--root[data-dropdownoption3163115132-selected][data-dropdownoption3163115132-hovered]{background-color: dimgrey}\n" + $id + " .DropdownOption3163115132--root:not([data-dropdownoption3163115132-selectable]){cursor: default}\n" + $id + " .DropdownOption3163115132--root .DropdownOption3163115132--highlight{background-color: transparent;font-weight: bold}\n" + $id + " .Popover2783324381--root{}\n" + $id + " .Popover2783324381--root.Popover2783324381--manager{position: relative;display: inline-block}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation-enter{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation-enter.Popover2783324381--popoverAnimation-enter-active{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation-exit{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverAnimation-exit.Popover2783324381--popoverAnimation-exit-active{}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverContent{background-color: white;border-width: 1px;border-style: solid;border-color: black;border-radius: initial;padding: initial}\n" + $id + " .Popover2783324381--root .Popover2783324381--arrow{width: 0;height: 0;border-style: solid;position: absolute;margin: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover{z-index: 1000}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"right\"].Popover2783324381--withArrow{padding-left: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"right\"].Popover2783324381--withArrow .Popover2783324381--arrow{border-width: 5px 5px 5px 0;left: calc(-1 * 5px);margin-left: 5px;margin-right: 0;border-color: transparent black transparent transparent}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"left\"].Popover2783324381--withArrow{padding-right: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"left\"].Popover2783324381--withArrow .Popover2783324381--arrow{border-width: 5px 0 5px 5px;right: calc(-1 * 5px);margin-left: 0;margin-right: 5px;border-color: transparent transparent transparent black}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"bottom\"].Popover2783324381--withArrow{padding-top: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"bottom\"].Popover2783324381--withArrow .Popover2783324381--arrow{border-width: 0 5px 5px 5px;top: calc(-1 * 5px);margin-top: 5px;margin-bottom: 0;border-color: transparent transparent black transparent}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"top\"].Popover2783324381--withArrow{padding-bottom: 5px}\n" + $id + " .Popover2783324381--root .Popover2783324381--popover[data-placement*=\"top\"].Popover2783324381--withArrow .Popover2783324381--arrow{border-width: 5px 5px 0 5px;bottom: calc(-1 * 5px);margin-top: 0;margin-bottom: 5px;border-color: black transparent transparent transparent}\n" + $id + " .Popover2783324381--root .Popover2783324381--popoverElement{}\n" + $id + " .Tickers500429984--root{display: inline-flex;flex-direction: column;vertical-align: top}\n" + $id + " .Tickers500429984--root .Tickers500429984--ticker{border: none;outline: none;cursor: pointer;background-color: transparent;padding: 0;margin: 0;flex-grow: 1;display: flex;justify-content: center}\n" + $id + " .Slider2876383323--root{position: relative;box-sizing: border-box;outline: none}\n" + $id + " .Slider2876383323--root *{box-sizing: border-box}\n" + $id + " .Slider2876383323--root .Slider2876383323--tooltip{position: absolute;background: #363636;color: #fff;padding: 4px 12px;text-align: center;font-size: 14px;line-height: 1.5;border-radius: 3px;white-space: nowrap}\n" + $id + " .Slider2876383323--root .Slider2876383323--tooltip::after, " + $id + " .Slider2876383323--root .Slider2876383323--tooltip::before{content: ' ';position: absolute;margin-left: -8px;border-width: 8px;border-style: solid}\n" + $id + " .Slider2876383323--root .Slider2876383323--track{z-index: 0;width: 100%;height: 25%;position: relative;cursor: pointer;background: #dadada;opacity: 1;border-radius: 8px;overflow: hidden;border: 2px solid transparent;min-height: 1px}\n" + $id + " .Slider2876383323--root .Slider2876383323--inner{display: flex;position: relative;align-items: center;justify-content: center;width: 100%;height: 100%}\n" + $id + " .Slider2876383323--root .Slider2876383323--trackFill{position: absolute;background: linear-gradient(to right,#4992e3,#70bff3);height: 100%;width: 100%}\n" + $id + " .Slider2876383323--root[data-slider2876383323-dir=\"rtl\"] .Slider2876383323--trackFill{right: 0}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--track{width: 25%;height: 100%}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--trackFill{background: linear-gradient(to top,#4992e3,#70bff3)}\n" + $id + " .Slider2876383323--root .Slider2876383323--thumb{z-index: 2;position: absolute;cursor: pointer}\n" + $id + " .Slider2876383323--root .Slider2876383323--thumbShape{width: 100%;height: 100%;background: green;border: 2px solid blue}\n" + $id + " .Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"circle\"]{border-radius: 50%}\n" + $id + " .Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"square\"]{border-radius: 7px}\n" + $id + " .Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"rectangle\"]{border-radius: 37px}\n" + $id + " .Slider2876383323--root .Slider2876383323--thumbShape[data-slider2876383323-shapetype=\"bar\"]{border-radius: 7px}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]{left: 50%;top: calc(-7px - 10px);transform: translate(-50%,-100%)}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]{left: 50%;bottom: calc(-7px - 10px);transform: translate(-50%,100%)}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]{left: 50%;left: calc(-7px - 10px);transform: translate(-100%,-50%)}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]{right: calc(-7px - 10px);transform: translate(100%,-50%)}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::after, " + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::before{border-color: #363636 transparent transparent transparent;top: 100%;left: 50%}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::after, " + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::before{border-color: transparent transparent #363636 transparent;bottom: 100%;left: 50%}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip{top: 50%}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip::after, " + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip::before{top: 50%;transform: translateY(-50%)}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::after, " + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-normalposition]::before{left: 100%;margin-left: 0;border-color: transparent transparent transparent #363636}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::after, " + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"] .Slider2876383323--tooltip[data-slider2876383323-acrossposition]::before{right: 100%;border-color: transparent #363636 transparent transparent}\n" + $id + " .Slider2876383323--root .Slider2876383323--tick{display: inline-block;position: absolute;background: #000;cursor: pointer}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksshape=\"line\"] .Slider2876383323--tick{width: 1px;height: 10px}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksshape=\"line\"] .Slider2876383323--tick{height: 1px;width: 10px}\n" + $id + " .Slider2876383323--root[data-slider2876383323-tickmarksshape=\"dot\"] .Slider2876383323--tick{width: 3px;height: 3px;border-radius: 50%}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksshape=\"dot\"] .Slider2876383323--tick{transform: translateX(calc(- 3px,2))}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksshape=\"dot\"] .Slider2876383323--tick{transform: translateY(calc(3px,2))}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksposition=\"normal\"] .Slider2876383323--tick{bottom: 0}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksposition=\"normal\"] .Slider2876383323--tick{right: 0}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksposition=\"middle\"] .Slider2876383323--tick{top: 50%;transform: translateY(-50%)}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksposition=\"middle\"] .Slider2876383323--tick{left: 50%;transform: translateX(-50%)}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"horizontal\"][data-slider2876383323-tickmarksposition=\"across\"] .Slider2876383323--tick{top: 0}\n" + $id + " .Slider2876383323--root[data-slider2876383323-orientation=\"vertical\"][data-slider2876383323-tickmarksposition=\"across\"] .Slider2876383323--tick{left: 0}\n" + $id + " .Input3489380451--root{position: relative}\n" + $id + " .Input3489380451--root .Input3489380451--nativeInput{}\n" + $id + " .RadioButton14693577--root{display: inline-block}\n" + $id + " .RadioButton14693577--root .RadioButton14693577--icon{cursor: pointer;height: auto}\n" + $id + " .RadioButton14693577--root .RadioButton14693577--label{}\n" + $id + " .RadioButton14693577--root[data-radiobutton14693577-checked] .RadioButton14693577--icon, " + $id + " .RadioButton14693577--root:hover .RadioButton14693577--icon{}\n" + $id + " .RadioButton14693577--root[data-radiobutton14693577-disabled]{filter: grayscale(75%);opacity: 0.7}\n" + $id + " .RadioButton14693577--root .RadioButton14693577--hiddenRadio{position: absolute;overflow: hidden;height: 1px;width: 1px;margin: -1px;padding: 0;border: 0;opacity: 0}\n" + $id + " .Divider3251605325--root{}\n" + $id + " .Divider3251605325--root[data-divider3251605325-customdivider]{reset: all}\n" + $id + " .Divider3251605325--root:not([data-divider3251605325-customdivider]){height: 1px;background-color: black;opacity: initial;margin-top: initial;margin-bottom: initial}\n" + $id + " .Divider3251605325--root[data-divider3251605325-vertical]{height: auto;width: 1px}\n" + $id + " .Pagination918583540--root .Pagination918583540--button-common-mixin{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination918583540--root{display: inline-flex;user-select: none}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButton{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButton:not(.Pagination918583540--disabled){cursor: pointer}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButtonFirst{order: 1}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButtonPrevious{order: 2}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButtonNext{order: 4}\n" + $id + " .Pagination918583540--root .Pagination918583540--navButtonLast{order: 5}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageStrip{order: 3;overflow-x: hidden}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageStripInner{display: flex}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageStripTemplate{height: 0;overflow: hidden}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageButton{display: inline-flex;flex-shrink: 0;cursor: pointer}\n" + $id + " .Pagination918583540--root .Pagination918583540--currentPage{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination918583540--root .Pagination918583540--gap{display: inline-flex;flex-shrink: 0}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageForm{display: flex;order: 3}\n" + $id + " .Pagination918583540--root .Pagination918583540--pageInput{}\n" + $id + " .Pagination918583540--root .Pagination918583540--totalPages{}\n" + $id + " .Pagination918583540--root .Pagination918583540--slash{}\n" + $id + " .Video3051166948--root{position: relative}\n" + $id + " .Video3051166948--root .Video3051166948--playerContainer{position: relative}\n" + $id + " .Video3051166948--root .Video3051166948--cover{position: absolute;top: 0;left: 0;height: 100%;width: 100%;background: #000 50% 50% no-repeat;background-size: cover;cursor: pointer}\n" + $id + " .Video3051166948--root .Video3051166948--overlay{display: flex;height: 100%;justify-content: center;flex-direction: column;align-items: center;background-color: rgba(0,0,0,0.35)}\n" + $id + " .Video3051166948--root .Video3051166948--title{margin: 0 15px 15px;text-align: center}\n" + $id + " .DropdownContent3583402205--root{outline: 0}\n" + $id + " .DropdownContent3583402205--root .DropdownContent3583402205--optionsContainer{outline: 0;overflow: auto;max-height: 260px;position: relative}\n" + $id + " .DropdownContent3583402205--root .DropdownContent3583402205--dropdownOption.DropdownOption3163115132--root{}\n" + $id + " .TimePicker3498728913--root.Input3489380451--root{}\n" + $id + " .TimePicker3498728913--root .TimePicker3498728913--tickers.Tickers500429984--root{}\n" + $id + " .Dropdown3042512354--root.Popover2783324381--root{}\n" + $id + " .Dropdown3042512354--root.Popover2783324381--root .Popover2783324381--popover{min-width: 100%}\n" + $id + " .Dropdown3042512354--root .Dropdown3042512354--dropdownContent.DropdownContent3583402205--root{}\n" + $id + " .InputWithOptions4220938856--root.Dropdown3042512354--root{}\n" + $id + " .InputWithOptions4220938856--root .InputWithOptions4220938856--inputComponent.Input3489380451--root{}\n" + $id + " .AddressInput3172332421--root.InputWithOptions4220938856--root{}\n" + $id + " .AddressInput3172332421--root .AddressInput3172332421--option{display: flex}\n" + $id + " .AddressInput3172332421--root .AddressInput3172332421--iconWrapper{display: flex;align-items: center;padding: 0 6px}\n" + $id + " .AddressInput3172332421--root .AddressInput3172332421--icon{}\n" + $id + " .AddressInput3172332421--root .AddressInput3172332421--optionContent{flex: 1}\n" + $id + ".Rating2769505843--root{display: inline-flex;align-items: center;font: " + $params["labelFont"] + "}\n" + $id + ".Rating2769505843--root[data-rating2769505843-rtl] .Rating2769505843--displayMode, " + $id + ".Rating2769505843--root[data-rating2769505843-rtl] .Rating2769505843--inputMode{direction: rtl}\n" + $id + ".Rating2769505843--root .Rating2769505843--displayMode{display: inline-flex;width: 100%;align-items: center}\n" + $id + ".Rating2769505843--root[data-rating2769505843-alignment=\"center\"] .Rating2769505843--displayMode{justify-content: center}\n" + $id + ".Rating2769505843--root[data-rating2769505843-alignment=\"right\"] .Rating2769505843--displayMode, " + $id + ".Rating2769505843--root[data-rating2769505843-rtl][data-rating2769505843-alignment=\"left\"] .Rating2769505843--displayMode{justify-content: flex-end}\n" + $id + ".Rating2769505843--root[data-rating2769505843-alignment=\"left\"] .Rating2769505843--displayMode, " + $id + ".Rating2769505843--root[data-rating2769505843-rtl][data-rating2769505843-alignment=\"right\"] .Rating2769505843--displayMode{justify-content: flex-start}\n" + $id + ".Rating2769505843--root .Rating2769505843--inputMode{display: inline-flex;flex-direction: column;width: 100%;text-align: center;align-items: center}\n" + $id + ".Rating2769505843--root[data-rating2769505843-alignment=\"right\"] .Rating2769505843--inputMode{text-align: right;align-items: flex-end}\n" + $id + ".Rating2769505843--root[data-rating2769505843-rtl][data-rating2769505843-alignment=\"right\"] .Rating2769505843--inputMode{align-items: flex-start}\n" + $id + ".Rating2769505843--root[data-rating2769505843-alignment=\"left\"] .Rating2769505843--inputMode{text-align: left;align-items: flex-start}\n" + $id + ".Rating2769505843--root[data-rating2769505843-rtl][data-rating2769505843-alignment=\"left\"] .Rating2769505843--inputMode{align-items: flex-end}\n" + $id + ".Rating2769505843--root[data-rating2769505843-labelposition=\"side\"] .Rating2769505843--inputMode{flex-direction: row;align-items: center}\n" + $id + ".Rating2769505843--root .Rating2769505843--stars{order: 2;display: flex}\n" + $id + ".Rating2769505843--root[data-rating2769505843-mode=\"input\"] .Rating2769505843--stars{cursor: pointer}\n" + $id + ".Rating2769505843--root[data-rating2769505843-disabled] .Rating2769505843--stars{pointer-events: none}\n" + $id + ".Rating2769505843--root .Rating2769505843--ratingValue, " + $id + ".Rating2769505843--root .Rating2769505843--reviewsCount, " + $id + ".Rating2769505843--root .Rating2769505843--noReviewsPlaceholder{color: " + $params["labelFontColor"] + ";line-height: 1.5}\n" + $id + ".Rating2769505843--root .Rating2769505843--ratingValue{order: 1;align-self: center}\n" + $id + ".Rating2769505843--root .Rating2769505843--reviewsCount{order: 3;align-self: center;white-space: nowrap}\n" + $id + ".Rating2769505843--root .Rating2769505843--noReviewsPlaceholder{align-self: center;white-space: nowrap;overflow-x: hidden}\n" + $id + ".Rating2769505843--root .Rating2769505843--labelsContainer{display: inline-flex;width: 100%;order: 1;overflow: hidden;align-items: flex-end}\n" + $id + ".Rating2769505843--root[data-rating2769505843-labelposition=\"bottom\"] .Rating2769505843--labelsContainer{align-items: flex-start}\n" + $id + ".Rating2769505843--root[data-rating2769505843-labelposition=\"side\"] .Rating2769505843--labelsContainer{align-items: center}\n" + $id + ".Rating2769505843--root .Rating2769505843--label, " + $id + ".Rating2769505843--root .Rating2769505843--title{color: " + $params["labelFontColor"] + ";line-height: 1.5;flex-shrink: 0;display: block;width: 100%}\n" + $id + ".Rating2769505843--root[data-rating2769505843-error] .Rating2769505843--label, " + $id + ".Rating2769505843--root[data-preview=\"error\"] .Rating2769505843--label, " + $id + ".Rating2769505843--root[data-rating2769505843-error] .Rating2769505843--title, " + $id + ".Rating2769505843--root[data-preview=\"error\"] .Rating2769505843--title{color: " + $params["errorLabelFontColor"] + "}\n" + $id + ".Rating2769505843--root[data-rating2769505843-labelposition=\"side\"] .Rating2769505843--stars{align-self: center}\n" + $id + ".Rating2769505843--root .Rating2769505843--label{visibility: hidden}\n" + $id + ".Rating2769505843--root[data-rating2769505843-labelposition=\"bottom\"] .Rating2769505843--stars, " + $id + ".Rating2769505843--root[data-rating2769505843-labelposition=\"side\"] .Rating2769505843--stars{order: 0}\n" + $id + ".Rating2769505843--root[data-rating2769505843-ratingafter] .Rating2769505843--stars{order: 0}\n" + $id + ".Rating2769505843--root[data-rating2769505843-noreviewsmode=\"nothing\"][data-rating2769505843-editormode] .Rating2769505843--stars, " + $id + ".Rating2769505843--root[data-rating2769505843-noreviewsmode=\"nothing\"][data-rating2769505843-editormode] .Rating2769505843--ratingValue, " + $id + ".Rating2769505843--root[data-rating2769505843-noreviewsmode=\"nothing\"][data-rating2769505843-editormode] .Rating2769505843--reviewsCount{opacity: 0.15}\n" + $id + ".Rating2769505843--root .Rating2769505843--icon{display: block;position: relative;stroke: " + $params["shapeBorderColor"] + ";stroke-width: " + $params["shapeBorderWidth"] + ";fill: " + $params["emptyShapeColor"] + "}\n" + $id + ".Rating2769505843--root .Rating2769505843--icon path{fill: " + $params["emptyShapeColor"] + "}\n" + $id + ".Rating2769505843--root .Rating2769505843--icon[data-rating2769505843-checked] path{fill: " + $params["filledShapeColor"] + "}\n" + $id + ".Rating2769505843--root .Rating2769505843--icon svg{display: block;height: 100%;width: 100%;transform: translateZ(0)}\n" + $id + ".Rating2769505843--root .Rating2769505843--halfIcon{position: absolute;top: 0;overflow: hidden}\n" + $id + ".Rating2769505843--root[data-rating2769505843-mode=\"display\"] .Rating2769505843--icon{cursor: default}\n" + $id + ".Rating2769505843--root[data-rating2769505843-error] .Rating2769505843--icon:not([data-rating2769505843-checked]), " + $id + ".Rating2769505843--root[data-preview=\"error\"] .Rating2769505843--icon{stroke: " + $params["errorShapeBorderColor"] + ";stroke-width: " + $params["errorShapeBorderWidth"] + "}\n" + $id + ".Rating2769505843--root[data-rating2769505843-error] .Rating2769505843--icon:not([data-rating2769505843-checked]) path, " + $id + ".Rating2769505843--root[data-preview=\"error\"] .Rating2769505843--icon path{fill: " + $params["errorFilledShapeColor"] + "}\n" + $id + ".Rating2769505843--root .Rating2769505843--radioButton.RadioButton14693577--root{}\n";
};

/***/ }),

/***/ 118:
/*!*************************************!*\
  !*** ./components/Rating/Rating.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rating = exports.NoReviewsMode = exports.SplitRatingIcon = exports.RatingIcon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable complexity*/

var _react = __webpack_require__(/*! react */ 0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(/*! react-dom */ 12);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _RadioButton = __webpack_require__(/*! wix-ui-core/RadioButton */ 176);

var _util = __webpack_require__(/*! ./util */ 179);

var _santaLayout = __webpack_require__(/*! ./santa-layout */ 180);

var _RatingSt = __webpack_require__(/*! ./Rating.st.css */ 108);

var _RatingSt2 = _interopRequireDefault(_RatingSt);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _defaultSvg = __webpack_require__(/*! ./default-svg */ 181);

var _uuid = __webpack_require__(/*! uuid */ 182);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var noop = function noop() {
  return null;
};
var fiveItems = [1, 2, 3, 4, 5];

var RatingIcon = exports.RatingIcon = function RatingIcon(props) {
  var svg = props.svg,
      checked = props.checked,
      size = props.size,
      split = props.split;

  return React.createElement(
    'span',
    _extends({}, (0, _RatingSt2.default)('icon', { checked: checked, split: split }, props), { style: { height: size + 'px', width: size + 'px' } }),
    svg
  );
};

var SplitRatingIcon = exports.SplitRatingIcon = function SplitRatingIcon(_ref) {
  var svg = _ref.svg,
      size = _ref.size,
      rtl = _ref.rtl;

  return React.createElement(
    'span',
    { className: _RatingSt2.default.icon },
    React.createElement(RatingIcon, { split: true, svg: svg, size: size }),
    React.createElement(
      'div',
      {
        className: _RatingSt2.default.halfIcon,
        style: {
          height: size + 'px',
          width: size / 2 + 'px',
          left: (rtl ? size / 2 : 0) + 'px'
        }
      },
      React.createElement(RatingIcon, { checked: true, split: true, svg: svg, size: size })
    )
  );
};

RatingIcon.propTypes = {
  checked: _propTypes.bool,
  svg: _propTypes.node,
  size: _propTypes.number,
  split: _propTypes.bool
};

SplitRatingIcon.propTypes = {
  svg: _propTypes.node,
  size: _propTypes.number,
  rtl: _propTypes.bool
};

var RatingIcons = function RatingIcons(props) {
  var onChange = props.onChange,
      checkedPredicate = props.checkedPredicate,
      onHover = props.onHover,
      shapeSpacing = props.shapeSpacing,
      rtl = props.rtl,
      labels = props.labels,
      rating = props.rating,
      onBlur = props.onBlur,
      uncheckedIcon = props.uncheckedIcon,
      checkedIconPredicate = props.checkedIconPredicate,
      shapeSize = props.shapeSize,
      required = props.required,
      mode = props.mode;

  var name = (0, _uuid2.default)();

  return React.createElement(
    'span',
    {
      tabIndex: mode === 'display' ? 0 : null,
      className: _RatingSt2.default.stars,
      style: { minWidth: 4 * shapeSpacing + 5 * shapeSize + 'px' },
      'aria-label': rating ? rating + ' out of 5' : null,
      'data-hook': 'rating-icons'
    },
    ' ',
    fiveItems.map(function (value) {
      return React.createElement(
        'span',
        {
          'data-hook': 'rating-icon-' + value,
          key: value,
          style: _defineProperty({ display: 'flex' }, rtl ? 'paddingLeft' : 'paddingRight', value < 5 ? shapeSpacing : null),
          'aria-label': !rating ? labels[value] : null,
          onMouseEnter: function onMouseEnter(event) {
            return onHover(_extends({ value: value }, event));
          },
          onMouseLeave: onBlur
        },
        React.createElement(_RadioButton.RadioButton, {
          className: mode === 'input' ? _RatingSt2.default.radioButton : null,
          name: name,
          'data-hook': 'input-radio-' + value,
          value: '' + value,
          checked: checkedPredicate(value),
          label: '',
          onChange: onChange,
          checkedIcon: checkedIconPredicate(value),
          uncheckedIcon: uncheckedIcon,
          required: required
        })
      );
    }),
    ' '
  );
};

RatingIcons.propTypes = {
  rating: _propTypes.number,
  shapeSize: _propTypes.number,
  shapeSpacing: _propTypes.number,
  rtl: _propTypes.bool,
  dataHook: _propTypes.string,
  onChange: _propTypes.func,
  onHover: _propTypes.func,
  onBlur: _propTypes.func,
  checkedIcon: _propTypes.node,
  uncheckedIcon: _propTypes.node,
  splitIcon: _propTypes.node,
  checkedPredicate: _propTypes.func,
  checkedIconPredicate: _propTypes.func,
  labels: _propTypes.object,
  required: _propTypes.bool,
  mode: _propTypes.string
};

function wrapSvgString(svgString) {
  return React.createElement('div', {
    dangerouslySetInnerHTML: {
      __html: svgString || ''
    }
  });
}

var NoReviewsMode = exports.NoReviewsMode = {
  NOTHING: 'nothing',
  EMPTY_ICONS: 'emptyIcons',
  PLACEHOLDER_TEXT: 'placeholderText'
};

var Rating = exports.Rating = function (_React$Component) {
  _inherits(Rating, _React$Component);

  function Rating(props) {
    _classCallCheck(this, Rating);

    var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

    _this.updateLayout = function () {
      return (0, _santaLayout.ratingsDisplayLayout)(ReactDOM.findDOMNode(_this), _this.props);
    };

    _this.onRatingChange = function (event) {
      var intValue = parseInt(event.value);

      if (_this.props.disabled || intValue === _this.state.rating) {
        return;
      }

      _this.props.onChange({ event: event, rating: intValue });
    };

    _this.onIconHover = function (event) {
      if (_this.props.disabled) {
        return;
      }

      var intValue = parseInt(event.value);
      _this.setState({ hovered: intValue });

      var icon = {
        value: intValue,
        label: _this.props.labels[intValue]
      };

      _this.props.onIconMouseIn && _this.props.onIconMouseIn({ icon: icon });
    };

    _this.onIconBlur = function () {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ hovered: undefined });
    };

    _this.shouldEmptyIcons = function () {
      return _this.isEmptyState() && _this.props.noReviewsMode === NoReviewsMode.EMPTY_ICONS;
    };

    _this.getCheckedThreshold = function () {
      if (_this.shouldEmptyIcons()) {
        return 0;
      }

      return (0, _util.precisionRound)((_this.state.hovered || _this.props.rating) + 0.7, 1);
    };

    _this.shouldSplitIcon = function (value) {
      var lastCheckedIcon = value <= _this.getCheckedThreshold() && value + 1 > _this.getCheckedThreshold();
      var decimal = _this.props.rating % 1;
      return lastCheckedIcon && decimal >= 0.25 && decimal < 0.75; // // X.25 - X.74 - half star
    };

    _this.isEmptyState = function () {
      return !_this.props.rating;
    };

    _this.showPlaceholderText = function () {
      return _this.isEmptyState() && _this.props.noReviewsMode === NoReviewsMode.PLACEHOLDER_TEXT;
    };

    _this.showRatingInfo = function () {
      var _this$props = _this.props,
          noReviewsMode = _this$props.noReviewsMode,
          editorMode = _this$props.editorMode;

      return !_this.isEmptyState() || (noReviewsMode === NoReviewsMode.NOTHING ? editorMode : false);
    };

    _this.showIcons = function () {
      var _this$props2 = _this.props,
          noReviewsMode = _this$props2.noReviewsMode,
          editorMode = _this$props2.editorMode;

      return !_this.isEmptyState() || (noReviewsMode === NoReviewsMode.NOTHING ? editorMode : noReviewsMode !== NoReviewsMode.PLACEHOLDER_TEXT);
    };

    _this.getCurrentText = function () {
      var _this$props3 = _this.props,
          labels = _this$props3.labels,
          rating = _this$props3.rating,
          title = _this$props3.title,
          showLabels = _this$props3.showLabels,
          showTitle = _this$props3.showTitle;


      if (_this.state.hovered && showLabels) {
        return labels[_this.state.hovered];
      } else if (rating && showLabels) {
        return labels[rating];
      }

      return showTitle && title;
    };

    _this.state = {
      hovered: undefined
    };
    return _this;
  }

  _createClass(Rating, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateLayout();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateLayout();

      if (this.props.renderSeoScript) {
        var jsonId = {
          '@id': 'externalRating',
          '@context': 'http://schema.org',
          '@type': 'AggregateRating',
          itemReviewed: {
            '@type': 'Thing'
          },
          ratingValue: '' + this.props.rating,
          ratingCount: '' + this.props.numRatings
        };
        this.props.renderSeoScript(jsonId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          mode = _props.mode,
          icon = _props.icon,
          labels = _props.labels,
          showTitle = _props.showTitle,
          labelPosition = _props.labelPosition,
          editorMode = _props.editorMode,
          disabled = _props.disabled,
          shapeSpacing = _props.shapeSpacing,
          ratingPosition = _props.ratingPosition,
          showRating = _props.showRating,
          showReviewsCount = _props.showReviewsCount,
          noReviewsMode = _props.noReviewsMode,
          rtl = _props.rtl,
          id = _props.id,
          shapeSize = _props.shapeSize,
          showLabels = _props.showLabels,
          textAlignment = _props.textAlignment,
          required = _props.required,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          shouldShowInvalid = _props.shouldShowInvalid;


      var styleStates = {
        ratingAfter: mode === 'display' && ratingPosition === 'after',
        noReviewsMode: noReviewsMode,
        labelPosition: labelPosition,
        rtl: rtl,
        editorMode: editorMode && this.isEmptyState(),
        disabled: disabled,
        alignment: textAlignment,
        mode: mode,
        error: mode === 'input' && shouldShowInvalid && !this.state.hovered && this.isEmptyState()
      };

      var actualIcon = typeof icon === 'string' ? wrapSvgString(icon) : icon;

      var checkedIcon = React.createElement(RatingIcon, { svg: actualIcon, checked: true, size: shapeSize });
      var uncheckedIcon = React.createElement(RatingIcon, { svg: actualIcon, size: shapeSize });
      var splitIcon = React.createElement(SplitRatingIcon, { svg: actualIcon, size: shapeSize, rtl: rtl });

      var displayLabelsSpacing = Math.max(shapeSpacing, 15);

      var ratingStyle = {
        marginRight: ratingPosition === 'after' ? 0 : displayLabelsSpacing,
        marginLeft: ratingPosition === 'after' ? displayLabelsSpacing : 0
      };

      var ratingStyleRTL = {
        marginLeft: ratingPosition === 'after' ? 0 : displayLabelsSpacing,
        marginRight: ratingPosition === 'after' ? displayLabelsSpacing : 0
      };

      var numReviewsStyle = _defineProperty({}, 'margin' + (rtl ? 'Right' : 'Left'), ratingPosition === 'after' ? 15 : displayLabelsSpacing);

      var getSideLabelPosition = function getSideLabelPosition() {
        if (rtl) {
          return textAlignment === 'right' ? { marginRight: Math.max(15, shapeSpacing) } : {};
        } else {
          return textAlignment === 'left' ? { marginLeft: Math.max(15, shapeSpacing) } : {};
        }
      };

      return React.createElement(
        'div',
        _extends({}, (0, _RatingSt2.default)('root', styleStates, this.props), {
          role: 'radiogroup',
          'data-hook': 'storybook-rating',
          id: id,
          style: this.props.style,
          onClick: this.props.onClick,
          onMouseEnter: this.props.onMouseEnter,
          onMouseLeave: this.props.onMouseLeave
        }),
        mode === 'display' ? React.createElement(
          'div',
          { className: _RatingSt2.default.displayMode },
          this.showPlaceholderText() ? React.createElement(
            'span',
            { className: _RatingSt2.default.noReviewsPlaceholder, 'data-hook': 'rating-display-placeholder' },
            this.props.noReviewsPlaceholder
          ) : null,
          showRating && this.showRatingInfo() ? React.createElement(
            'span',
            {
              className: _RatingSt2.default.ratingValue,
              'data-hook': 'rating-display-rating',
              style: rtl ? ratingStyleRTL : ratingStyle
            },
            (this.props.rating || 0).toFixed(1)
          ) : null,
          this.showIcons() ? React.createElement(RatingIcons, {
            rtl: rtl,
            rating: this.props.rating,
            labels: {},
            shapeSpacing: shapeSpacing,
            shapeSize: shapeSize,
            onChange: noop,
            onHover: noop,
            onBlur: noop,
            checkedIcon: checkedIcon,
            uncheckedIcon: uncheckedIcon,
            splitIcon: splitIcon,
            checkedPredicate: function checkedPredicate(value) {
              return value <= _this2.getCheckedThreshold();
            },
            checkedIconPredicate: function checkedIconPredicate(value) {
              return _this2.shouldSplitIcon(value) ? splitIcon : checkedIcon;
            },
            mode: mode
          }) : null,
          showReviewsCount && this.showRatingInfo() ? React.createElement(
            'span',
            {
              className: _RatingSt2.default.reviewsCount,
              'data-hook': 'rating-display-reviews-count',
              'aria-label': 'based on ' + this.props.numRatings + ' votes',
              tabIndex: 0,
              style: numReviewsStyle
            },
            (0, _util.formatReviewsCount)(this.props.numRatings),
            ' ',
            this.props.numRatingsLabel
          ) : null
        ) : React.createElement(
          'div',
          { className: _RatingSt2.default.inputMode, onFocus: onFocus, onBlur: onBlur },
          React.createElement(
            'span',
            {
              className: _RatingSt2.default.labelsContainer,
              style: labelPosition !== 'side' ? { width: 5 * shapeSize + 4 * shapeSpacing + 'px' } : {},
              'data-hook': 'labels-container'
            },
            showTitle || showLabels ? React.createElement(
              'span',
              {
                className: _RatingSt2.default.title,
                'data-hook': 'rating-input-title',
                style: labelPosition === 'side' ? getSideLabelPosition() : {}
              },
              this.getCurrentText()
            ) : null,
            showLabels && fiveItems.map(function (value) {
              return React.createElement(
                'span',
                { key: value, className: _RatingSt2.default.label },
                React.createElement(
                  'span',
                  { 'data-hook': 'label_' + value },
                  labels[value]
                )
              );
            }),
            showTitle && React.createElement(
              'span',
              { className: _RatingSt2.default.label },
              React.createElement(
                'span',
                { 'data-hook': 'label_title' },
                this.props.title
              )
            )
          ),
          React.createElement(RatingIcons, {
            rtl: rtl,
            rating: null,
            labels: labels,
            shapeSize: shapeSize,
            shapeSpacing: shapeSpacing,
            onChange: this.onRatingChange,
            onHover: this.onIconHover,
            onBlur: this.onIconBlur,
            splitIcon: checkedIcon,
            checkedIcon: checkedIcon,
            uncheckedIcon: uncheckedIcon,
            checkedPredicate: function checkedPredicate(value) {
              return value <= (_this2.state.hovered || _this2.props.rating);
            },
            checkedIconPredicate: function checkedIconPredicate() {
              return checkedIcon;
            },
            required: required,
            mode: mode
          })
        )
      );
    }
  }]);

  return Rating;
}(React.Component);

Rating.propTypes = {
  /** Santa requirement */
  id: _propTypes.string,
  /** Mode - Display or Input */
  mode: (0, _propTypes.oneOf)(['display', 'input']),
  /** SVG String Icon */
  icon: (0, _propTypes.oneOfType)([_propTypes.node, _propTypes.string]),
  /** The rating displayed / Current rating selected */
  rating: _propTypes.number,
  /** on Display mode, shows the number of reviews */
  numRatings: _propTypes.number,
  /** on Display mode, the label shown to describe the reviews */
  numRatingsLabel: _propTypes.string,
  /** on Display mode, toggles the numeric rating */
  showRating: _propTypes.bool,
  /** on Display mode, toggles the numeric count */
  showReviewsCount: _propTypes.bool,
  /** on Display mode, specifies the position of the numeric rating in relative to the stars */
  ratingPosition: (0, _propTypes.oneOf)(['before', 'after']),
  /** on Display mode, decides what to display incase there are no reviews */
  noReviewsMode: (0, _propTypes.oneOf)([NoReviewsMode.NOTHING, NoReviewsMode.EMPTY_ICONS, NoReviewsMode.PLACEHOLDER_TEXT]),
  /** on Display mode, specifies a placeholder text to use (if that option is selected) in the absence of reviews */
  noReviewsPlaceholder: _propTypes.string,
  /** on Input mode, a callback to invoke when the rating is changed by the user */
  onChange: _propTypes.func,
  /** on Input mode, a callback to invoke when an icon is hovered */
  onIconMouseIn: _propTypes.func,
  /** on Input mode, a callback to invoke when the component is focused */
  onFocus: _propTypes.func,
  /** on Input mode, a callback to invoke when the component is blured */
  onBlur: _propTypes.func,
  /** a callback to invoke when root is clicked */
  onClick: _propTypes.func,
  /** a callback to invoke when mouse enters root */
  onMouseEnter: _propTypes.func,
  /** a callback to invoke when mouse leaves root */
  onMouseLeave: _propTypes.func,
  /** on Input mode, the title of the rating */
  title: _propTypes.string,
  /** on Input mode, the labels that represent each rating value */
  labels: _propTypes.object,
  /** on Input mode, the position of the labels that represent each rating value */
  labelPosition: (0, _propTypes.oneOf)(['top', 'bottom', 'side']),
  /** on Input mode, toggles the title */
  showTitle: _propTypes.bool,
  /** on Input mode, toggles the labels */
  showLabels: _propTypes.bool,
  /** on Input mode, specifies if this is required */
  required: _propTypes.bool,
  /** Sets the shape size */
  shapeSize: _propTypes.number,
  /** Sets the shape spacing */
  shapeSpacing: _propTypes.number,
  /** Aligns the title/labels text */
  textAlignment: (0, _propTypes.oneOf)(['left', 'right', 'center']),
  /** Sets RTL direction */
  rtl: _propTypes.bool,
  /** For displaying editor specific styles */
  editorMode: _propTypes.bool,
  /** for Disabled visual state */
  disabled: _propTypes.bool,
  /** Style - needed for font scaling */
  style: _propTypes.object,
  /** A function to render SEO script */
  renderSeoScript: _propTypes.func,
  /** for input mode - whether to toggle "error" style state */
  shouldShowInvalid: _propTypes.bool
};
Rating.defaultProps = {
  showRating: true,
  showReviewsCount: true,
  showTitle: true,
  noReviewsMode: NoReviewsMode.EMPTY_ICONS,
  icon: _defaultSvg.defaultSvg
};

/***/ }),

/***/ 119:
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/rng-browser.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 120:
/*!***********************************************!*\
  !*** ../node_modules/uuid/lib/bytesToUuid.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

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

/***/ 176:
/*!**************************************************!*\
  !*** ../node_modules/wix-ui-core/RadioButton.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/components/RadioButton */ 177);


/***/ }),

/***/ 177:
/*!****************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/RadioButton/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RadioButton_1 = __webpack_require__(/*! ./RadioButton */ 178);
exports.RadioButton = RadioButton_1.RadioButton;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 178:
/*!**********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/RadioButton/RadioButton.js ***!
  \**********************************************************************************/
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
var RadioButton_st_css_1 = __webpack_require__(/*! ./RadioButton.st.css */ 43);
var noop = function () { return null; };
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.focusedByMouse = false;
        _this.state = {
            focused: false,
            focusVisible: false
        };
        _this.handleClick = function (event) {
            _this.focusedByMouse = true;
            _this.handleInputChange(event);
        };
        _this.handleInputChange = function (event) {
            if (!_this.props.disabled) {
                _this.props.onChange(__assign({ value: _this.props.value }, event));
                if (_this.radioRef) {
                    _this.radioRef.focus();
                }
            }
        };
        _this.onHover = function (event) {
            _this.props.onHover(__assign({ value: _this.props.value }, event));
        };
        _this.onFocus = function () {
            _this.setState({ focused: true, focusVisible: !_this.focusedByMouse });
        };
        _this.onInputBlur = function () {
            _this.setState({ focused: false, focusVisible: false });
            _this.focusedByMouse = false;
        };
        _this.handleInputKeyDown = function () {
            _this.setState({ focusVisible: true });
        };
        _this.radioRef = undefined;
        return _this;
    }
    RadioButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, value = _a.value, name = _a.name, checkedIcon = _a.checkedIcon, uncheckedIcon = _a.uncheckedIcon, label = _a.label, checked = _a.checked, disabled = _a.disabled, required = _a.required, onIconBlur = _a.onIconBlur;
        var focused = this.state.focused;
        return (React.createElement("div", __assign({}, RadioButton_st_css_1.default('root', { checked: checked, disabled: disabled, focused: focused, 'focus-visible': this.state.focusVisible }, this.props), { onChange: this.handleInputChange, onClick: this.handleClick, role: "radio", "aria-checked": checked ? checked : false }),
            React.createElement("input", { type: "radio", className: RadioButton_st_css_1.default.hiddenRadio, disabled: disabled, required: required, onFocus: this.onFocus, onBlur: this.onInputBlur, checked: checked, value: value, name: name, onChange: function () { return null; }, onKeyDown: this.handleInputKeyDown, ref: function (radio) { return _this.radioRef = radio; }, "aria-label": this.props["aria-label"] }),
            React.createElement("span", { className: RadioButton_st_css_1.default.icon, onMouseEnter: this.onHover, onMouseLeave: onIconBlur }, checked ? checkedIcon : uncheckedIcon),
            React.createElement("span", { className: RadioButton_st_css_1.default.label }, label)));
    };
    RadioButton.displayName = 'RadioButton';
    RadioButton.defaultProps = {
        onChange: noop,
        onHover: noop,
        onBlur: noop
    };
    return RadioButton;
}(React.Component));
exports.RadioButton = RadioButton;
//# sourceMappingURL=RadioButton.js.map

/***/ }),

/***/ 179:
/*!***********************************!*\
  !*** ./components/Rating/util.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.precisionRound = precisionRound;
exports.formatReviewsCount = formatReviewsCount;
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

function formatReviewsCount(reviewsCount) {
  if (reviewsCount < 1000) {
    return "" + reviewsCount;
  } else if (reviewsCount < 9950) {
    return precisionRound(reviewsCount / 1000, 1) + "K";
  } else if (reviewsCount < 999500) {
    return precisionRound(reviewsCount / 1000, 0) + "K";
  } else if (reviewsCount < 9950000) {
    return precisionRound(reviewsCount / 1e6, 1) + "M";
  } else {
    return precisionRound(reviewsCount / 1e6, 0) + "M";
  }
}

/***/ }),

/***/ 180:
/*!*******************************************!*\
  !*** ./components/Rating/santa-layout.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ratingsDisplayLayout = exports.ratingsDisplayLayout = function ratingsDisplayLayout(compNode, props) {
  var getElement = function getElement(dataHook) {
    return compNode.querySelector('[data-hook=\'' + dataHook + '\']');
  };

  var getWidthWithMargins = function getWidthWithMargins(elemHook) {
    var elem = getElement(elemHook);
    if (!elem) {
      return 0;
    }

    var style = window.getComputedStyle(elem);
    return parseInt(style.marginRight, 10) + elem.offsetWidth + parseInt(style.marginLeft, 10);
  };

  var getHeight = function getHeight(elemHook) {
    var elem = getElement(elemHook);
    if (!elem) {
      return 0;
    }

    // const style = window.getComputedStyle(elem);
    return elem.offsetHeight;
  };

  if (props.mode === 'display') {
    var iconsWidth = getWidthWithMargins('rating-icons');
    var iconsHeight = getHeight('rating-icons');

    var ratingWidth = getWidthWithMargins('rating-display-rating');
    var ratingHeight = getHeight('rating-display-rating');

    var reviewsCountWidth = getWidthWithMargins('rating-display-reviews-count');
    var reviewsCountHeight = getHeight('rating-display-reviews-count');

    var placeholderTextHeight = getHeight('rating-display-placeholder');

    var resultWidth = parseInt(iconsWidth, 10) + parseInt(ratingWidth, 10) + parseInt(reviewsCountWidth, 10) + 'px';
    compNode.style.minWidth = resultWidth;

    var iconsHeightVal = parseInt(iconsHeight, 10);
    var ratingHeightVal = parseInt(ratingHeight, 10);
    var reviewsCountHeightVal = parseInt(reviewsCountHeight, 10);
    var placeholderTextHeightVal = parseInt(placeholderTextHeight, 10);

    var calculatedHeight = Math.max(iconsHeightVal, ratingHeightVal, reviewsCountHeightVal, placeholderTextHeightVal);
    var resultHeight = calculatedHeight > 0 ? calculatedHeight + 'px' : '1.5em';
    compNode.style.height = resultHeight;
  } else if (props.labelPosition === 'side') {
    // input mode - labelPosition 'side'
    var additionalWidthForText = Math.min.apply(Math, _toConsumableArray(['1', '2', '3', '4', '5', 'title'].map(function (lbl) {
      return getWidthWithMargins('label_' + lbl);
    })));

    var _iconsWidth = getWidthWithMargins('rating-icons');

    compNode.style.minWidth = _iconsWidth + Math.max(15, props.shapeSpacing) + additionalWidthForText + 'px';
  } else {
    // input mode - either labelPosition 'top' or 'bottom'
    var labelsContainerWidth = getWidthWithMargins('labels-container');
    compNode.style.minWidth = labelsContainerWidth + 'px';
  }
};

/***/ }),

/***/ 181:
/*!******************************************!*\
  !*** ./components/Rating/default-svg.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSvg = undefined;

var _react = __webpack_require__(/*! react */ 0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultSvg = exports.defaultSvg = React.createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", width: "200px", height: "200px", xmlnsXlink: "http://www.w3.org/1999/xlink", xmlSpace: "preserve", viewBox: "0 0 200 200" });

/***/ }),

/***/ 182:
/*!*************************************!*\
  !*** ../node_modules/uuid/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ 183);
var v4 = __webpack_require__(/*! ./v4 */ 184);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ 183:
/*!**********************************!*\
  !*** ../node_modules/uuid/v1.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ 119);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 120);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 184:
/*!**********************************!*\
  !*** ../node_modules/uuid/v4.js ***!
  \**********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ 119);
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ 120);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


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

/***/ 241:
/*!******************************************!*\
  !*** ./components/RatingsInput/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ratingsInput = __webpack_require__(/*! ./ratingsInput */ 364);

var _Rating = __webpack_require__(/*! ../Rating/Rating */ 118);

var _RatingSt = __webpack_require__(/*! ../Rating/Rating.st.css */ 108);

var _RatingSt2 = _interopRequireDefault(_RatingSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  componentType: 'wixui.RatingsInput',
  component: _Rating.Rating,
  santaComponent: _ratingsInput.ratingsInput,
  skin: _RatingSt2.default.$skin
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

/***/ 364:
/*!*************************************************!*\
  !*** ./components/RatingsInput/ratingsInput.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ratingsInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(/*! create-react-class */ 94);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _lodash = __webpack_require__(/*! lodash */ 4);

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _santaComponents = __webpack_require__(/*! santa-components */ 70);

var _Rating = __webpack_require__(/*! ../Rating/Rating */ 118);

var _RatingSt = __webpack_require__(/*! ../Rating/Rating.st.css */ 108);

var _RatingSt2 = _interopRequireDefault(_RatingSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var skinBasedComp = _santaComponents.mixins.skinBasedComp,
    runTimeCompData = _santaComponents.mixins.runTimeCompData,
    textScaleMixin = _santaComponents.mixins.textScaleMixin,
    validatableWithSyncMixin = _santaComponents.mixins.validatableWithSyncMixin,
    compStateMixin = _santaComponents.mixins.compStateMixin;


var MOBILE_DEFAULT_FONT_SIZE = 13; //px

var getPublicState = function getPublicState(state) {
  return validatableWithSyncMixin.getPublicState(state);
};

/**
 * @class components.ratingsInput
 * @extends {core.skinBasedComp}
 */

var ratingsInput = exports.ratingsInput = (0, _createReactClass2.default)({
  displayName: 'RatingsInput',

  mixins: [skinBasedComp({
    'wixui.skins.Rating': _RatingSt2.default.$skin
  }), runTimeCompData, textScaleMixin({
    'wixui.skins.Rating': _RatingSt2.default.$skin
  }), validatableWithSyncMixin.validatableWithSync, compStateMixin(getPublicState)],

  propTypes: {
    viewMode: _santaComponents.santaTypesDefinitions.RenderFlags.componentViewMode,
    svgString: _santaComponents.santaTypesDefinitions.RawSvg.getRawSVG,
    componentPreviewState: _santaComponents.santaTypesDefinitions.RenderFlags.componentPreviewState,
    registerLayoutFunc: _santaComponents.santaTypesDefinitions.Layout.registerLayoutFunc,
    compData: _santaComponents.santaTypesDefinitions.Component.compData.isRequired,
    compProp: _santaComponents.santaTypesDefinitions.Component.compProp.isRequired,
    style: _santaComponents.santaTypesDefinitions.Component.style,
    scale: _santaComponents.santaTypesDefinitions.Component.scale,
    id: _propTypes.string,
    isMobileView: _santaComponents.santaTypesDefinitions.isMobileView
    // invalid: PropTypes.bool,
    // validityIndication: PropTypes.bool
  },

  statics: {
    compSpecificIsDomOnlyOverride: function compSpecificIsDomOnlyOverride() {
      return false;
    },

    behaviors: _lodash2.default.assign({}, validatableWithSyncMixin.VALIDATABLE_WITH_SYNC_BEHAVIORS)
  },

  getInitialState: function getInitialState() {
    return getPublicState();
  },
  UNSAFE_componentWillMount: function UNSAFE_componentWillMount() {
    // eslint-disable-line camelcase
    this.setState({
      value: this.props.compData.value || null
    });
  },
  UNSAFE_componentWillReceiveProps: function UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-line camelcase
    this.setState({ value: nextProps.compData.value });
  },
  handleIconMouseIn: function handleIconMouseIn(evt) {
    var _evt$icon = evt.icon,
        value = _evt$icon.value,
        label = _evt$icon.label;

    this.handleAction('iconMouseIn', { value: value, label: label });
  },
  handleChange: function handleChange(evt) {
    var event = evt.event,
        rating = evt.rating;


    var target = _lodash2.default.defaults({ value: rating }, event.target);
    var ev = _lodash2.default.defaults({ target: target }, event);

    this.updateData({ value: rating });
    this.setState({ value: rating });
    this.handleAction('change', ev);
  },
  handleFocus: function handleFocus() {
    this.handleAction('focus');
  },
  handleBlur: function handleBlur() {
    this.handleAction('blur');
  },
  getSkinProperties: function getSkinProperties() {
    var _this = this;

    var _props$compData = this.props.compData,
        value = _props$compData.value,
        titleText = _props$compData.titleText,
        labels = _props$compData.labels;
    var _props$compProp = this.props.compProp,
        showTitle = _props$compProp.showTitle,
        showLabels = _props$compProp.showLabels,
        labelPosition = _props$compProp.labelPosition,
        labelAlignment = _props$compProp.labelAlignment,
        direction = _props$compProp.direction,
        required = _props$compProp.required,
        isDisabled = _props$compProp.isDisabled,
        shapeSize = _props$compProp.shapeSize,
        shapeSpacing = _props$compProp.shapeSpacing;
    var _props = this.props,
        id = _props.id,
        isMobileView = _props.isMobileView;


    var compStyle = this.props.style;

    var getRating = function getRating() {
      return _this.props.viewMode === 'editor' && _lodash2.default.isNil(value) ? 3 : value;
    };

    if (isMobileView) {
      var fontStyle = {};
      var initialFontSize = parseInt(this.getFontSize('labelFont').fontSize, 10);

      fontStyle.fontSize = initialFontSize > MOBILE_DEFAULT_FONT_SIZE ? MOBILE_DEFAULT_FONT_SIZE * this.props.scale + 'px' : initialFontSize * this.props.scale + 'px';

      compStyle = Object.assign({}, this.props.style, fontStyle);
    }

    return {
      '': {
        parentConst: function parentConst(santaProps) {
          var coreProps = Object.assign({}, santaProps);
          return _react2.default.createElement(_Rating.Rating, _extends({}, coreProps, (0, _RatingSt2.default)('root', {}, coreProps)));
        },
        mode: 'input',
        rating: getRating(),
        id: id,
        rtl: direction === 'rtl',
        showTitle: showTitle,
        showLabels: showLabels && this.props.componentPreviewState !== 'error',
        shapeSize: shapeSize,
        shapeSpacing: shapeSpacing,
        textAlignment: labelAlignment,
        icon: this.props.svgString,
        required: required,
        labelPosition: isMobileView && labelPosition === 'side' ? 'top' : labelPosition,
        labels: labels,
        title: titleText,
        onIconMouseIn: this.handleIconMouseIn,
        onChange: this.handleChange,
        style: compStyle,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        disabled: isDisabled,
        shouldShowInvalid: !this.isValid() && this.shouldShowValidityIndication()
      }
    };
  }
});

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

/***/ 43:
/*!**************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/RadioButton/RadioButton.st.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/stylable-runtime/cjs/css-runtime-stylesheet.js */ 2);
var $renderer = __webpack_require__(/*! ../node_modules/stylable-runtime/cjs/css-runtime-renderer.js */ 3).$;
exports.default = $stylesheet.create(
  "root",
  "RadioButton14693577",
  {"root":"RadioButton14693577--root","icon":"RadioButton14693577--icon","label":"RadioButton14693577--label","hiddenRadio":"RadioButton14693577--hiddenRadio"},
  "",
  1,
  /*! ../node_modules/wix-ui-core/dist/src/components/RadioButton/RadioButton.st.css */ 43
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
//# sourceMappingURL=wixui.RatingsInput.chunk.js.map