import { AccountService } from './../../account/account.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { catchError, defaultIfEmpty, firstValueFrom, of, timeout } from 'rxjs';

/** Quá thời gian này mà API tài khoản chưa trả lời thì coi như chưa xác thực được. */
const LOAD_USER_TIMEOUT_MS = 15000;

/**
 * Chặn khu vực cần đăng nhập. Luôn trả về true hoặc UrlTree, không bao giờ treo:
 * guard này chạy trước roleGuard trên route /admin, nên nếu nó chờ vô hạn
 * (API chết, sai cổng proxy, request bị treo) thì route admin không bao giờ được
 * kích hoạt và người dùng chỉ thấy spinner quay mãi.
 */
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
    const toLogin = (): UrlTree =>
      this.router.createUrlTree(['account/login'], {
        queryParams: { returnUrl: state.url },
      });

    const token = localStorage.getItem('token');
    if (!token) return toLogin();

    // Đã có user trong phiên thì không gọi lại API (tránh request trùng với roleGuard).
    if (this.accountService.currentUser()) return true;

    const user = await firstValueFrom(
      this.accountService.loadCurrentUser(token).pipe(
        timeout(LOAD_USER_TIMEOUT_MS),
        catchError(() => of(null)),
        // Nguồn hoàn tất mà không phát giá trị thì firstValueFrom sẽ reject -> guard treo.
        defaultIfEmpty(null),
      ),
    );

    if (user) return true;

    localStorage.removeItem('token');
    return toLogin();
  }
}
