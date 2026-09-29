import { Address } from './../shared/models/address';
import { User } from './../shared/models/user';
import { of } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable, computed, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { BACK_OFFICE_ROLES, hasAnyRole } from '../shared/auth/roles';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  baseUrl = environment.apiUrl;
  readonly currentUser = signal<User | null>(null);

  /** true nếu user hiện tại có quyền vào khu vực quản trị (Admin/Manager/Staff). */
  readonly isBackOffice = computed(() =>
    hasAnyRole(this.currentUser(), BACK_OFFICE_ROLES),
  );

  /** true nếu user hiện tại có ít nhất 1 trong các role truyền vào. */
  hasRole(...roles: string[]): boolean {
    return hasAnyRole(this.currentUser(), roles);
  }

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  loadCurrentUser(token: string | null) {
    if (token === null) {
      this.currentUser.set(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get<User>(this.baseUrl + 'account', { headers }).pipe(
      tap((user) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUser.set(user);
        }
      }),
      map((user) => user ?? null),
    );
  }

  requestOtp(email: string) {
    return this.http.post<{
      message: string;
      retryAfterSeconds: number;
      code?: string;
    }>(this.baseUrl + 'account/request-otp', { email });
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(this.baseUrl + 'account/login', { email, password })
      .pipe(
        tap((user) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUser.set(user);
          }
        }),
        map((user) => user ?? null),
      );
  }

  verifyOtp(email: string, code: string) {
    return this.http
      .post<User>(this.baseUrl + 'account/verify-otp', { email, code })
      .pipe(
        tap((user) => {
          if (user) {
            localStorage.setItem('token', user.token);
            this.currentUser.set(user);
          }
        }),
        map((user) => user ?? null),
      );
  }

  createUser(values: {
    email: string;
    displayName?: string;
    isUsed?: boolean;
  }) {
    return this.http.post<User>(this.baseUrl + 'admin/users', values);
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.set(null);
    this.router.navigateByUrl('/');
  }

  getUserAddress() {
    return this.http.get<Address>(this.baseUrl + 'account/address');
  }

  updateUserAddress(address: Address) {
    return this.http.put<Address>(this.baseUrl + 'account/address', address);
  }
}
