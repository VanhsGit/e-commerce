import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { ElectricalApplianceProduct } from '../shared/models/electrical-appliance-product';
import {
  PRODUCT_KIND_LABELS,
  PRODUCT_KIND_ROUTES,
  ProductColorOption,
} from '../shared/models/product-category';
import { VndCurrencyPipe } from '../shared/pipes/vnd-currency.pipe';
import { ImgFallbackDirective } from '../shared/directives/img-fallback.directive';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ProductCardItem } from '../shared/components/product-card/product-card-item.model';
import { colorGallery, productGallery } from '../shared/utils/product-images';
import { SiteSettingsService } from '../services/site-settings.service';
import { DEFAULT_SITE_SETTINGS } from '../shared/models/site-settings';

type ProductKind = 'bike' | 'machine' | 'appliance';

interface UnifiedProduct {
  kind: ProductKind;
  id: string;
  name: string;
  brandName: string;
  brand: string;
  model: string;
  categoryName: string;
  categoryPath: string | null;
  categorySlug: string | null;
  colors: ProductColorOption[];
  description: string;
  price: number;
  stockQuantity: number;
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
  host: { '[class.has-contact-bar]': 'showContactBar()' },
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    RouterLink,
    ImgFallbackDirective,
    VndCurrencyPipe,
    ProductCardComponent,
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
  private readonly electricalApplianceService = inject(
    ElectricalApplianceService,
  );
  readonly site = toSignal(inject(SiteSettingsService).getContent(), {
    initialValue: DEFAULT_SITE_SETTINGS,
  });

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

  /** Mảng cố định cho khung chờ; tránh tạo mảng mới mỗi lần render. */
  readonly skeletonThumbs = [1, 2, 3, 4];

  /** Cam kết ngắn gọn, lấy từ nội dung cam kết trên trang chủ. */
  readonly trustItems = [
    {
      icon: 'workspace_premium',
      title: 'Chính hãng 100%',
      text: 'Đầy đủ hóa đơn VAT, tem chống giả, CO – CQ.',
    },
    {
      icon: 'verified_user',
      title: 'Bảo hành rõ ràng',
      text: 'Xe điện 3 năm, máy nông nghiệp 12 – 24 tháng.',
    },
  ];

  /** Số dòng thông số hiển thị khi thu gọn. */
  readonly specsPreviewCount = 8;
  readonly specsExpanded = signal(false);

  /** Thông số đang hiển thị: rút gọn nếu danh sách dài và chưa mở rộng. */
  readonly visibleSpecs = computed(() => {
    const specs = this.product()?.specs ?? [];
    return this.specsExpanded()
      ? specs
      : specs.slice(0, this.specsPreviewCount);
  });

  readonly hotline = computed(() =>
    this.site().contact.phone.replace(/[^0-9+]/g, ''),
  );
  readonly zaloUrl = computed(
    () =>
      this.site().contact.zaloUrl.trim() ||
      `https://zalo.me/${this.hotline().replace(/\D/g, '')}`,
  );

  readonly selectedColor = signal<ProductColorOption | null>(null);
  private readonly _pickedImage = signal<string | null>(null);

  /** Khi đã chọn màu, chỉ hiện bộ ảnh của màu đó. */
  readonly gallery = computed(() => {
    const color = this.selectedColor();
    return color ? colorGallery(color) : (this.product()?.gallery ?? []);
  });
  readonly colorImage = (color: ProductColorOption) =>
    colorGallery(color)[0] ?? '';

  /** Ảnh chính đang hiển thị: ảnh được chọn (thumbnail / màu) hoặc ảnh đầu tiên. */
  readonly activeImage = computed(() => {
    const images = this.gallery();
    const picked = this._pickedImage();
    return picked && images.includes(picked) ? picked : (images[0] ?? '');
  });

  readonly breadcrumb = computed(() => {
    const k = this.kind();
    const p = this.product();
    return {
      root: 'Trang chủ',
      collection: PRODUCT_KIND_LABELS[k],
      route: PRODUCT_KIND_ROUTES[k],
      category: p ? (p.categoryPath ?? p.categoryName) || null : null,
      categorySlug: p?.categorySlug ?? null,
    };
  });

  readonly relatedProducts = computed<UnifiedProduct[]>(() => {
    const base = this.product();
    if (!base) return [];
    const ids = base.relatedIds.slice(0, 4);
    return ids
      .map((id) =>
        base.kind === 'bike'
          ? this._findBike(id)
          : base.kind === 'machine'
            ? this._findMachine(id)
            : this._findAppliance(id),
      )
      .filter((p): p is UnifiedProduct => !!p && p.id !== base.id);
  });

  /** Sản phẩm liên quan quy về dạng thẻ dùng chung. */
  readonly relatedCards = computed<ProductCardItem[]>(() =>
    this.relatedProducts().map((r) => ({
      kind: r.kind,
      id: r.id,
      name: r.name,
      brandName: r.brandName,
      model: r.model,
      categoryName: r.categoryPath ?? r.categoryName,
      description: r.description,
      price: r.price,
      stockQuantity: r.stockQuantity,
      imageUrl: r.gallery[0] ?? '',
      companyName: r.companyName,
      chip1: r.highlights[0],
      chip2: r.highlights[1],
      chip3: r.highlights[2],
      colors: r.colors.length ? r.colors : undefined,
    })),
  );

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
    this.selectedColor.set(null);
    this._pickedImage.set(null);
    this.specsExpanded.set(false);
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
        next: (list) =>
          this._allBikes.set(list.filter((item) => item.isUsed !== false)),
        error: () => this._allBikes.set([]),
      });
    } else if (k === 'machine') {
      this.agriculturalMachineService.getAll().subscribe({
        next: (list) =>
          this._allMachines.set(list.filter((item) => item.isUsed !== false)),
        error: () => this._allMachines.set([]),
      });
    } else {
      this.electricalApplianceService.getAll({ isUsed: true }).subscribe({
        next: (list) =>
          this._allAppliances.set(list.filter((item) => item.isUsed !== false)),
        error: () => this._allAppliances.set([]),
      });
    }
  }

  /** Thanh liên hệ cố định chỉ hiện khi đã có sản phẩm; dùng để chừa chỗ ở cuối trang. */
  readonly showContactBar = computed(
    () => !this.loading() && !this.notFound() && !!this.product(),
  );

  toggleSpecs() {
    this.specsExpanded.update((v) => !v);
  }

  selectImage(url: string) {
    this._pickedImage.set(url);
  }

  selectColor(color: ProductColorOption) {
    if (this.selectedColor() === color) return;
    this.selectedColor.set(color);
    this._pickedImage.set(null);
  }

  goToListing(k?: ProductKind) {
    const target = k ?? this.kind();
    void this.router.navigate([PRODUCT_KIND_ROUTES[target]]);
  }

  scrollToAnchor(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private _buildGallery(
    p:
      | ElectricBikeProduct
      | AgriculturalMachineProduct
      | ElectricalApplianceProduct,
  ) {
    return productGallery(p);
  }

  private _getWarrantyMonths(
    p:
      | ElectricBikeProduct
      | AgriculturalMachineProduct
      | ElectricalApplianceProduct,
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
    p:
      | ElectricBikeProduct
      | AgriculturalMachineProduct
      | ElectricalApplianceProduct,
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
    p:
      | ElectricBikeProduct
      | AgriculturalMachineProduct
      | ElectricalApplianceProduct,
  ): { label: string; value: string }[] {
    const wm = this._getWarrantyMonths(p);
    const base: { label: string; value: string }[] = [
      { label: 'Tên sản phẩm', value: p.name },
      { label: 'Thương hiệu', value: p.brandName },
      { label: 'Model', value: p.model },
      {
        label: 'Phân loại',
        value: this._isAppliance(p) ? p.typeName : p.categoryName,
      },
      { label: 'Danh mục', value: p.categoryPath ?? '' },
      { label: 'Đơn vị cung cấp', value: p.companyName },
    ];
    if (wm) base.push({ label: 'Thời gian bảo hành', value: `${wm} tháng` });
    const extras = this._isBike(p)
      ? [
          { label: 'Điện áp', value: p.voltage },
          { label: 'Công suất động cơ', value: p.power },
          { label: 'Dung tích pin', value: p.batteryCapacity },
          { label: 'Tương thích / Fit model', value: p.compatibility },
        ]
      : this._isMachine(p)
        ? [
            { label: 'Loại động cơ', value: p.engineType },
            { label: 'Công suất (HP)', value: p.power },
            { label: 'Nhiên liệu', value: p.fuelType },
            { label: 'Công suất / Thể tích', value: p.capacity },
            { label: 'Tương thích / Fit model', value: p.compatibility },
          ]
        : [
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
      ...base.filter((item) => !!item.value),
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
    if (kind === 'machine')
      return allMachines.map((m) => m.id).filter((x) => x !== id);
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
      categoryPath: p.categoryPath ?? null,
      categorySlug: p.categorySlug ?? null,
      colors: p.colors ?? [],
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
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
      categoryPath: p.categoryPath ?? null,
      categorySlug: p.categorySlug ?? null,
      colors: p.colors ?? [],
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      companyId: p.companyId,
      companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p),
      metadata: p.metadata ?? {},
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(
        p.id,
        'machine',
        [],
        this._allMachines(),
        [],
      ),
    };
  }

  private _buildAppliance(p: ElectricalApplianceProduct): UnifiedProduct {
    return {
      kind: 'appliance',
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      brand: p.brand,
      model: p.model,
      categoryName: p.typeName,
      categoryPath: p.categoryPath ?? null,
      categorySlug: p.categorySlug ?? null,
      colors: p.colors ?? [],
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      companyId: p.companyId,
      companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p),
      metadata: p.metadata ?? {},
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(
        p.id,
        'appliance',
        [],
        [],
        this._allAppliances(),
      ),
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
    const product = this._allAppliances().find(
      (item) => item.id === id && item.isUsed !== false,
    );
    return product ? this._buildAppliance(product) : null;
  }

  private _isBike(
    product:
      | ElectricBikeProduct
      | AgriculturalMachineProduct
      | ElectricalApplianceProduct,
  ): product is ElectricBikeProduct {
    return 'batteryCapacity' in product;
  }

  private _isMachine(
    product:
      | ElectricBikeProduct
      | AgriculturalMachineProduct
      | ElectricalApplianceProduct,
  ): product is AgriculturalMachineProduct {
    return 'engineType' in product;
  }

  private _isAppliance(
    product:
      | ElectricBikeProduct
      | AgriculturalMachineProduct
      | ElectricalApplianceProduct,
  ): product is ElectricalApplianceProduct {
    return 'typeName' in product;
  }
}
