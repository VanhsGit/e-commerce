import { Component, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';

export interface ConfirmDialogData {
  title: string;
  message?: string;
  okText?: string;
  cancelText?: string;
  danger?: boolean;
}

/** Hộp thoại xác nhận bằng Material, thay cho nz-popconfirm. */
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  template: `
    <h2 mat-dialog-title class="flex items-center gap-2">
      <mat-icon [class.text-rose-600]="data.danger" [class.text-sky-600]="!data.danger" [svgIcon]="data.danger ? 'hero:warning' : 'hero:help_outline'"></mat-icon>
      {{ data.title }}
    </h2>
    <mat-dialog-content>
      <p class="m-0 text-sm text-slate-600">{{ data.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button type="button" [mat-dialog-close]="false">
        {{ data.cancelText || 'Hủy' }}
      </button>
      <button
        mat-flat-button
        type="button"
        [color]="data.danger ? 'warn' : 'primary'"
        [mat-dialog-close]="true"
      >
        {{ data.okText || 'Đồng ý' }}
      </button>
    </mat-dialog-actions>
  `,
})
export class ConfirmDialogComponent {
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent, boolean>);
}

/** Mở hộp thoại xác nhận và trả về true khi người dùng đồng ý. */
@Injectable({ providedIn: 'root' })
export class ConfirmService {
  private readonly dialog = inject(MatDialog);

  open(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog
      .open(ConfirmDialogComponent, {
        data,
        width: '420px',
        autoFocus: 'dialog',
        restoreFocus: true,
      })
      .afterClosed() as Observable<boolean>;
  }

  /** Xác nhận xóa – mặc định kiểu nguy hiểm. */
  delete(message: string, title = 'Xác nhận xóa'): Observable<boolean> {
    return this.open({
      title,
      message,
      okText: 'Xóa',
      cancelText: 'Hủy',
      danger: true,
    });
  }
}
