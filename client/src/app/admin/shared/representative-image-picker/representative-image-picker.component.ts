import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { EntityImage } from '../../../shared/models/entity-image';
import { EntityImageService } from '../../../services/entity-image.service';

@Component({
  selector: 'app-representative-image-picker',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzInputModule, NzModalModule, NzSpinModule],
  templateUrl: './representative-image-picker.component.html',
})
export class RepresentativeImagePickerComponent {
  @Input() label = 'Ảnh đại diện';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  private readonly service = inject(EntityImageService);
  private readonly message = inject(NzMessageService);

  images: EntityImage[] = [];
  search = '';
  selectedFile: File | null = null;
  libraryOpen = false;
  loading = false;
  uploading = false;

  pick(event: Event): void {
    this.selectedFile = (event.target as HTMLInputElement).files?.[0] ?? null;
  }

  upload(): void {
    if (!this.selectedFile || this.uploading) return;
    this.uploading = true;
    this.service.upload(this.selectedFile).pipe(finalize(() => (this.uploading = false))).subscribe({
      next: (image) => {
        this.value = image.url;
        this.valueChange.emit(image.url);
        this.selectedFile = null;
        this.message.success('Đã tải ảnh lên máy chủ');
      },
      error: (error) => this.message.error(this.errorMessage(error, 'Tải ảnh thất bại')),
    });
  }

  openLibrary(): void {
    this.libraryOpen = true;
    this.load();
  }

  closeLibrary(): void {
    this.libraryOpen = false;
  }

  load(): void {
    this.loading = true;
    this.service.list(this.search).pipe(finalize(() => (this.loading = false))).subscribe({
      next: (images) => (this.images = images),
      error: () => this.message.error('Không tải được kho ảnh'),
    });
  }

  select(image: EntityImage): void {
    this.value = image.url;
    this.valueChange.emit(image.url);
    this.libraryOpen = false;
  }

  clear(): void {
    this.value = '';
    this.valueChange.emit('');
  }

  private errorMessage(error: unknown, fallback: string): string {
    const value = error as { error?: string | { message?: string } };
    return typeof value?.error === 'string' ? value.error : value?.error?.message || fallback;
  }
}
