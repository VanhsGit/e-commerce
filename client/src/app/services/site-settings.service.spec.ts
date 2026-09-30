import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DEFAULT_SITE_SETTINGS } from '../shared/models/site-settings';
import { SiteSettingsService } from './site-settings.service';

describe('SiteSettingsService', () => {
  let service: SiteSettingsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    service = TestBed.inject(SiteSettingsService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('issues one GET for many subscribers', () => {
    service.getContent().subscribe();
    service.getContent().subscribe();

    const requests = http.match((r) => r.url.endsWith('siteSettings'));
    expect(requests.length).toBe(1);
    requests[0].flush({ content: DEFAULT_SITE_SETTINGS, updatedAt: '2026-01-01T00:00:00Z' });
  });

  it('falls back to defaults on error and retries on the next call', () => {
    let result = null as unknown;
    service.getContent().subscribe((content) => (result = content));
    http.expectOne((r) => r.url.endsWith('siteSettings')).flush('x', { status: 500, statusText: 'err' });
    expect(result).toEqual(DEFAULT_SITE_SETTINGS);

    service.getContent().subscribe();
    http.expectOne((r) => r.url.endsWith('siteSettings')).flush({ content: DEFAULT_SITE_SETTINGS, updatedAt: '' });
  });

  it('falls back to defaults when the shape is unsupported', () => {
    let result = null as unknown;
    service.getContent().subscribe((content) => (result = content));
    http.expectOne((r) => r.url.endsWith('siteSettings')).flush({ content: { version: 1 }, updatedAt: '' });
    expect(result).toEqual(DEFAULT_SITE_SETTINGS);
  });
});
