import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { ElectricalApplianceType } from '../shared/models/electrical-appliance-product';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent appliance routes', () => {
  const params = new BehaviorSubject(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
  let applianceService: jasmine.SpyObj<ElectricalApplianceService>;
  let machineService: jasmine.SpyObj<AgriculturalMachineService>;

  beforeEach(() => {
    applianceService = jasmine.createSpyObj('ElectricalApplianceService', ['getById', 'getAll']);
    machineService = jasmine.createSpyObj('AgriculturalMachineService', ['getById', 'getAll']);
    const bikeService = jasmine.createSpyObj('ElectricBikeService', ['getById', 'getAll']);
    const appliance: any = {
      id: 'ea-1', name: 'Máy bơm', brand: 'A', brandName: 'A', model: 'MB',
      type: ElectricalApplianceType.WaterPump, typeName: 'Máy Bơm', description: '',
      price: 1, stockQuantity: 1, pictureUrl: '', power: null, voltage: null,
      capacity: null, compatibility: null, companyId: 'c', companyName: 'C',
      brandId: 'b', createdAt: new Date(), updatedAt: new Date(), metadata: {}, isUsed: true,
    };
    applianceService.getById.and.returnValue(of(appliance));
    applianceService.getAll.and.returnValue(of([appliance]));
    machineService.getAll.and.returnValue(of([]));
    bikeService.getAll.and.returnValue(of([]));
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: params, queryParamMap: of(convertToParamMap({})) } },
        { provide: Router, useValue: { navigate: () => Promise.resolve(true) } },
        { provide: ElectricBikeService, useValue: bikeService },
        { provide: AgriculturalMachineService, useValue: machineService },
        { provide: ElectricalApplianceService, useValue: applianceService },
      ],
    });
  });

  it('loads an appliance route with the appliance service', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(() => new ProductDetailComponent());
    component.ngOnInit();
    expect(applianceService.getById).toHaveBeenCalledWith('ea-1');
    expect(machineService.getById).not.toHaveBeenCalled();
  });

  it('marks an unsupported kind as not found without calling a product service', () => {
    params.next(convertToParamMap({ kind: 'unknown', id: '1' }));
    const component = TestBed.runInInjectionContext(() => new ProductDetailComponent());
    component.ngOnInit();
    expect(component.notFound()).toBeTrue();
    expect(applianceService.getById).not.toHaveBeenCalled();
    expect(machineService.getById).not.toHaveBeenCalled();
  });
});
