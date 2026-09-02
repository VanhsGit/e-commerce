import { OrdersService } from './orders.service';
import { IOrder } from './../shared/models/order';
import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe, CurrencyPipe, NzTableModule],
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  readonly orders = signal<IOrder[]>([]);
  readonly hasOrders = computed(() => this.orders().length > 0);

  constructor(private orderService: OrdersService) { }

  async ngOnInit(): Promise<void> {
    await this.getOrders();
  }

  async getOrders(): Promise<void> {
    try {
      const orders = await firstValueFrom(this.orderService.getOrdersForUser());
      this.orders.set(orders);
      console.log(orders);
    } catch (error) {
      console.log(error);
    }
  }

}
