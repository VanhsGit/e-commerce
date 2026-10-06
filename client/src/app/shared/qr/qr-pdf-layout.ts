/**
 * Hình học và tiện ích thuần (không phụ thuộc DOM) cho tờ tem QR xuất ra PDF.
 * Tách riêng để test được bố cục mà không phải nạp jsPDF hay canvas.
 *
 * Mọi số đo tính bằng mm trên khổ A4 dọc.
 */
export const QR_PDF_LAYOUT = {
  pageWidth: 210,
  pageHeight: 297,
  marginX: 10,
  /** Chừa chỗ cho dòng tiêu đề ở đầu trang. */
  marginTop: 16,
  /** Chừa chỗ cho dòng "Trang i/n" ở cuối trang. */
  marginBottom: 12,
  columns: 3,
  rows: 4,
  gapX: 4,
  gapY: 4,
  /** Lề trong mỗi tem. */
  padding: 3,
  /** Cạnh của ô vuông chứa mã QR. */
  qrSize: 34,
} as const;

/** Số tem trên một trang A4. */
export const QR_PDF_PER_PAGE = QR_PDF_LAYOUT.columns * QR_PDF_LAYOUT.rows;

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function cellWidth(): number {
  const { pageWidth, marginX, columns, gapX } = QR_PDF_LAYOUT;
  return (pageWidth - 2 * marginX - (columns - 1) * gapX) / columns;
}

export function cellHeight(): number {
  const { pageHeight, marginTop, marginBottom, rows, gapY } = QR_PDF_LAYOUT;
  return (pageHeight - marginTop - marginBottom - (rows - 1) * gapY) / rows;
}

/** Vị trí tem thứ `indexOnPage` (0-based, xếp theo hàng từ trái sang phải). */
export function cellRect(indexOnPage: number): Rect {
  const { marginX, marginTop, columns, gapX, gapY } = QR_PDF_LAYOUT;
  const column = indexOnPage % columns;
  const row = Math.floor(indexOnPage / columns);
  const width = cellWidth();
  const height = cellHeight();
  return {
    x: marginX + column * (width + gapX),
    y: marginTop + row * (height + gapY),
    width,
    height,
  };
}

/** Chia danh sách thành từng trang. */
export function chunk<T>(items: readonly T[], size = QR_PDF_PER_PAGE): T[][] {
  if (size <= 0) throw new Error('size must be positive');
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) pages.push(items.slice(i, i + size));
  return pages;
}

/**
 * Cắt chữ thành nhiều dòng vừa `maxWidth`. `measure` do phía gọi cung cấp
 * (canvas đo bằng font thật), nên hàm này vẫn thuần và test được.
 * Dòng cuối bị tràn sẽ kết thúc bằng dấu "…".
 */
export function wrapText(
  text: string,
  maxWidth: number,
  measure: (value: string) => number,
  maxLines = 2,
): string[] {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];

  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (measure(candidate) <= maxWidth || !current) {
      current = candidate;
      continue;
    }
    lines.push(current);
    current = word;
    if (lines.length === maxLines) break;
  }
  if (lines.length < maxLines && current) lines.push(current);

  // Từ quá dài (model, ID) không thể tách theo khoảng trắng: cắt theo ký tự.
  const last = lines.length - 1;
  if (last >= 0 && measure(lines[last]) > maxWidth) lines[last] = ellipsize(lines[last], maxWidth, measure);

  const consumed = lines.join(' ');
  if (consumed !== words.join(' ') && lines.length === maxLines && !lines[last].endsWith('…')) {
    lines[last] = ellipsize(`${lines[last]}…`, maxWidth, measure);
  }
  return lines;
}

/** Cắt bớt cho đến khi vừa `maxWidth`, luôn giữ dấu "…" ở cuối. */
export function ellipsize(text: string, maxWidth: number, measure: (value: string) => number): string {
  if (measure(text) <= maxWidth) return text;
  let body = text.endsWith('…') ? text.slice(0, -1) : text;
  while (body.length > 1 && measure(`${body}…`) > maxWidth) body = body.slice(0, -1);
  return `${body}…`;
}

/** Bỏ dấu tiếng Việt để đặt tên file an toàn trên mọi hệ điều hành. */
export function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Ví dụ: qr-xe-dien-20261006-1130.pdf */
export function qrPdfFilename(label: string, date: Date): string {
  const pad = (value: number) => String(value).padStart(2, '0');
  const stamp =
    `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}` +
    `-${pad(date.getHours())}${pad(date.getMinutes())}`;
  const slug = slugify(label);
  return `qr-${slug ? `${slug}-` : ''}${stamp}.pdf`;
}
