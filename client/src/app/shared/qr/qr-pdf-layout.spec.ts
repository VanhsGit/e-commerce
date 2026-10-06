import {
  QR_PDF_LAYOUT,
  QR_PDF_PER_PAGE,
  cellHeight,
  cellRect,
  cellWidth,
  chunk,
  ellipsize,
  qrPdfFilename,
  slugify,
  wrapText,
} from './qr-pdf-layout';

/** Bộ đo giả: mỗi ký tự rộng 10 đơn vị, đủ để kiểm tra logic cắt dòng. */
const measure = (value: string) => value.length * 10;

describe('qr pdf layout', () => {
  it('fits every cell inside the printable area of the page', () => {
    const { pageWidth, pageHeight, marginX, marginTop, marginBottom } = QR_PDF_LAYOUT;
    const last = cellRect(QR_PDF_PER_PAGE - 1);

    expect(QR_PDF_PER_PAGE).toBe(12);
    expect(cellRect(0).x).toBe(marginX);
    expect(cellRect(0).y).toBe(marginTop);
    expect(last.x + last.width).toBeCloseTo(pageWidth - marginX, 6);
    expect(last.y + last.height).toBeCloseTo(pageHeight - marginBottom, 6);
    expect(QR_PDF_LAYOUT.qrSize).toBeLessThan(cellWidth() - 2 * QR_PDF_LAYOUT.padding);
    expect(QR_PDF_LAYOUT.qrSize).toBeLessThan(cellHeight() - 2 * QR_PDF_LAYOUT.padding);
  });

  it('lays cells out row by row', () => {
    const { columns, gapX, gapY, marginX, marginTop } = QR_PDF_LAYOUT;

    expect(cellRect(1).x).toBeCloseTo(marginX + cellWidth() + gapX, 6);
    expect(cellRect(1).y).toBe(marginTop);
    expect(cellRect(columns).x).toBe(marginX);
    expect(cellRect(columns).y).toBeCloseTo(marginTop + cellHeight() + gapY, 6);
  });

  it('splits items into pages of twelve', () => {
    const items = Array.from({ length: 25 }, (_, i) => i);

    const pages = chunk(items);

    expect(pages.length).toBe(3);
    expect(pages[0].length).toBe(12);
    expect(pages[2]).toEqual([24]);
    expect(chunk([])).toEqual([]);
  });

  it('wraps a long title and marks the cut with an ellipsis', () => {
    expect(wrapText('Xe dien 133', 120, measure, 2)).toEqual(['Xe dien 133']);
    expect(wrapText('Xe dien 133', 70, measure, 2)).toEqual(['Xe dien', '133']);

    const clipped = wrapText('mot hai ba bon nam sau bay', 70, measure, 2);
    expect(clipped.length).toBe(2);
    expect(clipped[1].endsWith('…')).toBeTrue();
    for (const line of clipped) expect(measure(line)).toBeLessThanOrEqual(70);
  });

  it('shortens a single unbreakable word to fit', () => {
    const [line] = wrapText('eb000001-0000-0000-0000-000000000101', 100, measure, 1);

    expect(measure(line)).toBeLessThanOrEqual(100);
    expect(line.endsWith('…')).toBeTrue();
    expect(ellipsize('ngan', 100, measure)).toBe('ngan');
  });

  it('builds an ASCII filename from a Vietnamese label', () => {
    expect(slugify('Máy nông nghiệp')).toBe('may-nong-nghiep');
    expect(slugify('Đồ điện dân dụng')).toBe('do-dien-dan-dung');
    expect(qrPdfFilename('Xe điện', new Date(2026, 9, 6, 9, 5))).toBe('qr-xe-dien-20261006-0905.pdf');
    expect(qrPdfFilename('', new Date(2026, 9, 6, 9, 5))).toBe('qr-20261006-0905.pdf');
  });
});
