import { AccountService } from './../account.service';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
    NzButtonModule,
    NzInputModule,
    CmInputComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy {
  email = '';
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

  requestCode(): void {
    if (!this.email.trim() || this.cooldown > 0) return;
    this.loading = true;
    this.accountService.requestOtp(this.email.trim()).subscribe({
      next: response => {
        this.step = 'otp';
        this.startCooldown(response.retryAfterSeconds || 60);
        this.messages.success('Nếu tài khoản hợp lệ, mã OTP đã được ghi vào log backend.');
      },
      error: () => this.loading = false,
      complete: () => this.loading = false,
    });
  }

  verifyCode(): void {
    if (!/^\d{6}$/.test(this.code)) { this.messages.error('OTP phải gồm 6 chữ số.'); return; }
    this.loading = true;
    this.accountService.verifyOtp(this.email.trim(), this.code).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        void this.router.navigateByUrl(returnUrl);
      },
      error: () => this.loading = false,
      complete: () => this.loading = false,
    });
  }

  changeEmail(): void {
    this.step = 'email';
    this.code = '';
    this.clearTimer();
    this.cooldown = 0;
  }

  ngOnDestroy(): void { this.clearTimer(); }

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
