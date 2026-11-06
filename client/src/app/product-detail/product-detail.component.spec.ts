import { TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ProductCategoryService } from '../services/product-category.service';
import {
  AgriculturalMachineCategory,
  AgriculturalMachineProduct,
} from '../shared/models/agriculturalMachineProduct';
import {
  ElectricBikeCategory,
  ElectricBikeProduct,
} from '../shared/models/electricBikeProduct';
import { SiteSettingsService } from '../services/site-settings.service';
import {
  DEFAULT_SITE_SETTINGS,
  SiteSettings,
} from '../shared/models/site-settings';
import { PageMetadataService } from '../shared/services/page-metadata.service';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent machine routes', () => {
  const params = new BehaviorSubject(
    convertToParamMap({ kind: 'machine', id: 'machine-1' }),
  );
  let machineService: jasmine.SpyObj<AgriculturalMachineService>;
  let bikeService: jasmine.SpyObj<ElectricBikeService>;
  let siteContent: BehaviorSubject<SiteSettings>;
  let pageMetadata: jasmine.SpyObj<PageMetadataService>;

  beforeEach(() => {
    siteContent = new BehaviorSubject(DEFAULT_SITE_SETTINGS);
    machineService = jasmine.createSpyObj('AgriculturalMachineService', [
      'getById',
      'getAll',
    ]);
    pageMetadata = jasmine.createSpyObj('PageMetadataService', [
      'reset',
      'setProduct',
    ]);
    bikeService = jasmine.createSpyObj<ElectricBikeService>('ElectricBikeService', [
      'getById',
      'getAll',
    ]);
    const categoryService = jasmine.createSpyObj('ProductCategoryService', [
      'getById',
    ]);
    categoryService.getById.and.returnValue(of({ metadata: {} }));
    const machine: any = {
      id: 'machine-1',
      name: 'Máy cày',
      brand: 'A',
      brandName: 'A',
      model: 'MB',
      description: '',
      price: 1,
      stockQuantity: 1,
      pictureUrl: 'https://cdn.example.com/representative.jpg',
      power: null,
      voltage: null,
      engineType: null,
      fuelType: null,
      batteryCapacity: null,
      companyId: 'c',
      companyName: 'C',
      brandId: 'b',
      createdAt: new Date(),
      updatedAt: new Date(),
      metadata: {},
      isUsed: true,
      categoryId: 'cat-1',
      categoryPath: 'Máy cày / Máy kéo',
      categorySlug: 'may-cay',
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
    machineService.getById.and.returnValue(of(machine));
    machineService.getAll.and.returnValue(of([machine]));
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
            url: '/product-detail/machine/machine-1',
            navigate: () => Promise.resolve(true),
            createUrlTree: () => ({}),
            serializeUrl: () => '',
            events: of(),
          },
        },
        { provide: ElectricBikeService, useValue: bikeService },
        { provide: AgriculturalMachineService, useValue: machineService },
        {
          provide: SiteSettingsService,
          useValue: { getContent: () => siteContent.asObservable() },
        },
        { provide: ProductCategoryService, useValue: categoryService },
        { provide: PageMetadataService, useValue: pageMetadata },
      ],
    });
  });

  it('uses the commitments configured for the product category', () => {
    const categoryService = TestBed.inject(
      ProductCategoryService,
    ) as jasmine.SpyObj<ProductCategoryService>;
    categoryService.getById.and.returnValue(
      of({
        metadata: {
          commitment1Title: 'Chính hãng có chứng từ',
          commitment1Description: 'Thông tin cho danh mục sản phẩm.',
          commitment2Title: 'Bảo hành theo danh mục',
          commitment2Description: 'Chính sách riêng của danh mục này.',
        },
      } as any),
    );
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();

    expect(component.trustItems()).toEqual([
      {
        icon: 'workspace_premium',
        title: 'Chính hãng có chứng từ',
        text: 'Thông tin cho danh mục sản phẩm.',
      },
      {
        icon: 'verified_user',
        title: 'Bảo hành theo danh mục',
        text: 'Chính sách riêng của danh mục này.',
      },
    ]);
    expect(categoryService.getById).toHaveBeenCalledWith('cat-1');
  });

  it('does not show homepage commitments when the product category has none', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();

    expect(component.trustItems()).toEqual([]);
  });

  it('does not show technical specifications for agricultural machines when empty', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const fixture = TestBed.createComponent(ProductDetailComponent);
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('#product-specs'),
    ).toBeNull();
    expect(
      fixture.nativeElement.querySelector('#product-text-specs'),
    ).toBeNull();
    expect(
      fixture.nativeElement.querySelector('#product-sub-description'),
    ).toBeNull();
    expect(
      fixture.nativeElement.querySelector('[aria-label="Thông số chính"]'),
    ).toBeNull();
  });

  it('shows entered technical specifications for agricultural machines', () => {
    machineService.getById.and.returnValue(
      of({
        id: 'machine-1',
        name: 'Máy cày',
        brand: 'A',
        brandName: 'A',
        model: 'MB',
        category: AgriculturalMachineCategory.MachineModel,
        categoryName: 'Máy cày',
        description: '',
        price: 1,
        stockQuantity: 1,
        pictureUrl: 'https://cdn.example.com/representative.jpg',
        engineType: null,
        power: null,
        fuelType: null,
        capacity: null,
        compatibility: null,
        companyId: 'c',
        companyName: 'C',
        brandId: 'b',
        createdAt: new Date(),
        updatedAt: new Date(),
        metadata: {
          Specifications: 'Động cơ: Diesel\nCông suất: 15 HP',
          Highlights: 'Máy khỏe\nTiết kiệm nhiên liệu',
        },
        categoryId: 'cat-1',
        categoryPath: 'Máy cày',
        categorySlug: 'may-cay',
        colors: [],
      }),
    );
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const fixture = TestBed.createComponent(ProductDetailComponent);
    fixture.detectChanges();

    const tableSpecs = fixture.nativeElement.querySelector(
      '#product-specs',
    ) as HTMLElement | null;
    const textSpecs = fixture.nativeElement.querySelector(
      '#product-text-specs',
    ) as HTMLElement | null;
    expect(tableSpecs).toBeNull();
    expect(textSpecs).not.toBeNull();
    expect(textSpecs!.textContent).toContain('Động cơ: Diesel');
    expect(textSpecs!.textContent).toContain('Công suất: 15 HP');
    const highlights = fixture.nativeElement.querySelector(
      '[aria-label="Thông số nổi bật"]',
    ) as HTMLElement | null;
    expect(highlights?.textContent).toContain('Máy khỏe');
    expect(highlights?.textContent).toContain('Tiết kiệm nhiên liệu');
  });

  it('hides the introduction and warranty sections when those fields are empty', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const fixture = TestBed.createComponent(ProductDetailComponent);
    fixture.detectChanges();

    expect(
      fixture.nativeElement.querySelector('#product-introduction'),
    ).toBeNull();
    expect(
      fixture.nativeElement.querySelector('#product-warranty'),
    ).toBeNull();
    expect(fixture.nativeElement.textContent).not.toContain(
      'Hỗ trợ bảo hành theo chính sách của nhà cung cấp.',
    );
  });

  it('places product introduction and technical specs above their paired sections', () => {
    const bike: ElectricBikeProduct = {
      id: 'bike-1',
      name: 'Xe điện mẫu',
      brand: 'A',
      brandName: 'Hãng A',
      model: 'M1',
      category: ElectricBikeCategory.ElectricBikeModel,
      categoryName: 'Xe điện',
      description: 'Cấu tạo mẫu',
      price: 100,
      stockQuantity: 1,
      pictureUrl: 'https://cdn.example.com/bike.jpg',
      voltage: '48V',
      power: '500W',
      batteryCapacity: '20Ah',
      compatibility: null,
      companyId: 'company-1',
      companyName: 'Nhà cung cấp',
      brandId: 'brand-1',
      createdAt: new Date(),
      updatedAt: new Date(),
      metadata: {
        Introduction: 'Giới thiệu chi tiết sản phẩm',
        SubDescription: 'Mô tả ngắn hiển thị dưới tên',
        Warranty: 'Bảo hành theo chính sách',
        Specifications: 'Tốc độ tối đa: 45 km/h\nTải trọng: 120 kg',
        Highlights: 'Pin lithium 20Ah\nTốc độ tối đa 45 km/h',
      },
      categoryId: null,
      categoryPath: null,
      categorySlug: null,
      colors: [],
    };
    bikeService.getById.and.returnValue(of(bike));
    params.next(convertToParamMap({ kind: 'bike', id: bike.id }));
    const fixture = TestBed.createComponent(ProductDetailComponent);
    fixture.detectChanges();

    const root = fixture.nativeElement as HTMLElement;
    const introduction = root.querySelector('#product-introduction');
    const construction = root.querySelector('#product-description');
    const specs = root.querySelector('#product-specs');
    const textSpecs = root.querySelector('#product-text-specs');
    const warranty = root.querySelector('#product-warranty');

    expect(introduction).not.toBeNull();
    expect(construction).not.toBeNull();
    expect(specs).not.toBeNull();
    expect(textSpecs).not.toBeNull();
    expect(warranty).not.toBeNull();
    expect(introduction!.textContent).toContain('Giới thiệu chi tiết sản phẩm');
    expect(
      root.querySelector('#product-sub-description')?.textContent,
    ).toContain('Mô tả ngắn hiển thị dưới tên');
    const highlights = root.querySelector(
      '[aria-label="Thông số nổi bật"]',
    ) as HTMLElement | null;
    expect(highlights?.textContent).toContain('48V');
    expect(highlights?.textContent).toContain('500W');
    expect(highlights?.textContent).not.toContain('Pin lithium 20Ah');
    expect(warranty!.textContent).toContain('Bảo hành theo chính sách');
    expect(specs!.querySelector('#pd-specs-list')).not.toBeNull();
    expect(textSpecs!.textContent).toContain('Tốc độ tối đa: 45 km/h');
    expect(textSpecs!.textContent).toContain('Tải trọng: 120 kg');
    expect(
      introduction!.compareDocumentPosition(construction!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      specs!.compareDocumentPosition(warranty!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      textSpecs!.compareDocumentPosition(warranty!) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
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

  it('loads a machine route with the machine service', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();
    expect(machineService.getById).toHaveBeenCalledWith('machine-1');
  });

  it('updates share metadata from the loaded product', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();

    expect(pageMetadata.setProduct).toHaveBeenCalledWith({
      title: 'Máy cày | EcoTech',
      description: 'Máy cày - A MB chính hãng tại EcoTech.',
      url: '/product-detail/machine/machine-1',
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
    expect(machineService.getById).not.toHaveBeenCalled();
  });

  it('excludes the representative image from the detail gallery', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
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
    expect(component.product()?.gallery).not.toContain(
      'https://cdn.example.com/representative.jpg',
    );
  });

  it('omits unavailable and inferred specifications from the product facts', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
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

  it('exposes the full warranty policy separately from the technical specs', () => {
    const policy = 'Động cơ: 1 năm\nKhung: 2 năm';
    const product: AgriculturalMachineProduct = {
      id: 'machine-1',
      name: 'Máy cày',
      brand: 'A',
      brandName: 'A',
      model: 'MB',
      category: AgriculturalMachineCategory.MachineModel,
      categoryName: 'Máy cày',
      description: '',
      price: 1,
      stockQuantity: 1,
      pictureUrl: '',
      power: null,
      engineType: null,
      fuelType: null,
      capacity: null,
      compatibility: null,
      companyId: 'c',
      companyName: 'C',
      brandId: 'b',
      createdAt: new Date(),
      updatedAt: new Date(),
      metadata: { Warranty: policy },
      isUsed: true,
      categoryId: null,
      categoryPath: null,
      categorySlug: null,
      colors: [],
    };
    machineService.getById.and.returnValue(of(product));
    machineService.getAll.and.returnValue(of([product]));
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );

    component.ngOnInit();

    expect(component.product()?.warrantyDetails).toBe(policy);
    expect(component.product()?.specs.some((spec) => spec.value === policy)).toBeFalse();
  });

  it('builds the breadcrumb from the kind route and the category slug', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
    const component = TestBed.runInInjectionContext(
      () => new ProductDetailComponent(),
    );
    component.ngOnInit();

    expect(component.breadcrumb()).toEqual({
      root: 'Trang chủ',
      collection: 'Máy nông nghiệp',
      route: '/may-nong-nghiep',
      category: 'Máy cày / Máy kéo',
      categorySlug: 'may-cay',
    });
  });

  it('swaps the main image when a colour with an image is selected', () => {
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
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
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
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
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
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
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
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
      right: 500,
      bottom: 400,
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
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
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
    params.next(convertToParamMap({ kind: 'machine', id: 'machine-1' }));
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
