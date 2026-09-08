import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AccountService } from '../../../account/account.service';
import { CmInputComponent } from '../../../shared/components/cm-input/cm-input.component';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzButtonModule,
    CmInputComponent,
  ],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  displayName = '';
  email = '';
  password = '';

  constructor(private accountService: AccountService) {}

  onSubmit() {
    this.accountService
      .createUser({
        displayName: this.displayName,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: () => {
          alert('User created successfully');
          this.displayName = '';
          this.email = '';
          this.password = '';
        },
        error: (err) => {
          console.error(err);
          alert(err?.error?.errors?.join(', ') || 'Create user failed');
        },
      });
  }
}
