import { Pipe, PipeTransform } from '@angular/core';

/**
 * Định dạng số tiền theo chuẩn Việt Nam: dấu chấm phân cách hàng nghìn,
 * ký hiệu ₫ cách một khoảng trắng. Ví dụ: 22900000 -> "22.900.000 ₫".
 */
@Pipe({ name: 'vndCurrency', standalone: true })
export class VndCurrencyPipe implements PipeTransform {
  private readonly formatter = new Intl.NumberFormat('vi-VN', {
    maximumFractionDigits: 0,
  });

  transform(value: number | string | null | undefined): string {
    const numeric = typeof value === 'string' ? Number(value) : value;
    const safe = Number.isFinite(numeric) ? (numeric as number) : 0;
    return `${this.formatter.format(safe)} ₫`;
  }
}
