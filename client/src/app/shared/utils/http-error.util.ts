/**
 * Helper đọc lỗi trả về từ API, tương thích với ErrorInterceptor
 * (src/app/core/interceptors/error.interceptor.ts):
 *  - 400 có `errors` (validation): interceptor throw thẳng `error.error`,
 *    nên object nhận được có `errors`, không có `error` lồng bên trong.
 *  - 400 không có `errors`, 401 và 403: interceptor đã tự toast rồi, KHÔNG toast lại.
 *  - 404: interceptor điều hướng sang /not-found.
 *  - 409 và các lỗi khác: HttpErrorResponse gốc, component tự đọc `error.error.message`.
 */

export interface ApiErrorLike {
  status?: number;
  statusCode?: number;
  message?: string;
  errors?: string[];
  error?: {
    statusCode?: number;
    message?: string;
    errors?: string[];
  };
}

/** Trích message phù hợp để hiển thị cho người dùng, dù lỗi ở dạng nào. */
export function getApiErrorMessage(
  e: ApiErrorLike | null | undefined,
  fallback = 'Có lỗi xảy ra, vui lòng thử lại.',
): string {
  if (!e) return fallback;
  if (e.errors?.length) return e.errors.join('; ');
  if (e.error?.errors?.length) return e.error.errors.join('; ');
  return e.error?.message || e.message || fallback;
}

/** Danh sách lỗi validation chi tiết (nếu có) để hiển thị theo từng dòng. */
export function getApiErrorList(
  e: ApiErrorLike | null | undefined,
): string[] | undefined {
  if (!e) return undefined;
  if (e.errors?.length) return e.errors;
  if (e.error?.errors?.length) return e.error.errors;
  return undefined;
}

/** true nếu ErrorInterceptor đã tự toast lỗi này rồi (400 không có errors, 401, hoặc 403). */
export function isAlreadyToasted(e: ApiErrorLike | null | undefined): boolean {
  if (!e) return false;
  if (e.status === 401) return true;
  if (e.status === 403) return true;
  if (e.status === 400 && !e.error?.errors?.length) return true;
  return false;
}
