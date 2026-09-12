"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts"],{

/***/ 6112
/*!*************************************************************************************!*\
  !*** ./src/app/admin/shared/entity-image-manager/entity-image-manager.component.ts ***!
  \*************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityImageManagerComponent: () => (/* binding */ EntityImageManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var _services_entity_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/entity-image.service */ 2377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);














function EntityImageManagerComponent_article_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "article", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function EntityImageManagerComponent_article_10_Template_input_ngModelChange_2_listener($event) {
      const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](image_r2.imageType, $event) || (image_r2.imageType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function EntityImageManagerComponent_article_10_Template_input_ngModelChange_3_listener($event) {
      const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](image_r2.sortOrder, $event) || (image_r2.sortOrder = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label", 13)(5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function EntityImageManagerComponent_article_10_Template_input_ngModelChange_5_listener($event) {
      const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](image_r2.isUsed, $event) || (image_r2.isUsed = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " \u0110ang d\u00F9ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 15)(8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EntityImageManagerComponent_article_10_Template_button_click_8_listener() {
      const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.save(image_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "L\u01B0u");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EntityImageManagerComponent_article_10_Template_button_click_10_listener() {
      const image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.remove(image_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "X\u00F3a file");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const image_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", image_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"])("alt", image_r2.originalFileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", image_r2.imageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", image_r2.sortOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", image_r2.isUsed);
  }
}
class EntityImageManagerComponent {
  constructor() {
    this.service = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_entity_image_service__WEBPACK_IMPORTED_MODULE_6__.EntityImageService);
    this.message = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_5__.NzMessageService);
    this.images = [];
    this.imageType = 'gallery';
    this.sortOrder = 0;
    this.file = null;
    this.uploading = false;
  }
  ngOnChanges() {
    if (this.entityType && this.entityId) this.load();
  }
  load() {
    this.service.list(this.entityType, this.entityId).subscribe({
      next: value => this.images = value,
      error: () => this.message.error('Không tải được ảnh')
    });
  }
  pick(event) {
    this.file = event.target.files?.[0] ?? null;
  }
  upload() {
    if (!this.file) return;
    this.uploading = true;
    this.service.upload(this.entityType, this.entityId, this.imageType, this.sortOrder, this.file).subscribe({
      next: () => {
        this.file = null;
        this.message.success('Đã tải ảnh');
        this.load();
      },
      error: error => {
        this.uploading = false;
        this.message.error(error?.error || 'Tải ảnh thất bại');
      },
      complete: () => this.uploading = false
    });
  }
  save(image) {
    this.service.update(image).subscribe({
      next: () => this.message.success('Đã cập nhật ảnh'),
      error: () => this.message.error('Cập nhật thất bại')
    });
  }
  remove(image) {
    if (!window.confirm(`Xóa vĩnh viễn ảnh ${image.originalFileName}?`)) return;
    this.service.remove(image.id).subscribe({
      next: () => {
        this.message.success('Đã xóa ảnh');
        this.load();
      },
      error: () => this.message.error('Xóa ảnh thất bại')
    });
  }
  static {
    this.ɵfac = function EntityImageManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntityImageManagerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: EntityImageManagerComponent,
      selectors: [["app-entity-image-manager"]],
      inputs: {
        entityType: "entityType",
        entityId: "entityId"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
      decls: 11,
      vars: 5,
      consts: [[1, "space-y-4", "border-t", "border-slate-200", "pt-5"], [1, "font-bold", "text-slate-800"], [1, "grid", "gap-2", "md:grid-cols-[1fr_160px_100px_auto]"], ["type", "file", "accept", "image/jpeg,image/png,image/webp,image/gif", 3, "change"], ["nz-input", "", "placeholder", "Lo\u1EA1i \u1EA3nh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "type", "number", "placeholder", "Th\u1EE9 t\u1EF1", 3, "ngModelChange", "ngModel"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", "nzLoading", "disabled"], [1, "grid", "gap-3", "sm:grid-cols-2", "lg:grid-cols-3"], ["class", "rounded-lg border border-slate-200 p-3", 4, "ngFor", "ngForOf"], [1, "rounded-lg", "border", "border-slate-200", "p-3"], [1, "mb-3", "h-32", "w-full", "rounded", "object-cover", 3, "src", "alt"], ["nz-input", "", 1, "mb-2", 3, "ngModelChange", "ngModel"], ["nz-input", "", "type", "number", 1, "mb-2", 3, "ngModelChange", "ngModel"], [1, "mb-3", "flex", "items-center", "gap-2", "text-sm"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2"], ["nz-button", "", "type", "button", 3, "click"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"]],
      template: function EntityImageManagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u1EA2nh c\u1EE7a entity");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2)(4, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function EntityImageManagerComponent_Template_input_change_4_listener($event) {
            return ctx.pick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function EntityImageManagerComponent_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.imageType, $event) || (ctx.imageType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function EntityImageManagerComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.sortOrder, $event) || (ctx.sortOrder = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function EntityImageManagerComponent_Template_button_click_7_listener() {
            return ctx.upload();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Upload");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, EntityImageManagerComponent_article_10_Template, 12, 5, "article", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.imageType);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.sortOrder);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzLoading", ctx.uploading)("disabled", !ctx.file);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.images);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 2377
/*!**************************************************!*\
  !*** ./src/app/services/entity-image.service.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EntityImageService: () => (/* binding */ EntityImageService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);




class EntityImageService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + 'entityimages';
  }
  list(entityType, entityId, includeInactive = true) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('includeInactive', includeInactive);
    return this.http.get(`${this.baseUrl}/${entityType}/${entityId}`, {
      params
    });
  }
  upload(entityType, entityId, imageType, sortOrder, file) {
    const data = new FormData();
    data.append('file', file, file.name);
    data.append('imageType', imageType);
    data.append('sortOrder', String(sortOrder));
    return this.http.post(`${this.baseUrl}/${entityType}/${entityId}`, data);
  }
  update(image) {
    return this.http.put(`${this.baseUrl}/${image.id}`, {
      imageType: image.imageType,
      sortOrder: image.sortOrder,
      isUsed: image.isUsed
    });
  }
  remove(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static {
    this.ɵfac = function EntityImageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EntityImageService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: EntityImageService,
      factory: EntityImageService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=default-src_app_admin_shared_entity-image-manager_entity-image-manager_component_ts.b813a91a227becda.js.map