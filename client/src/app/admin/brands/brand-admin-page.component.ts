import { CommonModule, KeyValue } from '@angular/common';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Brand, CreateBrand } from '../../shared/models/brand';
import { BrandService } from '../../services/brand.service';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import {
  AdminDetailListComponent,
  AdminDetailRowComponent,
} from '../shared/detail-list/admin-detail-list.component';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-brand-admin-page',
  standalone: true,
  imports: [
    AdminDetailListComponent,
    AdminDetailRowComponent,
    AdminPageHeaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    NzTableModule,
    MetadataEditorComponent,
    RepresentativeImagePickerComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './brand-admin-page.component.html',
})
export class BrandAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly dialog = inject(MatDialog);
  private readonly service = inject(BrandService);

  @ViewChild('formDialog') private formDialog!: TemplateRef<unknown>;
  @ViewChild('viewDialog') private viewDialog!: TemplateRef<unknown>;

  private formRef?: MatDialogRef<unknown>;
  private viewRef?: MatDialogRef<unknown>;

  readonly rows = signal<Brand[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly editing = signal<Brand | null>(null);
  readonly viewing = signal<Brand | null>(null);
  readonly metadata = signal<Record<string, string>>({});

  readonly search = signal('');
  readonly statusFilter = signal<'active' | 'inactive' | null>(null);
  readonly searchDraft = signal('');
  readonly statusDraft = signal<'active' | 'inactive' | null>(null);

  applyFilters(): void {
    this.search.set(this.searchDraft().trim());
    this.statusFilter.set(this.statusDraft() ?? null);
    const isUsedParam =
      this.statusFilter() === 'active' ? true :
      this.statusFilter() === 'inactive' ? false : null;
    this.load({ search: this.search(), isUsed: isUsedParam });
  }

  readonly form = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    logoUrl: [''],
    isUsed: [true],
  });

  ngOnInit(): void {
    this.load();
  }

  load(params?: { search?: string | null; isUsed?: boolean | null }): void {
    this.loading.set(true);
    this.service.getBrands(params).subscribe({
      next: (v) => this.rows.set(v),
      error: () => this.msg.error('Không tải được thương hiệu'),
      complete: () => this.loading.set(false),
    });
  }

  open(record?: Brand): void {
    this.editing.set(record ?? null);
    this.metadata.set({ ...(record?.metadata ?? {}) });
    this.form.reset({
      name: record?.name ?? '',
      description: record?.description ?? '',
      logoUrl: record?.logoUrl ?? '',
      isUsed: record?.isUsed !== false,
    });
    this.formRef = this.dialog.open(this.formDialog, {
      width: '820px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
    this.formRef.afterClosed().subscribe(() => this.editing.set(null));
  }

  close(): void {
    this.formRef?.close();
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const raw = this.form.getRawValue();
    const payload: CreateBrand = {
      name: raw.name!,
      description: raw.description!,
      logoUrl: raw.logoUrl!,
      metadata: this.metadata(),
      isUsed: raw.isUsed!,
    };
    this.saving.set(true);
    const req$ = this.editing()
      ? this.service.update(this.editing()!.id, payload)
      : this.service.create(payload);
    req$.subscribe({
      next: () => {
        this.msg.success(this.editing() ? 'Đã cập nhật thương hiệu' : 'Đã tạo thương hiệu');
        this.close();
        const isUsedParam =
          this.statusFilter() === 'active' ? true :
          this.statusFilter() === 'inactive' ? false : null;
        this.load({ search: this.search(), isUsed: isUsedParam });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Lưu thất bại'),
      complete: () => this.saving.set(false),
    });
  }

  toggleActive(record: Brand): void {
    const next = !!(record.isUsed === false);
    const payload: CreateBrand = {
      name: record.name,
      description: record.description,
      logoUrl: record.logoUrl,
      metadata: record.metadata,
      isUsed: next,
    };
    this.service.update(record.id, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã ngừng sử dụng');
        const isUsedParam =
          this.statusFilter() === 'active' ? true :
          this.statusFilter() === 'inactive' ? false : null;
        this.load({ search: this.search(), isUsed: isUsedParam });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Thao tác thất bại'),
    });
  }

  remove(record: Brand): void {
    this.confirm
      .delete(`Bạn có chắc muốn xóa thương hiệu "${record.name}" không?`)
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.service.remove(record.id).subscribe({
          next: () => {
            this.msg.success('Đã xóa thương hiệu');
            const isUsedParam =
              this.statusFilter() === 'active' ? true :
              this.statusFilter() === 'inactive' ? false : null;
            this.load({ search: this.search(), isUsed: isUsedParam });
          },
          error: (e) => this.msg.error(e?.error?.message || 'Xóa thất bại'),
        });
      });
  }

  countActive(): number {
    return this.rows().filter((r) => r.isUsed !== false).length;
  }

  viewDetail(record: Brand): void {
    this.viewing.set(record);
    this.viewRef = this.dialog.open(this.viewDialog, {
      width: '820px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
    this.viewRef.afterClosed().subscribe(() => this.viewing.set(null));
  }

  closeView(): void {
    this.viewRef?.close();
  }

  trackByKey(_: number, item: KeyValue<string, string>): string {
    return item.key;
  }

  metadataKeysLength(m: Record<string, string> | null | undefined): number {
    return m ? Object.keys(m).length : 0;
  }
}
