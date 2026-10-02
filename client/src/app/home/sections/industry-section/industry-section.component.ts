import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductCardItem } from '../../../shared/components/product-card/product-card-item.model';
import { PRODUCT_KIND_ROUTES } from '../../../shared/models/product-category';
import { IndustryContent } from './industry-section.model';

@Component({
  selector: 'app-home-industry',
  standalone: true,
  host: { class: 'block' },
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './industry-section.component.html',
})
export class IndustrySectionComponent {
  @Input({ required: true }) content!: IndustryContent;
  @Input() products: ProductCardItem[] = [];

  get listingPath(): string {
    return PRODUCT_KIND_ROUTES[this.content.kind];
  }

  trackProduct(_index: number, product: ProductCardItem): string {
    return `${product.kind}-${product.id}`;
  }
}
