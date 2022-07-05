/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/view/news/news.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,gBAAgB;IAChB,8BAA8B;IAC9B,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,sBAAsB;IACtB,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;;IAEI,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI;QACI,mBAAmB;QACnB,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,+BAA+B;QAC/B,uBAAuB;QACvB,WAAW;QACX,gBAAgB;QAChB,WAAW;QACX,kBAAkB;QAClB,WAAW;QACX,MAAM;QACN,SAAS;QACT,WAAW;IACf;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,aAAa;QACb,YAAY;QACZ,6BAA6B;QAC7B,qBAAqB;IACzB;;IAEA;QACI,kBAAkB;IACtB;AACJ","sourcesContent":[".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".sources {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 135px;\r\n    margin: 0 auto;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n    border: 1px solid #30c5ff;\r\n}\r\n\r\n.source__item {\r\n    width: 200px;\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    text-align: center;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/components/view/sources/sources.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,WAAW;IACX,aAAa;IACb,cAAc;IACd,cAAc;IACd,mBAAmB;IACnB,qCAAqC;IACrC,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,qBAAqB;IACrB,cAAc;IACd,wCAAwC;IACxC,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB","sourcesContent":[".sources {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    width: 100%;\r\n    height: 135px;\r\n    margin: 0 auto;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n    border: 1px solid #30c5ff;\r\n}\r\n\r\n.source__item {\r\n    width: 200px;\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    text-align: center;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_rs_school_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/rs_school.png */ "./src/assets/rs_school.png");
/* harmony import */ var _assets_search_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/search.png */ "./src/assets/search.png");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_rs_school_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_search_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\n\r\nbody {\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: .7% 1.8%;\r\n    text-align: center;\r\n}\r\n\r\n.name {\r\n    font-size: 3em;\r\n    font-weight: 800;\r\n}\r\n\r\nfooter {\r\n    height: 4rem;\r\n    margin-top: 2%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nfooter .copyright {\r\n    font-size: 1rem;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\n\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n\r\n/* ADDITIONAL FUNCTIONALITY */\r\n\r\n.footer__container {\r\n    height: 60px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.github {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.github__link {\r\n   text-decoration: none;\r\n   color: #018192;\r\n   text-transform: capitalize;\r\n   transition: .3s;\r\n}\r\n\r\n.github__link:hover {\r\n   cursor: pointer;\r\n   color: #0099ad;\r\n}\r\n\r\n.rsschool__link {\r\n    display: block;\r\n    width: 60px;\r\n    height: 60px;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    transition: .3s;\r\n    filter: invert(100%) sepia() saturate(1000%) hue-rotate(140deg) brightness(100%) contrast(100%);\r\n}\r\n\r\n.rsschool__link:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* SEARCH */\r\n.search {\r\n    height: 60px;\r\n    width: 320px;\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 2% auto;\r\n    justify-content: center;\r\n}\r\n\r\n.search-input {\r\n    height: 45px;\r\n    width: 80%;\r\n    border: 3px solid #30c5ff;\r\n    border-right: none;\r\n    border-radius: 20px 0 0 20px;\r\n    padding-left: 15px;\r\n    outline: none;\r\n    color: #30c5ff;\r\n    background: transparent;\r\n}\r\n\r\n.search-button {\r\n    height: 53px;\r\n    width: 20%;\r\n    background-position: center;\r\n    border: 3px solid #30c5ff;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\r\n    color: #30c5ff;\r\n    border-radius: 0 20px 20px 0;\r\n    transition: 0.3s;\r\n    background-position: center;\r\n}\r\n\r\n.search-button:hover {\r\n    cursor: pointer;\r\n    filter: contrast(100%) brightness(1.08);\r\n}\r\n\r\n.search-input::placeholder {\r\n    color: #018192;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .rsschool__link {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n\r\n    .github {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .name {\r\n        font-size: 5vw;\r\n    }\r\n\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;;AAGA,6BAA6B;;AAE7B;IACI,YAAY;IACZ,WAAW;IACX,cAAc;IACd,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;GACG,qBAAqB;GACrB,cAAc;GACd,0BAA0B;GAC1B,eAAe;AAClB;;AAEA;GACG,eAAe;GACf,cAAc;AACjB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,yDAA6C;IAC7C,4BAA4B;IAC5B,wBAAwB;IACxB,eAAe;IACf,+FAA+F;AACnG;;AAEA;IACI,eAAe;AACnB;;;AAGA,WAAW;AACX;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,yBAAyB;IACzB,kBAAkB;IAClB,4BAA4B;IAC5B,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,2BAA2B;IAC3B,yBAAyB;IACzB,6DAA8C;IAC9C,cAAc;IACd,4BAA4B;IAC5B,gBAAgB;IAChB,2BAA2B;AAC/B;;AAEA;IACI,eAAe;IACf,uCAAuC;AAC3C;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI;QACI,WAAW;QACX,YAAY;IAChB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,cAAc;IAClB;;AAEJ","sourcesContent":["::-webkit-scrollbar {\r\n    width: 0px;\r\n}\r\n\r\nbody {\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: .7% 1.8%;\r\n    text-align: center;\r\n}\r\n\r\n.name {\r\n    font-size: 3em;\r\n    font-weight: 800;\r\n}\r\n\r\nfooter {\r\n    height: 4rem;\r\n    margin-top: 2%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nfooter .copyright {\r\n    font-size: 1rem;\r\n    color: #333;\r\n    text-align: center;\r\n}\r\n\r\nfooter .copyright a {\r\n    color: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\n    color: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\n    content: '©';\r\n}\r\n\r\n\r\n/* ADDITIONAL FUNCTIONALITY */\r\n\r\n.footer__container {\r\n    height: 60px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    max-width: 1440px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.github {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.github__link {\r\n   text-decoration: none;\r\n   color: #018192;\r\n   text-transform: capitalize;\r\n   transition: .3s;\r\n}\r\n\r\n.github__link:hover {\r\n   cursor: pointer;\r\n   color: #0099ad;\r\n}\r\n\r\n.rsschool__link {\r\n    display: block;\r\n    width: 60px;\r\n    height: 60px;\r\n    background-image: url(\"assets/rs_school.png\");\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    transition: .3s;\r\n    filter: invert(100%) sepia() saturate(1000%) hue-rotate(140deg) brightness(100%) contrast(100%);\r\n}\r\n\r\n.rsschool__link:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* SEARCH */\r\n.search {\r\n    height: 60px;\r\n    width: 320px;\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 2% auto;\r\n    justify-content: center;\r\n}\r\n\r\n.search-input {\r\n    height: 45px;\r\n    width: 80%;\r\n    border: 3px solid #30c5ff;\r\n    border-right: none;\r\n    border-radius: 20px 0 0 20px;\r\n    padding-left: 15px;\r\n    outline: none;\r\n    color: #30c5ff;\r\n    background: transparent;\r\n}\r\n\r\n.search-button {\r\n    height: 53px;\r\n    width: 20%;\r\n    background-position: center;\r\n    border: 3px solid #30c5ff;\r\n    background: url(\"assets/search.png\") no-repeat;\r\n    color: #30c5ff;\r\n    border-radius: 0 20px 20px 0;\r\n    transition: 0.3s;\r\n    background-position: center;\r\n}\r\n\r\n.search-button:hover {\r\n    cursor: pointer;\r\n    filter: contrast(100%) brightness(1.08);\r\n}\r\n\r\n.search-input::placeholder {\r\n    color: #018192;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .rsschool__link {\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n\r\n    .github {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .name {\r\n        font-size: 5vw;\r\n    }\r\n\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/components/view/news/news.css":
/*!*******************************************!*\
  !*** ./src/components/view/news/news.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./news.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/news/news.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_news_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/view/sources/sources.css":
/*!*************************************************!*\
  !*** ./src/components/view/sources/sources.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./sources.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/view/sources/sources.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sources_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/app/app.ts":
/*!***********************************!*\
  !*** ./src/components/app/app.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const controller_1 = __importDefault(__webpack_require__(/*! ../controller/controller */ "./src/components/controller/controller.ts"));
const appView_1 = __webpack_require__(/*! ../view/appView */ "./src/components/view/appView.ts");
class App {
    constructor() {
        this.controller = new controller_1.default();
        this.view = new appView_1.AppView();
    }
    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
        document
            .querySelector('.search-button')
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}
exports["default"] = App;


/***/ }),

/***/ "./src/components/controller/appLoader.ts":
/*!************************************************!*\
  !*** ./src/components/controller/appLoader.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const loader_1 = __importDefault(__webpack_require__(/*! ./loader */ "./src/components/controller/loader.ts"));
class AppLoader extends loader_1.default {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '1ebd6f88d5f04980b776fd9e5812aaa5',
        });
    }
}
exports["default"] = AppLoader;


/***/ }),

/***/ "./src/components/controller/controller.ts":
/*!*************************************************!*\
  !*** ./src/components/controller/controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const types_1 = __webpack_require__(/*! ../../types */ "./src/types/index.ts");
const appLoader_1 = __importDefault(__webpack_require__(/*! ./appLoader */ "./src/components/controller/appLoader.ts"));
class AppController extends appLoader_1.default {
    getSources(callback) {
        super.getResp({
            endpoint: types_1.Endpoint.sources,
        }, callback);
    }
    getNews(e, callback) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if ((newsContainer.getAttribute('data-source') !== sourceId)) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp({
                        endpoint: types_1.Endpoint.everything,
                        options: {
                            sources: sourceId,
                        },
                    }, callback);
                }
                return;
            }
            target = target.parentNode;
        }
        if (target.classList.contains('search-button')) {
            const keyWord = document.querySelector(".search-input").value;
            super.getResp({
                endpoint: types_1.Endpoint.everything,
                options: {
                    q: keyWord
                },
            }, callback);
        }
    }
}
exports["default"] = AppController;


/***/ }),

/***/ "./src/components/controller/loader.ts":
/*!*********************************************!*\
  !*** ./src/components/controller/loader.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(/*! ../../types/index */ "./src/types/index.ts");
class Loader {
    constructor(baseLink, options) {
        this.baseLink = baseLink;
        this.options = options;
        this.baseLink = baseLink;
        this.options = options;
    }
    getResp({ endpoint, options = {} }, callback = () => {
        console.error('No callback for GET response');
    }) {
        this.load(index_1.Methods.GET, endpoint, callback, options);
    }
    errorHandler(res) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }
    makeUrl(options, endpoint) {
        const urlOptions = Object.assign(Object.assign({}, this.options), options);
        let url = `${this.baseLink}${endpoint}?`;
        let finalUrl = Object.keys(urlOptions).reduce((url, key) => {
            return url + `${key}=${urlOptions[key]}&`;
        }, url);
        return finalUrl.slice(0, -1);
    }
    load(method, endpoint, callback, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}
exports["default"] = Loader;


/***/ }),

/***/ "./src/components/view/appView.ts":
/*!****************************************!*\
  !*** ./src/components/view/appView.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppView = void 0;
const news_1 = __importDefault(__webpack_require__(/*! ./news/news */ "./src/components/view/news/news.ts"));
const sources_1 = __importDefault(__webpack_require__(/*! ./sources/sources */ "./src/components/view/sources/sources.ts"));
class AppView {
    constructor() {
        this.news = new news_1.default();
        this.sources = new sources_1.default();
    }
    drawNews(data) {
        const values = (data === null || data === void 0 ? void 0 : data.articles) ? data.articles : [];
        this.news.draw(values);
    }
    drawSources(data) {
        const values = (data === null || data === void 0 ? void 0 : data.sources) ? data.sources : [];
        this.sources.draw(values);
    }
}
exports.AppView = AppView;
exports["default"] = AppView;


/***/ }),

/***/ "./src/components/view/news/news.ts":
/*!******************************************!*\
  !*** ./src/components/view/news/news.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./news.css */ "./src/components/view/news/news.css");
class News {
    draw(data) {
        const news = data.length >= 10 ? data.slice(0, 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp');
        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true);
            if (idx % 2)
                newsClone.querySelector('.news__item').classList.add('alt');
            newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');
            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);
            fragment.append(newsClone);
        });
        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    }
}
exports["default"] = News;


/***/ }),

/***/ "./src/components/view/sources/sources.ts":
/*!************************************************!*\
  !*** ./src/components/view/sources/sources.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./sources.css */ "./src/components/view/sources/sources.css");
class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        document.querySelector('.sources').append(fragment);
    }
}
exports["default"] = Sources;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __importDefault(__webpack_require__(/*! ./components/app/app */ "./src/components/app/app.ts"));
__webpack_require__(/*! ./global.css */ "./src/global.css");
const app = new app_1.default();
app.start();


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Methods = exports.Endpoint = void 0;
//CONTROLLER
var Endpoint;
(function (Endpoint) {
    Endpoint["everything"] = "everything";
    Endpoint["topHeadlines"] = "top-headlines";
    Endpoint["sources"] = "sources";
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
})(Methods = exports.Methods || (exports.Methods = {}));


/***/ }),

/***/ "./src/assets/rs_school.png":
/*!**********************************!*\
  !*** ./src/assets/rs_school.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42b52730024871c908e3.png";

/***/ }),

/***/ "./src/assets/search.png":
/*!*******************************!*\
  !*** ./src/assets/search.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8fd1f86dacbf8e2033d.png";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3MiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9nbG9iYWwuY3NzIiwid2VicGFjazovL05ld3NKUy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L25ld3MvbmV3cy5jc3M/ZTIwNiIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L3NvdXJjZXMvc291cmNlcy5jc3M/NTJiMSIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvZ2xvYmFsLmNzcz9kM2JjIiwid2VicGFjazovL05ld3NKUy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy9hcHAvYXBwLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvYXBwTG9hZGVyLnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xsZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy9jb250cm9sbGVyL2xvYWRlci50cyIsIndlYnBhY2s6Ly9OZXdzSlMvLi9zcmMvY29tcG9uZW50cy92aWV3L2FwcFZpZXcudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9uZXdzL25ld3MudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vTmV3c0pTLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL05ld3NKUy8uL3NyYy90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9OZXdzSlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL05ld3NKUy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vTmV3c0pTL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uZXdzX19pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNiU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtcGhvdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtcGhvdG8ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyxcXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHVsIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogLTEyMCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgyIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6ICNhMmEyYTI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYSB7XFxyXFxuICAgIGNvbG9yOiAjNWFkNjdkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ+KGkic7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MsIG9wYWNpdHkgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYTpob3ZlcjphZnRlciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHAge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzVhZDY3ZDtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIHRvcDogLTAuNzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gICAgLm5ld3NfX2l0ZW0ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogNDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0uYWx0IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgICAgICBsZWZ0OiBpbmhlcml0O1xcclxcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0uYWx0IC5uZXdzX19tZXRhLWRldGFpbHMge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL3ZpZXcvbmV3cy9uZXdzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7SUFDZjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uZXdzX19pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNiU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtcGhvdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgcm90YXRlKDNkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtcGhvdG8ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEtZGV0YWlscyxcXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHVsIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fbWV0YS1kZXRhaWxzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogLTEyMCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjJzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIGgyIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6ICNhMmEyYTI7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUge1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYSB7XFxyXFxuICAgIGNvbG9yOiAjNWFkNjdkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSAubmV3c19fZGVzY3JpcHRpb24gLm5ld3NfX3JlYWQtbW9yZSBhOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogJ+KGkic7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogbWFyZ2luIDAuM3MsIG9wYWNpdHkgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uIC5uZXdzX19yZWFkLW1vcmUgYTpob3ZlcjphZnRlciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHAge1xcclxcbiAgICBtYXJnaW46IDFyZW0gMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3c19faXRlbSBwOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uZXdzX19pdGVtIHA6Zmlyc3Qtb2YtdHlwZTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBoZWlnaHQ6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogIzVhZDY3ZDtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIHRvcDogLTAuNzVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3NfX2l0ZW06aG92ZXIgLm5ld3NfX21ldGEtZGV0YWlscyB7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXHJcXG4gICAgLm5ld3NfX2l0ZW0ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX21ldGEge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogNDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdzX19pdGVtIC5uZXdzX19kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiA2MCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0gLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTNkZWcpO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtM2RlZyk7XFxyXFxuICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIGxlZnQ6IC0xMHB4O1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgei1pbmRleDogLTE7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0uYWx0IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3c19faXRlbS5hbHQgLm5ld3NfX2Rlc2NyaXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgICAgICBsZWZ0OiBpbmhlcml0O1xcclxcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoM2RlZyk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld3NfX2l0ZW0uYWx0IC5uZXdzX19tZXRhLWRldGFpbHMge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zb3VyY2VzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTM1cHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udDogMzAwIDFlbSAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwYzVmZjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZV9faXRlbSB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMwYzVmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgbWFyZ2luOiAwLjVlbTtcXHJcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXHJcXG4gICAgY29sb3I6ICM3MGQ2ZmY7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMjVzO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW06aG92ZXIsXFxyXFxuLnNvdXJjZV9faXRlbTpmb2N1cyB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzNmY2M1OTtcXHJcXG4gICAgY29sb3I6ICM2OWRiN2U7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMC41ZW0gMC41ZW0gLTAuNGVtICMzZmNjNTk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNWVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdXJjZV9faXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvdmlldy9zb3VyY2VzL3NvdXJjZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc291cmNlcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEzNXB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQ6IDMwMCAxZW0gJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMGM1ZmY7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW0ge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMGM1ZmY7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIG1hcmdpbjogMC41ZW07XFxyXFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxyXFxuICAgIGNvbG9yOiAjNzBkNmZmO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc291cmNlX19pdGVtOmhvdmVyLFxcclxcbi5zb3VyY2VfX2l0ZW06Zm9jdXMge1xcclxcbiAgICBib3JkZXItY29sb3I6ICMzZmNjNTk7XFxyXFxuICAgIGNvbG9yOiAjNjlkYjdlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAuNWVtIDAuNWVtIC0wLjRlbSAjM2ZjYzU5O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVlbSk7XFxyXFxufVxcclxcblxcclxcbi5zb3VyY2VfX2l0ZW0tbmFtZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vYXNzZXRzL3JzX3NjaG9vbC5wbmdcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9hc3NldHMvc2VhcmNoLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTcxODFjO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogLjclIDEuOCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCBhIHtcXHJcXG4gICAgY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ8KpJztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQURESVRJT05BTCBGVU5DVElPTkFMSVRZICovXFxyXFxuXFxyXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5naXRodWJfX2xpbmsge1xcclxcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICBjb2xvcjogIzAxODE5MjtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxufVxcclxcblxcclxcbi5naXRodWJfX2xpbms6aG92ZXIge1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBjb2xvcjogIzAwOTlhZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJzc2Nob29sX19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgpIHNhdHVyYXRlKDEwMDAlKSBodWUtcm90YXRlKDE0MGRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnJzc2Nob29sX19saW5rOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTRUFSQ0ggKi9cXHJcXG4uc2VhcmNoIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMiUgYXV0bztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMGM1ZmY7XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjb2xvcjogIzMwYzVmZjtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1M3B4O1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMzMGM1ZmY7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0O1xcclxcbiAgICBjb2xvcjogIzMwYzVmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZmlsdGVyOiBjb250cmFzdCgxMDAlKSBicmlnaHRuZXNzKDEuMDgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIGNvbG9yOiAjMDE4MTkyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAucnNzY2hvb2xfX2xpbmsge1xcclxcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmdpdGh1YiB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hbWUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1dnc7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQSw2QkFBNkI7O0FBRTdCO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtHQUNHLHFCQUFxQjtHQUNyQixjQUFjO0dBQ2QsMEJBQTBCO0dBQzFCLGVBQWU7QUFDbEI7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsY0FBYztBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlEQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZiwrRkFBK0Y7QUFDbkc7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFHQSxXQUFXO0FBQ1g7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLDZEQUE4QztJQUM5QyxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMTcxODFjO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogLjclIDEuOCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDNlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAyJTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCBhIHtcXHJcXG4gICAgY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ8KpJztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQURESVRJT05BTCBGVU5DVElPTkFMSVRZICovXFxyXFxuXFxyXFxuLmZvb3Rlcl9fY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTQ0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2l0aHViIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5naXRodWJfX2xpbmsge1xcclxcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICBjb2xvcjogIzAxODE5MjtcXHJcXG4gICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxufVxcclxcblxcclxcbi5naXRodWJfX2xpbms6aG92ZXIge1xcclxcbiAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICBjb2xvcjogIzAwOTlhZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJzc2Nob29sX19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYXNzZXRzL3JzX3NjaG9vbC5wbmdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKCkgc2F0dXJhdGUoMTAwMCUpIGh1ZS1yb3RhdGUoMTQwZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwMCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ucnNzY2hvb2xfX2xpbms6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNFQVJDSCAqL1xcclxcbi5zZWFyY2gge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyJSBhdXRvO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogNDVweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzMwYzVmZjtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMzBjNWZmO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUzcHg7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzMwYzVmZjtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCJhc3NldHMvc2VhcmNoLnBuZ1xcXCIpIG5vLXJlcGVhdDtcXHJcXG4gICAgY29sb3I6ICMzMGM1ZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMjBweCAyMHB4IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1idXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZpbHRlcjogY29udHJhc3QoMTAwJSkgYnJpZ2h0bmVzcygxLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBjb2xvcjogIzAxODE5MjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLnJzc2Nob29sX19saW5rIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5naXRodWIge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYW1lIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNXZ3O1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmV3cy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NvdXJjZXMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBjb250cm9sbGVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbnRyb2xsZXIvY29udHJvbGxlclwiKSk7XHJcbmNvbnN0IGFwcFZpZXdfMSA9IHJlcXVpcmUoXCIuLi92aWV3L2FwcFZpZXdcIik7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgY29udHJvbGxlcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgYXBwVmlld18xLkFwcFZpZXcoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCcuc291cmNlcycpXHJcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLmNvbnRyb2xsZXIuZ2V0TmV3cyhlLCAoZGF0YSkgPT4gdGhpcy52aWV3LmRyYXdOZXdzKGRhdGEpKSk7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmdldFNvdXJjZXMoKGRhdGEpID0+IHRoaXMudmlldy5kcmF3U291cmNlcyhkYXRhKSk7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJylcclxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMuY29udHJvbGxlci5nZXROZXdzKGUsIChkYXRhKSA9PiB0aGlzLnZpZXcuZHJhd05ld3MoZGF0YSkpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuZ2V0U291cmNlcygoZGF0YSkgPT4gdGhpcy52aWV3LmRyYXdTb3VyY2VzKGRhdGEpKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBcHA7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGxvYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRlclwiKSk7XHJcbmNsYXNzIEFwcExvYWRlciBleHRlbmRzIGxvYWRlcl8xLmRlZmF1bHQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2h0dHBzOi8vbm9kZW5ld3MuaGVyb2t1YXBwLmNvbS8nLCB7XHJcbiAgICAgICAgICAgIGFwaUtleTogJzFlYmQ2Zjg4ZDVmMDQ5ODBiNzc2ZmQ5ZTU4MTJhYWE1JyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBBcHBMb2FkZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XHJcbmNvbnN0IGFwcExvYWRlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2FwcExvYWRlclwiKSk7XHJcbmNsYXNzIEFwcENvbnRyb2xsZXIgZXh0ZW5kcyBhcHBMb2FkZXJfMS5kZWZhdWx0IHtcclxuICAgIGdldFNvdXJjZXMoY2FsbGJhY2spIHtcclxuICAgICAgICBzdXBlci5nZXRSZXNwKHtcclxuICAgICAgICAgICAgZW5kcG9pbnQ6IHR5cGVzXzEuRW5kcG9pbnQuc291cmNlcyxcclxuICAgICAgICB9LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBnZXROZXdzKGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IG5ld3NDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgd2hpbGUgKHRhcmdldCAhPT0gbmV3c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc291cmNlX19pdGVtJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zb3VyY2UtaWQnKTtcclxuICAgICAgICAgICAgICAgIGlmICgobmV3c0NvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2RhdGEtc291cmNlJykgIT09IHNvdXJjZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld3NDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZScsIHNvdXJjZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzdXBlci5nZXRSZXNwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IHR5cGVzXzEuRW5kcG9pbnQuZXZlcnl0aGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlczogc291cmNlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VhcmNoLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleVdvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dFwiKS52YWx1ZTtcclxuICAgICAgICAgICAgc3VwZXIuZ2V0UmVzcCh7XHJcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogdHlwZXNfMS5FbmRwb2ludC5ldmVyeXRoaW5nLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHE6IGtleVdvcmRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gQXBwQ29udHJvbGxlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgaW5kZXhfMSA9IHJlcXVpcmUoXCIuLi8uLi90eXBlcy9pbmRleFwiKTtcclxuY2xhc3MgTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJhc2VMaW5rLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlTGluayA9IGJhc2VMaW5rO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5iYXNlTGluayA9IGJhc2VMaW5rO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXRSZXNwKHsgZW5kcG9pbnQsIG9wdGlvbnMgPSB7fSB9LCBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdObyBjYWxsYmFjayBmb3IgR0VUIHJlc3BvbnNlJyk7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgdGhpcy5sb2FkKGluZGV4XzEuTWV0aG9kcy5HRVQsIGVuZHBvaW50LCBjYWxsYmFjaywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlcnJvckhhbmRsZXIocmVzKSB7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSB8fCByZXMuc3RhdHVzID09PSA0MDQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ycnksIGJ1dCB0aGVyZSBpcyAke3Jlcy5zdGF0dXN9IGVycm9yOiAke3Jlcy5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXMuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBtYWtlVXJsKG9wdGlvbnMsIGVuZHBvaW50KSB7XHJcbiAgICAgICAgY29uc3QgdXJsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuYmFzZUxpbmt9JHtlbmRwb2ludH0/YDtcclxuICAgICAgICBsZXQgZmluYWxVcmwgPSBPYmplY3Qua2V5cyh1cmxPcHRpb25zKS5yZWR1Y2UoKHVybCwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB1cmwgKyBgJHtrZXl9PSR7dXJsT3B0aW9uc1trZXldfSZgO1xyXG4gICAgICAgIH0sIHVybCk7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsVXJsLnNsaWNlKDAsIC0xKTtcclxuICAgIH1cclxuICAgIGxvYWQobWV0aG9kLCBlbmRwb2ludCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGZldGNoKHRoaXMubWFrZVVybChvcHRpb25zLCBlbmRwb2ludCksIHsgbWV0aG9kIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHRoaXMuZXJyb3JIYW5kbGVyKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gY2FsbGJhY2soZGF0YSkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IExvYWRlcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BcHBWaWV3ID0gdm9pZCAwO1xyXG5jb25zdCBuZXdzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vbmV3cy9uZXdzXCIpKTtcclxuY29uc3Qgc291cmNlc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NvdXJjZXMvc291cmNlc1wiKSk7XHJcbmNsYXNzIEFwcFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdzID0gbmV3IG5ld3NfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzID0gbmV3IHNvdXJjZXNfMS5kZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBkcmF3TmV3cyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5hcnRpY2xlcykgPyBkYXRhLmFydGljbGVzIDogW107XHJcbiAgICAgICAgdGhpcy5uZXdzLmRyYXcodmFsdWVzKTtcclxuICAgIH1cclxuICAgIGRyYXdTb3VyY2VzKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLnNvdXJjZXMpID8gZGF0YS5zb3VyY2VzIDogW107XHJcbiAgICAgICAgdGhpcy5zb3VyY2VzLmRyYXcodmFsdWVzKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFwcFZpZXcgPSBBcHBWaWV3O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBBcHBWaWV3O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5yZXF1aXJlKFwiLi9uZXdzLmNzc1wiKTtcclxuY2xhc3MgTmV3cyB7XHJcbiAgICBkcmF3KGRhdGEpIHtcclxuICAgICAgICBjb25zdCBuZXdzID0gZGF0YS5sZW5ndGggPj0gMTAgPyBkYXRhLnNsaWNlKDAsIDEwKSA6IGRhdGE7XHJcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgY29uc3QgbmV3c0l0ZW1UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3NJdGVtVGVtcCcpO1xyXG4gICAgICAgIG5ld3MuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3NDbG9uZSA9IG5ld3NJdGVtVGVtcC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGlkeCAlIDIpXHJcbiAgICAgICAgICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2l0ZW0nKS5jbGFzc0xpc3QuYWRkKCdhbHQnKTtcclxuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLXBob3RvJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2l0ZW0udXJsVG9JbWFnZSB8fCAnaW1nL25ld3NfcGxhY2Vob2xkZXIuanBnJ30pYDtcclxuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWF1dGhvcicpLnRleHRDb250ZW50ID0gaXRlbS5hdXRob3IgfHwgaXRlbS5zb3VyY2UubmFtZTtcclxuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19tZXRhLWRhdGUnKS50ZXh0Q29udGVudCA9IGl0ZW0ucHVibGlzaGVkQXRcclxuICAgICAgICAgICAgICAgIC5zbGljZSgwLCAxMClcclxuICAgICAgICAgICAgICAgIC5zcGxpdCgnLScpXHJcbiAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICAgICAuam9pbignLScpO1xyXG4gICAgICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2Rlc2NyaXB0aW9uLXRpdGxlJykudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX2Rlc2NyaXB0aW9uLXNvdXJjZScpLnRleHRDb250ZW50ID0gaXRlbS5zb3VyY2UubmFtZTtcclxuICAgICAgICAgICAgbmV3c0Nsb25lLnF1ZXJ5U2VsZWN0b3IoJy5uZXdzX19kZXNjcmlwdGlvbi1jb250ZW50JykudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICBuZXdzQ2xvbmUucXVlcnlTZWxlY3RvcignLm5ld3NfX3JlYWQtbW9yZSBhJykuc2V0QXR0cmlidXRlKCdocmVmJywgaXRlbS51cmwpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQobmV3c0Nsb25lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3cycpLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdzJykuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE5ld3M7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnJlcXVpcmUoXCIuL3NvdXJjZXMuY3NzXCIpO1xyXG5jbGFzcyBTb3VyY2VzIHtcclxuICAgIGRyYXcoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZUl0ZW1UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdXJjZUl0ZW1UZW1wJyk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNsb25lID0gc291cmNlSXRlbVRlbXAuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNvdXJjZUNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2VfX2l0ZW0tbmFtZScpLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgICBzb3VyY2VDbG9uZS5xdWVyeVNlbGVjdG9yKCcuc291cmNlX19pdGVtJykuc2V0QXR0cmlidXRlKCdkYXRhLXNvdXJjZS1pZCcsIGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmQoc291cmNlQ2xvbmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2VzJykuYXBwZW5kKGZyYWdtZW50KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBTb3VyY2VzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhcHBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL2FwcC9hcHBcIikpO1xyXG5yZXF1aXJlKFwiLi9nbG9iYWwuY3NzXCIpO1xyXG5jb25zdCBhcHAgPSBuZXcgYXBwXzEuZGVmYXVsdCgpO1xyXG5hcHAuc3RhcnQoKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5NZXRob2RzID0gZXhwb3J0cy5FbmRwb2ludCA9IHZvaWQgMDtcclxuLy9DT05UUk9MTEVSXHJcbnZhciBFbmRwb2ludDtcclxuKGZ1bmN0aW9uIChFbmRwb2ludCkge1xyXG4gICAgRW5kcG9pbnRbXCJldmVyeXRoaW5nXCJdID0gXCJldmVyeXRoaW5nXCI7XHJcbiAgICBFbmRwb2ludFtcInRvcEhlYWRsaW5lc1wiXSA9IFwidG9wLWhlYWRsaW5lc1wiO1xyXG4gICAgRW5kcG9pbnRbXCJzb3VyY2VzXCJdID0gXCJzb3VyY2VzXCI7XHJcbn0pKEVuZHBvaW50ID0gZXhwb3J0cy5FbmRwb2ludCB8fCAoZXhwb3J0cy5FbmRwb2ludCA9IHt9KSk7XHJcbnZhciBNZXRob2RzO1xyXG4oZnVuY3Rpb24gKE1ldGhvZHMpIHtcclxuICAgIE1ldGhvZHNbXCJHRVRcIl0gPSBcIkdFVFwiO1xyXG4gICAgTWV0aG9kc1tcIlBPU1RcIl0gPSBcIlBPU1RcIjtcclxufSkoTWV0aG9kcyA9IGV4cG9ydHMuTWV0aG9kcyB8fCAoZXhwb3J0cy5NZXRob2RzID0ge30pKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==