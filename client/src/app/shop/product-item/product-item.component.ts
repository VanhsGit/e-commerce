import { BasketService } from './../../basket/basket.service';
import { Product } from '../../shared/models/product';
import { Component, OnInit, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  product = input.required<Product>();

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product());
  }

}
