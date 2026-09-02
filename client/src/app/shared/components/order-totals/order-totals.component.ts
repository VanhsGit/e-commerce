import { BasketService } from './../../../basket/basket.service';
import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order-totals',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './order-totals.component.html'
})
export class OrderTotalsComponent {
  readonly basketTotal = this.basketService.basketTotal;

  constructor(private basketService: BasketService) { }
}
