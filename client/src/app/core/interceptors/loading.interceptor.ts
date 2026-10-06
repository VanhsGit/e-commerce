import { BusyService } from './../Services/busy.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, defer } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.method === 'POST' && request.url.includes('orders')){
      return next.handle(request);
    }
    if(request.url.includes('emailexists')){
      return next.handle(request);
    }
    // defer: busy() chỉ chạy khi thực sự subscribe, và finalize luôn chạy đúng một lần
    // (hoàn tất, lỗi hoặc hủy) nên mỗi busy() đều có idle() tương ứng.
    return defer(() => {
      this.busyService.busy();
      let released = false;
      return next.handle(request).pipe(
        finalize(() => {
          if (released) return;
          released = true;
          this.busyService.idle();
        })
      );
    });
  }
}
