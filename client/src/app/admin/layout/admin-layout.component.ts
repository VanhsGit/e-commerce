import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  computed,
  inject,
  signal,
} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
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
import { distinctUntilChanged, filter, map } from 'rxjs';
import { AccountService } from '../../account/account.service';
import {
  BACK_OFFICE_ROLES,
  HOME_CONTENT_ROLES,
  USERS_ROLES,
} from '../../shared/auth/roles';

const MOBILE_BREAKPOINT = '(max-width: 1023px)';

interface MenuItem {
  path: string;
  label: string;
  icon: string;
  group?: string;
  roles?: string[];
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
      /* Ngăn kéo bên trái: nền trắng, viền mảnh, thu gọn còn 80px */
      :host ::ng-deep .admin-sider.mat-drawer {
        width: 256px;
        background: #fff;
        border-right: 1px solid #e2e8f0;
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
      :host ::ng-deep .admin-main.mat-drawer-content {
        background: #f8fafc;
      }
      .brand-logo {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-bottom: 1px solid #e2e8f0;
        overflow: hidden;
        white-space: nowrap;
        flex-shrink: 0;
      }
      .brand-logo .logo-badge {
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: #059669;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        flex-shrink: 0;
      }
      .menu-group-title {
        padding: 16px 24px 6px;
        font-size: 12px;
        font-weight: 600;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }
      .nav-link {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 24px;
        margin: 2px 12px;
        border-radius: 8px;
        color: #475569;
        font-size: 15px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.15s ease, color 0.15s ease;
        text-decoration: none;
      }
      /* Đăng xuất giờ là <button>: reset kiểu mặc định của trình duyệt */
      button.nav-link {
        width: calc(100% - 24px);
        border: 0;
        background: transparent;
        text-align: left;
        font-family: inherit;
      }
      /* Thanh trên di động: chỉ hiện dưới 1024px, chứa nút hamburger + tên app */
      :host ::ng-deep .admin-mobile-bar.mat-toolbar {
        position: sticky;
        top: 0;
        z-index: 20;
        height: 56px;
        min-height: 56px;
        padding: 0 8px;
        gap: 4px;
        background: #fff;
        border-bottom: 1px solid #e2e8f0;
      }
      .admin-mobile-bar__title {
        font-size: 15px;
        font-weight: 600;
        color: #0f172a;
      }
      .nav-link:hover {
        background: #f1f5f9;
        color: #0f172a;
      }
      .nav-link.active {
        background: #ecfdf5;
        color: #047857;
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
  private readonly breakpointObserver = inject(BreakpointObserver);

  /**
   * mat-sidenav-container tự tính lại margin nội dung mỗi khi drawer đổi
   * mode/opened (qua ngDoCheck debounce + viewportRuler resize của chính
   * Material) - việc đổi margin đó ăn theo CSS transition sẵn có của
   * Material trên `.mat-drawer-content` (margin-left 400ms), nên vài trăm
   * ms đầu sau khi đổi mode, nội dung "trượt" mượt từ dưới sidebar ra thay
   * vì nhảy khựng - đây là hiệu ứng bình thường của mat-sidenav khi mode
   * đổi sau khi đã render (không phải lỗi). Ta chỉ cần đảm bảo state BAN
   * ĐẦU (trước khi có bất kỳ thay đổi/animation nào) đã đúng ngay từ đầu,
   * và chủ động gọi lại `updateContentMargins()` khi mode thật sự đổi để
   * không phải chờ chu kỳ debounce mặc định của Material.
   */
  @ViewChild(MatSidenavContainer) private sidenavContainer?: MatSidenavContainer;

  readonly user = this.accountService.currentUser;
  readonly isCollapsed = signal(false);
  readonly notificationCount = 0;

  /**
   * Dưới 1024px: sidebar biến thành drawer nổi (over), đóng mặc định.
   * Khởi tạo đồng bộ bằng `isMatched` (không đợi `observe()` phát async) để
   * lần render đầu tiên đã đúng mode ngay - tránh MatSidenavContainer tính
   * margin nội dung theo mode/kích thước cũ rồi không tính lại, gây đè nội
   * dung lên nhau ở desktop.
   */
  readonly isMobile = signal(this.breakpointObserver.isMatched(MOBILE_BREAKPOINT));
  readonly mobileNavOpen = signal(false);

  readonly breadcrumbs = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map(() => this.buildBreadcrumb()),
  );

  constructor() {
    this.breakpointObserver
      .observe(MOBILE_BREAKPOINT)
      .pipe(distinctUntilChanged((a, b) => a.matches === b.matches))
      .subscribe(({ matches }) => {
        this.isMobile.set(matches);
        if (!matches) this.mobileNavOpen.set(false);
        this.sidenavContainer?.updateContentMargins();
      });

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.mobileNavOpen.set(false));
  }

  private readonly catalogGroup: MenuItem[] = [
    {
      path: 'companies',
      label: 'Công ty',
      icon: 'apartment',
      group: 'Danh mục',
      roles: BACK_OFFICE_ROLES,
    },
    {
      path: 'brands',
      label: 'Thương hiệu',
      icon: 'sell',
      group: 'Danh mục',
      roles: BACK_OFFICE_ROLES,
    },
    {
      path: 'product-categories',
      label: 'Danh mục sản phẩm',
      icon: 'category',
      group: 'Danh mục',
      roles: BACK_OFFICE_ROLES,
    },
    {
      path: 'electric-bikes',
      label: 'Xe điện',
      icon: 'pedal_bike',
      group: 'Sản phẩm',
      roles: BACK_OFFICE_ROLES,
    },
    {
      path: 'agricultural-machines',
      label: 'Máy nông nghiệp',
      icon: 'settings',
      group: 'Sản phẩm',
      roles: BACK_OFFICE_ROLES,
    },
    {
      path: 'electrical-appliances',
      label: 'Đồ điện dân dụng',
      icon: 'bolt',
      group: 'Sản phẩm',
      roles: BACK_OFFICE_ROLES,
    },
  ];

  private readonly systemGroup: MenuItem[] = [
    {
      path: 'home-content',
      label: 'Nội dung trang chủ',
      icon: 'home',
      group: 'Hệ thống',
      roles: HOME_CONTENT_ROLES,
    },
    {
      path: 'category-pages',
      label: 'Nội dung trang ngành hàng',
      icon: 'description',
      group: 'Hệ thống',
      roles: HOME_CONTENT_ROLES,
    },
    {
      path: 'users',
      label: 'Người dùng',
      icon: 'group',
      group: 'Hệ thống',
      roles: USERS_ROLES,
    },
  ];

  private readonly allMenuGroups = [
    {
      title: 'Tổng quan',
      items: [
        {
          path: 'dashboard',
          label: 'Bảng điều khiển',
          icon: 'speed',
          roles: BACK_OFFICE_ROLES,
        },
      ] as MenuItem[],
    },
    {
      title: 'Danh mục',
      items: this.catalogGroup.filter((i) => i.group === 'Danh mục'),
    },
    {
      title: 'Sản phẩm',
      items: [...this.catalogGroup.filter((i) => i.group === 'Sản phẩm')],
    },
    { title: 'Hệ thống', items: this.systemGroup },
  ];

  /** Chỉ hiển thị nhóm/mục menu mà user hiện tại có quyền truy cập. */
  readonly menuGroups = computed(() =>
    this.allMenuGroups
      .map((g) => ({
        title: g.title,
        items: g.items.filter(
          (i) => !i.roles?.length || this.accountService.hasRole(...i.roles),
        ),
      }))
      .filter((g) => g.items.length > 0),
  );

  get allLinks(): MenuItem[] {
    return this.menuGroups().reduce(
      (acc, g) => acc.concat(g.items),
      [] as MenuItem[],
    );
  }

  toggleCollapsed(): void {
    this.isCollapsed.set(!this.isCollapsed());
    this.sidenavContainer?.updateContentMargins();
  }

  toggleMobileNav(): void {
    this.mobileNavOpen.set(!this.mobileNavOpen());
  }

  closeMobileNav(): void {
    if (this.isMobile()) this.mobileNavOpen.set(false);
  }

  /** mat-sidenav báo trạng thái đóng khi người dùng bấm ra ngoài / nhấn Esc. */
  onSidenavOpenedChange(opened: boolean): void {
    if (this.isMobile()) this.mobileNavOpen.set(opened);
  }

  logout(): void {
    this.accountService.logout();
  }

  private buildBreadcrumb(): { label: string; url?: string }[] {
    const crumbs: { label: string; url?: string }[] = [
      { label: 'Trang chủ quản trị', url: '/admin/dashboard' },
    ];
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
