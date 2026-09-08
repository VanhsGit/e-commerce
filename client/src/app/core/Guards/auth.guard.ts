import { AccountService } from './../../account/account.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private accountService: AccountService,
    private router: Router,
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Promise<boolean | UrlTree> {
    const token = localStorage.getItem('token');

    if (!token) {
      return this.router.createUrlTree(['account/login'], {
        queryParams: { returnUrl: state.url },
      });
    }

    try {
      const user = await firstValueFrom(
        this.accountService.loadCurrentUser(token),
      );

      if (user) {
        return true;
      }

      localStorage.removeItem('token');
      return this.router.createUrlTree(['account/login'], {
        queryParams: { returnUrl: state.url },
      });
    } catch (error) {
      localStorage.removeItem('token');
      return this.router.createUrlTree(['account/login'], {
        queryParams: { returnUrl: state.url },
      });
    }
  }
}
