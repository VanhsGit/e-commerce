import { TestBed } from '@angular/core/testing';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { RecruitmentSectionComponent } from './recruitment-section.component';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home-content.model';

describe('RecruitmentSectionComponent', () => {
  it('renders saved recruitment copy, lists and hotline instead of fixed text', async () => {
    await TestBed.configureTestingModule({ imports: [RecruitmentSectionComponent], providers: [provideAppIcons()] }).compileComponents();
    const fixture = TestBed.createComponent(RecruitmentSectionComponent);
    fixture.componentRef.setInput('content', {
      ...DEFAULT_HOME_PAGE_CONTENT.recruitment,
      heading: 'Tuyển kỹ thuật viên', positionsHeading: 'Cơ hội nghề nghiệp',
      positions: [{ count: 3, title: 'Kỹ thuật viên', note: '' }],
      hotlines: [{ display: '0900 123 456', tel: '0900123456' }],
    });
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Tuyển kỹ thuật viên');
    expect(element.textContent).toContain('Cơ hội nghề nghiệp');
    expect(element.querySelectorAll('[data-recruitment-position]').length).toBe(1);
    expect(element.querySelector('[data-recruitment-hotline]')?.getAttribute('href')).toBe('tel:0900123456');
  });
  it('renders positions, benefits, sites and hotline links', async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitmentSectionComponent],
      providers: [provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(RecruitmentSectionComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('section#recruitment')).not.toBeNull();
    expect(element.querySelector('[data-home-recruitment]')).not.toBeNull();
    expect(element.querySelectorAll('[data-recruitment-position]').length).toBe(8);
    expect(element.querySelectorAll('[data-recruitment-benefit]').length).toBe(4);
    expect(element.querySelectorAll('[data-recruitment-site]').length).toBe(2);

    const hrefs = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('[data-recruitment-hotline]'),
    ).map((link) => link.getAttribute('href'));
    expect(hrefs).toEqual(['tel:0971456992', 'tel:0919932247']);

    const copy = element.textContent ?? '';
    expect(copy).toContain('TUYỂN DỤNG ĐI LÀM NGAY');
    expect(copy).toContain('ECOTECH');
  });
});
