import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home-content.model';
import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();
  });

  it('renders editable desktop and mobile background URLs', () => {
    const content = { ...DEFAULT_HOME_PAGE_CONTENT.hero,
      desktopImageSrc: 'https://cdn.example.com/desktop.jpg',
      mobileImageSrc: 'https://cdn.example.com/mobile.jpg' };
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', content);
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector<HTMLImageElement>('.hero-backdrop')?.src).toBe('https://cdn.example.com/desktop.jpg');
    fixture.componentRef.setInput('mobile', true);
    fixture.detectChanges();
    expect(element.querySelector<HTMLImageElement>('.hero-backdrop')?.src).toBe('https://cdn.example.com/mobile.jpg');
  });

  it('shows editable support links on both desktop and mobile without duplicating the solution gallery', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', { ...DEFAULT_HOME_PAGE_CONTENT.hero,
      contactLabel: 'Liên hệ công ty', warrantyLabel: 'Kiểm tra bảo hành' });
    const element: HTMLElement = fixture.nativeElement;
    for (const mobile of [false, true]) {
      fixture.componentRef.setInput('mobile', mobile);
      fixture.detectChanges();
      expect(element.querySelector('.hero-contact')?.textContent).toContain('Liên hệ công ty');
      expect(element.querySelector('.hero-warranty')?.textContent).toContain('Kiểm tra bảo hành');
      expect(element.querySelector('[data-hero-media]')).toBeNull();
    }
  });

  it('keeps the hero heading readable on dark imagery', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', DEFAULT_HOME_PAGE_CONTENT.hero);
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.classList.contains('text-white')).toBeTrue();
  });

  it('lets long editable headings wrap and metrics shrink', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', { ...DEFAULT_HOME_PAGE_CONTENT.hero,
      title: 'Một tiêu đề rất dài cần xuống dòng an toàn trong mọi kích thước màn hình' });
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h1')?.classList.contains('break-words')).toBeTrue();
    expect(element.querySelector('[data-hero-copy]')?.classList.contains('min-w-0')).toBeTrue();
    for (const metric of Array.from(element.querySelectorAll('[data-hero-metric]'))) {
      expect(metric.classList.contains('min-w-0')).toBeTrue();
    }
  });
});
