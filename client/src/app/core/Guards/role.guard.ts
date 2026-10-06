import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { catchError, defaultIfEmpty, firstValueFrom, map, of, timeout } from 'rxjs';
import { AccountService } from '../../account/account.service';
import { NotifyService } from '../../shared/services/notify.service';
import { hasAnyRole } from '../../shared/auth/roles';

/** Quá thời gian này mà API tài khoản chưa trả lời thì coi như chưa xác thực được. */
const LOAD_USER_TIMEOUT_MS = 15000;

/**
 * Guard kiểm tra role dựa trên `route.data.roles` (mảng string, vd BACK_OFFICE_ROLES).
 * - Chưa đăng nhập -> chuyển về account/login kèm returnUrl (giống AuthGuard).
 * - Đã đăng nhập nhưng thiếu role -> toast "Bạn không có quyền truy cập trang này" và về '/'.
 * - Route không khai báo `data.roles` -> cho qua (không giới hạn role).
 * Luôn trả về true hoặc UrlTree, không bao giờ treo kể cả khi API tài khoản lỗi/chậm.
 */
export const roleGuard: CanActivateFn = async (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Promise<boolean | UrlTree> => {
  const accountService = inject(AccountService);
  const router = inject(Router);
  const notify = inject(NotifyService);

  const requiredRoles = (next.data?.['roles'] as string[] | undefined) ?? [];

  const toLogin = (): UrlTree =>
    router.createUrlTree(['account/login'], {
      queryParams: { returnUrl: state.url },
    });

  const check = (user: NonNullable<ReturnType<typeof accountService.currentUser>>): boolean | UrlTree => {
    if (requiredRoles.length && !hasAnyRole(user, requiredRoles)) {
      notify.error('Bạn không có quyền truy cập trang này');
      return router.createUrlTree(['/']);
    }
    return true;
  };

  const token = localStorage.getItem('token');
  if (!token) return toLogin();

  const cached = accountService.currentUser();
  if (cached) return check(cached);

  return firstValueFrom(accountService.loadCurrentUser(token).pipe(
    timeout(LOAD_USER_TIMEOUT_MS),
    catchError(() => of(null)),
    // Nguồn hoàn tất mà không phát giá trị thì firstValueFrom sẽ reject -> guard treo.
    defaultIfEmpty(null),
    map((user): boolean | UrlTree => {
      if (!user) {
        localStorage.removeItem('token');
        return toLogin();
      }
      return check(user);
    }),
  ));
};
