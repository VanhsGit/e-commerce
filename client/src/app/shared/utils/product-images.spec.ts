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
});
