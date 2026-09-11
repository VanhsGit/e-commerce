import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-electric-bike-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './electric-bike-admin-page.component.html',
})
export class ElectricBikeAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Xe điện',
    endpoint: 'electricBikeProducts',
    entityType: 'ElectricBikeProduct',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'brand', label: 'Nhãn hiển thị', type: 'text', required: true },
      { name: 'model', label: 'Model', type: 'text', required: true },
      {
        name: 'category',
        label: 'Loại',
        type: 'select',
        required: true,
        defaultValue: 1,
        options: [
          { label: 'Mẫu xe', value: 1 },
          { label: 'Phụ tùng', value: 2 },
        ],
      },
      { name: 'description', label: 'Mô tả', type: 'textarea', required: true },
      { name: 'price', label: 'Giá', type: 'number', defaultValue: 0 },
      { name: 'stockQuantity', label: 'Tồn kho', type: 'number', defaultValue: 0 },
      { name: 'pictureUrl', label: 'Ảnh URL cũ', type: 'text' },
      { name: 'voltage', label: 'Điện áp', type: 'text' },
      { name: 'power', label: 'Công suất', type: 'text' },
      { name: 'batteryCapacity', label: 'Dung lượng pin', type: 'text' },
      { name: 'compatibility', label: 'Tương thích', type: 'text' },
      { name: 'companyId', label: 'Company ID', type: 'number', required: true },
      { name: 'brandId', label: 'Brand ID', type: 'number', required: true },
      { name: 'metadata', label: 'Metadata', type: 'metadata', defaultValue: {} },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
