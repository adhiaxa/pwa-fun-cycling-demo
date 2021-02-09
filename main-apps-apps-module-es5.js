(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-apps-apps-module"], {
    /***/
    "JDND":
    /*!******************************************!*\
      !*** ./src/app/main/apps/apps.module.ts ***!
      \******************************************/

    /*! exports provided: AppsModule */

    /***/
    function JDND(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppsModule", function () {
        return AppsModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fuse/shared.module */
      "5HBU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'dashboards/analytics',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboards-analytics-analytics-module */
          [__webpack_require__.e("default~components-third-party-components-third-party-module~dashboards-analytics-analytics-module~d~c2620678"), __webpack_require__.e("default~dashboards-analytics-analytics-module~dashboards-project-project-module~e-commerce-e-commerc~08105aa6"), __webpack_require__.e("dashboards-analytics-analytics-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboards/analytics/analytics.module */
          "e4Tn")).then(function (m) {
            return m.AnalyticsDashboardModule;
          });
        }
      }, {
        path: 'dashboards/project',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | dashboards-project-project-module */
          [__webpack_require__.e("default~contacts-contacts-module~dashboards-project-project-module~e-commerce-e-commerce-module~file~d6638ca9"), __webpack_require__.e("default~components-third-party-components-third-party-module~dashboards-analytics-analytics-module~d~c2620678"), __webpack_require__.e("default~dashboards-analytics-analytics-module~dashboards-project-project-module~e-commerce-e-commerc~08105aa6"), __webpack_require__.e("default~dashboards-project-project-module~main-ui-ui-module"), __webpack_require__.e("dashboards-project-project-module")]).then(__webpack_require__.bind(null,
          /*! ./dashboards/project/project.module */
          "C9rh")).then(function (m) {
            return m.ProjectDashboardModule;
          });
        }
      }, {
        path: 'mail',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mail-mail-module */
          "mail-mail-module").then(__webpack_require__.bind(null,
          /*! ./mail/mail.module */
          "NJB7")).then(function (m) {
            return m.MailModule;
          });
        }
      }, {
        path: 'mail-ngrx',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mail-ngrx-mail-module */
          "mail-ngrx-mail-module").then(__webpack_require__.bind(null,
          /*! ./mail-ngrx/mail.module */
          "Q7lZ")).then(function (m) {
            return m.MailNgrxModule;
          });
        }
      }, {
        path: 'chat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | chat-chat-module */
          "chat-chat-module").then(__webpack_require__.bind(null,
          /*! ./chat/chat.module */
          "nImp")).then(function (m) {
            return m.ChatModule;
          });
        }
      }, {
        path: 'calendar',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | calendar-calendar-module */
          [__webpack_require__.e("default~calendar-calendar-module~contacts-contacts-module~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("calendar-calendar-module")]).then(__webpack_require__.bind(null,
          /*! ./calendar/calendar.module */
          "LA4P")).then(function (m) {
            return m.CalendarModule;
          });
        }
      }, {
        path: 'e-commerce',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | e-commerce-e-commerce-module */
          [__webpack_require__.e("default~contacts-contacts-module~dashboards-project-project-module~e-commerce-e-commerce-module~file~d6638ca9"), __webpack_require__.e("default~components-third-party-components-third-party-module~dashboards-analytics-analytics-module~d~c2620678"), __webpack_require__.e("default~dashboards-analytics-analytics-module~dashboards-project-project-module~e-commerce-e-commerc~08105aa6"), __webpack_require__.e("default~e-commerce-e-commerce-module~scrumboard-scrumboard-module"), __webpack_require__.e("default~e-commerce-e-commerce-module~main-pages-pages-module"), __webpack_require__.e("e-commerce-e-commerce-module")]).then(__webpack_require__.bind(null,
          /*! ./e-commerce/e-commerce.module */
          "scZl")).then(function (m) {
            return m.EcommerceModule;
          });
        }
      }, {
        path: 'academy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | academy-academy-module */
          "academy-academy-module").then(__webpack_require__.bind(null,
          /*! ./academy/academy.module */
          "9aYX")).then(function (m) {
            return m.AcademyModule;
          });
        }
      }, {
        path: 'todo',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | todo-todo-module */
          [__webpack_require__.e("default~calendar-calendar-module~contacts-contacts-module~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("default~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("todo-todo-module")]).then(__webpack_require__.bind(null,
          /*! ./todo/todo.module */
          "g5za")).then(function (m) {
            return m.TodoModule;
          });
        }
      }, {
        path: 'file-manager',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | file-manager-file-manager-module */
          [__webpack_require__.e("default~contacts-contacts-module~dashboards-project-project-module~e-commerce-e-commerce-module~file~d6638ca9"), __webpack_require__.e("file-manager-file-manager-module")]).then(__webpack_require__.bind(null,
          /*! ./file-manager/file-manager.module */
          "ZRnV")).then(function (m) {
            return m.FileManagerModule;
          });
        }
      }, {
        path: 'contacts',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | contacts-contacts-module */
          [__webpack_require__.e("default~contacts-contacts-module~dashboards-project-project-module~e-commerce-e-commerce-module~file~d6638ca9"), __webpack_require__.e("default~calendar-calendar-module~contacts-contacts-module~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("contacts-contacts-module")]).then(__webpack_require__.bind(null,
          /*! ./contacts/contacts.module */
          "NulH")).then(function (m) {
            return m.ContactsModule;
          });
        }
      }, {
        path: 'scrumboard',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | scrumboard-scrumboard-module */
          [__webpack_require__.e("default~calendar-calendar-module~contacts-contacts-module~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("default~scrumboard-scrumboard-module~todo-todo-module"), __webpack_require__.e("default~e-commerce-e-commerce-module~scrumboard-scrumboard-module"), __webpack_require__.e("scrumboard-scrumboard-module")]).then(__webpack_require__.bind(null,
          /*! ./scrumboard/scrumboard.module */
          "igdQ")).then(function (m) {
            return m.ScrumboardModule;
          });
        }
      }];

      var AppsModule = function AppsModule() {
        _classCallCheck(this, AppsModule);
      };

      AppsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppsModule
      });
      AppsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppsModule_Factory(t) {
          return new (t || AppsModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _fuse_shared_module__WEBPACK_IMPORTED_MODULE_1__["FuseSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppsModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _fuse_shared_module__WEBPACK_IMPORTED_MODULE_1__["FuseSharedModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=main-apps-apps-module-es5.js.map