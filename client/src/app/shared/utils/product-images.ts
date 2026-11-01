/**
 * Ảnh hiển thị của sản phẩm ưu tiên ảnh đại diện `pictureUrl`, sau đó là ảnh
 * đầu tiên trong thư viện ảnh theo màu.
 */

/** Chỉ cần phần colors của sản phẩm để lấy ảnh. */
export interface ProductImageSource {
  pictureUrl?: string | null;
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
  const representative = (product?.pictureUrl ?? '').trim();
  const urls = [
    ...(representative ? [representative] : []),
    ...(product?.colors ?? []).flatMap(colorGallery),
  ];
  return [...new Set(urls)];
}

/**
 * Ảnh đại diện khi hiện sản phẩm ra: ảnh được chọn riêng, hoặc ảnh đầu tiên có sẵn.
 * Trả về chuỗi rỗng khi chưa có loại nào có ảnh - `ImgFallbackDirective` sẽ
 * tự thay bằng ảnh mặc định.
 */
export function productImage(product: ProductImageSource | null | undefined): string {
  return productGallery(product)[0] ?? '';
}
