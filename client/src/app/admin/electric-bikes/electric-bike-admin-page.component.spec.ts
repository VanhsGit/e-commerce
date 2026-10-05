import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ProductCategoryService } from '../../services/product-category.service';
import { BrandService } from '../../services/brand.service';
import { CompanyService } from '../../services/company.service';
import { ElectricBikeService } from '../../services/electric-bike.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { ElectricBikeCategory, ElectricBikeProduct } from '../../shared/models/electricBikeProduct';
import { NotifyService } from '../../shared/services/notify.service';
import { ElectricBikeAdminPageComponent } from './electric-bike-admin-page.component';

describe('ElectricBikeAdminPageComponent layout', () => {
  const product: ElectricBikeProduct = {
    id: 'bike-1', name: 'Xe điện mẫu', brand: 'Hãng', brandName: 'Hãng', model: 'M1',
    category: ElectricBikeCategory.ElectricBikeModel, categoryName: 'Mẫu xe điện', categoryId: null, categoryPath: '133-12A / Bản full', categorySlug: null, colors: [],
    description: 'Mô tả', price: 1000, stockQuantity: 5,
    pictureUrl: 'data:image/gif;base64,R0lGODlhAQABAAAAACw=',
    voltage: '48V', power: '500W', batteryCapacity: '20Ah', compatibility: null,
    companyId: 'company-1', companyName: 'Công ty', brandId: 'brand-1',
    createdAt: new Date('2026-01-01'), updatedAt: new Date('2026-01-01'), metadata: {}, isUsed: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ElectricBikeAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        { provide: ElectricBikeService, useValue: { getAll: () => of([product]) } },
        { provide: CompanyService, useValue: { getCompanies: () => of([]) } },
        { provide: BrandService, useValue: { getBrands: () => of([]) } },
        { provide: ProductCategoryService, useValue: { getAll: () => of([{ id: 'c1', kind: 'bike', name: '133-12A', slug: '133-12a', parentId: null, children: [{ id: 'c2', kind: 'bike', name: 'Bản full', slug: '133-12a-ban-full', parentId: 'c1', children: [] }] }]) } },
        { provide: NotifyService, useValue: { success: () => {}, error: () => {} } },
        { provide: ConfirmService, useValue: { delete: () => of(false) } },
        { provide: MatDialog, useValue: { open: () => ({ afterClosed: () => of(null) }) } },
      ],
    });
    spyOn(TestBed.inject(MatIconRegistry), 'getNamedSvgIcon').and.callFake(() =>
      of(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
    );
  });

  it('uses the shared page gutter and three consistent row actions', () => {
    const fixture = TestBed.createComponent(ElectricBikeAdminPageComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    const row = root.querySelector('tbody tr.ant-table-row');

    expect(root.querySelector('.admin-page-content')).not.toBeNull();
    expect(row?.querySelectorAll('.admin-action-btn').length).toBe(2);
  });

  it('keeps the empty state when the product list is empty', () => {
    const fixture = TestBed.createComponent(ElectricBikeAdminPageComponent);
    fixture.detectChanges();
    fixture.componentInstance.rows.set([]);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('app-admin-empty-state')).not.toBeNull();
  });
  it('shows the category path column and offers "Cha / Con" category options', () => {
    const fixture = TestBed.createComponent(ElectricBikeAdminPageComponent);
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('tbody tr.ant-table-row')?.textContent).toContain('133-12A / Bản full');
    expect(fixture.componentInstance.categoryOptions().map((o) => o.label)).toEqual([
      '133-12A',
      '133-12A / Bản full',
    ]);
  });
  it('filters products by a database subcategory id', () => {
    const fixture = TestBed.createComponent(ElectricBikeAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    component.categoryDraft.set('c2');
    let query: any;
    spyOn(component, 'loadAll').and.callFake(params => query = params);
    component.applyFilters();
    expect(query.categoryId).toBe('c2');
    expect(query.category).toBeUndefined();
  });

});
