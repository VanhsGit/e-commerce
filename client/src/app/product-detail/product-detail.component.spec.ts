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
      price: 1, stockQuantity: 1, pictureUrl: 'https://cdn.example.com/may-bom.jpg', power: null, voltage: null,
      capacity: null, compatibility: null, companyId: 'c', companyName: 'C',
      brandId: 'b', createdAt: new Date(), updatedAt: new Date(), metadata: {}, isUsed: true,
      categoryId: 'cat-1', categoryPath: 'Máy Bơm / Bơm nước', categorySlug: 'may-bom',
      colors: [
        { name: 'Đỏ', hexCode: '#b91c1c', imageUrl: 'https://cdn.example.com/do.jpg', imageUrls: ['https://cdn.example.com/do.jpg', 'https://cdn.example.com/do-sau.jpg'] },
        { name: 'Xanh', hexCode: '#1d4ed8', imageUrl: 'https://cdn.example.com/xanh.jpg', imageUrls: ['https://cdn.example.com/xanh.jpg', 'https://cdn.example.com/xanh-sau.jpg'] },
        { name: 'Vàng', hexCode: '#ca8a04', imageUrl: '' },
      ],
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

  it('builds the gallery only from the colour images, ignoring pictureUrl', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(() => new ProductDetailComponent());
    component.ngOnInit();

    expect(component.product()?.gallery).toEqual([
      'https://cdn.example.com/do.jpg',
      'https://cdn.example.com/do-sau.jpg',
      'https://cdn.example.com/xanh.jpg',
      'https://cdn.example.com/xanh-sau.jpg',
    ]);
  });

  it('omits unavailable and inferred specifications from the product facts', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(() => new ProductDetailComponent());
    component.ngOnInit();

    const specs = component.product()?.specs ?? [];
    expect(specs.some((spec) => spec.value === '—')).toBeFalse();
    expect(specs.some((spec) => spec.label === 'Thời gian bảo hành')).toBeFalse();
    expect(specs.some((spec) => spec.label === 'Công suất')).toBeFalse();
    expect(component.product()?.highlights).toEqual([]);
  });

  it('builds the breadcrumb from the kind route and the category slug', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(() => new ProductDetailComponent());
    component.ngOnInit();

    expect(component.breadcrumb()).toEqual({
      root: 'Trang chủ',
      collection: 'Đồ điện',
      route: '/do-dien',
      category: 'Máy Bơm / Bơm nước',
      categorySlug: 'may-bom',
    });
  });

  it('swaps the main image when a colour with an image is selected', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(() => new ProductDetailComponent());
    component.ngOnInit();
    const [red, blue, yellow] = component.product()!.colors;

    expect(component.activeImage()).toBe('https://cdn.example.com/do.jpg');
    component.selectColor(blue);
    expect(component.selectedColor()).toBe(blue);
    expect(component.activeImage()).toBe('https://cdn.example.com/xanh.jpg');

    // Màu chưa có ảnh không hiển thị nhầm ảnh của màu trước.
    component.selectColor(yellow);
    expect(component.selectedColor()).toBe(yellow);
    expect(component.activeImage()).toBe('');
    expect(component.gallery()).toEqual([]);

    component.selectColor(red);
    expect(component.activeImage()).toBe('https://cdn.example.com/do.jpg');
  });

  it('shows only the selected colour thumbnails and resets the active image when switching colour', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(() => new ProductDetailComponent());
    component.ngOnInit();
    const [red, blue] = component.product()!.colors;
    component.selectColor(blue);
    expect(component.gallery()).toEqual(blue.imageUrls!);
    component.selectImage(blue.imageUrls![1]);
    expect(component.activeImage()).toBe('https://cdn.example.com/xanh-sau.jpg');
    component.selectColor(red);
    expect(component.gallery()).toEqual(red.imageUrls!);
    expect(component.activeImage()).toBe('https://cdn.example.com/do.jpg');
    component.selectImage(red.imageUrls![1]);
    component.selectColor(red);
    expect(component.activeImage()).toBe('https://cdn.example.com/do-sau.jpg');
    expect(component.selectedColor()).toBe(red);
  });
});
