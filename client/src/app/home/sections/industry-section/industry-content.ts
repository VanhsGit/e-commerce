import { IndustryContent } from './industry-section.model';

/** Nội dung giới thiệu ngành hàng xe điện trên trang chủ. */
export const BIKE_INDUSTRY: IndustryContent = {
  kind: 'bike',
  theme: 'sky',
  anchor: 'bikes',
  eyebrow: 'Ngành hàng 1',
  title: 'Xe điện',
  slogan: 'Đi xa hơn – Chi phí thấp hơn',
  description:
    'Xe máy điện, xe đạp điện và xe tải điện chính hãng cho học sinh, người đi làm và hộ kinh doanh. Chỉ khoảng 3.000đ tiền điện cho mỗi 100km – tiết kiệm đến 80% so với xe chạy xăng. Tất cả đều có tem, có hóa đơn và được bảo hành tại hơn 100 đại lý trên toàn quốc.',
  image: 'https://placehold.co/1600x720/0ea5e9/ffffff?text=XE+%C4%90I%E1%BB%86N',
  imageAlt: 'Xe máy điện và xe đạp điện chính hãng',
  groups: [
    { icon: 'two_wheeler', name: 'Xe máy điện', note: 'Đi 80 – 120 km mỗi lần sạc' },
    { icon: 'pedal_bike', name: 'Xe đạp điện', note: 'Gọn nhẹ, hợp học sinh' },
    { icon: 'local_shipping', name: 'Xe tải điện', note: 'Chở hàng 300 – 800 kg' },
    { icon: 'settings', name: 'Pin & phụ tùng', note: 'Chính hãng, có tem' },
  ],
  highlights: [
    {
      icon: 'battery_charging_full',
      title: 'Đi 80 – 120 km mỗi lần sạc',
      note: 'Sạc đầy 4 – 6 giờ, khoảng 3.000đ tiền điện cho 100 km.',
    },
    {
      icon: 'verified_user',
      title: 'Bảo hành xe 3 năm',
      note: 'Riêng pin lithium bảo hành tới 5 năm hoặc 30.000 km.',
    },
    {
      icon: 'credit_card',
      title: 'Trả góp 0% lãi suất',
      note: 'Trả trước từ 20%, duyệt hồ sơ và nhận xe ngay trong ngày.',
    },
    {
      icon: 'local_shipping',
      title: 'Giao lắp tận nhà',
      note: 'Miễn phí giao xe nội thành, hỗ trợ vận chuyển 63 tỉnh thành.',
    },
  ],
  priceFrom: 'Từ 9.900.000đ',
  ctaLabel: 'Xem tất cả xe điện',
  statLabel: 'Mẫu xe đang bán',
  statIcon: 'electric_moped',
  brandsLabel: 'Thương hiệu xe điện đang phân phối',
};

/** Nội dung giới thiệu ngành hàng máy nông nghiệp trên trang chủ. */
export const MACHINE_INDUSTRY: IndustryContent = {
  kind: 'machine',
  theme: 'amber',
  anchor: 'agriculture',
  eyebrow: 'Ngành hàng 2',
  title: 'Máy nông nghiệp',
  slogan: 'Một máy thay cho cả chục nhân công',
  description:
    'Máy cày, máy gặt đập liên hợp, máy bơm và máy phun thuốc nhập khẩu Nhật Bản – Hàn Quốc. Một máy gặt thay cho cả chục nhân công, thu hoạch 4 – 6 sào mỗi giờ, rút ngắn mùa vụ và giảm rõ rệt hao hụt sau thu hoạch.',
  image:
    'https://placehold.co/1600x720/f59e0b/ffffff?text=M%C3%81Y+N%C3%94NG+NGHI%E1%BB%86P',
  imageAlt: 'Máy gặt đập liên hợp và máy cày nông nghiệp',
  groups: [
    { icon: 'agriculture', name: 'Máy cày, máy xới', note: '15 – 90 mã lực' },
    { icon: 'eco', name: 'Máy gặt đập liên hợp', note: '4 – 6 sào mỗi giờ' },
    { icon: 'water_drop', name: 'Máy bơm nước', note: 'Bơm xa, bơm sâu' },
    { icon: 'build', name: 'Phụ tùng thay thế', note: 'Sẵn kho, giao nhanh' },
  ],
  highlights: [
    {
      icon: 'schedule',
      title: 'Gặt 4 – 6 sào mỗi giờ',
      note: 'Rút ngắn mùa vụ, giảm tới 70% chi phí thuê nhân công.',
    },
    {
      icon: 'workspace_premium',
      title: 'Nhập khẩu chính ngạch',
      note: 'Máy Nhật Bản – Hàn Quốc, đầy đủ giấy tờ CO – CQ và hóa đơn VAT.',
    },
    {
      icon: 'handyman',
      title: 'Kỹ thuật xuống tận ruộng',
      note: 'Xử lý sự cố trong 24 giờ, kho phụ tùng luôn sẵn hàng.',
    },
    {
      icon: 'handshake',
      title: 'Trả góp theo mùa vụ',
      note: 'Chính sách riêng cho hợp tác xã và hộ canh tác diện tích lớn.',
    },
  ],
  priceFrom: 'Từ 18.500.000đ',
  ctaLabel: 'Xem tất cả máy nông nghiệp',
  statLabel: 'Máy đang bán',
  statIcon: 'agriculture',
  brandsLabel: 'Thương hiệu máy nông nghiệp đang phân phối',
};
