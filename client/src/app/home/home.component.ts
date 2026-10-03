import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { PRODUCT_KIND_ROUTES } from '../shared/models/product-category';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { CommitmentsSectionComponent } from './sections/commitments-section/commitments-section.component';
import { IndustrySectionComponent } from './sections/industry-section/industry-section.component';
import {
  DEFAULT_HOME_PAGE_CONTENT,
  resolveHomePageContent,
} from './home-content.model';
import { HomeContentService } from './home-content.service';
import { WarrantySectionComponent } from './sections/warranty-section/warranty-section.component';
import { CtaSectionComponent } from './sections/cta-section/cta-section.component';
import { RecruitmentSectionComponent } from './sections/recruitment-section/recruitment-section.component';
import { CompanySectionComponent } from './sections/company-section/company-section.component';
import { SolutionsSectionComponent } from './sections/solutions-section/solutions-section.component';

type ProductKind = 'bike' | 'machine' | 'appliance';
type HomeTab = ProductKind | 'home' | 'recruitment';
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
    MatIconModule,
    HeroSectionComponent,
    IndustrySectionComponent,
    CommitmentsSectionComponent,
    WarrantySectionComponent,
    RecruitmentSectionComponent,
    CtaSectionComponent,
    CompanySectionComponent,
    SolutionsSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly homeContentService = inject(HomeContentService);

  readonly homeContent = signal(DEFAULT_HOME_PAGE_CONTENT);
  private readonly viewport = toSignal(
    inject(BreakpointObserver).observe('(max-width: 767.98px)'),
    { initialValue: { matches: false, breakpoints: {} } },
  );
  readonly isMobile = computed(() => this.viewport().matches);
  readonly activeTab = signal<HomeTab>('home');
  readonly tabs = computed(() => [
    { id: 'home' as HomeTab, label: this.homeContent().navigation.homeLabel, icon: 'home' },
    ...this.homeContent().hero.cards.map((card) => ({ id: card.kind as HomeTab, label: card.title, icon: card.icon })),
    { id: 'recruitment' as HomeTab, label: this.homeContent().navigation.recruitmentLabel, icon: 'group' },
  ]);
  readonly activeIndustry = computed(() =>
    this.homeContent().industries.find((industry) => industry.kind === this.activeTab())
      ?? this.homeContent().industries[0],
  );
  readonly warrantySerial = signal('');
  readonly warrantyPhone = signal('');
  readonly warrantyResult = signal<WarrantyLookupResult | null>(null);
  readonly warrantySearchSubmitted = signal(false);
  readonly warrantyLookupKind = signal<ProductKind>('bike');
  readonly warrantyLookupProductId = signal('');

  private readonly _allWarranties = signal<WarrantyRecord[]>([]);

  ngOnInit(): void {
    this.homeContentService.get().pipe(catchError(() => of(null))).subscribe((response) => {
      const content = resolveHomePageContent(response?.content);
      if (content) this.homeContent.set(content);
    });

    this._allWarranties.set(this.mockWarranties());
  }

  scrollToSection(id: string): void {
    const card = this.homeContent().hero.cards.find((item) => item.anchor === id || item.kind === id);
    if (card || id === 'recruitment') {
      this.activeTab.set(card?.kind ?? 'recruitment');
    } else if (['hero', 'company', 'solutions', 'commitments', 'warranty', 'cta'].includes(id)) {
      this.activeTab.set('home');
    }
    requestAnimationFrame(() => document.getElementById(card?.anchor ?? id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }

  onTabKeydown(event: KeyboardEvent, index: number): void {
    const tabs = this.tabs();
    let next: number;
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % tabs.length; break;
      case 'ArrowLeft': next = (index - 1 + tabs.length) % tabs.length; break;
      case 'Home': next = 0; break;
      case 'End': next = tabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    this.activeTab.set(tabs[next].id);
    const tab = document.getElementById('home-tab-' + tabs[next].id);
    tab?.focus({ preventScroll: true });
    tab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
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
