import { TestBed } from '@angular/core/testing';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home-content.model';
import { CtaSectionComponent } from './cta-section.component';

describe('CtaSectionComponent', () => {
  it('renders an editable contact finale for all three industries', async () => {
    await TestBed.configureTestingModule({
      imports: [CtaSectionComponent],
      providers: [provideAppIcons()],
    }).compileComponents();

    const content = DEFAULT_HOME_PAGE_CONTENT.cta;
    const fixture = TestBed.createComponent(CtaSectionComponent);
    fixture.componentRef.setInput('content', content);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('[data-home-cta]')).not.toBeNull();
    expect(getComputedStyle(element.querySelector('h2')!).color).toBe('rgb(248, 250, 252)');
    expect(element.querySelector<HTMLAnchorElement>('[data-contact="phone"]')?.getAttribute('href'))
      .toBe(`tel:${content.phone}`);
    expect(element.querySelector<HTMLAnchorElement>('[data-contact="email"]')?.getAttribute('href'))
      .toBe(`mailto:${content.email}`);
    expect(element.querySelectorAll('[data-contact-detail]').length).toBe(3);

    const copy = element.textContent?.toLocaleLowerCase('vi') ?? '';
    expect(copy).toContain('xe điện');
    expect(copy).toContain('máy nông nghiệp');
    expect(copy).toContain('điện gia dụng');
  });
});
