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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);








































const _c0 = () => ({
  x: "1100px"
});
function CompanyAdminPageComponent_tr_42_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinterpolate"](c_r3.name))("src", c_r3.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
  }
}
function CompanyAdminPageComponent_tr_42_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 45);
  }
}
function CompanyAdminPageComponent_tr_42_a_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", "mailto:" + c_r3.email, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", c_r3.email, " ");
  }
}
function CompanyAdminPageComponent_tr_42_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_42_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", "tel:" + c_r3.phoneNumber, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", c_r3.phoneNumber, " ");
  }
}
function CompanyAdminPageComponent_tr_42_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_42_a_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("href", c_r3.website, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind3"](3, 2, c_r3.website, 0, 30), " ");
  }
}
function CompanyAdminPageComponent_tr_42_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_42_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CompanyAdminPageComponent_tr_42_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleActive(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_42_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CompanyAdminPageComponent_tr_42_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleActive(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function CompanyAdminPageComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, CompanyAdminPageComponent_tr_42_img_3_Template, 1, 3, "img", 27)(4, CompanyAdminPageComponent_tr_42_i_4_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "td")(6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, CompanyAdminPageComponent_tr_42_a_12_Template, 2, 2, "a", 32)(13, CompanyAdminPageComponent_tr_42_span_13_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, CompanyAdminPageComponent_tr_42_a_15_Template, 2, 2, "a", 34)(16, CompanyAdminPageComponent_tr_42_span_16_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](18, CompanyAdminPageComponent_tr_42_a_18_Template, 4, 6, "a", 35)(19, CompanyAdminPageComponent_tr_42_span_19_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "td")(21, "nz-tag", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "td")(24, "div", 37)(25, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CompanyAdminPageComponent_tr_42_Template_button_click_25_listener() {
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.open(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](26, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](27, CompanyAdminPageComponent_tr_42_button_27_Template, 2, 0, "button", 40)(28, CompanyAdminPageComponent_tr_42_button_28_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("nzOnConfirm", function CompanyAdminPageComponent_tr_42_Template_button_nzOnConfirm_29_listener() {
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.remove(c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](30, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵclassProp"]("opacity-60", c_r3.isUsed === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", c_r3.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !c_r3.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](c_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"]("", c_r3.address || "Ch\u01B0a c\u1EADp nh\u1EADt \u0111\u1ECBa ch\u1EC9", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", c_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !c_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", c_r3.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !c_r3.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", c_r3.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !c_r3.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzColor", c_r3.isUsed === false ? "default" : "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", c_r3.isUsed === false ? "Ng\u1EEBng d\u00F9ng" : "\u0110ang ho\u1EA1t \u0111\u1ED9ng", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", c_r3.isUsed !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", c_r3.isUsed === false);
  }
}
function CompanyAdminPageComponent_div_44_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "nz-divider", 70)(2, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3, "\u1EA2nh & Th\u01B0 vi\u1EC7n");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "app-entity-image-manager", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("entityId", ctx_r3.editing().id);
  }
}
function CompanyAdminPageComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div")(1, "form", 55)(2, "div", 56)(3, "nz-form-item", 57)(4, "nz-form-label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "T\u00EAn c\u00F4ng ty");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "nz-form-control", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](7, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, "Email li\u00EAn h\u1EC7");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "nz-form-control", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "nz-form-item")(14, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](15, "\u0110i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](17, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "nz-form-item")(19, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Website");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](22, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "nz-form-item")(24, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](25, "Logo URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](27, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "nz-form-item", 57)(29, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "\u0110\u1ECBa ch\u1EC9");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](32, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "nz-form-item", 57)(34, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](35, "M\u00F4 t\u1EA3 / Gi\u1EDBi thi\u1EC7u ng\u1EAFn");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](37, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "nz-form-item")(39, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](40, "Tr\u1EA1ng th\u00E1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](42, "nz-switch", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "nz-divider", 70)(46, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](47, "Metadata b\u1ED5 sung");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "app-metadata-editor", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("valueChange", function CompanyAdminPageComponent_div_44_Template_app_metadata_editor_valueChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.metadata.set($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](49, CompanyAdminPageComponent_div_44_ng_container_49_Template, 5, 1, "ng-container", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ctx_r3.form.value.isUsed ? "C\u00F4ng ty \u0111ang ho\u1EA1t \u0111\u1ED9ng" : "\u0110\u00E3 ng\u1EEBng h\u1EE3p t\u00E1c", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("value", ctx_r3.metadata());
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r3.editing());
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
    this.statusFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('all', ...(ngDevMode ? [{
      debugName: "statusFilter"
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
  ngOnInit() {
    this.load();
  }
  filteredRows() {
    const q = this.search().trim().toLowerCase();
    return this.rows().filter(r => {
      const used = r.isUsed !== false;
      if (this.statusFilter() === 'active' && !used) return false;
      if (this.statusFilter() === 'inactive' && used) return false;
      if (!q) return true;
      return [r.name, r.email, r.phoneNumber, r.website, r.address].join(' ').toLowerCase().includes(q);
    });
  }
  load() {
    this.loading.set(true);
    this.service.getCompanies().subscribe({
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
        this.load();
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
        this.load();
      },
      error: e => this.msg.error(e?.error?.message || 'Thao tác thất bại')
    });
  }
  remove(record) {
    this.service.remove(record.id).subscribe({
      next: () => {
        this.msg.success('Đã xóa công ty');
        this.load();
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
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
      type: CompanyAdminPageComponent,
      selectors: [["app-company-admin-page"]],
      decls: 45,
      vars: 13,
      consts: [["table", ""], [1, "mx-auto", "max-w-[1600px]", "space-y-5"], ["nzTitle", "C\u00F4ng ty", "nzSubtitle", "Qu\u1EA3n l\u00FD \u0111\u1ED1i t\u00E1c, nh\u00E0 cung c\u1EA5p v\u00E0 nh\u00E0 s\u1EA3n xu\u1EA5t", 1, "!rounded-2xl", "!bg-white", "!shadow-sm", "!border", "!border-slate-100"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!rounded-xl", "!h-10", "!px-5", "!font-semibold", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-2xl", "!shadow-sm"], [1, "mb-5", "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-end"], [1, "md:col-span-6", "relative"], [1, "fa", "fa-search", "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["nz-input", "", "placeholder", "T\u00ECm theo t\u00EAn, email, s\u1ED1 \u0111i\u1EC7n tho\u1EA1i, website, \u0111\u1ECBa ch\u1EC9...", "name", "company-search", 1, "!h-11", "!rounded-xl", "!pl-11", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "L\u1ECDc theo tr\u1EA1ng th\u00E1i", "nzSize", "large", 1, "md:col-span-4", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "all", "nzLabel", "\uD83D\uDCCB T\u1EA5t c\u1EA3 tr\u1EA1ng th\u00E1i"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang ho\u1EA1t \u0111\u1ED9ng"], ["nzValue", "inactive", "nzLabel", "\u26D4 \u0110\u00E3 v\u00F4 hi\u1EC7u h\u00F3a (IsUsed = false)"], ["nz-button", "", "type", "button", "nzSize", "large", 1, "md:col-span-2", 3, "click"], [1, "fa", "fa-refresh", "mr-1"], [1, "mb-4", "flex", "flex-wrap", "gap-2"], ["nzColor", "blue", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "green", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzSize", "middle", 3, "nzData", "nzLoading", "nzPageSize", "nzScroll"], ["nzWidth", "90px"], ["nzWidth", "120px"], ["nzWidth", "220px", 1, "text-right"], [3, "opacity-60", 4, "ngFor", "ngForOf"], ["nzOkText", "L\u01B0u l\u1EA1i", "nzCancelText", "H\u1EE7y", "nzWidth", "880px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-slate-50", "ring-1", "ring-slate-200"], ["class", "h-10 w-10 object-contain", 3, "src", "alt", 4, "ngIf"], ["class", "fa fa-building text-xl text-slate-400", 4, "ngIf"], [1, "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "fa", "fa-map-marker", "mr-1"], ["class", "text-sky-700", 3, "href", 4, "ngIf"], ["class", "text-slate-400", 4, "ngIf"], ["class", "text-slate-700", 3, "href", 4, "ngIf"], ["class", "text-sky-700", "target", "_blank", "rel", "noopener noreferrer", 3, "href", 4, "ngIf"], [1, "!rounded-full", "!px-3", "!py-1", "!text-xs", "!font-bold", 3, "nzColor"], [1, "flex", "justify-end", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ch\u1EC9nh s\u1EEDa", 3, "click"], [1, "fa", "fa-pencil"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng s\u1EED d\u1EE5ng", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "K\u00EDch ho\u1EA1t l\u1EA1i", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "nzDanger", "", "type", "button", "nz-popconfirm", "", "nzPopconfirmTitle", "X\u00F3a v\u0129nh vi\u1EC5n c\u00F4ng ty n\u00E0y?", "nzPopconfirmOkText", "X\u00F3a", "nzPopconfirmCancelText", "H\u1EE7y", "nzOkDanger", "", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", 3, "nzOnConfirm"], [1, "fa", "fa-trash"], [1, "h-10", "w-10", "object-contain", 3, "src", "alt"], [1, "fa", "fa-building", "text-xl", "text-slate-400"], [1, "text-sky-700", 3, "href"], [1, "text-slate-400"], [1, "text-slate-700", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "text-sky-700", 3, "href"], [1, "fa", "fa-external-link", "mr-1", "text-xs"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Ng\u1EEBng s\u1EED d\u1EE5ng", 3, "click"], [1, "fa", "fa-lock"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "K\u00EDch ho\u1EA1t l\u1EA1i", 3, "click"], [1, "fa", "fa-unlock"], ["nz-form", "", "nzLayout", "vertical", 1, "space-y-3", 3, "formGroup"], [1, "grid", "gap-x-5", "md:grid-cols-2"], [1, "md:col-span-2"], ["nzRequired", ""], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp t\u00EAn c\u00F4ng ty"], ["nz-input", "", "formControlName", "name", "placeholder", "VD: C\u00F4ng ty TNHH ABC"], ["nzErrorTip", "Email kh\u00F4ng h\u1EE3p l\u1EC7"], ["nz-input", "", "type", "email", "formControlName", "email", "placeholder", "contact@company.com"], ["nz-input", "", "formControlName", "phoneNumber", "placeholder", "+84 123 456 789"], ["nz-input", "", "formControlName", "website", "placeholder", "https://company.com"], ["nz-input", "", "formControlName", "logoUrl", "placeholder", "https://.../logo.png"], ["nz-input", "", "formControlName", "address", "placeholder", "S\u1ED1 nh\u00E0, \u0111\u01B0\u1EDDng, ph\u01B0\u1EDDng/x\u00E3, qu\u1EADn/huy\u1EC7n, t\u1EC9nh/th\u00E0nh"], ["nz-input", "", "formControlName", "description", "rows", "3", "placeholder", "Th\u00F4ng tin m\u00F4 t\u1EA3 v\u1EC1 c\u00F4ng ty..."], ["formControlName", "isUsed", "nzCheckedChildren", "B\u1EADt", "nzUnCheckedChildren", "T\u1EAFt"], [1, "ml-3", "text-xs", "text-slate-500"], [1, "!my-4"], [1, "font-bold"], [3, "valueChange", "value"], [4, "ngIf"], ["entityType", "Company", 3, "entityId"]],
      template: function CompanyAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 1)(1, "nz-page-header", 2)(2, "nz-page-header-extra")(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CompanyAdminPageComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Th\u00EAm c\u00F4ng ty ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "nz-card", 5)(7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CompanyAdminPageComponent_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx.search, $event) || (ctx.search = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "nz-select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayListener"]("ngModelChange", function CompanyAdminPageComponent_Template_nz_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayBindingSet"](ctx.statusFilter, $event) || (ctx.statusFilter = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "nz-option", 11)(13, "nz-option", 12)(14, "nz-option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function CompanyAdminPageComponent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            ctx.search.set("");
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.statusFilter.set("all"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](16, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, "\u0110\u1EB7t l\u1EA1i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 16)(19, "nz-tag", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "nz-tag", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "nz-table", 19, 0)(25, "thead")(26, "tr")(27, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](28, "Logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](30, "C\u00F4ng ty");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](32, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](34, "\u0110i\u1EC7n tho\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](36, "Website");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](40, "Thao t\u00E1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](42, CompanyAdminPageComponent_tr_42_Template, 31, 16, "tr", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "nz-modal", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("nzOnCancel", function CompanyAdminPageComponent_Template_nz_modal_nzOnCancel_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function CompanyAdminPageComponent_Template_nz_modal_nzOnOk_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](44, CompanyAdminPageComponent_div_44_Template, 50, 4, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const table_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵreference"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtwoWayProperty"]("ngModel", ctx.statusFilter);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" T\u1ED5ng s\u1ED1: ", ctx.rows().length, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" \u0110ang d\u00F9ng: ", ctx.countActive(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 10)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](12, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", table_r8.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "Ch\u1EC9nh s\u1EEDa c\u00F4ng ty" : "Th\u00EAm c\u00F4ng ty m\u1EDBi")("nzOkLoading", ctx.saving());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTrDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalContentDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_24__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__.NzTagComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__.NzSwitchComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_12__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_12__.NzPopconfirmDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderExtraDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__.NzSpaceModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__.NzDividerComponent, _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_19__.MetadataEditorComponent, _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_20__.EntityImageManagerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe],
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
//# sourceMappingURL=src_app_admin_companies_company-admin-page_component_ts.0dbb38080559823c.js.map