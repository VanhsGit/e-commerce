import { CommonModule } from '@angular/common';
import { Component, Injector, afterNextRender, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  Observable,
  Subject,
  catchError,
  debounceTime,
  forkJoin,
  map,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { BrandService } from '../services/brand.service';
import { CategoryPageContentService } from '../services/category-page-content.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { ProductCategoryService } from '../services/product-category.service';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ProductCardItem } from '../shared/components/product-card/product-card-item.model';
import { ImgFallbackDirective } from '../shared/directives/img-fallback.directive';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';
import { Brand } from '../shared/models/brand';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { ElectricalApplianceProduct } from '../shared/models/electrical-appliance-product';
import {
  CategoryPageContent,
  DEFAULT_CATEGORY_PAGE_CONTENT,
  isSupportedCategoryPageContent,
} from '../shared/models/category-page-content';
import {
  PRODUCT_KIND_LABELS,
  ProductCategory,
  ProductColorOption,
  ProductKind,
} from '../shared/models/product-category';
import { KIND_THEME } from '../shared/models/kind-theme';
import { ApplianceHeroComponent } from './heroes/appliance-hero.component';
import { BikeHeroComponent } from './heroes/bike-hero.component';
import { MachineHeroComponent } from './heroes/machine-hero.component';

export type SortKey = 'default' | 'priceAsc' | 'priceDesc' | 'nameAsc' | 'newest';

/** Sản phẩm đã chuẩn hoá từ 3 nhóm API, dùng chung cho lưới và bộ lọc. */
export interface CatalogProduct extends ProductCardItem {
  brandId: string;
  createdAt: number;
}


/** Màu nhấn của từng thẻ điểm mạnh, đọc từ trường `accent` trong CMS. */
const ACCENT_STYLES: Record<string, { box: string; line: string }> = {
  sky: { box: 'bg-sky-100 text-sky-700', line: 'from-sky-400 to-sky-200' },
  emerald: { box: 'bg-emerald-100 text-emerald-700', line: 'from-emerald-400 to-emerald-200' },
  amber: { box: 'bg-amber-100 text-amber-700', line: 'from-amber-400 to-amber-200' },
  violet: { box: 'bg-violet-100 text-violet-700', line: 'from-violet-400 to-violet-200' },
  rose: { box: 'bg-rose-100 text-rose-700', line: 'from-rose-400 to-rose-200' },
  teal: { box: 'bg-teal-100 text-teal-700', line: 'from-teal-400 to-teal-200' },
};
const FALLBACK_ACCENT = ACCENT_STYLES['emerald'];

const SKELETON_ITEMS = [1, 2, 3, 4, 5, 6];

@Component({
  selector: 'app-category-landing',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    ImgFallbackDirective,
    ProductCardComponent,
    BikeHeroComponent,
    MachineHeroComponent,
    ApplianceHeroComponent,
  ],
  templateUrl: './category-landing.component.html',
  styleUrl: './category-landing.component.scss',
})
export class CategoryLandingComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly injector = inject(Injector);
  private readonly titleService = inject(Title);
  private readonly pageContentService = inject(CategoryPageContentService);
  private readonly categoryService = inject(ProductCategoryService);
  private readonly brandService = inject(BrandService);
  private readonly bikeService = inject(ElectricBikeService);
  private readonly machineService = inject(AgriculturalMachineService);
  private readonly applianceService = inject(ElectricalApplianceService);

  readonly skeletonItems = SKELETON_ITEMS;
  readonly skeletonHighlights = [1, 2, 3, 4];

  readonly kind = signal<ProductKind>('bike');
  readonly theme = computed(() => KIND_THEME[this.kind()]);
  readonly content = signal<CategoryPageContent>(DEFAULT_CATEGORY_PAGE_CONTENT.bike);
  readonly sortOptions = computed<{ value: SortKey; label: string }[]>(() => {
    const catalog = this.content().catalog;
    return [
      { value: 'default', label: catalog.sortDefaultLabel },
      { value: 'newest', label: catalog.sortNewestLabel },
      { value: 'priceAsc', label: catalog.sortPriceAscLabel },
      { value: 'priceDesc', label: catalog.sortPriceDescLabel },
      { value: 'nameAsc', label: catalog.sortNameAscLabel },
    ];
  });

  readonly loading = signal(true);
  readonly productsLoading = signal(true);

  readonly tree = signal<ProductCategory[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly products = signal<CatalogProduct[]>([]);
  /** Thương hiệu có mặt trong ngành hàng (từ lần nạp không lọc danh mục). */
  private readonly kindBrandIds = signal<{ id: string; name: string }[]>([]);

  readonly selectedCategoryId = signal<string | null>(null);
  readonly keyword = signal('');
  readonly brandId = signal('');
  readonly minPrice = signal<number | null>(null);
  readonly maxPrice = signal<number | null>(null);
  readonly sortBy = signal<SortKey>('default');
  readonly openFaq = signal(0);

  private ready = false;
  /** `?focus=catalog` (từ dropdown header): cuộn tới catalog khi nội dung đã dựng xong. */
  private pendingFocus = false;
  private lastSynced = '';
  private readonly productRequest$ = new Subject<{ kind: ProductKind; categoryId: string | null }>();
  private readonly querySync$ = new Subject<void>();

  readonly flatCategories = computed(() => {
    const out: ProductCategory[] = [];
    const walk = (nodes: ProductCategory[]) => {
      for (const node of nodes) {
        out.push(node);
        walk(node.children ?? []);
      }
    };
    walk(this.tree());
    return out;
  });

  readonly selectedCategory = computed(
    () => this.flatCategories().find((c) => c.id === this.selectedCategoryId()) ?? null,
  );

  /** Danh mục gốc đang mở: chính nó, hoặc cha của danh mục con đang chọn. */
  readonly activeRootId = computed(() => {
    const selected = this.selectedCategory();
    if (!selected) return null;
    return selected.parentId ?? selected.id;
  });

  readonly brandOptions = computed(() => this.kindBrandIds());

  readonly brandStrip = computed(() => {
    const ids = new Set(this.kindBrandIds().map((b) => b.id));
    const fromApi = this.brands().filter((b) => ids.has(b.id));
    if (fromApi.length) return fromApi.map((b) => ({ id: b.id, name: b.name, logoUrl: b.logoUrl }));
    return this.kindBrandIds().map((b) => ({ id: b.id, name: b.name, logoUrl: '' }));
  });

  readonly visibleProducts = computed(() => {
    const kw = this.keyword().trim().toLowerCase();
    const brand = this.brandId();
    const min = this.minPrice();
    const max = this.maxPrice();

    let list = this.products().filter((p) => {
      if (brand && p.brandId !== brand) return false;
      if (min !== null && p.price < min) return false;
      if (max !== null && p.price > max) return false;
      if (!kw) return true;
      return [p.name, p.brandName, p.model, p.description, p.categoryName].some((field) =>
        (field ?? '').toLowerCase().includes(kw),
      );
    });

    list = [...list];
    switch (this.sortBy()) {
      case 'priceAsc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        list.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
        break;
      case 'newest':
        list.sort((a, b) => b.createdAt - a.createdAt);
        break;
    }
    return list;
  });

  readonly hasActiveFilters = computed(
    () =>
      !!this.keyword().trim() ||
      !!this.brandId() ||
      this.minPrice() !== null ||
      this.maxPrice() !== null ||
      this.sortBy() !== 'default' ||
      this.selectedCategoryId() !== null,
  );

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const wantsFocus = params.get('focus') === 'catalog';
      if (wantsFocus) {
        this.pendingFocus = true;
        this.consumeFocusParam();
      }
      if (!this.ready) return; // applyPage sẽ xử lý khi tải xong
      if (this.queryKey(params) !== this.lastSynced) this.applyQuery(params);
      if (wantsFocus) this.flushFocus();
    });

    this.productRequest$
      .pipe(
        tap(() => this.productsLoading.set(true)),
        switchMap((req) =>
          this.fetchProducts(req.kind, req.categoryId).pipe(
            map((list) => ({ kind: req.kind, list })),
            catchError(() => of({ kind: req.kind, list: [] as CatalogProduct[] })),
          ),
        ),
        takeUntilDestroyed(),
      )
      .subscribe(({ kind, list }) => {
        if (kind !== this.kind()) return;
        this.products.set(list);
        this.productsLoading.set(false);
      });

    this.querySync$
      .pipe(debounceTime(250), takeUntilDestroyed())
      .subscribe(() => this.syncQuery());

    // Đăng ký cuối cùng: route.data có thể phát đồng bộ ngay khi khởi tạo
    this.route.data
      .pipe(
        map((data) => (data['kind'] as ProductKind | undefined) ?? 'bike'),
        tap((kind) => this.resetForKind(kind)),
        switchMap((kind) => this.loadPage(kind)),
        takeUntilDestroyed(),
      )
      .subscribe((result) => this.applyPage(result));
  }

  // --- Tải dữ liệu -----------------------------------------------------

  private resetForKind(kind: ProductKind): void {
    this.ready = false;
    this.kind.set(kind);
    this.content.set(DEFAULT_CATEGORY_PAGE_CONTENT[kind]);
    this.loading.set(true);
    this.productsLoading.set(true);
    this.tree.set([]);
    this.products.set([]);
    this.kindBrandIds.set([]);
    this.selectedCategoryId.set(null);
    this.keyword.set('');
    this.brandId.set('');
    this.minPrice.set(null);
    this.maxPrice.set(null);
    this.sortBy.set('default');
    this.openFaq.set(0);
    this.lastSynced = '';
    this.titleService.setTitle(`${PRODUCT_KIND_LABELS[kind]} | EcoTech`);
  }

  private loadPage(kind: ProductKind) {
    return forkJoin({
      kind: of(kind),
      content: this.pageContentService.get(kind).pipe(
        map((res) => (isSupportedCategoryPageContent(kind, res?.content) ? res.content : null)),
        catchError(() => of(null)),
      ),
      tree: this.categoryService
        .getAll({ kind, tree: true, isUsed: true })
        .pipe(catchError(() => of([] as ProductCategory[]))),
      products: this.fetchProducts(kind, null).pipe(
        catchError(() => of([] as CatalogProduct[])),
      ),
      brands: this.brandService.getBrands().pipe(catchError(() => of([] as Brand[]))),
    });
  }

  private applyPage(result: {
    kind: ProductKind;
    content: CategoryPageContent | null;
    tree: ProductCategory[];
    products: CatalogProduct[];
    brands: Brand[];
  }): void {
    const kind = result.kind;
    this.content.set(result.content ?? DEFAULT_CATEGORY_PAGE_CONTENT[kind]);
    this.tree.set(result.tree);
    this.brands.set(result.brands);

    const seen = new Map<string, string>();
    for (const p of result.products) {
      if (p.brandId && !seen.has(p.brandId)) seen.set(p.brandId, p.brandName);
    }
    this.kindBrandIds.set(
      [...seen.entries()]
        .map(([id, name]) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name, 'vi')),
    );

    this.products.set(result.products);
    this.productsLoading.set(false);
    this.loading.set(false);
    this.ready = true;
    this.flushFocus();

    const params = this.route.snapshot.queryParamMap;
    this.lastSynced = this.queryKey(params);
    this.keyword.set(params.get('q') ?? '');
    this.brandId.set(params.get('brand') ?? '');
    const id = this.categoryIdFromSlug(params.get('category'));
    if (id) {
      this.selectedCategoryId.set(id);
      this.productRequest$.next({ kind, categoryId: id });
    }
  }

  private fetchProducts(kind: ProductKind, categoryId: string | null): Observable<CatalogProduct[]> {
    const params = { isUsed: true, categoryId };
    if (kind === 'bike') {
      return this.bikeService.getAll(params).pipe(
        map((list) =>
          list
            .filter((p) => p.isUsed !== false)
            .map((p) =>
              this.toCatalogProduct('bike', p, p.brandId, p.categoryName, [
                p.voltage,
                p.power,
                p.batteryCapacity,
              ]),
            ),
        ),
      );
    }
    if (kind === 'machine') {
      return this.machineService.getAll(params).pipe(
        map((list) =>
          list
            .filter((p) => p.isUsed !== false)
            .map((p) =>
              this.toCatalogProduct('machine', p, p.brandId, p.categoryName, [
                p.engineType,
                p.power,
                p.capacity,
              ]),
            ),
        ),
      );
    }
    return this.applianceService.getAll(params).pipe(
      map((list) =>
        list
          .filter((p) => p.isUsed !== false)
          .map((p) =>
            this.toCatalogProduct('appliance', p, p.brandId, p.typeName, [
              p.power,
              p.voltage,
              p.capacity,
            ]),
          ),
      ),
    );
  }

  private toCatalogProduct(
    kind: ProductKind,
    p: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
    brandId: string,
    legacyCategoryName: string,
    chips: (string | null)[],
  ): CatalogProduct {
    const colors = (p.colors ?? []).filter((c) => !!c.name || !!c.hexCode);
    return {
      kind,
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      brandId,
      model: p.model ?? '',
      categoryName: p.categoryPath || p.categoryName || legacyCategoryName,
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyName: p.companyName,
      chip1: chips[0] ?? undefined,
      chip2: chips[1] ?? undefined,
      chip3: chips[2] ?? undefined,
      colors: colors.length ? colors : undefined,
      createdAt: new Date(p.createdAt).getTime() || 0,
    };
  }

  // --- Danh mục --------------------------------------------------------

  categoryCount(category: ProductCategory): number {
    const own = category.productCount ?? 0;
    return own + (category.children ?? []).reduce((sum, c) => sum + (c.productCount ?? 0), 0);
  }

  selectCategory(id: string | null): void {
    if (id === this.selectedCategoryId()) return;
    this.selectedCategoryId.set(id);
    this.productRequest$.next({ kind: this.kind(), categoryId: id });
    this.syncQuery();
  }

  private categoryIdFromSlug(slug: string | null): string | null {
    if (!slug) return null;
    return this.flatCategories().find((c) => c.slug === slug)?.id ?? null;
  }

  // --- Bộ lọc + query param -------------------------------------------

  onKeyword(value: string): void {
    this.keyword.set(value);
    this.querySync$.next();
  }

  onBrand(value: string): void {
    this.brandId.set(value ?? '');
    this.querySync$.next();
  }

  pickBrand(id: string): void {
    this.onBrand(this.brandId() === id ? '' : id);
    this.scrollTo('catalog');
  }

  onSort(value: SortKey): void {
    this.sortBy.set(value);
  }

  onMinPrice(value: string | number | null): void {
    this.minPrice.set(this.toPrice(value));
  }

  onMaxPrice(value: string | number | null): void {
    this.maxPrice.set(this.toPrice(value));
  }

  private toPrice(value: string | number | null): number | null {
    if (value === null || value === '') return null;
    const n = Number(value);
    return Number.isFinite(n) && n >= 0 ? n : null;
  }

  clearFilters(): void {
    const hadCategory = this.selectedCategoryId() !== null;
    this.keyword.set('');
    this.brandId.set('');
    this.minPrice.set(null);
    this.maxPrice.set(null);
    this.sortBy.set('default');
    if (hadCategory) {
      this.selectedCategoryId.set(null);
      this.productRequest$.next({ kind: this.kind(), categoryId: null });
    }
    this.syncQuery();
  }

  private currentQuery(): { category: string | null; brand: string | null; q: string | null } {
    return {
      category: this.selectedCategory()?.slug ?? null,
      brand: this.brandId() || null,
      q: this.keyword().trim() || null,
    };
  }

  private queryKey(params: ParamMap): string {
    return `${params.get('category') ?? ''}|${params.get('brand') ?? ''}|${params.get('q') ?? ''}`;
  }

  private syncQuery(): void {
    const query = this.currentQuery();
    this.lastSynced = `${query.category ?? ''}|${query.brand ?? ''}|${query.q ?? ''}`;
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: query,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  /** Áp query param đến từ bên ngoài (ví dụ link từ trang chi tiết sản phẩm). */
  private applyQuery(params: ParamMap): void {
    this.lastSynced = this.queryKey(params);
    this.keyword.set(params.get('q') ?? '');
    this.brandId.set(params.get('brand') ?? '');
    const id = this.categoryIdFromSlug(params.get('category'));
    if (id !== this.selectedCategoryId()) {
      this.selectedCategoryId.set(id);
      this.productRequest$.next({ kind: this.kind(), categoryId: id });
    }
  }

  // --- Giao diện -------------------------------------------------------

  accentOf(accent: string) {
    return ACCENT_STYLES[accent] ?? FALLBACK_ACCENT;
  }

  iconOf(icon: string): string {
    return `hero:${icon || 'check_circle'}`;
  }

  toggleFaq(index: number): void {
    this.openFaq.update((open) => (open === index ? -1 : index));
  }

  scrollTo(id: string): void {
    const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  /** Cuộn sau lần render kế tiếp để chắc chắn #catalog đã có trong DOM (không còn skeleton). */
  private flushFocus(): void {
    if (!this.pendingFocus || !this.ready) return;
    this.pendingFocus = false;
    afterNextRender(() => this.scrollTo('catalog'), { injector: this.injector });
  }

  /** Bỏ `focus` khỏi URL (replaceUrl) để reload / back không cuộn lại. */
  private consumeFocusParam(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { focus: null },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  phoneHref(phone: string): string {
    return `tel:${phone.replace(/[^0-9+]/g, '')}`;
  }

  trackById(_: number, item: { id: string }): string {
    return item.id;
  }
}
