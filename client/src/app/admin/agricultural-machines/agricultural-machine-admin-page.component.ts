import { CommonModule, KeyValue } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import {
  AgriculturalMachineCategory,
  AgriculturalMachineProduct,
  CreateAgriculturalMachineProduct,
  UpdateAgriculturalMachineProduct,
} from '../../shared/models/agriculturalMachineProduct';
import { Company } from '../../shared/models/company';
import { Brand } from '../../shared/models/brand';
import { AgriculturalMachineService } from '../../services/agricultural-machine.service';
import { CompanyService } from '../../services/company.service';
import { BrandService } from '../../services/brand.service';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';

@Component({
  selector: 'app-agricultural-machine-admin-page',
  standalone: true,
  imports: [
    AdminPageHeaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzTagModule,
    NzSwitchModule,
    NzPopconfirmModule,
    NzToolTipModule,
    NzSpaceModule,
    NzDividerModule,
    NzEmptyModule,
    MetadataEditorComponent,
    RepresentativeImagePickerComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './agricultural-machine-admin-page.component.html',
})
export class AgriculturalMachineAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NzMessageService);
  private readonly service = inject(AgriculturalMachineService);
  private readonly companyService = inject(CompanyService);
  private readonly brandService = inject(BrandService);

  readonly rows = signal<AgriculturalMachineProduct[]>([]);
  readonly companies = signal<Company[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly loading = signal(false);
  readonly modalOpen = signal(false);
  readonly saving = signal(false);
  readonly editing = signal<AgriculturalMachineProduct | null>(null);
  readonly viewing = signal<AgriculturalMachineProduct | null>(null);
  readonly viewOpen = signal(false);
  readonly metadata = signal<Record<string, string>>({});

  readonly search = signal('');
  readonly companyFilter = signal<string | null>(null);
  readonly brandFilter = signal<string | null>(null);
  readonly categoryFilter = signal<AgriculturalMachineCategory | null>(null);
  readonly statusFilter = signal<'active' | 'inactive' | null>(null);

  readonly searchDraft = signal('');
  readonly companyDraft = signal<string | null>(null);
  readonly brandDraft = signal<string | null>(null);
  readonly categoryDraft = signal<AgriculturalMachineCategory | null>(null);
  readonly statusDraft = signal<'active' | 'inactive' | null>(null);

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
      category: this.categoryFilter(),
      isUsed: isUsedParam,
    });
  }

  readonly form = this.fb.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    category: [AgriculturalMachineCategory.MachineModel, Validators.required],
    description: ['', Validators.required],
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
  });

  ngOnInit(): void {
    this.loadAll();
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
    category?: AgriculturalMachineCategory | null;
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
      error: () => this.msg.error('Không tải được dữ liệu máy nông nghiệp'),
      complete: () => this.loading.set(false),
    });
  }

  open(record?: AgriculturalMachineProduct): void {
    this.editing.set(record ?? null);
    this.metadata.set({ ...(record?.metadata ?? {}) });
    this.form.reset({
      name: record?.name ?? '',
      brand: record?.brand ?? '',
      model: record?.model ?? '',
      category: (record?.category as AgriculturalMachineCategory) ?? AgriculturalMachineCategory.MachineModel,
      description: record?.description ?? '',
      price: record?.price ?? 0,
      stockQuantity: record?.stockQuantity ?? 0,
      pictureUrl: record?.pictureUrl ?? '',
      engineType: record?.engineType ?? '',
      power: record?.power ?? '',
      fuelType: record?.fuelType ?? '',
      capacity: record?.capacity ?? '',
      compatibility: record?.compatibility ?? '',
      companyId: record?.companyId ?? null,
      brandId: record?.brandId ?? null,
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
    const data = {
      name: raw.name!,
      brand: raw.brand!,
      model: raw.model!,
      category: raw.category! as AgriculturalMachineCategory,
      description: raw.description!,
      price: Number(raw.price),
      stockQuantity: Number(raw.stockQuantity),
      pictureUrl: raw.pictureUrl ?? '',
      engineType: raw.engineType || null,
      power: raw.power || null,
      fuelType: raw.fuelType || null,
      capacity: raw.capacity || null,
      compatibility: raw.compatibility || null,
      companyId: String(raw.companyId),
      brandId: String(raw.brandId),
      metadata: this.metadata(),
      isUsed: raw.isUsed!,
    };
    this.saving.set(true);
    const req$ = this.editing()
      ? this.service.update(this.editing()!.id, { id: this.editing()!.id, ...data } as UpdateAgriculturalMachineProduct)
      : this.service.create(data as CreateAgriculturalMachineProduct);
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
          category: this.categoryFilter(),
          isUsed: isUsedParam,
        });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Lưu thất bại'),
      complete: () => this.saving.set(false),
    });
  }

  toggleActive(record: AgriculturalMachineProduct): void {
    const next = !!(record.isUsed === false);
    const payload: UpdateAgriculturalMachineProduct = {
      id: record.id,
      name: record.name,
      brand: record.brand,
      model: record.model,
      category: record.category,
      description: record.description,
      price: record.price,
      stockQuantity: record.stockQuantity,
      pictureUrl: record.pictureUrl,
      engineType: record.engineType,
      power: record.power,
      fuelType: record.fuelType,
      capacity: record.capacity,
      compatibility: record.compatibility,
      companyId: record.companyId,
      brandId: record.brandId,
      metadata: record.metadata,
      isUsed: next,
    };
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
          category: this.categoryFilter(),
          isUsed: isUsedParam,
        });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Thao tác thất bại'),
    });
  }

  remove(record: AgriculturalMachineProduct): void {
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
          category: this.categoryFilter(),
          isUsed: isUsedParam,
        });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Xóa thất bại'),
    });
  }

  countAll(): number { return this.rows().length; }
  countActive(): number { return this.rows().filter((r) => r.isUsed !== false).length; }
  countSoldOut(): number { return this.rows().filter((r) => r.stockQuantity <= 0).length; }
  countLowStock(): number { return this.rows().filter((r) => r.stockQuantity > 0 && r.stockQuantity < 10).length; }

  viewDetail(record: AgriculturalMachineProduct): void {
    this.viewing.set(record);
    this.viewOpen.set(true);
  }

  closeView(): void {
    this.viewing.set(null);
    this.viewOpen.set(false);
  }

  trackByKey(_: number, item: KeyValue<string, string>): string {
    return item.key;
  }

  metadataKeysLength(m: Record<string, string> | null | undefined): number {
    return m ? Object.keys(m).length : 0;
  }
}
