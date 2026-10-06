import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SiteSettingsService } from '../../../services/site-settings.service';
import { provideAppIcons } from '../../icons/provide-app-icons';
import { DEFAULT_SITE_SETTINGS, SiteSettings } from '../../models/site-settings';
import { LocationsMapComponent } from './locations-map.component';

describe('LocationsMapComponent', () => {
  let fixture: ComponentFixture<LocationsMapComponent>;

  function setup(content: SiteSettings): void {
    TestBed.configureTestingModule({
      providers: [
        provideAppIcons(),
        { provide: SiteSettingsService, useValue: { getContent: () => of(content) } },
      ],
    });
    fixture = TestBed.createComponent(LocationsMapComponent);
    fixture.detectChanges();
  }

  function clone(): SiteSettings {
    return JSON.parse(JSON.stringify(DEFAULT_SITE_SETTINGS)) as SiteSettings;
  }

  it('renders one card per location and links to Google Maps for the address', () => {
    setup(clone());

    const cards = fixture.nativeElement.querySelectorAll('li');
    expect(cards.length).toBe(2);
    expect(cards[0].textContent).toContain('Cơ sở 1');
    expect(cards[1].textContent).toContain('Phường Phương Lâm');

    const href = cards[0].querySelector('a').getAttribute('href') as string;
    expect(href).toContain('https://www.google.com/maps/search/?api=1&query=');
    expect(href).toContain(encodeURIComponent(DEFAULT_SITE_SETTINGS.locations.items[0].address));
  });

  it('prefers a configured mapUrl and skips locations without an address', () => {
    const content = clone();
    content.locations.items[0].mapUrl = 'https://maps.app.goo.gl/abc';
    content.locations.items[1].address = '  ';
    setup(content);

    const cards = fixture.nativeElement.querySelectorAll('li');
    expect(cards.length).toBe(1);
    expect(cards[0].querySelector('a').getAttribute('href')).toBe('https://maps.app.goo.gl/abc');
  });

  it('hides the whole section when no location has an address', () => {
    const content = clone();
    content.locations.items = [];
    setup(content);

    expect(fixture.nativeElement.querySelector('section')).toBeNull();
  });
});
