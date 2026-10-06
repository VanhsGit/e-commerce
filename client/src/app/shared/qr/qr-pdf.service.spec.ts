import { TestBed } from '@angular/core/testing';
import { QR_PDF_PER_PAGE } from './qr-pdf-layout';
import { QrPdfItem, QrPdfService } from './qr-pdf.service';

function items(count: number): QrPdfItem[] {
  return Array.from({ length: count }, (_, i) => ({
    payload: `eb00000${i}-0000-0000-0000-00000000010${i}`,
    title: `Xe điện 133-12A bản full số ${i + 1}`,
    subtitle: 'EcoTech · M-133-12A',
  }));
}

async function magic(blob: Blob): Promise<string> {
  return new Uint8Array(await blob.arrayBuffer()).slice(0, 5).reduce((text, byte) => text + String.fromCharCode(byte), '');
}

describe('QrPdfService', () => {
  let service: QrPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrPdfService);
  });

  it('builds a real multi-page PDF from the selected products', async () => {
    const blob = await service.build({
      items: items(QR_PDF_PER_PAGE + 2),
      heading: 'Mã QR sản phẩm · Xe điện · 14 tem',
      filename: 'qr-xe-dien.pdf',
    });

    expect(blob.type).toBe('application/pdf');
    expect(await magic(blob)).toBe('%PDF-');
    expect(blob.size).toBeGreaterThan(1024);
  });

  it('refuses an empty selection', async () => {
    await expectAsync(
      service.build({ items: [], heading: 'Mã QR', filename: 'qr.pdf' }),
    ).toBeRejected();
  });

  it('downloads the built file under the requested name', async () => {
    const download = spyOn(service['qr'], 'download');

    await service.export({ items: items(1), heading: 'Mã QR', filename: 'qr-test.pdf' });

    expect(download).toHaveBeenCalledTimes(1);
    const [url, filename] = download.calls.mostRecent().args;
    expect(url.startsWith('blob:')).toBeTrue();
    expect(filename).toBe('qr-test.pdf');
  });
});
