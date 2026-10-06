import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { Subject, of } from 'rxjs';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { ProductLookupOutcome, ProductLookupService } from '../../../shared/qr/product-lookup.service';
import { DEFAULT_HOME_PAGE_CONTENT } from '../../home-content.model';
import { ProductLookupSectionComponent } from './product-lookup-section.component';

describe('ProductLookupSectionComponent', () => {
  let resolve: jasmine.Spy;
  let navigate: jasmine.Spy;
  let scanResult: Subject<string | undefined>;

  async function createFixture(mobile = false) {
    resolve = jasmine.createSpy('resolve').and.returnValue(
      of<ProductLookupOutcome>({ status: 'found', kind: 'machine', id: 'abc-1' }),
    );
    scanResult = new Subject<string | undefined>();
    await TestBed.configureTestingModule({
      imports: [ProductLookupSectionComponent],
      providers: [
        provideRouter([]),
        provideNoopAnimations(),
        provideAppIcons(),
        { provide: ProductLookupService, useValue: { resolve } },
        // QrScannerComponent.open(dialog) gọi dialog.open(...).afterClosed(): thay bằng Subject điều khiển được.
        { provide: MatDialog, useValue: { open: () => ({ afterClosed: () => scanResult }) } },
      ],
    }).compileComponents();
    navigate = spyOn(TestBed.inject(Router), 'navigate').and.resolveTo(true);

    const fixture = TestBed.createComponent(ProductLookupSectionComponent);
    fixture.componentRef.setInput('content', DEFAULT_HOME_PAGE_CONTENT.warranty);
    fixture.componentRef.setInput('mobile', mobile);
    fixture.detectChanges();
    return fixture;
  }

  it('renders only product lookup: no warranty serial/phone form', async () => {
    const fixture = await createFixture();
    const root = fixture.nativeElement as HTMLElement;
    expect(root.querySelector('#product-lookup')).not.toBeNull();
    expect(root.querySelector('[data-action="lookup"]')).toBeNull();
    expect(root.querySelector('[data-warranty-status]')).toBeNull();
    expect(root.textContent).not.toContain('Serial');
    expect(root.querySelector('[data-action="lookup-product"]')).not.toBeNull();
    expect(root.querySelector('[data-action="scan-qr"]')).not.toBeNull();
  });

  it('puts the scan button before the manual form on mobile and inside it on desktop', async () => {
    const mobile = await createFixture(true);
    const mobileRoot = mobile.nativeElement as HTMLElement;
    const form = mobileRoot.querySelector('[data-lookup-form]')!;
    const scan = mobileRoot.querySelector('[data-action="scan-qr"]')!;
    expect(scan.compareDocumentPosition(form) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(form.contains(scan)).toBeFalse();

    TestBed.resetTestingModule();
    const desktop = await createFixture(false);
    const desktopRoot = desktop.nativeElement as HTMLElement;
    expect(
      desktopRoot.querySelector('[data-lookup-form]')!.contains(desktopRoot.querySelector('[data-action="scan-qr"]')),
    ).toBeTrue();
  });

  it('looks up the typed code with the selected kind as a hint and opens the product detail', async () => {
    const fixture = await createFixture();
    const component = fixture.componentInstance;
    component.kind.set('appliance');
    component.code.set('  abc-1 ');
    component.submit();

    expect(resolve).toHaveBeenCalledWith('abc-1', 'appliance');
    expect(navigate).toHaveBeenCalledWith(['/product-detail', 'machine', 'abc-1']);
  });

  it('goes to the category page when only a kind is chosen, and asks for a code otherwise', async () => {
    const fixture = await createFixture();
    const component = fixture.componentInstance;
    component.submit();
    expect(component.state().type).toBe('error');
    expect(resolve).not.toHaveBeenCalled();

    component.kind.set('bike');
    component.submit();
    expect(navigate).toHaveBeenCalledWith(['/xe-dien']);
  });

  it('shows a Vietnamese message when no product matches', async () => {
    const fixture = await createFixture();
    resolve.and.returnValue(of<ProductLookupOutcome>({ status: 'notfound' }));
    fixture.componentInstance.code.set('zzz');
    fixture.componentInstance.submit();
    fixture.detectChanges();

    expect(navigate).not.toHaveBeenCalled();
    expect((fixture.nativeElement as HTMLElement).querySelector('[data-lookup-error]')?.textContent).toContain(
      'Không tìm thấy sản phẩm',
    );
  });

  it('resolves whatever the scanner returns, and ignores a dismissed scanner', async () => {
    const fixture = await createFixture(true);
    fixture.componentInstance.scan();
    scanResult.next(undefined);
    expect(resolve).not.toHaveBeenCalled();

    fixture.componentInstance.scan();
    scanResult.next('abc-1');
    expect(resolve).toHaveBeenCalledWith('abc-1', null);
    expect(fixture.componentInstance.code()).toBe('abc-1');
  });
});
