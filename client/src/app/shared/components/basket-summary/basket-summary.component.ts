import { BasketService } from './../../../basket/basket.service';
import { BasketItem } from './../../models/basket';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-basket-summary',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink, NzButtonModule, NzTableModule],
  templateUrl: './basket-summary.component.html'
})
export class BasketSummaryComponent {
  readonly basket = this.basketService.basket;
  @Output() decrement: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();
  @Output() increment: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();
  @Output() remove: EventEmitter<BasketItem> = new EventEmitter<BasketItem>();
  @Input() isBasket = true;

  constructor(private basketService: BasketService) { }

  decrementItemQuantity(item: BasketItem){
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: BasketItem){
    this.increment.emit(item);
  }
  removeBasketItem(item: BasketItem){
    this.remove.emit(item);
  }

}
