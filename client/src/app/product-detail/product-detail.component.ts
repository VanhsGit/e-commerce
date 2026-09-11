import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  ParamMap,
  Router,
  RouterLink,
} from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  ElectricBikeProduct,
  ElectricBikeCategory,
} from '../shared/models/electricBikeProduct';
import {
  AgriculturalMachineProduct,
  AgriculturalMachineCategory,
} from '../shared/models/agriculturalMachineProduct';

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
    NzToolTipModule,
    NzGridModule,
    NzBadgeModule,
    NzTabsModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly kind = signal<ProductKind>('bike');
  readonly productId = signal<number>(0);
  readonly activeImageIndex = signal(0);
  readonly notFound = signal(false);
  readonly warrantyRecord = signal<WarrantyRecord | null>(null);

  private readonly _allBikes = signal<ElectricBikeProduct[]>([]);
  private readonly _allMachines = signal<AgriculturalMachineProduct[]>([]);
  private readonly _allWarranties = signal<WarrantyRecord[]>([]);

  readonly product = computed<UnifiedProduct | null>(() => {
    const id = this.productId();
    const k = this.kind();
    if (!id) return null;
    return k === 'bike' ? this._findBike(id) : this._findMachine(id);
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

  ngOnInit(): void {
    this._seedMockData();
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

  goHome() {
    this.router.navigate(['/']);
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

  private _seedMockData() {
    const now = new Date();
    const bikeColors = ['10b981', '0ea5e9', '06b6d4', '0891b2', '0284c7', '7c3aed'];
    const machineColors = ['f59e0b', 'ea580c', 'eab308', 'd97706', 'b45309', '92400e'];
    const bikeImg = (id: number, idx: number) =>
      `https://placehold.co/800x800/${bikeColors[idx % bikeColors.length]}/ffffff?text=XE+${id}`;
    const machineImg = (id: number, idx: number) =>
      `https://placehold.co/800x800/${machineColors[idx % machineColors.length]}/ffffff?text=NN+${id}`;

    this._allBikes.set([
      {
        id: 101,
        name: 'VinFast Evo200 – Xe máy điện cao cấp',
        brand: 'VinFast',
        brandName: 'VinFast',
        model: 'Evo200',
        category: ElectricBikeCategory.ElectricBikeModel,
        categoryName: 'Xe máy điện',
        description:
          'Xe máy điện thời thượng, tầm xa 200km/sạc, công nghệ kết nối thông minh, chống trộm GPS, sạc nhanh 80% trong 45 phút. Thiết kế Italia trẻ trung, phù hợp người đi làm và gia đình đô thị.',
        price: 32900000,
        stockQuantity: 45,
        pictureUrl: bikeImg(101, 0),
        voltage: '72V',
        power: '3000W',
        batteryCapacity: '40Ah Li-on',
        compatibility: null,
        companyId: 1,
        companyName: 'VinFast EcoMobility',
        brandId: 1,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 102,
        name: 'Xe đạp điện thành phố Celesta 26 inch',
        brand: 'Celesta',
        brandName: 'Celesta',
        model: 'City-26',
        category: ElectricBikeCategory.ElectricBikeModel,
        categoryName: 'Xe đạp điện',
        description:
          'Xe đạp điện nhẹ nhàng cho người đi làm, khung nhôm 6061, đùi trước chống xóc, tầm xa 60km ở chế độ pedal-assist. Có 5 cấp trợ lực, màn hình LED hiển thị tốc độ và pin.',
        price: 7990000,
        stockQuantity: 120,
        pictureUrl: bikeImg(102, 1),
        voltage: '36V',
        power: '250W',
        batteryCapacity: '10Ah',
        compatibility: null,
        companyId: 3,
        companyName: 'Xe Điện Xanh SM',
        brandId: 2,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 103,
        name: 'Xe điện giao hàng XSM-Cargo 500kg',
        brand: 'XSM',
        brandName: 'Xe Điện Xanh SM',
        model: 'Cargo-500',
        category: ElectricBikeCategory.ElectricBikeModel,
        categoryName: 'Xe điện tải',
        description:
          'Xe ba bánh điện chuyên giao hàng, thùng rộng 1.6m, tải được 500kg, pin Lithium 60Ah, sạc nhanh 2 giờ. Có cửa hậu hai bên, khóa chống trộm, kính chắn gió.',
        price: 45500000,
        stockQuantity: 22,
        pictureUrl: bikeImg(103, 2),
        voltage: '60V',
        power: '1500W',
        batteryCapacity: '60Ah',
        compatibility: null,
        companyId: 3,
        companyName: 'Xe Điện Xanh SM',
        brandId: 3,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 104,
        name: 'Pin Lithium 48V 20Ah loại A',
        brand: 'Samsung SDI',
        brandName: 'Samsung SDI',
        model: 'Li-4820',
        category: ElectricBikeCategory.ElectricBikePart,
        categoryName: 'Phụ tùng – Pin',
        description:
          'Pin Lithium Samsung chính hãng, tuổi thọ > 800 chu kỳ sạc, kèm BMS thông minh chống quá áp, ngắn mạch, quá nóng. Tương thích hầu hết xe đạp điện 48V trên thị trường.',
        price: 3200000,
        stockQuantity: 300,
        pictureUrl: bikeImg(104, 3),
        voltage: '48V',
        power: null,
        batteryCapacity: '20Ah',
        compatibility: 'Hầu hết xe đạp điện 48V',
        companyId: 1,
        companyName: 'VinFast EcoMobility',
        brandId: 4,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 105,
        name: 'VinFast Vento – Xe máy thể thao điện',
        brand: 'VinFast',
        brandName: 'VinFast',
        model: 'Vento',
        category: ElectricBikeCategory.ElectricBikeModel,
        categoryName: 'Xe máy điện',
        description:
          'Dòng xe thể thao tốc độ cao, tốc độ tối đa 120km/h, tăng tốc 0-60 trong 4.2s. Thiết kế cánh bướm, màn hình TFT màu full option, phuộc Upside-Down, đèn LED laser.',
        price: 59900000,
        stockQuantity: 15,
        pictureUrl: bikeImg(105, 4),
        voltage: '84V',
        power: '8000W',
        batteryCapacity: '70Ah',
        compatibility: null,
        companyId: 1,
        companyName: 'VinFast EcoMobility',
        brandId: 1,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 106,
        name: 'Cụm động cơ bánh xe Brushless 500W',
        brand: 'Bosch',
        brandName: 'Bosch',
        model: 'BLDC-500',
        category: ElectricBikeCategory.ElectricBikePart,
        categoryName: 'Phụ tùng – Động cơ',
        description:
          'Động cơ BLDC hiệu suất cao, chạy êm không tiếng ồn, ít hao mòn, thay thế hoàn hảo cho xe đạp điện và xe máy điện nhỏ dùng bánh 16-20 inch.',
        price: 1850000,
        stockQuantity: 80,
        pictureUrl: bikeImg(106, 5),
        voltage: '36V-48V',
        power: '500W',
        batteryCapacity: null,
        compatibility: 'Bánh xe 16-20 inch',
        companyId: 3,
        companyName: 'Xe Điện Xanh SM',
        brandId: 5,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
    ]);

    this._allMachines.set([
      {
        id: 201,
        name: 'Máy gặt đập liên hợp Kubota DC-105X',
        brand: 'Kubota',
        brandName: 'Kubota',
        model: 'DC-105X',
        category: AgriculturalMachineCategory.MachineModel,
        categoryName: 'Máy gặt',
        description:
          'Máy gặt đa năng năng suất cao, công suất 105HP, gặt được lúa, ngô, đậu tương; cabin lạnh điều hòa, màn hình cảm ứng theo dõi năng suất. Bánh xích cao su êm ái, không hư hại thảm lúa.',
        price: 895000000,
        stockQuantity: 8,
        pictureUrl: machineImg(201, 0),
        engineType: 'Diesel 4 thì V3800',
        power: '105 HP',
        fuelType: 'Diesel',
        capacity: 'Thùng 1.5 tấn thóc',
        compatibility: null,
        companyId: 2,
        companyName: 'Động Lực Nông Nghiệp Việt',
        brandId: 6,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 202,
        name: 'Máy cày 2 bàn đạp Yanmar YM70',
        brand: 'Yanmar',
        brandName: 'Yanmar',
        model: 'YM70',
        category: AgriculturalMachineCategory.MachineModel,
        categoryName: 'Máy cày',
        description:
          'Máy cày tay lái bánh sắt đa năng, động cơ Diesel làm lạnh nước 7HP, bừa ruộng lúa độ sâu 20cm, xới đất, bơm nước, vận chuyển. Tay lái xoay 360 độ dễ dàng góc hẹp.',
        price: 32500000,
        stockQuantity: 30,
        pictureUrl: machineImg(202, 1),
        engineType: 'Diesel làm lạnh bằng nước',
        power: '7 HP',
        fuelType: 'Diesel',
        capacity: 'Thùng nhiên liệu 5 lít',
        compatibility: null,
        companyId: 2,
        companyName: 'Động Lực Nông Nghiệp Việt',
        brandId: 7,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 203,
        name: 'Máy bơm nước GK-100 – 4 inch',
        brand: 'Giken',
        brandName: 'Giken',
        model: 'GK-100',
        category: AgriculturalMachineCategory.MachineModel,
        categoryName: 'Máy bơm',
        description:
          'Máy bơm nước động cơ xăng 6.5HP, lưu lượng lớn 120m³/giờ, hút sâu 8m, đẩy xa 30m. Lắp đặt nhanh, khởi động dễ dàng, dùng tưới tiêu, dẫn nước ruộng đồng, phòng chống lũ.',
        price: 6750000,
        stockQuantity: 65,
        pictureUrl: machineImg(203, 2),
        engineType: 'Xăng 4 thì OHV',
        power: '6.5 HP',
        fuelType: 'Xăng RON95',
        capacity: '120 m³/giờ',
        compatibility: null,
        companyId: 2,
        companyName: 'Động Lực Nông Nghiệp Việt',
        brandId: 8,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 204,
        name: 'Máy phun thuốc kín Kabuto 20 lít',
        brand: 'Kabuto',
        brandName: 'Kabuto',
        model: 'KB-20L',
        category: AgriculturalMachineCategory.MachineModel,
        categoryName: 'Máy phun thuốc',
        description:
          'Máy phun thuốc đeo lưng công nghiệp, bể 20 lít nhựa PP chịu hóa chất, áp suất 4 bar cao, phun đều thuốc bảo vệ thực vật và phân bón lá. Có loại động cơ 2 thì chọn mua.',
        price: 1490000,
        stockQuantity: 200,
        pictureUrl: machineImg(204, 3),
        engineType: 'Cơ khí – tay bơm (có loại động cơ chọn mua)',
        power: null,
        fuelType: null,
        capacity: '20 lít',
        compatibility: null,
        companyId: 2,
        companyName: 'Động Lực Nông Nghiệp Việt',
        brandId: 9,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 205,
        name: 'Lưỡi dao máy gặt Kubota – bộ 3 chiếc',
        brand: 'Kubota',
        brandName: 'Kubota',
        model: 'Blade-Kit',
        category: AgriculturalMachineCategory.MachinePart,
        categoryName: 'Phụ tùng – Lưỡi dao',
        description:
          'Bộ 3 lưỡi dao thay thế cho máy gặt Kubota dòng DC, thép hợp kim cao cấp SK5, bền sắc lâu cần ít thay thế. Cắt nhanh gãy nhẹ, giảm tải cho động cơ.',
        price: 890000,
        stockQuantity: 150,
        pictureUrl: machineImg(205, 4),
        engineType: null,
        power: null,
        fuelType: null,
        capacity: null,
        compatibility: 'DC-70, DC-95, DC-105X',
        companyId: 2,
        companyName: 'Động Lực Nông Nghiệp Việt',
        brandId: 6,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 206,
        name: 'Lọc dầu động cơ Yanmar YM70',
        brand: 'Yanmar',
        brandName: 'Yanmar',
        model: 'OilFilter-YM70',
        category: AgriculturalMachineCategory.MachinePart,
        categoryName: 'Phụ tùng – Lọc dầu',
        description:
          'Lọc dầu chính hãng, giữ sạch dầu động cơ kéo dài tuổi thọ máy cày Yanmar YM50 / YM70. Lõi giấy nhập khẩu Nhật Bản, chịu nhiệt 150°C không biến dạng.',
        price: 220000,
        stockQuantity: 400,
        pictureUrl: machineImg(206, 5),
        engineType: null,
        power: null,
        fuelType: null,
        capacity: null,
        compatibility: 'Yanmar YM50, YM70',
        companyId: 2,
        companyName: 'Động Lực Nông Nghiệp Việt',
        brandId: 7,
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
    ]);
  }

  private _buildGallery(p: ElectricBikeProduct | AgriculturalMachineProduct) {
    const kind: ProductKind =
      'voltage' in p ? 'bike' : 'machine';
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

  private _relatedFor(id: number, kind: ProductKind): number[] {
    // simple heuristics
    if (kind === 'bike') {
      const pool = [101, 102, 103, 104, 105, 106];
      return pool.filter((x) => x !== id);
    }
    const pool = [201, 202, 203, 204, 205, 206];
    return pool.filter((x) => x !== id);
  }

  private _findBike(id: number): UnifiedProduct | null {
    const p = this._allBikes().find((x) => x.id === id);
    if (!p) return null;
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
      relatedIds: this._relatedFor(p.id, 'bike'),
    };
  }

  private _findMachine(id: number): UnifiedProduct | null {
    const p = this._allMachines().find((x) => x.id === id);
    if (!p) return null;
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
      relatedIds: this._relatedFor(p.id, 'machine'),
    };
  }

  private _mockWarranties(): WarrantyRecord[] {
    const today = new Date();
    const addDays = (days: number) => {
      const d = new Date(today);
      d.setDate(d.getDate() + days);
      return d;
    };
    const subtractDays = (days: number) => {
      const d = new Date(today);
      d.setDate(d.getDate() - days);
      return d;
    };
    const calcDaysLeft = (end: Date) =>
      Math.max(
        0,
        Math.floor(
          (end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
        ),
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
          'Bảo hành đã hết hạn từ ngày ' +
            rec3End.toLocaleDateString('vi-VN'),
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
