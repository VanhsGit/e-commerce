import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of, throwError } from 'rxjs';
import { EntityImageService } from '../../services/entity-image.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { provideAppIcons } from '../../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT, HomePageContent } from '../../home/home-content.model';
import { HomeContentService } from '../../home/home-content.service';
import { HomeContentAdminPageComponent } from './home-content-admin-page.component';
import { homeContentPendingChangesGuard } from './home-content-pending-changes.guard';

describe('HomeContentAdminPageComponent', () => {
  let homeService: jasmine.SpyObj<HomeContentService>;
  let confirm: jasmine.SpyObj<ConfirmService>;
  let notify: jasmine.SpyObj<NotifyService>;

  beforeEach(async () => {
    homeService = jasmine.createSpyObj('HomeContentService', ['get', 'update']);
    confirm = jasmine.createSpyObj('ConfirmService', ['open']);
    notify = jasmine.createSpyObj('NotifyService', ['success', 'error']);
    homeService.get.and.returnValue(of({ content: cloneDefault(), updatedAt: '' }));
    homeService.update.and.callFake((content) => of({ content, updatedAt: '2026-09-29T00:00:00Z' }));

    await TestBed.configureTestingModule({
      imports: [HomeContentAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        provideRouter([]),
        provideAppIcons(),
        { provide: HomeContentService, useValue: homeService },
        { provide: ConfirmService, useValue: confirm },
        { provide: NotifyService, useValue: notify },
        { provide: EntityImageService, useValue: { list: () => of([]), upload: () => of(null) } },
      ],
    }).compileComponents();
  });

  it('renders seven fixed editor sections and all fixed repeated items', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('[data-editor-section]').length).toBe(7);
    expect(element.querySelectorAll('[data-hero-card]').length).toBe(3);
    expect(element.querySelectorAll('[data-commitment-item]').length).toBe(4);
  });

  it('updates an image control when the picker emits', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();

    fixture.componentInstance.setImage('hero.cards.0.imageSrc', '/content/entity-images/hero.webp');

    expect(fixture.componentInstance.form.get('hero.cards.0.imageSrc')!.value).toBe('/content/entity-images/hero.webp');
    expect(fixture.componentInstance.form.dirty).toBeTrue();
  });

  it('publishes and marks the form pristine only after a successful save', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    fixture.componentInstance.form.get('hero.title')!.setValue('Đã sửa');
    fixture.componentInstance.form.markAsDirty();

    fixture.componentInstance.save();
    tick();

    expect(homeService.update).toHaveBeenCalled();
    expect(fixture.componentInstance.form.pristine).toBeTrue();
    expect(notify.success).toHaveBeenCalled();
  }));

  it('keeps dirty values after a failed save', fakeAsync(() => {
    homeService.update.and.returnValue(throwError(() => new Error('offline')));
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    fixture.componentInstance.form.get('hero.title')!.setValue('Chưa lưu');
    fixture.componentInstance.form.markAsDirty();

    fixture.componentInstance.save();
    tick();

    expect(fixture.componentInstance.form.get('hero.title')!.value).toBe('Chưa lưu');
    expect(fixture.componentInstance.form.dirty).toBeTrue();
    expect(notify.error).toHaveBeenCalled();
  }));

  it('restores defaults only after confirmation and never publishes automatically', fakeAsync(() => {
    confirm.open.and.returnValue(of(true));
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    fixture.componentInstance.form.get('hero.title')!.setValue('Tùy chỉnh');
    fixture.componentInstance.form.markAsDirty();

    fixture.componentInstance.restoreDefaults();
    tick();

    expect(confirm.open).toHaveBeenCalled();
    expect(fixture.componentInstance.form.get('hero.title')!.value).toBe(DEFAULT_HOME_PAGE_CONTENT.hero.title);
    expect(fixture.componentInstance.form.dirty).toBeTrue();
    expect(homeService.update).not.toHaveBeenCalled();
  }));

  it('guards dirty navigation and allows pristine navigation', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    expect(homeContentPendingChangesGuard(fixture.componentInstance, null as any, null as any, null as any)).toBeTrue();

    fixture.componentInstance.form.markAsDirty();
    confirm.open.and.returnValue(of(false));
    let allowed: boolean | undefined;
    (homeContentPendingChangesGuard(fixture.componentInstance, null as any, null as any, null as any) as any)
      .subscribe((value: boolean) => (allowed = value));
    tick();
    expect(allowed).toBeFalse();
  }));
});

function cloneDefault(): HomePageContent {
  return JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
}
