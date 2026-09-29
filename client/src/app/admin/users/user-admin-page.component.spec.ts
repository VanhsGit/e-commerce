import { HttpClient } from '@angular/common/http';
import { ComponentRef, EmbeddedViewRef, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
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
        {
          provide: ConfirmService,
          useValue: { delete: () => of(false), open: () => of(false) },
        },
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

  it('uses the shared gutter and preserves the user row actions', () => {
    const componentRef = createFixture();
    const root = componentRef.location.nativeElement as HTMLElement;
    const row = root.querySelector('tbody tr.ant-table-row');

    expect(root.querySelector('.admin-page-content')).not.toBeNull();
    expect(row?.querySelectorAll('.admin-action-btn').length).toBe(2);
    expect(row?.querySelectorAll('.admin-action-btn.view').length).toBe(1);
    expect(row?.querySelector('.admin-action-btn.edit')).not.toBeNull();
    expect(row?.querySelector('.admin-action-btn.delete')).toBeNull();
  });

  it('shows one merged "Người dùng" column instead of separate STT/Avatar/Email columns', () => {
    const componentRef = createFixture();
    const root = componentRef.location.nativeElement as HTMLElement;
    const headers = Array.from(root.querySelectorAll('thead th')).map((th) =>
      th.textContent?.trim(),
    );

    expect(headers).toEqual([
      'Người dùng',
      'Số điện thoại',
      'Vai trò',
      'Trạng thái',
      'Thao tác',
    ]);
    expect(root.querySelector('tbody tr .cell-link')?.textContent?.trim()).toBe(
      user.displayName,
    );
    expect(root.textContent).not.toContain('Tạo:');
  });

  it('auto-applies the search filter after a debounce, with no "Tìm kiếm" button', fakeAsync(() => {
    const componentRef = createFixture();
    const root = componentRef.location.nativeElement as HTMLElement;

    expect(
      Array.from(root.querySelectorAll('button')).some((b) =>
        b.textContent?.includes('Tìm kiếm'),
      ),
    ).toBeFalse();

    const applySpy = spyOn(componentRef.instance, 'applyFilters').and.callThrough();
    componentRef.instance.onSearchChange('vanh');
    expect(applySpy).not.toHaveBeenCalled();

    tick(299);
    expect(applySpy).not.toHaveBeenCalled();

    tick(1);
    expect(applySpy).toHaveBeenCalledTimes(1);
    expect(componentRef.instance.search()).toBe('vanh');
  }));

  it('applies role/status filters immediately, without debounce', () => {
    const componentRef = createFixture();
    const applySpy = spyOn(componentRef.instance, 'applyFilters').and.callThrough();

    componentRef.instance.onRoleChange('Admin');
    expect(applySpy).toHaveBeenCalledTimes(1);
    expect(componentRef.instance.roleFilter()).toBe('Admin');

    componentRef.instance.onStatusChange('active');
    expect(applySpy).toHaveBeenCalledTimes(2);
    expect(componentRef.instance.statusFilter()).toBe('active');
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
    expect(dialogHost.querySelectorAll('.admin-dialog-section__title').length).toBe(2);
    component.close();

    component.openResetPwd(user);
    expect(dialogHost.querySelector('.admin-dialog-section')).not.toBeNull();
    component.closeResetPwd();

    component.viewDetail(user);
    expect(dialogHost.querySelector('.admin-detail-hero')).not.toBeNull();
    expect(dialogHost.querySelector('.admin-dialog-section')).not.toBeNull();
    component.closeView();
  });

  it('shows one short one-line password hint and no separate role hint text', () => {
    const componentRef = createFixture();
    const component = componentRef.instance;

    component.open();
    const text = dialogHost.textContent ?? '';
    expect(text).toContain('≥ 6 ký tự, có chữ thường và số');
    expect(text).not.toContain('Admin: toàn quyền');
    component.close();
  });

  it('shows the active-account toggle with a single label ("Hoạt động")', () => {
    const componentRef = createFixture();
    const component = componentRef.instance;

    component.open();
    const toggleLabel = dialogHost.querySelector('mat-slide-toggle')?.textContent?.trim();
    expect(toggleLabel).toBe('Hoạt động');
    expect(dialogHost.textContent).not.toContain('Tài khoản đang hoạt động');
    expect(dialogHost.textContent).not.toContain('Tài khoản đã bị vô hiệu');
    component.close();
  });

  it('shows the avatar section title once (no duplicate "Ảnh đại diện" label)', () => {
    const componentRef = createFixture();
    const component = componentRef.instance;

    component.open();
    const occurrences = (dialogHost.textContent?.match(/Ảnh đại diện/g) || []).length;
    expect(occurrences).toBe(1);
    component.close();
  });
});
