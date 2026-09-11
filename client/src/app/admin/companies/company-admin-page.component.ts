import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-company-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './company-admin-page.component.html',
})
export class CompanyAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Công ty',
    endpoint: 'companies',
    entityType: 'Company',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'description', label: 'Mô tả', type: 'textarea' },
      { name: 'logoUrl', label: 'Logo URL cũ', type: 'text' },
      { name: 'address', label: 'Địa chỉ', type: 'text' },
      { name: 'phoneNumber', label: 'Điện thoại', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'website', label: 'Website', type: 'text' },
      { name: 'metadata', label: 'Metadata', type: 'metadata', defaultValue: {} },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
