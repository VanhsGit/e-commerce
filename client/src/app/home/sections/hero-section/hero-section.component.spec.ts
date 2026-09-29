import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home-content.model';
import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  it('renders the connected collage with editable image URLs', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const content = JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT.hero));
    content.cards[0].imageSrc = 'https://cdn.example.com/bike-hero.jpg';
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', content);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('[data-hero-collage]')).not.toBeNull();
    expect(
      element.querySelector<HTMLImageElement>('[data-industry-card] img')?.src,
    ).toBe('https://cdn.example.com/bike-hero.jpg');
  });

  it('presents all three industries as image-led cards', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', DEFAULT_HOME_PAGE_CONTENT.hero);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const cards = element.querySelectorAll('[data-industry-card]');

    expect(cards.length).toBe(3);
    expect(element.textContent).toContain('Xe điện');
    expect(element.textContent).toContain('Máy nông nghiệp');
    expect(element.textContent).toContain('Điện gia dụng');
  });

  it('keeps hero and card headings readable on dark imagery', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', DEFAULT_HOME_PAGE_CONTENT.hero);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('h1')?.classList.contains('text-white')).toBeTrue();
    for (const heading of Array.from(element.querySelectorAll('[data-industry-card] h2'))) {
      expect(heading.classList.contains('text-white')).toBeTrue();
    }
  });

  it('shows supporting copy and a call to action on every industry card', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', DEFAULT_HOME_PAGE_CONTENT.hero);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('[data-industry-description]').length).toBe(3);
    expect(element.querySelectorAll('[data-industry-link]').length).toBe(3);
  });

  it('allows both hero columns and metrics to shrink inside a mobile viewport', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', DEFAULT_HOME_PAGE_CONTENT.hero);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('[data-hero-copy]')?.classList.contains('min-w-0')).toBeTrue();
    expect(element.querySelector('[data-hero-media]')?.classList.contains('min-w-0')).toBeTrue();
    for (const metric of Array.from(element.querySelectorAll('[data-hero-metric]'))) {
      expect(metric.classList.contains('min-w-0')).toBeTrue();
    }
  });

  it('keeps long editable headings inside the copy column', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const content = JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT.hero));
    content.title = 'Một tiêu đề rất dài cần xuống dòng an toàn trong mọi kích thước màn hình';
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('content', content);
    fixture.detectChanges();

    const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(heading?.classList.contains('break-words')).toBeTrue();
  });
});
