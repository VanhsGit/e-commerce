import {
  HomePageContent,
  isSupportedHomePageContent,
  resolveHomePageContent,
} from './home-content.model';
import { DEFAULT_HOME_PAGE_CONTENT } from './home-content.test-fixture';

describe('Home page content validation', () => {
  it('does not fill missing fields from client-side sample content', () => {
    const legacy: any = JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
    delete legacy.navigation;

    expect(resolveHomePageContent(legacy)).toBeNull();
  });

  it('accepts more than three solution images and variable recruitment rows', () => {
    const content: HomePageContent = JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
    content.solutions.images.push(...content.solutions.images);
    content.solutions.images[0].kind = 'appliance';
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
  it('describes the supported industries in trust and CTA copy', () => {
    const trustCopy = [
      DEFAULT_HOME_PAGE_CONTENT.commitments.title,
      DEFAULT_HOME_PAGE_CONTENT.commitments.description,
    ].join(' ').toLowerCase();
    const ctaCopy = DEFAULT_HOME_PAGE_CONTENT.cta.description.toLowerCase();

    expect(trustCopy).toContain('xe điện');
    expect(trustCopy).toContain('máy nông nghiệp');
    expect(trustCopy).toContain('hai ngành hàng');
    expect(ctaCopy).toContain('xe điện');
    expect(ctaCopy).toContain('máy nông nghiệp');
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
