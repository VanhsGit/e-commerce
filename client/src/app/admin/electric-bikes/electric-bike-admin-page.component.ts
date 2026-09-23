import { CommonModule, KeyValue } from '@angular/common';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { forkJoin } from 'rxjs';
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
import {
  ElectricBikeCategory,
  ElectricBikeProduct,
} from '../../shared/models/electricBikeProduct';
import { Company } from '../../shared/models/company';
import { Brand } from '../../shared/models/brand';
import { ElectricBikeService } from '../../services/electric-bike.service';
import { CompanyService } from '../../services/company.service';
import { BrandService } from '../../services/brand.service';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import {
  AdminDetailListComponent,
  AdminDetailRowComponent,
} from '../shared/detail-list/admin-detail-list.component';
import { AdminEmptyStateComponent } from '../shared/empty-state/admin-empty-state.component';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import {
  ElectricBikeFormValue,
  electricBikeCreateDto,
  electricBikeToForm,
  electricBikeUpdateDto,
} from '../shared/product-form-mappers';

@Component({
  selector: 'app-electric-bike-admin-page',
  standalone: true,
  imports: [
    AdminDetailListComponent,
    AdminDetailRowComponent,
    AdminEmptyStateComponent,
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
  templateUrl: './electric-bike-admin-page.component.html',
})
export class ElectricBikeAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly dialog = inject(MatDialog);
  private readonly service = inject(ElectricBikeService);

  @ViewChild('formDialog') private formDialog!: TemplateRef<unknown>;
  @ViewChild('viewDialog') private viewDialog!: TemplateRef<unknown>;

  private formRef?: MatDialogRef<unknown>;
  private viewRef?: MatDialogRef<unknown>;
  private readonly companyService = inject(CompanyService);
  private readonly brandService = inject(BrandService);

  readonly rows = signal<ElectricBikeProduct[]>([]);
  readonly companies = signal<Company[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly editing = signal<ElectricBikeProduct | null>(null);
  readonly viewing = signal<ElectricBikeProduct | null>(null);
  readonly metadata = signal<Record<string, string>>({});

  readonly search = signal('');
  readonly companyFilter = signal<string | null>(null);
  readonly brandFilter = signal<string | null>(null);
  readonly categoryFilter = signal<ElectricBikeCategory | null>(null);
  readonly statusFilter = signal<'active' | 'inactive' | null>(null);

  readonly searchDraft = signal('');
  readonly companyDraft = signal<string | null>(null);
  readonly brandDraft = signal<string | null>(null);
  readonly categoryDraft = signal<ElectricBikeCategory | null>(null);
  readonly statusDraft = signal<'active' | 'inactive' | null>(null);
  imageBaseUrl = window.location.origin;

  applyFilters(): void {
    this.search.set(this.searchDraft().trim());
    this.companyFilter.set(this.companyDraft() ?? null);
    this.brandFilter.set(this.brandDraft() ?? null);
    this.categoryFilter.set(this.categoryDraft() ?? null);
    this.statusFilter.set(this.statusDraft() ?? null);
    const isUsedParam =
      this.statusFilter() === 'active'
        ? true
        : this.statusFilter() === 'inactive'
          ? false
          : null;
    this.loadAll({
      search: this.search(),
      companyId: this.companyFilter(),
      brandId: this.brandFilter(),
      category: this.categoryFilter(),
      isUsed: isUsedParam,
    });
  }

  readonly form = this.fb.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    category: [ElectricBikeCategory.ElectricBikeModel, Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    stockQuantity: [0, Validators.required],
    pictureUrl: [''],
    voltage: [''],
    power: [''],
    batteryCapacity: [''],
    compatibility: [''],
    companyId: ['' as string | number | null, Validators.required],
    brandId: ['' as string | number | null, Validators.required],
    isUsed: [true],
  });

  ngOnInit(): void {
    this.loadAll();
  }

  filteredRows(): ElectricBikeProduct[] {
    return this.rows();
  }

  stockBadgeColor(n: number): string {
    if (n <= 0) return 'red';
    if (n < 20) return 'orange';
    return 'green';
  }

  categoryColor(cat: ElectricBikeCategory): string {
    return cat === ElectricBikeCategory.ElectricBikeModel ? 'blue' : 'cyan';
  }

  loadAll(params?: {
    search?: string | null;
    companyId?: string | number | null;
    brandId?: string | number | null;
    category?: number | null;
    isUsed?: boolean | null;
  }): void {
    this.loading.set(true);
    forkJoin({
      rows: this.service.getAll(params),
      companies: this.companyService.getCompanies(),
      brands: this.brandService.getBrands(),
    }).subscribe({
      next: (res) => {
        this.rows.set(res.rows);
        this.companies.set(res.companies);
        this.brands.set(res.brands);
      },
      error: () => this.msg.error('Không tải được dữ liệu xe điện'),
      complete: () => this.loading.set(false),
    });
  }

  open(record?: ElectricBikeProduct): void {
    this.editing.set(record ?? null);
    this.metadata.set({ ...(record?.metadata ?? {}) });
    const value: ElectricBikeFormValue = record ? electricBikeToForm(record) : {
      name: '', brand: '', model: '', category: ElectricBikeCategory.ElectricBikeModel,
      description: '', price: 0, stockQuantity: 0, pictureUrl: '', voltage: '', power: '',
      batteryCapacity: '', compatibility: '', companyId: '', brandId: '', isUsed: true,
    };
    this.form.reset({
      ...value,
      price: Number(value.price ?? 0),
      stockQuantity: Number(value.stockQuantity ?? 0),
      companyId: value.companyId == null ? '' : String(value.companyId),
      brandId: value.brandId == null ? '' : String(value.brandId),
    });
    this.formRef = this.dialog.open(this.formDialog, {
      width: '1000px',
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
    const raw = this.form.getRawValue() as ElectricBikeFormValue;
    const current = this.editing();
    this.saving.set(true);
    const req$ = current
      ? this.service.update(current.id, electricBikeUpdateDto(current.id, raw, this.metadata()))
      : this.service.create(electricBikeCreateDto(raw, this.metadata()));
    req$.subscribe({
      next: () => {
        this.msg.success(
          this.editing() ? 'Đã cập nhật xe điện' : 'Đã thêm xe điện',
        );
        this.close();
        const isUsedParam =
          this.statusFilter() === 'active'
            ? true
            : this.statusFilter() === 'inactive'
              ? false
              : null;
        this.loadAll({
          search: this.search(),
          companyId: this.companyFilter(),
          brandId: this.brandFilter(),
          category: this.categoryFilter(),
          isUsed: isUsedParam,
        });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Lưu thất bại'),
      complete: () => this.saving.set(false),
    });
  }

  toggleActive(record: ElectricBikeProduct): void {
    const next = record.isUsed === false;
    const payload = electricBikeUpdateDto(
      record.id,
      { ...electricBikeToForm(record), isUsed: next },
      record.metadata ?? {},
    );
    this.service.update(record.id, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã ngừng bán');
        const isUsedParam =
          this.statusFilter() === 'active'
            ? true
            : this.statusFilter() === 'inactive'
              ? false
              : null;
        this.loadAll({
          search: this.search(),
          companyId: this.companyFilter(),
          brandId: this.brandFilter(),
          category: this.categoryFilter(),
          isUsed: isUsedParam,
        });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Thao tác thất bại'),
    });
  }

  remove(record: ElectricBikeProduct): void {
    this.confirm
      .delete(`Bạn có chắc muốn xóa sản phẩm "${record.name}" không?`)
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.service.remove(record.id).subscribe({
          next: () => {
            this.msg.success('Đã xóa sản phẩm');
            const isUsedParam =
              this.statusFilter() === 'active'
                ? true
                : this.statusFilter() === 'inactive'
                  ? false
                  : null;
            this.loadAll({
              search: this.search(),
              companyId: this.companyFilter(),
              brandId: this.brandFilter(),
              category: this.categoryFilter(),
              isUsed: isUsedParam,
            });
          },
          error: (e) => this.msg.error(e?.error?.message || 'Xóa thất bại'),
        });
      });
  }

  countAll(): number {
    return this.rows().length;
  }
  countActive(): number {
    return this.rows().filter((r) => r.isUsed !== false).length;
  }
  countSoldOut(): number {
    return this.rows().filter((r) => r.stockQuantity <= 0).length;
  }
  countLowStock(): number {
    return this.rows().filter(
      (r) => r.stockQuantity > 0 && r.stockQuantity < 20,
    ).length;
  }

  viewDetail(record: ElectricBikeProduct): void {
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
