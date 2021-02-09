(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-apps-apps-module"],{

/***/ "JDND":
/*!******************************************!*\
  !*** ./src/app/main/apps/apps.module.ts ***!
  \******************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/shared.module */ "5HBU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: () => Promise.all(/*! import() | dashboards-analytics-analytics-module */[__webpack_require__.e("default~components-third-party-components-third-party-module~dashboards-analytics-analytics-module~d~c2620678"), __webpack_require__.e("default~dashboards-analytics-analytics-module~dashboards-project-project-module~e-commerce-e-commerc~08105aa6"), __webpack_require__.e("dashboards-analytics-analytics-module")]).then(__webpack_require__.bind(null, /*! ./dashboards/analytics/analytics.module */ "e4Tn")).then(m => m.AnalyticsDashboardModule)
    },
    {
        path: 'dashboards/project',
        loadChildren: () => Promise.all(/*! import() | dashboards-project-project-module */[__webpack_require__.e("default~contacts-contacts-module~dashboards-project-project-module~e-commerce-e-commerce-module~file~d6638ca9"), __webpack_require__.e("default~components-third-party-components-third-party-module~dashboards-analytics-analytics-module~d~c2620678"), __webpack_require__.e("default~dashboards-analytics-analytics-module~dashboards-project-project-module~e-commerce-e-commerc~08105aa6"), __webpack_require__.e("default~dashboards-project-project-module~main-ui-ui-module"), __webpack_require__.e("dashboards-project-project-module")]).then(__webpack_require__.bind(null, /*! ./dashboards/project/project.module */ "C9rh")).then(m => m.ProjectDashboardModule)
    },
    {
        path: 'mail',
        loadChildren: () => __webpack_require__.e(/*! import() | mail-mail-module */ "mail-mail-module").then(__webpack_require__.bind(null, /*! ./mail/mail.module */ "NJB7")).then(m => m.MailModule)
    },
    {
        path: 'mail-ngrx',
        loadChildren: () => __webpack_require__.e(/*! import() | mail-ngrx-mail-module */ "mail-ngrx-mail-module").then(__webpack_require__.bind(null, /*! ./mail-ngrx/mail.module */ "Q7lZ")).then(m => m.MailNgrxModule)
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() | chat-chat-module */ "chat-chat-module").then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "nImp")).then(m => m.ChatModule)
    },
    {
        path: 'calendar',
        loadChildren: () => Promise.all(/*! import() | calendar-calendar-module */[__webpack_require__.e("default~calendar-calendar-module~contacts-contacts-module~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("calendar-calendar-module")]).then(__webpack_require__.bind(null, /*! ./calendar/calendar.module */ "LA4P")).then(m => m.CalendarModule)
    },
    {
        path: 'e-commerce',
        loadChildren: () => Promise.all(/*! import() | e-commerce-e-commerce-module */[__webpack_require__.e("default~contacts-contacts-module~dashboards-project-project-module~e-commerce-e-commerce-module~file~d6638ca9"), __webpack_require__.e("default~components-third-party-components-third-party-module~dashboards-analytics-analytics-module~d~c2620678"), __webpack_require__.e("default~dashboards-analytics-analytics-module~dashboards-project-project-module~e-commerce-e-commerc~08105aa6"), __webpack_require__.e("default~e-commerce-e-commerce-module~scrumboard-scrumboard-module"), __webpack_require__.e("default~e-commerce-e-commerce-module~main-pages-pages-module"), __webpack_require__.e("e-commerce-e-commerce-module")]).then(__webpack_require__.bind(null, /*! ./e-commerce/e-commerce.module */ "scZl")).then(m => m.EcommerceModule)
    },
    {
        path: 'academy',
        loadChildren: () => __webpack_require__.e(/*! import() | academy-academy-module */ "academy-academy-module").then(__webpack_require__.bind(null, /*! ./academy/academy.module */ "9aYX")).then(m => m.AcademyModule)
    },
    {
        path: 'todo',
        loadChildren: () => Promise.all(/*! import() | todo-todo-module */[__webpack_require__.e("default~calendar-calendar-module~contacts-contacts-module~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("default~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("todo-todo-module")]).then(__webpack_require__.bind(null, /*! ./todo/todo.module */ "g5za")).then(m => m.TodoModule)
    },
    {
        path: 'file-manager',
        loadChildren: () => Promise.all(/*! import() | file-manager-file-manager-module */[__webpack_require__.e("default~contacts-contacts-module~dashboards-project-project-module~e-commerce-e-commerce-module~file~d6638ca9"), __webpack_require__.e("file-manager-file-manager-module")]).then(__webpack_require__.bind(null, /*! ./file-manager/file-manager.module */ "ZRnV")).then(m => m.FileManagerModule)
    },
    {
        path: 'contacts',
        loadChildren: () => Promise.all(/*! import() | contacts-contacts-module */[__webpack_require__.e("default~contacts-contacts-module~dashboards-project-project-module~e-commerce-e-commerce-module~file~d6638ca9"), __webpack_require__.e("default~calendar-calendar-module~contacts-contacts-module~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("contacts-contacts-module")]).then(__webpack_require__.bind(null, /*! ./contacts/contacts.module */ "NulH")).then(m => m.ContactsModule)
    },
    {
        path: 'scrumboard',
        loadChildren: () => Promise.all(/*! import() | scrumboard-scrumboard-module */[__webpack_require__.e("default~calendar-calendar-module~contacts-contacts-module~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("default~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("default~e-commerce-e-commerce-module~scrumboard-scrumboard-module"), __webpack_require__.e("scrumboard-scrumboard-module")]).then(__webpack_require__.bind(null, /*! ./scrumboard/scrumboard.module */ "igdQ")).then(m => m.ScrumboardModule)
    }
];
class AppsModule {
}
AppsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppsModule });
AppsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppsModule_Factory(t) { return new (t || AppsModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
            _fuse_shared_module__WEBPACK_IMPORTED_MODULE_1__["FuseSharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppsModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_1__["FuseSharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=main-apps-apps-module-es2015.js.map