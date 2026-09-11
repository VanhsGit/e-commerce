import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, NzButtonModule],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
  readonly mobileOpen = signal(false);
  readonly links = [
    { path: 'companies', label: 'Công ty', icon: 'fa-building' },
    { path: 'brands', label: 'Thương hiệu', icon: 'fa-tags' },
    { path: 'electric-bikes', label: 'Xe điện', icon: 'fa-bicycle' },
    { path: 'agricultural-machines', label: 'Máy nông nghiệp', icon: 'fa-cogs' },
    { path: 'products', label: 'Sản phẩm', icon: 'fa-cube' },
    { path: 'product-brands', label: 'Nhãn sản phẩm', icon: 'fa-bookmark' },
    { path: 'product-types', label: 'Loại sản phẩm', icon: 'fa-list' },
    { path: 'orders', label: 'Đơn hàng', icon: 'fa-shopping-cart' },
    { path: 'delivery-methods', label: 'Giao hàng', icon: 'fa-truck' },
    { path: 'users', label: 'Người dùng', icon: 'fa-users' },
    { path: 'media', label: 'Thư viện ảnh', icon: 'fa-picture-o' },
  ];
}
