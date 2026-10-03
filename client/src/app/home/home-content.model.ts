import {
  HOME_HERO,
  HOME_INDUSTRIES,
  HomeHeroContent,
} from './sections/industry-section/industry-content';
import { IndustryContent, IndustryKind } from './sections/industry-section/industry-section.model';

export interface HomeNavigationContent {
  heading: string;
  homeLabel: string;
  recruitmentLabel: string;
}

export interface HomeCompanyContent {
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  imageSrc: string;
  imageAlt: string;
  highlights: { title: string; description: string }[];
}

export interface HomeSolutionsContent {
  heading: string;
  previousLabel: string;
  nextLabel: string;
  images: { imageSrc: string; imageAlt: string; kind: IndustryKind }[];
}

export interface HomeRecruitmentContent {
  badge: string;
  heading: string;
  intro: string;
  positionsHeading: string;
  benefitsHeading: string;
  sitesHeading: string;
  applyHeading: string;
  applyText: string;
  closing: string;
  positions: { count: number; title: string; note: string }[];
  benefits: string[];
  sites: { label: string; address: string }[];
  hotlines: { display: string; tel: string }[];
}

export interface HomeCommitmentItem {
  icon: string;
  accent: string;
  title: string;
  description: string;
}

export interface HomeCommitmentsContent {
  title: string;
  description: string;
  items: HomeCommitmentItem[];
}

export interface HomeWarrantyContent {
  badge: string;
  heading: string;
  introduction: string;
  warrantyPanelHeading: string;
  warrantyPanelHelp: string;
  serialLabel: string;
  serialHint: string;
  phoneLabel: string;
  searchButtonLabel: string;
  productPanelHeading: string;
  productPanelHelp: string;
  productTypeLabel: string;
  productCodeLabel: string;
  productButtonLabel: string;
  catalogueButtonLabel: string;
  tipLabel: string;
  browseBikesLabel: string;
  browseMachinesLabel: string;
}

export interface HomeCtaContent {
  heading: string;
  highlightedHeading: string;
  description: string;
  phone: string;
  phoneButtonLabel: string;
  email: string;
  emailButtonLabel: string;
  workingHoursLabel: string;
  workingHoursValue: string;
  addressLabel: string;
  addressValue: string;
  supportLabel: string;
  supportValue: string;
}

export interface HomePageContent {
  version: number;
  hero: HomeHeroContent;
  navigation: HomeNavigationContent;
  company: HomeCompanyContent;
  solutions: HomeSolutionsContent;
  recruitment: HomeRecruitmentContent;
  industries: IndustryContent[];
  commitments: HomeCommitmentsContent;
  warranty: HomeWarrantyContent;
  cta: HomeCtaContent;
}

export interface HomeContentResponse {
  content: HomePageContent;
  updatedAt: string;
}

export const DEFAULT_HOME_PAGE_CONTENT: HomePageContent = {
  version: 1,
  hero: HOME_HERO,
  navigation: {
    heading: 'Bạn đang quan tâm điều gì?', homeLabel: 'Trang chủ', recruitmentLabel: 'Tuyển dụng',
  },
  company: {
    eyebrow: 'Về EcoTech',
    title: 'Đồng hành cùng cuộc sống và sản xuất',
    description: 'EcoTech kết nối các giải pháp xe điện, máy nông nghiệp và điện gia dụng trong một điểm đến.',
    detail: 'Từ lựa chọn thiết bị đến sử dụng và bảo dưỡng, chúng tôi hướng đến trải nghiệm thuận tiện, rõ ràng và phù hợp với nhu cầu của từng khách hàng.',
    imageSrc: 'assets/images/home/agricultural-machinery.webp',
    imageAlt: 'Thiết bị nông nghiệp trong hoạt động sản xuất',
    highlights: [
      { title: 'Di chuyển', description: 'Xe điện phục vụ học tập, công việc và những hành trình mỗi ngày.' },
      { title: 'Sản xuất', description: 'Thiết bị hỗ trợ canh tác và công việc nông nghiệp.' },
      { title: 'Gia đình', description: 'Điện gia dụng cho không gian sống tiện nghi.' },
    ],
  },
  solutions: {
    heading: 'Giải pháp của chúng tôi', previousLabel: 'Cuộn ảnh về trước', nextLabel: 'Cuộn ảnh tiếp theo',
    images: HOME_HERO.cards.map(({ imageSrc, imageAlt, kind }) => ({ imageSrc, imageAlt, kind })),
  },
  recruitment: {
    badge: 'Tuyển dụng', heading: 'TUYỂN DỤNG ĐI LÀM NGAY',
    intro: 'Để mở rộng quy mô hoạt động, công ty chúng tôi cần tuyển gấp nhiều vị trí làm việc.',
    positionsHeading: 'Vị trí cần tuyển', benefitsHeading: 'Quyền lợi', sitesHeading: 'Địa điểm làm việc', applyHeading: 'Cách thức ứng tuyển',
    applyText: 'Liên hệ trực tiếp qua Hotline để nhận lịch phỏng vấn đi làm ngay.',
    closing: 'Hãy gọi ngay hôm nay để trở thành một phần của gia đình ECOTECH!',
    positions: [
      { count: 15, title: 'Nhân viên Lắp ráp', note: 'Nam/Nữ' },
      { count: 1, title: 'Kế toán Nội bộ', note: '' },
      { count: 1, title: 'Kế toán Thuế', note: '' },
      { count: 1, title: 'Kế toán Tổng hợp', note: '' },
      { count: 2, title: 'Quản lý Kho', note: '' },
      { count: 2, title: 'Lái xe', note: 'Yêu cầu bằng C' },
      { count: 5, title: 'Nhân viên Sale', note: '' },
      { count: 2, title: 'Nhân viên Chăm sóc khách hàng', note: '' },
    ],
    benefits: [
      'Chế độ lương & thỏa thuận thu nhập hấp dẫn (đầy đủ trợ cấp, phụ cấp mở rộng)',
      'Hỗ trợ chỗ ở, ăn nghỉ đầy đủ', 'Hỗ trợ dạy nghề chuyên nghiệp', 'Có đóng Bảo hiểm xã hội theo quy định',
    ],
    sites: [
      { label: 'Cơ sở 1', address: 'Xóm Tân Thành, Xã Toàn Thắng, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)' },
      { label: 'Cơ sở 2', address: 'Phường Phương Lâm, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)' },
    ],
    hotlines: [ { display: '0971 456 992', tel: '0971456992' }, { display: '0919 932 247', tel: '0919932247' } ],
  },
  industries: [...HOME_INDUSTRIES],
  commitments: {
    title: 'Ba ngành hàng, một chuẩn an tâm trong từng lựa chọn',
    description:
      'Bốn cam kết xuyên suốt xe điện, máy nông nghiệp và điện gia dụng — từ nguồn gốc sản phẩm đến dịch vụ sau bán hàng.',
    items: [
      {
        icon: 'workspace_premium',
        accent: 'bg-emerald-500',
        title: 'Chính hãng 100%',
        description:
          'Nhập khẩu trực tiếp, đầy đủ hóa đơn VAT, tem chống giả và giấy tờ CO – CQ.',
      },
      {
        icon: 'verified_user',
        accent: 'bg-sky-500',
        title: 'Bảo hành rõ ràng',
        description:
          'Xe điện 3 năm, máy nông nghiệp 12 – 24 tháng. Tra cứu bảo hành online bằng số serial.',
      },
      {
        icon: 'build',
        accent: 'bg-amber-500',
        title: 'Kỹ thuật tới tận nơi',
        description:
          'Đội kỹ thuật có mặt trong 24 giờ, sửa chữa tại nhà và tại ruộng trên toàn quốc.',
      },
      {
        icon: 'credit_card',
        accent: 'bg-violet-500',
        title: 'Trả góp 0% lãi suất',
        description:
          'Duyệt hồ sơ trong ngày, trả trước từ 20%, hỗ trợ trả theo mùa vụ cho hợp tác xã.',
      },
    ],
  },
  warranty: {
    badge: 'Dịch vụ hậu mãi',
    heading: 'Tra cứu thông tin bảo hành',
    introduction: 'Kiểm tra thời hạn và thông tin hỗ trợ cho sản phẩm đã mua.',
    warrantyPanelHeading: 'Tra cứu bảo hành',
    warrantyPanelHelp: 'Kiểm tra bảo hành bằng Serial hoặc SĐT',
    serialLabel: 'Serial số sản phẩm',
    serialHint: '(in trên tem máy)',
    phoneLabel: 'Hoặc Số điện thoại khách hàng',
    searchButtonLabel: 'Tra cứu bảo hành',
    productPanelHeading: 'Tra cứu sản phẩm nhanh',
    productPanelHelp: 'Chọn loại và nhập mã sản phẩm để xem chi tiết',
    productTypeLabel: 'Loại sản phẩm',
    productCodeLabel: 'Mã / ID sản phẩm',
    productButtonLabel: 'Xem chi tiết',
    catalogueButtonLabel: 'Danh mục',
    tipLabel: 'Mẫu thử:',
    browseBikesLabel: 'Xem xe điện',
    browseMachinesLabel: 'Xem máy nông nghiệp',
  },
  cta: {
    heading: 'Cần tư vấn lựa chọn?',
    highlightedHeading: 'Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng',
    description:
      'Dù bạn đang chọn xe điện cho gia đình, máy nông nghiệp cho mùa vụ hay điện gia dụng cho tổ ấm, đội ngũ của chúng tôi luôn sẵn sàng tư vấn giải pháp phù hợp, báo giá rõ ràng và hỗ trợ tận tâm.',
    phone: '19001234',
    phoneButtonLabel: 'Hotline miễn phí',
    email: 'hello@example.vn',
    emailButtonLabel: 'Gửi email cho chúng tôi',
    workingHoursLabel: 'Giờ làm việc',
    workingHoursValue: 'Thứ 2 – Chủ Nhật · 7h – 21h',
    addressLabel: 'Văn phòng chính',
    addressValue: '123 Đường Dịch Vọng Hậu, Cầu Giấy, Hà Nội',
    supportLabel: 'Hỗ trợ 24/7',
    supportValue: 'Zalo / Facebook Messenger: @greenmobility',
  },
};

export function isSupportedHomePageContent(
  value: unknown,
): value is HomePageContent {
  if (!hasRequiredShape(value, DEFAULT_HOME_PAGE_CONTENT, '')) return false;

  const content = value as HomePageContent;
  return (
    content.version === 1 &&
    content.hero.cards.map((card) => card.kind).join(',') ===
      'bike,machine,appliance' &&
    content.industries.map((industry) => industry.kind).join(',') ===
      'bike,machine,appliance' &&
    content.solutions.images.every((image) => ['bike', 'machine', 'appliance'].includes(image.kind)) &&
    content.recruitment.positions.every((position) => Number.isInteger(position.count) && position.count > 0)
  );
}

/** Fill only newly added sections so previously saved copy and images remain intact. */
export function resolveHomePageContent(value: unknown): HomePageContent | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const raw = value as Partial<HomePageContent>;
  const defaults: HomePageContent = JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
  const candidate = {
    ...raw,
    navigation: raw.navigation === undefined ? defaults.navigation : raw.navigation,
    company: raw.company === undefined ? defaults.company : raw.company,
    solutions: raw.solutions === undefined ? {
      ...defaults.solutions,
      images: Array.isArray(raw.hero?.cards)
        ? raw.hero.cards.map((card) => card && ({ imageSrc: card.imageSrc, imageAlt: card.imageAlt, kind: card.kind }))
        : defaults.solutions.images,
    } : raw.solutions,
    recruitment: raw.recruitment === undefined ? defaults.recruitment : raw.recruitment,
    hero: raw.hero && {
      ...raw.hero,
      desktopImageSrc: raw.hero.desktopImageSrc || raw.hero.cards?.[0]?.imageSrc || defaults.hero.desktopImageSrc,
      mobileImageSrc: raw.hero.mobileImageSrc || raw.hero.cards?.[1]?.imageSrc || defaults.hero.mobileImageSrc,
      contactLabel: raw.hero.contactLabel === undefined ? defaults.hero.contactLabel : raw.hero.contactLabel,
      warrantyLabel: raw.hero.warrantyLabel === undefined ? defaults.hero.warrantyLabel : raw.hero.warrantyLabel,
    },
  };
  if (candidate.recruitment?.positions && Array.isArray(candidate.recruitment.positions)) {
    candidate.recruitment = { ...candidate.recruitment, positions: candidate.recruitment.positions.map((position) =>
      position && { ...position, note: position.note ?? '' }) };
  }
  if (raw.navigation === undefined && raw.warranty && typeof raw.warranty.introduction === 'string' && !raw.warranty.introduction.trim()) {
    candidate.warranty = { ...raw.warranty, introduction: defaults.warranty.introduction };
  }
  return isSupportedHomePageContent(candidate) ? candidate : null;
}

const VARIABLE_LISTS = new Set(['solutions.images', 'recruitment.positions', 'recruitment.benefits', 'recruitment.sites', 'recruitment.hotlines']);

function hasRequiredShape(value: unknown, template: unknown, path: string): boolean {
  if (Array.isArray(template)) {
    if (VARIABLE_LISTS.has(path)) {
      return Array.isArray(value) && value.length > 0 && value.every((item) => hasRequiredShape(item, template[0], `${path}.*`));
    }
    return (
      Array.isArray(value) &&
      value.length === template.length &&
      template.every((item, index) => hasRequiredShape(value[index], item, `${path}.${index}`))
    );
  }

  if (template !== null && typeof template === 'object') {
    if (value === null || typeof value !== 'object' || Array.isArray(value))
      return false;
    const record = value as Record<string, unknown>;
    return Object.entries(template).every(([key, item]) =>
      hasRequiredShape(record[key], item, path ? `${path}.${key}` : key),
    );
  }

  if (typeof template === 'string')
    return typeof value === 'string' && (path === 'recruitment.positions.*.note' || value.trim().length > 0);
  return typeof value === typeof template;
}
