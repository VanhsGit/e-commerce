import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Brand, CreateBrand } from '../../shared/models/brand';
import { BrandService } from '../../services/brand.service';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { EntityImageManagerComponent } from '../shared/entity-image-manager/entity-image-manager.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';

@Component({
  selector: 'app-brand-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCardModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzTagModule,
    NzSwitchModule,
    NzPopconfirmModule,
    NzPageHeaderModule,
    NzToolTipModule,
    NzSpaceModule,
    NzDividerModule,
    MetadataEditorComponent,
    EntityImageManagerComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './brand-admin-page.component.html',
})
export class BrandAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NzMessageService);
  private readonly service = inject(BrandService);

  readonly rows = signal<Brand[]>([]);
  readonly loading = signal(false);
  readonly modalOpen = signal(false);
  readonly saving = signal(false);
  readonly editing = signal<Brand | null>(null);
  readonly metadata = signal<Record<string, string>>({});

  readonly search = signal('');
  readonly statusFilter = signal<'active' | 'inactive' | null>(null);
  readonly searchDraft = signal('');
  readonly statusDraft = signal<'active' | 'inactive' | null>(null);

  applyFilters(): void {
    this.search.set(this.searchDraft().trim());
    this.statusFilter.set(this.statusDraft() ?? null);
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
    this.modalOpen.set(true);
  }

  close(): void {
    this.modalOpen.set(false);
    this.editing.set(null);
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
  }

  countActive(): number {
    return this.rows().filter((r) => r.isUsed !== false).length;
  }
}
