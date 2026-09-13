"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_products_products_component_ts"],{

/***/ 9618
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/slider */ 3179);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/empty */ 2643);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var _shared_models_electricBikeProduct__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/models/electricBikeProduct */ 8352);
/* harmony import */ var _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/models/agriculturalMachineProduct */ 9706);
/* harmony import */ var _services_electric_bike_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/electric-bike.service */ 2501);
/* harmony import */ var _services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/agricultural-machine.service */ 3473);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../services/brand.service */ 899);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../services/company.service */ 17);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/components/header/header.component */ 9381);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/components/product-card/product-card.component */ 8452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);






























const _c0 = () => ({
  type: "all"
});
const _c1 = () => ({
  type: "bike"
});
const _c2 = () => ({
  type: "machine"
});
const _c3 = () => [1, 2, 3, 4, 5, 6];
const _c4 = a0 => ({
  type: a0
});
function ProductsComponent_nz_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "nz-option", 41);
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzValue", b_r2.id)("nzLabel", b_r2.name);
  }
}
function ProductsComponent_nz_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzValue", c_r3.id)("nzLabel", c_r3.name);
  }
}
function ProductsComponent_nz_option_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "nz-option", 41);
  }
  if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzValue", cat_r4.value)("nzLabel", cat_r4.label);
  }
}
function ProductsComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 42)(1, "nz-slider", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function ProductsComponent_div_61_Template_nz_slider_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onPriceSliderChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("nzMin", ctx_r5.priceRange()[0])("nzMax", ctx_r5.priceRange()[1])("nzRange", true)("ngModel", ctx_r5.priceSliderValue())("nzStep", ctx_r5.priceSliderStep());
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate2"](" ", ctx_r5.formatCurrency(ctx_r5.minPrice() ?? ctx_r5.priceRange()[0]), " \u2013 ", ctx_r5.formatCurrency(ctx_r5.maxPrice() ?? ctx_r5.priceRange()[1]), " ");
  }
}
function ProductsComponent_ng_container_75_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "div", 50)(4, "div", 51)(5, "div", 52)(6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](7, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](8, "div", 55)(9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](11, "div", 57)(12, "div", 58)(13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }
}
function ProductsComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, ProductsComponent_ng_container_75_div_2_Template, 14, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](1, _c3));
  }
}
function ProductsComponent_ng_template_76_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](3, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "h3", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](5, " Kh\u00F4ng t\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m ph\u00F9 h\u1EE3p ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7, " Vui l\u00F2ng th\u1EED \u0111i\u1EC1u ch\u1EC9nh b\u1ED9 l\u1ECDc ho\u1EB7c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](8, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function ProductsComponent_ng_template_76_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](9, " \u0111\u1EB7t l\u1EA1i b\u1ED9 l\u1ECDc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](11, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function ProductsComponent_ng_template_76_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.resetFilters());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](12, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" \u0111\u1EC3 xem ", ctx_r5.kind() === "bike" ? "t\u1EA5t c\u1EA3 xe \u0111i\u1EC7n" : ctx_r5.kind() === "machine" ? "t\u1EA5t c\u1EA3 m\u00E1y n\u00F4ng nghi\u1EC7p" : "t\u1EA5t c\u1EA3 s\u1EA3n ph\u1EA9m", ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](4, _c4, ctx_r5.kind()));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngClass", ctx_r5.kind() === "bike" ? "fa-bicycle" : ctx_r5.kind() === "machine" ? "fa-tractor" : "fa-th-large");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", ctx_r5.kind() === "bike" ? "Xem t\u1EA5t c\u1EA3 xe \u0111i\u1EC7n" : ctx_r5.kind() === "machine" ? "Xem t\u1EA5t c\u1EA3 m\u00E1y n\u00F4ng nghi\u1EC7p" : "Xem t\u1EA5t c\u1EA3 s\u1EA3n ph\u1EA9m", " ");
  }
}
function ProductsComponent_ng_template_76_div_1_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "app-product-card", 72);
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("product", p_r8);
  }
}
function ProductsComponent_ng_template_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, ProductsComponent_ng_template_76_div_1_app_product_card_1_Template, 1, 1, "app-product-card", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx_r5.cardItems());
  }
}
function ProductsComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](0, ProductsComponent_ng_template_76_div_0_Template, 14, 6, "div", 60)(1, ProductsComponent_ng_template_76_div_1_Template, 2, 1, "div", 61);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r5.filteredProducts().length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r5.cardItems().length > 0);
  }
}
class ProductsComponent {
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.electricBikeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_electric_bike_service__WEBPACK_IMPORTED_MODULE_17__.ElectricBikeService);
    this.agriculturalMachineService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_18__.AgriculturalMachineService);
    this.brandService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_brand_service__WEBPACK_IMPORTED_MODULE_19__.BrandService);
    this.companyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_company_service__WEBPACK_IMPORTED_MODULE_20__.CompanyService);
    this.kindParamSub = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "kindParamSub"
    }] : []));
    this.kind = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('all', ...(ngDevMode ? [{
      debugName: "kind"
    }] : []));
    this.keyword = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "keyword"
    }] : []));
    this.brandIds = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "brandIds"
    }] : []));
    this.companyIds = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "companyIds"
    }] : []));
    this.categoryIds = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "categoryIds"
    }] : []));
    this.minPrice = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "minPrice"
    }] : []));
    this.maxPrice = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "maxPrice"
    }] : []));
    this.sortBy = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('default', ...(ngDevMode ? [{
      debugName: "sortBy"
    }] : []));
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(true, ...(ngDevMode ? [{
      debugName: "loading"
    }] : []));
    this.syncFiltersOnKindChange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.effect)(() => {
      this.kind();
      this.keyword.set('');
      this.brandIds.set([]);
      this.companyIds.set([]);
      this.categoryIds.set([]);
      this.minPrice.set(null);
      this.maxPrice.set(null);
      this.sortBy.set('default');
    }, ...(ngDevMode ? [{
      debugName: "syncFiltersOnKindChange"
    }] : []));
    this.bikes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "bikes"
    }] : []));
    this.machines = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "machines"
    }] : []));
    this.brands = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "brands"
    }] : []));
    this.companies = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "companies"
    }] : []));
    this.filteredBrands = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const k = this.kind();
      const all = this.brands();
      const products = this.allProducts();
      if (k === 'all') return all;
      const relevantBrandIds = new Set(products.filter(p => p.kind === k).map(p => p.brandId));
      return all.filter(b => relevantBrandIds.has(b.id));
    }, ...(ngDevMode ? [{
      debugName: "filteredBrands"
    }] : []));
    this.filteredCompanies = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const k = this.kind();
      const all = this.companies();
      const products = this.allProducts();
      if (k === 'all') return all;
      const relevantCompanyIds = new Set(products.filter(p => p.kind === k).map(p => p.companyId));
      return all.filter(c => relevantCompanyIds.has(c.id));
    }, ...(ngDevMode ? [{
      debugName: "filteredCompanies"
    }] : []));
    this.allProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const b = this.bikes().map(p => ({
        kind: 'bike',
        id: p.id,
        name: p.name,
        brandName: p.brandName,
        brand: p.brand,
        model: p.model,
        category: p.category,
        categoryName: p.categoryName,
        description: p.description,
        price: p.price,
        stockQuantity: p.stockQuantity,
        pictureUrl: p.pictureUrl,
        companyId: p.companyId,
        companyName: p.companyName,
        brandId: p.brandId,
        createdAt: p.createdAt,
        chip1: p.voltage ?? undefined,
        chip2: p.power ?? undefined,
        chip3: p.batteryCapacity ?? undefined
      }));
      const m = this.machines().map(p => ({
        kind: 'machine',
        id: p.id,
        name: p.name,
        brandName: p.brandName,
        brand: p.brand,
        model: p.model,
        category: p.category,
        categoryName: p.categoryName,
        description: p.description,
        price: p.price,
        stockQuantity: p.stockQuantity,
        pictureUrl: p.pictureUrl,
        companyId: p.companyId,
        companyName: p.companyName,
        brandId: p.brandId,
        createdAt: p.createdAt,
        chip1: p.engineType ?? undefined,
        chip2: p.power ?? undefined,
        chip3: p.capacity ?? undefined
      }));
      return [...b, ...m];
    }, ...(ngDevMode ? [{
      debugName: "allProducts"
    }] : []));
    this.allCategoryOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const k = this.kind();
      const opts = [];
      if (k === 'all' || k === 'bike') {
        opts.push({
          value: _shared_models_electricBikeProduct__WEBPACK_IMPORTED_MODULE_15__.ElectricBikeCategory.ElectricBikeModel,
          label: '🚲 Xe điện – Chính hãng'
        }, {
          value: _shared_models_electricBikeProduct__WEBPACK_IMPORTED_MODULE_15__.ElectricBikeCategory.ElectricBikePart,
          label: '⚙️ Phụ tùng xe điện'
        });
      }
      if (k === 'all' || k === 'machine') {
        opts.push({
          value: 10 + _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_16__.AgriculturalMachineCategory.MachineModel,
          label: '🌾 Máy nông nghiệp – Chính hãng'
        }, {
          value: 10 + _shared_models_agriculturalMachineProduct__WEBPACK_IMPORTED_MODULE_16__.AgriculturalMachineCategory.MachinePart,
          label: '🛠️ Phụ tùng máy nông nghiệp'
        });
      }
      return opts;
    }, ...(ngDevMode ? [{
      debugName: "allCategoryOptions"
    }] : []));
    this.priceRange = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      let list = this.allProducts();
      const k = this.kind();
      if (k !== 'all') list = list.filter(p => p.kind === k);
      if (!list.length) return [0, 0];
      let min = Infinity;
      let max = -Infinity;
      for (const p of list) {
        if (p.price < min) min = p.price;
        if (p.price > max) max = p.price;
      }
      return [min === Infinity ? 0 : min, max === -Infinity ? 0 : max];
    }, ...(ngDevMode ? [{
      debugName: "priceRange"
    }] : []));
    this.priceSliderStep = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const range = this.priceRange();
      const span = range[1] - range[0];
      if (span <= 0) return 1;
      const step = Math.floor(span / 200);
      return Math.max(1, step);
    }, ...(ngDevMode ? [{
      debugName: "priceSliderStep"
    }] : []));
    this.priceSliderValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const [lo, hi] = this.priceRange();
      return [this.minPrice() ?? lo, this.maxPrice() ?? hi];
    }, ...(ngDevMode ? [{
      debugName: "priceSliderValue"
    }] : []));
    this.filteredProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      let list = this.allProducts();
      const k = this.kind();
      if (k !== 'all') list = list.filter(p => p.kind === k);
      const kw = this.keyword().trim().toLowerCase();
      if (kw) {
        list = list.filter(p => p.name.toLowerCase().includes(kw) || p.brandName.toLowerCase().includes(kw) || p.model.toLowerCase().includes(kw) || p.description.toLowerCase().includes(kw));
      }
      if (this.brandIds().length) {
        list = list.filter(p => this.brandIds().includes(p.brandId));
      }
      if (this.companyIds().length) {
        list = list.filter(p => this.companyIds().includes(p.companyId));
      }
      if (this.categoryIds().length) {
        list = list.filter(p => {
          const mapped = p.kind === 'machine' ? 10 + p.category : p.category;
          return this.categoryIds().includes(mapped) || this.categoryIds().includes(p.category);
        });
      }
      const minP = this.minPrice();
      const maxP = this.maxPrice();
      if (minP != null) list = list.filter(p => p.price >= minP);
      if (maxP != null) list = list.filter(p => p.price <= maxP);
      const sort = this.sortBy();
      const sorted = [...list];
      if (sort === 'priceAsc') sorted.sort((a, b) => a.price - b.price);else if (sort === 'priceDesc') sorted.sort((a, b) => b.price - a.price);else if (sort === 'nameAsc') sorted.sort((a, b) => a.name.localeCompare(b.name, 'vi'));else if (sort === 'newest') sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      return sorted;
    }, ...(ngDevMode ? [{
      debugName: "filteredProducts"
    }] : []));
    this.cardItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      return this.filteredProducts().map(p => ({
        kind: p.kind,
        id: p.id,
        name: p.name,
        brandName: p.brandName,
        model: p.model,
        categoryName: p.categoryName,
        description: p.description,
        price: p.price,
        pictureUrl: p.pictureUrl,
        companyName: p.companyName,
        chip1: p.chip1,
        chip2: p.chip2,
        chip3: p.chip3
      }));
    }, ...(ngDevMode ? [{
      debugName: "cardItems"
    }] : []));
    this.pageHeading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      switch (this.kind()) {
        case 'bike':
          return {
            eyebrow: '⚡ Xe điện chính hãng',
            eyebrowClass: 'bg-sky-50 text-sky-700 ring-sky-100',
            title: 'Danh mục xe điện',
            subtitle: 'Chọn lọc từ xe máy điện, xe đạp điện, xe tải điện đến phụ tùng chính hãng cho mọi nhu cầu di chuyển.',
            gradient: 'from-slate-50 via-white to-sky-50/50'
          };
        case 'machine':
          return {
            eyebrow: '🚜 Máy nông nghiệp chính hãng',
            eyebrowClass: 'bg-amber-100 text-amber-800 ring-amber-200',
            title: 'Danh mục máy nông nghiệp',
            subtitle: 'Máy gặt, máy cày, máy bơm, máy phun thuốc và phụ tùng chính hãng – trợ thủ đắc lực cho mùa vụ bội thu.',
            gradient: 'from-amber-50 via-white to-orange-50/60'
          };
        default:
          return {
            eyebrow: '🛍️ Danh mục sản phẩm',
            eyebrowClass: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
            title: 'Danh mục sản phẩm',
            subtitle: 'Danh mục đầy đủ xe điện và máy móc nông nghiệp chính hãng. Dùng bộ lọc để tìm sản phẩm phù hợp nhất.',
            gradient: 'from-slate-50 via-white to-indigo-50/50'
          };
      }
    }, ...(ngDevMode ? [{
      debugName: "pageHeading"
    }] : []));
    this.resultCountText = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const n = this.filteredProducts().length;
      return n === 0 ? 'Không có sản phẩm phù hợp' : n === 1 ? '1 sản phẩm' : `${n} sản phẩm`;
    }, ...(ngDevMode ? [{
      debugName: "resultCountText"
    }] : []));
  }
  onMinPriceInput(raw) {
    const v = typeof raw === 'string' ? raw : raw && raw.target ? raw.target : null;
    const val = v && typeof v !== 'string' ? v.value : typeof v === 'string' ? v : '';
    const n = val ? Number(val) : null;
    this.minPrice.set(n != null && Number.isFinite(n) ? n : null);
  }
  onMaxPriceInput(raw) {
    const v = typeof raw === 'string' ? raw : raw && raw.target ? raw.target : null;
    const val = v && typeof v !== 'string' ? v.value : typeof v === 'string' ? v : '';
    const n = val ? Number(val) : null;
    this.maxPrice.set(n != null && Number.isFinite(n) ? n : null);
  }
  onPriceSliderChange(v) {
    if (Array.isArray(v) && v.length === 2) {
      this.minPrice.set(v[0]);
      this.maxPrice.set(v[1]);
    }
  }
  ngOnInit() {
    this.kindParamSub.set(this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(params => {
      const raw = params.get('type');
      if (raw === 'bike' || raw === 'machine') return raw;
      return 'all';
    })).subscribe(k => this.kind.set(k)));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)([this.electricBikeService.getAll(), this.agriculturalMachineService.getAll(), this.brandService.getBrands(), this.companyService.getCompanies()]).subscribe({
      next: ([bikes, machines, brands, companies]) => {
        this.bikes.set(bikes);
        this.machines.set(machines);
        this.brands.set(brands);
        this.companies.set(companies);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  ngOnDestroy() {
    this.kindParamSub()?.unsubscribe();
  }
  goHome() {
    void this.router.navigate(['/']);
  }
  resetFilters() {
    this.keyword.set('');
    this.brandIds.set([]);
    this.companyIds.set([]);
    this.categoryIds.set([]);
    this.minPrice.set(null);
    this.maxPrice.set(null);
    this.sortBy.set('default');
  }
  getDetailUrl(p) {
    return ['/product-detail', p.kind, p.id];
  }
  formatCurrency(n) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(n);
  }
  kindAccentClass(p) {
    return p.kind === 'bike' ? 'border-slate-200 shadow-sky-500/10 hover:shadow-sky-500/20' : 'border-amber-200/60 shadow-amber-500/10 hover:shadow-amber-500/20';
  }
  categoryBadgeClass(p) {
    return p.kind === 'bike' ? 'bg-sky-100/95 text-sky-700' : 'bg-amber-100/95 text-amber-800';
  }
  static {
    this.ɵfac = function ProductsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 78,
      vars: 27,
      consts: [["productGrid", ""], [1, "relative", "overflow-hidden", "py-10", 3, "ngClass"], [1, "mx-auto", "max-w-7xl", "px-4", "md:px-6", "lg:px-8"], [1, "flex", "flex-wrap", "items-center", "gap-3", "md:mb-10", "mb-6"], ["type", "button", "routerLink", "/", "nz-button", "", "nzType", "default", 1, "!inline-flex", "!items-center", "!justify-center", "!gap-2", "!rounded-xl", "!border-slate-200", "!bg-white", "!px-3.5", "!py-2", "!text-sm", "!font-semibold", "!text-slate-700", "!shadow-sm", "transition", "hover:!border-emerald-300", "hover:!bg-emerald-50", "hover:!text-emerald-700"], [1, "fa", "fa-arrow-left"], [1, "flex-1"], [1, "flex", "gap-1", "rounded-full", "border", "border-slate-200", "bg-white", "p-1", "shadow-sm"], ["type", "button", "routerLink", "/products", "nz-button", "", 1, "!inline-flex", "!items-center", "!justify-center", "!rounded-full", "!px-4", "!py-1.5", "!text-xs", "!font-bold", "!border-0", "!shadow-none", "transition", "md:!text-sm", 3, "queryParams", "ngClass"], [1, "fa", "fa-th-large", "mr-1"], [1, "fa", "fa-bicycle", "mr-1"], [1, "fa", "fa-tractor", "mr-1"], [1, "mb-10", "text-center", "md:text-left"], [1, "mb-3", "inline-flex", "items-center", "gap-2", "rounded-full", "px-4", "py-1.5", "text-xs", "font-bold", "uppercase", "tracking-widest", "ring-1", 3, "ngClass"], [1, "text-3xl", "font-black", "tracking-tight", "text-slate-900", "md:text-4xl", "lg:text-5xl"], [1, "mt-4", "max-w-2xl", "text-slate-600", "mx-auto", "md:mx-0"], [1, "grid", "gap-8", "lg:grid-cols-[18rem_1fr]"], [1, ""], [1, "sticky", "top-6", "rounded-[1.5rem]", "border", "border-slate-200/70", "bg-white", "p-5", "shadow-md", "shadow-slate-500/5"], [1, "mb-3", "text-sm", "font-black", "uppercase", "tracking-wider", "text-slate-800"], [1, "fa", "fa-sliders", "mr-2", "text-indigo-500"], [1, "mb-2", "block", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-500"], ["nzSize", "default"], ["nz-input", "", "type", "text", "placeholder", "T\u00EAn s\u1EA3n ph\u1EA9m, th\u01B0\u01A1ng hi\u1EC7u...", 1, "!border-slate-200", 3, "ngModelChange", "ngModel"], ["nzSize", "default", "nzMode", "multiple", "nzPlaceHolder", "Ch\u1ECDn th\u01B0\u01A1ng hi\u1EC7u", 1, "!w-full", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzSize", "default", "nzMode", "multiple", "nzPlaceHolder", "Ch\u1ECDn \u0111\u01A1n v\u1ECB cung c\u1EA5p", 1, "!w-full", 3, "ngModelChange", "ngModel"], ["nzSize", "default", "nzMode", "multiple", "nzPlaceHolder", "Ch\u1ECDn lo\u1EA1i s\u1EA3n ph\u1EA9m", 1, "!w-full", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-2"], ["nz-input", "", "type", "number", "placeholder", "T\u1EEB", 1, "!border-slate-200", "!text-xs", "md:!text-sm", 3, "input", "value"], ["nz-input", "", "type", "number", "placeholder", "\u0110\u1EBFn", 1, "!border-slate-200", "!text-xs", "md:!text-sm", 3, "input", "value"], ["class", "mt-3 px-2", 4, "ngIf"], ["nzSize", "default", "nzPlaceHolder", "S\u1EAFp x\u1EBFp theo", 1, "!w-full", 3, "ngModelChange", "ngModel"], ["nzValue", "default", "nzLabel", "M\u1EB7c \u0111\u1ECBnh"], ["nzValue", "newest", "nzLabel", "M\u1EDBi nh\u1EA5t"], ["nzValue", "priceAsc", "nzLabel", "Gi\u00E1 t\u0103ng d\u1EA7n"], ["nzValue", "priceDesc", "nzLabel", "Gi\u00E1 gi\u1EA3m d\u1EA7n"], ["nzValue", "nameAsc", "nzLabel", "T\u00EAn A \u2192 Z"], ["nz-button", "", "nzType", "default", 1, "!w-full", "!rounded-full", "!border-slate-300", "!text-sm", "!font-semibold", "!text-slate-600", "hover:!bg-slate-50", 3, "click"], [1, "fa", "fa-refresh", "mr-2"], [4, "ngIf", "ngIfElse"], [3, "nzValue", "nzLabel"], [1, "mt-3", "px-2"], [3, "ngModelChange", "nzMin", "nzMax", "nzRange", "ngModel", "nzStep"], [1, "mt-1", "text-[11px]", "text-slate-500"], [1, "grid", "gap-6", "md:grid-cols-2", "xl:grid-cols-3"], ["class", "animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white", 4, "ngFor", "ngForOf"], [1, "animate-pulse", "overflow-hidden", "rounded-2xl", "border", "border-slate-200", "bg-white"], [1, "aspect-[4/3]", "bg-slate-100"], [1, "flex", "flex-col", "gap-2", "p-4"], [1, "h-3", "w-1/2", "rounded", "bg-slate-100"], [1, "h-5", "w-4/5", "rounded", "bg-slate-200"], [1, "h-4", "w-4/5", "rounded", "bg-slate-100"], [1, "h-5", "w-3/5", "rounded", "bg-slate-100"], [1, "flex", "gap-1"], [1, "h-4", "w-12", "rounded-full", "bg-slate-100"], [1, "mt-3", "border-t", "border-slate-100", "pt-3"], [1, "h-3", "w-8", "rounded", "bg-slate-100"], [1, "mt-1", "h-6", "w-24", "rounded", "bg-slate-200"], [1, "mt-2", "h-3", "w-2/3", "rounded", "bg-slate-100"], ["class", "rounded-3xl border border-slate-200 bg-white py-20 shadow-sm", 4, "ngIf"], ["class", "grid gap-6 md:grid-cols-2 xl:grid-cols-3", 4, "ngIf"], [1, "rounded-3xl", "border", "border-slate-200", "bg-white", "py-20", "shadow-sm"], [1, "text-center", "px-6"], [1, "mx-auto", "mb-4", "flex", "h-16", "w-16", "items-center", "justify-center", "rounded-2xl", "bg-rose-50", "text-rose-500", "ring-1", "ring-rose-100"], [1, "fa", "fa-search", "text-2xl"], [1, "text-lg", "font-black", "text-slate-900"], [1, "mt-2", "text-sm", "text-slate-600"], [1, "mx-1", "font-bold", "text-indigo-600", "underline", "hover:text-indigo-700", 3, "click"], ["type", "button", "routerLink", "/products", "nz-button", "", "nzType", "primary", 1, "!mt-5", "!inline-flex", "!items-center", "!justify-center", "!rounded-full", "!bg-indigo-600", "!px-6", "!font-semibold", 3, "click", "queryParams"], [1, "fa", "mr-2", 3, "ngClass"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "cm-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](7, "Quay v\u1EC1 trang ch\u1EE7");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](11, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](12, " T\u1EA5t c\u1EA3 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](13, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](14, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](15, " Xe \u0111i\u1EC7n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](17, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](18, " M\u00E1y n\u00F4ng nghi\u1EC7p ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](19, "div", 12)(20, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](22, "h2", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](24, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](26, "div", 16)(27, "aside", 17)(28, "div", 18)(29, "div")(30, "h3", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](31, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](32, " B\u1ED9 l\u1ECDc s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](33, "div")(34, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](35, " T\u1EEB kh\u00F3a ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](36, "nz-input-group", 22)(37, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.keyword.set($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](38, "div")(39, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](40, " Th\u01B0\u01A1ng hi\u1EC7u ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](41, "nz-select", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_nz_select_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.brandIds.set($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](42, ProductsComponent_nz_option_42_Template, 1, 2, "nz-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](43, "div")(44, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](45, " Nh\u00E0 cung c\u1EA5p ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](46, "nz-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_nz_select_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.companyIds.set($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](47, ProductsComponent_nz_option_47_Template, 1, 2, "nz-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](48, "div")(49, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](50, " Ph\u00E2n lo\u1EA1i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](51, "nz-select", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_nz_select_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.categoryIds.set($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](52, ProductsComponent_nz_option_52_Template, 1, 2, "nz-option", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](53, "div")(54, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](55, " Kho\u1EA3ng gi\u00E1 (VND) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](56, "div", 28)(57, "nz-input-group", 22)(58, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("input", function ProductsComponent_Template_input_input_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onMinPriceInput($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](59, "nz-input-group", 22)(60, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("input", function ProductsComponent_Template_input_input_60_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onMaxPriceInput($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](61, ProductsComponent_div_61_Template, 4, 7, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](62, "div")(63, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](64, " S\u1EAFp x\u1EBFp ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](65, "nz-select", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("ngModelChange", function ProductsComponent_Template_nz_select_ngModelChange_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.sortBy.set($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](66, "nz-option", 33)(67, "nz-option", 34)(68, "nz-option", 35)(69, "nz-option", 36)(70, "nz-option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](71, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_71_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.resetFilters());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](72, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](73, " \u0110\u1EB7t l\u1EA1i b\u1ED9 l\u1ECDc ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](74, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](75, ProductsComponent_ng_container_75_Template, 3, 2, "ng-container", 40)(76, ProductsComponent_ng_template_76_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const productGrid_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵreference"](77);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngClass", ctx.pageHeading().gradient);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](24, _c0))("ngClass", ctx.kind() === "all" ? "!bg-gradient-to-r !from-indigo-600 !to-violet-600 !text-white shadow-md shadow-indigo-500/20" : "!bg-transparent !text-slate-600 hover:!text-slate-900");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](25, _c1))("ngClass", ctx.kind() === "bike" ? "!bg-gradient-to-r !from-sky-600 !to-blue-600 !text-white shadow-md shadow-sky-500/20" : "!bg-transparent !text-slate-600 hover:!text-slate-900");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](26, _c2))("ngClass", ctx.kind() === "machine" ? "!bg-gradient-to-r !from-amber-500 !to-orange-500 !text-white shadow-md shadow-amber-500/20" : "!bg-transparent !text-slate-600 hover:!text-slate-900");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngClass", ctx.pageHeading().eyebrowClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", ctx.pageHeading().eyebrow, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", ctx.pageHeading().title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", ctx.pageHeading().subtitle, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.keyword());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.brandIds());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx.filteredBrands());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.companyIds());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx.filteredCompanies());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.categoryIds());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngForOf", ctx.allCategoryOptions());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("value", ctx.minPrice());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("value", ctx.maxPrice());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.priceRange()[1] > ctx.priceRange()[0]);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngModel", ctx.sortBy());
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.loading())("ngIfElse", productGrid_r9);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__.NzSelectComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_11__.NzTagModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_12__.NzSliderModule, ng_zorro_antd_slider__WEBPACK_IMPORTED_MODULE_12__.NzSliderComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_13__.NzEmptyModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzToolTipModule, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_21__.HeaderComponent, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_22__.ProductCardComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n  .ant-slider-track {\n  background: linear-gradient(to right, #6366f1, #8b5cf6);\n}\n\n  .ant-slider-handle {\n  border-color: #6366f1;\n}\n\n  .ant-select-selection {\n  border-color: rgb(226, 232, 240) !important;\n  border-radius: 0.75rem !important;\n}\n\n  .ant-select-selector {\n  border-color: rgb(226, 232, 240) !important;\n  border-radius: 0.75rem !important;\n}\n\n  .ant-input {\n  border-radius: 0.75rem !important;\n}\n\n  .ant-input-group > .ant-input:first-child, \n  .ant-input-group-addon:first-child {\n  border-start-start-radius: 0.75rem;\n  border-end-start-radius: 0.75rem;\n}\n\n  .ant-input-group-addon:last-child, \n  .ant-input-group > .ant-input-affix-wrapper:not(:last-child) .ant-input {\n  border-start-end-radius: 0.75rem;\n  border-end-end-radius: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsdURBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQ0FBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtBQUNGOztBQUVBOztFQUVFLGtDQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQ0FBQTtFQUNBLDhCQUFBO0FBQ0YiLCJmaWxlIjoicHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgLmFudC1zbGlkZXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2MzY2ZjEsICM4YjVjZjYpO1xufVxuXG46Om5nLWRlZXAgLmFudC1zbGlkZXItaGFuZGxlIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjM2NmYxO1xufVxuXG46Om5nLWRlZXAgLmFudC1zZWxlY3Qtc2VsZWN0aW9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hbnQtc2VsZWN0LXNlbGVjdG9yIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDApICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hbnQtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LWlucHV0LWdyb3VwID4gLmFudC1pbnB1dDpmaXJzdC1jaGlsZCxcbjo6bmctZGVlcCAuYW50LWlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXN0YXJ0LXN0YXJ0LXJhZGl1czogMC43NXJlbTtcbiAgYm9yZGVyLWVuZC1zdGFydC1yYWRpdXM6IDAuNzVyZW07XG59XG5cbjo6bmctZGVlcCAuYW50LWlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQsXG46Om5nLWRlZXAgLmFudC1pbnB1dC1ncm91cCA+IC5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlcjpub3QoOmxhc3QtY2hpbGQpIC5hbnQtaW5wdXQge1xuICBib3JkZXItc3RhcnQtZW5kLXJhZGl1czogMC43NXJlbTtcbiAgYm9yZGVyLWVuZC1lbmQtcmFkaXVzOiAwLjc1cmVtO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1REFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsa0NBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBOztFQUVFLGdDQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNBLGdyREFBZ3JEIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOjpuZy1kZWVwIC5hbnQtc2xpZGVyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNjM2NmYxLCAjOGI1Y2Y2KTtcbn1cblxuOjpuZy1kZWVwIC5hbnQtc2xpZGVyLWhhbmRsZSB7XG4gIGJvcmRlci1jb2xvcjogIzYzNjZmMTtcbn1cblxuOjpuZy1kZWVwIC5hbnQtc2VsZWN0LXNlbGVjdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIyNiAyMzIgMjQwKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIyNiAyMzIgMjQwKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFudC1pbnB1dC1ncm91cCA+IC5hbnQtaW5wdXQ6Zmlyc3QtY2hpbGQsXG46Om5nLWRlZXAgLmFudC1pbnB1dC1ncm91cC1hZGRvbjpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6IDAuNzVyZW07XG4gIGJvcmRlci1lbmQtc3RhcnQtcmFkaXVzOiAwLjc1cmVtO1xufVxuXG46Om5nLWRlZXAgLmFudC1pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkLFxuOjpuZy1kZWVwIC5hbnQtaW5wdXQtZ3JvdXAgPiAuYW50LWlucHV0LWFmZml4LXdyYXBwZXI6bm90KDpsYXN0LWNoaWxkKSAuYW50LWlucHV0IHtcbiAgYm9yZGVyLXN0YXJ0LWVuZC1yYWRpdXM6IDAuNzVyZW07XG4gIGJvcmRlci1lbmQtZW5kLXJhZGl1czogMC43NXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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

/***/ 3179
/*!**********************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-slider.mjs ***!
  \**********************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzMarks: () => (/* binding */ NzMarks),
/* harmony export */   NzSliderComponent: () => (/* binding */ NzSliderComponent),
/* harmony export */   NzSliderModule: () => (/* binding */ NzSliderModule),
/* harmony export */   "ɵNzSliderHandleComponent": () => (/* binding */ NzSliderHandleComponent),
/* harmony export */   "ɵNzSliderMarksComponent": () => (/* binding */ NzSliderMarksComponent),
/* harmony export */   "ɵNzSliderStepComponent": () => (/* binding */ NzSliderStepComponent),
/* harmony export */   "ɵNzSliderTrackComponent": () => (/* binding */ NzSliderTrackComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/bidi */ 7170);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8159);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 7579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6906);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);












const _c0 = ["handle"];
const _c1 = a0 => ({
  $implicit: a0
});
const _forTrack0 = ($index, $item) => $item.value;
function NzSliderMarksComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](0, "span", 1);
  }
  if (rf & 2) {
    const attr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](attr_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-slider-mark-active", attr_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomProperty"]("innerHTML", attr_r1.label, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
function NzSliderStepComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](0, "span", 1);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](step_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-slider-dot-active", step_r1.active);
  }
}
function NzSliderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-slider-step", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", ctx_r0.nzVertical)("min", ctx_r0.nzMin)("max", ctx_r0.nzMax)("lowerBound", ctx_r0.bounds.lower)("upperBound", ctx_r0.bounds.upper)("marksArray", ctx_r0.marksArray)("included", ctx_r0.nzIncluded)("reverse", ctx_r0.nzReverse);
  }
}
function NzSliderComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-slider-handle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusin", function NzSliderComponent_For_4_Template_nz_slider_handle_focusin_0_listener() {
      const ɵ$index_8_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.onHandleFocusIn(ɵ$index_8_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const handle_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", ctx_r0.nzVertical)("reverse", ctx_r0.nzReverse)("offset", handle_r4.offset)("value", handle_r4.value)("active", handle_r4.active)("tooltipFormatter", ctx_r0.nzTipFormatter)("tooltipVisible", ctx_r0.nzTooltipVisible)("tooltipPlacement", ctx_r0.nzTooltipPlacement)("dragging", ctx_r0.dragging())("dir", ctx_r0.dir);
  }
}
function NzSliderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-slider-marks", 2);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", ctx_r0.nzVertical)("min", ctx_r0.nzMin)("max", ctx_r0.nzMax)("lowerBound", ctx_r0.bounds.lower)("upperBound", ctx_r0.bounds.upper)("marksArray", ctx_r0.marksArray)("included", ctx_r0.nzIncluded)("reverse", ctx_r0.nzReverse);
  }
}
class NzSliderHandleComponent {
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef);
  handleEl;
  tooltip;
  vertical;
  reverse;
  offset;
  value;
  tooltipVisible = 'default';
  tooltipPlacement;
  tooltipFormatter;
  active = false;
  dir = 'ltr';
  dragging;
  tooltipTitle;
  style = {};
  ngOnChanges(changes) {
    const {
      offset,
      value,
      active,
      tooltipVisible,
      reverse,
      dir
    } = changes;
    if (offset || reverse || dir) {
      this.updateStyle();
    }
    if (value) {
      this.updateTooltipTitle();
      this.updateTooltipPosition();
    }
    if (active) {
      if (active.currentValue) {
        this.toggleTooltip(true);
      } else {
        this.toggleTooltip(false);
      }
    }
    if (tooltipVisible?.currentValue === 'always') {
      Promise.resolve().then(() => this.toggleTooltip(true, true));
    }
  }
  enterHandle = () => {
    if (!this.dragging) {
      this.toggleTooltip(true);
      this.updateTooltipPosition();
      this.cdr.detectChanges();
    }
  };
  leaveHandle = () => {
    if (!this.dragging) {
      this.toggleTooltip(false);
      this.cdr.detectChanges();
    }
  };
  focus() {
    this.handleEl?.nativeElement.focus();
  }
  toggleTooltip(show, force = false) {
    if (!force && (this.tooltipVisible !== 'default' || !this.tooltip)) {
      return;
    }
    if (show) {
      this.tooltip?.show();
    } else {
      this.tooltip?.hide();
    }
  }
  updateTooltipTitle() {
    if (this.tooltipFormatter) {
      this.tooltipTitle = typeof this.tooltipFormatter === 'function' ? this.tooltipFormatter(this.value) : this.tooltipFormatter;
    } else {
      this.tooltipTitle = `${this.value}`;
    }
  }
  updateTooltipPosition() {
    if (this.tooltip) {
      Promise.resolve().then(() => this.tooltip?.updatePosition());
    }
  }
  updateStyle() {
    if (this.vertical) {
      this.style = {
        [this.reverse ? 'top' : 'bottom']: `${this.offset}%`,
        [this.reverse ? 'bottom' : 'top']: 'auto',
        transform: this.reverse ? null : `translateY(+50%)`
      };
    } else {
      this.style = {
        ...this.getHorizontalStylePosition(),
        transform: `translateX(${this.reverse ? this.dir === 'rtl' ? '-' : '+' : this.dir === 'rtl' ? '+' : '-'}50%)`
      };
    }
    this.cdr.markForCheck();
  }
  getHorizontalStylePosition() {
    let left = this.reverse ? 'auto' : `${this.offset}%`;
    let right = this.reverse ? `${this.offset}%` : 'auto';
    if (this.dir === 'rtl') {
      [left, right] = [right, left];
    }
    return {
      left,
      right
    };
  }
  static ɵfac = function NzSliderHandleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzSliderHandleComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzSliderHandleComponent,
    selectors: [["nz-slider-handle"]],
    viewQuery: function NzSliderHandleComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzTooltipDirective, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.handleEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
      }
    },
    hostBindings: function NzSliderHandleComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function NzSliderHandleComponent_mouseenter_HostBindingHandler() {
          return ctx.enterHandle();
        })("mouseleave", function NzSliderHandleComponent_mouseleave_HostBindingHandler() {
          return ctx.leaveHandle();
        });
      }
    },
    inputs: {
      vertical: [2, "vertical", "vertical", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      reverse: [2, "reverse", "reverse", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      offset: [2, "offset", "offset", ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.numberAttributeWithZeroFallback],
      value: [2, "value", "value", ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.numberAttributeWithZeroFallback],
      tooltipVisible: "tooltipVisible",
      tooltipPlacement: "tooltipPlacement",
      tooltipFormatter: "tooltipFormatter",
      active: [2, "active", "active", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      dir: "dir",
      dragging: "dragging"
    },
    exportAs: ["nzSliderHandle"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 8,
    consts: [["handle", ""], ["tabindex", "0", "nz-tooltip", "", 1, "ant-slider-handle", 3, "nzTooltipTitle", "nzTooltipTitleContext", "nzTooltipTrigger", "nzTooltipPlacement"]],
    template: function NzSliderHandleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 1, 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", ctx.tooltipFormatter === null || ctx.tooltipVisible === "never" ? null : ctx.tooltipTitle)("nzTooltipTitleContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c1, ctx.value))("nzTooltipTrigger", null)("nzTooltipPlacement", ctx.tooltipPlacement);
      }
    },
    dependencies: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzTooltipModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzTooltipDirective],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__.setClassMetadata(NzSliderHandleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'nz-slider-handle',
      exportAs: 'nzSliderHandle',
      template: `
    <div
      #handle
      class="ant-slider-handle"
      tabindex="0"
      nz-tooltip
      [style]="style"
      [nzTooltipTitle]="tooltipFormatter === null || tooltipVisible === 'never' ? null : tooltipTitle"
      [nzTooltipTitleContext]="{ $implicit: value }"
      [nzTooltipTrigger]="null"
      [nzTooltipPlacement]="tooltipPlacement"
    ></div>
  `,
      host: {
        '(mouseenter)': 'enterHandle()',
        '(mouseleave)': 'leaveHandle()'
      },
      imports: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzTooltipModule],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None
    }]
  }], null, {
    handleEl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
      args: ['handle', {
        static: false
      }]
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
      args: [ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_16__.NzTooltipDirective, {
        static: false
      }]
    }],
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.numberAttributeWithZeroFallback
      }]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.numberAttributeWithZeroFallback
      }]
    }],
    tooltipVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    tooltipFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderMarksComponent {
  lowerBound = null;
  upperBound = null;
  marksArray = [];
  min;
  max;
  vertical = false;
  included = false;
  reverse;
  marks = [];
  ngOnChanges(changes) {
    const {
      marksArray,
      lowerBound,
      upperBound,
      reverse
    } = changes;
    if (marksArray || reverse) {
      this.buildMarks();
    }
    if (marksArray || lowerBound || upperBound || reverse) {
      this.togglePointActive();
    }
  }
  buildMarks() {
    const range = this.max - this.min;
    this.marks = this.marksArray.map(mark => {
      const {
        value,
        offset,
        config
      } = mark;
      const style = this.getMarkStyles(value, range, config);
      const label = isConfigObject(config) ? config.label : config;
      return {
        label,
        offset,
        style,
        value,
        config,
        active: false
      };
    });
  }
  getMarkStyles(value, range, config) {
    let style;
    const markValue = this.reverse ? this.max + this.min - value : value;
    if (this.vertical) {
      style = {
        marginBottom: '-50%',
        bottom: `${(markValue - this.min) / range * 100}%`
      };
    } else {
      style = {
        transform: `translate3d(-50%, 0, 0)`,
        left: `${(markValue - this.min) / range * 100}%`
      };
    }
    if (isConfigObject(config) && config.style) {
      style = {
        ...style,
        ...config.style
      };
    }
    return style;
  }
  togglePointActive() {
    if (this.marks && this.lowerBound !== null && this.upperBound !== null) {
      this.marks.forEach(mark => {
        const value = mark.value;
        mark.active = this.included ? value <= this.upperBound && value >= this.lowerBound : value === this.upperBound;
      });
    }
  }
  static ɵfac = function NzSliderMarksComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzSliderMarksComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzSliderMarksComponent,
    selectors: [["nz-slider-marks"]],
    hostAttrs: [1, "ant-slider-mark"],
    inputs: {
      lowerBound: "lowerBound",
      upperBound: "upperBound",
      marksArray: "marksArray",
      min: [2, "min", "min", _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute],
      max: [2, "max", "max", _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute],
      vertical: [2, "vertical", "vertical", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      included: [2, "included", "included", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      reverse: [2, "reverse", "reverse", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute]
    },
    exportAs: ["nzSliderMarks"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 0,
    consts: [[1, "ant-slider-mark-text", 3, "ant-slider-mark-active", "style", "innerHTML"], [1, "ant-slider-mark-text", 3, "innerHTML"]],
    template: function NzSliderMarksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, NzSliderMarksComponent_For_1_Template, 1, 5, "span", 0, _forTrack0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.marks);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__.setClassMetadata(NzSliderMarksComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'nz-slider-marks',
      exportAs: 'nzSliderMarks',
      template: `
    @for (attr of marks; track attr.value) {
      <span
        class="ant-slider-mark-text"
        [class.ant-slider-mark-active]="attr.active"
        [style]="attr.style"
        [innerHTML]="attr.label"
      ></span>
    }
  `,
      host: {
        class: 'ant-slider-mark'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None
    }]
  }], null, {
    lowerBound: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    upperBound: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    marksArray: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute
      }]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute
      }]
    }],
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    included: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }]
  });
})();
function isConfigObject(config) {
  return typeof config !== 'string';
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderStepComponent {
  lowerBound = null;
  upperBound = null;
  marksArray = [];
  min;
  max;
  vertical = false;
  included = false;
  reverse;
  steps = [];
  ngOnChanges(changes) {
    const {
      marksArray,
      lowerBound,
      upperBound,
      reverse
    } = changes;
    if (marksArray || reverse) {
      this.buildSteps();
    }
    if (marksArray || lowerBound || upperBound || reverse) {
      this.togglePointActive();
    }
  }
  buildSteps() {
    const orient = this.vertical ? 'bottom' : 'left';
    this.steps = this.marksArray.map(mark => {
      const {
        value,
        config
      } = mark;
      let offset = mark.offset;
      const range = this.max - this.min;
      if (this.reverse) {
        offset = (this.max - value) / range * 100;
      }
      return {
        value,
        offset,
        config,
        active: false,
        style: {
          [orient]: `${offset}%`,
          transform: this.vertical ? 'translateY(50%)' : 'translateX(-50%)'
        }
      };
    });
  }
  togglePointActive() {
    if (this.steps && this.lowerBound !== null && this.upperBound !== null) {
      this.steps.forEach(step => {
        const value = step.value;
        step.active = this.included ? value <= this.upperBound && value >= this.lowerBound : value === this.upperBound;
      });
    }
  }
  static ɵfac = function NzSliderStepComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzSliderStepComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzSliderStepComponent,
    selectors: [["nz-slider-step"]],
    hostAttrs: [1, "ant-slider-step"],
    inputs: {
      lowerBound: "lowerBound",
      upperBound: "upperBound",
      marksArray: "marksArray",
      min: [2, "min", "min", _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute],
      max: [2, "max", "max", _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute],
      vertical: [2, "vertical", "vertical", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      included: [2, "included", "included", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      reverse: [2, "reverse", "reverse", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute]
    },
    exportAs: ["nzSliderStep"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 0,
    consts: [[1, "ant-slider-dot", 3, "ant-slider-dot-active", "style"], [1, "ant-slider-dot"]],
    template: function NzSliderStepComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](0, NzSliderStepComponent_For_1_Template, 1, 4, "span", 0, _forTrack0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.steps);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__.setClassMetadata(NzSliderStepComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
      selector: 'nz-slider-step',
      exportAs: 'nzSliderStep',
      template: `
    @for (step of steps; track step.value) {
      <span class="ant-slider-dot" [class.ant-slider-dot-active]="step.active" [style]="step.style!"></span>
    }
  `,
      host: {
        class: 'ant-slider-step'
      }
    }]
  }], null, {
    lowerBound: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    upperBound: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    marksArray: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute
      }]
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute
      }]
    }],
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    included: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }]
  });
})();
class NzSliderTrackComponent {
  offset = 0;
  reverse = false;
  dir = 'ltr';
  length = 0;
  vertical = false;
  included = false;
  style = {};
  ngOnChanges() {
    const visibility = this.included ? 'visible' : 'hidden';
    if (this.vertical) {
      this.style = {
        [this.reverse ? 'top' : 'bottom']: `${this.offset}%`,
        [this.reverse ? 'bottom' : 'top']: 'auto',
        height: `${this.length}%`,
        visibility
      };
    } else {
      this.style = {
        ...this.getHorizontalStylePosition(),
        width: `${this.length}%`,
        visibility
      };
    }
  }
  getHorizontalStylePosition() {
    let left = this.reverse ? 'auto' : `${this.offset}%`;
    let right = this.reverse ? `${this.offset}%` : 'auto';
    if (this.dir === 'rtl') {
      [left, right] = [right, left];
    }
    return {
      left,
      right
    };
  }
  static ɵfac = function NzSliderTrackComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzSliderTrackComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzSliderTrackComponent,
    selectors: [["nz-slider-track"]],
    inputs: {
      offset: [2, "offset", "offset", _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute],
      reverse: [2, "reverse", "reverse", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      dir: "dir",
      length: [2, "length", "length", _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute],
      vertical: [2, "vertical", "vertical", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      included: [2, "included", "included", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute]
    },
    exportAs: ["nzSliderTrack"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 2,
    consts: [[1, "ant-slider-track"]],
    template: function NzSliderTrackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdomElement"](0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](ctx.style);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__.setClassMetadata(NzSliderTrackComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      selector: 'nz-slider-track',
      exportAs: 'nzSliderTrack',
      template: `<div class="ant-slider-track" [style]="style"></div>`,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute
      }]
    }],
    reverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    length: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute
      }]
    }],
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    included: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }]
  });
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderComponent {
  slider = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
  destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_3__.DestroyRef);
  cdr = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef);
  platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
  directionality = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_0__.Directionality);
  handlerComponents;
  nzDisabled = false;
  nzDots = false;
  nzIncluded = true;
  nzRange = false;
  nzVertical = false;
  nzReverse = false;
  nzDefaultValue;
  nzMarks = null;
  nzMax = 100;
  nzMin = 0;
  nzStep = 1;
  nzTooltipVisible = 'default';
  nzTooltipPlacement = 'top';
  nzTipFormatter;
  nzOnAfterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  value = null;
  cacheSliderStart = null;
  cacheSliderLength = null;
  activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
  track = {
    offset: null,
    length: null
  }; // Track's offset and length
  handles = []; // Handles' offset
  marksArray = null; // "steps" in array type with more data & FILTER out the invalid mark
  bounds = {
    lower: null,
    upper: null
  }; // now for nz-slider-step
  dir = 'ltr';
  dragging = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)(false, ...(ngDevMode ? [{
    debugName: "dragging"
  }] : []));
  dragStart$;
  dragMove$;
  dragEnd$;
  dragStart_;
  dragMove_;
  dragEnd_;
  isNzDisableFirstChange = true;
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe(direction => {
      this.dir = direction;
      this.cdr.detectChanges();
      this.updateTrackAndHandles();
      this.onValueChange(this.getValue(true));
    });
    this.handles = generateHandlers(this.nzRange ? 2 : 1);
    this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
    this.bindDraggingHandlers();
    this.toggleDragDisabled(this.nzDisabled);
    if (this.getValue() === null) {
      this.setValue(this.formatValue(null));
    }
  }
  ngOnChanges(changes) {
    const {
      nzDisabled,
      nzMarks,
      nzRange
    } = changes;
    if (nzDisabled && !nzDisabled.firstChange) {
      this.toggleDragDisabled(nzDisabled.currentValue);
    } else if (nzMarks && !nzMarks.firstChange) {
      this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
    } else if (nzRange && !nzRange.firstChange) {
      this.handles = generateHandlers(nzRange.currentValue ? 2 : 1);
      this.setValue(this.formatValue(null));
    }
  }
  writeValue(val) {
    this.setValue(val, true);
  }
  onValueChange(_value) {}
  onTouched() {}
  registerOnChange(fn) {
    this.onValueChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
    this.isNzDisableFirstChange = false;
    this.toggleDragDisabled(this.nzDisabled);
    this.cdr.markForCheck();
  }
  /**
   * Event handler is only triggered when a slider handler is focused.
   */
  onKeyDown(e) {
    if (this.nzDisabled) {
      return;
    }
    const code = e.keyCode;
    const isIncrease = code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.RIGHT_ARROW || code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.UP_ARROW;
    const isDecrease = code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.LEFT_ARROW || code === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.DOWN_ARROW;
    if (!(isIncrease || isDecrease)) {
      return;
    }
    e.preventDefault();
    const step = (isDecrease ? -this.nzStep : this.nzStep) * (this.nzReverse ? -1 : 1) * (this.dir === 'rtl' ? -1 : 1);
    const newVal = this.nzRange ? this.value[this.activeValueIndex] + step : this.value + step;
    this.setActiveValue((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.ensureNumberInRange)(newVal, this.nzMin, this.nzMax));
    this.nzOnAfterChange.emit(this.getValue(true));
  }
  onHandleFocusIn(index) {
    this.activeValueIndex = index;
  }
  setValue(value, isWriteValue = false) {
    if (isWriteValue) {
      this.value = this.formatValue(value);
      this.updateTrackAndHandles();
    } else if (!valuesEqual(this.value, value)) {
      this.value = value;
      this.updateTrackAndHandles();
      this.onValueChange(this.getValue(true));
    }
  }
  getValue(cloneAndSort = false) {
    if (cloneAndSort && this.value && isValueRange(this.value)) {
      return [...this.value].sort((a, b) => a - b);
    }
    return this.value;
  }
  /**
   * Clone & sort current value and convert them to offsets, then return the new one.
   */
  getValueToOffset(value) {
    let normalizedValue = value;
    if (typeof normalizedValue === 'undefined') {
      normalizedValue = this.getValue(true);
    }
    return isValueRange(normalizedValue) ? normalizedValue.map(val => this.valueToOffset(val)) : this.valueToOffset(normalizedValue);
  }
  /**
   * Find the closest value to be activated.
   */
  setActiveValueIndex(pointerValue) {
    const value = this.getValue();
    if (isValueRange(value)) {
      let minimal = null;
      let gap;
      let activeIndex = -1;
      value.forEach((val, index) => {
        gap = Math.abs(pointerValue - val);
        if (minimal === null || gap < minimal) {
          minimal = gap;
          activeIndex = index;
        }
      });
      this.activeValueIndex = activeIndex;
      this.handlerComponents.toArray()[activeIndex].focus();
    } else {
      this.handlerComponents.toArray()[0].focus();
    }
  }
  setActiveValue(pointerValue) {
    if (isValueRange(this.value)) {
      const newValue = [...this.value];
      newValue[this.activeValueIndex] = pointerValue;
      this.setValue(newValue);
    } else {
      this.setValue(pointerValue);
    }
  }
  /**
   * Update track and handles' position and length.
   */
  updateTrackAndHandles() {
    const value = this.getValue();
    const offset = this.getValueToOffset(value);
    const valueSorted = this.getValue(true);
    const offsetSorted = this.getValueToOffset(valueSorted);
    const boundParts = isValueRange(valueSorted) ? valueSorted : [0, valueSorted];
    const trackParts = isValueRange(offsetSorted) ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
    this.handles.forEach((handle, index) => {
      handle.offset = isValueRange(offset) ? offset[index] : offset;
      handle.value = isValueRange(value) ? value[index] : value || 0;
    });
    [this.bounds.lower, this.bounds.upper] = boundParts;
    [this.track.offset, this.track.length] = trackParts;
    this.cdr.markForCheck();
  }
  onDragStart(value) {
    this.toggleDragMoving(true);
    this.cacheSliderProperty();
    this.setActiveValueIndex(this.getLogicalValue(value));
    this.setActiveValue(this.getLogicalValue(value));
    this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
  }
  onDragMove(value) {
    this.setActiveValue(this.getLogicalValue(value));
    this.cdr.markForCheck();
  }
  getLogicalValue(value) {
    if (this.nzReverse) {
      if (!this.nzVertical && this.dir === 'rtl') {
        return value;
      }
      return this.nzMax - value + this.nzMin;
    }
    if (!this.nzVertical && this.dir === 'rtl') {
      return this.nzMax - value + this.nzMin;
    }
    return value;
  }
  onDragEnd() {
    this.nzOnAfterChange.emit(this.getValue(true));
    this.toggleDragMoving(false);
    this.cacheSliderProperty(true);
    this.hideAllHandleTooltip();
    this.cdr.markForCheck();
  }
  /**
   * Create user interactions handles.
   */
  bindDraggingHandlers() {
    if (!this.platform.isBrowser) {
      return;
    }
    const pluckFunc = keys => event => keys.reduce((acc, key) => acc[key] || acc, event);
    const sliderDOM = this.slider.nativeElement;
    const orientField = this.nzVertical ? 'pageY' : 'pageX';
    const mouse = {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup',
      pluckKey: [orientField]
    };
    const touch = {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend',
      pluckKey: ['touches', '0', orientField],
      filter: e => e instanceof TouchEvent
    };
    [mouse, touch].forEach(source => {
      const {
        start,
        move,
        end,
        pluckKey,
        filter: filterFunc = () => true
      } = source;
      source.startPlucked$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(sliderDOM, start).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(filterFunc), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.silentEvent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(pluckFunc(pluckKey)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(position => this.findClosestValue(position)));
      source.end$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(document, end);
      source.moveResolved$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(document, move).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(filterFunc), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.silentEvent), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(pluckFunc(pluckKey)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(position => this.findClosestValue(position)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(source.end$));
    });
    this.dragStart$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(mouse.startPlucked$, touch.startPlucked$);
    this.dragMove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(mouse.moveResolved$, touch.moveResolved$);
    this.dragEnd$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(mouse.end$, touch.end$);
  }
  subscribeDrag(periods = ['start', 'move', 'end']) {
    if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
      this.dragStart_ = this.dragStart$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe(this.onDragStart.bind(this));
    }
    if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
      this.dragMove_ = this.dragMove$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe(this.onDragMove.bind(this));
    }
    if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
      this.dragEnd_ = this.dragEnd$.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_6__.takeUntilDestroyed)(this.destroyRef)).subscribe(this.onDragEnd.bind(this));
    }
  }
  unsubscribeDrag(periods = ['start', 'move', 'end']) {
    if (periods.includes('start')) {
      this.dragStart_?.unsubscribe();
      this.dragStart_ = null;
    }
    if (periods.includes('move')) {
      this.dragMove_?.unsubscribe();
      this.dragMove_ = null;
    }
    if (periods.includes('end')) {
      this.dragEnd_?.unsubscribe();
      this.dragEnd_ = null;
    }
  }
  toggleDragMoving(movable) {
    const periods = ['move', 'end'];
    if (movable) {
      this.dragging.set(true);
      this.subscribeDrag(periods);
    } else {
      this.dragging.set(false);
      this.unsubscribeDrag(periods);
    }
  }
  toggleDragDisabled(disabled) {
    if (disabled) {
      this.unsubscribeDrag();
    } else {
      this.subscribeDrag(['start']);
    }
  }
  findClosestValue(position) {
    const sliderStart = this.getSliderStartPosition();
    const sliderLength = this.getSliderLength();
    const ratio = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.ensureNumberInRange)((position - sliderStart) / sliderLength, 0, 1);
    const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
    const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat).sort((a, b) => a - b);
    if (this.nzStep !== 0 && !this.nzDots) {
      const closestOne = Math.round(val / this.nzStep) * this.nzStep;
      points.push(closestOne);
    }
    const gaps = points.map(point => Math.abs(val - point));
    const closest = points[gaps.indexOf(Math.min(...gaps))];
    return this.nzStep === 0 ? closest : parseFloat(closest.toFixed((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.getPrecision)(this.nzStep)));
  }
  valueToOffset(value) {
    return (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.getPercent)(this.nzMin, this.nzMax, value);
  }
  getSliderStartPosition() {
    if (this.cacheSliderStart !== null) {
      return this.cacheSliderStart;
    }
    const offset = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.getElementOffset)(this.slider.nativeElement);
    return this.nzVertical ? offset.top : offset.left;
  }
  getSliderLength() {
    if (this.cacheSliderLength !== null) {
      return this.cacheSliderLength;
    }
    const sliderDOM = this.slider.nativeElement;
    return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
  }
  /**
   * Cache DOM layout/reflow operations for performance (may not necessary?)
   */
  cacheSliderProperty(remove = false) {
    this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
    this.cacheSliderLength = remove ? null : this.getSliderLength();
  }
  formatValue(value) {
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.isNil)(value)) {
      return this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
    } else if (assertValueValid(value, this.nzRange)) {
      return isValueRange(value) ? value.map(val => (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.ensureNumberInRange)(val, this.nzMin, this.nzMax)) : (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.ensureNumberInRange)(value, this.nzMin, this.nzMax);
    } else {
      return this.nzDefaultValue ? this.nzDefaultValue : this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin;
    }
  }
  /**
   * Show one handle's tooltip and hide others'.
   */
  showHandleTooltip(handleIndex = 0) {
    this.handles.forEach((handle, index) => handle.active = index === handleIndex);
  }
  hideAllHandleTooltip() {
    this.handles.forEach(handle => handle.active = false);
  }
  generateMarkItems(marks) {
    const marksArray = [];
    for (const key in marks) {
      if (marks.hasOwnProperty(key)) {
        const mark = marks[key];
        const val = typeof key === 'number' ? key : parseFloat(key);
        if (val >= this.nzMin && val <= this.nzMax) {
          marksArray.push({
            value: val,
            offset: this.valueToOffset(val),
            config: mark
          });
        }
      }
    }
    return marksArray.length ? marksArray : null;
  }
  static ɵfac = function NzSliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzSliderComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: NzSliderComponent,
    selectors: [["nz-slider"]],
    viewQuery: function NzSliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](NzSliderHandleComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.handlerComponents = _t);
      }
    },
    hostAttrs: [1, "ant-slider"],
    hostVars: 8,
    hostBindings: function NzSliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function NzSliderComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("ant-slider-rtl", ctx.dir === "rtl")("ant-slider-disabled", ctx.nzDisabled)("ant-slider-vertical", ctx.nzVertical)("ant-slider-with-marks", ctx.marksArray);
      }
    },
    inputs: {
      nzDisabled: [2, "nzDisabled", "nzDisabled", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      nzDots: [2, "nzDots", "nzDots", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      nzIncluded: [2, "nzIncluded", "nzIncluded", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      nzRange: [2, "nzRange", "nzRange", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      nzVertical: [2, "nzVertical", "nzVertical", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      nzReverse: [2, "nzReverse", "nzReverse", _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute],
      nzDefaultValue: "nzDefaultValue",
      nzMarks: "nzMarks",
      nzMax: [2, "nzMax", "nzMax", _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute],
      nzMin: [2, "nzMin", "nzMin", _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute],
      nzStep: [2, "nzStep", "nzStep", ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.numberAttributeWithZeroFallback],
      nzTooltipVisible: "nzTooltipVisible",
      nzTooltipPlacement: "nzTooltipPlacement",
      nzTipFormatter: "nzTipFormatter"
    },
    outputs: {
      nzOnAfterChange: "nzOnAfterChange"
    },
    exportAs: ["nzSlider"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => NzSliderComponent),
      multi: true
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 6,
    vars: 8,
    consts: [[1, "ant-slider-rail"], [3, "vertical", "included", "offset", "length", "reverse", "dir"], [3, "vertical", "min", "max", "lowerBound", "upperBound", "marksArray", "included", "reverse"], [3, "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dragging", "dir"], [3, "focusin", "vertical", "reverse", "offset", "value", "active", "tooltipFormatter", "tooltipVisible", "tooltipPlacement", "dragging", "dir"]],
    template: function NzSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0)(1, "nz-slider-track", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](2, NzSliderComponent_Conditional_2_Template, 1, 8, "nz-slider-step", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](3, NzSliderComponent_For_4_Template, 1, 10, "nz-slider-handle", 3, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](5, NzSliderComponent_Conditional_5_Template, 1, 8, "nz-slider-marks", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("vertical", ctx.nzVertical)("included", ctx.nzIncluded)("offset", ctx.track.offset)("length", ctx.track.length)("reverse", ctx.nzReverse)("dir", ctx.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.marksArray ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.handles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.marksArray ? 5 : -1);
      }
    },
    dependencies: [NzSliderTrackComponent, NzSliderStepComponent, NzSliderHandleComponent, NzSliderMarksComponent],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__.setClassMetadata(NzSliderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewEncapsulation.None,
      selector: 'nz-slider',
      exportAs: 'nzSlider',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => NzSliderComponent),
        multi: true
      }],
      template: `
    <div class="ant-slider-rail"></div>
    <nz-slider-track
      [vertical]="nzVertical"
      [included]="nzIncluded"
      [offset]="track.offset!"
      [length]="track.length!"
      [reverse]="nzReverse"
      [dir]="dir"
    ></nz-slider-track>
    @if (marksArray) {
      <nz-slider-step
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      ></nz-slider-step>
    }
    @for (handle of handles; track handle.value; let handleIndex = $index) {
      <nz-slider-handle
        [vertical]="nzVertical"
        [reverse]="nzReverse"
        [offset]="handle.offset!"
        [value]="handle.value!"
        [active]="handle.active"
        [tooltipFormatter]="nzTipFormatter"
        [tooltipVisible]="nzTooltipVisible"
        [tooltipPlacement]="nzTooltipPlacement"
        [dragging]="dragging()"
        [dir]="dir"
        (focusin)="onHandleFocusIn(handleIndex)"
      ></nz-slider-handle>
    }
    @if (marksArray) {
      <nz-slider-marks
        [vertical]="nzVertical"
        [min]="nzMin"
        [max]="nzMax"
        [lowerBound]="$any(bounds.lower)"
        [upperBound]="$any(bounds.upper)"
        [marksArray]="marksArray"
        [included]="nzIncluded"
        [reverse]="nzReverse"
      ></nz-slider-marks>
    }
  `,
      imports: [NzSliderTrackComponent, NzSliderStepComponent, NzSliderHandleComponent, NzSliderMarksComponent],
      host: {
        class: 'ant-slider',
        '[class.ant-slider-rtl]': `dir === 'rtl'`,
        '[class.ant-slider-disabled]': 'nzDisabled',
        '[class.ant-slider-vertical]': 'nzVertical',
        '[class.ant-slider-with-marks]': 'marksArray',
        '(keydown)': 'onKeyDown($event)'
      }
    }]
  }], null, {
    handlerComponents: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChildren,
      args: [NzSliderHandleComponent]
    }],
    nzDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    nzDots: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    nzIncluded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    nzRange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    nzVertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    nzReverse: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.booleanAttribute
      }]
    }],
    nzDefaultValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    nzMarks: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    nzMax: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute
      }]
    }],
    nzMin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_5__.numberAttribute
      }]
    }],
    nzStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
      args: [{
        transform: ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.numberAttributeWithZeroFallback
      }]
    }],
    nzTooltipVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    nzTooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    nzTipFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    nzOnAfterChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
    }]
  });
})();
function getValueTypeNotMatchError() {
  return new Error(`The "nzRange" can't match the "ngModel"'s type, please check these properties: "nzRange", "ngModel", "nzDefaultValue".`);
}
function isValueRange(value) {
  if (value instanceof Array) {
    return value.length === 2;
  } else {
    return false;
  }
}
function generateHandlers(amount) {
  return Array(amount).fill(0).map(() => ({
    offset: null,
    value: null,
    active: false
  }));
}
/**
 * Check if value is valid and throw error if value-type/range not match.
 */
function assertValueValid(value, isRange) {
  if (!isValueRange(value) && isNaN(value) || isValueRange(value) && value.some(v => isNaN(v))) {
    return false;
  }
  return assertValueTypeMatch(value, isRange);
}
/**
 * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
 */
function assertValueTypeMatch(value, isRange = false) {
  if (isValueRange(value) !== isRange) {
    throw getValueTypeNotMatchError();
  }
  return true;
}
function valuesEqual(valA, valB) {
  if (typeof valA !== typeof valB) {
    return false;
  }
  return isValueRange(valA) && isValueRange(valB) ? (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_15__.arraysEqual)(valA, valB) : valA === valB;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzSliderModule {
  static ɵfac = function NzSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzSliderModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: NzSliderModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [NzSliderComponent, NzSliderHandleComponent]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__.setClassMetadata(NzSliderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      imports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent],
      exports: [NzSliderComponent, NzSliderTrackComponent, NzSliderHandleComponent, NzSliderStepComponent, NzSliderMarksComponent]
    }]
  }], null, null);
})();

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzMarks {}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }

}]);
//# sourceMappingURL=src_app_products_products_component_ts.835f4e4f8b492e9b.js.map