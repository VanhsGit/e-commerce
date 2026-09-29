import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home-content.model';
import { WarrantySectionComponent } from './warranty-section.component';

describe('WarrantySectionComponent', () => {
  async function createFixture(result: any = null, submitted = false) {
    await TestBed.configureTestingModule({
      imports: [WarrantySectionComponent],
      providers: [provideRouter([]), provideNoopAnimations(), provideAppIcons()],
    }).compileComponents();

    const fixture = TestBed.createComponent(WarrantySectionComponent);
    fixture.componentRef.setInput('content', DEFAULT_HOME_PAGE_CONTENT.warranty);
    fixture.componentRef.setInput('serial', 'VF-E200-882134');
    fixture.componentRef.setInput('phone', '0901123456');
    fixture.componentRef.setInput('result', result);
    fixture.componentRef.setInput('submitted', submitted);
    fixture.componentRef.setInput('lookupKind', 'bike');
    fixture.componentRef.setInput('lookupProductId', 'bike-1');
    fixture.detectChanges();
    return fixture;
  }

  it('keeps both lookup modes and emits their actions from one service bridge', async () => {
    const fixture = await createFixture(
      { status: 'notfound', message: 'Không tìm thấy sản phẩm.' },
      true,
    );
    const component = fixture.componentInstance;
    spyOn(component.lookup, 'emit');
    spyOn(component.lookupProduct, 'emit');
    spyOn(component.reset, 'emit');
    spyOn(component.browseAll, 'emit');

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('[data-warranty-bridge]')).not.toBeNull();
    expect(element.querySelectorAll('[data-lookup-mode]').length).toBe(2);

    element.querySelector<HTMLButtonElement>('[data-action="lookup"]')?.click();
    element.querySelector<HTMLButtonElement>('[data-action="lookup-product"]')?.click();
    element.querySelector<HTMLButtonElement>('[data-action="reset"]')?.click();
    element.querySelector<HTMLButtonElement>('[data-action="browse-all"]')?.click();

    expect(component.lookup.emit).toHaveBeenCalledTimes(1);
    expect(component.lookupProduct.emit).toHaveBeenCalledTimes(1);
    expect(component.reset.emit).toHaveBeenCalledTimes(1);
    expect(component.browseAll.emit).toHaveBeenCalledTimes(1);
    expect(component.browseAll.emit).toHaveBeenCalledWith('all');
  });

  it('renders active, expired and not-found lookup states distinctly', async () => {
    const consoleError = spyOn(console, 'error');
    const fixture = await createFixture();
    const states = [
      { status: 'active', message: 'Còn bảo hành', record: { productName: 'Xe điện A', serialNumber: 'A1', warrantyEndDate: new Date(), serviceCenter: 'Trung tâm A', servicePhone: '1900' } },
      { status: 'expired', message: 'Đã hết hạn', record: { productName: 'Máy A', serialNumber: 'M1', warrantyEndDate: new Date(), serviceCenter: 'Trung tâm B', servicePhone: '1901' } },
      { status: 'notfound', message: 'Không tìm thấy' },
    ];

    for (const state of states) {
      fixture.componentRef.setInput('submitted', true);
      fixture.componentRef.setInput('result', state);
      fixture.detectChanges();
      expect(
        (fixture.nativeElement as HTMLElement).querySelector(
          `[data-warranty-status="${state.status}"]`,
        ),
      ).withContext(state.status).not.toBeNull();
    }

    expect(consoleError).not.toHaveBeenCalled();
  });
});
