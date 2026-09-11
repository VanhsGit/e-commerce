import { Component } from '@angular/core';
import { AdminEntityPageComponent } from '../resources/admin-entity-page.component';
import { AdminResourceConfig } from '../shared/admin-resource.types';

@Component({
  selector: 'app-agricultural-machine-admin-page',
  standalone: true,
  imports: [AdminEntityPageComponent],
  templateUrl: './agricultural-machine-admin-page.component.html',
})
export class AgriculturalMachineAdminPageComponent {
  readonly config: AdminResourceConfig = {
    title: 'Máy nông nghiệp',
    endpoint: 'agriculturalMachineProducts',
    entityType: 'AgriculturalMachineProduct',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'brand', label: 'Nhãn hiển thị', type: 'text', required: true },
      { name: 'model', label: 'Model', type: 'text', required: true },
      {
        name: 'category',
        label: 'Loại',
        type: 'select',
        defaultValue: 1,
        options: [
          { label: 'Máy', value: 1 },
          { label: 'Phụ tùng', value: 2 },
        ],
      },
      { name: 'description', label: 'Mô tả', type: 'textarea', required: true },
      { name: 'price', label: 'Giá', type: 'number', defaultValue: 0 },
      { name: 'stockQuantity', label: 'Tồn kho', type: 'number', defaultValue: 0 },
      { name: 'pictureUrl', label: 'Ảnh URL cũ', type: 'text' },
      { name: 'engineType', label: 'Động cơ', type: 'text' },
      { name: 'power', label: 'Công suất', type: 'text' },
      { name: 'fuelType', label: 'Nhiên liệu', type: 'text' },
      { name: 'capacity', label: 'Công suất chứa', type: 'text' },
      { name: 'compatibility', label: 'Tương thích', type: 'text' },
      { name: 'companyId', label: 'Company ID', type: 'number', required: true },
      { name: 'brandId', label: 'Brand ID', type: 'number', required: true },
      { name: 'metadata', label: 'Metadata', type: 'metadata', defaultValue: {} },
      { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true },
    ],
  };
}
