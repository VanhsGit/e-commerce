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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/table */ 8636);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1663);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 1034);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/switch */ 8792);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 9655);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 5853);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/space */ 3378);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/divider */ 3987);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/company.service */ 17);
/* harmony import */ var _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/metadata-editor/metadata-editor.component */ 4264);
/* harmony import */ var _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/entity-image-manager/entity-image-manager.component */ 6112);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);









































const _c0 = () => ({
  x: "1100px"
});
function CompanyAdminPageComponent_tr_40_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "img", 43);
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinterpolate"](c_r3.name))("src", c_r3.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function CompanyAdminPageComponent_tr_40_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "i", 44);
  }
}
function CompanyAdminPageComponent_tr_40_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("href", "mailto:" + c_r3.email, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", c_r3.email, " ");
  }
}
function CompanyAdminPageComponent_tr_40_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_40_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("href", "tel:" + c_r3.phoneNumber, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", c_r3.phoneNumber, " ");
  }
}
function CompanyAdminPageComponent_tr_40_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_40_a_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("href", c_r3.website, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind3"](3, 2, c_r3.website, 0, 30), " ");
  }
}
function CompanyAdminPageComponent_tr_40_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_40_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function CompanyAdminPageComponent_tr_40_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleActive(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_40_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function CompanyAdminPageComponent_tr_40_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleActive(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, CompanyAdminPageComponent_tr_40_img_3_Template, 1, 3, "img", 25)(4, CompanyAdminPageComponent_tr_40_i_4_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "td")(6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](9, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](12, CompanyAdminPageComponent_tr_40_a_12_Template, 2, 2, "a", 30)(13, CompanyAdminPageComponent_tr_40_span_13_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](15, CompanyAdminPageComponent_tr_40_a_15_Template, 2, 2, "a", 32)(16, CompanyAdminPageComponent_tr_40_span_16_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](18, CompanyAdminPageComponent_tr_40_a_18_Template, 4, 6, "a", 33)(19, CompanyAdminPageComponent_tr_40_span_19_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "td")(21, "nz-tag", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "td")(24, "div", 35)(25, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function CompanyAdminPageComponent_tr_40_Template_button_click_25_listener() {
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.open(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](26, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](27, CompanyAdminPageComponent_tr_40_button_27_Template, 2, 0, "button", 38)(28, CompanyAdminPageComponent_tr_40_button_28_Template, 2, 0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "nz-popconfirm", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("nzOnConfirm", function CompanyAdminPageComponent_tr_40_Template_nz_popconfirm_nzOnConfirm_29_listener() {
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.remove(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](31, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("opacity-60", c_r3.isUsed === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", c_r3.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !c_r3.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](c_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"]("", c_r3.address || "Ch\u01B0a c\u1EADp nh\u1EADt \u0111\u1ECBa ch\u1EC9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", c_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !c_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", c_r3.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !c_r3.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", c_r3.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !c_r3.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzColor", c_r3.isUsed === false ? "default" : "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", c_r3.isUsed === false ? "Ng\u1EEBng d\u00F9ng" : "\u0110ang ho\u1EA1t \u0111\u1ED9ng", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", c_r3.isUsed !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", c_r3.isUsed === false);
  }
}
function CompanyAdminPageComponent_ng_container_42_img_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "img", 87);
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", (tmp_3_0 = ctx_r3.form.get("logoUrl")) == null ? null : tmp_3_0.value, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function CompanyAdminPageComponent_ng_container_42_i_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "i", 88);
  }
}
function CompanyAdminPageComponent_ng_container_42_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "nz-divider", 67)(2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](3, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Th\u01B0 vi\u1EC7n \u1EA3nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "app-entity-image-manager", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzPlain", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("entityId", ctx_r3.editing().id);
  }
}
function CompanyAdminPageComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "form", 54)(2, "div", 55)(3, "div", 56)(4, "nz-form-item")(5, "nz-form-label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, "T\u00EAn c\u00F4ng ty");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "nz-form-control", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "M\u00F4 t\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "nz-form-control", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "textarea", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 61)(15, "nz-form-item", 62)(16, "nz-form-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17, "Email li\u00EAn h\u1EC7");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "nz-form-control", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](19, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "nz-form-item", 62)(21, "nz-form-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](22, "\u0110i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "nz-form-control", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](24, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](25, "nz-form-item")(26, "nz-form-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](27, "\u0110\u1ECBa ch\u1EC9");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "nz-form-control", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](29, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "nz-form-item")(31, "nz-form-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "nz-form-control", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](34, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "nz-divider", 67)(36, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](37, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38, "Metadata & Tr\u1EA1ng th\u00E1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "app-metadata-editor", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("valueChange", function CompanyAdminPageComponent_ng_container_42_Template_app_metadata_editor_valueChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.metadata.set($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "nz-form-item")(41, "nz-form-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](42, "Tr\u1EA1ng th\u00E1i s\u1EED d\u1EE5ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](43, "nz-form-control", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](44, "nz-switch", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](45, "div", 72)(46, "nz-form-item", 62)(47, "nz-form-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](48, "Logo URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](49, "nz-form-control", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](50, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](51, "div", 74)(52, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](53, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](54, "Xem tr\u01B0\u1EDBc logo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](55, "div", 77)(56, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](57, CompanyAdminPageComponent_ng_container_42_img_57_Template, 1, 1, "img", 79)(58, CompanyAdminPageComponent_ng_container_42_i_58_Template, 1, 0, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](59, "div", 81)(60, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](62, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](64, "div", 84)(65, "nz-tag", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](67, CompanyAdminPageComponent_ng_container_42_div_67_Template, 6, 2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_21_0;
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzPlain", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r3.metadata());
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx_r3.form.get("logoUrl")) == null ? null : tmp_21_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !((tmp_22_0 = ctx_r3.form.get("logoUrl")) == null ? null : tmp_22_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ((tmp_23_0 = ctx_r3.form.get("name")) == null ? null : tmp_23_0.value) || "T\u00EAn c\u00F4ng ty", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ((tmp_24_0 = ctx_r3.form.get("website")) == null ? null : tmp_24_0.value) || "www.example.com", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzColor", ((tmp_25_0 = ctx_r3.form.get("isUsed")) == null ? null : tmp_25_0.value) ? "green" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ((tmp_26_0 = ctx_r3.form.get("isUsed")) == null ? null : tmp_26_0.value) ? "\u0110ang ho\u1EA1t \u0111\u1ED9ng" : "Ng\u1EEBng d\u00F9ng", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r3.editing());
  }
}
class CompanyAdminPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.msg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__.NzMessageService);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_company_service__WEBPACK_IMPORTED_MODULE_18__.CompanyService);
    this.rows = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "rows"
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
    this.statusFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "statusFilter"
    }] : []));
    this.searchDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('', ...(ngDevMode ? [{
      debugName: "searchDraft"
    }] : []));
    this.statusDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(null, ...(ngDevMode ? [{
      debugName: "statusDraft"
    }] : []));
    this.form = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      description: [''],
      logoUrl: [''],
      address: [''],
      phoneNumber: [''],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      website: [''],
      isUsed: [true]
    });
  }
  applyFilters() {
    this.search.set(this.searchDraft().trim());
    this.statusFilter.set(this.statusDraft() ?? null);
    const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
    this.load({
      search: this.search(),
      isUsed: isUsedParam
    });
  }
  ngOnInit() {
    this.load();
  }
  load(params) {
    this.loading.set(true);
    this.service.getCompanies(params).subscribe({
      next: v => this.rows.set(v),
      error: () => this.msg.error('Không tải được danh sách công ty'),
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
      description: record?.description ?? '',
      logoUrl: record?.logoUrl ?? '',
      address: record?.address ?? '',
      phoneNumber: record?.phoneNumber ?? '',
      email: record?.email ?? '',
      website: record?.website ?? '',
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
    const payload = {
      name: raw.name,
      description: raw.description,
      logoUrl: raw.logoUrl,
      address: raw.address,
      phoneNumber: raw.phoneNumber,
      email: raw.email,
      website: raw.website,
      metadata: this.metadata(),
      isUsed: raw.isUsed
    };
    this.saving.set(true);
    const req$ = this.editing() ? this.service.update(this.editing().id, payload) : this.service.create(payload);
    req$.subscribe({
      next: () => {
        this.msg.success(this.editing() ? 'Đã cập nhật công ty' : 'Đã tạo công ty');
        this.close();
        const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
        this.load({
          search: this.search(),
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
      name: record.name,
      description: record.description,
      logoUrl: record.logoUrl,
      address: record.address,
      phoneNumber: record.phoneNumber,
      email: record.email,
      website: record.website,
      metadata: record.metadata,
      isUsed: next
    };
    this.service.update(record.id, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã ngừng sử dụng');
        const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
        this.load({
          search: this.search(),
          isUsed: isUsedParam
        });
      },
      error: e => this.msg.error(e?.error?.message || 'Thao tác thất bại')
    });
  }
  remove(record) {
    this.service.remove(record.id).subscribe({
      next: () => {
        this.msg.success('Đã xóa công ty');
        const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
        this.load({
          search: this.search(),
          isUsed: isUsedParam
        });
      },
      error: e => this.msg.error(e?.error?.message || 'Xóa thất bại')
    });
  }
  countActive() {
    return this.rows().filter(r => r.isUsed !== false).length;
  }
  static {
    this.ɵfac = function CompanyAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompanyAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
      type: CompanyAdminPageComponent,
      selectors: [["app-company-admin-page"]],
      decls: 43,
      vars: 13,
      consts: [["table", ""], [1, "mx-auto", "max-w-[1600px]", "space-y-5"], ["nzTitle", "C\u00F4ng ty", "nzSubtitle", "Qu\u1EA3n l\u00FD \u0111\u1ED1i t\u00E1c, nh\u00E0 cung c\u1EA5p v\u00E0 nh\u00E0 s\u1EA3n xu\u1EA5t", 1, "!rounded-lg", "!bg-white", "!shadow-sm", "!border", "!border-slate-100"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!rounded-xl", "!h-10", "!px-5", "!font-semibold", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-lg", "!shadow-sm"], [1, "mb-5", "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-center"], [1, "md:col-span-6"], ["nz-input", "", "nzBorderless", "", "placeholder", "T\u00ECm theo t\u00EAn, email, s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, website, \u0111\u1ECBa ch\u1EC9...", "name", "company-search", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", "!px-4", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "Tr\u1EA1ng th\u00E1i  ", "nzSize", "large", "nzBorderless", "", "nzAllowClear", "", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang ho\u1EA1t \u0111\u1ED9ng"], ["nzValue", "inactive", "nzLabel", "\u26D4 \u0110\u00E3 v\u00F4 hi\u1EC7u h\u00F3a (IsUsed = false)"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-[44px]", "!rounded-xl", "!font-semibold", "!w-full", 3, "click"], [1, "fa", "fa-search", "mr-2"], [1, "mb-4", "flex", "flex-wrap", "gap-2"], ["nzColor", "blue", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "green", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzSize", "middle", 3, "nzData", "nzLoading", "nzPageSize", "nzScroll"], ["nzWidth", "90px"], ["nzWidth", "120px"], ["nzWidth", "220px", 1, "text-right"], [3, "opacity-60", 4, "ngFor", "ngForOf"], ["nzWidth", "980px", "nzOkText", "L\u01B0u", "nzCancelText", "H\u1EE7y", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-slate-50", "ring-1", "ring-slate-200"], ["class", "h-10 w-10 object-contain", 3, "src", "alt", 4, "ngIf"], ["class", "fa fa-building text-xl text-slate-400", 4, "ngIf"], [1, "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "fa", "fa-map-marker", "mr-1"], ["class", "text-sky-700", 3, "href", 4, "ngIf"], ["class", "text-slate-400", 4, "ngIf"], ["class", "text-slate-700", 3, "href", 4, "ngIf"], ["class", "text-sky-700", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], [1, "!rounded-full", "!px-3", "!py-1", "!text-xs", "!font-bold", 3, "nzColor"], [1, "flex", "justify-end", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ch\u1EC9nh s\u1EEDa", 3, "click"], [1, "fa", "fa-pencil"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng d\u00F9ng", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "K\u00EDch ho\u1EA1t", 3, "click", 4, "ngIf"], ["nzTitle", "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a c\u00F4ng ty n\u00E0y kh\u00F4ng?", "nzPopconfirmType", "danger", 3, "nzOnConfirm"], ["nz-button", "", "nzSize", "small", "nzType", "text", "nzDanger", "", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", "nz-popconfirm", ""], [1, "fa", "fa-trash"], [1, "h-10", "w-10", "object-contain", 3, "src", "alt"], [1, "fa", "fa-building", "text-xl", "text-slate-400"], [1, "text-sky-700", 3, "href"], [1, "text-slate-400"], [1, "text-slate-700", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-sky-700", 3, "href"], [1, "fa", "fa-external-link", "mr-1", "text-xs"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng d\u00F9ng", 3, "click"], [1, "fa", "fa-eye-slash"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "K\u00EDch ho\u1EA1t", 3, "click"], [1, "fa", "fa-eye"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup"], [1, "grid", "grid-cols-12", "gap-5"], [1, "col-span-12", "lg:col-span-8", "space-y-4"], ["nzRequired", "", 3, "nzSpan"], [3, "nzSpan"], ["nz-input", "", "formControlName", "name", "placeholder", "V\u00ED d\u1EE5: C\u00F4ng ty TNHH A", 1, "!h-11", "!rounded-xl"], ["rows", "3", "nz-input", "", "formControlName", "description", "placeholder", "M\u00F4 t\u1EA3 ng\u1EAFn v\u1EC1 c\u00F4ng ty...", 1, "!rounded-xl", "!resize-y"], [1, "grid", "grid-cols-2", "gap-4"], [1, "!mb-0"], ["type", "email", "nz-input", "", "formControlName", "email", "placeholder", "contact@example.com", 1, "!h-11", "!rounded-xl"], ["nz-input", "", "formControlName", "phoneNumber", "placeholder", "+84...", 1, "!h-11", "!rounded-xl"], ["nz-input", "", "formControlName", "address", "placeholder", "S\u1ED1 nh\u00E0, \u0111\u01B0\u1EDDng, ph\u01B0\u1EDDng/x\u00E3, qu\u1EADn/huy\u1EC7n, t\u1EC9nh/th\u00E0nh ph\u1ED1", 1, "!h-11", "!rounded-xl"], ["nz-input", "", "formControlName", "website", "placeholder", "https://...", 1, "!h-11", "!rounded-xl"], ["nzOrientation", "left", 3, "nzPlain"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-sky-600"], [1, "fa", "fa-cog", "mr-2"], [3, "valueChange", "value"], ["formControlName", "isUsed", "nzCheckedChildren", "\u0110ANG D\u00D9NG", "nzUnCheckedChildren", "NG\u1EEANG"], [1, "col-span-12", "lg:col-span-4", "space-y-4"], ["nz-input", "", "formControlName", "logoUrl", "placeholder", "https://...", 1, "!h-11", "!rounded-xl"], [1, "rounded-2xl", "border", "border-slate-200", "bg-gradient-to-br", "from-sky-50", "via-white", "to-indigo-50", "p-5"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-sky-600"], [1, "fa", "fa-building", "mr-2"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "flex", "h-28", "w-28", "items-center", "justify-center", "overflow-hidden", "rounded-2xl", "bg-white", "shadow-md", "ring-1", "ring-slate-200"], ["class", "h-24 w-24 object-contain", "alt", "logo preview", 3, "src", 4, "ngIf"], ["class", "fa fa-building text-5xl text-slate-300", 4, "ngIf"], [1, "text-center"], [1, "text-lg", "font-bold", "text-slate-800"], [1, "mt-1", "text-xs", "text-slate-500"], [1, "mt-2"], [1, "!rounded-full", "!px-3", 3, "nzColor"], [4, "ngIf"], ["alt", "logo preview", 1, "h-24", "w-24", "object-contain", 3, "src"], [1, "fa", "fa-building", "text-5xl", "text-slate-300"], [1, "fa", "fa-picture-o", "mr-2"], ["entityType", "company", 3, "entityId"]],
      template: function CompanyAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 1)(1, "nz-page-header", 2)(2, "nz-page-header-extra")(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function CompanyAdminPageComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Th\u00EAm c\u00F4ng ty ");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "nz-card", 5)(7, "div", 6)(8, "div", 7)(9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function CompanyAdminPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.searchDraft, $event) || (ctx.searchDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "nz-select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function CompanyAdminPageComponent_Template_nz_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.statusDraft, $event) || (ctx.statusDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "nz-option", 10)(12, "nz-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function CompanyAdminPageComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.applyFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](14, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15, "T\u00ECm ki\u1EBFm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 14)(17, "nz-tag", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "nz-tag", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "nz-table", 17, 0)(23, "thead")(24, "tr")(25, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](26, "Logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28, "C\u00F4ng ty");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](30, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32, "\u0110i\u1EC7n tho\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](34, "Website");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](36, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38, "Thao t\u00E1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](40, CompanyAdminPageComponent_tr_40_Template, 32, 16, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](41, "nz-modal", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("nzOnCancel", function CompanyAdminPageComponent_Template_nz_modal_nzOnCancel_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function CompanyAdminPageComponent_Template_nz_modal_nzOnOk_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](42, CompanyAdminPageComponent_ng_container_42_Template, 68, 26, "ng-container", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const table_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.statusDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" T\u1ED5ng s\u1ED1: ", ctx.rows().length, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" \u0110ang d\u00F9ng: ", ctx.countActive(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 10)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", table_r8.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "Ch\u1EC9nh s\u1EEDa c\u00F4ng ty" : "Th\u00EAm c\u00F4ng ty m\u1EDBi")("nzOkLoading", ctx.saving());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTrDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalContentDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__.NzTagComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__.NzSwitchComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_12__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_12__.NzPopconfirmComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_12__.NzPopconfirmDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderExtraDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__.NzSpaceModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__.NzDividerComponent, _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_19__.MetadataEditorComponent, _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_20__.EntityImageManagerComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_21__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 4264
/*!***************************************************************************!*\
  !*** ./src/app/admin/shared/metadata-editor/metadata-editor.component.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataEditorComponent: () => (/* binding */ MetadataEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);












function MetadataEditorComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MetadataEditorComponent_div_1_Template_input_ngModelChange_1_listener($event) {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](row_r2.key, $event) || (row_r2.key = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MetadataEditorComponent_div_1_Template_input_ngModelChange_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MetadataEditorComponent_div_1_Template_input_ngModelChange_2_listener($event) {
      const row_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](row_r2.value, $event) || (row_r2.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MetadataEditorComponent_div_1_Template_input_ngModelChange_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.emit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MetadataEditorComponent_div_1_Template_button_click_3_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.remove(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "X\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", row_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", row_r2.value);
  }
}
function MetadataEditorComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Metadata kh\u00F4ng \u0111\u01B0\u1EE3c tr\u00F9ng key.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class MetadataEditorComponent {
  constructor() {
    this.value = {};
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.rows = [];
    this.duplicateKeys = false;
  }
  ngOnChanges() {
    this.rows = Object.entries(this.value || {}).map(([key, value]) => ({
      key,
      value: String(value ?? '')
    }));
  }
  add() {
    this.rows.push({
      key: '',
      value: ''
    });
  }
  remove(index) {
    this.rows.splice(index, 1);
    this.emit();
  }
  emit() {
    const cleaned = this.rows.map(row => ({
      key: row.key.trim(),
      value: String(row.value ?? '')
    })).filter(row => row.key);
    this.duplicateKeys = new Set(cleaned.map(row => row.key)).size !== cleaned.length;
    if (!this.duplicateKeys) {
      const metadata = {};
      for (const row of cleaned) metadata[row.key] = row.value;
      this.valueChange.emit(metadata);
    }
  }
  static {
    this.ɵfac = function MetadataEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MetadataEditorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MetadataEditorComponent,
      selectors: [["app-metadata-editor"]],
      inputs: {
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 2,
      consts: [[1, "space-y-2", "rounded-lg", "border", "border-slate-200", "bg-slate-50", "p-3"], ["class", "grid grid-cols-[1fr_1fr_auto] gap-2", 4, "ngFor", "ngForOf"], ["class", "text-sm text-red-600", 4, "ngIf"], ["nz-button", "", "type", "button", 3, "click"], [1, "grid", "grid-cols-[1fr_1fr_auto]", "gap-2"], ["nz-input", "", "placeholder", "Key", 3, "ngModelChange", "ngModel"], ["nz-input", "", "placeholder", "Value", 3, "ngModelChange", "ngModel"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "text-sm", "text-red-600"]],
      template: function MetadataEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MetadataEditorComponent_div_1_Template, 5, 2, "div", 1)(2, MetadataEditorComponent_p_2_Template, 2, 0, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MetadataEditorComponent_Template_button_click_3_listener() {
            return ctx.add();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "+ Th\u00EAm metadata");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.duplicateKeys);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_companies_company-admin-page_component_ts.c953dce0879d28cd.js.map