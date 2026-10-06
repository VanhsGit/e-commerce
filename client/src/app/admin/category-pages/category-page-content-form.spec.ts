import { FormBuilder } from '@angular/forms';
import { DEFAULT_CATEGORY_PAGE_CONTENT } from '../../shared/models/category-page-content';
import { DEFAULT_SITE_SETTINGS } from '../../shared/models/site-settings';
import {
  createCategoryPageForm,
  createSiteLocationGroup,
  createSiteSettingsForm,
  readCategoryPageForm,
  readSiteSettingsForm,
} from './category-page-content-form';

describe('category page content form', () => {
  const fb = new FormBuilder();

  it('round-trips the default content including system fields', () => {
    const content = DEFAULT_CATEGORY_PAGE_CONTENT.bike;
    const form = createCategoryPageForm(fb, content);

    expect(form.valid).toBeTrue();
    expect(readCategoryPageForm(form)).toEqual(content);
    expect(form.get('kind')?.disabled).toBeTrue();
    expect(form.get('highlights.0.icon')?.disabled).toBeTrue();
  });

  it('validates cta email and phone', () => {
    const form = createCategoryPageForm(fb, DEFAULT_CATEGORY_PAGE_CONTENT.machine);
    form.get('cta.email')?.setValue('khong-hop-le');
    form.get('cta.phone')?.setValue('abc');

    expect(form.get('cta.email')?.invalid).toBeTrue();
    expect(form.get('cta.phone')?.invalid).toBeTrue();

    form.get('cta.email')?.setValue('hello@ecotech.vn');
    form.get('cta.phone')?.setValue('19001234');
    expect(form.get('cta')?.valid).toBeTrue();
  });

  it('requires every other string', () => {
    const form = createCategoryPageForm(fb, DEFAULT_CATEGORY_PAGE_CONTENT.appliance);
    form.get('hero.title')?.setValue('');
    form.get('intro.bullets.0')?.setValue('');

    expect(form.get('hero.title')?.invalid).toBeTrue();
    expect(form.get('intro.bullets.0')?.invalid).toBeTrue();
  });
});

describe('site settings form', () => {
  const fb = new FormBuilder();

  it('round-trips the defaults including the locations list', () => {
    const form = createSiteSettingsForm(fb, DEFAULT_SITE_SETTINGS);

    expect(form.valid).toBeTrue();
    expect(readSiteSettingsForm(form)).toEqual(DEFAULT_SITE_SETTINGS);
    expect(form.get('locations.items.1.address')?.value).toBe(
      DEFAULT_SITE_SETTINGS.locations.items[1].address,
    );
  });

  it('requires label and address of a location but leaves mapUrl optional', () => {
    const form = createSiteSettingsForm(fb, DEFAULT_SITE_SETTINGS);
    form.get('locations.items.0.mapUrl')?.setValue('');
    expect(form.get('locations.items.0.mapUrl')?.valid).toBeTrue();

    form.get('locations.items.0.mapUrl')?.setValue('maps.google.com');
    expect(form.get('locations.items.0.mapUrl')?.invalid).toBeTrue();

    form.get('locations.items.0.mapUrl')?.setValue('https://maps.app.goo.gl/abc');
    form.get('locations.items.0.address')?.setValue('');
    expect(form.get('locations.items.0.address')?.invalid).toBeTrue();
  });

  it('builds an empty, invalid-until-filled location row', () => {
    const group = createSiteLocationGroup(fb, 2);

    expect(group.invalid).toBeTrue();
    expect(group.get('mapUrl')?.valid).toBeTrue();
    group.get('label')?.setValue('Cơ sở 3');
    group.get('address')?.setValue('Phường X, Tỉnh Y');
    expect(group.valid).toBeTrue();
  });
});
