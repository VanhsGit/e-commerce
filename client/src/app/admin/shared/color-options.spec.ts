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
      .toEqual([{ name: 'Xanh', hexCode: '', imageUrl: '', imageUrls: [] }]);
  });

  it('ignores hidden legacy hex on otherwise empty rows and preserves hex on named colours', () => {
    const rows = [
      { name: 'Đỏ', hexCode: '#b91c1c', imageUrl: '/red.jpg' },
      { name: '  ', hexCode: '#fff', imageUrl: '', imageUrls: [] },
    ];
    expect(validateColorOptions(rows)).toBeNull();
    expect(cleanColorOptions(rows)).toEqual([
      { name: 'Đỏ', hexCode: '#b91c1c', imageUrl: '/red.jpg', imageUrls: ['/red.jpg'] },
    ]);
    expect(validateColorOptions([{ name: 'Đỏ', hexCode: 'red', imageUrl: '' }])).toBeNull();
    expect(validateColorOptions([{ name: '', hexCode: '', imageUrl: '' }])).toBeNull();
  });

  it('requires a name when an unnamed colour has a legacy photo, even with hidden hex', () => {
    expect(validateColorOptions([{ name: '  ', hexCode: '#fff', imageUrl: '/white.jpg' }])).toContain('tên');
  });

  it('keeps all colour images in order and upgrades a legacy single image', () => {
    const cleaned = cleanColorOptions([
      { name: ' Đỏ ', hexCode: '', imageUrl: 'old.jpg', imageUrls: [' front.jpg ', '', 'back.jpg', 'front.jpg'] },
      { name: 'Xanh', hexCode: '', imageUrl: ' blue.jpg ' },
    ]);
    expect(cleaned[0]).toEqual({ name: 'Đỏ', hexCode: '', imageUrl: 'front.jpg', imageUrls: ['front.jpg', 'back.jpg'] });
    expect(cleaned[1].imageUrls).toEqual(['blue.jpg']);
    expect(validateColorOptions([{ name: '', hexCode: '', imageUrl: '', imageUrls: ['front.jpg'] }])).toContain('tên');
  });
});
