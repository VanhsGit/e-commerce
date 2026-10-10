import { ProductColorOption } from '../../shared/models/product-category';
import { colorGallery } from '../../shared/utils/product-images';

const HEX = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

export function isValidHex(value: string | null | undefined): boolean {
  return HEX.test((value ?? '').trim());
}

/** Bỏ dòng trống (không có tên màu), cắt khoảng trắng. */
export function cleanColorOptions(rows: ProductColorOption[] | null | undefined): ProductColorOption[] {
  return (rows ?? [])
    .map((r) => {
      const imageUrls = colorGallery(r);
      return {
        name: (r.name ?? '').trim(),
        hexCode: (r.hexCode ?? '').trim(),
        imageUrl: imageUrls[0] ?? '',
        imageUrls,
      };
    })
    .filter((r) => r.name);
}

/** Trả về thông báo lỗi nếu danh sách màu không hợp lệ, ngược lại null. */
export function validateColorOptions(rows: ProductColorOption[] | null | undefined): string | null {
  for (const r of rows ?? []) {
    const name = (r.name ?? '').trim();
    const hex = (r.hexCode ?? '').trim();
    const images = colorGallery(r);
    if (!name && (hex || images.length)) return 'Mỗi màu cần có tên. Hãy nhập tên hoặc xóa dòng màu trống.';
  }
  return null;
}
