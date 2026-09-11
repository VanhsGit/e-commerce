import { AccountService } from './account/account.service';
import { Component, computed, OnInit, signal } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SectionHeaderComponent } from './core/section-header/section-header.component';
import { firstValueFrom, filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgxSpinnerModule,
    NavBarComponent,
    SectionHeaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'SkiNet';
  readonly currentUrl = signal<string>('/');

  readonly isHomeRoute = computed(() => this.currentUrl() === '/');
  readonly isProductDetailRoute = computed(() =>
    this.currentUrl().startsWith('/product-detail'),
  );
  readonly showGlobalNavBar = computed(
    () => !this.isHomeRoute() && !this.isProductDetailRoute(),
  );
  readonly showSectionHeader = computed(() => !this.isHomeRoute());

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.currentUrl.set(e.urlAfterRedirects || e.url);
        }
      });

    // Initial snapshot
    if (this.router.url) this.currentUrl.set(this.router.url);

    this.loadCurrentUser();
  }

  async loadCurrentUser(): Promise<void> {
    const token = localStorage.getItem('token');
    try {
      await firstValueFrom(this.accountService.loadCurrentUser(token));
    } catch (error) {
      // ignore token errors here; guards will redirect login routes
    }
  }
}
