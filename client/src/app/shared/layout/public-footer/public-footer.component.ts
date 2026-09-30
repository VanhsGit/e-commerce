import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cm-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './public-footer.component.html',
})
export class PublicFooterComponent {
  readonly links = [
    { path: '/', label: 'Trang chủ' },
    { path: '/xe-dien', label: 'Xe điện' },
    { path: '/may-nong-nghiep', label: 'Máy nông nghiệp' },
    { path: '/do-dien', label: 'Đồ điện' },
  ];
}
