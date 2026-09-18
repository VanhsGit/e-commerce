import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Commitment {
  icon: string;
  title: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-home-commitments',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './commitments-section.component.html',
})
export class CommitmentsSectionComponent {
  readonly commitments: Commitment[] = [
    {
      icon: 'workspace_premium',
      title: 'Chính hãng 100%',
      description:
        'Nhập khẩu trực tiếp, đầy đủ hóa đơn VAT, tem chống giả và giấy tờ CO – CQ.',
      accent: 'bg-emerald-500',
    },
    {
      icon: 'verified_user',
      title: 'Bảo hành rõ ràng',
      description:
        'Xe điện 3 năm, máy nông nghiệp 12 – 24 tháng. Tra cứu bảo hành online bằng số serial.',
      accent: 'bg-sky-500',
    },
    {
      icon: 'build',
      title: 'Kỹ thuật tới tận nơi',
      description:
        'Đội kỹ thuật có mặt trong 24 giờ, sửa chữa tại nhà và tại ruộng trên toàn quốc.',
      accent: 'bg-amber-500',
    },
    {
      icon: 'credit_card',
      title: 'Trả góp 0% lãi suất',
      description:
        'Duyệt hồ sơ trong ngày, trả trước từ 20%, hỗ trợ trả theo mùa vụ cho hợp tác xã.',
      accent: 'bg-violet-500',
    },
  ];
}
