import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import {
  APPLIANCE_INDUSTRY,
  BIKE_INDUSTRY,
  MACHINE_INDUSTRY,
} from './industry-content';
import { IndustrySectionComponent } from './industry-section.component';

describe('IndustrySectionComponent', () => {
  it('renders category context, four benefits and the service promise', async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', BIKE_INDUSTRY);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('[data-category-chip]').length).toBeGreaterThanOrEqual(3);
    expect(element.querySelectorAll('[data-industry-highlight]').length).toBe(4);
    expect(element.querySelector('[data-industry-service]')).not.toBeNull();
  });

  it('renders one main image and every configured secondary image', async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', APPLIANCE_INDUSTRY);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('[data-gallery-main]').length).toBe(1);
    expect(element.querySelectorAll('[data-gallery-secondary]').length).toBe(4);
  });

  it('renders every industry as a distinct freestyle scene with one fluid image rail', async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const cases = [
      { content: BIKE_INDUSTRY, layout: 'kinetic', secondaryImages: 2 },
      { content: MACHINE_INDUSTRY, layout: 'field', secondaryImages: 3 },
      { content: APPLIANCE_INDUSTRY, layout: 'constellation', secondaryImages: 4 },
    ];

    for (const testCase of cases) {
      const fixture = TestBed.createComponent(IndustrySectionComponent);
      fixture.componentRef.setInput('content', testCase.content);
      fixture.detectChanges();

      const element = fixture.nativeElement as HTMLElement;
      const scene = element.querySelector(
        `[data-freestyle-scene="${testCase.layout}"]`,
      );
      expect(scene).withContext(testCase.layout).not.toBeNull();
      expect(scene?.querySelectorAll('[data-gallery-main]').length).toBe(1);
      expect(scene?.querySelectorAll('[data-gallery-secondary]').length).toBe(
        testCase.secondaryImages,
      );
      expect(scene?.querySelector('[data-secondary-rail]')).not.toBeNull();
    }
  });
});
