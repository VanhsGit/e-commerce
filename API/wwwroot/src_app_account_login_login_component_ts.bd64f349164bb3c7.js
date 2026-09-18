"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_account_login_login_component_ts"],{

/***/ 9696
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var _shared_components_cm_input_cm_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/cm-input/cm-input.component */ 2945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../account.service */ 6672);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/message */ 9917);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);
















function LoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "M\u00E3 OTP 6 s\u1ED1");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_div_7_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx_r1.code, $event) || (ctx_r1.code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 10)(5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.changeEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " \u0110\u1ED5i email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.requestCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r1.cooldown > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1.cooldown > 0 ? "G\u1EEDi l\u1EA1i sau " + ctx_r1.cooldown + "s" : "G\u1EEDi l\u1EA1i m\u00E3", " ");
  }
}
class LoginComponent {
  constructor(accountService, router, route, messages) {
    this.accountService = accountService;
    this.router = router;
    this.route = route;
    this.messages = messages;
    this.email = '';
    this.code = '';
    this.step = 'email';
    this.cooldown = 0;
    this.loading = false;
  }
  requestCode() {
    if (!this.email.trim() || this.cooldown > 0) return;
    this.loading = true;
    this.accountService.requestOtp(this.email.trim()).subscribe({
      next: response => {
        this.step = 'otp';
        this.startCooldown(response.retryAfterSeconds || 60);
        this.messages.success('Nếu tài khoản hợp lệ, mã OTP đã được ghi vào log backend.');
      },
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }
  verifyCode() {
    if (!/^\d{6}$/.test(this.code)) {
      this.messages.error('OTP phải gồm 6 chữ số.');
      return;
    }
    this.loading = true;
    this.accountService.verifyOtp(this.email.trim(), this.code).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        void this.router.navigateByUrl(returnUrl);
      },
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }
  changeEmail() {
    this.step = 'email';
    this.code = '';
    this.clearTimer();
    this.cooldown = 0;
  }
  ngOnDestroy() {
    this.clearTimer();
  }
  startCooldown(seconds) {
    this.clearTimer();
    this.cooldown = seconds;
    this.timer = setInterval(() => {
      this.cooldown--;
      if (this.cooldown <= 0) this.clearTimer();
    }, 1000);
  }
  clearTimer() {
    if (this.timer) clearInterval(this.timer);
    this.timer = undefined;
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_8__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_10__.NzMessageService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 10,
      vars: 3,
      consts: [[1, "flex", "min-h-[70vh]", "items-center", "justify-center", "px-4", "py-12"], [1, "w-full", "max-w-md", "border", "border-slate-200", "bg-white", "p-8", "shadow-xl", "shadow-slate-200/60"], [1, "space-y-6", 3, "ngSubmit"], [1, "text-center"], [1, "text-sm", "font-semibold", "uppercase", "tracking-[0.28em]", "text-sky-600"], ["label", "Email address", "name", "email", "type", "email", "placeholder", "Email address", 3, "valueChange", "value"], [4, "ngIf"], ["nz-button", "", "nzType", "primary", "type", "submit", 1, "!h-12", "!w-full", "!text-base", "!font-semibold"], [1, "mb-2", "block", "text-sm", "font-semibold", "text-slate-700"], ["nz-input", "", "name", "code", "inputmode", "numeric", "maxlength", "6", "autocomplete", "one-time-code", "placeholder", "000000", 1, "!h-12", "!text-center", "!text-xl", "!tracking-[.4em]", 3, "ngModelChange", "ngModel"], [1, "mt-3", "flex", "justify-between", "text-sm"], ["type", "button", 1, "text-sky-700", 3, "click"], ["type", "button", 1, "text-sky-700", "disabled:text-slate-400", 3, "click", "disabled"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
            return ctx.step === "email" ? ctx.requestCode() : ctx.verifyCode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Welcome back ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "app-cm-input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function LoginComponent_Template_app_cm_input_valueChange_6_listener($event) {
            return ctx.email = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 9, 3, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.step === "otp");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.step === "email" ? "Nh\u1EADn m\u00E3 OTP" : "X\u00E1c nh\u1EADn v\u00E0 \u0111\u0103ng nh\u1EADp", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, _shared_components_cm_input_cm_input_component__WEBPACK_IMPORTED_MODULE_5__.CmInputComponent],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 2945
/*!******************************************************************!*\
  !*** ./src/app/shared/components/cm-input/cm-input.component.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CmInputComponent: () => (/* binding */ CmInputComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);








function CmInputComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
  }
}
class CmInputComponent {
  constructor() {
    this.label = '';
    this.name = 'cm-input';
    this.type = 'text';
    this.placeholder = '';
    this.disabled = false;
    this.required = false;
    this.value = '';
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onChangeCallback = () => {};
    this.onTouchedCallback = () => {};
  }
  writeValue(value) {
    this.value = value ?? '';
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  onValueChange(value) {
    this.value = value;
    this.onChangeCallback(value);
    this.valueChange.emit(value);
  }
  onBlur() {
    this.onTouchedCallback();
  }
  static {
    this.ɵfac = function CmInputComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CmInputComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CmInputComponent,
      selectors: [["app-cm-input"]],
      inputs: {
        label: "label",
        name: "name",
        type: "type",
        placeholder: "placeholder",
        disabled: "disabled",
        required: "required",
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => CmInputComponent),
        multi: true
      }])],
      decls: 3,
      vars: 8,
      consts: [[1, "space-y-2"], ["class", "block text-sm font-medium text-slate-700", 3, "for", 4, "ngIf"], ["nz-input", "", 1, "!h-12", "!border-slate-200", "!bg-white", "!text-slate-800", "placeholder:!text-slate-400", "focus:!border-sky-500", "focus:!shadow-none", 3, "ngModelChange", "blur", "id", "name", "type", "placeholder", "disabled", "required", "ngModel"], [1, "block", "text-sm", "font-medium", "text-slate-700", 3, "for"]],
      template: function CmInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CmInputComponent_label_1_Template, 2, 2, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CmInputComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.onValueChange($event);
          })("blur", function CmInputComponent_Template_input_blur_2_listener() {
            return ctx.onBlur();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.label);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.name)("name", ctx.name)("type", ctx.type)("placeholder", ctx.placeholder || ctx.label)("disabled", ctx.disabled)("required", ctx.required)("ngModel", ctx.value);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective],
      encapsulation: 2
    });
  }
}

/***/ }

}]);
//# sourceMappingURL=src_app_account_login_login_component_ts.bd64f349164bb3c7.js.map