import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SiteSettingsService } from '../../../services/site-settings.service';
import { DEFAULT_SITE_SETTINGS, SiteLocationItem } from '../../models/site-settings';

interface LocationCard {
  label: string;
  address: string;
  /** Liên kết mở Google Maps khi bấm vào bản đồ. */
  mapHref: string;
  /** Bản đồ nhúng (không cần API key) dựng từ địa chỉ. */
  embedUrl: SafeResourceUrl;
}

@Component({
  selector: 'cm-locations-map',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './locations-map.component.html',
})
export class LocationsMapComponent {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly site = toSignal(inject(SiteSettingsService).getContent(), {
    initialValue: DEFAULT_SITE_SETTINGS,
  });

  readonly heading = computed(() => this.site().locations.heading);
  readonly directionsLabel = computed(() => this.site().locations.directionsLabel);

  /** Bỏ qua cơ sở chưa có địa chỉ để không nhúng bản đồ rỗng. */
  readonly cards = computed<LocationCard[]>(() =>
    (this.site().locations.items ?? [])
      .filter((item) => (item.address ?? '').trim().length > 0)
      .map((item) => this.toCard(item)),
  );

  private toCard(item: SiteLocationItem): LocationCard {
    const address = item.address.trim();
    const query = encodeURIComponent(address);
    return {
      label: item.label,
      address,
      mapHref: (item.mapUrl ?? '').trim() || `https://www.google.com/maps/search/?api=1&query=${query}`,
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.google.com/maps?q=${query}&hl=vi&z=15&output=embed`,
      ),
    };
  }
}
