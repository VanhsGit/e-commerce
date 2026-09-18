import { CommonModule, DecimalPipe } from '@angular/common';
import { Component, Input, Signal, computed, isSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EllipsisTooltipDirective } from '../../../shared/directives/ellipsis-tooltip.directive';
import {
  IndustryBrand,
  IndustryContent,
  IndustryProduct,
  IndustryStat,
  IndustryTheme,
} from './industry-section.model';

interface ThemeClasses {
  eyebrow: string;
  badge: string;
  statIcon: string;
  statValue: string;
  groupIcon: string;
  groupTile: string;
  highlightTile: string;
  highlightIcon: string;
  price: string;
  chip: string;
  divider: string;
  section: string;
}

const THEMES: Record<IndustryTheme, ThemeClasses> = {
  sky: {
    eyebrow: 'bg-sky-400 text-sky-950',
    badge: 'bg-sky-50 text-sky-700',
    statIcon: 'bg-sky-100 text-sky-700',
    statValue: 'text-sky-700',
    groupIcon: 'bg-sky-500 text-white',
    groupTile: 'bg-sky-50/70',
    highlightTile: 'border-sky-100 bg-sky-50/60',
    highlightIcon: 'text-sky-600',
    price: 'text-sky-700',
    chip: 'border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-400 hover:bg-sky-100',
    divider: 'border-sky-100',
    section: 'bg-white',
  },
  amber: {
    eyebrow: 'bg-amber-400 text-amber-950',
    badge: 'bg-amber-100 text-amber-800',
    statIcon: 'bg-amber-100 text-amber-700',
    statValue: 'text-amber-700',
    groupIcon: 'bg-amber-500 text-amber-950',
    groupTile: 'bg-amber-50/70',
    highlightTile: 'border-amber-200 bg-white/70',
    highlightIcon: 'text-amber-600',
    price: 'text-amber-700',
    chip: 'border-amber-200 bg-amber-50 text-amber-900 hover:border-amber-400 hover:bg-amber-100',
    divider: 'border-amber-200',
    section: 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50',
  },
};

/** Số thương hiệu hiển thị trước khi gộp phần còn lại thành một nhãn "+N". */
const MAX_VISIBLE_BRANDS = 10;

/**
 * Một dải giới thiệu ngành hàng trên trang chủ: ảnh bìa, mô tả, chỉ số tính từ
 * dữ liệu thật, nhóm sản phẩm, điểm nổi bật và dải thương hiệu.
 * Không liệt kê từng sản phẩm – người dùng bấm CTA để sang trang danh sách.
 */
@Component({
  selector: 'app-home-industry',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    EllipsisTooltipDirective,
  ],
  providers: [DecimalPipe],
  templateUrl: './industry-section.component.html',
})
export class IndustrySectionComponent {
  @Input({ required: true }) content!: IndustryContent;
  @Input() products: IndustryProduct[] | Signal<IndustryProduct[]> = [];

  readonly listingPath = '/products';

  constructor(private readonly decimal: DecimalPipe) {}

  private readonly productList = computed<IndustryProduct[]>(() => {
    const raw = isSignal(this.products) ? this.products() : (this.products ?? []);
    return raw.filter((p) => p.isUsed !== false);
  });

  get classes(): ThemeClasses {
    return THEMES[this.content.theme];
  }

  get queryParams(): Record<string, string> {
    return { type: this.content.kind };
  }

  readonly brands = computed<IndustryBrand[]>(() => {
    const kind = this.content.kind;
    const counter = new Map<string, number>();
    for (const p of this.productList()) {
      if (!p.brandName) continue;
      counter.set(p.brandName, (counter.get(p.brandName) ?? 0) + 1);
    }
    return [...counter.entries()]
      .map(([name, count]) => ({
        name,
        count,
        queryParams: { type: kind, brand: name },
      }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  });

  readonly visibleBrands = computed(() =>
    this.brands().slice(0, MAX_VISIBLE_BRANDS),
  );

  readonly hiddenBrandCount = computed(() =>
    Math.max(0, this.brands().length - MAX_VISIBLE_BRANDS),
  );

  readonly stats = computed<IndustryStat[]>(() => {
    const items = this.productList();
    const categoryCount = new Set(items.map((i) => i.category)).size;
    const priceFrom = this.minPrice(items);
    return [
      {
        icon: this.content.statIcon,
        label: this.content.statLabel,
        value: `${items.length}`,
      },
      {
        icon: 'workspace_premium',
        label: 'Thương hiệu phân phối',
        value: `${this.brands().length}`,
      },
      { icon: 'category', label: 'Danh mục hàng', value: `${categoryCount}` },
      {
        icon: 'sell',
        label: 'Giá khởi điểm',
        value:
          priceFrom !== null
            ? `${this.decimal.transform(priceFrom)}₫`
            : 'Liên hệ',
      },
    ];
  });

  trackStat(_: number, stat: IndustryStat): string {
    return stat.label;
  }

  trackBrand(_: number, brand: IndustryBrand): string {
    return brand.name;
  }

  private minPrice(items: IndustryProduct[]): number | null {
    const prices = items.map((i) => i.price).filter((p) => p > 0);
    return prices.length ? Math.min(...prices) : null;
  }
}
