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

  it('renders every editor tab while keeping only the active section in the DOM', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const element: HTMLElement = fixture.nativeElement;
    const industryCount = component.industries.length;
    const tabCount = 4 + industryCount + 4;
    expect(element.querySelectorAll('[role="tab"]').length).toBe(11);

    // Chỉ tab đang chọn được render trong DOM tại một thời điểm.
    for (let i = 0; i < tabCount; i++) {
      component.selectedTabIndex.set(i);
      fixture.detectChanges();
      tick();
      fixture.detectChanges();
      expect(element.querySelectorAll('[data-editor-section]').length)
        .withContext(`tab ${i}`)
        .toBe(1);
    }

    // Hero retains category navigation titles and preserves legacy card fields.
    component.selectedTabIndex.set(0);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(element.querySelectorAll('[data-hero-card]').length).toBe(3);
    expect(element.querySelectorAll('[data-hero-card] [formControlName="title"]').length).toBe(3);
    expect(element.querySelector('[data-hero-card] [formControlName="imageAlt"]')).not.toBeNull();
    expect(element.querySelector('[data-hero-card] [formControlName="description"]')).not.toBeNull();
    expect(element.querySelector('[data-hero-card] app-representative-image-picker')).not.toBeNull();

    // Tab "Cam kết" (ngay sau các tab ngành hàng): 4 mục cam kết.
    const commitmentsTabIndex = 4 + industryCount;
    component.selectedTabIndex.set(commitmentsTabIndex);
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(element.querySelectorAll('[data-commitment-item]').length).toBe(4);
  }));

  it('always keeps the Save button visible in a sticky bar, with a "chưa lưu" indicator when dirty', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('.admin-save-bar')).not.toBeNull();
    expect(element.textContent).not.toContain('Bạn có thay đổi chưa lưu');

    fixture.componentInstance.form.markAsDirty();
    fixture.detectChanges();
    expect(element.textContent).toContain('Bạn có thay đổi chưa lưu');
  });

  it('jumps to the first invalid tab when trying to save an invalid form', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    component.form.get('cta.email')!.setValue('');
    component.selectedTabIndex.set(0);

    component.save();

    // CTA follows Hero, navigation, company, solutions, industries, commitments and warranty.
    const ctaTabIndex = 4 + component.industries.length + 2;
    expect(component.selectedTabIndex()).toBe(ctaTabIndex);
  });

  it('updates an image control when the picker emits', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();

    fixture.componentInstance.setImage('hero.cards.0.imageSrc', '/content/entity-images/hero.webp');

    expect(fixture.componentInstance.form.get('hero.cards.0.imageSrc')!.value).toBe('/content/entity-images/hero.webp');
    expect(fixture.componentInstance.form.dirty).toBeTrue();
  });

  it('publishes company copy, additional solution images and recruitment edits', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.form.get('company.title')!.setValue('Công ty đã cập nhật');
    for (let i = 0; i < 4; i++) {
      component.addSolutionImage();
      const index = component.solutionImages.length - 1;
      component.setImage(`solutions.images.${index}.imageSrc`, `/content/entity-images/solution-${i}.webp`);
      component.form.get(`solutions.images.${index}.imageAlt`)!.setValue(`Giải pháp ${i}`);
      component.form.get(`solutions.images.${index}.kind`)!.setValue('appliance');
    }
    component.addRecruitmentRow('positions');
    const index = component.recruitmentRows('positions').length - 1;
    component.form.get(`recruitment.positions.${index}.count`)!.setValue(2);
    component.form.get(`recruitment.positions.${index}.title`)!.setValue('Kỹ thuật viên');
    component.form.get(`recruitment.positions.${index}.note`)!.setValue('');
    component.save();
    const saved = homeService.update.calls.mostRecent().args[0];
    expect(saved.company.title).toBe('Công ty đã cập nhật');
    expect(saved.solutions.images.length).toBeGreaterThan(3);
    expect(saved.solutions.images[saved.solutions.images.length - 1].kind).toBe('appliance');
    expect(saved.recruitment.positions[saved.recruitment.positions.length - 1]).toEqual({ count: 2, title: 'Kỹ thuật viên', note: '' });
    expect(saved.hero.cards[0]).toEqual(DEFAULT_HOME_PAGE_CONTENT.hero.cards[0]);
    expect(saved.industries[0].kind).toBe('bike');
    expect(component.form.pristine).toBeTrue();
  });

  it('reorders and removes solution images, marking edits dirty and keeping the last row', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const images = component.solutionImages;
    const originalFirst = images.at(0).getRawValue();
    component.moveSolutionImage(0, 1);
    expect(images.at(1).getRawValue()).toEqual(originalFirst);
    expect(component.form.dirty).toBeTrue();
    while (images.length > 1) component.removeSolutionImage(0);
    component.removeSolutionImage(0);
    expect(images.length).toBe(1);
  });

  it('prevents saving unfinished dynamic rows and selects their tab', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.addSolutionImage();
    component.save();
    expect(component.selectedTabIndex()).toBe(3);
    expect(homeService.update).not.toHaveBeenCalled();
    component.removeSolutionImage(component.solutionImages.length - 1);
    component.addRecruitmentRow('hotlines');
    component.form.get(`recruitment.hotlines.${component.recruitmentRows('hotlines').length - 1}.tel`)!.setValue('bad-number');
    component.save();
    expect(component.selectedTabIndex()).toBe(10);
    expect(homeService.update).not.toHaveBeenCalled();
  });

  it('prevents publishing blank backgrounds, navigation and company fields', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    for (const [path, tab] of [['hero.desktopImageSrc', 0], ['hero.mobileImageSrc', 0], ['navigation.heading', 1], ['company.title', 2], ['company.imageSrc', 2]] as const) {
      const control = component.form.get(path)!;
      const original = control.value;
      control.setValue('');
      component.save();
      expect(component.selectedTabIndex()).withContext(path).toBe(tab);
      expect(homeService.update).withContext(path).not.toHaveBeenCalled();
      control.setValue(original);
    }
  });

  it('preserves recruitment rows and refuses to remove the final row of each list', () => {
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    for (const list of ['positions', 'benefits', 'sites', 'hotlines'] as const) {
      const rows = component.recruitmentRows(list);
      expect(rows.getRawValue()).toEqual(DEFAULT_HOME_PAGE_CONTENT.recruitment[list]);
      while (rows.length > 1) component.removeRecruitmentRow(list, rows.length - 1);
      component.form.markAsPristine();
      component.removeRecruitmentRow(list, 0);
      expect(rows.length).withContext(list).toBe(1);
      expect(component.form.pristine).withContext(list).toBeTrue();
      component.addRecruitmentRow(list);
      expect(rows.length).withContext(list).toBe(2);
      expect(component.form.dirty).withContext(list).toBeTrue();
      expect(rows.at(1).invalid).withContext(list).toBeTrue();
    }
  });

  it('loads legacy content without replacing previously saved copy and card images', () => {
    const legacy: any = cloneDefault();
    delete legacy.navigation;
    delete legacy.company;
    delete legacy.solutions;
    delete legacy.recruitment;
    delete legacy.hero.desktopImageSrc;
    delete legacy.hero.mobileImageSrc;
    delete legacy.hero.contactLabel;
    delete legacy.hero.warrantyLabel;
    legacy.hero.title = 'Tiêu đề đã lưu';
    legacy.hero.cards[0].imageSrc = '/content/entity-images/saved.webp';
    homeService.get.and.returnValue(of({ content: legacy, updatedAt: 'saved' }));
    const fixture = TestBed.createComponent(HomeContentAdminPageComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.loadFailed()).toBeFalse();
    expect(fixture.componentInstance.form.get('hero.title')!.value).toBe('Tiêu đề đã lưu');
    expect(fixture.componentInstance.form.get('hero.cards.0.imageSrc')!.value).toBe('/content/entity-images/saved.webp');
    expect(fixture.componentInstance.form.get('company.title')).not.toBeNull();
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
