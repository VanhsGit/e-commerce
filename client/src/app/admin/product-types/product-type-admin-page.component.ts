import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-product-type-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './product-type-admin-page.component.html',
})
export class ProductTypeAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Loại sản phẩm',
    endpoint: 'productTypes',
    entityType: 'ProductType',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
