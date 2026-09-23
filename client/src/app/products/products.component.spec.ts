import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { BrandService } from '../services/brand.service';
import { CompanyService } from '../services/company.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { ElectricalApplianceType } from '../shared/models/electrical-appliance-product';
import { ProductsComponent } from './products.component';

describe('ProductsComponent appliance catalog', () => {
  it('includes active appliances and excludes inactive appliances', () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: { queryParamMap: of(convertToParamMap({})) } },
        { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
        { provide: ElectricBikeService, useValue: {} },
        { provide: AgriculturalMachineService, useValue: {} },
        { provide: ElectricalApplianceService, useValue: {} },
        { provide: BrandService, useValue: {} },
        { provide: CompanyService, useValue: {} },
      ],
    });
    const component = TestBed.runInInjectionContext(() => new ProductsComponent());
    const base: any = {
      name: 'Máy bơm', brand: 'A', brandName: 'A', model: 'MB',
      type: ElectricalApplianceType.WaterPump, typeName: 'Máy Bơm', description: '',
      price: 1, stockQuantity: 1, pictureUrl: '', power: null, voltage: null,
      capacity: null, compatibility: null, companyId: 'c', companyName: 'C',
      brandId: 'b', createdAt: new Date(), updatedAt: new Date(), metadata: {},
    };
    component.appliances.set([
      { ...base, id: 'ea-1', isUsed: true },
      { ...base, id: 'hidden', isUsed: false },
    ]);

    expect(component.allProducts().filter((p) => p.kind === 'appliance').map((p) => p.id))
      .toEqual(['ea-1']);
  });
});
