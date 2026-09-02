import { BasketService } from './basket.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BasketItem } from '../shared/models/basket';
import { BasketSummaryComponent } from '../shared/components/basket-summary/basket-summary.component';
import { OrderTotalsComponent } from '../shared/components/order-totals/order-totals.component';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, RouterLink, BasketSummaryComponent, OrderTotalsComponent],
  templateUrl: './basket.component.html'
})
export class BasketComponent {
  readonly basket = this.basketService.basket;

  constructor(private basketService: BasketService) { }

  removeBasketItem(item: BasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: BasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: BasketItem) {
    this.basketService.decrementItemQuantity(item);
  }

}
