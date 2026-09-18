import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

/**
 * Thay cho NzMessageService: hiển thị thông báo ngắn bằng MatSnackBar.
 * Giữ nguyên API success/error/warning/info để call site không phải đổi.
 */
@Injectable({ providedIn: 'root' })
export class NotifyService {
  private readonly snackBar = inject(MatSnackBar);

  private readonly base: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  };

  success(message: string): void {
    this.show(message, 'notify-success');
  }

  error(message: string): void {
    this.show(message, 'notify-error', 5000);
  }

  warning(message: string): void {
    this.show(message, 'notify-warning', 4000);
  }

  info(message: string): void {
    this.show(message, 'notify-info');
  }

  private show(message: string, panelClass: string, duration?: number): void {
    this.snackBar.open(message, 'Đóng', {
      ...this.base,
      duration: duration ?? this.base.duration,
      panelClass: [panelClass],
    });
  }
}
