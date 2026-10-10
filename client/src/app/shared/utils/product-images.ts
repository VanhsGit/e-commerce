/**
 * Ảnh hiển thị của sản phẩm được suy ra từ ảnh của từng loại (màu), không dùng
 * `pictureUrl` của entity nữa (trường vẫn còn trong API/DB, chỉ là không dùng).
 */

/** Chỉ cần phần colors của sản phẩm để lấy ảnh. */
export interface ProductImageSource {
  colors?: ColorImageSource[] | null;
}

export interface ColorImageSource {
  imageUrl?: string | null;
  imageUrls?: readonly string[] | null;
}

/** Ảnh của một màu; đọc imageUrl nếu dữ liệu cũ chưa có danh sách ảnh. */
export function colorGallery(color: ColorImageSource | null | undefined): string[] {
  const images = (color?.imageUrls ?? []).map((url) => (url ?? '').trim()).filter(Boolean);
  const legacy = (color?.imageUrl ?? '').trim();
  return [...new Set(images.length ? images : legacy ? [legacy] : [])];
}

/** Ảnh của sản phẩm theo đúng thứ tự loại, đã bỏ rỗng và bỏ trùng. */
export function productGallery(product: ProductImageSource | null | undefined): string[] {
  const urls = (product?.colors ?? []).flatMap(colorGallery);
  return [...new Set(urls)];
}

/**
 * Ảnh đại diện khi hiện sản phẩm ra: ảnh của loại đầu tiên.
 * Trả về chuỗi rỗng khi chưa có loại nào có ảnh - `ImgFallbackDirective` sẽ
 * tự thay bằng ảnh mặc định.
 */
export function productImage(product: ProductImageSource | null | undefined): string {
  return productGallery(product)[0] ?? '';
}
