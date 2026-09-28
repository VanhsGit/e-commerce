import { OverlayContainer } from '@angular/cdk/overlay';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { of } from 'rxjs';
import { BrandService } from '../../services/brand.service';
import { EntityImageService } from '../../services/entity-image.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { Brand } from '../../shared/models/brand';
import { NotifyService } from '../../shared/services/notify.service';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';
import { BrandAdminPageComponent } from './brand-admin-page.component';

describe('BrandAdminPageComponent', () => {
  const rows: Brand[] = [
    {
      id: 'brand-1',
      name: 'Thương hiệu đang dùng',
      description: 'Mô tả dài cần xuống dòng an toàn',
      logoUrl: '',
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-01'),
      metadata: { website: 'https://example.com/a/very/long/path' },
      isUsed: true,
    },
    {
      id: 'brand-2',
      name: 'Thương hiệu đã ẩn',
      description: '',
      logoUrl: '',
      createdAt: new Date('2026-01-01'),
      updatedAt: new Date('2026-01-01'),
      metadata: {},
      isUsed: false,
    },
  ];

  const brandService = {
    getBrands: jasmine.createSpy().and.returnValue(of(rows)),
    create: jasmine.createSpy().and.returnValue(of(rows[0])),
    update: jasmine.createSpy().and.returnValue(of(rows[0])),
    remove: jasmine.createSpy().and.returnValue(of(void 0)),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrandAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        { provide: BrandService, useValue: brandService },
        { provide: EntityImageService, useValue: {} },
        { provide: NotifyService, useValue: { success: () => {}, error: () => {} } },
        { provide: ConfirmService, useValue: { delete: () => of(false) } },
      ],
    });
    TestBed.overrideComponent(MetadataEditorComponent, { set: { template: '' } });
    TestBed.overrideComponent(RepresentativeImagePickerComponent, { set: { template: '' } });
    spyOn(TestBed.inject(MatIconRegistry), 'getNamedSvgIcon').and.callFake(() =>
      of(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
    );
  });

  afterEach(() => {
    TestBed.inject(OverlayContainer).getContainerElement().innerHTML = '';
  });

  it('reloads the API list with the applied search and status filters', () => {
    const component = Object.create(BrandAdminPageComponent.prototype) as BrandAdminPageComponent;
    Object.assign(component, {
      search: signal(''),
      statusFilter: signal<'active' | 'inactive' | null>(null),
      searchDraft: signal('  Honda  '),
      statusDraft: signal<'active' | 'inactive' | null>('active'),
    });
    spyOn(component, 'load');

    component.applyFilters();

    expect(component.load).toHaveBeenCalledWith({ search: 'Honda', isUsed: true });
  });

  it('renders the shared page gutter, simple row actions, and detail link', () => {
    const fixture = TestBed.createComponent(BrandAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const viewDetail = spyOn(component, 'viewDetail');
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('.admin-page-content')).not.toBeNull();
    expect(root.querySelectorAll('tbody tr.ant-table-row').length).toBe(2);
    const firstDataRow = root.querySelector('tbody tr.ant-table-row');
    expect(firstDataRow?.querySelectorAll('.admin-action-btn').length).toBe(3);

    (root.querySelector('tbody .cell-link') as HTMLElement).click();
    expect(viewDetail).toHaveBeenCalledWith(rows[0]);
  });

  it('renders the shared empty state when no brands are available', () => {
    const fixture = TestBed.createComponent(BrandAdminPageComponent);
    fixture.detectChanges();

    fixture.componentInstance.rows.set([]);
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelector('app-admin-empty-state')).not.toBeNull();
  });

  it('renders sectioned form and safely wrapping detail content', async () => {
    const fixture = TestBed.createComponent(BrandAdminPageComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const overlay = TestBed.inject(OverlayContainer).getContainerElement();

    component.open(rows[0]);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(overlay.querySelectorAll('.admin-dialog-section').length).toBeGreaterThanOrEqual(2);
    component.close();

    component.viewDetail(rows[0]);
    fixture.detectChanges();
    await fixture.whenStable();
    expect(overlay.querySelector('.admin-detail-hero')).not.toBeNull();
    expect(overlay.querySelector('.break-safe')).not.toBeNull();
    component.closeView();
  });
});
