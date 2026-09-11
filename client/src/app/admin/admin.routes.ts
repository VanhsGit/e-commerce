import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';

const resource = (path: string, title: string): Routes[number] => ({
  path,
  loadComponent: () => import('./resources/admin-entity-page.component').then(m => m.AdminEntityPageComponent),
  data: { resource: path, breadcrumb: title },
});

export const ADMIN_ROUTES: Routes = [{
  path: '', component: AdminLayoutComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'companies' },
    resource('companies', 'Công ty'), resource('brands', 'Thương hiệu'),
    resource('electric-bikes', 'Xe điện'), resource('agricultural-machines', 'Máy nông nghiệp'),
    resource('products', 'Sản phẩm'), resource('product-brands', 'Nhãn sản phẩm'),
    resource('product-types', 'Loại sản phẩm'), resource('orders', 'Đơn hàng'),
    resource('delivery-methods', 'Giao hàng'), resource('users', 'Người dùng'),
    { path: 'media', loadComponent: () => import('./media/admin-media-page.component').then(m => m.AdminMediaPageComponent), data: { breadcrumb: 'Thư viện ảnh' } },
  ],
}];
