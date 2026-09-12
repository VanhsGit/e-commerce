import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Company, CreateCompany } from '../shared/models/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  baseUrl = environment.apiUrl;
  cache: Company[] = [];

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    if (this.cache.length > 0) return of(this.cache);
    return this.http.get<Company[]>(this.baseUrl + 'companies');
  }

  getCompany(id: string): Observable<Company> {
    const c = this.cache.find((x) => x.id === id);
    if (c) return of(c);
    return this.http.get<Company>(this.baseUrl + 'companies/' + id);
  }

  create(dto: CreateCompany): Observable<Company> {
    return this.http.post<Company>(this.baseUrl + 'companies', dto);
  }

  update(id: string, dto: CreateCompany): Observable<Company> {
    return this.http.put<Company>(this.baseUrl + 'companies/' + id, dto);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'companies/' + id);
  }
}
