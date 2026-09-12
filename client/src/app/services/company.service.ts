import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Company, CreateCompany } from '../shared/models/company';

export interface CompanyListParams {
  search?: string | null;
  isUsed?: boolean | null;
}

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCompanies(params?: CompanyListParams): Observable<Company[]> {
    let httpParams = new HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    return this.http.get<Company[]>(this.baseUrl + 'companies', { params: httpParams });
  }

  getCompany(id: string): Observable<Company> {
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
