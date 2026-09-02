import { BasketService } from './../../basket/basket.service';
import { ShopService } from './../shop.service';
import { Product } from './../../shared/models/product';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NzButtonModule, CurrencyPipe],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  private readonly shopService = inject(ShopService);
  private readonly route = inject(ActivatedRoute);
  private readonly breadcrumbService = inject(BreadcrumbService);
  private readonly basketService = inject(BasketService);

  product = signal<Product | null>(null);
  quantity = 1;

  constructor() {
    this.breadcrumbService.set('@productDetails', '');
  }

  async ngOnInit(): Promise<void> {
    await this.loadProduct();
  }

  addItemToBasket() {
    const product = this.product();
    if (product) {
      this.basketService.addItemToBasket(product, this.quantity);
    }
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  loadProduct() {
    if (this.route.snapshot.paramMap.get('id')) {
      var productId = +this.route.snapshot.paramMap.get('id')!;
      this.shopService.getProduct(Number(productId)).subscribe((response) => {
        this.product.set(response);
        this.breadcrumbService.set('@productDetails', response.name);
      });
    }
  }
}
