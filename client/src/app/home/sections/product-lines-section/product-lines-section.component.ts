import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

interface ProductLine {
  key: 'bike' | 'machine';
  eyebrow: string;
  title: string;
  slogan: string;
  description: string;
  image: string;
  imageAlt: string;
  categories: { icon: string; name: string; note: string }[];
  benefits: string[];
  priceFrom: string;
  ctaLabel: string;
  anchor: string;
}

@Component({
  selector: 'app-home-product-lines',
  standalone: true,
  imports: [CommonModule, RouterLink, NzButtonModule],
  templateUrl: './product-lines-section.component.html',
})
export class ProductLinesSectionComponent {
  @Output() navigate = new EventEmitter<string>();

  readonly listingPath = '/products';

  readonly lines: ProductLine[] = [
    {
      key: 'bike',
      eyebrow: 'Ngành hàng 1',
      title: 'Xe điện',
      slogan: 'Đi xa hơn – Chi phí thấp hơn',
      description:
        'Xe máy điện, xe đạp điện và xe tải điện chính hãng cho học sinh, người đi làm và hộ kinh doanh. Chỉ khoảng 3.000đ tiền điện cho mỗi 100km – tiết kiệm đến 80% so với xe chạy xăng.',
      image:
        'https://placehold.co/960x720/10b981/ffffff?text=XE+%C4%90I%E1%BB%86N',
      imageAlt: 'Xe máy điện và xe đạp điện chính hãng',
      categories: [
        { icon: 'fa-motorcycle', name: 'Xe máy điện', note: 'Đi 80 – 120 km/lần sạc' },
        { icon: 'fa-bicycle', name: 'Xe đạp điện', note: 'Gọn nhẹ, hợp học sinh' },
        { icon: 'fa-truck', name: 'Xe tải điện', note: 'Chở hàng 300 – 800 kg' },
        { icon: 'fa-cogs', name: 'Pin & phụ tùng', note: 'Chính hãng, có tem' },
      ],
      benefits: [
        'Bảo hành xe 3 năm, riêng pin lên tới 5 năm',
        'Sạc đầy 4 – 6 giờ, đi được 80 – 120 km',
        'Trả góp 0% lãi suất, duyệt hồ sơ trong ngày',
        'Giao xe và lắp đặt tận nhà trên toàn quốc',
      ],
      priceFrom: 'Từ 9.900.000đ',
      ctaLabel: 'Xem tất cả xe điện',
      anchor: 'bikes',
    },
    {
      key: 'machine',
      eyebrow: 'Ngành hàng 2',
      title: 'Máy nông nghiệp',
      slogan: 'Một máy thay cho cả chục nhân công',
      description:
        'Máy cày, máy gặt đập liên hợp, máy bơm và máy phun thuốc nhập khẩu Nhật Bản – Hàn Quốc. Rút ngắn mùa vụ, giảm tới 70% chi phí thuê nhân công và hao hụt sau thu hoạch.',
      image:
        'https://placehold.co/960x720/f59e0b/ffffff?text=M%C3%81Y+N%C3%94NG+NGHI%E1%BB%86P',
      imageAlt: 'Máy gặt đập liên hợp và máy cày nông nghiệp',
      categories: [
        { icon: 'fa-truck', name: 'Máy cày, máy xới', note: '15 – 90 mã lực' },
        { icon: 'fa-leaf', name: 'Máy gặt đập liên hợp', note: '4 – 6 sào mỗi giờ' },
        { icon: 'fa-tint', name: 'Máy bơm nước', note: 'Bơm xa, bơm sâu' },
        { icon: 'fa-wrench', name: 'Phụ tùng thay thế', note: 'Sẵn kho, giao nhanh' },
      ],
      benefits: [
        'Máy nhập khẩu chính ngạch, đủ giấy tờ CO – CQ',
        'Bảo hành 12 – 24 tháng, kỹ thuật xuống tận ruộng',
        'Kho phụ tùng sẵn hàng, xử lý sự cố trong 24 giờ',
        'Hỗ trợ trả góp theo mùa vụ cho hợp tác xã',
      ],
      priceFrom: 'Từ 18.500.000đ',
      ctaLabel: 'Xem tất cả máy nông nghiệp',
      anchor: 'agriculture',
    },
  ];

  queryParams(kind: 'bike' | 'machine') {
    return { type: kind };
  }
}
