import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AccountService } from '../../../account/account.service';
import { ProductCategoryService } from '../../../services/product-category.service';
import { SiteSettingsService } from '../../../services/site-settings.service';
import { provideAppIcons } from '../../icons/provide-app-icons';
import { DEFAULT_SITE_SETTINGS } from '../../models/site-settings';
import { ProductCategory, ProductKind } from '../../models/product-category';
import { HeaderComponent } from './header.component';

@Component({ standalone: true, template: '' })
class BlankComponent {}

function cat(
  id: string,
  kind: ProductKind,
  name: string,
  slug: string,
  children: ProductCategory[] = [],
): ProductCategory {
  return {
    id, kind, name, slug, parentId: null, parentName: null, description: '', imageUrl: '', sortOrder: 0,
    metadata: {}, productCount: 0, createdAt: new Date(), updatedAt: new Date(), isUsed: true, children,
  };
}

const TREE: ProductCategory[] = [
  cat('p1', 'bike', '133-12A', '133-12a', [
    cat('c1', 'bike', 'Bản rẻ', '133-12a-ban-re'),
    cat('c2', 'bike', 'Bản full', '133-12a-ban-full'),
  ]),
  cat('p2', 'bike', 'Xe XS', 'xe-xs'),
  cat('m1', 'machine', 'Máy cưa', 'may-cua'),
];

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  function setup(navTree$ = of(TREE)) {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: '**', component: BlankComponent }]),
        provideAppIcons(),
        { provide: AccountService, useValue: { isBackOffice: () => false } },
        { provide: SiteSettingsService, useValue: { getContent: () => of(DEFAULT_SITE_SETTINGS) } },
        { provide: ProductCategoryService, useValue: { getNavTree: () => navTree$ } },
      ],
    });
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  }

  const el = () => fixture.nativeElement as HTMLElement;
  const group = (index = 0) =>
    el().querySelectorAll<HTMLElement>('nav[aria-label="Điều hướng chính"] > div.relative')[index];
  const trigger = (kind: string) => el().querySelector<HTMLButtonElement>(`#cm-nav-btn-${kind}`);
  const panel = (kind: string) => el().querySelector<HTMLElement>(`#cm-nav-panel-${kind}`);
  const hrefs = (kind: string) =>
    Array.from(panel(kind)?.querySelectorAll('a[role="menuitem"]') ?? []).map((a) => a.getAttribute('href'));

  /** Tailwind ẩn nav desktop ở viewport hẹp; phần tử display:none thì không focus được. */
  function showDesktopNav() {
    el().querySelector<HTMLElement>('nav[aria-label="Điều hướng chính"]')?.style.setProperty('display', 'flex');
  }

  function hover(target: HTMLElement, type: 'pointerenter' | 'pointerleave') {
    target.dispatchEvent(new PointerEvent(type, { pointerType: 'mouse' }));
    fixture.detectChanges();
  }

  it('opens on hover and closes after a short delay, unless the pointer returns', fakeAsync(() => {
    setup();
    hover(group(0), 'pointerenter');
    expect(panel('bike')).not.toBeNull();
    expect(trigger('bike')?.getAttribute('aria-expanded')).toBe('true');

    hover(group(0), 'pointerleave');
    tick(100);
    hover(group(0), 'pointerenter');
    tick(200);
    fixture.detectChanges();
    expect(panel('bike')).not.toBeNull();

    hover(group(0), 'pointerleave');
    tick(160);
    fixture.detectChanges();
    expect(panel('bike')).toBeNull();
    expect(trigger('bike')?.getAttribute('aria-expanded')).toBe('false');
  }));

  it('ignores touch pointers on hover and opens on click instead, one at a time', () => {
    setup();
    group(0).dispatchEvent(new PointerEvent('pointerenter', { pointerType: 'touch' }));
    fixture.detectChanges();
    expect(panel('bike')).toBeNull();

    trigger('bike')?.click();
    fixture.detectChanges();
    expect(panel('bike')?.getAttribute('role')).toBe('menu');
    expect(trigger('bike')?.getAttribute('aria-haspopup')).toBe('menu');

    trigger('machine')?.click();
    fixture.detectChanges();
    expect(panel('bike')).toBeNull();
    expect(panel('machine')).not.toBeNull();
  });

  it('lists roots with indented children and links with ?category=<slug>', () => {
    setup();
    trigger('bike')?.click();
    fixture.detectChanges();
    expect(hrefs('bike')).toEqual([
      '/xe-dien?category=133-12a&focus=catalog',
      '/xe-dien?category=133-12a-ban-re&focus=catalog',
      '/xe-dien?category=133-12a-ban-full&focus=catalog',
      '/xe-dien?category=xe-xs&focus=catalog',
    ]);
    expect(el().querySelector('nav a[href="/xe-dien"]')).not.toBeNull();
  });

  it('navigates with the category query param and closes the panel', async () => {
    setup();
    trigger('bike')?.click();
    fixture.detectChanges();
    panel('bike')?.querySelectorAll<HTMLAnchorElement>('a')[2].click();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(router.url).toBe('/xe-dien?category=133-12a-ban-full&focus=catalog');
    expect(panel('bike')).toBeNull();
  });

  it('closes on Escape and returns focus to the trigger', () => {
    setup();
    showDesktopNav();
    trigger('bike')?.click();
    fixture.detectChanges();
    panel('bike')?.querySelector<HTMLElement>('a')?.focus();
    group(0).dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(panel('bike')).toBeNull();
    expect(document.activeElement).toBe(trigger('bike'));
  });

  it('moves focus between items with the arrow keys', () => {
    setup();
    showDesktopNav();
    trigger('bike')?.click();
    fixture.detectChanges();
    const p = panel('bike') as HTMLElement;
    const items = p.querySelectorAll<HTMLElement>('[role="menuitem"]');
    items[0].focus();
    p.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    expect(document.activeElement).toBe(items[1]);
    p.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
    p.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
    expect(document.activeElement).toBe(items[items.length - 1]);
  });

  it('closes on an outside click', () => {
    setup();
    trigger('bike')?.click();
    fixture.detectChanges();
    document.body.click();
    fixture.detectChanges();
    expect(panel('bike')).toBeNull();
  });

  it('closes on NavigationEnd', async () => {
    setup();
    trigger('bike')?.click();
    fixture.detectChanges();
    await router.navigateByUrl('/do-dien');
    fixture.detectChanges();
    expect(panel('bike')).toBeNull();
  });

  it('keeps plain links and shows no dropdown when categories fail to load', () => {
    setup(throwError(() => new Error('boom')));
    expect(trigger('bike')).toBeNull();
    const link = el().querySelector('nav[aria-label="Điều hướng chính"] a[href="/xe-dien"]');
    expect(link?.textContent).toContain('Xe điện');
  });

  it('applies the industry accent on industry routes only', async () => {
    setup();
    expect(el().querySelector('a[aria-current="page"]')?.className).toContain('bg-emerald-50');
    expect(el().querySelector('header > div.h-1')).toBeNull();

    await router.navigateByUrl('/may-nong-nghiep');
    fixture.detectChanges();
    expect(el().querySelector('a[aria-current="page"]')?.parentElement?.className).toContain('bg-amber-100');
    expect(el().querySelector('header > div.h-1')).not.toBeNull();
    expect(el().querySelector('cm-category-bar')).toBeNull();

    await router.navigateByUrl('/product-detail/bike/1');
    fixture.detectChanges();
    expect(el().querySelector('header > div.h-1')).toBeNull();
  });

  it('mobile menu shows an accordion of categories per industry', () => {
    setup();
    el().querySelector<HTMLButtonElement>('button[aria-controls="cm-mobile-menu"]')?.click();
    fixture.detectChanges();
    const toggle = el().querySelector<HTMLButtonElement>(
      '#cm-mobile-menu button[aria-controls="cm-mobile-sub-bike"]',
    ) as HTMLButtonElement;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(el().querySelector('#cm-mobile-sub-bike a[href="/xe-dien?category=133-12a-ban-re"]')).not.toBeNull();
  });
});
