import {
  IndustryContent,
  IndustryGallery,
  IndustryKind,
} from './industry-section.model';

/**
 * CẤU HÌNH NỘI DUNG TRANG CHỦ
 *
 * Chỉnh đường dẫn ảnh tại HOME_IMAGES. Có thể dùng đường dẫn trong assets hoặc URL https.
 * Chỉnh câu chữ hero tại HOME_HERO và nội dung từng ngành hàng ở các hằng số bên dưới.
 */
export const HOME_GALLERIES: Readonly<Record<IndustryKind, IndustryGallery>> = {
  bike: {
    main: {
      src: 'assets/images/home/electric-mobility.webp',
      caption: 'Xe máy điện và xe đạp điện trong không gian đô thị hiện đại',
      label: 'Di chuyển xanh',
    },
    secondary: [
      {
        src: 'assets/images/home/electric-mobility.webp',
        caption: 'Thiết kế xe điện hiện đại',
        label: 'Thiết kế',
        objectPosition: '28% center',
      },
      {
        src: 'assets/images/home/electric-mobility.webp',
        caption: 'Xe điện đồng hành trong đô thị',
        label: 'Trải nghiệm',
        objectPosition: '82% center',
      },
    ],
  },
  machine: {
    main: {
      src: 'assets/images/home/agricultural-machinery.webp',
      caption: 'Máy nông nghiệp hiện đại trên cánh đồng lúa',
      label: 'Cơ giới hóa mùa vụ',
    },
    secondary: [
      {
        src: 'assets/images/home/agricultural-machinery.webp',
        caption: 'Máy nông nghiệp vận hành trên đồng ruộng',
        label: 'Vận hành',
        objectPosition: '18% center',
      },
      {
        src: 'assets/images/home/agricultural-machinery.webp',
        caption: 'Chi tiết thiết bị nông nghiệp',
        label: 'Thiết bị',
        objectPosition: '50% center',
      },
      {
        src: 'assets/images/home/agricultural-machinery.webp',
        caption: 'Năng suất canh tác hiện đại',
        label: 'Năng suất',
        objectPosition: '84% center',
      },
    ],
  },
};

export const HOME_IMAGES: Readonly<Record<IndustryKind, string>> = {
  bike: HOME_GALLERIES.bike.main.src,
  machine: HOME_GALLERIES.machine.main.src,
};

export interface HomeHeroCard {
  kind: IndustryKind;
  anchor: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
}

export interface HomeHeroMetric {
  value: string;
  label: string;
}

export interface HomeHeroContent {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  desktopImageSrc: string;
  mobileImageSrc: string;
  contactLabel: string;
  warrantyLabel: string;
  cards: HomeHeroCard[];
  metrics: HomeHeroMetric[];
}

export const HOME_HERO: HomeHeroContent = {
  desktopImageSrc: HOME_IMAGES.bike,
  mobileImageSrc: HOME_IMAGES.machine,
  contactLabel: 'Kết nối với chúng tôi',
  warrantyLabel: 'Tra cứu bảo hành',
  badge: '15 năm phân phối chính hãng',
  title: 'Hai ngành hàng,',
  highlightedTitle: 'trọn một niềm tin',
  description:
    'Xe điện cho nhịp sống xanh, máy nông nghiệp cho mùa vụ hiệu quả — tất cả đều được chọn lọc, bảo hành và hỗ trợ tận nơi.',
  cards: [
    {
      kind: 'bike',
      anchor: 'bikes',
      imageSrc: HOME_IMAGES.bike,
      imageAlt: 'Xe điện hiện đại',
      eyebrow: 'Di chuyển xanh',
      title: 'Xe điện',
      description: 'Êm ái, tiết kiệm và sẵn sàng cho mọi hành trình.',
      icon: 'electric_moped',
    },
    {
      kind: 'machine',
      anchor: 'agriculture',
      imageSrc: HOME_IMAGES.machine,
      imageAlt: 'Máy nông nghiệp trên đồng ruộng',
      eyebrow: 'Năng suất mùa vụ',
      title: 'Máy nông nghiệp',
      description: 'Bền bỉ, mạnh mẽ và phù hợp điều kiện canh tác Việt Nam.',
      icon: 'agriculture',
    },
  ],
  metrics: [
    { value: '50.000+', label: 'Sản phẩm đã bàn giao' },
    { value: '63/63', label: 'Tỉnh thành phục vụ' },
    { value: '24/7', label: 'Hỗ trợ kỹ thuật' },
  ],
};

export const BIKE_INDUSTRY: IndustryContent = {
  kind: 'bike',
  theme: 'sky',
  anchor: 'bikes',
  galleryLayout: 'kinetic',
  gallery: HOME_GALLERIES.bike,
  eyebrow: 'Ngành hàng 01',
  title: 'Xe điện',
  slogan: 'Di chuyển xanh, chủ động mỗi ngày',
  description:
    'Từ xe máy điện, xe đạp điện đến xe tải điện dành cho đi học, đi làm và kinh doanh. Sản phẩm chính hãng, vận hành tiết kiệm và có hệ thống bảo hành trên toàn quốc.',
  detail:
    'Đội ngũ tư vấn sẽ dựa trên quãng đường di chuyển, tải trọng và thói quen sạc để giúp bạn chọn đúng dòng xe, dung lượng pin và phương án tài chính phù hợp nhất.',
  categories: ['Xe máy điện', 'Xe đạp điện', 'Xe tải điện', 'Pin & phụ tùng'],
  highlights: [
    {
      icon: 'battery_charging_full',
      title: '80–120 km mỗi lần sạc',
      note: 'Chi phí vận hành chỉ khoảng 3.000đ cho 100 km.',
    },
    {
      icon: 'verified_user',
      title: 'Bảo hành đến 5 năm',
      note: 'Hỗ trợ pin, phụ tùng và kỹ thuật tại hơn 100 đại lý.',
    },
    {
      icon: 'credit_card',
      title: 'Trả góp 0% lãi suất',
      note: 'Nhận xe nhanh với mức trả trước linh hoạt.',
    },
    {
      icon: 'eco',
      title: 'Vận hành xanh và êm ái',
      note: 'Không khí thải trực tiếp, ít tiếng ồn và dễ bảo dưỡng.',
    },
  ],
  service: {
    icon: 'headset_mic',
    title: 'Tư vấn xe theo nhu cầu thực tế',
    note: 'So sánh tầm hoạt động, chi phí sạc và chính sách pin trước khi quyết định.',
  },
  priceFrom: 'Từ 9.900.000đ',
  ctaLabel: 'Khám phá xe điện',
};

export const MACHINE_INDUSTRY: IndustryContent = {
  kind: 'machine',
  theme: 'amber',
  anchor: 'agriculture',
  galleryLayout: 'field',
  gallery: HOME_GALLERIES.machine,
  eyebrow: 'Ngành hàng 02',
  title: 'Máy nông nghiệp',
  slogan: 'Cơ giới hóa để mùa vụ nhẹ hơn',
  description:
    'Máy cày, máy gặt, máy bơm và thiết bị canh tác được chọn theo điều kiện đồng ruộng Việt Nam. Giải pháp bền bỉ giúp tiết kiệm nhân công, thời gian và giảm hao hụt sau thu hoạch.',
  detail:
    'Mỗi thiết bị được tư vấn theo diện tích canh tác, loại đất, cây trồng và tần suất vận hành. Khách hàng được hướng dẫn sử dụng, lịch bảo dưỡng và phương án phụ tùng lâu dài.',
  categories: ['Máy cày & máy xới', 'Máy gặt', 'Máy bơm nước', 'Thiết bị canh tác'],
  highlights: [
    {
      icon: 'schedule',
      title: 'Năng suất vượt trội',
      note: 'Một máy thay thế nhiều nhân công trong mùa cao điểm.',
    },
    {
      icon: 'workspace_premium',
      title: 'Nguồn gốc rõ ràng',
      note: 'Thiết bị chính ngạch, đầy đủ CO/CQ và hóa đơn VAT.',
    },
    {
      icon: 'handyman',
      title: 'Kỹ thuật tận ruộng',
      note: 'Hỗ trợ sự cố nhanh và luôn sẵn kho phụ tùng thay thế.',
    },
    {
      icon: 'handshake',
      title: 'Tài chính theo mùa vụ',
      note: 'Phương án thanh toán phù hợp hộ canh tác và hợp tác xã.',
    },
  ],
  service: {
    icon: 'phone_in_talk',
    title: 'Khảo sát và tư vấn trước khi giao máy',
    note: 'Kỹ thuật viên hỗ trợ chọn công suất, phụ kiện và quy trình vận hành phù hợp.',
  },
  priceFrom: 'Từ 18.500.000đ',
  ctaLabel: 'Khám phá máy nông nghiệp',
};

export const HOME_INDUSTRIES: readonly IndustryContent[] = [
  BIKE_INDUSTRY,
  MACHINE_INDUSTRY,
];
