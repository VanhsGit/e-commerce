import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-brand-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './brand-admin-page.component.html',
})
export class BrandAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Thương hiệu',
    endpoint: 'brands',
    entityType: 'Brand',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'description', label: 'Mô tả', type: 'textarea' },
      { name: 'logoUrl', label: 'Logo URL cũ', type: 'text' },
      { name: 'metadata', label: 'Metadata', type: 'metadata', defaultValue: {} },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
