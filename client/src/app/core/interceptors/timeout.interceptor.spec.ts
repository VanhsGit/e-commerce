import { HTTP_INTERCEPTORS, HttpClient, HttpContext, HttpErrorResponse, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { REQUEST_TIMEOUT_MS, REQUEST_TIMEOUT_STATUS } from './request-timeout';
import { TimeoutInterceptor } from './timeout.interceptor';

describe('TimeoutInterceptor', () => {
  let http: HttpClient;
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
      ],
    });
    http = TestBed.inject(HttpClient);
    backend = TestBed.inject(HttpTestingController);
  });

  it('fails with 504 when the server stays silent for 10s', fakeAsync(() => {
    let error: HttpErrorResponse | undefined;
    http.get('/api/companies').subscribe({ error: (e) => (error = e) });
    backend.expectOne('/api/companies');

    tick(9_999);
    expect(error).toBeUndefined();

    tick(1);
    expect(error?.status).toBe(REQUEST_TIMEOUT_STATUS);
    expect(error?.error.message).toContain('10s');
  }));

  it('lets a response that arrives in time through untouched', fakeAsync(() => {
    let body: unknown;
    http.get('/api/companies').subscribe({ next: (value) => (body = value) });
    backend.expectOne('/api/companies').flush([{ id: 'c1' }]);

    tick(20_000);
    expect(body).toEqual([{ id: 'c1' }]);
  }));

  it('never cuts off a file upload', fakeAsync(() => {
    let error: HttpErrorResponse | undefined;
    const form = new FormData();
    form.append('file', new Blob(['x']), 'x.png');
    http.post('/api/entityImages', form).subscribe({ error: (e) => (error = e) });
    const request = backend.expectOne('/api/entityImages');

    tick(30_000);
    expect(error).toBeUndefined();
    request.flush({ id: 'img-1' });
  }));

  it('honours a per-request timeout of 0 as "no timeout"', fakeAsync(() => {
    let error: HttpErrorResponse | undefined;
    const context = new HttpContext().set(REQUEST_TIMEOUT_MS, 0);
    http.get('/api/homeContent', { context }).subscribe({ error: (e) => (error = e) });
    const request = backend.expectOne('/api/homeContent');

    tick(30_000);
    expect(error).toBeUndefined();
    request.flush({});
  }));
});
