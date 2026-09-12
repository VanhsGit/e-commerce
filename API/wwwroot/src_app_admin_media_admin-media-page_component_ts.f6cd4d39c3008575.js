"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_media_admin-media-page_component_ts"],{

/***/ 1250
/*!***********************************************************!*\
  !*** ./src/app/admin/media/admin-media-page.component.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMediaPageComponent: () => (/* binding */ AdminMediaPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/entity-image-manager/entity-image-manager.component */ 6112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);










function AdminMediaPageComponent_nz_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 8);
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLabel", type_r1)("nzValue", type_r1);
  }
}
function AdminMediaPageComponent_app_entity_image_manager_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-entity-image-manager", 9);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("entityType", ctx_r1.entityType)("entityId", ctx_r1.entityId);
  }
}
class AdminMediaPageComponent {
  constructor() {
    this.entityType = 'Product';
    this.entityId = '';
    this.entityTypes = ['Company', 'Brand', 'ElectricBikeProduct', 'AgriculturalMachineProduct', 'Product', 'ProductBrand', 'ProductType', 'Order', 'DeliveryMethod', 'User'];
  }
  static {
    this.ɵfac = function AdminMediaPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMediaPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AdminMediaPageComponent,
      selectors: [["app-admin-media-page"]],
      decls: 11,
      vars: 4,
      consts: [[1, "space-y-5"], [1, "text-xs", "font-bold", "uppercase", "tracking-[.2em]", "text-sky-600"], [1, "text-3xl", "font-black"], [1, "grid", "gap-3", "rounded-xl", "bg-white", "p-5", "shadow-sm", "md:grid-cols-2"], [3, "ngModelChange", "ngModel"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-input", "", "placeholder", "Entity ID", 3, "ngModelChange", "ngModel"], [3, "entityType", "entityId", 4, "ngIf"], [3, "nzLabel", "nzValue"], [3, "entityType", "entityId"]],
      template: function AdminMediaPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div")(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Media");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Th\u01B0 vi\u1EC7n \u1EA3nh entity");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3)(7, "nz-select", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminMediaPageComponent_Template_nz_select_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.entityType, $event) || (ctx.entityType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AdminMediaPageComponent_nz_option_8_Template, 1, 2, "nz-option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function AdminMediaPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.entityId, $event) || (ctx.entityId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AdminMediaPageComponent_app_entity_image_manager_10_Template, 1, 2, "app-entity-image-manager", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.entityType);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.entityTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.entityId);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.entityId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_2__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectComponent, _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_4__.EntityImageManagerComponent],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_media_admin-media-page_component_ts.f6cd4d39c3008575.js.map