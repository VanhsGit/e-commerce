import { IndustryContent, IndustryKind } from './industry-section.model';

/**
 * CẤU HÌNH NỘI DUNG TRANG CHỦ
 *
 * Chỉnh đường dẫn ảnh tại HOME_IMAGES. Có thể dùng đường dẫn trong assets hoặc URL https.
 * Chỉnh câu chữ hero tại HOME_HERO và nội dung từng ngành hàng ở các hằng số bên dưới.
 */
export const HOME_IMAGES: Readonly<Record<IndustryKind, string>> = {
  bike: 'assets/images/home/electric-mobility.webp',
  machine: 'assets/images/home/agricultural-machinery.webp',
  appliance: 'assets/images/home/home-appliances.webp',
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
  cards: HomeHeroCard[];
  metrics: HomeHeroMetric[];
}

export const HOME_HERO: HomeHeroContent = {
  badge: '15 năm phân phối chính hãng',
  title: 'Ba ngành hàng,',
  highlightedTitle: 'trọn một niềm tin',
  description:
    'Xe điện cho nhịp sống xanh, máy nông nghiệp cho mùa vụ hiệu quả và điện gia dụng cho ngôi nhà tiện nghi — tất cả đều được chọn lọc, bảo hành và hỗ trợ tận nơi.',
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
    {
      kind: 'appliance',
      anchor: 'appliances',
      imageSrc: HOME_IMAGES.appliance,
      imageAlt: 'Thiết bị điện gia dụng trong ngôi nhà hiện đại',
      eyebrow: 'Tiện nghi mỗi ngày',
      title: 'Điện gia dụng',
      description: 'Thiết bị thiết yếu, tiết kiệm điện và dễ dàng bảo trì.',
      icon: 'home',
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
  mediaPosition: 'left',
  cover: {
    src: HOME_IMAGES.bike,
    caption: 'Xe máy điện và xe đạp điện trong không gian đô thị hiện đại',
    icon: 'electric_moped',
  },
  eyebrow: 'Ngành hàng 01',
  title: 'Xe điện',
  slogan: 'Di chuyển xanh, chủ động mỗi ngày',
  description:
    'Từ xe máy điện, xe đạp điện đến xe tải điện dành cho đi học, đi làm và kinh doanh. Sản phẩm chính hãng, vận hành tiết kiệm và có hệ thống bảo hành trên toàn quốc.',
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
  ],
  priceFrom: 'Từ 9.900.000đ',
  ctaLabel: 'Khám phá xe điện',
};

export const MACHINE_INDUSTRY: IndustryContent = {
  kind: 'machine',
  theme: 'amber',
  anchor: 'agriculture',
  mediaPosition: 'right',
  cover: {
    src: HOME_IMAGES.machine,
    caption: 'Máy nông nghiệp hiện đại trên cánh đồng lúa',
    icon: 'agriculture',
  },
  eyebrow: 'Ngành hàng 02',
  title: 'Máy nông nghiệp',
  slogan: 'Cơ giới hóa để mùa vụ nhẹ hơn',
  description:
    'Máy cày, máy gặt, máy bơm và thiết bị canh tác được chọn theo điều kiện đồng ruộng Việt Nam. Giải pháp bền bỉ giúp tiết kiệm nhân công, thời gian và giảm hao hụt sau thu hoạch.',
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
  ],
  priceFrom: 'Từ 18.500.000đ',
  ctaLabel: 'Khám phá máy nông nghiệp',
};

export const APPLIANCE_INDUSTRY: IndustryContent = {
  kind: 'appliance',
  theme: 'sage',
  anchor: 'appliances',
  mediaPosition: 'left',
  cover: {
    src: HOME_IMAGES.appliance,
    caption: 'Các thiết bị điện gia dụng thiết yếu trong ngôi nhà hiện đại',
    icon: 'home',
  },
  eyebrow: 'Ngành hàng 03',
  title: 'Điện gia dụng',
  slogan: 'Tiện nghi bền lâu cho mọi mái nhà',
  description:
    'Tủ lạnh, máy giặt, quạt điện, nồi cơm và thiết bị điện nước thiết yếu cho gia đình. Chúng tôi ưu tiên sản phẩm dễ sử dụng, tiết kiệm điện và thuận tiện bảo trì lâu dài.',
  highlights: [
    {
      icon: 'bolt',
      title: 'Tiết kiệm điện năng',
      note: 'Thiết bị được chọn theo hiệu suất và nhu cầu sử dụng thực tế.',
    },
    {
      icon: 'verified_user',
      title: 'Chính hãng, bảo hành rõ ràng',
      note: 'Nguồn gốc minh bạch và chính sách hậu mãi đầy đủ.',
    },
    {
      icon: 'local_shipping',
      title: 'Giao lắp tận nhà',
      note: 'Tư vấn vị trí, vận chuyển và lắp đặt an toàn.',
    },
  ],
  priceFrom: 'Giá tốt mỗi ngày',
  ctaLabel: 'Khám phá điện gia dụng',
};

export const HOME_INDUSTRIES: readonly IndustryContent[] = [
  BIKE_INDUSTRY,
  MACHINE_INDUSTRY,
  APPLIANCE_INDUSTRY,
];
