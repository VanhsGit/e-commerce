/** Bảng màu riêng cho từng ngành hàng trên trang chủ. */
export type IndustryTheme = 'sky' | 'amber' | 'sage';

/** Loại sản phẩm dùng cho link lọc sang trang danh sách. */
export type IndustryKind = 'bike' | 'machine' | 'appliance';

/** Vị trí ảnh trên màn hình lớn để tạo nhịp xen kẽ. */
export type IndustryGalleryLayout = 'kinetic' | 'field' | 'constellation';

export interface IndustryImage {
  src: string;
  caption: string;
  label: string;
  objectPosition?: string;
}

export interface IndustryGallery {
  main: IndustryImage;
  secondary: IndustryImage[];
}

export interface IndustryHighlight {
  icon: string;
  title: string;
  note: string;
}

export interface IndustryService {
  icon: string;
  title: string;
  note: string;
}

/** Nội dung tĩnh cho một khối ngành hàng giàu hình ảnh trên trang chủ. */
export interface IndustryContent {
  kind: IndustryKind;
  theme: IndustryTheme;
  anchor: string;
  galleryLayout: IndustryGalleryLayout;
  gallery: IndustryGallery;
  eyebrow: string;
  title: string;
  slogan: string;
  description: string;
  detail: string;
  categories: string[];
  highlights: IndustryHighlight[];
  service: IndustryService;
  priceFrom: string;
  ctaLabel: string;
}
