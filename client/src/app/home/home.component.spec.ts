import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { Observable, of, throwError } from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { CompanyService } from '../services/company.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { provideAppIcons } from '../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT, HomeContentResponse, HomePageContent } from './home-content.model';
import { HomeContentService } from './home-content.service';
import { HomeComponent } from './home.component';

describe('HomeComponent catalog loading', () => {
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

  it('renders three industry features without product showcase lists', async () => {
    TestBed.resetTestingModule();
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
        { provide: HomeContentService, useValue: { get: () => of({ content: DEFAULT_HOME_PAGE_CONTENT, updatedAt: '' }) } },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('app-home-industry').length).toBe(3);
    expect(element.querySelector('app-image-product-showcase')).toBeNull();
  });

  it('renders content returned by the Home content API', async () => {
    const content = cloneDefault();
    content.hero.title = 'Nội dung Home từ API';
    TestBed.resetTestingModule();
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
