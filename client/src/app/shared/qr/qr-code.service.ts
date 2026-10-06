import { Injectable } from '@angular/core';
import { toDataURL } from 'qrcode';

/**
 * Sinh mã QR (thư viện `qrcode`, thuần JS) và tải ảnh PNG.
 * Nội dung QR của sản phẩm là CHÍNH ID sản phẩm, không thêm tiền tố hay URL.
 */
@Injectable({ providedIn: 'root' })
export class QrCodeService {
  /** Payload QR cho một sản phẩm: đúng chuỗi ID, không biến đổi. */
  productPayload(productId: string): string {
    return productId;
  }

  /** Sinh ảnh PNG (data URL). `width` là kích thước ảnh gốc, dùng lớn để in nét. */
  toDataUrl(text: string, width = 480): Promise<string> {
    return toDataURL(text, {
      errorCorrectionLevel: 'M',
      margin: 2,
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
