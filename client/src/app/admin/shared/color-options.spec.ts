import { cleanColorOptions, isValidHex, validateColorOptions } from './color-options';

describe('color options helpers', () => {
  it('validates hex codes', () => {
    expect(isValidHex('#b91c1c')).toBeTrue();
    expect(isValidHex('#fff')).toBeTrue();
    expect(isValidHex('b91c1c')).toBeFalse();
    expect(isValidHex('#zzzzzz')).toBeFalse();
  });

  it('drops rows without a name', () => {
    expect(cleanColorOptions([{ name: '', hexCode: '', imageUrl: '' }, { name: 'Xanh', hexCode: '', imageUrl: '' }]))
      .toEqual([{ name: 'Xanh', hexCode: '', imageUrl: '' }]);
  });

  it('reports rows that would silently lose data', () => {
    expect(validateColorOptions([{ name: '', hexCode: '#fff', imageUrl: '' }])).toContain('tên');
    expect(validateColorOptions([{ name: 'Đỏ', hexCode: 'red', imageUrl: '' }])).toContain('không hợp lệ');
    expect(validateColorOptions([{ name: '', hexCode: '', imageUrl: '' }])).toBeNull();
  });
});
