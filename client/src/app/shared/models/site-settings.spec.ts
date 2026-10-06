import { DEFAULT_SITE_SETTINGS, SiteSettings, isSupportedSiteSettings } from './site-settings';

describe('isSupportedSiteSettings', () => {
  const clone = (): SiteSettings => JSON.parse(JSON.stringify(DEFAULT_SITE_SETTINGS)) as SiteSettings;

  it('accepts the defaults, including empty optional links', () => {
    expect(isSupportedSiteSettings(clone())).toBeTrue();
  });

  it('rejects a missing section, an empty required string or a wrong version', () => {
    const missing = clone() as unknown as Record<string, unknown>;
    delete missing['footer'];
    expect(isSupportedSiteSettings(missing)).toBeFalse();

    const empty = clone();
    empty.contact.email = ' ';
    expect(isSupportedSiteSettings(empty)).toBeFalse();

    const version = clone();
    version.version = 2;
    expect(isSupportedSiteSettings(version)).toBeFalse();
  });

  it('accepts locations with an empty list or a blank mapUrl, rejects a blank address', () => {
    const empty = clone();
    empty.locations.items = [];
    expect(isSupportedSiteSettings(empty)).toBeTrue();

    const blankMapUrl = clone();
    blankMapUrl.locations.items[0].mapUrl = '';
    expect(isSupportedSiteSettings(blankMapUrl)).toBeTrue();

    const blankAddress = clone();
    blankAddress.locations.items[0].address = ' ';
    expect(isSupportedSiteSettings(blankAddress)).toBeFalse();

    const notAnArray = clone() as unknown as Record<string, Record<string, unknown>>;
    notAnArray['locations']['items'] = 'x';
    expect(isSupportedSiteSettings(notAnArray)).toBeFalse();
  });
});
