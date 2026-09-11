import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'companies' },
      {
        path: 'companies',
        loadComponent: () => import('./companies/company-admin-page.component')
          .then(m => m.CompanyAdminPageComponent),
        data: { breadcrumb: 'Công ty' },
      },
      {
        path: 'brands',
        loadComponent: () => import('./brands/brand-admin-page.component')
          .then(m => m.BrandAdminPageComponent),
        data: { breadcrumb: 'Thương hiệu' },
      },
      {
        path: 'electric-bikes',
        loadComponent: () => import('./electric-bikes/electric-bike-admin-page.component')
          .then(m => m.ElectricBikeAdminPageComponent),
        data: { breadcrumb: 'Xe điện' },
      },
      {
        path: 'agricultural-machines',
        loadComponent: () => import('./agricultural-machines/agricultural-machine-admin-page.component')
          .then(m => m.AgriculturalMachineAdminPageComponent),
        data: { breadcrumb: 'Máy nông nghiệp' },
      },
      {
        path: 'products',
        loadComponent: () => import('./products/product-admin-page.component')
          .then(m => m.ProductAdminPageComponent),
        data: { breadcrumb: 'Sản phẩm' },
      },
      {
        path: 'product-brands',
        loadComponent: () => import('./product-brands/product-brand-admin-page.component')
          .then(m => m.ProductBrandAdminPageComponent),
        data: { breadcrumb: 'Nhãn sản phẩm' },
      },
      {
        path: 'product-types',
        loadComponent: () => import('./product-types/product-type-admin-page.component')
          .then(m => m.ProductTypeAdminPageComponent),
        data: { breadcrumb: 'Loại sản phẩm' },
      },
      {
        path: 'orders',
        loadComponent: () => import('./orders/order-admin-page.component')
          .then(m => m.OrderAdminPageComponent),
        data: { breadcrumb: 'Đơn hàng' },
      },
      {
        path: 'delivery-methods',
        loadComponent: () => import('./delivery-methods/delivery-method-admin-page.component')
          .then(m => m.DeliveryMethodAdminPageComponent),
        data: { breadcrumb: 'Giao hàng' },
      },
      {
        path: 'users',
        loadComponent: () => import('./users/user-admin-page.component')
          .then(m => m.UserAdminPageComponent),
        data: { breadcrumb: 'Người dùng' },
      },
      {
        path: 'media',
        loadComponent: () => import('./media/admin-media-page.component')
          .then(m => m.AdminMediaPageComponent),
        data: { breadcrumb: 'Thư viện ảnh' },
      },
    ],
  },
];
