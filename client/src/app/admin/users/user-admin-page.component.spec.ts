import { HttpClient } from '@angular/common/http';
import { ComponentRef, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { AccountService } from '../../account/account.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';
import { AdminUser, UserAdminPageComponent } from './user-admin-page.component';

describe('UserAdminPageComponent layout', () => {
  const user: AdminUser = {
    id: 'user-1', email: 'admin@example.com', displayName: 'Quản trị viên',
    phoneNumber: '0900000000', roles: ['Admin'], isUsed: true, createdAt: '2026-01-01',
  };

  let dialogHost: HTMLElement;
  let activeView: EmbeddedViewRef<unknown> | null;

  beforeEach(() => {
    dialogHost = document.createElement('div');
    dialogHost.className = 'dialog-test-host';
    document.body.appendChild(dialogHost);
    activeView = null;

    const dialog = {
      open: (template: TemplateRef<unknown>) => {
        activeView?.destroy();
        dialogHost.replaceChildren();
        activeView = template.createEmbeddedView(null);
        activeView.detectChanges();
        dialogHost.append(...activeView.rootNodes);
        return {
          afterClosed: () => of(null),
          close: () => {
            activeView?.destroy();
            activeView = null;
            dialogHost.replaceChildren();
          },
        };
      },
    };

    TestBed.configureTestingModule({
      imports: [UserAdminPageComponent],
      providers: [
        provideNoopAnimations(),
        { provide: HttpClient, useValue: { get: () => of([user]) } },
        { provide: AccountService, useValue: {} },
        { provide: NotifyService, useValue: { success: () => {}, error: () => {} } },
        { provide: ConfirmService, useValue: { delete: () => of(false) } },
        { provide: MatDialog, useValue: dialog },
      ],
    });
    TestBed.overrideProvider(MatDialog, { useValue: dialog });
    TestBed.overrideComponent(RepresentativeImagePickerComponent, { set: { template: '' } });
    spyOn(TestBed.inject(MatIconRegistry), 'getNamedSvgIcon').and.callFake(() =>
      of(document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
    );
  });

  afterEach(() => {
    activeView?.destroy();
    dialogHost.remove();
  });

  function createFixture(): ComponentRef<UserAdminPageComponent> {
    const fixture = TestBed.createComponent(UserAdminPageComponent);
    fixture.detectChanges();
    return fixture.componentRef;
  }

  it('uses the shared gutter and preserves four user row actions', () => {
    const componentRef = createFixture();
    const root = componentRef.location.nativeElement as HTMLElement;
    const row = root.querySelector('tbody tr.ant-table-row');

    expect(root.querySelector('.admin-page-content')).not.toBeNull();
    expect(row?.querySelectorAll('.admin-action-btn').length).toBe(4);
  });

  it('keeps the empty state when no users are available', () => {
    const componentRef = createFixture();
    componentRef.instance.rows.set([]);
    componentRef.changeDetectorRef.detectChanges();

    expect(componentRef.location.nativeElement.querySelector('app-admin-empty-state')).not.toBeNull();
  });

  it('uses spacious sections for edit, password reset, and detail dialogs', () => {
    const componentRef = createFixture();
    const component = componentRef.instance;

    component.open(user);
    expect(dialogHost.querySelectorAll('.admin-dialog-section').length).toBeGreaterThanOrEqual(2);
    component.close();

    component.openResetPwd(user);
    expect(dialogHost.querySelector('.admin-dialog-section')).not.toBeNull();
    component.closeResetPwd();

    component.viewDetail(user);
    expect(dialogHost.querySelector('.admin-detail-hero')).not.toBeNull();
    expect(dialogHost.querySelector('.admin-dialog-section')).not.toBeNull();
    component.closeView();
  });
});
