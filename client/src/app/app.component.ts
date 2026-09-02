import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SectionHeaderComponent } from './core/section-header/section-header.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule, NavBarComponent, SectionHeaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'SkiNet';

  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadBasket();
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

  async loadBasket(): Promise<void> {
    const basketId = localStorage.getItem('basket_id');
    if (!basketId) {
      return;
    }

    try {
      await firstValueFrom(this.basketService.getBasket(basketId));
      console.log('Initialized Basket');
    } catch (error) {
      console.log(error);
    }
  }
}
