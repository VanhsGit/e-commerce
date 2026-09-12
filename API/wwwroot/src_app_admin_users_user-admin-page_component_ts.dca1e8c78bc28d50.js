"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_users_user-admin-page_component_ts"],{

/***/ 7511
/*!**********************************************************!*\
  !*** ./src/app/admin/users/user-admin-page.component.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAdminPageComponent: () => (/* binding */ UserAdminPageComponent)
/* harmony export */ });
/* harmony import */ var _resources_admin_entity_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/admin-entity-page.component */ 8878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);


class UserAdminPageComponent {
  constructor() {
    this.config = {
      title: 'Người dùng',
      endpoint: 'admin/users',
      entityType: 'User',
      fields: [{
        name: 'email',
        label: 'Email',
        type: 'text',
        required: true
      }, {
        name: 'displayName',
        label: 'Tên hiển thị',
        type: 'text'
      }, {
        name: 'isUsed',
        label: 'Đang sử dụng',
        type: 'boolean',
        defaultValue: true
      }]
    };
  }
  static {
    this.ɵfac = function UserAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UserAdminPageComponent,
      selectors: [["app-user-admin-page"]],
      decls: 1,
      vars: 1,
      consts: [[3, "config"]],
      template: function UserAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-admin-entity-page", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.config);
        }
      },
      dependencies: [_resources_admin_entity_page_component__WEBPACK_IMPORTED_MODULE_0__.AdminEntityPageComponent],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_users_user-admin-page_component_ts.dca1e8c78bc28d50.js.map