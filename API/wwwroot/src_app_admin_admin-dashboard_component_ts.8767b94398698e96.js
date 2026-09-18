"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_admin-dashboard_component_ts"],{

/***/ 233
/*!****************************************************!*\
  !*** ./src/app/admin/admin-dashboard.component.ts ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminDashboardComponent: () => (/* binding */ AdminDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 7719);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/statistic */ 4938);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 2715);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/empty */ 2643);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 4197);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ 3987);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/space */ 3378);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../account/account.service */ 6672);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/company.service */ 17);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/brand.service */ 899);
/* harmony import */ var _services_electric_bike_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/electric-bike.service */ 2501);
/* harmony import */ var _services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/agricultural-machine.service */ 3473);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);































const _c0 = () => ({
  rows: 3
});
const _c1 = () => [20, 20];
const _c2 = () => [16, 16];
function AdminDashboardComponent_div_22_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stat_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", stat_r1.suffix, " ");
  }
}
function AdminDashboardComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 39)(1, "nz-card", 40)(2, "div", 41)(3, "div")(4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, AdminDashboardComponent_div_22_span_8_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", stat_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", stat_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", stat_r1.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", stat_r1.suffix);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", stat_r1.hint, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleProp"]("background", stat_r1.bg);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", stat_r1.icon);
  }
}
function AdminDashboardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 49)(1, "a", 50)(2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](3, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 52)(5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("routerLink", s_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵstyleProp"]("background", s_r2.accent);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", s_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](s_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", s_r2.description, " ");
  }
}
function AdminDashboardComponent_nz_skeleton_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "nz-skeleton", 56);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzActive", true);
  }
}
function AdminDashboardComponent_ng_container_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "nz-empty", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
  }
}
function AdminDashboardComponent_ng_container_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 52)(3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 63)(8, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("src", p_r3.pictureUrl || "assets/images/placeholder.png", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", p_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", p_r3.brandName, " \u00B7 ", p_r3.categoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](10, 7, p_r3.price), "\u20AB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngClass", p_r3.stockQuantity > 0 ? "text-sky-600" : "text-rose-500");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", p_r3.stockQuantity > 0 ? "T\u1ED3n: " + p_r3.stockQuantity : "H\u1EBFt h\u00E0ng", " ");
  }
}
function AdminDashboardComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](1, AdminDashboardComponent_ng_container_30_div_1_Template, 2, 0, "div", 20)(2, AdminDashboardComponent_ng_container_30_div_2_Template, 13, 9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx_r3.recentProducts().length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx_r3.recentProducts());
  }
}
class AdminDashboardComponent {
  constructor() {
    this.companyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_company_service__WEBPACK_IMPORTED_MODULE_16__.CompanyService);
    this.brandService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_brand_service__WEBPACK_IMPORTED_MODULE_17__.BrandService);
    this.bikeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_electric_bike_service__WEBPACK_IMPORTED_MODULE_18__.ElectricBikeService);
    this.agriService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_19__.AgriculturalMachineService);
    this.accountService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_account_account_service__WEBPACK_IMPORTED_MODULE_15__.AccountService);
    this.user = this.accountService.currentUser;
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)(true, ...(ngDevMode ? [{
      debugName: "loading"
    }] : []));
    this.companies = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "companies"
    }] : []));
    this.brands = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "brands"
    }] : []));
    this.bikes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "bikes"
    }] : []));
    this.agris = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "agris"
    }] : []));
    this.shortcuts = [{
      label: 'Công ty',
      icon: 'fa-building',
      path: '/admin/companies',
      description: 'Quản lý đối tác & nhà cung cấp',
      accent: 'linear-gradient(135deg, #0ea5e9, #0284c7)'
    }, {
      label: 'Thương hiệu',
      icon: 'fa-tags',
      path: '/admin/brands',
      description: 'Nhãn hiệu sản phẩm',
      accent: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    }, {
      label: 'Xe điện',
      icon: 'fa-bicycle',
      path: '/admin/electric-bikes',
      description: 'Danh mục xe & phụ tùng',
      accent: 'linear-gradient(135deg, #10b981, #059669)'
    }, {
      label: 'Máy nông nghiệp',
      icon: 'fa-cogs',
      path: '/admin/agricultural-machines',
      description: 'Máy & phụ tùng nông nghiệp',
      accent: 'linear-gradient(135deg, #f59e0b, #d97706)'
    }, {
      label: 'Người dùng',
      icon: 'fa-users',
      path: '/admin/users',
      description: 'Tài khoản & phân quyền',
      accent: 'linear-gradient(135deg, #ef4444, #dc2626)'
    }, {
      label: 'Thư viện ảnh',
      icon: 'fa-picture-o',
      path: '/admin/media',
      description: 'Upload & quản lý hình ảnh',
      accent: 'linear-gradient(135deg, #ec4899, #be185d)'
    }];
  }
  recentProducts() {
    const merged = [...this.bikes(), ...this.agris()];
    return merged.sort((a, b) => {
      const ta = new Date(a.createdAt || 0).getTime();
      const tb = new Date(b.createdAt || 0).getTime();
      return tb - ta;
    }).slice(0, 5);
  }
  statCards() {
    const totalStock = this.bikes().reduce((s, p) => s + (p.stockQuantity || 0), 0) + this.agris().reduce((s, p) => s + (p.stockQuantity || 0), 0);
    return [{
      title: 'Công ty',
      value: this.companies().length,
      icon: 'fa-building',
      color: '#0ea5e9',
      bg: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
      path: '/admin/companies',
      hint: 'Đối tác & nhà cung cấp'
    }, {
      title: 'Thương hiệu',
      value: this.brands().length,
      icon: 'fa-tags',
      color: '#8b5cf6',
      bg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
      path: '/admin/brands',
      hint: 'Nhãn hiệu sản phẩm'
    }, {
      title: 'Sản phẩm',
      value: this.bikes().length + this.agris().length,
      icon: 'fa-cubes',
      color: '#10b981',
      bg: 'linear-gradient(135deg, #10b981, #0ea5e9)',
      path: '/admin/electric-bikes',
      hint: 'Xe điện & máy nông nghiệp'
    }, {
      title: 'Tổng tồn kho',
      value: totalStock,
      icon: 'fa-archive',
      color: '#f59e0b',
      bg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
      path: '/admin/electric-bikes',
      suffix: ' SP',
      hint: 'Số lượng sản phẩm còn hàng'
    }];
  }
  ngOnInit() {
    this.loading.set(true);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)({
      companies: this.companyService.getCompanies(),
      brands: this.brandService.getBrands(),
      bikes: this.bikeService.getAll(),
      agris: this.agriService.getAll()
    }).subscribe({
      next: res => {
        this.companies.set(res.companies);
        this.brands.set(res.brands);
        this.bikes.set(res.bikes);
        this.agris.set(res.agris);
      },
      error: () => {},
      complete: () => this.loading.set(false)
    });
  }
  static {
    this.ɵfac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminDashboardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({
      type: AdminDashboardComponent,
      selectors: [["app-admin-dashboard"]],
      decls: 59,
      vars: 18,
      consts: [[1, "mx-auto", "space-y-6"], ["nzBorderless", "", 1, "!rounded-lg", "!shadow-sm", "welcome-card"], [1, "flex", "flex-col", "items-start", "justify-between", "gap-4", "md:flex-row", "md:items-center"], [1, "mb-1", "text-xs", "font-bold", "uppercase", "tracking-[0.25em]", "text-sky-600"], [1, "text-2xl", "font-black", "text-slate-900", "md:text-3xl"], [1, "bg-gradient-to-r", "from-sky-600", "to-indigo-600", "bg-clip-text", "text-transparent"], [1, "mt-2", "max-w-2xl", "text-sm", "text-slate-500", "md:text-base"], [1, "flex", "gap-3"], ["nz-button", "", "nzType", "primary", "type", "button", "routerLink", "/admin/electric-bikes", 1, "!rounded-lg", "!px-5", "!h-11", "!font-semibold"], [1, "fa", "fa-plus", "mr-2"], ["nz-button", "", "type", "button", "routerLink", "/admin/companies", 1, "!rounded-lg", "!px-5", "!h-11", "!font-semibold"], [1, "fa", "fa-building", "mr-2"], [3, "nzActive", "nzLoading", "nzParagraph"], ["nz-row", "", 3, "nzGutter"], ["nz-col", "", "nzXs", "24", "nzSm", "12", "nzLg", "6", 4, "ngFor", "ngForOf"], ["nzTitle", "Truy c\u1EADp nhanh", 1, "!rounded-lg", "!shadow-sm", "!mb-6"], ["nz-col", "", "nzXs", "24", "nzSm", "12", "nzMd", "8", "nzLg", "6", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzXs", "24", "nzLg", "14"], ["nzTitle", "S\u1EA3n ph\u1EA9m m\u1EDBi nh\u1EA5t", 1, "!rounded-lg", "!shadow-sm", "h-full"], [3, "nzActive", 4, "ngIf"], [4, "ngIf"], ["nz-col", "", "nzXs", "24", "nzLg", "10"], ["nzTitle", "Th\u00F4ng tin h\u1EC7 th\u1ED1ng", 1, "!rounded-lg", "!shadow-sm", "h-full"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between", "rounded-xl", "bg-sky-50", "p-4"], [1, "text-sm", "font-semibold", "text-sky-900"], [1, "text-xs", "text-sky-700"], [2, "background", "linear-gradient(135deg, #0ea5e9, #6366f1)", 3, "nzSize"], [1, "font-black"], [1, "flex", "items-center", "justify-between", "rounded-xl", "bg-violet-50", "p-4"], [1, "text-sm", "font-semibold", "text-violet-900"], [1, "text-xs", "text-violet-700"], [1, "inline-flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-gradient-to-br", "from-violet-500", "to-pink-500", "text-white"], [1, "fa", "fa-shield", "text-lg"], [1, "flex", "items-center", "justify-between", "rounded-xl", "bg-amber-50", "p-4"], [1, "text-sm", "font-semibold", "text-amber-900"], [1, "text-xs", "text-amber-700"], [1, "inline-flex", "h-11", "w-11", "items-center", "justify-center", "rounded-xl", "bg-gradient-to-br", "from-amber-500", "to-rose-500", "text-white"], [1, "fa", "fa-code-fork", "text-lg"], ["nz-col", "", "nzXs", "24", "nzSm", "12", "nzLg", "6"], ["nzBorderless", "", 1, "stat-card", "!rounded-lg", "!shadow-sm", "h-full", "cursor-pointer", "transition-all", "hover:-translate-y-1", "hover:shadow-lg", 3, "routerLink"], [1, "flex", "items-start", "justify-between"], [1, "text-sm", "font-medium", "text-slate-500"], [1, "mt-2", "text-3xl", "font-black", "text-slate-900"], ["class", "text-base font-bold text-slate-400", 4, "ngIf"], [1, "mt-2", "text-xs", "text-slate-400"], [1, "stat-icon"], [1, "fa", 3, "ngClass"], [1, "text-base", "font-bold", "text-slate-400"], ["nz-col", "", "nzXs", "24", "nzSm", "12", "nzMd", "8", "nzLg", "6"], [1, "quick-link", 3, "routerLink"], [1, "quick-icon"], [1, "min-w-0", "flex-1"], [1, "font-bold", "text-slate-800"], [1, "truncate", "text-xs", "text-slate-500"], [1, "fa", "fa-chevron-right", "text-slate-300"], [3, "nzActive"], ["class", "flex items-center gap-4 border-b border-slate-100 py-3 last:border-0", 4, "ngFor", "ngForOf"], ["nzNotFoundContent", "Ch\u01B0a c\u00F3 s\u1EA3n ph\u1EA9m n\u00E0o"], [1, "flex", "items-center", "gap-4", "border-b", "border-slate-100", "py-3", "last:border-0"], ["alt", "", 1, "h-12", "w-12", "rounded-lg", "object-cover", "ring-1", "ring-slate-200", 3, "src"], [1, "truncate", "font-semibold", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "text-right"], [1, "font-black", "text-emerald-600"], [1, "text-xs", "font-semibold", 3, "ngClass"]],
      template: function AdminDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 0)(1, "nz-card", 1)(2, "div", 2)(3, "div")(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, " Trang qu\u1EA3n tr\u1ECB ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](7, " Xin ch\u00E0o, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](10, " \uD83D\uDC4B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, " Ch\u00E0o m\u1EEBng quay tr\u1EDF l\u1EA1i. D\u01B0\u1EDBi \u0111\u00E2y l\u00E0 t\u1ED5ng quan v\u1EC1 ho\u1EA1t \u0111\u1ED9ng c\u1EE7a c\u1EEDa h\u00E0ng c\u00F9ng l\u1ED1i t\u1EAFt \u0111\u1EBFn c\u00E1c khu v\u1EF1c qu\u1EA3n l\u00FD th\u01B0\u1EDDng d\u00F9ng. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 7)(14, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](15, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Th\u00EAm s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](18, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Qu\u1EA3n l\u00FD c\u00F4ng ty ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "nz-skeleton", 12)(21, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](22, AdminDashboardComponent_div_22_Template, 13, 8, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](23, "nz-card", 15)(24, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](25, AdminDashboardComponent_div_25_Template, 10, 6, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 13)(27, "div", 17)(28, "nz-card", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](29, AdminDashboardComponent_nz_skeleton_29_Template, 1, 1, "nz-skeleton", 19)(30, AdminDashboardComponent_ng_container_30_Template, 3, 2, "ng-container", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 21)(32, "nz-card", 22)(33, "div", 23)(34, "div", 24)(35, "div")(36, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](37, " Ng\u01B0\u1EDDi d\u00F9ng hi\u1EC7n t\u1EA1i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "nz-avatar", 27)(41, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "div", 29)(44, "div")(45, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](46, "Vai tr\u00F2");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](48, " Qu\u1EA3n tr\u1ECB vi\u00EAn (Administrator) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](50, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "div", 34)(52, "div")(53, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](54, "Phi\u00EAn b\u1EA3n");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](55, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](56, "E-Commerce Admin v1.0.0");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](58, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          let tmp_0_0;
          let tmp_11_0;
          let tmp_13_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = ctx.user()) == null ? null : tmp_0_0.displayName) || ((tmp_0_0 = ctx.user()) == null ? null : tmp_0_0.email) || "Qu\u1EA3n tr\u1ECB vi\u00EAn", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzActive", true)("nzLoading", ctx.loading())("nzParagraph", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](14, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](15, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.statCards());
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](16, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngForOf", ctx.shortcuts);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzGutter", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](17, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.loading());
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.loading());
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"]((tmp_11_0 = ctx.user()) == null ? null : tmp_11_0.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("nzSize", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", (((tmp_13_0 = ctx.user()) == null ? null : tmp_13_0.displayName) || ((tmp_13_0 = ctx.user()) == null ? null : tmp_13_0.email) || "A").charAt(0).toUpperCase(), " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__.NzAvatarModule, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_4__.NzAvatarComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_23__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardComponent, ng_zorro_antd_statistic__WEBPACK_IMPORTED_MODULE_7__.NzStatisticModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzGridModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__.NzEmptyModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_10__.NzEmptyComponent, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_11__.NzSkeletonModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_11__.NzSkeletonComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__.NzTagModule, ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__.NzSpaceModule, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_20__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["[_nghost-%COMP%]     .stat-card .ant-card-body {\n        padding: 20px 24px;\n      }\n      .stat-icon[_ngcontent-%COMP%] {\n        width: 52px;\n        height: 52px;\n        border-radius: 14px;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 22px;\n        color: #fff;\n      }\n      .quick-link[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        gap: 14px;\n        padding: 16px;\n        border-radius: 12px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        text-decoration: none;\n        border: 1px solid #e2e8f0;\n        color: #0f172a;\n        background: #fff;\n      }\n      .quick-link[_ngcontent-%COMP%]:hover {\n        transform: translateY(-2px);\n        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);\n        border-color: #cbd5e1;\n      }\n      .quick-icon[_ngcontent-%COMP%] {\n        width: 44px;\n        height: 44px;\n        border-radius: 10px;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 18px;\n        color: #fff;\n        flex-shrink: 0;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUNNO1FBQ0Usa0JBQWtCO01BQ3BCO01BQ0E7UUFDRSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsV0FBVztNQUNiO01BQ0E7UUFDRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsZ0JBQWdCO01BQ2xCO01BQ0E7UUFDRSwyQkFBMkI7UUFDM0IsNkNBQTZDO1FBQzdDLHFCQUFxQjtNQUN2QjtNQUNBO1FBQ0UsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLFdBQVc7UUFDWCxjQUFjO01BQ2hCIiwiZmlsZSI6ImFkbWluLWRhc2hib2FyZC5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IDo6bmctZGVlcCAuc3RhdC1jYXJkIC5hbnQtY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgICAgfVxuICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5xdWljay1saW5rIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG4gICAgICAucXVpY2stbGluazpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG4gICAgICB9XG4gICAgICAucXVpY2staWNvbiB7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxrQkFBa0I7TUFDcEI7TUFDQTtRQUNFLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixXQUFXO01BQ2I7TUFDQTtRQUNFLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsU0FBUztRQUNULGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLGNBQWM7UUFDZCxnQkFBZ0I7TUFDbEI7TUFDQTtRQUNFLDJCQUEyQjtRQUMzQiw2Q0FBNkM7UUFDN0MscUJBQXFCO01BQ3ZCO01BQ0E7UUFDRSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsV0FBVztRQUNYLGNBQWM7TUFDaEI7O0FBRU4sd3ZFQUF3dkUiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIDpob3N0IDo6bmctZGVlcCAuc3RhdC1jYXJkIC5hbnQtY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAyNHB4O1xuICAgICAgfVxuICAgICAgLnN0YXQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA1MnB4O1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICAgIC5xdWljay1saW5rIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbiAgICAgICAgY29sb3I6ICMwZjE3MmE7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG4gICAgICAucXVpY2stbGluazpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xuICAgICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XG4gICAgICB9XG4gICAgICAucXVpY2staWNvbiB7XG4gICAgICAgIHdpZHRoOiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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

/***/ },

/***/ 6778
/*!*************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-pipe.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzPipesModule: () => (/* binding */ NzPipesModule),
/* harmony export */   NzTimeRangePipe: () => (/* binding */ NzTimeRangePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/core/time */ 7221);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6906);





/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzTimeRangePipe {
  transform(value, format = 'HH:mm:ss') {
    let duration = Number(value || 0);
    return ng_zorro_antd_core_time__WEBPACK_IMPORTED_MODULE_2__.timeUnits.reduce((current, [name, unit]) => {
      if (current.indexOf(name) !== -1) {
        const v = Math.floor(duration / unit);
        duration -= v * unit;
        return current.replace(new RegExp(`${name}+`, 'g'), match => (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_3__.padStart)(v.toString(), match.length, '0'));
      }
      return current;
    }, format);
  }
  static ɵfac = function NzTimeRangePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzTimeRangePipe)();
  };
  static ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "nzTimeRange",
    type: NzTimeRangePipe,
    pure: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzTimeRangePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'nzTimeRange'
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzPipesModule {
  static ɵfac = function NzPipesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzPipesModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NzPipesModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzPipesModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [NzTimeRangePipe],
      exports: [NzTimeRangePipe]
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

/***/ 3987
/*!***********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-divider.mjs ***!
  \***********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzDividerComponent: () => (/* binding */ NzDividerComponent),
/* harmony export */   NzDividerModule: () => (/* binding */ NzDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 3317);





/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
function NzDividerComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nzText);
  }
}
function NzDividerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NzDividerComponent_Conditional_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzText);
  }
}
class NzDividerComponent {
  nzText;
  nzType = 'horizontal';
  nzOrientation = 'center';
  nzVariant = 'solid';
  nzSize;
  nzDashed = false;
  nzPlain = false;
  static ɵfac = function NzDividerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzDividerComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NzDividerComponent,
    selectors: [["nz-divider"]],
    hostAttrs: [1, "ant-divider"],
    hostVars: 22,
    hostBindings: function NzDividerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ant-divider-horizontal", ctx.nzType === "horizontal")("ant-divider-vertical", ctx.nzType === "vertical")("ant-divider-with-text", ctx.nzText)("ant-divider-plain", ctx.nzPlain)("ant-divider-with-text-left", ctx.nzText && ctx.nzOrientation === "left")("ant-divider-with-text-right", ctx.nzText && ctx.nzOrientation === "right")("ant-divider-with-text-center", ctx.nzText && ctx.nzOrientation === "center")("ant-divider-dashed", ctx.nzDashed || ctx.nzVariant === "dashed")("ant-divider-dotted", ctx.nzVariant === "dotted")("ant-divider-sm", ctx.nzSize === "small")("ant-divider-md", ctx.nzSize === "middle");
      }
    },
    inputs: {
      nzText: "nzText",
      nzType: "nzType",
      nzOrientation: "nzOrientation",
      nzVariant: "nzVariant",
      nzSize: "nzSize",
      nzDashed: [2, "nzDashed", "nzDashed", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute],
      nzPlain: [2, "nzPlain", "nzPlain", _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute]
    },
    exportAs: ["nzDivider"],
    decls: 1,
    vars: 1,
    consts: [[1, "ant-divider-inner-text"], [4, "nzStringTemplateOutlet"]],
    template: function NzDividerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](0, NzDividerComponent_Conditional_0_Template, 2, 1, "span", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.nzText ? 0 : -1);
      }
    },
    dependencies: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzOutletModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzDividerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'nz-divider',
      exportAs: 'nzDivider',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: `
    @if (nzText) {
      <span class="ant-divider-inner-text">
        <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      </span>
    }
  `,
      host: {
        class: 'ant-divider',
        '[class.ant-divider-horizontal]': `nzType === 'horizontal'`,
        '[class.ant-divider-vertical]': `nzType === 'vertical'`,
        '[class.ant-divider-with-text]': `nzText`,
        '[class.ant-divider-plain]': `nzPlain`,
        '[class.ant-divider-with-text-left]': `nzText && nzOrientation === 'left'`,
        '[class.ant-divider-with-text-right]': `nzText && nzOrientation === 'right'`,
        '[class.ant-divider-with-text-center]': `nzText && nzOrientation === 'center'`,
        '[class.ant-divider-dashed]': `nzDashed || nzVariant === 'dashed'`,
        '[class.ant-divider-dotted]': `nzVariant === 'dotted'`,
        '[class.ant-divider-sm]': `nzSize === 'small'`,
        '[class.ant-divider-md]': `nzSize === 'middle'`
      },
      imports: [ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_3__.NzOutletModule]
    }]
  }], null, {
    nzText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzOrientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzVariant: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    nzDashed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_2__.booleanAttribute
      }]
    }],
    nzPlain: [{
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
class NzDividerModule {
  static ɵfac = function NzDividerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzDividerModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NzDividerModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [NzDividerComponent]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__.setClassMetadata(NzDividerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [NzDividerComponent],
      exports: [NzDividerComponent]
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

/***/ 4938
/*!*************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-statistic.mjs ***!
  \*************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzCountdownComponent: () => (/* binding */ NzCountdownComponent),
/* harmony export */   NzStatisticComponent: () => (/* binding */ NzStatisticComponent),
/* harmony export */   NzStatisticModule: () => (/* binding */ NzStatisticModule),
/* harmony export */   NzStatisticNumberComponent: () => (/* binding */ NzStatisticNumberComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 7579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/pipe */ 6778);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 7170);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/outlet */ 3317);
/* harmony import */ var ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/skeleton */ 4197);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 3683);













/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = a0 => ({
  $implicit: a0
});
function NzStatisticNumberComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.nzValueTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r0.nzValue));
  }
}
function NzStatisticNumberComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.displayInt);
  }
}
function NzStatisticNumberComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.displayDecimal);
  }
}
function NzStatisticNumberComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](0, NzStatisticNumberComponent_Conditional_2_Conditional_0_Template, 2, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](1, NzStatisticNumberComponent_Conditional_2_Conditional_1_Template, 2, 1, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r0.displayInt ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r0.displayDecimal ? 1 : -1);
  }
}
function NzStatisticComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nzTitle);
  }
}
function NzStatisticComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-skeleton", 2);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzParagraph", false);
  }
}
function NzStatisticComponent_Conditional_3_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nzPrefix);
  }
}
function NzStatisticComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzStatisticComponent_Conditional_3_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzPrefix);
  }
}
function NzStatisticComponent_Conditional_3_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.nzSuffix);
  }
}
function NzStatisticComponent_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzStatisticComponent_Conditional_3_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx_r0.nzSuffix);
  }
}
function NzStatisticComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](1, NzStatisticComponent_Conditional_3_Conditional_1_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "nz-statistic-number", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](3, NzStatisticComponent_Conditional_3_Conditional_3_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx_r0.nzValueStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r0.nzPrefix ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", ctx_r0.nzValue)("nzValueTemplate", ctx_r0.nzValueTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx_r0.nzSuffix ? 3 : -1);
  }
}
function NzCountdownComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "nzTimeRange");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 1, ctx_r0.diff, ctx_r0.nzFormat));
  }
}
class NzStatisticNumberComponent {
  nzValue;
  nzValueTemplate;
  displayInt = '';
  displayDecimal = '';
  locale_id = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID);
  ngOnChanges() {
    this.formatNumber();
  }
  formatNumber() {
    const decimalSeparator = typeof this.nzValue === 'number' ? '.' : (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.getLocaleNumberSymbol)(this.locale_id, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NumberSymbol.Decimal);
    const value = String(this.nzValue);
    const [int, decimal] = value.split(decimalSeparator);
    this.displayInt = int;
    this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : '';
  }
  static ɵfac = function NzStatisticNumberComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzStatisticNumberComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzStatisticNumberComponent,
    selectors: [["nz-statistic-number"]],
    inputs: {
      nzValue: "nzValue",
      nzValueTemplate: "nzValueTemplate"
    },
    exportAs: ["nzStatisticNumber"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 1,
    consts: [[1, "ant-statistic-content-value"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-statistic-content-value-int"], [1, "ant-statistic-content-value-decimal"]],
    template: function NzStatisticNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](1, NzStatisticNumberComponent_Conditional_1_Template, 1, 4, "ng-container", 1)(2, NzStatisticNumberComponent_Conditional_2_Template, 2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.nzValueTemplate ? 1 : 2);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzStatisticNumberComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'nz-statistic-number',
      exportAs: 'nzStatisticNumber',
      template: `
    <span class="ant-statistic-content-value">
      @if (nzValueTemplate) {
        <ng-container
          [ngTemplateOutlet]="nzValueTemplate"
          [ngTemplateOutletContext]="{ $implicit: nzValue }"
        ></ng-container>
      } @else {
        @if (displayInt) {
          <span class="ant-statistic-content-value-int">{{ displayInt }}</span>
        }
        @if (displayDecimal) {
          <span class="ant-statistic-content-value-decimal">{{ displayDecimal }}</span>
        }
      }
    </span>
  `,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgTemplateOutlet]
    }]
  }], null, {
    nzValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzValueTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStatisticComponent {
  nzPrefix;
  nzSuffix;
  nzTitle;
  nzValue;
  nzValueStyle = {};
  nzValueTemplate;
  nzLoading = false;
  dir = 'ltr';
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef);
  destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.DestroyRef);
  directionality = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Directionality);
  ngOnInit() {
    this.directionality.change?.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  static ɵfac = function NzStatisticComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzStatisticComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzStatisticComponent,
    selectors: [["nz-statistic"]],
    hostAttrs: [1, "ant-statistic"],
    hostVars: 2,
    hostBindings: function NzStatisticComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("ant-statistic-rtl", ctx.dir === "rtl");
      }
    },
    inputs: {
      nzPrefix: "nzPrefix",
      nzSuffix: "nzSuffix",
      nzTitle: "nzTitle",
      nzValue: "nzValue",
      nzValueStyle: "nzValueStyle",
      nzValueTemplate: "nzValueTemplate",
      nzLoading: [2, "nzLoading", "nzLoading", _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute]
    },
    exportAs: ["nzStatistic"],
    decls: 4,
    vars: 2,
    consts: [[1, "ant-statistic-title"], [4, "nzStringTemplateOutlet"], [1, "ant-statistic-skeleton", 3, "nzParagraph"], [1, "ant-statistic-content", 3, "style"], [1, "ant-statistic-content"], [1, "ant-statistic-content-prefix"], [3, "nzValue", "nzValueTemplate"], [1, "ant-statistic-content-suffix"]],
    template: function NzStatisticComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzStatisticComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditionalCreate"](2, NzStatisticComponent_Conditional_2_Template, 1, 1, "nz-skeleton", 2)(3, NzStatisticComponent_Conditional_3_Template, 4, 6, "div", 3);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzStringTemplateOutlet", ctx.nzTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](ctx.nzLoading ? 2 : 3);
      }
    },
    dependencies: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__.NzSkeletonModule, ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__.NzSkeletonComponent, NzStatisticNumberComponent, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__.NzOutletModule, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__.NzStringTemplateOutletDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzStatisticComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'nz-statistic',
      exportAs: 'nzStatistic',
      template: `
    <div class="ant-statistic-title">
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
    </div>
    @if (nzLoading) {
      <nz-skeleton class="ant-statistic-skeleton" [nzParagraph]="false" />
    } @else {
      <div class="ant-statistic-content" [style]="nzValueStyle">
        @if (nzPrefix) {
          <span class="ant-statistic-content-prefix">
            <ng-container *nzStringTemplateOutlet="nzPrefix">{{ nzPrefix }}</ng-container>
          </span>
        }
        <nz-statistic-number [nzValue]="nzValue" [nzValueTemplate]="nzValueTemplate"></nz-statistic-number>
        @if (nzSuffix) {
          <span class="ant-statistic-content-suffix">
            <ng-container *nzStringTemplateOutlet="nzSuffix">{{ nzSuffix }}</ng-container>
          </span>
        }
      </div>
    }
  `,
      host: {
        class: 'ant-statistic',
        '[class.ant-statistic-rtl]': `dir === 'rtl'`
      },
      imports: [ng_zorro_antd_skeleton__WEBPACK_IMPORTED_MODULE_8__.NzSkeletonModule, NzStatisticNumberComponent, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_7__.NzOutletModule]
    }]
  }], null, {
    nzPrefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzSuffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzValueStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzValueTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzLoading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_3__.booleanAttribute
      }]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const REFRESH_INTERVAL = 1000 / 30;
class NzCountdownComponent extends NzStatisticComponent {
  ngZone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone);
  platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.Platform);
  nzFormat = 'HH:mm:ss';
  nzCountdownFinish = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  diff;
  target = 0;
  intervalId = null;
  constructor() {
    super();
    this.destroyRef.onDestroy(() => {
      this.stopTimer();
    });
  }
  ngOnChanges(changes) {
    const {
      nzValue
    } = changes;
    if (nzValue) {
      this.target = Number(nzValue.currentValue);
      if (!nzValue.isFirstChange()) {
        this.syncTimer();
      }
    }
  }
  ngOnInit() {
    super.ngOnInit();
    this.syncTimer();
  }
  syncTimer() {
    if (this.target >= Date.now()) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
  startTimer() {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        this.stopTimer();
        this.intervalId = setInterval(() => {
          this.updateValue();
          this.cdr.detectChanges();
        }, REFRESH_INTERVAL);
      });
    }
  }
  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  /**
   * Update time that should be displayed on the screen.
   */
  updateValue() {
    this.diff = Math.max(this.target - Date.now(), 0);
    if (this.diff === 0) {
      this.stopTimer();
      if (this.nzCountdownFinish.observers.length) {
        this.ngZone.run(() => this.nzCountdownFinish.emit());
      }
    }
  }
  static ɵfac = function NzCountdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzCountdownComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NzCountdownComponent,
    selectors: [["nz-countdown"]],
    inputs: {
      nzFormat: "nzFormat"
    },
    outputs: {
      nzCountdownFinish: "nzCountdownFinish"
    },
    exportAs: ["nzCountdown"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
    decls: 3,
    vars: 6,
    consts: [["countDownTpl", ""], [3, "nzValue", "nzValueStyle", "nzValueTemplate", "nzTitle", "nzPrefix", "nzSuffix"]],
    template: function NzCountdownComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-statistic", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NzCountdownComponent_ng_template_1_Template, 2, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const countDownTpl_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", ctx.diff)("nzValueStyle", ctx.nzValueStyle)("nzValueTemplate", ctx.nzValueTemplate || countDownTpl_r2)("nzTitle", ctx.nzTitle)("nzPrefix", ctx.nzPrefix)("nzSuffix", ctx.nzSuffix);
      }
    },
    dependencies: [NzStatisticComponent, ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_4__.NzPipesModule, ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_4__.NzTimeRangePipe],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzCountdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      selector: 'nz-countdown',
      exportAs: 'nzCountdown',
      template: `
    <nz-statistic
      [nzValue]="diff"
      [nzValueStyle]="nzValueStyle"
      [nzValueTemplate]="nzValueTemplate || countDownTpl"
      [nzTitle]="nzTitle"
      [nzPrefix]="nzPrefix"
      [nzSuffix]="nzSuffix"
    ></nz-statistic>

    <ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>
  `,
      imports: [NzStatisticComponent, ng_zorro_antd_core_pipe__WEBPACK_IMPORTED_MODULE_4__.NzPipesModule]
    }]
  }], () => [], {
    nzFormat: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    nzCountdownFinish: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzStatisticModule {
  static ɵfac = function NzStatisticModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzStatisticModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NzStatisticModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [NzStatisticComponent, NzCountdownComponent]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__.setClassMetadata(NzStatisticModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent],
      exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent]
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
//# sourceMappingURL=src_app_admin_admin-dashboard_component_ts.8767b94398698e96.js.map