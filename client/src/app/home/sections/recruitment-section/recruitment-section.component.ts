import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface RecruitmentPosition {
  count: number;
  title: string;
  note?: string;
}

interface RecruitmentSite {
  label: string;
  address: string;
}

interface RecruitmentHotline {
  display: string;
  tel: string;
}

@Component({
  selector: 'app-home-recruitment',
  standalone: true,
  host: { class: 'block' },
  imports: [MatIconModule],
  templateUrl: './recruitment-section.component.html',
})
export class RecruitmentSectionComponent {
  readonly heading = 'TUYỂN DỤNG ĐI LÀM NGAY';
  readonly intro =
    'Để mở rộng quy mô hoạt động, công ty chúng tôi cần tuyển gấp nhiều vị trí làm việc.';

  readonly positions: readonly RecruitmentPosition[] = [
    { count: 15, title: 'Nhân viên Lắp ráp', note: 'Nam/Nữ' },
    { count: 1, title: 'Kế toán Nội bộ' },
    { count: 1, title: 'Kế toán Thuế' },
    { count: 1, title: 'Kế toán Tổng hợp' },
    { count: 2, title: 'Quản lý Kho' },
    { count: 2, title: 'Lái xe', note: 'Yêu cầu bằng C' },
    { count: 5, title: 'Nhân viên Sale' },
    { count: 2, title: 'Nhân viên Chăm sóc khách hàng' },
  ];

  readonly benefits: readonly string[] = [
    'Chế độ lương & thỏa thuận thu nhập hấp dẫn (đầy đủ trợ cấp, phụ cấp mở rộng)',
    'Hỗ trợ chỗ ở, ăn nghỉ đầy đủ',
    'Hỗ trợ dạy nghề chuyên nghiệp',
    'Có đóng Bảo hiểm xã hội theo quy định',
  ];

  readonly sites: readonly RecruitmentSite[] = [
    {
      label: 'Cơ sở 1',
      address: 'Xóm Tân Thành, Xã Toàn Thắng, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)',
    },
    {
      label: 'Cơ sở 2',
      address: 'Phường Phương Lâm, Tỉnh Phú Thọ (Tỉnh Hòa Bình Cũ)',
    },
  ];

  readonly applyText =
    'Liên hệ trực tiếp qua Hotline để nhận lịch phỏng vấn đi làm ngay.';

  readonly hotlines: readonly RecruitmentHotline[] = [
    { display: '0971 456 992', tel: '0971456992' },
    { display: '0919 932 247', tel: '0919932247' },
  ];

  readonly closing = 'Hãy gọi ngay hôm nay để trở thành một phần của gia đình ECOTECH!';
}
