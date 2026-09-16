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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 5457);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/table */ 8636);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1663);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ 1034);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/switch */ 8792);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 9655);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 5853);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/space */ 3378);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/divider */ 3987);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/brand.service */ 899);
/* harmony import */ var _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/metadata-editor/metadata-editor.component */ 4264);
/* harmony import */ var _shared_representative_image_picker_representative_image_picker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/representative-image-picker/representative-image-picker.component */ 5212);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);











































const _c0 = () => ({
  x: "1050px"
});
function BrandAdminPageComponent_tr_38_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "img", 44);
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("src", b_r3.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeUrl"])("alt", b_r3.name);
  }
}
function BrandAdminPageComponent_tr_38_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}
function BrandAdminPageComponent_tr_38_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", b_r3.description, " ");
  }
}
function BrandAdminPageComponent_tr_38_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 m\u00F4 t\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}
function BrandAdminPageComponent_tr_38_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function BrandAdminPageComponent_tr_38_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleActive(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}
function BrandAdminPageComponent_tr_38_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function BrandAdminPageComponent_tr_38_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleActive(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}
function BrandAdminPageComponent_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, BrandAdminPageComponent_tr_38_img_4_Template, 1, 2, "img", 27)(5, BrandAdminPageComponent_tr_38_div_5_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "td")(7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](12, BrandAdminPageComponent_tr_38_p_12_Template, 2, 1, "p", 31)(13, BrandAdminPageComponent_tr_38_span_13_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](14, "td")(15, "nz-tag", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](17, "td")(18, "div", 34)(19, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function BrandAdminPageComponent_tr_38_Template_button_click_19_listener() {
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.viewDetail(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](20, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](21, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function BrandAdminPageComponent_tr_38_Template_button_click_21_listener() {
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.open(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](22, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](23, BrandAdminPageComponent_tr_38_button_23_Template, 2, 0, "button", 39)(24, BrandAdminPageComponent_tr_38_button_24_Template, 2, 0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](25, "nz-popconfirm", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("nzOnConfirm", function BrandAdminPageComponent_tr_38_Template_nz_popconfirm_nzOnConfirm_25_listener() {
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.remove(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](26, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](27, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    const table_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵclassProp"]("opacity-60", b_r3.isUsed === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", (table_r8.nzPageIndex - 1) * table_r8.nzPageSize + i_r7 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", b_r3.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !b_r3.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](b_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" Brand ID: #", b_r3.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", b_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !b_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzColor", b_r3.isUsed === false ? "default" : "purple");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", b_r3.isUsed === false ? "\u1EA8n" : "Hi\u1EC3n th\u1ECB", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", b_r3.isUsed !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", b_r3.isUsed === false);
  }
}
function BrandAdminPageComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div")(1, "form", 52)(2, "div", 53)(3, "div", 54)(4, "nz-form-item")(5, "nz-form-label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](6, "T\u00EAn th\u01B0\u01A1ng hi\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](7, "nz-form-control", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](8, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](11, "M\u00F4 t\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](12, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](13, "textarea", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](14, "nz-form-item")(15, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](16, "Tr\u1EA1ng th\u00E1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](17, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](18, "nz-switch", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](19, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](21, "div")(22, "app-representative-image-picker", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("valueChange", function BrandAdminPageComponent_div_40_Template_app_representative_image_picker_valueChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.form.controls.logoUrl.setValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](23, "nz-divider", 62)(24, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](25, "Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](26, "app-metadata-editor", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("valueChange", function BrandAdminPageComponent_div_40_Template_app_metadata_editor_valueChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.metadata.set($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", ctx_r3.form.value.isUsed ? "Th\u01B0\u01A1ng hi\u1EC7u \u0111ang hi\u1EC3n th\u1ECB tr\u00EAn h\u1EC7 th\u1ED1ng" : "Th\u01B0\u01A1ng hi\u1EC7u \u0111\u00E3 b\u1ECB \u1EA9n kh\u1ECFi danh s\u00E1ch", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("value", ctx_r3.form.controls.logoUrl.value || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("value", ctx_r3.metadata());
  }
}
function BrandAdminPageComponent_ng_container_42_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const v_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵinterpolate"](v_r10.name))("src", v_r10.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeUrl"]);
  }
}
function BrandAdminPageComponent_ng_container_42_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "i", 89);
  }
}
function BrandAdminPageComponent_ng_container_42_div_1_a_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("href", v_r10.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", v_r10.logoUrl, " ");
  }
}
function BrandAdminPageComponent_ng_container_42_div_1_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}
function BrandAdminPageComponent_ng_container_42_div_1_div_29_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 95)(1, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kv_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](kv_r11.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](kv_r11.value);
  }
}
function BrandAdminPageComponent_ng_container_42_div_1_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div")(1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](2, " Metadata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, BrandAdminPageComponent_ng_container_42_div_1_div_29_div_4_Template, 5, 2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const v_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 2, v_r10.metadata))("ngForTrackBy", ctx_r3.trackByKey);
  }
}
function BrandAdminPageComponent_ng_container_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 66)(1, "div", 67)(2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, BrandAdminPageComponent_ng_container_42_div_1_img_3_Template, 1, 3, "img", 69)(4, BrandAdminPageComponent_ng_container_42_div_1_i_4_Template, 1, 0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](5, "div", 71)(6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "div", 73)(9, "nz-tag", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](11, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](13, "nz-descriptions", 76)(14, "nz-descriptions-item", 77)(15, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](17, "nz-descriptions-item", 79)(18, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](20, "nz-descriptions-item", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](21, BrandAdminPageComponent_ng_container_42_div_1_a_21_Template, 2, 2, "a", 82)(22, BrandAdminPageComponent_ng_container_42_div_1_span_22_Template, 2, 0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](23, "nz-descriptions-item", 84)(24, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](26, "nz-descriptions-item", 86)(27, "nz-tag", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](29, BrandAdminPageComponent_ng_container_42_div_1_div_29_Template, 6, 4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r10 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", v_r10.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !v_r10.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](v_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzColor", v_r10.isUsed === false ? "default" : "purple");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", v_r10.isUsed === false ? "\u1EA8n" : "Hi\u1EC3n th\u1ECB", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ID: ", v_r10.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](v_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](v_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", v_r10.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !v_r10.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", v_r10.description || "Ch\u01B0a c\u00F3 m\u00F4 t\u1EA3", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzColor", v_r10.isUsed === false ? "default" : "purple");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", v_r10.isUsed === false ? "\u0110\u00E3 \u1EA9n" : "\u0110ang hi\u1EC3n th\u1ECB", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r3.metadataKeysLength(v_r10.metadata) > 0);
  }
}
function BrandAdminPageComponent_ng_container_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, BrandAdminPageComponent_ng_container_42_div_1_Template, 30, 20, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r3.viewing());
  }
}
class BrandAdminPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.msg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_14__.NzMessageService);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_brand_service__WEBPACK_IMPORTED_MODULE_19__.BrandService);
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
    this.service.getBrands(params).subscribe({
      next: v => this.rows.set(v),
      error: () => this.msg.error('Không tải được thương hiệu'),
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
      metadata: this.metadata(),
      isUsed: raw.isUsed
    };
    this.saving.set(true);
    const req$ = this.editing() ? this.service.update(this.editing().id, payload) : this.service.create(payload);
    req$.subscribe({
      next: () => {
        this.msg.success(this.editing() ? 'Đã cập nhật thương hiệu' : 'Đã tạo thương hiệu');
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
        this.msg.success('Đã xóa thương hiệu');
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
    this.ɵfac = function BrandAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrandAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({
      type: BrandAdminPageComponent,
      selectors: [["app-brand-admin-page"]],
      decls: 43,
      vars: 15,
      consts: [["table", ""], [1, "mx-auto", "max-w-[1600px]", "space-y-5"], ["nzTitle", "Th\u01B0\u01A1ng hi\u1EC7u", "nzSubtitle", "Qu\u1EA3n l\u00FD c\u00E1c nh\u00E3n hi\u1EC7u xe \u0111i\u1EC7n v\u00E0 m\u00E1y n\u00F4ng nghi\u1EC7p", 1, "!rounded-lg", "!bg-white", "!shadow-sm", "!border", "!border-slate-100"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!rounded-xl", "!h-10", "!px-5", "!font-semibold", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-lg", "!shadow-sm"], [1, "admin-filter", "mb-5", "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-center"], [1, "md:col-span-6"], ["nz-input", "", "placeholder", "T\u00ECm th\u01B0\u01A1ng hi\u1EC7u theo t\u00EAn ho\u1EB7c m\u00F4 t\u1EA3...", "name", "brand-search", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", "!px-4", 3, "ngModelChange", "keyup.enter", "ngModel"], ["nzPlaceHolder", "Tr\u1EA1ng th\u00E1i  ", "nzSize", "large", "nzAllowClear", "", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang hi\u1EC3n th\u1ECB"], ["nzValue", "inactive", "nzLabel", "\u26D4 \u0110\u00E3 \u1EA9n (IsUsed = false)"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-[44px]", "!rounded-xl", "!font-semibold", "!w-full", 3, "click"], [1, "fa", "fa-search", "mr-2"], [1, "mb-4", "flex", "flex-wrap", "gap-2"], ["nzColor", "purple", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "success", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzSize", "middle", 1, "admin-table", 3, "nzData", "nzLoading", "nzPageSize", "nzScroll"], ["nzWidth", "70px", 1, "text-center", "font-bold"], ["nzWidth", "100px"], ["nzWidth", "130px"], ["nzWidth", "260px", 1, "text-right"], [3, "opacity-60", 4, "ngFor", "ngForOf"], ["nzOkText", "L\u01B0u l\u1EA1i", "nzCancelText", "H\u1EE7y", "nzWidth", "820px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], ["nzWidth", "820px", "nzFooter", "null", 3, "nzOnCancel", "nzVisible", "nzTitle"], [1, "text-center", "font-semibold", "text-slate-600"], ["class", "h-12 w-12 rounded border border-slate-200 object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-12 w-12 items-center justify-center rounded border border-slate-200 bg-slate-50 text-slate-400", 4, "ngIf"], [1, "font-bold", "text-slate-800", "text-base"], [1, "text-[11px]", "uppercase", "tracking-wide", "text-violet-500", "font-bold"], ["class", "m-0 whitespace-normal break-words text-sm text-slate-600", 4, "ngIf"], ["class", "text-slate-400 text-sm", 4, "ngIf"], [1, "!rounded-full", "!px-3", "!py-1", "!text-xs", "!font-bold", 3, "nzColor"], [1, "flex", "justify-end", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Xem chi ti\u1EBFt", 3, "click"], [1, "fa", "fa-eye", "text-sky-600"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "S\u1EEDa", 3, "click"], [1, "fa", "fa-pencil", "text-amber-600"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "\u1EA8n", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Hi\u1EC3n th\u1ECB l\u1EA1i", 3, "click", 4, "ngIf"], ["nzTitle", "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a th\u01B0\u01A1ng hi\u1EC7u n\u00E0y kh\u00F4ng?", "nzPopconfirmType", "danger", 3, "nzOnConfirm"], ["nz-button", "", "nzSize", "small", "nzType", "text", "nzDanger", "", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", "nz-popconfirm", ""], [1, "fa", "fa-trash"], [1, "h-12", "w-12", "rounded", "border", "border-slate-200", "object-cover", 3, "src", "alt"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded", "border", "border-slate-200", "bg-slate-50", "text-slate-400"], [1, "m-0", "whitespace-normal", "break-words", "text-sm", "text-slate-600"], [1, "text-slate-400", "text-sm"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "\u1EA8n", 3, "click"], [1, "fa", "fa-eye-slash", "text-rose-500"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Hi\u1EC3n th\u1ECB l\u1EA1i", 3, "click"], [1, "fa", "fa-eye", "text-emerald-600"], ["nz-form", "", "nzLayout", "vertical", 1, "space-y-2", 3, "formGroup"], [1, "grid", "gap-x-5", "md:grid-cols-[1fr_200px]"], [1, "space-y-3"], ["nzRequired", ""], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp t\u00EAn th\u01B0\u01A1ng hi\u1EC7u"], ["nz-input", "", "formControlName", "name", "placeholder", "VD: Yamaha, Honda, VinFast..."], ["nz-input", "", "formControlName", "description", "rows", "4", "placeholder", "Gi\u1EDBi thi\u1EC7u ng\u1EAFn v\u1EC1 th\u01B0\u01A1ng hi\u1EC7u, ngu\u1ED3n g\u1ED1c, chuy\u00EAn m\u00F4n..."], ["formControlName", "isUsed", "nzCheckedChildren", "HI\u1EC2N TH\u1ECA", "nzUnCheckedChildren", "\u1EA8N"], [1, "ml-3", "text-xs", "text-slate-500"], ["label", "Logo \u0111\u1EA1i di\u1EC7n", 3, "valueChange", "value"], [1, "!my-4"], [1, "font-bold"], [3, "valueChange", "value"], ["class", "space-y-5 rounded-xl border border-slate-200 bg-slate-50/60 p-5", 4, "ngIf"], [1, "space-y-5", "rounded-xl", "border", "border-slate-200", "bg-slate-50/60", "p-5"], [1, "flex", "items-center", "gap-4", "rounded-xl", "bg-white", "p-4", "ring-1", "ring-slate-200"], [1, "flex", "h-20", "w-20", "shrink-0", "items-center", "justify-center", "overflow-hidden", "rounded-xl", "bg-gradient-to-br", "from-violet-50", "to-indigo-50", "ring-1", "ring-violet-100"], ["class", "h-full w-full object-contain p-2", 3, "src", "alt", 4, "ngIf"], ["class", "fa fa-tag text-4xl text-violet-400", 4, "ngIf"], [1, "flex-1"], [1, "text-2xl", "font-black", "text-slate-900"], [1, "mt-1", "flex", "items-center", "gap-2"], [1, "!rounded-full", "!px-3", "!text-xs", "!font-bold", 3, "nzColor"], [1, "text-xs", "text-slate-500", "font-mono"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn"], ["nzTitle", "ID", 3, "nzSpan"], [1, "font-mono", "text-slate-700"], ["nzTitle", "T\u00EAn th\u01B0\u01A1ng hi\u1EC7u", 3, "nzSpan"], [1, "text-slate-800", "font-semibold"], ["nzTitle", "Logo URL", 3, "nzSpan"], ["target", "_blank", "class", "text-sky-700 break-all", 3, "href", 4, "ngIf"], ["class", "text-slate-400", 4, "ngIf"], ["nzTitle", "M\u00F4 t\u1EA3", 3, "nzSpan"], [1, "m-0", "text-sm", "text-slate-700", "whitespace-pre-wrap"], ["nzTitle", "Tr\u1EA1ng th\u00E1i", 3, "nzSpan"], [4, "ngIf"], [1, "h-full", "w-full", "object-contain", "p-2", 3, "src", "alt"], [1, "fa", "fa-tag", "text-4xl", "text-violet-400"], ["target", "_blank", 1, "text-sky-700", "break-all", 3, "href"], [1, "text-slate-400"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-500"], [1, "rounded-lg", "bg-white", "p-4", "ring-1", "ring-slate-200"], ["class", "flex items-start gap-3 border-b border-slate-100 py-2 last:border-0", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "items-start", "gap-3", "border-b", "border-slate-100", "py-2", "last:border-0"], [1, "shrink-0", "rounded", "bg-violet-100", "px-2", "py-0.5", "font-mono", "text-xs", "text-violet-700"], [1, "text-sm", "text-slate-700", "break-all"]],
      template: function BrandAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 1)(1, "nz-page-header", 2)(2, "nz-page-header-extra")(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function BrandAdminPageComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](5, "Th\u00EAm th\u01B0\u01A1ng hi\u1EC7u ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "nz-card", 5)(7, "div", 6)(8, "div", 7)(9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayListener"]("ngModelChange", function BrandAdminPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayBindingSet"](ctx.searchDraft, $event) || (ctx.searchDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("keyup.enter", function BrandAdminPageComponent_Template_input_keyup_enter_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.applyFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](10, "nz-select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayListener"]("ngModelChange", function BrandAdminPageComponent_Template_nz_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayBindingSet"](ctx.statusDraft, $event) || (ctx.statusDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](11, "nz-option", 10)(12, "nz-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](13, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function BrandAdminPageComponent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.applyFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](14, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](15, "T\u00ECm ki\u1EBFm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](16, "div", 14)(17, "nz-tag", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](19, "nz-tag", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](21, "nz-table", 17, 0)(23, "thead")(24, "tr")(25, "th", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](26, "STT");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](27, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](28, "Logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](30, "T\u00EAn th\u01B0\u01A1ng hi\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](32, "M\u00F4 t\u1EA3");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](33, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](34, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](35, "th", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](36, "Thao t\u00E1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](37, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](38, BrandAdminPageComponent_tr_38_Template, 28, 13, "tr", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](39, "nz-modal", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("nzOnCancel", function BrandAdminPageComponent_Template_nz_modal_nzOnCancel_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function BrandAdminPageComponent_Template_nz_modal_nzOnOk_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](40, BrandAdminPageComponent_div_40_Template, 27, 4, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](41, "nz-modal", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("nzOnCancel", function BrandAdminPageComponent_Template_nz_modal_nzOnCancel_41_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.closeView());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](42, BrandAdminPageComponent_ng_container_42_Template, 2, 1, "ng-container", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const table_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtwoWayProperty"]("ngModel", ctx.statusDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" T\u1ED5ng: ", ctx.rows().length, " nh\u00E3n hi\u1EC7u ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" Ho\u1EA1t \u0111\u1ED9ng: ", ctx.countActive(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 12)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", table_r8.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "Ch\u1EC9nh s\u1EEDa th\u01B0\u01A1ng hi\u1EC7u" : "Th\u00EAm th\u01B0\u01A1ng hi\u1EC7u m\u1EDBi")("nzOkLoading", ctx.saving());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzVisible", ctx.viewOpen())("nzTitle", "Chi ti\u1EBFt th\u01B0\u01A1ng hi\u1EC7u");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__.NzDescriptionsModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_5__.NzDescriptionsItemComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_6__.NzTrDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalContentDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_26__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__.NzTagComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_12__.NzSwitchComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_13__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_13__.NzPopconfirmComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_13__.NzPopconfirmDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_15__.NzPageHeaderExtraDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzTooltipDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_17__.NzSpaceModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__.NzDividerComponent, _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_20__.MetadataEditorComponent, _shared_representative_image_picker_representative_image_picker_component__WEBPACK_IMPORTED_MODULE_21__.RepresentativeImagePickerComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_22__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.KeyValuePipe],
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

/***/ },

/***/ 899
/*!*******************************************!*\
  !*** ./src/app/services/brand.service.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandService: () => (/* binding */ BrandService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);




class BrandService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
  }
  getBrands(params) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    return this.http.get(this.baseUrl + 'brands', {
      params: httpParams
    });
  }
  getBrand(id) {
    return this.http.get(this.baseUrl + 'brands/' + id);
  }
  create(dto) {
    return this.http.post(this.baseUrl + 'brands', dto);
  }
  update(id, dto) {
    return this.http.put(this.baseUrl + 'brands/' + id, dto);
  }
  remove(id) {
    return this.http.delete(this.baseUrl + 'brands/' + id);
  }
  static {
    this.ɵfac = function BrandService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrandService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BrandService,
      factory: BrandService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_brands_brand-admin-page_component_ts.bd1430823ceef09f.js.map