import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { BrandService } from '../../services/brand.service';
import { CompanyService } from '../../services/company.service';
import { ElectricalApplianceService } from '../../services/electrical-appliance.service';
import { ElectricalApplianceType } from '../../shared/models/electrical-appliance-product';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { ElectricalApplianceAdminPageComponent } from './electrical-appliance-admin-page.component';

describe('ElectricalApplianceAdminPageComponent', () => {
  function createComponent(): ElectricalApplianceAdminPageComponent {
    TestBed.configureTestingModule({
      providers: [
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([]) } },
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: BrandService, useValue: { getBrands: () => of([]) } },
        { provide: NotifyService, useValue: { success: () => {}, error: () => {} } },
        { provide: ConfirmService, useValue: { delete: () => of(false) } },
        { provide: MatDialog, useValue: { open: () => ({ afterClosed: () => of(null) }) } },
      ],
    });
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
});
