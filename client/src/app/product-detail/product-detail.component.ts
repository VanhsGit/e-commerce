import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { ElectricalApplianceProduct } from '../shared/models/electrical-appliance-product';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ImgFallbackDirective } from '../shared/directives/img-fallback.directive';
import { MatIconModule } from '@angular/material/icon';

type ProductKind = 'bike' | 'machine' | 'appliance';

interface UnifiedProduct {
  kind: ProductKind;
  id: string;
  name: string;
  brandName: string;
  brand: string;
  model: string;
  categoryName: string;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  companyId: string;
  companyName: string;
  warrantyMonths: number | null;
  metadata: Record<string, string>;
  gallery: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  relatedIds: string[];
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatIconModule, 
    CommonModule,
    RouterLink,
    HeaderComponent,
    ImgFallbackDirective,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly electricBikeService = inject(ElectricBikeService);
  private readonly agriculturalMachineService = inject(
    AgriculturalMachineService,
  );
  private readonly electricalApplianceService = inject(ElectricalApplianceService);

  readonly kind = signal<ProductKind>('bike');
  readonly productId = signal<string>('');
  readonly notFound = signal(false);
  readonly loading = signal(false);

  private readonly _bike = signal<ElectricBikeProduct | null>(null);
  private readonly _machine = signal<AgriculturalMachineProduct | null>(null);
  private readonly _appliance = signal<ElectricalApplianceProduct | null>(null);
  private readonly _allBikes = signal<ElectricBikeProduct[]>([]);
  private readonly _allMachines = signal<AgriculturalMachineProduct[]>([]);
  private readonly _allAppliances = signal<ElectricalApplianceProduct[]>([]);

  readonly product = computed<UnifiedProduct | null>(() => {
    const k = this.kind();
    if (k === 'bike') {
      const b = this._bike();
      return b ? this._buildBike(b) : null;
    }
    if (k === 'machine') {
      const m = this._machine();
      return m ? this._buildMachine(m) : null;
    }
    const appliance = this._appliance();
    return appliance ? this._buildAppliance(appliance) : null;
  });

  readonly breadcrumb = computed(() => {
    const k = this.kind();
    return {
      root: 'Trang chủ',
      collection: k === 'bike' ? 'Sản phẩm xe điện' : k === 'machine' ? 'Sản phẩm nông nghiệp' : 'Đồ điện dân dụng',
      collectionTag: k,
    };
  });

  readonly relatedProducts = computed<UnifiedProduct[]>(() => {
    const base = this.product();
    if (!base) return [];
    const ids = base.relatedIds.slice(0, 4);
    return ids
      .map((id) =>
        base.kind === 'bike' ? this._findBike(id) : base.kind === 'machine' ? this._findMachine(id) : this._findAppliance(id),
      )
      .filter((p): p is UnifiedProduct => !!p && p.id !== base.id);
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: ParamMap) => {
      const k = p.get('kind') as ProductKind | null;
      const id = (p.get('id') ?? '').trim();
      if (!k || !id || (k !== 'bike' && k !== 'machine' && k !== 'appliance')) {
        this._bike.set(null);
        this._machine.set(null);
        this._appliance.set(null);
        this.notFound.set(true);
        return;
      }
      this.kind.set(k);
      this.productId.set(id);
      this.notFound.set(false);
      this._loadProduct(k, id);
      this._loadSiblings(k);
    });
  }

  private _loadProduct(k: ProductKind, id: string) {
    this.loading.set(true);
    this.notFound.set(false);
    if (k === 'bike') {
      this._machine.set(null);
      this._appliance.set(null);
      this.electricBikeService.getById(id).subscribe({
        next: (b) => {
          this._bike.set(b);
          this.loading.set(false);
        },
        error: () => {
          this._bike.set(null);
          this.notFound.set(true);
          this.loading.set(false);
        },
      });
    } else if (k === 'machine') {
      this._bike.set(null);
      this._appliance.set(null);
      this.agriculturalMachineService.getById(id).subscribe({
        next: (m) => {
          this._machine.set(m);
          this.loading.set(false);
        },
        error: () => {
          this._machine.set(null);
          this.notFound.set(true);
          this.loading.set(false);
        },
      });
    } else {
      this._bike.set(null);
      this._machine.set(null);
      this.electricalApplianceService.getById(id).subscribe({
        next: (appliance) => {
          this._appliance.set(appliance);
          this.loading.set(false);
        },
        error: () => {
          this._appliance.set(null);
          this.notFound.set(true);
          this.loading.set(false);
        },
      });
    }
  }

  private _loadSiblings(k: ProductKind) {
    if (k === 'bike') {
      this.electricBikeService.getAll().subscribe({
        next: (list) => this._allBikes.set(list.filter((item) => item.isUsed !== false)),
        error: () => this._allBikes.set([]),
      });
    } else if (k === 'machine') {
      this.agriculturalMachineService.getAll().subscribe({
        next: (list) => this._allMachines.set(list.filter((item) => item.isUsed !== false)),
        error: () => this._allMachines.set([]),
      });
    } else {
      this.electricalApplianceService.getAll({ isUsed: true }).subscribe({
        next: (list) => this._allAppliances.set(list.filter((item) => item.isUsed !== false)),
        error: () => this._allAppliances.set([]),
      });
    }
  }

  goToListing(k?: ProductKind) {
    const target = k ?? this.kind();
    void this.router.navigate(['/products'], {
      queryParams: { type: target },
    });
  }

  scrollToAnchor(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  formatCurrency(n: number) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(n);
  }

  private _buildGallery(p: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct) {
    return p.pictureUrl ? [p.pictureUrl] : [];
  }

  private _getWarrantyMonths(
    p: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
  ): number | null {
    if (!p.metadata) return null;
    const raw =
      p.metadata['warrantyMonths'] ||
      p.metadata['warranty'] ||
      p.metadata['Bảo hành (tháng)'];
    if (!raw) return null;
    const n = parseInt(raw, 10);
    return isNaN(n) ? null : n;
  }

  private _buildHighlights(
    p: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
  ): string[] {
    if (this._isBike(p)) {
      return [p.voltage, p.power, p.batteryCapacity, p.compatibility]
        .filter((value): value is string => !!value)
        .slice(0, 4);
    }
    if (this._isAppliance(p)) {
      return [p.power, p.voltage, p.capacity, p.compatibility]
        .filter((value): value is string => !!value)
        .slice(0, 4);
    }
    return [p.engineType, p.power, p.fuelType, p.capacity, p.compatibility]
      .filter((value): value is string => !!value)
      .slice(0, 4);
  }

  private _buildSpecs(
    p: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
  ): { label: string; value: string }[] {
    const wm = this._getWarrantyMonths(p);
    const base = [
      { label: 'Tên sản phẩm', value: p.name },
      { label: 'Thương hiệu', value: p.brandName },
      { label: 'Model', value: p.model },
      { label: 'Phân loại', value: this._isAppliance(p) ? p.typeName : p.categoryName },
      { label: 'Đơn vị cung cấp', value: p.companyName },
      {
        label: 'Tình trạng kho',
        value:
          p.stockQuantity > 0
            ? `Còn hàng (${p.stockQuantity} sản phẩm)`
            : 'Hết hàng (đặt trước)',
      },
    ];
    if (wm) base.push({ label: 'Thời gian bảo hành', value: `${wm} tháng` });
    const extras =
      this._isBike(p)
        ? [
            { label: 'Điện áp', value: p.voltage },
            { label: 'Công suất động cơ', value: p.power },
            { label: 'Dung tích pin', value: p.batteryCapacity },
            { label: 'Tương thích / Fit model', value: p.compatibility },
          ]
        : this._isMachine(p) ? [
            { label: 'Loại động cơ', value: p.engineType },
            { label: 'Công suất (HP)', value: p.power },
            { label: 'Nhiên liệu', value: p.fuelType },
            { label: 'Công suất / Thể tích', value: p.capacity },
            { label: 'Tương thích / Fit model', value: p.compatibility },
          ] : [
            { label: 'Loại thiết bị', value: p.typeName },
            { label: 'Công suất', value: p.power },
            { label: 'Điện áp', value: p.voltage },
            { label: 'Dung tích', value: p.capacity },
            { label: 'Tương thích', value: p.compatibility },
          ];
    const skipKeys = new Set([
      'warrantyMonths',
      'warranty',
      'Bảo hành (tháng)',
    ]);
    const metaEntries = p.metadata
      ? Object.entries(p.metadata)
          .filter(([k]) => !skipKeys.has(k))
          .map(([label, value]) => ({ label, value }))
      : [];
    return [
      ...base,
      ...extras.filter(
        (item): item is { label: string; value: string } => !!item.value,
      ),
      ...metaEntries.filter((item) => !!item.value),
    ];
  }

  private _relatedFor(
    id: string,
    kind: ProductKind,
    allBikes: ElectricBikeProduct[],
    allMachines: AgriculturalMachineProduct[],
    allAppliances: ElectricalApplianceProduct[] = [],
  ): string[] {
    if (kind === 'bike') {
      return allBikes.map((b) => b.id).filter((x) => x !== id);
    }
    if (kind === 'machine') return allMachines.map((m) => m.id).filter((x) => x !== id);
    return allAppliances.map((item) => item.id).filter((x) => x !== id);
  }

  private _buildBike(p: ElectricBikeProduct): UnifiedProduct {
    return {
      kind: 'bike',
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      brand: p.brand,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyId: p.companyId,
      companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p),
      metadata: p.metadata ?? {},
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(p.id, 'bike', this._allBikes(), [], []),
    };
  }

  private _buildMachine(p: AgriculturalMachineProduct): UnifiedProduct {
    return {
      kind: 'machine',
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      brand: p.brand,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyId: p.companyId,
      companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p),
      metadata: p.metadata ?? {},
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(p.id, 'machine', [], this._allMachines(), []),
    };
  }

  private _buildAppliance(p: ElectricalApplianceProduct): UnifiedProduct {
    return {
      kind: 'appliance', id: p.id, name: p.name, brandName: p.brandName,
      brand: p.brand, model: p.model, categoryName: p.typeName,
      description: p.description, price: p.price, stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl, companyId: p.companyId, companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p), metadata: p.metadata ?? {},
      gallery: this._buildGallery(p), highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(p.id, 'appliance', [], [], this._allAppliances()),
    };
  }

  private _findBike(id: string): UnifiedProduct | null {
    const p = this._allBikes().find((x) => x.id === id);
    if (!p) return null;
    return this._buildBike(p);
  }

  private _findMachine(id: string): UnifiedProduct | null {
    const p = this._allMachines().find((x) => x.id === id);
    if (!p) return null;
    return this._buildMachine(p);
  }

  private _findAppliance(id: string): UnifiedProduct | null {
    const product = this._allAppliances().find((item) => item.id === id && item.isUsed !== false);
    return product ? this._buildAppliance(product) : null;
  }

  private _isBike(
    product: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
  ): product is ElectricBikeProduct {
    return 'batteryCapacity' in product;
  }

  private _isMachine(
    product: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
  ): product is AgriculturalMachineProduct {
    return 'engineType' in product;
  }

  private _isAppliance(
    product: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
  ): product is ElectricalApplianceProduct {
    return 'typeName' in product;
  }

}
