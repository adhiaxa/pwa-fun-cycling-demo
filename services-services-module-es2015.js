(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "03/Y":
/*!************************************************************************************************!*\
  !*** ./src/app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FuseSplashScreenServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseSplashScreenServiceDocsComponent", function() { return FuseSplashScreenServiceDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fuse_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/highlight/highlight.component */ "mTle");




class FuseSplashScreenServiceDocsComponent {
    /**
     * Constructor
     */
    constructor() {
    }
}
FuseSplashScreenServiceDocsComponent.ɵfac = function FuseSplashScreenServiceDocsComponent_Factory(t) { return new (t || FuseSplashScreenServiceDocsComponent)(); };
FuseSplashScreenServiceDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FuseSplashScreenServiceDocsComponent, selectors: [["fuse-splash-screen-service-docs"]], decls: 28, vars: 0, consts: [["id", "splash-screen", 1, "page-layout", "simple", "fullwidth", "docs"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header", "accent", "p-24", "h-160"], ["fxLayout", "column", "fxLayoutAlign", "center start"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "secondary-text", "s-18"], [1, "secondary-text", "s-16"], [1, "secondary-text"], [1, "h2", "mt-16"], [1, "content", "p-24"], [1, "section-title"], [1, "py-8"], ["lang", "typescript"], ["source", ""]], template: function FuseSplashScreenServiceDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fuse Splash Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Splash screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " is a custom Fuse service that allows to have a control on the splash screen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "fuse-highlight", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "textarea", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n                    export class SomeComponent implements OnInit\n                    {\n                        constructor(\n                            private _fuseSplashScreenService: FuseSplashScreenService\n                        ) {}\n\n                        ngOnInit()\n                        {\n                            this._fuseSplashScreenService.show();\n\n                            setTimeout(() => {\n                                this._fuseSplashScreenService.hide();\n                            }, 3000);\n                        }\n                    }\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _fuse_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_3__["FuseHighlightComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdXNlLXNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "m4g1":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/services/fuse-config/fuse-config.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FuseConfigServiceDocsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseConfigServiceDocsComponent", function() { return FuseConfigServiceDocsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fuse_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/highlight/highlight.component */ "mTle");




class FuseConfigServiceDocsComponent {
    /**
     * Constructor
     */
    constructor() {
    }
}
FuseConfigServiceDocsComponent.ɵfac = function FuseConfigServiceDocsComponent_Factory(t) { return new (t || FuseConfigServiceDocsComponent)(); };
FuseConfigServiceDocsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FuseConfigServiceDocsComponent, selectors: [["fuse-config-service-docs"]], decls: 28, vars: 0, consts: [["id", "fuse-config", 1, "page-layout", "simple", "fullwidth", "docs"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "header", "accent", "p-24", "h-160"], ["fxLayout", "column", "fxLayoutAlign", "center start"], ["fxLayout", "row", "fxLayoutAlign", "start center"], [1, "secondary-text", "s-18"], [1, "secondary-text", "s-16"], [1, "secondary-text"], [1, "h2", "mt-16"], [1, "content", "p-24"], [1, "section-title"], [1, "py-8"], ["lang", "typescript"], ["source", ""]], template: function FuseConfigServiceDocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "chevron_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fuse Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Config");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " is a custom built Fuse service allows to have a granular control over the Fuse. It can be used for changing theme options (layout, color etc.) by component basis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "fuse-highlight", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "textarea", null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n                    export class SomeComponent\n                    {\n                        config: any;\n\n                        constructor(\n                            private _fuseConfigService: FuseConfigService\n                        )\n                        {\n                            // Fully customizable surroundings for this particular component\n                            this._fuseConfigService.config = {\n                                colorTheme      : 'theme-default-dark',\n                                layout          : {\n                                    style    : 'vertical-layout-1',\n                                    width    : 'fullwidth',\n                                    navbar   : {\n                                        primaryBackground  : 'fuse-navy-700',\n                                        secondaryBackground: 'fuse-navy-900',\n                                        folded             : false,\n                                        hidden             : false,\n                                        position           : 'left',\n                                        variant            : 'vertical-style-1'\n                                    },\n                                    toolbar  : {\n                                        customBackgroundColor: false,\n                                        background           : 'fuse-white-500',\n                                        hidden               : false,\n                                        position             : 'below-static'\n                                    },\n                                    footer   : {\n                                        customBackgroundColor: true,\n                                        background           : 'fuse-navy-900',\n                                        hidden               : false,\n                                        position             : 'below-fixed'\n                                    },\n                                    sidepanel: {\n                                        hidden  : false,\n                                        position: 'right'\n                                    }\n                                },\n                                customScrollbars: true\n                            });\n                        }\n\n                        onInit()\n                        {\n                            // Subscribe to config change\n                            this._fuseConfigService.config\n                                .subscribe((config) => {\n                                    this.config = config;\n                                });\n                        }\n                    }\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _fuse_components_highlight_highlight_component__WEBPACK_IMPORTED_MODULE_3__["FuseHighlightComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdXNlLWNvbmZpZy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "p/AZ":
/*!****************************************************************!*\
  !*** ./src/app/main/documentation/services/services.module.ts ***!
  \****************************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");
/* harmony import */ var _fuse_components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/index */ "LPQX");
/* harmony import */ var app_main_documentation_services_fuse_config_fuse_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/documentation/services/fuse-config/fuse-config.component */ "m4g1");
/* harmony import */ var app_main_documentation_services_fuse_splash_screen_fuse_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/documentation/services/fuse-splash-screen/fuse-splash-screen.component */ "03/Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: 'fuse-config',
        component: app_main_documentation_services_fuse_config_fuse_config_component__WEBPACK_IMPORTED_MODULE_4__["FuseConfigServiceDocsComponent"]
    },
    {
        path: 'fuse-splash-screen',
        component: app_main_documentation_services_fuse_splash_screen_fuse_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__["FuseSplashScreenServiceDocsComponent"]
    }
];
class ServicesModule {
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"],
            _fuse_components_index__WEBPACK_IMPORTED_MODULE_3__["FuseHighlightModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ServicesModule, { declarations: [app_main_documentation_services_fuse_config_fuse_config_component__WEBPACK_IMPORTED_MODULE_4__["FuseConfigServiceDocsComponent"],
        app_main_documentation_services_fuse_splash_screen_fuse_splash_screen_component__WEBPACK_IMPORTED_MODULE_5__["FuseSplashScreenServiceDocsComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
        _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"],
        _fuse_components_index__WEBPACK_IMPORTED_MODULE_3__["FuseHighlightModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=services-services-module-es2015.js.map