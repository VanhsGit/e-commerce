import { Component, EventEmitter, Input, Output, Signal, computed, isSignal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { AgriculturalMachineProduct } from '../../../shared/models/agriculturalMachineProduct';
import { IndustryPanelComponent } from '../shared/industry-panel/industry-panel.component';
import {
  IndustryBrand,
  IndustryCategory,
  IndustryStat,
} from '../shared/industry-panel/industry-panel.model';

/** Icon và mô tả dự phòng cho từng danh mục máy nông nghiệp. */
const CATEGORY_META: Record<number, { icon: string; note: string }> = {
  1: { icon: 'agriculture', note: 'Máy nguyên chiếc nhập khẩu chính ngạch.' },
  2: { icon: 'build', note: 'Phụ tùng thay thế, sẵn kho giao nhanh.' },
};

@Component({
  selector: 'app-home-agriculture',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
    MatIconModule,
    IndustryPanelComponent,
  ],
  providers: [DecimalPipe],
  templateUrl: './agriculture-section.component.html',
})
export class AgricultureSectionComponent {
  @Input() products!:
    | AgriculturalMachineProduct[]
    | Signal<AgriculturalMachineProduct[]>;
  @Output() navigate = new EventEmitter<string>();

  constructor(private readonly decimal: DecimalPipe) {}

  readonly productList = computed<AgriculturalMachineProduct[]>(() => {
    const raw = isSignal(this.products) ? this.products() : this.products ?? [];
    return raw.filter((p) => p.isUsed !== false);
  });

  /** Danh mục dựng từ dữ liệu thật, kèm số mẫu và giá khởi điểm. */
  readonly categories = computed<IndustryCategory[]>(() => {
    const groups = new Map<number, AgriculturalMachineProduct[]>();
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
          queryParams: { type: 'machine', category: key },
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
        queryParams: { type: 'machine', brand: name },
      }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  });

  readonly stats = computed<IndustryStat[]>(() => {
    const items = this.productList();
    const priceFrom = this.minPrice(items);
    return [
      { icon: 'agriculture', label: 'Máy đang bán', value: `${items.length}` },
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
      icon: 'schedule',
      title: 'Gặt 4 – 6 sào mỗi giờ',
      note: 'Rút ngắn mùa vụ, giảm tới 70% chi phí thuê nhân công.',
    },
    {
      icon: 'workspace_premium',
      title: 'Nhập khẩu chính ngạch',
      note: 'Máy Nhật Bản – Hàn Quốc, đầy đủ giấy tờ CO – CQ và hóa đơn VAT.',
    },
    {
      icon: 'handyman',
      title: 'Kỹ thuật xuống tận ruộng',
      note: 'Xử lý sự cố trong 24 giờ, kho phụ tùng luôn sẵn hàng.',
    },
    {
      icon: 'handshake',
      title: 'Trả góp theo mùa vụ',
      note: 'Chính sách riêng cho hợp tác xã và hộ canh tác diện tích lớn.',
    },
  ];

  readonly allMachinesQueryParams = { type: 'machine' as const };
  readonly listingPath = '/products';

  private distinct(values: (string | null | undefined)[]): string[] {
    return [...new Set(values.filter((v): v is string => !!v))];
  }

  private minPrice(items: AgriculturalMachineProduct[]): number | null {
    const prices = items.map((i) => i.price).filter((p) => p > 0);
    return prices.length ? Math.min(...prices) : null;
  }
}
