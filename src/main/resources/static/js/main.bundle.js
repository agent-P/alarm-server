/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var svgNS = "http://www.w3.org/2000/svg";

/**
 *  ES_XXX - LCARS element styles
 */
var ES_SHAPE = 0x0000000F; // Mask for ES_SHAPE_XXX styles
var ES_LABEL = 0x000000F0; // Mask for ES_LABEL_XXX styles
var ES_COLOR = 0x0000FF00; // Mask for EC_XXX styles
var ES_FONT = 0x000F0000; // Mask for EF_XXX styles
var ES_BEHAVIOR = 0x0F000000; // Mask for EB_XXX styles
var ES_CLASS = 0xF0000000; // Mask for class specific styles
var ES_SELECTED = 0x00000000; // Element selected
var ES_DISABLED = 0x01000000; // Element disabled
var ES_SELDISED = 0x00000000; // Element selected and disabled
var ES_STATIC = 0x00100000; // Element does not accept user input
var ES_BLINKING = 0x00200000; // Element blinks
var ES_MODAL = 0x00400000; // Element is always opaque
var ES_SILENT = 0x00800000; // Element does not play a sound
var ES_NONE = 0x00000000; // Element does not have a style


/**
 *  ES_SHAPE_XXX - LCARS element shape orientation
 */
var ES_SHAPE_NW = 0x00000000; // Shape oriented to the north-west
var ES_SHAPE_SW = 0x00000001; // Shape oriented to the south-west
var ES_SHAPE_NE = 0x00000002; // Shape oriented to the north-east
var ES_SHAPE_SE = 0x00000004; // Shape oriented to the south-east
var ES_OUTLINE = 0x00000008; // Outline

/**
 *  ES_LABEL_XXX - LCARS element label position
 */
var ES_LABEL_SE = 0x00000010; // Label in the south-east - the default for LCARS components
var ES_LABEL_S = 0x00000020; // Label in the south
var ES_LABEL_SW = 0x00000030; // Label in the south-west
var ES_LABEL_W = 0x00000040; // Label in the west
var ES_LABEL_NW = 0x00000050; // Label in the north-west
var ES_LABEL_N = 0x00000060; // Label in the north
var ES_LABEL_NE = 0x00000070; // Label in the north-east
var ES_LABEL_E = 0x00000080; // Label in the east
var ES_LABEL_C = 0x00000090; // Label in the center

/**
 *  ES_RECT_XXX - LCARS Rectangle/Button element styles
 */
var ES_RECT_RND = 0x30000000; // Rounded rectangle shape
var ES_RECT_RND_E = 0x10000000; // Rounded rectangle shape in the east
var ES_RECT_RND_W = 0x20000000; // Rounded rectangle shape in the west

/**
 *  EC_XXX - Colors by Name
 */
var EC_WHITE = 0x00000000; //
var EC_L_BLUE = 0x00000400; //
var EC_M_BLUE = 0x00000800; //
var EC_BLUE = 0x00000C00; //
var EC_D_BLUE = 0x00001000; //
var EC_YELLOW = 0x00001400; //
var EC_ORANGE = 0x00001800;
var EC_RED = 0x00001C00;

/**
 *  EF_XXX - Fonts
 */
var EF_NORMAL = 0x00000000; // The normal LCARS font
var EF_TITLE = 0x00010000; // The title font
var EF_SUBTITLE = 0x00020000; // The subtitle font
var EF_BUTTON = 0x00030000; // The default button text font
var EF_BODY = 0x00040000; // The default body text font
var EF_TINY = 0x00050000; // A tiny font

var FONT_TITLE_SIZE = 60;
var FONT_SUBTITLE_SIZE = 40;
var FONT_BUTTON_SIZE = 25;
var FONT_BODY_SIZE = 20;
var FONT_TINY_SIZE = 10;

var LCARS_FONT = "Arial Narrow";
var LCARS_FONT_MOBILE = "Avenir Next Condensed Medium";
var LCARS_CHAR_SIZE_ARRAY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 26, 46, 63, 42, 105, 45, 20, 25, 25, 47, 39, 21, 34, 26, 36, 36, 28, 36, 36, 36, 36, 36, 36, 36, 36, 27, 27, 36, 35, 36, 35, 65, 42, 43, 42, 44, 35, 34, 43, 46, 25, 39, 40, 31, 59, 47, 43, 41, 43, 44, 39, 28, 44, 43, 65, 37, 39, 34, 37, 42, 37, 50, 37, 32, 43, 43, 39, 43, 40, 30, 42, 45, 23, 25, 39, 23, 67, 45, 41, 43, 42, 30, 40, 28, 45, 33, 52, 33, 36, 31, 39, 26, 39, 55];

/**
 * Keypad Class Styles
 */
var EKP_AUX_KEYS = 0x40000000;

/**
 * Key pad constants
 */
var KP_BUTTON_X_OFFSET = 175;
var KP_BUTTON_Y_OFFSET = 100;
var KP_BUTTON_X_SPACE = 25;
var KP_BUTTON_Y_SPACE = 40;

var TEXT_Y_INSET = 10;
var TEXT_X_INSET = 20;

var LCARS_BTN_HEIGHT = 60;
var LCARS_BTN_WIDTH = 150;
var LCARS_BTN_SPACING = 5;
var LCARS_SPACE = 5;
var LCARS_CORNER_HEIGHT = 92;

var SHAPE_SUFFIX = "_shape";
var TEXT_SUFFIX = "_text";
var AUX_TEXT_SUFFIX = "_aux_text";

var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var MONTHS = ["\x00", /** substitution token to support parsing */
"January", /** MONTHS[1] = "January" */
"February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var MONTHS_ABBREVIATED = ["\x01", /** substitution token to support parsing */
"Jan", /** MONTHS_ABBREVIATED[1] = "Jan" */
"Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var DAYS_OF_WEEK = ["\x02", /** substitution token to support parsing */
"Sunday", /** DAYS_OF_WEEK[1] = "Sunday" */
"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var DAYS_OF_WEEK_ABBREVIATED = ["\x03", /** substitution token to support parsing */
"Sun", /** DAYS_OF_WEEK_ABBREVIATED[1] = "Sunday" */
"Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var BLINK_DURATION_ERROR = "0.5s";
var BLINK_DURATION_WARNING = "0.75s";

var lcarsFont = "";

/**
 * The base class for all of the non component specific functionality.
 *
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-17
 */

var LCARS = exports.LCARS = function () {
    function LCARS() {
        _classCallCheck(this, LCARS);
    }

    /**
     * Derive the LCARS color from the LCARS properties variable.
     * <p>
     * Masks the <code>properties</code> paramenter for <code>ES_COLOR</code>, and
     * returns the color value for the color property. The eight (8) color options are:
     * <ul>
     * <li> white:       #CCDDFF
     * <li> light blue:  #5599FF
     * <li> medium blue: #3366FF
     * <li> blue:        #0011EE
     * <li> dark blue:   #000088
     * <li> yellow:      #CCA300
     * <li> orange:      #CC6600
     * <li> red:         #A30000
     * </ul>
     *
     * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
     * @return the color value for the color property specified in the LCARS <code>properties</code> paramenter.
     */


    _createClass(LCARS, null, [{
        key: "getColor",
        value: function getColor(properties) {
            var color = "";

            switch (properties & ES_COLOR) {
                case EC_WHITE:
                    return "#CCDDFF";
                case EC_L_BLUE:
                    return "#5599FF";
                case EC_M_BLUE:
                    return "#3366FF";
                case EC_BLUE:
                    return "#0011EE";
                case EC_D_BLUE:
                    return "#000088";
                case EC_YELLOW:
                    return "#CCA300";
                case EC_ORANGE:
                    return "#CC6600";
                case EC_RED:
                    return "#A30000";
                default:
                    break;
            }

            return color;
        }

        /**
         * Derive the LCARS text color from the LCARS properties variable.
         * <p>
         * Masks the <code>properties</code> paramenter for <code>ES_COLOR</code>, and
         * returns the text color value for the color property. The eight (8) color options are:
         * <ul>
         * <li> white:       #CCDDFF
         * <li> light blue:  #5599FF
         * <li> medium blue: #3366FF
         * <li> blue:        #0011EE
         * <li> dark blue:   #000088
         * <li> yellow:      #CCA300
         * <li> orange:      #CC6600
         * <li> red:         #A30000
         * </ul>
         *
         * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
         * @return the text color value for the color property specified in the LCARS <code>properties</code> paramenter.
         */

    }, {
        key: "getTextColor",
        value: function getTextColor(properties) {

            switch (properties & ES_COLOR) {
                case EC_BLUE:
                case EC_D_BLUE:
                case EC_RED:
                    return "#CCDDFF";
                case EC_WHITE:
                case EC_YELLOW:
                case EC_ORANGE:
                case EC_L_BLUE:
                case EC_M_BLUE:
                default:
                    return "#000000";
            }
        }

        /**
         * Simple setter for setting the LCARS font to the font specified by the
         * argument.
         *
         * @param font the font to set as the LCARS font
         */

    }, {
        key: "setFont",
        value: function setFont(font) {
            lcarsFont = font;
        }

        /**
         * Simple getter for getting the LCARS font.
         *
         * @return the font that was set as the LCARS font
         */

    }, {
        key: "getFont",
        value: function getFont() {
            return lcarsFont;
        }

        /**
         * Derive the LCARS font size from the LCARS properties variable.
         * <p>
         * Masks the <code>properties</code> paramenter for <code>ES_FONT</code>, and
         * returns the font size value for the font size property.
         *
         * @param properties The composite variable that contains all of the LCARS properties of an LCARS component.
         * @return the color value for the color property specified in the LCARS <code>properties</code> paramenter.
         */

    }, {
        key: "getLCARSFontSize",
        value: function getLCARSFontSize(properties) {
            switch (properties & ES_FONT) {
                case EF_TITLE:
                    return FONT_TITLE_SIZE;
                case EF_SUBTITLE:
                    return FONT_SUBTITLE_SIZE;
                case EF_BUTTON:
                    return FONT_BUTTON_SIZE;
                case EF_TINY:
                    return FONT_TINY_SIZE;
                case EF_BODY:
                default:
                    return FONT_BODY_SIZE;
            }
        }

        /**
         * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
         *
         * @param {String} text The text to be rendered.
         * @param {String} font The css font descriptor that text is to be rendered with (e.g. "Arial Narrow").
         * @return the width of the <code>text</code> argument in context of the <code>font</code> argument.
         */

    }, {
        key: "getTextWidth",
        value: function getTextWidth(text, font) {
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            context.font = font;
            var metrics = context.measureText(text);
            return metrics.width;
        }

        /**
         * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
         * Calls <code>LCARS.getTextWidth()</code> for each character of the String argument <code>text</code>,
         * and returns the sum of the length of the characters.
         *
         * @param {String} text The text to be rendered.
         * @param {String} font The css font descriptor that text is to be rendered with (e.g. "Arial Narrow").
         * @return the width of the <code>text</code> argument in context of the <code>font</code> argument.
         */

    }, {
        key: "getTextWidth2",
        value: function getTextWidth2(text, font) {
            var width = 0;

            for (var i = 0; i < text.length; i++) {
                width += LCARS.getTextWidth(text.charAt(i), font);
            }

            return width;
        }
    }, {
        key: "getTextWidth3",
        value: function getTextWidth3(text, fontSize) {
            var width = 0;
            var scaleFactor = fontSize / 100;

            for (var i = 0; i < text.length; i++) {
                width = width + LCARS_CHAR_SIZE_ARRAY[text.charCodeAt(i)];
            }

            return width * scaleFactor;
        }
    }, {
        key: "svgNS",
        get: function get() {
            return svgNS;
        }
    }, {
        key: "ES_SHAPE",
        get: function get() {
            return ES_SHAPE;
        }
    }, {
        key: "ES_LABEL",
        get: function get() {
            return ES_LABEL;
        }
    }, {
        key: "ES_COLOR",
        get: function get() {
            return ES_COLOR;
        }
    }, {
        key: "ES_FONT",
        get: function get() {
            return ES_FONT;
        }
    }, {
        key: "ES_BEHAVIOR",
        get: function get() {
            return ES_BEHAVIOR;
        }
    }, {
        key: "ES_CLASS",
        get: function get() {
            return ES_CLASS;
        }
    }, {
        key: "ES_SELECTED",
        get: function get() {
            return ES_SELECTED;
        }
    }, {
        key: "ES_DISABLED",
        get: function get() {
            return ES_DISABLED;
        }
    }, {
        key: "ES_SELDISED",
        get: function get() {
            return ES_SELDISED;
        }
    }, {
        key: "ES_STATIC",
        get: function get() {
            return ES_STATIC;
        }
    }, {
        key: "ES_BLINKING",
        get: function get() {
            return ES_BLINKING;
        }
    }, {
        key: "ES_MODAL",
        get: function get() {
            return ES_MODAL;
        }
    }, {
        key: "ES_SILENT",
        get: function get() {
            return ES_SILENT;
        }
    }, {
        key: "ES_NONE",
        get: function get() {
            return ES_NONE;
        }
    }, {
        key: "ES_SHAPE_NW",
        get: function get() {
            return ES_SHAPE_NW;
        }
    }, {
        key: "ES_SHAPE_SW",
        get: function get() {
            return ES_SHAPE_SW;
        }
    }, {
        key: "ES_SHAPE_NE",
        get: function get() {
            return ES_SHAPE_NE;
        }
    }, {
        key: "ES_SHAPE_SE",
        get: function get() {
            return ES_SHAPE_SE;
        }
    }, {
        key: "ES_OUTLINE",
        get: function get() {
            return ES_OUTLINE;
        }
    }, {
        key: "ES_LABEL_SE",
        get: function get() {
            return ES_LABEL_SE;
        }
    }, {
        key: "ES_LABEL_S",
        get: function get() {
            return ES_LABEL_S;
        }
    }, {
        key: "ES_LABEL_SW",
        get: function get() {
            return ES_LABEL_SW;
        }
    }, {
        key: "ES_LABEL_W",
        get: function get() {
            return ES_LABEL_W;
        }
    }, {
        key: "ES_LABEL_NW",
        get: function get() {
            return ES_LABEL_NW;
        }
    }, {
        key: "ES_LABEL_N",
        get: function get() {
            return ES_LABEL_N;
        }
    }, {
        key: "ES_LABEL_NE",
        get: function get() {
            return ES_LABEL_NE;
        }
    }, {
        key: "ES_LABEL_E",
        get: function get() {
            return ES_LABEL_E;
        }
    }, {
        key: "ES_LABEL_C",
        get: function get() {
            return ES_LABEL_C;
        }
    }, {
        key: "ES_RECT_RND",
        get: function get() {
            return ES_RECT_RND;
        }
    }, {
        key: "ES_RECT_RND_E",
        get: function get() {
            return ES_RECT_RND_E;
        }
    }, {
        key: "ES_RECT_RND_W",
        get: function get() {
            return ES_RECT_RND_W;
        }
    }, {
        key: "EC_WHITE",
        get: function get() {
            return EC_WHITE;
        }
    }, {
        key: "EC_L_BLUE",
        get: function get() {
            return EC_L_BLUE;
        }
    }, {
        key: "EC_M_BLUE",
        get: function get() {
            return EC_M_BLUE;
        }
    }, {
        key: "EC_BLUE",
        get: function get() {
            return EC_BLUE;
        }
    }, {
        key: "EC_D_BLUE",
        get: function get() {
            return EC_D_BLUE;
        }
    }, {
        key: "EC_YELLOW",
        get: function get() {
            return EC_YELLOW;
        }
    }, {
        key: "EC_ORANGE",
        get: function get() {
            return EC_ORANGE;
        }
    }, {
        key: "EC_RED",
        get: function get() {
            return EC_RED;
        }
    }, {
        key: "EF_NORMAL",
        get: function get() {
            return EF_NORMAL;
        }
    }, {
        key: "EF_TITLE",
        get: function get() {
            return EF_TITLE;
        }
    }, {
        key: "EF_SUBTITLE",
        get: function get() {
            return EF_SUBTITLE;
        }
    }, {
        key: "EF_BUTTON",
        get: function get() {
            return EF_BUTTON;
        }
    }, {
        key: "EF_BODY",
        get: function get() {
            return EF_BODY;
        }
    }, {
        key: "EF_TINY",
        get: function get() {
            return EF_TINY;
        }
    }, {
        key: "FONT_TITLE_SIZE",
        get: function get() {
            return FONT_TITLE_SIZE;
        }
    }, {
        key: "FONT_SUBTITLE_SIZE",
        get: function get() {
            return FONT_SUBTITLE_SIZE;
        }
    }, {
        key: "FONT_BUTTON_SIZE",
        get: function get() {
            return FONT_BUTTON_SIZE;
        }
    }, {
        key: "FONT_BODY_SIZE",
        get: function get() {
            return FONT_BODY_SIZE;
        }
    }, {
        key: "FONT_TINY_SIZE",
        get: function get() {
            return FONT_TINY_SIZE;
        }
    }, {
        key: "LCARS_FONT",
        get: function get() {
            return LCARS_FONT;
        }
    }, {
        key: "LCARS_FONT_MOBILE",
        get: function get() {
            return LCARS_FONT_MOBILE;
        }
    }, {
        key: "EKP_AUX_KEYS",
        get: function get() {
            return EKP_AUX_KEYS;
        }
    }, {
        key: "KP_BUTTON_X_OFFSET",
        get: function get() {
            return KP_BUTTON_X_OFFSET;
        }
    }, {
        key: "KP_BUTTON_Y_OFFSET",
        get: function get() {
            return KP_BUTTON_Y_OFFSET;
        }
    }, {
        key: "KP_BUTTON_X_SPACE",
        get: function get() {
            return KP_BUTTON_X_SPACE;
        }
    }, {
        key: "KP_BUTTON_Y_SPACE",
        get: function get() {
            return KP_BUTTON_Y_SPACE;
        }
    }, {
        key: "TEXT_Y_INSET",
        get: function get() {
            return TEXT_Y_INSET;
        }
    }, {
        key: "TEXT_X_INSET",
        get: function get() {
            return TEXT_X_INSET;
        }
    }, {
        key: "LCARS_BTN_HEIGHT",
        get: function get() {
            return LCARS_BTN_HEIGHT;
        }
    }, {
        key: "LCARS_BTN_WIDTH",
        get: function get() {
            return LCARS_BTN_WIDTH;
        }
    }, {
        key: "LCARS_BTN_SPACING",
        get: function get() {
            return LCARS_BTN_SPACING;
        }
    }, {
        key: "LCARS_SPACE",
        get: function get() {
            return LCARS_SPACE;
        }
    }, {
        key: "LCARS_CORNER_HEIGHT",
        get: function get() {
            return LCARS_CORNER_HEIGHT;
        }
    }, {
        key: "BLINK_DURATION_ERROR",
        get: function get() {
            return BLINK_DURATION_ERROR;
        }
    }, {
        key: "BLINK_DURATION_WARNING",
        get: function get() {
            return BLINK_DURATION_WARNING;
        }
    }, {
        key: "MONTHS",
        get: function get() {
            return MONTHS;
        }
    }, {
        key: "MONTHS_ABBREVIATED",
        get: function get() {
            return MONTHS_ABBREVIATED;
        }
    }, {
        key: "DAYS",
        get: function get() {
            return DAYS;
        }
    }, {
        key: "DAYS_OF_WEEK",
        get: function get() {
            return DAYS_OF_WEEK;
        }
    }, {
        key: "DAYS_OF_WEEK_ABBREVIATED",
        get: function get() {
            return DAYS_OF_WEEK_ABBREVIATED;
        }
    }, {
        key: "SHAPE_SUFFIX",
        get: function get() {
            return SHAPE_SUFFIX;
        }
    }, {
        key: "TEXT_SUFFIX",
        get: function get() {
            return TEXT_SUFFIX;
        }
    }, {
        key: "AUX_TEXT_SUFFIX",
        get: function get() {
            return AUX_TEXT_SUFFIX;
        }
    }]);

    return LCARS;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LCARSEllipsisSpinner = exports.LCARSCalendar = exports.LCARSClock = exports.LCARSClockAnalog = exports.LCARSKeypad = exports.LCARSTextArea = exports.LCARSText = exports.LCARSButton = exports.LCARSIcon = exports.LCARSIndicator = exports.LCARSRectangle = exports.LCARSCorner = exports.LCARSComponent = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * LCARSComponent class
 */
var LCARSComponent = exports.LCARSComponent = function () {
    function LCARSComponent(id, label, x, y, properties) {
        _classCallCheck(this, LCARSComponent);

        this.composite = false;
        this.id = id;
        this.label = label;
        this.x = x;
        this.y = y;
        this.properties = properties;
        this.static = properties & _LCARS.LCARS.ES_STATIC;
        this.blinking = properties & _LCARS.LCARS.ES_BLINKING;
        this.color = this.getColor();
        this.overColor = this.getOverColor();
        this.downColor = this.getDownColor();
        this.textColor = this.getTextColor();
        this.fontSize = _LCARS.LCARS.getLCARSFontSize(this.properties);

        this.element = document.createElementNS(_LCARS.LCARS.svgNS, "g");
        this.element.setAttribute("id", this.id);
        this.element.setAttribute("x", 0);
        this.element.setAttribute("y", 0);
        this.element.setAttribute("transform", 'translate(' + x + ',' + y + ')');

        this.shapeElement = document.createElementNS(_LCARS.LCARS.svgNS, "path");
        this.textElement = document.createElementNS(_LCARS.LCARS.svgNS, "text");

        /** Create the DOM object for shape animation, and set its attributes. */
        this.animateElement = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        this.animateElement.setAttribute("id", this.element.id + "_shapeAnimate");
        this.animateElement.setAttribute("attributeType", "XML");
        this.animateElement.setAttribute("attributeName", "fill");
        this.animateElement.setAttribute("repeatCount", "indefinite");

        /** Create the DOM object for the shape's text animation, and set its attributes. */
        this.textAnimateElement = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        this.textAnimateElement.setAttribute("id", this.element.id + "_textAnimate");
        this.textAnimateElement.setAttribute("attributeType", "XML");
        this.textAnimateElement.setAttribute("attributeName", "fill");
        this.textAnimateElement.setAttribute("repeatCount", "indefinite");

        /** Set the component's dynamics. */
        this.setComponentDynamics();
    }

    _createClass(LCARSComponent, [{
        key: "getElement",
        value: function getElement() {
            return this.element;
        }
    }, {
        key: "getShapeElement",
        value: function getShapeElement() {
            return this.shapeElement;
        }
    }, {
        key: "getTextElement",
        value: function getTextElement() {
            return this.textElement;
        }
    }, {
        key: "addEventListener",
        value: function addEventListener(event, callback) {
            this.element.addEventListener(event, callback, false);
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _LCARS.LCARS.getColor(this.properties);
        }
    }, {
        key: "getTextColor",
        value: function getTextColor() {

            switch (this.properties & _LCARS.LCARS.ES_COLOR) {
                case _LCARS.LCARS.EC_BLUE:
                case _LCARS.LCARS.EC_D_BLUE:
                case _LCARS.LCARS.EC_RED:
                    return "#CCDDFF";
                case _LCARS.LCARS.EC_WHITE:
                case _LCARS.LCARS.EC_YELLOW:
                case _LCARS.LCARS.EC_ORANGE:
                case _LCARS.LCARS.EC_L_BLUE:
                case _LCARS.LCARS.EC_M_BLUE:
                default:
                    return "#000000";
            }
        }
    }, {
        key: "getOverColor",
        value: function getOverColor(overrideColor) {
            var defaultReturn = "";
            var color;

            if (overrideColor == null) {
                color = this.properties & _LCARS.LCARS.ES_COLOR;
            } else {
                color = overrideColor;
            }

            switch (color) {
                case _LCARS.LCARS.EC_WHITE:
                    return "#FFFFFF";
                case _LCARS.LCARS.EC_L_BLUE:
                    return "#77ADFF";
                case _LCARS.LCARS.EC_M_BLUE:
                    return "#5C85FF";
                case _LCARS.LCARS.EC_BLUE:
                    return "#3341F1";
                case _LCARS.LCARS.EC_D_BLUE:
                    return "#3333A0";
                case _LCARS.LCARS.EC_YELLOW:
                    return "#D6B533";
                case _LCARS.LCARS.EC_ORANGE:
                    return "#D68533";
                case _LCARS.LCARS.EC_RED:
                    return "#B53333";
                default:
                    break;
            }

            return defaultReturn;
        }
    }, {
        key: "getDownColor",
        value: function getDownColor(overrideColor) {
            var defaultReturn = "";
            var color;

            if (overrideColor == null) {
                color = this.properties & _LCARS.LCARS.ES_COLOR;
            } else {
                color = overrideColor;
            }

            switch (color) {
                case _LCARS.LCARS.EC_WHITE:
                    return "#B8C7E6";
                case _LCARS.LCARS.EC_L_BLUE:
                    return "#447ACC";
                case _LCARS.LCARS.EC_M_BLUE:
                    return "#2952CC";
                case _LCARS.LCARS.EC_BLUE:
                    return "#000EBE";
                case _LCARS.LCARS.EC_D_BLUE:
                    return "#00006D";
                case _LCARS.LCARS.EC_YELLOW:
                    return "#A38200";
                case _LCARS.LCARS.EC_ORANGE:
                    return "#A35200";
                case _LCARS.LCARS.EC_RED:
                    return "#820000";
                default:
                    break;
            }

            return defaultReturn;
        }

        /**
         * Method to create a string of color values from dark to light derived from the
         * LCARS color palette. I uses the Down color, the normal color, and the Over
         * color in that order.
         *
         * @param color the color to derive the string of colors from
         * @return the string of color values
         */

    }, {
        key: "getBlinkColors",
        value: function getBlinkColors(color) {

            if (color == null) {
                color = this.properties & _LCARS.LCARS.ES_COLOR;
            }

            var colorString = "#000;" + this.getDownColor(color) + ";" + _LCARS.LCARS.getColor(color) + ";" + this.getOverColor(color);

            return colorString;
        }

        /**
         * Method to set the visual dynamics of the component. If the component's <code>LCARS.ES_STATIC</code>
         * property is not set, the following dynamics are covered:
         * <ul>
         * <li> <code>onmouseover</code>
         * <li> <code>onmousedown</code>
         * <li> <code>onmouseup</code>
         * <li> <code>onmouseout</code>
         * </ul>
         */

    }, {
        key: "setComponentDynamics",
        value: function setComponentDynamics() {
            if (this.static != _LCARS.LCARS.ES_STATIC) {
                this.shapeElement.setAttribute("onmouseover", "evt.target.setAttribute('fill','" + this.overColor + "')");
                this.shapeElement.setAttribute("onmouseout", "evt.target.setAttribute('fill','" + this.color + "')");

                this.shapeElement.setAttribute("onclick", "evt.target.setAttribute('fill','" + this.downColor + "'); " + "setTimeout(function(){evt.target.setAttribute('fill','" + this.color + "')}, 250)");
            }

            if (this.blinking) {
                this.setBlinking(true);
            }
        }
    }, {
        key: "getTextX",
        value: function getTextX() {
            var x = 0;

            switch (this.properties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    x = this.width / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    x = _LCARS.LCARS.TEXT_X_INSET;
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    x = this.width - _LCARS.LCARS.TEXT_X_INSET;
                    break;
            }

            return x;
        }
    }, {
        key: "getTextY",
        value: function getTextY() {
            var y = 0;

            switch (this.properties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_E:
                    y = this.height / 2 + _LCARS.LCARS.FONT_BUTTON_SIZE / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_NW:
                case _LCARS.LCARS.ES_LABEL_N:
                case _LCARS.LCARS.ES_LABEL_NE:
                    y = _LCARS.LCARS.FONT_BUTTON_SIZE;
                    break;
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    y = this.height - _LCARS.LCARS.TEXT_Y_INSET;
                    break;
            }

            return y;
        }
    }, {
        key: "getTextAnchor",
        value: function getTextAnchor() {
            var textAnchor = "";

            switch (this.properties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    textAnchor = "middle";
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    textAnchor = "start";
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    textAnchor = "end";
                    break;
            }

            return textAnchor;
        }
    }, {
        key: "drawShape",
        value: function drawShape() {
            var rectString = "M0,0";

            var westEndString;
            var eastEndString;
            var northString = " l";
            var southString = " l-";

            var hLength;

            var rectType = this.properties & _LCARS.LCARS.ES_RECT_RND;

            /** Create West end string. */
            switch (rectType) {
                case _LCARS.LCARS.ES_RECT_RND:
                case _LCARS.LCARS.ES_RECT_RND_W:
                    westEndString = " m" + this.height / 2 + "," + this.height + " c-" + this.height * .65 + ",0 -" + this.height * .65 + ",-" + this.height + " 0,-" + this.height;
                    break;
                case _LCARS.LCARS.ES_RECT_RND_E:
                default:
                    westEndString = " m0," + this.height + " l0,-" + this.height;
                    break;
            }

            /** Create the North and South edge strings. */
            switch (rectType) {
                case _LCARS.LCARS.ES_RECT_RND:
                    hLength = this.width - this.height;
                    break;
                case _LCARS.LCARS.ES_RECT_RND_E:
                case _LCARS.LCARS.ES_RECT_RND_W:
                    hLength = this.width - this.height / 2;
                    break;
                default:
                    hLength = this.width;
                    break;
            }
            northString += hLength + ",0";
            southString += hLength + ",0";

            /** Create the East end string */
            switch (rectType) {
                case _LCARS.LCARS.ES_RECT_RND:
                case _LCARS.LCARS.ES_RECT_RND_E:
                    eastEndString = " c" + this.height * .65 + ",0 " + this.height * .65 + "," + this.height + " 0," + this.height;
                    break;
                case _LCARS.LCARS.ES_RECT_RND_W:
                default:
                    eastEndString = " l0," + this.height;
                    break;
            }

            /** Create the rectangle path string. */
            rectString += westEndString + northString + eastEndString + southString;

            /** Create the DOM object, and set its attributes. */
            this.shapeElement.setAttribute("d", rectString);
            this.setShapeAttributes();

            this.element.appendChild(this.shapeElement);
        }
    }, {
        key: "setPosition",
        value: function setPosition(x, y) {
            this.element.setAttribute("transform", 'translate(' + x + ',' + y + ')');
        }
    }, {
        key: "setShapeAttributes",
        value: function setShapeAttributes() {
            this.shapeElement.setAttribute("id", this.id + _LCARS.LCARS.SHAPE_SUFFIX);
            this.shapeElement.setAttribute("fill", this.color);
            if (this.properties & _LCARS.LCARS.ES_DISABLED) {
                this.shapeElement.setAttribute("stroke", this.color);
                this.shapeElement.setAttribute("stroke-width", '2');
                this.shapeElement.setAttribute("fill-opacity", '0.1');
            } else {
                this.shapeElement.setAttribute("fill-opacity", '1.0');
            }
        }
    }, {
        key: "setEnabled",
        value: function setEnabled(enabled) {
            if (enabled) {
                this.element.setAttribute("pointer-events", "all");
                this.shapeElement.setAttribute("fill-opacity", '1.0');
                this.shapeElement.setAttribute("stroke-width", '0');
                this.textElement.setAttribute("fill", this.textColor);
            } else {
                this.element.setAttribute("pointer-events", "none");
                this.shapeElement.setAttribute("stroke", this.color);
                this.shapeElement.setAttribute("stroke-width", '2');
                this.shapeElement.setAttribute("fill-opacity", '0.1');
                this.textElement.setAttribute("fill", '#585858');
            }
        }

        /**
         * Method to turn blinking on and off for the component. If the <code>enabled</code> argument
         * is <code>true</code>, it creates SVG shape and text animations for the component. Component
         * color and blink animation duration can be set. If left blank or specified as null, default
         * color and animation duration will be used.
         * <p>Color must be set using the LCARS palette constants, not specific color values. Duration
         * can be set using one of two constants <code>BLINK_DURATION_ERROR</code> or
         * <code>BLINK_DURATION_WARNING</code>, or it can be set to an arbitrary value using the form
         * <code>"0.0s"</code>. Note that the "s" suffix stands for seconds.
         *
         * @param enabled <code>true</code> if blinking is enabled, <code>false</code> if not
         * @param color the color to blink the component, default component color if null
         * @param duration the duration of the blink animation in the form <code>"0.0s"</code>, the "s" is for seconds, default if null
         */

    }, {
        key: "setBlinking",
        value: function setBlinking(enabled, color, duration) {
            /* If the duration argument is null, set a default blink duration. */
            if (duration == null) {
                duration = _LCARS.LCARS.BLINK_DURATION_WARNING;
            }

            /* If blinking is enabled... */
            if (enabled) {
                /* Update the DOM object for shape animation, with color and duration attributes. */
                this.animateElement.setAttribute("values", this.getBlinkColors(color));
                this.animateElement.setAttribute("dur", duration);
                /* Append the animation element to the shape element. */
                this.shapeElement.appendChild(this.animateElement);

                /* Update the DOM object for the shape's text animation, with color and duration attributes. */
                this.textAnimateElement.setAttribute("values", "#000;" + _LCARS.LCARS.getTextColor(color));
                this.textAnimateElement.setAttribute("dur", duration);
                /* Append the animation element to the text element. */
                this.textElement.appendChild(this.textAnimateElement);
            }
            /* Else if blinking is not enabled... */
            else {
                    /* If the shape animate element exists, remove it. */
                    if (this.animateElement != null) {
                        this.animateElement.remove();
                    }
                    /* If the text animate element exists, remove it. */
                    if (this.textAnimateElement != null) {
                        this.textAnimateElement.remove();
                    }
                }
        }

        /**
         * Method to blink a visible LCARS component "off" (make invisible) for 0.1 seconds.
         * Used for things like activity indicators.
         */

    }, {
        key: "offBlink",
        value: function offBlink(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }

            var thisObject = this;
            thisObject.setVisible(false);
            setTimeout(function () {
                thisObject.setVisible(true);
            }, duration);
        }

        /**
         * Method to blink an invisible LCARS component "on" (make visible) for 0.1 seconds.
         * Used for things like activity indicators.
         */

    }, {
        key: "onBlink",
        value: function onBlink(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }

            var thisObject = this;
            thisObject.setVisible(true);
            setTimeout(function () {
                thisObject.setVisible(false);
            }, duration);
        }

        /**
         * Method to blink an enabled LCARS component "off" (make disabled) for 0.1 seconds.
         * Used for things like activity indicators.
         */

    }, {
        key: "offBlinkOutline",
        value: function offBlinkOutline(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }

            var thisObject = this;
            thisObject.setEnabled(false);
            setTimeout(function () {
                thisObject.setEnabled(true);
            }, duration);
        }

        /**
         * Method to blink a disabled LCARS component "on" (make enabled) for 0.1 seconds.
         * Used for things like activity indicators.
         */

    }, {
        key: "onBlinkOutline",
        value: function onBlinkOutline(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }

            var thisObject = this;
            thisObject.setEnabled(true);
            setTimeout(function () {
                thisObject.setEnabled(false);
            }, duration);
        }

        /**
         * Method to draw the text of the LCARS component, if any. The text element is created
         * in the constructor. This method simply sets the text attributes, and the
         * component label specified in the constructor. It then appends the text element
         * to the parent SVG element.
         */

    }, {
        key: "drawText",
        value: function drawText() {
            this.setTextAttributes();
            this.setText(this.label);

            this.element.appendChild(this.textElement);
        }

        /**
         * Method to se the text attributes of the LCARS component. The text element is created
         * in the constructor. This method simply sets the text attributes that are specified
         * in the constructor. The attributes being set are:
         * <ul>
         * <li> component id</li>
         * <li> x coordinate</li>
         * <li> x coordinate</li>
         * <li> text anchor location</li>
         * <li> fill color dependent on enable/disable status of the component</li>
         * <li> font family</li>
         * <li> font size</li>
         * <li> pointer events, text elements do not respond to pointer events</li>
         * </ul>
         */

    }, {
        key: "setTextAttributes",
        value: function setTextAttributes() {
            this.textElement.setAttribute("id", this.id + _LCARS.LCARS.TEXT_SUFFIX);
            this.textElement.setAttribute("x", this.getTextX());
            this.textElement.setAttribute("y", this.getTextY());
            this.textElement.setAttribute("text-anchor", this.getTextAnchor());
            if (this.properties & _LCARS.LCARS.ES_DISABLED) {
                this.textElement.setAttribute("fill", '#585858');
            } else {
                this.textElement.setAttribute("fill", this.textColor);
            }
            this.textElement.setAttribute("font-family", _LCARS.LCARS.getFont());
            this.textElement.setAttribute("font-size", this.fontSize);
            this.textElement.setAttribute("pointer-events", "none");
        }

        /**
         * Method to set the LCARS component's text element to the string specified by the argument.
         *
         * @param textString the text to set for the component
         */

    }, {
        key: "setText",
        value: function setText(textString) {
            this.textElement.textContent = textString;
        }

        /**
         * Method to set the LCARS component's text element's font size to the size specified by the argument.
         * It also sets the object's <code>fontSize</code> attribute.
         *
         * @param textFontSize the font size to set for the component's text element
         */

    }, {
        key: "setTextFontSize",
        value: function setTextFontSize(textFontSize) {
            this.fontSize = textFontSize;
            this.textElement.setAttribute("font-size", this.fontSize);
        }

        /**
         * Method to control the visibility of the LCARS component. If the argument is set to
         * <code>false</code>, the component will be invisible. If <code>true</code>, the
         * component will be visible.
         *
         * @param visible visible, if <code>true</code>, invisible, if <code>false</code>
         */

    }, {
        key: "setVisible",
        value: function setVisible(visible) {
            if (visible) {
                this.element.setAttributeNS(null, 'display', 'inline');
            } else {
                this.element.setAttributeNS(null, 'display', 'none');
            }
        }
    }, {
        key: "setIcon",
        value: function setIcon(svgString) {
            this.iconScale = " scale(1.5) ";
            this.iconElement = document.createElementNS(_LCARS.LCARS.svgNS, "path");

            this.iconElement.setAttribute("d", svgString);
            this.iconElement.setAttribute("transform", "scale(1.75)");
            this.iconElement.setAttribute("fill", this.getTextColor());

            this.element.appendChild(this.iconElement);
        }
    }, {
        key: "setIconColor",
        value: function setIconColor(color) {
            this.iconElement.setAttribute("fill", _LCARS.LCARS.getColor(color));
        }
    }, {
        key: "setIconPosition",
        value: function setIconPosition(location) {
            this.iconTranslate = " translate(" + this.getIconX(location) + "," + this.getIconY(location) + ") ";
            this.iconElement.setAttribute("transform", this.iconTranslate + this.iconScale);
        }
    }, {
        key: "getIconX",
        value: function getIconX(location) {
            var x = 0;

            switch (location & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    x = this.width / 2 - 24 * 1.5 / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    x = 24 * 1.5 / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    x = this.width - (24 * 1.5 + 24 * 1.5 / 2);
                    break;
            }

            return x;
        }
    }, {
        key: "getIconY",
        value: function getIconY(location) {
            var y = 0;

            switch (location & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_NW:
                case _LCARS.LCARS.ES_LABEL_N:
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    y = this.height / 2 - 24 * 1.5 / 2;
                    break;
            }

            return y;
        }
    }]);

    return LCARSComponent;
}();

/**
 * LCARSCorner component
 */


var LCARSCorner = exports.LCARSCorner = function (_LCARSComponent) {
    _inherits(LCARSCorner, _LCARSComponent);

    function LCARSCorner(name, label, x, y, width, height, properties) {
        _classCallCheck(this, LCARSCorner);

        var _this = _possibleConstructorReturn(this, (LCARSCorner.__proto__ || Object.getPrototypeOf(LCARSCorner)).call(this, name, label, x, y, properties));

        _this.width = width;
        _this.height = _LCARS.LCARS.LCARS_CORNER_HEIGHT + (height - 1 < 0 ? 0 : height - 1) * _LCARS.LCARS.LCARS_BTN_HEIGHT + (height - 1 < 0 ? 0 : height - 1) * _LCARS.LCARS.LCARS_BTN_SPACING;
        _this.shape = properties & _LCARS.LCARS.ES_SHAPE;

        if ((_this.properties & _LCARS.LCARS.ES_FONT) == _LCARS.LCARS.EF_NORMAL) {
            _this.fontSize = _LCARS.LCARS.FONT_BUTTON_SIZE; // the default font for corner components
        }
        _this.drawShape();
        _this.drawText();

        return _this;
    }

    _createClass(LCARSCorner, [{
        key: "drawShape",
        value: function drawShape() {
            var pathString = "M0,0";
            var armStringW = this.width - 185 + ",0 l0,30 l-" + (this.width - 185);
            var armStringE = this.width - 185 + ",0 l0,-30 l" + (this.width - 185);
            var sideStringT = " l0," + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT) + " l-150,0 l0,-" + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT);
            var sideStringB = " l0,-" + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT) + " l150,0 l0," + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT);

            if (this.shape == _LCARS.LCARS.ES_SHAPE_NW) {
                pathString += " m150," + _LCARS.LCARS.LCARS_CORNER_HEIGHT + sideStringT + " l0,-17 q0,-75 75,-75 l110,0 l" + armStringW + ",0 q-35,0 -35,35 l0,27";
            } else if (this.shape == _LCARS.LCARS.ES_SHAPE_SW) {
                pathString += " m0," + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT) + sideStringB + "l0,27 q0,35 35,35 l" + armStringW + ",0 l-110,0 q-75,0 -75,-75 l0,-17";
            } else if (this.shape == _LCARS.LCARS.ES_SHAPE_SE) {
                pathString += " m" + (this.width - 150) + "," + (this.height - _LCARS.LCARS.LCARS_CORNER_HEIGHT) + sideStringB + " l0,17 q0,75 -75,75 l-110,0 l-" + armStringE + ",0 q35,0 35,-35 l0,-27";
            } else if (this.shape == _LCARS.LCARS.ES_SHAPE_NE) {
                pathString += " m" + (this.width - 185) + ",0 l110,0 q75,0 75,75 l0,17" + sideStringT + " l0,-27 q0,-35 -35,-35 l-" + armStringE + ",0";
            }

            this.shapeElement.setAttribute("d", pathString);
            this.setShapeAttributes();

            this.element.appendChild(this.shapeElement);
        }
    }, {
        key: "getTextX",
        value: function getTextX() {
            var x;

            switch (this.properties & _LCARS.LCARS.ES_SHAPE) {
                case _LCARS.LCARS.ES_SHAPE_SE:
                    x = this.width - 140;
                    break;
                case _LCARS.LCARS.ES_SHAPE_SW:
                    x = 140;
                    break;
                case _LCARS.LCARS.ES_SHAPE_NW:
                    x = 140;
                    break;
                case _LCARS.LCARS.ES_SHAPE_NE:
                    x = this.width - 140;
                    break;
            }

            return x;
        }
    }, {
        key: "getTextY",
        value: function getTextY() {
            var y;

            switch (this.properties & _LCARS.LCARS.ES_SHAPE) {
                case _LCARS.LCARS.ES_SHAPE_SE:
                    y = this.fontSize;
                    break;
                case _LCARS.LCARS.ES_SHAPE_SW:
                    y = this.fontSize;
                    break;
                case _LCARS.LCARS.ES_SHAPE_NW:
                    y = this.height - 10;
                    break;
                case _LCARS.LCARS.ES_SHAPE_NE:
                    y = this.height - 10;
                    break;
            }

            return y;
        }
    }, {
        key: "getTextAnchor",
        value: function getTextAnchor() {
            switch (this.properties & _LCARS.LCARS.ES_SHAPE) {
                case _LCARS.LCARS.ES_SHAPE_SE:
                    this.textAnchor = "start";
                    break;
                case _LCARS.LCARS.ES_SHAPE_SW:
                    this.textAnchor = "end";
                    break;
                case _LCARS.LCARS.ES_SHAPE_NW:
                    this.textAnchor = "end";
                    break;
                case _LCARS.LCARS.ES_SHAPE_NE:
                    this.textAnchor = "start";
                    break;
            }

            return this.textAnchor;
        }
    }, {
        key: "drawText",
        value: function drawText() {

            if (this.label != "" && this.label != null) {
                this.setTextAttributes();
                this.setText(this.label);

                this.element.appendChild(this.textElement);
            }
        }
    }]);

    return LCARSCorner;
}(LCARSComponent);

/**
 * LCARS Rctangle component
 */


var LCARSRectangle = exports.LCARSRectangle = function (_LCARSComponent2) {
    _inherits(LCARSRectangle, _LCARSComponent2);

    function LCARSRectangle(name, label, x, y, width, height, properties) {
        _classCallCheck(this, LCARSRectangle);

        // Rectangles are always static.
        var _this2 = _possibleConstructorReturn(this, (LCARSRectangle.__proto__ || Object.getPrototypeOf(LCARSRectangle)).call(this, name, label, x, y, properties | _LCARS.LCARS.ES_STATIC));

        _this2.width = width;
        _this2.height = height;

        _this2.drawShape();
        _this2.drawText();
        return _this2;
    }

    return LCARSRectangle;
}(LCARSComponent);

/**
 * LCARS Indicator component
 */


var LCARSIndicator = exports.LCARSIndicator = function (_LCARSComponent3) {
    _inherits(LCARSIndicator, _LCARSComponent3);

    function LCARSIndicator(name, label, x, y, width, height, properties) {
        _classCallCheck(this, LCARSIndicator);

        // Indicators are always static.
        var _this3 = _possibleConstructorReturn(this, (LCARSIndicator.__proto__ || Object.getPrototypeOf(LCARSIndicator)).call(this, name, label, x, y, properties | _LCARS.LCARS.ES_STATIC));

        _this3.width = width;
        _this3.height = height;

        _this3.drawShape();
        _this3.drawText();

        _this3.off(); // start in the off state
        return _this3;
    }

    _createClass(LCARSIndicator, [{
        key: "on",
        value: function on() {
            this.setBlinking(false);
            this.setEnabled(true);
        }
    }, {
        key: "off",
        value: function off() {
            this.setBlinking(false);
            this.setEnabled(false);
        }
    }, {
        key: "onBlink",
        value: function onBlink(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }
            this.onBlinkOutline(duration);
        }
    }, {
        key: "offBlink",
        value: function offBlink(_duration) {
            var duration = _duration;
            if (duration == undefined) {
                duration = 100;
            }
            this.offBlinkOutline(duration);
        }
    }, {
        key: "warning",
        value: function warning(color) {
            if (color == null || color == undefined) {
                color = _LCARS.LCARS.EC_YELLOW;
            }
            this.on();
            this.setBlinking(true, color, _LCARS.LCARS.BLINK_DURATION_WARNING);
        }
    }, {
        key: "error",
        value: function error(color) {
            if (color == null || color == undefined) {
                color = _LCARS.LCARS.EC_RED;
            }
            this.on();
            this.setBlinking(true, color, _LCARS.LCARS.BLINK_DURATION_ERROR);
        }
    }]);

    return LCARSIndicator;
}(LCARSComponent);

/**
 * LCARS Icon component
 */


var LCARSIcon = exports.LCARSIcon = function (_LCARSComponent4) {
    _inherits(LCARSIcon, _LCARSComponent4);

    function LCARSIcon(name, label, x, y, properties, svgString) {
        _classCallCheck(this, LCARSIcon);

        var _this4 = _possibleConstructorReturn(this, (LCARSIcon.__proto__ || Object.getPrototypeOf(LCARSIcon)).call(this, name, label, x, y, properties));

        _this4.svgString = svgString;

        _this4.drawShape();
        return _this4;
    }

    _createClass(LCARSIcon, [{
        key: "drawShape",
        value: function drawShape() {
            this.shapeElement.setAttribute("d", this.svgString);
            this.shapeElement.setAttribute("transform", "scale(2.0)");
            this.setShapeAttributes();

            this.element.appendChild(this.shapeElement);
        }
    }]);

    return LCARSIcon;
}(LCARSComponent);

/**
 * LCARS Button component
 */


var LCARSButton = exports.LCARSButton = function (_LCARSComponent5) {
    _inherits(LCARSButton, _LCARSComponent5);

    function LCARSButton(name, label, x, y, height, properties, auxLabel, auxLabelProperties) {
        _classCallCheck(this, LCARSButton);

        var _this5 = _possibleConstructorReturn(this, (LCARSButton.__proto__ || Object.getPrototypeOf(LCARSButton)).call(this, name, label, x, y, properties));

        _this5.auxLabel = auxLabel;
        _this5.auxLabelProperties = auxLabelProperties;

        _this5.width = _LCARS.LCARS.LCARS_BTN_WIDTH;

        if ((properties & _LCARS.LCARS.ES_RECT_RND) == 0) {
            _this5.height = height * _LCARS.LCARS.LCARS_BTN_HEIGHT + (height - 1) * _LCARS.LCARS.LCARS_BTN_SPACING;
        } else {
            _this5.height = _LCARS.LCARS.LCARS_BTN_HEIGHT;
        }

        if ((_this5.properties & _LCARS.LCARS.ES_FONT) == _LCARS.LCARS.EF_NORMAL) {
            _this5.fontSize = _LCARS.LCARS.FONT_BUTTON_SIZE; // the default font for button components
        }

        _this5.drawShape();
        _this5.drawText();

        if (_this5.auxLabel != "" && _this5.auxLabel != undefined) {
            _this5.drawAuxText();
        }
        return _this5;
    }

    _createClass(LCARSButton, [{
        key: "setAuxText",
        value: function setAuxText(textString) {
            this.auxTextElement.textContent = textString;
        }
    }, {
        key: "drawAuxText",
        value: function drawAuxText() {
            this.auxTextElement = document.createElementNS(_LCARS.LCARS.svgNS, "text");
            this.auxTextElement.setAttribute("id", this.id + _LCARS.LCARS.AUX_TEXT_SUFFIX);
            this.auxTextElement.setAttribute("x", this.getAuxTextX());
            this.auxTextElement.setAttribute("y", this.getAuxTextY());
            this.auxTextElement.setAttribute("text-anchor", this.getAuxTextAnchor());
            if (this.properties & _LCARS.LCARS.ES_DISABLED) {
                this.auxTextElement.setAttribute("fill", '#585858');
            } else {
                this.auxTextElement.setAttribute("fill", _LCARS.LCARS.getColor(this.auxLabelProperties & _LCARS.LCARS.ES_COLOR));
            }
            this.auxTextElement.setAttribute("font-family", _LCARS.LCARS.getFont());
            this.auxTextElement.setAttribute("font-size", this.getAuxLabelFontSize());
            this.auxTextElement.setAttribute("pointer-events", "none");

            this.setAuxText(this.auxLabel);

            this.element.appendChild(this.auxTextElement);
        }
    }, {
        key: "getAuxTextX",
        value: function getAuxTextX() {
            var x = 0;

            switch (this.auxLabelProperties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    x = this.width / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    x = _LCARS.LCARS.TEXT_X_INSET;
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    x = this.width - _LCARS.LCARS.TEXT_X_INSET;
                    break;
            }

            return x;
        }
    }, {
        key: "getAuxTextY",
        value: function getAuxTextY() {
            var y = 0;

            switch (this.auxLabelProperties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_E:
                    y = this.height / 2 + _LCARS.LCARS.FONT_BUTTON_SIZE / 2;
                    break;
                case _LCARS.LCARS.ES_LABEL_NW:
                case _LCARS.LCARS.ES_LABEL_N:
                case _LCARS.LCARS.ES_LABEL_NE:
                    y = _LCARS.LCARS.FONT_BUTTON_SIZE;
                    break;
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    y = this.height - _LCARS.LCARS.TEXT_Y_INSET;
                    break;
            }

            return y;
        }
    }, {
        key: "getAuxTextAnchor",
        value: function getAuxTextAnchor() {
            var textAnchor = "";

            switch (this.auxLabelProperties & _LCARS.LCARS.ES_LABEL) {
                case _LCARS.LCARS.ES_LABEL_C:
                case _LCARS.LCARS.ES_LABEL_S:
                case _LCARS.LCARS.ES_LABEL_N:
                    textAnchor = "middle";
                    break;
                case _LCARS.LCARS.ES_LABEL_SW:
                case _LCARS.LCARS.ES_LABEL_W:
                case _LCARS.LCARS.ES_LABEL_NW:
                    textAnchor = "start";
                    break;
                case _LCARS.LCARS.ES_LABEL_NE:
                case _LCARS.LCARS.ES_LABEL_E:
                case _LCARS.LCARS.ES_LABEL_SE:
                default:
                    textAnchor = "end";
                    break;
            }

            return textAnchor;
        }
    }, {
        key: "getAuxLabelFontSize",
        value: function getAuxLabelFontSize() {
            switch (this.auxLabelProperties & _LCARS.LCARS.ES_FONT) {
                case _LCARS.LCARS.EF_TITLE:
                    return _LCARS.LCARS.FONT_TITLE_SIZE;
                case _LCARS.LCARS.EF_SUBTITLE:
                    return _LCARS.LCARS.FONT_SUBTITLE_SIZE;
                case _LCARS.LCARS.EF_BUTTON:
                    return _LCARS.LCARS.FONT_BUTTON_SIZE;
                case _LCARS.LCARS.EF_TINY:
                    return _LCARS.LCARS.FONT_TINY_SIZE;
                case _LCARS.LCARS.EF_BODY:
                default:
                    return _LCARS.LCARS.FONT_BODY_SIZE;
            }
        }
    }]);

    return LCARSButton;
}(LCARSComponent);

/**
 * LCARS Text component
 */


var LCARSText = exports.LCARSText = function (_LCARSComponent6) {
    _inherits(LCARSText, _LCARSComponent6);

    function LCARSText(name, label, x, y, properties) {
        _classCallCheck(this, LCARSText);

        var _this6 = _possibleConstructorReturn(this, (LCARSText.__proto__ || Object.getPrototypeOf(LCARSText)).call(this, name, label, x, y, properties));

        _this6.static = _LCARS.LCARS.ES_STATIC; // Text is always static.
        _this6.textColor = _this6.getColor();

        _this6.drawText();

        if (_this6.blinking) {
            _this6.setBlinking(true);
        }
        return _this6;
    }

    _createClass(LCARSText, [{
        key: "getTextAnchor",
        value: function getTextAnchor() {
            if ((this.properties & _LCARS.LCARS.ES_LABEL) == 0) {
                this.properties |= _LCARS.LCARS.ES_LABEL_W;
            }

            return _get(LCARSText.prototype.__proto__ || Object.getPrototypeOf(LCARSText.prototype), "getTextAnchor", this).call(this);
        }
    }, {
        key: "drawShape",
        value: function drawShape() {
            return "";
        }
    }, {
        key: "getTextX",
        value: function getTextX() {
            return 0;
        }
    }, {
        key: "getTextY",
        value: function getTextY() {
            return 0;
        }
    }, {
        key: "setBlinking",
        value: function setBlinking(enabled, color, duration) {
            /** If the duration argument is null, set a default blink duration. */
            if (duration == null) {
                duration = _LCARS.LCARS.BLINK_DURATION_WARNING;
            }

            /** If blinking is enabled... */
            if (enabled) {
                /** Create the DOM object for the shape's text animation, and set its attributes. */
                this.textAnimateElement = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
                this.textAnimateElement.setAttribute("attributeType", "XML");
                this.textAnimateElement.setAttribute("attributeName", "fill");
                this.textAnimateElement.setAttribute("values", this.getBlinkColors(color));
                this.textAnimateElement.setAttribute("dur", duration);
                this.textAnimateElement.setAttribute("repeatCount", "indefinite");
                /** Append the animation element to the text element. */
                this.textElement.appendChild(this.textAnimateElement);
            }
            /** Else if blinking is not enabled... */
            else {
                    /** If the text animate element exists, remove it. */
                    if (this.textAnimateElement != null) {
                        this.textElement.removeChild(this.textAnimateElement);
                    }
                }
        }
    }]);

    return LCARSText;
}(LCARSComponent);

/**
 * LCARS TextArea component
 */


var LCARSTextArea = exports.LCARSTextArea = function (_LCARSComponent7) {
    _inherits(LCARSTextArea, _LCARSComponent7);

    function LCARSTextArea(name, label, x, y, width, rows, properties) {
        _classCallCheck(this, LCARSTextArea);

        var _this7 = _possibleConstructorReturn(this, (LCARSTextArea.__proto__ || Object.getPrototypeOf(LCARSTextArea)).call(this, name, label, x, y, properties));

        _this7.composite = false;
        _this7.static = _LCARS.LCARS.ES_STATIC; // TextAreas are always static.
        _this7.textColor = _this7.getColor();

        _this7.width = width;
        _this7.rows = rows;

        _this7.lineSpacing = 1.0;

        _this7.nowrap = true; // Default to not wrapping lines of text
        _this7.canvasFont = Math.round(_this7.fontSize * 1.1) + "pt " + _LCARS.LCARS.getFont();

        _this7.drawText();
        return _this7;
    }

    _createClass(LCARSTextArea, [{
        key: "getTextAnchor",
        value: function getTextAnchor() {
            if ((this.properties & _LCARS.LCARS.ES_LABEL) == 0) {
                this.properties |= _LCARS.LCARS.ES_LABEL_W;
            }

            return _get(LCARSTextArea.prototype.__proto__ || Object.getPrototypeOf(LCARSTextArea.prototype), "getTextAnchor", this).call(this);
        }
    }, {
        key: "drawText",
        value: function drawText() {
            this.textElement.setAttribute("id", this.id + _LCARS.LCARS.TEXT_SUFFIX);
            this.textElement.setAttribute("font-family", _LCARS.LCARS.getFont());
            this.textElement.setAttribute("font-size", this.fontSize);
            this.textElement.setAttribute("fill", this.textColor);

            this.lineElements = [];
            for (var index = 0; index < this.rows; index++) {

                this.lineElements.push(document.createElementNS(_LCARS.LCARS.svgNS, "tspan"));
                this.lineElements[index].setAttribute("id", this.id + "_" + index + _LCARS.LCARS.TEXT_SUFFIX);
                this.lineElements[index].setAttribute("x", 0);
                this.lineElements[index].setAttribute("dy", this.fontSize * this.lineSpacing);

                /* Set <code>tspan</code> attribute to preserve the space for blank lines, and initialize
                 the line as blank. */
                this.lineElements[index].setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                this.lineElements[index].textContent = "";

                /* Add the <code>tspan</code> SVG element to the parent SVG <code>textElement</code>. */
                this.textElement.appendChild(this.lineElements[index]);
            }

            this.element.appendChild(this.textElement);

            return "";
        }
    }, {
        key: "appendLine",
        value: function appendLine(lineOfText) {

            var resultString = this.wrap(lineOfText);
            var resultStringLength = resultString.length;

            for (var index = 0; index < resultStringLength; index++) {
                this.addLine(resultString[index]);
            }
        }
    }, {
        key: "addLine",
        value: function addLine(lineOfText) {

            for (var index = 0; index < this.rows; index++) {
                if (this.lineElements[index] == "") {
                    this.lineElements[index].textContent = lineOfText;
                    break;
                } else {
                    this.scrollUp();
                    this.lineElements[this.rows - 1].textContent = lineOfText;
                    break;
                }
            }
        }
    }, {
        key: "wrap",
        value: function wrap(lineOfText) {
            var resultStrings = [];

            var words = lineOfText.split(' ');
            var w, x, i, l;
            //        var spaceWidth = LCARS.getTextWidth(' ', this.canvasFont);
            var spaceWidth = _LCARS.LCARS.getTextWidth3(' ', this.fontSize);
            var spaceLeft = this.width;

            var line = [];
            resultStrings.push(line);

            for (i = 0, l = words.length; i < l; i++) {
                w = words[i];
                //            x = LCARS.getTextWidth(w, this.canvasFont) + spaceWidth;
                x = _LCARS.LCARS.getTextWidth3(w, this.fontSize) + spaceWidth;

                if (x > spaceLeft) {
                    line = [];
                    resultStrings.push(line);
                    line.push(w);
                    spaceLeft = this.width - x;
                } else {
                    spaceLeft = spaceLeft - x;
                    line.push(w);
                }
            }

            for (i = 0, l = resultStrings.length; i < l; i++) {
                resultStrings[i] = resultStrings[i].join(' ');

                if (this.nowrap == true) {
                    if (i != 0) {
                        delete resultStrings[i];
                    }
                }
            }

            return resultStrings;
        }
    }, {
        key: "truncate",
        value: function truncate(lineOfText) {
            var resultString = [];
            //var canvasFont = Math.round(this.fontSize*0.49) + "pt " + LCARS.getFont();

            var i = 0;
            while (_LCARS.LCARS.getTextWidth(resultString, this.canvasFont) < this.width) {
                resultString[i] = lineOfText[i];
                i++;
            }

            return resultString.join('');
        }
    }, {
        key: "setNoWrap",
        value: function setNoWrap(nowrap) {
            this.nowrap = nowrap;
        }
    }, {
        key: "initTextArea",
        value: function initTextArea() {
            for (var index = 0; index < this.rows; index++) {
                this.lineElements[index].textContent = " ";
            }
        }
    }, {
        key: "setLineSpacing",
        value: function setLineSpacing(spacing) {
            this.lineSpacing = spacing;
            for (var index = 0; index < this.rows; index++) {
                this.lineElements[index].setAttribute("dy", this.fontSize * this.lineSpacing);
            }
        }
    }, {
        key: "setTextFontSize",
        value: function setTextFontSize(textFontSize) {
            this.fontSize = textFontSize;
            this.textElement.setAttribute("font-size", this.fontSize);
            this.setLineSpacing(this.lineSpacing);
        }
    }, {
        key: "setText",
        value: function setText(index, lineOfText) {
            this.lineElements[index].textContent = lineOfText;
        }
    }, {
        key: "clearText",
        value: function clearText(index) {
            this.lineElements[index].textContent = " ";
        }
    }, {
        key: "clearTextArea",
        value: function clearTextArea() {
            for (var index = 0; index < this.rows; index++) {
                this.lineElements[index].textContent = "";
            }
        }
    }, {
        key: "scrollUp",
        value: function scrollUp() {
            for (var index = 0; index < this.rows - 1; index++) {
                this.lineElements[index].textContent = this.lineElements[index + 1].textContent;
            }

            this.lineElements[this.rows - 1].textContent = "";
        }
    }, {
        key: "getTextX",
        value: function getTextX() {
            return 0;
        }
    }, {
        key: "getTextY",
        value: function getTextY() {
            return 0;
        }
    }]);

    return LCARSTextArea;
}(LCARSComponent);

/**
 * LCARS Keypad component
 */


var LCARSKeypad = exports.LCARSKeypad = function (_LCARSComponent8) {
    _inherits(LCARSKeypad, _LCARSComponent8);

    function LCARSKeypad(name, x, y, properties, auxLabelProperties) {
        _classCallCheck(this, LCARSKeypad);

        /** Keypads don't have labels */

        var _this8 = _possibleConstructorReturn(this, (LCARSKeypad.__proto__ || Object.getPrototypeOf(LCARSKeypad)).call(this, name, "", x, y, properties));

        _this8.auxLabelProperties = auxLabelProperties;

        _this8.drawShape();
        return _this8;
    }

    _createClass(LCARSKeypad, [{
        key: "drawShape",
        value: function drawShape() {

            this.button_1 = new LCARSButton("1", "1", 0, 0, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_1.element);

            this.button_2 = new LCARSButton("2", "2", _LCARS.LCARS.LCARS_BTN_WIDTH + _LCARS.LCARS.KP_BUTTON_X_SPACE, 0, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_2.element);

            this.button_3 = new LCARSButton("3", "3", 2 * _LCARS.LCARS.LCARS_BTN_WIDTH + 2 * _LCARS.LCARS.KP_BUTTON_X_SPACE, 0, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_3.element);

            this.button_4 = new LCARSButton("4", "4", 0, _LCARS.LCARS.LCARS_BTN_HEIGHT + _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_4.element);

            this.button_5 = new LCARSButton("5", "5", _LCARS.LCARS.LCARS_BTN_WIDTH + _LCARS.LCARS.KP_BUTTON_X_SPACE, _LCARS.LCARS.LCARS_BTN_HEIGHT + _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_5.element);

            this.button_6 = new LCARSButton("6", "6", 2 * _LCARS.LCARS.LCARS_BTN_WIDTH + 2 * _LCARS.LCARS.KP_BUTTON_X_SPACE, _LCARS.LCARS.LCARS_BTN_HEIGHT + _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_6.element);

            this.button_7 = new LCARSButton("7", "7", 0, 2 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 2 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_7.element);

            this.button_8 = new LCARSButton("8", "8", _LCARS.LCARS.LCARS_BTN_WIDTH + _LCARS.LCARS.KP_BUTTON_X_SPACE, 2 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 2 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_8.element);

            this.button_9 = new LCARSButton("9", "9", 2 * _LCARS.LCARS.LCARS_BTN_WIDTH + 2 * _LCARS.LCARS.KP_BUTTON_X_SPACE, 2 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 2 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_9.element);

            this.button_star = new LCARSButton("*", "*", 0, 3 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 3 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);

            this.button_0 = new LCARSButton("0", "0", _LCARS.LCARS.LCARS_BTN_WIDTH + _LCARS.LCARS.KP_BUTTON_X_SPACE, 3 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 3 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);
            this.element.appendChild(this.button_0.element);

            this.button_hash = new LCARSButton("#", "#", 2 * _LCARS.LCARS.LCARS_BTN_WIDTH + 2 * _LCARS.LCARS.KP_BUTTON_X_SPACE, 3 * _LCARS.LCARS.LCARS_BTN_HEIGHT + 3 * _LCARS.LCARS.KP_BUTTON_Y_SPACE, 0, this.properties, " ", this.auxLabelProperties);

            if ((this.auxLabelProperties & _LCARS.LCARS.ES_CLASS) == _LCARS.LCARS.EKP_AUX_KEYS) {
                this.element.appendChild(this.button_star.element);
                this.element.appendChild(this.button_hash.element);
            }
        }
    }, {
        key: "addEventListener",
        value: function addEventListener(event, listener) {
            this.button_1.addEventListener(event, listener);
            this.button_2.addEventListener(event, listener);
            this.button_3.addEventListener(event, listener);
            this.button_4.addEventListener(event, listener);
            this.button_5.addEventListener(event, listener);
            this.button_6.addEventListener(event, listener);
            this.button_7.addEventListener(event, listener);
            this.button_8.addEventListener(event, listener);
            this.button_9.addEventListener(event, listener);
            this.button_0.addEventListener(event, listener);
            this.button_star.addEventListener(event, listener);
            this.button_hash.addEventListener(event, listener);
        }
    }, {
        key: "getElementForButton",
        value: function getElementForButton(button) {

            var _element;

            if (button == "1") {
                _element = this.button_1;
            } else if (button == "2") {
                _element = this.button_2;
            } else if (button == "3") {
                _element = this.button_3;
            } else if (button == "4") {
                _element = this.button_4;
            } else if (button == "5") {
                _element = this.button_5;
            } else if (button == "6") {
                _element = this.button_6;
            } else if (button == "7") {
                _element = this.button_7;
            } else if (button == "8") {
                _element = this.button_8;
            } else if (button == "9") {
                _element = this.button_9;
            } else if (button == "0") {
                _element = this.button_0;
            } else if (button == "*") {
                _element = this.button_star;
            } else if (button == "#") {
                _element = this.button_hash;
            }

            return _element;
        }
    }, {
        key: "addButtonEventListener",
        value: function addButtonEventListener(button, event, listener) {

            var _element;

            _element = this.getElementForButton(button);

            _element.addEventListener(event, listener);
        }
    }, {
        key: "setAuxText",
        value: function setAuxText(one, two, three, four, five, six, seven, eight, nine, zero, star, hash) {
            this.button_1.setAuxText(one);
            this.button_2.setAuxText(two);
            this.button_3.setAuxText(three);
            this.button_4.setAuxText(four);
            this.button_5.setAuxText(five);
            this.button_6.setAuxText(six);
            this.button_7.setAuxText(seven);
            this.button_8.setAuxText(eight);
            this.button_9.setAuxText(nine);
            this.button_0.setAuxText(zero);
            this.button_star.setAuxText(star);
            this.button_hash.setAuxText(hash);
        }
    }, {
        key: "setButtonAuxText",
        value: function setButtonAuxText(button, text) {

            var _element;

            _element = this.getElementForButton(button);

            _element.setAuxText(text);
        }
    }]);

    return LCARSKeypad;
}(LCARSComponent);

/**
 * LCARS Analog Clock component
 */


var LCARSClockAnalog = exports.LCARSClockAnalog = function (_LCARSComponent9) {
    _inherits(LCARSClockAnalog, _LCARSComponent9);

    function LCARSClockAnalog(name, label, x, y, radius, properties, updateInterval, format) {
        _classCallCheck(this, LCARSClockAnalog);

        var _this9 = _possibleConstructorReturn(this, (LCARSClockAnalog.__proto__ || Object.getPrototypeOf(LCARSClockAnalog)).call(this, name, label, x, y, properties));

        _this9.static = _LCARS.LCARS.ES_STATIC; // Text is always static.
        _this9.textColor = _this9.getColor();

        /** Set the size of the clock face. */
        _this9.element.style.height = radius * 2 + "px";
        _this9.element.style.width = radius * 2 + "px";

        _this9.radius = radius;

        _this9.updateInterval = updateInterval;
        _this9.format = format;

        _this9.intervalVariable = null;

        _this9.drawShape();

        _this9.update();

        _this9.start();
        return _this9;
    }

    /**
     * Function to start the clock. It retrieves a reference to the clock object,
     * and passes it to an interval timer. The update interval is a class
     * variable, and is passed to the constructor of the object.
     */


    _createClass(LCARSClockAnalog, [{
        key: "start",
        value: function start() {

            var thisObj = this; // Can't just pass "this" to the setInterval function.

            thisObj.intervalVariable = setInterval(function (thisObj) {
                return function () {
                    thisObj.update();
                };
            }(this), thisObj.updateInterval);
        }

        /**
         * Function to stop the clock. It test the interval variable, and if it is not
         * null, it clears it.
         */

    }, {
        key: "stop",
        value: function stop() {
            if (!(this.intervalVariable == null)) {
                clearInterval(this.intervalVariable);
            }
        }

        /**
         * Function to update the clock with the current time. It gets passed to an
         * interval timer and will update the time and date at the rate set by the
         * interval variable.
         */

    }, {
        key: "update",
        value: function update() {

            /** Update to the current date and time. */
            var now = new Date();

            /** Calculate the angles in degrees for the secons, minutes, and hours hands. */
            var secondsDegrees = 6 * now.getSeconds();
            var minuteDegrees = 6 * now.getMinutes();
            var hourDegrees = 30 * (now.getHours() % 12) + now.getMinutes() / 2;

            /** Rotate the hands of the clock. */
            this.secondHand.setAttribute('transform', 'rotate(' + secondsDegrees + ' ' + centerX + ' ' + centerY + ')');
            this.minuteHand.setAttribute('transform', 'rotate(' + minuteDegrees + ' ' + centerX + ' ' + centerY + ')');
            this.hourHand.setAttribute('transform', 'rotate(' + hourDegrees + ' ' + centerX + ' ' + centerY + ')');
        }
    }, {
        key: "drawShape",
        value: function drawShape() {

            this.drawClockFace();

            this.drawClockHands();

            return "";
        }
    }, {
        key: "drawClockHands",
        value: function drawClockHands() {

            this.drawClockFace();

            var centerX = this.radius;
            var centerY = this.radius;

            this.hourHand = document.createElementNS(_LCARS.LCARS.svgNS, "line");
            this.hourHand.setAttribute('x1', centerX);
            this.hourHand.setAttribute('y1', centerY);
            this.hourHand.setAttribute('x2', centerX);
            this.hourHand.setAttribute('y2', this.radius * 0.5);
            this.hourHand.setAttribute('stroke', this.color);
            this.hourHand.setAttribute('stroke-width', this.radius / 10);
            this.hourHand.setAttribute('stroke-linecap', 'round');

            this.minuteHand = document.createElementNS(_LCARS.LCARS.svgNS, "line");
            this.minuteHand.setAttribute('x1', centerX);
            this.minuteHand.setAttribute('y1', centerY);
            this.minuteHand.setAttribute('x2', centerX);
            this.minuteHand.setAttribute('y2', this.radius * 0.25);
            this.minuteHand.setAttribute('stroke', this.color);
            this.minuteHand.setAttribute('stroke-width', this.radius / 20);
            this.minuteHand.setAttribute('stroke-linecap', 'round');

            this.secondHand = document.createElementNS(_LCARS.LCARS.svgNS, "line");
            this.secondHand.setAttribute('x1', centerX);
            this.secondHand.setAttribute('y1', centerY);
            this.secondHand.setAttribute('x2', centerX);
            this.secondHand.setAttribute('y2', this.radius * 0.15);
            this.secondHand.setAttribute('stroke', this.color);
            this.secondHand.setAttribute('stroke-width', this.radius / 40);
            this.secondHand.setAttribute('stroke-linecap', 'round');

            this.element.appendChild(this.hourHand);
            this.element.appendChild(this.minuteHand);
            this.element.appendChild(this.secondHand);
        }
    }, {
        key: "drawClockFace",
        value: function drawClockFace() {

            var centerX = this.radius;
            var centerY = this.radius;

            var xOffset = this.radius / 35;
            var yOffset = this.radius / 15;

            var angleIncrement = 360 / 12;

            for (var i = 12; i >= 1; i--) {

                /** Set the angle and convert to radians. */
                var angle = (angleIncrement * i - 90) * (Math.PI / 180);

                /** Calculate the x, y coordinates of the hour text. */
                var x = centerX + this.radius * Math.cos(angle);
                var y = centerY + this.radius * Math.sin(angle);

                var adjustedOffsetX = xOffset;
                if (i >= 10) {
                    adjustedOffsetX = xOffset * 2;
                }

                /** Create the hour text object and add it to the parent SVG. */
                var clockHourText = new LCARSText("hour_" + i.toString(), i.toString(), x - adjustedOffsetX, y + yOffset, this.properties);
                //clockHourText.setTextFontSize(this.font_size);
                clockHourText.setTextFontSize(this.radius / 5);

                this.element.appendChild(clockHourText.element);
            }
        }
    }]);

    return LCARSClockAnalog;
}(LCARSComponent);

/**
 * LCARS Clock component
 *
 */


var LCARSClock = function (_LCARSComponent10) {
    _inherits(LCARSClock, _LCARSComponent10);

    function LCARSClock(name, label, x, y, properties, format) {
        _classCallCheck(this, LCARSClock);

        var _this10 = _possibleConstructorReturn(this, (LCARSClock.__proto__ || Object.getPrototypeOf(LCARSClock)).call(this, name, label, x, y, properties));

        _this10.static = _LCARS.LCARS.ES_STATIC; // Text is always static.
        _this10.textColor = _this10.getColor();

        _this10.format = format;

        _this10.timeoutVariable = null;

        _this10.drawText();

        _this10.update();

        _this10.start();
        return _this10;
    }

    /**
     * Function to start the clock. It retrieves a reference to the clock object,
     * and passes it to an interval timer. The update interval is a class
     * variable, and is passed to the constructor of the object.
     */


    _createClass(LCARSClock, [{
        key: "start",
        value: function start() {
            this.update();
        }

        /**
         * Function to stop the clock. It test the interval variable, and if it is not
         * null, it clears it.
         */

    }, {
        key: "stop",
        value: function stop() {
            if (!(this.timeoutVariable == null)) {
                clearTimeout(this.timeoutVariable);
            }
        }

        /**
         * Function to update the clock with the current time. It gets passed to an
         * interval timer and will update the time and date at the rate set by the
         * interval variable.
         */

    }, {
        key: "update",
        value: function update() {

            /** Update to the current date and time. */
            var now = new Date();

            /** Initialize the format for the updated time date string. */
            var clockString = this.format;

            /** Format the updated current time date, and set the text field. */
            this.setText(this.formatString(clockString, now));

            var thisObj = this; // Can't just pass "this" to the setInterval function.
            var milliseconds = now.getMilliseconds();
            var newTimeout = 1000 - milliseconds;
            this.timeoutVariable = setTimeout(function (thisObj) {
                return function () {
                    thisObj.update();
                };
            }(this), newTimeout);
        }

        /**
         * Function to add a leading zero in front of numbers to the limit of the
         * length argument to support hours, minutes, seconds, and milliseconds.
         *
         * @param numberArg the number to pad with a leading zero
         * @param lengthArg the length of the number to pad leading zeros to
         */

    }, {
        key: "padLeadingZero",
        value: function padLeadingZero(numberArg, lengthArg) {

            var number = numberArg + "";
            var length = lengthArg || 2;

            while (number.length < length) {
                number = "0" + number;
            }

            return number;
        }

        /**
         * Function to format the time and date output associated with the Date
         * object <code>now</code> argument based on the <code>formatString</code> argument.
         * <p>
         * Note that the order of the parse is important to support the regular expressions that
         * are used. See the notes embedded in the code.
         * <p>
         * The date format parameters are as follows:
         * <ul>
         * <li> yyyy - the four digit year
         * <li> yy   - the two digit year
         * <li> y    - the four digit year
         * <li> MMMM - the full name of the month
         * <li> MMM  - the abbreviated name of the month
         * <li> MM   - the month number with a leading zero
         * <li> M    - the month number without a leading zero
         * <li> dddd - the full name of the day
         * <li> ddd  - the abbreviated name of the day
         * <li> dd   - the day number with a leading zero
         * <li> d    - the day number without a leading zero
         * <li> HH   - the 24 hour number with a leading zero
         * <li> H    - the 24 hour number without a leading zero
         * <li> hh   - the 12 hour number with a leading zero
         * <li> h    - the 12 hour number without a leading zero
         * <li> mm   - the minutes number with a leading zero
         * <li> m    - the minutes number without a leading zero
         * <li> ss   - the seconds number with a leading zero
         * <li> s    - the seconds number without a leading zero
         * <li> fff  - the milliseconds number with two leading zeroes
         * <li> ff   - the milliseconds number with one leading zero
         * <li> f    - the milliseconds number without leading zeroes
         * <li> TT   - AM - PM upper case
         * <li> T    - AM - PM upper case single character (A, P)
         * <li> tt   - AM - PM lower case
         * <li> t    - AM - PM lower case single character (a, p)
         * <li> K    - the time zone offset from UTC in the form +/-00:00
         * <li> Z    - the three character abbreviated time zone
         *</ul>
         *
         * @param formatString the string to parse for the format parameters
         * @param now the Date object to format
         * @return the formatted date string
         */

    }, {
        key: "formatString",
        value: function formatString(_formatString, now) {

            /** Get all the time and date paramenters for the <code>now</code> argument. */
            var year = now.getFullYear();
            var month = now.getMonth() + 1; /** add 1, because January is zero. */
            var day = now.getDate();
            var dayOfWeek = now.getDay() + 1; /** add 1, because Sunday is zero. */
            var hour24 = now.getHours();
            var hour12 = hour24 > 12 ? hour24 - 12 : hour24 == 0 ? 12 : hour24;
            var meridiem = hour24 > 12 ? "PM" : "AM";
            var minute = now.getMinutes();
            var second = now.getSeconds();
            var millisecond = now.getMilliseconds();
            var timeZoneOffset = Math.abs(now.getTimezoneOffset());
            //var timeZoneOffset = Math.abs(timeZoneOffset);
            var tzHrs = Math.floor(timeZoneOffset / 60);
            var tzMin = timeZoneOffset % 60;
            var timeZoneOffsetString = timeZoneOffset > 0 ? "-" : "+";
            var timeZoneString = String(String(now).split("(")[1]).split(")")[0];

            timeZoneOffsetString += this.padLeadingZero(tzHrs) + ":" + this.padLeadingZero(tzMin);

            /** Parse the year paramenter, and replace it with the built year string. */
            _formatString = _formatString.replace(/(^|[^\\])yyyy+/g, "$1" + year);
            _formatString = _formatString.replace(/(^|[^\\])yy/g, "$1" + year.toString().substr(2, 2));
            _formatString = _formatString.replace(/(^|[^\\])y/g, "$1" + year);

            /** Parse the month parameter, and replace it with the built month string. Note that
             month names are replaced by tokens to allow the rest of the parse to complete. They
             are replaced by the month strings when the rest of the parse is finished. */
            _formatString = _formatString.replace(/(^|[^\\])MMMM+/g, "$1" + _LCARS.LCARS.MONTHS[0]);
            _formatString = _formatString.replace(/(^|[^\\])MMM/g, "$1" + _LCARS.LCARS.MONTHS_ABBREVIATED[0]);
            _formatString = _formatString.replace(/(^|[^\\])MM/g, "$1" + this.padLeadingZero(month));
            _formatString = _formatString.replace(/(^|[^\\])M/g, "$1" + month);

            /** Parse the day parameter, and replace it with the built day string. Note that
             day names are replaced by tokens to allow the rest of the parse to complete. They
             are replaced by the day strings when the rest of the parse is finished. */
            _formatString = _formatString.replace(/(^|[^\\])dddd+/g, "$1" + _LCARS.LCARS.DAYS_OF_WEEK[0]);
            _formatString = _formatString.replace(/(^|[^\\])ddd/g, "$1" + _LCARS.LCARS.DAYS_OF_WEEK_ABBREVIATED[0]);
            _formatString = _formatString.replace(/(^|[^\\])dd/g, "$1" + this.padLeadingZero(day));
            _formatString = _formatString.replace(/(^|[^\\])d/g, "$1" + day);

            /** Parse the hour paramenter, and replace it with the built hour string. */
            _formatString = _formatString.replace(/(^|[^\\])HH+/g, "$1" + this.padLeadingZero(hour24));
            _formatString = _formatString.replace(/(^|[^\\])H/g, "$1" + hour24);
            _formatString = _formatString.replace(/(^|[^\\])hh+/g, "$1" + this.padLeadingZero(hour12));
            _formatString = _formatString.replace(/(^|[^\\])h/g, "$1" + hour12);

            /** Parse the minutes paramenter, and replace it with the built minutes string. */
            _formatString = _formatString.replace(/(^|[^\\])mm+/g, "$1" + this.padLeadingZero(minute));
            _formatString = _formatString.replace(/(^|[^\\])m/g, "$1" + minute);

            /** Parse the seconds paramenter, and replace it with the built seconds string. */
            _formatString = _formatString.replace(/(^|[^\\])ss+/g, "$1" + this.padLeadingZero(second));
            _formatString = _formatString.replace(/(^|[^\\])s/g, "$1" + second);

            /** Parse the year milliseconds, and replace it with the built milliseconds string. */
            _formatString = _formatString.replace(/(^|[^\\])fff+/g, "$1" + this.padLeadingZero(millisecond, 3));
            millisecond = Math.round(millisecond / 10);
            _formatString = _formatString.replace(/(^|[^\\])ff/g, "$1" + this.padLeadingZero(millisecond));
            millisecond = Math.round(millisecond / 10);
            _formatString = _formatString.replace(/(^|[^\\])f/g, "$1" + millisecond);

            /** Parse the meridiem paramenter, and replace it with the built meridiem string. */
            _formatString = _formatString.replace(/(^|[^\\])TT+/g, "$1" + meridiem);
            _formatString = _formatString.replace(/(^|[^\\])T/g, "$1" + meridiem.charAt(0));
            _formatString = _formatString.replace(/(^|[^\\])tt+/g, "$1" + meridiem.toLowerCase());
            _formatString = _formatString.replace(/(^|[^\\])t/g, "$1" + meridiem.toLowerCase().charAt(0));

            /** Parse the timezone offset paramenter, and replace it with the built timezone offset string. */
            _formatString = _formatString.replace(/(^|[^\\])K/g, "$1" + timeZoneOffsetString);

            /** Parse the timezone paramenter, and replace it with the timezone abbreviated name. */
            _formatString = _formatString.replace(/(^|[^\\])Z/g, "$1" + timeZoneString);

            /** Parse the month paramenter token, and replace it with the built month string. */
            _formatString = _formatString.replace(new RegExp(_LCARS.LCARS.MONTHS[0], "g"), _LCARS.LCARS.MONTHS[month]);
            _formatString = _formatString.replace(new RegExp(_LCARS.LCARS.MONTHS_ABBREVIATED[0], "g"), _LCARS.LCARS.MONTHS_ABBREVIATED[month]);

            /** Parse the day paramenter token, and replace it with the built day string. */
            _formatString = _formatString.replace(new RegExp(_LCARS.LCARS.DAYS_OF_WEEK[0], "g"), _LCARS.LCARS.DAYS_OF_WEEK[dayOfWeek]);
            _formatString = _formatString.replace(new RegExp(_LCARS.LCARS.DAYS_OF_WEEK_ABBREVIATED[0], "g"), _LCARS.LCARS.DAYS_OF_WEEK_ABBREVIATED[dayOfWeek]);

            /** return the formatted string. */
            return _formatString;
        }
    }, {
        key: "getTextAnchor",
        value: function getTextAnchor() {
            if ((this.properties & _LCARS.LCARS.ES_LABEL) == 0) {
                this.properties |= _LCARS.LCARS.ES_LABEL_W;
            }

            return _get(LCARSClock.prototype.__proto__ || Object.getPrototypeOf(LCARSClock.prototype), "getTextAnchor", this).call(this);
        }
    }, {
        key: "drawShape",
        value: function drawShape() {
            return "";
        }
    }]);

    return LCARSClock;
}(LCARSComponent);

exports.LCARSClock = LCARSClock;


var MAX_DAYS_IN_MONTH_DISPLAY = 42; /** 6 lines of 7 days */
/**
 * LCARS Calendar component - It provides a maximum six (6) week, seven (7) day array of days
 * with a month and year header.
 * <p>
 * The format of the days array is based on the starting day of the week for the month and the
 * number of days in the month. The weeks start on Sundays and end on Saturdays. Days for the
 * preceding and following months are blank. The days are color coded as follows:
 * <ul>
 * <li> Sunday    orange          <code>[EC_ORANGE]</code>
 * <li> Weekday   light blue      <code>[EC_L_BLUE]</code>
 * <li> Saturday  blue            <code>[EC_BLUE]</code>
 * <li> Today     yellow          <code>[EC_YELLOW]</code>
 * </ul>
 * <p>
 * Note: There is currently no convenience method for changing the color coding of the days.
 *
 * @author Perry Spagnola
 * Aversion 1.0
 */

var LCARSCalendar = exports.LCARSCalendar = function (_LCARSComponent11) {
    _inherits(LCARSCalendar, _LCARSComponent11);

    function LCARSCalendar(name, x, y, font_size, daySpacing, properties) {
        _classCallCheck(this, LCARSCalendar);

        /** Calendar doesn't have a label. */
        var _this11 = _possibleConstructorReturn(this, (LCARSCalendar.__proto__ || Object.getPrototypeOf(LCARSCalendar)).call(this, name, "", x, y, properties | _LCARS.LCARS.ES_LABEL_E));

        _this11.static = _LCARS.LCARS.ES_STATIC; /** Calendar is always static. */
        _this11.textColor = _this11.getColor();

        _this11.font_size = font_size;

        _this11.daySpacing = daySpacing;

        /** Set the curretn day as today. */
        _this11.setToday();

        _this11.intervalVariable = null;

        /** Set the initial displayed month and year. */
        _this11.displayMonth = _this11.currentMonth;
        _this11.displayYear = _this11.currentYear;

        /** Create an array to hold 6 lines of 7 days. */
        _this11.displayDays = new Array(MAX_DAYS_IN_MONTH_DISPLAY);

        /** Draw the calendar SVG shape. */
        _this11.drawShape();

        /** Populate the calendar with month, year, and days. */
        _this11.updateCalendar();

        return _this11;
    }

    /**
     * Draw the calendar component SVG shape.
     * <p>
     * Creates all of the SVG Text elements within a parent SVG element. There are two (2)
     * elements for the month and year header, and forty-two (42) <code>MAX_DAYS_IN_MONTH_DISPLAY</code>
     * elements for the days array of six (6) rows or weeks, and seven (7) cloumns or days.
     *
     * @return an empty string.
     */


    _createClass(LCARSCalendar, [{
        key: "drawShape",
        value: function drawShape() {

            var header_offset = this.font_size * 2;

            this.monthText = new LCARSText("", this.displayMonthString, 0, 0, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EC_L_BLUE);
            this.monthText.setTextFontSize(this.font_size);
            this.element.appendChild(this.monthText.element);

            this.yearText = new LCARSText("", this.displayYearString, 6 * this.font_size * this.daySpacing, 0, _LCARS.LCARS.ES_LABEL_E | _LCARS.LCARS.EC_L_BLUE);
            this.yearText.setTextFontSize(this.font_size);
            this.element.appendChild(this.yearText.element);

            for (var i = 0; i < MAX_DAYS_IN_MONTH_DISPLAY; i++) {

                var y_offset = parseInt(i / 7) * this.font_size * 2;
                var x_offset = i % 7 * this.font_size * this.daySpacing;

                this.displayDays[i] = new LCARSText("day_" + i.toString(), i.toString(), x_offset, i + y_offset + header_offset, this.properties);
                this.displayDays[i].setTextFontSize(this.font_size);

                if (parseInt(i / 7) == 1) {
                    this.displayDays[i].textElement.setAttribute("x", 0);
                }

                this.element.appendChild(this.displayDays[i].element);
            }

            return "";
        }

        /**
         * This method updates the displayed calendar.
         * <p>
         * It retrieves the appropriate string literals, and formats the standard seven (7) day,
         * four (4) to six (6) week month array based on the starting day of the week for the
         * particular month. The weeks start on Sundays and end on Saturdays. The days are color
         * coded as follows:
         * <ul>
         * <li> Sunday    orange          <code>[EC_ORANGE]</code>
         * <li> Weekday   light blue      <code>[EC_L_BLUE]</code>
         * <li> Saturday  blue            <code>[EC_BLUE]</code>
         * <li> Today     yellow          <code>[EC_YELLOW]</code>
         * </ul>
         */

    }, {
        key: "updateCalendar",
        value: function updateCalendar() {

            /**
             * Get the strings for the display month and the display year for the calendar header.
             */
            this.displayMonthString = _LCARS.LCARS.MONTHS[this.displayMonth + 1];
            this.displayYearString = this.displayYear.toString();

            /**
             * Set the month and year text for the calendar header.
             */
            this.monthText.setText(this.displayMonthString);
            this.yearText.setText(this.displayYearString);

            /**
             * Get the starting day of week for the month.
             */
            var startDay = this.dayOfWeek(this.displayMonth, 1, this.displayYear);

            /**
             * Get the number of the days in the display month.
             */
            var daysInMonth = this.getDaysInMonth(this.displayMonth, this.displayYear);

            /**
             * Clear the calendar of text, and fill it with the appropriate days
             * for the display month and the display year.
             */
            for (var i = 0; i < MAX_DAYS_IN_MONTH_DISPLAY; i++) {
                if (i < startDay || i > startDay + daysInMonth - 1) {
                    this.displayDays[i].setText("");
                } else {
                    var day = i - startDay + 1;
                    this.displayDays[i].setText(day);

                    if (this.isWeekday(day)) {
                        this.displayDays[i].textElement.setAttribute("fill", _LCARS.LCARS.getColor(_LCARS.LCARS.EC_L_BLUE));
                    }
                    if (this.isSunday(parseInt(day))) {
                        this.displayDays[i].textElement.setAttribute("fill", _LCARS.LCARS.getColor(_LCARS.LCARS.EC_ORANGE));
                    }
                    if (this.isSaturday(day)) {
                        this.displayDays[i].textElement.setAttribute("fill", _LCARS.LCARS.getColor(_LCARS.LCARS.EC_BLUE));
                    }

                    if (this.isToday(day)) {
                        this.displayDays[i].textElement.setAttribute("fill", _LCARS.LCARS.getColor(_LCARS.LCARS.EC_YELLOW));
                    }
                }
            }
        }

        /**
         * This method is run once a second to detect the day roll-over. So, the calendar can
         * be automatically updated. When the roll-over is detected, the new day is set as "today",
         * and the display is updated.
         */

    }, {
        key: "update",
        value: function update() {

            /** Get the current date. */
            var rightNow = new Date();

            /**
             * Compare the current date (year, month, and day of month) to the date stored by
             * the <code>setToday()</code> method. If they are not the same, set the new today,
             * and update the displayed calendar.
             */
            if (!(rightNow.getYear() == this.now.getYear()) || !(rightNow.getMonth() == this.now.getMonth()) || !(rightNow.getDate() == this.now.getDate())) {
                //alert("now: " + this.now.getYear() + ", " + this.now.getMonth() + ", " + this.now.getDate() +
                //      "  right now: " + rightNow.getYear() + ", " + rightNow.getMonth() + ", " + rightNow.getDate());
                this.setToday();
                this.displayMonth = this.currentMonth;
                this.displayYear = this.currentYear;
                this.updateCalendar();
            }
        }

        /**
         * Function to start the auto update of the calendar. It retrieves a reference
         * to the calendar object, and passes it to an interval timer. The update interval
         * is fixed to one second.
         */

    }, {
        key: "startAutoUpdate",
        value: function startAutoUpdate() {
            var thisObj = this; // Can't just pass "this" to the setInterval function.

            thisObj.intervalVariable = setInterval(function (thisObj) {
                return function () {
                    thisObj.update();
                };
            }(this), 1000); // Update is fixed to one second.
        }

        /**
         * Function to stop the auto update of the calendar. It test the interval variable,
         * and if it is not null, it clears it.
         */

    }, {
        key: "stopAutoUpdate",
        value: function stopAutoUpdate() {
            if (!(this.intervalVariable == null)) {
                clearInterval(this.intervalVariable);
            }
        }

        /**
         * Function to clear the calendar day SVG elements of text.
         * <p>
         * A convenience function for clearing the day elements of text. The SVG text of each
         * element is set to an empty string. Not really necessary, since the method that updates
         * the calendar array of days resets the text of the entire array.
         */

    }, {
        key: "clearCalendarText",
        value: function clearCalendarText() {
            for (var i = 0; i < MAX_DAYS_IN_MONTH_DISPLAY; i++) {
                this.displayDays[i].setText("");
            }
        }

        /** Function to set the spacing between the day elements of the calendar.
         *
         * @param spaceMultiplier multiplies the font size to produce a space between the day elements
         */

    }, {
        key: "setDaySpacing",
        value: function setDaySpacing(spaceMultiplier) {
            this.daySpacing = spaceMultiplier;
        }

        /**
         * Set the calendar object's date to today's date.
         */

    }, {
        key: "setToday",
        value: function setToday() {
            /** Get the current date and time. */
            this.now = new Date();

            /** Set the object's <code>today</code> attribute to the current date. */
            this.today = this.now.getDate();

            /** Set the object's current month and year from the current date/time.
             Add 1900 to the current year to get a valid four digit year. Note: javascript
             counts years from 1900 (a Y2K thing). */
            this.currentMonth = this.now.getMonth();
            this.currentYear = this.now.getYear();
            this.currentYear += 1900;
        }

        /**
         * Returns <code>true</code> if the year is a four (4) digit year.
         *
         * @param year the year as a number
         */

    }, {
        key: "isFourDigitYear",
        value: function isFourDigitYear(year) {

            /** First, check to make sure the argument is a number. If not, return <code>false</code>. */
            if (isNaN(year)) {
                return false;
            }
            /** If it is a number, check the length. If length is 4, return <code>true</code>,
             else <code>false</code>. */
            else if (year.toString().length == 4) {
                    return true;
                } else {
                    return false;
                }
        }

        /**
         * Decrement the year for the displayed calendar month.
         */

    }, {
        key: "decrementYear",
        value: function decrementYear() {
            var year = this.displayYear - 1;
            if (this.isFourDigitYear(year)) {
                this.displayYear = year;
                this.updateCalendar();
            }
        }

        /**
         * Decrement the month for the displayed calendar.
         */

    }, {
        key: "decrementMonth",
        value: function decrementMonth() {
            var month = this.displayMonth - 1;
            if (month < 0) {
                month = 11;
            }
            this.displayMonth = month;
            this.updateCalendar();
        }

        /**
         * Increment the year for the displayed calendar month.
         */

    }, {
        key: "incrementYear",
        value: function incrementYear() {
            var year = this.displayYear + 1;
            if (this.isFourDigitYear(year)) {
                this.displayYear = year;
                this.updateCalendar();
            } else {
                alert("displayYear + 1: " + this.displayYear + "  is not a 4 digit year.");
            }
        }

        /**
         * Increment the month for the displayed calendar.
         */

    }, {
        key: "incrementMonth",
        value: function incrementMonth() {
            var month = this.displayMonth + 1;
            if (month > 11) {
                month = 0;
            }
            this.displayMonth = month;
            this.updateCalendar();
        }

        /**
         * Returns true if the argument specified four digit year is a leap year.
         *
         * @param year the four digit year
         * @return  true if the given year is a leap year, false, if not
         */

    }, {
        key: "isLeapYear",
        value: function isLeapYear(year) {
            /**
             * If the current year is evenly divisible by 4 and not by 100, return true.
             */
            if (year % 4 == 0 && year % 100 != 0) {
                return true;
            }

            /**
             * If the current year is evenly divisible by 400, return true.
             */
            if (year % 400 == 0) {
                return true;
            }

            /**
             * If none of the leap year conditions is met, method falls through,
             * and returns false.
             */
            return false;
        }

        /**
         * Returns the day of the week according to the Gregorian calendar, given
         * the <code>month</code>, <code>day</code>, and <code>year</code>.
         * January through December equal 0 - 11, and Sunday through Saturday equal
         * 0 - 6.
         * @param month  the month of the date
         * @param day  the day of the date
         * @param year  the year of the date
         * @return  the day of the week according to the Gregorian calendar
         */

    }, {
        key: "dayOfWeek",
        value: function dayOfWeek(month, day, year) {

            var date = new Date(year, month, day);

            return date.getDay();
        }

        /**
         * Returns <code>true</code> if the day of the week integer argument is greater
         * than Sunday (0) and less than Saturday (6).
         * <ul>
         * <li>Sunday = 0</li>
         * <li>Monday = 1</li>
         * <li>Tuesday = 2</li>
         * <li>Wednesday = 3</li>
         * <li>Thursday = 4</li>
         * <li>Friday = 5</li>
         * <li>Saturday = 6</li>
         * </ul>
         *
         * @param day an integer between 1 and 5 inclusive to return <code>true</code>, else <code>false</code>
         * @return <code>true</code> if weekday (Mon - Fri), <code>false</code> if not
         */

    }, {
        key: "isWeekday",
        value: function isWeekday(day) {
            var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);

            if (_day > 0 && _day < 6) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Returns <code>true</code> if the <code>day</code> argument indicates a Sunday, an integer 0.
         *
         * @param day an integer value for the day
         * @return <code>true</code> if Sunday, <code>false</code> if not
         */

    }, {
        key: "isSunday",
        value: function isSunday(day) {

            var date = new Date(this.displayYear, this.displayMonth, day);

            var _day = date.getDay();

            if (_day == 0) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Returns <code>true</code> if the <code>day</code> argument indicates a Saturday, an integer 6.
         *
         * @param day an integer value for the day
         * @return <code>true</code> if Saturday, <code>false</code> if not
         */

    }, {
        key: "isSaturday",
        value: function isSaturday(day) {
            var _day = this.dayOfWeek(this.displayMonth, day, this.displayYear);

            if (_day == 6) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Returns <code>true</code> if the <code>day</code> argument indicates the current day.
         *
         * @param day an integer value for the day
         * @return <code>true</code> if today, <code>false</code> if not
         */

    }, {
        key: "isToday",
        value: function isToday(day) {
            if (this.displayYear == this.currentYear && this.displayMonth == this.currentMonth && day == this.today) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * Returns the number of days in the argument specified month and year.
         *
         * @param month  the integer (0 - 11) identifier of the month
         * @param year  the four digit year
         */

    }, {
        key: "getDaysInMonth",
        value: function getDaysInMonth(month, year) {
            var days = 31;

            if (month == 3 || month == 5 || month == 8 || month == 10) {
                days = 30;
            } else if (month == 1) {
                if (this.isLeapYear(year)) {
                    days = 29;
                } else {
                    days = 28;
                }
            }
            return days;
        }
    }]);

    return LCARSCalendar;
}(LCARSComponent);

/**
 *
 */


var LCARSEllipsisSpinner = exports.LCARSEllipsisSpinner = function (_LCARSComponent12) {
    _inherits(LCARSEllipsisSpinner, _LCARSComponent12);

    function LCARSEllipsisSpinner(id, x, y, properties) {
        _classCallCheck(this, LCARSEllipsisSpinner);

        var _this12 = _possibleConstructorReturn(this, (LCARSEllipsisSpinner.__proto__ || Object.getPrototypeOf(LCARSEllipsisSpinner)).call(this, id, "", x, y, properties));

        _this12.animated = false;

        _this12.radius = _this12.fontSize / 10;

        /* Create the DOM object for the first period shape animation, and set its attributes. */
        _this12.animateElement1 = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        _this12.animateElement1.setAttribute("id", _this12.element.id + "_shape_1_Animate");
        _this12.animateElement1.setAttribute("attributeType", "XML");
        _this12.animateElement1.setAttribute("attributeName", "opacity");
        _this12.animateElement1.setAttribute("repeatCount", "indefinite");
        _this12.animateElement1.setAttribute("dur", "1s");
        _this12.animateElement1.setAttribute("values", "0;1;0");
        _this12.animateElement1.setAttribute("begin", "0.1");

        /* Create the DOM object for the first period shape animation, and set its attributes. */
        _this12.animateElement2 = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        _this12.animateElement2.setAttribute("id", _this12.element.id + "_shape_2_Animate");
        _this12.animateElement2.setAttribute("attributeType", "XML");
        _this12.animateElement2.setAttribute("attributeName", "opacity");
        _this12.animateElement2.setAttribute("repeatCount", "indefinite");
        _this12.animateElement2.setAttribute("dur", "1s");
        _this12.animateElement2.setAttribute("values", "0;1;0");
        _this12.animateElement2.setAttribute("begin", "0.2");

        /* Create the DOM object for the first period shape animation, and set its attributes. */
        _this12.animateElement3 = document.createElementNS(_LCARS.LCARS.svgNS, "animate");
        _this12.animateElement3.setAttribute("id", _this12.element.id + "_shape_3_Animate");
        _this12.animateElement3.setAttribute("attributeType", "XML");
        _this12.animateElement3.setAttribute("attributeName", "opacity");
        _this12.animateElement3.setAttribute("repeatCount", "indefinite");
        _this12.animateElement3.setAttribute("dur", "1s");
        _this12.animateElement3.setAttribute("values", "0;1;0");
        _this12.animateElement3.setAttribute("begin", "0.3");

        _this12.drawShape();

        _this12.start();
        return _this12;
    }

    _createClass(LCARSEllipsisSpinner, [{
        key: "drawShape",
        value: function drawShape() {
            this.shapeElement1 = document.createElementNS(_LCARS.LCARS.svgNS, "circle");
            this.shapeElement1.setAttributeNS(null, "cx", this.radius);
            this.shapeElement1.setAttributeNS(null, "cy", 0);
            this.shapeElement1.setAttributeNS(null, "r", this.radius);
            this.shapeElement1.setAttributeNS(null, "fill", this.color);
            this.shapeElement1.setAttributeNS(null, "stroke", "none");

            this.shapeElement2 = document.createElementNS(_LCARS.LCARS.svgNS, "circle");
            this.shapeElement2.setAttributeNS(null, "cx", this.radius + this.radius * 3.33);
            this.shapeElement2.setAttributeNS(null, "cy", 0);
            this.shapeElement2.setAttributeNS(null, "r", this.radius);
            this.shapeElement2.setAttributeNS(null, "fill", this.color);
            this.shapeElement2.setAttributeNS(null, "stroke", "none");

            this.shapeElement3 = document.createElementNS(_LCARS.LCARS.svgNS, "circle");
            this.shapeElement3.setAttributeNS(null, "cx", this.radius + this.radius * 3.33 * 2);
            this.shapeElement3.setAttributeNS(null, "cy", 0);
            this.shapeElement3.setAttributeNS(null, "r", this.radius);
            this.shapeElement3.setAttributeNS(null, "fill", this.color);
            this.shapeElement3.setAttributeNS(null, "stroke", "none");

            this.element.appendChild(this.shapeElement1);
            this.element.appendChild(this.shapeElement2);
            this.element.appendChild(this.shapeElement3);
        }
    }, {
        key: "start",
        value: function start() {
            if (this.animated == false) {
                this.shapeElement1.appendChild(this.animateElement1);
                this.shapeElement2.appendChild(this.animateElement2);
                this.shapeElement3.appendChild(this.animateElement3);

                this.animated = true;
            }
        }
    }, {
        key: "stop",
        value: function stop() {
            if (this.animated == true) {
                if (this.animateElement1 != null) {
                    this.animateElement1.remove();
                }
                if (this.animateElement2 != null) {
                    this.animateElement2.remove();
                }
                if (this.animateElement3 != null) {
                    this.animateElement3.remove();
                }

                this.animated = false;
            }
        }
    }]);

    return LCARSEllipsisSpinner;
}(LCARSComponent);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HTTPStatusScreen = exports.LCARSBasicScreen = exports.LCARSBlankScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

var _LCARSComponents = __webpack_require__(1);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LCARSScreen = function () {
    function LCARSScreen(id, title, width, height, properties) {
        _classCallCheck(this, LCARSScreen);

        this.id = id;
        this.title = title;
        this.subtitle = "";
        this.width = width;
        this.height = height;
        this.properties = properties;

        if (this.properties == undefined) {
            this.properties = _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_LABEL_E;
        }

        this.fontSize = _LCARS.LCARS.getLCARSFontSize(this.properties);

        document.body.style.MozUserSelect = 'none';
        document.body.style.WebkitUserSelect = 'none';

        this.LEFT = 10;
        this.TOP = 5;
        this.RIGHT = 10;
        this.BOTTOM = 15;

        this.element = document.createElementNS(_LCARS.LCARS.svgNS, "svg");

        this.element.setAttribute("id", this.id);
        this.element.setAttribute("width", this.width);
        this.element.setAttribute("height", this.height);
    }

    _createClass(LCARSScreen, [{
        key: 'drawScreen',
        value: function drawScreen() {}
    }, {
        key: 'drawHeader',
        value: function drawHeader() {

            this.CAP_WIDTH = this.fontSize * 0.6;
            this.headerThickness = this.fontSize * 0.9;

            this.titleElement = new _LCARSComponents.LCARSText("screen_title", this.title, this.width - (this.CAP_WIDTH + this.RIGHT + _LCARS.LCARS.LCARS_SPACE), this.fontSize - 2, this.properties);
            this.addComponent(this.titleElement);

            var textWidth1 = _LCARS.LCARS.getTextWidth(this.title, Math.round(this.fontSize * 1.0) + "pt " + _LCARS.LCARS.getFont());
            var textWidth2 = _LCARS.LCARS.getTextWidth2(this.title, Math.round(this.fontSize * 1.0) + "pt " + _LCARS.LCARS.getFont());
            var textWidth3 = _LCARS.LCARS.getTextWidth3(this.title, this.fontSize);
            //console.log("TextWidth-1 textWidth1: " + textWidth1);
            //console.log("TextWidth-2 textWidth2: " + textWidth2);
            //console.log("TextWidth-3 textWidth3: " + textWidth3);
            var textWidth = textWidth3;

            /**
             * Create the title bar with end caps.
             */
            this.hb_end_cap_w = new _LCARSComponents.LCARSRectangle("hb_end_cap_w", "", this.LEFT, this.TOP, this.CAP_WIDTH, this.headerThickness, _LCARS.LCARS.ES_RECT_RND_W | this.properties);
            this.addComponent(this.hb_end_cap_w);

            this.rect_title_bar = new _LCARSComponents.LCARSRectangle("rect_title_bar", "", this.LEFT + this.CAP_WIDTH + _LCARS.LCARS.LCARS_SPACE, this.TOP, this.width - 3 * _LCARS.LCARS.LCARS_SPACE - 2 * this.CAP_WIDTH - this.LEFT - this.RIGHT - textWidth, this.headerThickness, this.properties);
            this.addComponent(this.rect_title_bar);

            this.hb_end_cap_e = new _LCARSComponents.LCARSRectangle("hb_end_cap_e", "", this.width - (this.CAP_WIDTH + this.RIGHT), this.TOP, this.CAP_WIDTH, this.headerThickness, _LCARS.LCARS.ES_RECT_RND_E | this.properties);
            this.addComponent(this.hb_end_cap_e);
        }
    }, {
        key: 'drawFooter',
        value: function drawFooter() {

            this.CAP_WIDTH = this.fontSize * 0.6;
            this.footerThickness = this.fontSize * 0.9;

            /**
             * Create the title bar with end caps.
             */
            this.fb_end_cap_w = new _LCARSComponents.LCARSRectangle("fb_end_cap_w", "", this.LEFT, this.height - this.footerThickness - this.BOTTOM, this.CAP_WIDTH, this.footerThickness, _LCARS.LCARS.ES_RECT_RND_W | this.properties);
            this.addComponent(this.fb_end_cap_w);

            this.rect_footr_bar = new _LCARSComponents.LCARSRectangle("rect_footr_bar", "", this.LEFT + this.CAP_WIDTH + _LCARS.LCARS.LCARS_SPACE, this.height - this.footerThickness - this.BOTTOM, this.width - 2 * _LCARS.LCARS.LCARS_SPACE - 2 * this.CAP_WIDTH - this.LEFT - this.RIGHT, this.footerThickness, this.properties);
            this.addComponent(this.rect_footr_bar);

            this.fb_end_cap_e = new _LCARSComponents.LCARSRectangle("fb_end_cap_e", "", this.width - (this.CAP_WIDTH + this.RIGHT), this.height - this.footerThickness - this.BOTTOM, this.CAP_WIDTH, this.footerThickness, _LCARS.LCARS.ES_RECT_RND_E | this.properties);
            this.addComponent(this.fb_end_cap_e);
        }
    }, {
        key: 'setViewBox',
        value: function setViewBox(vb_x, vb_y, vb_width, vb_height) {
            this.vb_x = vb_x;
            this.vb_y = vb_y;
            this.vb_width = vb_width;
            this.vb_height = vb_height;

            this.element.setAttribute("width", '100%');
            this.element.setAttribute("height", '100%');

            this.element.setAttribute("viewBox", this.vb_x + " " + this.vb_y + " " + this.vb_width + " " + this.vb_height);
        }
    }, {
        key: 'setTransform',
        value: function setTransform(transform) {
            this.element.style.webkitTransform = transform;
        }
    }, {
        key: 'addComponent',
        value: function addComponent(component) {
            this.element.appendChild(component.element);
        }
    }]);

    return LCARSScreen;
}();

/**
 * Blank Screen - No header or footer or title
 */


var LCARSBlankScreen = exports.LCARSBlankScreen = function (_LCARSScreen) {
    _inherits(LCARSBlankScreen, _LCARSScreen);

    function LCARSBlankScreen(id, title, width, height, properties) {
        _classCallCheck(this, LCARSBlankScreen);

        var _this = _possibleConstructorReturn(this, (LCARSBlankScreen.__proto__ || Object.getPrototypeOf(LCARSBlankScreen)).call(this, id, title, width, height, properties));

        _this.drawScreen();

        return _this;
    }

    return LCARSBlankScreen;
}(LCARSScreen);

/**
 * Basic Screen - Includes a header, including the screen title, and a footer.
 */


var LCARSBasicScreen = exports.LCARSBasicScreen = function (_LCARSScreen2) {
    _inherits(LCARSBasicScreen, _LCARSScreen2);

    function LCARSBasicScreen(id, title, width, height, properties) {
        _classCallCheck(this, LCARSBasicScreen);

        var _this2 = _possibleConstructorReturn(this, (LCARSBasicScreen.__proto__ || Object.getPrototypeOf(LCARSBasicScreen)).call(this, id, title, width, height, properties));

        _this2.drawScreen();

        _this2.drawHeader();

        _this2.drawFooter();
        return _this2;
    }

    return LCARSBasicScreen;
}(LCARSScreen);

var HTTP_STATUS_CODES = {
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '307': 'Temporary Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Request Entity Too Large',
    '414': 'Request-URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Requested Range Not Satisfiable',
    '417': 'Expectation Failed',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported'
};

/**
 * HTTP Status Screen - Includes a header, including the HTTP status as the screen title, and a footer.
 */

var HTTPStatusScreen = exports.HTTPStatusScreen = function (_LCARSScreen3) {
    _inherits(HTTPStatusScreen, _LCARSScreen3);

    function HTTPStatusScreen(id, width, height, properties, statusCode, statusDetailMessage) {
        _classCallCheck(this, HTTPStatusScreen);

        var _this3 = _possibleConstructorReturn(this, (HTTPStatusScreen.__proto__ || Object.getPrototypeOf(HTTPStatusScreen)).call(this, id, statusCode + " - " + HTTP_STATUS_CODES[statusCode].toUpperCase(), width, height, properties));

        _this3.statusCode = statusCode;
        _this3.statusDetailMessage = statusDetailMessage;
        _this3.statusMessage = "Unknown";

        if (statusCode >= 200 && statusCode < 300) {
            _this3.statusMessage = "Success";
        } else if (statusCode >= 300 && statusCode < 400) {
            _this3.statusMessage = "Redirection";
        } else if (statusCode >= 400 && statusCode < 500) {
            _this3.statusMessage = "Access Denied";
        } else if (statusCode >= 500 && statusCode < 600) {
            _this3.statusMessage = "Server Error";
        }

        _this3.drawHeader();

        _this3.drawFooter();

        _this3.drawScreen();

        return _this3;
    }

    _createClass(HTTPStatusScreen, [{
        key: 'drawScreen',
        value: function drawScreen() {

            var startx = this.width * 0.12;
            var starty = this.height * 0.25;
            var indentx = startx + 100;

            this.text_message = new _LCARSComponents.LCARSText(this.id + "_text_message", this.statusMessage.toUpperCase(), startx, starty, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_RED);
            this.text_message.setTextFontSize(110);
            this.addComponent(this.text_message);

            this.text_message_sub_1 = new _LCARSComponents.LCARSText(this.id + "_text_message_sub_1", this.statusDetailMessage.toUpperCase(), indentx, starty + 100, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_RED);
            this.addComponent(this.text_message_sub_1);

            this.text_message_sub_2 = new _LCARSComponents.LCARSText(this.id + "_text_message_sub_2", "STATUS: " + this.title, indentx, starty + 150, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_RED);
            this.addComponent(this.text_message_sub_2);
        }
    }]);

    return HTTPStatusScreen;
}(LCARSScreen);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AlarmKeypadScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

var _KeypadScreenPortrait = __webpack_require__(7);

var _KeypadScreenLandscape = __webpack_require__(6);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OPEN = 'open';
var CLOSE = 'close';
var MESSAGE = 'message';

var AlarmKeypadScreen = exports.AlarmKeypadScreen = function () {
    function AlarmKeypadScreen() {
        _classCallCheck(this, AlarmKeypadScreen);

        this.host = window.location.hostname;
        this.connected = false;

        this.portraitScreen = new _KeypadScreenPortrait.KeypadScreenPortrait();
        this.portraitScreen.setVisible('hidden');
        this.portraitScreen.divElement.style.webkitTransform = 'scale(0.45) translateX(-430px) translateY(-770px)';
        document.body.appendChild(this.portraitScreen.divElement);

        this.landscapeScreen = new _KeypadScreenLandscape.KeypadScreenLandscape();
        this.landscapeScreen.setVisible('hidden');
        this.landscapeScreen.divElement.style.webkitTransform = 'scale(0.585) translateX(-350px) translateY(-190px)';
        document.body.appendChild(this.landscapeScreen.divElement);

        this.pin = false;
        this.mode = 2;

        this.ready = false;
        this.armedAway = false;
        this.armedStay = false;
        this.messageBeeps = 0;
        this.acPowerOn = true;
        this.chime = false;
        this.alarmOccurred = false;
        this.alarmSounding = false;
        this.batteryOk = true;
        this.entryDelay = true;

        this.showArmedNone();
        this.showReadyNone();

        this.updateModeDisplay();
        this.updateStateIndicators();
    }

    _createClass(AlarmKeypadScreen, [{
        key: 'updateAlarmPanelState',
        value: function updateAlarmPanelState(panelMessage) {
            //console.log("unparsed panelMessage: " + panelMessage);
            var stateObject = JSON.parse(panelMessage);

            if (stateObject.type == 'key-pad-message') {
                this.ready = stateObject.ready == 'true' ? true : false;
                this.armedAway = stateObject.armedAway == 'true' ? true : false;
                this.armedStay = stateObject.armedStay == 'true' ? true : false;
                this.acPowerOn = stateObject.acPower == 'on' ? true : false;
                this.chime = stateObject.chime == 'enabled' ? true : false;
                this.alarmOccurred = stateObject.alarmOccurred == 'true' ? true : false;
                this.alarmSounding = stateObject.alarmSounding == 'true' ? true : false;
                this.batteryOk = stateObject.battery == 'ok' ? true : false;
                this.entryDelay = stateObject.entryDelay == 'on' ? true : false;

                this.messageBeeps = parseInt(stateObject.messageBeeps);

                this.updateStateIndicators();
                this.appendMessage(stateObject.keypadText);
            } else if (stateObject.type == 'authentication-message') {
                if (stateObject.pin == 'yes') {
                    this.pin = true;
                } else {
                    this.pin = false;
                }
            } else if (stateObject.type == 'connection-message') {
                if (stateObject.connection == 'connected') {
                    if (!this.connected) {
                        this.connect(this.host);
                        this.connected = true;
                    } else {
                        this.heartbeat();
                    }
                } else if (stateObject.connection == 'disconnected') {
                    this.disconnect(this.host);
                    this.connected = false;
                }
            }
        }

        /**
         * Update the display based on the orientation of the device. Note the 180 degree case
         * is not detected in iOS 8.x.
         *    0: portrait screen is visible, landscape screen is hidden
         *   90: portrait screen is hidden, landscape screen is visible
         *  -90: portrait screen is hidden, landscape screen is visible
         *  180: no screen change, last screen remains
         */

    }, {
        key: 'setOrientation',
        value: function setOrientation(orientation) {
            switch (orientation) {
                case -90:
                case 90:
                    //console.log("landscape window orientation: " + window.orientation);
                    this.portraitScreen.setVisible('hidden');
                    this.landscapeScreen.setVisible('visible');
                    break;
                default:
                    //console.log("portrait window orientation: " + window.orientation);
                    this.landscapeScreen.setVisible('hidden');
                    this.portraitScreen.setVisible('visible');
                    break;
            }
        }
    }, {
        key: 'appendMessage',
        value: function appendMessage(message) {
            this.portraitScreen.messagesArea.appendLine(message);
        }
    }, {
        key: 'updateDisplay',
        value: function updateDisplay(updateType, host, data) {
            if (updateType == OPEN) {
                this.onOpen(host, data);
            } else if (updateType == CLOSE) {
                this.onClose(host);
            } else if (updateType == MESSAGE) {
                this.onMessage(host, data);
            } else {
                this.appendMessage("UNKNOWN update type: " + updateType);
            }
        }
    }, {
        key: 'connect',
        value: function connect(host, message) {
            this.updateConnectionIndicator('connected');
            this.appendMessage("connected to: " + host);

            this.portraitScreen.indicatorConnected.on(true);
            this.landscapeScreen.indicatorConnected.on(true);

            if (message !== undefined) this.appendMessage(message);
        }
    }, {
        key: 'disconnect',
        value: function disconnect(host) {
            this.updateConnectionIndicator('disconnected');
            this.appendMessage("disconnected from: " + host);
        }
    }, {
        key: 'heartbeat',
        value: function heartbeat() {
            /* Blink the connection indicator. */
            this.portraitScreen.indicatorConnected.offBlink();
            this.landscapeScreen.indicatorConnected.offBlink();

            /* Decode the data. */
        }
    }, {
        key: 'updateStateIndicators',
        value: function updateStateIndicators() {

            if (this.armedStay || this.armedAway) {
                this.portraitScreen.indicatorReady.off();
                this.landscapeScreen.indicatorReady.off();
                this.portraitScreen.indicatorArmed.on();
                this.landscapeScreen.indicatorArmed.on();

                this.showReadyNone();

                if (this.armedStay) {
                    if (this.entryDelay) {
                        this.showArmedStay();
                    } else {
                        this.showArmedInstant();
                    }
                } else if (this.armedAway) {
                    if (this.entryDelay) {
                        this.showArmedAway();
                    } else {
                        this.showArmedMax();
                    }
                }
            } else {
                this.portraitScreen.indicatorArmed.off();
                this.landscapeScreen.indicatorArmed.off();

                if (this.ready == true) {
                    this.portraitScreen.indicatorReady.on();
                    this.landscapeScreen.indicatorReady.on();

                    this.showArmedNone();
                } else {
                    this.portraitScreen.indicatorReady.off();
                    this.landscapeScreen.indicatorReady.off();
                }

                if (this.chime) {
                    this.showChime();
                } else {
                    this.hideChime();
                }
            }
        }
    }, {
        key: 'updateConnectionIndicator',
        value: function updateConnectionIndicator(status) {
            if (status == 'connected') {
                this.portraitScreen.indicatorConnected.on();
                this.portraitScreen.indicatorConnected.setText("CONNECTED");
                this.landscapeScreen.indicatorConnected.on();
                this.landscapeScreen.indicatorConnected.setText("CONNECTED");
            } else {
                this.portraitScreen.indicatorConnected.warning(_LCARS.LCARS.EC_RED);
                this.portraitScreen.indicatorConnected.setText("NOT CONNECTED");
                this.landscapeScreen.indicatorConnected.warning(_LCARS.LCARS.EC_RED);
                this.landscapeScreen.indicatorConnected.setText("NOT CONNECTED");
                this.portraitScreen.indicatorReady.off();
                this.portraitScreen.indicatorArmed.off();
                this.landscapeScreen.indicatorReady.off();
                this.landscapeScreen.indicatorArmed.off();
                this.portraitScreen.disarmButton.setEnabled(false);
                this.portraitScreen.armButton.setEnabled(false);
                this.landscapeScreen.disarmButton.setEnabled(false);
                this.landscapeScreen.armButton.setEnabled(false);
                this.showArmedNone();
                this.showReadyNone();
            }
        }
    }, {
        key: 'updateModeDisplay',
        value: function updateModeDisplay() {
            //console.log("mode = " + this.mode);
            if (this.mode == 1) {
                this.portraitScreen.keypad.setVisible(false);
                this.landscapeScreen.keypad.setVisible(false);
                this.portraitScreen.armButton.setVisible(true);
                this.portraitScreen.disarmButton.setVisible(true);
                this.landscapeScreen.armButton.setVisible(true);
                this.landscapeScreen.disarmButton.setVisible(true);
                if (this.ready) {
                    this.portraitScreen.armButton.setEnabled(true);
                    this.portraitScreen.disarmButton.setEnabled(false);
                    this.landscapeScreen.armButton.setEnabled(true);
                    this.landscapeScreen.disarmButton.setEnabled(false);
                } else if (this.armedStay || this.armedAway) {
                    this.portraitScreen.armButton.setEnabled(false);
                    this.portraitScreen.disarmButton.setEnabled(true);
                    this.landscapeScreen.armButton.setEnabled(false);
                    this.landscapeScreen.disarmButton.setEnabled(true);
                } else {
                    this.portraitScreen.armButton.setEnabled(false);
                    this.portraitScreen.disarmButton.setEnabled(false);
                    this.landscapeScreen.armButton.setEnabled(false);
                    this.landscapeScreen.disarmButton.setEnabled(false);
                }
            } else if (this.mode == 2) {
                this.portraitScreen.keypad.setVisible(true);
                this.landscapeScreen.keypad.setVisible(true);
                this.portraitScreen.disarmButton.setVisible(false);
                this.portraitScreen.armButton.setVisible(false);
                this.landscapeScreen.disarmButton.setVisible(false);
                this.landscapeScreen.armButton.setVisible(false);
            }
        }
    }, {
        key: 'addKeypadEventListener',
        value: function addKeypadEventListener(event, listener) {
            this.portraitScreen.keypad.addEventListener(event, listener);
            this.landscapeScreen.keypad.addEventListener(event, listener);
        }
    }, {
        key: 'addArmEventListener',
        value: function addArmEventListener(event, listener) {
            this.portraitScreen.armButton.addEventListener(event, listener);
            this.landscapeScreen.armButton.addEventListener(event, listener);
        }
    }, {
        key: 'addDisarmEventListener',
        value: function addDisarmEventListener(event, listener) {
            this.portraitScreen.disarmButton.addEventListener(event, listener);
            this.landscapeScreen.disarmButton.addEventListener(event, listener);
        }
    }, {
        key: 'addModeEventListener',
        value: function addModeEventListener(event, listener) {
            this.portraitScreen.mode_1.addEventListener(event, listener);
            this.landscapeScreen.mode_1.addEventListener(event, listener);
            this.portraitScreen.mode_2.addEventListener(event, listener);
            this.landscapeScreen.mode_2.addEventListener(event, listener);
        }
    }, {
        key: 'showArmedAway',
        value: function showArmedAway() {
            this.hideArmedStay();
            this.hideArmedMax();
            this.hideArmedInstant();
            this.hideArmedSpacer();

            this.landscapeScreen.rect_upper_away.setVisible(true);
            this.landscapeScreen.rectSpacer_upper_away.setVisible(true);
        }
    }, {
        key: 'showArmedStay',
        value: function showArmedStay() {
            this.hideArmedAway();
            this.hideArmedMax();
            this.hideArmedInstant();
            this.hideArmedSpacer();

            this.landscapeScreen.rect_upper_stay.setVisible(true);
            this.landscapeScreen.rectSpacer_upper_stay.setVisible(true);
            this.landscapeScreen.rectSpacer_lower_stay.setVisible(true);
        }
    }, {
        key: 'showArmedMax',
        value: function showArmedMax() {
            this.hideArmedStay();
            this.hideArmedAway();
            this.hideArmedInstant();
            this.hideArmedSpacer();

            this.landscapeScreen.rect_upper_max.setVisible(true);
            this.landscapeScreen.rectSpacer_upper_m_i.setVisible(true);
        }
    }, {
        key: 'showArmedInstant',
        value: function showArmedInstant() {
            this.hideArmedStay();
            this.hideArmedAway();
            this.hideArmedMax();
            this.hideArmedSpacer();

            this.landscapeScreen.rect_upper_instant.setVisible(true);
            this.landscapeScreen.rectSpacer_upper_m_i.setVisible(true);
        }
    }, {
        key: 'showArmedNone',
        value: function showArmedNone() {
            this.hideArmedStay();
            this.hideArmedAway();
            this.hideArmedMax();
            this.hideArmedInstant();

            this.landscapeScreen.rectSpacer_upper.setVisible(true);
        }
    }, {
        key: 'showChime',
        value: function showChime() {
            this.landscapeScreen.rectSpacer_lower.setVisible(false);

            this.landscapeScreen.rectSpacer_upper_chime.setVisible(true);
            this.landscapeScreen.rect_chime.setVisible(true);
            this.landscapeScreen.rectSpacer_lower_chime.setVisible(true);
        }
    }, {
        key: 'showReadyNone',
        value: function showReadyNone() {
            this.hideChime();
        }
    }, {
        key: 'hideArmedAway',
        value: function hideArmedAway() {
            this.landscapeScreen.rect_upper_away.setVisible(false);
            this.landscapeScreen.rectSpacer_upper_away.setVisible(false);
        }
    }, {
        key: 'hideArmedStay',
        value: function hideArmedStay() {
            this.landscapeScreen.rect_upper_stay.setVisible(false);
            this.landscapeScreen.rectSpacer_upper_stay.setVisible(false);
        }
    }, {
        key: 'hideArmedMax',
        value: function hideArmedMax() {
            this.landscapeScreen.rect_upper_max.setVisible(false);
            this.landscapeScreen.rectSpacer_upper_m_i.setVisible(false);
        }
    }, {
        key: 'hideArmedInstant',
        value: function hideArmedInstant() {
            this.landscapeScreen.rect_upper_instant.setVisible(false);
            this.landscapeScreen.rectSpacer_upper_m_i.setVisible(false);
        }
    }, {
        key: 'hideArmedSpacer',
        value: function hideArmedSpacer() {
            this.landscapeScreen.rectSpacer_upper.setVisible(false);
        }
    }, {
        key: 'hideChime',
        value: function hideChime() {
            this.landscapeScreen.rectSpacer_upper_chime.setVisible(false);
            this.landscapeScreen.rect_chime.setVisible(false);
            this.landscapeScreen.rectSpacer_lower_chime.setVisible(false);

            this.landscapeScreen.rectSpacer_lower.setVisible(true);
        }
    }]);

    return AlarmKeypadScreen;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ErrorScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

var _LCARSComponents = __webpack_require__(1);

var _LCARSScreens = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ErrorScreen = exports.ErrorScreen = function () {
    function ErrorScreen(id, properties, statusCode, statusMessage) {
        _classCallCheck(this, ErrorScreen);

        this.portraitDivElement = document.createElement("div");

        this.portraitDivElement.style.position = "absolute";
        this.portraitDivElement.style.width = "705px";
        this.portraitDivElement.style.height = "1300px";
        this.portraitDivElement.style.top = "5px";
        this.portraitDivElement.style.left = "5px";
        this.portraitDivElement.style.webkitTransform = 'scale(0.45) translateX(-430px) translateY(-770px)';
        this.portraitDivElement.style.visibility = 'hidden';

        document.body.appendChild(this.portraitDivElement);

        this.landscapeDivElement = document.createElement("div");

        this.landscapeDivElement.style.position = "absolute";
        this.landscapeDivElement.style.width = "1700px";
        this.landscapeDivElement.style.height = "1000px";
        this.landscapeDivElement.style.top = "5px";
        this.landscapeDivElement.style.left = "5px";
        this.landscapeDivElement.style.webkitTransform = 'scale(0.33) translateX(-1730px) translateY(-1020px)';
        this.landscapeDivElement.style.visibility = 'hidden';

        document.body.appendChild(this.landscapeDivElement);

        this.portraitScreen = new _LCARSScreens.HTTPStatusScreen('_portrait', 705, 1015, properties, statusCode, statusMessage);
        this.portraitDivElement.appendChild(this.portraitScreen.element);

        this.landscapeScreen = new _LCARSScreens.HTTPStatusScreen('_landscape', 1700, 950, properties, statusCode, statusMessage);
        this.landscapeDivElement.appendChild(this.landscapeScreen.element);
    }

    /**
     * Update the display based on the orientation of the device. Note the 180 degree case
     * is not detected in iOS 8.x.
     *    0: portrait screen is visible, landscape screen is hidden
     *   90: portrait screen is hidden, landscape screen is visible
     *  -90: portrait screen is hidden, landscape screen is visible
     *  180: no screen change, last screen remains
     */


    _createClass(ErrorScreen, [{
        key: 'setOrientation',
        value: function setOrientation(orientation) {
            switch (orientation) {
                case -90:
                case 90:
                    //console.log("landscape window orientation: " + window.orientation);
                    this.portraitDivElement.style.visibility = 'hidden';
                    this.landscapeDivElement.style.visibility = 'visible';
                    break;
                default:
                    //console.log("portrait window orientation: " + window.orientation);
                    this.landscapeDivElement.style.visibility = 'hidden';
                    this.portraitDivElement.style.visibility = 'visible';
                    break;
            }
        }
    }]);

    return ErrorScreen;
}();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebConnection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

var _AlarmKeypadScreen = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NOT_INITIALIZED = 0;
var CONNECTED = 1;
var REQUEST_RECEIVED = 2;
var PROCESSING_REQUEST = 3;
var DONE = 4;

var CONNECT = "?requestType=connect";
var RECEIVE = "?requestType=receive";

var WebConnection = exports.WebConnection = function () {
    function WebConnection(url) {
        _classCallCheck(this, WebConnection);

        this.url = url;
        this.updateMessage = null;
        this.nextReadyState = CONNECTED;

        this.xhttpReceive = new XMLHttpRequest();
        this.xhttpSend = new XMLHttpRequest();

        var thisObject = this;

        this.xhttpReceive.onreadystatechange = function () {
            console.log("ready state: " + this.readyState);
            console.log("status: " + this.status);
            var date = new Date();
            if (this.readyState == CONNECTED) {
                if (this.readyState != this.nextReadyState) {
                    console.log("Expected: " + this.nextReadyState + " received: " + this.readyState);
                }
                this.nextReadyState = REQUEST_RECEIVED;
            } else if (this.readyState == REQUEST_RECEIVED) {
                if (this.readyState != this.nextReadyState) {
                    console.log("Expected: " + this.nextReadyState + " received: " + this.readyState);
                }
                this.nextReadyState = PROCESSING_REQUEST;
            } else if (this.readyState == PROCESSING_REQUEST) {
                if (this.readyState != this.nextReadyState) {
                    console.log("Expected: " + this.nextReadyState + " received: " + this.readyState);
                }
                this.nextReadyState = DONE;
                if (thisObject.updateMessage != null) {
                    thisObject.updateMessage('{"type":"connection-message","connection":"connected"}', this.status);
                }
            } else if (this.readyState == DONE) {
                if (this.readyState != this.nextReadyState) {
                    console.log("Expected: " + this.nextReadyState + " received: " + this.readyState);
                }
                this.nextReadyState = CONNECTED;
                if (this.status == 200) {
                    if (thisObject.updateMessage != null) {
                        thisObject.updateMessage(this.responseText, this.status);
                    }
                    thisObject.receive();
                } else {
                    if (this.status == 0) {
                        if (thisObject.updateMessage != null) {
                            thisObject.updateMessage('{"type":"connection-message","connection":"disconnected"}', this.status);
                            setTimeout(function () {
                                thisObject.connect();
                            }, 1000);
                        }
                    } else {
                        if (thisObject.updateMessage != null) {
                            thisObject.updateMessage(this.responseText, this.status);
                        }
                    }
                }
            }
        };

        this.connect();
    }

    _createClass(WebConnection, [{
        key: 'connect',
        value: function connect() {
            this.xhttpReceive.open("GET", this.url + CONNECT);
            this.xhttpReceive.send();
        }
    }, {
        key: 'receive',
        value: function receive() {
            this.xhttpReceive.open("GET", this.url + RECEIVE);
            this.xhttpReceive.send();
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {}
    }, {
        key: 'send',
        value: function send(message) {
            this.xhttpSend.open("POST", this.url);
            this.xhttpSend.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            this.xhttpSend.send(message);
        }
    }, {
        key: 'setUpdateMessageCallback',
        value: function setUpdateMessageCallback(callback) {
            this.updateMessage = callback;
        }
    }]);

    return WebConnection;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeypadScreenLandscape = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

var _LCARSComponents = __webpack_require__(1);

var _LCARSScreens = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeypadScreenLandscape = exports.KeypadScreenLandscape = function (_LCARSBlankScreen) {
    _inherits(KeypadScreenLandscape, _LCARSBlankScreen);

    function KeypadScreenLandscape() {
        _classCallCheck(this, KeypadScreenLandscape);

        var _this = _possibleConstructorReturn(this, (KeypadScreenLandscape.__proto__ || Object.getPrototypeOf(KeypadScreenLandscape)).call(this, '_landscape', "SECURITY SYSTEM", "100%", "100%"));

        _this.divElement = document.createElement("div");
        _this.divElement.style.position = "absolute";
        _this.divElement.style.width = "970px";
        _this.divElement.style.height = "530px";
        _this.divElement.style.top = "5px";
        _this.divElement.style.left = "5px";

        //this.divElement.style.border = "1px solid blue";

        _this.drawScreen();

        _this.divElement.appendChild(_this.element);
        return _this;
    }

    _createClass(KeypadScreenLandscape, [{
        key: 'drawScreen',
        value: function drawScreen() {
            this.urc_end_cap = new _LCARSComponents.LCARSRectangle("l_urc_end_cap", "", 5, 15, 20, 30, _LCARS.LCARS.ES_RECT_RND_W | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.urc_end_cap);

            this.text_title = new _LCARSComponents.LCARSText("l_text_title", "SECURITY SYSTEM", 30, 44, _LCARS.LCARS.EC_ORANGE);
            this.text_title.setTextFontSize(34);
            this.addComponent(this.text_title);

            this.urc = new _LCARSComponents.LCARSCorner("L_URC", "", 225, 15, 475, 1, _LCARS.LCARS.ES_SHAPE_NE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.urc);

            this.mode_1 = new _LCARSComponents.LCARSButton("mode_1_l", "MODE 1", 550, 111, 2, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.mode_1);

            this.armButton = new _LCARSComponents.LCARSRectangle("arm_l", "ARM", 30, 111, 475, 125, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_RED | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.ES_LABEL_C);
            this.armButton.static = 0;
            this.armButton.setComponentDynamics();
            this.armButton.setVisible(false);
            this.addComponent(this.armButton);

            this.indicatorConnected = new _LCARSComponents.LCARSIndicator("l_rect_c", "CONNECTED", 550, 241, 150, 45, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EC_BLUE);
            this.indicatorConnected.setEnabled(false);
            this.addComponent(this.indicatorConnected);

            this.mode_2 = new _LCARSComponents.LCARSButton("mode_2_l", "MODE 2", 550, 291, 2, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.mode_2);

            this.disarmButton = new _LCARSComponents.LCARSRectangle("disarm_l", "DISARM", 30, 291, 475, 125, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_BLUE | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.ES_LABEL_C);
            this.disarmButton.static = 0;
            this.disarmButton.setComponentDynamics();
            this.disarmButton.setVisible(false);
            this.addComponent(this.disarmButton);

            this.keypad = new _LCARSComponents.LCARSKeypad("l_keypad_1", 20, 81, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE, _LCARS.LCARS.EKP_AUX_KEYS | _LCARS.LCARS.ES_LABEL_SW | _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_BLUE);
            this.keypad.setAuxText("OFF", "AWAY", "STAY", "MAX", "TEST", "BYPASS", "INSTANT", "CODE", "CHIME", " ", "READY", " ");
            this.addComponent(this.keypad);

            this.keypad.setVisible(false);

            this.lrc = new _LCARSComponents.LCARSCorner("L_LRC", "", 30, 421, 670, 1, _LCARS.LCARS.ES_SHAPE_SE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.lrc);

            this.lrc_end_cap = new _LCARSComponents.LCARSRectangle("l_lrc_end_cap", "", 5, 483, 20, 30, _LCARS.LCARS.ES_RECT_RND_W | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.lrc_end_cap);

            this.ulc = new _LCARSComponents.LCARSCorner("L_ULC", "", 705, 15, 235, 1, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.ulc);

            this.ulc_end_cap = new _LCARSComponents.LCARSRectangle("l_ulc_end_cap", "", 945, 15, 20, 30, _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.ulc_end_cap);

            this.rect_upper_away = new _LCARSComponents.LCARSRectangle("l_rect_upper_away", "AWAY", 705, 111, 150, 45, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_RED);
            this.rect_upper_away.setVisible(false);
            this.addComponent(this.rect_upper_away);

            this.rectSpacer_upper_away = new _LCARSComponents.LCARSRectangle("l_rectSpacer_upper_away", "", 705, 160, 150, 76, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.rectSpacer_upper_away.setVisible(false);
            this.addComponent(this.rectSpacer_upper_away);

            this.rect_upper_stay = new _LCARSComponents.LCARSRectangle("l_rect_upper_stay", "STAY", 705, 151, 150, 45, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_YELLOW);
            this.rect_upper_stay.setVisible(false);
            this.addComponent(this.rect_upper_stay);

            this.rectSpacer_upper_stay = new _LCARSComponents.LCARSRectangle("l_rectSpacer_upper_stay", "", 705, 111, 150, 35, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.rectSpacer_upper_stay.setVisible(false);
            this.addComponent(this.rectSpacer_upper_stay);

            this.rectSpacer_lower_stay = new _LCARSComponents.LCARSRectangle("l_rectSpacer_lower_stay", "", 705, 201, 150, 35, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.rectSpacer_lower_stay.setVisible(false);
            this.addComponent(this.rectSpacer_lower_stay);

            this.rect_upper_max = new _LCARSComponents.LCARSRectangle("l_rect_upper_max", "MAX", 705, 191, 150, 45, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_RED);
            this.rect_upper_max.setVisible(false);
            this.addComponent(this.rect_upper_max);

            this.rect_upper_instant = new _LCARSComponents.LCARSRectangle("l_rect_upper_instant", "INSTANT", 705, 191, 150, 45, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_RED);
            this.rect_upper_instant.setVisible(false);
            this.addComponent(this.rect_upper_instant);

            this.rectSpacer_upper_m_i = new _LCARSComponents.LCARSRectangle("l_rectSpacer_upper_m_i", "", 705, 111, 150, 76, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.rectSpacer_upper_m_i.setVisible(false);
            this.addComponent(this.rectSpacer_upper_m_i);

            this.rectSpacer_upper = new _LCARSComponents.LCARSRectangle("l_rectSpacer_upper", "", 705, 111, 150, 125, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.rectSpacer_upper.setVisible(false);
            this.addComponent(this.rectSpacer_upper);

            this.indicatorReady = new _LCARSComponents.LCARSIndicator("l_indicator_ready", "READY", 860, 291, 105, 125, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.ES_LABEL_E | _LCARS.LCARS.EC_BLUE);
            this.indicatorReady.setEnabled(false);
            this.addComponent(this.indicatorReady);

            this.rect_chime = new _LCARSComponents.LCARSRectangle("l_rect_chime", "CHIME", 705, 331, 150, 45, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_BLUE);
            this.rect_chime.setVisible(false);
            this.addComponent(this.rect_chime);

            this.rectSpacer_upper_chime = new _LCARSComponents.LCARSRectangle("l_rectSpacer_upper_chime", "", 705, 291, 150, 35, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.rectSpacer_upper_chime.setVisible(false);
            this.addComponent(this.rectSpacer_upper_chime);

            this.rectSpacer_lower_chime = new _LCARSComponents.LCARSRectangle("l_rectSpacer_lower_chime", "", 705, 381, 150, 35, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.rectSpacer_lower_chime.setVisible(false);
            this.addComponent(this.rectSpacer_lower_chime);

            this.rectSpacer = new _LCARSComponents.LCARSRectangle("l_rect_spacer", "STATUS", 705, 241, 150, 45, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.rectSpacer);

            this.indicatorArmed = new _LCARSComponents.LCARSIndicator("l_indicator_armed", "ARMED", 860, 111, 105, 125, _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.ES_LABEL_E | _LCARS.LCARS.EC_RED);
            this.indicatorArmed.setEnabled(false);
            this.addComponent(this.indicatorArmed);

            this.rectSpacer_lower = new _LCARSComponents.LCARSRectangle("l_rectSpacer_lower", "", 705, 291, 150, 125, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.rectSpacer_lower.setVisible(false);
            this.addComponent(this.rectSpacer_lower);

            this.llc = new _LCARSComponents.LCARSCorner("L_LLC", "", 705, 421, 235, 1, _LCARS.LCARS.ES_SHAPE_SW | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.llc);

            this.llc_end_cap = new _LCARSComponents.LCARSRectangle("l_llc_end_cap", "", 945, 483, 20, 30, _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.llc_end_cap);
        }
    }, {
        key: 'setVisible',
        value: function setVisible(visible) {
            this.divElement.style.visibility = visible;
        }
    }]);

    return KeypadScreenLandscape;
}(_LCARSScreens.LCARSBlankScreen);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.KeypadScreenPortrait = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LCARS = __webpack_require__(0);

var _LCARSComponents = __webpack_require__(1);

var _LCARSScreens = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeypadScreenPortrait = exports.KeypadScreenPortrait = function (_LCARSBlankScreen) {
    _inherits(KeypadScreenPortrait, _LCARSBlankScreen);

    function KeypadScreenPortrait() {
        _classCallCheck(this, KeypadScreenPortrait);

        var _this = _possibleConstructorReturn(this, (KeypadScreenPortrait.__proto__ || Object.getPrototypeOf(KeypadScreenPortrait)).call(this, '_portrait', "SECURITY SYSTEM", "100%", "100%"));

        _this.divElement = document.createElement("div");
        _this.divElement.style.position = "absolute";
        _this.divElement.style.width = "705px";
        _this.divElement.style.height = "1300px";
        _this.divElement.style.top = "5px";
        _this.divElement.style.left = "0px";

        //this.divElement.style.border = "1px solid blue";

        _this.drawScreen();

        _this.divElement.appendChild(_this.element);
        return _this;
    }

    _createClass(KeypadScreenPortrait, [{
        key: 'drawScreen',
        value: function drawScreen() {
            this.ulc = new _LCARSComponents.LCARSCorner("ULC", "", 5, 5, 475, 1, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.ulc);

            this.text_title = new _LCARSComponents.LCARSText("text_title", this.title, 485, 34, _LCARS.LCARS.EC_ORANGE);
            this.text_title.setTextFontSize(34);
            this.addComponent(this.text_title);

            this.ulc_end_cap = new _LCARSComponents.LCARSRectangle("ulc_end_cap", "", 680, 5, 20, 30, _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.ulc_end_cap);

            this.indicatorReady = new _LCARSComponents.LCARSIndicator("ready", "READY", 175, 60, 180, 75, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.ES_RECT_RND_W | _LCARS.LCARS.ES_LABEL_W | _LCARS.LCARS.EC_BLUE);
            this.indicatorReady.setEnabled(false);
            this.addComponent(this.indicatorReady);

            this.indicatorArmed = new _LCARSComponents.LCARSIndicator("armed", "ARMED", 360, 60, 290, 75, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.ES_LABEL_E | _LCARS.LCARS.EC_RED);
            this.indicatorArmed.setEnabled(false);

            this.addComponent(this.indicatorArmed);

            this.llc = new _LCARSComponents.LCARSCorner("LLC", "", 5, 102, 350, 1, _LCARS.LCARS.ES_SHAPE_SW | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.llc);

            this.urc = new _LCARSComponents.LCARSCorner("URC", "", 360, 164, 340, 1, _LCARS.LCARS.ES_SHAPE_NE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.urc);

            this.mode_1 = new _LCARSComponents.LCARSButton("mode_1", "MODE 1", 550, 260, 2, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.mode_1);

            this.indicatorConnected = new _LCARSComponents.LCARSIndicator("rect_c", "CONNECTED", 550, 390, 150, 45, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EC_BLUE);
            this.indicatorConnected.setEnabled(false);
            this.addComponent(this.indicatorConnected);

            this.mode_2 = new _LCARSComponents.LCARSButton("mode_2", "MODE 2", 550, 440, 2, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.mode_2);

            this.lrc = new _LCARSComponents.LCARSCorner("LRC", "", 360, 570, 340, 1, _LCARS.LCARS.ES_SHAPE_SE | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.lrc);

            this.ulc_messages = new _LCARSComponents.LCARSCorner("ULC_MESSAGES", "MESSAGES", 5, 632, 350, 1, _LCARS.LCARS.ES_SHAPE_NW | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.ulc_messages);

            this.llc_messages = new _LCARSComponents.LCARSCorner("LLC_MESSAGES", "", 5, 905, 670, 1, _LCARS.LCARS.ES_SHAPE_SW | _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.llc_messages);

            this.ulc_end_cap = new _LCARSComponents.LCARSRectangle("ulc_end_cap", "", 680, 967, 20, 30, _LCARS.LCARS.ES_RECT_RND_E | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.ulc_end_cap);

            this.clear_button = new _LCARSComponents.LCARSButton("clear_button", "", 5, 729, 1, _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.clear_button);

            this.rect_messages = new _LCARSComponents.LCARSRectangle("rect_messages", "", 5, 794, 150, 41, _LCARS.LCARS.ES_LABEL_C | _LCARS.LCARS.EC_ORANGE);
            this.addComponent(this.rect_messages);

            this.blank_button = new _LCARSComponents.LCARSButton("blank_button", "", 5, 840, 1, _LCARS.LCARS.EC_ORANGE | _LCARS.LCARS.ES_STATIC);
            this.addComponent(this.blank_button);

            this.keypad = new _LCARSComponents.LCARSKeypad("keypad_1", 20, 230, _LCARS.LCARS.EF_SUBTITLE | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.EC_ORANGE, _LCARS.LCARS.EKP_AUX_KEYS | _LCARS.LCARS.ES_LABEL_SW | _LCARS.LCARS.EF_BUTTON | _LCARS.LCARS.EC_BLUE);
            this.keypad.setAuxText("OFF", "AWAY", "STAY", "MAX", "TEST", "BYPASS", "INSTANT", "CODE", "CHIME", " ", "READY", " ");
            this.addComponent(this.keypad);

            this.keypad.setVisible(false);

            this.armButton = new _LCARSComponents.LCARSRectangle("arm", "ARM", 30, 260, 475, 125, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_RED | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.ES_LABEL_C);
            this.armButton.static = 0;
            this.armButton.setComponentDynamics();
            this.armButton.setVisible(false);
            this.addComponent(this.armButton);

            this.disarmButton = new _LCARSComponents.LCARSRectangle("disarm", "DISARM", 30, 440, 475, 125, _LCARS.LCARS.EF_TITLE | _LCARS.LCARS.EC_BLUE | _LCARS.LCARS.ES_RECT_RND | _LCARS.LCARS.ES_LABEL_C);
            this.disarmButton.static = 0;
            this.disarmButton.setComponentDynamics();
            this.disarmButton.setVisible(false);
            this.addComponent(this.disarmButton);

            this.messagesArea = new _LCARSComponents.LCARSTextArea("textArea", "", 175, 665, 490, 6, _LCARS.LCARS.EC_ORANGE);
            this.messagesArea.setLineSpacing(1.5);
            this.messagesArea.setTextFontSize(30);
            this.addComponent(this.messagesArea);
        }
    }, {
        key: 'setVisible',
        value: function setVisible(visible) {
            this.divElement.style.visibility = visible;
        }
    }, {
        key: 'setKeypadVisible',
        value: function setKeypadVisible(visible) {
            this.keypad.setVisible(visible);
        }
    }]);

    return KeypadScreenPortrait;
}(_LCARSScreens.LCARSBlankScreen);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _LCARS = __webpack_require__(0);

var _AlarmKeypadScreen = __webpack_require__(3);

var _WebConnection = __webpack_require__(5);

var _ErrorScreen = __webpack_require__(4);

var CLICK = 'click';

var orientation = null;
var processArgs = function processArgs() {
    var parameters = location.search.substring(1).split("&");
    orientation = parameters[0];
};
processArgs();

window.onscroll = function () {
    window.scrollTo(0, 0);
};

_LCARS.LCARS.setFont("LCARS");

console.log("in Main.js creating WebConnection object...");
var webConnection = new _WebConnection.WebConnection("/alarm-keypad");

var updateConnectionStatus = function updateConnectionStatus(statusMessage, statusCode) {
    console.log("statusCode: " + statusCode);
    console.log("statusMessage: " + statusMessage);

    if (statusCode != 200) {
        var errorScreen = null;
        if (statusCode == 0) {
            errorScreen = new _ErrorScreen.ErrorScreen("error_screen", null, 503, "No Service Available");
        } else {
            errorScreen = new _ErrorScreen.ErrorScreen("error_screen", null, statusCode, statusMessage);
        }

        var updateOrientation = function updateOrientation() {
            errorScreen.setOrientation(window.orientation);
        };
        window.addEventListener('orientationchange', updateOrientation);

        if (orientation == 'portrait') {
            errorScreen.setOrientation(0);
        } else if (orientation == 'landscape') {
            errorScreen.setOrientation(90);
        } else {
            updateOrientation();
        }
    } else {

        var alarmKeypadScreen = new _AlarmKeypadScreen.AlarmKeypadScreen();

        var _updateOrientation = function _updateOrientation() {
            alarmKeypadScreen.setOrientation(window.orientation);
        };
        window.addEventListener('orientationchange', _updateOrientation);

        if (orientation == 'portrait') {
            alarmKeypadScreen.setOrientation(0);
        } else if (orientation == 'landscape') {
            alarmKeypadScreen.setOrientation(90);
        } else {
            _updateOrientation();
        }

        var updateMode = function updateMode(event) {
            if (event.target.id[5] == '1') {
                if (alarmKeypadScreen.pin == true) {
                    alarmKeypadScreen.mode = 1;
                }
            } else if (event.target.id[5] == '2') {
                alarmKeypadScreen.mode = 2;
            }

            alarmKeypadScreen.updateModeDisplay();
        };
        alarmKeypadScreen.addModeEventListener(CLICK, updateMode);

        var updateAlarmPanelState = function updateAlarmPanelState(panelMessage) {
            alarmKeypadScreen.updateAlarmPanelState(panelMessage);
        };
        webConnection.setUpdateMessageCallback(updateAlarmPanelState);

        var keyPressed = function keyPressed(event) {
            var message = '{ "key-pressed" : "' + event.target.id[0] + '" }';
            webConnection.send(message);
        };
        alarmKeypadScreen.addKeypadEventListener(CLICK, keyPressed);

        var armPressed = function armPressed(event) {
            var message = '{ "command" : "ARM" }';
            webConnection.send(message);
        };
        alarmKeypadScreen.addArmEventListener(CLICK, armPressed);

        var disarmPressed = function disarmPressed(event) {
            var message = '{ "command" : "DISARM" }';
            webConnection.send(message);
        };
        alarmKeypadScreen.addDisarmEventListener(CLICK, disarmPressed);

        var testListener = function testListener(event) {
            console.log("testListener: " + event.target.id[0]);
        };
    }
};
webConnection.setUpdateMessageCallback(updateConnectionStatus);

/*
 ********************** Test Code ****************************
 */

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map