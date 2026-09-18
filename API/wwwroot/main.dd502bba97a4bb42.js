"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["main"],{

/***/ 6672
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5422);








class AccountService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    this.currentUser = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(null, ...(ngDevMode ? [{
      debugName: "currentUser"
    }] : []));
  }
  loadCurrentUser(token) {
    if (token === null) {
      this.currentUser.set(null);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
    }
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(this.baseUrl + 'account', {
      headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(user => {
      if (user) {
        localStorage.setItem('token', user.token);
        this.currentUser.set(user);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => user ?? null));
  }
  requestOtp(email) {
    return this.http.post(this.baseUrl + 'account/request-otp', {
      email
    });
  }
  verifyOtp(email, code) {
    return this.http.post(this.baseUrl + 'account/verify-otp', {
      email,
      code
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(user => {
      if (user) {
        localStorage.setItem('token', user.token);
        this.currentUser.set(user);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(user => user ?? null));
  }
  createUser(values) {
    return this.http.post(this.baseUrl + 'admin/users', values);
  }
  logout() {
    localStorage.removeItem('token');
    this.currentUser.set(null);
    this.router.navigateByUrl('/');
  }
  getUserAddress() {
    return this.http.get(this.baseUrl + 'account/address');
  }
  updateUserAddress(address) {
    return this.http.put(this.baseUrl + 'account/address', address);
  }
  static {
    this.ɵfac = function AccountService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var D_e_commerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.service */ 6672);











class AppComponent {
  constructor(accountService, router) {
    this.accountService = accountService;
    this.router = router;
    this.title = 'SkiNet';
    this.currentUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('/', ...(ngDevMode ? [{
      debugName: "currentUrl"
    }] : []));
  }
  ngOnInit() {
    this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(e => {
      if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
        this.currentUrl.set(e.urlAfterRedirects || e.url);
        try {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
          });
        } catch {
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }
    });
    // Initial snapshot
    if (this.router.url) this.currentUrl.set(this.router.url);
    this.loadCurrentUser();
  }
  loadCurrentUser() {
    var _this = this;
    return (0,D_e_commerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = localStorage.getItem('token');
      try {
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.accountService.loadCurrentUser(token));
      } catch (error) {
        // ignore token errors here; guards will redirect login routes
      }
    })();
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_account_account_service__WEBPACK_IMPORTED_MODULE_9__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 20,
      vars: 0,
      consts: [["bdColor", "rgba(255,255,255,0.9)", "size", "large", "color", "#10b981"], [1, "flex", "flex-col", "items-center", "gap-8"], [1, "relative", "h-32", "w-32"], [1, "absolute", "inset-0", "animate-spin", "rounded-full", 2, "animation-duration", "1.4s", "background", "conic-gradient(\n            from 0deg,\n            #10b981 0%,\n            #0ea5e9 25%,\n            #8b5cf6 50%,\n            #ec4899 75%,\n            #10b981 100%\n          )"], [1, "absolute", "inset-[5px]", "animate-spin", "rounded-full", "bg-white", 2, "animation-direction", "reverse", "animation-duration", "2.2s"], [1, "h-full", "w-full", "rounded-full", 2, "background", "conic-gradient(\n              from 180deg,\n              transparent 0deg,\n              rgba(16, 185, 129, 0.25) 60deg,\n              transparent 120deg,\n              rgba(139, 92, 246, 0.25) 240deg,\n              transparent 300deg\n            )"], [1, "absolute", "inset-[10px]", "flex", "items-center", "justify-center", "rounded-full", "bg-white", "shadow-inner", "ring-1", "ring-slate-100"], [1, "animate-pulse"], ["src", "assets/images/logo.png", "alt", "Logo", 1, "h-16", "w-16", "object-contain"], [1, "flex", "flex-col", "items-center", "gap-2"], [1, "text-sm", "font-semibold", "uppercase", "tracking-[0.25em]", "text-slate-600"], [1, "inline-flex", "gap-0.5", "align-middle"], [1, "inline-block", "h-1.5", "w-1.5", "animate-bounce", "rounded-full", "bg-emerald-500", 2, "animation-delay", "-0.3s"], [1, "inline-block", "h-1.5", "w-1.5", "animate-bounce", "rounded-full", "bg-sky-500", 2, "animation-delay", "-0.15s"], [1, "inline-block", "h-1.5", "w-1.5", "animate-bounce", "rounded-full", "bg-violet-500"], [1, "text-xs", "text-slate-400"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ngx-spinner", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 9)(10, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " \u0110ang t\u1EA3i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "span", 12)(14, "span", 13)(15, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Vui l\u00F2ng ch\u1EDD trong gi\u00E2y l\u00E1t ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__.NgxSpinnerComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_7__.ImgFallbackDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 2181
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _core_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Guards/auth.guard */ 8370);
/* harmony import */ var _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/server-error/server-error.component */ 8028);
/* harmony import */ var _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/not-found/not-found.component */ 382);
/* harmony import */ var _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/test-error/test-error.component */ 1334);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 1696);






const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
  data: {
    breadcrumb: 'Home'
  }
}, {
  path: 'product-detail/:kind/:id',
  component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_5__.ProductDetailComponent,
  data: {
    breadcrumb: 'Product Detail'
  }
}, {
  path: 'products',
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_products_products_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./products/products.component */ 9618)).then(m => m.ProductsComponent),
  data: {
    breadcrumb: 'Products'
  }
}, {
  path: 'test-error',
  component: _core_test_error_test_error_component__WEBPACK_IMPORTED_MODULE_3__.TestErrorComponent,
  data: {
    breadcrumb: 'Test Error'
  }
}, {
  path: 'server-error',
  component: _core_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_1__.ServerErrorComponent,
  data: {
    breadcrumb: 'Server Error'
  }
}, {
  path: 'not-found',
  component: _core_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent,
  data: {
    breadcrumb: 'Not Found'
  }
}, {
  path: 'account',
  children: [{
    path: 'login',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-message_mjs"), __webpack_require__.e("src_app_account_login_login_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./account/login/login.component */ 9696)).then(m => m.LoginComponent),
    data: {
      breadcrumb: {
        skip: true
      }
    }
  }]
}, {
  path: 'admin',
  canActivate: [_core_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_admin_admin_routes_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin.routes */ 249)).then(m => m.ADMIN_ROUTES)
}, {
  path: '**',
  redirectTo: 'not-found',
  pathMatch: 'full'
}];

/***/ },

/***/ 8370
/*!*******************************************!*\
  !*** ./src/app/core/Guards/auth.guard.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var D_e_commerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../account/account.service */ 6672);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);





class AuthGuard {
  constructor(accountService, router) {
    this.accountService = accountService;
    this.router = router;
  }
  canActivate(next, state) {
    var _this = this;
    return (0,D_e_commerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = localStorage.getItem('token');
      if (!token) {
        return _this.router.createUrlTree(['account/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
      }
      try {
        const user = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.accountService.loadCurrentUser(token));
        if (user) {
          return true;
        }
        localStorage.removeItem('token');
        return _this.router.createUrlTree(['account/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
      } catch (error) {
        localStorage.removeItem('token');
        return _this.router.createUrlTree(['account/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
      }
    })();
  }
  static {
    this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_account_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 9745
/*!***********************************************!*\
  !*** ./src/app/core/Services/busy.service.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusyService: () => (/* binding */ BusyService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 1249);


class BusyService {
  constructor(spinnerService) {
    this.spinnerService = spinnerService;
    this.busyRequestCount = 0;
  }
  busy() {
    this.busyRequestCount++;
    this.spinnerService.show();
  }
  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
  static {
    this.ɵfac = function BusyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BusyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BusyService,
      factory: BusyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 9446
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4285);





class ErrorInterceptor {
  constructor(router, toastr) {
    this.router = router;
    this.toastr = toastr;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if (error) {
        if (error.status === 400) {
          if (error.error.errors) {
            throw error.error;
          } else {
            this.toastr.error(error.error.message, error.error.statusCode);
          }
        }
        if (error.status === 401) {
          this.toastr.error(error.error.message, error.error.statusCode);
        }
        if (error.status === 404) {
          this.router.navigateByUrl('/not-found');
        }
        if (error.status === 500) {
          const navigationExtras = {
            state: {
              error: error.error
            }
          };
          this.router.navigateByUrl('/server-error', navigationExtras);
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(error);
    }));
  }
  static {
    this.ɵfac = function ErrorInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
  }
}

/***/ },

/***/ 8517
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);

class JwtInterceptor {
  constructor() {}
  intercept(request, next) {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function JwtInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JwtInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
  }
}

/***/ },

/***/ 5196
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/loading.interceptor.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _Services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Services/busy.service */ 9745);



class LoadingInterceptor {
  constructor(busyService) {
    this.busyService = busyService;
  }
  intercept(request, next) {
    if (request.method === 'POST' && request.url.includes('orders')) {
      return next.handle(request);
    }
    if (request.url.includes('emailexists')) {
      return next.handle(request);
    }
    this.busyService.busy();
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.finalize)(() => {
      this.busyService.idle();
    }));
  }
  static {
    this.ɵfac = function LoadingInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_Services_busy_service__WEBPACK_IMPORTED_MODULE_2__.BusyService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoadingInterceptor,
      factory: LoadingInterceptor.ɵfac
    });
  }
}

/***/ },

/***/ 382
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);


class NotFoundComponent {
  constructor() {}
  ngOnInit() {}
  static {
    this.ɵfac = function NotFoundComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "not-found works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 8028
/*!*************************************************************!*\
  !*** ./src/app/core/server-error/server-error.component.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerErrorComponent: () => (/* binding */ ServerErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5422);




function ServerErrorComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Note: if you are seeing this then Angular is probably not responsible ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "What to do next?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ol", 6)(8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Open chrome dev tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inspect the network tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Check the failing request");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Examine this request URL - make sure this is correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Reproduce the error in postman - if we get the same response in Postman, then the issue is NOT with Angular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Following is the stack trace - this is where your investigation should start! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "pre", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Error: ", ctx_r0.error.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error.details);
  }
}
class ServerErrorComponent {
  constructor(router) {
    this.router = router;
    const navigation = router.getCurrentNavigation();
    this.error = navigation && navigation.extras && navigation.extras.state && navigation.extras.state.error;
  }
  ngOnInit() {}
  static {
    this.ɵfac = function ServerErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ServerErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServerErrorComponent,
      selectors: [["app-server-error"]],
      decls: 4,
      vars: 1,
      consts: [[1, "mx-auto", "mt-8", "max-w-5xl", "border", "border-slate-200", "bg-white", "p-6", "shadow-sm", "sm:px-8"], [1, "text-2xl", "font-bold", "text-slate-900"], [4, "ngIf"], [1, "mt-6", "text-lg", "font-semibold", "text-red-600"], [1, "mt-3", "font-semibold", "text-slate-700"], [1, "mt-4", "text-slate-700"], [1, "mt-3", "list-decimal", "space-y-2", "pl-6", "text-slate-700"], [1, "mt-6", "text-slate-700"], [1, "mt-4", "overflow-x-auto", "rounded-2xl", "bg-slate-100", "p-4", "text-sm", "text-slate-700"]],
      template: function ServerErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Internal Server Error - refreshing the page will make the exception disappear ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ServerErrorComponent_ng_container_3_Template, 22, 2, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 1334
/*!*********************************************************!*\
  !*** ./src/app/core/test-error/test-error.component.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestErrorComponent: () => (/* binding */ TestErrorComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);









function TestErrorComponent_div_10_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const error_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](error_r1);
  }
}
function TestErrorComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TestErrorComponent_div_10_li_2_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.validationErrors);
  }
}
class TestErrorComponent {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  ngOnInit() {}
  get404Error() {
    this.http.get(this.baseUrl + 'products/42').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  get500Error() {
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  get400Error() {
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
  get400ValidationError() {
    this.http.get(this.baseUrl + 'products/fortytwo').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error.errors;
    });
  }
  static {
    this.ɵfac = function TestErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TestErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TestErrorComponent,
      selectors: [["app-test-error"]],
      decls: 11,
      vars: 1,
      consts: [[1, "mx-auto", "mt-8", "max-w-5xl", "space-y-6", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "flex-wrap", "gap-3"], ["nz-button", "", "nzType", "default", 1, "!border-sky-600", "!bg-white", "!px-4", "!py-2.5", "!text-sm", "!font-semibold", "!text-sky-600", "hover:!bg-sky-50", 3, "click"], ["class", "rounded-2xl border border-red-200 bg-red-50 p-4", 4, "ngIf"], [1, "rounded-2xl", "border", "border-red-200", "bg-red-50", "p-4"], [1, "list-disc", "space-y-1", "pl-5", "text-sm", "text-red-700"], [4, "ngFor", "ngForOf"]],
      template: function TestErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_2_listener() {
            return ctx.get500Error();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Test 500 Error ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_4_listener() {
            return ctx.get404Error();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Test 404 Error ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_6_listener() {
            return ctx.get400Error();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Test 400 Error ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TestErrorComponent_Template_button_click_8_listener() {
            return ctx.get400ValidationError();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Test 400 Validation Error ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, TestErrorComponent_div_10_Template, 3, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.validationErrors);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_2__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 7824
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ 3958);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/alert */ 3454);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 8573);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5677);
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/company.service */ 17);
/* harmony import */ var _services_electric_bike_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../services/electric-bike.service */ 2501);
/* harmony import */ var _services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../services/agricultural-machine.service */ 3473);
/* harmony import */ var _sections_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sections/hero-section/hero-section.component */ 2061);
/* harmony import */ var _sections_about_feature_section_about_feature_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sections/about-feature-section/about-feature-section.component */ 4419);
/* harmony import */ var _sections_partners_section_partners_section_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sections/partners-section/partners-section.component */ 7987);
/* harmony import */ var _sections_bikes_section_bikes_section_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sections/bikes-section/bikes-section.component */ 3583);
/* harmony import */ var _sections_agriculture_section_agriculture_section_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sections/agriculture-section/agriculture-section.component */ 4167);
/* harmony import */ var _sections_warranty_section_warranty_section_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sections/warranty-section/warranty-section.component */ 3713);
/* harmony import */ var _sections_company_story_section_company_story_section_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sections/company-story-section/company-story-section.component */ 5831);
/* harmony import */ var _sections_cta_section_cta_section_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sections/cta-section/cta-section.component */ 6119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 2481);


























class HomeComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router);
    this.companyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_company_service__WEBPACK_IMPORTED_MODULE_15__.CompanyService);
    this.electricBikeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_electric_bike_service__WEBPACK_IMPORTED_MODULE_16__.ElectricBikeService);
    this.agriculturalMachineService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_17__.AgriculturalMachineService);
    this.searchKeyword = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "searchKeyword"
    }] : []));
    this.searchCategory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('all', ...(ngDevMode ? [{
      debugName: "searchCategory"
    }] : []));
    this.minPrice = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "minPrice"
    }] : []));
    this.maxPrice = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "maxPrice"
    }] : []));
    this.warrantySerial = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "warrantySerial"
    }] : []));
    this.warrantyPhone = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "warrantyPhone"
    }] : []));
    this.warrantyResult = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "warrantyResult"
    }] : []));
    this.warrantySearchSubmitted = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "warrantySearchSubmitted"
    }] : []));
    this.warrantyLookupKind = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('bike', ...(ngDevMode ? [{
      debugName: "warrantyLookupKind"
    }] : []));
    this.warrantyLookupProductId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "warrantyLookupProductId"
    }] : []));
    this._allWarranties = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "_allWarranties"
    }] : []));
    this.companies = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "companies"
    }] : []));
    this.electricBikes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "electricBikes"
    }] : []));
    this.agriculturalMachines = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "agriculturalMachines"
    }] : []));
    this.companyStory = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "companyStory"
    }] : []));
    this.featuredBikes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.electricBikes().filter(b => b.isUsed !== false).slice(0, 4), ...(ngDevMode ? [{
      debugName: "featuredBikes"
    }] : []));
    this.featuredMachines = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => this.agriculturalMachines().filter(m => m.isUsed !== false).slice(0, 4), ...(ngDevMode ? [{
      debugName: "featuredMachines"
    }] : []));
    this.searchResults = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const keyword = this.searchKeyword().toLowerCase().trim();
      const category = this.searchCategory();
      const min = this.minPrice();
      const max = this.maxPrice();
      const bikes = category === 'all' || category === 'bike' ? this.electricBikes().filter(b => b.isUsed !== false).map(b => ({
        kind: 'bike',
        id: b.id,
        name: b.name,
        brandName: b.brandName,
        categoryName: b.categoryName,
        price: b.price,
        pictureUrl: b.pictureUrl,
        description: b.description
      })) : [];
      const machines = category === 'all' || category === 'machine' ? this.agriculturalMachines().filter(m => m.isUsed !== false).map(m => ({
        kind: 'machine',
        id: m.id,
        name: m.name,
        brandName: m.brandName,
        categoryName: m.categoryName,
        price: m.price,
        pictureUrl: m.pictureUrl,
        description: m.description
      })) : [];
      return [...bikes, ...machines].filter(item => {
        const matchKeyword = !keyword || item.name.toLowerCase().includes(keyword) || item.brandName.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword);
        const matchMin = min == null || item.price >= min;
        const matchMax = max == null || item.price <= max;
        return matchKeyword && matchMin && matchMax;
      });
    }, ...(ngDevMode ? [{
      debugName: "searchResults"
    }] : []));
  }
  ngOnInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)([this.companyService.getCompanies(), this.electricBikeService.getAll(), this.agriculturalMachineService.getAll()]).subscribe({
      next: ([companiesResult, bikesResult, machinesResult]) => {
        this.companies.set(companiesResult);
        this.electricBikes.set(bikesResult);
        this.agriculturalMachines.set(machinesResult);
      }
    });
    this._allWarranties.set(this.mockWarranties());
    this.companyStory.set(this.mockCompanyStory());
  }
  getDetailUrl(kind, id) {
    return ['/product-detail', kind, id];
  }
  scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  lookupWarranty() {
    this.warrantySearchSubmitted.set(true);
    const serial = this.warrantySerial().trim().toUpperCase();
    const phone = this.warrantyPhone().trim();
    const records = this._allWarranties();
    if (!serial && !phone) {
      this.warrantyResult.set({
        status: 'notfound',
        message: 'Vui lòng nhập Số Serial sản phẩm hoặc Số điện thoại đã mua hàng để tra cứu bảo hành.'
      });
      return;
    }
    const matched = records.find(r => serial && r.serialNumber.toUpperCase() === serial || phone && r.customerPhone.replace(/\D/g, '') === phone.replace(/\D/g, ''));
    if (matched) {
      this.warrantyResult.set({
        status: matched.status,
        record: matched,
        message: matched.status === 'active' ? `Đã tìm thấy thông tin bảo hành. Đang chuyển đến trang chi tiết sản phẩm...` : 'Đã tìm thấy thông tin bảo hành (đã hết hạn). Đang chuyển đến trang chi tiết sản phẩm...'
      });
      setTimeout(() => {
        void this.router.navigate(['/product-detail', matched.productKind, matched.productId], {
          queryParams: {
            serial: matched.serialNumber
          }
        });
      }, 600);
    } else {
      this.warrantyResult.set({
        status: 'notfound',
        message: 'Không tìm thấy thông tin bảo hành. Hãy kiểm tra lại số Serial hoặc SĐT, hoặc liên hệ tổng đài để được hỗ trợ.'
      });
    }
  }
  resetWarranty() {
    this.warrantySerial.set('');
    this.warrantyPhone.set('');
    this.warrantyResult.set(null);
    this.warrantySearchSubmitted.set(false);
  }
  lookupProductById() {
    const kind = this.warrantyLookupKind();
    const idRaw = this.warrantyLookupProductId().trim();
    const id = Number(idRaw);
    if (!kind || !id || !Number.isFinite(id)) {
      void this.router.navigate(['/products'], {
        queryParams: {
          type: kind ?? 'all'
        }
      });
      return;
    }
    void this.router.navigate(['/product-detail', kind, id]);
  }
  browseAll(kind) {
    void this.router.navigate(['/products'], {
      queryParams: {
        type: kind
      }
    });
  }
  goToBikesListing() {
    void this.router.navigate(['/products'], {
      queryParams: {
        type: 'bike'
      }
    });
  }
  goToMachinesListing() {
    void this.router.navigate(['/products'], {
      queryParams: {
        type: 'machine'
      }
    });
  }
  mockWarranties() {
    const today = new Date();
    const addDays = days => {
      const d = new Date(today);
      d.setDate(d.getDate() + days);
      return d;
    };
    const subtractDays = days => {
      const d = new Date(today);
      d.setDate(d.getDate() - days);
      return d;
    };
    const calcDaysLeft = end => Math.max(0, Math.floor((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
    const rec1Purchase = subtractDays(45);
    const rec1End = new Date(rec1Purchase);
    rec1End.setMonth(rec1End.getMonth() + 24);
    const rec2Purchase = subtractDays(380);
    const rec2End = new Date(rec2Purchase);
    rec2End.setMonth(rec2End.getMonth() + 12);
    const rec3Purchase = subtractDays(900);
    const rec3End = new Date(rec3Purchase);
    rec3End.setMonth(rec3End.getMonth() + 24);
    const rec4Purchase = subtractDays(20);
    const rec4End = new Date(rec4Purchase);
    rec4End.setMonth(rec4End.getMonth() + 6);
    return [{
      serialNumber: 'VF-E200-882134',
      productId: 'eb000001-0000-0000-0000-000000000101',
      productKind: 'bike',
      productName: 'VinFast Evo200 – Xe máy điện cao cấp',
      brandName: 'VinFast',
      customerName: 'Nguyễn Văn An',
      customerPhone: '0901123456',
      purchaseDate: rec1Purchase,
      warrantyMonths: 24,
      warrantyEndDate: rec1End,
      serviceCenter: 'Trung tâm bảo hành VinFast – Quận 1, HCM',
      servicePhone: '1900 2323 89',
      notes: ['Đã đăng ký kích hoạt bảo hành điện tử', 'Pin bao hành riêng 36 tháng / 20.000km', 'Lần bảo dưỡng định kỳ cuối: 15 ngày trước'],
      status: calcDaysLeft(rec1End) > 0 ? 'active' : 'expired',
      daysLeft: calcDaysLeft(rec1End)
    }, {
      serialNumber: 'KBT-DC105-050127',
      productId: 'am000001-0000-0000-0000-000000000201',
      productKind: 'machine',
      productName: 'Máy gặt đập liên hợp Kubota DC-105X',
      brandName: 'Kubota',
      customerName: 'Hợp tác xã Nông sản Đồng Tháp',
      customerPhone: '02773889901',
      purchaseDate: rec2Purchase,
      warrantyMonths: 12,
      warrantyEndDate: rec2End,
      serviceCenter: 'Đông Lực NN Việt – Chi nhánh Cần Thơ',
      servicePhone: '0292 3 666 888',
      notes: ['Bảo hành toàn bộ động cơ và khung xe', 'Phụ tùng hao mòn (lưỡi gặt, dây xích) không nằm trong bảo hành', 'Yêu cầu lịch sử bảo dưỡng đầy đủ'],
      status: calcDaysLeft(rec2End) > 0 ? 'active' : 'expired',
      daysLeft: calcDaysLeft(rec2End)
    }, {
      serialNumber: 'YMR-YM70-090233',
      productId: 'am000002-0000-0000-0000-000000000202',
      productKind: 'machine',
      productName: 'Máy cày 2 bàn đạp Yanmar YM70',
      brandName: 'Yanmar',
      customerName: 'Trần Thị Hồng',
      customerPhone: '0912987654',
      purchaseDate: rec3Purchase,
      warrantyMonths: 24,
      warrantyEndDate: rec3End,
      serviceCenter: 'Đông Lực NN Việt – Chi nhánh Hải Phòng',
      servicePhone: '0225 3 777 555',
      notes: ['Bảo hành đã hết hạn từ ngày ' + rec3End.toLocaleDateString('vi-VN'), 'Vẫn hỗ trợ sửa chữa có tính phí với chính sách khách hàng thân thiết', 'Ưu đãi 10% khi thay phụ tùng chính hãng'],
      status: calcDaysLeft(rec3End) > 0 ? 'active' : 'expired',
      daysLeft: calcDaysLeft(rec3End)
    }, {
      serialNumber: 'CEL-26-552211',
      productId: 'eb000002-0000-0000-0000-000000000102',
      productKind: 'bike',
      productName: 'Xe đạp điện thành phố Celesta 26 inch',
      brandName: 'Celesta',
      customerName: 'Lê Minh Khoa',
      customerPhone: '0977665544',
      purchaseDate: rec4Purchase,
      warrantyMonths: 6,
      warrantyEndDate: rec4End,
      serviceCenter: 'Xe Điện Xanh SM – Showroom Cầu Giấy',
      servicePhone: '024 6688 0099',
      notes: ['Kích hoạt bảo hành thành công ngày ' + rec4Purchase.toLocaleDateString('vi-VN'), 'Lần bảo dưỡng đầu tiên miễn phí sau 1 tháng', 'Liên hệ lấy xe tại nhà theo lịch hẹn'],
      status: calcDaysLeft(rec4End) > 0 ? 'active' : 'expired',
      daysLeft: calcDaysLeft(rec4End)
    }];
  }
  mockCompanyStory() {
    const stats = [{
      value: '15+',
      label: 'Năm đồng hành cùng khách hàng',
      icon: 'fa fa-history'
    }, {
      value: '50.000+',
      label: 'Xe điện & Máy móc đã giao hàng',
      icon: 'fa fa-truck'
    }, {
      value: '63/63',
      label: 'Tỉnh thành có đại lý phục vụ',
      icon: 'fa fa-map-marker'
    }, {
      value: '4.9/5',
      label: 'Đánh giá hài lòng từ khách hàng',
      icon: 'fa fa-star'
    }];
    const values = [{
      icon: 'fa fa-shield',
      title: 'Chính hãng 100%',
      description: 'Tất cả sản phẩm đều nhập khẩu trực tiếp từ nhà sản xuất, có nguồn gốc xuất xứ rõ ràng và tem chống giả.',
      color: 'from-emerald-500 to-teal-500'
    }, {
      icon: 'fa fa-headphones',
      title: 'Hỗ trợ 24/7',
      description: 'Tổng đài chăm sóc khách hàng hoạt động tất cả các ngày trong tuần, có đội ngũ kỹ thuật tại chỗ 63 tỉnh thành.',
      color: 'from-sky-500 to-indigo-500'
    }, {
      icon: 'fa fa-leaf',
      title: 'Hướng tới xanh',
      description: 'Ưu tiên các dòng sản phẩm tiết kiệm năng lượng, không thải khí CO2, góp phần xây dựng nông nghiệp & đô thị bền vững.',
      color: 'from-lime-500 to-emerald-500'
    }, {
      icon: 'fa fa-money',
      title: 'Giá cạnh tranh',
      description: 'Chính sách nhập khẩu số lượng lớn, cắt giảm trung gian giúp giá bán luôn tốt hơn thị trường 5-15% cùng nhiều chương trình hỗ trợ trả góp 0%.',
      color: 'from-amber-500 to-orange-500'
    }];
    const milestones = [{
      year: '2010',
      icon: 'fa fa-lightbulb-o',
      title: 'Thành lập công ty',
      description: 'Khởi đầu với 3 nhà sáng lập và showroom đầu tiên tại TP.HCM chuyên nhập khẩu & phân phối máy nông nghiệp.'
    }, {
      year: '2015',
      icon: 'fa fa-expand',
      title: 'Mở rộng toàn quốc',
      description: 'Xây dựng hệ thống 20 đại lý chính thức ở 20 tỉnh thành, trở thành nhà phân phối độc quyền Kubota, Yanmar tại miền Nam.'
    }, {
      year: '2019',
      icon: 'fa fa-bolt',
      title: 'Bước vào ngành xe điện',
      description: 'Ra mắt thương hiệu Xe Điện Xanh SM, ký hợp tác chiến lược với VinFast và nhiều thương hiệu xe điện quốc tế.'
    }, {
      year: '2022',
      icon: 'fa fa-trophy',
      title: 'Top 5 nhà phân phối',
      description: 'Vinh danh Top 5 nhà phân phối xe điện & máy nông nghiệp lớn nhất Việt Nam, đạt chứng nhận ISO 9001:2015.'
    }, {
      year: '2025',
      icon: 'fa fa-rocket',
      title: 'Hệ sinh thái toàn diện',
      description: 'Phát triển hệ thống Tra cứu bảo hành điện tử, sạc pin công cộng, và dịch vụ sửa chữa tại nhà trên phạm vi cả nước.'
    }];
    return {
      heading: 'Về chúng tôi – Hệ sinh thái Xe Điện & Máy Nông Nghiệp hàng đầu',
      subheading: 'Câu chuyện 15 năm xây dựng niềm tin',
      mission: 'Cung cấp giải pháp di chuyển đô thị (xe điện) và trang thiết bị nông nghiệp hiện đại với chất lượng quốc tế, giá cả hợp lý cùng dịch vụ hậu mãi xuất sắc cho mọi gia đình và doanh nghiệp Việt Nam.',
      vision: 'Trở thành hệ sinh thái phân phối, bảo hành và dịch vụ sau bán hàng số 1 Việt Nam trong lĩnh vực xe điện và máy nông nghiệp vào năm 2030, dẫn đầu xu hướng xanh – bền vững.',
      introParagraph: 'Được thành lập từ năm 2010, với hơn 15 năm kinh nghiệm trong ngành nhập khẩu và phân phối, VinFast EcoMobility cùng 2 đối tác chiến lược (Động Lực Nông Nghiệp Việt & Xe Điện Xanh SM) đã xây dựng được niềm tin vững chắc từ hơn 50.000 khách hàng cá nhân và doanh nghiệp trên khắp 63 tỉnh thành. Từ một showroom nhỏ ở Sài Gòn, đến nay chúng tôi sở hữu mạng lưới 100+ đại lý, 3 trung tâm bảo hành chuyên sâu và đội ngũ kỹ thuật được đào tạo bài bản tại Nhật Bản và Hàn Quốc.',
      stats,
      values,
      milestones,
      ceoQuote: {
        text: '"Thành công bền vững của chúng tôi không nằm ở số lượng sản phẩm bán ra, mà nằm ở nụ cười hài lòng của mỗi khách hàng sau nhiều năm sử dụng. Chính vì thế, mọi quyết định của công ty đều lấy khách hàng làm trọng tâm."',
        author: 'Nguyễn Thành Nam',
        role: 'Tổng Giám đốc – VinFast EcoMobility Group'
      }
    };
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 10,
      consts: [[3, "navigate"], [3, "companies"], [3, "navigate", "products"], [3, "serialChange", "phoneChange", "lookup", "reset", "lookupKindChange", "lookupProductIdChange", "lookupProduct", "browseAll", "serial", "phone", "result", "submitted", "lookupKind", "lookupProductId"], [3, "story"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "app-home-hero", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("navigate", function HomeComponent_Template_app_home_hero_navigate_0_listener($event) {
            return ctx.scrollToSection($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](1, "app-home-about")(2, "app-home-partners", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](3, "app-home-bikes", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("navigate", function HomeComponent_Template_app_home_bikes_navigate_3_listener() {
            return ctx.goToBikesListing();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "app-home-agriculture", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("navigate", function HomeComponent_Template_app_home_agriculture_navigate_4_listener() {
            return ctx.goToMachinesListing();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](5, "app-home-warranty", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("serialChange", function HomeComponent_Template_app_home_warranty_serialChange_5_listener($event) {
            return ctx.warrantySerial.set($event);
          })("phoneChange", function HomeComponent_Template_app_home_warranty_phoneChange_5_listener($event) {
            return ctx.warrantyPhone.set($event);
          })("lookup", function HomeComponent_Template_app_home_warranty_lookup_5_listener() {
            return ctx.lookupWarranty();
          })("reset", function HomeComponent_Template_app_home_warranty_reset_5_listener() {
            return ctx.resetWarranty();
          })("lookupKindChange", function HomeComponent_Template_app_home_warranty_lookupKindChange_5_listener($event) {
            return ctx.warrantyLookupKind.set($event);
          })("lookupProductIdChange", function HomeComponent_Template_app_home_warranty_lookupProductIdChange_5_listener($event) {
            return ctx.warrantyLookupProductId.set($event);
          })("lookupProduct", function HomeComponent_Template_app_home_warranty_lookupProduct_5_listener() {
            return ctx.lookupProductById();
          })("browseAll", function HomeComponent_Template_app_home_warranty_browseAll_5_listener($event) {
            return ctx.browseAll($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](6, "app-home-company-story", 4)(7, "app-home-cta");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("companies", ctx.companies);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("products", ctx.electricBikes);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("products", ctx.agriculturalMachines);
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("serial", ctx.warrantySerial())("phone", ctx.warrantyPhone())("result", ctx.warrantyResult())("submitted", ctx.warrantySearchSubmitted())("lookupKind", ctx.warrantyLookupKind())("lookupProductId", ctx.warrantyLookupProductId());
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("story", ctx.companyStory());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_7__.NzInputModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__.NzSelectModule, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__.NzCardModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_10__.NzTagModule, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzGridModule, ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_12__.NzAlertModule, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_13__.NzToolTipModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_14__.NzBadgeModule, _sections_hero_section_hero_section_component__WEBPACK_IMPORTED_MODULE_18__.HeroSectionComponent, _sections_about_feature_section_about_feature_section_component__WEBPACK_IMPORTED_MODULE_19__.AboutFeatureSectionComponent, _sections_partners_section_partners_section_component__WEBPACK_IMPORTED_MODULE_20__.PartnersSectionComponent, _sections_bikes_section_bikes_section_component__WEBPACK_IMPORTED_MODULE_21__.BikesSectionComponent, _sections_agriculture_section_agriculture_section_component__WEBPACK_IMPORTED_MODULE_22__.AgricultureSectionComponent, _sections_warranty_section_warranty_section_component__WEBPACK_IMPORTED_MODULE_23__.WarrantySectionComponent, _sections_company_story_section_company_story_section_component__WEBPACK_IMPORTED_MODULE_24__.CompanyStorySectionComponent, _sections_cta_section_cta_section_component__WEBPACK_IMPORTED_MODULE_25__.CtaSectionComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  overflow-x: hidden;\n}\n\n@keyframes _ngcontent-%COMP%_floatUp {\n  0% {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\nsection[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_floatUp 0.6s ease-out both;\n}\n\n.line-clamp-1[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.line-clamp-2[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.line-clamp-3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n#search[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]     .ant-select-selector {\n  background-color: rgba(255, 255, 255, 0.1) !important;\n  border-color: rgba(255, 255, 255, 0.1) !important;\n  color: white !important;\n}\n#search[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]     .ant-select-selector .ant-select-selection-placeholder, \n#search[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]     .ant-select-selector .ant-select-selection-item {\n  color: white !important;\n}\n#search[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]     .ant-select-selector .ant-select-arrow {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n#search[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%]    .ant-select-open .ant-select-selector {\n  border-color: rgba(16, 185, 129, 0.6) !important;\n  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.15) !important;\n}\n#search[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%], \n#search[_ngcontent-%COMP%]   .ant-input-number-input[_ngcontent-%COMP%], \n#search[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: white;\n}\n#search[_ngcontent-%COMP%]   .ant-input[_ngcontent-%COMP%]::placeholder, \n#search[_ngcontent-%COMP%]   .ant-input-number-input[_ngcontent-%COMP%]::placeholder, \n#search[_ngcontent-%COMP%]   nz-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(148, 163, 184, 0.7);\n}\n#search[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n  padding: 2px 10px !important;\n}\n\nnz-button[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsNEJBQUE7RUFBRjtFQUVBO0lBQ0UsMkJBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxxQ0FBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQURGOztBQU9NO0VBQ0UscURBQUE7RUFDQSxpREFBQTtFQUNBLHVCQUFBO0FBSlI7QUFNUTs7RUFFRSx1QkFBQTtBQUpWO0FBT1E7RUFDRSwwQ0FBQTtBQUxWO0FBU007RUFDRSxnREFBQTtFQUNBLHlEQUFBO0FBUFI7QUFZRTs7O0VBR0UsWUFBQTtBQVZKO0FBWUk7OztFQUNFLCtCQUFBO0FBUk47QUFZRTtFQUNFLDJCQUFBO0VBQ0EsNEJBQUE7QUFWSjs7QUFjQTtFQUNFLHFEQUFBO0FBWEYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXRVcCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNHB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcclxuICB9XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGFuaW1hdGlvbjogZmxvYXRVcCAwLjZzIGVhc2Utb3V0IGJvdGg7XHJcbn1cclxuXHJcbi5saW5lLWNsYW1wLTEge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5saW5lLWNsYW1wLTIge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5saW5lLWNsYW1wLTMge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbiNzZWFyY2gge1xyXG4gIG56LXNlbGVjdCB7XHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAuYW50LXNlbGVjdC1zZWxlY3RvciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLXBsYWNlaG9sZGVyLFxyXG4gICAgICAgIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1pdGVtIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFudC1zZWxlY3QtYXJyb3cge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5hbnQtc2VsZWN0LW9wZW4gLmFudC1zZWxlY3Qtc2VsZWN0b3Ige1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNiwgMTg1LCAxMjksIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgxNiwgMTg1LCAxMjksIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbnQtaW5wdXQsXHJcbiAgLmFudC1pbnB1dC1udW1iZXItaW5wdXQsXHJcbiAgbnotaW5wdXQtZ3JvdXAgaW5wdXQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMC43KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG56LXRhZyB7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAycHggMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxubnotYnV0dG9uIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0lBQ0Esd0JBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLDRCQUFBO0VBQUY7RUFFQTtJQUNFLDJCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UscUNBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFPTTtFQUNFLHFEQUFBO0VBQ0EsaURBQUE7RUFDQSx1QkFBQTtBQUpSO0FBTVE7O0VBRUUsdUJBQUE7QUFKVjtBQU9RO0VBQ0UsMENBQUE7QUFMVjtBQVNNO0VBQ0UsZ0RBQUE7RUFDQSx5REFBQTtBQVBSO0FBWUU7OztFQUdFLFlBQUE7QUFWSjtBQVlJOzs7RUFDRSwrQkFBQTtBQVJOO0FBWUU7RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBVko7O0FBY0E7RUFDRSxxREFBQTtBQVhGO0FBQ0EsNGtIQUE0a0giLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0VXAge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjRweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XHJcbiAgfVxyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBhbmltYXRpb246IGZsb2F0VXAgMC42cyBlYXNlLW91dCBib3RoO1xyXG59XHJcblxyXG4ubGluZS1jbGFtcC0xIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGluZS1jbGFtcC0yIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGluZS1jbGFtcC0zIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4jc2VhcmNoIHtcclxuICBuei1zZWxlY3Qge1xyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgLmFudC1zZWxlY3Qtc2VsZWN0b3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi1wbGFjZWhvbGRlcixcclxuICAgICAgICAuYW50LXNlbGVjdC1zZWxlY3Rpb24taXRlbSB7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbnQtc2VsZWN0LWFycm93IHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYW50LXNlbGVjdC1vcGVuIC5hbnQtc2VsZWN0LXNlbGVjdG9yIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYW50LWlucHV0LFxyXG4gIC5hbnQtaW5wdXQtbnVtYmVyLWlucHV0LFxyXG4gIG56LWlucHV0LWdyb3VwIGlucHV0IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIDAuNyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuei10YWcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbm56LWJ1dHRvbiB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 4419
/*!****************************************************************************************!*\
  !*** ./src/app/home/sections/about-feature-section/about-feature-section.component.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutFeatureSectionComponent: () => (/* binding */ AboutFeatureSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);



class AboutFeatureSectionComponent {
  static {
    this.ɵfac = function AboutFeatureSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AboutFeatureSectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AboutFeatureSectionComponent,
      selectors: [["app-home-about"]],
      decls: 67,
      vars: 0,
      consts: [["id", "about", 1, "relative", "overflow-hidden", "bg-white", "py-20", "md:py-28"], [1, "mx-auto", "max-w-7xl", "px-4", "md:px-8", "lg:px-12"], [1, "grid", "gap-12", "lg:grid-cols-[0.9fr_1.1fr]", "lg:items-center"], [1, "relative"], [1, "absolute", "-inset-4", "rounded-[2.5rem]", "bg-gradient-to-br", "from-emerald-100", "via-teal-50", "to-sky-100", "opacity-60", "blur-2xl"], [1, "relative", "grid", "gap-4", "rounded-[2.5rem]", "bg-white", "p-5", "shadow-xl", "ring-1", "ring-slate-200/70"], ["src", "https://placehold.co/1000x1000/0ea5e9/ffffff?text=SHOWROOM", "alt", "Showroom", 1, "h-64", "w-full", "rounded-2xl", "object-cover"], [1, "grid", "grid-cols-2", "gap-4"], ["src", "https://placehold.co/1000x1000/7c3aed/ffffff?text=B%E1%BA%A2O+H%C3%80NH", "alt", "B\u1EA3o h\u00E0nh", 1, "h-40", "w-full", "rounded-2xl", "object-cover"], ["src", "https://placehold.co/1000x1000/d97706/ffffff?text=N%C3%94NG+D%C3%82N", "alt", "N\u00F4ng d\u00E2n", 1, "h-40", "w-full", "rounded-2xl", "object-cover"], [1, "flex", "items-center", "gap-3", "rounded-2xl", "border", "border-slate-100", "bg-gradient-to-r", "from-slate-50", "to-white", "px-4", "py-3"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-br", "from-emerald-500", "to-teal-600", "text-white", "shadow-md", "shadow-emerald-200"], [1, "fa", "fa-check", "text-xl"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-400"], [1, "font-bold", "text-slate-800"], [1, "mb-3", "inline-flex", "items-center", "gap-2", "rounded-full", "bg-emerald-50", "px-4", "py-1.5", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-emerald-700"], [1, "fa", "fa-leaf", "mr-1"], [1, "text-3xl", "font-black", "leading-tight", "tracking-tight", "text-slate-900", "md:text-4xl", "lg:text-5xl"], [1, "text-emerald-600"], [1, "mt-6", "text-lg", "leading-8", "text-slate-600"], [1, "text-slate-900"], [1, "mt-4", "text-base", "leading-7", "text-slate-600"], [1, "mt-8", "grid", "gap-4", "sm:grid-cols-2"], [1, "flex", "items-start", "gap-3", "rounded-2xl", "border", "border-slate-100", "bg-slate-50/60", "p-4"], [1, "flex", "h-10", "w-10", "flex-none", "items-center", "justify-center", "rounded-xl", "bg-emerald-100", "text-emerald-600"], [1, "fa", "fa-bolt", "text-lg"], [1, "font-bold", "text-slate-900"], [1, "mt-1", "text-sm", "text-slate-600"], [1, "flex", "h-10", "w-10", "flex-none", "items-center", "justify-center", "rounded-xl", "bg-amber-100", "text-amber-600"], [1, "fa", "fa-tractor", "text-lg"], [1, "flex", "h-10", "w-10", "flex-none", "items-center", "justify-center", "rounded-xl", "bg-sky-100", "text-sky-600"], [1, "fa", "fa-shield", "text-lg"], [1, "flex", "h-10", "w-10", "flex-none", "items-center", "justify-center", "rounded-xl", "bg-rose-100", "text-rose-600"], [1, "fa", "fa-heart", "text-lg"]],
      template: function AboutFeatureSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 8)(9, "img", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10)(11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div")(14, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Ch\u1EA5t l\u01B0\u1EE3ng qu\u1ED1c t\u1EBF ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " S\u1EA3n ph\u1EA9m ch\u00EDnh h\u00E3ng \u00B7 B\u1EA3o h\u00E0nh d\u00E0i h\u1EA1n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Gi\u1EDBi thi\u1EC7u c\u00F4ng ty ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " \u0110\u1ED3ng h\u00E0nh c\u00F9ng b\u1EA1n tr\u00EAn");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "m\u1ECDi n\u1EBBo \u0111\u01B0\u1EDDng v\u00E0 c\u00E1nh \u0111\u1ED3ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " V\u1EDBi h\u01A1n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "strong", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "10 n\u0103m kinh nghi\u1EC7m");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " trong l\u0129nh v\u1EF1c xe \u0111i\u1EC7n v\u00E0 m\u00E1y m\u00F3c n\u00F4ng nghi\u1EC7p, ch\u00FAng t\u00F4i t\u1EF1 h\u00E0o l\u00E0 \u0111\u1ED1i t\u00E1c tin c\u1EADy c\u1EE7a h\u00E0ng ngh\u00ECn h\u1ED9 gia \u0111\u00ECnh, doanh nghi\u1EC7p v\u00E0 h\u1EE3p t\u00E1c x\u00E3 tr\u00EAn to\u00E0n qu\u1ED1c. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " T\u1EEB nh\u1EEFng chuy\u1EBFn \u0111i l\u00E0m h\u1EB1ng ng\u00E0y \u0111\u1EBFn nh\u1EEFng v\u1EE5 m\u00F9a b\u1ED9i thu \u2013 s\u1EA3n ph\u1EA9m c\u1EE7a ch\u00FAng t\u00F4i \u0111\u01B0\u1EE3c l\u1EF1a ch\u1ECDn k\u1EF9 l\u01B0\u1EE1ng t\u1EEB c\u00E1c nh\u00E0 s\u1EA3n xu\u1EA5t h\u00E0ng \u0111\u1EA7u th\u1EBF gi\u1EDBi, ph\u00F9 h\u1EE3p v\u1EDBi \u0111i\u1EC1u ki\u1EC7n kh\u00ED h\u1EADu v\u00E0 nhu c\u1EA7u th\u1EF1c t\u1EBF c\u1EE7a ng\u01B0\u1EDDi Vi\u1EC7t Nam. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 22)(35, "div", 23)(36, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div")(39, "h3", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "C\u00F4ng ngh\u1EC7 xanh");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Ti\u1EBFt ki\u1EC7m n\u0103ng l\u01B0\u1EE3ng, gi\u1EA3m thi\u1EC3u \u00F4 nhi\u1EC5m, b\u1EA3o v\u1EC7 m\u00F4i tr\u01B0\u1EDDng. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 23)(44, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div")(47, "h3", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Hi\u1EC7u su\u1EA5t cao");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " N\u00E2ng cao n\u0103ng su\u1EA5t lao \u0111\u1ED9ng, gi\u1EA3m s\u1EE9c ng\u01B0\u1EDDi trong \u0111\u1ED3ng ru\u1ED9ng. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 23)(52, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div")(55, "h3", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "B\u1EA3o h\u00E0nh ch\u00EDnh h\u00E3ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " \u0110\u1ED9i ng\u0169 k\u1EF9 thu\u1EADt vi\u00EAn chuy\u00EAn nghi\u1EC7p, h\u1ED7 tr\u1EE3 t\u1EADn n\u01A1i. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 23)(60, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div")(63, "h3", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "T\u01B0 v\u1EA5n t\u1EADn t\u00E2m");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " L\u1EAFng nghe nhu c\u1EA7u, \u0111\u1EC1 xu\u1EA5t gi\u1EA3i ph\u00E1p ph\u00F9 h\u1EE3p nh\u1EA5t. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_1__.ImgFallbackDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 4167
/*!************************************************************************************!*\
  !*** ./src/app/home/sections/agriculture-section/agriculture-section.component.ts ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgricultureSectionComponent: () => (/* binding */ AgricultureSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ 8452);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);










function AgricultureSectionComponent_app_product_card_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-product-card", 11);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", p_r1);
  }
}
class AgricultureSectionComponent {
  constructor() {
    this.featuredCount = 4;
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.productList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this.products)) {
        return this.products().filter(p => p.isUsed !== false);
      }
      return (this.products ?? []).filter(p => p.isUsed !== false);
    }, ...(ngDevMode ? [{
      debugName: "productList"
    }] : []));
    this.featuredProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.productList().slice(0, this.featuredCount ?? 4), ...(ngDevMode ? [{
      debugName: "featuredProducts"
    }] : []));
    this.featuredCardItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.featuredProducts().map(p => ({
      kind: 'machine',
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      pictureUrl: p.pictureUrl,
      companyName: p.companyName,
      chip1: p.engineType ?? undefined,
      chip2: p.power ?? undefined,
      chip3: p.capacity ?? undefined
    })), ...(ngDevMode ? [{
      debugName: "featuredCardItems"
    }] : []));
    this.allMachinesQueryParams = {
      type: 'machine'
    };
    this.listingPath = '/products';
  }
  getDetailUrl(id) {
    return ['/product-detail', 'machine', id];
  }
  static {
    this.ɵfac = function AgricultureSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgricultureSectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgricultureSectionComponent,
      selectors: [["app-home-agriculture"]],
      inputs: {
        products: "products",
        featuredCount: "featuredCount"
      },
      outputs: {
        navigate: "navigate"
      },
      decls: 16,
      vars: 3,
      consts: [["id", "agriculture", 1, "relative", "overflow-hidden", "bg-gradient-to-br", "from-amber-50", "via-orange-50", "to-yellow-50", "py-20", "md:py-24"], [1, "absolute", "inset-0", "bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.2),_transparent_50%)]"], [1, "relative", "mx-auto", "max-w-7xl", "px-4", "md:px-8", "lg:px-12"], [1, "mb-12", "flex", "flex-col", "items-start", "justify-between", "gap-6", "md:flex-row", "md:items-end"], [1, "mb-3", "inline-flex", "items-center", "gap-2", "rounded-full", "bg-amber-100", "px-4", "py-1.5", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-amber-800"], [1, "fa", "fa-tractor", "mr-1"], [1, "text-3xl", "font-black", "tracking-tight", "text-slate-900", "md:text-4xl"], [1, "mt-3", "max-w-2xl", "text-slate-700"], ["type", "button", "nz-button", "", "nzType", "default", 1, "!inline-flex", "!items-center", "!justify-center", "!rounded-full", "!border-amber-400", "!text-amber-700", "hover:!bg-amber-50", 3, "routerLink", "queryParams"], [1, "grid", "gap-6", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]],
      template: function AgricultureSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div")(5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Gi\u1EA3i ph\u00E1p n\u00F4ng nghi\u1EC7p ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " M\u00E1y m\u00F3c n\u00F4ng nghi\u1EC7p hi\u1EC7n \u0111\u1EA1i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " M\u00E1y g\u1EB7t, m\u00E1y c\u00E0y, m\u00E1y b\u01A1m, m\u00E1y phun thu\u1ED1c v\u00E0 ph\u1EE5 t\u00F9ng ch\u00EDnh h\u00E3ng \u2013 tr\u1EE3 th\u1EE7 \u0111\u1EAFc l\u1EF1c cho m\u00F9a v\u1EE5 b\u1ED9i thu, gi\u1EA3m s\u1EE9c ng\u01B0\u1EDDi, t\u0103ng n\u0103ng su\u1EA5t. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Xem t\u1EA5t c\u1EA3 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AgricultureSectionComponent_app_product_card_15_Template, 1, 1, "app-product-card", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.listingPath)("queryParams", ctx.allMachinesQueryParams);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.featuredCardItems());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__.ProductCardComponent],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 3583
/*!************************************************************************!*\
  !*** ./src/app/home/sections/bikes-section/bikes-section.component.ts ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BikesSectionComponent: () => (/* binding */ BikesSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ 8452);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);










function BikesSectionComponent_app_product_card_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-product-card", 10);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", p_r1);
  }
}
class BikesSectionComponent {
  constructor() {
    this.featuredCount = 4;
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.productList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isSignal)(this.products)) {
        return this.products().filter(p => p.isUsed !== false);
      }
      return (this.products ?? []).filter(p => p.isUsed !== false);
    }, ...(ngDevMode ? [{
      debugName: "productList"
    }] : []));
    this.featuredProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.productList().slice(0, this.featuredCount ?? 4), ...(ngDevMode ? [{
      debugName: "featuredProducts"
    }] : []));
    this.featuredCardItems = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => this.featuredProducts().map(p => ({
      kind: 'bike',
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      pictureUrl: p.pictureUrl,
      companyName: p.companyName,
      chip1: p.voltage ?? undefined,
      chip2: p.power ?? undefined,
      chip3: p.batteryCapacity ?? undefined
    })), ...(ngDevMode ? [{
      debugName: "featuredCardItems"
    }] : []));
    this.allBikesQueryParams = {
      type: 'bike'
    };
    this.listingPath = '/products';
  }
  getDetailUrl(id) {
    return ['/product-detail', 'bike', id];
  }
  static {
    this.ɵfac = function BikesSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BikesSectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: BikesSectionComponent,
      selectors: [["app-home-bikes"]],
      inputs: {
        products: "products",
        featuredCount: "featuredCount"
      },
      outputs: {
        navigate: "navigate"
      },
      decls: 15,
      vars: 3,
      consts: [["id", "bikes", 1, "bg-white", "py-20", "md:py-24"], [1, "mx-auto", "max-w-7xl", "px-4", "md:px-8", "lg:px-12"], [1, "mb-12", "flex", "flex-col", "items-start", "justify-between", "gap-6", "md:flex-row", "md:items-end"], [1, "mb-3", "inline-flex", "items-center", "gap-2", "rounded-full", "bg-sky-50", "px-4", "py-1.5", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-sky-700"], [1, "fa", "fa-bicycle", "mr-1"], [1, "text-3xl", "font-black", "tracking-tight", "text-slate-900", "md:text-4xl"], [1, "mt-3", "max-w-2xl", "text-slate-600"], ["type", "button", "nz-button", "", "nzType", "default", 1, "!inline-flex", "!items-center", "!justify-center", "!rounded-full", "!border-sky-300", "!text-sky-700", "hover:!bg-sky-50", 3, "routerLink", "queryParams"], [1, "grid", "gap-6", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]],
      template: function BikesSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " B\u1ED9 s\u01B0u t\u1EADp xe \u0111i\u1EC7n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " S\u1EA3n ph\u1EA9m xe \u0111i\u1EC7n n\u1ED5i b\u1EADt ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " T\u1EEB xe m\u00E1y \u0111i\u1EC7n cao c\u1EA5p, xe \u0111\u1EA1p \u0111i\u1EC7n th\u00E0nh ph\u1ED1 \u0111\u1EBFn xe t\u1EA3i \u0111i\u1EC7n giao h\u00E0ng v\u00E0 ph\u1EE5 t\u00F9ng ch\u00EDnh h\u00E3ng \u2013 l\u1EF1a ch\u1ECDn l\u00FD t\u01B0\u1EDFng cho m\u1ECDi nhu c\u1EA7u. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Xem t\u1EA5t c\u1EA3 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, BikesSectionComponent_app_product_card_14_Template, 1, 1, "app-product-card", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.listingPath)("queryParams", ctx.allBikesQueryParams);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.featuredCardItems());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_6__.ProductCardComponent],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 5831
/*!****************************************************************************************!*\
  !*** ./src/app/home/sections/company-story-section/company-story-section.component.ts ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyStorySectionComponent: () => (/* binding */ CompanyStorySectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2481);



function CompanyStorySectionComponent_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](stat_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", stat_r1.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", stat_r1.label, " ");
  }
}
function CompanyStorySectionComponent_ng_container_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const v_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition group-hover:opacity-20 " + v_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg " + v_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](v_r2.icon + " text-lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", v_r2.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", v_r2.description, " ");
  }
}
function CompanyStorySectionComponent_ng_container_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 38)(11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const mile_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" N\u0103m ", mile_r3.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mile_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mile_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](mile_r3.icon + " text-sm");
  }
}
function CompanyStorySectionComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3)(3, "div", 4)(4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CompanyStorySectionComponent_ng_container_1_div_12_Template, 7, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " 4 Gi\u00E1 tr\u1ECB c\u1ED1t l\u00F5i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Nh\u1EEFng \u0111i\u1EC1u ch\u00FAng t\u00F4i tin t\u01B0\u1EDFng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CompanyStorySectionComponent_ng_container_1_div_21_Template, 8, 8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18)(23, "div", 19)(24, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " H\u00E0nh tr\u00ECnh ph\u00E1t tri\u1EC3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " C\u1ED9t m\u1ED1c \u0111\u00E1ng nh\u1EDB trong 15 n\u0103m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CompanyStorySectionComponent_ng_container_1_div_30_Template, 13, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.story.subheading, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.story.heading, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.story.introParagraph, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.story.stats);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.story.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.story.milestones);
  }
}
class CompanyStorySectionComponent {
  constructor() {
    this.story = null;
  }
  static {
    this.ɵfac = function CompanyStorySectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompanyStorySectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CompanyStorySectionComponent,
      selectors: [["app-home-company-story"]],
      inputs: {
        story: "story"
      },
      decls: 2,
      vars: 1,
      consts: [["id", "intro-company", 1, "relative", "overflow-hidden", "bg-gradient-to-b", "from-white", "via-slate-50/60", "to-white", "py-20", "md:py-28"], [4, "ngIf"], [1, "absolute", "inset-0", "bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.08),_transparent_50%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_50%)]"], [1, "relative", "mx-auto", "max-w-7xl", "px-4", "md:px-8", "lg:px-12"], [1, "mb-14", "text-center"], [1, "mb-4", "inline-flex", "items-center", "gap-2", "rounded-full", "bg-emerald-50", "px-5", "py-2", "text-xs", "font-bold", "uppercase", "tracking-[0.2em]", "text-emerald-700", "ring-1", "ring-emerald-100"], [1, "fa", "fa-building-o", "mr-1"], [1, "mx-auto", "max-w-4xl", "text-3xl", "font-black", "tracking-tight", "text-slate-900", "md:text-5xl"], [1, "mx-auto", "mt-6", "max-w-3xl", "text-base", "leading-relaxed", "text-slate-600", "md:text-lg"], [1, "mb-16", "grid", "gap-6", "rounded-[2rem]", "bg-white", "p-6", "shadow-xl", "ring-1", "ring-slate-100", "md:grid-cols-2", "lg:grid-cols-4", "md:p-10"], ["class", "group flex flex-col items-center justify-center gap-2 rounded-2xl p-5 text-center transition hover:-translate-y-1 hover:bg-slate-50", 4, "ngFor", "ngForOf"], [1, "grid", "gap-10", "lg:grid-cols-[1.05fr_0.95fr]", "lg:items-start"], [1, "space-y-4"], [1, "mb-2", "inline-flex", "items-center", "gap-2", "rounded-full", "bg-sky-50", "px-4", "py-1.5", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-sky-700", "ring-1", "ring-sky-100"], [1, "fa", "fa-diamond", "mr-1"], [1, "text-2xl", "font-black", "tracking-tight", "text-slate-900", "md:text-3xl"], [1, "grid", "gap-4", "pt-2", "sm:grid-cols-2", "xl:grid-cols-2"], ["class", "group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl", 4, "ngFor", "ngForOf"], [1, "relative"], [1, "mb-10", "lg:text-left"], [1, "mb-3", "inline-flex", "items-center", "gap-2", "rounded-full", "bg-amber-50", "px-4", "py-1.5", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-amber-700", "ring-1", "ring-amber-100"], [1, "fa", "fa-road", "mr-1"], [1, "relative", "before:absolute", "before:left-6", "before:top-2", "before:h-[calc(100%-1rem)]", "before:w-0.5", "before:bg-gradient-to-b", "before:from-emerald-200", "before:via-sky-200", "before:to-amber-200"], ["class", "relative mb-10 last:mb-0", 4, "ngFor", "ngForOf"], [1, "group", "flex", "flex-col", "items-center", "justify-center", "gap-2", "rounded-2xl", "p-5", "text-center", "transition", "hover:-translate-y-1", "hover:bg-slate-50"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-br", "from-emerald-500", "via-teal-500", "to-sky-500", "text-xl", "text-white", "shadow-lg", "shadow-emerald-500/20", "group-hover:scale-110", "transition"], [1, "mt-2", "text-4xl", "font-black", "bg-gradient-to-r", "from-emerald-600", "via-teal-600", "to-sky-600", "bg-clip-text", "text-transparent"], [1, "text-sm", "font-semibold", "leading-snug", "text-slate-600"], [1, "group", "relative", "overflow-hidden", "rounded-2xl", "border", "border-slate-100", "bg-white", "p-5", "shadow-sm", "transition", "hover:-translate-y-1", "hover:shadow-xl"], [1, "relative", "mt-4", "text-lg", "font-black", "text-slate-900"], [1, "relative", "mt-2", "text-sm", "leading-relaxed", "text-slate-600"], [1, "relative", "mb-10", "last:mb-0"], [1, "relative", "pl-20"], [1, "rounded-2xl", "border", "border-slate-100", "bg-white", "p-5", "shadow-sm", "transition", "hover:shadow-xl"], [1, "inline-flex", "items-center", "gap-2", "rounded-full", "bg-slate-50", "px-3", "py-1", "text-[11px]", "font-bold", "uppercase", "tracking-widest", "text-slate-600", "ring-1", "ring-slate-200"], [1, "fa", "fa-calendar-o", "mr-1"], [1, "mt-3", "text-lg", "font-black", "leading-snug", "text-slate-900"], [1, "mt-2", "text-sm", "leading-relaxed", "text-slate-600"], [1, "absolute", "left-0", "top-2", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-full", "bg-white", "ring-4", "ring-slate-100", "shadow-lg"], [1, "flex", "h-9", "w-9", "items-center", "justify-center", "rounded-full", "bg-gradient-to-br", "from-emerald-500", "via-teal-500", "to-sky-500", "text-white", "shadow-inner"]],
      template: function CompanyStorySectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CompanyStorySectionComponent_ng_container_1_Template, 31, 6, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.story);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 6119
/*!********************************************************************!*\
  !*** ./src/app/home/sections/cta-section/cta-section.component.ts ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CtaSectionComponent: () => (/* binding */ CtaSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);






class CtaSectionComponent {
  static {
    this.ɵfac = function CtaSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CtaSectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CtaSectionComponent,
      selectors: [["app-home-cta"]],
      decls: 49,
      vars: 0,
      consts: [["id", "cta", 1, "relative", "overflow-hidden", "bg-white", "py-20", "md:py-24"], [1, "mx-auto", "max-w-6xl", "px-4", "md:px-8", "lg:px-12"], [1, "relative", "overflow-hidden", "rounded-[2.5rem]", "bg-gradient-to-br", "from-emerald-600", "via-teal-600", "to-sky-700", "p-8", "shadow-2xl", "shadow-emerald-500/20", "md:p-12"], [1, "absolute", "-top-24", "-right-24", "h-80", "w-80", "rounded-full", "bg-white/10", "blur-3xl"], [1, "absolute", "-bottom-24", "-left-24", "h-80", "w-80", "rounded-full", "bg-lime-300/20", "blur-3xl"], [1, "relative", "grid", "gap-10", "md:grid-cols-[1.1fr_0.9fr]", "md:items-center"], [1, "text-3xl", "font-black", "leading-tight", "tracking-tight", "text-white", "md:text-4xl", "lg:text-5xl"], [1, "text-lime-300"], [1, "mt-6", "max-w-xl", "text-lg", "leading-8", "text-emerald-100"], [1, "mt-8", "flex", "flex-wrap", "gap-4"], ["type", "button", "onclick", "window.location.href='tel:19001234'", "nz-button", "", "nzType", "primary", 1, "!inline-flex", "!items-center", "!justify-center", "!h-12", "!rounded-full", "!bg-white", "!px-8", "!text-base", "!font-bold", "!text-emerald-700", "!shadow-lg", "hover:!scale-[1.02]", "hover:!bg-lime-50"], [1, "fa", "fa-phone", "mr-2", "text-emerald-600"], ["type", "button", "onclick", "window.location.href='mailto:hello@example.vn'", "nz-button", "", "nzType", "default", 1, "!inline-flex", "!items-center", "!justify-center", "!h-12", "!rounded-full", "!border", "!border-white/30", "!bg-white/10", "!px-8", "!text-sm", "!font-semibold", "!text-white", "backdrop-blur", "transition", "hover:!bg-white/20"], [1, "fa", "fa-envelope", "mr-2", "text-lime-300"], [1, "space-y-4"], [1, "rounded-2xl", "border", "border-white/15", "bg-white/10", "p-5", "backdrop-blur"], [1, "flex", "items-center", "gap-3"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl", "bg-white", "text-emerald-600", "shadow-md"], [1, "fa", "fa-clock-o", "text-xl"], [1, "text-xs", "font-bold", "uppercase", "tracking-widest", "text-emerald-200"], [1, "text-lg", "font-bold", "text-white"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl", "bg-lime-300", "text-emerald-950", "shadow-md"], [1, "fa", "fa-map-marker", "text-xl"], [1, "text-base", "font-bold", "text-white"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl", "bg-sky-300", "text-sky-950", "shadow-md"], [1, "fa", "fa-headphones", "text-xl"]],
      template: function CtaSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div")(7, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " C\u1EA7n t\u01B0 v\u1EA5n l\u1EF1a ch\u1ECDn?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u0110\u1ED9i ng\u0169 chuy\u00EAn gia c\u1EE7a ch\u00FAng t\u00F4i lu\u00F4n s\u1EB5n s\u00E0ng ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " T\u1EEB vi\u1EC7c ch\u1ECDn m\u1EABu xe \u0111i\u1EC7n ph\u00F9 h\u1EE3p gia \u0111\u00ECnh \u0111\u1EBFn gi\u1EA3i ph\u00E1p m\u00E1y m\u00F3c cho di\u1EC7n t\u00EDch ru\u1ED9ng r\u1ED9ng \u2013 h\u00E3y li\u00EAn h\u1EC7 \u0111\u1EC3 \u0111\u01B0\u1EE3c t\u01B0 v\u1EA5n mi\u1EC5n ph\u00ED, b\u00E1o gi\u00E1 chi ti\u1EBFt v\u00E0 \u01B0u \u0111\u00E3i t\u1ED1t nh\u1EA5t. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Hotline mi\u1EC5n ph\u00ED ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " G\u1EEDi email cho ch\u00FAng t\u00F4i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div")(27, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Gi\u1EDD l\u00E0m vi\u1EC7c ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Th\u1EE9 2 \u2013 Ch\u1EE7 Nh\u1EADt \u00B7 7h \u2013 21h ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 15)(32, "div", 16)(33, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div")(36, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " V\u0103n ph\u00F2ng ch\u00EDnh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " 123 \u0110\u01B0\u1EDDng D\u1ECBch V\u1ECDng H\u1EADu, C\u1EA7u Gi\u1EA5y, H\u00E0 N\u1ED9i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 15)(41, "div", 16)(42, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div")(45, "p", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " H\u1ED7 tr\u1EE3 24/7 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Zalo / Facebook Messenger: @greenmobility ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 2061
/*!**********************************************************************!*\
  !*** ./src/app/home/sections/hero-section/hero-section.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroSectionComponent: () => (/* binding */ HeroSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);









class HeroSectionComponent {
  constructor() {
    this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.listingPath = '/products';
    this.allProductsQueryParams = {
      type: 'all'
    };
  }
  static {
    this.ɵfac = function HeroSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeroSectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroSectionComponent,
      selectors: [["app-home-hero"]],
      outputs: {
        navigate: "navigate"
      },
      decls: 58,
      vars: 2,
      consts: [["id", "hero", 1, "relative", "overflow-hidden", "bg-gradient-to-br", "from-emerald-900", "via-teal-800", "to-sky-900", "text-white"], [1, "absolute", "inset-0", "bg-[url('data:image/svg+xml;utf8,<svg", "xmlns=%22http://www.w3.org/2000/svg%22", "width=%2260%22", "height=%2260%22", "viewBox=%220", "0", "60", "60%22><g", "fill=%22none%22", "fill-rule=%22evenodd%22><g", "fill=%22%23ffffff%22", "fill-opacity=%220.04%22><path", "d=%22M36", "34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6", "34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6", "4V0H4v4H0v2h4v4h2V6h4V4H6z%22/></g></g></svg>')]", "opacity-60"], [1, "absolute", "-top-24", "-right-24", "h-96", "w-96", "rounded-full", "bg-emerald-400/20", "blur-3xl"], [1, "absolute", "-bottom-32", "-left-32", "h-[28rem]", "w-[28rem]", "rounded-full", "bg-sky-400/20", "blur-3xl"], [1, "relative", "mx-auto", "grid", "max-w-7xl", "gap-12", "px-4", "py-24", "md:grid-cols-2", "md:items-center", "md:px-8", "lg:px-12", "lg:py-32"], [1, "mb-6", "inline-flex", "items-center", "gap-2", "rounded-full", "border", "border-white/20", "bg-white/10", "px-4", "py-1.5", "text-xs", "font-semibold", "uppercase", "tracking-widest", "text-emerald-200", "backdrop-blur"], [1, "h-2", "w-2", "rounded-full", "bg-emerald-300"], [1, "text-4xl", "font-black", "leading-[1.05]", "tracking-tight", "md:text-5xl", "lg:text-6xl"], [1, "bg-gradient-to-r", "from-lime-300", "via-emerald-300", "to-sky-300", "bg-clip-text", "text-transparent"], [1, "mt-6", "max-w-xl", "text-lg", "leading-8", "text-slate-200"], [1, "mt-10", "flex", "flex-wrap", "gap-4"], ["type", "button", "nz-button", "", "nzType", "primary", 1, "!inline-flex", "!items-center", "!justify-center", "!h-12", "!rounded-full", "!bg-gradient-to-r", "!from-emerald-400", "!to-teal-500", "!px-8", "!text-base", "!font-bold", "!text-emerald-950", "!shadow-lg", "!shadow-emerald-500/30", "hover:!scale-[1.02]", "hover:!shadow-emerald-400/50", 3, "routerLink", "queryParams"], [1, "fa", "fa-search", "mr-2"], ["nz-button", "", 1, "!h-12", "!rounded-full", "!border", "!border-white/30", "!bg-white/10", "!px-8", "!text-base", "!font-semibold", "!text-white", "backdrop-blur", "transition", "hover:!bg-white/20", 3, "click"], [1, "fa", "fa-info-circle", "mr-2"], [1, "mt-12", "grid", "grid-cols-3", "gap-6", "border-t", "border-white/10", "pt-8"], [1, "text-3xl", "font-black", "text-white", "md:text-4xl"], [1, "mt-1", "text-sm", "text-slate-300"], [1, "relative"], [1, "grid", "gap-4", "sm:grid-cols-2"], [1, "relative", "overflow-hidden", "rounded-3xl", "shadow-2xl", "ring-1", "ring-white/10"], ["src", "https://placehold.co/800x600/10b981/ffffff?text=XE+\u0110I\u1EC6N", "alt", "Xe m\u00E1y \u0111i\u1EC7n hi\u1EC7n \u0111\u1EA1i", 1, "h-64", "w-full", "object-cover", "transition", "duration-700", "hover:scale-110", "sm:h-80"], [1, "absolute", "left-4", "top-4", "rounded-full", "bg-white/90", "px-3", "py-1", "text-xs", "font-bold", "text-emerald-700", "shadow-lg", "backdrop-blur"], [1, "fa", "fa-bolt", "mr-1", "text-emerald-500"], [1, "relative", "translate-y-8", "overflow-hidden", "rounded-3xl", "shadow-2xl", "ring-1", "ring-white/10", "sm:translate-y-12"], ["src", "https://placehold.co/800x600/f59e0b/ffffff?text=M%C3%81Y+G%E1%BA%BET", "alt", "M\u00E1y g\u1EB7t tr\u00EAn \u0111\u1ED3ng ru\u1ED9ng", 1, "h-64", "w-full", "object-cover", "transition", "duration-700", "hover:scale-110", "sm:h-80"], [1, "absolute", "left-4", "top-4", "rounded-full", "bg-amber-400/95", "px-3", "py-1", "text-xs", "font-bold", "text-amber-950", "shadow-lg", "backdrop-blur"], [1, "fa", "fa-leaf", "mr-1"], [1, "col-span-2", "relative", "overflow-hidden", "rounded-3xl", "shadow-2xl", "ring-1", "ring-white/10"], ["src", "https://placehold.co/1600x900/0f766e/ffffff?text=B%E1%BB%80N+V%E1%BB%AENG+XANH+%7C+N%C3%94NG+NGHI%E1%BB%86P+4.0", "alt", "Banner b\u1EC1n v\u1EEFng", 1, "h-52", "w-full", "object-cover", "transition", "duration-700", "hover:scale-105"], [1, "absolute", "inset-0", "flex", "items-end", "p-6", "bg-gradient-to-t", "from-black/60", "via-black/20", "to-transparent"], [1, "text-lg", "font-bold", "text-white", "drop-shadow"]],
      template: function HeroSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "div")(6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " H\u1EC7 sinh th\u00E1i xanh \u00B7 V\u00EC t\u01B0\u01A1ng lai b\u1EC1n v\u1EEFng ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Xe \u0111i\u1EC7n th\u00F4ng minh &");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " M\u00E1y m\u00F3c n\u00F4ng nghi\u1EC7p ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ch\u1EA5t l\u01B0\u1EE3ng h\u00E0ng \u0111\u1EA7u ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ch\u00FAng t\u00F4i mang \u0111\u1EBFn b\u1ED9 s\u01B0u t\u1EADp \u0111a d\u1EA1ng t\u1EEB xe m\u00E1y \u0111i\u1EC7n, xe \u0111\u1EA1p \u0111i\u1EC7n, xe t\u1EA3i \u0111i\u1EC7n \u0111\u1EBFn m\u00E1y g\u1EB7t, m\u00E1y c\u00E0y, m\u00E1y b\u01A1m v\u00E0 ph\u1EE5 t\u00F9ng ch\u00EDnh h\u00E3ng \u2013 \u0111\u1EA3m b\u1EA3o ch\u1EA5t l\u01B0\u1EE3ng, gi\u00E1 t\u1ED1t v\u00E0 h\u1EADu m\u00E3i t\u1EADn t\u00E2m. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Tra c\u1EE9u s\u1EA3n ph\u1EA9m ngay ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroSectionComponent_Template_button_click_22_listener() {
            return ctx.navigate.emit("about");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " V\u1EC1 ch\u00FAng t\u00F4i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div")(27, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "S\u1EA3n ph\u1EA9m \u0111\u00E3 giao");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div")(32, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "50+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Nh\u00E0 s\u1EA3n xu\u1EA5t uy t\u00EDn");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div")(37, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "24/7");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "H\u1ED7 tr\u1EE3 kh\u00E1ch h\u00E0ng");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18)(42, "div", 19)(43, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Xe \u0111i\u1EC7n m\u1EDBi ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " N\u00F4ng nghi\u1EC7p 4.0 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30)(56, "p", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " \uD83D\uDEB2 + \uD83C\uDF3E = Gi\u1EA3i ph\u00E1p to\u00E0n di\u1EC7n cho m\u1ECDi nhu c\u1EA7u ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.listingPath)("queryParams", ctx.allProductsQueryParams);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_3__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_4__.ImgFallbackDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 7987
/*!******************************************************************************!*\
  !*** ./src/app/home/sections/partners-section/partners-section.component.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartnersSectionComponent: () => (/* binding */ PartnersSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2481);





function PartnersSectionComponent_div_10_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 24);
  }
  if (rf & 2) {
    const company_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", company_r1.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", company_r1.name);
  }
}
function PartnersSectionComponent_div_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function PartnersSectionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PartnersSectionComponent_div_10_img_2_Template, 1, 2, "img", 10)(3, PartnersSectionComponent_div_10_div_3_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12)(5, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 15)(10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const company_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", company_r1.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !company_r1.logoUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", company_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", company_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](company_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](company_r1.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](company_r1.email);
  }
}
class PartnersSectionComponent {
  constructor() {
    this.companies = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.input)([], ...(ngDevMode ? [{
      debugName: "companies"
    }] : []));
    this.companiesList = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)(() => {
      const value = this.companies();
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isSignal)(value)) {
        return value();
      }
      return value;
    }, ...(ngDevMode ? [{
      debugName: "companiesList"
    }] : []));
  }
  static {
    this.ɵfac = function PartnersSectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PartnersSectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: PartnersSectionComponent,
      selectors: [["app-home-partners"]],
      inputs: {
        companies: [1, "companies"]
      },
      decls: 11,
      vars: 1,
      consts: [["id", "partners", 1, "bg-slate-50/70", "py-16", "md:py-20"], [1, "mx-auto", "max-w-7xl", "px-4", "md:px-8", "lg:px-12"], [1, "mb-12", "text-center"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-[0.3em]", "text-sky-600"], [1, "text-3xl", "font-black", "text-slate-900", "md:text-4xl"], [1, "mx-auto", "mt-4", "max-w-2xl", "text-slate-600"], [1, "grid", "gap-6", "md:grid-cols-2", "lg:grid-cols-3"], ["class", "group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10 hover:ring-2 hover:ring-emerald-500/20", 4, "ngFor", "ngForOf"], [1, "group", "overflow-hidden", "rounded-3xl", "border", "border-slate-200/80", "bg-white", "shadow-sm", "transition-all", "duration-300", "hover:-translate-y-1", "hover:shadow-2xl", "hover:shadow-emerald-500/10", "hover:ring-2", "hover:ring-emerald-500/20"], [1, "flex", "h-48", "items-center", "justify-center", "bg-gradient-to-br", "from-slate-50", "to-slate-100", "p-8", "transition", "group-hover:from-emerald-50", "group-hover:to-teal-50"], ["class", "h-28 w-28 rounded-2xl object-cover shadow-md ring-1 ring-slate-200 transition duration-500 group-hover:scale-110", 3, "src", "alt", 4, "ngIf"], ["class", "flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white shadow-lg", 4, "ngIf"], [1, "space-y-3", "p-6"], [1, "text-xl", "font-bold", "text-slate-900", "transition", "group-hover:text-emerald-600"], [1, "line-clamp-2", "min-h-[48px]", "text-sm", "leading-relaxed", "text-slate-600"], [1, "space-y-2", "border-t", "border-slate-100", "pt-4", "text-sm", "text-slate-600"], [1, "flex", "items-start", "gap-2.5"], [1, "fa", "fa-map-marker", "mt-0.5", "w-5", "flex-none", "text-emerald-600"], [1, "line-clamp-1"], [1, "flex", "items-center", "gap-2.5"], [1, "fa", "fa-phone", "w-5", "flex-none", "text-emerald-600"], [1, "font-mono", "text-slate-700"], [1, "fa", "fa-envelope", "w-5", "flex-none", "text-emerald-600"], [1, "truncate"], [1, "h-28", "w-28", "rounded-2xl", "object-cover", "shadow-md", "ring-1", "ring-slate-200", "transition", "duration-500", "group-hover:scale-110", 3, "src", "alt"], [1, "flex", "h-28", "w-28", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-br", "from-sky-500", "to-indigo-600", "text-white", "shadow-lg"], [1, "fa", "fa-building", "text-5xl", "opacity-80"]],
      template: function PartnersSectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u0110\u1ED1i t\u00E1c chi\u1EBFn l\u01B0\u1EE3c ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " C\u00E1c th\u01B0\u01A1ng hi\u1EC7u & c\u00F4ng ty uy t\u00EDn ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Ch\u00FAng t\u00F4i h\u1EE3p t\u00E1c v\u1EDBi c\u00E1c nh\u00E0 s\u1EA3n xu\u1EA5t h\u00E0ng \u0111\u1EA7u trong v\u00E0 ngo\u00E0i n\u01B0\u1EDBc \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o m\u1ED7i s\u1EA3n ph\u1EA9m \u0111\u1EBFn tay kh\u00E1ch h\u00E0ng \u0111\u1EC1u \u0111\u1EA1t ch\u1EA5t l\u01B0\u1EE3ng t\u1ED1t nh\u1EA5t. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PartnersSectionComponent_div_10_Template, 22, 7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.companiesList());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_4__.ImgFallbackDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 3713
/*!******************************************************************************!*\
  !*** ./src/app/home/sections/warranty-section/warranty-section.component.ts ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarrantySectionComponent: () => (/* binding */ WarrantySectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 7084);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/select */ 4328);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);














class WarrantySectionComponent {
  constructor() {
    this.serialChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.phoneChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.lookup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.lookupKindChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.lookupProductIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.lookupProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.browseAll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.listingPath = '/products';
    this.allProductsQueryParams = {
      type: 'all'
    };
    this.bikesQueryParams = {
      type: 'bike'
    };
    this.machinesQueryParams = {
      type: 'machine'
    };
  }
  static {
    this.ɵfac = function WarrantySectionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WarrantySectionComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WarrantySectionComponent,
      selectors: [["app-home-warranty"]],
      inputs: {
        serial: "serial",
        phone: "phone",
        result: "result",
        submitted: "submitted",
        lookupKind: "lookupKind",
        lookupProductId: "lookupProductId"
      },
      outputs: {
        serialChange: "serialChange",
        phoneChange: "phoneChange",
        lookup: "lookup",
        reset: "reset",
        lookupKindChange: "lookupKindChange",
        lookupProductIdChange: "lookupProductIdChange",
        lookupProduct: "lookupProduct",
        browseAll: "browseAll"
      },
      decls: 84,
      vars: 10,
      consts: [["id", "warranty", 1, "relative", "overflow-hidden", "bg-gradient-to-br", "from-slate-50", "via-white", "to-indigo-50/50", "py-20", "md:py-24"], [1, "mx-auto", "max-w-7xl", "px-4", "md:px-8", "lg:px-12"], [1, "mb-10", "text-center"], [1, "mb-3", "inline-flex", "items-center", "gap-2", "rounded-full", "bg-indigo-50", "px-4", "py-1.5", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-indigo-700", "ring-1", "ring-indigo-100"], [1, "fa", "fa-shield", "mr-1"], [1, "text-3xl", "font-black", "tracking-tight", "text-slate-900", "md:text-4xl", "lg:text-5xl"], [1, "mx-auto", "mt-4", "max-w-2xl", "text-slate-600"], [1, "mx-auto", "max-w-5xl", "rounded-[2rem]", "border", "border-slate-200/70", "bg-white", "p-6", "shadow-xl", "shadow-indigo-500/5", "md:p-10"], [1, "grid", "gap-8", "lg:grid-cols-2"], [1, "rounded-2xl", "border", "border-indigo-100/70", "bg-indigo-50/30", "p-5", "md:p-6"], [1, "mb-4", "flex", "items-center", "gap-3"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-indigo-600", "text-white", "shadow-md", "shadow-indigo-500/20"], [1, "fa", "fa-search"], [1, "text-base", "font-black", "text-slate-900", "md:text-lg"], [1, "text-xs", "text-slate-500", "md:text-sm"], [1, "space-y-4"], [1, "mb-2", "block", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-500"], [1, "font-normal", "text-slate-400"], ["nzSize", "large"], ["nz-input", "", "type", "text", "placeholder", "VD: VF-E200-882134", 1, "!border-slate-200", "!text-slate-800", 3, "ngModelChange", "ngModel"], ["nz-input", "", "type", "tel", "placeholder", "VD: 0901123456", 1, "!border-slate-200", "!text-slate-800", 3, "ngModelChange", "ngModel"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 1, "!h-11", "!w-full", "!rounded-full", "!bg-gradient-to-r", "!from-indigo-600", "!to-violet-600", "!text-sm", "!font-bold", "!shadow-lg", "!shadow-indigo-500/20", "hover:!scale-[1.02]", 3, "click"], [1, "fa", "fa-search", "mr-1"], [1, "rounded-2xl", "border", "border-sky-100/70", "bg-sky-50/30", "p-5", "md:p-6"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "bg-sky-600", "text-white", "shadow-md", "shadow-sky-500/20"], [1, "fa", "fa-cube"], ["nzSize", "large", "nzPlaceHolder", "Ch\u1ECDn lo\u1EA1i s\u1EA3n ph\u1EA9m", 1, "!w-full", 3, "ngModelChange", "ngModel"], ["nzValue", "bike", "nzLabel", "\u26A1 Xe \u0111i\u1EC7n"], ["nzValue", "machine", "nzLabel", "\uD83D\uDE9C M\u00E1y n\u00F4ng nghi\u1EC7p"], ["nz-input", "", "type", "number", "placeholder", "VD: 101, 201...", 1, "!border-slate-200", "!text-slate-800", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-2"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 1, "!h-11", "!rounded-full", "!bg-gradient-to-r", "!from-sky-600", "!to-blue-600", "!text-xs", "!font-bold", "!shadow-lg", "!shadow-sky-500/20", "hover:!scale-[1.02]", "md:!text-sm", 3, "click"], [1, "fa", "fa-external-link", "mr-1"], ["type", "button", "nz-button", "", "nzType", "default", "nzSize", "large", 1, "!inline-flex", "!items-center", "!justify-center", "!h-11", "!rounded-full", "!border-sky-300", "!text-xs", "!font-bold", "!text-sky-700", "hover:!bg-sky-50", "md:!text-sm", 3, "routerLink", "queryParams"], [1, "fa", "fa-th-large", "mr-1"], [1, "mt-6", "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "text-sm", "text-slate-500"], [1, "fa", "fa-lightbulb-o", "mr-2", "text-amber-500"], [1, "rounded", "bg-slate-100", "px-2", "py-0.5", "font-mono", "text-xs", "text-indigo-700"], [1, "flex", "gap-2"], ["type", "button", "nz-button", "", "nzSize", "small", 1, "!inline-flex", "!items-center", "!justify-center", "!rounded-full", "!border-sky-200", "!text-xs", "!text-sky-700", "hover:!bg-sky-50", 3, "routerLink", "queryParams"], [1, "fa", "fa-bicycle", "mr-1"], ["type", "button", "nz-button", "", "nzSize", "small", 1, "!inline-flex", "!items-center", "!justify-center", "!rounded-full", "!border-amber-300", "!text-xs", "!text-amber-700", "hover:!bg-amber-50", 3, "routerLink", "queryParams"], [1, "fa", "fa-tractor", "mr-1"]],
      template: function WarrantySectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " D\u1ECBch v\u1EE5 h\u1EADu m\u00E3i ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Tra c\u1EE9u th\u00F4ng tin b\u1EA3o h\u00E0nh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Nh\u1EADp S\u1ED1 Serial s\u1EA3n ph\u1EA9m (in tr\u00EAn tem b\u1EA3o h\u00E0nh / khung xe) ho\u1EB7c S\u1ED1 \u0111i\u1EC7n tho\u1EA1i \u0111\u00E3 mua h\u00E0ng \u0111\u1EC3 ki\u1EC3m tra tr\u1EA1ng th\u00E1i b\u1EA3o h\u00E0nh, trung t\u00E2m s\u1EEDa ch\u1EEFa v\u00E0 c\u00E1c l\u1EE3i \u00EDch c\u1EE7a b\u1EA1n. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div")(17, "h3", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tra c\u1EE9u b\u1EA3o h\u00E0nh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Ki\u1EC3m tra b\u1EA3o h\u00E0nh b\u1EB1ng Serial ho\u1EB7c S\u0110T ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15)(22, "div")(23, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Serial s\u1ED1 s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "(in tr\u00EAn tem m\u00E1y)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-input-group", 18)(28, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WarrantySectionComponent_Template_input_ngModelChange_28_listener($event) {
            return ctx.serialChange.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div")(30, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Ho\u1EB7c S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\u00E1ch h\u00E0ng ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-input-group", 18)(33, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WarrantySectionComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.phoneChange.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarrantySectionComponent_Template_button_click_34_listener() {
            return ctx.lookup.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Tra c\u1EE9u b\u1EA3o h\u00E0nh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23)(38, "div", 10)(39, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div")(42, "h3", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Tra c\u1EE9u s\u1EA3n ph\u1EA9m nhanh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Ch\u1ECDn lo\u1EA1i v\u00E0 nh\u1EADp m\u00E3 s\u1EA3n ph\u1EA9m \u0111\u1EC3 xem chi ti\u1EBFt ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15)(47, "div")(48, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Lo\u1EA1i s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "nz-select", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WarrantySectionComponent_Template_nz_select_ngModelChange_50_listener($event) {
            return ctx.lookupKindChange.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "nz-option", 27)(52, "nz-option", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div")(54, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " M\u00E3 / ID s\u1EA3n ph\u1EA9m ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-input-group", 18)(57, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WarrantySectionComponent_Template_input_ngModelChange_57_listener($event) {
            return ctx.lookupProductIdChange.emit($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30)(59, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarrantySectionComponent_Template_button_click_59_listener() {
            return ctx.lookupProduct.emit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Xem chi ti\u1EBFt ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Danh m\u1EE5c ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35)(66, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " M\u1EABu th\u1EED: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "code", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "VF-E200-882134");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \u00B7 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "code", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "0901123456");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \u00B7 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "code", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "KBT-DC105-050127");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39)(78, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Xem xe \u0111i\u1EC7n ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Xem m\u00E1y n\u00F4ng nghi\u1EC7p ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.serial);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lookupKind);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.lookupProductId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.listingPath)("queryParams", ctx.allProductsQueryParams);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.listingPath)("queryParams", ctx.bikesQueryParams);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.listingPath)("queryParams", ctx.machinesQueryParams);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__.NzWaveDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputModule, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputGroupComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzSelectModule, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzOptionComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_6__.NzSelectComponent],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 1696
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailComponent: () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/tag */ 4376);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 904);
/* harmony import */ var ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/badge */ 5677);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 3740);
/* harmony import */ var _services_electric_bike_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/electric-bike.service */ 2501);
/* harmony import */ var _services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/agricultural-machine.service */ 3473);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/components/header/header.component */ 9381);
/* harmony import */ var _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);




















const _c0 = a0 => ({
  type: a0
});
function ProductDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "Kh\u00F4ng t\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " S\u1EA3n ph\u1EA9m b\u1EA1n \u0111ang xem kh\u00F4ng t\u1ED3n t\u1EA1i, \u0111\u00E3 b\u1ECB x\u00F3a ho\u1EB7c \u0111\u01B0\u1EDDng d\u1EABn kh\u00F4ng \u0111\u00FAng. Vui l\u00F2ng quay l\u1EA1i trang ch\u1EE7 \u0111\u1EC3 ch\u1ECDn s\u1EA3n ph\u1EA9m kh\u00E1c. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Quay v\u1EC1 trang ch\u1EE7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ProductDetailComponent_ng_container_3_section_18_li_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const note_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](note_r4);
  }
}
function ProductDetailComponent_ng_container_3_section_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "section", 80)(1, "div", 74)(2, "div", 81)(3, "div")(4, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](5, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, " K\u1EBFt qu\u1EA3 tra c\u1EE9u b\u1EA3o h\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "h2", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, " Th\u00F4ng tin b\u1EA3o h\u00E0nh ch\u00EDnh h\u00E3ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " D\u01B0\u1EDBi \u0111\u00E2y l\u00E0 chi ti\u1EBFt b\u1EA3o h\u00E0nh c\u1EE7a s\u1EA3n ph\u1EA9m thu\u1ED9c quy\u1EC1n s\u1EDF h\u1EEFu c\u1EE7a b\u1EA1n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_3_section_18_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.warrantyRecord.set(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 88)(14, "div", 89)(15, "div", 90)(16, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "i", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, " S\u1ED1 Serial / Phi\u1EBFu b\u1EA3o h\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 97)(26, "div")(27, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, " Th\u00F4ng tin kh\u00E1ch h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "h3", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "p", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, " \uD83D\uDCDE Li\u00EAn h\u1EC7: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 100)(36, "div", 101)(37, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, " Ng\u00E0y mua / k\u00EDch ho\u1EA1t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](41, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, " Th\u1EDDi \u0111i\u1EC3m b\u1EAFt \u0111\u1EA7u b\u1EA3o h\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 101)(45, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, " Th\u1EDDi h\u1EA1n b\u1EA3o h\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "p", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](50, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, " C\u00F2n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](55, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 101)(57, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58, " Trung t\u00E2m b\u1EA3o h\u00E0nh \u1EE7y quy\u1EC1n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](62, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "div", 101)(65, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](66, " S\u1EA3n ph\u1EA9m b\u1EA3o h\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "div", 110)(72, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](73, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](74, " Ghi ch\u00FA & \u0110i\u1EC1u kho\u1EA3n \u00E1p d\u1EE5ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "ul", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, ProductDetailComponent_ng_container_3_section_18_li_76_Template, 4, 1, "li", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "div", 115)(78, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_3_section_18_Template_button_click_78_listener() {
      const w_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).ngIf;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openTel(w_r5.servicePhone));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](79, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80, " G\u1ECDi trung t\u00E2m b\u1EA3o h\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_3_section_18_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scrollToAnchor("pd-specs"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](82, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](83, " Xem chi ti\u1EBFt s\u1EA3n ph\u1EA9m b\u00EAn d\u01B0\u1EDBi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const w_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", w_r5.status === "active" ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200" : "bg-slate-100 text-slate-600 ring-1 ring-slate-200");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", w_r5.status === "active" ? "bg-emerald-500" : "bg-slate-400");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", w_r5.status === "active" ? "B\u1EA3o h\u00E0nh c\u00F2n hi\u1EC7u l\u1EF1c" : "\u0110\u00E3 h\u1EBFt h\u1EA1n b\u1EA3o h\u00E0nh", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", w_r5.serialNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", w_r5.customerName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("href", "tel:" + w_r5.customerPhone, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", w_r5.customerPhone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](41, 18, w_r5.purchaseDate, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", w_r5.warrantyMonths, " th\u00E1ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", w_r5.status === "active" ? "text-emerald-600" : "text-rose-600");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](w_r5.daysLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ng\u00E0y (\u0111\u1EBFn ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](55, 21, w_r5.warrantyEndDate, "dd/MM/yyyy"), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", w_r5.serviceCenter, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("href", "tel:" + w_r5.servicePhone, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", w_r5.servicePhone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", w_r5.brandName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ID s\u1EA3n ph\u1EA9m: #", w_r5.productId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", w_r5.notes);
  }
}
function ProductDetailComponent_ng_container_3_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_3_button_25_Template_button_click_0_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.activeImageIndex.set(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r8 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r2.activeImageIndex() === i_r7 ? "border-emerald-500 ring-2 ring-emerald-200" : "border-transparent hover:border-slate-200");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵinterpolate1"]("preview-", i_r7))("src", image_r8, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function ProductDetailComponent_ng_container_3_nz_badge_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-badge", 122);
  }
}
function ProductDetailComponent_ng_container_3_nz_badge_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-badge", 123);
  }
}
function ProductDetailComponent_ng_container_3_li_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "li", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](h_r9);
  }
}
function ProductDetailComponent_ng_container_3_ng_template_127_div_55_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 149)(1, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.value);
  }
}
function ProductDetailComponent_ng_container_3_ng_template_127_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 145)(1, "p", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, " \uD83D\uDD16 Th\u00F4ng tin b\u1ED5 sung ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, ProductDetailComponent_ng_container_3_ng_template_127_div_55_div_4_Template, 5, 2, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 2, p_r11.metadata))("ngForTrackBy", ctx_r2.trackByKey);
  }
}
function ProductDetailComponent_ng_container_3_ng_template_127_img_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "img", 151);
  }
  if (rf & 2) {
    const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", p_r11.gallery[1], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
  }
}
function ProductDetailComponent_ng_container_3_ng_template_127_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 125)(1, "div", 126)(2, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "p", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, " S\u1EA3n ph\u1EA9m \u0111\u01B0\u1EE3c ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "strong", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, " cam k\u1EBFt ch\u1EA5t l\u01B0\u1EE3ng \u0111\u1EA1t chu\u1EA9n qu\u1ED1c t\u1EBF, \u0111\u01B0\u1EE3c ph\u00E2n ph\u1ED1i \u0111\u1ED9c quy\u1EC1n t\u1EA1i Vi\u1EC7t Nam b\u1EDFi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "strong", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, ". Qu\u00E1 tr\u00ECnh s\u1EA3n xu\u1EA5t tu\u00E2n th\u1EE7 quy tr\u00ECnh ki\u1EC3m so\u00E1t ch\u1EA5t l\u01B0\u1EE3ng nghi\u00EAm ng\u1EB7t, t\u1EEBng s\u1EA3n ph\u1EA9m \u0111\u1EC1u \u0111\u01B0\u1EE3c ki\u1EC3m tra ch\u1EA5t l\u01B0\u1EE3ng tr\u01B0\u1EDBc khi xu\u1EA5t x\u01B0\u1EDFng. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 128)(15, "div", 129)(16, "p", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, " \u2705 L\u1EE3i \u00EDch s\u1EA3n ph\u1EA9m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "ul", 131)(19, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "Thi\u1EBFt k\u1EBF tinh t\u1EBF, ph\u00F9 h\u1EE3p ng\u01B0\u1EDDi d\u00F9ng Vi\u1EC7t Nam");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Hi\u1EC7u su\u1EA5t cao, ti\u1EBFt ki\u1EC7m nhi\u00EAn li\u1EC7u / \u0111i\u1EC7n n\u0103ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "B\u1EA3o h\u00E0nh d\u00E0i h\u1EA1n, k\u1EF9 thu\u1EADt vi\u00EAn t\u1EADn n\u01A1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "Ph\u1EE5 t\u00F9ng thay th\u1EBF c\u00F3 s\u1EB5n to\u00E0n qu\u1ED1c");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 133)(36, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37, " \uD83D\uDCCB Quy tr\u00ECnh mua h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "ol", 131)(39, "li")(40, "strong", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "B\u01B0\u1EDBc 1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, " Li\u00EAn h\u1EC7 Hotline / Zalo \u0111\u1EC3 nh\u1EADn t\u01B0 v\u1EA5n chi ti\u1EBFt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "li")(44, "strong", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "B\u01B0\u1EDBc 2.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, " Nh\u00E2n vi\u00EAn t\u01B0 v\u1EA5n b\u00E1o gi\u00E1 & ch\u00EDnh s\u00E1ch giao h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "li")(48, "strong", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "B\u01B0\u1EDBc 3.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50, " \u0110\u1EB7t c\u1ECDc (chuy\u1EC3n kho\u1EA3n ho\u1EB7c t\u1EA1i c\u1EEDa h\u00E0ng) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "li")(52, "strong", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, "B\u01B0\u1EDBc 4.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, " Giao h\u00E0ng & h\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng t\u1EADn n\u01A1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](55, ProductDetailComponent_ng_container_3_ng_template_127_div_55_Template, 6, 4, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](56, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](57, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](58, ProductDetailComponent_ng_container_3_ng_template_127_img_58_Template, 1, 1, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](59, "div", 139)(60, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, " \uD83C\uDFF7\uFE0F Th\u00F4ng tin nhanh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "dl", 141)(63, "div", 142)(64, "dt", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65, "M\u00E3 s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "dd", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 142)(69, "dt", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, "Th\u01B0\u01A1ng hi\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "dd", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div", 142)(74, "dt", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, "Model");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "dd", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "div", 142)(79, "dt", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80, "Ph\u00E2n lo\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "dd", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](83, "div", 142)(84, "dt", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, "Lo\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "dd", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](p_r11.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](p_r11.brandName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](p_r11.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.hasMetadata(p_r11.metadata));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", p_r11.gallery[0], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", p_r11.gallery[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" #", p_r11.id.slice(0, 8), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.brandName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.categoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.kind === "bike" ? "Xe \u0111i\u1EC7n" : "M\u00E1y n\u00F4ng nghi\u1EC7p", " ");
  }
}
function ProductDetailComponent_ng_container_3_ng_template_129_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 158)(1, "td", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td", 160)(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const spec_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", i_r13 % 2 === 0 ? "bg-white" : "bg-slate-50/50");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", spec_r12.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](spec_r12.value);
  }
}
function ProductDetailComponent_ng_container_3_ng_template_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 152)(1, "div", 153)(2, "p", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "p", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "table", 156)(7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ProductDetailComponent_ng_container_3_ng_template_129_tr_8_Template, 6, 3, "tr", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" B\u1EA3ng th\u00F4ng s\u1ED1 k\u1EF9 thu\u1EADt \u2013 ", p_r11.model, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" Tham s\u1ED1 k\u1EF9 thu\u1EADt chi ti\u1EBFt c\u1EE7a s\u1EA3n ph\u1EA9m ", p_r11.brandName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", p_r11.specs);
  }
}
function ProductDetailComponent_ng_container_3_ng_template_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 161)(1, "div", 162)(2, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h3", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, " Ch\u00EDnh s\u00E1ch b\u1EA3o h\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "ul", 165)(7, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span")(10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "B\u1EA3o h\u00E0nh khung & \u0111\u1ED9ng c\u01A1:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span")(16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Pin / \u1EAEc quy:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, " 12-36 th\u00E1ng theo s\u1EA3n ph\u1EA9m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "span")(22, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "Ph\u1EE5 t\u00F9ng \u0111i\u1EC7n t\u1EED:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, " 06 th\u00E1ng \u0111\u1ED5i m\u1EDBi 1-1 l\u1ED7i s\u1EA3n xu\u1EA5t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "span")(28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29, "B\u1EA3o d\u01B0\u1EE1ng mi\u1EC5n ph\u00ED:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, " 01 l\u1EA7n \u0111\u1EA7u sau 01 th\u00E1ng / 1000km \u0111\u1EA7u ti\u00EAn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, " Tra c\u1EE9u b\u1EA3o h\u00E0nh s\u1EA3n ph\u1EA9m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "div", 168)(35, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "i", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "h3", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, " L\u1ECBch tr\u00ECnh b\u1EA3o d\u01B0\u1EE1ng \u0111\u1ECBnh k\u1EF3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "ul", 165)(40, "li", 118)(41, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "span")(44, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](45, "1 th\u00E1ng / 1.000km:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, " Ki\u1EC3m tra phanh, d\u1EA7u, \u1ED1c v\u00EDt, \u00E1p su\u1EA5t l\u1ED1p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "li", 118)(48, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "span")(51, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52, "3 th\u00E1ng / 3.000km:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](53, " Thay d\u1EA7u nh\u1EDBt, l\u1ECDc gi\u00F3, ki\u1EC3m tra h\u1EC7 th\u1ED1ng \u0111i\u1EC7n");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "li", 118)(55, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "span")(58, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "6 th\u00E1ng / 6.000km:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](60, " Ki\u1EC3m tra h\u1EC7 th\u1ED1ng truy\u1EC1n \u0111\u1ED9ng, thay l\u1ECDc d\u1EA7u, ki\u1EC3m tra \u0111\u1ED9ng c\u01A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "li", 118)(62, "span", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](63, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "span")(65, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](66, "12 th\u00E1ng / 12.000km:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, " B\u1EA3o d\u01B0\u1EE1ng t\u1ED5ng th\u1EC3 to\u00E0n th\u00E2n, s\u01A1n, m\u1EA1, ki\u1EC3m tra khung xe");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](69, "i", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](70, " \u0110\u1EB7t l\u1ECBch b\u1EA3o d\u01B0\u1EE1ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.warrantyMonths ? p_r11.warrantyMonths + " th\u00E1ng" : "12-24 th\u00E1ng", " theo t\u1EEBng d\u00F2ng s\u1EA3n ph\u1EA9m ");
  }
}
function ProductDetailComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "nav", 10)(2, "div", 11)(3, "ol", 12)(4, "li")(5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "li")(12, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, ProductDetailComponent_ng_container_3_section_18_Template, 84, 24, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "section", 20)(20, "div", 21)(21, "div")(22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, ProductDetailComponent_ng_container_3_button_25_Template, 2, 4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 26)(27, "div", 27)(28, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div")(31, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32, " B\u1EA3o h\u00E0nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "div", 27)(36, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div")(39, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, " Giao h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, " To\u00E0n qu\u1ED1c, t\u1EADn n\u01A1i ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "div", 27)(44, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](45, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div")(47, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](48, " T\u00ECnh tr\u1EA1ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "div", 36)(52, "div")(53, "div", 37)(54, "nz-tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](55, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "nz-tag", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, ProductDetailComponent_ng_container_3_nz_badge_59_Template, 1, 0, "nz-badge", 40)(60, ProductDetailComponent_ng_container_3_nz_badge_60_Template, 1, 0, "nz-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div", 43)(64, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](65, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67, "Th\u01B0\u01A1ng hi\u1EC7u:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "strong", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](71, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](73, "Model:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](74, "strong", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](77, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79, "\u0110\u01A1n v\u1ECB:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "strong", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](83, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85, "B\u1EA3o h\u00E0nh:");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "strong", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "div", 52)(89, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](90, " Gi\u00E1 b\u00E1n l\u1EBB \u0111\u1EC1 xu\u1EA5t ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](91, "div", 54)(92, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](96, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](97, " -12% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](98, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](99, " * Gi\u00E1 c\u00F3 th\u1EC3 thay \u0111\u1ED5i t\u00F9y c\u1EA5u h\u00ECnh & ph\u1EE5 ki\u1EC7n. Vui l\u00F2ng li\u00EAn h\u1EC7 \u0111\u1EC3 c\u00F3 b\u00E1o gi\u00E1 ch\u00EDnh x\u00E1c nh\u1EA5t. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](100, "div")(101, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](102, " \u2728 \u0110\u1EB7c \u0111i\u1EC3m n\u1ED5i b\u1EADt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](103, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](104, ProductDetailComponent_ng_container_3_li_104_Template, 4, 1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "div", 62)(106, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](107, " \uD83D\uDCD6 Gi\u1EDBi thi\u1EC7u ng\u1EAFn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](108, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](110, "div", 64)(111, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](112, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](113, " G\u1ECDi \u0111\u1EB7t h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](115, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](116, " Xem th\u00EAm s\u1EA3n ph\u1EA9m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](118, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](119, " Chat t\u01B0 v\u1EA5n Zalo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](120, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_3_Template_button_click_120_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scrollToAnchor("pd-specs"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](121, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122, " Xem th\u00F4ng s\u1ED1 k\u1EF9 thu\u1EADt ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "section", 73)(124, "div", 74)(125, "nz-tabset", 75)(126, "nz-tab", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](127, ProductDetailComponent_ng_container_3_ng_template_127_Template, 88, 12, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "nz-tab", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](129, ProductDetailComponent_ng_container_3_ng_template_129_Template, 9, 3, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](130, "nz-tab", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](131, ProductDetailComponent_ng_container_3_ng_template_131_Template, 71, 1, "ng-template", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const p_r11 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.breadcrumb().root);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](27, _c0, ctx_r2.kind()));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.breadcrumb().collection, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("title", p_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.warrantyRecord());
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", p_r11.gallery[ctx_r2.activeImageIndex()], _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"])("alt", p_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", p_r11.gallery);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.warrantyMonths ? p_r11.warrantyMonths + " th\u00E1ng ch\u00EDnh h\u00E3ng" : "Li\u00EAn h\u1EC7", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.stockQuantity > 0 ? "C\u00F2n h\u00E0ng (" + p_r11.stockQuantity + ")" : "\u0110\u1EB7t tr\u01B0\u1EDBc", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.categoryName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzColor", p_r11.kind === "bike" ? "geekblue" : "orange");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.kind === "bike" ? "\uD83D\uDEB2 Xe \u0111i\u1EC7n" : "\uD83C\uDF3E M\u00E1y n\u00F4ng nghi\u1EC7p", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", p_r11.stockQuantity > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", p_r11.stockQuantity === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](p_r11.brandName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](p_r11.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](p_r11.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.warrantyMonths ? p_r11.warrantyMonths + " th\u00E1ng" : "Li\u00EAn h\u1EC7", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.formatCurrency(p_r11.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.formatCurrency(ctx_r2.round(p_r11.price * 1.12)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", p_r11.highlights);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", p_r11.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](29, _c0, ctx_r2.kind()));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSize", "large");
  }
}
class ProductDetailComponent {
  constructor() {
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute);
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.electricBikeService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_electric_bike_service__WEBPACK_IMPORTED_MODULE_10__.ElectricBikeService);
    this.agriculturalMachineService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_services_agricultural_machine_service__WEBPACK_IMPORTED_MODULE_11__.AgriculturalMachineService);
    this.kind = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('bike', ...(ngDevMode ? [{
      debugName: "kind"
    }] : []));
    this.productId = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "productId"
    }] : []));
    this.activeImageIndex = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(0, ...(ngDevMode ? [{
      debugName: "activeImageIndex"
    }] : []));
    this.notFound = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "notFound"
    }] : []));
    this.loading = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "loading"
    }] : []));
    this.warrantyRecord = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "warrantyRecord"
    }] : []));
    this._bike = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "_bike"
    }] : []));
    this._machine = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null, ...(ngDevMode ? [{
      debugName: "_machine"
    }] : []));
    this._allBikes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "_allBikes"
    }] : []));
    this._allMachines = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "_allMachines"
    }] : []));
    this._allWarranties = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "_allWarranties"
    }] : []));
    this.product = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const k = this.kind();
      if (k === 'bike') {
        const b = this._bike();
        return b ? this._buildBike(b) : null;
      }
      const m = this._machine();
      return m ? this._buildMachine(m) : null;
    }, ...(ngDevMode ? [{
      debugName: "product"
    }] : []));
    this.breadcrumb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const k = this.kind();
      return {
        root: 'Trang chủ',
        collection: k === 'bike' ? 'Sản phẩm xe điện' : 'Sản phẩm nông nghiệp',
        collectionTag: k
      };
    }, ...(ngDevMode ? [{
      debugName: "breadcrumb"
    }] : []));
    this.relatedProducts = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.computed)(() => {
      const base = this.product();
      if (!base) return [];
      const ids = base.relatedIds.slice(0, 4);
      return ids.map(id => base.kind === 'bike' ? this._findBike(id) : this._findMachine(id)).filter(p => !!p && p.id !== base.id);
    }, ...(ngDevMode ? [{
      debugName: "relatedProducts"
    }] : []));
  }
  ngOnInit() {
    this._allWarranties.set(this._mockWarranties());
    this.route.paramMap.subscribe(p => {
      const k = p.get('kind');
      const id = (p.get('id') ?? '').trim();
      if (!k || !id || k !== 'bike' && k !== 'machine') {
        this.notFound.set(true);
        return;
      }
      this.kind.set(k);
      this.productId.set(id);
      this.activeImageIndex.set(0);
      this.notFound.set(false);
      this._loadProduct(k, id);
      this._loadSiblings(k);
    });
    this.route.queryParamMap.subscribe(qp => {
      const serial = qp.get('serial');
      if (serial) {
        const found = this._allWarranties().find(w => w.serialNumber.toUpperCase() === serial.trim().toUpperCase());
        this.warrantyRecord.set(found ?? null);
        if (found) {
          setTimeout(() => {
            this.scrollToAnchor('pd-warranty');
          }, 150);
        }
      } else {
        this.warrantyRecord.set(null);
      }
    });
  }
  _loadProduct(k, id) {
    this.loading.set(true);
    this.notFound.set(false);
    if (k === 'bike') {
      this._machine.set(null);
      this.electricBikeService.getById(id).subscribe({
        next: b => {
          this._bike.set(b);
          this.loading.set(false);
        },
        error: () => {
          this._bike.set(null);
          this.notFound.set(true);
          this.loading.set(false);
        }
      });
    } else {
      this._bike.set(null);
      this.agriculturalMachineService.getById(id).subscribe({
        next: m => {
          this._machine.set(m);
          this.loading.set(false);
        },
        error: () => {
          this._machine.set(null);
          this.notFound.set(true);
          this.loading.set(false);
        }
      });
    }
  }
  _loadSiblings(k) {
    if (k === 'bike') {
      this.electricBikeService.getAll().subscribe({
        next: list => this._allBikes.set(list),
        error: () => this._allBikes.set([])
      });
    } else {
      this.agriculturalMachineService.getAll().subscribe({
        next: list => this._allMachines.set(list),
        error: () => this._allMachines.set([])
      });
    }
  }
  goToListing(k) {
    const target = k ?? this.kind();
    void this.router.navigate(['/products'], {
      queryParams: {
        type: target
      }
    });
  }
  round(n) {
    return Math.round(n);
  }
  scrollToAnchor(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  openTel(phone) {
    window.location.href = 'tel:' + phone;
  }
  formatCurrency(n) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(n);
  }
  trackByKey(_idx, item) {
    return item.key;
  }
  hasMetadata(meta) {
    return !!meta && Object.keys(meta).length > 0;
  }
  _buildGallery(p) {
    const kind = 'voltage' in p ? 'bike' : 'machine';
    const palette = kind === 'bike' ? ['059669', '0284c7', '0891b2', '7c3aed'] : ['b45309', 'ea580c', 'ca8a04', '92400e'];
    const label = kind === 'bike' ? 'G' : 'H';
    return [p.pictureUrl, ...palette.map((color, i) => `https://placehold.co/800x800/${color}/ffffff?text=${label}${i + 1}`)];
  }
  _getWarrantyMonths(p) {
    if (!p.metadata) return null;
    const raw = p.metadata['warrantyMonths'] || p.metadata['warranty'] || p.metadata['Bảo hành (tháng)'];
    if (!raw) return null;
    const n = parseInt(raw, 10);
    return isNaN(n) ? null : n;
  }
  _buildHighlights(p) {
    const wm = this._getWarrantyMonths(p);
    if ('voltage' in p) {
      const h = ['Chính hãng 100%'];
      if (wm) h.push(`Bảo hành chính hãng ${wm} tháng`);else h.push('Bảo hành điện tử 12-24 tháng');
      if (p.voltage) h.push(`Điện áp ${p.voltage}`);
      if (p.power) h.push(`Công suất ${p.power}`);
      if (p.batteryCapacity) h.push(`Dung lượng pin ${p.batteryCapacity}`);
      if (p.compatibility) h.push(`Tương thích: ${p.compatibility}`);
      if (p.stockQuantity >= 10) h.push('Giao hàng trong 24h');
      return h.slice(0, 6);
    }
    const h = ['Chính hãng nhập khẩu'];
    if (wm) h.push(`Bảo hành động cơ ${wm} tháng`);else h.push('Bảo hành động cơ 12 tháng');
    if (p.engineType) h.push(`Loại động cơ: ${p.engineType}`);
    if (p.power) h.push(`Công suất ${p.power}`);
    if (p.fuelType) h.push(`Nhiên liệu: ${p.fuelType}`);
    if (p.capacity) h.push(`Công suất/Thể tích: ${p.capacity}`);
    if (p.compatibility) h.push(`Tương thích: ${p.compatibility}`);
    if (p.stockQuantity >= 5) h.push('Nhận giao cả nước');
    return h.slice(0, 6);
  }
  _buildSpecs(p) {
    const wm = this._getWarrantyMonths(p);
    const base = [{
      label: 'Tên sản phẩm',
      value: p.name
    }, {
      label: 'Thương hiệu',
      value: p.brandName
    }, {
      label: 'Model',
      value: p.model
    }, {
      label: 'Phân loại',
      value: p.categoryName
    }, {
      label: 'Đơn vị cung cấp',
      value: p.companyName
    }, {
      label: 'Tình trạng kho',
      value: p.stockQuantity > 0 ? `Còn hàng (${p.stockQuantity} sản phẩm)` : 'Hết hàng (đặt trước)'
    }, {
      label: 'Thời gian bảo hành',
      value: wm ? `${wm} tháng` : 'Liên hệ để biết chi tiết'
    }];
    const extras = 'voltage' in p ? [{
      label: 'Điện áp',
      value: p.voltage || '—'
    }, {
      label: 'Công suất động cơ',
      value: p.power || '—'
    }, {
      label: 'Dung tích pin',
      value: p.batteryCapacity || '—'
    }, {
      label: 'Tương thích / Fit model',
      value: p.compatibility || 'Không áp dụng'
    }] : [{
      label: 'Loại động cơ',
      value: p.engineType || '—'
    }, {
      label: 'Công suất (HP)',
      value: p.power || '—'
    }, {
      label: 'Nhiên liệu',
      value: p.fuelType || '—'
    }, {
      label: 'Công suất / Thể tích',
      value: p.capacity || '—'
    }, {
      label: 'Tương thích / Fit model',
      value: p.compatibility || 'Không áp dụng'
    }];
    const skipKeys = new Set(['warrantyMonths', 'warranty', 'Bảo hành (tháng)']);
    const metaEntries = p.metadata ? Object.entries(p.metadata).filter(([k]) => !skipKeys.has(k)).map(([label, value]) => ({
      label,
      value
    })) : [];
    return [...base, ...extras, ...metaEntries];
  }
  _relatedFor(id, kind, allBikes, allMachines) {
    if (kind === 'bike') {
      return allBikes.map(b => b.id).filter(x => x !== id);
    }
    return allMachines.map(m => m.id).filter(x => x !== id);
  }
  _buildBike(p) {
    return {
      kind: 'bike',
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      brand: p.brand,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyId: p.companyId,
      companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p),
      metadata: p.metadata ?? {},
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(p.id, 'bike', this._allBikes(), [])
    };
  }
  _buildMachine(p) {
    return {
      kind: 'machine',
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      brand: p.brand,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyId: p.companyId,
      companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p),
      metadata: p.metadata ?? {},
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(p.id, 'machine', [], this._allMachines())
    };
  }
  _findBike(id) {
    const p = this._allBikes().find(x => x.id === id);
    if (!p) return null;
    return this._buildBike(p);
  }
  _findMachine(id) {
    const p = this._allMachines().find(x => x.id === id);
    if (!p) return null;
    return this._buildMachine(p);
  }
  _mockWarranties() {
    const today = new Date();
    const subtractDays = days => {
      const d = new Date(today);
      d.setDate(d.getDate() - days);
      return d;
    };
    const calcDaysLeft = end => Math.max(0, Math.floor((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
    const rec1Purchase = subtractDays(45);
    const rec1End = new Date(rec1Purchase);
    rec1End.setMonth(rec1End.getMonth() + 24);
    const rec2Purchase = subtractDays(380);
    const rec2End = new Date(rec2Purchase);
    rec2End.setMonth(rec2End.getMonth() + 12);
    const rec3Purchase = subtractDays(900);
    const rec3End = new Date(rec3Purchase);
    rec3End.setMonth(rec3End.getMonth() + 24);
    const rec4Purchase = subtractDays(20);
    const rec4End = new Date(rec4Purchase);
    rec4End.setMonth(rec4End.getMonth() + 6);
    return [{
      serialNumber: 'VF-E200-882134',
      productId: 'eb000001-0000-0000-0000-000000000101',
      productKind: 'bike',
      productName: 'VinFast Evo200 – Xe máy điện cao cấp',
      brandName: 'VinFast',
      customerName: 'Nguyễn Văn An',
      customerPhone: '0901123456',
      purchaseDate: rec1Purchase,
      warrantyMonths: 24,
      warrantyEndDate: rec1End,
      serviceCenter: 'Trung tâm bảo hành VinFast – Quận 1, HCM',
      servicePhone: '1900 2323 89',
      notes: ['Đã đăng ký kích hoạt bảo hành điện tử', 'Pin bao hành riêng 36 tháng / 20.000km', 'Lần bảo dưỡng định kỳ cuối: 15 ngày trước'],
      status: calcDaysLeft(rec1End) > 0 ? 'active' : 'expired',
      daysLeft: calcDaysLeft(rec1End)
    }, {
      serialNumber: 'KBT-DC105-050127',
      productId: 'am000001-0000-0000-0000-000000000201',
      productKind: 'machine',
      productName: 'Máy gặt đập liên hợp Kubota DC-105X',
      brandName: 'Kubota',
      customerName: 'Hợp tác xã Nông sản Đồng Tháp',
      customerPhone: '02773889901',
      purchaseDate: rec2Purchase,
      warrantyMonths: 12,
      warrantyEndDate: rec2End,
      serviceCenter: 'Đông Lực NN Việt – Chi nhánh Cần Thơ',
      servicePhone: '0292 3 666 888',
      notes: ['Bảo hành toàn bộ động cơ và khung xe', 'Phụ tùng hao mòn (lưỡi gặt, dây xích) không nằm trong bảo hành', 'Yêu cầu lịch sử bảo dưỡng đầy đủ'],
      status: calcDaysLeft(rec2End) > 0 ? 'active' : 'expired',
      daysLeft: calcDaysLeft(rec2End)
    }, {
      serialNumber: 'YMR-YM70-090233',
      productId: 'am000002-0000-0000-0000-000000000202',
      productKind: 'machine',
      productName: 'Máy cày 2 bàn đạp Yanmar YM70',
      brandName: 'Yanmar',
      customerName: 'Trần Thị Hồng',
      customerPhone: '0912987654',
      purchaseDate: rec3Purchase,
      warrantyMonths: 24,
      warrantyEndDate: rec3End,
      serviceCenter: 'Đông Lực NN Việt – Chi nhánh Hải Phòng',
      servicePhone: '0225 3 777 555',
      notes: ['Bảo hành đã hết hạn từ ngày ' + rec3End.toLocaleDateString('vi-VN'), 'Vẫn hỗ trợ sửa chữa có tính phí với chính sách khách hàng thân thiết', 'Ưu đãi 10% khi thay phụ tùng chính hãng'],
      status: calcDaysLeft(rec3End) > 0 ? 'active' : 'expired',
      daysLeft: calcDaysLeft(rec3End)
    }, {
      serialNumber: 'CEL-26-552211',
      productId: 'eb000002-0000-0000-0000-000000000102',
      productKind: 'bike',
      productName: 'Xe đạp điện thành phố Celesta 26 inch',
      brandName: 'Celesta',
      customerName: 'Lê Minh Khoa',
      customerPhone: '0977665544',
      purchaseDate: rec4Purchase,
      warrantyMonths: 6,
      warrantyEndDate: rec4End,
      serviceCenter: 'Xe Điện Xanh SM – Showroom Cầu Giấy',
      servicePhone: '024 6688 0099',
      notes: ['Kích hoạt bảo hành thành công ngày ' + rec4Purchase.toLocaleDateString('vi-VN'), 'Lần bảo dưỡng đầu tiên miễn phí sau 1 tháng', 'Liên hệ lấy xe tại nhà theo lịch hẹn'],
      status: calcDaysLeft(rec4End) > 0 ? 'active' : 'expired',
      daysLeft: calcDaysLeft(rec4End)
    }];
  }
  static {
    this.ɵfac = function ProductDetailComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductDetailComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: ProductDetailComponent,
      selectors: [["app-product-detail"]],
      decls: 4,
      vars: 2,
      consts: [[1, "pd-page"], ["class", "mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center", 4, "ngIf"], [4, "ngIf"], [1, "mx-auto", "flex", "min-h-[50vh]", "max-w-3xl", "flex-col", "items-center", "justify-center", "px-4", "py-16", "text-center"], [1, "mb-5", "flex", "h-20", "w-20", "items-center", "justify-center", "rounded-3xl", "bg-rose-50", "text-rose-500", "ring-1", "ring-rose-100"], [1, "fa", "fa-exclamation-triangle", "text-4xl"], [1, "text-2xl", "font-black", "text-slate-900"], [1, "mt-2", "max-w-md", "text-slate-600"], ["type", "button", "nz-button", "", "nzType", "primary", "routerLink", "/", 1, "!mt-6", "!rounded-full", "!bg-emerald-600", "!px-7", "!font-semibold"], [1, "fa", "fa-home", "mr-2"], [1, "border-b", "border-slate-200/60", "bg-gradient-to-b", "from-white", "to-slate-50"], [1, "mx-auto", "max-w-7xl", "px-4", "py-4", "md:px-6", "lg:px-8"], [1, "flex", "flex-wrap", "items-center", "gap-2", "text-sm", "text-slate-500"], ["routerLink", "/", 1, "inline-flex", "items-center", "gap-1.5", "font-medium", "text-slate-600", "transition", "hover:text-emerald-600"], [1, "fa", "fa-home", "text-xs"], [1, "text-slate-300"], [1, "fa", "fa-angle-right"], ["routerLink", "/products", 1, "font-medium", "text-slate-600", "transition", "hover:text-emerald-600", 3, "queryParams"], [1, "max-w-xs", "truncate", "font-semibold", "text-slate-800", 3, "title"], ["id", "pd-warranty", "class", "border-b border-indigo-100 bg-gradient-to-br from-indigo-50/70 via-white to-violet-50/50 py-10", 4, "ngIf"], [1, "mx-auto", "max-w-7xl", "px-4", "py-10", "md:px-6", "lg:px-8", "md:py-14"], [1, "grid", "gap-10", "lg:grid-cols-2", "lg:gap-14"], [1, "group", "overflow-hidden", "rounded-[2rem]", "border", "border-slate-200", "bg-slate-50", "shadow-lg", "shadow-slate-200/50"], [1, "h-[22rem]", "w-full", "object-cover", "transition", "duration-500", "group-hover:scale-[1.02]", "md:h-[28rem]", "lg:h-[32rem]", 3, "src", "alt"], [1, "mt-4", "grid", "grid-cols-4", "gap-3"], ["type", "button", "class", "group relative overflow-hidden rounded-2xl border-2 bg-slate-100 transition", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mt-6", "grid", "gap-3", "rounded-3xl", "border", "border-slate-200", "bg-white", "p-5", "shadow-sm", "sm:grid-cols-3"], [1, "flex", "items-start", "gap-3"], [1, "flex", "h-10", "w-10", "flex-none", "items-center", "justify-center", "rounded-2xl", "bg-emerald-50", "text-emerald-600", "ring-1", "ring-emerald-100"], [1, "fa", "fa-check-square-o", "text-lg"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-400"], [1, "mt-1", "text-sm", "font-bold", "text-slate-800"], [1, "flex", "h-10", "w-10", "flex-none", "items-center", "justify-center", "rounded-2xl", "bg-sky-50", "text-sky-600", "ring-1", "ring-sky-100"], [1, "fa", "fa-truck", "text-lg"], [1, "flex", "h-10", "w-10", "flex-none", "items-center", "justify-center", "rounded-2xl", "bg-amber-50", "text-amber-600", "ring-1", "ring-amber-100"], [1, "fa", "fa-cubes", "text-lg"], [1, "space-y-6"], [1, "mb-3", "flex", "flex-wrap", "items-center", "gap-2"], [1, "fa", "fa-tag", "mr-1"], [3, "nzColor"], ["nzStatus", "success", "nzText", "C\u00F2n h\u00E0ng", 4, "ngIf"], ["nzStatus", "warning", "nzText", "\u0110\u1EB7t tr\u01B0\u1EDBc", 4, "ngIf"], [1, "text-3xl", "font-black", "leading-tight", "tracking-tight", "text-slate-900", "md:text-4xl"], [1, "mt-3", "grid", "gap-2", "rounded-2xl", "bg-slate-50", "px-4", "py-3", "ring-1", "ring-slate-100", "sm:grid-cols-2"], [1, "flex", "items-center", "gap-2", "text-sm"], [1, "fa", "fa-industry", "text-slate-400"], [1, "text-slate-500"], [1, "text-slate-800"], [1, "fa", "fa-code-fork", "text-slate-400"], [1, "fa", "fa-building-o", "text-slate-400"], [1, "text-slate-800", "line-clamp-1"], [1, "fa", "fa-shield", "text-slate-400"], [1, "rounded-3xl", "border", "border-amber-100", "bg-gradient-to-r", "from-amber-50", "via-yellow-50", "to-orange-50", "p-5", "md:p-6"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-amber-700"], [1, "mt-1", "flex", "items-end", "gap-4"], [1, "text-4xl", "font-black", "leading-none", "text-emerald-600", "md:text-5xl"], [1, "mb-1", "text-sm", "font-semibold", "text-slate-500", "line-through"], [1, "mb-1", "rounded-full", "bg-rose-500", "px-2.5", "py-1", "text-[11px]", "font-bold", "text-white", "shadow-sm"], [1, "mt-2", "text-xs", "text-amber-800"], [1, "mb-2", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-500"], [1, "grid", "gap-2", "sm:grid-cols-2"], ["class", "flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-700 ring-1 ring-slate-100", 4, "ngFor", "ngForOf"], [1, "rounded-3xl", "border", "border-slate-200", "bg-white", "p-5", "shadow-sm"], [1, "text-sm", "leading-7", "text-slate-700"], [1, "sticky", "bottom-3", "z-20", "grid", "grid-cols-2", "gap-3", "rounded-3xl", "border", "border-slate-200", "bg-white/95", "p-3", "shadow-lg", "shadow-slate-200/60", "backdrop-blur", "md:static", "md:p-0", "md:border-none", "md:shadow-none", "md:bg-transparent"], ["type", "button", "onclick", "window.location.href = 'tel:19001234'", "nz-button", "", "nzType", "default", 1, "!inline-flex", "!items-center", "!justify-center", "!h-12", "!rounded-full", "!text-sm", "!font-bold", "!border-emerald-300", "!text-emerald-700", "hover:!bg-emerald-50"], [1, "fa", "fa-phone", "mr-2"], ["type", "button", "nz-button", "", "routerLink", "/products", "nzType", "primary", 1, "!h-12", "!rounded-full", "!bg-gradient-to-r", "!from-emerald-600", "!to-teal-600", "!text-sm", "!font-bold", "!shadow-md", "!shadow-emerald-500/20", 3, "queryParams"], [1, "fa", "fa-cubes", "mr-2"], ["type", "button", "onclick", "\n                window.open(\n                  'https://zalo.me/0901123456',\n                  '_blank',\n                  'noopener,noreferrer',\n                )\n              ", "nz-button", "", "nzType", "default", 1, "!inline-flex", "!items-center", "!justify-center", "!col-span-2", "!h-11", "!rounded-full", "!text-xs", "!font-semibold", "!border-sky-300", "!text-sky-700", "hover:!bg-sky-50", "md:!col-span-1"], [1, "fa", "fa-comments", "mr-2"], ["type", "button", "nz-button", "", "nzType", "default", 1, "!inline-flex", "!items-center", "!justify-center", "!col-span-2", "!h-11", "!rounded-full", "!text-xs", "!font-semibold", "md:!col-span-1", 3, "click"], [1, "fa", "fa-list-ul", "mr-2"], ["id", "pd-specs", 1, "bg-slate-50/60", "border-y", "border-slate-100", "py-12"], [1, "mx-auto", "max-w-7xl", "px-4", "md:px-6", "lg:px-8"], ["nzTabBarGutter", "16", 1, "pd-tabs", 3, "nzSize"], ["nzTitle", "\uD83D\uDCDD M\u00F4 t\u1EA3 chi ti\u1EBFt"], ["nz-tab", ""], ["nzTitle", "\u2699\uFE0F Th\u00F4ng s\u1ED1 k\u1EF9 thu\u1EADt"], ["nzTitle", "\uD83D\uDEE0\uFE0F B\u1EA3o h\u00E0nh & B\u1EA3o d\u01B0\u1EE1ng"], ["id", "pd-warranty", 1, "border-b", "border-indigo-100", "bg-gradient-to-br", "from-indigo-50/70", "via-white", "to-violet-50/50", "py-10"], [1, "mb-5", "flex", "items-start", "justify-between", "gap-4"], [1, "mb-2", "inline-flex", "items-center", "gap-2", "rounded-full", "bg-indigo-100", "px-4", "py-1.5", "text-xs", "font-bold", "uppercase", "tracking-widest", "text-indigo-700", "ring-1", "ring-indigo-200"], [1, "fa", "fa-shield", "mr-1"], [1, "text-2xl", "font-black", "tracking-tight", "text-slate-900"], [1, "mt-1", "text-sm", "text-slate-600"], ["type", "button", "nz-button", "", "nzType", "text", "nzShape", "circle", "nz-tooltip", "", "nzTooltipTitle", "\u0110\u00F3ng th\u1EBB b\u1EA3o h\u00E0nh", 1, "!text-slate-500", "hover:!text-slate-800", 3, "click"], [1, "fa", "fa-times", "text-lg"], [1, "grid", "gap-5", "overflow-hidden", "rounded-[2rem]", "border", "border-slate-200/80", "bg-white", "shadow-xl", "shadow-indigo-500/10", "md:grid-cols-5"], [1, "md:col-span-2", "flex", "items-center", "justify-center", "bg-gradient-to-br", "from-indigo-50", "via-violet-50", "to-fuchsia-50", "p-6", "md:p-8"], [1, "text-center"], [1, "mb-3", "inline-flex", "items-center", "gap-2", "rounded-full", "px-4", "py-1.5", "text-xs", "font-bold", "shadow-sm", 3, "ngClass"], [1, "h-2", "w-2", "rounded-full", 3, "ngClass"], [1, "mx-auto", "flex", "h-36", "w-36", "items-center", "justify-center", "rounded-3xl", "bg-gradient-to-br", "from-indigo-500", "via-violet-500", "to-fuchsia-500", "text-white", "shadow-xl", "shadow-indigo-500/30"], [1, "fa", "fa-file-text-o", "text-6xl", "opacity-90"], [1, "mt-5", "text-[11px]", "font-bold", "uppercase", "tracking-[0.25em]", "text-slate-400"], [1, "mt-1", "font-mono", "text-xl", "font-black", "tracking-wide", "text-slate-800"], [1, "md:col-span-3", "p-6", "md:p-7"], [1, "mt-1", "text-lg", "font-black", "leading-snug", "text-slate-900"], [1, "font-semibold", "text-indigo-600", "hover:text-indigo-700"], [1, "grid", "gap-4", "sm:grid-cols-2"], [1, "rounded-2xl", "border", "border-slate-100", "bg-gradient-to-br", "from-white", "to-slate-50", "p-4", "shadow-sm"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-slate-400"], [1, "mt-1", "font-bold", "text-slate-900"], [1, "mt-0.5", "text-xs", "text-slate-500"], [1, "mt-0.5", "text-sm", 3, "ngClass"], [1, "fa", "fa-calendar", "mr-1"], [1, "mt-1", "line-clamp-1", "font-bold", "text-slate-900"], [1, "mt-0.5", "inline-flex", "items-center", "text-sm", "text-emerald-600", "hover:text-emerald-700"], [1, "fa", "fa-phone-square", "mr-1"], [1, "rounded-2xl", "border", "border-indigo-100", "bg-indigo-50/40", "p-4"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-indigo-700"], [1, "fa", "fa-info-circle", "mr-1"], [1, "mt-2", "space-y-1.5", "text-sm", "text-slate-700"], ["class", "flex items-start gap-2", 4, "ngFor", "ngForOf"], [1, "flex", "flex-wrap", "gap-3", "pt-1"], ["type", "button", "nz-button", "", "nzType", "primary", 1, "!inline-flex", "!items-center", "!justify-center", "!rounded-full", "!bg-gradient-to-r", "!from-indigo-600", "!to-violet-600", "!text-sm", "!font-bold", "!shadow-md", "!shadow-indigo-500/20", 3, "click"], ["type", "button", "nz-button", "", 1, "!rounded-full", "!text-sm", "!font-semibold", 3, "click"], [1, "flex", "items-start", "gap-2"], [1, "fa", "fa-check-circle", "mt-0.5", "text-emerald-500"], ["type", "button", 1, "group", "relative", "overflow-hidden", "rounded-2xl", "border-2", "bg-slate-100", "transition", 3, "click", "ngClass"], [1, "h-20", "w-full", "object-cover", "transition", "duration-500", "group-hover:scale-110", "md:h-24", 3, "src", "alt"], ["nzStatus", "success", "nzText", "C\u00F2n h\u00E0ng"], ["nzStatus", "warning", "nzText", "\u0110\u1EB7t tr\u01B0\u1EDBc"], [1, "flex", "items-start", "gap-2", "rounded-xl", "bg-slate-50", "px-3", "py-2.5", "text-sm", "text-slate-700", "ring-1", "ring-slate-100"], [1, "grid", "gap-10", "rounded-3xl", "bg-white", "p-6", "shadow-sm", "ring-1", "ring-slate-100", "md:p-10", "lg:grid-cols-[1.2fr_0.8fr]", "lg:gap-12"], [1, "space-y-4", "text-base", "leading-8", "text-slate-700"], [1, "whitespace-pre-line"], [1, "mt-4", "grid", "gap-4", "sm:grid-cols-2"], [1, "rounded-2xl", "border", "border-emerald-100", "bg-emerald-50/60", "p-5"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-emerald-700"], [1, "mt-3", "space-y-2", "text-sm", "text-slate-700"], [1, "fa", "fa-check", "mt-0.5", "text-emerald-500"], [1, "rounded-2xl", "border", "border-amber-100", "bg-amber-50/60", "p-5"], [1, "text-amber-800"], ["class", "rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5", 4, "ngIf"], [1, "space-y-4"], ["alt", "product-main", 1, "h-56", "w-full", "rounded-2xl", "object-cover", "shadow-sm", "shadow-slate-200", 3, "src"], ["alt", "product-desc-2", "class", "h-56 w-full rounded-2xl object-cover shadow-sm shadow-slate-200", 3, "src", 4, "ngIf"], [1, "rounded-2xl", "border", "border-slate-200", "bg-gradient-to-br", "from-slate-50", "to-white", "p-5"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-500"], [1, "space-y-2", "text-sm"], [1, "flex", "justify-between", "gap-3"], [1, "font-mono", "font-bold", "text-slate-800"], [1, "font-semibold", "text-slate-800"], [1, "rounded-2xl", "border", "border-indigo-100", "bg-indigo-50/50", "p-5"], [1, "mb-3", "text-xs", "font-bold", "uppercase", "tracking-wider", "text-indigo-700"], [1, "grid", "gap-3", "text-sm", "sm:grid-cols-2"], ["class", "flex flex-col gap-1 rounded-xl bg-white px-3 py-2 ring-1 ring-indigo-100", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flex", "flex-col", "gap-1", "rounded-xl", "bg-white", "px-3", "py-2", "ring-1", "ring-indigo-100"], [1, "text-xs", "font-semibold", "uppercase", "tracking-wider", "text-slate-400"], ["alt", "product-desc-2", 1, "h-56", "w-full", "rounded-2xl", "object-cover", "shadow-sm", "shadow-slate-200", 3, "src"], [1, "overflow-hidden", "rounded-3xl", "bg-white", "shadow-sm", "ring-1", "ring-slate-100"], [1, "border-b", "border-slate-100", "bg-gradient-to-r", "from-slate-50", "to-white", "px-6", "py-4", "md:px-10"], [1, "text-xl", "font-black", "text-slate-900"], [1, "text-sm", "text-slate-500"], [1, "w-full"], ["class", "border-b border-slate-100 last:border-b-0", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-100", "last:border-b-0", 3, "ngClass"], [1, "w-1/3", "px-6", "py-4", "text-sm", "font-semibold", "text-slate-600", "md:px-10"], [1, "px-6", "py-4", "text-sm", "text-slate-800", "md:px-10"], [1, "grid", "gap-6", "rounded-3xl", "bg-white", "p-6", "shadow-sm", "ring-1", "ring-slate-100", "md:p-10", "md:grid-cols-2"], [1, "rounded-2xl", "border", "border-indigo-100", "bg-gradient-to-br", "from-indigo-50", "via-violet-50", "to-fuchsia-50", "p-6"], [1, "mb-4", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-br", "from-indigo-600", "to-violet-600", "text-white", "shadow-md"], [1, "fa", "fa-shield", "text-xl"], [1, "mt-4", "space-y-2.5", "text-slate-700"], ["type", "button", "routerLink", "/", "fragment", "warranty", "nz-button", "", "nzType", "primary", 1, "!mt-6", "!rounded-full", "!bg-indigo-600", "!px-6", "!font-semibold"], [1, "fa", "fa-search", "mr-2"], [1, "rounded-2xl", "border", "border-amber-100", "bg-gradient-to-br", "from-amber-50", "via-yellow-50", "to-orange-50", "p-6"], [1, "mb-4", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-br", "from-amber-500", "to-orange-500", "text-white", "shadow-md"], [1, "fa", "fa-wrench", "text-xl"], [1, "mt-0.5", "inline-flex", "h-6", "w-6", "flex-none", "items-center", "justify-center", "rounded-full", "bg-amber-200", "text-[11px]", "font-black", "text-amber-900"], ["type", "button", "onclick", "window.location.href = 'tel:19001234'", "nz-button", "", "nzType", "default", 1, "!inline-flex", "!items-center", "!justify-center", "!mt-6", "!rounded-full", "!border-amber-400", "!text-amber-700", "!font-semibold", "hover:!bg-amber-50"], [1, "fa", "fa-calendar-check-o", "mr-2"]],
      template: function ProductDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "cm-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ProductDetailComponent_div_2_Template, 10, 0, "div", 1)(3, ProductDetailComponent_ng_container_3_Template, 132, 31, "ng-container", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", (ctx.notFound() || !ctx.product()) && !ctx.loading());
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.product());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__.NzTagModule, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_6__.NzTagComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzGridModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeModule, ng_zorro_antd_badge__WEBPACK_IMPORTED_MODULE_8__.NzBadgeComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__.NzTabsModule, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__.NzTabsComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__.NzTabComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_9__.NzTabDirective, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_12__.HeaderComponent, _shared_directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_13__.ImgFallbackDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.KeyValuePipe],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 100vh;\n  background: #fafafa;\n}\n\n.pd-page[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.pd-tabs[_ngcontent-%COMP%]     .ant-tabs-nav {\n  margin-bottom: 24px !important;\n}\n.pd-tabs[_ngcontent-%COMP%]     .ant-tabs-nav::before {\n  border-bottom: 1px solid rgba(226, 232, 240, 0.8) !important;\n}\n.pd-tabs[_ngcontent-%COMP%]     .ant-tabs-tab {\n  padding: 12px 24px !important;\n  border-radius: 12px 12px 0 0;\n  font-weight: 600 !important;\n  font-size: 0.95rem !important;\n}\n.pd-tabs[_ngcontent-%COMP%]     .ant-tabs-tab.ant-tabs-tab-active {\n  background: #f1f5f9;\n}\n.pd-tabs[_ngcontent-%COMP%]     .ant-tabs-tab .ant-tabs-tab-btn {\n  font-weight: 700;\n  color: #475569 !important;\n}\n.pd-tabs[_ngcontent-%COMP%]     .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {\n  color: #059669 !important;\n}\n.pd-tabs[_ngcontent-%COMP%]     .ant-tabs-ink-bar {\n  background: linear-gradient(90deg, #10b981, #0d9488) !important;\n  height: 3px !important;\n  border-radius: 2px;\n}\n\na[fragment][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.line-clamp-1[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBR0U7RUFDRSw4QkFBQTtBQUFKO0FBRUk7RUFDRSw0REFBQTtBQUFOO0FBSUU7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQUZKO0FBSUk7RUFDRSxtQkFBQTtBQUZOO0FBS0k7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBSE47QUFNSTtFQUNFLHlCQUFBO0FBSk47QUFRRTtFQUNFLCtEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVVBO0VBQ0UsZUFBQTtBQVBGOztBQVVBO0VBQ0Usb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFQRiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG59XHJcblxyXG4ucGQtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wZC10YWJzIDo6bmctZGVlcCB7XHJcbiAgLmFudC10YWJzLW5hdiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjI2LCAyMzIsIDI0MCwgMC44KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFudC10YWJzLXRhYiB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwIDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxuXHJcbiAgICAmLmFudC10YWJzLXRhYi1hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgfVxyXG5cclxuICAgIC5hbnQtdGFicy10YWItYnRuIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgY29sb3I6ICM0NzU1NjkgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAmLmFudC10YWJzLXRhYi1hY3RpdmUgLmFudC10YWJzLXRhYi1idG4ge1xyXG4gICAgICBjb2xvcjogIzA1OTY2OSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFudC10YWJzLWluay1iYXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMTBiOTgxLCAjMGQ5NDg4KSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbmFbZnJhZ21lbnRdIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saW5lLWNsYW1wLTEge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFHRTtFQUNFLDhCQUFBO0FBQUo7QUFFSTtFQUNFLDREQUFBO0FBQU47QUFJRTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0FBRko7QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFLSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUFITjtBQU1JO0VBQ0UseUJBQUE7QUFKTjtBQVFFO0VBQ0UsK0RBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBVUE7RUFDRSxlQUFBO0FBUEY7O0FBVUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQVBGO0FBQ0EsZ3VFQUFndUUiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxufVxyXG5cclxuLnBkLXBhZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGQtdGFicyA6Om5nLWRlZXAge1xyXG4gIC5hbnQtdGFicy1uYXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDIyNiwgMjMyLCAyNDAsIDAuOCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbnQtdGFicy10YWIge1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5hbnQtdGFicy10YWItYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICAgIH1cclxuXHJcbiAgICAuYW50LXRhYnMtdGFiLWJ0biB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjNDc1NTY5ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hbnQtdGFicy10YWItYWN0aXZlIC5hbnQtdGFicy10YWItYnRuIHtcclxuICAgICAgY29sb3I6ICMwNTk2NjkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hbnQtdGFicy1pbmstYmFyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzEwYjk4MSwgIzBkOTQ4OCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG5hW2ZyYWdtZW50XSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGluZS1jbGFtcC0xIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 3473
/*!**********************************************************!*\
  !*** ./src/app/services/agricultural-machine.service.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgriculturalMachineService: () => (/* binding */ AgriculturalMachineService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);




class AgriculturalMachineService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + 'agriculturalMachineProducts';
  }
  getAll(params) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.companyId !== undefined && params.companyId !== null && String(params.companyId).length > 0) {
      httpParams = httpParams.set('companyId', String(params.companyId));
    }
    if (params?.brandId !== undefined && params.brandId !== null && String(params.brandId).length > 0) {
      httpParams = httpParams.set('brandId', String(params.brandId));
    }
    if (params?.category !== undefined && params.category !== null) {
      httpParams = httpParams.set('category', String(params.category));
    }
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    return this.http.get(this.baseUrl, {
      params: httpParams
    });
  }
  getById(id) {
    return this.http.get(this.baseUrl + '/' + id);
  }
  create(dto) {
    return this.http.post(this.baseUrl, dto);
  }
  update(id, dto) {
    return this.http.put(this.baseUrl + '/' + id, dto);
  }
  remove(id) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  static {
    this.ɵfac = function AgriculturalMachineService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgriculturalMachineService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AgriculturalMachineService,
      factory: AgriculturalMachineService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 17
/*!*********************************************!*\
  !*** ./src/app/services/company.service.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyService: () => (/* binding */ CompanyService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);




class CompanyService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
  }
  getCompanies(params) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    return this.http.get(this.baseUrl + 'companies', {
      params: httpParams
    });
  }
  getCompany(id) {
    return this.http.get(this.baseUrl + 'companies/' + id);
  }
  create(dto) {
    return this.http.post(this.baseUrl + 'companies', dto);
  }
  update(id, dto) {
    return this.http.put(this.baseUrl + 'companies/' + id, dto);
  }
  remove(id) {
    return this.http.delete(this.baseUrl + 'companies/' + id);
  }
  static {
    this.ɵfac = function CompanyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CompanyService,
      factory: CompanyService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 2501
/*!***************************************************!*\
  !*** ./src/app/services/electric-bike.service.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElectricBikeService: () => (/* binding */ ElectricBikeService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4205);




class ElectricBikeService {
  constructor(http) {
    this.http = http;
    this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl + 'electricBikeProducts';
  }
  getAll(params) {
    let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.companyId !== undefined && params.companyId !== null && String(params.companyId).length > 0) {
      httpParams = httpParams.set('companyId', String(params.companyId));
    }
    if (params?.brandId !== undefined && params.brandId !== null && String(params.brandId).length > 0) {
      httpParams = httpParams.set('brandId', String(params.brandId));
    }
    if (params?.category !== undefined && params.category !== null) {
      httpParams = httpParams.set('category', String(params.category));
    }
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    return this.http.get(this.baseUrl, {
      params: httpParams
    });
  }
  getById(id) {
    return this.http.get(this.baseUrl + '/' + id);
  }
  create(dto) {
    return this.http.post(this.baseUrl, dto);
  }
  update(id, dto) {
    return this.http.put(this.baseUrl + '/' + id, dto);
  }
  remove(id) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
  static {
    this.ɵfac = function ElectricBikeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ElectricBikeService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ElectricBikeService,
      factory: ElectricBikeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 9381
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/button */ 6104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2481);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 6902);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 9741);






class HeaderComponent {
  static {
    this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["cm-header"]],
      decls: 14,
      vars: 0,
      consts: [[1, "sticky", "top-0", "z-40", "border-b", "border-slate-200/70", "bg-white/90", "shadow-sm", "backdrop-blur"], [1, "mx-auto", "flex", "max-w-7xl", "items-center", "justify-between", "gap-4", "px-4", "py-3", "md:px-6", "lg:px-8"], ["routerLink", "/", 1, "pointer-events-auto", "flex", "cursor-pointer", "items-center", "gap-2"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-2xl", "bg-gradient-to-br", "from-emerald-600", "via-teal-600", "to-sky-700", "shadow-md"], [1, "fa", "fa-leaf", "text-white"], [1, "hidden", "sm:block"], [1, "text-base", "font-black", "leading-none", "tracking-tight", "text-slate-900"], [1, "text-[10px]", "font-bold", "uppercase", "tracking-[0.25em]", "text-slate-500"], [1, "flex", "items-center", "gap-2", "sm:gap-3"], ["type", "button", "onclick", "window.location.href='tel:19001234'", "nz-button", "", "nzType", "default", 1, "!hidden", "sm:!inline-flex", "!rounded-full", "!text-sm", "!font-semibold", "flex", "items-center"], [1, "fa", "fa-phone", "text-emerald-600", "mr-2"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " EBike & Agri ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Official Store ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Hotline ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonModule, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_1__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_3__["ɵNzTransitionPatchDirective"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_4__.NzWaveDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 8452
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCardComponent: () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/img-fallback.directive */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2481);






function ProductCardComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.product.chip1, " ");
  }
}
function ProductCardComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.product.chip2, " ");
  }
}
function ProductCardComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.product.chip3, " ");
  }
}
class ProductCardComponent {
  constructor() {
    this.accentClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.product.kind === 'bike' ? 'border-slate-200 shadow-sky-500/10 hover:shadow-sky-500/20' : 'border-amber-200/60 shadow-amber-500/10 hover:shadow-amber-500/20';
    }, ...(ngDevMode ? [{
      debugName: "accentClass"
    }] : []));
    this.badgeClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.product.kind === 'bike' ? 'bg-sky-100/95 text-sky-700' : 'bg-amber-100/95 text-amber-800';
    }, ...(ngDevMode ? [{
      debugName: "badgeClass"
    }] : []));
    this.priceClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return this.product.kind === 'bike' ? 'text-emerald-600' : 'text-amber-600';
    }, ...(ngDevMode ? [{
      debugName: "priceClass"
    }] : []));
    this.detailUrl = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      return ['/product-detail', this.product.kind, this.product.id];
    }, ...(ngDevMode ? [{
      debugName: "detailUrl"
    }] : []));
  }
  formatCurrency(n) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0
    }).format(n);
  }
  static {
    this.ɵfac = function ProductCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ProductCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ProductCardComponent,
      selectors: [["app-product-card"]],
      inputs: {
        product: "product"
      },
      decls: 27,
      vars: 16,
      consts: [[1, "group", "flex", "h-full", "flex-col", "overflow-hidden", "rounded-2xl", "border", "bg-white", "shadow-sm", "transition-all", "duration-300", "hover:-translate-y-1.5", "hover:shadow-xl", 3, "ngClass"], [1, "flex", "h-full", "flex-col", 3, "routerLink"], [1, "relative", "overflow-hidden", "bg-slate-50"], [1, "aspect-[4/3]"], [1, "h-full", "w-full", "object-cover", "transition", "duration-700", "group-hover:scale-105", 3, "src", "alt"], [1, "absolute", "left-2.5", "top-2.5", "rounded-full", "px-2.5", "py-0.5", "text-[10px]", "font-bold", "uppercase", "tracking-wider", "shadow-sm", "backdrop-blur", 3, "ngClass"], [1, "flex", "flex-1", "flex-col", "gap-2", "p-4"], [1, "line-clamp-1", "text-[11px]", "font-semibold", "uppercase", "tracking-wider", "text-slate-500"], [1, "line-clamp-2", "min-h-[2.5rem]", "text-base", "font-bold", "leading-snug", "text-slate-900", "group-hover:text-emerald-700"], [1, "line-clamp-2", "min-h-[2rem]", "text-xs", "text-slate-600"], [1, "min-h-[1.75rem]", "flex", "flex-wrap", "gap-1"], ["class", "h-[19px] overflow-hidden rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-700 ring-1 ring-slate-100", 4, "ngIf"], [1, "mt-auto", "flex", "flex-col", "gap-2", "border-t", "border-slate-100", "pt-3"], [1, "flex", "items-end", "justify-between"], [1, "text-[10px]", "font-semibold", "uppercase", "tracking-wider", "text-slate-400"], [1, "text-xl", "font-black", "leading-tight", 3, "ngClass"], [1, "line-clamp-1", "text-[11px]", "text-slate-400"], [1, "h-[19px]", "overflow-hidden", "rounded-full", "bg-slate-50", "px-2", "py-0.5", "text-[10px]", "font-semibold", "text-slate-700", "ring-1", "ring-slate-100"]],
      template: function ProductCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "a", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ProductCardComponent_span_15_Template, 2, 1, "span", 11)(16, ProductCardComponent_span_16_Template, 2, 1, "span", 11)(17, ProductCardComponent_span_17_Template, 2, 1, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div")(21, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Gi\u00E1 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.accentClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", ctx.detailUrl());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.product.pictureUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.badgeClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.product.categoryName, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.product.brandName, " \u00B7 ", ctx.product.model, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.product.name, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.product.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.chip1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.chip2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.chip3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.priceClass());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.formatCurrency(ctx.product.price), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.product.companyName, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _directives_img_fallback_directive__WEBPACK_IMPORTED_MODULE_3__.ImgFallbackDirective],
      encapsulation: 2
    });
  }
}

/***/ },

/***/ 9650
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/img-fallback.directive.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImgFallbackDirective: () => (/* binding */ ImgFallbackDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2481);

class ImgFallbackDirective {
  constructor(el) {
    this.el = el;
    this.fallbackSrc = 'assets/images/img-ph.jpg';
    this.isFallbackActive = false;
  }
  ngOnInit() {
    this.checkAndApplyFallback();
  }
  ngOnChanges(changes) {
    if (changes['src']) {
      this.isFallbackActive = false;
      this.checkAndApplyFallback();
    }
  }
  onError() {
    this.applyFallback();
  }
  checkAndApplyFallback() {
    const currentSrc = this.src ?? this.el.nativeElement.getAttribute('src') ?? null;
    if (currentSrc === null || currentSrc === undefined || currentSrc === '' || currentSrc.trim() === '') {
      this.applyFallback();
      return;
    }
    const resolvedSrc = this.resolveImageUrl(currentSrc);
    if (resolvedSrc && this.el.nativeElement.src !== resolvedSrc) {
      this.el.nativeElement.src = resolvedSrc;
    }
  }
  resolveImageUrl(value) {
    try {
      const parsed = new URL(value, window.location.origin);
      if (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1' || parsed.hostname === '::1') {
        return `${window.location.origin}${parsed.pathname}${parsed.search}${parsed.hash}`;
      }
      return parsed.toString();
    } catch {
      return value;
    }
  }
  applyFallback() {
    if (this.isFallbackActive) return;
    this.isFallbackActive = true;
    this.el.nativeElement.src = this.fallbackSrc;
  }
  static {
    this.ɵfac = function ImgFallbackDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImgFallbackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ImgFallbackDirective,
      selectors: [["img"]],
      hostBindings: function ImgFallbackDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImgFallbackDirective_error_HostBindingHandler() {
            return ctx.onError();
          });
        }
      },
      inputs: {
        src: "src"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
  }
}

/***/ },

/***/ 5312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiUrl: '/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4205);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 2190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 4487);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3855);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/config */ 4300);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 9840);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _app_core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app/core/interceptors/error.interceptor */ 9446);
/* harmony import */ var _app_core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app/core/interceptors/loading.interceptor */ 5196);
/* harmony import */ var _app_core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app/core/interceptors/jwt.interceptor */ 8517);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./environments/environment */ 5312);















if (_environments_environment__WEBPACK_IMPORTED_MODULE_15__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.enableProdMode)();
}
(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_10__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_11__.routes), (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrModule.forRoot()), (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.withInterceptorsFromDi)()), (0,ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__.provideNzI18n)(ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_9__.vi_VN), (0,ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__.provideNzConfig)({
    message: {
      nzDuration: 3000,
      nzAnimate: true
    },
    notification: {
      nzDuration: 4000
    }
  }), {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: _app_core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_12__.ErrorInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: _app_core_interceptors_loading_interceptor__WEBPACK_IMPORTED_MODULE_13__.LoadingInterceptor,
    multi: true
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
    useClass: _app_core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_14__.JwtInterceptor,
    multi: true
  }]
}).catch(err => console.error(err));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.dd502bba97a4bb42.js.map