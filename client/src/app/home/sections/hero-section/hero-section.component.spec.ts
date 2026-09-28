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
});
