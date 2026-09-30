import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { catchError, filter, map, of } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { AccountService } from '../../../account/account.service';
import { ProductCategoryService } from '../../../services/product-category.service';
import { SiteSettingsService } from '../../../services/site-settings.service';
import { KIND_THEME } from '../../models/kind-theme';
import { ProductCategory, ProductKind, PRODUCT_KIND_ROUTES } from '../../models/product-category';
import { DEFAULT_SITE_SETTINGS } from '../../models/site-settings';
import { CategoryBarComponent } from '../category-bar/category-bar.component';

interface NavItem {
  path: string;
  label: string;
  exact: boolean;
  kind: ProductKind | null;
}

/** Giao diện trung tính (trang chủ và mọi trang không thuộc ngành hàng). */
const NEUTRAL = {
  navActive: 'bg-emerald-50 text-emerald-800',
  logoBadge: 'from-emerald-600 via-teal-600 to-sky-700',
  headerTint: 'border-slate-200/70 bg-white/90',
};

const HOVER_CLOSE_DELAY_MS = 150;

/** `/xe-dien?category=x` -> 'bike'; đường dẫn khác -> null. */
export function kindFromUrl(url: string): ProductKind | null {
  const path = url.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  const kinds = Object.keys(PRODUCT_KIND_ROUTES) as ProductKind[];
  return kinds.find((k) => PRODUCT_KIND_ROUTES[k] === path) ?? null;
}

@Component({
  selector: 'cm-header',
  standalone: true,
  imports: [NgClass, MatIconModule, RouterLink, CategoryBarComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnDestroy {
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly accountService = inject(AccountService);

  readonly site = toSignal(inject(SiteSettingsService).getContent(), {
    initialValue: DEFAULT_SITE_SETTINGS,
  });

  /** Một request dùng chung (cache ở service); lỗi thì coi như chưa có danh mục. */
  private readonly navTree = toSignal(
    inject(ProductCategoryService)
      .getNavTree()
      .pipe(catchError(() => of([] as ProductCategory[]))),
    { initialValue: [] as ProductCategory[] },
  );

  readonly menuOpen = signal(false);
  /** Dropdown desktop đang mở (tối đa một). */
  readonly openKind = signal<ProductKind | null>(null);
  /** Mục accordion đang mở trong menu mobile. */
  readonly mobileKind = signal<ProductKind | null>(null);

  readonly url = signal(this.router.url);

  readonly navItems: NavItem[] = [
    { path: '/', label: 'Trang chủ', exact: true, kind: null },
    { path: PRODUCT_KIND_ROUTES.bike, label: 'Xe điện', exact: false, kind: 'bike' },
    { path: PRODUCT_KIND_ROUTES.machine, label: 'Máy nông nghiệp', exact: false, kind: 'machine' },
    { path: PRODUCT_KIND_ROUTES.appliance, label: 'Đồ điện', exact: false, kind: 'appliance' },
  ];

  readonly kind = computed(() => kindFromUrl(this.url()));
  readonly kindTheme = computed(() => {
    const kind = this.kind();
    return kind ? KIND_THEME[kind] : null;
  });
  readonly navActiveClass = computed(() => this.kindTheme()?.navActive ?? NEUTRAL.navActive);
  readonly logoBadgeClass = computed(() => this.kindTheme()?.logoBadge ?? NEUTRAL.logoBadge);
  readonly headerTintClass = computed(() => this.kindTheme()?.headerTint ?? NEUTRAL.headerTint);

  /** Danh mục gốc theo ngành. */
  readonly rootsByKind = computed(() => {
    const out: Record<ProductKind, ProductCategory[]> = { bike: [], machine: [], appliance: [] };
    for (const root of this.navTree()) {
      if (!root.parentId && out[root.kind]) out[root.kind].push(root);
    }
    return out;
  });

  readonly activeSlug = computed(() => {
    try {
      const value = this.router.parseUrl(this.url()).queryParams['category'];
      return typeof value === 'string' && value ? value : null;
    } catch {
      return null;
    }
  });

  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        map((e) => e.urlAfterRedirects),
        takeUntilDestroyed(),
      )
      .subscribe((url) => {
        this.url.set(url);
        this.menuOpen.set(false);
        this.mobileKind.set(null);
        this.closeNow();
      });
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  isActive(item: NavItem): boolean {
    const path = this.url().split(/[?#]/)[0] || '/';
    return item.exact ? path === item.path : path === item.path || path.startsWith(item.path + '/');
  }

  hasMenu(kind: ProductKind | null): boolean {
    return !!kind && this.rootsByKind()[kind].length > 0;
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  toggleMobile(kind: ProductKind): void {
    this.mobileKind.update((open) => (open === kind ? null : kind));
  }

  // --- Dropdown desktop -------------------------------------------------

  /** Chỉ chuột mới mở khi rê; chạm/bút đi qua nút bấm để không mở nhầm rồi đóng ngay. */
  onPointerEnter(event: PointerEvent, kind: ProductKind): void {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    this.openNow(kind);
  }

  onPointerLeave(event: PointerEvent): void {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    this.scheduleClose();
  }

  openNow(kind: ProductKind): void {
    this.clearTimer();
    this.openKind.set(kind);
  }

  scheduleClose(): void {
    this.clearTimer();
    this.closeTimer = setTimeout(() => {
      this.closeTimer = null;
      this.openKind.set(null);
    }, HOVER_CLOSE_DELAY_MS);
  }

  closeNow(): void {
    this.clearTimer();
    this.openKind.set(null);
  }

  toggleDropdown(kind: ProductKind): void {
    if (this.openKind() === kind) this.closeNow();
    else this.openNow(kind);
  }

  onTriggerKeydown(event: KeyboardEvent, kind: ProductKind): void {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.openNow(kind);
      // panel được render sau change detection
      setTimeout(() => this.menuItems(kind)[0]?.focus());
    }
  }

  onPanelKeydown(event: KeyboardEvent, kind: ProductKind): void {
    const items = this.menuItems(kind);
    const index = items.indexOf(document.activeElement as HTMLElement);
    let next = -1;
    if (event.key === 'ArrowDown') next = (index + 1) % items.length;
    else if (event.key === 'ArrowUp') next = (index - 1 + items.length) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    if (next >= 0 && items.length) {
      event.preventDefault();
      items[next].focus();
    }
  }

  onEscape(kind: ProductKind): void {
    if (this.openKind() !== kind) return;
    this.closeNow();
    this.host.nativeElement.querySelector<HTMLElement>(`#cm-nav-btn-${kind}`)?.focus();
  }

  /** Focus rời khỏi cả nhóm (trigger + panel) thì đóng. */
  onFocusOut(event: FocusEvent, group: HTMLElement): void {
    const next = event.relatedTarget as Node | null;
    if (next && !group.contains(next)) this.closeNow();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.openKind() && !this.host.nativeElement.contains(event.target as Node)) this.closeNow();
  }

  private menuItems(kind: ProductKind): HTMLElement[] {
    return Array.from(
      this.host.nativeElement.querySelectorAll<HTMLElement>(`#cm-nav-panel-${kind} [role="menuitem"]`),
    );
  }

  private clearTimer(): void {
    if (this.closeTimer !== null) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
}
