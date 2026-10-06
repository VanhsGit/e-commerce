/**
 * Ảnh hiển thị của sản phẩm được suy ra từ ảnh của từng loại (màu), không dùng
 * `pictureUrl` của entity nữa (trường vẫn còn trong API/DB, chỉ là không dùng).
 */

/** Chỉ cần phần colors của sản phẩm để lấy ảnh. */
export interface ProductImageSource {
  colors?: { imageUrl?: string | null }[] | null;
}

/** Ảnh của sản phẩm theo đúng thứ tự loại, đã bỏ rỗng và bỏ trùng. */
export function productGallery(product: ProductImageSource | null | undefined): string[] {
  const urls = (product?.colors ?? [])
    .map((color) => (color?.imageUrl ?? '').trim())
    .filter((url) => url.length > 0);
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
