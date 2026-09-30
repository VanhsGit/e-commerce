/** Lấy thông báo lỗi từ phản hồi API (message tiếng Việt do backend trả), nếu không có thì dùng fallback. */
export function apiErrorMessage(error: unknown, fallback: string): string {
  const e = error as {
    error?: { message?: string; errors?: Record<string, string[] | string> } | string;
    errors?: Record<string, string[] | string>;
  } | null;
  if (typeof e?.error === 'string' && e.error.trim()) return e.error;
  const body = typeof e?.error === 'object' ? e.error : null;
  if (body?.message) return body.message;
  // ErrorInterceptor ném thẳng body khi có `errors` (validation)
  const errors = body?.errors ?? e?.errors;
  if (errors) {
    const first = Object.values(errors).reduce<string[]>((all, v) => all.concat(v), [])[0];
    if (first) return String(first);
  }
  return fallback;
}
