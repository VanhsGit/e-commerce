import { BasketService } from './../../basket/basket.service';
import { ShopService } from './../shop.service';
import { ProductFull } from './../../shared/models/productFull';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../account/account.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, NzButtonModule, CurrencyPipe, RouterLink],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  private readonly shopService = inject(ShopService);
  private readonly route = inject(ActivatedRoute);
  private readonly breadcrumbService = inject(BreadcrumbService);
  private readonly basketService = inject(BasketService);
  private readonly toastr = inject(ToastrService);
  private readonly accountService = inject(AccountService);

  product = signal<ProductFull | null>(null);
  quantity = 1;
  isLoggedIn = this.accountService.currentUser;

  constructor() {
    this.breadcrumbService.set('@productDetails', '');
  }

  async ngOnInit(): Promise<void> {
    await this.loadProduct();
  }

  addItemToBasket() {
    const product = this.product();
    if (product) {
      if (product.mainCategory === 2 && !this.isLoggedIn()) {
        this.toastr.warning('Please login to view and purchase agricultural products');
        return;
      }
      const mappedProduct = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        pictureUrl: product.pictureUrl,
        productType: product.productType,
        productBrand: product.productBrand,
      };
      this.basketService.addItemToBasket(mappedProduct, this.quantity);
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
      this.shopService.getProduct(Number(productId)).subscribe({
        next: (response) => {
          this.product.set(response);
          this.breadcrumbService.set('@productDetails', response.name);
        },
        error: (err) => {
          if (err.status === 401) {
            this.toastr.warning('Please login to view this agricultural product');
          }
        },
      });
    }
  }
}

