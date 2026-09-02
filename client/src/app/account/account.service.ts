import { Address } from './../shared/models/address';
import { User } from './../shared/models/user';
import { of } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  readonly currentUser = signal<User | null>(null);

  constructor(private http: HttpClient, private router: Router) { }

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
      map((user) => user ?? null)
    );
  }

  login(values: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', values).pipe(
      tap((user) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUser.set(user);
        }
      }),
      map((user) => user ?? null)
    );
  }

  register(values: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', values).pipe(
      tap((user) => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUser.set(user);
        }
      }),
      map((user) => user ?? null)
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUser.set(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string){
    return this.http.get(this.baseUrl + 'account/emailexists?email=' + email);
  }

  getUserAddress(){
    return this.http.get<Address>(this.baseUrl + 'account/address');
  }

  updateUserAddress(address: Address){
    return this.http.put<Address>(this.baseUrl + 'account/address', address);
  }

}
