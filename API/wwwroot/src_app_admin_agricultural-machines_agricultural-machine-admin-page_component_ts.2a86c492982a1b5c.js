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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ 8636);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1663);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ 1034);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 5346);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/switch */ 8792);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 9655);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 5853);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/space */ 3378);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/divider */ 3987);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/empty */ 2643);
/* harmony import */ var _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/models/agriculturalMachineProduct */ 9706);
/* harmony import */ var _services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/agricultural-machine.service */ 3473);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services/company.service */ 17);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/brand.service */ 899);
/* harmony import */ var _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../shared/metadata-editor/metadata-editor.component */ 4264);
/* harmony import */ var _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/entity-image-manager/entity-image-manager.component */ 6112);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);

















































const _c0 = () => ({
  x: "1500px"
});
function AgriculturalMachineAdminPageComponent_nz_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", c_r2.id)("nzLabel", c_r2.name);
  }
}
function AgriculturalMachineAdminPageComponent_nz_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "nz-option", 36);
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", b_r3.id)("nzLabel", b_r3.name);
  }
}
function AgriculturalMachineAdminPageComponent_tr_57_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_tr_57_button_46_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleActive(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
  }
}
function AgriculturalMachineAdminPageComponent_tr_57_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_tr_57_button_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleActive(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
  }
}
function AgriculturalMachineAdminPageComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](4, "td")(5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](11, "td")(12, "nz-tag", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](13, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](15, "td")(16, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](19, " Model: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](20, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](22, "td")(23, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](25, "td")(26, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](27, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](30, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](32, "td")(33, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](35, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](36, "td")(37, "nz-tag", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](39, "td")(40, "nz-tag", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](42, "td")(43, "div", 52)(44, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_tr_57_Template_button_click_44_listener() {
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.open(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](45, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](46, AgriculturalMachineAdminPageComponent_tr_57_button_46_Template, 2, 0, "button", 55)(47, AgriculturalMachineAdminPageComponent_tr_57_button_47_Template, 2, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](48, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("nzOnConfirm", function AgriculturalMachineAdminPageComponent_tr_57_Template_button_nzOnConfirm_48_listener() {
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.remove(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](49, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵclassProp"]("opacity-60", p_r5.isUsed === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinterpolate"](p_r5.name))("src", p_r5.pictureUrl || "assets/images/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](p_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", p_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ID: #", p_r5.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzColor", ctx_r5.categoryColor(p_r5.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", p_r5.category === 1 ? "fa-tractor" : "fa-cogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", p_r5.categoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](p_r5.brandName);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](p_r5.model || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](p_r5.companyName || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"]("", p_r5.engineType || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"]("", p_r5.fuelType || "Ch\u01B0a c\u1EADp nh\u1EADt", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](35, 23, p_r5.price), "\u20AB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzColor", ctx_r5.stockBadgeColor(p_r5.stockQuantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", p_r5.stockQuantity <= 0 ? "H\u1EBFt h\u00E0ng" : p_r5.stockQuantity + " SP", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzColor", p_r5.isUsed === false ? "default" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", p_r5.isUsed === false ? "Ng\u1EEBng b\u00E1n" : "\u0110ang b\u00E1n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", p_r5.isUsed !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", p_r5.isUsed === false);
  }
}
function AgriculturalMachineAdminPageComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](1, "nz-empty", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
  }
}
function AgriculturalMachineAdminPageComponent_div_60_nz_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", c_r10.id)("nzLabel", c_r10.name);
  }
}
function AgriculturalMachineAdminPageComponent_div_60_nz_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "nz-option", 36);
  }
  if (rf & 2) {
    const b_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", b_r11.id)("nzLabel", b_r11.name);
  }
}
function AgriculturalMachineAdminPageComponent_div_60_img_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "img", 106);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("src", ctx_r5.form.value.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsanitizeUrl"]);
  }
}
function AgriculturalMachineAdminPageComponent_div_60_i_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "i", 107);
  }
}
function AgriculturalMachineAdminPageComponent_div_60_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "nz-divider", 96)(2, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](3, "Th\u01B0 vi\u1EC7n \u1EA3nh s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](4, "app-entity-image-manager", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("entityId", ctx_r5.editing().id);
  }
}
function AgriculturalMachineAdminPageComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div")(1, "form", 65)(2, "div", 66)(3, "div", 67)(4, "nz-form-item")(5, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](6, "T\u00EAn s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](7, "nz-form-control", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](8, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](9, "div", 71)(10, "nz-form-item")(11, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](12, "Th\u01B0\u01A1ng hi\u1EC7u (hi\u1EC3n th\u1ECB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](13, "nz-form-control", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](14, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](15, "nz-form-item")(16, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](17, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](18, "nz-form-control", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](19, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](20, "nz-form-item")(21, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](22, "Lo\u1EA1i s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](23, "nz-form-control", 75)(24, "nz-select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](25, "nz-option", 77)(26, "nz-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](27, "nz-form-item")(28, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](29, "C\u00F4ng ty / \u0110\u1ED1i t\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](30, "nz-form-control", 79)(31, "nz-select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](32, AgriculturalMachineAdminPageComponent_div_60_nz_option_32_Template, 1, 2, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](33, "nz-form-item")(34, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](35, "Th\u01B0\u01A1ng hi\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](36, "nz-form-control", 81)(37, "nz-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](38, AgriculturalMachineAdminPageComponent_div_60_nz_option_38_Template, 1, 2, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](39, "div", 71)(40, "nz-form-item")(41, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](42, "Gi\u00E1 b\u00E1n (VND)");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](43, "nz-form-control", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](44, "nz-input-number", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](45, "nz-form-item")(46, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](47, "S\u1ED1 l\u01B0\u1EE3ng t\u1ED3n kho");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](48, "nz-form-control", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](49, "nz-input-number", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](50, "nz-form-item")(51, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](52, "\u1EA2nh s\u1EA3n ph\u1EA9m URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](53, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](54, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](55, "div", 87)(56, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](57, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](58, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](59, AgriculturalMachineAdminPageComponent_div_60_img_59_Template, 1, 1, "img", 90)(60, AgriculturalMachineAdminPageComponent_div_60_i_60_Template, 1, 0, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](61, "nz-form-item")(62, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](63, "Tr\u1EA1ng th\u00E1i b\u00E1n h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](64, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](65, "nz-switch", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](66, "nz-form-item", 93)(67, "nz-form-label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](68, "M\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](69, "nz-form-control", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](70, "textarea", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](71, "nz-divider", 96)(72, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](73, "Th\u00F4ng s\u1ED1 k\u1EF9 thu\u1EADt m\u00E1y n\u00F4ng nghi\u1EC7p");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](74, "div", 98)(75, "nz-form-item")(76, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](77, "Lo\u1EA1i \u0111\u1ED9ng c\u01A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](78, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](79, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](80, "nz-form-item")(81, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](82, "C\u00F4ng su\u1EA5t (Power)");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](83, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](84, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](85, "nz-form-item")(86, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](87, "Lo\u1EA1i nhi\u00EAn li\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](88, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](89, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](90, "nz-form-item")(91, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](92, "T\u1EA3i tr\u1ECDng / C\u00F4ng su\u1EA5t ch\u1EE9a");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](93, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](94, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](95, "nz-form-item", 93)(96, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](97, "T\u01B0\u01A1ng th\u00EDch / D\u00F9ng cho m\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](98, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](99, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](100, "nz-divider", 96)(101, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](102, "Metadata b\u1ED5 sung");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](103, "app-metadata-editor", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("valueChange", function AgriculturalMachineAdminPageComponent_div_60_Template_app_metadata_editor_valueChange_103_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.metadata.set($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](104, AgriculturalMachineAdminPageComponent_div_60_ng_container_104_Template, 5, 1, "ng-container", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx_r5.companies());
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx_r5.brands());
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzMin", 0)("nzStep", 500000);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzMin", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r5.form.value.pictureUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx_r5.form.value.pictureUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", ctx_r5.metadata());
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r5.editing());
  }
}
class AgriculturalMachineAdminPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.msg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageService);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_22__.AgriculturalMachineService);
    this.companyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_company_service__WEBPACK_IMPORTED_MODULE_23__.CompanyService);
    this.brandService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_brand_service__WEBPACK_IMPORTED_MODULE_24__.BrandService);
    this.rows = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "rows"
    }] : []));
    this.companies = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "companies"
    }] : []));
    this.brands = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "brands"
    }] : []));
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "loading"
    }] : []));
    this.modalOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "modalOpen"
    }] : []));
    this.saving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "saving"
    }] : []));
    this.editing = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "editing"
    }] : []));
    this.metadata = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)({}, ...(ngDevMode ? [{
      debugName: "metadata"
    }] : []));
    this.search = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('', ...(ngDevMode ? [{
      debugName: "search"
    }] : []));
    this.companyFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "companyFilter"
    }] : []));
    this.brandFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "brandFilter"
    }] : []));
    this.categoryFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "categoryFilter"
    }] : []));
    this.statusFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "statusFilter"
    }] : []));
    this.searchDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('', ...(ngDevMode ? [{
      debugName: "searchDraft"
    }] : []));
    this.companyDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "companyDraft"
    }] : []));
    this.brandDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "brandDraft"
    }] : []));
    this.categoryDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "categoryDraft"
    }] : []));
    this.statusDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "statusDraft"
    }] : []));
    this.form = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      model: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      category: [_shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_21__.AgriculturalMachineCategory.MachineModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      stockQuantity: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      pictureUrl: [''],
      engineType: [''],
      power: [''],
      fuelType: [''],
      capacity: [''],
      compatibility: [''],
      companyId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      brandId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      isUsed: [true]
    });
  }
  applyFilters() {
    this.search.set(this.searchDraft().trim());
    this.companyFilter.set(this.companyDraft() ?? null);
    this.brandFilter.set(this.brandDraft() ?? null);
    this.categoryFilter.set(this.categoryDraft() ?? null);
    this.statusFilter.set(this.statusDraft() ?? null);
    const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
    this.loadAll({
      search: this.search(),
      companyId: this.companyFilter(),
      brandId: this.brandFilter(),
      category: this.categoryFilter(),
      isUsed: isUsedParam
    });
  }
  ngOnInit() {
    this.loadAll();
  }
  filteredRows() {
    return this.rows();
  }
  stockBadgeColor(n) {
    if (n <= 0) return 'red';
    if (n < 10) return 'orange';
    return 'green';
  }
  categoryColor(cat) {
    return cat === _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_21__.AgriculturalMachineCategory.MachineModel ? 'gold' : 'purple';
  }
  loadAll(params) {
    this.loading.set(true);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
      rows: this.service.getAll(params),
      companies: this.companyService.getCompanies(),
      brands: this.brandService.getBrands()
    }).subscribe({
      next: res => {
        this.rows.set(res.rows);
        this.companies.set(res.companies);
        this.brands.set(res.brands);
      },
      error: () => this.msg.error('Không tải được dữ liệu máy nông nghiệp'),
      complete: () => this.loading.set(false)
    });
  }
  open(record) {
    this.editing.set(record ?? null);
    this.metadata.set({
      ...(record?.metadata ?? {})
    });
    this.form.reset({
      name: record?.name ?? '',
      brand: record?.brand ?? '',
      model: record?.model ?? '',
      category: record?.category ?? _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_21__.AgriculturalMachineCategory.MachineModel,
      description: record?.description ?? '',
      price: record?.price ?? 0,
      stockQuantity: record?.stockQuantity ?? 0,
      pictureUrl: record?.pictureUrl ?? '',
      engineType: record?.engineType ?? '',
      power: record?.power ?? '',
      fuelType: record?.fuelType ?? '',
      capacity: record?.capacity ?? '',
      compatibility: record?.compatibility ?? '',
      companyId: record?.companyId ?? null,
      brandId: record?.brandId ?? null,
      isUsed: record?.isUsed !== false
    });
    this.modalOpen.set(true);
  }
  close() {
    this.modalOpen.set(false);
    this.editing.set(null);
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const raw = this.form.getRawValue();
    const data = {
      name: raw.name,
      brand: raw.brand,
      model: raw.model,
      category: raw.category,
      description: raw.description,
      price: Number(raw.price),
      stockQuantity: Number(raw.stockQuantity),
      pictureUrl: raw.pictureUrl ?? '',
      engineType: raw.engineType || null,
      power: raw.power || null,
      fuelType: raw.fuelType || null,
      capacity: raw.capacity || null,
      compatibility: raw.compatibility || null,
      companyId: String(raw.companyId),
      brandId: String(raw.brandId),
      metadata: this.metadata(),
      isUsed: raw.isUsed
    };
    this.saving.set(true);
    const req$ = this.editing() ? this.service.update(this.editing().id, {
      id: this.editing().id,
      ...data
    }) : this.service.create(data);
    req$.subscribe({
      next: () => {
        this.msg.success(this.editing() ? 'Đã cập nhật máy nông nghiệp' : 'Đã thêm máy nông nghiệp');
        this.close();
        const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
        this.loadAll({
          search: this.search(),
          companyId: this.companyFilter(),
          brandId: this.brandFilter(),
          category: this.categoryFilter(),
          isUsed: isUsedParam
        });
      },
      error: e => this.msg.error(e?.error?.message || 'Lưu thất bại'),
      complete: () => this.saving.set(false)
    });
  }
  toggleActive(record) {
    const next = !!(record.isUsed === false);
    const payload = {
      id: record.id,
      name: record.name,
      brand: record.brand,
      model: record.model,
      category: record.category,
      description: record.description,
      price: record.price,
      stockQuantity: record.stockQuantity,
      pictureUrl: record.pictureUrl,
      engineType: record.engineType,
      power: record.power,
      fuelType: record.fuelType,
      capacity: record.capacity,
      compatibility: record.compatibility,
      companyId: record.companyId,
      brandId: record.brandId,
      metadata: record.metadata,
      isUsed: next
    };
    this.service.update(record.id, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã ngừng bán');
        const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
        this.loadAll({
          search: this.search(),
          companyId: this.companyFilter(),
          brandId: this.brandFilter(),
          category: this.categoryFilter(),
          isUsed: isUsedParam
        });
      },
      error: e => this.msg.error(e?.error?.message || 'Thao tác thất bại')
    });
  }
  remove(record) {
    this.service.remove(record.id).subscribe({
      next: () => {
        this.msg.success('Đã xóa sản phẩm');
        const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
        this.loadAll({
          search: this.search(),
          companyId: this.companyFilter(),
          brandId: this.brandFilter(),
          category: this.categoryFilter(),
          isUsed: isUsedParam
        });
      },
      error: e => this.msg.error(e?.error?.message || 'Xóa thất bại')
    });
  }
  countAll() {
    return this.rows().length;
  }
  countActive() {
    return this.rows().filter(r => r.isUsed !== false).length;
  }
  countSoldOut() {
    return this.rows().filter(r => r.stockQuantity <= 0).length;
  }
  countLowStock() {
    return this.rows().filter(r => r.stockQuantity > 0 && r.stockQuantity < 10).length;
  }
  static {
    this.ɵfac = function AgriculturalMachineAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgriculturalMachineAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineComponent"]({
      type: AgriculturalMachineAdminPageComponent,
      selectors: [["app-agricultural-machine-admin-page"]],
      decls: 61,
      vars: 23,
      consts: [["table", ""], [1, "mx-auto", "max-w-[1600px]", "space-y-5"], ["nzTitle", "M\u00E1y n\u00F4ng nghi\u1EC7p", "nzSubtitle", "Qu\u1EA3n l\u00FD danh m\u1EE5c m\u00E1y n\u00F4ng nghi\u1EC7p v\u00E0 ph\u1EE5 t\u00F9ng m\u00E1y", 1, "!rounded-2xl", "!bg-white", "!shadow-sm", "!border", "!border-slate-100"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!rounded-xl", "!h-10", "!px-5", "!font-semibold", 2, "background", "linear-gradient(135deg, #f59e0b, #d97706)", "border", "none", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-2xl", "!shadow-sm"], [1, "mb-5", "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-center"], [1, "md:col-span-3"], ["nz-input", "", "nzBorderless", "", "placeholder", "T\u00ECm theo t\u00EAn, h\u00E3ng, model, c\u00F4ng ty, lo\u1EA1i \u0111\u1ED9ng c\u01A1...", "name", "agri-search", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", "!px-4", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "C\u00F4ng ty (b\u1ECF tr\u1ED1ng = t\u1EA5t c\u1EA3)", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzPlaceHolder", "Th\u01B0\u01A1ng hi\u1EC7u (b\u1ECF tr\u1ED1ng = t\u1EA5t c\u1EA3)", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "Lo\u1EA1i s\u1EA3n ph\u1EA9m (b\u1ECF tr\u1ED1ng = t\u1EA5t c\u1EA3)", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzLabel", "\uD83D\uDE9C M\u00E1y n\u00F4ng nghi\u1EC7p", 3, "nzValue"], ["nzLabel", "\uD83D\uDD27 Ph\u1EE5 t\u00F9ng m\u00E1y", 3, "nzValue"], ["nzPlaceHolder", "Tr\u1EA1ng th\u00E1i (b\u1ECF tr\u1ED1ng = t\u1EA5t c\u1EA3)", "nzSize", "large", "nzAllowClear", "", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang b\u00E1n"], ["nzValue", "inactive", "nzLabel", "\u26D4 Ng\u1EEBng b\u00E1n (IsUsed=false)"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-[44px]", "!rounded-xl", "!font-semibold", "!w-full", 3, "click"], [1, "fa", "fa-search", "mr-1"], [1, "mb-4", "flex", "flex-wrap", "gap-2"], ["nzColor", "gold", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "green", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "red", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "orange", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzSize", "middle", 3, "nzData", "nzLoading", "nzPageSize", "nzScroll"], ["nzWidth", "100px"], ["nzWidth", "140px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "110px"], ["nzWidth", "230px", 1, "text-right"], [3, "opacity-60", 4, "ngFor", "ngForOf"], ["class", "py-12", 4, "ngIf"], ["nzOkText", "L\u01B0u l\u1EA1i", "nzCancelText", "H\u1EE7y", "nzWidth", "1024px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-gradient-to-br", "from-amber-50", "to-rose-50", "ring-1", "ring-amber-100"], [1, "h-full", "w-full", "object-cover", "p-1", 3, "src", "alt"], [1, "font-bold", "text-slate-800", "line-clamp-1"], [1, "text-xs", "text-slate-500", "line-clamp-1"], [1, "mt-1", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-amber-600"], [1, "!rounded-full", "!px-3", "!py-1", "!text-xs", "!font-bold", 3, "nzColor"], [1, "fa", "mr-1", 3, "ngClass"], [1, "font-semibold", "text-slate-700"], [1, "text-xs", "text-slate-500"], [1, "font-medium"], [1, "text-sm", "text-slate-700"], [1, "text-sm", "text-slate-800"], [1, "fa", "fa-cog", "mr-1", "text-slate-400"], [1, "fa", "fa-tint", "mr-1", "text-slate-400"], [1, "text-lg", "font-black", "text-emerald-600"], [1, "flex", "justify-end", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ch\u1EC9nh s\u1EEDa", 3, "click"], [1, "fa", "fa-pencil"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng b\u00E1n", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "M\u1EDF b\u00E1n l\u1EA1i", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "nzDanger", "", "type", "button", "nz-popconfirm", "", "nzPopconfirmTitle", "X\u00F3a s\u1EA3n ph\u1EA9m n\u00E0y?", "nzPopconfirmOkText", "X\u00F3a", "nzOkDanger", "", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", 3, "nzOnConfirm"], [1, "fa", "fa-trash"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng b\u00E1n", 3, "click"], [1, "fa", "fa-ban"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "M\u1EDF b\u00E1n l\u1EA1i", 3, "click"], [1, "fa", "fa-check"], [1, "py-12"], ["nzNotFoundContent", "Kh\u00F4ng t\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m ph\u00F9 h\u1EE3p b\u1ED9 l\u1ECDc"], ["nz-form", "", "nzLayout", "vertical", 1, "space-y-1", 3, "formGroup"], [1, "grid", "gap-x-6", "md:grid-cols-2"], [1, "space-y-3", "md:col-span-2"], ["nzRequired", ""], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp t\u00EAn s\u1EA3n ph\u1EA9m"], ["nz-input", "", "formControlName", "name", "placeholder", "VD: M\u00E1y c\u00E0y Kubota K175..."], [1, "space-y-3"], ["nzErrorTip", "B\u1EAFt bu\u1ED9c"], ["nz-input", "", "formControlName", "brand", "placeholder", "VD: Kubota, Yanmar..."], ["nz-input", "", "formControlName", "model", "placeholder", "VD: K175, SR65..."], ["nzErrorTip", "Ch\u1ECDn lo\u1EA1i"], ["formControlName", "category"], ["nzLabel", "\uD83D\uDE9C M\u00E1y n\u00F4ng nghi\u1EC7p (Machine Model)", 3, "nzValue"], ["nzLabel", "\uD83D\uDD27 Ph\u1EE5 t\u00F9ng m\u00E1y (Machine Part)", 3, "nzValue"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn c\u00F4ng ty"], ["formControlName", "companyId", "nzShowSearch", "", "nzPlaceHolder", "Ch\u1ECDn c\u00F4ng ty"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn th\u01B0\u01A1ng hi\u1EC7u"], ["formControlName", "brandId", "nzShowSearch", "", "nzPlaceHolder", "Ch\u1ECDn th\u01B0\u01A1ng hi\u1EC7u"], ["nzErrorTip", "Gi\u00E1 kh\u00F4ng h\u1EE3p l\u1EC7"], ["formControlName", "price", 1, "!w-full", 3, "nzMin", "nzStep"], ["formControlName", "stockQuantity", 1, "!w-full", 3, "nzMin"], ["nz-input", "", "formControlName", "pictureUrl", "placeholder", "https://.../image.jpg"], [1, "rounded-xl", "bg-amber-50/60", "p-4"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-amber-700"], [1, "flex", "h-40", "items-center", "justify-center", "overflow-hidden", "rounded-lg", "bg-white", "ring-1", "ring-amber-100"], ["class", "h-full w-full object-contain p-2", "alt", "preview", 3, "src", 4, "ngIf"], ["class", "fa fa-tractor text-6xl text-amber-300", 4, "ngIf"], ["formControlName", "isUsed", "nzCheckedChildren", "\u0110ANG B\u00C1N", "nzUnCheckedChildren", "NG\u1EEANG B\u00C1N"], [1, "md:col-span-2"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp m\u00F4 t\u1EA3"], ["nz-input", "", "formControlName", "description", "rows", "3", "placeholder", "Th\u00F4ng tin m\u00F4 t\u1EA3 chi ti\u1EBFt, c\u00F4ng d\u1EE5ng, \u01B0u \u0111i\u1EC3m..."], [1, "!my-4"], [1, "font-bold"], [1, "grid", "gap-6", "md:grid-cols-2"], ["nz-input", "", "formControlName", "engineType", "placeholder", "VD: Diesel 4 k\u1EF3, X\u0103ng..."], ["nz-input", "", "formControlName", "power", "placeholder", "VD: 15 HP, 25 kW..."], ["nz-input", "", "formControlName", "fuelType", "placeholder", "VD: Diesel, Petrol, Electric..."], ["nz-input", "", "formControlName", "capacity", "placeholder", "VD: 500 kg, 1 t\u1EA5n..."], ["nz-input", "", "formControlName", "compatibility", "placeholder", "Ph\u1EE5 t\u00F9ng d\u00F9ng cho model n\u00E0o..."], [3, "valueChange", "value"], [4, "ngIf"], ["alt", "preview", 1, "h-full", "w-full", "object-contain", "p-2", 3, "src"], [1, "fa", "fa-tractor", "text-6xl", "text-amber-300"], ["entityType", "AgriculturalMachineProduct", 3, "entityId"]],
      template: function AgriculturalMachineAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 1)(1, "nz-page-header", 2)(2, "nz-page-header-extra")(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](5, "Th\u00EAm s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](6, "nz-card", 5)(7, "div", 6)(8, "div", 7)(9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.searchDraft, $event) || (ctx.searchDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](10, "nz-select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_nz_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.companyDraft, $event) || (ctx.companyDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](11, AgriculturalMachineAdminPageComponent_nz_option_11_Template, 1, 2, "nz-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](12, "nz-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_nz_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.brandDraft, $event) || (ctx.brandDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](13, AgriculturalMachineAdminPageComponent_nz_option_13_Template, 1, 2, "nz-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](14, "nz-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_nz_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.categoryDraft, $event) || (ctx.categoryDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](15, "nz-option", 13)(16, "nz-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](17, "nz-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_nz_select_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.statusDraft, $event) || (ctx.statusDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](18, "nz-option", 16)(19, "nz-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](20, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.applyFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](21, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](22, "T\u00ECm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](23, "div", 20)(24, "nz-tag", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](26, "nz-tag", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](28, "nz-tag", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](30, "nz-tag", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](32, "nz-table", 25, 0)(34, "thead")(35, "tr")(36, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](37, "\u1EA2nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](38, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](39, "S\u1EA3n ph\u1EA9m");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](40, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](41, "Lo\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](43, "H\u00E3ng / Model");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](45, "C\u00F4ng ty");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](46, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](47, "\u0110\u1ED9ng c\u01A1 / Nhi\u00EAn li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](48, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](49, "Gi\u00E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](50, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](51, "T\u1ED3n kho");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](52, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](53, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](54, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](55, "Thao t\u00E1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](56, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](57, AgriculturalMachineAdminPageComponent_tr_57_Template, 50, 25, "tr", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](58, AgriculturalMachineAdminPageComponent_div_58_Template, 2, 0, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](59, "nz-modal", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("nzOnCancel", function AgriculturalMachineAdminPageComponent_Template_nz_modal_nzOnCancel_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function AgriculturalMachineAdminPageComponent_Template_nz_modal_nzOnOk_59_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](60, AgriculturalMachineAdminPageComponent_div_60_Template, 105, 12, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const table_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵreference"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayProperty"]("ngModel", ctx.companyDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx.companies());
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayProperty"]("ngModel", ctx.brandDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", ctx.brands());
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayProperty"]("ngModel", ctx.categoryDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayProperty"]("ngModel", ctx.statusDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" T\u1ED5ng: ", ctx.countAll(), " s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" \u0110ang b\u00E1n: ", ctx.countActive(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" H\u1EBFt h\u00E0ng: ", ctx.countSoldOut(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" S\u1EAFp h\u1EBFt: ", ctx.countLowStock(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 8)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction0"](22, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", table_r12.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx.loading() && ctx.filteredRows().length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "Ch\u1EC9nh s\u1EEDa s\u1EA3n ph\u1EA9m m\u00E1y n\u00F4ng nghi\u1EC7p" : "Th\u00EAm s\u1EA3n ph\u1EA9m m\u00E1y n\u00F4ng nghi\u1EC7p m\u1EDBi")("nzOkLoading", ctx.saving());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_29__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTrDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalContentDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_31__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_31__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__.NzInputNumberModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__.NzInputNumberComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__.NzTagComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__.NzSwitchComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__.NzPageHeaderExtraDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzTooltipDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_18__.NzSpaceModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__.NzEmptyModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__.NzEmptyComponent, _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_25__.MetadataEditorComponent, _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_26__.EntityImageManagerComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_27__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_agricultural-machines_agricultural-machine-admin-page_component_ts.2a86c492982a1b5c.js.map