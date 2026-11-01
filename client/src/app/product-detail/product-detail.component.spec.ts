import { TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { ElectricalApplianceType } from '../shared/models/electrical-appliance-product';
import { SiteSettingsService } from '../services/site-settings.service';
import {
  DEFAULT_SITE_SETTINGS,
  SiteSettings,
} from '../shared/models/site-settings';
import { PageMetadataService } from '../shared/services/page-metadata.service';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent appliance routes', () => {
  const params = new BehaviorSubject(
    convertToParamMap({ kind: 'appliance', id: 'ea-1' }),
  );
  let applianceService: jasmine.SpyObj<ElectricalApplianceService>;
  let machineService: jasmine.SpyObj<AgriculturalMachineService>;
  let siteContent: BehaviorSubject<SiteSettings>;
  let pageMetadata: jasmine.SpyObj<PageMetadataService>;

  beforeEach(() => {
    siteContent = new BehaviorSubject(DEFAULT_SITE_SETTINGS);
    applianceService = jasmine.createSpyObj('ElectricalApplianceService', [
      'getById',
      'getAll',
    ]);
    machineService = jasmine.createSpyObj('AgriculturalMachineService', [
      'getById',
      'getAll',
    ]);
    pageMetadata = jasmine.createSpyObj('PageMetadataService', [
      'reset',
      'setProduct',
    ]);
    const bikeService = jasmine.createSpyObj('ElectricBikeService', [
      'getById',
      'getAll',
    ]);
    const appliance: any = {
      id: 'ea-1',
      name: 'Máy bơm',
      brand: 'A',
      brandName: 'A',
      model: 'MB',
      type: ElectricalApplianceType.WaterPump,
      typeName: 'Máy Bơm',
      description: '',
      price: 1,
      stockQuantity: 1,
      pictureUrl: 'https://cdn.example.com/may-bom.jpg',
      power: null,
      voltage: null,
      capacity: null,
      compatibility: null,
      companyId: 'c',
      companyName: 'C',
      brandId: 'b',
      createdAt: new Date(),
      updatedAt: new Date(),
      metadata: {},
      isUsed: true,
      categoryId: 'cat-1',
      categoryPath: 'Máy Bơm / Bơm nước',
      categorySlug: 'may-bom',
      colors: [
        {
          name: 'Đỏ',
          hexCode: '#b91c1c',
          imageUrl: 'https://cdn.example.com/do.jpg',
          imageUrls: [
            'https://cdn.example.com/do.jpg',
            'https://cdn.example.com/do-sau.jpg',
          ],
        },
        {
          name: 'Xanh',
          hexCode: '#1d4ed8',
          imageUrl: 'https://cdn.example.com/xanh.jpg',
          imageUrls: [
            'https://cdn.example.com/xanh.jpg',
            'https://cdn.example.com/xanh-sau.jpg',
          ],
        },
        { name: 'Vàng', hexCode: '#ca8a04', imageUrl: '' },
      ],
    };
    applianceService.getById.and.returnValue(of(appliance));
    applianceService.getAll.and.returnValue(of([appliance]));
    machineService.getAll.and.returnValue(of([]));
    bikeService.getAll.and.returnValue(of([]));
    TestBed.configureTestingModule({
      imports: [MatIconTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: params,
            queryParamMap: of(convertToParamMap({})),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: () => Promise.resolve(true),
            createUrlTree: () => ({}),
            serializeUrl: () => '',
            events: of(),
          },
        },
        { provide: ElectricBikeService, useValue: bikeService },
        { provide: AgriculturalMachineService, useValue: machineService },
        { provide: ElectricalApplianceService, useValue: applianceService },
        {
          provide: SiteSettingsService,
          useValue: { getContent: () => siteContent.asObservable() },
        },
        { provide: PageMetadataService, useValue: pageMetadata },
      ],
    });
  });

  it('uses the contact settings for the hotline and an independently configured Zalo account', () => {
    siteContent.next({
      ...DEFAULT_SITE_SETTINGS,
      contact: {
        ...DEFAULT_SITE_SETTINGS.contact,
        phone: '+84 (912) 345-678',
        phoneDisplay: '0912 345 678',
        zaloUrl: 'https://zalo.me/0987654321',
      },
    });
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );

    expect(component.hotline()).toBe('+84912345678');
    expect(component.site().contact.phoneDisplay).toBe('0912 345 678');
    expect(component.zaloUrl()).toBe('https://zalo.me/0987654321');
  });

  it('derives Zalo from the saved phone when no separate Zalo link is set, including settings loaded later', () => {
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    siteContent.next({
      ...DEFAULT_SITE_SETTINGS,
      contact: {
        ...DEFAULT_SITE_SETTINGS.contact,
        phone: '0901 234 567',
        zaloUrl: ' ',
      },
    });

    expect(component.hotline()).toBe('0901234567');
    expect(component.zaloUrl()).toBe('https://zalo.me/0901234567');
  });

  it('loads an appliance route with the appliance service', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();
    expect(applianceService.getById).toHaveBeenCalledWith('ea-1');
    expect(machineService.getById).not.toHaveBeenCalled();
  });

  it('updates share metadata from the loaded product', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();

    expect(pageMetadata.setProduct).toHaveBeenCalledWith({
      title: 'Máy bơm | EcoTech',
      description: 'Máy bơm - A MB chính hãng tại EcoTech.',
      url: '/product-detail/appliance/ea-1',
      imageUrl: 'https://cdn.example.com/do.jpg',
    });
  });

  it('marks an unsupported kind as not found without calling a product service', () => {
    params.next(convertToParamMap({ kind: 'unknown', id: '1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();
    expect(component.notFound()).toBeTrue();
    expect(applianceService.getById).not.toHaveBeenCalled();
    expect(machineService.getById).not.toHaveBeenCalled();
  });

  it('builds the gallery only from the colour images, ignoring pictureUrl', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
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
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();

    const specs = component.product()?.specs ?? [];
    expect(specs.some((spec) => spec.value === '—')).toBeFalse();
    expect(
      specs.some((spec) => spec.label === 'Thời gian bảo hành'),
    ).toBeFalse();
    expect(specs.some((spec) => spec.label === 'Công suất')).toBeFalse();
    expect(specs.some((spec) => spec.label === 'Tình trạng kho')).toBeFalse();
    expect(component.product()?.highlights).toEqual([]);
  });

  it('builds the breadcrumb from the kind route and the category slug', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
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
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
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
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();
    const [red, blue] = component.product()!.colors;
    component.selectColor(blue);
    expect(component.gallery()).toEqual(blue.imageUrls!);
    component.selectImage(blue.imageUrls![1]);
    expect(component.activeImage()).toBe(
      'https://cdn.example.com/xanh-sau.jpg',
    );
    component.selectColor(red);
    expect(component.gallery()).toEqual(red.imageUrls!);
    expect(component.activeImage()).toBe('https://cdn.example.com/do.jpg');
    component.selectImage(red.imageUrls![1]);
    component.selectColor(red);
    expect(component.activeImage()).toBe('https://cdn.example.com/do-sau.jpg');
    expect(component.selectedColor()).toBe(red);
  });

  it('opens the image viewer only when an active image is available', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();

    component.openImageViewer();
    expect(component.imageViewerOpen()).toBeTrue();

    component.closeImageViewer();
    expect(component.imageViewerOpen()).toBeFalse();

    const [, , colourWithoutImage] = component.product()!.colors;
    component.selectColor(colourWithoutImage);
    component.openImageViewer();
    expect(component.imageViewerOpen()).toBeFalse();
  });

  it('tracks a mouse-hovered image region in a centered zoom popup but ignores touch', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();
    const imageTrigger = document.createElement('button');
    const image = document.createElement('img');
    Object.defineProperty(image, 'naturalWidth', { value: 400 });
    Object.defineProperty(image, 'naturalHeight', { value: 300 });
    imageTrigger.append(image);
    spyOn(imageTrigger, 'getBoundingClientRect').and.returnValue({
      left: 100,
      top: 100,
      width: 400,
      height: 300,
    } as DOMRect);
    const pointerEvent = (pointerType: 'touch' | 'mouse') => {
      const event = new PointerEvent('pointermove', {
        pointerType,
        clientX: 250,
        clientY: 200,
      });
      Object.defineProperty(event, 'currentTarget', {
        value: imageTrigger,
      });
      return event;
    };

    component.updateImageHoverZoom(pointerEvent('touch'));
    expect(component.imageHoverZoom()).toBeNull();

    component.updateImageHoverZoom(pointerEvent('mouse'));
    const zoom = component.imageHoverZoom();
    expect(zoom).not.toBeNull();
    expect(zoom!.lensLeft).toBeGreaterThan(0);
    expect(zoom!.lensTop).toBeGreaterThan(0);
    expect(zoom!.popupLeft).toBeGreaterThan(500);
    expect(zoom!.imageLeft + (250 - 100) * (zoom!.popupSize / zoom!.lensSize))
      .toBeCloseTo(zoom!.popupSize / 2);

    component.endImageHoverZoom();
    expect(component.imageHoverZoom()).toBeNull();
  });

  it('opens a centered image popup when the main image is activated', () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const fixture = TestBed.createComponent(ProductDetailComponent);
    fixture.detectChanges();

    const imageTrigger = fixture.nativeElement.querySelector(
      '.main-image-trigger',
    ) as HTMLButtonElement | null;
    if (!imageTrigger) {
      fail('main product image trigger is rendered');
      return;
    }

    imageTrigger.click();
    fixture.detectChanges();

    expect(fixture.componentInstance.imageViewerOpen()).toBeTrue();
    expect(
      fixture.nativeElement.querySelector('[role="dialog"]'),
    ).not.toBeNull();
  });

  it('keeps keyboard focus in the image dialog and restores it to the image trigger', async () => {
    params.next(convertToParamMap({ kind: 'appliance', id: 'ea-1' }));
    const fixture = TestBed.createComponent(ProductDetailComponent);
    fixture.detectChanges();

    const imageTrigger = fixture.nativeElement.querySelector(
      '.main-image-trigger',
    ) as HTMLButtonElement;
    imageTrigger.click();
    fixture.detectChanges();
    await fixture.whenStable();

    const closeButton = fixture.nativeElement.querySelector(
      '.image-lightbox__close',
    ) as HTMLButtonElement;
    expect(document.activeElement).toBe(closeButton);

    closeButton.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Tab', bubbles: true }),
    );
    fixture.detectChanges();
    expect(document.activeElement).toBe(closeButton);

    closeButton.click();
    fixture.detectChanges();
    await fixture.whenStable();
    expect(document.activeElement).toBe(imageTrigger);
  });
});
