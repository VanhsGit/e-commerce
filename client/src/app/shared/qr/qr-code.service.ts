import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { toDataURL } from 'qrcode';
import { environment } from '../../../environments/environment';
import { ProductKind } from '../models/product-category';

/**
 * Sinh mã QR (thư viện `qrcode`, thuần JS) và tải ảnh PNG.
 * QR chứa URL tuyệt đối để camera điện thoại mở API chuyển hướng sản phẩm.
 */
@Injectable({ providedIn: 'root' })
export class QrCodeService {
  private readonly document = inject(DOCUMENT);

  productPayload(productId: string, kind: ProductKind): string {
    const base = environment.qrApiBaseUrl || environment.apiUrl;
    const api = new URL(base.replace(/\/?$/, '/'), this.document.baseURI);
    if (!['http:', 'https:'].includes(api.protocol)) {
      throw new Error('URL API QR phải dùng HTTP hoặc HTTPS');
    }
    return new URL(`qr/products/${kind}/${encodeURIComponent(productId)}`, api).href;
  }

  /** Sinh ảnh PNG (data URL). `width` là kích thước ảnh gốc, dùng lớn để in nét. */
  toDataUrl(text: string, width = 480): Promise<string> {
    return toDataURL(text, {
      errorCorrectionLevel: 'M',
      margin: 4,
      width,
      color: { dark: '#0f172a', light: '#ffffff' },
    });
  }

  /** Kích hoạt tải một data URL về máy dưới dạng file. */
  download(dataUrl: string, filename: string): void {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
