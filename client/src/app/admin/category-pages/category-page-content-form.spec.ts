import { FormBuilder } from '@angular/forms';
import { DEFAULT_CATEGORY_PAGE_CONTENT } from '../../shared/models/category-page-content';
import { createCategoryPageForm, readCategoryPageForm } from './category-page-content-form';

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
