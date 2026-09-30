import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { AccountService } from '../../../account/account.service';
import { SiteSettingsService } from '../../../services/site-settings.service';
import { DEFAULT_SITE_SETTINGS } from '../../models/site-settings';

interface NavItem {
  path: string;
  label: string;
  exact: boolean;
}

@Component({
  selector: 'cm-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  private readonly router = inject(Router);
  readonly accountService = inject(AccountService);

  readonly site = toSignal(inject(SiteSettingsService).getContent(), {
    initialValue: DEFAULT_SITE_SETTINGS,
  });

  readonly menuOpen = signal(false);

  readonly navItems: NavItem[] = [
    { path: '/', label: 'Trang chủ', exact: true },
    { path: '/xe-dien', label: 'Xe điện', exact: false },
    { path: '/may-nong-nghiep', label: 'Máy nông nghiệp', exact: false },
    { path: '/do-dien', label: 'Đồ điện', exact: false },
  ];

  constructor() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.menuOpen.set(false));
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
