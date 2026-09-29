import {
  HOME_HERO,
  HOME_INDUSTRIES,
  HomeHeroContent,
} from './sections/industry-section/industry-content';
import { IndustryContent } from './sections/industry-section/industry-section.model';

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
  industries: [...HOME_INDUSTRIES],
  commitments: {
    title: 'Mua xe điện hay máy nông nghiệp, bạn luôn được đảm bảo',
    description: 'Bốn cam kết áp dụng cho mọi đơn hàng, ở cả hai ngành hàng.',
    items: [
      { icon: 'workspace_premium', accent: 'bg-emerald-500', title: 'Chính hãng 100%', description: 'Nhập khẩu trực tiếp, đầy đủ hóa đơn VAT, tem chống giả và giấy tờ CO – CQ.' },
      { icon: 'verified_user', accent: 'bg-sky-500', title: 'Bảo hành rõ ràng', description: 'Xe điện 3 năm, máy nông nghiệp 12 – 24 tháng. Tra cứu bảo hành online bằng số serial.' },
      { icon: 'build', accent: 'bg-amber-500', title: 'Kỹ thuật tới tận nơi', description: 'Đội kỹ thuật có mặt trong 24 giờ, sửa chữa tại nhà và tại ruộng trên toàn quốc.' },
      { icon: 'credit_card', accent: 'bg-violet-500', title: 'Trả góp 0% lãi suất', description: 'Duyệt hồ sơ trong ngày, trả trước từ 20%, hỗ trợ trả theo mùa vụ cho hợp tác xã.' },
    ],
  },
  warranty: {
    badge: 'Dịch vụ hậu mãi',
    heading: 'Tra cứu thông tin bảo hành',
    introduction: 'Nhập Số Serial sản phẩm (in trên tem bảo hành / khung xe) hoặc Số điện thoại đã mua hàng để kiểm tra trạng thái bảo hành, trung tâm sửa chữa và các lợi ích của bạn.',
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
    description: 'Từ việc chọn mẫu xe điện phù hợp gia đình đến giải pháp máy móc cho diện tích ruộng rộng – hãy liên hệ để được tư vấn miễn phí, báo giá chi tiết và ưu đãi tốt nhất.',
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
