import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { homeContentPendingChangesGuard } from './home-content/home-content-pending-changes.guard';
import { categoryPagesPendingChangesGuard } from './category-pages/category-pages-pending-changes.guard';
import { roleGuard } from '../core/Guards/role.guard';
import {
  BACK_OFFICE_ROLES,
  HOME_CONTENT_ROLES,
  USERS_ROLES,
} from '../shared/auth/roles';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () => import('./admin-dashboard.component')
          .then(m => m.AdminDashboardComponent),
        canActivate: [roleGuard],
        data: { breadcrumb: 'Bảng điều khiển', roles: BACK_OFFICE_ROLES },
      },
      {
        path: 'companies',
        loadComponent: () => import('./companies/company-admin-page.component')
          .then(m => m.CompanyAdminPageComponent),
        canActivate: [roleGuard],
        data: { breadcrumb: 'Công ty', roles: BACK_OFFICE_ROLES },
      },
      {
        path: 'brands',
        loadComponent: () => import('./brands/brand-admin-page.component')
          .then(m => m.BrandAdminPageComponent),
        canActivate: [roleGuard],
        data: { breadcrumb: 'Thương hiệu', roles: BACK_OFFICE_ROLES },
      },
      {
        path: 'product-categories',
        loadComponent: () => import('./product-categories/product-categories-admin-page.component')
          .then(m => m.ProductCategoriesAdminPageComponent),
        canActivate: [roleGuard],
        data: { breadcrumb: 'Danh mục sản phẩm', roles: BACK_OFFICE_ROLES },
      },
      {
        path: 'electric-bikes',
        loadComponent: () => import('./electric-bikes/electric-bike-admin-page.component')
          .then(m => m.ElectricBikeAdminPageComponent),
        canActivate: [roleGuard],
        data: { breadcrumb: 'Xe điện', roles: BACK_OFFICE_ROLES },
      },
      {
        path: 'agricultural-machines',
        loadComponent: () => import('./agricultural-machines/agricultural-machine-admin-page.component')
          .then(m => m.AgriculturalMachineAdminPageComponent),
        canActivate: [roleGuard],
        data: { breadcrumb: 'Máy nông nghiệp', roles: BACK_OFFICE_ROLES },
      },
      {
        path: 'electrical-appliances',
        loadComponent: () => import('./electrical-appliances/electrical-appliance-admin-page.component')
          .then(m => m.ElectricalApplianceAdminPageComponent),
        canActivate: [roleGuard],
        data: { breadcrumb: 'Đồ điện dân dụng', roles: BACK_OFFICE_ROLES },
      },
      {
        path: 'users',
        loadComponent: () => import('./users/user-admin-page.component')
          .then(m => m.UserAdminPageComponent),
        canActivate: [roleGuard],
        data: { breadcrumb: 'Người dùng', roles: USERS_ROLES },
      },
      {
        path: 'users/create-user',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'home-content',
        loadComponent: () => import('./home-content/home-content-admin-page.component')
          .then(m => m.HomeContentAdminPageComponent),
        canActivate: [roleGuard],
        canDeactivate: [homeContentPendingChangesGuard],
        data: { breadcrumb: 'Nội dung trang chủ', roles: HOME_CONTENT_ROLES },
      },
      {
        path: 'category-pages',
        loadComponent: () => import('./category-pages/category-pages-admin-page.component')
          .then(m => m.CategoryPagesAdminPageComponent),
        canActivate: [roleGuard],
        canDeactivate: [categoryPagesPendingChangesGuard],
        data: { breadcrumb: 'Nội dung trang ngành hàng', roles: HOME_CONTENT_ROLES },
      },
    ],
  },
];
