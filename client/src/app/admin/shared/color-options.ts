import { ProductColorOption } from '../../shared/models/product-category';

const HEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

export function isValidHex(value: string | null | undefined): boolean {
  return HEX.test((value ?? '').trim());
}

/** Bỏ dòng trống (không có tên màu), cắt khoảng trắng. */
export function cleanColorOptions(rows: ProductColorOption[] | null | undefined): ProductColorOption[] {
  return (rows ?? [])
    .map((r) => ({
      name: (r.name ?? '').trim(),
      hexCode: (r.hexCode ?? '').trim(),
      imageUrl: (r.imageUrl ?? '').trim(),
    }))
    .filter((r) => r.name);
}

/** Trả về thông báo lỗi nếu danh sách màu không hợp lệ, ngược lại null. */
export function validateColorOptions(rows: ProductColorOption[] | null | undefined): string | null {
  for (const r of rows ?? []) {
    const name = (r.name ?? '').trim();
    const hex = (r.hexCode ?? '').trim();
    const image = (r.imageUrl ?? '').trim();
    if (!name && (hex || image)) return 'Mỗi màu cần có tên. Hãy nhập tên hoặc xóa dòng màu trống.';
    if (hex && !isValidHex(hex)) return `Mã màu "${hex}" không hợp lệ (ví dụ #b91c1c).`;
  }
  return null;
}
