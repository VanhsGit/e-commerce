import { TestBed } from '@angular/core/testing';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home-content.model';
import { SolutionsSectionComponent } from './solutions-section.component';

describe('SolutionsSectionComponent', () => {
  it('renders all configured images without text overlays in a scrollable gallery', async () => {
    await TestBed.configureTestingModule({ imports: [SolutionsSectionComponent], providers: [provideAppIcons()] }).compileComponents();
    const fixture = TestBed.createComponent(SolutionsSectionComponent);
    fixture.componentRef.setInput('content', {
      ...DEFAULT_HOME_PAGE_CONTENT.solutions,
      images: Array.from({ length: 7 }, (_, index) => ({ imageSrc: 'assets/images/home/electric-mobility.webp', imageAlt: `Ảnh ${index}`, kind: 'bike' })),
    });
    const element: HTMLElement = fixture.nativeElement;
    for (const mobile of [false, true]) {
      element.style.width = mobile ? '360px' : '1200px';
      fixture.componentRef.setInput('mobile', mobile);
      fixture.detectChanges();
      const images = element.querySelectorAll('[data-industry-card]');
      expect(images.length).toBe(7);
      images.forEach((image) => {
        expect(image.textContent?.trim()).toBe('');
        expect(image.querySelector('img')?.getAttribute('alt')).toBeTruthy();
      });
      expect(element.querySelector('[role="region"]')?.getAttribute('tabindex')).toBe('0');
      expect(element.querySelectorAll('.solutions-controls button').length).toBe(2);
      const gallery = element.querySelector<HTMLElement>('.solutions-gallery')!;
      expect(gallery.clientWidth).toBeGreaterThan(0);
      expect(gallery.scrollWidth).toBeGreaterThan(gallery.clientWidth);
      expect((images[0] as HTMLElement).clientHeight).toBeGreaterThan(0);
      expect(element.scrollWidth).toBeLessThanOrEqual(element.clientWidth);
    }
  });
});
