import { PRODUCT_KIND_ROUTES, ProductKind } from '../models/product-category';

export interface ParsedQrPayload {
  /** ID (hoặc mã) sản phẩm đã tách. */
  id: string;
  /** Loại sản phẩm trong URL QR; mã ID cũ có giá trị null. */
  kind: ProductKind | null;
}

const KINDS: readonly ProductKind[] = ['bike', 'machine', 'appliance'];
const BARE_ID = /^[A-Za-z0-9][A-Za-z0-9_.:-]{0,127}$/;

function isKind(value: string): value is ProductKind {
  return (KINDS as readonly string[]).includes(value);
}

/** Đổi segment của đường dẫn danh mục (`/electric-bikes`...) hoặc khóa kind về ProductKind. */
function toKind(segment: string): ProductKind | null {
  const value = segment.toLowerCase();
  if (isKind(value)) return value;
  for (const kind of KINDS) {
    if (PRODUCT_KIND_ROUTES[kind].replace(/^\/+/, '').toLowerCase() === value) return kind;
  }
  return null;
}

function decode(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

/**
 * Đọc URL API QR, URL trang sản phẩm, đường dẫn kind/id và ID trần từ mã cũ.
 * Trả về null nếu không giống một ID sản phẩm hợp lệ.
 */
export function parseQrPayload(raw: string | null | undefined): ParsedQrPayload | null {
  const text = (raw ?? '').trim();
  if (!text || text.length > 2048 || /[\s\u0000-\u001f]/.test(text)) return null;

  if (BARE_ID.test(text)) return { id: text, kind: null };

  let path = text;
  if (/^[a-z][a-z0-9+.-]*:\/\//i.test(text)) {
    try {
      path = new URL(text).pathname;
    } catch {
      return null;
    }
  } else {
    path = text.replace(/[?#].*$/, '');
  }

  const segments = path.split('/').filter(Boolean).map(decode);
  if (segments.length === 0) return null;

  const detailAt = segments.findIndex((s) => s.toLowerCase() === 'product-detail');
  const tail = detailAt >= 0 ? segments.slice(detailAt + 1) : segments;
  if (tail.length >= 2) {
    const kind = toKind(tail[tail.length - 2]);
    const id = tail[tail.length - 1];
    if (kind && BARE_ID.test(id)) return { id, kind };
  }
  // URL lạ nhưng đoạn cuối trông như ID: vẫn thử với ID đó, chưa biết loại.
  const last = segments[segments.length - 1];
  return BARE_ID.test(last) ? { id: last, kind: null } : null;
}
