import { AccountService } from './../../account/account.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NzButtonModule,
    NzDropDownModule,
  ],
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  readonly currentUser = this.accountService.currentUser;

  constructor(private accountService: AccountService) {}

  logout() {
    this.accountService.logout();
  }
}
