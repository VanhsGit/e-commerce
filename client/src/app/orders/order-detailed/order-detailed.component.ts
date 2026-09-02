import { OrdersService } from './../orders.service';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ActivatedRoute } from '@angular/router';
import { IOrder } from './../../shared/models/order';
import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-order-detailed',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, NzTableModule],
  templateUrl: './order-detailed.component.html'
})
export class OrderDetailedComponent implements OnInit {
  readonly order = signal<IOrder | null>(null);
  readonly orderTotal = computed(() => {
    const current = this.order();
    return current ? current.orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;
  });

  constructor(
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private ordersService: OrdersService
  ) {
    this.breadcrumbService.set('@OrderDetailed', '');
  }

  async ngOnInit(): Promise<void> {
    try {
      const order = await firstValueFrom(this.ordersService.getOrderDetailed(+this.route.snapshot.paramMap.get('id')));
      this.order.set(order);
      this.breadcrumbService.set('@OrderDetailed', `Order# ${order.id} - ${order.status}`);
    } catch (error) {
      console.log(error);
    }
  }

}
