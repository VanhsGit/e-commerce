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
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/brand.service */ 899);
/* harmony import */ var _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/metadata-editor/metadata-editor.component */ 4264);
/* harmony import */ var _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/entity-image-manager/entity-image-manager.component */ 6112);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);









































function BrandAdminPageComponent_tr_36_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "img", 39);
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵinterpolate"](b_r3.name))("src", b_r3.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function BrandAdminPageComponent_tr_36_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "i", 40);
  }
}
function BrandAdminPageComponent_tr_36_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", b_r3.description, " ");
  }
}
function BrandAdminPageComponent_tr_36_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1, "Ch\u01B0a c\u00F3 m\u00F4 t\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function BrandAdminPageComponent_tr_36_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function BrandAdminPageComponent_tr_36_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleActive(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function BrandAdminPageComponent_tr_36_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function BrandAdminPageComponent_tr_36_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleActive(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
  }
}
function BrandAdminPageComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](3, BrandAdminPageComponent_tr_36_img_3_Template, 1, 3, "img", 25)(4, BrandAdminPageComponent_tr_36_i_4_Template, 1, 0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "td")(6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](11, BrandAdminPageComponent_tr_36_p_11_Template, 2, 1, "p", 29)(12, BrandAdminPageComponent_tr_36_span_12_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "td")(14, "nz-tag", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "td")(17, "div", 32)(18, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function BrandAdminPageComponent_tr_36_Template_button_click_18_listener() {
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.open(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](19, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](20, BrandAdminPageComponent_tr_36_button_20_Template, 2, 0, "button", 35)(21, BrandAdminPageComponent_tr_36_button_21_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("nzOnConfirm", function BrandAdminPageComponent_tr_36_Template_button_nzOnConfirm_22_listener() {
      const b_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.remove(b_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](23, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const b_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassProp"]("opacity-60", b_r3.isUsed === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", b_r3.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !b_r3.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](b_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" Brand ID: #", b_r3.id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", b_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !b_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzColor", b_r3.isUsed === false ? "default" : "purple");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", b_r3.isUsed === false ? "\u1EA8n" : "Hi\u1EC3n th\u1ECB", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", b_r3.isUsed !== false);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", b_r3.isUsed === false);
  }
}
function BrandAdminPageComponent_div_38_img_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "img", 67);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("src", ctx_r3.form.value.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsanitizeUrl"]);
  }
}
function BrandAdminPageComponent_div_38_i_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "i", 68);
  }
}
function BrandAdminPageComponent_div_38_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "nz-divider", 63)(2, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](3, "\u1EA2nh & Th\u01B0 vi\u1EC7n");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "app-entity-image-manager", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("entityId", ctx_r3.editing().id);
  }
}
function BrandAdminPageComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div")(1, "form", 47)(2, "div", 48)(3, "div", 49)(4, "nz-form-item")(5, "nz-form-label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6, "T\u00EAn th\u01B0\u01A1ng hi\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "nz-form-control", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "nz-form-item")(10, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "Logo URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](13, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "nz-form-item")(15, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16, "M\u00F4 t\u1EA3");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](18, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "nz-form-item")(20, "nz-form-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, "Tr\u1EA1ng th\u00E1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](23, "nz-switch", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "div", 57)(27, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28, " Preview Logo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](30, BrandAdminPageComponent_div_38_img_30_Template, 1, 1, "img", 60)(31, BrandAdminPageComponent_div_38_i_31_Template, 1, 0, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "nz-divider", 63)(35, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](36, "Metadata");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "app-metadata-editor", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("valueChange", function BrandAdminPageComponent_div_38_Template_app_metadata_editor_valueChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.metadata.set($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](38, BrandAdminPageComponent_div_38_ng_container_38_Template, 5, 1, "ng-container", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r3.form.value.isUsed ? "Th\u01B0\u01A1ng hi\u1EC7u \u0111ang hi\u1EC3n th\u1ECB tr\u00EAn h\u1EC7 th\u1ED1ng" : "Th\u01B0\u01A1ng hi\u1EC7u \u0111\u00E3 b\u1ECB \u1EA9n kh\u1ECFi danh s\u00E1ch", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r3.form.value.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx_r3.form.value.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r3.form.value.name || "T\u00EAn th\u01B0\u01A1ng hi\u1EC7u", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("value", ctx_r3.metadata());
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx_r3.editing());
  }
}
class BrandAdminPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.msg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_13__.NzMessageService);
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_brand_service__WEBPACK_IMPORTED_MODULE_18__.BrandService);
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
      isUsed: [true]
    });
  }
  applyFilters() {
    this.search.set(this.searchDraft().trim());
    this.statusFilter.set(this.statusDraft() ?? null);
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
  static {
    this.ɵfac = function BrandAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BrandAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({
      type: BrandAdminPageComponent,
      selectors: [["app-brand-admin-page"]],
      decls: 39,
      vars: 11,
      consts: [["table", ""], [1, "mx-auto", "max-w-[1600px]", "space-y-5"], ["nzTitle", "Th\u01B0\u01A1ng hi\u1EC7u", "nzSubtitle", "Qu\u1EA3n l\u00FD c\u00E1c nh\u00E3n hi\u1EC7u xe \u0111i\u1EC7n v\u00E0 m\u00E1y n\u00F4ng nghi\u1EC7p", 1, "!rounded-lg", "!bg-white", "!shadow-sm", "!border", "!border-slate-100"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!rounded-xl", "!h-10", "!px-5", "!font-semibold", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-lg", "!shadow-sm"], [1, "mb-5", "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-center"], [1, "md:col-span-6"], ["nz-input", "", "nzBorderless", "", "placeholder", "T\u00ECm th\u01B0\u01A1ng hi\u1EC7u theo t\u00EAn ho\u1EB7c m\u00F4 t\u1EA3...", "name", "brand-search", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", "!px-4", 3, "ngModelChange", "ngModel"], ["nzPlaceHolder", "Tr\u1EA1ng th\u00E1i  ", "nzSize", "large", "nzBorderless", "", "nzAllowClear", "", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang hi\u1EC3n th\u1ECB"], ["nzValue", "inactive", "nzLabel", "\u26D4 \u0110\u00E3 \u1EA9n (IsUsed = false)"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-[44px]", "!rounded-xl", "!font-semibold", "!w-full", 3, "click"], [1, "fa", "fa-search", "mr-2"], [1, "mb-4", "flex", "flex-wrap", "gap-2"], ["nzColor", "purple", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzColor", "success", 1, "!rounded-full", "!px-3", "!py-1", "!text-sm", "!font-semibold"], ["nzSize", "middle", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "100px"], ["nzWidth", "130px"], ["nzWidth", "220px", 1, "text-right"], [3, "opacity-60", 4, "ngFor", "ngForOf"], ["nzOkText", "L\u01B0u l\u1EA1i", "nzCancelText", "H\u1EE7y", "nzWidth", "820px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "overflow-hidden", "rounded-2xl", "bg-gradient-to-br", "from-violet-50", "to-indigo-50", "ring-1", "ring-violet-200"], ["class", "h-12 w-12 object-contain p-1", 3, "src", "alt", 4, "ngIf"], ["class", "fa fa-tag text-2xl text-violet-400", 4, "ngIf"], [1, "font-bold", "text-slate-800", "text-base"], [1, "text-[11px]", "uppercase", "tracking-wide", "text-violet-500", "font-bold"], ["class", "text-sm text-slate-600 line-clamp-2 m-0", 4, "ngIf"], ["class", "text-slate-400 text-sm", 4, "ngIf"], [1, "!rounded-full", "!px-3", "!py-1", "!text-xs", "!font-bold", 3, "nzColor"], [1, "flex", "justify-end", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "S\u1EEDa th\u01B0\u01A1ng hi\u1EC7u", 3, "click"], [1, "fa", "fa-pencil"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "\u1EA8n th\u01B0\u01A1ng hi\u1EC7u", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Hi\u1EC3n th\u1ECB l\u1EA1i", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "nzDanger", "", "type", "button", "nz-popconfirm", "", "nzPopconfirmTitle", "X\u00F3a th\u01B0\u01A1ng hi\u1EC7u n\u00E0y?", "nzPopconfirmOkText", "X\u00F3a", "nzOkDanger", "", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", 3, "nzOnConfirm"], [1, "fa", "fa-trash"], [1, "h-12", "w-12", "object-contain", "p-1", 3, "src", "alt"], [1, "fa", "fa-tag", "text-2xl", "text-violet-400"], [1, "text-sm", "text-slate-600", "line-clamp-2", "m-0"], [1, "text-slate-400", "text-sm"], ["nz-button", "", "nzSize", "small", "nzType", "default", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "\u1EA8n th\u01B0\u01A1ng hi\u1EC7u", 3, "click"], [1, "fa", "fa-eye-slash"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Hi\u1EC3n th\u1ECB l\u1EA1i", 3, "click"], [1, "fa", "fa-eye"], ["nz-form", "", "nzLayout", "vertical", 1, "space-y-2", 3, "formGroup"], [1, "grid", "gap-x-5", "md:grid-cols-[1fr_200px]"], [1, "space-y-3"], ["nzRequired", ""], ["nzErrorTip", "Vui l\u00F2ng nh\u1EADp t\u00EAn th\u01B0\u01A1ng hi\u1EC7u"], ["nz-input", "", "formControlName", "name", "placeholder", "VD: Yamaha, Honda, VinFast..."], ["nz-input", "", "formControlName", "logoUrl", "placeholder", "https://.../logo.png"], ["nz-input", "", "formControlName", "description", "rows", "4", "placeholder", "Gi\u1EDBi thi\u1EC7u ng\u1EAFn v\u1EC1 th\u01B0\u01A1ng hi\u1EC7u, ngu\u1ED3n g\u1ED1c, chuy\u00EAn m\u00F4n..."], ["formControlName", "isUsed", "nzCheckedChildren", "HI\u1EC2N TH\u1ECA", "nzUnCheckedChildren", "\u1EA8N"], [1, "ml-3", "text-xs", "text-slate-500"], [1, "flex", "flex-col", "items-center"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-400"], [1, "flex", "h-40", "w-40", "items-center", "justify-center", "overflow-hidden", "rounded-2xl", "bg-gradient-to-br", "from-violet-50", "via-indigo-50", "to-sky-50", "ring-2", "ring-violet-100"], ["class", "h-full w-full object-contain p-3", "alt", "preview", 3, "src", 4, "ngIf"], ["class", "fa fa-tag text-5xl text-violet-300", 4, "ngIf"], [1, "mt-3", "text-xs", "text-slate-400", "text-center", "max-w-[180px]"], [1, "!my-4"], [1, "font-bold"], [3, "valueChange", "value"], [4, "ngIf"], ["alt", "preview", 1, "h-full", "w-full", "object-contain", "p-3", 3, "src"], [1, "fa", "fa-tag", "text-5xl", "text-violet-300"], ["entityType", "Brand", 3, "entityId"]],
      template: function BrandAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 1)(1, "nz-page-header", 2)(2, "nz-page-header-extra")(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function BrandAdminPageComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](5, "Th\u00EAm th\u01B0\u01A1ng hi\u1EC7u ");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "nz-card", 5)(7, "div", 6)(8, "div", 7)(9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function BrandAdminPageComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.searchDraft, $event) || (ctx.searchDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "nz-select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayListener"]("ngModelChange", function BrandAdminPageComponent_Template_nz_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayBindingSet"](ctx.statusDraft, $event) || (ctx.statusDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](11, "nz-option", 10)(12, "nz-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function BrandAdminPageComponent_Template_button_click_13_listener() {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](28, "T\u00EAn th\u01B0\u01A1ng hi\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](30, "M\u00F4 t\u1EA3");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](31, "th", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](34, "Thao t\u00E1c");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](36, BrandAdminPageComponent_tr_36_Template, 24, 12, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "nz-modal", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("nzOnCancel", function BrandAdminPageComponent_Template_nz_modal_nzOnCancel_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function BrandAdminPageComponent_Template_nz_modal_nzOnOk_37_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](38, BrandAdminPageComponent_div_38_Template, 39, 7, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const table_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtwoWayProperty"]("ngModel", ctx.statusDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" T\u1ED5ng: ", ctx.rows().length, " nh\u00E3n hi\u1EC7u ");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" Ho\u1EA1t \u0111\u1ED9ng: ", ctx.countActive(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngForOf", table_r8.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "Ch\u1EC9nh s\u1EEDa th\u01B0\u01A1ng hi\u1EC7u" : "Th\u00EAm th\u01B0\u01A1ng hi\u1EC7u m\u1EDBi")("nzOkLoading", ctx.saving());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_23__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__.NzCardComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_5__.NzTrDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalContentDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__.NzSelectComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__.NzTagComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_11__.NzSwitchComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_12__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_12__.NzPopconfirmDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderExtraDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_15__.NzTooltipDirective, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__.NzSpaceModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__.NzDividerComponent, _shared_metadata_editor_metadata_editor_component__WEBPACK_IMPORTED_MODULE_19__.MetadataEditorComponent, _shared_entity_image_manager_entity_image_manager_component__WEBPACK_IMPORTED_MODULE_20__.EntityImageManagerComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_21__.ImgFallbackDirective],
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
//# sourceMappingURL=src_app_admin_brands_brand-admin-page_component_ts.1eccf0f8925bee42.js.map