import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-order-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './order-admin-page.component.html',
})
export class OrderAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Đơn hàng',
    endpoint: 'admin/orders',
    entityType: 'Order',
    fields: [
      { name: 'buyerEmail', label: 'Email khách', type: 'text', required: true },
      { name: 'deliveryMethodId', label: 'Delivery Method ID', type: 'number', required: true },
      { name: 'subtotal', label: 'Tạm tính', type: 'number' },
      {
        name: 'status',
        label: 'Trạng thái',
        type: 'select',
        defaultValue: 0,
        options: [
          { label: 'Pending', value: 0 },
          { label: 'Payment Received', value: 1 },
          { label: 'Payment Failed', value: 2 },
        ],
      },
      { name: 'paymentIntentId', label: 'Payment Intent', type: 'text' },
      {
        name: 'shipToAddress',
        label: 'Địa chỉ (JSON)',
        type: 'json',
        required: true,
        defaultValue: {
          firstName: '',
          lastName: '',
          street: '',
          city: '',
          state: '',
          zipcode: '',
        },
      },
      {
        name: 'orderItems',
        label: 'Sản phẩm (JSON array)',
        type: 'json',
        required: true,
        defaultValue: [],
      },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
