"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_admin_routes_ts"],{

/***/ 249
/*!***************************************!*\
  !*** ./src/app/admin/admin.routes.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_ROUTES: () => (/* binding */ ADMIN_ROUTES)
/* harmony export */ });
/* harmony import */ var _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/admin-layout.component */ 5108);

const ADMIN_ROUTES = [{
  path: '',
  component: _layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__.AdminLayoutComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }, {
    path: 'dashboard',
    loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin-dashboard_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin-dashboard.component */ 233)).then(m => m.AdminDashboardComponent),
    data: {
      breadcrumb: 'Bảng điều khiển'
    }
  }, {
    path: 'companies',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-divider_mjs-node_modules_ng-zorro-a-05c99f"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-form_mjs-node_modules_ng-zorro-antd-3662d5"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("src_app_admin_companies_company-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./companies/company-admin-page.component */ 3178)).then(m => m.CompanyAdminPageComponent),
    data: {
      breadcrumb: 'Công ty'
    }
  }, {
    path: 'brands',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-divider_mjs-node_modules_ng-zorro-a-05c99f"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-form_mjs-node_modules_ng-zorro-antd-3662d5"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("src_app_admin_brands_brand-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./brands/brand-admin-page.component */ 6193)).then(m => m.BrandAdminPageComponent),
    data: {
      breadcrumb: 'Thương hiệu'
    }
  }, {
    path: 'electric-bikes',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-divider_mjs-node_modules_ng-zorro-a-05c99f"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-form_mjs-node_modules_ng-zorro-antd-3662d5"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("default-src_app_admin_shared_metadata-editor_metadata-editor_component_ts-src_app_services_br-210d5b"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_electric-bikes_electric-bike-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./electric-bikes/electric-bike-admin-page.component */ 9725)).then(m => m.ElectricBikeAdminPageComponent),
    data: {
      breadcrumb: 'Xe điện'
    }
  }, {
    path: 'agricultural-machines',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-divider_mjs-node_modules_ng-zorro-a-05c99f"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-form_mjs-node_modules_ng-zorro-antd-3662d5"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("default-src_app_admin_shared_metadata-editor_metadata-editor_component_ts-src_app_services_br-210d5b"), __webpack_require__.e("common"), __webpack_require__.e("src_app_admin_agricultural-machines_agricultural-machine-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./agricultural-machines/agricultural-machine-admin-page.component */ 7651)).then(m => m.AgriculturalMachineAdminPageComponent),
    data: {
      breadcrumb: 'Máy nông nghiệp'
    }
  }, {
    path: 'users',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-divider_mjs-node_modules_ng-zorro-a-05c99f"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-form_mjs-node_modules_ng-zorro-antd-3662d5"), __webpack_require__.e("src_app_admin_users_user-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/user-admin-page.component */ 7511)).then(m => m.UserAdminPageComponent),
    data: {
      breadcrumb: 'Người dùng'
    }
  }, {
    path: 'users/create-user',
    redirectTo: 'users',
    pathMatch: 'full'
  }, {
    path: 'media',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-divider_mjs-node_modules_ng-zorro-a-05c99f"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("src_app_admin_media_admin-media-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./media/admin-media-page.component */ 1250)).then(m => m.AdminMediaPageComponent),
    data: {
      breadcrumb: 'Thư viện ảnh'
    }
  }]
}];

/***/ },

/***/ 5108
/*!********************************************************!*\
  !*** ./src/app/admin/layout/admin-layout.component.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminLayoutComponent: () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8967);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 2715);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 5730);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 4859);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 7719);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5677);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../account/account.service */ 6672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/menu */ 6993);
























const _c0 = a0 => ({
  exact: a0
});
function AdminLayoutComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "E-Commerce");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function AdminLayoutComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", group_r2.title, " ");
  }
}
function AdminLayoutComponent_ng_container_7_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](item_r3.label);
  }
}
function AdminLayoutComponent_ng_container_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, AdminLayoutComponent_ng_container_7_a_2_span_2_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", item_r3.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](5, _c0, item_r3.path === "dashboard"))("nzTooltipTitle", ctx_r3.isCollapsed() ? item_r3.label : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", item_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r3.isCollapsed());
  }
}
function AdminLayoutComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AdminLayoutComponent_ng_container_7_div_1_Template, 2, 1, "div", 34)(2, AdminLayoutComponent_ng_container_7_a_2_Template, 3, 7, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const first_r5 = ctx.first;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !first_r5 && !ctx_r3.isCollapsed());
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", group_r2.items);
  }
}
function AdminLayoutComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " Phi\u00EAn b\u1EA3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "Admin v1.0.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function AdminLayoutComponent_nz_breadcrumb_item_14_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crumb_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", crumb_r6.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", crumb_r6.label, " ");
  }
}
function AdminLayoutComponent_nz_breadcrumb_item_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crumb_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", crumb_r6.label, " ");
  }
}
function AdminLayoutComponent_nz_breadcrumb_item_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "nz-breadcrumb-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, AdminLayoutComponent_nz_breadcrumb_item_14_a_1_Template, 2, 2, "a", 42)(2, AdminLayoutComponent_nz_breadcrumb_item_14_span_2_Template, 2, 1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crumb_r6 = ctx.$implicit;
    const last_r7 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !last_r7 && crumb_r6.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", last_r7);
  }
}
class AdminLayoutComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute);
    this.accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_account_account_service__WEBPACK_IMPORTED_MODULE_14__.AccountService);
    this.user = this.accountService.currentUser;
    this.isCollapsed = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "isCollapsed"
    }] : []));
    this.breadcrumbs = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.map)(() => this.buildBreadcrumb()));
    this.catalogGroup = [{
      path: 'companies',
      label: 'Công ty',
      icon: 'fa-building',
      group: 'Danh mục'
    }, {
      path: 'brands',
      label: 'Thương hiệu',
      icon: 'fa-tags',
      group: 'Danh mục'
    }, {
      path: 'electric-bikes',
      label: 'Xe điện',
      icon: 'fa-bicycle',
      group: 'Sản phẩm'
    }, {
      path: 'agricultural-machines',
      label: 'Máy nông nghiệp',
      icon: 'fa-cogs',
      group: 'Sản phẩm'
    }];
    this.systemGroup = [{
      path: 'users',
      label: 'Người dùng',
      icon: 'fa-users',
      group: 'Hệ thống'
    }, {
      path: 'media',
      label: 'Thư viện ảnh',
      icon: 'fa-picture-o',
      group: 'Hệ thống'
    }];
    this.menuGroups = [{
      title: 'Tổng quan',
      items: [{
        path: 'dashboard',
        label: 'Bảng điều khiển',
        icon: 'fa-tachometer'
      }]
    }, {
      title: 'Danh mục',
      items: this.catalogGroup.filter(i => i.group === 'Danh mục')
    }, {
      title: 'Sản phẩm',
      items: [...this.catalogGroup.filter(i => i.group === 'Sản phẩm')]
    }, {
      title: 'Hệ thống',
      items: this.systemGroup
    }];
  }
  get allLinks() {
    return this.menuGroups.reduce((acc, g) => acc.concat(g.items), []);
  }
  toggleCollapsed() {
    this.isCollapsed.set(!this.isCollapsed());
  }
  logout() {
    this.accountService.logout();
  }
  buildBreadcrumb() {
    const crumbs = [{
      label: 'Trang chủ quản trị',
      url: '/admin/dashboard'
    }];
    let current = this.route.root.firstChild;
    const stack = [];
    while (current) {
      const data = current.snapshot.data || {};
      const urlSegments = current.snapshot.url.map(s => s.path);
      if (data.breadcrumb && urlSegments.length > 0) {
        stack.push({
          label: data.breadcrumb,
          path: urlSegments.join('/')
        });
      }
      current = current.firstChild;
    }
    let prefix = '/admin';
    for (const s of stack) {
      prefix += `/${s.path}`;
      crumbs.push({
        label: s.label,
        url: prefix
      });
    }
    return crumbs;
  }
  static {
    this.ɵfac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminLayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      decls: 46,
      vars: 19,
      consts: [["userMenu", "nzDropdownMenu"], [1, "admin-root", 2, "min-height", "100vh"], ["nzWidth", "256", "nzTheme", "dark", 1, "admin-sider", 3, "nzCollapsible", "nzCollapsed", "nzTrigger"], [1, "brand-logo", 3, "title"], [1, "logo-badge"], [1, "fa", "fa-bolt"], [4, "ngIf"], [1, "flex-1", "overflow-y-auto", "overflow-x-hidden", "pb-4"], [4, "ngFor", "ngForOf"], ["class", "border-t border-white/5 px-6 py-4", 4, "ngIf"], [1, "admin-header", "flex", "items-center", "justify-between", "gap-4", "px-4", "md:px-8", 2, "height", "64px", "padding", "0"], [1, "flex", "items-center", "gap-4"], ["nz-button", "", "nzType", "text", "type", "button", 1, "!h-10", "!w-10", "!mr-6"], [1, "hidden", "md:block"], [1, "flex", "items-center", "gap-3"], ["nz-button", "", "nzType", "text", "type", "button", "nz-tooltip", "", "nzTooltipTitle", "Th\u00F4ng b\u00E1o", 1, "!h-10", "!w-10", "relative"], [3, "nzCount", "nzDot"], [1, "fa", "fa-bell-o", "text-lg", "text-slate-600"], ["nz-menu", "", 1, "admin-user-menu"], ["nz-menu-item", "", "nzDisabled", "", 1, "!cursor-default"], [1, "py-1"], [1, "text-sm", "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500"], ["nz-menu-divider", ""], ["nz-menu-item", "", 3, "click"], [1, "fa", "fa-sign-out", "mr-2", "text-rose-500"], [1, "font-medium", "text-slate-700"], ["nz-button", "", "nz-dropdown", "", "nzType", "text", "type", "button", "nzPlacement", "bottomRight", "nzTrigger", "click", 1, "!h-10", "!px-2", "flex", "items-center", "gap-3", "admin-user-btn", 3, "nzDropdownMenu"], ["nzShape", "circle", 2, "background", "linear-gradient(135deg, #0ea5e9, #6366f1)", 3, "nzSize"], [1, "font-bold"], [1, "hidden", "sm:block", "text-left", "leading-tight"], [1, "text-sm", "font-semibold", "text-slate-800"], [1, "fa", "fa-angle-down", "text-xs", "text-slate-400"], [1, "admin-content", "bg-[#f0f2f5]", "p-4", "md:p-6"], ["class", "menu-group-title", 4, "ngIf"], ["nz-tooltip", "", "routerLinkActive", "active", "class", "nav-link", "nzTooltipPlacement", "right", 3, "routerLink", "routerLinkActiveOptions", "nzTooltipTitle", 4, "ngFor", "ngForOf"], [1, "menu-group-title"], ["nz-tooltip", "", "routerLinkActive", "active", "nzTooltipPlacement", "right", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions", "nzTooltipTitle"], [1, "fa", 3, "ngClass"], [1, "border-t", "border-white/5", "px-6", "py-4"], [1, "mb-1", "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-slate-500"], [1, "text-sm", "text-slate-300"], ["class", "text-slate-500 hover:text-sky-600", 3, "routerLink", 4, "ngIf"], ["class", "font-semibold text-slate-800", 4, "ngIf"], [1, "text-slate-500", "hover:text-sky-600", 3, "routerLink"], [1, "font-semibold", "text-slate-800"]],
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "nz-layout", 1)(1, "nz-sider", 2)(2, "div", 3)(3, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, AdminLayoutComponent_span_5_Template, 2, 0, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, AdminLayoutComponent_ng_container_7_Template, 3, 2, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, AdminLayoutComponent_div_8_Template, 5, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "nz-layout")(10, "nz-header", 10)(11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "nz-breadcrumb", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, AdminLayoutComponent_nz_breadcrumb_item_14_Template, 3, 2, "nz-breadcrumb-item", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 14)(17, "button", 15)(18, "nz-badge", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "i", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "nz-dropdown-menu", null, 0)(22, "ul", 18)(23, "li", 19)(24, "div", 20)(25, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](29, "li", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "li", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_li_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.logout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](31, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, "\u0110\u0103ng xu\u1EA5t");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "button", 27)(35, "nz-avatar", 28)(36, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 30)(39, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](43, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "nz-content", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_12_0;
          let tmp_15_0;
          let tmp_16_0;
          let tmp_17_0;
          const userMenu_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("nzCollapsible", true)("nzCollapsed", ctx.isCollapsed())("nzTrigger", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("title", "E-Commerce Admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isCollapsed());
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.menuGroups);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.isCollapsed());
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 17, ctx.breadcrumbs));
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("nzCount", 0)("nzDot", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ((tmp_11_0 = ctx.user()) == null ? null : tmp_11_0.displayName) || "Qu\u1EA3n tr\u1ECB vi\u00EAn", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", (tmp_12_0 = ctx.user()) == null ? null : tmp_12_0.email, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("nzDropdownMenu", userMenu_r8);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("nzSize", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", (((tmp_15_0 = ctx.user()) == null ? null : tmp_15_0.displayName) || ((tmp_15_0 = ctx.user()) == null ? null : tmp_15_0.email) || "U").charAt(0).toUpperCase(), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ((tmp_16_0 = ctx.user()) == null ? null : tmp_16_0.displayName) || ((tmp_16_0 = ctx.user()) == null ? null : tmp_16_0.email), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", (tmp_17_0 = ctx.user()) == null ? null : tmp_17_0.email, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownModule, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__.NzMenuItemComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_17__.NzMenuDividerDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownDirective, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropdownMenuComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropdownButtonDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutModule, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzHeaderComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzContentComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzSiderComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__.NzBreadCrumbModule, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_8__.NzBreadCrumbItemComponent, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__.NzAvatarModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__.NzAvatarComponent, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__.NzBadgeModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_10__.NzBadgeComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzToolTipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_11__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.AsyncPipe],
      styles: ["[_nghost-%COMP%]     .ant-layout-sider {\n        position: relative;\n        background: #0f172a;\n      }\n      [_nghost-%COMP%]     .ant-layout-sider-children {\n        display: flex;\n        flex-direction: column;\n      }\n      [_nghost-%COMP%]     .ant-menu-dark {\n        background: transparent;\n      }\n      [_nghost-%COMP%]     .ant-menu-dark .ant-menu-item-selected {\n        background: linear-gradient(90deg, #0ea5e9, #6366f1);\n      }\n      [_nghost-%COMP%]     .ant-layout-header {\n        background: #fff;\n        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n      }\n      .brand-logo[_ngcontent-%COMP%] {\n        height: 64px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 10px;\n        color: #fff;\n        font-weight: 800;\n        font-size: 18px;\n        overflow: hidden;\n        white-space: nowrap;\n      }\n      .brand-logo[_ngcontent-%COMP%]   .logo-badge[_ngcontent-%COMP%] {\n        width: 36px;\n        height: 36px;\n        border-radius: 10px;\n        background: linear-gradient(135deg, #0ea5e9, #6366f1);\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 18px;\n        color: #fff;\n        flex-shrink: 0;\n      }\n      .menu-group-title[_ngcontent-%COMP%] {\n        padding: 16px 24px 6px;\n        font-size: 11px;\n        font-weight: 700;\n        color: #64748b;\n        text-transform: uppercase;\n        letter-spacing: 0.08em;\n      }\n      .nav-link[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        gap: 12px;\n        padding: 10px 24px;\n        margin: 2px 12px;\n        border-radius: 8px;\n        color: #cbd5e1;\n        font-size: 14px;\n        font-weight: 500;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        text-decoration: none;\n      }\n      .nav-link[_ngcontent-%COMP%]:hover {\n        background: rgba(255, 255, 255, 0.06);\n        color: #fff;\n      }\n      .nav-link.active[_ngcontent-%COMP%] {\n        background: linear-gradient(90deg, rgba(14, 165, 233, 0.18), rgba(99, 102, 241, 0.18));\n        color: #fff;\n        box-shadow: inset 3px 0 0 #38bdf8;\n      }\n      .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        width: 18px;\n        text-align: center;\n        font-size: 15px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usa0JBQWtCO1FBQ2xCLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtNQUN4QjtNQUNBO1FBQ0UsdUJBQXVCO01BQ3pCO01BQ0E7UUFDRSxvREFBb0Q7TUFDdEQ7TUFDQTtRQUNFLGdCQUFnQjtRQUNoQiwyQ0FBMkM7TUFDN0M7TUFDQTtRQUNFLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIscURBQXFEO1FBQ3JELG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixXQUFXO1FBQ1gsY0FBYztNQUNoQjtNQUNBO1FBQ0Usc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixzQkFBc0I7TUFDeEI7TUFDQTtRQUNFLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsU0FBUztRQUNULGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZix5QkFBeUI7UUFDekIscUJBQXFCO01BQ3ZCO01BQ0E7UUFDRSxxQ0FBcUM7UUFDckMsV0FBVztNQUNiO01BQ0E7UUFDRSxzRkFBc0Y7UUFDdEYsV0FBVztRQUNYLGlDQUFpQztNQUNuQztNQUNBO1FBQ0UsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO01BQ2pCIiwiZmlsZSI6ImFkbWluLWxheW91dC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dC1zaWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzBmMTcyYTtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dC1zaWRlci1jaGlsZHJlbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LWRhcmsge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICAgIDpob3N0IDo6bmctZGVlcCAuYW50LW1lbnUtZGFyayAuYW50LW1lbnUtaXRlbS1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzBlYTVlOSwgIzYzNjZmMSk7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMjEsIDQxLCAwLjA4KTtcbiAgICAgIH1cbiAgICAgIC5icmFuZC1sb2dvIHtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxMHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgICAgLmJyYW5kLWxvZ28gLmxvZ28tYmFkZ2Uge1xuICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMGVhNWU5LCAjNjM2NmYxKTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cbiAgICAgIC5tZW51LWdyb3VwLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAyNHB4IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcbiAgICAgIH1cbiAgICAgIC5uYXYtbGluayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAyNHB4O1xuICAgICAgICBtYXJnaW46IDJweCAxMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgICAgLm5hdi1saW5rOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE0LCAxNjUsIDIzMywgMC4xOCksIHJnYmEoOTksIDEwMiwgMjQxLCAwLjE4KSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAzcHggMCAwICMzOGJkZjg7XG4gICAgICB9XG4gICAgICAubmF2LWxpbmsgaSB7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIH1cbiAgICAiXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usa0JBQWtCO1FBQ2xCLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsYUFBYTtRQUNiLHNCQUFzQjtNQUN4QjtNQUNBO1FBQ0UsdUJBQXVCO01BQ3pCO01BQ0E7UUFDRSxvREFBb0Q7TUFDdEQ7TUFDQTtRQUNFLGdCQUFnQjtRQUNoQiwyQ0FBMkM7TUFDN0M7TUFDQTtRQUNFLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtNQUNyQjtNQUNBO1FBQ0UsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIscURBQXFEO1FBQ3JELG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixXQUFXO1FBQ1gsY0FBYztNQUNoQjtNQUNBO1FBQ0Usc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixzQkFBc0I7TUFDeEI7TUFDQTtRQUNFLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsU0FBUztRQUNULGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZix5QkFBeUI7UUFDekIscUJBQXFCO01BQ3ZCO01BQ0E7UUFDRSxxQ0FBcUM7UUFDckMsV0FBVztNQUNiO01BQ0E7UUFDRSxzRkFBc0Y7UUFDdEYsV0FBVztRQUNYLGlDQUFpQztNQUNuQztNQUNBO1FBQ0UsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO01BQ2pCOztBQUVOLG9tSUFBb21JIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtc2lkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwZjE3MmE7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtc2lkZXItY2hpbGRyZW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbWVudS1kYXJrIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICA6aG9zdCA6Om5nLWRlZXAgLmFudC1tZW51LWRhcmsgLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwZWE1ZTksICM2MzY2ZjEpO1xuICAgICAgfVxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC5hbnQtbGF5b3V0LWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDIxLCA0MSwgMC4wOCk7XG4gICAgICB9XG4gICAgICAuYnJhbmQtbG9nbyB7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMTBweDtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cbiAgICAgIC5icmFuZC1sb2dvIC5sb2dvLWJhZGdlIHtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzBlYTVlOSwgIzYzNjZmMSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgICAubWVudS1ncm91cC10aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjRweCA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gICAgICB9XG4gICAgICAubmF2LWxpbmsge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjRweDtcbiAgICAgICAgbWFyZ2luOiAycHggMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5uYXYtbGluazpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxNCwgMTY1LCAyMzMsIDAuMTgpLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xOCkpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgM3B4IDAgMCAjMzhiZGY4O1xuICAgICAgfVxuICAgICAgLm5hdi1saW5rIGkge1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 7719
/*!**********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-avatar.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzAvatarComponent: () => (/* binding */ NzAvatarComponent),
/* harmony export */   NzAvatarGroupComponent: () => (/* binding */ NzAvatarGroupComponent),
/* harmony export */   NzAvatarModule: () => (/* binding */ NzAvatarModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 4300);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6906);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 2715);







const _c0 = ["textEl"];
const _c1 = ["*"];
function NzAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-icon", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx_r0.nzIcon);
  }
}
function NzAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("error", function NzAvatarComponent_Conditional_1_Template_img_error_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.imgError($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.nzSrc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("srcset", ctx_r0.nzSrcSet)("alt", ctx_r0.nzAlt)("loading", ctx_r0.nzLoading() || "eager")("fetchpriority", ctx_r0.nzFetchPriority() || "auto");
  }
}
function NzAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nzText);
  }
}
const NZ_CONFIG_MODULE_NAME = 'avatar';
let NzAvatarComponent = (() => {
  let _nzShape_decorators;
  let _nzShape_initializers = [];
  let _nzShape_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzGap_decorators;
  let _nzGap_initializers = [];
  let _nzGap_extraInitializers = [];
  return class NzAvatarComponent {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
      _nzShape_decorators = [(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__.WithConfig)()];
      _nzSize_decorators = [(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__.WithConfig)()];
      _nzGap_decorators = [(0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_4__.WithConfig)()];
      (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__esDecorate)(null, null, _nzShape_decorators, {
        kind: "field",
        name: "nzShape",
        static: false,
        private: false,
        access: {
          has: obj => "nzShape" in obj,
          get: obj => obj.nzShape,
          set: (obj, value) => {
            obj.nzShape = value;
          }
        },
        metadata: _metadata
      }, _nzShape_initializers, _nzShape_extraInitializers);
      (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__esDecorate)(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: obj => "nzSize" in obj,
          get: obj => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__esDecorate)(null, null, _nzGap_decorators, {
        kind: "field",
        name: "nzGap",
        static: false,
        private: false,
        access: {
          has: obj => "nzGap" in obj,
          get: obj => obj.nzGap,
          set: (obj, value) => {
            obj.nzGap = value;
          }
        },
        metadata: _metadata
      }, _nzGap_initializers, _nzGap_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzShape = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__runInitializers)(this, _nzShape_initializers, 'circle');
    nzSize = ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__runInitializers)(this, _nzShape_extraInitializers), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__runInitializers)(this, _nzSize_initializers, 'default'));
    nzGap = ((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__runInitializers)(this, _nzSize_extraInitializers), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__runInitializers)(this, _nzGap_initializers, 4));
    nzText = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__runInitializers)(this, _nzGap_extraInitializers);
    nzSrc;
    nzSrcSet;
    nzAlt;
    nzIcon;
    nzLoading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
      debugName: "nzLoading"
    }] : []));
    nzFetchPriority = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.input)(...(ngDevMode ? [undefined, {
      debugName: "nzFetchPriority"
    }] : []));
    nzError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    hasText = false;
    hasSrc = true;
    hasIcon = false;
    customSize = null;
    textEl;
    el = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef).nativeElement;
    cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
    constructor() {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.afterEveryRender)(() => this.calcStringSize());
    }
    imgError(event) {
      this.nzError.emit(event);
      if (!event.defaultPrevented) {
        this.hasSrc = false;
        this.hasIcon = false;
        this.hasText = false;
        if (this.nzIcon) {
          this.hasIcon = true;
        } else if (this.nzText) {
          this.hasText = true;
        }
        this.cdr.detectChanges();
        this.setSizeStyle();
        this.calcStringSize();
      }
    }
    ngOnChanges() {
      this.hasText = !this.nzSrc && !!this.nzText;
      this.hasIcon = !this.nzSrc && !!this.nzIcon;
      this.hasSrc = !!this.nzSrc;
      this.setSizeStyle();
      this.calcStringSize();
    }
    calcStringSize() {
      if (!this.hasText || !this.textEl) {
        return;
      }
      const textEl = this.textEl.nativeElement;
      const childrenWidth = textEl.offsetWidth;
      const avatarWidth = this.el.getBoundingClientRect?.().width ?? 0;
      const offset = this.nzGap * 2 < avatarWidth ? this.nzGap * 2 : 8;
      const scale = avatarWidth - offset < childrenWidth ? (avatarWidth - offset) / childrenWidth : 1;
      textEl.style.transform = `scale(${scale}) translateX(-50%)`;
      textEl.style.lineHeight = this.customSize || '';
    }
    setSizeStyle() {
      if (typeof this.nzSize === 'number') {
        this.customSize = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_5__.toCssPixel)(this.nzSize);
      } else {
        this.customSize = null;
      }
      this.cdr.markForCheck();
    }
    static ɵfac = function NzAvatarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzAvatarComponent)();
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: NzAvatarComponent,
      selectors: [["nz-avatar"]],
      viewQuery: function NzAvatarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.textEl = _t.first);
        }
      },
      hostAttrs: [1, "ant-avatar"],
      hostVars: 20,
      hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
        }
      },
      inputs: {
        nzShape: "nzShape",
        nzSize: "nzSize",
        nzGap: [2, "nzGap", "nzGap", _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute],
        nzText: "nzText",
        nzSrc: "nzSrc",
        nzSrcSet: "nzSrcSet",
        nzAlt: "nzAlt",
        nzIcon: "nzIcon",
        nzLoading: [1, "nzLoading"],
        nzFetchPriority: [1, "nzFetchPriority"]
      },
      outputs: {
        nzError: "nzError"
      },
      exportAs: ["nzAvatar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 1,
      consts: [["textEl", ""], [3, "nzType"], [3, "src"], [1, "ant-avatar-string"], [3, "error", "src"]],
      template: function NzAvatarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, NzAvatarComponent_Conditional_0_Template, 1, 1, "nz-icon", 1)(1, NzAvatarComponent_Conditional_1_Template, 1, 5, "img", 2)(2, NzAvatarComponent_Conditional_2_Template, 3, 1, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.nzIcon && ctx.hasIcon ? 0 : ctx.nzSrc && ctx.hasSrc ? 1 : ctx.nzText && ctx.hasText ? 2 : -1);
        }
      },
      dependencies: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective],
      encapsulation: 2,
      changeDetection: 0
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzAvatarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'nz-avatar',
      exportAs: 'nzAvatar',
      imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule],
      template: `
    @if (nzIcon && hasIcon) {
      <nz-icon [nzType]="nzIcon" />
    } @else if (nzSrc && hasSrc) {
      <img
        [src]="nzSrc"
        [attr.srcset]="nzSrcSet"
        [attr.alt]="nzAlt"
        [attr.loading]="nzLoading() || 'eager'"
        [attr.fetchpriority]="nzFetchPriority() || 'auto'"
        (error)="imgError($event)"
      />
    } @else if (nzText && hasText) {
      <span class="ant-avatar-string" #textEl>{{ nzText }}</span>
    }
    <ng-content></ng-content>
  `,
      host: {
        class: 'ant-avatar',
        '[class.ant-avatar-lg]': `nzSize === 'large'`,
        '[class.ant-avatar-sm]': `nzSize === 'small'`,
        '[class.ant-avatar-square]': `nzShape === 'square'`,
        '[class.ant-avatar-circle]': `nzShape === 'circle'`,
        '[class.ant-avatar-icon]': `nzIcon`,
        '[class.ant-avatar-image]': `hasSrc `,
        '[style.width]': 'customSize',
        '[style.height]': 'customSize',
        '[style.line-height]': 'customSize',
        // nzSize type is number when customSize is true
        '[style.font-size.px]': '(hasIcon && customSize) ? $any(nzSize) / 2 : null'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None
    }]
  }], () => [], {
    nzShape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzGap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_3__.numberAttribute
      }]
    }],
    nzText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzSrcSet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzAlt: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    textEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: ['textEl', {
        static: false
      }]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAvatarGroupComponent {
  static ɵfac = function NzAvatarGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzAvatarGroupComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzAvatarGroupComponent,
    selectors: [["nz-avatar-group"]],
    hostAttrs: [1, "ant-avatar-group"],
    exportAs: ["nzAvatarGroup"],
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    template: function NzAvatarGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzAvatarGroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'nz-avatar-group',
      exportAs: 'nzAvatarGroup',
      template: `<ng-content></ng-content>`,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'ant-avatar-group'
      }
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzAvatarModule {
  static ɵfac = function NzAvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzAvatarModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NzAvatarModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [NzAvatarComponent]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzAvatarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      exports: [NzAvatarComponent, NzAvatarGroupComponent],
      imports: [NzAvatarComponent, NzAvatarGroupComponent]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ },

/***/ 4859
/*!**************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-breadcrumb.mjs ***!
  \**************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzBreadCrumbComponent: () => (/* binding */ NzBreadCrumbComponent),
/* harmony export */   NzBreadCrumbItemComponent: () => (/* binding */ NzBreadCrumbItemComponent),
/* harmony export */   NzBreadCrumbModule: () => (/* binding */ NzBreadCrumbModule),
/* harmony export */   NzBreadCrumbSeparatorComponent: () => (/* binding */ NzBreadCrumbSeparatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 3317);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8967);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 2715);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 7170);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/logger */ 4658);















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * https://angular.io/errors/NG3003
 * An intermediate interface for {@link NzBreadCrumbComponent} & {@link NzBreadCrumbItemComponent}
 */
const _c0 = ["*"];
function NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template(rf, ctx) {}
function NzBreadCrumbItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBreadCrumbItemComponent_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nz-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const noMenuTpl_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzDropdownMenu", ctx_r0.nzOverlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", noMenuTpl_r2);
  }
}
function NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template(rf, ctx) {}
function NzBreadCrumbItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, NzBreadCrumbItemComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const noMenuTpl_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", noMenuTpl_r2);
  }
}
function NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.nzBreadCrumbComponent.nzSeparator, " ");
  }
}
function NzBreadCrumbItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-breadcrumb-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzBreadCrumbItemComponent_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzBreadCrumbComponent.nzSeparator);
  }
}
function NzBreadCrumbItemComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _forTrack0 = ($index, $item) => $item.url;
function NzBreadCrumbComponent_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-breadcrumb-item")(1, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NzBreadCrumbComponent_Conditional_1_For_1_Template_a_click_1_listener($event) {
      const breadcrumb_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.navigate(breadcrumb_r2.url, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("href", breadcrumb_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](breadcrumb_r2.label);
  }
}
function NzBreadCrumbComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](0, NzBreadCrumbComponent_Conditional_1_For_1_Template, 3, 2, "nz-breadcrumb-item", null, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx_r2.breadcrumbs);
  }
}
class NzBreadcrumb {}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzBreadCrumbSeparatorComponent {
  static ɵfac = function NzBreadCrumbSeparatorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzBreadCrumbSeparatorComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzBreadCrumbSeparatorComponent,
    selectors: [["nz-breadcrumb-separator"]],
    hostAttrs: [1, "ant-breadcrumb-separator"],
    exportAs: ["nzBreadcrumbSeparator"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzBreadCrumbSeparatorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzBreadCrumbSeparatorComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'nz-breadcrumb-separator',
      exportAs: 'nzBreadcrumbSeparator',
      template: `<ng-content></ng-content>`,
      host: {
        class: 'ant-breadcrumb-separator'
      }
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzBreadCrumbItemComponent {
  nzBreadCrumbComponent = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(NzBreadcrumb);
  /**
   * Dropdown content of a breadcrumb item.
   */
  nzOverlay;
  static ɵfac = function NzBreadCrumbItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzBreadCrumbItemComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzBreadCrumbItemComponent,
    selectors: [["nz-breadcrumb-item"]],
    inputs: {
      nzOverlay: "nzOverlay"
    },
    exportAs: ["nzBreadcrumbItem"],
    ngContentSelectors: _c0,
    decls: 5,
    vars: 2,
    consts: [["noMenuTpl", ""], ["nz-dropdown", "", 1, "ant-breadcrumb-overlay-link", 3, "nzDropdownMenu"], [3, "ngTemplateOutlet"], ["nzType", "down"], [4, "nzStringTemplateOutlet"], [1, "ant-breadcrumb-link"]],
    template: function NzBreadCrumbItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, NzBreadCrumbItemComponent_Conditional_0_Template, 3, 2, "span", 1)(1, NzBreadCrumbItemComponent_Conditional_1_Template, 1, 1, null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](2, NzBreadCrumbItemComponent_Conditional_2_Template, 2, 1, "nz-breadcrumb-separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NzBreadCrumbItemComponent_ng_template_3_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](!!ctx.nzOverlay ? 0 : 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.nzBreadCrumbComponent.nzSeparator ? 2 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgTemplateOutlet, NzBreadCrumbSeparatorComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownModule, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__.NzOutletModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__.NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzBreadCrumbItemComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'nz-breadcrumb-item',
      exportAs: 'nzBreadcrumbItem',
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgTemplateOutlet, NzBreadCrumbSeparatorComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_5__.NzDropDownModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_4__.NzOutletModule],
      template: `
    @if (!!nzOverlay) {
      <span class="ant-breadcrumb-overlay-link" nz-dropdown [nzDropdownMenu]="nzOverlay">
        <ng-template [ngTemplateOutlet]="noMenuTpl"></ng-template>
        <nz-icon nzType="down" />
      </span>
    } @else {
      <ng-template [ngTemplateOutlet]="noMenuTpl" />
    }

    @if (nzBreadCrumbComponent.nzSeparator) {
      <nz-breadcrumb-separator>
        <ng-container *nzStringTemplateOutlet="nzBreadCrumbComponent.nzSeparator">
          {{ nzBreadCrumbComponent.nzSeparator }}
        </ng-container>
      </nz-breadcrumb-separator>
    }

    <ng-template #noMenuTpl>
      <span class="ant-breadcrumb-link">
        <ng-content />
      </span>
    </ng-template>
  `
    }]
  }], null, {
    nzOverlay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzBreadCrumbComponent {
  injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
  elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
  renderer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2);
  directionality = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Directionality);
  destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
  nzAutoGenerate = false;
  nzSeparator = '/';
  nzRouteLabel = 'breadcrumb';
  nzRouteLabelFn = label => label;
  nzRouteFn = route => route;
  breadcrumbs = [];
  dir = 'ltr';
  ngOnInit() {
    if (this.nzAutoGenerate) {
      this.registerRouterChange();
    }
    this.directionality.change?.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef)).subscribe(direction => {
      this.dir = direction;
      this.prepareComponentForRtl();
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.prepareComponentForRtl();
  }
  navigate(url, e) {
    e.preventDefault();
    this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router).navigateByUrl(url);
  }
  registerRouterChange() {
    try {
      const router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router);
      const activatedRoute = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute);
      router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd), (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(this.destroyRef), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(true) // trigger initial render
      ).subscribe(() => {
        this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
        this.cdr.markForCheck();
      });
    } catch {
      throw new Error(`${ng_zorro_antd_core_logger__WEBPACK_IMPORTED_MODULE_12__.PREFIX} You should import RouterModule if you want to use 'NzAutoGenerate'.`);
    }
  }
  getBreadcrumbs(route, url = '', breadcrumbs = []) {
    const children = route.children;
    // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_9__.PRIMARY_OUTLET) {
        // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
        // Parse this layer and generate a breadcrumb item.
        const routeUrl = child.snapshot.url.map(segment => segment.path).filter(path => path).join('/');
        // Do not change nextUrl if routeUrl is falsy. This happens when it's a route lazy loading other modules.
        const nextUrl = routeUrl ? `${url}/${routeUrl}` : url;
        const breadcrumbLabel = this.nzRouteLabelFn(child.snapshot.data[this.nzRouteLabel]);
        const shapedUrl = this.nzRouteFn(nextUrl);
        // If have data, go to generate a breadcrumb for it.
        if (routeUrl && breadcrumbLabel) {
          const breadcrumb = {
            label: breadcrumbLabel,
            params: child.snapshot.params,
            url: shapedUrl
          };
          breadcrumbs.push(breadcrumb);
        }
        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }
    return breadcrumbs;
  }
  prepareComponentForRtl() {
    if (this.dir === 'rtl') {
      this.renderer.addClass(this.elementRef.nativeElement, 'ant-breadcrumb-rtl');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'ant-breadcrumb-rtl');
    }
  }
  static ɵfac = function NzBreadCrumbComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzBreadCrumbComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzBreadCrumbComponent,
    selectors: [["nz-breadcrumb"]],
    hostAttrs: [1, "ant-breadcrumb"],
    inputs: {
      nzAutoGenerate: [2, "nzAutoGenerate", "nzAutoGenerate", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute],
      nzSeparator: "nzSeparator",
      nzRouteLabel: "nzRouteLabel",
      nzRouteLabelFn: "nzRouteLabelFn",
      nzRouteFn: "nzRouteFn"
    },
    exportAs: ["nzBreadcrumb"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
      provide: NzBreadcrumb,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => NzBreadCrumbComponent)
    }])],
    ngContentSelectors: _c0,
    decls: 2,
    vars: 1,
    consts: [[3, "click"]],
    template: function NzBreadCrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](1, NzBreadCrumbComponent_Conditional_1_Template, 2, 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.nzAutoGenerate && ctx.breadcrumbs.length ? 1 : -1);
      }
    },
    dependencies: [NzBreadCrumbItemComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzBreadCrumbComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'nz-breadcrumb',
      exportAs: 'nzBreadcrumb',
      providers: [{
        provide: NzBreadcrumb,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => NzBreadCrumbComponent)
      }],
      imports: [NzBreadCrumbItemComponent],
      template: `
    <ng-content />
    @if (nzAutoGenerate && breadcrumbs.length) {
      @for (breadcrumb of breadcrumbs; track breadcrumb.url) {
        <nz-breadcrumb-item>
          <a [attr.href]="breadcrumb.url" (click)="navigate(breadcrumb.url, $event)">{{ breadcrumb.label }}</a>
        </nz-breadcrumb-item>
      }
    }
  `,
      host: {
        class: 'ant-breadcrumb'
      }
    }]
  }], null, {
    nzAutoGenerate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute
      }]
    }],
    nzSeparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzRouteLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzRouteLabelFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzRouteFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzBreadCrumbModule {
  static ɵfac = function NzBreadCrumbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzBreadCrumbModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NzBreadCrumbModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzBreadCrumbModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent],
      exports: [NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbSeparatorComponent]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ },

/***/ 5730
/*!**********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-layout.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzContentComponent: () => (/* binding */ NzContentComponent),
/* harmony export */   NzFooterComponent: () => (/* binding */ NzFooterComponent),
/* harmony export */   NzHeaderComponent: () => (/* binding */ NzHeaderComponent),
/* harmony export */   NzLayoutComponent: () => (/* binding */ NzLayoutComponent),
/* harmony export */   NzLayoutModule: () => (/* binding */ NzLayoutModule),
/* harmony export */   NzSiderComponent: () => (/* binding */ NzSiderComponent),
/* harmony export */   "ɵNzSiderTriggerComponent": () => (/* binding */ NzSiderTriggerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 7170);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 7579);
/* harmony import */ var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/services */ 9062);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6906);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/menu */ 6993);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 2715);












/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["*"];
const _c1 = ["nz-sider-trigger", ""];
function NzSiderTriggerComponent_Conditional_0_ng_template_0_Template(rf, ctx) {}
function NzSiderTriggerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzSiderTriggerComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const defaultZeroTrigger_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzZeroTrigger || defaultZeroTrigger_r2);
  }
}
function NzSiderTriggerComponent_Conditional_1_ng_template_0_Template(rf, ctx) {}
function NzSiderTriggerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NzSiderTriggerComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const defaultTrigger_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzTrigger || defaultTrigger_r3);
  }
}
function NzSiderTriggerComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r0.nzCollapsed ? "left" : "right");
  }
}
function NzSiderTriggerComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx_r0.nzCollapsed ? "right" : "left");
  }
}
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](0, NzSiderTriggerComponent_ng_template_2_Conditional_0_Template, 1, 1, "nz-icon", 3)(1, NzSiderTriggerComponent_ng_template_2_Conditional_1_Template, 1, 1, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r0.nzReverseArrow ? 0 : 1);
  }
}
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-icon", 4);
  }
}
function NzSiderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NzSiderComponent_Conditional_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.setCollapsed(!ctx_r1.nzCollapsed));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matchBreakPoint", ctx_r1.matchBreakPoint)("nzCollapsedWidth", ctx_r1.nzCollapsedWidth)("nzCollapsed", ctx_r1.nzCollapsed)("nzBreakpoint", ctx_r1.nzBreakpoint)("nzReverseArrow", ctx_r1.nzReverseArrow)("nzTrigger", ctx_r1.nzTrigger)("nzZeroTrigger", ctx_r1.nzZeroTrigger)("siderWidth", ctx_r1.widthSetting);
  }
}
class NzContentComponent {
  static ɵfac = function NzContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzContentComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzContentComponent,
    selectors: [["nz-content"]],
    hostAttrs: [1, "ant-layout-content"],
    exportAs: ["nzContent"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzContentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-content',
      exportAs: 'nzContent',
      template: `<ng-content></ng-content>`,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'ant-layout-content'
      }
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzFooterComponent {
  static ɵfac = function NzFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzFooterComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzFooterComponent,
    selectors: [["nz-footer"]],
    hostAttrs: [1, "ant-layout-footer"],
    exportAs: ["nzFooter"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-footer',
      exportAs: 'nzFooter',
      template: `<ng-content></ng-content>`,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'ant-layout-footer'
      }
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzHeaderComponent {
  static ɵfac = function NzHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzHeaderComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzHeaderComponent,
    selectors: [["nz-header"]],
    hostAttrs: [1, "ant-layout-header"],
    exportAs: ["nzHeader"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-header',
      exportAs: 'nzHeader',
      template: `<ng-content></ng-content>`,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      host: {
        class: 'ant-layout-header'
      }
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSiderTriggerComponent {
  nzCollapsed = false;
  nzReverseArrow = false;
  nzZeroTrigger = null;
  nzTrigger = undefined;
  matchBreakPoint = false;
  nzCollapsedWidth = null;
  siderWidth = null;
  nzBreakpoint = null;
  isZeroTrigger = false;
  isNormalTrigger = false;
  updateTriggerType() {
    this.isZeroTrigger = this.nzCollapsedWidth === 0 && (this.nzBreakpoint && this.matchBreakPoint || !this.nzBreakpoint);
    this.isNormalTrigger = this.nzCollapsedWidth !== 0;
  }
  ngOnInit() {
    this.updateTriggerType();
  }
  ngOnChanges() {
    this.updateTriggerType();
  }
  static ɵfac = function NzSiderTriggerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzSiderTriggerComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzSiderTriggerComponent,
    selectors: [["", "nz-sider-trigger", ""]],
    hostVars: 10,
    hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
      }
    },
    inputs: {
      nzCollapsed: "nzCollapsed",
      nzReverseArrow: "nzReverseArrow",
      nzZeroTrigger: "nzZeroTrigger",
      nzTrigger: "nzTrigger",
      matchBreakPoint: "matchBreakPoint",
      nzCollapsedWidth: "nzCollapsedWidth",
      siderWidth: "siderWidth",
      nzBreakpoint: "nzBreakpoint"
    },
    exportAs: ["nzSiderTrigger"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    attrs: _c1,
    decls: 6,
    vars: 2,
    consts: [["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], [3, "nzType"], ["nzType", "bars"]],
    template: function NzSiderTriggerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](0, NzSiderTriggerComponent_Conditional_0_Template, 1, 1, null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](1, NzSiderTriggerComponent_Conditional_1_Template, 1, 1, null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NzSiderTriggerComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isZeroTrigger ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isNormalTrigger ? 1 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzSiderTriggerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: '[nz-sider-trigger]',
      exportAs: 'nzSiderTrigger',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: `
    @if (isZeroTrigger) {
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger" />
    }

    @if (isNormalTrigger) {
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger" />
    }
    <ng-template #defaultTrigger>
      @if (nzReverseArrow) {
        <nz-icon [nzType]="nzCollapsed ? 'left' : 'right'" />
      } @else {
        <nz-icon [nzType]="nzCollapsed ? 'right' : 'left'" />
      }
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <nz-icon nzType="bars" />
    </ng-template>
  `,
      host: {
        '[class.ant-layout-sider-trigger]': 'isNormalTrigger',
        '[style.width]': 'isNormalTrigger ? siderWidth : null',
        '[class.ant-layout-sider-zero-width-trigger]': 'isZeroTrigger',
        '[class.ant-layout-sider-zero-width-trigger-right]': 'isZeroTrigger && nzReverseArrow',
        '[class.ant-layout-sider-zero-width-trigger-left]': 'isZeroTrigger && !nzReverseArrow'
      },
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconModule]
    }]
  }], null, {
    nzCollapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzReverseArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzZeroTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    matchBreakPoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzCollapsedWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    siderWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzBreakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSiderComponent {
  destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef);
  breakpointService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__.NzBreakpointService);
  nzMenuDirective = null;
  nzCollapsedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  nzWidth = 200;
  nzTheme = 'dark';
  nzCollapsedWidth = 80;
  nzBreakpoint = null;
  nzZeroTrigger = null;
  nzTrigger = undefined;
  nzReverseArrow = false;
  nzCollapsible = false;
  nzCollapsed = false;
  matchBreakPoint = false;
  flexSetting = null;
  widthSetting = null;
  updateStyleMap() {
    this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.toCssPixel)(this.nzWidth);
    this.flexSetting = `0 0 ${this.widthSetting}`;
    this.cdr.markForCheck();
  }
  updateMenuInlineCollapsed() {
    if (this.nzMenuDirective && this.nzMenuDirective.nzMode === 'inline' && this.nzCollapsedWidth !== 0) {
      this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
    }
  }
  setCollapsed(collapsed) {
    if (collapsed !== this.nzCollapsed) {
      this.nzCollapsed = collapsed;
      this.nzCollapsedChange.emit(collapsed);
      this.updateMenuInlineCollapsed();
      this.updateStyleMap();
      this.cdr.markForCheck();
    }
  }
  ngOnInit() {
    this.updateStyleMap();
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_6__.siderResponsiveMap, true).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(map => {
        const breakpoint = this.nzBreakpoint;
        if (breakpoint) {
          (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_7__.inNextTick)().subscribe(() => {
            this.matchBreakPoint = !map[breakpoint];
            this.setCollapsed(this.matchBreakPoint);
            this.cdr.markForCheck();
          });
        }
      });
    }
  }
  ngOnChanges(changes) {
    const {
      nzCollapsed,
      nzCollapsedWidth,
      nzWidth
    } = changes;
    if (nzCollapsed || nzCollapsedWidth || nzWidth) {
      this.updateStyleMap();
    }
    if (nzCollapsed) {
      this.updateMenuInlineCollapsed();
    }
  }
  ngAfterContentInit() {
    this.updateMenuInlineCollapsed();
  }
  static ɵfac = function NzSiderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzSiderComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzSiderComponent,
    selectors: [["nz-sider"]],
    contentQueries: function NzSiderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuDirective, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nzMenuDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-layout-sider"],
    hostVars: 18,
    hostBindings: function NzSiderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-dark", ctx.nzTheme === "dark")("ant-layout-sider-collapsed", ctx.nzCollapsed)("ant-layout-sider-has-trigger", ctx.nzCollapsible && ctx.nzTrigger !== null);
      }
    },
    inputs: {
      nzWidth: "nzWidth",
      nzTheme: "nzTheme",
      nzCollapsedWidth: "nzCollapsedWidth",
      nzBreakpoint: "nzBreakpoint",
      nzZeroTrigger: "nzZeroTrigger",
      nzTrigger: "nzTrigger",
      nzReverseArrow: [2, "nzReverseArrow", "nzReverseArrow", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      nzCollapsible: [2, "nzCollapsible", "nzCollapsible", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      nzCollapsed: [2, "nzCollapsed", "nzCollapsed", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
    },
    outputs: {
      nzCollapsedChange: "nzCollapsedChange"
    },
    exportAs: ["nzSider"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [[1, "ant-layout-sider-children"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth"], ["nz-sider-trigger", "", 3, "click", "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth"]],
    template: function NzSiderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](2, NzSiderComponent_Conditional_2_Template, 1, 8, "div", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.nzCollapsible && ctx.nzTrigger !== null ? 2 : -1);
      }
    },
    dependencies: [NzSiderTriggerComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzSiderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-sider',
      exportAs: 'nzSider',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: `
    <div class="ant-layout-sider-children">
      <ng-content></ng-content>
    </div>
    @if (nzCollapsible && nzTrigger !== null) {
      <div
        nz-sider-trigger
        [matchBreakPoint]="matchBreakPoint"
        [nzCollapsedWidth]="nzCollapsedWidth"
        [nzCollapsed]="nzCollapsed"
        [nzBreakpoint]="nzBreakpoint"
        [nzReverseArrow]="nzReverseArrow"
        [nzTrigger]="nzTrigger"
        [nzZeroTrigger]="nzZeroTrigger"
        [siderWidth]="widthSetting"
        (click)="setCollapsed(!nzCollapsed)"
      ></div>
    }
  `,
      host: {
        class: 'ant-layout-sider',
        '[class.ant-layout-sider-zero-width]': `nzCollapsed && nzCollapsedWidth === 0`,
        '[class.ant-layout-sider-light]': `nzTheme === 'light'`,
        '[class.ant-layout-sider-dark]': `nzTheme === 'dark'`,
        '[class.ant-layout-sider-collapsed]': `nzCollapsed`,
        '[class.ant-layout-sider-has-trigger]': `nzCollapsible && nzTrigger !== null`,
        '[style.flex]': 'flexSetting',
        '[style.maxWidth]': 'widthSetting',
        '[style.minWidth]': 'widthSetting',
        '[style.width]': 'widthSetting'
      },
      imports: [NzSiderTriggerComponent]
    }]
  }], null, {
    nzMenuDirective: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild,
      args: [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_8__.NzMenuDirective]
    }],
    nzCollapsedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    nzWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzTheme: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzCollapsedWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzBreakpoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzZeroTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzReverseArrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    nzCollapsible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    nzCollapsed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutComponent {
  destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);
  directionality = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality);
  listOfNzSiderComponent;
  dir = 'ltr';
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.takeUntilDestroyed)(this.destroyRef)).subscribe(direction => {
      this.dir = direction;
    });
  }
  static ɵfac = function NzLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzLayoutComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzLayoutComponent,
    selectors: [["nz-layout"]],
    contentQueries: function NzLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, NzSiderComponent, 4);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.listOfNzSiderComponent = _t);
      }
    },
    hostAttrs: [1, "ant-layout"],
    hostVars: 4,
    hostBindings: function NzLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-layout-rtl", ctx.dir === "rtl")("ant-layout-has-sider", ctx.listOfNzSiderComponent.length > 0);
      }
    },
    exportAs: ["nzLayout"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzLayoutComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-layout',
      exportAs: 'nzLayout',
      template: `<ng-content></ng-content>`,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'ant-layout',
        '[class.ant-layout-rtl]': `dir === 'rtl'`,
        '[class.ant-layout-has-sider]': 'listOfNzSiderComponent.length > 0'
      }
    }]
  }], null, {
    listOfNzSiderComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
      args: [NzSiderComponent]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzLayoutModule {
  static ɵfac = function NzLayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzLayoutModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NzLayoutModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [NzSiderComponent, NzSiderTriggerComponent]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzLayoutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent],
      exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }

}]);
//# sourceMappingURL=src_app_admin_admin_routes_ts.a8acdd6df3c8c927.js.map