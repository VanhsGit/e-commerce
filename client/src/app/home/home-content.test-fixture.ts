import { HOME_HERO, HOME_INDUSTRIES } from './sections/industry-section/industry-content';
import { HomePageContent } from './home-content.model';

export const DEFAULT_HOME_PAGE_CONTENT: HomePageContent = {
  version: 1,
  hero: HOME_HERO,
  navigation: {
    heading: 'Bạn đang quan tâm điều gì?',
    homeLabel: 'Trang chủ',
    recruitmentLabel: 'Tuyển dụng',
  },
  company: {
    eyebrow: 'Về EcoTech',
    title: 'Đồng hành cùng cuộc sống và sản xuất',
    description:
      'EcoTech kết nối các giải pháp xe điện và máy nông nghiệp trong một điểm đến.',
    detail:
      'Từ lựa chọn thiết bị đến sử dụng và bảo dưỡng, chúng tôi hướng đến trải nghiệm thuận tiện, rõ ràng và phù hợp với nhu cầu của từng khách hàng.',
    imageSrc: 'assets/images/home/agricultural-machinery.webp',
    imageAlt: 'Thiết bị nông nghiệp trong hoạt động sản xuất',
    highlights: [
      {
        title: 'Di chuyển',
        description:
          'Xe điện phục vụ học tập, công việc và những hành trình mỗi ngày.',
      },
      {
        title: 'Sản xuất',
        description: 'Thiết bị hỗ trợ canh tác và công việc nông nghiệp.',
      },
      {
        title: 'Hỗ trợ',
        description: 'Dịch vụ tư vấn và hậu mãi tận tâm.',
      },
    ],
  },
  solutions: {
    heading: 'Giải pháp của chúng tôi',
    previousLabel: 'Cuộn ảnh về trước',
    nextLabel: 'Cuộn ảnh tiếp theo',
    images: HOME_HERO.cards.map(({ imageSrc, imageAlt, kind }) => ({
      imageSrc,
      imageAlt,
      kind,
    })),
  },
  recruitment: {
    badge: 'Tuyển dụng',
    heading: 'TUYỂN DỤNG ĐI LÀM NGAY',
    intro:
      'Để mở rộng quy mô hoạt động, công ty chúng tôi cần tuyển gấp nhiều vị trí làm việc.',
    positionsHeading: 'Vị trí cần tuyển',
    benefitsHeading: 'Quyền lợi',
    sitesHeading: 'Địa điểm làm việc',
    applyHeading: 'Cách thức ứng tuyển',
    applyText:
      'Liên hệ trực tiếp qua Hotline để nhận lịch phỏng vấn đi làm ngay.',
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
      'Hỗ trợ chỗ ở, ăn nghỉ đầy đủ',
      'Hỗ trợ dạy nghề chuyên nghiệp',
      'Có đóng Bảo hiểm xã hội theo quy định',
    ],
    sites: [
      {
        label: 'Cơ sở 1',
        address:
          'Xóm Tân Thành, Xã Toàn Thắng, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)',
      },
      {
        label: 'Cơ sở 2',
        address: 'Phường Phương Lâm, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)',
      },
    ],
    hotlines: [
      { display: '0971 456 992', tel: '0971456992' },
      { display: '0919 932 247', tel: '0919932247' },
    ],
  },
  industries: [...HOME_INDUSTRIES],
  commitments: {
    title: 'Hai ngành hàng, một chuẩn an tâm trong từng lựa chọn',
    description:
      'Bốn cam kết xuyên suốt xe điện và máy nông nghiệp — từ nguồn gốc sản phẩm đến dịch vụ sau bán hàng.',
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
    ],
  },
  warranty: {
    badge: 'Dịch vụ hậu mãi',
    heading: 'Tra cứu thông tin bảo hành',
    introduction: 'Kiểm tra thời hạn và thông tin hỗ trợ cho sản phẩm đã mua.',
    warrantyPanelHeading: 'Tra cứu bảo hành',
    warrantyPanelHelp: 'Tra cứu bảo hành bằng Serial hoặc SĐT',
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
      'Dù bạn đang chọn xe điện cho gia đình hay máy nông nghiệp cho mùa vụ, đội ngũ của chúng tôi luôn sẵn sàng tư vấn giải pháp phù hợp, báo giá rõ ràng và hỗ trợ tận tâm.',
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
