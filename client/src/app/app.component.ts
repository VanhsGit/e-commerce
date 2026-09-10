import { AccountService } from './account/account.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SectionHeaderComponent } from './core/section-header/section-header.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxSpinnerModule,
    NavBarComponent,
    SectionHeaderComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'SkiNet';

  constructor(private accountService: AccountService) {}

  async ngOnInit(): Promise<void> {
    await this.loadCurrentUser();
  }

  async loadCurrentUser(): Promise<void> {
    const token = localStorage.getItem('token');
    try {
      await firstValueFrom(this.accountService.loadCurrentUser(token));
      console.log('loaded user');
    } catch (error) {
      console.log(error);
    }
  }
}
