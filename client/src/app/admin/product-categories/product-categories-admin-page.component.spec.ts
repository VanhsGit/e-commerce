import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { ProductCategoryService } from '../../services/product-category.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { ProductCategory } from '../../shared/models/product-category';
import { NotifyService } from '../../shared/services/notify.service';
import { ProductCategoriesAdminPageComponent } from './product-categories-admin-page.component';

function node(
  id: string,
  name: string,
  slug: string,
  parentId: string | null,
  children: ProductCategory[] = [],
): ProductCategory {
  return {
    id, kind: 'bike', name, slug, parentId, parentName: null, description: '', imageUrl: '',
    sortOrder: 10, metadata: {}, productCount: 0, createdAt: new Date(), updatedAt: new Date(),
    isUsed: true, children,
  };
}

describe('ProductCategoriesAdminPageComponent', () => {
  const tree = [
    node('a', '133-12A', '133-12a', null, [
      node('a1', 'Bản rẻ', '133-12a-ban-re', 'a'),
      node('a2', 'Bản thường', '133-12a-ban-thuong', 'a'),
      node('a3', 'Bản full', '133-12a-ban-full', 'a'),
    ]),
    node('b', '133-20A', '133-20a', null),
  ];
  let notify: { success: jasmine.Spy; error: jasmine.Spy };
  let remove: jasmine.Spy;

  beforeEach(() => {
    notify = { success: jasmine.createSpy('success'), error: jasmine.createSpy('error') };
    remove = jasmine.createSpy('remove').and.returnValue(of(undefined));
    TestBed.configureTestingModule({
      imports: [ProductCategoriesAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ProductCategoryService,
          useValue: { getAll: (p: { kind: string }) => of(p.kind === 'bike' ? tree : []), remove },
        },
        { provide: NotifyService, useValue: notify },
        { provide: ConfirmService, useValue: { delete: () => of(true) } },
      ],
    });
    spyOn(TestBed.inject(MatIconRegistry), 'getNamedSvgIcon').and.callFake(() =>
      of(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
    );
  });

  function create() {
    const fixture = TestBed.createComponent(ProductCategoriesAdminPageComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('indents children by depth and shows the child count', () => {
    const fixture = create();
    const rows = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('tr[data-category-row]'),
    );

    expect(rows.map((r) => r.getAttribute('data-depth'))).toEqual(['0', '1', '1', '1', '0']);
    expect(rows[0].querySelector('[data-child-count]')?.textContent).toContain('3 con');
    expect(rows[4].querySelector('[data-child-count]')).toBeNull();
  });

  it('collapses and re-opens the children of a parent', () => {
    const fixture = create();
    const c = fixture.componentInstance;

    c.toggle('a');
    fixture.detectChanges();
    expect(c.rows().bike.length).toBe(2);
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('tr[data-category-row]').length).toBe(2);

    c.toggle('a');
    expect(c.rows().bike.length).toBe(5);
  });

  it('offers only same-kind root categories as parents, never the edited one or its descendants', () => {
    const c = create().componentInstance;

    c.open('bike', tree[0]);
    expect(c.parentOptions().map((p) => p.id)).toEqual(['b']);

    c.open('bike', tree[0].children[0]);
    expect(c.parentOptions().map((p) => p.id)).toEqual(['a', 'b']);

    c.open('machine');
    expect(c.parentOptions()).toEqual([]);
  });

  it('generates a diacritic-free slug from the name until the user edits it', () => {
    const c = create().componentInstance;
    c.open('bike');

    c.form.controls.name.setValue('Bản rẻ');
    expect(c.form.controls.slug.value).toBe('ban-re');

    c.form.controls.parentId.setValue('a');
    expect(c.form.controls.slug.value).toBe('133-12a-ban-re');

    c.form.controls.slug.setValue('tu-dat');
    c.onSlugInput();
    c.form.controls.name.setValue('Tên khác');
    expect(c.form.controls.slug.value).toBe('tu-dat');
  });

  it('shows the API message verbatim when deletion is refused', () => {
    remove.and.returnValue(
      throwError(() => ({ error: { message: 'Danh mục còn 3 danh mục con đang dùng' } })),
    );
    const c = create().componentInstance;

    c.remove(tree[0]);

    expect(notify.error).toHaveBeenCalledWith('Danh mục còn 3 danh mục con đang dùng');
  });
});
