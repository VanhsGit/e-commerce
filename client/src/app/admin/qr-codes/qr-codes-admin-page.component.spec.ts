import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AgriculturalMachineService } from '../../services/agricultural-machine.service';
import { ElectricBikeService } from '../../services/electric-bike.service';
import { ElectricalApplianceService } from '../../services/electrical-appliance.service';
import { ProductCategoryService } from '../../services/product-category.service';
import { provideAppIcons } from '../../shared/icons/provide-app-icons';
import { QrCodeService } from '../../shared/qr/qr-code.service';
import { QrPdfRequest, QrPdfService } from '../../shared/qr/qr-pdf.service';
import { QrCodesAdminPageComponent, QrProductRow } from './qr-codes-admin-page.component';

const product = (id: string) => ({
  id,
  name: 'Sản phẩm ' + id,
  model: 'M-' + id,
  brandName: 'EcoTech',
  categoryPath: null,
  isUsed: true,
});

describe('QrCodesAdminPageComponent', () => {
  const bikeGetAll = jasmine.createSpy('bikes').and.returnValue(of([product('b1'), product('b2'), product('b3')]));
  let toDataUrl: jasmine.Spy;
  let exportPdf: jasmine.Spy;

  async function create() {
    toDataUrl = jasmine.createSpy('toDataUrl').and.callFake((text: string) => Promise.resolve('data:image/png;base64,' + text));
    exportPdf = jasmine.createSpy('exportPdf').and.resolveTo(undefined);
    await TestBed.configureTestingModule({
      imports: [QrCodesAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        provideAppIcons(),
        { provide: ElectricBikeService, useValue: { getAll: bikeGetAll } },
        { provide: AgriculturalMachineService, useValue: { getAll: () => of([product('m1')]) } },
        { provide: ElectricalApplianceService, useValue: { getAll: () => of([]) } },
        { provide: ProductCategoryService, useValue: { getAll: () => of([]) } },
        { provide: QrCodeService, useValue: { productPayload: (id: string) => id, toDataUrl, download: () => undefined } },
        { provide: QrPdfService, useValue: { export: exportPdf } },
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(QrCodesAdminPageComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('keeps the selection across page changes and filter reloads, and counts all of it', async () => {
    const fixture = await create();
    const page = fixture.componentInstance;
    const rows = page.rows();
    expect(rows.length).toBe(3);

    page.onPageData(rows.slice(0, 2));
    page.togglePage(true);
    expect(page.selectedCount()).toBe(2);
    expect(page.allPageChecked()).toBeTrue();

    // Sang "trang" khác: header phản ánh trang mới, lựa chọn cũ vẫn còn.
    page.onPageData(rows.slice(2));
    expect(page.allPageChecked()).toBeFalse();
    expect(page.pageIndeterminate()).toBeFalse();
    page.toggleRow(rows[2], true);
    expect(page.selectedCount()).toBe(3);

    // Đổi bộ lọc / loại sản phẩm không làm mất lựa chọn.
    page.onKindChange('machine');
    expect(page.rows().map((r) => r.id)).toEqual(['m1']);
    expect(page.selectedCount()).toBe(3);

    page.clearSelection();
    expect(page.selectedCount()).toBe(0);
  });

  it('header checkbox only unchecks rows of the current page and shows an indeterminate state', async () => {
    const fixture = await create();
    const page = fixture.componentInstance;
    const rows = page.rows();
    page.onPageData(rows);
    page.toggleRow(rows[0], true);
    expect(page.pageIndeterminate()).toBeTrue();

    page.onPageData(rows.slice(1));
    page.togglePage(true);
    page.togglePage(false);
    expect(page.selectedRows().map((r: QrProductRow) => r.id)).toEqual(['b1']);
  });

  it('encodes exactly the product ID into each QR label', async () => {
    const fixture = await create();
    const page = fixture.componentInstance;
    page.toggleRow(page.rows()[0], true);
    page.toggleRow(page.rows()[1], true);
    await page.generate();
    fixture.detectChanges();

    expect(toDataUrl.calls.allArgs().map((args) => args[0])).toEqual(['b1', 'b2']);
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelectorAll('[data-qr-label]').length).toBe(2);
    expect(root.querySelector('[data-qr-label]')?.textContent).toContain('b1');
  });

  it('exports the selection to a PDF without needing the preview step', async () => {
    const fixture = await create();
    const page = fixture.componentInstance;
    page.toggleRow(page.rows()[0], true);
    page.toggleRow(page.rows()[2], true);

    await page.exportPdf();

    expect(exportPdf).toHaveBeenCalledTimes(1);
    const request = exportPdf.calls.mostRecent().args[0] as QrPdfRequest;
    expect(request.items.map((item) => item.payload)).toEqual(['b1', 'b3']);
    expect(request.items[0].title).toBe('Sản phẩm b1');
    expect(request.items[0].subtitle).toBe('EcoTech · M-b1');
    expect(request.heading).toContain('Xe điện');
    expect(request.filename).toMatch(/^qr-xe-dien-\d{8}-\d{4}\.pdf$/);
    // Không dùng tờ xem trước: không tạo tem nào trong trang.
    expect(page.labels().length).toBe(0);
    expect(page.exporting()).toBeFalse();
  });

  it('does not export when nothing is selected', async () => {
    const fixture = await create();

    await fixture.componentInstance.exportPdf();

    expect(exportPdf).not.toHaveBeenCalled();
  });
});
