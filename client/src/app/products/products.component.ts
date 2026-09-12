import {
  Component,
  computed,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import {
  ElectricBikeProduct,
  ElectricBikeCategory,
} from '../shared/models/electricBikeProduct';
import {
  AgriculturalMachineProduct,
  AgriculturalMachineCategory,
} from '../shared/models/agriculturalMachineProduct';
import { Brand } from '../shared/models/brand';
import { Company } from '../shared/models/company';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { BrandService } from '../services/brand.service';
import { CompanyService } from '../services/company.service';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ProductCardItem } from '../shared/components/product-card/product-card-item.model';

type ProductKind = 'all' | 'bike' | 'machine';
type SortKey = 'default' | 'priceAsc' | 'priceDesc' | 'nameAsc' | 'newest';

interface UnifiedProduct {
  kind: 'bike' | 'machine';
  id: number;
  name: string;
  brandName: string;
  brand: string;
  model: string;
  category: number;
  categoryName: string;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  companyId: number;
  companyName: string;
  brandId: number;
  createdAt: Date;
  chip1?: string;
  chip2?: string;
  chip3?: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzTagModule,
    NzSliderModule,
    NzEmptyModule,
    NzToolTipModule,
    HeaderComponent,
    ProductCardComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly electricBikeService = inject(ElectricBikeService);
  private readonly agriculturalMachineService = inject(
    AgriculturalMachineService,
  );
  private readonly brandService = inject(BrandService);
  private readonly companyService = inject(CompanyService);

  private readonly kindParamSub = signal<Subscription | null>(null);
  readonly kind = signal<ProductKind>('all');
  readonly keyword = signal('');
  readonly brandIds = signal<number[]>([]);
  readonly companyIds = signal<number[]>([]);
  readonly categoryIds = signal<number[]>([]);
  readonly minPrice = signal<number | null>(null);
  readonly maxPrice = signal<number | null>(null);
  readonly sortBy = signal<SortKey>('default');
  readonly loading = signal(true);

  private readonly syncFiltersOnKindChange = effect(() => {
    this.kind();
    this.keyword.set('');
    this.brandIds.set([]);
    this.companyIds.set([]);
    this.categoryIds.set([]);
    this.minPrice.set(null);
    this.maxPrice.set(null);
    this.sortBy.set('default');
  });

  readonly bikes = signal<ElectricBikeProduct[]>([]);
  readonly machines = signal<AgriculturalMachineProduct[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly companies = signal<Company[]>([]);

  readonly filteredBrands = computed<Brand[]>(() => {
    const k = this.kind();
    const all = this.brands();
    const products = this.allProducts();
    if (k === 'all') return all;
    const relevantBrandIds = new Set(
      products.filter((p) => p.kind === k).map((p) => p.brandId),
    );
    return all.filter((b) => relevantBrandIds.has(b.id));
  });

  readonly filteredCompanies = computed<Company[]>(() => {
    const k = this.kind();
    const all = this.companies();
    const products = this.allProducts();
    if (k === 'all') return all;
    const relevantCompanyIds = new Set(
      products.filter((p) => p.kind === k).map((p) => p.companyId),
    );
    return all.filter((c) => relevantCompanyIds.has(c.id));
  });

  readonly allProducts = computed<UnifiedProduct[]>(() => {
    const b: UnifiedProduct[] = this.bikes().map((p) => ({
      kind: 'bike' as const,
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      brand: p.brand,
      model: p.model,
      category: p.category,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyId: p.companyId,
      companyName: p.companyName,
      brandId: p.brandId,
      createdAt: p.createdAt,
      chip1: p.voltage ?? undefined,
      chip2: p.power ?? undefined,
      chip3: p.batteryCapacity ?? undefined,
    }));
    const m: UnifiedProduct[] = this.machines().map((p) => ({
      kind: 'machine' as const,
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      brand: p.brand,
      model: p.model,
      category: p.category,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyId: p.companyId,
      companyName: p.companyName,
      brandId: p.brandId,
      createdAt: p.createdAt,
      chip1: p.engineType ?? undefined,
      chip2: p.power ?? undefined,
      chip3: p.capacity ?? undefined,
    }));
    return [...b, ...m];
  });

  readonly allCategoryOptions = computed(() => {
    const k = this.kind();
    const opts: { value: number; label: string }[] = [];
    if (k === 'all' || k === 'bike') {
      opts.push(
        {
          value: ElectricBikeCategory.ElectricBikeModel,
          label: '🚲 Xe điện – Chính hãng',
        },
        {
          value: ElectricBikeCategory.ElectricBikePart,
          label: '⚙️ Phụ tùng xe điện',
        },
      );
    }
    if (k === 'all' || k === 'machine') {
      opts.push(
        {
          value: 10 + AgriculturalMachineCategory.MachineModel,
          label: '🌾 Máy nông nghiệp – Chính hãng',
        },
        {
          value: 10 + AgriculturalMachineCategory.MachinePart,
          label: '🛠️ Phụ tùng máy nông nghiệp',
        },
      );
    }
    return opts;
  });

  readonly priceRange = computed<[number, number]>(() => {
    let list = this.allProducts();
    const k = this.kind();
    if (k !== 'all') list = list.filter((p) => p.kind === k);
    if (!list.length) return [0, 0];
    let min = Infinity;
    let max = -Infinity;
    for (const p of list) {
      if (p.price < min) min = p.price;
      if (p.price > max) max = p.price;
    }
    return [min === Infinity ? 0 : min, max === -Infinity ? 0 : max];
  });

  readonly priceSliderStep = computed<number>(() => {
    const range = this.priceRange();
    const span = range[1] - range[0];
    if (span <= 0) return 1;
    const step = Math.floor(span / 200);
    return Math.max(1, step);
  });

  readonly priceSliderValue = computed<[number, number]>(() => {
    const [lo, hi] = this.priceRange();
    return [this.minPrice() ?? lo, this.maxPrice() ?? hi];
  });

  onMinPriceInput(raw: Event | string | null) {
    const v =
      typeof raw === 'string'
        ? raw
        : raw && (raw as Event).target
          ? ((raw as Event).target as HTMLInputElement)
          : null;
    const val =
      v && typeof v !== 'string' ? v.value : typeof v === 'string' ? v : '';
    const n = val ? Number(val) : null;
    this.minPrice.set(n != null && Number.isFinite(n) ? n : null);
  }

  onMaxPriceInput(raw: Event | string | null) {
    const v =
      typeof raw === 'string'
        ? raw
        : raw && (raw as Event).target
          ? ((raw as Event).target as HTMLInputElement)
          : null;
    const val =
      v && typeof v !== 'string' ? v.value : typeof v === 'string' ? v : '';
    const n = val ? Number(val) : null;
    this.maxPrice.set(n != null && Number.isFinite(n) ? n : null);
  }

  onPriceSliderChange(v: number[]) {
    if (Array.isArray(v) && v.length === 2) {
      this.minPrice.set(v[0]);
      this.maxPrice.set(v[1]);
    }
  }

  readonly filteredProducts = computed<UnifiedProduct[]>(() => {
    let list = this.allProducts();
    const k = this.kind();
    if (k !== 'all') list = list.filter((p) => p.kind === k);

    const kw = this.keyword().trim().toLowerCase();
    if (kw) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(kw) ||
          p.brandName.toLowerCase().includes(kw) ||
          p.model.toLowerCase().includes(kw) ||
          p.description.toLowerCase().includes(kw),
      );
    }

    if (this.brandIds().length) {
      list = list.filter((p) => this.brandIds().includes(p.brandId));
    }
    if (this.companyIds().length) {
      list = list.filter((p) => this.companyIds().includes(p.companyId));
    }
    if (this.categoryIds().length) {
      list = list.filter((p) => {
        const mapped = p.kind === 'machine' ? 10 + p.category : p.category;
        return (
          this.categoryIds().includes(mapped) ||
          this.categoryIds().includes(p.category)
        );
      });
    }
    const minP = this.minPrice();
    const maxP = this.maxPrice();
    if (minP != null) list = list.filter((p) => p.price >= minP);
    if (maxP != null) list = list.filter((p) => p.price <= maxP);

    const sort = this.sortBy();
    const sorted = [...list];
    if (sort === 'priceAsc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'priceDesc') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'nameAsc')
      sorted.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
    else if (sort === 'newest')
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

    return sorted;
  });

  readonly cardItems = computed<ProductCardItem[]>(() => {
    return this.filteredProducts().map((p) => ({
      kind: p.kind,
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      pictureUrl: p.pictureUrl,
      companyName: p.companyName,
      chip1: p.chip1,
      chip2: p.chip2,
      chip3: p.chip3,
    }));
  });

  readonly pageHeading = computed(() => {
    switch (this.kind()) {
      case 'bike':
        return {
          eyebrow: '⚡ Xe điện chính hãng',
          eyebrowClass: 'bg-sky-50 text-sky-700 ring-sky-100',
          title: 'Danh mục xe điện',
          subtitle:
            'Chọn lọc từ xe máy điện, xe đạp điện, xe tải điện đến phụ tùng chính hãng cho mọi nhu cầu di chuyển.',
          gradient: 'from-slate-50 via-white to-sky-50/50',
        };
      case 'machine':
        return {
          eyebrow: '🚜 Máy nông nghiệp chính hãng',
          eyebrowClass: 'bg-amber-100 text-amber-800 ring-amber-200',
          title: 'Danh mục máy nông nghiệp',
          subtitle:
            'Máy gặt, máy cày, máy bơm, máy phun thuốc và phụ tùng chính hãng – trợ thủ đắc lực cho mùa vụ bội thu.',
          gradient: 'from-amber-50 via-white to-orange-50/60',
        };
      default:
        return {
          eyebrow: '🛍️ Danh mục sản phẩm',
          eyebrowClass: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
          title: 'Danh mục sản phẩm',
          subtitle:
            'Danh mục đầy đủ xe điện và máy móc nông nghiệp chính hãng. Dùng bộ lọc để tìm sản phẩm phù hợp nhất.',
          gradient: 'from-slate-50 via-white to-indigo-50/50',
        };
    }
  });

  readonly resultCountText = computed(() => {
    const n = this.filteredProducts().length;
    return n === 0
      ? 'Không có sản phẩm phù hợp'
      : n === 1
        ? '1 sản phẩm'
        : `${n} sản phẩm`;
  });

  ngOnInit(): void {
    this.kindParamSub.set(
      this.route.queryParamMap
        .pipe(
          map((params: ParamMap): ProductKind => {
            const raw = params.get('type');
            if (raw === 'bike' || raw === 'machine') return raw;
            return 'all';
          }),
        )
        .subscribe((k) => this.kind.set(k)),
    );

    forkJoin([
      this.electricBikeService.getAll(),
      this.agriculturalMachineService.getAll(),
      this.brandService.getBrands(),
      this.companyService.getCompanies(),
    ]).subscribe({
      next: ([bikes, machines, brands, companies]) => {
        this.bikes.set(bikes);
        this.machines.set(machines);
        this.brands.set(brands);
        this.companies.set(companies);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  ngOnDestroy(): void {
    this.kindParamSub()?.unsubscribe();
  }

  goHome() {
    void this.router.navigate(['/']);
  }

  resetFilters() {
    this.keyword.set('');
    this.brandIds.set([]);
    this.companyIds.set([]);
    this.categoryIds.set([]);
    this.minPrice.set(null);
    this.maxPrice.set(null);
    this.sortBy.set('default');
  }

  getDetailUrl(p: UnifiedProduct) {
    return ['/product-detail', p.kind, p.id];
  }

  formatCurrency(n: number) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(n);
  }

  kindAccentClass(p: UnifiedProduct) {
    return p.kind === 'bike'
      ? 'border-slate-200 shadow-sky-500/10 hover:shadow-sky-500/20'
      : 'border-amber-200/60 shadow-amber-500/10 hover:shadow-amber-500/20';
  }

  categoryBadgeClass(p: UnifiedProduct) {
    return p.kind === 'bike'
      ? 'bg-sky-100/95 text-sky-700'
      : 'bg-amber-100/95 text-amber-800';
  }
}
