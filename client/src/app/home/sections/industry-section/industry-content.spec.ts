import {
  APPLIANCE_INDUSTRY,
  BIKE_INDUSTRY,
  HOME_HERO,
  HOME_INDUSTRIES,
  MACHINE_INDUSTRY,
} from './industry-content';

describe('home industry content', () => {
  it('defines exactly the three supported home industries', () => {
    expect(HOME_INDUSTRIES).toEqual([
      BIKE_INDUSTRY,
      MACHINE_INDUSTRY,
      APPLIANCE_INDUSTRY,
    ]);
    expect(HOME_INDUSTRIES.map((industry) => industry.kind)).toEqual([
      'bike',
      'machine',
      'appliance',
    ]);
  });

  it('uses local artwork for every industry', () => {
    for (const industry of HOME_INDUSTRIES) {
      const gallery = (industry as any).gallery;
      expect(gallery?.main?.src).toMatch(/^assets\/images\/home\//);
      expect(gallery?.secondary?.length).toBeGreaterThanOrEqual(2);
      expect(
        gallery?.secondary?.every((image: { src: string }) =>
          image.src.startsWith('assets/images/home/'),
        ),
      ).toBeTrue();
    }
  });

  it('assigns a distinct gallery layout to each industry', () => {
    expect(HOME_INDUSTRIES.map((industry: any) => industry.galleryLayout)).toEqual([
      'kinetic',
      'field',
      'constellation',
    ]);
  });

  it('keeps editable hero copy and imagery in the same content configuration', () => {
    expect(HOME_HERO.cards.length).toBe(3);
    expect(HOME_HERO.cards.map((card) => card.kind)).toEqual([
      'bike',
      'machine',
      'appliance',
    ]);
    expect(HOME_HERO.cards.every((card) => Boolean(card.imageSrc))).toBeTrue();
  });

  it('provides substantial editable content for every industry', () => {
    for (const industry of HOME_INDUSTRIES as readonly any[]) {
      expect(industry.detail.length).toBeGreaterThan(80);
      expect(industry.categories.length).toBeGreaterThanOrEqual(3);
      expect(industry.highlights.length).toBe(4);
      expect(industry.service.title.length).toBeGreaterThan(0);
      expect(industry.service.note.length).toBeGreaterThan(0);
    }
  });
});
