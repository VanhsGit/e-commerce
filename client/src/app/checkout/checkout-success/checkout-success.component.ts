import { IOrder } from './../../shared/models/order';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-checkout-success',
  standalone: true,
  imports: [CommonModule, RouterModule, NzButtonModule],
  templateUrl: './checkout-success.component.html'
})
export class CheckoutSuccessComponent implements OnInit {
  order: IOrder;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation && navigation.extras && navigation.extras.state;
    if(state){
      this.order = state as IOrder;
    }
   }

  ngOnInit(): void {
  }

}
