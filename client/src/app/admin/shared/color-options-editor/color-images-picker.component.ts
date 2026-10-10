import { CommonModule } from '@angular/common';
import { Component, DestroyRef, EventEmitter, Input, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EMPTY, catchError, concatMap, finalize, from } from 'rxjs';
import { EntityImageService } from '../../../services/entity-image.service';
import { NotifyService } from '../../../shared/services/notify.service';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';

@Component({
  selector: 'app-color-images-picker',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, ImgFallbackDirective],
  template: `
    <div class="space-y-3">
      <p class="m-0 text-sm font-medium text-slate-700">Ảnh màu ({{ value.length }})</p>
      <div *ngIf="value.length" class="flex flex-wrap gap-3">
        <div *ngFor="let url of value; let i = index" class="w-28 space-y-1" data-color-image>
          <img [src]="url" [alt]="'Ảnh màu ' + (i + 1)" class="h-28 w-28 rounded border border-slate-200 object-cover" />
          <div class="flex items-center justify-between gap-1">
            <span class="text-xs text-slate-500">{{ i === 0 ? 'Ảnh đầu tiên' : 'Ảnh ' + (i + 1) }}</span>
            <button mat-icon-button type="button" class="admin-action-btn delete"
              [disabled]="uploading" [attr.aria-label]="'Bỏ ảnh ' + (i + 1)" (click)="remove(i)">
              <mat-icon svgIcon="mini:delete"></mat-icon>
            </button>
          </div>
        </div>
      </div>
      <p *ngIf="!value.length" class="m-0 text-sm text-slate-400">Chưa có ảnh cho màu này.</p>
      <button mat-stroked-button type="button" [disabled]="uploading" (click)="fileInput.click()">
        <mat-spinner *ngIf="uploading" diameter="18" class="mr-2"></mat-spinner>
        <mat-icon *ngIf="!uploading" svgIcon="mini:cloud_upload"></mat-icon>
        {{ uploading ? 'Đang tải ảnh...' : 'Thêm ảnh' }}
      </button>
      <input #fileInput type="file" class="hidden" multiple accept="image/jpeg,image/png,image/webp,image/gif" (change)="pick($event)" />
      <p class="m-0 text-xs text-slate-500">Có thể chọn nhiều ảnh cùng lúc. Ảnh đầu tiên sẽ hiển thị khi chọn màu.</p>
    </div>
  `,
})
export class ColorImagesPickerComponent {
  @Input() value: string[] = [];
  @Output() valueChange = new EventEmitter<string[]>();
  @Output() uploadingChange = new EventEmitter<boolean>();
  private readonly service = inject(EntityImageService);
  private readonly message = inject(NotifyService);
  private readonly destroyRef = inject(DestroyRef);
  uploading = false;

  pick(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = '';
    if (!files.length || this.uploading) return;
    this.uploading = true;
    this.uploadingChange.emit(true);
    let uploaded = 0;
    from(files).pipe(
      concatMap((file) => this.service.upload(file).pipe(
        catchError((error: { error?: string | { message?: string } }) => {
          const detail = typeof error?.error === 'string' ? error.error : error?.error?.message;
          this.message.error(detail || 'Không tải được ảnh ' + file.name);
          return EMPTY;
        }),
      )),
      takeUntilDestroyed(this.destroyRef),
      finalize(() => {
        this.uploading = false;
        this.uploadingChange.emit(false);
      }),
    ).subscribe({
      next: (image) => {
        this.value = [...this.value, image.url];
        this.valueChange.emit([...this.value]);
        uploaded++;
      },
      complete: () => {
        if (uploaded && !this.destroyRef.destroyed) this.message.success('Đã tải ' + uploaded + ' ảnh lên máy chủ');
      },
    });
  }

  remove(index: number): void {
    if (this.uploading) return;
    this.value = this.value.filter((_, i) => i !== index);
    this.valueChange.emit([...this.value]);
  }
}
