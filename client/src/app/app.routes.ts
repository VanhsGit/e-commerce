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
    path: 'product-detail/:kind/:id',
    component: ProductDetailComponent,
    data: { breadcrumb: 'Product Detail' },
  },
  {
    path: 'products/:kind?',
    loadComponent: () =>
      import('./products/products.component').then((m) => m.ProductsComponent),
    data: { breadcrumb: 'Products' },
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
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
