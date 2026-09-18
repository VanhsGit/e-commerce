/** Bảng màu của từng ngành hàng trên trang chủ. */
export type IndustryTheme = 'sky' | 'amber';

/** Loại sản phẩm, dùng cho link lọc sang trang danh sách. */
export type IndustryKind = 'bike' | 'machine';

/** Một chỉ số tổng quan của ngành hàng (số mẫu, số thương hiệu...). */
export interface IndustryStat {
  icon: string;
  label: string;
  value: string;
}

/** Thương hiệu đang phân phối trong ngành hàng. */
export interface IndustryBrand {
  name: string;
  count: number;
  queryParams: Record<string, string | number>;
}

/** Một nhóm sản phẩm của ngành hàng (nội dung giới thiệu, không phải dữ liệu bán). */
export interface IndustryGroup {
  icon: string;
  name: string;
  note: string;
}

/** Một điểm nổi bật của ngành hàng. */
export interface IndustryHighlight {
  icon: string;
  title: string;
  note: string;
}

/**
 * Phần dữ liệu tĩnh của một ngành hàng. Chỉ số và thương hiệu được tính từ
 * sản phẩm thật nên không nằm trong đây.
 */
export interface IndustryContent {
  kind: IndustryKind;
  theme: IndustryTheme;
  anchor: string;
  eyebrow: string;
  title: string;
  slogan: string;
  description: string;
  image: string;
  imageAlt: string;
  groups: IndustryGroup[];
  highlights: IndustryHighlight[];
  priceFrom: string;
  ctaLabel: string;
  statLabel: string;
  statIcon: string;
  brandsLabel: string;
}

/**
 * Hình dạng tối thiểu của một sản phẩm để dựng chỉ số ngành hàng. Cả
 * ElectricBikeProduct lẫn AgriculturalMachineProduct đều thỏa mãn.
 */
export interface IndustryProduct {
  category: number;
  categoryName: string;
  brandName: string;
  price: number;
  isUsed?: boolean;
}
