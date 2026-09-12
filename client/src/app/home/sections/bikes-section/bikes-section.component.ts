import { Component, computed, EventEmitter, Input, isSignal, Output, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ElectricBikeProduct } from '../../../shared/models/electricBikeProduct';

@Component({
  selector: 'app-home-bikes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
  ],
  templateUrl: './bikes-section.component.html',
})
export class BikesSectionComponent {
  @Input() products!: ElectricBikeProduct[] | Signal<ElectricBikeProduct[]>;
  @Input() featuredCount?: number = 4;
  @Output() navigate = new EventEmitter<string>();

  readonly productList = computed<ElectricBikeProduct[]>(() => {
    if (isSignal(this.products)) {
      return this.products();
    }
    return this.products ?? [];
  });

  readonly featuredProducts = computed(() =>
    this.productList().slice(0, this.featuredCount ?? 4),
  );

  getDetailUrl(id: number) {
    return ['/product-detail', 'bike', id];
  }

  readonly allBikesUrl = ['/products', 'bike'];
}
