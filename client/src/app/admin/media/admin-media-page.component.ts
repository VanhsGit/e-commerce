import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';
import { EntityImageService } from '../../services/entity-image.service';
import { EntityImage } from '../../shared/models/entity-image';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { AdminEmptyStateComponent } from '../shared/empty-state/admin-empty-state.component';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';

@Component({
  selector: 'app-admin-media-page',
  standalone: true,
  imports: [
    AdminEmptyStateComponent,
    AdminPageHeaderComponent,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    ImgFallbackDirective,
  ],
  templateUrl: './admin-media-page.component.html',
})
export class AdminMediaPageComponent implements OnInit {
  private readonly service = inject(EntityImageService);
  private readonly message = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  images: EntityImage[] = [];
  search = '';
  selectedFile: File | null = null;
  loading = false;
  uploading = false;

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.service
      .list(this.search)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (images) => (this.images = images),
        error: () => this.message.error('Không tải được kho ảnh'),
      });
  }

  clearSearch(): void {
    this.search = '';
    this.load();
  }

  pick(event: Event): void {
    this.selectedFile = (event.target as HTMLInputElement).files?.[0] ?? null;
  }

  upload(): void {
    if (!this.selectedFile || this.uploading) return;
    this.uploading = true;
    this.service
      .upload(this.selectedFile)
      .pipe(finalize(() => (this.uploading = false)))
      .subscribe({
        next: () => {
          this.selectedFile = null;
          this.message.success('Đã lưu ảnh xuống máy chủ');
          this.load();
        },
        error: (error) =>
          this.message.error(this.errorMessage(error, 'Tải ảnh thất bại')),
      });
  }

  remove(image: EntityImage): void {
    this.confirm
      .delete(`Xóa ảnh ${image.originalFileName}?`)
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.service.remove(image.id).subscribe({
          next: () => {
            this.message.success('Đã xóa ảnh khỏi máy chủ');
            this.load();
          },
          error: (error) =>
            this.message.error(this.errorMessage(error, 'Không thể xóa ảnh')),
        });
      });
  }

  async copyUrl(image: EntityImage): Promise<void> {
    await navigator.clipboard.writeText(image.url);
    this.message.success('Đã sao chép đường dẫn ảnh');
  }

  private errorMessage(error: unknown, fallback: string): string {
    const value = error as { error?: string | { message?: string } };
    return typeof value?.error === 'string'
      ? value.error
      : value?.error?.message || fallback;
  }
}
