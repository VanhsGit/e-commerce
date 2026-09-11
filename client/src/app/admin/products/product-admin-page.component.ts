import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-product-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './product-admin-page.component.html',
})
export class ProductAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Sản phẩm',
    endpoint: 'products',
    entityType: 'Product',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'description', label: 'Mô tả', type: 'textarea', required: true },
      { name: 'price', label: 'Giá', type: 'number', defaultValue: 0 },
      { name: 'pictureUrl', label: 'Ảnh URL cũ', type: 'text' },
      { name: 'productTypeId', label: 'Product Type ID', type: 'number', required: true },
      { name: 'productBrandId', label: 'Product Brand ID', type: 'number', required: true },
      { name: 'companyId', label: 'Company ID', type: 'number', required: true },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
