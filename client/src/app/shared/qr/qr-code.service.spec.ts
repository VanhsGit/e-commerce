import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import jsQR from 'jsqr';
import { environment } from '../../../environments/environment';
import { ProductKind } from '../models/product-category';
import { parseQrPayload } from './qr-payload';
import { QrCodeService } from './qr-code.service';

describe('QrCodeService redirect URLs', () => {
  let originalApi: string;
  let originalQrApi: string;
  let service: QrCodeService;

  beforeEach(() => {
    originalApi = environment.apiUrl;
    originalQrApi = environment.qrApiBaseUrl;
    environment.apiUrl = '/api/';
    environment.qrApiBaseUrl = '';
    TestBed.configureTestingModule({
      providers: [{ provide: DOCUMENT, useValue: { baseURI: 'https://shop.example.com/' } }],
    });
    service = TestBed.inject(QrCodeService);
  });

  afterEach(() => {
    environment.apiUrl = originalApi;
    environment.qrApiBaseUrl = originalQrApi;
  });

  it('creates camera-openable absolute URLs that the website scanner also understands', () => {
    for (const kind of ['bike', 'machine', 'appliance'] as ProductKind[]) {
      const payload = service.productPayload('sp-123', kind);
      expect(payload).toBe(`https://shop.example.com/api/qr/products/${kind}/sp-123`);
      expect(parseQrPayload(payload)).toEqual({ id: 'sp-123', kind });
    }
  });

  it('supports a separately hosted public API and a base URL without a trailing slash', () => {
    environment.qrApiBaseUrl = 'https://api.example.com/store/api';
    expect(service.productPayload('sp:1', 'machine'))
      .toBe('https://api.example.com/store/api/qr/products/machine/sp%3A1');
  });

  it('supports the relative apiUrl used by the production build', () => {
    environment.apiUrl = 'api/';
    expect(service.productPayload('sp-1', 'appliance'))
      .toBe('https://shop.example.com/api/qr/products/appliance/sp-1');
  });

  it('renders a PNG that decodes to the redirect URL', async () => {
    const payload = service.productPayload('eb000001-0000-0000-0000-000000000101', 'bike');
    const image = new Image();
    const loaded = new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error('QR image failed to load'));
    });
    image.src = await service.toDataUrl(payload);
    await loaded;
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(image, 0, 0);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    expect(jsQR(pixels.data, pixels.width, pixels.height)?.data).toBe(payload);
  });
});
