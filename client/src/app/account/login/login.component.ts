import { AccountService } from './../account.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CmInputComponent } from '../../shared/components/cm-input/cm-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzButtonModule,
    CmInputComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  onSubmit() {
    try {
      this.accountService
        .login({ email: this.email, password: this.password })
        .subscribe(() => {
          this.router.navigateByUrl('/shop');
        });
    } catch (error) {
      console.log(error);
    }
  }
}
