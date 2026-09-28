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

  it('selects a different gallery composition for every industry', async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const cases = [
      { content: BIKE_INDUSTRY, layout: 'split' },
      { content: MACHINE_INDUSTRY, layout: 'panorama' },
      { content: APPLIANCE_INDUSTRY, layout: 'mosaic' },
    ];

    for (const testCase of cases) {
      const fixture = TestBed.createComponent(IndustrySectionComponent);
      fixture.componentRef.setInput('content', testCase.content);
      fixture.detectChanges();

      const gallery = (fixture.nativeElement as HTMLElement).querySelector(
        `[data-gallery-layout="${testCase.layout}"]`,
      );
      expect(gallery).withContext(testCase.layout).not.toBeNull();
    }
  });
});
