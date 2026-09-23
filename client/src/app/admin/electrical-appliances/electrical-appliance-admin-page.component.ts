import { CommonModule, KeyValue } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { finalize, forkJoin } from 'rxjs';
import { BrandService } from '../../services/brand.service';
import { CompanyService } from '../../services/company.service';
import {
  ElectricalApplianceListParams,
  ElectricalApplianceService,
} from '../../services/electrical-appliance.service';
import { Brand } from '../../shared/models/brand';
import { Company } from '../../shared/models/company';
import {
  ELECTRICAL_APPLIANCE_TYPE_LABELS,
  ElectricalApplianceProduct,
  ElectricalApplianceType,
} from '../../shared/models/electrical-appliance-product';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { NotifyService } from '../../shared/services/notify.service';
import {
  ElectricalApplianceFormValue,
  electricalApplianceCreateDto,
  electricalApplianceToForm,
  electricalApplianceUpdateDto,
} from '../shared/product-form-mappers';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import { AdminEmptyStateComponent } from '../shared/empty-state/admin-empty-state.component';
import {
  AdminDetailListComponent,
  AdminDetailRowComponent,
} from '../shared/detail-list/admin-detail-list.component';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';

@Component({
  selector: 'app-electrical-appliance-admin-page',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, NzTableModule, MatButtonModule,
    MatChipsModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatTooltipModule,
    AdminPageHeaderComponent, AdminEmptyStateComponent, AdminDetailListComponent,
    AdminDetailRowComponent, MetadataEditorComponent, RepresentativeImagePickerComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './electrical-appliance-admin-page.component.html',
})
export class ElectricalApplianceAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(ElectricalApplianceService);
  private readonly companyService = inject(CompanyService);
  private readonly brandService = inject(BrandService);
  private readonly notify = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly dialog = inject(MatDialog);

  @ViewChild('formDialog') private formDialog!: TemplateRef<unknown>;
  @ViewChild('viewDialog') private viewDialog!: TemplateRef<unknown>;
  private formRef?: MatDialogRef<unknown>;
  private viewRef?: MatDialogRef<unknown>;

  readonly rows = signal<ElectricalApplianceProduct[]>([]);
  readonly companies = signal<Company[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly editing = signal<ElectricalApplianceProduct | null>(null);
  readonly viewing = signal<ElectricalApplianceProduct | null>(null);
  readonly metadata = signal<Record<string, string>>({});

  readonly search = signal('');
  readonly companyFilter = signal<string | null>(null);
  readonly brandFilter = signal<string | null>(null);
  readonly typeFilter = signal<ElectricalApplianceType | null>(null);
  readonly statusFilter = signal<'active' | 'inactive' | null>(null);
  readonly searchDraft = signal('');
  readonly companyDraft = signal<string | null>(null);
  readonly brandDraft = signal<string | null>(null);
  readonly typeDraft = signal<ElectricalApplianceType | null>(null);
  readonly statusDraft = signal<'active' | 'inactive' | null>(null);

  readonly typeOptions = Object.entries(ELECTRICAL_APPLIANCE_TYPE_LABELS).map(([value, label]) => ({
    value: Number(value) as ElectricalApplianceType,
    label,
  }));

  readonly form = this.fb.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    type: [ElectricalApplianceType.PressureWasher, Validators.required],
    description: [''],
    price: [0, [Validators.required, Validators.min(0)]],
    stockQuantity: [0, [Validators.required, Validators.min(0)]],
    pictureUrl: [''],
    power: [''],
    voltage: [''],
    capacity: [''],
    compatibility: [''],
    companyId: ['' as string | null, Validators.required],
    brandId: ['' as string | null, Validators.required],
    isUsed: [true],
  });

  ngOnInit(): void {
    this.loadAll();
  }

  applyFilters(): void {
    this.search.set(this.searchDraft().trim());
    this.companyFilter.set(this.companyDraft());
    this.brandFilter.set(this.brandDraft());
    this.typeFilter.set(this.typeDraft());
    this.statusFilter.set(this.statusDraft());
    this.loadAll(this.currentFilters());
  }

  loadAll(params?: ElectricalApplianceListParams): void {
    this.loading.set(true);
    forkJoin({
      rows: this.service.getAll(params),
      companies: this.companyService.getCompanies(),
      brands: this.brandService.getBrands(),
    }).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: ({ rows, companies, brands }) => {
        this.rows.set(rows);
        this.companies.set(companies);
        this.brands.set(brands);
      },
      error: () => this.notify.error('Không tải được dữ liệu đồ điện dân dụng'),
    });
  }

  open(record?: ElectricalApplianceProduct): void {
    this.editing.set(record ?? null);
    this.metadata.set({ ...(record?.metadata ?? {}) });
    const value: ElectricalApplianceFormValue = record
      ? electricalApplianceToForm(record)
      : {
          name: '', brand: '', model: '', type: ElectricalApplianceType.PressureWasher,
          description: '', price: 0, stockQuantity: 0, pictureUrl: '', power: '', voltage: '',
          capacity: '', compatibility: '', companyId: '', brandId: '', isUsed: true,
        };
    this.form.reset({
      ...value,
      price: Number(value.price ?? 0),
      stockQuantity: Number(value.stockQuantity ?? 0),
      companyId: value.companyId == null ? '' : String(value.companyId),
      brandId: value.brandId == null ? '' : String(value.brandId),
    });
    this.formRef = this.dialog.open(this.formDialog, {
      width: '1040px', maxWidth: '96vw', panelClass: 'admin-dialog',
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
    const raw = this.form.getRawValue() as ElectricalApplianceFormValue;
    const current = this.editing();
    const request = current
      ? this.service.update(current.id, electricalApplianceUpdateDto(current.id, raw, this.metadata()))
      : this.service.create(electricalApplianceCreateDto(raw, this.metadata()));
    this.saving.set(true);
    request.pipe(finalize(() => this.saving.set(false))).subscribe({
      next: () => {
        this.notify.success(current ? 'Đã cập nhật sản phẩm' : 'Đã thêm sản phẩm');
        this.close();
        this.loadAll(this.currentFilters());
      },
      error: (error) => this.notify.error(error?.error?.message || 'Lưu sản phẩm thất bại'),
    });
  }

  toggleActive(record: ElectricalApplianceProduct): void {
    const active = record.isUsed === false;
    const form = { ...electricalApplianceToForm(record), isUsed: active };
    this.service.update(record.id, electricalApplianceUpdateDto(record.id, form, record.metadata ?? {}))
      .subscribe({
        next: () => {
          this.notify.success(active ? 'Đã kích hoạt sản phẩm' : 'Đã ngừng sử dụng sản phẩm');
          this.loadAll(this.currentFilters());
        },
        error: (error) => this.notify.error(error?.error?.message || 'Thao tác thất bại'),
      });
  }

  remove(record: ElectricalApplianceProduct): void {
    this.confirm.delete(`Bạn có chắc muốn xóa sản phẩm "${record.name}" không?`).subscribe((confirmed) => {
      if (!confirmed) return;
      this.service.remove(record.id).subscribe({
        next: () => {
          this.notify.success('Đã xóa sản phẩm');
          this.loadAll(this.currentFilters());
        },
        error: (error) => this.notify.error(error?.error?.message || 'Xóa sản phẩm thất bại'),
      });
    });
  }

  viewDetail(record: ElectricalApplianceProduct): void {
    this.viewing.set(record);
    this.viewRef = this.dialog.open(this.viewDialog, {
      width: '820px', maxWidth: '96vw', panelClass: 'admin-dialog',
    });
    this.viewRef.afterClosed().subscribe(() => this.viewing.set(null));
  }

  closeView(): void {
    this.viewRef?.close();
  }

  countActive(): number { return this.rows().filter((row) => row.isUsed !== false).length; }
  countLowStock(): number { return this.rows().filter((row) => row.stockQuantity > 0 && row.stockQuantity < 10).length; }
  stockClass(value: number): string { return value <= 0 ? 'chip-red' : value < 10 ? 'chip-orange' : 'chip-green'; }
  metadataKeysLength(value?: Record<string, string>): number { return Object.keys(value ?? {}).length; }
  trackByKey(_: number, item: KeyValue<string, string>): string { return item.key; }

  private currentFilters(): ElectricalApplianceListParams {
    return {
      search: this.search(), companyId: this.companyFilter(), brandId: this.brandFilter(),
      type: this.typeFilter(),
      isUsed: this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null,
    };
  }
}
