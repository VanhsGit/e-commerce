import { FormArray, FormBuilder } from '@angular/forms';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home/home-content.model';
import { createHomeContentForm, readHomeContentForm } from './home-content-form';

describe('Home content form', () => {
  it('keeps solution categories editable while preserving industry system fields', () => {
    const content = cloneDefault();
    content.solutions = { heading: 'Giải pháp', previousLabel: 'Trước', nextLabel: 'Sau', images: [{ imageSrc: '/assets/photo.webp', imageAlt: 'Ảnh', kind: 'bike' }] };
    const form = createHomeContentForm(new FormBuilder(), content);
    expect(form.get('solutions.images.0.kind')!.enabled).toBeTrue();
    expect(form.get('industries.0.kind')!.disabled).toBeTrue();
    form.get('solutions.images.0.kind')!.setValue('unknown');
    expect(form.get('solutions.images.0.kind')!.invalid).toBeTrue();
  });

  it('validates dynamic lists, image paths, positive integer counts and phones while allowing an empty note', () => {
    const content = cloneDefault();
    content.solutions = { heading: 'Giải pháp', previousLabel: 'Trước', nextLabel: 'Sau', images: [{ imageSrc: 'javascript:alert(1)', imageAlt: 'Ảnh', kind: 'bike' }] };
    content.recruitment = { positions: [{ count: 1, title: 'Kỹ thuật', note: '' }], benefits: ['Phụ cấp'], sites: [{ label: 'Cơ sở', address: 'Hà Nội' }], hotlines: [{ display: 'Gọi', tel: '+84912345678' }] };
    const form = createHomeContentForm(new FormBuilder(), content);
    expect(form.get('recruitment.positions.0.note')!.valid).toBeTrue();
    expect(form.get('solutions.images.0.imageSrc')!.invalid).toBeTrue();
    form.get('recruitment.positions.0.count')!.setValue(1.5);
    expect(form.get('recruitment.positions.0.count')!.invalid).toBeTrue();
    form.get('recruitment.positions.0.count')!.setValue(0);
    expect(form.get('recruitment.positions.0.count')!.invalid).toBeTrue();
    form.get('recruitment.hotlines.0.tel')!.setValue('call-me');
    expect(form.get('recruitment.hotlines.0.tel')!.invalid).toBeTrue();
    (form.get('solutions.images') as FormArray).clear();
    (form.get('recruitment.benefits') as FormArray).clear();
    expect(form.get('solutions.images')!.invalid).toBeTrue();
    expect(form.get('recruitment.benefits')!.invalid).toBeTrue();
  });

  it('accepts existing local asset, API, content and web image sources', () => {
    const content = cloneDefault();
    content.solutions = { images: [{ imageSrc: '/assets/photo.webp', imageAlt: 'Ảnh', kind: 'bike' }] };
    const form = createHomeContentForm(new FormBuilder(), content);
    const source = form.get('solutions.images.0.imageSrc')!;
    for (const path of ['assets/images/photo.webp', '/assets/photo.webp', '/api/entity-images/1', '/content/entity-images/photo.webp', '/uploads/custom.jpg', '/unknown/photo.webp', 'https://images.example.com/photo.webp', 'http://localhost/photo.webp']) {
      source.setValue(path);
      expect(source.valid).withContext(path).toBeTrue();
    }
    for (const path of ['', 'javascript:alert(1)', '//external.example/photo', '/assets/../private/photo']) {
      source.setValue(path);
      expect(source.invalid).withContext(path).toBeTrue();
    }
  });

  it('keeps saved root-path images valid in legacy cards, new backgrounds, company and solutions', () => {
    const content = cloneDefault();
    content.hero.cards[0].imageSrc = '/uploads/custom.jpg';
    content.hero.desktopImageSrc = '/uploads/custom.jpg';
    content.hero.mobileImageSrc = '/uploads/mobile.jpg';
    content.company.imageSrc = '/uploads/company.jpg';
    content.solutions.images[0].imageSrc = '/uploads/solution.jpg';
    const form = createHomeContentForm(new FormBuilder(), content);
    expect(form.valid).toBeTrue();
    expect(readHomeContentForm(form).hero.cards[0].imageSrc).toBe('/uploads/custom.jpg');
  });

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
