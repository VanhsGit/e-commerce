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
