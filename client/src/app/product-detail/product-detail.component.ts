import {
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
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
import { colorGallery } from '../shared/utils/product-images';
import { SiteSettingsService } from '../services/site-settings.service';
import { DEFAULT_SITE_SETTINGS } from '../shared/models/site-settings';
import { PageMetadataService } from '../shared/services/page-metadata.service';
import { ProductCategoryService } from '../services/product-category.service';

type ProductKind = 'bike' | 'machine';

interface ImageHoverZoom {
  lensLeft: number;
  lensTop: number;
  lensSize: number;
  popupSize: number;
  popupLeft: number;
  popupTop: number;
  imageLeft: number;
  imageTop: number;
  imageWidth: number;
  imageHeight: number;
}

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
  introduction: string;
  subDescription: string;
  colors: ProductColorOption[];
  description: string;
  price: number;
  stockQuantity: number;
  companyId: string;
  companyName: string;
  warrantyMonths: number | null;
  warrantyDetails: string;
  technicalSpecifications: string;
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
  private readonly pageMetadata = inject(PageMetadataService);
  private readonly productCategoryService = inject(ProductCategoryService);
  private readonly electricBikeService = inject(ElectricBikeService);
  private readonly agriculturalMachineService = inject(
    AgriculturalMachineService,
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
  private readonly _allBikes = signal<ElectricBikeProduct[]>([]);
  private readonly _allMachines = signal<AgriculturalMachineProduct[]>([]);

  readonly product = computed<UnifiedProduct | null>(() => {
    const k = this.kind();
    if (k === 'bike') {
      const b = this._bike();
      return b ? this._buildBike(b) : null;
    }
    const m = this._machine();
    return m ? this._buildMachine(m) : null;
  });

  /** Mảng cố định cho khung chờ; tránh tạo mảng mới mỗi lần render. */
  readonly skeletonThumbs = [1, 2, 3, 4];

  /** Cam kết được cấu hình riêng cho category của sản phẩm. */
  readonly trustItems = signal<{ icon: string; title: string; text: string }[]>(
    [],
  );
  private categoryCommitmentRequest = 0;

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

  readonly imageHoverZoom = signal<ImageHoverZoom | null>(null);
  readonly imageViewerOpen = signal(false);
  private readonly mainImageTrigger =
    viewChild<ElementRef<HTMLButtonElement>>('mainImageTrigger');
  private readonly imageViewerCloseButton = viewChild<
    ElementRef<HTMLButtonElement>
  >('imageViewerCloseButton');

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
        base.kind === 'bike' ? this._findBike(id) : this._findMachine(id),
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
      this.pageMetadata.reset();
      const k = p.get('kind') as ProductKind | null;
      const id = (p.get('id') ?? '').trim();
      if (!k || !id || (k !== 'bike' && k !== 'machine')) {
        this._bike.set(null);
        this._machine.set(null);
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

  ngOnDestroy(): void {
    this.pageMetadata.reset();
  }

  private _loadProduct(k: ProductKind, id: string) {
    this._loadCategoryCommitments(null);
    this.selectedColor.set(null);
    this._pickedImage.set(null);
    this.specsExpanded.set(false);
    this._resetImageViewer();
    this.loading.set(true);
    this.notFound.set(false);
    if (k === 'bike') {
      this._machine.set(null);
      this.electricBikeService.getById(id).subscribe({
        next: (b) => {
          this._bike.set(b);
          this._loadCategoryCommitments(b.categoryId);
          this.loading.set(false);
          this._syncPageMetadata();
        },
        error: () => {
          this._bike.set(null);
          this.notFound.set(true);
          this.loading.set(false);
        },
      });
    } else {
      this._bike.set(null);
      this.agriculturalMachineService.getById(id).subscribe({
        next: (m) => {
          this._machine.set(m);
          this._loadCategoryCommitments(m.categoryId);
          this.loading.set(false);
          this._syncPageMetadata();
        },
        error: () => {
          this._machine.set(null);
          this.notFound.set(true);
          this.loading.set(false);
        },
      });
    }
  }

  private _loadCategoryCommitments(categoryId: string | null): void {
    const requestId = ++this.categoryCommitmentRequest;
    this.trustItems.set([]);
    if (!categoryId) return;

    this.productCategoryService.getById(categoryId).subscribe({
      next: (category) => {
        if (requestId !== this.categoryCommitmentRequest) return;
        const metadata = category.metadata ?? {};
        this.trustItems.set(
          [1, 2].flatMap((index) => {
            const title = metadata[`commitment${index}Title`]?.trim();
            const text = metadata[`commitment${index}Description`]?.trim();
            return title && text
              ? [
                  {
                    icon: index === 1 ? 'workspace_premium' : 'verified_user',
                    title,
                    text,
                  },
                ]
              : [];
          }),
        );
      },
      error: (error) => {
        if (requestId !== this.categoryCommitmentRequest) return;
        console.error('Không tải được cam kết của danh mục sản phẩm', error);
        this.trustItems.set([]);
      },
    });
  }

  private _loadSiblings(k: ProductKind) {
    if (k === 'bike') {
      this.electricBikeService.getAll().subscribe({
        next: (list) =>
          this._allBikes.set(list.filter((item) => item.isUsed !== false)),
        error: () => this._allBikes.set([]),
      });
    } else {
      this.agriculturalMachineService.getAll().subscribe({
        next: (list) =>
          this._allMachines.set(list.filter((item) => item.isUsed !== false)),
        error: () => this._allMachines.set([]),
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
    this.imageHoverZoom.set(null);
  }

  updateImageHoverZoom(event: PointerEvent) {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;

    const trigger = event.currentTarget;
    if (!(trigger instanceof HTMLElement)) return;

    const image = trigger.querySelector('img');
    if (!image?.naturalWidth || !image.naturalHeight) return;

    const frame = trigger.getBoundingClientRect();
    if (!frame.width || !frame.height) return;

    const imageScale = Math.min(
      frame.width / image.naturalWidth,
      frame.height / image.naturalHeight,
    );
    const imageWidth = image.naturalWidth * imageScale;
    const imageHeight = image.naturalHeight * imageScale;
    const imageLeft = frame.left + (frame.width - imageWidth) / 2;
    const imageTop = frame.top + (frame.height - imageHeight) / 2;
    const requestedPopupSize = Math.min(
      448,
      window.innerWidth * 0.8,
      window.innerHeight * 0.75,
    );
    const gap = 16;
    const viewportMargin = 16;
    const rightSpace = window.innerWidth - frame.right - gap - viewportMargin;
    const leftSpace = frame.left - gap - viewportMargin;
    const popupSize = Math.max(
      1,
      Math.min(
        requestedPopupSize,
        Math.max(rightSpace, leftSpace),
        window.innerHeight - viewportMargin * 2,
      ),
    );
    const popupLeft =
      rightSpace >= popupSize
        ? frame.right + gap
        : frame.left - gap - popupSize;
    const popupTop = Math.max(
      viewportMargin,
      Math.min(
        frame.top + (frame.height - popupSize) / 2,
        window.innerHeight - popupSize - viewportMargin,
      ),
    );
    const lensSize = Math.min(popupSize / 2.5, imageWidth, imageHeight);
    const zoomFactor = popupSize / lensSize;
    const pointerX = Math.max(
      imageLeft + lensSize / 2,
      Math.min(imageLeft + imageWidth - lensSize / 2, event.clientX),
    );
    const pointerY = Math.max(
      imageTop + lensSize / 2,
      Math.min(imageTop + imageHeight - lensSize / 2, event.clientY),
    );

    this.imageHoverZoom.set({
      lensLeft: pointerX - lensSize / 2 - frame.left,
      lensTop: pointerY - lensSize / 2 - frame.top,
      lensSize,
      popupSize,
      popupLeft,
      popupTop,
      imageLeft: popupSize / 2 - (pointerX - imageLeft) * zoomFactor,
      imageTop: popupSize / 2 - (pointerY - imageTop) * zoomFactor,
      imageWidth: imageWidth * zoomFactor,
      imageHeight: imageHeight * zoomFactor,
    });
  }

  endImageHoverZoom() {
    this.imageHoverZoom.set(null);
  }

  openImageViewer() {
    if (!this.activeImage()) return;
    this.imageHoverZoom.set(null);
    this.imageViewerOpen.set(true);
    this._deferFocus(() =>
      this.imageViewerCloseButton()?.nativeElement.focus(),
    );
  }

  closeImageViewer() {
    const shouldRestoreFocus = this.imageViewerOpen();
    this._resetImageViewer();
    if (shouldRestoreFocus) {
      this._deferFocus(() => this.mainImageTrigger()?.nativeElement.focus());
    }
  }

  handleImageViewerKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.closeImageViewer();
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      this.imageViewerCloseButton()?.nativeElement.focus();
    }
  }

  selectColor(color: ProductColorOption) {
    if (this.selectedColor() === color) return;
    this.selectedColor.set(color);
    this._pickedImage.set(null);
    this._resetImageViewer();
  }

  private _resetImageViewer() {
    this.imageViewerOpen.set(false);
    this.imageHoverZoom.set(null);
  }

  private _deferFocus(callback: () => void) {
    setTimeout(callback);
  }

  goToListing(k?: ProductKind) {
    const target = k ?? this.kind();
    void this.router.navigate([PRODUCT_KIND_ROUTES[target]]);
  }

  scrollToAnchor(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private _buildGallery(p: ElectricBikeProduct | AgriculturalMachineProduct) {
    return [...new Set((p.colors ?? []).flatMap(colorGallery))];
  }

  private _syncPageMetadata(): void {
    const product = this.product();
    if (!product) return;

    this.pageMetadata.setProduct({
      title: `${product.name} | EcoTech`,
      description:
        product.description.trim() ||
        `${product.name} - ${product.brandName} ${product.model} chính hãng tại EcoTech.`,
      url: this.router.url,
      imageUrl: product.gallery[0],
    });
  }

  private _getWarrantyMonths(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
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

  private _getWarrantyDetails(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): string {
    const metadata = p.metadata ?? {};
    return (
      metadata['Warranty'] ||
      metadata['warrantyDetails'] ||
      metadata['warrantyPolicy'] ||
      metadata['warranty'] ||
      metadata['Bảo hành'] ||
      ''
    );
  }

  private _getIntroduction(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): string {
    const metadata = p.metadata ?? {};
    return (
      metadata['Introduction'] ??
      metadata['introduction'] ??
      metadata['Giới thiệu sản phẩm'] ??
      ''
    ).trim();
  }

  private _getSubDescription(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): string {
    const metadata = p.metadata ?? {};
    return (
      metadata['SubDescription'] ??
      metadata['subDescription'] ??
      metadata['subdescription'] ??
      metadata['Mô tả phụ'] ??
      ''
    ).trim();
  }

  private _getTechnicalSpecifications(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): string {
    const metadata = p.metadata ?? {};
    return (
      metadata['Specifications'] ??
      metadata['specifications'] ??
      metadata['Thông số kỹ thuật'] ??
      ''
    ).trim();
  }

  private _getCustomHighlights(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): string[] {
    const metadata = p.metadata ?? {};
    const raw =
      metadata['Highlights'] ??
      metadata['highlights'] ??
      metadata['Thông số nổi bật'] ??
      '';
    return raw
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  private _buildHighlights(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): string[] {
    if (this._isBike(p)) {
      return [p.voltage, p.power, p.batteryCapacity, p.compatibility]
        .filter((value): value is string => !!value)
        .slice(0, 4);
    }
    const customHighlights = this._getCustomHighlights(p);
    if (customHighlights.length) return customHighlights;

    return [p.engineType, p.power, p.fuelType, p.capacity, p.compatibility]
      .filter((value): value is string => !!value)
      .slice(0, 4);
  }

  private _buildSpecs(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): { label: string; value: string }[] {
    const wm = this._getWarrantyMonths(p);
    const base: { label: string; value: string }[] = [
      { label: 'Tên sản phẩm', value: p.name },
      { label: 'Thương hiệu', value: p.brandName },
      { label: 'Model', value: p.model },
      {
        label: 'Phân loại',
        value: p.categoryName,
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
      : [
          { label: 'Loại động cơ', value: p.engineType },
          { label: 'Công suất (HP)', value: p.power },
          { label: 'Nhiên liệu', value: p.fuelType },
          { label: 'Công suất / Thể tích', value: p.capacity },
          { label: 'Tương thích / Fit model', value: p.compatibility },
        ];
    const skipKeys = new Set([
      'warrantyMonths',
      'warranty',
      'Warranty',
      'warrantyDetails',
      'warrantyPolicy',
      'Bảo hành (tháng)',
      'Bảo hành',
      'Introduction',
      'introduction',
      'Giới thiệu sản phẩm',
      'SubDescription',
      'subDescription',
      'subdescription',
      'Mô tả phụ',
      'Highlights',
      'highlights',
      'Thông số nổi bật',
      'Specifications',
      'specifications',
      'Thông số kỹ thuật',
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
  ): string[] {
    if (kind === 'bike') {
      return allBikes.map((b) => b.id).filter((x) => x !== id);
    }
    return allMachines.map((m) => m.id).filter((x) => x !== id);
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
      introduction: this._getIntroduction(p),
      subDescription: this._getSubDescription(p),
      colors: p.colors ?? [],
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      companyId: p.companyId,
      companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p),
      warrantyDetails: this._getWarrantyDetails(p),
      technicalSpecifications: this._getTechnicalSpecifications(p),
      metadata: p.metadata ?? {},
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(p.id, 'bike', this._allBikes(), []),
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
      introduction: this._getIntroduction(p),
      subDescription: this._getSubDescription(p),
      colors: p.colors ?? [],
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      companyId: p.companyId,
      companyName: p.companyName,
      warrantyMonths: this._getWarrantyMonths(p),
      warrantyDetails: this._getWarrantyDetails(p),
      technicalSpecifications: this._getTechnicalSpecifications(p),
      metadata: p.metadata ?? {},
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(p.id, 'machine', [], this._allMachines()),
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

  private _isBike(
    product: ElectricBikeProduct | AgriculturalMachineProduct,
  ): product is ElectricBikeProduct {
    return 'batteryCapacity' in product;
  }
}
