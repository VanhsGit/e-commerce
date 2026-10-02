import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { catchError, forkJoin, of } from 'rxjs';
import { PRODUCT_KIND_ROUTES } from '../shared/models/product-category';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { ElectricalApplianceProduct } from '../shared/models/electrical-appliance-product';
import { ProductCardItem } from '../shared/components/product-card/product-card-item.model';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { CommitmentsSectionComponent } from './sections/commitments-section/commitments-section.component';
import { IndustrySectionComponent } from './sections/industry-section/industry-section.component';
import {
  DEFAULT_HOME_PAGE_CONTENT,
  isSupportedHomePageContent,
} from './home-content.model';
import { HomeContentService } from './home-content.service';
import { WarrantySectionComponent } from './sections/warranty-section/warranty-section.component';
import { CtaSectionComponent } from './sections/cta-section/cta-section.component';
import { RecruitmentSectionComponent } from './sections/recruitment-section/recruitment-section.component';

const HOME_PRODUCTS_PER_KIND = 8;

type ProductKind = 'bike' | 'machine' | 'appliance';
type WarrantyStatus = 'active' | 'expired' | 'notfound';

interface WarrantyRecord {
  serialNumber: string;
  productId: string;
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroSectionComponent,
    IndustrySectionComponent,
    CommitmentsSectionComponent,
    WarrantySectionComponent,
    RecruitmentSectionComponent,
    CtaSectionComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly electricBikeService = inject(ElectricBikeService);
  private readonly agriculturalMachineService = inject(AgriculturalMachineService);
  private readonly electricalApplianceService = inject(ElectricalApplianceService);
  private readonly homeContentService = inject(HomeContentService);

  readonly homeContent = signal(DEFAULT_HOME_PAGE_CONTENT);
  readonly bikeIndustry = computed(() => this.homeContent().industries[0]);
  readonly machineIndustry = computed(() => this.homeContent().industries[1]);
  readonly applianceIndustry = computed(() => this.homeContent().industries[2]);

  readonly bikeCards = computed<ProductCardItem[]>(() =>
    this.electricBikes()
      .filter((p) => p.isUsed !== false)
      .slice(0, HOME_PRODUCTS_PER_KIND)
      .map((p) => this.toCard('bike', p, p.categoryName, [p.voltage, p.power, p.batteryCapacity])),
  );
  readonly machineCards = computed<ProductCardItem[]>(() =>
    this.agriculturalMachines()
      .filter((p) => p.isUsed !== false)
      .slice(0, HOME_PRODUCTS_PER_KIND)
      .map((p) => this.toCard('machine', p, p.categoryName, [p.engineType, p.power, p.capacity])),
  );
  readonly applianceCards = computed<ProductCardItem[]>(() =>
    this.electricalAppliances()
      .filter((p) => p.isUsed !== false)
      .slice(0, HOME_PRODUCTS_PER_KIND)
      .map((p) => this.toCard('appliance', p, p.typeName, [p.power, p.voltage, p.capacity])),
  );

  readonly warrantySerial = signal('');
  readonly warrantyPhone = signal('');
  readonly warrantyResult = signal<WarrantyLookupResult | null>(null);
  readonly warrantySearchSubmitted = signal(false);
  readonly warrantyLookupKind = signal<ProductKind>('bike');
  readonly warrantyLookupProductId = signal('');

  private readonly _allWarranties = signal<WarrantyRecord[]>([]);

  readonly electricBikes = signal<ElectricBikeProduct[]>([]);
  readonly agriculturalMachines = signal<AgriculturalMachineProduct[]>([]);
  readonly electricalAppliances = signal<ElectricalApplianceProduct[]>([]);

  ngOnInit(): void {
    this.homeContentService.get().pipe(catchError(() => of(null))).subscribe((response) => {
      if (isSupportedHomePageContent(response?.content)) this.homeContent.set(response.content);
    });

    forkJoin({
      bikes: this.electricBikeService.getAll({ isUsed: true }).pipe(catchError(() => of([] as ElectricBikeProduct[]))),
      machines: this.agriculturalMachineService.getAll({ isUsed: true }).pipe(catchError(() => of([] as AgriculturalMachineProduct[]))),
      appliances: this.electricalApplianceService.getAll({ isUsed: true }).pipe(catchError(() => of([] as ElectricalApplianceProduct[]))),
    }).subscribe({
      next: ({ bikes, machines, appliances }) => {
        this.electricBikes.set(bikes);
        this.agriculturalMachines.set(machines);
        this.electricalAppliances.set(appliances);
      },
    });
    this._allWarranties.set(this.mockWarranties());
  }

  private toCard(
    kind: ProductKind,
    p: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
    legacyCategoryName: string,
    chips: (string | null)[],
  ): ProductCardItem {
    const colors = (p.colors ?? []).filter((c) => !!c.name || !!c.hexCode);
    return {
      kind,
      id: p.id,
      name: p.name,
      brandName: p.brandName,
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
    };
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

  lookupProductById() {
    const kind = this.warrantyLookupKind();
    const idRaw = this.warrantyLookupProductId().trim();
    if (!kind || !idRaw) {
      void this.router.navigate([kind ? PRODUCT_KIND_ROUTES[kind] : '/']);
      return;
    }
    void this.router.navigate(['/product-detail', kind, idRaw]);
  }

  browseAll(kind: ProductKind | 'all') {
    void this.router.navigate([kind === 'all' ? '/' : PRODUCT_KIND_ROUTES[kind]]);
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
        productId: 'eb000001-0000-0000-0000-000000000101',
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
        productId: 'am000001-0000-0000-0000-000000000201',
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
        productId: 'am000002-0000-0000-0000-000000000202',
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
        productId: 'eb000002-0000-0000-0000-000000000102',
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
