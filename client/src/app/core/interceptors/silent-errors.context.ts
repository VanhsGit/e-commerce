import { HttpContextToken } from '@angular/common/http';

/**
 * Đánh dấu một request là "dò tìm" (probe): lỗi trả về là chuyện bình thường
 * (VD: thử getById ở cả 3 loại sản phẩm, chỉ 1 loại tồn tại). ErrorInterceptor bỏ qua
 * toàn bộ xử lý lỗi dùng chung (toast, chuyển /not-found, /server-error) cho request này.
 */
export const SILENT_HTTP_ERRORS = new HttpContextToken<boolean>(() => false);
