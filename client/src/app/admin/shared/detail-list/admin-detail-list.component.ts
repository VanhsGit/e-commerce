import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

/**
 * Danh sách nhãn/giá trị dạng lưới, thay cho nz-descriptions.
 * Dùng kèm <app-admin-detail-row> cho từng dòng.
 */
@Component({
  selector: 'app-admin-detail-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <dl
      class="grid gap-x-6 gap-y-3"
      [class.sm:grid-cols-2]="columns === 2"
      [class.sm:grid-cols-3]="columns === 3"
    >
      <ng-content></ng-content>
    </dl>
  `,
})
export class AdminDetailListComponent {
  @Input() columns: 1 | 2 | 3 = 2;
}

/** Một dòng nhãn/giá trị bên trong <app-admin-detail-list>. */
@Component({
  selector: 'app-admin-detail-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class.sm:col-span-2]="span === 2" [class.sm:col-span-3]="span === 3">
      <dt class="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {{ label }}
      </dt>
      <dd class="m-0 mt-1 break-words text-sm text-slate-800">
        <ng-content></ng-content>
      </dd>
    </div>
  `,
})
export class AdminDetailRowComponent {
  @Input({ required: true }) label = '';
  @Input() span: 1 | 2 | 3 = 1;
}
