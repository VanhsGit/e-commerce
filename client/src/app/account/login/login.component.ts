import { AccountService } from './../account.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
    private route: ActivatedRoute,
  ) {}

  onSubmit() {
    try {
      this.accountService
        .login({ email: this.email, password: this.password })
        .subscribe(() => {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
          this.router.navigateByUrl(returnUrl);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
