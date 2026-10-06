import { Injectable, computed, inject, signal } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

/**
 * Đếm số request đang chạy và điều khiển spinner toàn trang.
 * Trạng thái hiển thị luôn suy ra từ bộ đếm; chỉ gọi show/hide của ngx-spinner khi
 * trạng thái thực sự đổi, nên không thể bị lệch thứ tự show/hide (mỗi lệnh của ngx-spinner
 * bị hoãn 10ms bằng setTimeout).
 */
@Injectable({
  providedIn: 'root',
})
export class BusyService {
  private readonly spinnerService = inject(NgxSpinnerService);

  private readonly count = signal(0);
  /** true khi còn ít nhất một request đang chạy. */
  readonly isBusy = computed(() => this.count() > 0);

  /** Giữ API cũ: số request đang chạy. */
  get busyRequestCount(): number {
    return this.count();
  }

  /** Trạng thái spinner đã yêu cầu ngx-spinner (khác thì mới gọi show/hide). */
  private spinnerVisible = false;

  busy(): void {
    this.count.update((n) => n + 1);
    this.sync();
  }

  idle(): void {
    this.count.update((n) => Math.max(0, n - 1));
    this.sync();
  }

  /** Đưa spinner về đúng với bộ đếm hiện tại. */
  private sync(): void {
    const shouldShow = this.isBusy();
    if (shouldShow === this.spinnerVisible) return;
    this.spinnerVisible = shouldShow;
    if (shouldShow) {
      void this.spinnerService.show();
    } else {
      void this.spinnerService.hide();
    }
  }
}
