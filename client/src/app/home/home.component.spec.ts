import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BreakpointObserver } from '@angular/cdk/layout';
import { provideRouter, Router } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { CompanyService } from '../services/company.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { provideAppIcons } from '../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT, HomeContentResponse, HomePageContent } from './home-content.model';
import { HomeContentService } from './home-content.service';
import { HomeComponent } from './home.component';

describe('HomeComponent catalog loading', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: BreakpointObserver, useValue: { observe: () => of({ matches: false, breakpoints: {} }) } }],
    });
  });
  it('keeps successful groups when the appliance request fails', fakeAsync(() => {
    const bike: any = { id: 'bike-1', name: 'Xe điện', isUsed: true };
    const machine: any = { id: 'machine-1', name: 'Máy cày', isUsed: true };
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: ElectricBikeService, useValue: { getAll: () => of([bike]) } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([machine]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => throwError(() => new Error('offline')) } },
        { provide: HomeContentService, useValue: { get: () => of({ content: DEFAULT_HOME_PAGE_CONTENT, updatedAt: '' }) } },
      ],
    });
    const component = TestBed.runInInjectionContext(() => new HomeComponent());

    component.ngOnInit();
    tick();

    expect(component.electricBikes()).toEqual([bike]);
    expect(component.agriculturalMachines()).toEqual([machine]);
    expect(component.electricalAppliances()).toEqual([]);
  }));

  it('keeps warranty lookup, reset and product navigation behavior', fakeAsync(() => {
    const navigate = jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true));
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate } },
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: ElectricBikeService, useValue: { getAll: () => of([]) } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([]) } },
        { provide: HomeContentService, useValue: { get: () => of({ content: DEFAULT_HOME_PAGE_CONTENT, updatedAt: '' }) } },
      ],
    });
    const component = TestBed.runInInjectionContext(() => new HomeComponent());
    component.ngOnInit();
    tick();

    component.lookupWarranty();
    expect(component.warrantySearchSubmitted()).toBeTrue();
    expect(component.warrantyResult()?.status).toBe('notfound');

    component.resetWarranty();
    expect(component.warrantySearchSubmitted()).toBeFalse();
    expect(component.warrantyResult()).toBeNull();

    component.warrantyLookupKind.set('appliance');
    component.warrantyLookupProductId.set('appliance-1');
    component.lookupProductById();
    expect(navigate).toHaveBeenCalledWith(['/product-detail', 'appliance', 'appliance-1']);
  }));

  it('starts on Home with images and support sections, without product lists', async () => {
    const bike: any = { id: 'bike-1', name: 'Xe điện', isUsed: true };
    const machine: any = { id: 'machine-1', name: 'Máy cày', isUsed: true };
    const appliance: any = { id: 'appliance-1', name: 'Máy bơm', isUsed: true };
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        provideAppIcons(),
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: ElectricBikeService, useValue: { getAll: () => of([bike]) } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([machine]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([appliance]) } },
        { provide: HomeContentService, useValue: { get: () => of({ content: DEFAULT_HOME_PAGE_CONTENT, updatedAt: '' }) } },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelector('[data-home-canvas]')).not.toBeNull();
    expect(element.querySelectorAll('[role="tab"]').length).toBe(5);
    expect(element.querySelector('[role="tab"][aria-selected="true"]')?.textContent).toContain('Trang chủ');
    expect(element.querySelectorAll('app-home-industry').length).toBe(0);
    expect(element.querySelectorAll('[data-industry-card] img').length).toBe(3);
    expect(element.querySelector('app-product-card')).toBeNull();
    expect(element.querySelector('app-home-recruitment')).toBeNull();
    expect(element.querySelector('[data-warranty-bridge]')).not.toBeNull();
    expect(element.querySelector('[data-trust-finale]')).not.toBeNull();
    expect(element.querySelector('[data-home-cta]')).not.toBeNull();
    expect(element.querySelector('app-image-product-showcase')).toBeNull();
    expect(element.querySelector('[data-product-list]')).toBeNull();
  });

  it('renders content returned by the Home content API', async () => {
    const content = cloneDefault();
    content.hero.title = 'Nội dung Home từ API';
    await configureFixture(of({ content, updatedAt: '2026-09-29T00:00:00Z' }));

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Nội dung Home từ API');
  });

  it('keeps compiled defaults when the content request fails or has an unsupported version', fakeAsync(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: ElectricBikeService, useValue: { getAll: () => of([]) } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([]) } },
        { provide: HomeContentService, useValue: { get: () => throwError(() => new Error('offline')) } },
      ],
    });
    const failed = TestBed.runInInjectionContext(() => new HomeComponent());
    failed.ngOnInit();
    tick();
    expect(failed.homeContent()).toEqual(DEFAULT_HOME_PAGE_CONTENT);

    TestBed.resetTestingModule();
    const unsupported = cloneDefault();
    unsupported.version = 2;
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: ElectricBikeService, useValue: { getAll: () => of([]) } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([]) } },
        { provide: HomeContentService, useValue: { get: () => of({ content: unsupported, updatedAt: '' }) } },
      ],
    });
    const newer = TestBed.runInInjectionContext(() => new HomeComponent());
    newer.ngOnInit();
    tick();
    expect(newer.homeContent()).toEqual(DEFAULT_HOME_PAGE_CONTENT);
  }));

  it('keeps compiled defaults when version-one content has an invalid fixed structure', fakeAsync(() => {
    TestBed.resetTestingModule();
    const invalid = cloneDefault();
    invalid.industries = [];
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: ElectricBikeService, useValue: { getAll: () => of([]) } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([]) } },
        { provide: HomeContentService, useValue: { get: () => of({ content: invalid, updatedAt: '' }) } },
      ],
    });
    const component = TestBed.runInInjectionContext(() => new HomeComponent());

    component.ngOnInit();
    tick();

    expect(component.homeContent()).toEqual(DEFAULT_HOME_PAGE_CONTENT);
  }));
});

function cloneDefault(): HomePageContent {
  return JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
}

describe('HomeComponent content tabs', () => {
  const viewport = new BehaviorSubject({ matches: true, breakpoints: {} });

  beforeEach(async () => {
    viewport.next({ matches: true, breakpoints: {} });
    TestBed.configureTestingModule({
      providers: [{ provide: BreakpointObserver, useValue: { observe: () => viewport } }],
    });
    await configureFixture(of({ content: cloneDefault(), updatedAt: '' }));
  });

  it('switches between each product group and recruitment without navigating away', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const tabs = element.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    expect(tabs.length).toBe(5);
    expect(element.querySelector('app-home-industry')).toBeNull();
    expect(element.querySelector('app-home-hero')).not.toBeNull();

    for (const [index, anchor] of [[1, 'bikes'], [2, 'agriculture'], [3, 'appliances'], [4, 'recruitment']] as const) {
      tabs[index]?.click();
      fixture.detectChanges();
      expect(element.querySelector('[role="tabpanel"] #' + anchor)).not.toBeNull();
      expect(element.querySelectorAll('[role="tab"][aria-selected="true"]').length).toBe(1);
      expect(tabs[index]?.getAttribute('aria-selected')).toBe('true');
      expect(element.querySelector('app-home-hero')).toBeNull();
      expect(element.querySelector('app-home-warranty')).toBeNull();
      expect(element.querySelector('app-home-cta')).toBeNull();
      expect(element.querySelector('app-home-commitments')).toBeNull();
    }
    expect(element.querySelectorAll('app-home-industry').length).toBe(0);
    expect(element.querySelectorAll('app-home-recruitment').length).toBe(1);
    tabs[0].click();
    fixture.detectChanges();
    expect(element.querySelector('app-home-recruitment')).toBeNull();
    expect(element.querySelector('app-home-warranty')).not.toBeNull();
    expect(element.querySelector('app-home-cta')).not.toBeNull();
  });

  it('opens the corresponding mobile tab from an image card', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    element.querySelectorAll<HTMLButtonElement>('[data-industry-card]')[2].click();
    fixture.detectChanges();
    expect(element.querySelector('[role="tabpanel"] #appliances')).not.toBeNull();
  });

  it('keeps the selected tab and its exclusive content when resizing to desktop', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement as HTMLElement;
    const first = element.querySelector<HTMLButtonElement>('[role="tab"]')!;
    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }));
    fixture.detectChanges();
    expect(element.querySelector('[role="tabpanel"] #recruitment')).not.toBeNull();

    viewport.next({ matches: false, breakpoints: {} });
    fixture.detectChanges();
    expect(element.querySelectorAll('[role="tab"]').length).toBe(5);
    expect(element.querySelectorAll('app-home-industry').length).toBe(0);
    expect(element.querySelectorAll('app-home-recruitment').length).toBe(1);
    expect(element.querySelector('app-home-warranty')).toBeNull();
    expect(element.querySelector('app-home-cta')).toBeNull();
    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }));
    fixture.detectChanges();
    expect(element.querySelector('app-home-hero')).not.toBeNull();
  });

  it('shows only the selected category products on both mobile and desktop', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const product = {
      isUsed: true, price: 1000000, stockQuantity: 1, brandName: 'EcoTech',
      model: 'A1', categoryName: '', typeName: '', description: '',
      pictureUrl: 'assets/images/img-ph.jpg', companyName: 'EcoTech', colors: [],
    };
    fixture.componentInstance.electricBikes.set([{ ...product, id: 'bike-1', name: 'Xe đi học' } as any]);
    fixture.componentInstance.agriculturalMachines.set([{ ...product, id: 'machine-1', name: 'Máy mùa vụ' } as any]);
    fixture.componentInstance.electricalAppliances.set([{ ...product, id: 'appliance-1', name: 'Bơm gia đình' } as any]);
    const element = fixture.nativeElement as HTMLElement;

    for (const mobile of [true, false]) {
      viewport.next({ matches: mobile, breakpoints: {} });
      fixture.detectChanges();
      const tabs = element.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      for (const [index, name] of [[1, 'Xe đi học'], [2, 'Máy mùa vụ'], [3, 'Bơm gia đình']] as const) {
        tabs[index]?.click();
        fixture.detectChanges();
        const products = element.querySelectorAll('app-product-card');
        expect(products.length).toBe(1);
        expect(products[0]?.textContent).toContain(name);
        expect(element.querySelector('app-home-warranty')).toBeNull();
        expect(element.querySelector('app-home-cta')).toBeNull();
      }
      tabs[0]?.click();
      fixture.detectChanges();
      expect(element.querySelector('app-product-card')).toBeNull();
    }
  });
});

async function configureFixture(homeResponse: Observable<HomeContentResponse>): Promise<void> {
  await TestBed.configureTestingModule({
    imports: [HomeComponent],
    providers: [
      provideRouter([]),
      provideNoopAnimations(),
      provideAppIcons(),
      { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
      { provide: ElectricBikeService, useValue: { getAll: () => of([]) } },
      { provide: AgriculturalMachineService, useValue: { getAll: () => of([]) } },
      { provide: ElectricalApplianceService, useValue: { getAll: () => of([]) } },
      { provide: HomeContentService, useValue: { get: () => homeResponse } },
    ],
  }).compileComponents();
}
