import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
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
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    NzBadgeModule,
    NzToolTipModule,
  ],
  templateUrl: './admin-layout.component.html',
  styles: [
    `
      :host ::ng-deep .ant-layout-sider {
        position: relative;
        background: #0f172a;
      }
      :host ::ng-deep .ant-layout-sider-children {
        display: flex;
        flex-direction: column;
      }
      :host ::ng-deep .ant-menu-dark {
        background: transparent;
      }
      :host ::ng-deep .ant-menu-dark .ant-menu-item-selected {
        background: linear-gradient(90deg, #0ea5e9, #6366f1);
      }
      :host ::ng-deep .ant-layout-header {
        background: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
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
      .nav-link i {
        width: 18px;
        text-align: center;
        font-size: 15px;
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

  readonly breadcrumbs = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map(() => this.buildBreadcrumb()),
  );

  private readonly catalogGroup: MenuItem[] = [
    { path: 'companies', label: 'Công ty', icon: 'fa-building', group: 'Danh mục' },
    { path: 'brands', label: 'Thương hiệu', icon: 'fa-tags', group: 'Danh mục' },
    { path: 'electric-bikes', label: 'Xe điện', icon: 'fa-bicycle', group: 'Sản phẩm' },
    { path: 'agricultural-machines', label: 'Máy nông nghiệp', icon: 'fa-cogs', group: 'Sản phẩm' },
  ];

  private readonly systemGroup: MenuItem[] = [
    { path: 'users', label: 'Người dùng', icon: 'fa-users', group: 'Hệ thống' },
    { path: 'media', label: 'Thư viện ảnh', icon: 'fa-picture-o', group: 'Hệ thống' },
  ];

  readonly menuGroups = [
    { title: 'Tổng quan', items: [{ path: 'dashboard', label: 'Bảng điều khiển', icon: 'fa-tachometer' }] as MenuItem[] },
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
