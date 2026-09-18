/** Bảng màu của từng ngành hàng trên trang chủ. */
export type IndustryTheme = 'sky' | 'amber';

/** Một chỉ số tổng quan của ngành hàng (số mẫu, số thương hiệu...). */
export interface IndustryStat {
  icon: string;
  label: string;
  value: string;
}

/** Một danh mục trong ngành hàng, dựng từ dữ liệu sản phẩm thật. */
export interface IndustryCategory {
  key: number;
  name: string;
  icon: string;
  count: number;
  priceFrom: number | null;
  image: string | null;
  note: string;
  queryParams: Record<string, string | number>;
}

/** Thương hiệu đang phân phối trong ngành hàng. */
export interface IndustryBrand {
  name: string;
  count: number;
  queryParams: Record<string, string | number>;
}
