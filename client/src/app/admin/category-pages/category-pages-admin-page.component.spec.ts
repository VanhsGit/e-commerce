import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { CategoryPageContentService } from '../../services/category-page-content.service';
import { SiteSettingsService } from '../../services/site-settings.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { DEFAULT_CATEGORY_PAGE_CONTENT } from '../../shared/models/category-page-content';
import { DEFAULT_SITE_SETTINGS } from '../../shared/models/site-settings';
import { ProductKind } from '../../shared/models/product-category';
import { NotifyService } from '../../shared/services/notify.service';
import { CategoryPagesAdminPageComponent } from './category-pages-admin-page.component';

describe('CategoryPagesAdminPageComponent', () => {
  let update: jasmine.Spy;
  let siteUpdate: jasmine.Spy;
  let notify: { success: jasmine.Spy; error: jasmine.Spy };

  beforeEach(() => {
    update = jasmine.createSpy('update').and.callFake((_kind: ProductKind, content: unknown) =>
      of({ content, updatedAt: '2026-09-30T00:00:00Z' }),
    );
    siteUpdate = jasmine.createSpy('siteUpdate').and.callFake((content: unknown) =>
      of({ content, updatedAt: '2026-09-30T00:00:00Z' }),
    );
    notify = { success: jasmine.createSpy('success'), error: jasmine.createSpy('error') };
    TestBed.configureTestingModule({
      imports: [CategoryPagesAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        {
          provide: CategoryPageContentService,
          useValue: {
            get: (kind: ProductKind) =>
              of({ content: DEFAULT_CATEGORY_PAGE_CONTENT[kind], updatedAt: '2026-01-01T00:00:00Z' }),
            update,
          },
        },
        {
          provide: SiteSettingsService,
          useValue: {
            reload: () => of({ content: DEFAULT_SITE_SETTINGS, updatedAt: '2026-01-01T00:00:00Z' }),
            update: siteUpdate,
          },
        },
        { provide: NotifyService, useValue: notify },
        { provide: ConfirmService, useValue: { open: () => of(true) } },
      ],
    });
    spyOn(TestBed.inject(MatIconRegistry), 'getNamedSvgIcon').and.callFake(() =>
      of(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
    );
  });

  function create() {
    const fixture = TestBed.createComponent(CategoryPagesAdminPageComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('loads three independent forms', () => {
    const c = create().componentInstance;

    expect(c.forms.bike).not.toBe(c.forms.machine);
    expect(c.forms.machine.get('kind')?.value).toBe('machine');
    expect(c.hasUnsavedChanges()).toBeFalse();
  });

  it('keeps unsaved edits of one kind when switching tabs', () => {
    const fixture = create();
    const c = fixture.componentInstance;
    c.forms.bike.get('hero.title')?.setValue('Tiêu đề mới');
    c.forms.bike.markAsDirty();

    c.selectedTabIndex.set(2);
    fixture.detectChanges();
    c.selectedTabIndex.set(1);
    fixture.detectChanges();

    expect(c.forms.bike.get('hero.title')?.value).toBe('Tiêu đề mới');
    expect(c.forms.machine.dirty).toBeFalse();
  });

  it('guard sees dirty state of a kind that is not currently open', () => {
    const c = create().componentInstance;
    c.forms.appliance.markAsDirty();
    c.selectedTabIndex.set(1);

    expect(c.hasUnsavedChanges()).toBeTrue();
  });

  it('saves only the kind that is open', () => {
    const fixture = create();
    const c = fixture.componentInstance;
    c.forms.bike.markAsDirty();
    c.forms.machine.markAsDirty();
    c.selectedTabIndex.set(2);
    fixture.detectChanges();

    c.save();

    expect(update).toHaveBeenCalledTimes(1);
    expect(update.calls.mostRecent().args[0]).toBe('machine');
    expect(c.forms.machine.dirty).toBeFalse();
    expect(c.forms.bike.dirty).toBeTrue();
  });

  it('loads the site settings form on the first tab and guards its dirty state', () => {
    const c = create().componentInstance;

    expect(c.isSiteTab()).toBeTrue();
    expect(c.siteForm.get('brand.name')?.value).toBe('EcoTech');
    expect(c.hasUnsavedChanges()).toBeFalse();

    c.siteForm.markAsDirty();
    c.selectedTabIndex.set(2);
    expect(c.hasUnsavedChanges()).toBeTrue();
  });

  it('saves only the site settings when the first tab is open', () => {
    const fixture = create();
    const c = fixture.componentInstance;
    c.forms.bike.markAsDirty();
    c.siteForm.get('contact.phoneDisplay')?.setValue('0900 000 000');
    c.siteForm.markAsDirty();

    c.save();

    expect(siteUpdate).toHaveBeenCalledTimes(1);
    expect(siteUpdate.calls.mostRecent().args[0].contact.phoneDisplay).toBe('0900 000 000');
    expect(update).not.toHaveBeenCalled();
    expect(c.siteForm.dirty).toBeFalse();
    expect(c.forms.bike.dirty).toBeTrue();
  });

  it('does not PUT invalid site settings', () => {
    const c = create().componentInstance;
    c.siteForm.get('contact.email')?.setValue('sai');

    c.save();

    expect(siteUpdate).not.toHaveBeenCalled();
  });

  it('does not PUT an invalid form and jumps to the failing section', () => {
    const c = create().componentInstance;
    c.selectedTabIndex.set(1);
    c.forms.bike.get('cta.email')?.setValue('sai');

    c.save();

    expect(update).not.toHaveBeenCalled();
    expect(c.state('bike').sectionIndex).toBe(c.sections.findIndex((s) => s.key === 'cta'));
  });
});
