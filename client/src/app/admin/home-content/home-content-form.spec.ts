import { FormBuilder } from '@angular/forms';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home/home-content.model';
import { createHomeContentForm, readHomeContentForm } from './home-content-form';

describe('Home content form', () => {
  it('preserves every fixed list and industry order', () => {
    const form = createHomeContentForm(new FormBuilder(), cloneDefault());
    const value = readHomeContentForm(form);

    expect(form.contains('hero')).toBeTrue();
    expect(form.contains('industries')).toBeTrue();
    expect(form.contains('commitments')).toBeTrue();
    expect(form.contains('warranty')).toBeTrue();
    expect(form.contains('cta')).toBeTrue();
    expect(value.hero.cards.length).toBe(3);
    expect(value.hero.metrics.length).toBe(3);
    expect(value.industries.map((item) => item.kind)).toEqual(['bike', 'machine', 'appliance']);
    expect(value.industries.map((item) => item.gallery.secondary.length)).toEqual([2, 3, 4]);
    expect(value.commitments.items.length).toBe(4);
  });

  it('round-trips edited copy and images without changing system fields', () => {
    const form = createHomeContentForm(new FormBuilder(), cloneDefault());
    form.get('hero.title')!.setValue('Tiêu đề mới');
    form.get('industries.0.gallery.main.src')!.setValue('/content/entity-images/new.webp');

    const value = readHomeContentForm(form);

    expect(value.hero.title).toBe('Tiêu đề mới');
    expect(value.industries[0].gallery.main.src).toBe('/content/entity-images/new.webp');
    expect(value.industries[0].kind).toBe('bike');
    expect(value.industries[0].theme).toBe('sky');
    expect(value.industries[0].highlights[0].icon).toBe(DEFAULT_HOME_PAGE_CONTENT.industries[0].highlights[0].icon);
  });

  it('validates required text, email and phone', () => {
    const form = createHomeContentForm(new FormBuilder(), cloneDefault());
    form.get('hero.title')!.setValue('');
    form.get('cta.email')!.setValue('not-an-email');
    form.get('cta.phone')!.setValue('call-me');

    expect(form.get('hero.title')!.hasError('required')).toBeTrue();
    expect(form.get('cta.email')!.hasError('email')).toBeTrue();
    expect(form.get('cta.phone')!.hasError('pattern')).toBeTrue();
    expect(form.invalid).toBeTrue();
  });
});

function cloneDefault() {
  return JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
}
