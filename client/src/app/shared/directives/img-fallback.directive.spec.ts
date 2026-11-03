import { ElementRef } from '@angular/core';
import { ImgFallbackDirective } from './img-fallback.directive';

describe('ImgFallbackDirective', () => {
  it('routes a legacy media path through the API proxy', () => {
    const image = document.createElement('img');
    const directive = new ImgFallbackDirective(new ElementRef(image));
    directive.src = '/content/entity-images/library/legacy.jpg';

    directive.ngOnInit();

    expect(image.src).toBe(
      `${window.location.origin}/api/content/entity-images/library/legacy.jpg`,
    );
  });

  it('replaces a localhost media URL with the production API proxy path', () => {
    const image = document.createElement('img');
    const directive = new ImgFallbackDirective(new ElementRef(image));
    directive.src =
      'https://localhost:5001/content/entity-images/library/legacy.jpg';

    directive.ngOnInit();

    expect(image.src).toBe(
      `${window.location.origin}/api/content/entity-images/library/legacy.jpg`,
    );
  });

  it('rewrites an absolute managed image URL on a different port to the current host', () => {
    const image = document.createElement('img');
    const directive = new ImgFallbackDirective(new ElementRef(image));
    directive.src =
      'https://ecotechpro.vn:5001/api/content/entity-images/library/2026/11/0123456789abcdef0123456789abcdef/image.webp';
    directive.useThumbnail = true;

    directive.ngOnInit();

    expect(image.src).toBe(
      `${window.location.origin}/api/content/entity-images/library/2026/11/0123456789abcdef0123456789abcdef/thumbnail.webp`,
    );
  });

  it('does not rewrite external image URLs', () => {
    const image = document.createElement('img');
    const directive = new ImgFallbackDirective(new ElementRef(image));
    directive.src = 'https://cdn.example/images/product.webp';

    directive.ngOnInit();

    expect(image.src).toBe('https://cdn.example/images/product.webp');
  });
});
