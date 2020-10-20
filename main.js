(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _startup_cards_startup_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startup-cards/startup-cards.component */ "./src/app/startup-cards/startup-cards.component.ts");
/* harmony import */ var _version_version_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./version/version.component */ "./src/app/version/version.component.ts");
/* harmony import */ var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapper/wrapper.component */ "./src/app/wrapper/wrapper.component.ts");







const routes = [
    { path: 'lahzeerai2Kah3aa/cards', component: _startup_cards_startup_cards_component__WEBPACK_IMPORTED_MODULE_2__["StartupCardsComponent"],
        data: {
            allCards: true,
            prices: true
        }
    },
    { path: 'ga5aiPheiF0ohhae/cards-no-prices', component: _startup_cards_startup_cards_component__WEBPACK_IMPORTED_MODULE_2__["StartupCardsComponent"],
        data: {
            allCards: true,
            prices: false
        }
    },
    { path: 'kie3aiRaeK2rua5o/andy', component: _startup_cards_startup_cards_component__WEBPACK_IMPORTED_MODULE_2__["StartupCardsComponent"],
        data: {
            allCards: true,
            disabled: ['Oneder'],
            prices: false
        }
    },
    { path: '3dcoderz', component: _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"],
        data: {
            url: 'https://3dcoderz.wordpress.com/'
        }
    },
    { path: 'bitbybit', component: _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"],
        data: {
            url: 'https://bitbybit.x10ed.com'
        }
    },
    { path: 'chessmatec', component: _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"],
        data: {
            url: 'https://www.chessadmin.com/buy?type=yearly'
        }
    },
    { path: 'demo', component: _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"],
        data: {
            url: 'https://player.vimeo.com/video/434820474'
        }
    },
    { path: 'version', component: _version_version_component__WEBPACK_IMPORTED_MODULE_3__["VersionComponent"] },
    { path: '', component: _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["WrapperComponent"],
        data: {
            url: 'https://spark.adobe.com/page/7ZI9hdrMx8c3V/'
        }
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFtL0NvZGUveDEwZWQvd2Vic2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _startup_cards_startup_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./startup-cards/startup-cards.component */ "./src/app/startup-cards/startup-cards.component.ts");
/* harmony import */ var _startup_card_startup_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./startup-card/startup-card.component */ "./src/app/startup-card/startup-card.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-useful-swiper */ "./node_modules/ngx-useful-swiper/__ivy_ngcc__/fesm2015/ngx-useful-swiper.js");
/* harmony import */ var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wrapper/wrapper.component */ "./src/app/wrapper/wrapper.component.ts");
/* harmony import */ var _version_version_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./version/version.component */ "./src/app/version/version.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_8__["NgxUsefulSwiperModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _startup_cards_startup_cards_component__WEBPACK_IMPORTED_MODULE_5__["StartupCardsComponent"],
        _startup_card_startup_card_component__WEBPACK_IMPORTED_MODULE_6__["StartupCardComponent"],
        _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_9__["WrapperComponent"],
        _version_version_component__WEBPACK_IMPORTED_MODULE_10__["VersionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_8__["NgxUsefulSwiperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _startup_cards_startup_cards_component__WEBPACK_IMPORTED_MODULE_5__["StartupCardsComponent"],
                    _startup_card_startup_card_component__WEBPACK_IMPORTED_MODULE_6__["StartupCardComponent"],
                    _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_9__["WrapperComponent"],
                    _version_version_component__WEBPACK_IMPORTED_MODULE_10__["VersionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_8__["NgxUsefulSwiperModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/startup-card/startup-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/startup-card/startup-card.component.ts ***!
  \********************************************************/
/*! exports provided: StartupCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupCardComponent", function() { return StartupCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







function StartupCardComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prop_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prop_r10);
} }
function StartupCardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r11);
} }
function StartupCardComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TRY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faChevronRight);
} }
function StartupCardComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.card.pricing);
} }
function StartupCardComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.card.pricing_2);
} }
function StartupCardComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+ RESEARCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StartupCardComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.card.website_text_3);
} }
function StartupCardComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartupCardComponent_div_33_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.showingVideo = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " WATCH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faEye);
} }
function StartupCardComponent_a_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", button_r14.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", button_r14.icon);
} }
function StartupCardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartupCardComponent_div_37_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.showingVideo = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.watchUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
class StartupCardComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.prices = false;
        this.tags = [];
        this.props = [];
        this.buttons = [];
        this.number_of_users = null;
        this.showingVideo = false;
        this.watchUrl = null;
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronRight"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEye"];
    }
    ngOnInit() {
        for (const x of (this.card.age_group || [])) {
            this.props.push('AGES ' + x);
        }
        this.props.push('Subject: ' + this.card.learning_subjects.slice(0, 3).join(', '));
        this.tags = this.card.learning_skills.slice(0, 3);
        if (this.card.website) {
            let href = this.card.website;
            if (href.indexOf('http') !== 0) {
                href = 'http://' + href;
            }
            this.buttons.push({
                href: href,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGlobe"]
            });
        }
        if (this.card.facebook) {
            this.buttons.push({
                href: this.card.facebook,
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebook"]
            });
        }
        if (this.card.twitter) {
            this.buttons.push({
                href: this.card.twitter,
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitter"]
            });
        }
        if (this.card.linkedin) {
            this.buttons.push({
                href: this.card.linkedin,
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faLinkedin"]
            });
        }
        if (this.card.number_of_users) {
            this.number_of_users = this.card.number_of_users.toLocaleString('en-US', { maximumFractionDigits: 0, useGrouping: true });
        }
        if (this.card.watch && this.card.watch.length) {
            this.watchUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.card.watch[0]);
        }
    }
}
StartupCardComponent.ɵfac = function StartupCardComponent_Factory(t) { return new (t || StartupCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
StartupCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartupCardComponent, selectors: [["app-startup-card"]], inputs: { card: "card", prices: "prices" }, decls: 38, vars: 18, consts: [[1, "card"], [1, "bg"], [1, "title"], [1, "row"], [1, "left"], [1, "top"], [1, "picture"], [1, "props"], ["class", "prop", 4, "ngFor", "ngForOf"], [1, "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], ["class", "try", 4, "ngIf"], [1, "bottom"], [1, "text2"], ["class", "pricing", 4, "ngIf"], [1, "right"], [1, "text1"], [1, "header"], ["class", "research", 4, "ngIf"], [1, "traction"], ["class", "content", 4, "ngIf"], [1, "external"], ["class", "watch", 3, "click", 4, "ngIf"], [1, "buttons"], ["class", "button", "target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "logo", 3, "src"], ["class", "youtube", 4, "ngIf"], [1, "prop"], [1, "tag"], [1, "try"], [3, "icon"], [1, "pricing"], [1, "research"], [1, "content"], [1, "watch", 3, "click"], ["target", "_blank", 1, "button", 3, "href"], [1, "youtube"], [1, "close", 3, "click"], ["frameborder", "0", "allow", "autoplay; fullscreen", 3, "src"]], template: function StartupCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StartupCardComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StartupCardComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StartupCardComponent_div_12_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Business Model");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, StartupCardComponent_div_20_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StartupCardComponent_div_21_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, StartupCardComponent_div_27_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, StartupCardComponent_div_31_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, StartupCardComponent_div_33_Template, 3, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, StartupCardComponent_a_35_Template, 2, 2, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, StartupCardComponent_div_37_Template, 4, 1, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.card.picture + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.props);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.try);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.website_text_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.prices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.prices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.headline_text_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.card.website_text_2, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.research_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.headline_text_3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.watch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.card.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showingVideo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".boxshadow[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);\n  min-width: calc(max(30%, 200px));\n  padding: 30px;\n  color: #147bb7;\n}\n.ff-primary[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.ff-secondary[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n}\n.txt-titles-blue[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: bold;\n}\n.txt-text-blue[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 14px;\n  font-weight: normal;\n}\n.txt-tags-p[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 11px;\n  font-weight: normal;\n}\n.txt-titles-white[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: normal;\n}\n.txt-text-white[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 14px;\n  font-weight: bold;\n}\n.txt-pricing[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 15px;\n  font-weight: bold;\n}\n.txt-buttons[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n}\n.txt-tags-s[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n}\n.no-scrollbar[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%] {\n  max-width: 1000px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n}\n[_nghost-%COMP%]   pre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: stretch;\n  padding: 30px;\n  position: relative;\n  overflow-y: scroll;\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #147bb7 0%, #147bb7 650px, white 650px, white 100%);\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: bold;\n  align-self: flex-start;\n  color: white;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  flex: 1 0 calc(50% - 20px);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-flow: row wrap;\n  align-items: flex-start;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 460px;\n  padding-right: 20px;\n  max-width: 580px;\n  flex-flow: column;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: stretch;\n  width: 100%;\n  flex-flow: row wrap;\n  align-items: stretch;\n  justify-content: flex-start;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  flex: 0 0 300px;\n  max-width: 100%;\n  background-size: contain;\n  background-position: top left;\n  background-repeat: no-repeat;\n  min-height: 225px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .props[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 0 140px;\n  flex-flow: column;\n  align-items: flex-start;\n  padding: 10px;\n  padding-bottom: 0;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .props[_ngcontent-%COMP%]   .prop[_ngcontent-%COMP%] {\n  margin: 0 6px;\n  margin-bottom: 6px;\n  color: white;\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 11px;\n  font-weight: normal;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .props[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  margin-top: 5px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .props[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n  color: #147bb7;\n  background-color: white;\n  padding: 7px 15px;\n  margin: 0 6px;\n  margin-bottom: 6px;\n  border-radius: 20px;\n  white-space: nowrap;\n  border: 1px solid #147bb740;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .props[_ngcontent-%COMP%]   .try[_ngcontent-%COMP%] {\n  margin: 0;\n  cursor: pointer;\n  color: white;\n  background-color: #0d4d72;\n  padding: 8px 40px;\n  border-radius: 20px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: auto;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  flex-flow: column;\n  color: white;\n  margin-top: 10px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .text2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: bold;\n  margin: 10px 0;\n  margin-top: 15px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .text2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 14px;\n  font-weight: normal;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .text2[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 15px;\n  font-weight: bold;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .text2[_ngcontent-%COMP%]   .span[_ngcontent-%COMP%], [_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .text2[_ngcontent-%COMP%]   .pricing[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: flex;\n  flex: 0 1 420px;\n  flex-flow: column;\n  align-self: stretch;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: white;\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);\n  min-width: calc(max(30%, 200px));\n  padding: 30px;\n  color: #147bb7;\n  position: relative;\n  margin: 15px 0;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: normal;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .text1[_ngcontent-%COMP%]   .research[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 0;\n  transform: translateY(50%);\n  cursor: pointer;\n  color: white;\n  background-color: #0d4d72;\n  padding: 8px 20px;\n  border-radius: 20px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .traction[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);\n  min-width: calc(max(30%, 200px));\n  padding: 30px;\n  color: #147bb7;\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 14px;\n  font-weight: bold;\n  margin: 15px 0;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .traction[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: normal;\n  margin-bottom: 20px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .external[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: stretch;\n  margin-top: auto;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .external[_ngcontent-%COMP%]   .watch[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #0d4d72;\n  padding: 8px 40px;\n  border-radius: 20px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  white-space: nowrap;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .external[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n  font-size: 40px;\n  margin: 0;\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .external[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d4d72;\n  margin: 0 10px;\n  transform: scale(1);\n  transition-property: transform;\n  transition-duration: 250ms;\n  display: inline-block;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .external[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .external[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]     svg {\n  padding: 5px;\n  box-shadow: 0 0px 10px #fff;\n  border-radius: 40px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  max-height: 100px;\n  position: absolute;\n  right: 40px;\n  transform: rotate(-20deg);\n  object-fit: contain;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.8);\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: white;\n  pointer-events: all;\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n[_nghost-%COMP%]   .card[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 800px;\n  max-height: 440px;\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFtL0NvZGUveDEwZWQvd2Vic2l0ZS9zcmMvY29tbW9uLmxlc3MiLCJzcmMvYXBwL3N0YXJ0dXAtY2FyZC9zdGFydHVwLWNhcmQuY29tcG9uZW50Lmxlc3MiLCIvVXNlcnMvYWRhbS9Db2RlL3gxMGVkL3dlYnNpdGUvc3JjL2FwcC9zdGFydHVwLWNhcmQvc3RhcnR1cC1jYXJkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQUE7RUFDQSxnREFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksMENBQUE7QUNGSjtBREtBO0VBQ0ksNENBQUE7QUNISjtBRE1BO0VBSEksNENBQUE7RUFLQSxlQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9BO0VBVEksNENBQUE7RUFXQSxlQUFBO0VBQ0EsbUJBQUE7QUNMSjtBRFFBO0VBZkksNENBQUE7RUFpQkEsZUFBQTtFQUNBLG1CQUFBO0FDTko7QURTQTtFQXJCSSw0Q0FBQTtFQXVCQSxlQUFBO0VBQ0EsbUJBQUE7QUNQSjtBRFVBO0VBM0JJLDRDQUFBO0VBNkJBLGVBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEV0E7RUFqQ0ksNENBQUE7RUFtQ0EsZUFBQTtFQUNBLGlCQUFBO0FDVEo7QURZQTtFQTNDSSwwQ0FBQTtFQTZDQSxlQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGFBO0VBakRJLDBDQUFBO0VBbURBLGVBQUE7RUFDQSxtQkFBQTtBQ1hKO0FEY0E7RUNaRSxVQUFVO0VEY1IscUJBQUE7RUNaRixRQUFRO0VEY04sNENBQUE7QUNaSjtBRGFJO0VDWEYsdUJBQXVCO0VEYWpCLGFBQUE7QUNYUjtBQzVEQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBRDhESjtBQ3BFQTtFQVNRLHFCQUFBO0FEOERSO0FDdkVBO0VBYVEsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUQ2RE4sVUFBVTtFRGhCUixxQkFBQTtFQ2tCRixRQUFRO0VEaEJOLDRDQUFBO0FDa0JKO0FEakJJO0VDbUJGLHVCQUF1QjtFRGpCakIsYUFBQTtBQ21CUjtBQzFGQTtFQXlCWSx5RkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FEbUVaO0FDbEdBO0VGYUksNENBQUE7RUFLQSxlQUFBO0VFa0JRLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURtRVo7QUMxR0E7O0VBMkNZLDBCQUFBO0FEbUVaO0FDOUdBO0VBK0NZLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QURrRVo7QUNySEE7RUF3RFksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURnRVo7QUM1SEE7RUErRGdCLGFBQUE7RUFHQSx3QkFBQTtFQUNBLFdBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUQ2RGhCO0FDcElBO0VBMkVvQixlQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FENERwQjtBQzVJQTtFQW9Gb0IsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FEMkRwQjtBQ3BKQTtFQTRGd0IsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFRmpGcEIsNENBQUE7RUFpQkEsZUFBQTtFQUNBLG1CQUFBO0FDNkhKO0FDNUpBO0VBbUd3QixhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUQ0RHhCO0FDbEtBO0VGU0ksMENBQUE7RUFtREEsZUFBQTtFQUNBLG1CQUFBO0VFNkN3QixjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBRDhENUI7QUMvS0E7RUFzSHdCLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRmxIcEIsMENBQUE7RUE2Q0EsZUFBQTtFQUNBLGlCQUFBO0VFc0VvQixnQkFBQTtFQUNBLG1CQUFBO0FEOER4QjtBQzVMQTtFQW9JZ0IsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUQyRGhCO0FDak1BO0VGYUksNENBQUE7RUFLQSxlQUFBO0VBQ0EsaUJBQUE7RUV1SG9CLGNBQUE7RUFDQSxnQkFBQTtBRDZEeEI7QUN4TUE7RUZhSSw0Q0FBQTtFQVdBLGVBQUE7RUFDQSxtQkFBQTtBQ29MSjtBQzdNQTtFRmFJLDRDQUFBO0VBbUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2lLSjtBQ2xOQTs7RUFvSndCLHFCQUFBO0FEa0V4QjtBQ3ROQTtFQTJKWSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRDhEWjtBQzdOQTtFRmFJLDRDQUFBO0VBNkJBLGVBQUE7RUFDQSxpQkFBQTtFQTFDQSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFRStKWSxrQkFBQTtFQW9CQSxjQUFBO0FEaURoQjtBQ3pPQTtFRmFJLDRDQUFBO0VBdUJBLGVBQUE7RUFDQSxtQkFBQTtFRW1JZ0IsbUJBQUE7QUR1RXBCO0FDL09BO0VBNEtvQixrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFRjNLaEIsMENBQUE7RUE2Q0EsZUFBQTtFQUNBLGlCQUFBO0VFK0hnQixtQkFBQTtBRHdFcEI7QUM5UEE7RUZDSSx1QkFBQTtFQUNBLGdEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQVFBLDRDQUFBO0VBNkJBLGVBQUE7RUFDQSxpQkFBQTtFRXVKWSxjQUFBO0FEdUVoQjtBQ3pRQTtFRmFJLDRDQUFBO0VBdUJBLGVBQUE7RUFDQSxtQkFBQTtFRTJKZ0IsbUJBQUE7QUQrRXBCO0FDL1FBO0VBc01nQixhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBRDRFaEI7QUN0UkE7RUE0TW9CLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUZ0TWhCLDBDQUFBO0VBNkNBLGVBQUE7RUFDQSxpQkFBQTtFRTJKZ0IsbUJBQUE7RUFDQSxlQUFBO0FEOEVwQjtBQ2pTQTtFRlNJLDBDQUFBO0VBNkNBLGVBQUE7RUFDQSxpQkFBQTtFRWdLZ0IsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBRGdGcEI7QUN6U0E7RUEyTndCLGNBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QURpRnhCO0FDL0V3QjtFQUNJLHFCQUFBO0FEaUY1QjtBQ3BUQTtFQXVPNEIsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QURnRjVCO0FDelRBO0VBaVBZLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBR0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUR5RVo7QUNqVUE7RUE0UFksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUR3RVo7QUM5VUE7RUF5UWdCLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRHdFaEI7QUN2VkE7RUFtUmdCLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FEdUVoQiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0dXAtY2FyZC9zdGFydHVwLWNhcmQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAYmx1ZTogIzE0N2JiNztcbkBkYXJrYmx1ZTogIzBkNGQ3Mjtcbi5ib3hzaGFkb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTlweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICBtaW4td2lkdGg6IH4nY2FsYyhtYXgoMzAlLCAyMDBweCkpJztcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGNvbG9yOiBAYmx1ZTtcbn1cblxuLmZmLXByaW1hcnkge1xuICAgIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbn1cblxuLmZmLXNlY29uZGFyeSB7XG4gICAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG59XG5cbi50eHQtdGl0bGVzLWJsdWUge1xuICAgIC5mZi1zZWNvbmRhcnk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHh0LXRleHQtYmx1ZSB7XG4gICAgLmZmLXNlY29uZGFyeTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnR4dC10YWdzLXAge1xuICAgIC5mZi1zZWNvbmRhcnk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi50eHQtdGl0bGVzLXdoaXRlIHtcbiAgICAuZmYtc2Vjb25kYXJ5O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udHh0LXRleHQtd2hpdGUge1xuICAgIC5mZi1zZWNvbmRhcnk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHh0LXByaWNpbmcge1xuICAgIC5mZi1zZWNvbmRhcnk7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHh0LWJ1dHRvbnMge1xuICAgIC5mZi1wcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnR4dC10YWdzLXMge1xuICAgIC5mZi1wcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ubm8tc2Nyb2xsYmFyIHtcbiAgICAvKkZpcmVGb3gqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAvKklFMTArKi9cbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuIiwiLmJveHNoYWRvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIG1pbi13aWR0aDogY2FsYyhtYXgoMzAlLCAyMDBweCkpO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogIzE0N2JiNztcbn1cbi5mZi1wcmltYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuLmZmLXNlY29uZGFyeSB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xufVxuLnR4dC10aXRsZXMtYmx1ZSB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnR4dC10ZXh0LWJsdWUge1xuICBmb250LWZhbWlseTogJ1N0aW50IFVsdHJhIEV4cGFuZGVkJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnR4dC10YWdzLXAge1xuICBmb250LWZhbWlseTogJ1N0aW50IFVsdHJhIEV4cGFuZGVkJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnR4dC10aXRsZXMtd2hpdGUge1xuICBmb250LWZhbWlseTogJ1N0aW50IFVsdHJhIEV4cGFuZGVkJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnR4dC10ZXh0LXdoaXRlIHtcbiAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udHh0LXByaWNpbmcge1xuICBmb250LWZhbWlseTogJ1N0aW50IFVsdHJhIEV4cGFuZGVkJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50eHQtYnV0dG9ucyB7XG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50eHQtdGFncy1zIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ubm8tc2Nyb2xsYmFyIHtcbiAgLypGaXJlRm94Ki9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKklFMTArKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG4ubm8tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIC8qQ2hyb21lLCBTYWZhcmksIEVkZ2UqL1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3Qge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgcHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuOmhvc3QgLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBwYWRkaW5nOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgLypGaXJlRm94Ki9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKklFMTArKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG46aG9zdCAuY2FyZDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5jYXJkIC5iZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzE0N2JiNyAwJSwgIzE0N2JiNyA2NTBweCwgd2hpdGUgNjUwcHgsIHdoaXRlIDEwMCUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG46aG9zdCAuY2FyZCAudGl0bGUge1xuICBmb250LWZhbWlseTogJ1N0aW50IFVsdHJhIEV4cGFuZGVkJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuOmhvc3QgLmNhcmQgLnRvcCxcbjpob3N0IC5jYXJkIC5ib3R0b20ge1xuICBmbGV4OiAxIDAgY2FsYyg1MCUgLSAyMHB4KTtcbn1cbjpob3N0IC5jYXJkIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbjpob3N0IC5jYXJkIC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIDQ2MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDU4MHB4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbn1cbjpob3N0IC5jYXJkIC5sZWZ0IC50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuOmhvc3QgLmNhcmQgLmxlZnQgLnRvcCAucGljdHVyZSB7XG4gIGZsZXg6IDAgMCAzMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiAyMjVweDtcbn1cbjpob3N0IC5jYXJkIC5sZWZ0IC50b3AgLnByb3BzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAwIDE0MHB4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuOmhvc3QgLmNhcmQgLmxlZnQgLnRvcCAucHJvcHMgLnByb3Age1xuICBtYXJnaW46IDAgNnB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbjpob3N0IC5jYXJkIC5sZWZ0IC50b3AgLnByb3BzIC50YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG46aG9zdCAuY2FyZCAubGVmdCAudG9wIC5wcm9wcyAudGFncyAudGFnIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMTQ3YmI3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIG1hcmdpbjogMCA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE0N2JiNzQwO1xufVxuOmhvc3QgLmNhcmQgLmxlZnQgLnRvcCAucHJvcHMgLnRyeSB7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDRkNzI7XG4gIHBhZGRpbmc6IDhweCA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46aG9zdCAuY2FyZCAubGVmdCAuYm90dG9tIHtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbjpob3N0IC5jYXJkIC5sZWZ0IC5ib3R0b20gLnRleHQyIGgyIHtcbiAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuOmhvc3QgLmNhcmQgLmxlZnQgLmJvdHRvbSAudGV4dDIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG46aG9zdCAuY2FyZCAubGVmdCAuYm90dG9tIC50ZXh0MiAucHJpY2luZyB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3QgLmNhcmQgLmxlZnQgLmJvdHRvbSAudGV4dDIgLnNwYW4sXG46aG9zdCAuY2FyZCAubGVmdCAuYm90dG9tIC50ZXh0MiAucHJpY2luZyB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbjpob3N0IC5jYXJkIC5yaWdodCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMSA0MjBweDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG46aG9zdCAuY2FyZCAucmlnaHQgLnRleHQxIHtcbiAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIG1pbi13aWR0aDogY2FsYyhtYXgoMzAlLCAyMDBweCkpO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogIzE0N2JiNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDE1cHggMDtcbn1cbjpob3N0IC5jYXJkIC5yaWdodCAudGV4dDEgLmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG46aG9zdCAuY2FyZCAucmlnaHQgLnRleHQxIC5yZXNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ0ZDcyO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuOmhvc3QgLmNhcmQgLnJpZ2h0IC50cmFjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE5cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIG1pbi13aWR0aDogY2FsYyhtYXgoMzAlLCAyMDBweCkpO1xuICBwYWRkaW5nOiAzMHB4O1xuICBjb2xvcjogIzE0N2JiNztcbiAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuOmhvc3QgLmNhcmQgLnJpZ2h0IC50cmFjdGlvbiAuaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjpob3N0IC5jYXJkIC5yaWdodCAuZXh0ZXJuYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuOmhvc3QgLmNhcmQgLnJpZ2h0IC5leHRlcm5hbCAud2F0Y2gge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZDRkNzI7XG4gIHBhZGRpbmc6IDhweCA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbjpob3N0IC5jYXJkIC5yaWdodCAuZXh0ZXJuYWwgLmJ1dHRvbnMge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbjpob3N0IC5jYXJkIC5yaWdodCAuZXh0ZXJuYWwgLmJ1dHRvbnMgYSB7XG4gIGNvbG9yOiAjMGQ0ZDcyO1xuICBtYXJnaW46IDAgMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyNTBtcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOmhvc3QgLmNhcmQgLnJpZ2h0IC5leHRlcm5hbCAuYnV0dG9ucyBhOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuOmhvc3QgLmNhcmQgLnJpZ2h0IC5leHRlcm5hbCAuYnV0dG9ucyBhIDo6bmctZGVlcCBzdmcge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDEwcHggI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cbjpob3N0IC5jYXJkIGltZy5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbjpob3N0IC5jYXJkIC55b3V0dWJlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdCAuY2FyZCAueW91dHViZSAuY2xvc2Uge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG46aG9zdCAuY2FyZCAueW91dHViZSBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXgtaGVpZ2h0OiA0NDBweDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uL2NvbW1vbi5sZXNzJztcblxuOmhvc3Qge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgcHJlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIH1cblxuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIC5uby1zY3JvbGxiYXI7XG5cbiAgICAgICAgLmJnIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGJsdWUgMCUsIEBibHVlIDY1MHB4LCB3aGl0ZSA2NTBweCwgd2hpdGUgMTAwJSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAvLyByaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgLnR4dC10aXRsZXMtYmx1ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudG9wLCAuYm90dG9tIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMCB+J2NhbGMoNTAlIC0gMjBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubGVmdCB7XG5cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4OiAxIDEgNDYwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuXG4gICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7ICAgXG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDAgMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjI1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnByb3BzIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAwIDE0MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIC5wcm9wIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAudHh0LXRhZ3MtcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50YWdzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAudGFnIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudHh0LXRhZ3MtcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQGJsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNDdiYjc0MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGRhcmtibHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgLnR4dC1idXR0b25zO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3R0b20ge1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIC50ZXh0MiB7XG4gICAgICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC50eHQtdGl0bGVzLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAudHh0LXRleHQtYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucHJpY2luZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAudHh0LXByaWNpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNwYW4sIC5wcmljaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodCB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXg6IDAgMSA0MjBweDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcblxuICAgICAgICAgICAgLnRleHQxIHtcbiAgICAgICAgICAgICAgICAudHh0LXRleHQtd2hpdGU7XG4gICAgICAgICAgICAgICAgLmJveHNoYWRvdztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgLnR4dC10aXRsZXMtd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnJlc2VhcmNoIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBkYXJrYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC50eHQtYnV0dG9ucztcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50cmFjdGlvbiB7XG4gICAgICAgICAgICAgICAgLmJveHNoYWRvdztcbiAgICAgICAgICAgICAgICAudHh0LXRleHQtd2hpdGU7XG4gICAgICAgICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgIC50eHQtdGl0bGVzLXdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmV4dGVybmFsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgICAgICAgICAgLndhdGNoIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAZGFya2JsdWU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgLnR4dC1idXR0b25zO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgLnR4dC1idXR0b25zO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IEBkYXJrYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDI1MG1zO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCBzdmcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDBweCAxMHB4ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDsgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpbWcubG9nbyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIC8vIHRvcDogLTUwcHg7XG4gICAgICAgICAgICAvLyB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgIHJpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cblxuICAgICAgICAueW91dHViZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjgpO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZnJhbWUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ0MHB4O1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartupCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-startup-card',
                templateUrl: './startup-card.component.html',
                styleUrls: ['./startup-card.component.less']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prices: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/startup-cards/startup-cards.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/startup-cards/startup-cards.component.ts ***!
  \**********************************************************/
/*! exports provided: StartupCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupCardsComponent", function() { return StartupCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-useful-swiper */ "./node_modules/ngx-useful-swiper/__ivy_ngcc__/fesm2015/ngx-useful-swiper.js");
/* harmony import */ var _startup_card_startup_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../startup-card/startup-card.component */ "./src/app/startup-card/startup-card.component.ts");









const _c0 = ["usefulSwiper"];
function StartupCardsComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartupCardsComponent_ng_container_4_div_1_Template_h1_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.open_slideshow(ctx_r4.i); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartupCardsComponent_ng_container_4_div_1_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const card_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.open_slideshow(card_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", card_r2.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function StartupCardsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StartupCardsComponent_ng_container_4_div_1_Template, 4, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.enabled(card_r2));
} }
function StartupCardsComponent_ng_container_5_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-startup-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r11)("prices", ctx_r12.config.prices);
} }
function StartupCardsComponent_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StartupCardsComponent_ng_container_5_ng_container_7_div_1_Template, 2, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.enabled(card_r11));
} }
function StartupCardsComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "swiper", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StartupCardsComponent_ng_container_5_ng_container_7_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartupCardsComponent_ng_container_5_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.close_slideshow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r1.swiperConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cards);
} }
class StartupCardsComponent {
    constructor(http, activatedRoute) {
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.cards = [];
        this.config = {};
        this.slideshow = false;
        this.swiperConfig = {
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30,
            loop: true,
        };
        this.l = console.log;
        activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((data) => {
            this.config = data;
            console.log('CONFIG: ', data);
            return http.get('assets/startups-table.json');
        })).subscribe((cards) => {
            this.cards = cards;
        });
    }
    ngOnInit() {
    }
    enabled(card) {
        return (this.config.allCards ||
            (this.config.enabled && this.config.enabled.indexOf(card.name) >= 0)) &&
            (!this.config.disabled || this.config.disabled.indexOf(card.name) === -1);
    }
    open_slideshow(name) {
        this.slideshow = true;
        let i = 0;
        for (const card of this.cards) {
            if (!this.enabled(card)) {
                continue;
            }
            if (card.name === name) {
                break;
            }
            i++;
        }
        this.swiperConfig.initialSlide = i;
        this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((event) => {
            return event.key === 'Escape';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(() => { this.close_slideshow(); });
        setTimeout(() => {
            this.usefulSwiper.swiper.update();
        }, 100);
    }
    close_slideshow() {
        this.slideshow = false;
        this.sub.unsubscribe();
    }
}
StartupCardsComponent.ɵfac = function StartupCardsComponent_Factory(t) { return new (t || StartupCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
StartupCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartupCardsComponent, selectors: [["app-startup-cards"]], viewQuery: function StartupCardsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.usefulSwiper = _t.first);
    } }, decls: 6, vars: 2, consts: [[1, "header"], ["href", "/"], ["src", "assets/img/logo.png", 1, "logo"], [1, "showcase"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "thumbnail", 4, "ngIf"], [1, "thumbnail"], [3, "click"], [1, "thumbnail", 3, "src", "click"], [1, "modal"], [1, "overlay"], [1, "slideshow"], [3, "config"], ["usefulSwiper", ""], [1, "swiper-wrapper"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "close", 3, "click"], ["class", "swiper-slide", 4, "ngIf"], [1, "swiper-slide"], [3, "card", "prices"]], template: function StartupCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StartupCardsComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StartupCardsComponent_ng_container_5_Template, 13, 2, "ng-container", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slideshow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_6__["SwiperComponent"], _startup_card_startup_card_component__WEBPACK_IMPORTED_MODULE_7__["StartupCardComponent"]], styles: [".boxshadow[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);\n  min-width: calc(max(30%, 200px));\n  padding: 30px;\n  color: #147bb7;\n}\n.ff-primary[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n}\n.ff-secondary[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n}\n.txt-titles-blue[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: bold;\n}\n.txt-text-blue[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 14px;\n  font-weight: normal;\n}\n.txt-tags-p[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 11px;\n  font-weight: normal;\n}\n.txt-titles-white[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: normal;\n}\n.txt-text-white[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 14px;\n  font-weight: bold;\n}\n.txt-pricing[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 15px;\n  font-weight: bold;\n}\n.txt-buttons[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 12px;\n  font-weight: bold;\n}\n.txt-tags-s[_ngcontent-%COMP%] {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 10px;\n  font-weight: normal;\n}\n.no-scrollbar[_ngcontent-%COMP%] {\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n.no-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  flex-flow: row;\n  padding: 10px 30px;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 200px;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img.logo[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]   .showcase[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .showcase[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   .showcase[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: 'Stint Ultra Expanded', cursive;\n  font-size: 22px;\n  font-weight: bold;\n  font-size: 30px;\n  color: #0d4d72;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .showcase[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n[_nghost-%COMP%]   .showcase[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 30px;\n  object-fit: contain;\n  width: 250px;\n  height: 250px;\n  box-shadow: 0px 0px 19px 0px rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .showcase[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: white;\n  font-size: 30px;\n  cursor: pointer;\n  z-index: 2;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100%;\n  overflow-y: scroll;\n  max-width: 1100px;\n  \n  scrollbar-width: none;\n  \n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  display: none;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .modal[_ngcontent-%COMP%]   .slideshow[_ngcontent-%COMP%]   swiper[_ngcontent-%COMP%]     .swiper-pagination-bullet:not(.swiper-pagination-bullet-active) {\n  background: white;\n  opacity: 0.6;\n}\n@media only screen and (max-width: 600px) {\n  .swiper-pagination[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFtL0NvZGUveDEwZWQvd2Vic2l0ZS9zcmMvY29tbW9uLmxlc3MiLCJzcmMvYXBwL3N0YXJ0dXAtY2FyZHMvc3RhcnR1cC1jYXJkcy5jb21wb25lbnQubGVzcyIsIi9Vc2Vycy9hZGFtL0NvZGUveDEwZWQvd2Vic2l0ZS9zcmMvYXBwL3N0YXJ0dXAtY2FyZHMvc3RhcnR1cC1jYXJkcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHVCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDREo7QURJQTtFQUNJLDBDQUFBO0FDRko7QURLQTtFQUNJLDRDQUFBO0FDSEo7QURNQTtFQUhJLDRDQUFBO0VBS0EsZUFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTtFQVRJLDRDQUFBO0VBV0EsZUFBQTtFQUNBLG1CQUFBO0FDTEo7QURRQTtFQWZJLDRDQUFBO0VBaUJBLGVBQUE7RUFDQSxtQkFBQTtBQ05KO0FEU0E7RUFyQkksNENBQUE7RUF1QkEsZUFBQTtFQUNBLG1CQUFBO0FDUEo7QURVQTtFQTNCSSw0Q0FBQTtFQTZCQSxlQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdBO0VBakNJLDRDQUFBO0VBbUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1RKO0FEWUE7RUEzQ0ksMENBQUE7RUE2Q0EsZUFBQTtFQUNBLGlCQUFBO0FDVko7QURhQTtFQWpESSwwQ0FBQTtFQW1EQSxlQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRGNBO0VDWkUsVUFBVTtFRGNSLHFCQUFBO0VDWkYsUUFBUTtFRGNOLDRDQUFBO0FDWko7QURhSTtFQ1hGLHVCQUF1QjtFRGFqQixhQUFBO0FDWFI7QUM1REE7RUFDSSxXQUFBO0FEOERKO0FDL0RBO0VBR1EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEK0RSO0FDdEVBO0VBU1ksWUFBQTtBRGdFWjtBQ3pFQTtFQVdnQixZQUFBO0VBQ0EsV0FBQTtBRGlFaEI7QUM3RUE7RUFrQlEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUQ4RFI7QUNsRkE7RUF1QlksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FEOERaO0FDeEZBO0VGYUksNENBQUE7RUFLQSxlQUFBO0VBQ0EsaUJBQUE7RUVXWSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURnRWhCO0FDOURnQjtFQUNJLDBCQUFBO0FEZ0VwQjtBQ25HQTtFQXdDZ0IsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLGVBQUE7QUQ4RGhCO0FDNURnQjtFQUNJLGdEQUFBO0FEOERwQjtBQzlHQTtFQXVEUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0FEMERSO0FDcEhBO0VBNkRZLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7QUQwRFo7QUM3SEE7RUF1RVksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUR5RFo7QUN0SUE7RUFpRlksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEd0RaO0FDaEpBO0VBMkZnQixXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VEd0RkLFVBQVU7RURwRlIscUJBQUE7RUNzRkYsUUFBUTtFRHBGTiw0Q0FBQTtBQ3NGSjtBRHJGSTtFQ3VGRix1QkFBdUI7RURyRmpCLGFBQUE7QUN1RlI7QUM5SkE7RUFrR29CLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUQrRHBCO0FDM0RvQjtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBRDZEeEI7QUNyREE7RUFDSTtJQUNJLGFBQUE7RUR1RE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0dXAtY2FyZHMvc3RhcnR1cC1jYXJkcy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBibHVlOiAjMTQ3YmI3O1xuQGRhcmtibHVlOiAjMGQ0ZDcyO1xuLmJveHNoYWRvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxOXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgIG1pbi13aWR0aDogfidjYWxjKG1heCgzMCUsIDIwMHB4KSknO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgY29sb3I6IEBibHVlO1xufVxuXG4uZmYtcHJpbWFyeSB7XG4gICAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZmYtc2Vjb25kYXJ5IHtcbiAgICBmb250LWZhbWlseTogJ1N0aW50IFVsdHJhIEV4cGFuZGVkJywgY3Vyc2l2ZTtcbn1cblxuLnR4dC10aXRsZXMtYmx1ZSB7XG4gICAgLmZmLXNlY29uZGFyeTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50eHQtdGV4dC1ibHVlIHtcbiAgICAuZmYtc2Vjb25kYXJ5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udHh0LXRhZ3MtcCB7XG4gICAgLmZmLXNlY29uZGFyeTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnR4dC10aXRsZXMtd2hpdGUge1xuICAgIC5mZi1zZWNvbmRhcnk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi50eHQtdGV4dC13aGl0ZSB7XG4gICAgLmZmLXNlY29uZGFyeTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50eHQtcHJpY2luZyB7XG4gICAgLmZmLXNlY29uZGFyeTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50eHQtYnV0dG9ucyB7XG4gICAgLmZmLXByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udHh0LXRhZ3MtcyB7XG4gICAgLmZmLXByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5uby1zY3JvbGxiYXIge1xuICAgIC8qRmlyZUZveCovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC8qSUUxMCsqL1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKkNocm9tZSwgU2FmYXJpLCBFZGdlKi9cbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iLCIuYm94c2hhZG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgbWluLXdpZHRoOiBjYWxjKG1heCgzMCUsIDIwMHB4KSk7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGNvbG9yOiAjMTQ3YmI3O1xufVxuLmZmLXByaW1hcnkge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG59XG4uZmYtc2Vjb25kYXJ5IHtcbiAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG59XG4udHh0LXRpdGxlcy1ibHVlIHtcbiAgZm9udC1mYW1pbHk6ICdTdGludCBVbHRyYSBFeHBhbmRlZCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udHh0LXRleHQtYmx1ZSB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udHh0LXRhZ3MtcCB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udHh0LXRpdGxlcy13aGl0ZSB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udHh0LXRleHQtd2hpdGUge1xuICBmb250LWZhbWlseTogJ1N0aW50IFVsdHJhIEV4cGFuZGVkJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50eHQtcHJpY2luZyB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnR4dC1idXR0b25zIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnR4dC10YWdzLXMge1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5uby1zY3JvbGxiYXIge1xuICAvKkZpcmVGb3gqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qSUUxMCsqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcbn1cbi5uby1zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgcGFkZGluZzogMTBweCAzMHB4O1xufVxuOmhvc3QgLmhlYWRlciBhIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuOmhvc3QgLmhlYWRlciBhIGltZy5sb2dvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IC5zaG93Y2FzZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLnNob3djYXNlIC50aHVtYm5haWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG46aG9zdCAuc2hvd2Nhc2UgLnRodW1ibmFpbCBoMSB7XG4gIGZvbnQtZmFtaWx5OiAnU3RpbnQgVWx0cmEgRXhwYW5kZWQnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjMGQ0ZDcyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCAuc2hvd2Nhc2UgLnRodW1ibmFpbCBoMTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuOmhvc3QgLnNob3djYXNlIC50aHVtYm5haWwgaW1nIHtcbiAgbWFyZ2luOiAzMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTlweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgLnNob3djYXNlIC50aHVtYm5haWwgaW1nOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuOmhvc3QgLm1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59XG46aG9zdCAubW9kYWwgLm92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3QgLm1vZGFsIC5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMjtcbn1cbjpob3N0IC5tb2RhbCAuc2xpZGVzaG93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAubW9kYWwgLnNsaWRlc2hvdyBzd2lwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgLypGaXJlRm94Ki9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKklFMTArKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XG59XG46aG9zdCAubW9kYWwgLnNsaWRlc2hvdyBzd2lwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgLypDaHJvbWUsIFNhZmFyaSwgRWRnZSovXG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCAubW9kYWwgLnNsaWRlc2hvdyBzd2lwZXIgLnN3aXBlci13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbjpob3N0IC5tb2RhbCAuc2xpZGVzaG93IHN3aXBlciA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldDpub3QoLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUpIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9jb21tb24ubGVzcyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuaGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaW1nLmxvZ28ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zaG93Y2FzZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAudHh0LXRpdGxlcy1ibHVlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzBkNGQ3MjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweDtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTlweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNzUpO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNsaWRlc2hvdyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7ICAgICAgICAgICBcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgc3dpcGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgICAgICAgICAgICAgICAubm8tc2Nyb2xsYmFyO1xuXG4gICAgICAgICAgICAgICAgLnN3aXBlci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA6Om5nLWRlZXAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICAgICAgICAgICAgICAgICY6bm90KC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfSBcbn0gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartupCardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-startup-cards',
                templateUrl: './startup-cards.component.html',
                styleUrls: ['./startup-cards.component.less']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { usefulSwiper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['usefulSwiper', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/version/version.component.ts":
/*!**********************************************!*\
  !*** ./src/app/version/version.component.ts ***!
  \**********************************************/
/*! exports provided: VersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionComponent", function() { return VersionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VersionComponent {
    constructor() { }
    ngOnInit() {
    }
}
VersionComponent.ɵfac = function VersionComponent_Factory(t) { return new (t || VersionComponent)(); };
VersionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VersionComponent, selectors: [["app-version"]], decls: 1, vars: 0, template: function VersionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "1.0.2");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcnNpb24vdmVyc2lvbi5jb21wb25lbnQubGVzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VersionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-version',
                templateUrl: './version.component.html',
                styleUrls: ['./version.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wrapper/wrapper.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wrapper/wrapper.component.ts ***!
  \**********************************************/
/*! exports provided: WrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperComponent", function() { return WrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function WrapperComponent_iframe_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
class WrapperComponent {
    constructor(sanitizer, activatedRoute) {
        this.sanitizer = sanitizer;
        this.activatedRoute = activatedRoute;
        this.src = null;
        activatedRoute.data.subscribe((data) => {
            if (data.url) {
                this.src = this.sanitizer.bypassSecurityTrustResourceUrl(data.url);
            }
        });
    }
    ngOnInit() {
    }
}
WrapperComponent.ɵfac = function WrapperComponent_Factory(t) { return new (t || WrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
WrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WrapperComponent, selectors: [["app-wrapper"]], decls: 1, vars: 1, consts: [["frameborder", "0", "allowfullscreen", "true", "mozallowfullscreen", "true", "allow", "autoplay; fullscreen", "webkitallowfullscreen", "true", 3, "src", 4, "ngIf"], ["frameborder", "0", "allowfullscreen", "true", "mozallowfullscreen", "true", "allow", "autoplay; fullscreen", "webkitallowfullscreen", "true", 3, "src"]], template: function WrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WrapperComponent_iframe_0_Template, 1, 1, "iframe", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.src);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGFtL0NvZGUveDEwZWQvd2Vic2l0ZS9zcmMvYXBwL3dyYXBwZXIvd3JhcHBlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvd3JhcHBlci93cmFwcGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEUEE7RUFTUSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC93cmFwcGVyL3dyYXBwZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaWZyYW1lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTsgICBcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxufSIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCBpZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wrapper',
                templateUrl: './wrapper.component.html',
                styleUrls: ['./wrapper.component.less']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adam/Code/x10ed/website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map