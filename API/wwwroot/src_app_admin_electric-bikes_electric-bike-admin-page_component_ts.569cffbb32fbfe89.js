"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_electric-bikes_electric-bike-admin-page_component_ts"],{

/***/ 9725
/*!****************************************************************************!*\
  !*** ./src/app/admin/electric-bikes/electric-bike-admin-page.component.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElectricBikeAdminPageComponent: () => (/* binding */ ElectricBikeAdminPageComponent)
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
/* harmony import */ var _shared_models_electricBikeProduct__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/models/electricBikeProduct */ 8352);
/* harmony import */ var _services_electric_bike_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/electric-bike.service */ 2501);
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
  x: "1400px"
});
function ElectricBikeAdminPageComponent_nz_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "nz-option", 35);
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", c_r2.id)("nzLabel", c_r2.name);
  }
}
function ElectricBikeAdminPageComponent_nz_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "nz-option", 35);
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", b_r3.id)("nzLabel", b_r3.name);
  }
}
function ElectricBikeAdminPageComponent_tr_55_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function ElectricBikeAdminPageComponent_tr_55_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleActive(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
  }
}
function ElectricBikeAdminPageComponent_tr_55_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function ElectricBikeAdminPageComponent_tr_55_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleActive(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
  }
}
function ElectricBikeAdminPageComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](4, "td")(5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](11, "td")(12, "nz-tag", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](15, "td")(16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](19, " Model: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](20, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](22, "td")(23, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](25, "td")(26, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipe"](28, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](29, "td")(30, "nz-tag", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](32, "td")(33, "nz-tag", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](35, "td")(36, "div", 48)(37, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function ElectricBikeAdminPageComponent_tr_55_Template_button_click_37_listener() {
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.open(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](38, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](39, ElectricBikeAdminPageComponent_tr_55_button_39_Template, 2, 0, "button", 51)(40, ElectricBikeAdminPageComponent_tr_55_button_40_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](41, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("nzOnConfirm", function ElectricBikeAdminPageComponent_tr_55_Template_button_nzOnConfirm_41_listener() {
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.remove(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](42, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵclassProp"]("opacity-60", p_r5.isUsed === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵinterpolate"](p_r5.name))("src", p_r5.pictureUrl || "assets/images/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", p_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", p_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ID: #", p_r5.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzColor", ctx_r5.categoryColor(p_r5.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngClass", p_r5.category === 1 ? "fa-bicycle" : "fa-wrench");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", p_r5.categoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](p_r5.brandName);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](p_r5.model || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate"](p_r5.companyName || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpipeBind1"](28, 21, p_r5.price), "\u20AB ");
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
function ElectricBikeAdminPageComponent_div_57_nz_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "nz-option", 35);
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", c_r10.id)("nzLabel", c_r10.name);
  }
}
function ElectricBikeAdminPageComponent_div_57_nz_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "nz-option", 35);
  }
  if (rf & 2) {
    const b_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzValue", b_r11.id)("nzLabel", b_r11.name);
  }
}
function ElectricBikeAdminPageComponent_div_57_img_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "img", 99);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("src", ctx_r5.form.value.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsanitizeUrl"]);
  }
}
function ElectricBikeAdminPageComponent_div_57_i_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](0, "i", 100);
  }
}
function ElectricBikeAdminPageComponent_div_57_ng_container_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](1, "nz-divider", 90)(2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](3, "Th\u01B0 vi\u1EC7n \u1EA3nh s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](4, "app-entity-image-manager", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("entityId", ctx_r5.editing().id);
  }
}
function ElectricBikeAdminPageComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div")(1, "form", 59)(2, "div", 60)(3, "div", 61)(4, "nz-form-item")(5, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](6, "T\u00EAn s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](7, "nz-form-control", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](8, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](9, "div", 65)(10, "nz-form-item")(11, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](12, "Th\u01B0\u01A1ng hi\u1EC7u (hi\u1EC3n th\u1ECB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](13, "nz-form-control", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](14, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](15, "nz-form-item")(16, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](17, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](18, "nz-form-control", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](19, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](20, "nz-form-item")(21, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](22, "Lo\u1EA1i s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](23, "nz-form-control", 69)(24, "nz-select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](25, "nz-option", 71)(26, "nz-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](27, "nz-form-item")(28, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](29, "C\u00F4ng ty / \u0110\u1ED1i t\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](30, "nz-form-control", 73)(31, "nz-select", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](32, ElectricBikeAdminPageComponent_div_57_nz_option_32_Template, 1, 2, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](33, "nz-form-item")(34, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](35, "Th\u01B0\u01A1ng hi\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](36, "nz-form-control", 75)(37, "nz-select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](38, ElectricBikeAdminPageComponent_div_57_nz_option_38_Template, 1, 2, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](39, "div", 65)(40, "nz-form-item")(41, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](42, "Gi\u00E1 b\u00E1n (VND)");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](43, "nz-form-control", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](44, "nz-input-number", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](45, "nz-form-item")(46, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](47, "S\u1ED1 l\u01B0\u1EE3ng t\u1ED3n kho");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](48, "nz-form-control", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](49, "nz-input-number", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](50, "nz-form-item")(51, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](52, "\u1EA2nh s\u1EA3n ph\u1EA9m URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](53, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](54, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](55, "div", 81)(56, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](57, " Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](58, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](59, ElectricBikeAdminPageComponent_div_57_img_59_Template, 1, 1, "img", 84)(60, ElectricBikeAdminPageComponent_div_57_i_60_Template, 1, 0, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](61, "nz-form-item")(62, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](63, "Tr\u1EA1ng th\u00E1i b\u00E1n h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](64, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](65, "nz-switch", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](66, "nz-form-item", 87)(67, "nz-form-label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](68, "M\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](69, "nz-form-control", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](70, "textarea", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](71, "nz-divider", 90)(72, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](73, "Th\u00F4ng s\u1ED1 k\u1EF9 thu\u1EADt xe \u0111i\u1EC7n");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](74, "div", 92)(75, "nz-form-item")(76, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](77, "\u0110i\u1EC7n \u00E1p (Voltage)");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](78, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](79, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](80, "nz-form-item")(81, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](82, "C\u00F4ng su\u1EA5t (Power)");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](83, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](84, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](85, "nz-form-item")(86, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](87, "Dung l\u01B0\u1EE3ng pin");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](88, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](89, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](90, "nz-form-item")(91, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](92, "Kh\u1EA3 n\u0103ng t\u01B0\u01A1ng th\u00EDch");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](93, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](94, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](95, "nz-divider", 90)(96, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](97, "Metadata b\u1ED5 sung");
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](98, "app-metadata-editor", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("valueChange", function ElectricBikeAdminPageComponent_div_57_Template_app_metadata_editor_valueChange_98_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.metadata.set($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](99, ElectricBikeAdminPageComponent_div_57_ng_container_99_Template, 5, 1, "ng-container", 98);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzMin", 0)("nzStep", 100000);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzMin", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r5.form.value.pictureUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", !ctx_r5.form.value.pictureUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("value", ctx_r5.metadata());
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngIf", ctx_r5.editing());
  }
}
class ElectricBikeAdminPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.msg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__.NzMessageService);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_electric_bike_service__WEBPACK_IMPORTED_MODULE_22__.ElectricBikeService);
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
      category: [_shared_models_electricBikeProduct__WEBPACK_IMPORTED_MODULE_21__.ElectricBikeCategory.ElectricBikeModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      price: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      stockQuantity: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      pictureUrl: [''],
      voltage: [''],
      power: [''],
      batteryCapacity: [''],
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
    if (n < 20) return 'orange';
    return 'green';
  }
  categoryColor(cat) {
    return cat === _shared_models_electricBikeProduct__WEBPACK_IMPORTED_MODULE_21__.ElectricBikeCategory.ElectricBikeModel ? 'blue' : 'cyan';
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
      error: () => this.msg.error('Không tải được dữ liệu xe điện'),
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
      category: record?.category ?? _shared_models_electricBikeProduct__WEBPACK_IMPORTED_MODULE_21__.ElectricBikeCategory.ElectricBikeModel,
      description: record?.description ?? '',
      price: record?.price ?? 0,
      stockQuantity: record?.stockQuantity ?? 0,
      pictureUrl: record?.pictureUrl ?? '',
      voltage: record?.voltage ?? '',
      power: record?.power ?? '',
      batteryCapacity: record?.batteryCapacity ?? '',
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
      voltage: raw.voltage || null,
      power: raw.power || null,
      batteryCapacity: raw.batteryCapacity || null,
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
        this.msg.success(this.editing() ? 'Đã cập nhật xe điện' : 'Đã thêm xe điện');
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
      voltage: record.voltage,
      power: record.power,
      batteryCapacity: record.batteryCapacity,
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
    return this.rows().filter(r => r.stockQuantity > 0 && r.stockQuantity < 20).length;
  }
  static {
    this.ɵfac = function ElectricBikeAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ElectricBikeAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineComponent"]({
      type: ElectricBikeAdminPageComponent,
      selectors: [["app-electric-bike-admin-page"]],
      decls: 58,
      vars: 22,
      consts: [["table", ""], [1, "mx-auto", "max-w-[1600px]", "space-y-5"], ["nzTitle", "Xe \u0111i\u1EC7n", "nzSubtitle", "Qu\u1EA3n l\u00FD danh m\u1EE5c xe \u0111i\u1EC7n v\u00E0 ph\u1EE5 t\u00F9ng xe \u0111i\u1EC7n", 1, "!rounded-2xl", "!bg-white", "!shadow-sm", "!border", "!border-slate-100"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!rounded-xl", "!h-10", "!px-5", "!font-semibold", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-2xl", "!shadow-sm"], [1, "mb-5", "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-center"], [1, "md:col-span-3"], ["nz-input", "", "nzBorderless", "", "placeholder", "T\u00ECm theo t\u00EAn, h\u00E3ng, model, c\u00F4ng ty...", "name", "bike-search", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", "!px-4", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "C\u00F4ng ty  ", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzPlaceHolder", "Th\u01B0\u01A1ng hi\u1EC7u  ", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "Lo\u1EA1i s\u1EA3n ph\u1EA9m  ", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzLabel", "\uD83D\uDEB2 M\u1EABu xe \u0111i\u1EC7n", 3, "nzValue"], ["nzLabel", "\uD83D\uDD27 Ph\u1EE5 t\u00F9ng xe \u0111i\u1EC7n", 3, "nzValue"], ["nzPlaceHolder", "Tr\u1EA1ng th\u00E1i  ", "nzSize", "large", "nzAllowClear", "", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang b\u00E1n"], ["nzValue", "inactive", "nzLabel", "\u26D4 Ng\u1EEBng b\u00E1n (IsUsed=false)"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-[44px]", "!rounded-xl", "!font-semibold", "!w-full", 3, "click"], [1, "fa", "fa-search", "mr-1"], [1, "mb-4", "flex", "flex-wrap", "gap-2"], ["nzColor", "blue", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "green", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "red", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "orange", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzSize", "middle", 3, "nzData", "nzLoading", "nzPageSize", "nzScroll"], ["nzWidth", "100px"], ["nzWidth", "140px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "110px"], ["nzWidth", "230px", 1, "text-right"], [3, "opacity-60", 4, "ngFor", "ngForOf"], ["nzOkText", "L\u01B0u l\u1EA1i", "nzCancelText", "H\u1EE7y", "nzWidth", "1000px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-gradient-to-br", "from-sky-50", "to-indigo-50", "ring-1", "ring-sky-100"], [1, "h-full", "w-full", "object-cover", "p-1", 3, "src", "alt"], [1, "font-bold", "text-slate-800", "line-clamp-1"], [1, "text-xs", "text-slate-500", "line-clamp-1"], [1, "mt-1", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-sky-600"], [1, "!rounded-full", "!px-3", "!py-1", "!text-xs", "!font-bold", 3, "nzColor"], [1, "fa", "mr-1", 3, "ngClass"], [1, "font-semibold", "text-slate-700"], [1, "text-xs", "text-slate-500"], [1, "font-medium"], [1, "text-sm", "text-slate-700"], [1, "text-lg", "font-black", "text-emerald-600"], [1, "flex", "justify-end", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ch\u1EC9nh s\u1EEDa", 3, "click"], [1, "fa", "fa-pencil"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng b\u00E1n", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "M\u1EDF b\u00E1n l\u1EA1i", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "nzDanger", "", "type", "button", "nz-popconfirm", "", "nzPopconfirmTitle", "X\u00F3a s\u1EA3n ph\u1EA9m n\u00E0y?", "nzPopconfirmOkText", "X\u00F3a", "nzOkDanger", "", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", 3, "nzOnConfirm"], [1, "fa", "fa-trash"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng b\u00E1n", 3, "click"], [1, "fa", "fa-ban"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "M\u1EDF b\u00E1n l\u1EA1i", 3, "click"], [1, "fa", "fa-check"], ["nz-form", "", "nzLayout", "vertical", 1, "space-y-1", 3, "formGroup"], [1, "grid", "gap-x-6", "md:grid-cols-2"], [1, "space-y-3", "md:col-span-2"], ["nzRequired", ""], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp t\u00EAn s\u1EA3n ph\u1EA9m"], ["nz-input", "", "formControlName", "name", "placeholder", "VD: Xe \u0111i\u1EC7n VinFast Theon S..."], [1, "space-y-3"], ["nzErrorTip", "B\u1EAFt bu\u1ED9c"], ["nz-input", "", "formControlName", "brand", "placeholder", "VD: VinFast, Yamaha..."], ["nz-input", "", "formControlName", "model", "placeholder", "VD: Theon S / X5..."], ["nzErrorTip", "Ch\u1ECDn lo\u1EA1i"], ["formControlName", "category"], ["nzLabel", "\uD83D\uDEB2 M\u1EABu xe \u0111i\u1EC7n (Electric Bike Model)", 3, "nzValue"], ["nzLabel", "\uD83D\uDD27 Ph\u1EE5 t\u00F9ng xe \u0111i\u1EC7n (Electric Bike Part)", 3, "nzValue"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn c\u00F4ng ty"], ["formControlName", "companyId", "nzShowSearch", "", "nzPlaceHolder", "Ch\u1ECDn c\u00F4ng ty"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn th\u01B0\u01A1ng hi\u1EC7u"], ["formControlName", "brandId", "nzShowSearch", "", "nzPlaceHolder", "Ch\u1ECDn th\u01B0\u01A1ng hi\u1EC7u"], ["nzErrorTip", "Gi\u00E1 kh\u00F4ng h\u1EE3p l\u1EC7"], ["formControlName", "price", 1, "!w-full", 3, "nzMin", "nzStep"], ["formControlName", "stockQuantity", 1, "!w-full", 3, "nzMin"], ["nz-input", "", "formControlName", "pictureUrl", "placeholder", "https://.../image.jpg"], [1, "rounded-xl", "bg-slate-50", "p-4"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-500"], [1, "flex", "h-40", "items-center", "justify-center", "overflow-hidden", "rounded-lg", "bg-white", "ring-1", "ring-slate-200"], ["class", "h-full w-full object-contain p-2", "alt", "preview", 3, "src", 4, "ngIf"], ["class", "fa fa-bicycle text-6xl text-slate-300", 4, "ngIf"], ["formControlName", "isUsed", "nzCheckedChildren", "\u0110ANG B\u00C1N", "nzUnCheckedChildren", "NG\u1EEANG B\u00C1N"], [1, "md:col-span-2"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp m\u00F4 t\u1EA3"], ["nz-input", "", "formControlName", "description", "rows", "3", "placeholder", "Th\u00F4ng tin m\u00F4 t\u1EA3 chi ti\u1EBFt, \u0111\u1EB7c \u0111i\u1EC3m n\u1ED5i b\u1EADt..."], [1, "!my-4"], [1, "font-bold"], [1, "grid", "gap-6", "md:grid-cols-2"], ["nz-input", "", "formControlName", "voltage", "placeholder", "VD: 48V, 60V..."], ["nz-input", "", "formControlName", "power", "placeholder", "VD: 350W, 500W..."], ["nz-input", "", "formControlName", "batteryCapacity", "placeholder", "VD: 10Ah, 20.8Ah..."], ["nz-input", "", "formControlName", "compatibility", "placeholder", "Ph\u1EE5 h\u1EE3p model n\u00E0o..."], [3, "valueChange", "value"], [4, "ngIf"], ["alt", "preview", 1, "h-full", "w-full", "object-contain", "p-2", 3, "src"], [1, "fa", "fa-bicycle", "text-6xl", "text-slate-300"], ["entityType", "ElectricBikeProduct", 3, "entityId"]],
      template: function ElectricBikeAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](0, "div", 1)(1, "nz-page-header", 2)(2, "nz-page-header-extra")(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function ElectricBikeAdminPageComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](5, "Th\u00EAm s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](6, "nz-card", 5)(7, "div", 6)(8, "div", 7)(9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function ElectricBikeAdminPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.searchDraft, $event) || (ctx.searchDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](10, "nz-select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function ElectricBikeAdminPageComponent_Template_nz_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.companyDraft, $event) || (ctx.companyDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](11, ElectricBikeAdminPageComponent_nz_option_11_Template, 1, 2, "nz-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](12, "nz-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function ElectricBikeAdminPageComponent_Template_nz_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.brandDraft, $event) || (ctx.brandDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](13, ElectricBikeAdminPageComponent_nz_option_13_Template, 1, 2, "nz-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](14, "nz-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function ElectricBikeAdminPageComponent_Template_nz_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.categoryDraft, $event) || (ctx.categoryDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](15, "nz-option", 13)(16, "nz-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](17, "nz-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayListener"]("ngModelChange", function ElectricBikeAdminPageComponent_Template_nz_select_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtwoWayBindingSet"](ctx.statusDraft, $event) || (ctx.statusDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelement"](18, "nz-option", 16)(19, "nz-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](20, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("click", function ElectricBikeAdminPageComponent_Template_button_click_20_listener() {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](43, "Th\u01B0\u01A1ng hi\u1EC7u / Model");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](45, "C\u00F4ng ty");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](46, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](47, "Gi\u00E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](48, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](49, "T\u1ED3n kho");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](50, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](51, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](52, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtext"](53, "Thao t\u00E1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](54, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](55, ElectricBikeAdminPageComponent_tr_55_Template, 43, 23, "tr", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵelementStart"](56, "nz-modal", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵlistener"]("nzOnCancel", function ElectricBikeAdminPageComponent_Template_nz_modal_nzOnCancel_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function ElectricBikeAdminPageComponent_Template_nz_modal_nzOnOk_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵtemplate"](57, ElectricBikeAdminPageComponent_div_57_Template, 100, 12, "div", 34);
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
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 8)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵpureFunction0"](21, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("ngForOf", table_r12.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "Ch\u1EC9nh s\u1EEDa s\u1EA3n ph\u1EA9m xe \u0111i\u1EC7n" : "Th\u00EAm s\u1EA3n ph\u1EA9m xe \u0111i\u1EC7n m\u1EDBi")("nzOkLoading", ctx.saving());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_29__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTrDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalContentDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_31__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_31__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__.NzInputNumberModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__.NzInputNumberComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_12__.NzTagComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_13__.NzSwitchComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_16__.NzPageHeaderExtraDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzTooltipDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_18__.NzSpaceModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_19__.NzDividerComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_20__.NzEmptyModule, _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_25__.MetadataEditorComponent, _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_26__.EntityImageManagerComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_27__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_electric-bikes_electric-bike-admin-page_component_ts.569cffbb32fbfe89.js.map