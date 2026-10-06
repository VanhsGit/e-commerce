import { Injectable, inject } from '@angular/core';
import { QrCodeService } from './qr-code.service';
import {
  QR_PDF_LAYOUT,
  Rect,
  cellRect,
  chunk,
  ellipsize,
  wrapText,
} from './qr-pdf-layout';

export interface QrPdfItem {
  /** Nội dung mã QR: đúng ID sản phẩm. */
  payload: string;
  title: string;
  /** Dòng phụ: hãng · model. */
  subtitle: string;
}

export interface QrPdfRequest {
  items: readonly QrPdfItem[];
  /** Dòng tiêu đề in ở đầu mỗi trang. */
  heading: string;
  filename: string;
}

/** Độ phân giải khi vẽ trang ra canvas: 6 px/mm ≈ 152 dpi, đủ nét để quét và để in tem. */
const SCALE = 6;

const FONT_STACK = '"Segoe UI", Roboto, Arial, sans-serif';
const COLOR_TEXT = '#0f172a';
const COLOR_MUTED = '#475569';
const COLOR_FAINT = '#64748b';
const COLOR_GUIDE = '#cbd5e1';

/**
 * Xuất danh sách sản phẩm đã chọn thành một file PDF tem QR, hoàn toàn ở trình duyệt.
 *
 * Mỗi trang A4 được vẽ ra <canvas> rồi nhúng vào PDF dưới dạng ảnh PNG. Làm vậy vì
 * font mặc định của jsPDF không có dấu tiếng Việt; vẽ bằng canvas thì chữ dùng font
 * hệ thống nên dấu luôn đúng, và PDF không cần nhúng font.
 *
 * jsPDF được `import()` động để không nằm trong bundle khởi động của trang admin.
 */
@Injectable({ providedIn: 'root' })
export class QrPdfService {
  private readonly qr = inject(QrCodeService);

  /** Dựng PDF rồi tải về máy. */
  async export(request: QrPdfRequest): Promise<void> {
    const blob = await this.build(request);
    const url = URL.createObjectURL(blob);
    try {
      this.qr.download(url, request.filename);
    } finally {
      // Thu hồi sau khi trình duyệt đã bắt đầu tải.
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    }
  }

  /** Dựng PDF và trả về blob (tách ra để test được mà không kích hoạt tải file). */
  async build(request: QrPdfRequest): Promise<Blob> {
    if (request.items.length === 0) throw new Error('Không có sản phẩm nào để xuất');

    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
    const pages = chunk(request.items);

    for (let index = 0; index < pages.length; index++) {
      if (index > 0) pdf.addPage();
      const canvas = await this.renderPage(pages[index], request.heading, index + 1, pages.length);
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        0,
        QR_PDF_LAYOUT.pageWidth,
        QR_PDF_LAYOUT.pageHeight,
      );
    }

    return pdf.output('blob');
  }

  /** Vẽ một trang tem ra canvas (toạ độ nhận vào tính bằng mm). */
  private async renderPage(
    items: readonly QrPdfItem[],
    heading: string,
    pageNumber: number,
    pageCount: number,
  ): Promise<HTMLCanvasElement> {
    const { pageWidth, pageHeight, marginX, qrSize } = QR_PDF_LAYOUT;
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(pageWidth * SCALE);
    canvas.height = Math.round(pageHeight * SCALE);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Trình duyệt không hỗ trợ canvas 2D');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.textBaseline = 'alphabetic';

    ctx.fillStyle = COLOR_MUTED;
    ctx.font = this.font(3.4, '600');
    ctx.textAlign = 'left';
    ctx.fillText(heading, mm(marginX), mm(10));

    ctx.textAlign = 'center';
    ctx.font = this.font(2.6);
    ctx.fillStyle = COLOR_FAINT;
    ctx.fillText(`Trang ${pageNumber}/${pageCount}`, mm(pageWidth / 2), mm(pageHeight - 5));

    // QR vẽ đúng tỉ lệ 1:1 với kích thước ảnh để các ô vuông không bị nhoè khi phóng/thu.
    const qrPx = Math.round(qrSize * SCALE);
    const images = await Promise.all(
      items.map(async (item) => this.loadImage(await this.qr.toDataUrl(item.payload, qrPx))),
    );

    items.forEach((item, index) => this.drawLabel(ctx, cellRect(index), item, images[index], qrPx));
    return canvas;
  }

  private drawLabel(
    ctx: CanvasRenderingContext2D,
    cell: Rect,
    item: QrPdfItem,
    image: HTMLImageElement,
    qrPx: number,
  ): void {
    const { padding, qrSize } = QR_PDF_LAYOUT;
    const textWidth = mm(cell.width - 2 * padding);
    const measure = (value: string) => ctx.measureText(value).width;

    // Đường nét đứt để cắt tem.
    ctx.save();
    ctx.setLineDash([mm(1.5), mm(1.5)]);
    ctx.strokeStyle = COLOR_GUIDE;
    ctx.lineWidth = Math.max(1, mm(0.25));
    ctx.strokeRect(mm(cell.x), mm(cell.y), mm(cell.width), mm(cell.height));
    ctx.restore();

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(image, mm(cell.x + (cell.width - qrSize) / 2), mm(cell.y + padding), qrPx, qrPx);
    ctx.imageSmoothingEnabled = true;

    const centerX = mm(cell.x + cell.width / 2);
    let baseline = mm(cell.y + padding + qrSize + 4);
    ctx.textAlign = 'center';

    ctx.fillStyle = COLOR_TEXT;
    ctx.font = this.font(3.2, '600');
    for (const line of wrapText(item.title, textWidth, measure, 2)) {
      ctx.fillText(line, centerX, baseline);
      baseline += mm(4);
    }

    if (item.subtitle) {
      ctx.fillStyle = COLOR_MUTED;
      ctx.font = this.font(2.8);
      ctx.fillText(ellipsize(item.subtitle, textWidth, measure), centerX, baseline);
      baseline += mm(3.6);
    }

    ctx.fillStyle = COLOR_FAINT;
    ctx.font = this.font(2.4);
    ctx.fillText(ellipsize(item.payload, textWidth, measure), centerX, baseline);
  }

  private font(sizeMm: number, weight = '400'): string {
    return `${weight} ${mm(sizeMm).toFixed(1)}px ${FONT_STACK}`;
  }

  private loadImage(dataUrl: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error('Không đọc được ảnh mã QR'));
      image.src = dataUrl;
    });
  }
}

/** mm -> px theo độ phân giải của canvas. */
function mm(value: number): number {
  return value * SCALE;
}
