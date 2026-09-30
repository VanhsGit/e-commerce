import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductColorOption } from '../../../shared/models/product-category';
import { RepresentativeImagePickerComponent } from '../representative-image-picker/representative-image-picker.component';
import { isValidHex } from '../color-options';

/** Editor danh sách màu: thêm/xóa dòng, tên màu, mã hex (có ô chọn màu + swatch) và ảnh biến thể. */
@Component({
  selector: 'app-color-options-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    RepresentativeImagePickerComponent,
  ],
  template: `
    <div class="space-y-3">
      <div
        *ngFor="let row of rows; let i = index; trackBy: trackByIndex"
        data-color-row
        class="grid items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 md:grid-cols-[1fr_1fr_200px_auto]"
      >
        <mat-form-field appearance="outline" subscriptSizing="dynamic">
          <mat-label>Tên màu</mat-label>
          <input
            matInput
            [name]="'color-name-' + i"
            [ngModel]="row.name"
            (ngModelChange)="row.name = $event; emit()"
            placeholder="VD: Đỏ đun"
          />
        </mat-form-field>

        <div class="flex items-start gap-2">
          <mat-form-field appearance="outline" subscriptSizing="dynamic" class="flex-1">
            <mat-label>Mã màu (hex)</mat-label>
            <input
              matInput
              [name]="'color-hex-' + i"
              [ngModel]="row.hexCode"
              (ngModelChange)="row.hexCode = $event; emit()"
              placeholder="#b91c1c"
            />
            <span
              matSuffix
              data-color-swatch
              class="mr-2 inline-block h-5 w-5 rounded-full border border-slate-300"
              [style.background]="isValidHex(row.hexCode) ? row.hexCode.trim() : 'transparent'"
            ></span>
            <mat-hint *ngIf="row.hexCode && !isValidHex(row.hexCode)" class="!text-red-600">
              Mã màu không hợp lệ
            </mat-hint>
          </mat-form-field>
          <input
            type="color"
            class="mt-2 h-9 w-10 shrink-0 cursor-pointer rounded border border-slate-300 bg-white p-0.5"
            [name]="'color-pick-' + i"
            [value]="isValidHex(row.hexCode) ? normalizeHex(row.hexCode) : '#ffffff'"
            (input)="pickColor(row, $event)"
            aria-label="Chọn màu"
          />
        </div>

        <app-representative-image-picker
          label="Ảnh màu"
          [value]="row.imageUrl"
          (valueChange)="row.imageUrl = $event; emit()"
        ></app-representative-image-picker>

        <button
          mat-icon-button
          type="button"
          class="admin-action-btn delete mt-1"
          matTooltip="Xóa màu"
          (click)="remove(i)"
        >
          <mat-icon svgIcon="mini:delete"></mat-icon>
        </button>
      </div>

      <p *ngIf="rows.length === 0" class="m-0 text-sm text-slate-400">Chưa có màu nào.</p>

      <button mat-stroked-button type="button" (click)="add()">
        <mat-icon svgIcon="mini:add"></mat-icon>Thêm màu
      </button>
    </div>
  `,
})
export class ColorOptionsEditorComponent implements OnChanges {
  @Input() value: ProductColorOption[] = [];
  @Output() valueChange = new EventEmitter<ProductColorOption[]>();

  rows: ProductColorOption[] = [];
  private lastEmitted: ProductColorOption[] | null = null;
  readonly isValidHex = isValidHex;

  ngOnChanges(changes: SimpleChanges): void {
    // Chỉ dựng lại khi giá trị đến từ bên ngoài, tránh mất focus khi đang gõ
    if (changes['value'] && this.value !== this.lastEmitted) {
      this.rows = (this.value ?? []).map((c) => ({
        name: c.name ?? '',
        hexCode: c.hexCode ?? '',
        imageUrl: c.imageUrl ?? '',
      }));
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  add(): void {
    this.rows.push({ name: '', hexCode: '', imageUrl: '' });
    this.emit();
  }

  remove(index: number): void {
    this.rows.splice(index, 1);
    this.emit();
  }

  normalizeHex(hex: string): string {
    const h = hex.trim();
    return h.length === 4 ? '#' + [...h.slice(1)].map((c) => c + c).join('') : h;
  }

  pickColor(row: ProductColorOption, event: Event): void {
    row.hexCode = (event.target as HTMLInputElement).value;
    this.emit();
  }

  /** Phát ra bản sao gồm cả dòng trống; mapper sẽ lọc dòng trống khi gửi. */
  emit(): void {
    this.lastEmitted = this.rows.map((r) => ({ ...r }));
    this.valueChange.emit(this.lastEmitted);
  }
}
