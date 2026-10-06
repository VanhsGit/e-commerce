import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { SILENT_HTTP_ERRORS } from './silent-errors.context';
import { REQUEST_TIMEOUT_STATUS } from './request-timeout';

/** Lấy thân lỗi dạng object một cách an toàn (error.error có thể null hoặc là chuỗi). */
function errorBody(error: HttpErrorResponse): { message?: string; statusCode?: number | string; errors?: unknown } {
  const body = error?.error;
  return body && typeof body === 'object' ? body : {};
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Request dò tìm tự xử lý lỗi của mình, không toast / không chuyển trang.
    if (request.context.get(SILENT_HTTP_ERRORS)) return next.handle(request);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if(error){
          const body = errorBody(error);

          if(error.status === 400){
            if(body.errors){
              return throwError(() => body);
            }
            this.toastr.error(body.message ?? 'Yêu cầu không hợp lệ', body.statusCode?.toString());
          }

          if(error.status === 401){
            this.toastr.error(body.message ?? 'Bạn cần đăng nhập để tiếp tục', body.statusCode?.toString());
          }
          if(error.status === 403){
            this.toastr.error('Bạn không có quyền thực hiện thao tác này');
          }
          if(error.status === REQUEST_TIMEOUT_STATUS){
            this.toastr.error(body.message ?? 'Máy chủ không phản hồi. Vui lòng thử lại.');
          }
          if(error.status === 404 && this.shouldRedirectNotFound()){
            this.router.navigateByUrl('/not-found');
          }
          if(error.status === 500){
            const navigationExtras: NavigationExtras = {state: {error: error.error}};
            this.router.navigateByUrl('/server-error', navigationExtras);
          }
        }

        return throwError(() => error);
      })
    );
  }

  /**
   * Chỉ chuyển sang /not-found ở khu vực công khai và khi không có điều hướng nào đang chạy.
   * Trang admin tự xử lý lỗi 404 của mình; điều hướng từ interceptor sẽ hủy điều hướng của guard
   * đang chờ và làm route admin không bao giờ được kích hoạt.
   */
  private shouldRedirectNotFound(): boolean {
    if (this.router.getCurrentNavigation()) return false;
    const url = this.router.url ?? '';
    return !url.startsWith('/admin');
  }
}
