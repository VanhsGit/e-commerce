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
});
