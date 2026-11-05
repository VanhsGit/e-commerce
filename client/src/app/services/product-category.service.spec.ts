import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ProductCategoryService } from './product-category.service';

describe('ProductCategoryService.getNavTree', () => {
  let service: ProductCategoryService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(ProductCategoryService);
    http = TestBed.inject(HttpTestingController);
  });

  it('shares separate requests scoped to each supported product kind', () => {
    const results: unknown[] = [];
    service.getNavTree().subscribe((r) => results.push(r));
    service.getNavTree().subscribe((r) => results.push(r));
    const bikeReq = http.expectOne((r) => r.url.endsWith('productCategories') && r.params.get('kind') === 'bike');
    const machineReq = http.expectOne((r) => r.url.endsWith('productCategories') && r.params.get('kind') === 'machine');
    for (const req of [bikeReq, machineReq]) {
      expect(req.request.params.get('tree')).toBe('true');
      expect(req.request.params.get('isUsed')).toBe('true');
    }
    bikeReq.flush([]);
    machineReq.flush([]);
    service.getNavTree().subscribe((r) => results.push(r));
    http.expectNone((r) => r.url.endsWith('productCategories'));
    expect(results.length).toBe(3);
  });

  it('clears the cache on error so a later call retries', () => {
    service.getNavTree().subscribe({ error: () => undefined });
    const bikeReq = http.expectOne((r) => r.url.endsWith('productCategories') && r.params.get('kind') === 'bike');
    const machineReq = http.expectOne((r) => r.url.endsWith('productCategories') && r.params.get('kind') === 'machine');
    machineReq.flush([]);
    bikeReq.flush('x', { status: 500, statusText: 'err' });
    service.getNavTree().subscribe();
    http.expectOne((r) => r.url.endsWith('productCategories') && r.params.get('kind') === 'bike').flush([]);
    http.expectOne((r) => r.url.endsWith('productCategories') && r.params.get('kind') === 'machine').flush([]);
  });

  for (const action of ['create', 'update', 'remove'] as const) {
    it(`refreshes the navigation tree after a category ${action}`, () => {
      service.getNavTree().subscribe();
      http.expectOne(r => r.method === 'GET' && r.url.endsWith('productCategories') && r.params.get('kind') === 'bike').flush([]);
      http.expectOne(r => r.method === 'GET' && r.url.endsWith('productCategories') && r.params.get('kind') === 'machine').flush([]);
      const dto = { kind: 'bike' as const, name: 'New category', slug: 'new-category', parentId: null, description: '', imageUrl: '', sortOrder: 0, metadata: {}, isUsed: true };
      const mutation: Observable<unknown> = action === 'create' ? service.create(dto)
        : action === 'update' ? service.update('cat', { ...dto, id: 'cat' }) : service.remove('cat');
      mutation.subscribe();
      http.expectOne(r => r.method !== 'GET' && r.url.includes('productCategories')).flush({ id: 'cat', ...dto });
      let freshTree: unknown;
      service.getNavTree().subscribe(tree => freshTree = tree);
      http.expectOne(r => r.method === 'GET' && r.url.endsWith('productCategories') && r.params.get('kind') === 'bike').flush([]);
      http.expectOne(r => r.method === 'GET' && r.url.endsWith('productCategories') && r.params.get('kind') === 'machine').flush([]);
      expect(freshTree).toEqual([]);
    });
  }
});
