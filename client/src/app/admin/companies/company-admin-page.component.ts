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
import { Company, CreateCompany } from '../../shared/models/company';
import { CompanyService } from '../../services/company.service';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { EntityImageManagerComponent } from '../shared/entity-image-manager/entity-image-manager.component';

@Component({
  selector: 'app-company-admin-page',
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
  ],
  templateUrl: './company-admin-page.component.html',
})
export class CompanyAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NzMessageService);
  private readonly service = inject(CompanyService);

  readonly rows = signal<Company[]>([]);
  readonly loading = signal(false);
  readonly modalOpen = signal(false);
  readonly saving = signal(false);
  readonly editing = signal<Company | null>(null);
  readonly metadata = signal<Record<string, string>>({});

  readonly search = signal('');
  readonly statusFilter = signal<'all' | 'active' | 'inactive'>('all');

  readonly form = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    logoUrl: [''],
    address: [''],
    phoneNumber: [''],
    email: ['', [Validators.email]],
    website: [''],
    isUsed: [true],
  });

  ngOnInit(): void {
    this.load();
  }

  filteredRows(): Company[] {
    const q = this.search().trim().toLowerCase();
    return this.rows().filter((r) => {
      const used = r.isUsed !== false;
      if (this.statusFilter() === 'active' && !used) return false;
      if (this.statusFilter() === 'inactive' && used) return false;
      if (!q) return true;
      return [r.name, r.email, r.phoneNumber, r.website, r.address]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }

  load(): void {
    this.loading.set(true);
    this.service.getCompanies().subscribe({
      next: (v) => this.rows.set(v),
      error: () => this.msg.error('Không tải được danh sách công ty'),
      complete: () => this.loading.set(false),
    });
  }

  open(record?: Company): void {
    this.editing.set(record ?? null);
    this.metadata.set({ ...(record?.metadata ?? {}) });
    this.form.reset({
      name: record?.name ?? '',
      description: record?.description ?? '',
      logoUrl: record?.logoUrl ?? '',
      address: record?.address ?? '',
      phoneNumber: record?.phoneNumber ?? '',
      email: record?.email ?? '',
      website: record?.website ?? '',
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
    const payload: CreateCompany = {
      name: raw.name!,
      description: raw.description!,
      logoUrl: raw.logoUrl!,
      address: raw.address!,
      phoneNumber: raw.phoneNumber!,
      email: raw.email!,
      website: raw.website!,
      metadata: this.metadata(),
      isUsed: raw.isUsed!,
    };
    this.saving.set(true);
    const req$ = this.editing()
      ? this.service.update(this.editing()!.id, payload)
      : this.service.create(payload);
    req$.subscribe({
      next: () => {
        this.msg.success(this.editing() ? 'Đã cập nhật công ty' : 'Đã tạo công ty');
        this.close();
        this.load();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Lưu thất bại'),
      complete: () => this.saving.set(false),
    });
  }

  toggleActive(record: Company): void {
    const next = !!(record.isUsed === false);
    const payload: CreateCompany = {
      name: record.name,
      description: record.description,
      logoUrl: record.logoUrl,
      address: record.address,
      phoneNumber: record.phoneNumber,
      email: record.email,
      website: record.website,
      metadata: record.metadata,
      isUsed: next,
    };
    this.service.update(record.id, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã ngừng sử dụng');
        this.load();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Thao tác thất bại'),
    });
  }

  remove(record: Company): void {
    this.service.remove(record.id).subscribe({
      next: () => {
        this.msg.success('Đã xóa công ty');
        this.load();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Xóa thất bại'),
    });
  }

  countActive(): number {
    return this.rows().filter((r) => r.isUsed !== false).length;
  }
}
