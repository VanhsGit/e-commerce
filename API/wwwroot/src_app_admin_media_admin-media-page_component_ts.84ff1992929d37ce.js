"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_admin_media_admin-media-page_component_ts"],{

/***/ 1250
/*!***********************************************************!*\
  !*** ./src/app/admin/media/admin-media-page.component.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMediaPageComponent: () => (/* binding */ AdminMediaPageComponent)
/* harmony export */ });
/* harmony import */ var D_e_commerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9475);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/empty */ 2643);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/page-header */ 5853);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/spin */ 6568);
/* harmony import */ var _services_entity_image_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/entity-image.service */ 2377);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);

























function AdminMediaPageComponent_div_15_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "article", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 22)(11, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdminMediaPageComponent_div_15_article_1_Template_button_click_11_listener() {
      const image_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.copyUrl(image_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Sao ch\u00E9p URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdminMediaPageComponent_div_15_article_1_Template_button_click_13_listener() {
      const image_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.remove(image_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "X\u00F3a");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const image_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", image_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"])("alt", image_r3.originalFileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](image_r3.originalFileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("", image_r3.mimeType, " \u00B7 ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](7, 6, image_r3.fileSize / 1024, "1.0-1"), " KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](image_r3.url);
  }
}
function AdminMediaPageComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AdminMediaPageComponent_div_15_article_1_Template, 15, 9, "article", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.images);
  }
}
function AdminMediaPageComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nz-card", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "nz-empty", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
class AdminMediaPageComponent {
  constructor() {
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_entity_image_service__WEBPACK_IMPORTED_MODULE_12__.EntityImageService);
    this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_9__.NzMessageService);
    this.images = [];
    this.search = '';
    this.selectedFile = null;
    this.loading = false;
    this.uploading = false;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.service.list(this.search).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loading = false)).subscribe({
      next: images => this.images = images,
      error: () => this.message.error('Không tải được kho ảnh')
    });
  }
  clearSearch() {
    this.search = '';
    this.load();
  }
  pick(event) {
    this.selectedFile = event.target.files?.[0] ?? null;
  }
  upload() {
    if (!this.selectedFile || this.uploading) return;
    this.uploading = true;
    this.service.upload(this.selectedFile).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.uploading = false)).subscribe({
      next: () => {
        this.selectedFile = null;
        this.message.success('Đã lưu ảnh xuống máy chủ');
        this.load();
      },
      error: error => this.message.error(this.errorMessage(error, 'Tải ảnh thất bại'))
    });
  }
  remove(image) {
    if (!window.confirm(`Xóa ảnh ${image.originalFileName}?`)) return;
    this.service.remove(image.id).subscribe({
      next: () => {
        this.message.success('Đã xóa ảnh khỏi máy chủ');
        this.load();
      },
      error: error => this.message.error(this.errorMessage(error, 'Không thể xóa ảnh'))
    });
  }
  copyUrl(image) {
    var _this = this;
    return (0,D_e_commerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield navigator.clipboard.writeText(image.url);
      _this.message.success('Đã sao chép đường dẫn ảnh');
    })();
  }
  errorMessage(error, fallback) {
    const value = error;
    return typeof value?.error === 'string' ? value.error : value?.error?.message || fallback;
  }
  static {
    this.ɵfac = function AdminMediaPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AdminMediaPageComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: AdminMediaPageComponent,
      selectors: [["app-admin-media-page"]],
      decls: 18,
      vars: 7,
      consts: [["emptyMedia", ""], [1, "space-y-5"], ["nzTitle", "Kho \u1EA3nh", "nzSubtitle", "\u1EA2nh \u0111\u01B0\u1EE3c l\u01B0u tr\u00EAn m\u00E1y ch\u1EE7 v\u00E0 c\u00F3 th\u1EC3 d\u00F9ng l\u1EA1i trong c\u00E1c form qu\u1EA3n tr\u1ECB", 1, "!rounded-lg", "!border", "!border-slate-200", "!bg-white"], [1, "!rounded-lg", "!border", "!border-slate-200", 3, "nzBordered"], [1, "admin-filter", "grid", "gap-3", "lg:grid-cols-[minmax(260px,1fr)_auto_minmax(260px,1fr)_auto]"], ["nz-input", "", "placeholder", "T\u00ECm theo t\u00EAn file ho\u1EB7c \u0111\u1ECBnh d\u1EA1ng", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "flex", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], ["nz-button", "", "type", "button", 3, "click"], [1, "flex", "min-h-10", "items-center", "rounded", "border", "border-slate-300", "bg-white", "px-3", "text-sm", "text-slate-700"], ["type", "file", "accept", "image/jpeg,image/png,image/webp,image/gif", 3, "change"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", "disabled", "nzLoading"], [3, "nzSpinning"], ["class", "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", 4, "ngIf", "ngIfElse"], [1, "grid", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4"], ["class", "overflow-hidden rounded border border-slate-200 bg-white", 4, "ngFor", "ngForOf"], [1, "overflow-hidden", "rounded", "border", "border-slate-200", "bg-white"], [1, "h-48", "w-full", "border-b", "border-slate-200", "object-cover", 3, "src", "alt"], [1, "space-y-2", "p-3"], [1, "break-all", "text-sm", "font-semibold", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "break-all", "text-xs", "text-slate-500"], [1, "flex", "gap-2", "pt-1"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click"], ["nz-button", "", "nzSize", "small", "nzDanger", "", "type", "button", 3, "click"], [1, "!rounded-lg", "!border", "!border-slate-200"], ["nzNotFoundContent", "Kho \u1EA3nh ch\u01B0a c\u00F3 d\u1EEF li\u1EC7u"]],
      template: function AdminMediaPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "nz-page-header", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "nz-card", 3)(3, "div", 4)(4, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function AdminMediaPageComponent_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.search, $event) || (ctx.search = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup.enter", function AdminMediaPageComponent_Template_input_keyup_enter_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.load());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 6)(6, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdminMediaPageComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.load());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "T\u00ECm");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdminMediaPageComponent_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.clearSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "X\u00F3a l\u1ECDc");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "label", 9)(11, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function AdminMediaPageComponent_Template_input_change_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.pick($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AdminMediaPageComponent_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.upload());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "T\u1EA3i \u1EA3nh l\u00EAn");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "nz-spin", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, AdminMediaPageComponent_div_15_Template, 2, 1, "div", 13)(16, AdminMediaPageComponent_ng_template_16_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const emptyMedia_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzBordered", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx.search);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.selectedFile)("nzLoading", ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpinning", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.images.length)("ngIfElse", emptyMedia_r5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_6__.NzCardComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__.NzEmptyModule, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_7__.NzEmptyComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__.NzInputDirective, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderModule, ng_zorro_antd_page_header__WEBPACK_IMPORTED_MODULE_10__.NzPageHeaderComponent, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__.NzSpinModule, ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_11__.NzSpinComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_13__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_admin_media_admin-media-page_component_ts.84ff1992929d37ce.js.map