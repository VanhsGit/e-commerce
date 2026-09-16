import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { EntityImageService } from '../../services/entity-image.service';
import { EntityImage } from '../../shared/models/entity-image';

@Component({
  selector: 'app-admin-media-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule, NzEmptyModule, NzInputModule, NzPageHeaderModule, NzSpinModule],
  templateUrl: './admin-media-page.component.html',
})
export class AdminMediaPageComponent implements OnInit {
  private readonly service = inject(EntityImageService);
  private readonly message = inject(NzMessageService);
  images: EntityImage[] = [];
  search = '';
  selectedFile: File | null = null;
  loading = false;
  uploading = false;

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.service.list(this.search).pipe(finalize(() => (this.loading = false))).subscribe({
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
    this.service.upload(this.selectedFile).pipe(finalize(() => (this.uploading = false))).subscribe({
      next: () => {
        this.selectedFile = null;
        this.message.success('Đã lưu ảnh xuống máy chủ');
        this.load();
      },
      error: (error) => this.message.error(this.errorMessage(error, 'Tải ảnh thất bại')),
    });
  }

  remove(image: EntityImage): void {
    if (!window.confirm(`Xóa ảnh ${image.originalFileName}?`)) return;
    this.service.remove(image.id).subscribe({
      next: () => {
        this.message.success('Đã xóa ảnh khỏi máy chủ');
        this.load();
      },
      error: (error) => this.message.error(this.errorMessage(error, 'Không thể xóa ảnh')),
    });
  }

  async copyUrl(image: EntityImage): Promise<void> {
    await navigator.clipboard.writeText(image.url);
    this.message.success('Đã sao chép đường dẫn ảnh');
  }

  private errorMessage(error: unknown, fallback: string): string {
    const value = error as { error?: string | { message?: string } };
    return typeof value?.error === 'string' ? value.error : value?.error?.message || fallback;
  }
}
