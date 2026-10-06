import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { AgriculturalMachineAdminPageComponent } from './agricultural-machine-admin-page.component';

/** Đếm request thật khi mở trang, và kiểm tra loading có tắt sau khi API trả về. */
describe('AgriculturalMachineAdminPageComponent qua HTTP thật', () => {
  let backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AgriculturalMachineAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: NotifyService, useValue: { success: () => {}, error: () => {} } },
        { provide: ConfirmService, useValue: { delete: () => of(false) } },
        { provide: MatDialog, useValue: { open: () => ({ afterClosed: () => of(null) }) } },
      ],
    });
    backend = TestBed.inject(HttpTestingController);
    spyOn(TestBed.inject(MatIconRegistry), 'getNamedSvgIcon').and.callFake(() =>
      of(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
    );
  });

  it('cho biết mở trang gọi những request nào', () => {
    const fixture = TestBed.createComponent(AgriculturalMachineAdminPageComponent);
    fixture.detectChanges();

    const urls = backend.match(() => true).map((r) => r.request.urlWithParams);
    // In ra để đọc trong log test.
    console.log('REQUESTS ON OPEN:', JSON.stringify(urls, null, 2));
    expect(urls.length).toBeGreaterThan(0);
  });

  it('tắt loading sau khi mọi request trả về', () => {
    const fixture = TestBed.createComponent(AgriculturalMachineAdminPageComponent);
    fixture.detectChanges();

    for (const r of backend.match(() => true)) r.flush([]);
    fixture.detectChanges();

    const leftover = backend.match(() => true);
    console.log('REQUESTS SAU KHI FLUSH:', JSON.stringify(leftover.map((r) => r.request.urlWithParams)));
    for (const r of leftover) r.flush([]);
    fixture.detectChanges();

    expect(fixture.componentInstance.loading()).toBeFalse();
  });
});
