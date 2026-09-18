import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { finalize } from 'rxjs';
import { EntityImage } from '../../../shared/models/entity-image';
import { EntityImageService } from '../../../services/entity-image.service';
import { NotifyService } from '../../../shared/services/notify.service';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { AdminEmptyStateComponent } from '../empty-state/admin-empty-state.component';

@Component({
  selector: 'app-representative-image-picker',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    AdminEmptyStateComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './representative-image-picker.component.html',
})
export class RepresentativeImagePickerComponent {
  @Input() label = 'Ảnh đại diện';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  @ViewChild('libraryDialog') private libraryDialog!: TemplateRef<unknown>;

  private readonly service = inject(EntityImageService);
  private readonly message = inject(NotifyService);
  private readonly dialog = inject(MatDialog);
  private libraryRef?: MatDialogRef<unknown>;

  images: EntityImage[] = [];
  search = '';
  selectedFile: File | null = null;
  loading = false;
  uploading = false;

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

  openLibrary(): void {
    this.libraryRef = this.dialog.open(this.libraryDialog, {
      width: '900px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
    this.load();
  }

  closeLibrary(): void {
    this.libraryRef?.close();
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

  select(image: EntityImage): void {
    this.value = image.url;
    this.valueChange.emit(image.url);
    this.closeLibrary();
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
