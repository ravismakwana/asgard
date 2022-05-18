/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/carousel/index.js":
/*!**********************************!*\
  !*** ./src/js/carousel/index.js ***!
  \**********************************/
/***/ (function() {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(function ($) {
  var SlickSlider = /*#__PURE__*/function () {
    function SlickSlider() {
      _classCallCheck(this, SlickSlider);

      this.initSlider();
    }

    _createClass(SlickSlider, [{
      key: "initSlider",
      value: function initSlider() {
        $('.posts-slider ').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          lazyLoad: 'ondemand',
          autoplaySpeed: 2000,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          } // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
          ]
        });
      }
    }]);

    return SlickSlider;
  }();

  new SlickSlider();
})(jQuery);

/***/ }),

/***/ "./src/js/clock/index.js":
/*!*******************************!*\
  !*** ./src/js/clock/index.js ***!
  \*******************************/
/***/ (function() {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(function ($) {
  /**
   * Clock Class.
   */
  var Clock = /*#__PURE__*/function () {
    /**
     * Constructor
     */
    function Clock() {
      _classCallCheck(this, Clock);

      this.initializeClock();
    }
    /**
     * initializeClock
     */


    _createClass(Clock, [{
      key: "initializeClock",
      value: function initializeClock() {
        var _this = this;

        setInterval(function () {
          return _this.time();
        }, 1000);
      }
      /**
       * Numpad
       *
       * @param {String} str String
       *
       * @return {string} String
       */

    }, {
      key: "numPad",
      value: function numPad(str) {
        var cStr = str.toString();

        if (2 > cStr.length) {
          str = 0 + cStr;
        }

        return str;
      }
      /**
       * Time
       */

    }, {
      key: "time",
      value: function time() {
        var currDate = new Date();
        var currSec = currDate.getSeconds();
        var currMin = currDate.getMinutes();
        var curr24Hr = currDate.getHours();
        var ampm = 12 <= curr24Hr ? 'pm' : 'am';
        var currHr = curr24Hr % 12;
        currHr = currHr ? currHr : 12;
        var stringTime = currHr + ':' + this.numPad(currMin) + ':' + this.numPad(currSec);
        var timeEmojiEl = $('#time-emoji');

        if (5 <= curr24Hr && 17 >= curr24Hr) {
          timeEmojiEl.text('🌞');
        } else {
          timeEmojiEl.text('🌜');
        }

        $('#time').text(stringTime);
        $('#ampm').text(ampm);
      }
    }]);

    return Clock;
  }();

  new Clock();
})(jQuery);

/***/ }),

/***/ "./src/js/posts/loadmore.js":
/*!**********************************!*\
  !*** ./src/js/posts/loadmore.js ***!
  \**********************************/
/***/ (function() {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(function ($) {
  var LoadMore = /*#__PURE__*/function () {
    function LoadMore() {
      var _ajax_object$ajax_url, _ajax_object, _ajax_object$ajax_non, _ajax_object2;

      _classCallCheck(this, LoadMore);

      this.ajaxUrl = (_ajax_object$ajax_url = (_ajax_object = ajax_object) === null || _ajax_object === void 0 ? void 0 : _ajax_object.ajax_url) !== null && _ajax_object$ajax_url !== void 0 ? _ajax_object$ajax_url : '';
      this.ajaxNonce = (_ajax_object$ajax_non = (_ajax_object2 = ajax_object) === null || _ajax_object2 === void 0 ? void 0 : _ajax_object2.ajax_nonce) !== null && _ajax_object$ajax_non !== void 0 ? _ajax_object$ajax_non : '';
      this.loadMoreBtn = $("#load-more");
      this.init();
    }

    _createClass(LoadMore, [{
      key: "init",
      value: function init() {
        var _this = this;

        if (!this.loadMoreBtn.length) {
          return null;
        }

        this.loadMoreBtn.on('click', function () {
          _this.handleLoadMorePosts();
        });
      }
    }, {
      key: "handleLoadMorePosts",
      value: function handleLoadMorePosts() {
        var _this2 = this;

        var page = this.loadMoreBtn.data('page');

        if (!page) {
          return null;
        }

        var newPage = parseInt(page) + 1;
        $.ajax({
          url: this.ajaxUrl,
          type: 'POST',
          data: {
            page: page,
            action: 'loadmore_posts',
            ajax_nonce: this.ajaxNonce
          },
          success: function success(response) {
            // console.log( response );
            if (0 === parseInt(response)) {
              _this2.loadMoreBtn.remove();
            } else {
              _this2.loadMoreBtn.data('page', newPage);

              $('#load-more-content').append(response);
            }
          },
          error: function error(response) {
            console.log(response);
          }
        });
      }
    }]);

    return LoadMore;
  }();

  new LoadMore();
})(jQuery);

/***/ }),

/***/ "./src/img/PhotoFunia1.jpg":
/*!*********************************!*\
  !*** ./src/img/PhotoFunia1.jpg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/PhotoFunia1.jpg");

/***/ }),

/***/ "./src/img/patterns/bg.jpeg":
/*!**********************************!*\
  !*** ./src/img/patterns/bg.jpeg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/patterns/bg.jpeg");

/***/ }),

/***/ "./src/img/patterns/c1-150x150.jpeg":
/*!******************************************!*\
  !*** ./src/img/patterns/c1-150x150.jpeg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/patterns/c1-150x150.jpeg");

/***/ }),

/***/ "./src/img/patterns/c2-150x150.jpeg":
/*!******************************************!*\
  !*** ./src/img/patterns/c2-150x150.jpeg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/patterns/c2-150x150.jpeg");

/***/ }),

/***/ "./src/img/patterns/c3-150x150.jpeg":
/*!******************************************!*\
  !*** ./src/img/patterns/c3-150x150.jpeg ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/patterns/c3-150x150.jpeg");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./src/js/clock/index.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./src/js/carousel/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/loadmore */ "./src/js/posts/loadmore.js");
/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_posts_loadmore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _img_PhotoFunia1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/PhotoFunia1.jpg */ "./src/img/PhotoFunia1.jpg");
/* harmony import */ var _img_patterns_bg_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/patterns/bg.jpeg */ "./src/img/patterns/bg.jpeg");
/* harmony import */ var _img_patterns_c1_150x150_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/patterns/c1-150x150.jpeg */ "./src/img/patterns/c1-150x150.jpeg");
/* harmony import */ var _img_patterns_c2_150x150_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/patterns/c2-150x150.jpeg */ "./src/img/patterns/c2-150x150.jpeg");
/* harmony import */ var _img_patterns_c3_150x150_jpeg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/patterns/c3-150x150.jpeg */ "./src/img/patterns/c3-150x150.jpeg");


 // Styles

 // Images






}();
/******/ })()
;
//# sourceMappingURL=main.js.map