import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { filter, map } from 'rxjs';
import { AccountService } from '../../account/account.service';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
  group?: string;
}

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatBadgeModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  templateUrl: './admin-layout.component.html',
  styles: [
    `
      :host {
        display: block;
      }
      .admin-root {
        min-height: 100vh;
      }
      /* Ngăn kéo bên trái: nền tối, thu gọn còn 80px */
      :host ::ng-deep .admin-sider.mat-drawer {
        width: 256px;
        background: #0f172a;
        border-right: 0;
        transition: width 0.2s ease;
      }
      :host ::ng-deep .admin-sider.collapsed.mat-drawer {
        width: 80px;
      }
      :host ::ng-deep .admin-sider .mat-drawer-inner-container {
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      /* Thanh trên: nền trắng, cao 64px */
      :host ::ng-deep .admin-header.mat-toolbar {
        height: 64px;
        min-height: 64px;
        padding: 0 16px;
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      }
      @media (min-width: 768px) {
        :host ::ng-deep .admin-header.mat-toolbar {
          padding: 0 32px;
        }
      }
      .admin-breadcrumb {
        align-items: center;
        gap: 4px;
        font-size: 14px;
      }
      .admin-breadcrumb .crumb-sep {
        font-size: 16px;
        color: #cbd5e1;
      }
      .admin-user-btn {
        display: flex;
        align-items: center;
        gap: 12px;
        height: 48px;
      }
      .admin-avatar {
        width: 34px;
        height: 34px;
        border-radius: 999px;
        background: linear-gradient(135deg, #0ea5e9, #6366f1);
        color: #fff;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .brand-logo {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        color: #fff;
        font-weight: 800;
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        flex-shrink: 0;
      }
      .brand-logo .logo-badge {
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: linear-gradient(135deg, #0ea5e9, #6366f1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #fff;
        flex-shrink: 0;
      }
      .menu-group-title {
        padding: 16px 24px 6px;
        font-size: 11px;
        font-weight: 700;
        color: #64748b;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .nav-link {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 24px;
        margin: 2px 12px;
        border-radius: 8px;
        color: #cbd5e1;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
      }
      .nav-link:hover {
        background: rgba(255, 255, 255, 0.06);
        color: #fff;
      }
      .nav-link.active {
        background: linear-gradient(90deg, rgba(14, 165, 233, 0.18), rgba(99, 102, 241, 0.18));
        color: #fff;
        box-shadow: inset 3px 0 0 #38bdf8;
      }
      .nav-link mat-icon {
        font-size: 18px;
        width: 18px;
        text-align: center;
        flex-shrink: 0;
      }
    `,
  ],
})
export class AdminLayoutComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly accountService = inject(AccountService);

  readonly user = this.accountService.currentUser;
  readonly isCollapsed = signal(false);
  readonly notificationCount = 0;

  readonly breadcrumbs = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map(() => this.buildBreadcrumb()),
  );

  private readonly catalogGroup: MenuItem[] = [
    { path: 'companies', label: 'Công ty', icon: 'apartment', group: 'Danh mục' },
    { path: 'brands', label: 'Thương hiệu', icon: 'sell', group: 'Danh mục' },
    { path: 'electric-bikes', label: 'Xe điện', icon: 'pedal_bike', group: 'Sản phẩm' },
    { path: 'agricultural-machines', label: 'Máy nông nghiệp', icon: 'settings', group: 'Sản phẩm' },
    { path: 'electrical-appliances', label: 'Đồ điện dân dụng', icon: 'electrical_services', group: 'Sản phẩm' },
  ];

  private readonly systemGroup: MenuItem[] = [
    { path: 'users', label: 'Người dùng', icon: 'group', group: 'Hệ thống' },
    { path: 'media', label: 'Thư viện ảnh', icon: 'image', group: 'Hệ thống' },
  ];

  readonly menuGroups = [
    { title: 'Tổng quan', items: [{ path: 'dashboard', label: 'Bảng điều khiển', icon: 'speed' }] as MenuItem[] },
    { title: 'Danh mục', items: this.catalogGroup.filter((i) => i.group === 'Danh mục') },
    { title: 'Sản phẩm', items: [...this.catalogGroup.filter((i) => i.group === 'Sản phẩm')] },
    { title: 'Hệ thống', items: this.systemGroup },
  ];

  get allLinks(): MenuItem[] {
    return this.menuGroups.reduce((acc, g) => acc.concat(g.items), [] as MenuItem[]);
  }

  toggleCollapsed(): void {
    this.isCollapsed.set(!this.isCollapsed());
  }

  logout(): void {
    this.accountService.logout();
  }

  private buildBreadcrumb(): { label: string; url?: string }[] {
    const crumbs: { label: string; url?: string }[] = [{ label: 'Trang chủ quản trị', url: '/admin/dashboard' }];
    let current: ActivatedRoute | null = this.route.root.firstChild;
    const stack: { label: string; path: string }[] = [];
    while (current) {
      const data = (current.snapshot.data as { breadcrumb?: string }) || {};
      const urlSegments = current.snapshot.url.map((s) => s.path);
      if (data.breadcrumb && urlSegments.length > 0) {
        stack.push({ label: data.breadcrumb, path: urlSegments.join('/') });
      }
      current = current.firstChild;
    }
    let prefix = '/admin';
    for (const s of stack) {
      prefix += `/${s.path}`;
      crumbs.push({ label: s.label, url: prefix });
    }
    return crumbs;
  }
}
