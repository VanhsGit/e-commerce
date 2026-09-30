import { ProductKind } from './product-category';

export interface CategoryMetric {
  value: string;
  label: string;
}

export interface CategoryHeroContent {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  metrics: CategoryMetric[];
}

export interface CategoryIntroContent {
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
}

export interface CategoryHighlightItem {
  icon: string;
  accent: string;
  title: string;
  description: string;
}

export interface CategoryImage {
  src: string;
  caption: string;
  label: string;
}

export interface CategoryShowcaseContent {
  heading: string;
  description: string;
  images: CategoryImage[];
}

export interface CategoryCatalogContent {
  heading: string;
  description: string;
  allCategoriesLabel: string;
  allBrandsLabel: string;
  searchPlaceholder: string;
  sortLabel: string;
  emptyTitle: string;
  emptyDescription: string;
  resultSuffixLabel: string;
  detailButtonLabel: string;
  clearFiltersLabel: string;
  priceFromLabel: string;
  priceToLabel: string;
  sortDefaultLabel: string;
  sortPriceAscLabel: string;
  sortPriceDescLabel: string;
  sortNameAscLabel: string;
  sortNewestLabel: string;
}

export interface CategoryBrandsContent {
  heading: string;
  description: string;
}

export interface CategoryFaqItem {
  question: string;
  answer: string;
}

export interface CategoryFaqContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: CategoryFaqItem[];
}

export interface CategoryCtaContent {
  heading: string;
  highlightedHeading: string;
  description: string;
  phone: string;
  phoneButtonLabel: string;
  email: string;
  emailButtonLabel: string;
  note: string;
}

export interface CategoryPageContent {
  version: number;
  kind: ProductKind;
  hero: CategoryHeroContent;
  intro: CategoryIntroContent;
  highlights: CategoryHighlightItem[];
  showcase: CategoryShowcaseContent;
  catalog: CategoryCatalogContent;
  brands: CategoryBrandsContent;
  faq: CategoryFaqContent;
  cta: CategoryCtaContent;
}

export interface CategoryPageContentResponse {
  content: CategoryPageContent;
  updatedAt: string;
}

const COMMON_CTA = {
  phone: '19001234',
  phoneButtonLabel: 'Gọi tư vấn miễn phí',
  email: 'hello@ecotech.vn',
  emailButtonLabel: 'Gửi yêu cầu báo giá',
};

const COMMON_CATALOG = {
  allCategoriesLabel: 'Tất cả danh mục',
  allBrandsLabel: 'Tất cả thương hiệu',
  searchPlaceholder: 'Tìm theo tên, mã, thương hiệu...',
  sortLabel: 'Sắp xếp',
  emptyTitle: 'Chưa có sản phẩm phù hợp',
  emptyDescription:
    'Thử đổi từ khóa, chọn danh mục khác hoặc nới khoảng giá để xem thêm sản phẩm.',
  resultSuffixLabel: 'sản phẩm',
  detailButtonLabel: 'Xem chi tiết',
  clearFiltersLabel: 'Xóa bộ lọc',
  priceFromLabel: 'Giá từ',
  priceToLabel: 'Giá đến',
  sortDefaultLabel: 'Mặc định',
  sortPriceAscLabel: 'Giá thấp đến cao',
  sortPriceDescLabel: 'Giá cao đến thấp',
  sortNameAscLabel: 'Tên A → Z',
  sortNewestLabel: 'Mới nhất',
};

const BIKE: CategoryPageContent = {
  version: 1,
  kind: 'bike',
  hero: {
    badge: 'Xe điện chính hãng',
    title: 'Xe điện cho',
    highlightedTitle: 'mỗi hành trình trong phố',
    description:
      'Dải xe 133-12A và 133-20A với nhiều phiên bản, cùng các dòng XS, Bull, Q1 và CV 1 - 2 yên. Pin bền, chạy êm, có kỹ thuật viên đến tận nhà khi cần.',
    imageSrc: 'assets/images/home/electric-mobility.webp',
    imageAlt: 'Xe điện EcoTech trên phố',
    primaryCtaLabel: 'Xem danh sách xe',
    secondaryCtaLabel: 'Nhận tư vấn',
    metrics: [
      { value: '3 năm', label: 'Bảo hành pin' },
      { value: '0đ', label: 'Phí kiểm tra định kỳ' },
      { value: '63/63', label: 'Tỉnh thành phục vụ' },
    ],
  },
  intro: {
    eyebrow: 'Vì sao chọn xe điện EcoTech',
    heading: 'Di chuyển tiết kiệm, không lo khói bụi và xăng dầu',
    body:
      'Mỗi dòng xe được chọn lọc theo nhu cầu thực tế: đi học, đi làm, chở hàng nhẹ hay chạy dịch vụ. Bạn chỉ cần chọn đúng dòng xe và phiên bản, phần còn lại từ đăng ký, bảo hành đến sửa chữa đã có EcoTech lo.',
    bullets: [
      'Chi phí vận hành chỉ bằng một phần nhỏ so với xe xăng',
      'Nhiều phiên bản rẻ, thường, full cho từng ngân sách',
      'Phụ tùng thay thế sẵn kho, sửa nhanh trong ngày',
      'Hướng dẫn đăng ký và sử dụng tận tình khi nhận xe',
    ],
  },
  highlights: [
    {
      icon: 'battery_charging_full',
      accent: 'sky',
      title: 'Pin bền, đi xa',
      description: 'Pin chính hãng cho quãng đường dài mỗi lần sạc, sạc đầy nhanh trong đêm.',
    },
    {
      icon: 'verified_user',
      accent: 'emerald',
      title: 'Bảo hành 3 năm',
      description: 'Bảo hành pin 3 năm, kiểm tra định kỳ miễn phí tại mọi điểm dịch vụ.',
    },
    {
      icon: 'credit_card',
      accent: 'amber',
      title: 'Trả góp 0%',
      description: 'Mua xe nhẹ nhàng với trả góp lãi suất 0%, thủ tục gọn trong một buổi.',
    },
    {
      icon: 'build',
      accent: 'violet',
      title: 'Kỹ thuật tại nhà',
      description: 'Đội ngũ kỹ thuật đến tận nhà kiểm tra, thay phụ tùng và xử lý sự cố.',
    },
  ],
  showcase: {
    heading: 'Dải xe đa dạng cho mọi lối đi',
    description: 'Từ xe nhỏ gọn đi phố đến dòng chở hàng, luôn có một chiếc phù hợp với bạn.',
    images: [
      {
        src: 'assets/images/home/electric-mobility.webp',
        caption: 'Xe điện đi phố',
        label: 'Đi phố mỗi ngày',
      },
      {
        src: 'assets/images/home/electric-mobility.webp',
        caption: 'Xe điện chở hàng nhẹ',
        label: 'Chở hàng linh hoạt',
      },
      {
        src: 'assets/images/home/electric-mobility.webp',
        caption: 'Dịch vụ kỹ thuật xe điện',
        label: 'Kỹ thuật tận nơi',
      },
    ],
  },
  catalog: {
    heading: 'Chọn xe theo dòng và phiên bản',
    description:
      'Bấm vào dòng xe để xem từng phiên bản bản rẻ, bản thường và bản full, rồi lọc theo thương hiệu hoặc khoảng giá.',
    ...COMMON_CATALOG,
  },
  brands: {
    heading: 'Thương hiệu xe điện đang phân phối',
    description: 'Hàng chính hãng từ các thương hiệu được kiểm định chất lượng.',
  },
  faq: {
    eyebrow: 'Câu hỏi thường gặp',
    heading: 'Giải đáp về xe điện',
    description: 'Những điều khách hàng hay hỏi trước khi chọn xe điện.',
    items: [
      {
        question: 'Mỗi lần sạc xe đi được bao xa?',
        answer:
          'Tùy dòng xe và dung lượng pin, quãng đường dao động khoảng 60 - 120 km mỗi lần sạc đầy trong điều kiện đường phố thông thường.',
      },
      {
        question: 'Sạc đầy pin mất bao lâu?',
        answer:
          'Thông thường từ 6 đến 8 giờ, phù hợp sạc qua đêm. Dòng pin lớn có thể lâu hơn, nhân viên sẽ tư vấn cụ thể khi bạn chọn xe.',
      },
      {
        question: 'Xe điện có cần đăng ký biển số không?',
        answer:
          'Tùy công suất động cơ và tốc độ thiết kế. Cửa hàng hướng dẫn hồ sơ và hỗ trợ làm thủ tục nếu dòng xe của bạn thuộc diện phải đăng ký.',
      },
      {
        question: 'Phân biệt bản rẻ, bản thường và bản full thế nào?',
        answer:
          'Ba phiên bản khác nhau ở dung lượng pin, trang bị và hoàn thiện. Bản rẻ tối ưu chi phí, bản thường cân bằng, bản full có trang bị đầy đủ nhất.',
      },
    ],
  },
  cta: {
    heading: 'Chọn xe điện vừa túi tiền,',
    highlightedHeading: 'nhận tư vấn ngay hôm nay',
    description:
      'Để lại thông tin hoặc gọi trực tiếp, chuyên viên EcoTech sẽ giúp bạn chọn đúng dòng xe, phiên bản và phương án trả góp.',
    ...COMMON_CTA,
    note: 'Phản hồi trong giờ làm việc, hỗ trợ trả góp 0%.',
  },
};

const MACHINE: CategoryPageContent = {
  version: 1,
  kind: 'machine',
  hero: {
    badge: 'Máy nông nghiệp chính hãng',
    title: 'Máy nông nghiệp',
    highlightedTitle: 'bền bỉ qua từng mùa vụ',
    description:
      'Máy cưa, máy cắt cỏ, động cơ nổ chạy xăng và dầu, máy bơm, máy phun và đồ nghề nhà nông, đủ dùng từ vườn nhà đến cánh đồng lớn.',
    imageSrc: 'assets/images/home/agricultural-machinery.webp',
    imageAlt: 'Máy nông nghiệp EcoTech trên cánh đồng',
    primaryCtaLabel: 'Xem danh sách máy',
    secondaryCtaLabel: 'Nhận tư vấn',
    metrics: [
      { value: '14', label: 'Nhóm thiết bị' },
      { value: '24h', label: 'Có mặt kỹ thuật' },
      { value: '12–24 tháng', label: 'Bảo hành' },
    ],
  },
  intro: {
    eyebrow: 'Đồng hành cùng nhà nông',
    heading: 'Máy khỏe, phụ tùng sẵn, sửa chữa kịp thời vụ',
    body:
      'Mùa vụ không chờ ai. EcoTech chọn những dòng máy vận hành ổn định, dễ bảo dưỡng và luôn có phụ tùng thay thế, để máy không nằm chờ khi đồng ruộng cần nhất.',
    bullets: [
      'Máy cưa, máy cắt cỏ, máy sới đất cho công việc vườn rẫy',
      'Động cơ nổ xăng và dầu với nhiều mức công suất',
      'Bơm, bình phun, dây phun, đầu phun đồng bộ',
      'Máy tuốt lúa, máy sát gạo, máy thái chuối cho sau thu hoạch',
    ],
  },
  highlights: [
    {
      icon: 'settings',
      accent: 'amber',
      title: 'Động cơ mạnh mẽ',
      description: 'Công suất thực, vận hành liên tục nhiều giờ, tiết kiệm nhiên liệu.',
    },
    {
      icon: 'handyman',
      accent: 'emerald',
      title: 'Phụ tùng sẵn kho',
      description: 'Lưỡi, dây, bugi, phốt và các chi tiết hao mòn luôn có sẵn để thay.',
    },
    {
      icon: 'verified_user',
      accent: 'sky',
      title: 'Bảo hành 12 - 24 tháng',
      description: 'Bảo hành chính hãng theo từng dòng máy, hỗ trợ tận nơi khi có sự cố.',
    },
    {
      icon: 'headset_mic',
      accent: 'violet',
      title: 'Kỹ thuật 24h',
      description: 'Đường dây kỹ thuật hướng dẫn vận hành, bảo dưỡng và xử lý lỗi nhanh.',
    },
  ],
  showcase: {
    heading: 'Từ vườn nhà đến cánh đồng lớn',
    description: 'Mỗi nhóm máy phục vụ một khâu của mùa vụ, từ làm đất, chăm sóc đến thu hoạch.',
    images: [
      {
        src: 'assets/images/home/agricultural-machinery.webp',
        caption: 'Máy làm đất và chăm sóc cây trồng',
        label: 'Làm đất',
      },
      {
        src: 'assets/images/home/agricultural-machinery.webp',
        caption: 'Bơm và phun tưới',
        label: 'Bơm và phun',
      },
      {
        src: 'assets/images/home/agricultural-machinery.webp',
        caption: 'Máy thu hoạch và chế biến',
        label: 'Sau thu hoạch',
      },
    ],
  },
  catalog: {
    heading: 'Chọn máy theo nhóm thiết bị',
    description:
      'Bấm vào nhóm thiết bị để xem đúng loại máy bạn cần, sau đó lọc theo thương hiệu hoặc khoảng giá.',
    ...COMMON_CATALOG,
  },
  brands: {
    heading: 'Thương hiệu máy đang phân phối',
    description: 'Máy và động cơ chính hãng, có phiếu bảo hành rõ ràng.',
  },
  faq: {
    eyebrow: 'Câu hỏi thường gặp',
    heading: 'Giải đáp về máy nông nghiệp',
    description: 'Những câu hỏi thường gặp khi chọn công suất, bảo dưỡng và phụ tùng.',
    items: [
      {
        question: 'Làm sao chọn công suất máy phù hợp?',
        answer:
          'Công suất phụ thuộc diện tích và loại công việc. Gọi tổng đài, kỹ thuật viên sẽ hỏi nhu cầu và đề xuất dòng máy đủ dùng, không tốn chi phí thừa.',
      },
      {
        question: 'Phụ tùng hao mòn có sẵn để thay không?',
        answer:
          'Các chi tiết thường hao mòn như lưỡi cắt, dây cưa, bugi, lọc gió, phốt luôn được dự trữ theo từng dòng máy đang bán.',
      },
      {
        question: 'Bao lâu cần bảo dưỡng máy một lần?',
        answer:
          'Nên vệ sinh lọc gió và thay nhớt sau mỗi 25 - 50 giờ hoạt động, kiểm tra tổng thể mỗi mùa vụ. EcoTech có dịch vụ bảo dưỡng định kỳ.',
      },
      {
        question: 'Cửa hàng phân phối những thương hiệu nào?',
        answer:
          'Danh sách thương hiệu được cập nhật ngay trên trang này. Tất cả đều là hàng chính hãng, có nguồn gốc và phiếu bảo hành.',
      },
    ],
  },
  cta: {
    heading: 'Cần máy cho mùa vụ tới?',
    highlightedHeading: 'Để chúng tôi tư vấn đúng loại',
    description:
      'Cho chúng tôi biết diện tích và công việc, đội ngũ EcoTech sẽ đề xuất máy phù hợp kèm báo giá rõ ràng.',
    ...COMMON_CTA,
    note: 'Hỗ trợ giao hàng và hướng dẫn vận hành tận nơi.',
  },
};

const APPLIANCE: CategoryPageContent = {
  version: 1,
  kind: 'appliance',
  hero: {
    badge: 'Điện cơ chính hãng',
    title: 'Điện cơ dân dụng',
    highlightedTitle: 'cho ngôi nhà và công trình',
    description:
      'Máy rửa xe, dụng cụ cầm tay, máy xây dựng, mô tơ, máy bơm và ắc quy các loại, bền, an toàn, dễ thay thế và bảo hành rõ ràng.',
    imageSrc: 'assets/images/home/home-appliances.webp',
    imageAlt: 'Thiết bị điện cơ dân dụng EcoTech',
    primaryCtaLabel: 'Xem danh sách sản phẩm',
    secondaryCtaLabel: 'Nhận tư vấn',
    metrics: [
      { value: '6', label: 'Nhóm sản phẩm' },
      { value: '100%', label: 'Hàng chính hãng' },
      { value: '7 ngày', label: 'Đổi mới nếu lỗi' },
    ],
  },
  intro: {
    eyebrow: 'Thiết bị thiết yếu mỗi ngày',
    heading: 'Đủ đồ nghề cho gia đình, xưởng nhỏ và công trình',
    body:
      'Từ chiếc máy rửa xe trước nhà đến mô tơ, máy bơm cho xưởng, mọi sản phẩm đều được chọn theo độ bền và sự an toàn khi dùng lâu dài.',
    bullets: [
      'Máy rửa xe áp lực phù hợp gia đình và tiệm rửa',
      'Dụng cụ cầm tay và máy xây dựng cho thợ chuyên nghiệp',
      'Mô tơ, máy bơm nhiều công suất, lắp đặt dễ',
      'Ắc quy các loại, dung lượng đúng thông số ghi trên nhãn',
    ],
  },
  highlights: [
    {
      icon: 'bolt',
      accent: 'violet',
      title: 'Công suất thực',
      description: 'Thông số công suất công bố rõ ràng, đo thực tế trước khi giao.',
    },
    {
      icon: 'verified',
      accent: 'sky',
      title: 'Chính hãng 100%',
      description: 'Nguồn gốc minh bạch, có tem và phiếu bảo hành của nhà sản xuất.',
    },
    {
      icon: 'refresh',
      accent: 'emerald',
      title: 'Đổi mới trong 7 ngày',
      description: 'Sản phẩm lỗi do nhà sản xuất được đổi mới trong 7 ngày đầu.',
    },
    {
      icon: 'local_shipping',
      accent: 'amber',
      title: 'Giao nhanh toàn quốc',
      description: 'Đóng gói chắc chắn, giao tận nơi và hỗ trợ lắp đặt khi cần.',
    },
  ],
  showcase: {
    heading: 'Thiết bị cho mọi góc việc',
    description: 'Mỗi sản phẩm đều hướng tới một việc cụ thể: rửa, sửa, bơm, xây hay cấp điện.',
    images: [
      {
        src: 'assets/images/home/home-appliances.webp',
        caption: 'Máy rửa xe và dụng cụ gia đình',
        label: 'Gia đình',
      },
      {
        src: 'assets/images/home/home-appliances.webp',
        caption: 'Dụng cụ cầm tay và máy xây dựng',
        label: 'Công trình',
      },
      {
        src: 'assets/images/home/home-appliances.webp',
        caption: 'Mô tơ, máy bơm và ắc quy',
        label: 'Điện cơ',
      },
    ],
  },
  catalog: {
    heading: 'Chọn sản phẩm theo nhóm',
    description:
      'Chọn nhóm sản phẩm bạn quan tâm, sau đó lọc theo thương hiệu, từ khóa hoặc khoảng giá.',
    ...COMMON_CATALOG,
  },
  brands: {
    heading: 'Thương hiệu điện cơ đang phân phối',
    description: 'Thiết bị chính hãng từ các thương hiệu uy tín trên thị trường.',
  },
  faq: {
    eyebrow: 'Câu hỏi thường gặp',
    heading: 'Giải đáp về đồ điện',
    description: 'Những câu hỏi thường gặp khi chọn công suất, mô tơ, ắc quy và bảo hành.',
    items: [
      {
        question: 'Máy rửa xe công suất bao nhiêu là đủ dùng?',
        answer:
          'Gia đình thường dùng loại 1.400 - 2.200 W. Tiệm rửa xe nên chọn loại công suất lớn, chạy liên tục. Gọi tổng đài để được tư vấn theo nhu cầu.',
      },
      {
        question: 'Làm sao chọn mô tơ phù hợp?',
        answer:
          'Cần biết công suất tải, điện áp sử dụng (1 pha hoặc 3 pha) và tốc độ vòng quay. Gửi các thông số này, kỹ thuật viên sẽ gợi ý mô tơ phù hợp.',
      },
      {
        question: 'Chọn ắc quy thế nào cho đúng?',
        answer:
          'Đối chiếu điện áp và dung lượng Ah với thiết bị đang dùng, kích thước ngăn chứa. Bạn có thể gửi ảnh ắc quy cũ để chúng tôi tìm loại thay thế.',
      },
      {
        question: 'Chính sách bảo hành như thế nào?',
        answer:
          'Mỗi sản phẩm có phiếu bảo hành theo thời hạn của nhà sản xuất, đổi mới trong 7 ngày nếu lỗi kỹ thuật. Chi tiết xem trên phiếu khi nhận hàng.',
      },
    ],
  },
  cta: {
    heading: 'Chưa rõ nên chọn loại nào?',
    highlightedHeading: 'Gọi ngay để được tư vấn',
    description:
      'Mô tả công việc bạn cần làm, đội ngũ EcoTech sẽ chọn giúp thiết bị đúng công suất và đúng ngân sách.',
    ...COMMON_CTA,
    note: 'Hỗ trợ xuất hóa đơn và giao hàng toàn quốc.',
  },
};

export const DEFAULT_CATEGORY_PAGE_CONTENT: Record<ProductKind, CategoryPageContent> = {
  bike: BIKE,
  machine: MACHINE,
  appliance: APPLIANCE,
};

/** Kiểm tra JSON từ API có đủ shape như mặc định (mọi chuỗi không rỗng, mảng đủ số phần tử). */
export function isSupportedCategoryPageContent(
  kind: ProductKind,
  value: unknown,
): value is CategoryPageContent {
  if (!hasRequiredShape(value, DEFAULT_CATEGORY_PAGE_CONTENT[kind])) return false;
  const content = value as CategoryPageContent;
  return content.version === 1 && content.kind === kind;
}

function hasRequiredShape(value: unknown, template: unknown): boolean {
  if (Array.isArray(template)) {
    return (
      Array.isArray(value) &&
      value.length === template.length &&
      template.every((item, index) => hasRequiredShape(value[index], item))
    );
  }

  if (template !== null && typeof template === 'object') {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
    const record = value as Record<string, unknown>;
    return Object.entries(template).every(([key, item]) => hasRequiredShape(record[key], item));
  }

  if (typeof template === 'string') return typeof value === 'string' && value.trim().length > 0;
  return typeof value === typeof template;
}
