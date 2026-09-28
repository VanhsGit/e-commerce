import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { BrandService } from '../../services/brand.service';
import { CompanyService } from '../../services/company.service';
import { ElectricalApplianceService } from '../../services/electrical-appliance.service';
import { ElectricalApplianceType } from '../../shared/models/electrical-appliance-product';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { ElectricalApplianceAdminPageComponent } from './electrical-appliance-admin-page.component';

describe('ElectricalApplianceAdminPageComponent', () => {
  const product = {
    id: 'appliance-1', name: 'Máy bơm mẫu', brand: 'Hãng', brandName: 'Hãng', model: 'M1',
    type: ElectricalApplianceType.WaterPump, typeName: 'Máy Bơm', description: 'Mô tả',
    price: 1000, stockQuantity: 5, pictureUrl: 'data:image/gif;base64,R0lGODlhAQABAAAAACw=',
    power: '500W', voltage: '220V',
    capacity: null, compatibility: null, companyId: 'company-1', companyName: 'Công ty',
    brandId: 'brand-1', createdAt: new Date('2026-01-01'), updatedAt: new Date('2026-01-01'),
    metadata: {}, isUsed: true,
  };

  function configure(serviceRows: unknown[] = []): void {
    TestBed.configureTestingModule({
      imports: [ElectricalApplianceAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        { provide: ElectricalApplianceService, useValue: { getAll: () => of(serviceRows) } },
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: BrandService, useValue: { getBrands: () => of([]) } },
        { provide: NotifyService, useValue: { success: () => {}, error: () => {} } },
        { provide: ConfirmService, useValue: { delete: () => of(false) } },
        { provide: MatDialog, useValue: { open: () => ({ afterClosed: () => of(null) }) } },
      ],
    });
  }

  function createComponent(): ElectricalApplianceAdminPageComponent {
    configure();
    return TestBed.runInInjectionContext(() => new ElectricalApplianceAdminPageComponent());
  }

  it('applies trimmed search, type, and active status filters', () => {
    const component = createComponent();
    component.searchDraft.set('  máy bơm  ');
    component.typeDraft.set(ElectricalApplianceType.WaterPump);
    component.statusDraft.set('active');
    spyOn(component, 'loadAll');

    component.applyFilters();

    expect(component.loadAll).toHaveBeenCalledWith({
      search: 'máy bơm',
      companyId: null,
      brandId: null,
      type: ElectricalApplianceType.WaterPump,
      isUsed: true,
    });
  });

  it('uses the shared page gutter and three consistent row actions', () => {
    configure([product]);
    spyOn(TestBed.inject(MatIconRegistry), 'getNamedSvgIcon').and.callFake(() =>
      of(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
    );
    const fixture = TestBed.createComponent(ElectricalApplianceAdminPageComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const row = root.querySelector('tbody tr.ant-table-row');

    expect(root.querySelector('.admin-page-content')).not.toBeNull();
    expect(row?.querySelectorAll('.admin-action-btn').length).toBe(3);
  });

  it('keeps the empty state when the product list is empty', () => {
    configure();
    spyOn(TestBed.inject(MatIconRegistry), 'getNamedSvgIcon').and.callFake(() =>
      of(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
    );
    const fixture = TestBed.createComponent(ElectricalApplianceAdminPageComponent);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('app-admin-empty-state')).not.toBeNull();
  });
});
