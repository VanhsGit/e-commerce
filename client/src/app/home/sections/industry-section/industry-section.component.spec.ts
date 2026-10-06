import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { of } from 'rxjs';
import { ElectricBikeService } from '../../../services/electric-bike.service';
import { AgriculturalMachineService } from '../../../services/agricultural-machine.service';
import { ElectricalApplianceService } from '../../../services/electrical-appliance.service';
import { CategoryPageContentService } from '../../../services/category-page-content.service';
import { ProductCategoryService } from '../../../services/product-category.service';
import { DEFAULT_CATEGORY_PAGE_CONTENT } from '../../../shared/models/category-page-content';
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
    imageUrl: '',
    companyName: 'Company',
  };
}

describe('IndustrySectionComponent', () => {
  async function setup() {
    await TestBed.configureTestingModule({
      imports: [IndustrySectionComponent],
      providers: [
        provideRouter([]), provideNoopAnimations(), provideAppIcons(),
        { provide: ElectricBikeService, useValue: { getAll: () => of(Array.from({ length: 9 }, (_, i) => makeProduct(String(i)))) } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([{ ...makeProduct('m1'), name: 'Máy mùa vụ' }]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([]) } },
        { provide: CategoryPageContentService, useValue: { get: (kind: keyof typeof DEFAULT_CATEGORY_PAGE_CONTENT) => of({ content: DEFAULT_CATEGORY_PAGE_CONTENT[kind], updatedAt: '' }) } },
        { provide: ProductCategoryService, useValue: { getAll: () => of([]) } },
      ],
    }).compileComponents();
  }

  it('renders editable headings and the full catalog without an explore step or an eight-product limit', async () => {
    await setup();
    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', BIKE_INDUSTRY);
    fixture.componentRef.setInput('mobile', true);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h2')?.textContent).toContain(BIKE_INDUSTRY.title);
    expect(element.textContent).toContain(BIKE_INDUSTRY.slogan);
    expect(element.querySelector('[data-industry-link]')).toBeNull();
    expect(element.querySelector('input[type="search"]')).not.toBeNull();
    expect(element.querySelector('#catalog-filters')).not.toBeNull();
    expect(element.querySelectorAll('app-product-card').length).toBe(9);
  });

  it('loads the new industry when switching tabs on the same instance', async () => {
    await setup();
    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', BIKE_INDUSTRY);
    fixture.componentRef.setInput('mobile', true);
    fixture.detectChanges();
    fixture.componentRef.setInput('content', MACHINE_INDUSTRY);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('app-product-card').length).toBe(1);
    expect(element.querySelector('app-product-card')?.textContent).toContain('Máy mùa vụ');
  });

  it('shows a friendly empty state when there are no products', async () => {
    await setup();
    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', APPLIANCE_INDUSTRY);
    fixture.componentRef.setInput('mobile', true);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('app-product-card').length).toBe(0);
    expect(element.textContent).toContain(DEFAULT_CATEGORY_PAGE_CONTENT.appliance.catalog.emptyTitle);
    expect(element.querySelector('input[type="search"]')).not.toBeNull();
  });

  it('keeps the desktop preview and explore link when resizing from mobile', async () => {
    await setup();
    const fixture = TestBed.createComponent(IndustrySectionComponent);
    fixture.componentRef.setInput('content', BIKE_INDUSTRY);
    fixture.componentRef.setInput('mobile', true);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelectorAll('app-product-card').length).toBe(9);
    fixture.componentRef.setInput('mobile', false);
    fixture.detectChanges();
    expect(element.querySelectorAll('app-product-card').length).toBe(8);
    expect(element.querySelector('input[type="search"]')).toBeNull();
    expect(element.querySelector('app-category-landing')).toBeNull();
    expect(element.querySelector('[data-industry-link]')?.getAttribute('href')).toBe('/xe-dien');
    expect(element.querySelector('[data-industry-link]')?.textContent).toContain('Khám phá xe điện');
    fixture.componentRef.setInput('content', MACHINE_INDUSTRY);
    fixture.detectChanges();
    expect(element.querySelectorAll('app-product-card').length).toBe(1);
    expect(element.querySelector('app-product-card')?.textContent).toContain('Máy mùa vụ');
    expect(element.querySelector('[data-industry-link]')?.getAttribute('href')).toBe('/may-nong-nghiep');
  });
});
