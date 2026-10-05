import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';
import { EntityImageService } from '../../../services/entity-image.service';
import { NotifyService } from '../../../shared/services/notify.service';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';

@Component({
  selector: 'app-representative-image-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    ImgFallbackDirective,
  ],
  templateUrl: './representative-image-picker.component.html',
})
export class RepresentativeImagePickerComponent {
  @Input() label = 'Ảnh đại diện';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();


  private readonly service = inject(EntityImageService);
  private readonly message = inject(NotifyService);

  selectedFile: File | null = null;
  uploading = false;

  /** Chọn file là tải lên ngay - không cần bước "Tải lên" riêng. */
  pick(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    input.value = '';
    if (!file) return;
    this.selectedFile = file;
    this.upload();
  }

  upload(): void {
    if (!this.selectedFile || this.uploading) return;
    this.uploading = true;
    this.service
      .upload(this.selectedFile)
      .pipe(finalize(() => (this.uploading = false)))
      .subscribe({
        next: (image) => {
          this.value = image.url;
          this.valueChange.emit(image.url);
          this.selectedFile = null;
          this.message.success('Đã tải ảnh lên máy chủ');
        },
        error: (error) =>
          this.message.error(this.errorMessage(error, 'Tải ảnh thất bại')),
      });
  }

  clear(): void {
    this.value = '';
    this.valueChange.emit('');
  }

  private errorMessage(error: unknown, fallback: string): string {
    const value = error as { error?: string | { message?: string } };
    return typeof value?.error === 'string'
      ? value.error
      : value?.error?.message || fallback;
  }
}
