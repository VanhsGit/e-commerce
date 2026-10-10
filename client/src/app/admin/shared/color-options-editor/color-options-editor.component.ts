import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductColorOption } from '../../../shared/models/product-category';
import { ColorImagesPickerComponent } from './color-images-picker.component';
import { colorGallery } from '../../../shared/utils/product-images';

/** Mỗi màu có tên và nhiều ảnh; giữ mã hex cũ trong dữ liệu, không hiện ô nhập. */
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
    ColorImagesPickerComponent,
  ],
  template: `
    <div class="space-y-3">
      <div
        *ngFor="let row of rows; let i = index; trackBy: trackByColor"
        data-color-row
        class="grid items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 grid-cols-[minmax(0,1fr)_auto]"
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

        <button
          mat-icon-button
          type="button"
          class="admin-action-btn delete mt-1"
          matTooltip="Xóa màu"
          aria-label="Xóa màu"
          (click)="remove(i)"
        >
          <mat-icon svgIcon="mini:delete"></mat-icon>
        </button>
        <app-color-images-picker class="col-span-2"
          [value]="row.imageUrls || []"
          (valueChange)="setImages(row, $event)"
          (uploadingChange)="setUploading(row, $event)"
        ></app-color-images-picker>
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
  @Output() uploadingChange = new EventEmitter<boolean>();

  rows: ProductColorOption[] = [];
  private lastEmitted: ProductColorOption[] | null = null;
  private readonly uploadingRows = new Set<ProductColorOption>();

  ngOnChanges(changes: SimpleChanges): void {
    // Chỉ dựng lại khi giá trị đến từ bên ngoài, tránh mất focus khi đang gõ
    if (changes['value'] && this.value !== this.lastEmitted) {
      this.rows = (this.value ?? []).map((c) => ({
        name: c.name ?? '',
        hexCode: c.hexCode ?? '',
        imageUrl: colorGallery(c)[0] ?? '',
        imageUrls: colorGallery(c),
      }));
    }
  }

  trackByColor(_index: number, row: ProductColorOption): ProductColorOption {
    return row;
  }

  add(): void {
    this.rows.push({ name: '', hexCode: '', imageUrl: '', imageUrls: [] });
    this.emit();
  }

  remove(index: number): void {
    this.setUploading(this.rows[index], false);
    this.rows.splice(index, 1);
    this.emit();
  }

  setImages(row: ProductColorOption, urls: string[]): void {
    row.imageUrls = [...urls];
    row.imageUrl = urls[0] ?? '';
    this.emit();
  }

  setUploading(row: ProductColorOption, uploading: boolean): void {
    if (uploading) this.uploadingRows.add(row);
    else this.uploadingRows.delete(row);
    this.uploadingChange.emit(this.uploadingRows.size > 0);
  }

  /** Phát ra bản sao gồm cả dòng trống; mapper sẽ lọc dòng trống khi gửi. */
  emit(): void {
    this.lastEmitted = this.rows.map((r) => ({ ...r, imageUrls: [...(r.imageUrls ?? [])] }));
    this.valueChange.emit(this.lastEmitted);
  }
}
