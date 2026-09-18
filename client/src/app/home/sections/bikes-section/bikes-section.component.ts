import { Component, EventEmitter, Input, Output, Signal, computed, isSignal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { ElectricBikeProduct } from '../../../shared/models/electricBikeProduct';
import { IndustryPanelComponent } from '../shared/industry-panel/industry-panel.component';
import {
  IndustryBrand,
  IndustryCategory,
  IndustryStat,
} from '../shared/industry-panel/industry-panel.model';

/** Icon và mô tả dự phòng cho từng danh mục xe điện. */
const CATEGORY_META: Record<number, { icon: string; note: string }> = {
  1: { icon: 'two_wheeler', note: 'Xe nguyên chiếc, có tem và hóa đơn VAT.' },
  2: { icon: 'settings', note: 'Pin, sạc và phụ tùng thay thế chính hãng.' },
};

@Component({
  selector: 'app-home-bikes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
    MatIconModule,
    IndustryPanelComponent,
  ],
  providers: [DecimalPipe],
  templateUrl: './bikes-section.component.html',
})
export class BikesSectionComponent {
  @Input() products!: ElectricBikeProduct[] | Signal<ElectricBikeProduct[]>;
  @Output() navigate = new EventEmitter<string>();

  constructor(private readonly decimal: DecimalPipe) {}

  readonly productList = computed<ElectricBikeProduct[]>(() => {
    const raw = isSignal(this.products) ? this.products() : this.products ?? [];
    return raw.filter((p) => p.isUsed !== false);
  });

  /** Danh mục dựng từ dữ liệu thật, kèm số mẫu và giá khởi điểm. */
  readonly categories = computed<IndustryCategory[]>(() => {
    const groups = new Map<number, ElectricBikeProduct[]>();
    for (const p of this.productList()) {
      const list = groups.get(p.category);
      if (list) list.push(p);
      else groups.set(p.category, [p]);
    }

    return [...groups.entries()]
      .map(([key, items]) => {
        const meta = CATEGORY_META[key];
        const brands = this.distinct(items.map((i) => i.brandName));
        return {
          key,
          name: items[0]?.categoryName || 'Khác',
          icon: meta?.icon ?? 'category',
          count: items.length,
          priceFrom: this.minPrice(items),
          image: items.find((i) => !!i.pictureUrl)?.pictureUrl ?? null,
          note: brands.length
            ? brands.slice(0, 3).join(' · ')
            : meta?.note ?? 'Đang cập nhật sản phẩm.',
          queryParams: { type: 'bike', category: key },
        } satisfies IndustryCategory;
      })
      .sort((a, b) => b.count - a.count);
  });

  readonly brands = computed<IndustryBrand[]>(() => {
    const counter = new Map<string, number>();
    for (const p of this.productList()) {
      if (!p.brandName) continue;
      counter.set(p.brandName, (counter.get(p.brandName) ?? 0) + 1);
    }
    return [...counter.entries()]
      .map(([name, count]) => ({
        name,
        count,
        queryParams: { type: 'bike', brand: name },
      }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  });

  readonly stats = computed<IndustryStat[]>(() => {
    const items = this.productList();
    const priceFrom = this.minPrice(items);
    return [
      { icon: 'electric_moped', label: 'Mẫu xe đang bán', value: `${items.length}` },
      { icon: 'workspace_premium', label: 'Thương hiệu phân phối', value: `${this.brands().length}` },
      { icon: 'category', label: 'Danh mục hàng', value: `${this.categories().length}` },
      {
        icon: 'sell',
        label: 'Giá khởi điểm',
        value: priceFrom !== null ? `${this.decimal.transform(priceFrom)}₫` : 'Liên hệ',
      },
    ];
  });

  readonly highlights = [
    {
      icon: 'battery_charging_full',
      title: 'Đi 80 – 120 km mỗi lần sạc',
      note: 'Sạc đầy 4 – 6 giờ, khoảng 3.000đ tiền điện cho 100 km.',
    },
    {
      icon: 'verified_user',
      title: 'Bảo hành xe 3 năm',
      note: 'Riêng pin lithium bảo hành tới 5 năm hoặc 30.000 km.',
    },
    {
      icon: 'credit_card',
      title: 'Trả góp 0% lãi suất',
      note: 'Trả trước từ 20%, duyệt hồ sơ và nhận xe ngay trong ngày.',
    },
    {
      icon: 'local_shipping',
      title: 'Giao lắp tận nhà',
      note: 'Miễn phí giao xe nội thành, hỗ trợ vận chuyển 63 tỉnh thành.',
    },
  ];

  readonly allBikesQueryParams = { type: 'bike' as const };
  readonly listingPath = '/products';

  private distinct(values: (string | null | undefined)[]): string[] {
    return [...new Set(values.filter((v): v is string => !!v))];
  }

  private minPrice(items: ElectricBikeProduct[]): number | null {
    const prices = items.map((i) => i.price).filter((p) => p > 0);
    return prices.length ? Math.min(...prices) : null;
  }
}
