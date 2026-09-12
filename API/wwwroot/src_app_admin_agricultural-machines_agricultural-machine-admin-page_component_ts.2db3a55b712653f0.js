"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_agricultural-machines_agricultural-machine-admin-page_component_ts"],{

/***/ 7651
/*!******************************************************************************************!*\
  !*** ./src/app/admin/agricultural-machines/agricultural-machine-admin-page.component.ts ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgriculturalMachineAdminPageComponent: () => (/* binding */ AgriculturalMachineAdminPageComponent)
/* harmony export */ });
/* harmony import */ var _resources_admin_entity_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/admin-entity-page.component */ 8878);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);


class AgriculturalMachineAdminPageComponent {
  constructor() {
    this.config = {
      title: 'Máy nông nghiệp',
      endpoint: 'agriculturalMachineProducts',
      entityType: 'AgriculturalMachineProduct',
      fields: [{
        name: 'name',
        label: 'Tên',
        type: 'text',
        required: true
      }, {
        name: 'brand',
        label: 'Nhãn hiển thị',
        type: 'text',
        required: true
      }, {
        name: 'model',
        label: 'Model',
        type: 'text',
        required: true
      }, {
        name: 'category',
        label: 'Loại',
        type: 'select',
        defaultValue: 1,
        options: [{
          label: 'Máy',
          value: 1
        }, {
          label: 'Phụ tùng',
          value: 2
        }]
      }, {
        name: 'description',
        label: 'Mô tả',
        type: 'textarea',
        required: true
      }, {
        name: 'price',
        label: 'Giá',
        type: 'number',
        defaultValue: 0
      }, {
        name: 'stockQuantity',
        label: 'Tồn kho',
        type: 'number',
        defaultValue: 0
      }, {
        name: 'pictureUrl',
        label: 'Ảnh URL cũ',
        type: 'text'
      }, {
        name: 'engineType',
        label: 'Động cơ',
        type: 'text'
      }, {
        name: 'power',
        label: 'Công suất',
        type: 'text'
      }, {
        name: 'fuelType',
        label: 'Nhiên liệu',
        type: 'text'
      }, {
        name: 'capacity',
        label: 'Công suất chứa',
        type: 'text'
      }, {
        name: 'compatibility',
        label: 'Tương thích',
        type: 'text'
      }, {
        name: 'companyId',
        label: 'Company ID',
        type: 'number',
        required: true
      }, {
        name: 'brandId',
        label: 'Brand ID',
        type: 'number',
        required: true
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
    this.ɵfac = function AgriculturalMachineAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgriculturalMachineAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgriculturalMachineAdminPageComponent,
      selectors: [["app-agricultural-machine-admin-page"]],
      decls: 1,
      vars: 1,
      consts: [[3, "config"]],
      template: function AgriculturalMachineAdminPageComponent_Template(rf, ctx) {
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
//# sourceMappingURL=src_app_admin_agricultural-machines_agricultural-machine-admin-page_component_ts.2db3a55b712653f0.js.map