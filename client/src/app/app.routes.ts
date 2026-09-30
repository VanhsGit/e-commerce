import { AuthGuard } from './core/Guards/auth.guard';
import { roleGuard } from './core/Guards/role.guard';
import { BACK_OFFICE_ROLES } from './shared/auth/roles';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './shared/layout/public-layout/public-layout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const landing = () =>
  import('./category-landing/category-landing.component').then((m) => m.CategoryLandingComponent);

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
      { path: 'xe-dien', loadComponent: landing, data: { kind: 'bike', breadcrumb: 'Xe điện' } },
      {
        path: 'may-nong-nghiep',
        loadComponent: landing,
        data: { kind: 'machine', breadcrumb: 'Máy nông nghiệp' },
      },
      { path: 'do-dien', loadComponent: landing, data: { kind: 'appliance', breadcrumb: 'Đồ điện' } },
      {
        path: 'product-detail/:kind/:id',
        component: ProductDetailComponent,
        data: { breadcrumb: 'Product Detail' },
      },
      { path: 'products', redirectTo: '', pathMatch: 'full' },
      {
        path: 'test-error',
        component: TestErrorComponent,
        data: { breadcrumb: 'Test Error' },
      },
      {
        path: 'server-error',
        component: ServerErrorComponent,
        data: { breadcrumb: 'Server Error' },
      },
      {
        path: 'not-found',
        component: NotFoundComponent,
        data: { breadcrumb: 'Not Found' },
      },
    ],
  },
  {
    path: 'account',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./account/login/login.component').then(
            (m) => m.LoginComponent,
          ),
        data: { breadcrumb: { skip: true } },
      },
    ],
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, roleGuard],
    data: { roles: BACK_OFFICE_ROLES },
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
