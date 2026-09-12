import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { EntityType } from '../../shared/models/entity-image';
import { EntityImageManagerComponent } from '../shared/entity-image-manager/entity-image-manager.component';

interface EntityTypeMeta {
  value: EntityType;
  label: string;
  desc: string;
  icon: string;
  accent: string;
}

const ENTITY_TYPES: EntityTypeMeta[] = [
  { value: 'Company', label: 'Công ty', desc: 'Logo & ảnh liên quan', icon: 'fa-building', accent: 'from-sky-500 to-blue-600' },
  { value: 'Brand', label: 'Thương hiệu', desc: 'Logo nhãn hiệu sản phẩm', icon: 'fa-tags', accent: 'from-purple-500 to-fuchsia-600' },
  { value: 'ElectricBikeProduct', label: 'Xe điện', desc: 'Ảnh sản phẩm xe & phụ tùng', icon: 'fa-bicycle', accent: 'from-emerald-500 to-teal-600' },
  { value: 'AgriculturalMachineProduct', label: 'Máy nông nghiệp', desc: 'Ảnh máy & phụ tùng nông nghiệp', icon: 'fa-cogs', accent: 'from-amber-500 to-orange-600' },
  { value: 'User', label: 'Người dùng', desc: 'Avatar tài khoản', icon: 'fa-user-circle-o', accent: 'from-rose-500 to-pink-600' },
  { value: 'Product', label: 'Product (generic)', desc: 'Dự phòng - entity type cũ', icon: 'fa-cube', accent: 'from-slate-500 to-slate-700' },
  { value: 'ProductBrand', label: 'ProductBrand', desc: 'Dự phòng', icon: 'fa-tag', accent: 'from-slate-500 to-slate-700' },
  { value: 'ProductType', label: 'ProductType', desc: 'Dự phòng', icon: 'fa-list-ul', accent: 'from-slate-500 to-slate-700' },
  { value: 'Order', label: 'Đơn hàng', desc: 'Hình ảnh đính kèm đơn hàng', icon: 'fa-file-text-o', accent: 'from-slate-500 to-slate-700' },
  { value: 'DeliveryMethod', label: 'Phương thức vận chuyển', desc: 'Icon/logo giao hàng', icon: 'fa-truck', accent: 'from-slate-500 to-slate-700' },
];

@Component({
  selector: 'app-admin-media-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzEmptyModule,
    NzInputModule,
    NzPageHeaderModule,
    NzSelectModule,
    NzSpaceModule,
    NzTagModule,
    EntityImageManagerComponent,
  ],
  templateUrl: './admin-media-page.component.html',
  styles: [
    `
      .entity-chip {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 14px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        transition: all .2s ease;
        cursor: pointer;
        background: #fff;
      }
      .entity-chip:hover { transform: translateY(-1px); border-color: #cbd5e1; box-shadow: 0 6px 16px rgba(15, 23, 42, 0.06); }
      .entity-chip.active {
        border-color: transparent;
        box-shadow: 0 10px 24px rgba(99, 102, 241, 0.18);
      }
      .chip-icon {
        width: 38px; height: 38px; border-radius: 10px;
        display: inline-flex; align-items: center; justify-content: center;
        color: #fff; font-size: 16px; flex-shrink: 0;
      }
    `,
  ],
})
export class AdminMediaPageComponent {
  entityType: EntityType = 'ElectricBikeProduct';
  entityId = '';
  readonly entityTypes = ENTITY_TYPES;

  selectedMeta(): EntityTypeMeta {
    return this.entityTypes.find((e) => e.value === this.entityType) || this.entityTypes[0];
  }

  select(type: EntityType): void {
    this.entityType = type;
  }

  fillSample(id: string): void {
    this.entityId = id;
  }
}
