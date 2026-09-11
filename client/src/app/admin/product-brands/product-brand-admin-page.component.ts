import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-product-brand-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './product-brand-admin-page.component.html',
})
export class ProductBrandAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Nhãn sản phẩm',
    endpoint: 'productBrands',
    entityType: 'ProductBrand',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
