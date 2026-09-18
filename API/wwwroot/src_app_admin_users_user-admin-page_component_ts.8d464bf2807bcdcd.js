"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_users_user-admin-page_component_ts"],{

/***/ 7511
/*!**********************************************************!*\
  !*** ./src/app/admin/users/user-admin-page.component.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAdminPageComponent: () => (/* binding */ UserAdminPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 5457);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/divider */ 3987);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/empty */ 2643);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ 1034);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1663);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 5853);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 9655);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/space */ 3378);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/switch */ 8792);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 8636);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../account/account.service */ 6672);
/* harmony import */ var _shared_representative_image_picker_representative_image_picker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../shared/representative-image-picker/representative-image-picker.component */ 5212);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);















































const _c0 = () => ({
  x: "1170px"
});
const _c1 = () => [];
function UserAdminPageComponent_nz_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "nz-option", 35);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzLabel", r_r2.label)("nzValue", r_r2.value);
  }
}
function UserAdminPageComponent_nz_tag_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "nz-tag", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzColor", s_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", s_r3.label, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](s_r3.value);
  }
}
function UserAdminPageComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "tr")(2, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "nz-empty", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerEnd"]();
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "img", 67);
  }
  if (rf & 2) {
    const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("src", u_r5.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"])("alt", u_r5.displayName);
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx_r5.initials(u_r5.displayName, u_r5.email), " ");
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" T\u1EA1o: ", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind3"](3, 1, u_r5.createdAt, 0, 10) || "-", " ");
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_nz_tag_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "nz-tag", 71)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzColor", ctx_r5.roleColor(r_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r5.roleLabel(r_r7));
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, " Ch\u01B0a ph\u00E2n quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "tr")(1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](4, UserAdminPageComponent_ng_template_45_tr_0_img_4_Template, 1, 2, "img", 43)(5, UserAdminPageComponent_ng_template_45_tr_0_div_5_Template, 2, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "td")(7, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](9, UserAdminPageComponent_ng_template_45_tr_0_div_9_Template, 4, 5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "td")(11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "td")(14, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](15, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](17, "td")(18, "nz-space", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](19, UserAdminPageComponent_ng_template_45_tr_0_nz_tag_19_Template, 3, 2, "nz-tag", 51)(20, UserAdminPageComponent_ng_template_45_tr_0_span_20_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](21, "td")(22, "nz-tag", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](23, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](25, "td", 55)(26, "nz-space", 50)(27, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function UserAdminPageComponent_ng_template_45_tr_0_Template_button_click_27_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.viewDetail(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](28, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](29, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function UserAdminPageComponent_ng_template_45_tr_0_Template_button_click_29_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.open(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](30, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](31, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function UserAdminPageComponent_ng_template_45_tr_0_Template_button_click_31_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.openResetPwd(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](32, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](33, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function UserAdminPageComponent_ng_template_45_tr_0_Template_button_click_33_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.toggleActive(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](34, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](35, "nz-popconfirm", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("nzOnConfirm", function UserAdminPageComponent_ng_template_45_tr_0_Template_nz_popconfirm_nzOnConfirm_35_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.remove(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](36, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](37, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    const userTable_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", (userTable_r9.nzPageIndex - 1) * userTable_r9.nzPageSize + i_r8 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", u_r5.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !u_r5.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](u_r5.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", u_r5.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](u_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", u_r5.phoneNumber || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", u_r5.roles || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction0"](14, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !u_r5.roles || u_r5.roles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzColor", u_r5.isUsed !== false ? "green" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", u_r5.isUsed !== false ? "fa-check-circle" : "fa-ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", u_r5.isUsed !== false ? "Ho\u1EA1t \u0111\u1ED9ng" : "V\u00F4 hi\u1EC7u", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzTooltipTitle", u_r5.isUsed !== false ? "V\u00F4 hi\u1EC7u h\u00F3a" : "K\u00EDch ho\u1EA1t l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", u_r5.isUsed !== false ? "fa-toggle-on text-green-600" : "fa-toggle-off text-slate-400");
  }
}
function UserAdminPageComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](0, UserAdminPageComponent_ng_template_45_tr_0_Template, 38, 15, "tr", 41);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    const userTable_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", userTable_r9.data);
  }
}
function UserAdminPageComponent_ng_container_48_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 83)(1, "nz-form-item", 77)(2, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3, "M\u1EADt kh\u1EA9u");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "nz-form-control", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](5, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "nz-form-item", 77)(7, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8, "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](10, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
  }
}
function UserAdminPageComponent_ng_container_48_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div")(1, "nz-form-item", 77)(2, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](3, " \u0110\u1ED5i m\u1EADt kh\u1EA9u (\u0111\u1EC3 tr\u1ED1ng n\u1EBFu kh\u00F4ng \u0111\u1ED5i) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "div", 83)(5, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](6, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](8, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
  }
}
function UserAdminPageComponent_ng_container_48_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "nz-option", 35);
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzLabel", r_r11.label)("nzValue", r_r11.value);
  }
}
function UserAdminPageComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "form", 74)(2, "div", 75)(3, "div", 76)(4, "div")(5, "nz-form-item", 77)(6, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](8, "nz-form-control", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](9, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "nz-form-item", 77)(11, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](12, "T\u00EAn hi\u1EC3n th\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](13, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](14, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](15, "div", 83)(16, "nz-form-item", 77)(17, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](18, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](19, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](20, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](21, "nz-divider", 85)(22, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](23, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](24, " B\u1EA3o m\u1EADt & ph\u00E2n quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](25, UserAdminPageComponent_ng_container_48_div_25_Template, 11, 4, "div", 88)(26, UserAdminPageComponent_ng_container_48_div_26_Template, 9, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](27, "div", 83)(28, "nz-form-item", 90)(29, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](30, "Vai tr\u00F2");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](31, "nz-form-control", 81)(32, "nz-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](33, UserAdminPageComponent_ng_container_48_nz_option_33_Template, 1, 2, "nz-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](34, "nz-form-item", 90)(35, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](36, "Tr\u1EA1ng th\u00E1i t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](37, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](38, "nz-switch", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](39, "div", 93)(40, "app-representative-image-picker", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("valueChange", function UserAdminPageComponent_ng_container_48_Template_app_representative_image_picker_valueChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.form.controls.avatarUrl.setValue($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzPlain", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx_r5.editing());
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.editing());
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx_r5.roleOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("value", ctx_r5.form.controls.avatarUrl.value || "");
  }
}
function UserAdminPageComponent_ng_container_50_ng_container_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "img", 108);
  }
  if (rf & 2) {
    const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("src", u_r12.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"])("alt", u_r12.displayName);
  }
}
function UserAdminPageComponent_ng_container_50_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx_r5.initials(u_r12.displayName, u_r12.email), " ");
  }
}
function UserAdminPageComponent_ng_container_50_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, UserAdminPageComponent_ng_container_50_ng_container_1_img_2_Template, 1, 2, "img", 104)(3, UserAdminPageComponent_ng_container_50_ng_container_1_div_3_Template, 2, 1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "div")(5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const u_r12 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", u_r12.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !u_r12.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", u_r12.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](u_r12.email);
  }
}
function UserAdminPageComponent_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, UserAdminPageComponent_ng_container_50_ng_container_1_Template, 9, 4, "ng-container", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "form", 74)(3, "nz-form-item")(4, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](5, "M\u1EADt kh\u1EA9u m\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](6, "nz-form-control", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](7, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](10, "X\u00E1c nh\u1EADn l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](11, "nz-form-control", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](12, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.editingPwdUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("formGroup", ctx_r5.pwdForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 24);
  }
}
function UserAdminPageComponent_ng_container_52_div_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "img", 134);
  }
  if (rf & 2) {
    const v_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("src", v_r13.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"])("alt", v_r13.displayName);
  }
}
function UserAdminPageComponent_ng_container_52_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngIf;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", ctx_r5.initials(v_r13.displayName, v_r13.email), " ");
  }
}
function UserAdminPageComponent_ng_container_52_div_1_nz_tag_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "nz-tag", 71)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzColor", ctx_r5.roleColor(r_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r5.roleLabel(r_r14));
  }
}
function UserAdminPageComponent_ng_container_52_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, " Ch\u01B0a ph\u00E2n quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_container_52_div_1_a_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](1, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("href", "tel:" + v_r13.phoneNumber, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("", v_r13.phoneNumber, " ");
  }
}
function UserAdminPageComponent_ng_container_52_div_1_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_container_52_div_1_nz_tag_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "nz-tag", 71)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzColor", ctx_r5.roleColor(r_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](ctx_r5.roleLabel(r_r15));
  }
}
function UserAdminPageComponent_ng_container_52_div_1_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, " Ch\u01B0a ph\u00E2n quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_container_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 111)(1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, UserAdminPageComponent_ng_container_52_div_1_img_2_Template, 1, 2, "img", 113)(3, UserAdminPageComponent_ng_container_52_div_1_div_3_Template, 2, 1, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](4, "div", 115)(5, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](8, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](10, "div", 119)(11, "nz-space", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](12, UserAdminPageComponent_ng_container_52_div_1_nz_tag_12_Template, 3, 2, "nz-tag", 51)(13, UserAdminPageComponent_ng_container_52_div_1_span_13_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](14, "nz-tag", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](15, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](17, "nz-descriptions", 121)(18, "nz-descriptions-item", 122)(19, "span", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](21, "nz-descriptions-item", 124)(22, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](24, "nz-descriptions-item", 126)(25, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](27, "nz-descriptions-item", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](28, UserAdminPageComponent_ng_container_52_div_1_a_28_Template, 3, 2, "a", 128)(29, UserAdminPageComponent_ng_container_52_div_1_span_29_Template, 2, 0, "span", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](30, "nz-descriptions-item", 130)(31, "nz-space", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](32, UserAdminPageComponent_ng_container_52_div_1_nz_tag_32_Template, 3, 2, "nz-tag", 51)(33, UserAdminPageComponent_ng_container_52_div_1_span_33_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](34, "nz-descriptions-item", 131)(35, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](36, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipe"](38, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](39, "nz-descriptions-item", 133)(40, "nz-tag", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](41, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const v_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", v_r13.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !v_r13.avatarUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](v_r13.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"]("", v_r13.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", v_r13.roles || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction0"](33, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !v_r13.roles || v_r13.roles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzColor", v_r13.isUsed !== false ? "green" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", v_r13.isUsed !== false ? "fa-check-circle" : "fa-ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", v_r13.isUsed !== false ? "Ho\u1EA1t \u0111\u1ED9ng" : "V\u00F4 hi\u1EC7u", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](v_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("href", "mailto:" + v_r13.email, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](v_r13.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate"](v_r13.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", v_r13.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !v_r13.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", v_r13.roles || _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction0"](34, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !v_r13.roles || v_r13.roles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", v_r13.createdAt ? _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpipeBind3"](38, 29, v_r13.createdAt, 0, 10) : "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzColor", v_r13.isUsed !== false ? "green" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", v_r13.isUsed !== false ? "fa-check-circle" : "fa-ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", v_r13.isUsed !== false ? "Ho\u1EA1t \u0111\u1ED9ng" : "V\u00F4 hi\u1EC7u", " ");
  }
}
function UserAdminPageComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](1, UserAdminPageComponent_ng_container_52_div_1_Template, 43, 35, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx_r5.viewing());
  }
}
const ROLE_OPTIONS = [{
  value: 'Admin',
  label: 'Admin',
  color: 'red'
}, {
  value: 'Staff',
  label: 'Nhân viên',
  color: 'blue'
}, {
  value: 'Manager',
  label: 'Quản lý',
  color: 'purple'
}, {
  value: 'User',
  label: 'Khách hàng',
  color: 'default'
}];
class UserAdminPageComponent {
  constructor() {
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder);
    this.msg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_11__.NzMessageService);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    this.accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_account_account_service__WEBPACK_IMPORTED_MODULE_22__.AccountService);
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_21__.environment.apiUrl + 'admin/users';
    this.rows = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)([], ...(ngDevMode ? [{
      debugName: "rows"
    }] : []));
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "loading"
    }] : []));
    this.modalOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "modalOpen"
    }] : []));
    this.saving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "saving"
    }] : []));
    this.pwdOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "pwdOpen"
    }] : []));
    this.pwdSaving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "pwdSaving"
    }] : []));
    this.editing = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null, ...(ngDevMode ? [{
      debugName: "editing"
    }] : []));
    this.editingPwdUser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null, ...(ngDevMode ? [{
      debugName: "editingPwdUser"
    }] : []));
    this.viewing = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null, ...(ngDevMode ? [{
      debugName: "viewing"
    }] : []));
    this.viewOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "viewOpen"
    }] : []));
    this.search = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('', ...(ngDevMode ? [{
      debugName: "search"
    }] : []));
    this.roleFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null, ...(ngDevMode ? [{
      debugName: "roleFilter"
    }] : []));
    this.statusFilter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null, ...(ngDevMode ? [{
      debugName: "statusFilter"
    }] : []));
    this.searchDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('', ...(ngDevMode ? [{
      debugName: "searchDraft"
    }] : []));
    this.roleDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null, ...(ngDevMode ? [{
      debugName: "roleDraft"
    }] : []));
    this.statusDraft = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null, ...(ngDevMode ? [{
      debugName: "statusDraft"
    }] : []));
    this.roleOptions = ROLE_OPTIONS;
    this.form = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      displayName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      password: [''],
      confirmPassword: [''],
      phoneNumber: [''],
      avatarUrl: [''],
      roles: [[]],
      isUsed: [true]
    });
    this.pwdForm = this.fb.group({
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  applyFilters() {
    this.search.set(this.searchDraft().trim());
    this.roleFilter.set(this.roleDraft() ?? null);
    this.statusFilter.set(this.statusDraft() ?? null);
    const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
    this.loadAll({
      search: this.search(),
      role: this.roleFilter(),
      isUsed: isUsedParam
    });
  }
  ngOnInit() {
    this.loadAll();
  }
  roleColor(role) {
    return this.roleOptions.find(r => r.value === role)?.color || 'default';
  }
  roleLabel(role) {
    return this.roleOptions.find(r => r.value === role)?.label || role;
  }
  initials(name, email) {
    const s = (name || email || 'U').trim();
    const parts = s.split(/\s+/).filter(Boolean);
    const first = parts[0]?.charAt(0) || '';
    const last = parts.length > 1 ? parts[parts.length - 1]?.charAt(0) : '';
    return (first + last).toUpperCase() || 'U';
  }
  filteredRows() {
    return this.rows();
  }
  loadAll(params) {
    this.loading.set(true);
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.role) httpParams = httpParams.set('role', params.role);
    if (params?.isUsed !== undefined && params?.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    this.http.get(this.baseUrl, {
      params: httpParams
    }).subscribe({
      next: v => this.rows.set(v || []),
      error: e => {
        const alt = [{
          id: 'seed-1',
          email: this.accountService.currentUser()?.email || 'vanhspc@gmail.com',
          displayName: this.accountService.currentUser()?.displayName || 'Vanh Admin',
          roles: ['Admin'],
          isUsed: true,
          createdAt: new Date().toISOString()
        }];
        this.rows.set(alt);
        this.msg.warning('Không tải được danh sách user từ API - hiển thị tạm');
        console.error(e);
      },
      complete: () => this.loading.set(false)
    });
  }
  open(record) {
    this.editing.set(record ?? null);
    this.form.reset({
      email: record?.email ?? '',
      displayName: record?.displayName ?? '',
      password: '',
      confirmPassword: '',
      phoneNumber: record?.phoneNumber ?? '',
      avatarUrl: record?.avatarUrl ?? '',
      roles: [...(record?.roles ?? [])],
      isUsed: record?.isUsed !== false
    });
    this.modalOpen.set(true);
  }
  close() {
    this.modalOpen.set(false);
    this.editing.set(null);
  }
  save() {
    const raw = this.form.getRawValue();
    if (!raw.email || !raw.displayName) {
      this.form.markAllAsTouched();
      return;
    }
    const creating = !this.editing();
    if (creating && (!raw.password || raw.password.length < 6)) {
      this.msg.error('Mật khẩu tối thiểu 6 ký tự khi tạo user mới');
      return;
    }
    if ((raw.password || raw.confirmPassword) && raw.password !== raw.confirmPassword) {
      this.msg.error('Mật khẩu xác nhận không khớp');
      return;
    }
    const payload = {
      email: raw.email,
      displayName: raw.displayName,
      phoneNumber: raw.phoneNumber || null,
      avatarUrl: raw.avatarUrl || null,
      roles: raw.roles || [],
      isUsed: raw.isUsed
    };
    if (creating) {
      payload['password'] = raw.password;
    } else if (raw.password) {
      payload['password'] = raw.password;
    }
    this.saving.set(true);
    const req$ = creating ? this.http.post(this.baseUrl, payload) : this.http.put(`${this.baseUrl}/${this.editing().id}`, payload);
    req$.subscribe({
      next: () => {
        this.msg.success(creating ? 'Đã tạo người dùng' : 'Đã cập nhật người dùng');
        this.close();
        const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
        this.loadAll({
          search: this.search(),
          role: this.roleFilter(),
          isUsed: isUsedParam
        });
      },
      error: e => this.msg.error(e?.error?.message || 'Lưu thất bại'),
      complete: () => this.saving.set(false)
    });
  }
  openResetPwd(user) {
    this.editingPwdUser.set(user);
    this.pwdForm.reset({
      newPassword: '',
      confirmPassword: ''
    });
    this.pwdOpen.set(true);
  }
  closeResetPwd() {
    this.pwdOpen.set(false);
    this.editingPwdUser.set(null);
  }
  saveResetPwd() {
    const raw = this.pwdForm.getRawValue();
    if (!raw.newPassword || raw.newPassword.length < 6) {
      this.msg.error('Mật khẩu tối thiểu 6 ký tự');
      return;
    }
    if (raw.newPassword !== raw.confirmPassword) {
      this.msg.error('Mật khẩu xác nhận không khớp');
      return;
    }
    const user = this.editingPwdUser();
    if (!user) return;
    this.pwdSaving.set(true);
    this.http.post(`${this.baseUrl}/${user.id}/reset-password`, {
      newPassword: raw.newPassword
    }).subscribe({
      next: () => {
        this.msg.success('Đổi mật khẩu thành công');
        this.closeResetPwd();
      },
      error: e => {
        if (e?.status === 404 || e?.status === 405) {
          this.msg.warning('Endpoint reset-password chưa khả dụng trên API');
          this.closeResetPwd();
          return;
        }
        this.msg.error(e?.error?.message || 'Đổi mật khẩu thất bại');
      },
      complete: () => this.pwdSaving.set(false)
    });
  }
  toggleActive(record) {
    const next = !!(record.isUsed === false);
    const payload = {
      isUsed: next
    };
    const reload = () => {
      const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
      this.loadAll({
        search: this.search(),
        role: this.roleFilter(),
        isUsed: isUsedParam
      });
    };
    this.http.put(`${this.baseUrl}/${record.id}/status`, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã vô hiệu hóa');
        reload();
      },
      error: () => {
        const full = {
          ...record,
          isUsed: next
        };
        this.http.put(`${this.baseUrl}/${record.id}`, full).subscribe({
          next: () => {
            this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã vô hiệu hóa');
            reload();
          },
          error: e2 => this.msg.error(e2?.error?.message || 'Thao tác thất bại')
        });
      }
    });
  }
  remove(record) {
    this.http.delete(`${this.baseUrl}/${record.id}`).subscribe({
      next: () => {
        this.msg.success('Đã xóa người dùng');
        const isUsedParam = this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null;
        this.loadAll({
          search: this.search(),
          role: this.roleFilter(),
          isUsed: isUsedParam
        });
      },
      error: e => this.msg.error(e?.error?.message || 'Xóa thất bại')
    });
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
  stats() {
    const all = this.rows();
    return [{
      label: 'Tổng user',
      value: all.length,
      color: 'blue'
    }, {
      label: 'Đang hoạt động',
      value: all.filter(u => u.isUsed !== false).length,
      color: 'green'
    }, {
      label: 'Vô hiệu hóa',
      value: all.filter(u => u.isUsed === false).length,
      color: 'red'
    }, {
      label: 'Admin',
      value: all.filter(u => (u.roles || []).includes('Admin')).length,
      color: 'magenta'
    }];
  }
  static {
    this.ɵfac = function UserAdminPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UserAdminPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
      type: UserAdminPageComponent,
      selectors: [["app-user-admin-page"]],
      decls: 53,
      vars: 20,
      consts: [["userTable", ""], ["hasRows", ""], ["nzTitle", "Ng\u01B0\u1EDDi d\u00F9ng", "nzSubtitle", "Qu\u1EA3n l\u00FD t\u00E0i kho\u1EA3n & ph\u00E2n quy\u1EC1n h\u1EC7 th\u1ED1ng", 1, "!mb-5", "!rounded-2xl", "!bg-white", "!px-6", "!py-5", "!shadow-sm"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-11", "!px-5", "!font-semibold", "!rounded-xl", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-2xl", "!shadow-sm", "!mb-5"], [1, "admin-filter", "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-center"], [1, "md:col-span-4"], ["nz-input", "", "placeholder", "T\u00ECm theo t\u00EAn, email, S\u0110T, vai tr\u00F2...", "name", "user-search", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", "!px-4", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "md:col-span-3"], ["nzPlaceHolder", "Vai tr\u00F2  ", "nzSize", "large", "nzAllowClear", "", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", 2, "width", "100%", 3, "ngModelChange", "ngModel"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzPlaceHolder", "Tr\u1EA1ng th\u00E1i  ", "nzSize", "large", "nzAllowClear", "", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang ho\u1EA1t \u0111\u1ED9ng"], ["nzValue", "inactive", "nzLabel", "\u26D4 \u0110\u00E3 v\u00F4 hi\u1EC7u h\u00F3a (IsUsed = false)"], [1, "md:col-span-2"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-[44px]", "!rounded-xl", "!font-semibold", "!w-full", 3, "click"], [1, "fa", "fa-search", "mr-2"], [1, "!my-5"], [1, "flex", "flex-wrap", "gap-3", "mb-5"], ["class", "!rounded-full !px-4 !py-1 !text-sm !font-semibold", 3, "nzColor", 4, "ngFor", "ngForOf"], ["nzSize", "middle", 1, "admin-table", 3, "nzData", "nzLoading", "nzScroll", "nzBordered", "nzShowPagination", "nzPageSize"], [1, "bg-slate-50"], ["nzWidth", "70px", 1, "!text-center", "!font-bold"], ["nzWidth", "80px", 1, "!font-bold"], [1, "!font-bold"], ["nzWidth", "150px", 1, "!font-bold"], ["nzWidth", "220px", 1, "!font-bold"], ["nzWidth", "120px", 1, "!font-bold"], ["nzWidth", "270px", "nzRight", "", 1, "!font-bold", "!text-right"], [4, "ngIf", "ngIfElse"], ["nzWidth", "780px", "nzOkText", "L\u01B0u", "nzCancelText", "H\u1EE7y", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], ["nzTitle", "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u", "nzWidth", "480px", "nzOkText", "C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u", "nzCancelText", "H\u1EE7y", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzOkLoading"], ["nzTitle", "Chi ti\u1EBFt ng\u01B0\u1EDDi d\u00F9ng", "nzWidth", "760px", "nzFooter", "null", 3, "nzOnCancel", "nzVisible"], [3, "nzLabel", "nzValue"], [1, "!rounded-full", "!px-4", "!py-1", "!text-sm", "!font-semibold", 3, "nzColor"], [1, "fa", "fa-circle", "mr-2", "text-[8px]"], [1, "ml-1"], ["colspan", "8", 1, "!py-16"], ["nzNotFoundContent", "Ch\u01B0a c\u00F3 ng\u01B0\u1EDDi d\u00F9ng n\u00E0o"], [4, "ngFor", "ngForOf"], [1, "!text-center", "font-semibold", "text-slate-600"], ["class", "h-11 w-11 rounded border border-slate-200 object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-initials flex h-11 w-11 items-center justify-center rounded border border-slate-200 font-semibold text-slate-600", 4, "ngIf"], [1, "font-semibold", "text-slate-800"], ["class", "text-xs text-slate-500", 4, "ngIf"], [1, "text-slate-700"], [1, "text-slate-600"], [1, "fa", "fa-phone", "mr-2", "text-slate-400"], ["nzSize", "small"], ["class", "!rounded-lg !px-3", 3, "nzColor", 4, "ngFor", "ngForOf"], ["class", "text-xs text-slate-400", 4, "ngIf"], [1, "!rounded-full", "!px-3", 3, "nzColor"], [1, "fa", "mr-1.5", 3, "ngClass"], [1, "!text-right"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Xem chi ti\u1EBFt", 1, "!h-9", "!w-9", 3, "click"], [1, "fa", "fa-eye", "text-sky-600"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "S\u1EEDa th\u00F4ng tin", 1, "!h-9", "!w-9", 3, "click"], [1, "fa", "fa-pencil", "text-amber-600"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u", 1, "!h-9", "!w-9", 3, "click"], [1, "fa", "fa-key", "text-amber-600"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", 1, "!h-9", "!w-9", 3, "click", "nzTooltipTitle"], [1, "fa", 3, "ngClass"], ["nzTitle", "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a ng\u01B0\u1EDDi d\u00F9ng n\u00E0y kh\u00F4ng?", "nzPopconfirmType", "danger", 3, "nzOnConfirm"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", "nz-popconfirm", "", 1, "!h-9", "!w-9"], [1, "fa", "fa-trash", "text-rose-500"], [1, "h-11", "w-11", "rounded", "border", "border-slate-200", "object-cover", 3, "src", "alt"], [1, "avatar-initials", "flex", "h-11", "w-11", "items-center", "justify-center", "rounded", "border", "border-slate-200", "font-semibold", "text-slate-600"], [1, "text-xs", "text-slate-500"], [1, "fa", "fa-clock-o", "mr-1"], [1, "!rounded-lg", "!px-3", 3, "nzColor"], [1, "font-semibold"], [1, "text-xs", "text-slate-400"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup"], [1, "grid", "grid-cols-12", "gap-5"], [1, "col-span-12", "lg:col-span-8", "space-y-4"], [1, "!mb-0"], ["nzRequired", "", 3, "nzSpan"], ["nzErrorTip", "Email kh\u00F4ng h\u1EE3p l\u1EC7", 3, "nzSpan"], ["type", "email", "nz-input", "", "formControlName", "email", "placeholder", "admin@example.com", 1, "!h-11", "!rounded-xl"], [3, "nzSpan"], ["nz-input", "", "formControlName", "displayName", "placeholder", "Nguy\u1EC5n V\u0103n A", 1, "!h-11", "!rounded-xl"], [1, "grid", "grid-cols-2", "gap-4"], ["nz-input", "", "formControlName", "phoneNumber", "placeholder", "+84...", 1, "!h-11", "!rounded-xl"], ["nzOrientation", "left", 1, "!my-2", 3, "nzPlain"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-indigo-600"], [1, "fa", "fa-shield", "mr-2"], ["class", "grid grid-cols-2 gap-4", 4, "ngIf"], [4, "ngIf"], [1, "!mb-0", 2, "grid-column", "span 2 / span 2"], ["nzMode", "multiple", "nzPlaceHolder", "Ch\u1ECDn vai tr\u00F2...", "formControlName", "roles", 1, "w-full"], ["formControlName", "isUsed", "nzCheckedChildren", "HO\u1EA0T \u0110\u1ED8NG", "nzUnCheckedChildren", "V\u00D4 HI\u1EC6U"], [1, "col-span-12", "lg:col-span-4"], ["label", "\u1EA2nh \u0111\u1EA1i di\u1EC7n", 3, "valueChange", "value"], ["nzErrorTip", "T\u1ED1i thi\u1EC3u 6 k\u00FD t\u1EF1", 3, "nzSpan"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "!h-11", "!rounded-xl"], ["type", "password", "nz-input", "", "formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "!h-11", "!rounded-xl"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", 1, "!h-11", "!rounded-xl"], ["type", "password", "nz-input", "", "formControlName", "confirmPassword", "placeholder", "X\u00E1c nh\u1EADn l\u1EA1i", 1, "!h-11", "!rounded-xl"], ["type", "password", "nz-input", "", "formControlName", "newPassword", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi", 1, "!h-11", "!rounded-xl"], ["nzErrorTip", "M\u1EADt kh\u1EA9u kh\u00F4ng kh\u1EDBp", 3, "nzSpan"], ["type", "password", "nz-input", "", "formControlName", "confirmPassword", "placeholder", "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi", 1, "!h-11", "!rounded-xl"], [1, "mb-5", "flex", "items-center", "gap-4", "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "p-4"], ["class", "h-12 w-12 rounded border border-slate-200 object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-12 w-12 items-center justify-center rounded border border-slate-200 bg-white font-semibold text-slate-600", 4, "ngIf"], [1, "text-sm", "font-bold", "text-amber-900"], [1, "text-xs", "text-amber-700"], [1, "h-12", "w-12", "rounded", "border", "border-slate-200", "object-cover", 3, "src", "alt"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded", "border", "border-slate-200", "bg-white", "font-semibold", "text-slate-600"], ["class", "space-y-5 rounded-2xl border border-slate-200 bg-slate-50/60 p-5", 4, "ngIf"], [1, "space-y-5", "rounded-2xl", "border", "border-slate-200", "bg-slate-50/60", "p-5"], [1, "flex", "items-center", "gap-4", "rounded-2xl", "bg-white", "p-4", "ring-1", "ring-slate-200"], ["class", "h-20 w-20 rounded border border-slate-200 object-cover", 3, "src", "alt", 4, "ngIf"], ["class", "avatar-initials flex h-20 w-20 items-center justify-center rounded border border-slate-200 text-xl font-semibold text-slate-600", 4, "ngIf"], [1, "flex-1", "min-w-0"], [1, "text-xl", "font-black", "text-slate-900", "truncate"], [1, "text-sm", "text-slate-600", "truncate", "mt-0.5"], [1, "fa", "fa-envelope-o", "mr-1.5", "text-slate-400"], [1, "mt-2.5", "flex", "flex-wrap", "items-center", "gap-2"], [1, "!rounded-full", "!px-3", "!ml-1", 3, "nzColor"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn"], ["nzTitle", "ID", 3, "nzSpan"], [1, "font-mono", "text-slate-700"], ["nzTitle", "Email", 3, "nzSpan"], [1, "text-sky-700", 3, "href"], ["nzTitle", "T\u00EAn hi\u1EC3n th\u1ECB", 3, "nzSpan"], ["nzTitle", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", 3, "nzSpan"], ["class", "text-slate-700", 3, "href", 4, "ngIf"], ["class", "text-slate-400", 4, "ngIf"], ["nzTitle", "Vai tr\u00F2", 3, "nzSpan"], ["nzTitle", "Ng\u00E0y t\u1EA1o", 3, "nzSpan"], [1, "fa", "fa-clock-o", "mr-1.5", "text-slate-400"], ["nzTitle", "Tr\u1EA1ng th\u00E1i", 3, "nzSpan"], [1, "h-20", "w-20", "rounded", "border", "border-slate-200", "object-cover", 3, "src", "alt"], [1, "avatar-initials", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded", "border", "border-slate-200", "text-xl", "font-semibold", "text-slate-600"], [1, "text-slate-700", 3, "href"], [1, "fa", "fa-phone", "mr-1.5", "text-slate-400"], [1, "text-slate-400"]],
      template: function UserAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "nz-page-header", 2)(1, "nz-page-header-extra")(2, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function UserAdminPageComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](3, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](4, " Th\u00EAm ng\u01B0\u1EDDi d\u00F9ng ");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](5, "nz-card", 5)(6, "div", 6)(7, "div", 7)(8, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayListener"]("ngModelChange", function UserAdminPageComponent_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayBindingSet"](ctx.searchDraft, $event) || (ctx.searchDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("keyup.enter", function UserAdminPageComponent_Template_input_keyup_enter_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.applyFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](9, "div", 9)(10, "nz-select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayListener"]("ngModelChange", function UserAdminPageComponent_Template_nz_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayBindingSet"](ctx.roleDraft, $event) || (ctx.roleDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](11, UserAdminPageComponent_nz_option_11_Template, 1, 2, "nz-option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](12, "div", 9)(13, "nz-select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayListener"]("ngModelChange", function UserAdminPageComponent_Template_nz_select_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayBindingSet"](ctx.statusDraft, $event) || (ctx.statusDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](14, "nz-option", 13)(15, "nz-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](16, "div", 15)(17, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function UserAdminPageComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.applyFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](18, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](19, " T\u00ECm ki\u1EBFm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](20, "nz-divider", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](21, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](22, UserAdminPageComponent_nz_tag_22_Template, 5, 3, "nz-tag", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](23, "nz-table", 21, 0)(25, "thead")(26, "tr", 22)(27, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](28, "STT");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](29, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](30, "Avatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](31, "th", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](32, "T\u00EAn hi\u1EC3n th\u1ECB");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](33, "th", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](34, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](35, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](36, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](37, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](38, "Vai tr\u00F2");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](39, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](40, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](41, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](42, " H\u00E0nh \u0111\u1ED9ng ");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](43, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](44, UserAdminPageComponent_ng_container_44_Template, 4, 0, "ng-container", 30)(45, UserAdminPageComponent_ng_template_45_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](47, "nz-modal", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("nzOnCancel", function UserAdminPageComponent_Template_nz_modal_nzOnCancel_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function UserAdminPageComponent_Template_nz_modal_nzOnOk_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](48, UserAdminPageComponent_ng_container_48_Template, 41, 16, "ng-container", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](49, "nz-modal", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("nzOnCancel", function UserAdminPageComponent_Template_nz_modal_nzOnCancel_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.closeResetPwd());
          })("nzOnOk", function UserAdminPageComponent_Template_nz_modal_nzOnOk_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.saveResetPwd());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](50, UserAdminPageComponent_ng_container_50_Template, 13, 6, "ng-container", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](51, "nz-modal", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("nzOnCancel", function UserAdminPageComponent_Template_nz_modal_nzOnCancel_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.closeView());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](52, UserAdminPageComponent_ng_container_52_Template, 2, 1, "ng-container", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const hasRows_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵreference"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayProperty"]("ngModel", ctx.roleDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx.roleOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtwoWayProperty"]("ngModel", ctx.statusDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx.stats());
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction0"](19, _c0))("nzBordered", false)("nzShowPagination", true)("nzPageSize", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.filteredRows().length === 0)("ngIfElse", hasRows_r16);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "S\u1EEDa ng\u01B0\u1EDDi d\u00F9ng" : "Th\u00EAm ng\u01B0\u1EDDi d\u00F9ng m\u1EDBi")("nzOkLoading", ctx.saving());
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzVisible", ctx.pwdOpen())("nzOkLoading", ctx.pwdSaving());
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("nzVisible", ctx.viewOpen());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_26__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__.NzDescriptionsModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_6__.NzDescriptionsItemComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_7__.NzDividerComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_8__.NzEmptyModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_8__.NzEmptyComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_28__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalContentDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_13__.NzPageHeaderExtraDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_15__.NzSelectComponent, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__.NzSpaceModule, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__.NzSpaceComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_17__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_17__.NzSwitchComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzCellFixedDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_19__.NzTagComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_20__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_20__.NzTooltipDirective, _shared_representative_image_picker_representative_image_picker_component__WEBPACK_IMPORTED_MODULE_23__.RepresentativeImagePickerComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_24__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe],
      styles: [".role-chip[_ngcontent-%COMP%] {\n        display: inline-flex;\n        align-items: center;\n        gap: 4px;\n      }\n      .avatar-initials[_ngcontent-%COMP%] {\n        background: #f1f5f9;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWRtaW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixRQUFRO01BQ1Y7TUFDQTtRQUNFLG1CQUFtQjtNQUNyQiIsImZpbGUiOiJ1c2VyLWFkbWluLXBhZ2UuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAucm9sZS1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgfVxuICAgICAgLmF2YXRhci1pbml0aWFscyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdXNlcnMvdXNlci1hZG1pbi1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLFFBQVE7TUFDVjtNQUNBO1FBQ0UsbUJBQW1CO01BQ3JCOztBQUVOLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAucm9sZS1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgfVxuICAgICAgLmF2YXRhci1pbml0aWFscyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_users_user-admin-page_component_ts.8d464bf2807bcdcd.js.map