import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-delivery-method-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './delivery-method-admin-page.component.html',
})
export class DeliveryMethodAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Phương thức giao hàng',
    endpoint: 'deliveryMethods',
    entityType: 'DeliveryMethod',
    fields: [
      { name: 'shortName', label: 'Tên ngắn', type: 'text', required: true },
      { name: 'deliveryTime', label: 'Thời gian', type: 'text', required: true },
      { name: 'description', label: 'Mô tả', type: 'textarea', required: true },
      { name: 'price', label: 'Phí', type: 'number', defaultValue: 0 },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
