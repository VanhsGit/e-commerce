/** Tạo slug kebab-case không dấu từ tên tiếng Việt. "Bản rẻ" -> "ban-re". */
export function slugify(value: string): string {
  return (value ?? '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D') // NFD không tách được đ/Đ nên xử lý riêng
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
