import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountService } from '../../../account/account.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './create-user.component.html',
})
export class CreateUserComponent {
  displayName = '';
  email = '';

  constructor(private accountService: AccountService) {}

  onSubmit() {
    this.accountService
      .createUser({
        displayName: this.displayName,
        email: this.email,
        isUsed: true,
      })
      .subscribe({
        next: () => {
          alert('User created successfully');
          this.displayName = '';
          this.email = '';
        },
        error: (err) => {
          console.error(err);
          alert(err?.error?.errors?.join(', ') || 'Create user failed');
        },
      });
  }
}
