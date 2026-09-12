"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["default-src_app_admin_shared_metadata-editor_metadata-editor_component_ts-src_app_services_br-210d5b"],{

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);




class BrandService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.cache = [];
  }
  getBrands() {
    if (this.cache.length > 0) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.cache);
    return this.http.get(this.baseUrl + 'brands');
  }
  getBrand(id) {
    const b = this.cache.find(x => x.id === id);
    if (b) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(b);
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
      return new (__ngFactoryType__ || BrandService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
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

/***/ 5346
/*!****************************************************************************!*\
  !*** ./node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input-number.mjs ***!
  \****************************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NzInputNumberComponent: () => (/* binding */ NzInputNumberComponent),
/* harmony export */   NzInputNumberModule: () => (/* binding */ NzInputNumberModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ 6423);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ 7170);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ 8159);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 9074);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/form */ 228);
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/util */ 6906);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 2715);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/space */ 3378);
















/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
const _c0 = ["input"];
const _c1 = ["inputNumberHost"];
const _c2 = [[["", "nzInputAddonBefore", ""]], [["", "nzInputAddonAfter", ""]], [["", "nzInputPrefix", ""]], [["", "nzInputSuffix", ""]], [["", "nzInputNumberUpIcon", ""]], [["", "nzInputNumberDownIcon", ""]]];
const _c3 = ["[nzInputAddonBefore]", "[nzInputAddonAfter]", "[nzInputPrefix]", "[nzInputSuffix]", "[nzInputNumberUpIcon]", "[nzInputNumberDownIcon]"];
function NzInputNumberComponent_Conditional_0_ng_template_0_Template(rf, ctx) {}
function NzInputNumberComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NzInputNumberComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const inputNumberWithAddonInner_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", inputNumberWithAddonInner_r1);
  }
}
function NzInputNumberComponent_Conditional_1_ng_template_0_Template(rf, ctx) {}
function NzInputNumberComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NzInputNumberComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const inputNumberWithAffixInner_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", inputNumberWithAffixInner_r2);
  }
}
function NzInputNumberComponent_Conditional_2_ng_template_0_Template(rf, ctx) {}
function NzInputNumberComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NzInputNumberComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const inputNumberInner_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", inputNumberInner_r3);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_1_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.nzAddonBefore());
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 0, null, NzInputNumberComponent_ng_template_3_Conditional_1_ProjectionFallback_1_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_2_ng_template_0_Template(rf, ctx) {}
function NzInputNumberComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NzInputNumberComponent_ng_template_3_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const inputNumberWithAffix_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", inputNumberWithAffix_r5);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_3_ng_template_0_Template(rf, ctx) {}
function NzInputNumberComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, NzInputNumberComponent_ng_template_3_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const inputNumber_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", inputNumber_r6);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_4_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.nzAddonAfter());
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 1, null, NzInputNumberComponent_ng_template_3_Conditional_4_ProjectionFallback_1_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NzInputNumberComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](1, NzInputNumberComponent_ng_template_3_Conditional_1_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](2, NzInputNumberComponent_ng_template_3_Conditional_2_Template, 1, 1, null, 8)(3, NzInputNumberComponent_ng_template_3_Conditional_3_Template, 1, 1, null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](4, NzInputNumberComponent_ng_template_3_Conditional_4_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.hasAddonBefore() ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.hasAffix() ? 2 : 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.hasAddonAfter() ? 4 : -1);
  }
}
function NzInputNumberComponent_ng_template_5_ng_template_1_Template(rf, ctx) {}
function NzInputNumberComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NzInputNumberComponent_ng_template_5_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const inputNumberWithAffixInner_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r3.affixWrapperClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", inputNumberWithAffixInner_r2);
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_0_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.nzPrefix());
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 2, null, NzInputNumberComponent_ng_template_7_Conditional_0_ProjectionFallback_1_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function NzInputNumberComponent_ng_template_7_ng_template_1_Template(rf, ctx) {}
function NzInputNumberComponent_ng_template_7_Conditional_2_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.nzSuffix());
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-form-item-feedback-icon", 13);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("status", ctx_r3.finalStatus());
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](1, 3, null, NzInputNumberComponent_ng_template_7_Conditional_2_ProjectionFallback_1_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](3, NzInputNumberComponent_ng_template_7_Conditional_2_Conditional_3_Template, 1, 1, "nz-form-item-feedback-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.hasFeedback() && ctx_r3.finalStatus() ? 3 : -1);
  }
}
function NzInputNumberComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](0, NzInputNumberComponent_ng_template_7_Conditional_0_Template, 3, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NzInputNumberComponent_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](2, NzInputNumberComponent_ng_template_7_Conditional_2_Template, 4, 1, "span", 12);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const inputNumber_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.hasPrefix() ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", inputNumber_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.hasSuffix() ? 2 : -1);
  }
}
function NzInputNumberComponent_ng_template_9_ng_template_2_Template(rf, ctx) {}
function NzInputNumberComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", null, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, NzInputNumberComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const inputNumberInner_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r3.inputNumberClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", inputNumberInner_r3);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-icon", 20);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-icon", 21);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseup", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_div_mouseup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.stopAutoStep());
    })("mouseleave", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_div_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.stopAutoStep());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_span_mousedown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onStepMouseDown($event, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](3, 4, null, NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_3_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_span_mousedown_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onStepMouseDown($event, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](6, 5, null, NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_6_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ant-input-number-handler-up-disabled", ctx_r3.upDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-disabled", ctx_r3.upDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ant-input-number-handler-down-disabled", ctx_r3.downDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-disabled", ctx_r3.downDisabled());
  }
}
function NzInputNumberComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](0, NzInputNumberComponent_ng_template_11_Conditional_0_Template, 8, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15)(2, "input", 16, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function NzInputNumberComponent_ng_template_11_Template_input_input_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const input_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onInput(input_r9.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx_r3.nzControls() ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r3.displayValue())("placeholder", ctx_r3.nzPlaceHolder() ?? "")("disabled", ctx_r3.finalDisabled())("readOnly", ctx_r3.nzReadOnly());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-valuemin", ctx_r3.nzMin())("aria-valuemax", ctx_r3.nzMax())("id", ctx_r3.nzId())("step", ctx_r3.nzStep())("value", ctx_r3.displayValue());
  }
}
class NzInputNumberComponent {
  nzId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(null, ...(ngDevMode ? [{
    debugName: "nzId"
  }] : []));
  nzSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)('default', ...(ngDevMode ? [{
    debugName: "nzSize"
  }] : []));
  nzPlaceHolder = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(null, ...(ngDevMode ? [{
    debugName: "nzPlaceHolder"
  }] : []));
  nzStatus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)('', ...(ngDevMode ? [{
    debugName: "nzStatus"
  }] : []));
  nzVariant = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)('outlined', ...(ngDevMode ? [{
    debugName: "nzVariant"
  }] : []));
  nzStep = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(1, ...(ngDevMode ? [{
    debugName: "nzStep",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.numberAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.numberAttribute
  }]));
  nzMin = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(Number.MIN_SAFE_INTEGER, ...(ngDevMode ? [{
    debugName: "nzMin",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.numberAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.numberAttribute
  }]));
  nzMax = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(Number.MAX_SAFE_INTEGER, ...(ngDevMode ? [{
    debugName: "nzMax",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.numberAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.numberAttribute
  }]));
  nzPrecision = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(null, ...(ngDevMode ? [{
    debugName: "nzPrecision"
  }] : []));
  nzParser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(...(ngDevMode ? [undefined, {
    debugName: "nzParser"
  }] : []));
  nzFormatter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(...(ngDevMode ? [undefined, {
    debugName: "nzFormatter"
  }] : []));
  nzDisabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(false, ...(ngDevMode ? [{
    debugName: "nzDisabled",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }]));
  nzReadOnly = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(false, ...(ngDevMode ? [{
    debugName: "nzReadOnly",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }]));
  nzAutoFocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(false, ...(ngDevMode ? [{
    debugName: "nzAutoFocus",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }]));
  /**
   * @deprecated Will be removed in v21. It is recommended to use `nzVariant` instead.
   */
  nzBordered = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(true, ...(ngDevMode ? [{
    debugName: "nzBordered",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }]));
  nzKeyboard = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(true, ...(ngDevMode ? [{
    debugName: "nzKeyboard",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }]));
  nzControls = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(true, ...(ngDevMode ? [{
    debugName: "nzControls",
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }] : [{
    transform: _angular_core__WEBPACK_IMPORTED_MODULE_6__.booleanAttribute
  }]));
  nzPrefix = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(...(ngDevMode ? [undefined, {
    debugName: "nzPrefix"
  }] : []));
  nzSuffix = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(...(ngDevMode ? [undefined, {
    debugName: "nzSuffix"
  }] : []));
  nzAddonBefore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(...(ngDevMode ? [undefined, {
    debugName: "nzAddonBefore"
  }] : []));
  nzAddonAfter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.input)(...(ngDevMode ? [undefined, {
    debugName: "nzAddonAfter"
  }] : []));
  nzBlur = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.output)();
  nzFocus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.output)();
  nzOnStep = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.output)();
  onChange = () => {};
  onTouched = () => {};
  isDisabledFirstChange = true;
  compactSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__.NZ_SPACE_COMPACT_SIZE, {
    optional: true
  });
  inputRef = _angular_core__WEBPACK_IMPORTED_MODULE_6__.viewChild.required('input');
  hostRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.viewChild)('inputNumberHost', ...(ngDevMode ? [{
    debugName: "hostRef"
  }] : []));
  elementRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
  injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector);
  focusMonitor = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__.FocusMonitor);
  directionality = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__.Directionality);
  nzFormStatusService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_10__.NzFormStatusService, {
    optional: true
  });
  autoStepTimer = null;
  defaultFormatter = value => {
    const precision = this.nzPrecision();
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.isNotNil)(precision)) {
      return value.toFixed(precision);
    }
    return value.toString();
  };
  value = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(null, ...(ngDevMode ? [{
    debugName: "value"
  }] : []));
  displayValue = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)('', ...(ngDevMode ? [{
    debugName: "displayValue"
  }] : []));
  dir = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.toSignal)(this.directionality.change, {
    initialValue: this.directionality.value
  });
  focused = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false, ...(ngDevMode ? [{
    debugName: "focused"
  }] : []));
  hasFeedback = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)(false, ...(ngDevMode ? [{
    debugName: "hasFeedback"
  }] : []));
  finalStatus = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.linkedSignal)(() => this.nzStatus());
  finalDisabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.linkedSignal)(() => this.nzDisabled());
  prefix = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.contentChild)(ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputPrefixDirective, ...(ngDevMode ? [{
    debugName: "prefix"
  }] : []));
  suffix = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.contentChild)(ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputSuffixDirective, ...(ngDevMode ? [{
    debugName: "suffix"
  }] : []));
  addonBefore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.contentChild)(ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputAddonBeforeDirective, ...(ngDevMode ? [{
    debugName: "addonBefore"
  }] : []));
  addonAfter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.contentChild)(ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputAddonAfterDirective, ...(ngDevMode ? [{
    debugName: "addonAfter"
  }] : []));
  hasPrefix = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => !!this.nzPrefix() || !!this.prefix(), ...(ngDevMode ? [{
    debugName: "hasPrefix"
  }] : []));
  hasSuffix = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => !!this.nzSuffix() || !!this.suffix() || this.hasFeedback(), ...(ngDevMode ? [{
    debugName: "hasSuffix"
  }] : []));
  hasAffix = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => this.hasPrefix() || this.hasSuffix(), ...(ngDevMode ? [{
    debugName: "hasAffix"
  }] : []));
  hasAddonBefore = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => !!this.nzAddonBefore() || !!this.addonBefore(), ...(ngDevMode ? [{
    debugName: "hasAddonBefore"
  }] : []));
  hasAddonAfter = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => !!this.nzAddonAfter() || !!this.addonAfter(), ...(ngDevMode ? [{
    debugName: "hasAddonAfter"
  }] : []));
  hasAddon = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => this.hasAddonBefore() || this.hasAddonAfter(), ...(ngDevMode ? [{
    debugName: "hasAddon"
  }] : []));
  class = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
    if (this.hasAddon()) {
      return this.groupWrapperClass();
    }
    if (this.hasAffix()) {
      return this.affixWrapperClass();
    }
    return this.inputNumberClass();
  }, ...(ngDevMode ? [{
    debugName: "class"
  }] : []));
  inputNumberClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
    return {
      'ant-input-number': true,
      'ant-input-number-lg': this.finalSize() === 'large',
      'ant-input-number-sm': this.finalSize() === 'small',
      'ant-input-number-disabled': this.finalDisabled(),
      'ant-input-number-readonly': this.nzReadOnly(),
      'ant-input-number-focused': this.focused(),
      'ant-input-number-rtl': this.dir() === 'rtl',
      'ant-input-number-in-form-item': !!this.nzFormStatusService,
      'ant-input-number-out-of-range': this.value() !== null && !isInRange(this.value(), this.nzMin(), this.nzMax()),
      ...(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.getVariantClassNames)('ant-input-number', this.nzVariant(), !this.nzBordered()),
      ...(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.getStatusClassNames)('ant-input-number', this.finalStatus(), this.hasFeedback())
    };
  }, ...(ngDevMode ? [{
    debugName: "inputNumberClass"
  }] : []));
  affixWrapperClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
    return {
      'ant-input-number-affix-wrapper': true,
      'ant-input-number-affix-wrapper-disabled': this.finalDisabled(),
      'ant-input-number-affix-wrapper-readonly': this.nzReadOnly(),
      'ant-input-number-affix-wrapper-focused': this.focused(),
      'ant-input-number-affix-wrapper-rtl': this.dir() === 'rtl',
      ...(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.getStatusClassNames)('ant-input-number-affix-wrapper', this.finalStatus(), this.hasFeedback()),
      ...(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.getVariantClassNames)('ant-input-number-affix-wrapper', this.nzVariant(), !this.nzBordered())
    };
  }, ...(ngDevMode ? [{
    debugName: "affixWrapperClass"
  }] : []));
  groupWrapperClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
    return {
      'ant-input-number-group-wrapper': true,
      'ant-input-number-group-wrapper-rtl': this.dir() === 'rtl',
      ...(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.getStatusClassNames)('ant-input-number-group-wrapper', this.finalStatus(), this.hasFeedback()),
      ...(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.getVariantClassNames)('ant-input-number-group-wrapper', this.nzVariant(), !this.nzBordered())
    };
  }, ...(ngDevMode ? [{
    debugName: "groupWrapperClass"
  }] : []));
  finalSize = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
    if (this.compactSize) {
      return this.compactSize();
    }
    return this.nzSize();
  }, ...(ngDevMode ? [{
    debugName: "finalSize"
  }] : []));
  upDisabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
    return !(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.isNil)(this.value()) && this.value() >= this.nzMax();
  }, ...(ngDevMode ? [{
    debugName: "upDisabled"
  }] : []));
  downDisabled = (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.computed)(() => {
    return !(0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.isNil)(this.value()) && this.value() <= this.nzMin();
  }, ...(ngDevMode ? [{
    debugName: "downDisabled"
  }] : []));
  constructor() {
    const destroyRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_4__.DestroyRef);
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.afterNextRender)(() => {
      const hostRef = this.hostRef();
      const element = hostRef ? hostRef : this.elementRef;
      this.focusMonitor.monitor(element, true).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)(destroyRef)).subscribe(origin => {
        this.focused.set(!!origin);
        if (origin) {
          this.nzFocus.emit();
        } else {
          this.fixValue();
          this.onTouched();
          this.nzBlur.emit();
        }
      });
      destroyRef.onDestroy(() => {
        this.focusMonitor.stopMonitoring(element);
      });
    });
    this.nzFormStatusService?.formStatusChanges.pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_8__.takeUntilDestroyed)()).subscribe(({
      status,
      hasFeedback
    }) => {
      this.finalStatus.set(status);
      this.hasFeedback.set(hasFeedback);
    });
  }
  ngOnInit() {
    if (this.nzAutoFocus()) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.afterNextRender)(() => this.focus(), {
        injector: this.injector
      });
    }
  }
  writeValue(value) {
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.isNil)(value)) value = null;
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.untracked)(() => {
      this.value.set(value);
      this.setValue(value);
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.untracked)(() => {
      this.finalDisabled.set(this.isDisabledFirstChange && this.nzDisabled() || disabled);
    });
    this.isDisabledFirstChange = false;
  }
  focus() {
    this.inputRef().nativeElement.focus();
  }
  blur() {
    this.inputRef().nativeElement.blur();
  }
  step(event, up) {
    // Ignore step since out of range
    if (up && this.upDisabled() || !up && this.downDisabled()) {
      return;
    }
    // When hold the shift key, the step is 10 times
    let step = event.shiftKey ? this.nzStep() * 10 : this.nzStep();
    if (!up) {
      step = -step;
    }
    const places = getDecimalPlaces(step);
    const multiple = 10 ** places;
    const nextValue = getRangeValue(
    // Convert floating point numbers to integers to avoid floating point math errors
    (Math.round((this.value() || 0) * multiple) + Math.round(step * multiple)) / multiple, this.nzMin(), this.nzMax(), this.nzPrecision());
    this.setValue(nextValue);
    this.nzOnStep.emit({
      type: up ? 'up' : 'down',
      value: this.value(),
      offset: this.nzStep()
    });
    this.focus();
  }
  setValue(value) {
    const formatter = this.nzFormatter() ?? this.defaultFormatter;
    const precision = this.nzPrecision();
    if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.isNotNil)(precision)) {
      value &&= +value.toFixed(precision);
    }
    const formatedValue = (0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.isNil)(value) ? '' : formatter(value);
    this.displayValue.set(formatedValue);
    this.updateValue(value);
  }
  setValueByTyping(value) {
    this.displayValue.set(value);
    if (value === '') {
      this.updateValue(null);
      return;
    }
    const parser = this.nzParser() ?? defaultParser;
    const parsedValue = parser(value);
    if (isNotCompleteNumber(value) || Number.isNaN(parsedValue)) {
      return;
    }
    // Formatting is called during input only if the user provided a formatter.
    // Otherwise, formatting is only called when the input blurs.
    const formatter = this.nzFormatter();
    if (formatter) {
      const formattedValue = formatter(parsedValue);
      this.displayValue.set(formattedValue);
    }
    if (!isInRange(parsedValue, this.nzMin(), this.nzMax())) {
      return;
    }
    this.updateValue(parsedValue);
  }
  updateValue(value) {
    if (this.value() !== value) {
      this.value.set(value);
      this.onChange(value);
    }
  }
  fixValue() {
    const displayValue = this.displayValue();
    if (displayValue === '') {
      return;
    }
    const parser = this.nzParser() ?? defaultParser;
    let fixedValue = parser(displayValue);
    // If parsing fails, revert to the previous value
    if (Number.isNaN(fixedValue)) {
      fixedValue = this.value();
    } else {
      const precision = this.nzPrecision();
      // fix precision
      if ((0,ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_11__.isNotNil)(precision) && getDecimalPlaces(fixedValue) !== precision) {
        fixedValue = +fixedValue.toFixed(precision);
      }
      // fix range
      if (!isInRange(fixedValue, this.nzMin(), this.nzMax())) {
        fixedValue = getRangeValue(fixedValue, this.nzMin(), this.nzMax(), precision);
      }
    }
    this.setValue(fixedValue);
  }
  stopAutoStep() {
    if (this.autoStepTimer !== null) {
      clearTimeout(this.autoStepTimer);
      this.autoStepTimer = null;
    }
  }
  onStepMouseDown(event, up) {
    event.preventDefault();
    this.stopAutoStep();
    this.step(event, up);
    // Loop step for interval
    const loopStep = () => {
      this.step(event, up);
      this.autoStepTimer = setTimeout(loopStep, STEP_INTERVAL);
    };
    // First time press will wait some time to trigger loop step update
    this.autoStepTimer = setTimeout(loopStep, STEP_DELAY);
  }
  onKeyDown(event) {
    switch (event.keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW:
        event.preventDefault();
        this.nzKeyboard() && this.step(event, true);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW:
        event.preventDefault();
        this.nzKeyboard() && this.step(event, false);
        break;
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER:
        this.fixValue();
        break;
    }
  }
  onInput(value) {
    this.setValueByTyping(value);
  }
  static ɵfac = function NzInputNumberComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzInputNumberComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: NzInputNumberComponent,
    selectors: [["nz-input-number"]],
    contentQueries: function NzInputNumberComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuerySignal"](dirIndex, ctx.prefix, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputPrefixDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuerySignal"](dirIndex, ctx.suffix, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputSuffixDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuerySignal"](dirIndex, ctx.addonBefore, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputAddonBeforeDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuerySignal"](dirIndex, ctx.addonAfter, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputAddonAfterDirective, 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryAdvance"](4);
      }
    },
    viewQuery: function NzInputNumberComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuerySignal"](ctx.inputRef, _c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuerySignal"](ctx.hostRef, _c1, 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryAdvance"](2);
      }
    },
    hostVars: 2,
    hostBindings: function NzInputNumberComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown", function NzInputNumberComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.class());
      }
    },
    inputs: {
      nzId: [1, "nzId"],
      nzSize: [1, "nzSize"],
      nzPlaceHolder: [1, "nzPlaceHolder"],
      nzStatus: [1, "nzStatus"],
      nzVariant: [1, "nzVariant"],
      nzStep: [1, "nzStep"],
      nzMin: [1, "nzMin"],
      nzMax: [1, "nzMax"],
      nzPrecision: [1, "nzPrecision"],
      nzParser: [1, "nzParser"],
      nzFormatter: [1, "nzFormatter"],
      nzDisabled: [1, "nzDisabled"],
      nzReadOnly: [1, "nzReadOnly"],
      nzAutoFocus: [1, "nzAutoFocus"],
      nzBordered: [1, "nzBordered"],
      nzKeyboard: [1, "nzKeyboard"],
      nzControls: [1, "nzControls"],
      nzPrefix: [1, "nzPrefix"],
      nzSuffix: [1, "nzSuffix"],
      nzAddonBefore: [1, "nzAddonBefore"],
      nzAddonAfter: [1, "nzAddonAfter"]
    },
    outputs: {
      nzBlur: "nzBlur",
      nzFocus: "nzFocus",
      nzOnStep: "nzOnStep"
    },
    exportAs: ["nzInputNumber"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => NzInputNumberComponent),
      multi: true
    }, {
      provide: ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__.NZ_SPACE_COMPACT_ITEM_TYPE,
      useValue: 'input-number'
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵHostDirectivesFeature"]([ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__.NzSpaceCompactItemDirective])],
    ngContentSelectors: _c3,
    decls: 13,
    vars: 1,
    consts: [["inputNumberWithAddonInner", ""], ["inputNumberWithAffix", ""], ["inputNumberWithAffixInner", ""], ["inputNumber", ""], ["inputNumberInner", ""], ["inputNumberHost", ""], ["input", ""], ["handlers", ""], [3, "ngTemplateOutlet"], [1, "ant-input-number-wrapper", "ant-input-number-group"], [1, "ant-input-number-group-addon"], [1, "ant-input-number-prefix"], [1, "ant-input-number-suffix"], [3, "status"], [1, "ant-input-number-handler-wrap"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", "role", "spinbutton", 1, "ant-input-number-input", 3, "input", "value", "placeholder", "disabled", "readOnly"], [1, "ant-input-number-handler-wrap", 3, "mouseup", "mouseleave"], ["role", "button", "unselectable", "on", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown"], ["role", "button", "unselectable", "on", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown"], ["nzType", "up", 1, "ant-input-number-handler-up-inner"], ["nzType", "down", 1, "ant-input-number-handler-down-inner"]],
    template: function NzInputNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditionalCreate"](0, NzInputNumberComponent_Conditional_0_Template, 1, 1, null, 8)(1, NzInputNumberComponent_Conditional_1_Template, 1, 1, null, 8)(2, NzInputNumberComponent_Conditional_2_Template, 1, 1, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, NzInputNumberComponent_ng_template_3_Template, 5, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(5, NzInputNumberComponent_ng_template_5_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(7, NzInputNumberComponent_ng_template_7_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(9, NzInputNumberComponent_ng_template_9_Template, 3, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"])(11, NzInputNumberComponent_ng_template_11_Template, 4, 10, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.hasAddon() ? 0 : ctx.hasAffix() ? 1 : 2);
      }
    },
    dependencies: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemFeedbackIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__.setClassMetadata(NzInputNumberComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component,
    args: [{
      selector: 'nz-input-number',
      exportAs: 'nzInputNumber',
      imports: [ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconModule, ng_zorro_antd_core_form__WEBPACK_IMPORTED_MODULE_10__.NzFormItemFeedbackIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
      template: `
    @if (hasAddon()) {
      <ng-template [ngTemplateOutlet]="inputNumberWithAddonInner" />
    } @else if (hasAffix()) {
      <ng-template [ngTemplateOutlet]="inputNumberWithAffixInner" />
    } @else {
      <ng-template [ngTemplateOutlet]="inputNumberInner" />
    }

    <ng-template #inputNumberWithAddonInner>
      <div class="ant-input-number-wrapper ant-input-number-group">
        @if (hasAddonBefore()) {
          <div class="ant-input-number-group-addon">
            <ng-content select="[nzInputAddonBefore]">{{ nzAddonBefore() }}</ng-content>
          </div>
        }

        @if (hasAffix()) {
          <ng-template [ngTemplateOutlet]="inputNumberWithAffix" />
        } @else {
          <ng-template [ngTemplateOutlet]="inputNumber" />
        }

        @if (hasAddonAfter()) {
          <div class="ant-input-number-group-addon">
            <ng-content select="[nzInputAddonAfter]">{{ nzAddonAfter() }}</ng-content>
          </div>
        }
      </div>
    </ng-template>

    <ng-template #inputNumberWithAffix>
      <div [class]="affixWrapperClass()">
        <ng-template [ngTemplateOutlet]="inputNumberWithAffixInner" />
      </div>
    </ng-template>

    <ng-template #inputNumberWithAffixInner>
      @if (hasPrefix()) {
        <span class="ant-input-number-prefix">
          <ng-content select="[nzInputPrefix]">{{ nzPrefix() }}</ng-content>
        </span>
      }
      <ng-template [ngTemplateOutlet]="inputNumber" />
      @if (hasSuffix()) {
        <span class="ant-input-number-suffix">
          <ng-content select="[nzInputSuffix]">{{ nzSuffix() }}</ng-content>
          @if (hasFeedback() && finalStatus()) {
            <nz-form-item-feedback-icon [status]="finalStatus()" />
          }
        </span>
      }
    </ng-template>

    <ng-template #inputNumber>
      <div #inputNumberHost [class]="inputNumberClass()">
        <ng-template [ngTemplateOutlet]="inputNumberInner" />
      </div>
    </ng-template>

    <ng-template #inputNumberInner>
      @if (nzControls()) {
        <div #handlers class="ant-input-number-handler-wrap" (mouseup)="stopAutoStep()" (mouseleave)="stopAutoStep()">
          <span
            role="button"
            unselectable="on"
            class="ant-input-number-handler ant-input-number-handler-up"
            [class.ant-input-number-handler-up-disabled]="upDisabled()"
            [attr.aria-disabled]="upDisabled()"
            (mousedown)="onStepMouseDown($event, true)"
          >
            <ng-content select="[nzInputNumberUpIcon]">
              <nz-icon nzType="up" class="ant-input-number-handler-up-inner" />
            </ng-content>
          </span>
          <span
            role="button"
            unselectable="on"
            class="ant-input-number-handler ant-input-number-handler-down"
            [class.ant-input-number-handler-down-disabled]="downDisabled()"
            [attr.aria-disabled]="downDisabled()"
            (mousedown)="onStepMouseDown($event, false)"
          >
            <ng-content select="[nzInputNumberDownIcon]">
              <nz-icon nzType="down" class="ant-input-number-handler-down-inner" />
            </ng-content>
          </span>
        </div>
      }

      <div class="ant-input-number-input-wrap">
        <input
          #input
          autocomplete="off"
          role="spinbutton"
          class="ant-input-number-input"
          [attr.aria-valuemin]="nzMin()"
          [attr.aria-valuemax]="nzMax()"
          [attr.id]="nzId()"
          [attr.step]="nzStep()"
          [attr.value]="displayValue()"
          [value]="displayValue()"
          [placeholder]="nzPlaceHolder() ?? ''"
          [disabled]="finalDisabled()"
          [readOnly]="nzReadOnly()"
          (input)="onInput(input.value)"
        />
      </div>
    </ng-template>
  `,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(() => NzInputNumberComponent),
        multi: true
      }, {
        provide: ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__.NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: 'input-number'
      }],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewEncapsulation.None,
      host: {
        '[class]': 'class()',
        '(keydown)': 'onKeyDown($event)'
      },
      hostDirectives: [ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_14__.NzSpaceCompactItemDirective]
    }]
  }], () => [], null);
})();
/**
 * When click and hold on a button - the speed of auto changing the value.
 */
const STEP_INTERVAL = 200;
/**
 * When click and hold on a button - the delay before auto changing the value.
 */
const STEP_DELAY = 600;
function defaultParser(value) {
  const parsedValue = value.trim().replace(/,/g, '').replace(/。/g, '.');
  // `+'' === 0`, so we need to check if parsedValue is empty
  if (parsedValue.length) {
    return +parsedValue;
  }
  return NaN;
}
function isInRange(value, min, max) {
  return value >= min && value <= max;
}
/**
 * if max > 0, round down with precision. Example: input= 3.5, max= 3.5, precision=0; output= 3
 * if max < 0, round up   with precision. Example: input=-3.5, max=-3.5, precision=0; output=-4
 * if min > 0, round up   with precision. Example: input= 3.5, min= 3.5, precision=0; output= 4
 * if min < 0, round down with precision. Example: input=-3.5, min=-3.5, precision=0; output=-3
 */
function getRangeValue(value, min, max, precision = null) {
  if (precision === null) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }
  const fixedValue = +value.toFixed(precision);
  const multiple = Math.pow(10, precision);
  if (fixedValue < min) {
    return Math.ceil(min * multiple) / multiple;
  }
  if (fixedValue > max) {
    return Math.floor(max * multiple) / multiple;
  }
  return fixedValue;
}
function getDecimalPlaces(num) {
  return num.toString().split('.')[1]?.length || 0;
}
function isNotCompleteNumber(value) {
  return /[.。](\d*0)?$/.test(value.toString());
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzInputNumberModule {
  static ɵfac = function NzInputNumberModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NzInputNumberModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: NzInputNumberModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [NzInputNumberComponent]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__.setClassMetadata(NzInputNumberModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
    args: [{
      imports: [NzInputNumberComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputAddonBeforeDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputAddonAfterDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputSuffixDirective],
      exports: [NzInputNumberComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputAddonBeforeDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputAddonAfterDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputSuffixDirective]
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
//# sourceMappingURL=default-src_app_admin_shared_metadata-editor_metadata-editor_component_ts-src_app_services_br-210d5b.564f00c6679e341f.js.map