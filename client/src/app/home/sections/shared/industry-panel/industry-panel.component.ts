import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { EllipsisTooltipDirective } from '../../../../shared/directives/ellipsis-tooltip.directive';
import {
  IndustryBrand,
  IndustryCategory,
  IndustryStat,
  IndustryTheme,
} from './industry-panel.model';

interface ThemeClasses {
  statIcon: string;
  statValue: string;
  tile: string;
  tileIcon: string;
  tileLink: string;
  chip: string;
  divider: string;
}

const THEMES: Record<IndustryTheme, ThemeClasses> = {
  sky: {
    statIcon: 'bg-sky-100 text-sky-700',
    statValue: 'text-sky-700',
    tile: 'border-sky-100 hover:border-sky-400 hover:shadow-sky-100',
    tileIcon: 'bg-sky-600 text-white',
    tileLink: 'text-sky-700',
    chip: 'border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-400 hover:bg-sky-100',
    divider: 'border-sky-100',
  },
  amber: {
    statIcon: 'bg-amber-100 text-amber-700',
    statValue: 'text-amber-700',
    tile: 'border-amber-200 hover:border-amber-500 hover:shadow-amber-100',
    tileIcon: 'bg-amber-500 text-amber-950',
    tileLink: 'text-amber-700',
    chip: 'border-amber-200 bg-amber-50 text-amber-900 hover:border-amber-400 hover:bg-amber-100',
    divider: 'border-amber-200',
  },
};

/**
 * Khối trình bày một ngành hàng: chỉ số tổng quan, lưới danh mục và dải
 * thương hiệu. Tất cả dữ liệu do component cha dựng từ sản phẩm thật, khối này
 * chỉ lo phần hiển thị.
 */
@Component({
  selector: 'app-industry-panel',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule, EllipsisTooltipDirective],
  templateUrl: './industry-panel.component.html',
})
export class IndustryPanelComponent {
  @Input({ required: true }) theme: IndustryTheme = 'sky';
  @Input({ required: true }) stats: IndustryStat[] = [];
  @Input({ required: true }) categories: IndustryCategory[] = [];
  @Input() brands: IndustryBrand[] = [];
  @Input() listingPath = '/products';
  @Input() brandsLabel = 'Thương hiệu đang phân phối';
  @Input() emptyIcon = 'inventory_2';
  @Input() emptyTitle = 'Ngành hàng đang được cập nhật';
  @Input() emptyNote = 'Gọi 1900 1234 để được tư vấn và báo giá mới nhất.';

  private readonly brandLimit = 12;

  get classes(): ThemeClasses {
    return THEMES[this.theme] ?? THEMES.sky;
  }

  get visibleBrands(): IndustryBrand[] {
    return this.brands.slice(0, this.brandLimit);
  }

  get hiddenBrandCount(): number {
    return Math.max(0, this.brands.length - this.brandLimit);
  }

  trackCategory = (_: number, c: IndustryCategory) => c.key;
  trackBrand = (_: number, b: IndustryBrand) => b.name;
  trackStat = (_: number, s: IndustryStat) => s.label;
}
