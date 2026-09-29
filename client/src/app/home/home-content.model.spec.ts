import {
  DEFAULT_HOME_PAGE_CONTENT,
  HomePageContent,
  isSupportedHomePageContent,
} from './home-content.model';

describe('Home page content defaults', () => {
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
