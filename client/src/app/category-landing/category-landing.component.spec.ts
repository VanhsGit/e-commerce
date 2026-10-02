import { ApplicationRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, convertToParamMap, provideRouter } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { CategoryPageContentService } from '../services/category-page-content.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { ProductCategoryService } from '../services/product-category.service';
import { provideAppIcons } from '../shared/icons/provide-app-icons';
import { DEFAULT_CATEGORY_PAGE_CONTENT } from '../shared/models/category-page-content';
import { ProductCategory } from '../shared/models/product-category';
import { CategoryLandingComponent } from './category-landing.component';

function category(id: string, name: string, slug: string, children: ProductCategory[] = []): ProductCategory {
  return {
    id, kind: 'bike', name, slug, parentId: null, parentName: null, description: '', imageUrl: '',
    sortOrder: 0, metadata: {}, productCount: 1, createdAt: new Date(), updatedAt: new Date(),
    isUsed: true, children,
  };
}

function bike(id: string, name: string, price: number, brandId = 'b1'): any {
  return {
    id, name, brand: 'A', brandName: 'Hãng ' + brandId, model: 'M' + id, category: 1,
    categoryName: 'Xe', description: '', price, stockQuantity: 3, pictureUrl: '',
    voltage: '48V', power: null, batteryCapacity: null, compatibility: null, companyId: 'c',
    companyName: 'C', brandId, createdAt: new Date(), updatedAt: new Date(), metadata: {}, isUsed: true,
    colors: [{ name: 'Đỏ', hexCode: '#b91c1c', imageUrl: '' }],
  };
}

describe('CategoryLandingComponent', () => {
  const data$ = new BehaviorSubject<Record<string, unknown>>({ kind: 'bike' });
  const query$ = new BehaviorSubject(convertToParamMap({}));
  let bikeService: jasmine.SpyObj<ElectricBikeService>;
  let applianceService: jasmine.SpyObj<ElectricalApplianceService>;
  let pageService: jasmine.SpyObj<CategoryPageContentService>;
  let navigate: jasmine.Spy;

  const tree = [
    category('p1', '133-12A', '133-12a', [
      category('c1', 'Bản rẻ', '133-12a-ban-re'),
      category('c2', 'Bản full', '133-12a-ban-full'),
    ]),
    category('p2', 'Xe XS', 'xe-xs'),
  ];

  function create() {
    navigate = spyOn(TestBed.inject(Router), 'navigate').and.returnValue(Promise.resolve(true));
    const fixture = TestBed.createComponent(CategoryLandingComponent);
    fixture.detectChanges();
    return fixture;
  }

  beforeEach(() => {
    data$.next({ kind: 'bike' });
    query$.next(convertToParamMap({}));
    bikeService = jasmine.createSpyObj('ElectricBikeService', ['getAll']);
    applianceService = jasmine.createSpyObj('ElectricalApplianceService', ['getAll']);
    pageService = jasmine.createSpyObj('CategoryPageContentService', ['get']);

    bikeService.getAll.and.returnValue(of([bike('1', 'Xe A', 30_000_000), bike('2', 'Xe B', 20_000_000, 'b2')]));
    applianceService.getAll.and.returnValue(of([]));
    pageService.get.and.callFake((kind) =>
      of({ content: DEFAULT_CATEGORY_PAGE_CONTENT[kind], updatedAt: new Date().toISOString() }),
    );
    const categoryService = jasmine.createSpyObj('ProductCategoryService', ['getAll']);
    categoryService.getAll.and.returnValue(of(tree));

    TestBed.configureTestingModule({
      providers: [
        provideRouter([]),
        provideAppIcons(),
        {
          provide: ActivatedRoute,
          useValue: {
            data: data$.asObservable(),
            queryParamMap: query$.asObservable(),
            get snapshot() {
              return { queryParamMap: query$.value };
            },
          },
        },
        { provide: ElectricBikeService, useValue: bikeService },
        { provide: AgriculturalMachineService, useValue: jasmine.createSpyObj('m', { getAll: of([]) }) },
        { provide: ElectricalApplianceService, useValue: applianceService },
        { provide: CategoryPageContentService, useValue: pageService },
        { provide: ProductCategoryService, useValue: categoryService },
      ],
    });
  });

  it('loads content, categories and products for the route kind', () => {
    const component = create().componentInstance;
    expect(component.loading()).toBeFalse();
    expect(component.tree().length).toBe(2);
    expect(component.visibleProducts().map((p) => p.id)).toEqual(['1', '2']);
    expect(component.visibleProducts()[0].colors?.[0].hexCode).toBe('#b91c1c');
  });

  it('falls back to default content and empty lists when every API fails', () => {
    pageService.get.and.returnValue(throwError(() => new Error('boom')));
    bikeService.getAll.and.returnValue(throwError(() => new Error('boom')));
    const component = create().componentInstance;
    expect(component.loading()).toBeFalse();
    expect(component.content()).toEqual(DEFAULT_CATEGORY_PAGE_CONTENT.bike);
    expect(component.visibleProducts()).toEqual([]);
  });

  it('refetches with categoryId and writes the slug to the URL when a category is selected', () => {
    const component = create().componentInstance;
    component.selectCategory('p1');
    expect(bikeService.getAll).toHaveBeenCalledWith({ isUsed: true, categoryId: 'p1' });
    expect(component.activeRootId()).toBe('p1');
    const args = navigate.calls.mostRecent().args[1];
    expect(args?.queryParams).toEqual({ category: '133-12a', brand: null, q: null });
    expect(args?.replaceUrl).toBeTrue();
  });

  it('filters by keyword, brand and price and sorts client-side', () => {
    const component = create().componentInstance;
    component.onBrand('b2');
    expect(component.visibleProducts().map((p) => p.id)).toEqual(['2']);
    component.onBrand('');
    component.onMinPrice(25_000_000);
    expect(component.visibleProducts().map((p) => p.id)).toEqual(['1']);
    component.onMinPrice(null);
    component.onSort('priceAsc');
    expect(component.visibleProducts().map((p) => p.id)).toEqual(['2', '1']);
    component.onKeyword('xe a');
    expect(component.visibleProducts().map((p) => p.id)).toEqual(['1']);
  });

  it('reads the category from the query string on entry', () => {
    query$.next(convertToParamMap({ category: 'xe-xs', brand: 'b2' }));
    const component = create().componentInstance;
    expect(component.selectedCategoryId()).toBe('p2');
    expect(component.brandId()).toBe('b2');
    expect(bikeService.getAll).toHaveBeenCalledWith({ isUsed: true, categoryId: 'p2' });
  });

  it('reloads for the new kind when route data changes on the same instance', () => {
    const fixture = create();
    applianceService.getAll.and.returnValue(of([]));
    data$.next({ kind: 'appliance' });
    fixture.detectChanges();
    expect(fixture.componentInstance.kind()).toBe('appliance');
    expect(pageService.get).toHaveBeenCalledWith('appliance');
    expect(applianceService.getAll).toHaveBeenCalled();
  });

  it('renders the title bar from CMS content and the catalog anchor', () => {
    const fixture = create();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('h1')?.textContent).toContain(DEFAULT_CATEGORY_PAGE_CONTENT.bike.hero.title);
    expect(root.querySelector('#catalog')).not.toBeNull();
    expect(root.querySelectorAll('app-product-card').length).toBe(2);
  });

  it('scrolls to the catalog when a dropdown category arrives while already on the page (same instance)', () => {
    const fixture = create();
    const component = fixture.componentInstance;
    const scroll = spyOn(component, 'scrollTo').and.callThrough();
    const anchor = (fixture.nativeElement as HTMLElement).querySelector('#catalog') as HTMLElement;
    const intoView = spyOn(anchor, 'scrollIntoView');
    fixture.detectChanges();
    expect(intoView).not.toHaveBeenCalled();

    query$.next(convertToParamMap({ category: 'xe-xs', focus: 'catalog' }));
    fixture.detectChanges();
    TestBed.inject(ApplicationRef).tick();

    expect(component.selectedCategoryId()).toBe('p2');
    expect(scroll.calls.allArgs()).toEqual([['catalog']]);
    expect(intoView).toHaveBeenCalledTimes(1);
    const strip = navigate.calls.allArgs().find((a) => a[1]?.queryParams?.['focus'] === null);
    expect(strip?.[1]?.replaceUrl).toBeTrue();

    // không cuộn lại khi chỉ đổi bộ lọc / category không kèm focus
    query$.next(convertToParamMap({ category: '133-12a' }));
    fixture.detectChanges();
    TestBed.inject(ApplicationRef).tick();
    expect(scroll).toHaveBeenCalledTimes(1);
  });

  it('scrolls once a fresh page finishes loading when entered with focus=catalog', () => {
    query$.next(convertToParamMap({ category: 'xe-xs', focus: 'catalog' }));
    const fixture = create();
    const scroll = spyOn(fixture.componentInstance, 'scrollTo');
    fixture.detectChanges();
    TestBed.inject(ApplicationRef).tick();
    expect(fixture.componentInstance.selectedCategoryId()).toBe('p2');
    expect(scroll.calls.allArgs()).toEqual([['catalog']]);
  });
});
