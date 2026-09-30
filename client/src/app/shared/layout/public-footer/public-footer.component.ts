import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SiteSettingsService } from '../../../services/site-settings.service';
import { DEFAULT_SITE_SETTINGS } from '../../models/site-settings';

@Component({
  selector: 'cm-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './public-footer.component.html',
})
export class PublicFooterComponent {
  readonly site = toSignal(inject(SiteSettingsService).getContent(), {
    initialValue: DEFAULT_SITE_SETTINGS,
  });

  readonly links = [
    { path: '/', label: 'Trang chủ' },
    { path: '/xe-dien', label: 'Xe điện' },
    { path: '/may-nong-nghiep', label: 'Máy nông nghiệp' },
    { path: '/do-dien', label: 'Đồ điện' },
  ];
}
