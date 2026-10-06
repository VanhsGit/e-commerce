import {
  HTTP_INTERCEPTORS,
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { BusyService } from '../Services/busy.service';
import { ErrorInterceptor } from './error.interceptor';
import { JwtInterceptor } from './jwt.interceptor';
import { LoadingInterceptor } from './loading.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/**
 * Bộ đếm của BusyService điều khiển lớp loading toàn trang. Mỗi busy() phải có
 * đúng một idle(), kể cả khi request lỗi, quá thời gian chờ hay bị hủy - nếu
 * lệch, lớp loading sẽ nằm lại trên màn hình dù mọi API đã xong.
 */
describe('LoadingInterceptor + BusyService (đếm request đang chạy)', () => {
  let http: HttpClient;
  let backend: HttpTestingController;
  let busy: BusyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        { provide: NgxSpinnerService, useValue: { show: () => Promise.resolve(true), hide: () => Promise.resolve(true) } },
        { provide: ToastrService, useValue: { error: () => {}, success: () => {} } },
        { provide: Router, useValue: { navigateByUrl: () => Promise.resolve(true), getCurrentNavigation: () => null, url: '/admin/agricultural-machines' } },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      ],
    });
    http = TestBed.inject(HttpClient);
    backend = TestBed.inject(HttpTestingController);
    busy = TestBed.inject(BusyService);
  });

  it('về 0 sau khi cả 4 request của trang ngành hàng trả về', fakeAsync(() => {
    const urls = ['/api/agriculturalMachineProducts', '/api/companies', '/api/brands', '/api/productCategories'];
    urls.forEach((url) => http.get(url).subscribe({ next: () => {}, error: () => {} }));
    expect(busy.busyRequestCount).toBe(4);

    urls.forEach((url) => backend.expectOne(url).flush([]));
    tick(50);
    expect(busy.busyRequestCount).toBe(0);
    expect(busy.isBusy()).toBeFalse();
  }));

  it('về 0 khi một request lỗi 500', fakeAsync(() => {
    http.get('/api/companies').subscribe({ next: () => {}, error: () => {} });
    backend.expectOne('/api/companies').flush('boom', { status: 500, statusText: 'Server Error' });
    tick(50);
    expect(busy.busyRequestCount).toBe(0);
  }));

  it('về 0 khi một request quá thời gian chờ 10s', fakeAsync(() => {
    http.get('/api/companies').subscribe({ next: () => {}, error: () => {} });
    backend.expectOne('/api/companies');
    expect(busy.busyRequestCount).toBe(1);

    tick(10_000);
    expect(busy.busyRequestCount).toBe(0);
    expect(busy.isBusy()).toBeFalse();
  }));

  it('về 0 khi người dùng rời trang và request bị hủy', fakeAsync(() => {
    const sub = http.get('/api/companies').subscribe({ next: () => {}, error: () => {} });
    backend.expectOne('/api/companies');
    sub.unsubscribe();
    tick(50);
    expect(busy.busyRequestCount).toBe(0);
  }));
});
