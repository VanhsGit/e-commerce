import { AuthGuard } from './core/Guards/auth.guard';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
    data: { breadcrumb: 'Product Detail' },
  },
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
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./admin/admin-dashboard.component').then(
            (m) => m.AdminDashboardComponent,
          ),
        data: { breadcrumb: 'Admin Dashboard' },
      },
      {
        path: 'users/create',
        loadComponent: () =>
          import('./admin/users/create-user/create-user.component').then(
            (m) => m.CreateUserComponent,
          ),
        data: { breadcrumb: 'Create user' },
      },
    ],
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
