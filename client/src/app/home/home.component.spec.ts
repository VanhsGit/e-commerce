import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { CompanyService } from '../services/company.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
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
      ],
    });
    const component = TestBed.runInInjectionContext(() => new HomeComponent());

    component.ngOnInit();
    tick();

    expect(component.featuredBikes().length).toBe(1);
    expect(component.featuredMachines().length).toBe(1);
    expect(component.featuredAppliances()).toEqual([]);
  }));
});
