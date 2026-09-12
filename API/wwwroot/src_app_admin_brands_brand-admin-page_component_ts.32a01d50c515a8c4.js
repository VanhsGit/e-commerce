"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_brands_brand-admin-page_component_ts"],{

/***/ 6193
/*!************************************************************!*\
  !*** ./src/app/admin/brands/brand-admin-page.component.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandAdminPageComponent: () => (/* binding */ BrandAdminPageComponent)
/* harmony export */ });
/* harmony import */ var _resources_admin_entity_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/admin-entity-page.component */ 8878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);


class BrandAdminPageComponent {
  constructor() {
    this.config = {
      title: 'Thương hiệu',
      endpoint: 'brands',
      entityType: 'Brand',
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
    this.ɵfac = function BrandAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrandAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BrandAdminPageComponent,
      selectors: [["app-brand-admin-page"]],
      decls: 1,
      vars: 1,
      consts: [[3, "config"]],
      template: function BrandAdminPageComponent_Template(rf, ctx) {
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
//# sourceMappingURL=src_app_admin_brands_brand-admin-page_component_ts.32a01d50c515a8c4.js.map