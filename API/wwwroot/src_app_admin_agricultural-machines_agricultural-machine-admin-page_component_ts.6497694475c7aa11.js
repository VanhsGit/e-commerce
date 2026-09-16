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
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 5457);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/table */ 8636);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1663);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ 1034);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 5346);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/switch */ 8792);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 9655);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 5853);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/space */ 3378);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/divider */ 3987);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/empty */ 2643);
/* harmony import */ var _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/models/agriculturalMachineProduct */ 9706);
/* harmony import */ var _services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../services/agricultural-machine.service */ 3473);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/company.service */ 17);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../services/brand.service */ 899);
/* harmony import */ var _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../shared/metadata-editor/metadata-editor.component */ 4264);
/* harmony import */ var _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../shared/entity-image-manager/entity-image-manager.component */ 6112);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);



















































const _c0 = () => ({
  x: "1500px"
});
function AgriculturalMachineAdminPageComponent_nz_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "nz-option", 38);
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzValue", c_r2.id)("nzLabel", c_r2.name);
  }
}
function AgriculturalMachineAdminPageComponent_nz_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "nz-option", 38);
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzValue", b_r3.id)("nzLabel", b_r3.name);
  }
}
function AgriculturalMachineAdminPageComponent_tr_59_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_tr_59_button_50_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleActive(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }
}
function AgriculturalMachineAdminPageComponent_tr_59_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_tr_59_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]().$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.toggleActive(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }
}
function AgriculturalMachineAdminPageComponent_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "tr")(1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](3, "td")(4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](5, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](6, "td")(7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](13, "td")(14, "nz-tag", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](15, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](17, "td")(18, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](20, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](21, " Model: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](22, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](24, "td")(25, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](27, "td")(28, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](29, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](31, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](32, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](34, "td")(35, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](37, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](38, "td")(39, "nz-tag", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](41, "td")(42, "nz-tag", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](44, "td")(45, "div", 55)(46, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_tr_59_Template_button_click_46_listener() {
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.viewDetail(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](47, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](48, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_tr_59_Template_button_click_48_listener() {
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.open(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](49, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](50, AgriculturalMachineAdminPageComponent_tr_59_button_50_Template, 2, 0, "button", 60)(51, AgriculturalMachineAdminPageComponent_tr_59_button_51_Template, 2, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](52, "nz-popconfirm", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("nzOnConfirm", function AgriculturalMachineAdminPageComponent_tr_59_Template_nz_popconfirm_nzOnConfirm_52_listener() {
      const p_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.remove(p_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](53, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](54, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    const table_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵreference"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassProp"]("opacity-60", p_r5.isUsed === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", (table_r10.nzPageIndex - 1) * table_r10.nzPageSize + i_r9 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵinterpolate"](p_r5.name))("src", p_r5.pictureUrl || "assets/images/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](p_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", p_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ID: #", p_r5.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzColor", ctx_r5.categoryColor(p_r5.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngClass", p_r5.category === 1 ? "fa-tractor" : "fa-cogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", p_r5.categoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](p_r5.brandName);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](p_r5.model || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](p_r5.companyName || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"]("", p_r5.engineType || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"]("", p_r5.fuelType || "Ch\u01B0a c\u1EADp nh\u1EADt", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](37, 24, p_r5.price), "\u20AB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzColor", ctx_r5.stockBadgeColor(p_r5.stockQuantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", p_r5.stockQuantity <= 0 ? "H\u1EBFt h\u00E0ng" : p_r5.stockQuantity + " SP", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzColor", p_r5.isUsed === false ? "default" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", p_r5.isUsed === false ? "Ng\u1EEBng b\u00E1n" : "\u0110ang b\u00E1n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", p_r5.isUsed !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", p_r5.isUsed === false);
  }
}
function AgriculturalMachineAdminPageComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](1, "nz-empty", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }
}
function AgriculturalMachineAdminPageComponent_div_62_nz_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "nz-option", 38);
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzValue", c_r12.id)("nzLabel", c_r12.name);
  }
}
function AgriculturalMachineAdminPageComponent_div_62_nz_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "nz-option", 38);
  }
  if (rf & 2) {
    const b_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzValue", b_r13.id)("nzLabel", b_r13.name);
  }
}
function AgriculturalMachineAdminPageComponent_div_62_img_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "img", 112);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("src", ctx_r5.form.value.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsanitizeUrl"]);
  }
}
function AgriculturalMachineAdminPageComponent_div_62_i_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "i", 113);
  }
}
function AgriculturalMachineAdminPageComponent_div_62_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](1, "nz-divider", 102)(2, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](3, "Th\u01B0 vi\u1EC7n \u1EA3nh s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](4, "app-entity-image-manager", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("entityId", ctx_r5.editing().id);
  }
}
function AgriculturalMachineAdminPageComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div")(1, "form", 71)(2, "div", 72)(3, "div", 73)(4, "nz-form-item")(5, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](6, "T\u00EAn s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](7, "nz-form-control", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](8, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](9, "div", 77)(10, "nz-form-item")(11, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](12, "Th\u01B0\u01A1ng hi\u1EC7u (hi\u1EC3n th\u1ECB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](13, "nz-form-control", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](14, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](15, "nz-form-item")(16, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](17, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](18, "nz-form-control", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](19, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](20, "nz-form-item")(21, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](22, "Lo\u1EA1i s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](23, "nz-form-control", 81)(24, "nz-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](25, "nz-option", 83)(26, "nz-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](27, "nz-form-item")(28, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](29, "C\u00F4ng ty / \u0110\u1ED1i t\u00E1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](30, "nz-form-control", 85)(31, "nz-select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](32, AgriculturalMachineAdminPageComponent_div_62_nz_option_32_Template, 1, 2, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](33, "nz-form-item")(34, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](35, "Th\u01B0\u01A1ng hi\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](36, "nz-form-control", 87)(37, "nz-select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](38, AgriculturalMachineAdminPageComponent_div_62_nz_option_38_Template, 1, 2, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](39, "div", 77)(40, "nz-form-item")(41, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](42, "Gi\u00E1 b\u00E1n (VND)");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](43, "nz-form-control", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](44, "nz-input-number", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](45, "nz-form-item")(46, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](47, "S\u1ED1 l\u01B0\u1EE3ng t\u1ED3n kho");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](48, "nz-form-control", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](49, "nz-input-number", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](50, "nz-form-item")(51, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](52, "\u1EA2nh s\u1EA3n ph\u1EA9m URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](53, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](54, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](55, "div", 93)(56, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](57, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](58, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](59, AgriculturalMachineAdminPageComponent_div_62_img_59_Template, 1, 1, "img", 96)(60, AgriculturalMachineAdminPageComponent_div_62_i_60_Template, 1, 0, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](61, "nz-form-item")(62, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](63, "Tr\u1EA1ng th\u00E1i b\u00E1n h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](64, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](65, "nz-switch", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](66, "nz-form-item", 99)(67, "nz-form-label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](68, "M\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](69, "nz-form-control", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](70, "textarea", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](71, "nz-divider", 102)(72, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](73, "Th\u00F4ng s\u1ED1 k\u1EF9 thu\u1EADt m\u00E1y n\u00F4ng nghi\u1EC7p");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](74, "div", 104)(75, "nz-form-item")(76, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](77, "Lo\u1EA1i \u0111\u1ED9ng c\u01A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](78, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](79, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](80, "nz-form-item")(81, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](82, "C\u00F4ng su\u1EA5t (Power)");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](83, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](84, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](85, "nz-form-item")(86, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](87, "Lo\u1EA1i nhi\u00EAn li\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](88, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](89, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](90, "nz-form-item")(91, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](92, "T\u1EA3i tr\u1ECDng / C\u00F4ng su\u1EA5t ch\u1EE9a");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](93, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](94, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](95, "nz-form-item", 99)(96, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](97, "T\u01B0\u01A1ng th\u00EDch / D\u00F9ng cho m\u00E1y");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](98, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](99, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](100, "nz-divider", 102)(101, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](102, "Metadata b\u1ED5 sung");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](103, "app-metadata-editor", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("valueChange", function AgriculturalMachineAdminPageComponent_div_62_Template_app_metadata_editor_valueChange_103_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.metadata.set($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](104, AgriculturalMachineAdminPageComponent_div_62_ng_container_104_Template, 5, 1, "ng-container", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", ctx_r5.companies());
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", ctx_r5.brands());
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzMin", 0)("nzStep", 500000);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzMin", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx_r5.form.value.pictureUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", !ctx_r5.form.value.pictureUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("value", ctx_r5.metadata());
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx_r5.editing());
  }
}
function AgriculturalMachineAdminPageComponent_ng_container_64_div_1_div_57_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 147)(1, "span", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](3, "span", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kv_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](kv_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](kv_r14.value);
  }
}
function AgriculturalMachineAdminPageComponent_ng_container_64_div_1_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div")(1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](2, " Metadata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](3, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](4, AgriculturalMachineAdminPageComponent_ng_container_64_div_1_div_57_div_4_Template, 5, 2, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const v_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](5, 2, v_r15.metadata))("ngForTrackBy", ctx_r5.trackByKey);
  }
}
function AgriculturalMachineAdminPageComponent_ng_container_64_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 116)(1, "div", 117)(2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](3, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](4, "div", 119)(5, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](7, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](10, "div", 122)(11, "nz-tag", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](13, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](15, "nz-descriptions", 125)(16, "nz-descriptions-item", 126)(17, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](19, "nz-descriptions-item", 128)(20, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](22, "nz-descriptions-item", 130)(23, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](25, "nz-descriptions-item", 131)(26, "nz-tag", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](27, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](29, "nz-descriptions-item", 133)(30, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](32, "nz-descriptions-item", 134)(33, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](35, "nz-descriptions-item", 135)(36, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](38, "nz-descriptions-item", 136)(39, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](41, "nz-descriptions-item", 137)(42, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](44, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](45, "nz-descriptions-item", 139)(46, "nz-tag", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](48, "nz-descriptions-item", 140)(49, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](51, "nz-descriptions-item", 141)(52, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](54, "nz-descriptions-item", 143)(55, "nz-tag", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](57, AgriculturalMachineAdminPageComponent_ng_container_64_div_1_div_57_Template, 6, 4, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r15 = ctx.ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵinterpolate"](v_r15.name))("src", v_r15.pictureUrl || "assets/images/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](v_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](9, 41, v_r15.price), "\u20AB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzColor", v_r15.isUsed === false ? "default" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", v_r15.isUsed === false ? "Ng\u1EEBng b\u00E1n" : "\u0110ang b\u00E1n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ID: ", v_r15.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](v_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](v_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate2"]("", v_r15.brandName || v_r15.brand, " / ", v_r15.model || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzColor", ctx_r5.categoryColor(v_r15.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngClass", v_r15.category === 1 ? "fa-tractor" : "fa-cogs");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", v_r15.categoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](v_r15.companyName || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](v_r15.engineType || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](v_r15.fuelType || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](v_r15.capacity || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](44, 43, v_r15.price), "\u20AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzColor", ctx_r5.stockBadgeColor(v_r15.stockQuantity));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", v_r15.stockQuantity <= 0 ? "H\u1EBFt h\u00E0ng" : v_r15.stockQuantity + " SP", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate"](v_r15.compatibility || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", v_r15.description || "Ch\u01B0a c\u00F3 m\u00F4 t\u1EA3", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzColor", v_r15.isUsed === false ? "default" : "success");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", v_r15.isUsed === false ? "Ng\u1EEBng b\u00E1n" : "\u0110ang b\u00E1n", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx_r5.metadataKeysLength(v_r15.metadata) > 0);
  }
}
function AgriculturalMachineAdminPageComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](1, AgriculturalMachineAdminPageComponent_ng_container_64_div_1_Template, 58, 45, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx_r5.viewing());
  }
}
class AgriculturalMachineAdminPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.msg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_16__.NzMessageService);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_23__.AgriculturalMachineService);
    this.companyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_company_service__WEBPACK_IMPORTED_MODULE_24__.CompanyService);
    this.brandService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_brand_service__WEBPACK_IMPORTED_MODULE_25__.BrandService);
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
    this.viewing = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "viewing"
    }] : []));
    this.viewOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "viewOpen"
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
      category: [_shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_22__.AgriculturalMachineCategory.MachineModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
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
    return cat === _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_22__.AgriculturalMachineCategory.MachineModel ? 'gold' : 'purple';
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
      category: record?.category ?? _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_22__.AgriculturalMachineCategory.MachineModel,
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
  viewDetail(record) {
    this.viewing.set(record);
    this.viewOpen.set(true);
  }
  closeView() {
    this.viewing.set(null);
    this.viewOpen.set(false);
  }
  trackByKey(_, item) {
    return item.key;
  }
  metadataKeysLength(m) {
    return m ? Object.keys(m).length : 0;
  }
  static {
    this.ɵfac = function AgriculturalMachineAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgriculturalMachineAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineComponent"]({
      type: AgriculturalMachineAdminPageComponent,
      selectors: [["app-agricultural-machine-admin-page"]],
      decls: 65,
      vars: 25,
      consts: [["table", ""], [1, "mx-auto", "max-w-[1600px]", "space-y-5"], ["nzTitle", "M\u00E1y n\u00F4ng nghi\u1EC7p", "nzSubtitle", "Qu\u1EA3n l\u00FD danh m\u1EE5c m\u00E1y n\u00F4ng nghi\u1EC7p v\u00E0 ph\u1EE5 t\u00F9ng m\u00E1y", 1, "!rounded-2xl", "!bg-white", "!shadow-sm", "!border", "!border-slate-100"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!rounded-xl", "!h-10", "!px-5", "!font-semibold", 2, "background", "linear-gradient(135deg, #f59e0b, #d97706)", "border", "none", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-2xl", "!shadow-sm"], [1, "mb-5", "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-center"], [1, "md:col-span-3"], ["nz-input", "", "nzBorderless", "", "placeholder", "T\u00ECm theo t\u00EAn, h\u00E3ng, model, c\u00F4ng ty, lo\u1EA1i \u0111\u1ED9ng c\u01A1...", "name", "agri-search", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", "!px-4", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "C\u00F4ng ty (b\u1ECF tr\u1ED1ng = t\u1EA5t c\u1EA3)", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzPlaceHolder", "Th\u01B0\u01A1ng hi\u1EC7u (b\u1ECF tr\u1ED1ng = t\u1EA5t c\u1EA3)", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "Lo\u1EA1i s\u1EA3n ph\u1EA9m (b\u1ECF tr\u1ED1ng = t\u1EA5t c\u1EA3)", "nzAllowClear", "", "nzSize", "large", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzLabel", "\uD83D\uDE9C M\u00E1y n\u00F4ng nghi\u1EC7p", 3, "nzValue"], ["nzLabel", "\uD83D\uDD27 Ph\u1EE5 t\u00F9ng m\u00E1y", 3, "nzValue"], ["nzPlaceHolder", "Tr\u1EA1ng th\u00E1i (b\u1ECF tr\u1ED1ng = t\u1EA5t c\u1EA3)", "nzSize", "large", "nzAllowClear", "", "nzBorderless", "", "classList", "!h-[44px] !rounded-xl !bg-slate-50", 1, "md:col-span-2", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang b\u00E1n"], ["nzValue", "inactive", "nzLabel", "\u26D4 Ng\u1EEBng b\u00E1n (IsUsed=false)"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-[44px]", "!rounded-xl", "!font-semibold", "!w-full", 3, "click"], [1, "fa", "fa-search", "mr-1"], [1, "mb-4", "flex", "flex-wrap", "gap-2"], ["nzColor", "gold", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "green", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "red", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "orange", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzSize", "middle", 3, "nzData", "nzLoading", "nzPageSize", "nzScroll"], ["nzWidth", "70px", 1, "text-center", "font-bold"], ["nzWidth", "100px"], ["nzWidth", "140px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "110px"], ["nzWidth", "230px", 1, "text-right"], [3, "opacity-60", 4, "ngFor", "ngForOf"], ["class", "py-12", 4, "ngIf"], ["nzOkText", "L\u01B0u l\u1EA1i", "nzCancelText", "H\u1EE7y", "nzWidth", "1024px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], ["nzWidth", "820px", "nzFooter", "null", 3, "nzOnCancel", "nzVisible", "nzTitle"], [3, "nzValue", "nzLabel"], [1, "text-center", "font-semibold", "text-slate-600"], [1, "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-gradient-to-br", "from-amber-50", "to-rose-50", "ring-1", "ring-amber-100"], [1, "h-full", "w-full", "object-cover", "p-1", 3, "src", "alt"], [1, "font-bold", "text-slate-800", "line-clamp-1"], [1, "text-xs", "text-slate-500", "line-clamp-1"], [1, "mt-1", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "text-amber-600"], [1, "!rounded-full", "!px-3", "!py-1", "!text-xs", "!font-bold", 3, "nzColor"], [1, "fa", "mr-1", 3, "ngClass"], [1, "font-semibold", "text-slate-700"], [1, "text-xs", "text-slate-500"], [1, "font-medium"], [1, "text-sm", "text-slate-700"], [1, "text-sm", "text-slate-800"], [1, "fa", "fa-cog", "mr-1", "text-slate-400"], [1, "fa", "fa-tint", "mr-1", "text-slate-400"], [1, "text-lg", "font-black", "text-emerald-600"], [1, "flex", "justify-end", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Xem chi ti\u1EBFt", 3, "click"], [1, "fa", "fa-eye", "text-sky-600"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ch\u1EC9nh s\u1EEDa", 3, "click"], [1, "fa", "fa-pencil", "text-amber-600"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng b\u00E1n", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "M\u1EDF b\u00E1n l\u1EA1i", 3, "click", 4, "ngIf"], ["nzTitle", "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a s\u1EA3n ph\u1EA9m n\u00E0y kh\u00F4ng?", "nzPopconfirmType", "danger", 3, "nzOnConfirm"], ["nz-button", "", "nzSize", "small", "nzType", "text", "nzDanger", "", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", "nz-popconfirm", ""], [1, "fa", "fa-trash"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng b\u00E1n", 3, "click"], [1, "fa", "fa-eye-slash", "text-rose-500"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "M\u1EDF b\u00E1n l\u1EA1i", 3, "click"], [1, "fa", "fa-eye", "text-emerald-600"], [1, "py-12"], ["nzNotFoundContent", "Kh\u00F4ng t\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m ph\u00F9 h\u1EE3p b\u1ED9 l\u1ECDc"], ["nz-form", "", "nzLayout", "vertical", 1, "space-y-1", 3, "formGroup"], [1, "grid", "gap-x-6", "md:grid-cols-2"], [1, "space-y-3", "md:col-span-2"], ["nzRequired", ""], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp t\u00EAn s\u1EA3n ph\u1EA9m"], ["nz-input", "", "formControlName", "name", "placeholder", "VD: M\u00E1y c\u00E0y Kubota K175..."], [1, "space-y-3"], ["nzErrorTip", "B\u1EAFt bu\u1ED9c"], ["nz-input", "", "formControlName", "brand", "placeholder", "VD: Kubota, Yanmar..."], ["nz-input", "", "formControlName", "model", "placeholder", "VD: K175, SR65..."], ["nzErrorTip", "Ch\u1ECDn lo\u1EA1i"], ["formControlName", "category"], ["nzLabel", "\uD83D\uDE9C M\u00E1y n\u00F4ng nghi\u1EC7p (Machine Model)", 3, "nzValue"], ["nzLabel", "\uD83D\uDD27 Ph\u1EE5 t\u00F9ng m\u00E1y (Machine Part)", 3, "nzValue"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn c\u00F4ng ty"], ["formControlName", "companyId", "nzShowSearch", "", "nzPlaceHolder", "Ch\u1ECDn c\u00F4ng ty"], ["nzErrorTip", "Vui l\u00F2ng ch\u1ECDn th\u01B0\u01A1ng hi\u1EC7u"], ["formControlName", "brandId", "nzShowSearch", "", "nzPlaceHolder", "Ch\u1ECDn th\u01B0\u01A1ng hi\u1EC7u"], ["nzErrorTip", "Gi\u00E1 kh\u00F4ng h\u1EE3p l\u1EC7"], ["formControlName", "price", 1, "!w-full", 3, "nzMin", "nzStep"], ["formControlName", "stockQuantity", 1, "!w-full", 3, "nzMin"], ["nz-input", "", "formControlName", "pictureUrl", "placeholder", "https://.../image.jpg"], [1, "rounded-xl", "bg-amber-50/60", "p-4"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-amber-700"], [1, "flex", "h-40", "items-center", "justify-center", "overflow-hidden", "rounded-lg", "bg-white", "ring-1", "ring-amber-100"], ["class", "h-full w-full object-contain p-2", "alt", "preview", 3, "src", 4, "ngIf"], ["class", "fa fa-tractor text-6xl text-amber-300", 4, "ngIf"], ["formControlName", "isUsed", "nzCheckedChildren", "\u0110ANG B\u00C1N", "nzUnCheckedChildren", "NG\u1EEANG B\u00C1N"], [1, "md:col-span-2"], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp m\u00F4 t\u1EA3"], ["nz-input", "", "formControlName", "description", "rows", "3", "placeholder", "Th\u00F4ng tin m\u00F4 t\u1EA3 chi ti\u1EBFt, c\u00F4ng d\u1EE5ng, \u01B0u \u0111i\u1EC3m..."], [1, "!my-4"], [1, "font-bold"], [1, "grid", "gap-6", "md:grid-cols-2"], ["nz-input", "", "formControlName", "engineType", "placeholder", "VD: Diesel 4 k\u1EF3, X\u0103ng..."], ["nz-input", "", "formControlName", "power", "placeholder", "VD: 15 HP, 25 kW..."], ["nz-input", "", "formControlName", "fuelType", "placeholder", "VD: Diesel, Petrol, Electric..."], ["nz-input", "", "formControlName", "capacity", "placeholder", "VD: 500 kg, 1 t\u1EA5n..."], ["nz-input", "", "formControlName", "compatibility", "placeholder", "Ph\u1EE5 t\u00F9ng d\u00F9ng cho model n\u00E0o..."], [3, "valueChange", "value"], [4, "ngIf"], ["alt", "preview", 1, "h-full", "w-full", "object-contain", "p-2", 3, "src"], [1, "fa", "fa-tractor", "text-6xl", "text-amber-300"], ["entityType", "AgriculturalMachineProduct", 3, "entityId"], ["class", "space-y-5 rounded-xl border border-slate-200 bg-slate-50/60 p-5", 4, "ngIf"], [1, "space-y-5", "rounded-xl", "border", "border-slate-200", "bg-slate-50/60", "p-5"], [1, "flex", "items-center", "gap-4", "rounded-xl", "bg-white", "p-4", "ring-1", "ring-slate-200"], [1, "flex", "h-20", "w-20", "shrink-0", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-gradient-to-br", "from-amber-50", "to-rose-50", "ring-1", "ring-amber-100"], [1, "flex-1"], [1, "text-2xl", "font-black", "text-slate-900"], [1, "text-lg", "font-bold", "text-emerald-600", "mt-1"], [1, "mt-2", "flex", "items-center", "gap-2"], [1, "!rounded-full", "!px-3", "!text-xs", "!font-bold", 3, "nzColor"], [1, "text-xs", "text-slate-500", "font-mono"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn"], ["nzTitle", "ID", 3, "nzSpan"], [1, "font-mono", "text-slate-700"], ["nzTitle", "T\u00EAn SP", 3, "nzSpan"], [1, "text-slate-700"], ["nzTitle", "Th\u01B0\u01A1ng hi\u1EC7u / Model", 3, "nzSpan"], ["nzTitle", "Lo\u1EA1i", 3, "nzSpan"], [1, "!rounded-full", "!px-2", "!text-xs", "!font-bold", 3, "nzColor"], ["nzTitle", "C\u00F4ng ty", 3, "nzSpan"], ["nzTitle", "\u0110\u1ED9ng c\u01A1", 3, "nzSpan"], ["nzTitle", "Nhi\u00EAn li\u1EC7u", 3, "nzSpan"], ["nzTitle", "T\u1EA3i tr\u1ECDng", 3, "nzSpan"], ["nzTitle", "Gi\u00E1", 3, "nzSpan"], [1, "font-bold", "text-emerald-600"], ["nzTitle", "T\u1ED3n kho", 3, "nzSpan"], ["nzTitle", "T\u01B0\u01A1ng th\u00EDch", 3, "nzSpan"], ["nzTitle", "M\u00F4 t\u1EA3", 3, "nzSpan"], [1, "m-0", "text-sm", "text-slate-700", "whitespace-pre-wrap"], ["nzTitle", "Tr\u1EA1ng th\u00E1i", 3, "nzSpan"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-500"], [1, "rounded-lg", "bg-white", "p-4", "ring-1", "ring-slate-200"], ["class", "flex items-start gap-3 border-b border-slate-100 py-2 last:border-0", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-start", "gap-3", "border-b", "border-slate-100", "py-2", "last:border-0"], [1, "shrink-0", "rounded", "bg-amber-100", "px-2", "py-0.5", "font-mono", "text-xs", "text-amber-700"], [1, "text-sm", "text-slate-700", "break-all"]],
      template: function AgriculturalMachineAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 1)(1, "nz-page-header", 2)(2, "nz-page-header-extra")(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](5, "Th\u00EAm s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](6, "nz-card", 5)(7, "div", 6)(8, "div", 7)(9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayBindingSet"](ctx.searchDraft, $event) || (ctx.searchDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](10, "nz-select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_nz_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayBindingSet"](ctx.companyDraft, $event) || (ctx.companyDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](11, AgriculturalMachineAdminPageComponent_nz_option_11_Template, 1, 2, "nz-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](12, "nz-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_nz_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayBindingSet"](ctx.brandDraft, $event) || (ctx.brandDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](13, AgriculturalMachineAdminPageComponent_nz_option_13_Template, 1, 2, "nz-option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](14, "nz-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_nz_select_ngModelChange_14_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayBindingSet"](ctx.categoryDraft, $event) || (ctx.categoryDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](15, "nz-option", 13)(16, "nz-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](17, "nz-select", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayListener"]("ngModelChange", function AgriculturalMachineAdminPageComponent_Template_nz_select_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayBindingSet"](ctx.statusDraft, $event) || (ctx.statusDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](18, "nz-option", 16)(19, "nz-option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](20, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function AgriculturalMachineAdminPageComponent_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.applyFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](21, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](22, "T\u00ECm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](23, "div", 20)(24, "nz-tag", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](26, "nz-tag", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](28, "nz-tag", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](30, "nz-tag", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](32, "nz-table", 25, 0)(34, "thead")(35, "tr")(36, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](37, "STT");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](38, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](39, "\u1EA2nh");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](41, "S\u1EA3n ph\u1EA9m");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](42, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](43, "Lo\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](45, "H\u00E3ng / Model");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](46, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](47, "C\u00F4ng ty");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](48, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](49, "\u0110\u1ED9ng c\u01A1 / Nhi\u00EAn li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](50, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](51, "Gi\u00E1");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](52, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](53, "T\u1ED3n kho");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](54, "th", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](55, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](56, "th", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](57, "Thao t\u00E1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](58, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](59, AgriculturalMachineAdminPageComponent_tr_59_Template, 55, 26, "tr", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](60, AgriculturalMachineAdminPageComponent_div_60_Template, 2, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](61, "nz-modal", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("nzOnCancel", function AgriculturalMachineAdminPageComponent_Template_nz_modal_nzOnCancel_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function AgriculturalMachineAdminPageComponent_Template_nz_modal_nzOnOk_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](62, AgriculturalMachineAdminPageComponent_div_62_Template, 105, 12, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](63, "nz-modal", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("nzOnCancel", function AgriculturalMachineAdminPageComponent_Template_nz_modal_nzOnCancel_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.closeView());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](64, AgriculturalMachineAdminPageComponent_ng_container_64_Template, 2, 1, "ng-container", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const table_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵreference"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayProperty"]("ngModel", ctx.companyDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", ctx.companies());
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayProperty"]("ngModel", ctx.brandDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", ctx.brands());
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayProperty"]("ngModel", ctx.categoryDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzValue", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzValue", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtwoWayProperty"]("ngModel", ctx.statusDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" T\u1ED5ng: ", ctx.countAll(), " s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" \u0110ang b\u00E1n: ", ctx.countActive(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" H\u1EBFt h\u00E0ng: ", ctx.countSoldOut(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" S\u1EAFp h\u1EBFt: ", ctx.countLowStock(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 8)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", table_r10.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", !ctx.loading() && ctx.filteredRows().length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "Ch\u1EC9nh s\u1EEDa s\u1EA3n ph\u1EA9m m\u00E1y n\u00F4ng nghi\u1EC7p" : "Th\u00EAm s\u1EA3n ph\u1EA9m m\u00E1y n\u00F4ng nghi\u1EC7p m\u1EDBi")("nzOkLoading", ctx.saving());
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("nzVisible", ctx.viewOpen())("nzTitle", "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m m\u00E1y n\u00F4ng nghi\u1EC7p");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_30__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_31__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__.NzDescriptionsModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__.NzDescriptionsItemComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_7__.NzTrDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalContentDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_32__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_32__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__.NzInputNumberModule, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_11__.NzInputNumberComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__.NzTagComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_14__.NzSwitchComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_15__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_15__.NzPopconfirmComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_15__.NzPopconfirmDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_17__.NzPageHeaderExtraDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_18__.NzTooltipDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_19__.NzSpaceModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_20__.NzDividerComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_21__.NzEmptyModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_21__.NzEmptyComponent, _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_26__.MetadataEditorComponent, _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_27__.EntityImageManagerComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_28__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.KeyValuePipe],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_agricultural-machines_agricultural-machine-admin-page_component_ts.6497694475c7aa11.js.map