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
    redirectTo: 'companies'
  }, {
    path: 'companies',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("default-src_app_admin_resources_admin-entity-page_component_ts"), __webpack_require__.e("src_app_admin_companies_company-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./companies/company-admin-page.component */ 3178)).then(m => m.CompanyAdminPageComponent),
    data: {
      breadcrumb: 'Công ty'
    }
  }, {
    path: 'brands',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("default-src_app_admin_resources_admin-entity-page_component_ts"), __webpack_require__.e("src_app_admin_brands_brand-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./brands/brand-admin-page.component */ 6193)).then(m => m.BrandAdminPageComponent),
    data: {
      breadcrumb: 'Thương hiệu'
    }
  }, {
    path: 'electric-bikes',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("default-src_app_admin_resources_admin-entity-page_component_ts"), __webpack_require__.e("src_app_admin_electric-bikes_electric-bike-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./electric-bikes/electric-bike-admin-page.component */ 9725)).then(m => m.ElectricBikeAdminPageComponent),
    data: {
      breadcrumb: 'Xe điện'
    }
  }, {
    path: 'agricultural-machines',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("default-src_app_admin_resources_admin-entity-page_component_ts"), __webpack_require__.e("src_app_admin_agricultural-machines_agricultural-machine-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./agricultural-machines/agricultural-machine-admin-page.component */ 7651)).then(m => m.AgriculturalMachineAdminPageComponent),
    data: {
      breadcrumb: 'Máy nông nghiệp'
    }
  }, {
    path: 'users',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("default-src_app_admin_resources_admin-entity-page_component_ts"), __webpack_require__.e("src_app_admin_users_user-admin-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./users/user-admin-page.component */ 7511)).then(m => m.UserAdminPageComponent),
    data: {
      breadcrumb: 'Người dùng'
    }
  }, {
    path: 'media',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"), __webpack_require__.e("src_app_admin_media_admin-media-page_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./media/admin-media-page.component */ 1250)).then(m => m.AdminMediaPageComponent),
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);









function AdminLayoutComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", link_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", link_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](link_r1.label);
  }
}
function AdminLayoutComponent_nav_21_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_nav_21_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.mobileOpen.set(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", link_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](link_r4.label);
  }
}
function AdminLayoutComponent_nav_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nav", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminLayoutComponent_nav_21_a_1_Template, 2, 2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.links);
  }
}
class AdminLayoutComponent {
  constructor() {
    this.mobileOpen = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(false, ...(ngDevMode ? [{
      debugName: "mobileOpen"
    }] : []));
    this.links = [{
      path: 'companies',
      label: 'Công ty',
      icon: 'fa-building'
    }, {
      path: 'brands',
      label: 'Thương hiệu',
      icon: 'fa-tags'
    }, {
      path: 'electric-bikes',
      label: 'Xe điện',
      icon: 'fa-bicycle'
    }, {
      path: 'agricultural-machines',
      label: 'Máy nông nghiệp',
      icon: 'fa-cogs'
    }, {
      path: 'products',
      label: 'Sản phẩm',
      icon: 'fa-cube'
    }, {
      path: 'product-brands',
      label: 'Nhãn sản phẩm',
      icon: 'fa-bookmark'
    }, {
      path: 'product-types',
      label: 'Loại sản phẩm',
      icon: 'fa-list'
    }, {
      path: 'orders',
      label: 'Đơn hàng',
      icon: 'fa-shopping-cart'
    }, {
      path: 'delivery-methods',
      label: 'Giao hàng',
      icon: 'fa-truck'
    }, {
      path: 'users',
      label: 'Người dùng',
      icon: 'fa-users'
    }, {
      path: 'media',
      label: 'Thư viện ảnh',
      icon: 'fa-picture-o'
    }];
  }
  static {
    this.ɵfac = function AdminLayoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminLayoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      decls: 24,
      vars: 2,
      consts: [[1, "min-h-screen", "bg-slate-100"], [1, "mx-auto", "flex", "max-w-[1600px]"], [1, "sticky", "top-0", "hidden", "h-screen", "w-72", "shrink-0", "border-r", "border-slate-200", "bg-slate-950", "p-5", "text-white", "lg:block"], ["routerLink", "/admin", 1, "mb-7", "block", "rounded-xl", "bg-gradient-to-r", "from-sky-600", "to-indigo-600", "p-4"], [1, "text-xs", "font-bold", "uppercase", "tracking-[.25em]", "text-sky-100"], [1, "mt-1", "text-xl", "font-black"], ["aria-label", "Admin navigation", 1, "space-y-1"], ["routerLinkActive", "bg-white/15 text-white", "class", "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLink", "/", 1, "mt-8", "flex", "items-center", "gap-2", "px-4", "text-sm", "text-slate-400", "hover:text-white"], [1, "fa", "fa-arrow-left"], [1, "min-w-0", "flex-1"], [1, "sticky", "top-0", "z-30", "flex", "items-center", "justify-between", "border-b", "border-slate-200", "bg-white/95", "px-4", "py-3", "backdrop-blur", "lg:px-8"], ["nz-button", "", "type", "button", 1, "lg:!hidden", 3, "click"], [1, "fa", "fa-bars"], [1, "text-lg", "font-black", "text-slate-900"], ["routerLink", "/", 1, "text-sm", "font-semibold", "text-sky-700"], ["class", "grid grid-cols-2 gap-2 border-b bg-slate-950 p-3 text-white lg:hidden", 4, "ngIf"], [1, "p-4", "lg:p-8"], ["routerLinkActive", "bg-white/15 text-white", 1, "flex", "items-center", "gap-3", "rounded-lg", "px-4", "py-3", "text-sm", "font-semibold", "text-slate-300", "transition", "hover:bg-white/10", "hover:text-white", 3, "routerLink"], [1, "fa", "w-5", "text-center", 3, "ngClass"], [1, "grid", "grid-cols-2", "gap-2", "border-b", "bg-slate-950", "p-3", "text-white", "lg:hidden"], ["class", "rounded bg-white/10 px-3 py-2 text-sm", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "rounded", "bg-white/10", "px-3", "py-2", "text-sm", 3, "click", "routerLink"]],
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "a", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Administration");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "E-Commerce");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "nav", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AdminLayoutComponent_a_9_Template, 4, 3, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " V\u1EC1 c\u1EEDa h\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "main", 10)(14, "header", 11)(15, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AdminLayoutComponent_Template_button_click_15_listener() {
            return ctx.mobileOpen.set(!ctx.mobileOpen());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h1", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Qu\u1EA3n tr\u1ECB d\u1EEF li\u1EC7u");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Xem website");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AdminLayoutComponent_nav_21_Template, 2, 1, "nav", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.links);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.mobileOpen());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_admin_routes_ts.fc25299199c0fecd.js.map