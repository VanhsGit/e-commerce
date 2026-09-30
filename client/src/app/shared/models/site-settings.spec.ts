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
});
