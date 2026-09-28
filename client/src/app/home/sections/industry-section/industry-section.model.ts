/** Bảng màu riêng cho từng ngành hàng trên trang chủ. */
export type IndustryTheme = 'sky' | 'amber' | 'sage';

/** Loại sản phẩm dùng cho link lọc sang trang danh sách. */
export type IndustryKind = 'bike' | 'machine' | 'appliance';

/** Vị trí ảnh trên màn hình lớn để tạo nhịp xen kẽ. */
export type MediaPosition = 'left' | 'right';

export interface IndustryImage {
  src: string | null;
  caption: string;
  icon: string;
}

export interface IndustryHighlight {
  icon: string;
  title: string;
  note: string;
}

/** Nội dung tĩnh cho một khối ngành hàng giàu hình ảnh trên trang chủ. */
export interface IndustryContent {
  kind: IndustryKind;
  theme: IndustryTheme;
  anchor: string;
  mediaPosition: MediaPosition;
  cover: IndustryImage;
  eyebrow: string;
  title: string;
  slogan: string;
  description: string;
  highlights: IndustryHighlight[];
  priceFrom: string;
  ctaLabel: string;
}
