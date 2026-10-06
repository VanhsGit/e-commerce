export interface SiteBrandContent {
  name: string;
  tagline: string;
}

export interface SiteContactContent {
  phone: string;
  phoneLabel: string;
  phoneDisplay: string;
  email: string;
  address: string;
  workingHours: string;
  zaloUrl: string;
  facebookUrl: string;
}

export interface SiteLocationItem {
  label: string;
  address: string;
  /** Tùy chọn: liên kết Google Maps riêng. Để trống thì tự dựng từ địa chỉ. */
  mapUrl: string;
}

export interface SiteLocationsContent {
  heading: string;
  directionsLabel: string;
  items: SiteLocationItem[];
}

export interface SiteFooterContent {
  description: string;
  navHeading: string;
  contactHeading: string;
  copyright: string;
}

export interface SiteSettings {
  version: number;
  brand: SiteBrandContent;
  contact: SiteContactContent;
  locations: SiteLocationsContent;
  footer: SiteFooterContent;
}

export interface SiteSettingsResponse {
  content: SiteSettings;
  updatedAt: string;
}

/** Giá trị dự phòng: khớp SiteSettingsDefaults ở backend. */
export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  version: 1,
  brand: {
    name: 'EcoTech',
    tagline: 'Xe điện · Nông nghiệp · Điện cơ',
  },
  contact: {
    phone: '19001234',
    phoneLabel: 'Hotline',
    phoneDisplay: '1900 1234',
    email: 'hello@ecotech.vn',
    address: '123 Đường Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
    workingHours: 'Thứ 2 – Chủ Nhật · 7h – 21h',
    zaloUrl: '',
    facebookUrl: '',
  },
  locations: {
    heading: 'Hệ thống cơ sở',
    directionsLabel: 'Chỉ đường',
    items: [
      {
        label: 'Cơ sở 1',
        address: 'Xóm Tân Thành, Xã Toàn Thắng, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)',
        mapUrl: '',
      },
      {
        label: 'Cơ sở 2',
        address: 'Phường Phương Lâm, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)',
        mapUrl: '',
      },
    ],
  },
  footer: {
    description:
      'Xe điện, máy nông nghiệp và điện cơ dân dụng chính hãng, kèm bảo hành và kỹ thuật tận nơi.',
    navHeading: 'Điều hướng',
    contactHeading: 'Liên hệ',
    copyright: '© 2026 EcoTech. Bảo lưu mọi quyền.',
  },
};

/** Các trường được phép để trống (còn lại bắt buộc là chuỗi không rỗng). */
const OPTIONAL_FIELDS = new Set(['zaloUrl', 'facebookUrl', 'mapUrl']);

/** Kiểm tra JSON từ API có đủ shape như mặc định; sai shape thì caller dùng mặc định. */
export function isSupportedSiteSettings(value: unknown): value is SiteSettings {
  if (!hasRequiredShape(value, DEFAULT_SITE_SETTINGS, '')) return false;
  return (value as SiteSettings).version === 1;
}

function hasRequiredShape(value: unknown, template: unknown, field: string): boolean {
  // Mảng: mọi phần tử phải khớp mẫu đầu tiên; danh sách rỗng vẫn hợp lệ.
  if (Array.isArray(template)) {
    if (!Array.isArray(value)) return false;
    return value.every((item) => hasRequiredShape(item, template[0], field));
  }

  if (template !== null && typeof template === 'object') {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
    const record = value as Record<string, unknown>;
    return Object.entries(template).every(([key, item]) => hasRequiredShape(record[key], item, key));
  }

  if (typeof template === 'string') {
    if (typeof value !== 'string') return false;
    return OPTIONAL_FIELDS.has(field) || value.trim().length > 0;
  }
  return typeof value === typeof template;
}
