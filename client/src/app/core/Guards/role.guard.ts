import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AccountService } from '../../account/account.service';
import { NotifyService } from '../../shared/services/notify.service';
import { hasAnyRole } from '../../shared/auth/roles';

/**
 * Guard kiểm tra role dựa trên `route.data.roles` (mảng string, vd BACK_OFFICE_ROLES).
 * - Chưa đăng nhập -> chuyển về account/login kèm returnUrl (giống AuthGuard).
 * - Đã đăng nhập nhưng thiếu role -> toast "Bạn không có quyền truy cập trang này" và về '/'.
 * - Route không khai báo `data.roles` -> cho qua (không giới hạn role).
 */
export const roleGuard: CanActivateFn = async (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): Promise<boolean | UrlTree> => {
  const accountService = inject(AccountService);
  const router = inject(Router);
  const notify = inject(NotifyService);

  const requiredRoles = (next.data?.['roles'] as string[] | undefined) ?? [];

  const token = localStorage.getItem('token');
  if (!token) {
    return router.createUrlTree(['account/login'], {
      queryParams: { returnUrl: state.url },
    });
  }

  let user = accountService.currentUser();
  if (!user) {
    try {
      user = await firstValueFrom(accountService.loadCurrentUser(token));
    } catch {
      user = null;
    }
    if (!user) {
      localStorage.removeItem('token');
      return router.createUrlTree(['account/login'], {
        queryParams: { returnUrl: state.url },
      });
    }
  }

  if (requiredRoles.length && !hasAnyRole(user, requiredRoles)) {
    notify.error('Bạn không có quyền truy cập trang này');
    return router.createUrlTree(['/']);
  }

  return true;
};
