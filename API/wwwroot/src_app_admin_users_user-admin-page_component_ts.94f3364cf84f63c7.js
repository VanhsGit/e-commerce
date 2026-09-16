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
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 7719);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ 5457);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/divider */ 3987);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/empty */ 2643);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/form */ 1034);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/modal */ 1663);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 5853);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 9655);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/space */ 3378);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/switch */ 8792);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ 8636);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../account/account.service */ 6672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);















































const _c0 = () => ({
  x: "1170px"
});
const _c1 = () => [];
function UserAdminPageComponent_nz_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "nz-option", 36);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzLabel", r_r2.label)("nzValue", r_r2.value);
  }
}
function UserAdminPageComponent_nz_tag_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "nz-tag", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColor", s_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", s_r3.label, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](s_r3.value);
  }
}
function UserAdminPageComponent_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "tr")(2, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](3, "nz-empty", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" T\u1EA1o: ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind3"](3, 1, u_r5.createdAt, 0, 10) || "-", " ");
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_nz_tag_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "nz-tag", 70)(1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColor", ctx_r6.roleColor(r_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r6.roleLabel(r_r6));
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1, " Ch\u01B0a ph\u00E2n quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_template_45_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "tr")(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "td")(4, "nz-avatar", 44)(5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "td")(8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](10, UserAdminPageComponent_ng_template_45_tr_0_div_10_Template, 4, 5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "td")(12, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](14, "td")(15, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](16, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](18, "td")(19, "nz-space", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](20, UserAdminPageComponent_ng_template_45_tr_0_nz_tag_20_Template, 3, 2, "nz-tag", 52)(21, UserAdminPageComponent_ng_template_45_tr_0_span_21_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](22, "td")(23, "nz-tag", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](24, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](26, "td", 56)(27, "nz-space", 51)(28, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function UserAdminPageComponent_ng_template_45_tr_0_Template_button_click_28_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.viewDetail(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](29, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](30, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function UserAdminPageComponent_ng_template_45_tr_0_Template_button_click_30_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.open(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](31, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](32, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function UserAdminPageComponent_ng_template_45_tr_0_Template_button_click_32_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.openResetPwd(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](33, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](34, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function UserAdminPageComponent_ng_template_45_tr_0_Template_button_click_34_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.toggleActive(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](35, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](36, "nz-popconfirm", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("nzOnConfirm", function UserAdminPageComponent_ng_template_45_tr_0_Template_nz_popconfirm_nzOnConfirm_36_listener() {
      const u_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.remove(u_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](37, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](38, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const u_r5 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    const userTable_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", (userTable_r9.nzPageIndex - 1) * userTable_r9.nzPageSize + i_r8 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSize", 42)("nzSrc", u_r5.avatarUrl || undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx_r6.initials(u_r5.displayName, u_r5.email), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](u_r5.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", u_r5.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](u_r5.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", u_r5.phoneNumber || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", u_r5.roles || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !u_r5.roles || u_r5.roles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColor", u_r5.isUsed !== false ? "green" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngClass", u_r5.isUsed !== false ? "fa-check-circle" : "fa-ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", u_r5.isUsed !== false ? "Ho\u1EA1t \u0111\u1ED9ng" : "V\u00F4 hi\u1EC7u", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzTooltipTitle", u_r5.isUsed !== false ? "V\u00F4 hi\u1EC7u h\u00F3a" : "K\u00EDch ho\u1EA1t l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngClass", u_r5.isUsed !== false ? "fa-toggle-on text-green-600" : "fa-toggle-off text-slate-400");
  }
}
function UserAdminPageComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](0, UserAdminPageComponent_ng_template_45_tr_0_Template, 39, 16, "tr", 42);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    const userTable_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", userTable_r9.data);
  }
}
function UserAdminPageComponent_ng_container_48_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 76)(1, "nz-form-item", 77)(2, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](3, "M\u1EADt kh\u1EA9u");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "nz-form-control", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](5, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "nz-form-item", 77)(7, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](8, "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](9, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](10, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
  }
}
function UserAdminPageComponent_ng_container_48_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div")(1, "nz-form-item", 77)(2, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](3, " \u0110\u1ED5i m\u1EADt kh\u1EA9u (\u0111\u1EC3 tr\u1ED1ng n\u1EBFu kh\u00F4ng \u0111\u1ED5i) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](4, "div", 76)(5, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](6, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](7, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](8, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
  }
}
function UserAdminPageComponent_ng_container_48_nz_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "nz-option", 36);
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzLabel", r_r10.label)("nzValue", r_r10.value);
  }
}
function UserAdminPageComponent_ng_container_48_nz_tag_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "nz-tag", 115)(1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", (((tmp_5_0 = ctx_r6.form.get("roles")) == null ? null : tmp_5_0.value) || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](1, _c1))[0] ? ctx_r6.roleLabel((((tmp_5_0 = ctx_r6.form.get("roles")) == null ? null : tmp_5_0.value) || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](2, _c1))[0]) : "Ch\u01B0a ph\u00E2n quy\u1EC1n", " ");
  }
}
function UserAdminPageComponent_ng_container_48_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1, "Ch\u01B0a ph\u00E2n quy\u1EC1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "form", 73)(2, "div", 74)(3, "div", 75)(4, "div", 76)(5, "nz-form-item", 77)(6, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "nz-form-control", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](9, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](10, "nz-form-item", 77)(11, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](12, "T\u00EAn hi\u1EC3n th\u1ECB");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](13, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](14, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](15, "div", 76)(16, "nz-form-item", 77)(17, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](18, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](19, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](20, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](21, "nz-form-item", 77)(22, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](23, "Avatar URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](24, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](25, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](26, "nz-divider", 85)(27, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](28, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](29, " B\u1EA3o m\u1EADt & ph\u00E2n quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](30, UserAdminPageComponent_ng_container_48_div_30_Template, 11, 4, "div", 88)(31, UserAdminPageComponent_ng_container_48_div_31_Template, 9, 3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](32, "div", 76)(33, "nz-form-item", 90)(34, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](35, "Vai tr\u00F2");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](36, "nz-form-control", 81)(37, "nz-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](38, UserAdminPageComponent_ng_container_48_nz_option_38_Template, 1, 2, "nz-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](39, "nz-form-item", 90)(40, "nz-form-label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](41, "Tr\u1EA1ng th\u00E1i t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](42, "nz-form-control", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](43, "nz-switch", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](44, "div", 93)(45, "div", 94)(46, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](47, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](48, " Xem tr\u01B0\u1EDBc avatar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](49, "div", 97)(50, "nz-avatar", 98)(51, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](53, "div", 100)(54, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](56, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](58, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](59, UserAdminPageComponent_ng_container_48_nz_tag_59_Template, 3, 3, "nz-tag", 103)(60, UserAdminPageComponent_ng_container_48_ng_template_60_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](62, "nz-divider", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](63, "div", 105)(64, "div", 106)(65, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](66, "T\u00ECnh tr\u1EA1ng:");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](67, "nz-tag", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](69, "div", 106)(70, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](71, "S\u0110T:");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](72, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    let tmp_22_0;
    let tmp_23_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_28_0;
    let tmp_29_0;
    let tmp_30_0;
    const noRole_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](61);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("formGroup", ctx_r6.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzPlain", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx_r6.editing());
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r6.editing());
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", ctx_r6.roleOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSize", 112)("nzSrc", ((tmp_22_0 = ctx_r6.form.get("avatarUrl")) == null ? null : tmp_22_0.value) || undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx_r6.initials(((tmp_23_0 = ctx_r6.form.get("displayName")) == null ? null : tmp_23_0.value) || "", ((tmp_23_0 = ctx_r6.form.get("email")) == null ? null : tmp_23_0.value) || ""), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ((tmp_24_0 = ctx_r6.form.get("displayName")) == null ? null : tmp_24_0.value) || "T\u00EAn hi\u1EC3n th\u1ECB", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ((tmp_25_0 = ctx_r6.form.get("email")) == null ? null : tmp_25_0.value) || "email@example.com", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", (((tmp_26_0 = ctx_r6.form.get("roles")) == null ? null : tmp_26_0.value) || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](27, _c1)).length)("ngIfElse", noRole_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColor", ((tmp_28_0 = ctx_r6.form.get("isUsed")) == null ? null : tmp_28_0.value) ? "green" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ((tmp_29_0 = ctx_r6.form.get("isUsed")) == null ? null : tmp_29_0.value) ? "\u0110ang ho\u1EA1t \u0111\u1ED9ng" : "V\u00F4 hi\u1EC7u", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ((tmp_30_0 = ctx_r6.form.get("phoneNumber")) == null ? null : tmp_30_0.value) || "-", " ");
  }
}
function UserAdminPageComponent_ng_container_50_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "div", 120)(2, "nz-avatar", 121)(3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "div")(6, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const u_r12 = ctx.ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSize", 50)("nzSrc", u_r12.avatarUrl || undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx_r6.initials(u_r12.displayName, u_r12.email), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", u_r12.displayName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](u_r12.email);
  }
}
function UserAdminPageComponent_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, UserAdminPageComponent_ng_container_50_ng_container_1_Template, 10, 5, "ng-container", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "form", 73)(3, "nz-form-item")(4, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](5, "M\u1EADt kh\u1EA9u m\u1EDBi");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "nz-form-control", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](7, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "nz-form-item")(9, "nz-form-label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](10, "X\u00E1c nh\u1EADn l\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "nz-form-control", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](12, "input", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r6.editingPwdUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("formGroup", ctx_r6.pwdForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 24);
  }
}
function UserAdminPageComponent_ng_container_52_div_1_nz_tag_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "nz-tag", 70)(1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColor", ctx_r6.roleColor(r_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r6.roleLabel(r_r13));
  }
}
function UserAdminPageComponent_ng_container_52_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1, " Ch\u01B0a ph\u00E2n quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_container_52_div_1_a_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "a", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const v_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("href", "tel:" + v_r14.phoneNumber, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"]("", v_r14.phoneNumber, " ");
  }
}
function UserAdminPageComponent_ng_container_52_div_1_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_container_52_div_1_nz_tag_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "nz-tag", 70)(1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColor", ctx_r6.roleColor(r_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](ctx_r6.roleLabel(r_r15));
  }
}
function UserAdminPageComponent_ng_container_52_div_1_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](1, " Ch\u01B0a ph\u00E2n quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }
}
function UserAdminPageComponent_ng_container_52_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 125)(1, "div", 126)(2, "nz-avatar", 127)(3, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "div", 129)(6, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](9, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "div", 133)(12, "nz-space", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](13, UserAdminPageComponent_ng_container_52_div_1_nz_tag_13_Template, 3, 2, "nz-tag", 52)(14, UserAdminPageComponent_ng_container_52_div_1_span_14_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](15, "nz-tag", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](16, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](18, "nz-descriptions", 135)(19, "nz-descriptions-item", 136)(20, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](22, "nz-descriptions-item", 138)(23, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](25, "nz-descriptions-item", 140)(26, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](28, "nz-descriptions-item", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](29, UserAdminPageComponent_ng_container_52_div_1_a_29_Template, 3, 2, "a", 142)(30, UserAdminPageComponent_ng_container_52_div_1_span_30_Template, 2, 0, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](31, "nz-descriptions-item", 144)(32, "nz-space", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](33, UserAdminPageComponent_ng_container_52_div_1_nz_tag_33_Template, 3, 2, "nz-tag", 52)(34, UserAdminPageComponent_ng_container_52_div_1_span_34_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](35, "nz-descriptions-item", 145)(36, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](37, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](39, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](40, "nz-descriptions-item", 147)(41, "nz-tag", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](42, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const v_r14 = ctx.ngIf;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSize", 80)("nzSrc", v_r14.avatarUrl || undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", ctx_r6.initials(v_r14.displayName, v_r14.email), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](v_r14.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"]("", v_r14.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", v_r14.roles || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](34, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !v_r14.roles || v_r14.roles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColor", v_r14.isUsed !== false ? "green" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngClass", v_r14.isUsed !== false ? "fa-check-circle" : "fa-ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", v_r14.isUsed !== false ? "Ho\u1EA1t \u0111\u1ED9ng" : "V\u00F4 hi\u1EC7u", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColumn", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](v_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("href", "mailto:" + v_r14.email, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](v_r14.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](v_r14.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", v_r14.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !v_r14.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", v_r14.roles || _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](35, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !v_r14.roles || v_r14.roles.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", v_r14.createdAt ? _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind3"](39, 30, v_r14.createdAt, 0, 10) : "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzSpan", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzColor", v_r14.isUsed !== false ? "green" : "default");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngClass", v_r14.isUsed !== false ? "fa-check-circle" : "fa-ban");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", v_r14.isUsed !== false ? "Ho\u1EA1t \u0111\u1ED9ng" : "V\u00F4 hi\u1EC7u", " ");
  }
}
function UserAdminPageComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, UserAdminPageComponent_ng_container_52_div_1_Template, 44, 36, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r6.viewing());
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
    this.msg = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_12__.NzMessageService);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
    this.accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_account_account_service__WEBPACK_IMPORTED_MODULE_23__.AccountService);
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_22__.environment.apiUrl + 'admin/users';
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
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
      type: UserAdminPageComponent,
      selectors: [["app-user-admin-page"]],
      decls: 53,
      vars: 20,
      consts: [["userTable", ""], ["hasRows", ""], ["noRole", ""], ["nzTitle", "Ng\u01B0\u1EDDi d\u00F9ng", "nzSubtitle", "Qu\u1EA3n l\u00FD t\u00E0i kho\u1EA3n & ph\u00E2n quy\u1EC1n h\u1EC7 th\u1ED1ng", 1, "!mb-5", "!rounded-2xl", "!bg-white", "!px-6", "!py-5", "!shadow-sm"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-11", "!px-5", "!font-semibold", "!rounded-xl", 2, "background", "linear-gradient(135deg, #6366f1, #ec4899)", "border", "0", 3, "click"], [1, "fa", "fa-plus", "mr-2"], ["nzBorderless", "", 1, "!rounded-2xl", "!shadow-sm", "!mb-5"], [1, "grid", "grid-cols-1", "gap-3", "md:grid-cols-12", "md:items-center"], [1, "md:col-span-4"], ["nz-input", "", "nzBorderless", "", "placeholder", "T\u00ECm theo t\u00EAn, email, S\u0110T, vai tr\u00F2...", "name", "user-search", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", "!px-4", 3, "ngModelChange", "ngModel"], [1, "md:col-span-3"], ["nzPlaceHolder", "Vai tr\u00F2  ", "nzSize", "large", "nzAllowClear", "", "nzBorderless", "", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", 2, "width", "100%", 3, "ngModelChange", "ngModel"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzPlaceHolder", "Tr\u1EA1ng th\u00E1i  ", "nzSize", "large", "nzAllowClear", "", "nzBorderless", "", 1, "!h-[44px]", "!rounded-xl", "!bg-slate-50", 2, "width", "100%", 3, "ngModelChange", "ngModel"], ["nzValue", "active", "nzLabel", "\uD83D\uDFE2 \u0110ang ho\u1EA1t \u0111\u1ED9ng"], ["nzValue", "inactive", "nzLabel", "\u26D4 \u0110\u00E3 v\u00F4 hi\u1EC7u h\u00F3a (IsUsed = false)"], [1, "md:col-span-2"], ["nz-button", "", "nzType", "primary", "type", "button", 1, "!h-[44px]", "!rounded-xl", "!font-semibold", "!w-full", 3, "click"], [1, "fa", "fa-search", "mr-2"], [1, "!my-5"], [1, "flex", "flex-wrap", "gap-3", "mb-5"], ["class", "!rounded-full !px-4 !py-1 !text-sm !font-semibold", 3, "nzColor", 4, "ngFor", "ngForOf"], ["nzSize", "middle", 3, "nzData", "nzLoading", "nzScroll", "nzBordered", "nzShowPagination", "nzPageSize"], [1, "bg-slate-50"], ["nzWidth", "70px", 1, "!text-center", "!font-bold"], ["nzWidth", "80px", 1, "!font-bold"], [1, "!font-bold"], ["nzWidth", "150px", 1, "!font-bold"], ["nzWidth", "220px", 1, "!font-bold"], ["nzWidth", "120px", 1, "!font-bold"], ["nzWidth", "270px", "nzRight", "", 1, "!font-bold", "!text-right"], [4, "ngIf", "ngIfElse"], ["nzWidth", "780px", "nzOkText", "L\u01B0u", "nzCancelText", "H\u1EE7y", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], ["nzTitle", "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u", "nzWidth", "480px", "nzOkText", "C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u", "nzCancelText", "H\u1EE7y", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzOkLoading"], ["nzTitle", "Chi ti\u1EBFt ng\u01B0\u1EDDi d\u00F9ng", "nzWidth", "760px", "nzFooter", "null", 3, "nzOnCancel", "nzVisible"], [3, "nzLabel", "nzValue"], [1, "!rounded-full", "!px-4", "!py-1", "!text-sm", "!font-semibold", 3, "nzColor"], [1, "fa", "fa-circle", "mr-2", "text-[8px]"], [1, "ml-1"], ["colspan", "8", 1, "!py-16"], ["nzNotFoundContent", "Ch\u01B0a c\u00F3 ng\u01B0\u1EDDi d\u00F9ng n\u00E0o"], [4, "ngFor", "ngForOf"], [1, "!text-center", "font-semibold", "text-slate-600"], ["nzShape", "circle", 1, "avatar-initials", 3, "nzSize", "nzSrc"], [1, "font-bold", "text-white"], [1, "font-semibold", "text-slate-800"], ["class", "text-xs text-slate-500", 4, "ngIf"], [1, "text-slate-700"], [1, "text-slate-600"], [1, "fa", "fa-phone", "mr-2", "text-slate-400"], ["nzSize", "small"], ["class", "!rounded-lg !px-3", 3, "nzColor", 4, "ngFor", "ngForOf"], ["class", "text-xs text-slate-400", 4, "ngIf"], [1, "!rounded-full", "!px-3", 3, "nzColor"], [1, "fa", "mr-1.5", 3, "ngClass"], [1, "!text-right"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Xem chi ti\u1EBFt", 1, "!h-9", "!w-9", 3, "click"], [1, "fa", "fa-eye", "text-sky-600"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "S\u1EEDa th\u00F4ng tin", 1, "!h-9", "!w-9", 3, "click"], [1, "fa", "fa-pencil", "text-amber-600"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "\u0110\u1EB7t l\u1EA1i m\u1EADt kh\u1EA9u", 1, "!h-9", "!w-9", 3, "click"], [1, "fa", "fa-key", "text-amber-600"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", 1, "!h-9", "!w-9", 3, "click", "nzTooltipTitle"], [1, "fa", 3, "ngClass"], ["nzTitle", "B\u1EA1n c\u00F3 ch\u1EAFc mu\u1ED1n x\u00F3a ng\u01B0\u1EDDi d\u00F9ng n\u00E0y kh\u00F4ng?", "nzPopconfirmType", "danger", 3, "nzOnConfirm"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "X\u00F3a", "nz-popconfirm", "", 1, "!h-9", "!w-9"], [1, "fa", "fa-trash", "text-rose-500"], [1, "text-xs", "text-slate-500"], [1, "fa", "fa-clock-o", "mr-1"], [1, "!rounded-lg", "!px-3", 3, "nzColor"], [1, "font-semibold"], [1, "text-xs", "text-slate-400"], ["nz-form", "", "nzLayout", "vertical", 3, "formGroup"], [1, "grid", "grid-cols-12", "gap-5"], [1, "col-span-12", "lg:col-span-8", "space-y-4"], [1, "grid", "grid-cols-2", "gap-4"], [1, "!mb-0"], ["nzRequired", "", 3, "nzSpan"], ["nzErrorTip", "Email kh\u00F4ng h\u1EE3p l\u1EC7", 3, "nzSpan"], ["type", "email", "nz-input", "", "formControlName", "email", "placeholder", "admin@example.com", 1, "!h-11", "!rounded-xl"], [3, "nzSpan"], ["nz-input", "", "formControlName", "displayName", "placeholder", "Nguy\u1EC5n V\u0103n A", 1, "!h-11", "!rounded-xl"], ["nz-input", "", "formControlName", "phoneNumber", "placeholder", "+84...", 1, "!h-11", "!rounded-xl"], ["nz-input", "", "formControlName", "avatarUrl", "placeholder", "https://...", 1, "!h-11", "!rounded-xl"], ["nzOrientation", "left", 1, "!my-2", 3, "nzPlain"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-indigo-600"], [1, "fa", "fa-shield", "mr-2"], ["class", "grid grid-cols-2 gap-4", 4, "ngIf"], [4, "ngIf"], [1, "!mb-0", 2, "grid-column", "span 2 / span 2"], ["nzMode", "multiple", "nzPlaceHolder", "Ch\u1ECDn vai tr\u00F2...", "formControlName", "roles", 1, "w-full"], ["formControlName", "isUsed", "nzCheckedChildren", "HO\u1EA0T \u0110\u1ED8NG", "nzUnCheckedChildren", "V\u00D4 HI\u1EC6U"], [1, "col-span-12", "lg:col-span-4"], [1, "rounded-2xl", "border", "border-slate-200", "bg-gradient-to-br", "from-indigo-50", "via-purple-50", "to-pink-50", "p-5"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-indigo-600"], [1, "fa", "fa-user-circle", "mr-2"], [1, "flex", "flex-col", "items-center", "gap-4"], ["nzShape", "circle", 1, "shadow-lg", "ring-4", "ring-white", 2, "background", "linear-gradient(135deg, #6366f1, #ec4899)", 3, "nzSize", "nzSrc"], [1, "text-3xl", "font-black", "text-white"], [1, "text-center"], [1, "text-lg", "font-bold", "text-slate-800"], [1, "mt-2"], ["nzColor", "purple", "class", "!rounded-full", 4, "ngIf", "ngIfElse"], [1, "!my-5", "!opacity-50"], [1, "space-y-2", "text-xs"], [1, "flex", "justify-between"], [1, "text-slate-500"], [1, "!m-0", "!rounded-full", "!px-3", 3, "nzColor"], [1, "font-medium", "text-slate-700"], ["nzErrorTip", "T\u1ED1i thi\u1EC3u 6 k\u00FD t\u1EF1", 3, "nzSpan"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "!h-11", "!rounded-xl"], ["type", "password", "nz-input", "", "formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "!h-11", "!rounded-xl"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "M\u1EADt kh\u1EA9u m\u1EDBi", 1, "!h-11", "!rounded-xl"], ["type", "password", "nz-input", "", "formControlName", "confirmPassword", "placeholder", "X\u00E1c nh\u1EADn l\u1EA1i", 1, "!h-11", "!rounded-xl"], ["nzColor", "purple", 1, "!rounded-full"], [1, "text-[11px]", "text-slate-400", "italic"], ["type", "password", "nz-input", "", "formControlName", "newPassword", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi", 1, "!h-11", "!rounded-xl"], ["nzErrorTip", "M\u1EADt kh\u1EA9u kh\u00F4ng kh\u1EDBp", 3, "nzSpan"], ["type", "password", "nz-input", "", "formControlName", "confirmPassword", "placeholder", "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi", 1, "!h-11", "!rounded-xl"], [1, "mb-5", "flex", "items-center", "gap-4", "rounded-2xl", "border", "border-amber-200", "bg-amber-50", "p-4"], ["nzShape", "circle", 2, "background", "linear-gradient(135deg, #6366f1, #ec4899)", 3, "nzSize", "nzSrc"], [1, "text-sm", "font-bold", "text-amber-900"], [1, "text-xs", "text-amber-700"], ["class", "space-y-5 rounded-2xl border border-slate-200 bg-slate-50/60 p-5", 4, "ngIf"], [1, "space-y-5", "rounded-2xl", "border", "border-slate-200", "bg-slate-50/60", "p-5"], [1, "flex", "items-center", "gap-4", "rounded-2xl", "bg-white", "p-4", "ring-1", "ring-slate-200"], ["nzShape", "circle", 1, "avatar-initials", "shadow-md", "ring-4", "ring-white", 3, "nzSize", "nzSrc"], [1, "text-2xl", "font-black", "text-white"], [1, "flex-1", "min-w-0"], [1, "text-xl", "font-black", "text-slate-900", "truncate"], [1, "text-sm", "text-slate-600", "truncate", "mt-0.5"], [1, "fa", "fa-envelope-o", "mr-1.5", "text-slate-400"], [1, "mt-2.5", "flex", "flex-wrap", "items-center", "gap-2"], [1, "!rounded-full", "!px-3", "!ml-1", 3, "nzColor"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn"], ["nzTitle", "ID", 3, "nzSpan"], [1, "font-mono", "text-slate-700"], ["nzTitle", "Email", 3, "nzSpan"], [1, "text-sky-700", 3, "href"], ["nzTitle", "T\u00EAn hi\u1EC3n th\u1ECB", 3, "nzSpan"], ["nzTitle", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i", 3, "nzSpan"], ["class", "text-slate-700", 3, "href", 4, "ngIf"], ["class", "text-slate-400", 4, "ngIf"], ["nzTitle", "Vai tr\u00F2", 3, "nzSpan"], ["nzTitle", "Ng\u00E0y t\u1EA1o", 3, "nzSpan"], [1, "fa", "fa-clock-o", "mr-1.5", "text-slate-400"], ["nzTitle", "Tr\u1EA1ng th\u00E1i", 3, "nzSpan"], [1, "text-slate-700", 3, "href"], [1, "fa", "fa-phone", "mr-1.5", "text-slate-400"], [1, "text-slate-400"]],
      template: function UserAdminPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "nz-page-header", 3)(1, "nz-page-header-extra")(2, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function UserAdminPageComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](3, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4, " Th\u00EAm ng\u01B0\u1EDDi d\u00F9ng ");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "nz-card", 6)(6, "div", 7)(7, "div", 8)(8, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayListener"]("ngModelChange", function UserAdminPageComponent_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayBindingSet"](ctx.searchDraft, $event) || (ctx.searchDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](9, "div", 10)(10, "nz-select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayListener"]("ngModelChange", function UserAdminPageComponent_Template_nz_select_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayBindingSet"](ctx.roleDraft, $event) || (ctx.roleDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](11, UserAdminPageComponent_nz_option_11_Template, 1, 2, "nz-option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](12, "div", 10)(13, "nz-select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayListener"]("ngModelChange", function UserAdminPageComponent_Template_nz_select_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayBindingSet"](ctx.statusDraft, $event) || (ctx.statusDraft = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](14, "nz-option", 14)(15, "nz-option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](16, "div", 16)(17, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function UserAdminPageComponent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.applyFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](18, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](19, " T\u00ECm ki\u1EBFm ");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](20, "nz-divider", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](21, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](22, UserAdminPageComponent_nz_tag_22_Template, 5, 3, "nz-tag", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](23, "nz-table", 22, 0)(25, "thead")(26, "tr", 23)(27, "th", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](28, "STT");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](29, "th", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](30, "Avatar");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](31, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](32, "T\u00EAn hi\u1EC3n th\u1ECB");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](33, "th", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](34, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](35, "th", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](36, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](37, "th", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](38, "Vai tr\u00F2");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](39, "th", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](40, "Tr\u1EA1ng th\u00E1i");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](41, "th", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](42, " H\u00E0nh \u0111\u1ED9ng ");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](43, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](44, UserAdminPageComponent_ng_container_44_Template, 4, 0, "ng-container", 31)(45, UserAdminPageComponent_ng_template_45_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](47, "nz-modal", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("nzOnCancel", function UserAdminPageComponent_Template_nz_modal_nzOnCancel_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.close());
          })("nzOnOk", function UserAdminPageComponent_Template_nz_modal_nzOnOk_47_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](48, UserAdminPageComponent_ng_container_48_Template, 74, 28, "ng-container", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](49, "nz-modal", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("nzOnCancel", function UserAdminPageComponent_Template_nz_modal_nzOnCancel_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.closeResetPwd());
          })("nzOnOk", function UserAdminPageComponent_Template_nz_modal_nzOnOk_49_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.saveResetPwd());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](50, UserAdminPageComponent_ng_container_50_Template, 13, 6, "ng-container", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](51, "nz-modal", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("nzOnCancel", function UserAdminPageComponent_Template_nz_modal_nzOnCancel_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.closeView());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](52, UserAdminPageComponent_ng_container_52_Template, 2, 1, "ng-container", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const hasRows_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵreference"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayProperty"]("ngModel", ctx.searchDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayProperty"]("ngModel", ctx.roleDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", ctx.roleOptions);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtwoWayProperty"]("ngModel", ctx.statusDraft);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", ctx.stats());
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpureFunction0"](19, _c0))("nzBordered", false)("nzShowPagination", true)("nzPageSize", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.filteredRows().length === 0)("ngIfElse", hasRows_r16);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzVisible", ctx.modalOpen())("nzTitle", ctx.editing() ? "S\u1EEDa ng\u01B0\u1EDDi d\u00F9ng" : "Th\u00EAm ng\u01B0\u1EDDi d\u00F9ng m\u1EDBi")("nzOkLoading", ctx.saving());
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzVisible", ctx.pwdOpen())("nzOkLoading", ctx.pwdSaving());
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("nzVisible", ctx.viewOpen());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__.NzAvatarModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__.NzAvatarComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_25__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__.NzDescriptionsModule, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__.NzDescriptionsComponent, ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_7__.NzDescriptionsItemComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__.NzDividerModule, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_8__.NzDividerComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_9__.NzEmptyModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_9__.NzEmptyComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_27__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalModule, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalContentDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderComponent, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_14__.NzPageHeaderExtraDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_15__.NzPopconfirmModule, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_15__.NzPopconfirmComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_15__.NzPopconfirmDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectComponent, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_17__.NzSpaceModule, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_17__.NzSpaceComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__.NzSwitchModule, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__.NzSwitchComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableModule, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellFixedDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_20__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_20__.NzTagComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_21__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.SlicePipe],
      styles: [".role-chip[_ngcontent-%COMP%] {\n        display: inline-flex;\n        align-items: center;\n        gap: 4px;\n      }\n      .avatar-initials[_ngcontent-%COMP%] {\n        background: linear-gradient(135deg, #6366f1, #ec4899);\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItYWRtaW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixRQUFRO01BQ1Y7TUFDQTtRQUNFLHFEQUFxRDtNQUN2RCIsImZpbGUiOiJ1c2VyLWFkbWluLXBhZ2UuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAucm9sZS1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgfVxuICAgICAgLmF2YXRhci1pbml0aWFscyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICNlYzQ4OTkpO1xuICAgICAgfVxuICAgICJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vdXNlcnMvdXNlci1hZG1pbi1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLFFBQVE7TUFDVjtNQUNBO1FBQ0UscURBQXFEO01BQ3ZEOztBQUVOLDRtQkFBNG1CIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAucm9sZS1jaGlwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogNHB4O1xuICAgICAgfVxuICAgICAgLmF2YXRhci1pbml0aWFscyB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEsICNlYzQ4OTkpO1xuICAgICAgfVxuICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_users_user-admin-page_component_ts.94f3364cf84f63c7.js.map