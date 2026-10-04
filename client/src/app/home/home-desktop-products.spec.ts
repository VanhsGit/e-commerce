import { TestBed } from '@angular/core/testing';
import { BreakpointObserver } from '@angular/cdk/layout';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { provideAppIcons } from '../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT } from './home-content.model';
import { HomeContentService } from './home-content.service';
import { HomeComponent } from './home.component';

function product(id: string, name: string, isUsed = true): any {
  return {
    id, name, isUsed, brand: 'EcoTech', brandName: 'EcoTech', brandId: 'brand-1',
    model: 'A1', category: 1, type: 1, categoryName: 'Danh mục', typeName: 'Thiết bị',
    categoryId: null, categoryPath: null, categorySlug: null, description: '',
    price: 1_000_000, stockQuantity: 2, pictureUrl: 'assets/images/img-ph.jpg',
    companyId: 'company-1', companyName: 'EcoTech', colors: [], metadata: {},
    voltage: '48V', power: '500W', batteryCapacity: null, engineType: null,
    fuelType: null, capacity: null, compatibility: null,
    createdAt: new Date('2026-10-02'), updatedAt: new Date('2026-10-02'),
  };
}

describe('Home desktop product sections', () => {
  it('shows all three industry headings and their products directly on Home as on October 2', async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideRouter([]), provideNoopAnimations(), provideAppIcons(),
        { provide: BreakpointObserver, useValue: { observe: () => of({ matches: false, breakpoints: {} }) } },
        { provide: HomeContentService, useValue: { get: () => of({ content: DEFAULT_HOME_PAGE_CONTENT, updatedAt: '' }) } },
        { provide: ElectricBikeService, useValue: { getAll: () => of([
          product('hidden', 'Xe đã ẩn', false),
          ...Array.from({ length: 9 }, (_, i) => product('bike-' + i, 'Xe điện ' + i)),
        ]) } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([product('machine-1', 'Máy mùa vụ')]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([product('appliance-1', 'Bơm gia đình')]) } },
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    for (const [anchor, title, count, name, path] of [
      ['bikes', 'Xe điện', 8, 'Xe điện 0', '/xe-dien'],
      ['agriculture', 'Máy nông nghiệp', 1, 'Máy mùa vụ', '/may-nong-nghiep'],
      ['appliances', 'Điện gia dụng', 1, 'Bơm gia đình', '/do-dien'],
    ] as const) {
      const section = root.querySelector('#' + anchor)!;
      expect(section.querySelector('h2')?.textContent).withContext(anchor).toContain(title);
      expect(section.querySelectorAll('app-product-card').length).withContext(anchor).toBe(count);
      expect(section.textContent).withContext(anchor).toContain(name);
      expect(section.querySelector('[data-industry-link]')?.getAttribute('href')).withContext(anchor).toBe(path);
    }
    expect(root.textContent).not.toContain('Xe đã ẩn');
    expect(root.querySelectorAll('[role="tab"]').length).toBe(0);
    expect(root.querySelectorAll('app-home-hero [data-industry-card]').length).toBe(3);
  });
});
