import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * Thanh tiêu đề trang quản trị: tiêu đề bên trái, nút thao tác bên phải.
 * Dùng chung cho mọi trang admin để layout đồng nhất.
 */
@Component({
  selector: 'app-admin-page-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  template: `
    <div
      class="admin-page-header flex flex-col border-b border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5"
    >
      <div class="min-w-0 flex-1">
        <h1
          class="truncate text-2xl font-extrabold leading-10 tracking-tight text-slate-900 md:text-3xl"
        >
          {{ title }}
        </h1>
        <p *ngIf="subtitle" class="m-0 mt-0.5 text-sm text-slate-500">
          {{ subtitle }}
        </p>
      </div>

      <div
        class="mt-3 flex flex-wrap items-center justify-start gap-2 sm:mt-0 sm:justify-end"
      >
        <ng-content></ng-content>
        <button
          *ngIf="showRefresh"
          mat-icon-button
          type="button"
          matTooltip="Tải lại dữ liệu"
          (click)="refresh.emit()"
        >
          <mat-icon class="text-slate-500" [class.animate-spin]="loading" svgIcon="mini:refresh"></mat-icon>
        </button>
      </div>
    </div>
  `,
})
export class AdminPageHeaderComponent {
  @Input({ required: true }) title = '';
  @Input() subtitle?: string;
  @Input() loading = false;
  @Input() showRefresh = true;
  @Output() refresh = new EventEmitter<void>();
}
