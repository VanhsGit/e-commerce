import { TestBed } from '@angular/core/testing';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home-content.model';
import { CommitmentsSectionComponent } from './commitments-section.component';

describe('CommitmentsSectionComponent', () => {
  it('renders the four commitments as one trust finale', async () => {
    await TestBed.configureTestingModule({
      imports: [CommitmentsSectionComponent],
      providers: [provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(CommitmentsSectionComponent);
    fixture.componentRef.setInput('content', DEFAULT_HOME_PAGE_CONTENT.commitments);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('[data-trust-finale]')).not.toBeNull();
    expect(element.querySelectorAll('[data-commitment-seal]').length).toBe(4);
    expect(getComputedStyle(element.querySelector('h2')!).color).toBe('rgb(248, 250, 252)');
    expect(getComputedStyle(element.querySelector('h3')!).color).toBe('rgb(248, 250, 252)');

    for (const item of DEFAULT_HOME_PAGE_CONTENT.commitments.items) {
      expect(element.textContent).toContain(item.title);
      expect(element.textContent).toContain(item.description);
    }
  });
});
