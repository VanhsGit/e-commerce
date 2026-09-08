import { AuthGuard } from './core/Guards/auth.guard';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
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
    path: 'shop',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./shop/shop.component').then((m) => m.ShopComponent),
        data: { breadcrumb: 'Shop' },
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./shop/product-details/product-details.component').then(
            (m) => m.ProductDetailsComponent,
          ),
        data: { breadcrumb: { alias: 'productDetails' } },
      },
    ],
  },
  {
    path: 'basket',
    loadComponent: () =>
      import('./basket/basket.component').then((m) => m.BasketComponent),
    data: { breadcrumb: 'Basket' },
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./checkout/checkout.component').then(
            (m) => m.CheckoutComponent,
          ),
        data: { breadcrumb: 'Checkout' },
      },
      {
        path: 'success',
        loadComponent: () =>
          import('./checkout/checkout-success/checkout-success.component').then(
            (m) => m.CheckoutSuccessComponent,
          ),
        data: { breadcrumb: 'Success' },
      },
    ],
  },
  {
    path: 'orders',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./orders/orders.component').then((m) => m.OrdersComponent),
        data: { breadcrumb: 'Orders' },
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./orders/order-detailed/order-detailed.component').then(
            (m) => m.OrderDetailedComponent,
          ),
        data: { breadcrumb: { alias: 'OrderDetailed' } },
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
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
