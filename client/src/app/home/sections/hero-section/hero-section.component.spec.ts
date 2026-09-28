import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  it('presents all three industries as image-led cards', async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(HeroSectionComponent);
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
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('[data-hero-copy]')?.classList.contains('min-w-0')).toBeTrue();
    expect(element.querySelector('[data-hero-media]')?.classList.contains('min-w-0')).toBeTrue();
    for (const metric of Array.from(element.querySelectorAll('[data-hero-metric]'))) {
      expect(metric.classList.contains('min-w-0')).toBeTrue();
    }
  });
});
