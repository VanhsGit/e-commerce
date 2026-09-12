import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import {
  ElectricBikeProduct,
  ElectricBikeCategory,
} from '../shared/models/electricBikeProduct';
import {
  AgriculturalMachineProduct,
  AgriculturalMachineCategory,
} from '../shared/models/agriculturalMachineProduct';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { HeaderComponent } from '../shared/components/header/header.component';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { ProductCardItem } from '../shared/components/product-card/product-card-item.model';

type ProductKind = 'bike' | 'machine';

interface WarrantyRecord {
  serialNumber: string;
  productId: number;
  productKind: ProductKind;
  productName: string;
  brandName: string;
  customerName: string;
  customerPhone: string;
  purchaseDate: Date;
  warrantyMonths: number;
  warrantyEndDate: Date;
  serviceCenter: string;
  servicePhone: string;
  notes: string[];
  status: 'active' | 'expired';
  daysLeft: number;
}

interface UnifiedProduct {
  kind: ProductKind;
  id: number;
  name: string;
  brandName: string;
  brand: string;
  model: string;
  categoryName: string;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  companyId: number;
  companyName: string;
  gallery: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  relatedIds: number[];
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
    NzTagModule,
    NzGridModule,
    NzBadgeModule,
    NzTabsModule,
    HeaderComponent,
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

  readonly kind = signal<ProductKind>('bike');
  readonly productId = signal<number>(0);
  readonly activeImageIndex = signal(0);
  readonly notFound = signal(false);
  readonly loading = signal(false);
  readonly warrantyRecord = signal<WarrantyRecord | null>(null);

  private readonly _bike = signal<ElectricBikeProduct | null>(null);
  private readonly _machine = signal<AgriculturalMachineProduct | null>(null);
  private readonly _allBikes = signal<ElectricBikeProduct[]>([]);
  private readonly _allMachines = signal<AgriculturalMachineProduct[]>([]);
  private readonly _allWarranties = signal<WarrantyRecord[]>([]);

  readonly product = computed<UnifiedProduct | null>(() => {
    const k = this.kind();
    if (k === 'bike') {
      const b = this._bike();
      return b ? this._buildBike(b) : null;
    }
    const m = this._machine();
    return m ? this._buildMachine(m) : null;
  });

  readonly breadcrumb = computed(() => {
    const k = this.kind();
    return {
      root: 'Trang chủ',
      collection: k === 'bike' ? 'Sản phẩm xe điện' : 'Sản phẩm nông nghiệp',
      collectionTag: k,
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

  readonly relatedCardItems = computed<ProductCardItem[]>(() =>
    this.relatedProducts().map((r) => ({
      kind: r.kind,
      id: r.id,
      name: r.name,
      brandName: r.brandName,
      model: r.model,
      categoryName: r.categoryName,
      description: r.description,
      price: r.price,
      pictureUrl: r.pictureUrl,
      companyName: r.companyName,
      chip1: r.highlights[0],
      chip2: r.highlights[1],
      chip3: r.highlights[2],
    })),
  );

  ngOnInit(): void {
    this._allWarranties.set(this._mockWarranties());

    this.route.paramMap.subscribe((p: ParamMap) => {
      const k = p.get('kind') as ProductKind | null;
      const id = Number(p.get('id') ?? 0);
      if (!k || !id || (k !== 'bike' && k !== 'machine')) {
        this.notFound.set(true);
        return;
      }
      this.kind.set(k);
      this.productId.set(id);
      this.activeImageIndex.set(0);
      this.notFound.set(false);
      this._loadProduct(k, id);
      this._loadSiblings(k);
    });

    this.route.queryParamMap.subscribe((qp: ParamMap) => {
      const serial = qp.get('serial');
      if (serial) {
        const found = this._allWarranties().find(
          (w) => w.serialNumber.toUpperCase() === serial.trim().toUpperCase(),
        );
        this.warrantyRecord.set(found ?? null);
        if (found) {
          setTimeout(() => {
            this.scrollToAnchor('pd-warranty');
          }, 150);
        }
      } else {
        this.warrantyRecord.set(null);
      }
    });
  }

  private _loadProduct(k: ProductKind, id: number) {
    this.loading.set(true);
    this.notFound.set(false);
    if (k === 'bike') {
      this._machine.set(null);
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
    } else {
      this._bike.set(null);
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
    }
  }

  private _loadSiblings(k: ProductKind) {
    if (k === 'bike') {
      this.electricBikeService.getAll().subscribe({
        next: (list) => this._allBikes.set(list),
        error: () => this._allBikes.set([]),
      });
    } else {
      this.agriculturalMachineService.getAll().subscribe({
        next: (list) => this._allMachines.set(list),
        error: () => this._allMachines.set([]),
      });
    }
  }

  goToListing(k?: ProductKind) {
    const target = k ?? this.kind();
    void this.router.navigate(['/products'], {
      queryParams: { type: target },
    });
  }

  round(n: number): number {
    return Math.round(n);
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

  private _buildGallery(p: ElectricBikeProduct | AgriculturalMachineProduct) {
    const kind: ProductKind = 'voltage' in p ? 'bike' : 'machine';
    const palette =
      kind === 'bike'
        ? ['059669', '0284c7', '0891b2', '7c3aed']
        : ['b45309', 'ea580c', 'ca8a04', '92400e'];
    const label = kind === 'bike' ? 'G' : 'H';
    return [
      p.pictureUrl,
      ...palette.map(
        (color, i) =>
          `https://placehold.co/800x800/${color}/ffffff?text=${label}${i + 1}`,
      ),
    ];
  }

  private _buildHighlights(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): string[] {
    if ('voltage' in p) {
      const h: string[] = ['Chính hãng 100%', 'Bảo hành điện tử 12-24 tháng'];
      if (p.voltage) h.push(`Điện áp ${p.voltage}`);
      if (p.power) h.push(`Công suất ${p.power}`);
      if (p.batteryCapacity) h.push(`Dung lượng pin ${p.batteryCapacity}`);
      if (p.compatibility) h.push(`Tương thích: ${p.compatibility}`);
      if (p.stockQuantity >= 10) h.push('Giao hàng trong 24h');
      return h.slice(0, 6);
    }
    const h: string[] = ['Chính hãng nhập khẩu', 'Bảo hành động cơ 12 tháng'];
    if (p.engineType) h.push(`Loại động cơ: ${p.engineType}`);
    if (p.power) h.push(`Công suất ${p.power}`);
    if (p.fuelType) h.push(`Nhiên liệu: ${p.fuelType}`);
    if (p.capacity) h.push(`Công suất/Thể tích: ${p.capacity}`);
    if (p.compatibility) h.push(`Tương thích: ${p.compatibility}`);
    if (p.stockQuantity >= 5) h.push('Nhận giao cả nước');
    return h.slice(0, 6);
  }

  private _buildSpecs(
    p: ElectricBikeProduct | AgriculturalMachineProduct,
  ): { label: string; value: string }[] {
    const base = [
      { label: 'Tên sản phẩm', value: p.name },
      { label: 'Thương hiệu', value: p.brandName },
      { label: 'Model', value: p.model },
      { label: 'Phân loại', value: p.categoryName },
      { label: 'Đơn vị cung cấp', value: p.companyName },
      {
        label: 'Tình trạng kho',
        value:
          p.stockQuantity > 0
            ? `Còn hàng (${p.stockQuantity} sản phẩm)`
            : 'Hết hàng (đặt trước)',
      },
    ];
    const extras =
      'voltage' in p
        ? [
            { label: 'Điện áp', value: p.voltage || '—' },
            { label: 'Công suất động cơ', value: p.power || '—' },
            {
              label: 'Dung tích pin',
              value: p.batteryCapacity || '—',
            },
            {
              label: 'Tương thích / Fit model',
              value: p.compatibility || 'Không áp dụng',
            },
          ]
        : [
            { label: 'Loại động cơ', value: p.engineType || '—' },
            { label: 'Công suất (HP)', value: p.power || '—' },
            { label: 'Nhiên liệu', value: p.fuelType || '—' },
            { label: 'Công suất / Thể tích', value: p.capacity || '—' },
            {
              label: 'Tương thích / Fit model',
              value: p.compatibility || 'Không áp dụng',
            },
          ];
    return [...base, ...extras];
  }

  private _relatedFor(
    id: number,
    kind: ProductKind,
    allBikes: ElectricBikeProduct[],
    allMachines: AgriculturalMachineProduct[],
  ): number[] {
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
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyId: p.companyId,
      companyName: p.companyName,
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
      description: p.description,
      price: p.price,
      stockQuantity: p.stockQuantity,
      pictureUrl: p.pictureUrl,
      companyId: p.companyId,
      companyName: p.companyName,
      gallery: this._buildGallery(p),
      highlights: this._buildHighlights(p),
      specs: this._buildSpecs(p),
      relatedIds: this._relatedFor(p.id, 'machine', [], this._allMachines()),
    };
  }

  private _findBike(id: number): UnifiedProduct | null {
    const p = this._allBikes().find((x) => x.id === id);
    if (!p) return null;
    return this._buildBike(p);
  }

  private _findMachine(id: number): UnifiedProduct | null {
    const p = this._allMachines().find((x) => x.id === id);
    if (!p) return null;
    return this._buildMachine(p);
  }

  private _mockWarranties(): WarrantyRecord[] {
    const today = new Date();
    const subtractDays = (days: number) => {
      const d = new Date(today);
      d.setDate(d.getDate() - days);
      return d;
    };
    const calcDaysLeft = (end: Date) =>
      Math.max(
        0,
        Math.floor((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
      );

    const rec1Purchase = subtractDays(45);
    const rec1End = new Date(rec1Purchase);
    rec1End.setMonth(rec1End.getMonth() + 24);
    const rec2Purchase = subtractDays(380);
    const rec2End = new Date(rec2Purchase);
    rec2End.setMonth(rec2End.getMonth() + 12);
    const rec3Purchase = subtractDays(900);
    const rec3End = new Date(rec3Purchase);
    rec3End.setMonth(rec3End.getMonth() + 24);
    const rec4Purchase = subtractDays(20);
    const rec4End = new Date(rec4Purchase);
    rec4End.setMonth(rec4End.getMonth() + 6);

    return [
      {
        serialNumber: 'VF-E200-882134',
        productId: 101,
        productKind: 'bike',
        productName: 'VinFast Evo200 – Xe máy điện cao cấp',
        brandName: 'VinFast',
        customerName: 'Nguyễn Văn An',
        customerPhone: '0901123456',
        purchaseDate: rec1Purchase,
        warrantyMonths: 24,
        warrantyEndDate: rec1End,
        serviceCenter: 'Trung tâm bảo hành VinFast – Quận 1, HCM',
        servicePhone: '1900 2323 89',
        notes: [
          'Đã đăng ký kích hoạt bảo hành điện tử',
          'Pin bao hành riêng 36 tháng / 20.000km',
          'Lần bảo dưỡng định kỳ cuối: 15 ngày trước',
        ],
        status: calcDaysLeft(rec1End) > 0 ? 'active' : 'expired',
        daysLeft: calcDaysLeft(rec1End),
      },
      {
        serialNumber: 'KBT-DC105-050127',
        productId: 201,
        productKind: 'machine',
        productName: 'Máy gặt đập liên hợp Kubota DC-105X',
        brandName: 'Kubota',
        customerName: 'Hợp tác xã Nông sản Đồng Tháp',
        customerPhone: '02773889901',
        purchaseDate: rec2Purchase,
        warrantyMonths: 12,
        warrantyEndDate: rec2End,
        serviceCenter: 'Đông Lực NN Việt – Chi nhánh Cần Thơ',
        servicePhone: '0292 3 666 888',
        notes: [
          'Bảo hành toàn bộ động cơ và khung xe',
          'Phụ tùng hao mòn (lưỡi gặt, dây xích) không nằm trong bảo hành',
          'Yêu cầu lịch sử bảo dưỡng đầy đủ',
        ],
        status: calcDaysLeft(rec2End) > 0 ? 'active' : 'expired',
        daysLeft: calcDaysLeft(rec2End),
      },
      {
        serialNumber: 'YMR-YM70-090233',
        productId: 202,
        productKind: 'machine',
        productName: 'Máy cày 2 bàn đạp Yanmar YM70',
        brandName: 'Yanmar',
        customerName: 'Trần Thị Hồng',
        customerPhone: '0912987654',
        purchaseDate: rec3Purchase,
        warrantyMonths: 24,
        warrantyEndDate: rec3End,
        serviceCenter: 'Đông Lực NN Việt – Chi nhánh Hải Phòng',
        servicePhone: '0225 3 777 555',
        notes: [
          'Bảo hành đã hết hạn từ ngày ' + rec3End.toLocaleDateString('vi-VN'),
          'Vẫn hỗ trợ sửa chữa có tính phí với chính sách khách hàng thân thiết',
          'Ưu đãi 10% khi thay phụ tùng chính hãng',
        ],
        status: calcDaysLeft(rec3End) > 0 ? 'active' : 'expired',
        daysLeft: calcDaysLeft(rec3End),
      },
      {
        serialNumber: 'CEL-26-552211',
        productId: 102,
        productKind: 'bike',
        productName: 'Xe đạp điện thành phố Celesta 26 inch',
        brandName: 'Celesta',
        customerName: 'Lê Minh Khoa',
        customerPhone: '0977665544',
        purchaseDate: rec4Purchase,
        warrantyMonths: 6,
        warrantyEndDate: rec4End,
        serviceCenter: 'Xe Điện Xanh SM – Showroom Cầu Giấy',
        servicePhone: '024 6688 0099',
        notes: [
          'Kích hoạt bảo hành thành công ngày ' +
            rec4Purchase.toLocaleDateString('vi-VN'),
          'Lần bảo dưỡng đầu tiên miễn phí sau 1 tháng',
          'Liên hệ lấy xe tại nhà theo lịch hẹn',
        ],
        status: calcDaysLeft(rec4End) > 0 ? 'active' : 'expired',
        daysLeft: calcDaysLeft(rec4End),
      },
    ];
  }
}
