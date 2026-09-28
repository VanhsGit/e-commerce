import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { BIKE_INDUSTRY } from './industry-content';
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
});
