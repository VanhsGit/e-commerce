import { CommonModule, KeyValue } from '@angular/common';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, finalize, of } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { VndCurrencyPipe } from '../../shared/pipes/vnd-currency.pipe';
import {
  ElectricBikeCategory,
  ElectricBikeProduct,
} from '../../shared/models/electricBikeProduct';
import { Company } from '../../shared/models/company';
import { Brand } from '../../shared/models/brand';
import { ElectricBikeService } from '../../services/electric-bike.service';
import { CompanyService } from '../../services/company.service';
import { BrandService } from '../../services/brand.service';
import { ProductCategoryService } from '../../services/product-category.service';
import { ProductCategory, ProductColorOption } from '../../shared/models/product-category';
import { ColorOptionsEditorComponent } from '../shared/color-options-editor/color-options-editor.component';
import { CategoryOption, flattenCategoryTree } from '../shared/category-options';
import { validateColorOptions } from '../shared/color-options';
import { MetadataEditorComponent, userMetadata } from '../shared/metadata-editor/metadata-editor.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { productImage } from '../../shared/utils/product-images';
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
    ColorOptionsEditorComponent, MetadataEditorComponent,
    ImgFallbackDirective,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    NzTableModule,
    VndCurrencyPipe,
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
  readonly visibleMetadata = userMetadata;
  readonly metadata = signal<Record<string, string>>({});
  readonly colors = signal<ProductColorOption[]>([]);
  readonly categoryTree = signal<ProductCategory[]>([]);
  private readonly categoryService = inject(ProductCategoryService);

  readonly search = signal('');
  readonly companyFilter = signal<string | null>(null);
  readonly brandFilter = signal<string | null>(null);
  readonly categoryFilter = signal<string | null>(null);
  readonly statusFilter = signal<'active' | 'inactive' | null>(null);

  readonly searchDraft = signal('');
  readonly companyDraft = signal<string | null>(null);
  readonly brandDraft = signal<string | null>(null);
  readonly categoryDraft = signal<string | null>(null);
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
      categoryId: this.categoryFilter(),
      isUsed: isUsedParam,
    });
  }

  readonly form = this.fb.group({
    name: ['', Validators.required],
    brand: [''],
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
    categoryId: [null as string | null],
  });

  private searchDebounce?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.loadAll();
    this.loadLookups();
    this.form.controls.brandId.valueChanges.subscribe((brandId) => {
      const selected = this.brands().find((b) => String(b.id) === String(brandId));
      this.form.controls.brand.setValue(selected?.name ?? '', { emitEvent: false });
    });
  }

  onSearchChange(value: string): void {
    this.searchDraft.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.applyFilters(), 300);
  }

  brandLine(p: ElectricBikeProduct): string {
    const parts = [p.brandName, p.model, p.categoryName].filter(
      (part): part is string => !!part,
    );
    return parts.join(' · ') || '—';
  }

  /** Ảnh hiển thị: ảnh của loại đầu tiên (không dùng pictureUrl của entity). */
  imageOf(product: ElectricBikeProduct): string {
    return productImage(product);
  }

  copyId(id: string): void {
    navigator.clipboard?.writeText(id);
    this.msg.success('Đã sao chép ID');
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
    categoryId?: string | null;
    isUsed?: boolean | null;
  }): void {
    this.loading.set(true);
    this.service
      .getAll(params)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (rows) => this.rows.set(rows),
        error: () => this.msg.error('Không tải được dữ liệu xe điện'),
      });
  }

  /**
   * Danh sách tra cứu cho bộ lọc và form. Tải riêng, mỗi cái một request:
   * một cái lỗi hay chậm cũng không chặn bảng sản phẩm hiện ra, và không tải
   * lại mỗi lần đổi bộ lọc.
   */
  loadLookups(): void {
    this.companyService
      .getCompanies()
      .pipe(catchError(() => of([] as Company[])))
      .subscribe((companies) => this.companies.set(companies));
    this.brandService
      .getBrands()
      .pipe(catchError(() => of([] as Brand[])))
      .subscribe((brands) => this.brands.set(brands));
    this.categoryService
      .getAll({ kind: 'bike', tree: true, isUsed: true })
      .pipe(catchError(() => of([] as ProductCategory[])))
      .subscribe((categories) => this.categoryTree.set(categories));
  }

  /** Nút làm mới trên thanh tiêu đề: nạp lại cả bảng và danh sách tra cứu. */
  refresh(): void {
    this.loadLookups();
    this.applyFilters();
  }


  open(record?: ElectricBikeProduct): void {
    this.editing.set(record ?? null);
    this.metadata.set({ ...(record?.metadata ?? {}) });
    this.colors.set((record?.colors ?? []).map((c) => ({ ...c })));
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

  /**
   * Option danh mục "Cha / Con"; giữ lại danh mục hiện tại của sản phẩm nếu nó đã bị ngừng dùng.
   * Phải là `computed`, không được là method: template gọi lại mỗi vòng change detection, mà
   * method thì trả về array + object mới mỗi lần, nên `@for` huỷ rồi dựng lại toàn bộ mat-option
   * liên tục và change detection không bao giờ dừng -> đứng hẳn main thread.
   */
  readonly filterCategoryOptions = computed<CategoryOption[]>(() =>
    flattenCategoryTree(this.categoryTree()),
  );

  readonly categoryOptions = computed<CategoryOption[]>(() => {
    const options = flattenCategoryTree(this.categoryTree());
    const current = this.editing();
    if (current?.categoryId && !options.some((o) => o.id === current.categoryId)) {
      options.unshift({
        id: current.categoryId,
        label: `${current.categoryPath || current.categoryId} (ngừng dùng)`,
        depth: 0,
      });
    }
    return options;
  });

  close(): void {
    this.formRef?.close();
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const colorError = validateColorOptions(this.colors());
    if (colorError) {
      this.msg.error(colorError);
      return;
    }
    const raw = this.form.getRawValue() as ElectricBikeFormValue;
    const current = this.editing();
    this.saving.set(true);
    const req$ = current
      ? this.service.update(current.id, electricBikeUpdateDto(current.id, raw, this.metadata(), this.colors()))
      : this.service.create(electricBikeCreateDto(raw, this.metadata(), this.colors()));
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
          categoryId: this.categoryFilter(),
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
      record.colors ?? [],
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
          categoryId: this.categoryFilter(),
          isUsed: isUsedParam,
        });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Thao tác thất bại'),
    });
  }

  remove(record: ElectricBikeProduct): void {
    this.confirm
      .delete(`Xóa vĩnh viễn sản phẩm "${record.name}" cùng ảnh của sản phẩm?`)
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
              categoryId: this.categoryFilter(),
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
    return Object.keys(userMetadata(m)).length;
  }
}
