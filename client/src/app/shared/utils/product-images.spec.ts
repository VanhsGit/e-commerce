import { colorGallery, productGallery, productImage } from './product-images';

describe('product colour galleries', () => {
  it('uses new images in order with legacy single-image support', () => {
    const product = { colors: [
      { imageUrl: 'old-red.jpg', imageUrls: [' red-front.jpg ', 'red-back.jpg', 'red-front.jpg'] },
      { imageUrl: 'blue.jpg' },
      { imageUrl: '', imageUrls: [] },
    ] };
    expect(productGallery(product)).toEqual(['red-front.jpg', 'red-back.jpg', 'blue.jpg']);
    expect(productImage(product)).toBe('red-front.jpg');
    expect(colorGallery({ imageUrl: 'legacy.jpg', imageUrls: [] })).toEqual(['legacy.jpg']);
  });

  it('prefers the selected representative image and keeps it first in the gallery', () => {
    const product = {
      pictureUrl: ' selected-cover.jpg ',
      colors: [{ imageUrls: ['red-front.jpg', 'red-back.jpg'] }],
    };

    expect(productImage(product)).toBe('selected-cover.jpg');
    expect(productGallery(product)).toEqual([
      'selected-cover.jpg',
      'red-front.jpg',
      'red-back.jpg',
    ]);
  });
});
