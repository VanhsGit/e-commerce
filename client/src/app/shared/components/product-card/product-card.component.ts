import { Component, computed, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCardItem } from './product-card-item.model';
import { ImgFallbackDirective } from '../../directives/img-fallback.directive';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ImgFallbackDirective],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductCardItem;

  readonly accentClass = computed(() => {
    return this.product.kind === 'bike'
      ? 'border-slate-200 shadow-sky-500/10 hover:shadow-sky-500/20'
      : 'border-amber-200/60 shadow-amber-500/10 hover:shadow-amber-500/20';
  });

  readonly badgeClass = computed(() => {
    return this.product.kind === 'bike'
      ? 'bg-sky-100/95 text-sky-700'
      : 'bg-amber-100/95 text-amber-800';
  });

  readonly priceClass = computed(() => {
    return this.product.kind === 'bike' ? 'text-emerald-600' : 'text-amber-600';
  });

  readonly detailUrl = computed(() => {
    return ['/product-detail', this.product.kind, this.product.id];
  });

  formatCurrency(n: number) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(n);
  }
}
