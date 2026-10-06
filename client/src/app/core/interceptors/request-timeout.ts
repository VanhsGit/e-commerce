import { HttpContextToken } from '@angular/common/http';

/** Thời gian chờ mặc định cho mọi request (ms). Quá hạn thì coi như lỗi 504. */
export const DEFAULT_REQUEST_TIMEOUT_MS = 10_000;

/**
 * Cho phép một request tự đặt thời gian chờ riêng.
 * Đặt `0` để tắt timeout (VD: tải ảnh lên, thao tác dài).
 */
export const REQUEST_TIMEOUT_MS = new HttpContextToken<number>(
  () => DEFAULT_REQUEST_TIMEOUT_MS,
);

/** Status dùng cho lỗi quá thời gian chờ (Gateway Timeout). */
export const REQUEST_TIMEOUT_STATUS = 504;
