import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-user-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './user-admin-page.component.html',
})
export class UserAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Người dùng',
    endpoint: 'admin/users',
    entityType: 'User',
    fields: [
      { name: 'email', label: 'Email', type: 'text', required: true },
      { name: 'displayName', label: 'Tên hiển thị', type: 'text' },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
