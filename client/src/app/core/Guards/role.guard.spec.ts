import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AccountService } from '../../account/account.service';
import { NotifyService } from '../../shared/services/notify.service';
import { User } from '../../shared/models/user';
import { roleGuard } from './role.guard';

describe('roleGuard', () => {
  let accountService: {
    currentUser: () => User | null;
    loadCurrentUser: jasmine.Spy;
  };
  let router: { createUrlTree: jasmine.Spy };
  let notify: { error: jasmine.Spy };
  let currentUserValue: User | null;

  beforeEach(() => {
    currentUserValue = null;
    accountService = {
      currentUser: () => currentUserValue,
      loadCurrentUser: jasmine.createSpy('loadCurrentUser'),
    };
    router = {
      createUrlTree: jasmine
        .createSpy('createUrlTree')
        .and.callFake((commands: unknown[]) => ({ commands }) as unknown as UrlTree),
    };
    notify = { error: jasmine.createSpy('error') };

    localStorage.removeItem('token');

    TestBed.configureTestingModule({
      providers: [
        { provide: AccountService, useValue: accountService },
        { provide: Router, useValue: router },
        { provide: NotifyService, useValue: notify },
      ],
    });
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  function run(roles: string[] | undefined) {
    const route = { data: { roles } } as unknown as ActivatedRouteSnapshot;
    const state = { url: '/admin/users' } as RouterStateSnapshot;
    return TestBed.runInInjectionContext(() => roleGuard(route, state));
  }

  it('redirects to login when there is no token', async () => {
    const result = await run(['Admin']);
    expect(router.createUrlTree).toHaveBeenCalledWith(
      ['account/login'],
      jasmine.objectContaining({ queryParams: { returnUrl: '/admin/users' } }),
    );
    expect(result).toEqual({ commands: ['account/login'] } as unknown as UrlTree);
  });

  it('allows access when user already has a required role', async () => {
    localStorage.setItem('token', 'tok');
    currentUserValue = { email: 'a@a.com', displayName: 'A', token: 'tok', roles: ['Admin'] };
    const result = await run(['Admin', 'Manager']);
    expect(result).toBeTrue();
    expect(accountService.loadCurrentUser).not.toHaveBeenCalled();
  });

  it('loads the current user when not yet in memory, then allows access', async () => {
    localStorage.setItem('token', 'tok');
    accountService.loadCurrentUser.and.returnValue(
      of({ email: 'a@a.com', displayName: 'A', token: 'tok', roles: ['Staff'] }),
    );
    const result = await run(['Staff']);
    expect(result).toBeTrue();
    expect(accountService.loadCurrentUser).toHaveBeenCalledWith('tok');
  });

  it('redirects to login and clears the token when loading the user fails', async () => {
    localStorage.setItem('token', 'tok');
    accountService.loadCurrentUser.and.returnValue(throwError(() => new Error('fail')));
    const result = await run(['Admin']);
    expect(localStorage.getItem('token')).toBeNull();
    expect(router.createUrlTree).toHaveBeenCalledWith(
      ['account/login'],
      jasmine.objectContaining({ queryParams: { returnUrl: '/admin/users' } }),
    );
    expect(result).toEqual({ commands: ['account/login'] } as unknown as UrlTree);
  });

  it('toasts and redirects to "/" when the user lacks the required role', async () => {
    localStorage.setItem('token', 'tok');
    currentUserValue = { email: 'a@a.com', displayName: 'A', token: 'tok', roles: ['User'] };
    const result = await run(['Admin']);
    expect(notify.error).toHaveBeenCalledWith('Bạn không có quyền truy cập trang này');
    expect(router.createUrlTree).toHaveBeenCalledWith(['/']);
    expect(result).toEqual({ commands: ['/'] } as unknown as UrlTree);
  });

  it('allows access when the route declares no roles restriction', async () => {
    localStorage.setItem('token', 'tok');
    currentUserValue = { email: 'a@a.com', displayName: 'A', token: 'tok', roles: [] };
    const result = await run(undefined);
    expect(result).toBeTrue();
  });
});
