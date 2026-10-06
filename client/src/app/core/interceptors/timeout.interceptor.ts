import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, TimeoutError, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import {
  REQUEST_TIMEOUT_MS,
  REQUEST_TIMEOUT_STATUS,
} from './request-timeout';

/**
 * Giới hạn thời gian chờ của mọi request (mặc định 10s, xem REQUEST_TIMEOUT_MS).
 * Khi backend treo, request bị hủy và trả về lỗi 504 thay vì để màn hình loading
 * chạy vô hạn. Upload file tự đặt timeout = 0 để không bị cắt giữa chừng.
 */
@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const ms = request.context.get(REQUEST_TIMEOUT_MS);
    if (!ms || ms <= 0 || request.body instanceof FormData) {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      timeout({ each: ms }),
      catchError((error: unknown) =>
        throwError(() =>
          error instanceof TimeoutError ? this.toHttpError(request, ms) : error,
        ),
      ),
    );
  }

  private toHttpError(
    request: HttpRequest<unknown>,
    ms: number,
  ): HttpErrorResponse {
    const seconds = Math.round(ms / 1000);
    return new HttpErrorResponse({
      url: request.urlWithParams,
      status: REQUEST_TIMEOUT_STATUS,
      statusText: 'Gateway Timeout',
      error: {
        statusCode: REQUEST_TIMEOUT_STATUS,
        message: `Máy chủ không phản hồi sau ${seconds}s. Vui lòng thử lại.`,
      },
    });
  }
}
