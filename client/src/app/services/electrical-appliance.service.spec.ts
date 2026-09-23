import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  ElectricalApplianceType,
  UpdateElectricalApplianceProduct,
} from '../shared/models/electrical-appliance-product';
import { ElectricalApplianceService } from './electrical-appliance.service';

describe('ElectricalApplianceService', () => {
  let service: ElectricalApplianceService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ElectricalApplianceService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('sends type and active filters', () => {
    service.getAll({ type: ElectricalApplianceType.WaterPump, isUsed: true }).subscribe();

    const request = http.expectOne((value) => value.url === '/api/electricalApplianceProducts');
    expect(request.request.params.get('type')).toBe('5');
    expect(request.request.params.get('isUsed')).toBe('true');
    request.flush([]);
  });

  it('sends the explicit update DTO to the id URL', () => {
    const dto: UpdateElectricalApplianceProduct = {
      id: 'ea-1',
      name: 'Máy bơm',
      brand: 'Điện Cơ Việt',
      model: 'MB-125',
      type: ElectricalApplianceType.WaterPump,
      description: 'Máy bơm dân dụng',
      price: 2500000,
      stockQuantity: 10,
      pictureUrl: '/images/pump.jpg',
      power: '125W',
      voltage: '220V',
      capacity: null,
      compatibility: null,
      companyId: 'company-1',
      brandId: 'brand-1',
      metadata: {},
      isUsed: true,
    };

    service.update(dto.id, dto).subscribe();

    const request = http.expectOne('/api/electricalApplianceProducts/ea-1');
    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(dto);
    request.flush({});
  });
});
