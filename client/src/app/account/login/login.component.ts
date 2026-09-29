import { AccountService } from './../account.service';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CmInputComponent } from '../../shared/components/cm-input/cm-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    NzButtonModule,
    NzInputModule,
    CmInputComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy {
  mode: 'password' | 'otp' = 'password';

  email = '';
  password = '';
  showPassword = false;

  code = '';
  step: 'email' | 'otp' = 'email';
  cooldown = 0;

  loading = false;
  private timer?: ReturnType<typeof setInterval>;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private messages: NzMessageService,
  ) {}

  switchMode(mode: 'password' | 'otp'): void {
    if (this.mode === mode || this.loading) return;
    this.mode = mode;
    this.password = '';
    this.showPassword = false;
    this.step = 'email';
    this.code = '';
    this.clearTimer();
    this.cooldown = 0;
  }

  onSubmit(): void {
    if (this.mode === 'password') {
      this.loginPassword();
      return;
    }
    if (this.step === 'email') {
      this.requestCode();
    } else {
      this.verifyCode();
    }
  }

  loginPassword(): void {
    const email = this.email.trim();
    if (!email) {
      this.messages.error('Vui lòng nhập email.');
      return;
    }
    if (!this.password) {
      this.messages.error('Vui lòng nhập mật khẩu.');
      return;
    }
    this.loading = true;
    this.accountService.login(email, this.password).subscribe({
      next: () => this.navigateAfterLogin(),
      // 401 (sai thông tin đăng nhập, khóa tài khoản, ...) đã được ErrorInterceptor toast sẵn.
      error: () => (this.loading = false),
      complete: () => (this.loading = false),
    });
  }

  requestCode(): void {
    if (!this.email.trim() || this.cooldown > 0) return;
    this.loading = true;
    this.accountService.requestOtp(this.email.trim()).subscribe({
      next: (response) => {
        this.step = 'otp';
        this.startCooldown(response.retryAfterSeconds || 60);
        if (response.code) {
          window.alert(`Mã OTP: ${response.code}`);
        } else {
          this.messages.success('Nếu tài khoản hợp lệ, mã OTP đã được gửi.');
        }
      },
      error: () => (this.loading = false),
      complete: () => (this.loading = false),
    });
  }

  verifyCode(): void {
    if (!/^\d{6}$/.test(this.code)) {
      this.messages.error('OTP phải gồm 6 chữ số.');
      return;
    }
    this.loading = true;
    this.accountService.verifyOtp(this.email.trim(), this.code).subscribe({
      next: () => this.navigateAfterLogin(),
      error: () => (this.loading = false),
      complete: () => (this.loading = false),
    });
  }

  /**
   * Điều hướng sau khi đăng nhập thành công. Nếu returnUrl trỏ vào /admin
   * nhưng user không thuộc back office (Admin/Manager/Staff) thì về '/'
   * thay vì để RoleGuard bounce qua lại.
   */
  private navigateAfterLogin(): void {
    const returnUrl =
      this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    if (returnUrl.startsWith('/admin') && !this.accountService.isBackOffice()) {
      void this.router.navigateByUrl('/');
      return;
    }
    void this.router.navigateByUrl(returnUrl);
  }

  changeEmail(): void {
    this.step = 'email';
    this.code = '';
    this.clearTimer();
    this.cooldown = 0;
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }

  private startCooldown(seconds: number): void {
    this.clearTimer();
    this.cooldown = seconds;
    this.timer = setInterval(() => {
      this.cooldown--;
      if (this.cooldown <= 0) this.clearTimer();
    }, 1000);
  }

  private clearTimer(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = undefined;
  }
}
