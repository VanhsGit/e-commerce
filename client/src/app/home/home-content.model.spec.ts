import {
  DEFAULT_HOME_PAGE_CONTENT,
  HomePageContent,
  isSupportedHomePageContent,
  resolveHomePageContent,
} from './home-content.model';

describe('Home page content defaults', () => {
  it('upgrades legacy copy and custom images without replacing saved content', () => {
    const legacy: any = JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
    for (const key of ['navigation', 'company', 'solutions', 'recruitment']) delete legacy[key];
    for (const key of ['desktopImageSrc', 'mobileImageSrc', 'contactLabel', 'warrantyLabel']) delete legacy.hero[key];
    legacy.hero.title = 'Công ty đã lưu';
    legacy.hero.cards[0].imageSrc = '/api/content/entity-images/custom.jpg';
    legacy.warranty.introduction = ' ';
    const content = resolveHomePageContent(legacy)!;
    expect(content.hero.title).toBe('Công ty đã lưu');
    expect(content.hero.desktopImageSrc).toBe('/api/content/entity-images/custom.jpg');
    expect(content.solutions.images[0].imageSrc).toBe('/api/content/entity-images/custom.jpg');
    expect(content.company.title).toBeTruthy();
    expect(content.warranty.introduction.trim()).toBeTruthy();
  });

  it('accepts more than three solution images and variable recruitment rows', () => {
    const content: HomePageContent = JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
    content.solutions.images.push(...content.solutions.images);
    content.recruitment.positions.push({ count: 3, title: 'Kỹ thuật viên', note: '' });
    expect(isSupportedHomePageContent(content)).toBeTrue();
    const resolved = resolveHomePageContent(content)!;
    expect(resolved.solutions.images.length).toBe(6);
    expect(resolved.recruitment.positions.length).toBe(9);
  });

  it('rejects malformed new sections, empty galleries and invalid recruitment counts', () => {
    const content: any = JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
    content.solutions.images = [];
    expect(resolveHomePageContent(content)).toBeNull();
    content.solutions = null;
    expect(resolveHomePageContent(content)).toBeNull();
    content.solutions = DEFAULT_HOME_PAGE_CONTENT.solutions;
    content.recruitment.positions[0].count = 1.5;
    expect(resolveHomePageContent(content)).toBeNull();
    expect(resolveHomePageContent({ hero: { cards: 'invalid' } })).toBeNull();
  });
  it('describes all three industries in trust and CTA copy', () => {
    const trustCopy = [
      DEFAULT_HOME_PAGE_CONTENT.commitments.title,
      DEFAULT_HOME_PAGE_CONTENT.commitments.description,
    ].join(' ').toLowerCase();
    const ctaCopy = DEFAULT_HOME_PAGE_CONTENT.cta.description.toLowerCase();

    expect(trustCopy).toContain('xe điện');
    expect(trustCopy).toContain('máy nông nghiệp');
    expect(trustCopy).toContain('điện gia dụng');
    expect(trustCopy).not.toContain('hai ngành hàng');
    expect(ctaCopy).toContain('xe điện');
    expect(ctaCopy).toContain('máy nông nghiệp');
    expect(ctaCopy).toContain('điện gia dụng');
  });

  it('keeps HTTPS image URLs inside the supported editable content shape', () => {
    const content: HomePageContent = JSON.parse(
      JSON.stringify(DEFAULT_HOME_PAGE_CONTENT),
    );
    content.hero.cards[0].imageSrc = 'https://cdn.example.com/hero-bike.jpg';
    content.industries[0].gallery.main.src =
      'https://cdn.example.com/industry-bike.jpg';

    expect(isSupportedHomePageContent(content)).toBeTrue();
    expect(content.hero.cards[0].imageSrc).toBe(
      'https://cdn.example.com/hero-bike.jpg',
    );
    expect(content.industries[0].gallery.main.src).toBe(
      'https://cdn.example.com/industry-bike.jpg',
    );
  });
});
