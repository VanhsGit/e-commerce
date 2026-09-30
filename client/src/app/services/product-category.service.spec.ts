import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProductCategoryService } from './product-category.service';

describe('ProductCategoryService.getNavTree', () => {
  let service: ProductCategoryService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(ProductCategoryService);
    http = TestBed.inject(HttpTestingController);
  });

  it('shares one request without a kind filter', () => {
    const results: unknown[] = [];
    service.getNavTree().subscribe((r) => results.push(r));
    service.getNavTree().subscribe((r) => results.push(r));
    const req = http.expectOne((r) => r.url.endsWith('productCategories'));
    expect(req.request.params.get('tree')).toBe('true');
    expect(req.request.params.get('isUsed')).toBe('true');
    expect(req.request.params.has('kind')).toBeFalse();
    req.flush([]);
    service.getNavTree().subscribe((r) => results.push(r));
    http.expectNone((r) => r.url.endsWith('productCategories'));
    expect(results.length).toBe(3);
  });

  it('clears the cache on error so a later call retries', () => {
    service.getNavTree().subscribe({ error: () => undefined });
    http.expectOne((r) => r.url.endsWith('productCategories')).flush('x', { status: 500, statusText: 'err' });
    service.getNavTree().subscribe();
    http.expectOne((r) => r.url.endsWith('productCategories')).flush([]);
  });
});
