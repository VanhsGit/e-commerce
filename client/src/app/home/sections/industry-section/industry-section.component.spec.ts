import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { ProductCardItem } from '../../../shared/components/product-card/product-card-item.model';
import {
  APPLIANCE_INDUSTRY,
  BIKE_INDUSTRY,
  MACHINE_INDUSTRY,
} from './industry-content';
import { IndustrySectionComponent } from './industry-section.component';

function makeProduct(id: string): ProductCardItem {
  return {
    kind: 'bike',
    id,
    name: `Xe ${id}`,
    brandName: 'Brand',
    model: 'M1',
    categoryName: 'Xe máy điện',
    description: '',
    price: 1000000,
    stockQuantity: 5,
    pictureUrl: '',
    companyName: 'Company',
  };
}

describe('IndustrySectionComponent', () => {
  async function setup() {
    await TestBed.configureTestingModule({
      imports: [IndustrySectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();
  }

  it('renders the editable title, slogan and a view-all link', async () => {
    await setup();
    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', BIKE_INDUSTRY);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h2')?.textContent).toContain(BIKE_INDUSTRY.title);
    expect(element.textContent).toContain(BIKE_INDUSTRY.slogan);
    expect(element.querySelector('[data-industry-link]')?.textContent).toContain(
      BIKE_INDUSTRY.ctaLabel,
    );
  });

  it('renders one product card per product and no empty state', async () => {
    await setup();
    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', MACHINE_INDUSTRY);
    fixture.componentRef.setInput('products', [makeProduct('1'), makeProduct('2'), makeProduct('3')]);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('app-product-card').length).toBe(3);
    expect(element.textContent).not.toContain('đang được cập nhật');
  });

  it('shows a friendly empty state when there are no products', async () => {
    await setup();
    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', APPLIANCE_INDUSTRY);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('app-product-card').length).toBe(0);
    expect(element.textContent).toContain('đang được cập nhật');
  });
});
