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
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError, finalize, firstValueFrom, forkJoin, of } from 'rxjs';
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
  AgriculturalMachineCategory,
  AgriculturalMachineProduct,
} from '../../shared/models/agriculturalMachineProduct';
import { Company } from '../../shared/models/company';
import { Brand } from '../../shared/models/brand';
import { AgriculturalMachineService } from '../../services/agricultural-machine.service';
import { EntityImageService } from '../../services/entity-image.service';
import { CompanyService } from '../../services/company.service';
import { BrandService } from '../../services/brand.service';
import { ProductCategoryService } from '../../services/product-category.service';
import { ProductCategory, ProductColorOption } from '../../shared/models/product-category';
import { ColorOptionsEditorComponent } from '../shared/color-options-editor/color-options-editor.component';
import { ProductRepresentativeImagePickerComponent } from '../shared/product-representative-image-picker/product-representative-image-picker.component';
import { CategoryOption, flattenCategoryTree } from '../shared/category-options';
import { validateColorOptions } from '../shared/color-options';
import {
  MetadataEditorComponent,
  metadataWithWarranty,
  metadataWithIntroduction,
  metadataWithSpecifications,
  metadataWithoutIntroduction,
  metadataWithoutSpecifications,
  metadataWithoutWarranty,
  userMetadata,
} from '../shared/metadata-editor/metadata-editor.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { productImage } from '../../shared/utils/product-images';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import {
  AdminDetailListComponent,
  AdminDetailRowComponent,
} from '../shared/detail-list/admin-detail-list.component';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import {
  AgriculturalMachineFormValue,
  agriculturalMachineCreateDto,
  agriculturalMachineToForm,
  agriculturalMachineUpdateDto,
} from '../shared/product-form-mappers';
import {
  MachineProductZipFolder,
  parseMachineProductZip,
} from './machine-product-zip-import';

@Component({
  selector: 'app-agricultural-machine-admin-page',
  standalone: true,
  imports: [
    AdminDetailListComponent,
    AdminDetailRowComponent,
    AdminPageHeaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ColorOptionsEditorComponent, MetadataEditorComponent, ProductRepresentativeImagePickerComponent,
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
  templateUrl: './agricultural-machine-admin-page.component.html',
})
export class AgriculturalMachineAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly dialog = inject(MatDialog);
  private readonly service = inject(AgriculturalMachineService);

  @ViewChild('formDialog') private formDialog!: TemplateRef<unknown>;
  @ViewChild('viewDialog') private viewDialog!: TemplateRef<unknown>;
  @ViewChild('zipImportDialog') private zipImportDialog!: TemplateRef<unknown>;

  private formRef?: MatDialogRef<unknown>;
  private viewRef?: MatDialogRef<unknown>;
  private zipImportRef?: MatDialogRef<unknown>;
  private readonly companyService = inject(CompanyService);
  private readonly brandService = inject(BrandService);

  readonly rows = signal<AgriculturalMachineProduct[]>([]);
  readonly companies = signal<Company[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly editing = signal<AgriculturalMachineProduct | null>(null);
  readonly viewing = signal<AgriculturalMachineProduct | null>(null);
  readonly visibleMetadata = userMetadata;
  readonly metadata = signal<Record<string, string>>({});
  readonly warranty = signal('');
  readonly introduction = signal('');
  readonly specifications = signal('');
  readonly editorMetadata = computed(() =>
    metadataWithoutSpecifications(
      metadataWithoutIntroduction(
        metadataWithoutWarranty(this.metadata()),
      ),
    ),
  );
  readonly colors = signal<ProductColorOption[]>([]);
  readonly colorsUploading = signal(false);
  readonly categoryTree = signal<ProductCategory[]>([]);
  private readonly categoryService = inject(ProductCategoryService);
  private readonly imageService = inject(EntityImageService);

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
  readonly zipLookupLoading = signal(false);
  readonly zipParsing = signal(false);
  readonly zipImporting = signal(false);
  readonly zipImportFileName = signal('');
  readonly zipImportPreview = signal<MachineProductZipFolder[]>([]);
  readonly zipImportError = signal('');
  readonly zipImportResult = signal('');
  readonly zipImportFailures = signal<string[]>([]);
  readonly zipImportProgress = signal('');
  readonly zipCompanyId = signal('');
  readonly zipBrandId = signal('');
  readonly zipPrice = signal(0);
  readonly zipStockQuantity = signal(0);

  readonly canImportZip = computed(() => {
    const folders = this.zipImportPreview();
    return folders.length > 0
      && folders.every((folder) => !!folder.categoryId)
      && !!this.zipCompanyId()
      && !!this.zipBrandId()
      && Number.isFinite(this.zipPrice())
      && this.zipPrice() >= 0
      && Number.isInteger(this.zipStockQuantity())
      && this.zipStockQuantity() >= 0
      && !this.zipLookupLoading()
      && !this.zipParsing()
      && !this.zipImporting();
  });

  applyFilters(): void {
    this.search.set(this.searchDraft().trim());
    this.companyFilter.set(this.companyDraft() ?? null);
    this.brandFilter.set(this.brandDraft() ?? null);
    this.categoryFilter.set(this.categoryDraft() ?? null);
    this.statusFilter.set(this.statusDraft() ?? null);
    const isUsedParam =
      this.statusFilter() === 'active' ? true :
      this.statusFilter() === 'inactive' ? false : null;
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
    category: [AgriculturalMachineCategory.MachineModel, Validators.required],
    description: [''],
    price: [0, Validators.required],
    stockQuantity: [0, Validators.required],
    pictureUrl: [''],
    engineType: [''],
    power: [''],
    fuelType: [''],
    capacity: [''],
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

  brandLine(p: AgriculturalMachineProduct): string {
    const parts = [p.brandName, p.model, p.categoryName].filter(
      (part): part is string => !!part,
    );
    return parts.join(' · ') || '—';
  }

  /** Ảnh hiển thị: ảnh đại diện đã chọn, nếu không có thì lấy từ màu đầu tiên. */
  imageOf(product: AgriculturalMachineProduct): string {
    return productImage(product);
  }

  copyId(id: string): void {
    navigator.clipboard?.writeText(id);
    this.msg.success('Đã sao chép ID');
  }

  filteredRows(): AgriculturalMachineProduct[] {
    return this.rows();
  }

  stockBadgeColor(n: number): string {
    if (n <= 0) return 'red';
    if (n < 10) return 'orange';
    return 'green';
  }

  categoryColor(cat: AgriculturalMachineCategory): string {
    return cat === AgriculturalMachineCategory.MachineModel ? 'gold' : 'purple';
  }

  loadAll(params?: {
    search?: string | null;
    companyId?: string | null;
    brandId?: string | null;
    categoryId?: string | null;
    isUsed?: boolean | null;
  }): void {
    this.loading.set(true);
    this.service
      .getAll(params)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (rows) => this.rows.set(rows),
        error: () => this.msg.error('Không tải được dữ liệu máy nông nghiệp'),
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
      .getAll({ kind: 'machine', tree: true, isUsed: true })
      .pipe(catchError(() => of([] as ProductCategory[])))
      .subscribe((categories) => this.categoryTree.set(categories));
  }

  /** Nút làm mới trên thanh tiêu đề: nạp lại cả bảng và danh sách tra cứu. */
  refresh(): void {
    this.loadLookups();
    this.applyFilters();
  }

  openZipImport(): void {
    this.zipImportFileName.set('');
    this.zipImportPreview.set([]);
    this.zipImportError.set('');
    this.zipImportResult.set('');
    this.zipImportFailures.set([]);
    this.zipImportProgress.set('');
    this.zipCompanyId.set('');
    this.zipBrandId.set('');
    this.zipPrice.set(0);
    this.zipStockQuantity.set(0);
    this.zipImportRef = this.dialog.open(this.zipImportDialog, {
      width: '760px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });

    this.zipLookupLoading.set(true);
    forkJoin({
      companies: this.companyService.getCompanies(),
      brands: this.brandService.getBrands(),
      categories: this.categoryService.getAll({ kind: 'machine', tree: true, isUsed: true }),
    })
      .pipe(finalize(() => this.zipLookupLoading.set(false)))
      .subscribe({
        next: ({ companies, brands, categories }) => {
          this.companies.set(companies);
          this.brands.set(brands);
          this.categoryTree.set(categories);
        },
        error: (error: unknown) => {
          this.zipImportError.set(`Không tải được dữ liệu cần thiết để nhập: ${this.errorMessage(error)}`);
        },
      });
  }

  closeZipImport(): void {
    if (!this.zipImporting()) this.zipImportRef?.close();
  }

  async onZipSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const archive = input.files?.[0];
    input.value = '';
    this.zipImportPreview.set([]);
    this.zipImportError.set('');
    this.zipImportResult.set('');
    this.zipImportFailures.set([]);
    this.zipImportFileName.set(archive?.name ?? '');
    if (!archive) return;

    this.zipParsing.set(true);
    try {
      const folders = await parseMachineProductZip(archive, this.categoryTree());
      if (!folders.length) {
        this.zipImportError.set('Không tìm thấy thư mục sản phẩm cuối trong file ZIP.');
        return;
      }
      this.zipImportPreview.set(folders);
    } catch (error: unknown) {
      this.zipImportError.set(this.errorMessage(error));
    } finally {
      this.zipParsing.set(false);
    }
  }

  async importZipProducts(): Promise<void> {
    if (!this.canImportZip()) return;

    this.zipImporting.set(true);
    this.zipImportError.set('');
    this.zipImportFailures.set([]);
    this.zipImportResult.set('');
    const folders = this.zipImportPreview();
    let created = 0;
    let skipped = 0;
    const failures: string[] = [];

    try {
      const existingProducts = await firstValueFrom(this.service.getAll());
      const productKeys = new Set(
        existingProducts.map((product) =>
          this.productImportKey(product.name, product.categoryId),
        ),
      );
      const companyId = this.zipCompanyId();
      const brandId = this.zipBrandId();
      const brandName = this.brands().find((brand) => brand.id === brandId)?.name ?? '';

      for (const [index, folder] of folders.entries()) {
        const categoryId = folder.categoryId;
        if (!categoryId) {
          failures.push(`${folder.relativePath}: Không tìm thấy danh mục phù hợp.`);
          continue;
        }
        const key = this.productImportKey(folder.name, categoryId);
        this.zipImportProgress.set(`Đang xử lý ${index + 1}/${folders.length}: ${folder.name}`);
        if (productKeys.has(key)) {
          skipped++;
          continue;
        }

        try {
          const imageUrls: string[] = [];
          for (const image of folder.images) {
            const uploaded = await firstValueFrom(this.imageService.upload(image));
            imageUrls.push(uploaded.url);
          }

          const product: AgriculturalMachineFormValue = {
            name: folder.name,
            brand: brandName,
            model: folder.name,
            category: AgriculturalMachineCategory.MachineModel,
            description: '',
            price: this.zipPrice(),
            stockQuantity: this.zipStockQuantity(),
            pictureUrl: imageUrls[0] ?? '',
            engineType: '',
            power: '',
            fuelType: '',
            capacity: '',
            compatibility: '',
            companyId,
            brandId,
            isUsed: true,
            categoryId,
          };
          const colors = imageUrls.length
            ? [{
              name: 'Ảnh sản phẩm',
              hexCode: '#ffffff',
              imageUrl: imageUrls[0],
              imageUrls,
            }]
            : [];
          await firstValueFrom(
            this.service.create(agriculturalMachineCreateDto(product, {}, colors)),
          );
          productKeys.add(key);
          created++;
        } catch (error: unknown) {
          failures.push(`${folder.relativePath}: ${this.errorMessage(error)}`);
        }
      }

      this.zipImportResult.set(
        `Đã tạo ${created} sản phẩm; bỏ qua ${skipped} sản phẩm trùng tên và danh mục; lỗi ${failures.length}.`,
      );
      this.zipImportFailures.set(failures);
      if (created > 0) this.loadAll();
      if (failures.length) {
        this.msg.error(`Nhập xong nhưng có ${failures.length} thư mục bị lỗi. Xem chi tiết bên dưới.`);
      } else {
        this.msg.success(`Đã nhập ${created} sản phẩm; bỏ qua ${skipped} sản phẩm trùng.`);
      }
    } catch (error: unknown) {
      this.zipImportError.set(`Không thể tải danh sách sản phẩm trước khi nhập: ${this.errorMessage(error)}`);
      this.msg.error('Không thể bắt đầu nhập sản phẩm.');
    } finally {
      this.zipImporting.set(false);
      this.zipImportProgress.set('');
    }
  }

  private productImportKey(name: string, categoryId: string | null): string {
    return `${categoryId ?? ''}|${name.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('vi')}`;
  }

  private errorMessage(error: unknown): string {
    if (error instanceof Error) return error.message;
    if (typeof error === 'string') return error;
    if (error && typeof error === 'object' && 'error' in error) {
      const detail = error.error;
      if (typeof detail === 'string') return detail;
      if (detail && typeof detail === 'object' && 'message' in detail && typeof detail.message === 'string') {
        return detail.message;
      }
    }
    return 'Lỗi không xác định';
  }


  open(record?: AgriculturalMachineProduct): void {
    this.editing.set(record ?? null);
    this.metadata.set({ ...(record?.metadata ?? {}) });
    this.warranty.set(record?.metadata?.['Warranty'] ?? record?.metadata?.['warranty'] ?? record?.metadata?.['Bảo hành'] ?? '');
    this.introduction.set(
      record?.metadata?.['Introduction'] ??
        record?.metadata?.['introduction'] ??
        record?.metadata?.['Giới thiệu sản phẩm'] ??
        '',
    );
    this.specifications.set(
      record?.metadata?.['Specifications'] ??
        record?.metadata?.['specifications'] ??
        record?.metadata?.['Thông số kỹ thuật'] ??
        '',
    );
    this.colors.set((record?.colors ?? []).map((c) => ({ ...c })));
    this.colorsUploading.set(false);
    const value: AgriculturalMachineFormValue = record ? agriculturalMachineToForm(record) : {
      name: '', brand: '', model: '', category: AgriculturalMachineCategory.MachineModel,
      description: '', price: 0, stockQuantity: 0, pictureUrl: '', engineType: '',
      power: '', fuelType: '', capacity: '', compatibility: '', companyId: '', brandId: '',
      isUsed: true,
    };
    this.form.reset({
      ...value,
      price: Number(value.price ?? 0),
      stockQuantity: Number(value.stockQuantity ?? 0),
      companyId: value.companyId == null ? '' : String(value.companyId),
      brandId: value.brandId == null ? '' : String(value.brandId),
    });
    this.formRef = this.dialog.open(this.formDialog, {
      width: '1024px',
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
    if (this.saving() || this.colorsUploading()) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const colorError = validateColorOptions(this.colors());
    if (colorError) {
      this.msg.error(colorError);
      return;
    }
    const raw = this.form.getRawValue() as AgriculturalMachineFormValue;
    const current = this.editing();
    const metadata = metadataWithSpecifications(
      metadataWithWarranty(
        metadataWithIntroduction(this.metadata(), this.introduction()),
        this.warranty(),
      ),
      this.specifications(),
    );
    this.saving.set(true);
    const req$ = current
      ? this.service.update(current.id, agriculturalMachineUpdateDto(current.id, raw, metadata, this.colors()))
      : this.service.create(agriculturalMachineCreateDto(raw, metadata, this.colors()));
    req$.subscribe({
      next: () => {
        this.msg.success(this.editing() ? 'Đã cập nhật máy nông nghiệp' : 'Đã thêm máy nông nghiệp');
        this.close();
        const isUsedParam =
          this.statusFilter() === 'active' ? true :
          this.statusFilter() === 'inactive' ? false : null;
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

  updateMetadata(value: Record<string, string>): void {
    this.metadata.set(
      metadataWithWarranty(
        metadataWithSpecifications(
          metadataWithIntroduction(value, this.introduction()),
          this.specifications(),
        ),
        this.warranty(),
      ),
    );
  }

  toggleActive(record: AgriculturalMachineProduct): void {
    const next = record.isUsed === false;
    const payload = agriculturalMachineUpdateDto(
      record.id,
      { ...agriculturalMachineToForm(record), isUsed: next },
      record.metadata ?? {},
      record.colors ?? [],
    );
    this.service.update(record.id, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã ngừng bán');
        const isUsedParam =
          this.statusFilter() === 'active' ? true :
          this.statusFilter() === 'inactive' ? false : null;
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

  remove(record: AgriculturalMachineProduct): void {
    this.confirm
      .delete(`Xóa vĩnh viễn sản phẩm "${record.name}" cùng ảnh của sản phẩm?`)
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.service.remove(record.id).subscribe({
          next: () => {
            this.msg.success('Đã xóa sản phẩm');
            const isUsedParam =
              this.statusFilter() === 'active' ? true :
              this.statusFilter() === 'inactive' ? false : null;
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

  countAll(): number { return this.rows().length; }
  countActive(): number { return this.rows().filter((r) => r.isUsed !== false).length; }
  countSoldOut(): number { return this.rows().filter((r) => r.stockQuantity <= 0).length; }
  countLowStock(): number { return this.rows().filter((r) => r.stockQuantity > 0 && r.stockQuantity < 10).length; }

  viewDetail(record: AgriculturalMachineProduct): void {
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
