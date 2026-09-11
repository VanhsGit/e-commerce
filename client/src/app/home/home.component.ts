import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { Company } from '../shared/models/company';
import {
  ElectricBikeProduct,
  ElectricBikeCategory,
} from '../shared/models/electricBikeProduct';
import {
  AgriculturalMachineProduct,
  AgriculturalMachineCategory,
} from '../shared/models/agriculturalMachineProduct';

type ProductKind = 'bike' | 'machine';
type SearchCategory = 'all' | ProductKind;
type WarrantyStatus = 'active' | 'expired' | 'notfound';

interface SearchResultItem {
  kind: ProductKind;
  id: number;
  name: string;
  brandName: string;
  categoryName: string;
  price: number;
  pictureUrl: string;
  description: string;
}

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

interface WarrantyLookupResult {
  status: WarrantyStatus;
  record?: WarrantyRecord;
  message: string;
}

interface CompanyStat {
  value: string;
  label: string;
  icon: string;
}

interface CompanyValue {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzCardModule,
    NzTagModule,
    NzGridModule,
    NzAlertModule,
    NzToolTipModule,
    NzBadgeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);

  readonly searchKeyword = signal('');
  readonly searchCategory = signal<SearchCategory>('all');
  readonly minPrice = signal<number | null>(null);
  readonly maxPrice = signal<number | null>(null);

  readonly warrantySerial = signal('');
  readonly warrantyPhone = signal('');
  readonly warrantyResult = signal<WarrantyLookupResult | null>(null);
  readonly warrantySearchSubmitted = signal(false);

  private readonly _allWarranties = signal<WarrantyRecord[]>([]);

  readonly companies = signal<Company[]>([]);
  readonly electricBikes = signal<ElectricBikeProduct[]>([]);
  readonly agriculturalMachines = signal<AgriculturalMachineProduct[]>([]);

  readonly companyStory = signal<{
    heading: string;
    subheading: string;
    mission: string;
    vision: string;
    introParagraph: string;
    stats: CompanyStat[];
    values: CompanyValue[];
    milestones: CompanyMilestone[];
    ceoQuote: { text: string; author: string; role: string };
  } | null>(null);

  readonly featuredBikes = computed(() => this.electricBikes().slice(0, 4));
  readonly featuredMachines = computed(() =>
    this.agriculturalMachines().slice(0, 4),
  );

  readonly searchResults = computed<SearchResultItem[]>(() => {
    const keyword = this.searchKeyword().toLowerCase().trim();
    const category = this.searchCategory();
    const min = this.minPrice();
    const max = this.maxPrice();

    const bikes: SearchResultItem[] =
      category === 'all' || category === 'bike'
        ? this.electricBikes().map((b) => ({
            kind: 'bike' as ProductKind,
            id: b.id,
            name: b.name,
            brandName: b.brandName,
            categoryName: b.categoryName,
            price: b.price,
            pictureUrl: b.pictureUrl,
            description: b.description,
          }))
        : [];

    const machines: SearchResultItem[] =
      category === 'all' || category === 'machine'
        ? this.agriculturalMachines().map((m) => ({
            kind: 'machine' as ProductKind,
            id: m.id,
            name: m.name,
            brandName: m.brandName,
            categoryName: m.categoryName,
            price: m.price,
            pictureUrl: m.pictureUrl,
            description: m.description,
          }))
        : [];

    return [...bikes, ...machines].filter((item) => {
      const matchKeyword =
        !keyword ||
        item.name.toLowerCase().includes(keyword) ||
        item.brandName.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword);
      const matchMin = min == null || item.price >= min;
      const matchMax = max == null || item.price <= max;
      return matchKeyword && matchMin && matchMax;
    });
  });

  ngOnInit(): void {
    this.loadMockData();
  }

  getDetailUrl(kind: ProductKind, id: number) {
    return ['/product-detail', kind, id];
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  lookupWarranty() {
    this.warrantySearchSubmitted.set(true);
    const serial = this.warrantySerial().trim().toUpperCase();
    const phone = this.warrantyPhone().trim();
    const records = this._allWarranties();

    if (!serial && !phone) {
      this.warrantyResult.set({
        status: 'notfound',
        message:
          'Vui lòng nhập Số Serial sản phẩm hoặc Số điện thoại đã mua hàng để tra cứu bảo hành.',
      });
      return;
    }

    const matched = records.find(
      (r) =>
        (serial && r.serialNumber.toUpperCase() === serial) ||
        (phone && r.customerPhone.replace(/\D/g, '') === phone.replace(/\D/g, '')),
    );

    if (matched) {
      this.warrantyResult.set({
        status: matched.status,
        record: matched,
        message:
          matched.status === 'active'
            ? `Đã tìm thấy thông tin bảo hành. Đang chuyển đến trang chi tiết sản phẩm...`
            : 'Đã tìm thấy thông tin bảo hành (đã hết hạn). Đang chuyển đến trang chi tiết sản phẩm...',
      });
      setTimeout(() => {
        void this.router.navigate(
          ['/product-detail', matched.productKind, matched.productId],
          {
            queryParams: { serial: matched.serialNumber },
          },
        );
      }, 600);
    } else {
      this.warrantyResult.set({
        status: 'notfound',
        message:
          'Không tìm thấy thông tin bảo hành. Hãy kiểm tra lại số Serial hoặc SĐT, hoặc liên hệ tổng đài để được hỗ trợ.',
      });
    }
  }

  resetWarranty() {
    this.warrantySerial.set('');
    this.warrantyPhone.set('');
    this.warrantyResult.set(null);
    this.warrantySearchSubmitted.set(false);
  }

  private loadMockData() {
    this.companies.set(this.mockCompanies());
    this.electricBikes.set(this.mockElectricBikes());
    this.agriculturalMachines.set(this.mockAgriculturalMachines());
    this._allWarranties.set(this.mockWarranties());
    this.companyStory.set(this.mockCompanyStory());
  }

  private mockWarranties(): WarrantyRecord[] {
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

  private mockCompanies(): Company[] {
    const now = new Date();
    return [
      {
        id: 1,
        name: 'VinFast EcoMobility',
        description:
          'VinFast chuyên sản xuất xe điện thông minh, bền bỉ, thiết kế hiện đại với công nghệ pin tiên tiến.',
        logoUrl: 'https://placehold.co/400x400/10b981/ffffff?text=VF',
        address: 'Công viên phần mềm Quang Trung, Quận 12, TP.HCM',
        phoneNumber: '1900 2323 89',
        email: 'contact@vinfast-eco.vn',
        website: 'https://vinfast.vn',
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 2,
        name: 'Động Lực Nông Nghiệp Việt',
        description:
          'Nhà nhập khẩu và phân phối máy móc nông nghiệp chính hãng từ Nhật Bản, Đức, Thái Lan. Bảo hành dài hạn.',
        logoUrl: 'https://placehold.co/400x400/f59e0b/ffffff?text=DLNN',
        address: 'Số 88 Nguyễn Văn Linh, Quận Hải Châu, Đà Nẵng',
        phoneNumber: '0236 3888 666',
        email: 'info@donglucnn.vn',
        website: 'https://donglucnn.vn',
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
      {
        id: 3,
        name: 'Xe Điện Xanh SM',
        description:
          'Xe điện đô thị, xe điện giao hàng, xe chở hàng điện với nhiều dòng sản phẩm phù hợp nhu cầu cá nhân và doanh nghiệp.',
        logoUrl: 'https://placehold.co/400x400/0ea5e9/ffffff?text=XSM',
        address: 'Số 456 Cầu Giấy, Quận Cầu Giấy, Hà Nội',
        phoneNumber: '024 6688 0099',
        email: 'hello@xedienxanh.vn',
        website: 'https://xedienxanh.vn',
        createdAt: now,
        updatedAt: now,
        metadata: {},
      },
    ];
  }

  private mockElectricBikes(): ElectricBikeProduct[] {
    const now = new Date();
    const colors = ['10b981', '0ea5e9', '06b6d4', '0891b2', '0284c7', '7c3aed'];
    const bikeImg = (id: number, idx: number) =>
      `https://placehold.co/800x800/${colors[idx % colors.length]}/ffffff?text=XE+${id}`;
    return [
      {
        id: 101,
        name: 'VinFast Evo200 – Xe máy điện cao cấp',
        brand: 'VinFast',
        brandName: 'VinFast',
        model: 'Evo200',
        category: ElectricBikeCategory.ElectricBikeModel,
        categoryName: 'Xe máy điện',
        description:
          'Xe máy điện thời thượng, tầm xa 200km/sạc, công nghệ kết nối thông minh, chống trộm GPS.',
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
          'Xe đạp điện nhẹ nhàng cho người đi làm, khung nhôm, đùi trước chống xóc, tầm xa 60km.',
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
          'Xe ba bánh điện chuyên giao hàng, thùng rộng, tải được 500kg, pin Lithium, sạc nhanh 2 giờ.',
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
          'Pin Lithium Samsung chính hãng, tuổi thọ > 800 chu kỳ sạc, kèm BMS thông minh, chống ngắn mạch.',
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
          'Dòng xe thể thao, tốc độ tối đa 120km/h, thiết kế cánh bướm, màn hình TFT màu full option.',
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
          'Động cơ BLDC hiệu suất cao, chạy êm, ít hao mòn, thay thế cho xe đạp điện và xe máy điện nhỏ.',
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
    ];
  }

  private mockAgriculturalMachines(): AgriculturalMachineProduct[] {
    const now = new Date();
    const colors = ['f59e0b', 'ea580c', 'eab308', 'd97706', 'b45309', '92400e'];
    const machineImg = (id: number, idx: number) =>
      `https://placehold.co/800x800/${colors[idx % colors.length]}/ffffff?text=NN+${id}`;
    return [
      {
        id: 201,
        name: 'Máy gặt đập liên hợp Kubota DC-105X',
        brand: 'Kubota',
        brandName: 'Kubota',
        model: 'DC-105X',
        category: AgriculturalMachineCategory.MachineModel,
        categoryName: 'Máy gặt',
        description:
          'Máy gặt đa năng năng suất cao, công suất 105HP, gặt được lúa, ngô, đậu tương; cabin lạnh điều hòa.',
        price: 895000000,
        stockQuantity: 8,
        pictureUrl: machineImg(201, 0),
        engineType: 'Diesel 4 thì',
        power: '105 HP',
        fuelType: 'Diesel',
        capacity: 'Thùng 1.5 tấn',
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
          'Máy cày tay lái bánh sắt, công suất 7HP, bừa ruộng lúa, xới đất, bơm nước, vận chuyển đa năng.',
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
          'Máy bơm nước động cơ xăng, lưu lượng lớn 120m³/giờ, dùng tưới tiêu, dẫn nước ruộng đồng, phòng chống lũ.',
        price: 6750000,
        stockQuantity: 65,
        pictureUrl: machineImg(203, 2),
        engineType: 'Xăng 4 thì',
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
          'Máy phun thuốc đeo lưng công nghiệp, bể 20 lít, áp suất cao, phun đều thuốc bảo vệ thực vật và phân bón lá.',
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
          'Bộ lưỡi dao thay thế cho máy gặt Kubota, thép cao cấp, bền sắc, cắt nhanh gãy nhẹ.',
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
          'Lọc dầu chính hãng, giữ sạch dầu máy, tăng tuổi thọ động cơ máy cày Yanmar YM50 / YM70.',
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
    ];
  }

  private mockCompanyStory() {
    const stats: CompanyStat[] = [
      {
        value: '15+',
        label: 'Năm đồng hành cùng khách hàng',
        icon: 'fa fa-history',
      },
      {
        value: '50.000+',
        label: 'Xe điện & Máy móc đã giao hàng',
        icon: 'fa fa-truck',
      },
      {
        value: '63/63',
        label: 'Tỉnh thành có đại lý phục vụ',
        icon: 'fa fa-map-marker',
      },
      {
        value: '4.9/5',
        label: 'Đánh giá hài lòng từ khách hàng',
        icon: 'fa fa-star',
      },
    ];

    const values: CompanyValue[] = [
      {
        icon: 'fa fa-shield',
        title: 'Chính hãng 100%',
        description:
          'Tất cả sản phẩm đều nhập khẩu trực tiếp từ nhà sản xuất, có nguồn gốc xuất xứ rõ ràng và tem chống giả.',
        color: 'from-emerald-500 to-teal-500',
      },
      {
        icon: 'fa fa-headphones',
        title: 'Hỗ trợ 24/7',
        description:
          'Tổng đài chăm sóc khách hàng hoạt động tất cả các ngày trong tuần, có đội ngũ kỹ thuật tại chỗ 63 tỉnh thành.',
        color: 'from-sky-500 to-indigo-500',
      },
      {
        icon: 'fa fa-leaf',
        title: 'Hướng tới xanh',
        description:
          'Ưu tiên các dòng sản phẩm tiết kiệm năng lượng, không thải khí CO2, góp phần xây dựng nông nghiệp & đô thị bền vững.',
        color: 'from-lime-500 to-emerald-500',
      },
      {
        icon: 'fa fa-money',
        title: 'Giá cạnh tranh',
        description:
          'Chính sách nhập khẩu số lượng lớn, cắt giảm trung gian giúp giá bán luôn tốt hơn thị trường 5-15% cùng nhiều chương trình hỗ trợ trả góp 0%.',
        color: 'from-amber-500 to-orange-500',
      },
    ];

    const milestones: CompanyMilestone[] = [
      {
        year: '2010',
        icon: 'fa fa-lightbulb-o',
        title: 'Thành lập công ty',
        description:
          'Khởi đầu với 3 nhà sáng lập và showroom đầu tiên tại TP.HCM chuyên nhập khẩu & phân phối máy nông nghiệp.',
      },
      {
        year: '2015',
        icon: 'fa fa-expand',
        title: 'Mở rộng toàn quốc',
        description:
          'Xây dựng hệ thống 20 đại lý chính thức ở 20 tỉnh thành, trở thành nhà phân phối độc quyền Kubota, Yanmar tại miền Nam.',
      },
      {
        year: '2019',
        icon: 'fa fa-bolt',
        title: 'Bước vào ngành xe điện',
        description:
          'Ra mắt thương hiệu Xe Điện Xanh SM, ký hợp tác chiến lược với VinFast và nhiều thương hiệu xe điện quốc tế.',
      },
      {
        year: '2022',
        icon: 'fa fa-trophy',
        title: 'Top 5 nhà phân phối',
        description:
          'Vinh danh Top 5 nhà phân phối xe điện & máy nông nghiệp lớn nhất Việt Nam, đạt chứng nhận ISO 9001:2015.',
      },
      {
        year: '2025',
        icon: 'fa fa-rocket',
        title: 'Hệ sinh thái toàn diện',
        description:
          'Phát triển hệ thống Tra cứu bảo hành điện tử, sạc pin công cộng, và dịch vụ sửa chữa tại nhà trên phạm vi cả nước.',
      },
    ];

    return {
      heading: 'Về chúng tôi – Hệ sinh thái Xe Điện & Máy Nông Nghiệp hàng đầu',
      subheading: 'Câu chuyện 15 năm xây dựng niềm tin',
      mission:
        'Cung cấp giải pháp di chuyển đô thị (xe điện) và trang thiết bị nông nghiệp hiện đại với chất lượng quốc tế, giá cả hợp lý cùng dịch vụ hậu mãi xuất sắc cho mọi gia đình và doanh nghiệp Việt Nam.',
      vision:
        'Trở thành hệ sinh thái phân phối, bảo hành và dịch vụ sau bán hàng số 1 Việt Nam trong lĩnh vực xe điện và máy nông nghiệp vào năm 2030, dẫn đầu xu hướng xanh – bền vững.',
      introParagraph:
        'Được thành lập từ năm 2010, với hơn 15 năm kinh nghiệm trong ngành nhập khẩu và phân phối, VinFast EcoMobility cùng 2 đối tác chiến lược (Động Lực Nông Nghiệp Việt & Xe Điện Xanh SM) đã xây dựng được niềm tin vững chắc từ hơn 50.000 khách hàng cá nhân và doanh nghiệp trên khắp 63 tỉnh thành. Từ một showroom nhỏ ở Sài Gòn, đến nay chúng tôi sở hữu mạng lưới 100+ đại lý, 3 trung tâm bảo hành chuyên sâu và đội ngũ kỹ thuật được đào tạo bài bản tại Nhật Bản và Hàn Quốc.',
      stats,
      values,
      milestones,
      ceoQuote: {
        text:
          '"Thành công bền vững của chúng tôi không nằm ở số lượng sản phẩm bán ra, mà nằm ở nụ cười hài lòng của mỗi khách hàng sau nhiều năm sử dụng. Chính vì thế, mọi quyết định của công ty đều lấy khách hàng làm trọng tâm."',
        author: 'Nguyễn Thành Nam',
        role: 'Tổng Giám đốc – VinFast EcoMobility Group',
      },
    };
  }
}
