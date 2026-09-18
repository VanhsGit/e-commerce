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
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Company, CreateCompany } from '../../shared/models/company';
import { CompanyService } from '../../services/company.service';
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

@Component({
  selector: 'app-company-admin-page',
  standalone: true,
  imports: [
    AdminDetailListComponent,
    AdminDetailRowComponent,
    AdminPageHeaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MetadataEditorComponent,
    RepresentativeImagePickerComponent,
    ImgFallbackDirective,
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
  ],
  templateUrl: './company-admin-page.component.html',
})
export class CompanyAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly dialog = inject(MatDialog);
  private readonly service = inject(CompanyService);

  @ViewChild('formDialog') private formDialog!: TemplateRef<unknown>;
  @ViewChild('viewDialog') private viewDialog!: TemplateRef<unknown>;

  private formRef?: MatDialogRef<unknown>;
  private viewRef?: MatDialogRef<unknown>;

  readonly rows = signal<Company[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly editing = signal<Company | null>(null);
  readonly viewing = signal<Company | null>(null);
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
    address: [''],
    phoneNumber: [''],
    email: ['', [Validators.email]],
    website: [''],
    isUsed: [true],
  });

  ngOnInit(): void {
    this.load();
  }

  load(params?: { search?: string | null; isUsed?: boolean | null }): void {
    this.loading.set(true);
    this.service.getCompanies(params).subscribe({
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
    this.formRef = this.dialog.open(this.formDialog, {
      width: '980px',
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
        const isUsedParam =
          this.statusFilter() === 'active' ? true :
          this.statusFilter() === 'inactive' ? false : null;
        this.load({ search: this.search(), isUsed: isUsedParam });
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
        const isUsedParam =
          this.statusFilter() === 'active' ? true :
          this.statusFilter() === 'inactive' ? false : null;
        this.load({ search: this.search(), isUsed: isUsedParam });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Thao tác thất bại'),
    });
  }

  remove(record: Company): void {
    this.confirm
      .delete(`Bạn có chắc muốn xóa công ty "${record.name}" không?`)
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.service.remove(record.id).subscribe({
          next: () => {
            this.msg.success('Đã xóa công ty');
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

  viewDetail(record: Company): void {
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
