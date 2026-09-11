import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EntityImage, EntityType } from '../../../shared/models/entity-image';
import { EntityImageService } from '../../../services/entity-image.service';

@Component({
  selector: 'app-entity-image-manager',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzInputModule],
  templateUrl: './entity-image-manager.component.html',
})
export class EntityImageManagerComponent implements OnChanges {
  @Input({ required: true }) entityType!: EntityType;
  @Input({ required: true }) entityId!: string;
  private readonly service = inject(EntityImageService);
  private readonly message = inject(NzMessageService);
  images: EntityImage[] = [];
  imageType = 'gallery';
  sortOrder = 0;
  file: File | null = null;
  uploading = false;

  ngOnChanges(): void { if (this.entityType && this.entityId) this.load(); }
  load(): void { this.service.list(this.entityType, this.entityId).subscribe({ next: value => this.images = value, error: () => this.message.error('Không tải được ảnh') }); }
  pick(event: Event): void { this.file = (event.target as HTMLInputElement).files?.[0] ?? null; }
  upload(): void {
    if (!this.file) return;
    this.uploading = true;
    this.service.upload(this.entityType, this.entityId, this.imageType, this.sortOrder, this.file).subscribe({
      next: () => { this.file = null; this.message.success('Đã tải ảnh'); this.load(); },
      error: error => { this.uploading = false; this.message.error(error?.error || 'Tải ảnh thất bại'); },
      complete: () => this.uploading = false,
    });
  }
  save(image: EntityImage): void { this.service.update(image).subscribe({ next: () => this.message.success('Đã cập nhật ảnh'), error: () => this.message.error('Cập nhật thất bại') }); }
  remove(image: EntityImage): void {
    if (!window.confirm(`Xóa vĩnh viễn ảnh ${image.originalFileName}?`)) return;
    this.service.remove(image.id).subscribe({ next: () => { this.message.success('Đã xóa ảnh'); this.load(); }, error: () => this.message.error('Xóa ảnh thất bại') });
  }
}
