import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { environment } from '../../../environments/environment';
import { AccountService } from '../../account/account.service';

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzDividerModule,
    NzEmptyModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
    NzPageHeaderModule,
    NzPopconfirmModule,
    NzSelectModule,
    NzSpaceModule,
    NzSwitchModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
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
        background: linear-gradient(135deg, #6366f1, #ec4899);
      }
    `,
  ],
})
export class UserAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NzMessageService);
  private readonly http = inject(HttpClient);
  private readonly accountService = inject(AccountService);

  private readonly baseUrl = environment.apiUrl + 'admin/users';

  readonly rows = signal<AdminUser[]>([]);
  readonly loading = signal(false);
  readonly modalOpen = signal(false);
  readonly saving = signal(false);
  readonly pwdOpen = signal(false);
  readonly pwdSaving = signal(false);
  readonly editing = signal<AdminUser | null>(null);
  readonly editingPwdUser = signal<AdminUser | null>(null);

  readonly search = signal('');
  readonly roleFilter = signal<string | null>(null);
  readonly statusFilter = signal<'all' | 'active' | 'inactive'>('all');

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
    const q = this.search().trim().toLowerCase();
    return this.rows().filter((r) => {
      if (this.roleFilter() && !(r.roles || []).includes(this.roleFilter()!)) return false;
      const used = r.isUsed !== false;
      if (this.statusFilter() === 'active' && !used) return false;
      if (this.statusFilter() === 'inactive' && used) return false;
      if (!q) return true;
      return [r.email, r.displayName, r.phoneNumber || '', (r.roles || []).join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(q);
    });
  }

  loadAll(): void {
    this.loading.set(true);
    this.http.get<AdminUser[]>(this.baseUrl).subscribe({
      next: (v) => this.rows.set(v || []),
      error: (e) => {
        const alt = [
          {
            id: 'seed-1',
            email: this.accountService.currentUser()?.email || 'vanhspc@gmail.com',
            displayName: this.accountService.currentUser()?.displayName || 'Vanh Admin',
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
    this.modalOpen.set(true);
  }

  close(): void {
    this.modalOpen.set(false);
    this.editing.set(null);
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
    if ((raw.password || raw.confirmPassword) && raw.password !== raw.confirmPassword) {
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
      : this.http.put<AdminUser>(`${this.baseUrl}/${this.editing()!.id}`, payload);
    req$.subscribe({
      next: () => {
        this.msg.success(creating ? 'Đã tạo người dùng' : 'Đã cập nhật người dùng');
        this.close();
        this.loadAll();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Lưu thất bại'),
      complete: () => this.saving.set(false),
    });
  }

  openResetPwd(user: AdminUser): void {
    this.editingPwdUser.set(user);
    this.pwdForm.reset({ newPassword: '', confirmPassword: '' });
    this.pwdOpen.set(true);
  }

  closeResetPwd(): void {
    this.pwdOpen.set(false);
    this.editingPwdUser.set(null);
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
      .post(`${this.baseUrl}/${user.id}/reset-password`, { newPassword: raw.newPassword })
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
    this.http.put(`${this.baseUrl}/${record.id}/status`, payload).subscribe({
      next: () => {
        this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã vô hiệu hóa');
        this.loadAll();
      },
      error: () => {
        const full: AdminUser = { ...record, isUsed: next };
        this.http.put(`${this.baseUrl}/${record.id}`, full).subscribe({
          next: () => {
            this.msg.success(next ? 'Đã kích hoạt lại' : 'Đã vô hiệu hóa');
            this.loadAll();
          },
          error: (e2) => this.msg.error(e2?.error?.message || 'Thao tác thất bại'),
        });
      },
    });
  }

  remove(record: AdminUser): void {
    this.http.delete<void>(`${this.baseUrl}/${record.id}`).subscribe({
      next: () => {
        this.msg.success('Đã xóa người dùng');
        this.loadAll();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Xóa thất bại'),
    });
  }

  stats(): { label: string; value: number; color: string }[] {
    const all = this.rows();
    return [
      { label: 'Tổng user', value: all.length, color: 'blue' },
      { label: 'Đang hoạt động', value: all.filter((u) => u.isUsed !== false).length, color: 'green' },
      { label: 'Vô hiệu hóa', value: all.filter((u) => u.isUsed === false).length, color: 'red' },
      { label: 'Admin', value: all.filter((u) => (u.roles || []).includes('Admin')).length, color: 'magenta' },
    ];
  }
}
