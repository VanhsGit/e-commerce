import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/** Khối "không có dữ liệu" theo phong cách Material, thay cho nz-empty. */
@Component({
  selector: 'app-admin-empty-state',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="flex flex-col items-center justify-center gap-2 px-4 py-10 text-center">
      <mat-icon class="!h-12 !w-12 !text-[48px] text-slate-300" [svgIcon]="'hero:' + (icon)"></mat-icon>
      <p class="m-0 text-sm font-medium text-slate-500">{{ message }}</p>
      <p *ngIf="hint" class="m-0 text-xs text-slate-400">{{ hint }}</p>
      <ng-content></ng-content>
    </div>
  `,
})
export class AdminEmptyStateComponent {
  @Input() message = 'Chưa có dữ liệu';
  @Input() hint?: string;
  @Input() icon = 'inbox';
}
