import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImageOptimizerService {
  readonly maxDimension = 1600;
  readonly maxPixels = 40_000_000;
  readonly maxUploadBytes = 10 * 1024 * 1024;

  async optimize(file: File): Promise<File> {
    if (!['image/jpeg', 'image/png', 'image/webp', 'image/gif'].includes(file.type)) {
      throw new Error('Chỉ hỗ trợ ảnh JPG, PNG, WebP và GIF.');
    }
    if (!file.size || file.size > 50 * 1024 * 1024) {
      throw new Error('Ảnh phải có dung lượng từ 1 byte đến 50 MB.');
    }
    // WebP/GIF có thể chứa chuyển động: backend kiểm tra và xử lý định dạng này.
    if (file.type === 'image/gif' || file.type === 'image/webp') return this.checkSize(file);
    const bytes = new DataView(await file.arrayBuffer());
    const header = this.inspect(bytes, file.type);
    if (!header || header.width * header.height > this.maxPixels || !header.width || !header.height) {
      throw new Error('Ảnh không hợp lệ hoặc vượt giới hạn 40 triệu pixel.');
    }
    if (header.animated) return this.checkSize(file);

    let bitmap: ImageBitmap;
    try {
      // Trình duyệt áp dụng EXIF orientation khi giải mã ảnh từ điện thoại.
      bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
    } catch {
      throw new Error('Không đọc được ảnh. Vui lòng chọn file ảnh khác.');
    }
    try {
      const scale = Math.min(1, this.maxDimension / Math.max(bitmap.width, bitmap.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(bitmap.width * scale));
      canvas.height = Math.max(1, Math.round(bitmap.height * scale));
      const context = canvas.getContext('2d');
      if (!context) return this.checkSize(file);
      context.imageSmoothingQuality = 'high';
      context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp', 0.82));
      if (!blob || blob.type !== 'image/webp' || (scale === 1 && blob.size >= file.size)) {
        return this.checkSize(file);
      }
      return this.checkSize(new File([blob], file.name.replace(/\.[^.]+$/, '') + '.webp', {
        type: 'image/webp', lastModified: file.lastModified,
      }));
    } finally {
      bitmap.close();
    }
  }

  private checkSize(file: File): File {
    if (file.size > this.maxUploadBytes) throw new Error('Ảnh sau xử lý phải nhỏ hơn hoặc bằng 10 MB.');
    return file;
  }

  private inspect(data: DataView, mime: string): { width: number; height: number; animated: boolean } | null {
    if (mime === 'image/png') {
      if (data.byteLength < 33 || data.getUint32(0) !== 0x89504e47 || data.getUint32(4) !== 0x0d0a1a0a ||
          data.getUint32(8) !== 13 || data.getUint32(12) !== 0x49484452) return null;
      let animated = false;
      for (let offset = 8; offset <= data.byteLength - 12;) {
        const length = data.getUint32(offset);
        if (length > data.byteLength - offset - 12) return null;
        if (data.getUint32(offset + 4) === 0x6163544c) animated = true; // acTL
        offset += length + 12;
      }
      return { width: data.getUint32(16), height: data.getUint32(20), animated };
    }
    if (data.byteLength < 4 || data.getUint16(0) !== 0xffd8) return null;
    for (let offset = 2; offset < data.byteLength;) {
      if (data.getUint8(offset++) !== 0xff) return null;
      while (offset < data.byteLength && data.getUint8(offset) === 0xff) offset++;
      if (offset >= data.byteLength) return null;
      const marker = data.getUint8(offset++);
      if (marker === 0xda || marker === 0xd9) break;
      if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
      if (offset > data.byteLength - 2) return null;
      const length = data.getUint16(offset);
      if (length < 2 || length > data.byteLength - offset) return null;
      if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
        if (length < 8) return null;
        return { width: data.getUint16(offset + 5), height: data.getUint16(offset + 3), animated: false };
      }
      offset += length;
    }
    return null;
  }
}
