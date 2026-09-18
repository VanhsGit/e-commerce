import { CommonModule, KeyValue } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { environment } from '../../../environments/environment';
import { AccountService } from '../../account/account.service';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import {
  AdminDetailListComponent,
  AdminDetailRowComponent,
} from '../shared/detail-list/admin-detail-list.component';
import { AdminEmptyStateComponent } from '../shared/empty-state/admin-empty-state.component';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';

export interface AdminUser {
  id: string | number;
  email: string;
  displayName: string;
  avatarUrl?: string | null;
  phoneNumber?: string | null;
  roles?: string[];
  isUsed: boolean;
  createdAt?: string;
}

const ROLE_OPTIONS: { value: string; label: string; color: string }[] = [
  { value: 'Admin', label: 'Admin', color: 'red' },
  { value: 'Staff', label: 'Nhân viên', color: 'blue' },
  { value: 'Manager', label: 'Quản lý', color: 'purple' },
  { value: 'User', label: 'Khách hàng', color: 'default' },
];

@Component({
  selector: 'app-user-admin-page',
  standalone: true,
  imports: [
    AdminDetailListComponent,
    AdminDetailRowComponent,
    AdminEmptyStateComponent,
    AdminPageHeaderComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RepresentativeImagePickerComponent,
    ImgFallbackDirective,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    NzTableModule,
  ],
  templateUrl: './user-admin-page.component.html',
  styles: [
    `
      .role-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      .avatar-initials {
        background: #f1f5f9;
      }
    `,
  ],
})
export class UserAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly dialog = inject(MatDialog);
  private readonly http = inject(HttpClient);
  private readonly accountService = inject(AccountService);

  @ViewChild('formDialog') private formDialog!: TemplateRef<unknown>;
  @ViewChild('pwdDialog') private pwdDialog!: TemplateRef<unknown>;
  @ViewChild('viewDialog') private viewDialog!: TemplateRef<unknown>;

  private formRef?: MatDialogRef<unknown>;
  private pwdRef?: MatDialogRef<unknown>;
  private viewRef?: MatDialogRef<unknown>;

  private readonly baseUrl = environment.apiUrl + 'admin/users';

  readonly rows = signal<AdminUser[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly pwdSaving = signal(false);
  readonly editing = signal<AdminUser | null>(null);
  readonly editingPwdUser = signal<AdminUser | null>(null);
  readonly viewing = signal<AdminUser | null>(null);

  readonly search = signal('');
  readonly roleFilter = signal<string | null>(null);
  readonly statusFilter = signal<'active' | 'inactive' | null>(null);

  readonly searchDraft = signal('');
  readonly roleDraft = signal<string | null>(null);
  readonly statusDraft = signal<'active' | 'inactive' | null>(null);

  applyFilters(): void {
    this.search.set(this.searchDraft().trim());
    this.roleFilter.set(this.roleDraft() ?? null);
    this.statusFilter.set(this.statusDraft() ?? null);
    const isUsedParam =
      this.statusFilter() === 'active'
        ? true
        : this.statusFilter() === 'inactive'
          ? false
          : null;
    this.loadAll({
      search: this.search(),
      role: this.roleFilter(),
      isUsed: isUsedParam,
    });
  }

  readonly roleOptions = ROLE_OPTIONS;

  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    displayName: ['', Validators.required],
    password: [''],
    confirmPassword: [''],
    phoneNumber: [''],
    avatarUrl: [''],
    roles: [[] as string[]],
    isUsed: [true],
  });

  readonly pwdForm = this.fb.group({
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  ngOnInit(): void {
    this.loadAll();
  }

  roleColor(role: string): string {
    return this.roleOptions.find((r) => r.value === role)?.color || 'default';
  }

  roleLabel(role: string): string {
    return this.roleOptions.find((r) => r.value === role)?.label || role;
  }

  initials(name: string, email: string): string {
    const s = (name || email || 'U').trim();
    const parts = s.split(/\s+/).filter(Boolean);
    const first = parts[0]?.charAt(0) || '';
    const last = parts.length > 1 ? parts[parts.length - 1]?.charAt(0) : '';
    return (first + last).toUpperCase() || 'U';
  }

  filteredRows(): AdminUser[] {
    return this.rows();
  }

  loadAll(params?: {
    search?: string | null;
    role?: string | null;
    isUsed?: boolean | null;
  }): void {
    this.loading.set(true);
    let httpParams = new HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.role) httpParams = httpParams.set('role', params.role);
    if (params?.isUsed !== undefined && params?.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    this.http.get<AdminUser[]>(this.baseUrl, { params: httpParams }).subscribe({
      next: (v) => this.rows.set(v || []),
      error: (e) => {
        const alt = [
          {
            id: 'seed-1',
            email:
              this.accountService.currentUser()?.email || 'vanhspc@gmail.com',
            displayName:
              this.accountService.currentUser()?.displayName || 'Vanh Admin',
            roles: ['Admin'],
            isUsed: true,
            createdAt: new Date().toISOString(),
          },
        ];
        this.rows.set(alt);
        this.msg.warning('Không tải được danh sách user từ API - hiển thị tạm');
        console.error(e);
      },
      complete: () => this.loading.set(false),
    });
  }

  open(record?: AdminUser): void {
    this.editing.set(record ?? null);
    this.form.reset({
      email: record?.email ?? '',
      displayName: record?.displayName ?? '',
      password: '',
      confirmPassword: '',
      phoneNumber: record?.phoneNumber ?? '',
      avatarUrl: record?.avatarUrl ?? '',
      roles: [...(record?.roles ?? [])],
      isUsed: record?.isUsed !== false,
    });
    this.formRef = this.dialog.open(this.formDialog, {
      width: '780px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
    this.formRef.afterClosed().subscribe(() => this.editing.set(null));
  }

  close(): void {
    this.formRef?.close();
  }

  save(): void {
    const raw = this.form.getRawValue();
    if (!raw.email || !raw.displayName) {
      this.form.markAllAsTouched();
      return;
    }
    const creating = !this.editing();
    if (creating && (!raw.password || raw.password.length < 6)) {
      this.msg.error('Mật khẩu tối thiểu 6 ký tự khi tạo user mới');
      return;
    }
    if (
      (raw.password || raw.confirmPassword) &&
      raw.password !== raw.confirmPassword
    ) {
      this.msg.error('Mật khẩu xác nhận không khớp');
      return;
    }
    const payload: Record<string, unknown> = {
      email: raw.email!,
      displayName: raw.displayName!,
      phoneNumber: raw.phoneNumber || null,
      avatarUrl: raw.avatarUrl || null,
      roles: raw.roles || [],
      isUsed: raw.isUsed!,
    };
    if (creating) {
      payload['password'] = raw.password!;
    } else if (raw.password) {
      payload['password'] = raw.password;
    }

    this.saving.set(true);
    const req$ = creating
      ? this.http.post<AdminUser>(this.baseUrl, payload)
      : this.http.put<AdminUser>(
          `${this.baseUrl}/${this.editing()!.id}`,
          payload,
        );
    req$.subscribe({
      next: () => {
        this.msg.success(
          creating ? 'Đã tạo người dùng' : 'Đã cập nhật người dùng',
        );
        this.close();
        const isUsedParam =
          this.statusFilter() === 'active'
            ? true
            : this.statusFilter() === 'inactive'
              ? false
              : null;
        this.loadAll({
          search: this.search(),
          role: this.roleFilter(),
          isUsed: isUsedParam,
        });
      },
      error: (e) => this.msg.error(e?.error?.message || 'Lưu thất bại'),
      complete: () => this.saving.set(false),
    });
  }

  openResetPwd(user: AdminUser): void {
    this.editingPwdUser.set(user);
    this.pwdForm.reset({ newPassword: '', confirmPassword: '' });
    this.pwdRef = this.dialog.open(this.pwdDialog, {
      width: '480px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
    this.pwdRef.afterClosed().subscribe(() => this.editingPwdUser.set(null));
  }

  closeResetPwd(): void {
    this.pwdRef?.close();
  }

  saveResetPwd(): void {
    const raw = this.pwdForm.getRawValue();
    if (!raw.newPassword || raw.newPassword.length < 6) {
      this.msg.error('Mật khẩu tối thiểu 6 ký tự');
      return;
    }
    if (raw.newPassword !== raw.confirmPassword) {
      this.msg.error('Mật khẩu xác nhận không khớp');
      return;
    }
    const user = this.editingPwdUser();
    if (!user) return;
    this.pwdSaving.set(true);
    this.http
      .post(`${this.baseUrl}/${user.id}/reset-password`, {
        newPassword: raw.newPassword,
      })
      .subscribe({
        next: () => {
          this.msg.success('Đổi mật khẩu thành công');
          this.closeResetPwd();
        },
        error: (e) => {
          if (e?.status === 404 || e?.status === 405) {
            this.msg.warning('Endpoint reset-password chưa khả dụng trên API');
            this.closeResetPwd();
            return;
          }
          this.msg.error(e?.error?.message || 'Đổi mật khẩu thất bại');
        },
        complete: () => this.pwdSaving.set(false),
      });
  }

  toggleActive(record: AdminUser): void {
    const next = !!(record.isUsed === false);
    const payload = { isUsed: next };
    const reload = () => {
      const isUsedParam =
        this.statusFilter() === 'active'
          ? true
          : this.statusFilter() === 'inactive'
            ? false
            : null;
      this.loadAll({
        search: this.search(),
        role: this.roleFilter(),
        isUsed: isUsedParam,
      });
    };
    this.http.put(`${this.baseUrl}/${record.id}/status`, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã vô hiệu hóa');
        reload();
      },
      error: () => {
        const full: AdminUser = { ...record, isUsed: next };
        this.http.put(`${this.baseUrl}/${record.id}`, full).subscribe({
          next: () => {
            this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã vô hiệu hóa');
            reload();
          },
          error: (e2) =>
            this.msg.error(e2?.error?.message || 'Thao tác thất bại'),
        });
      },
    });
  }

  remove(record: AdminUser): void {
    this.confirm
      .delete(`Bạn có chắc muốn xóa người dùng "${record.displayName}" không?`)
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.http.delete<void>(`${this.baseUrl}/${record.id}`).subscribe({
          next: () => {
            this.msg.success('Đã xóa người dùng');
            const isUsedParam =
              this.statusFilter() === 'active'
                ? true
                : this.statusFilter() === 'inactive'
                  ? false
                  : null;
            this.loadAll({
              search: this.search(),
              role: this.roleFilter(),
              isUsed: isUsedParam,
            });
          },
          error: (e) => this.msg.error(e?.error?.message || 'Xóa thất bại'),
        });
      });
  }

  viewDetail(record: AdminUser): void {
    this.viewing.set(record);
    this.viewRef = this.dialog.open(this.viewDialog, {
      width: '760px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
    this.viewRef.afterClosed().subscribe(() => this.viewing.set(null));
  }

  closeView(): void {
    this.viewRef?.close();
  }

  trackByKey(_: number, item: KeyValue<string, string>): string {
    return item.key;
  }

  stats(): { label: string; value: number; color: string }[] {
    const all = this.rows();
    return [
      { label: 'Tổng user', value: all.length, color: 'blue' },
      {
        label: 'Đang hoạt động',
        value: all.filter((u) => u.isUsed !== false).length,
        color: 'green',
      },
      {
        label: 'Vô hiệu hóa',
        value: all.filter((u) => u.isUsed === false).length,
        color: 'red',
      },
      {
        label: 'Admin',
        value: all.filter((u) => (u.roles || []).includes('Admin')).length,
        color: 'magenta',
      },
    ];
  }
}
