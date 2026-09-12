"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_companies_company-admin-page_component_ts"],{

/***/ 3178
/*!*****************************************************************!*\
  !*** ./src/app/admin/companies/company-admin-page.component.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyAdminPageComponent: () => (/* binding */ CompanyAdminPageComponent)
/* harmony export */ });
/* harmony import */ var _resources_admin_entity_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/admin-entity-page.component */ 8878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);


class CompanyAdminPageComponent {
  constructor() {
    this.config = {
      title: 'Công ty',
      endpoint: 'companies',
      entityType: 'Company',
      fields: [{
        name: 'name',
        label: 'Tên',
        type: 'text',
        required: true
      }, {
        name: 'description',
        label: 'Mô tả',
        type: 'textarea'
      }, {
        name: 'logoUrl',
        label: 'Logo URL cũ',
        type: 'text'
      }, {
        name: 'address',
        label: 'Địa chỉ',
        type: 'text'
      }, {
        name: 'phoneNumber',
        label: 'Điện thoại',
        type: 'text'
      }, {
        name: 'email',
        label: 'Email',
        type: 'text'
      }, {
        name: 'website',
        label: 'Website',
        type: 'text'
      }, {
        name: 'metadata',
        label: 'Metadata',
        type: 'metadata',
        defaultValue: {}
      }, {
        name: 'isUsed',
        label: 'Đang sử dụng',
        type: 'boolean',
        defaultValue: true
      }]
    };
  }
  static {
    this.ɵfac = function CompanyAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompanyAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompanyAdminPageComponent,
      selectors: [["app-company-admin-page"]],
      decls: 1,
      vars: 1,
      consts: [[3, "config"]],
      template: function CompanyAdminPageComponent_Template(rf, ctx) {
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
//# sourceMappingURL=src_app_admin_companies_company-admin-page_component_ts.46167582f7d1966a.js.map