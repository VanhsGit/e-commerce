import { slugify } from './slugify';

describe('slugify', () => {
  it('strips Vietnamese diacritics', () => {
    expect(slugify('Bản rẻ')).toBe('ban-re');
    expect(slugify('Bản thường')).toBe('ban-thuong');
    expect(slugify('Ắc quy các loại')).toBe('ac-quy-cac-loai');
  });

  it('handles đ/Đ and punctuation', () => {
    expect(slugify('Đầu phun (đầu xịt)')).toBe('dau-phun-dau-xit');
    expect(slugify('Xe CV 1 yên')).toBe('xe-cv-1-yen');
    expect(slugify('  133-12A  ')).toBe('133-12a');
  });

  it('returns empty for blank input', () => {
    expect(slugify('  ')).toBe('');
  });
});
