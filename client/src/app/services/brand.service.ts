import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Brand, CreateBrand } from '../shared/models/brand';

export interface BrandListParams {
  search?: string | null;
  isUsed?: boolean | null;
}

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getBrands(params?: BrandListParams): Observable<Brand[]> {
    let httpParams = new HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    return this.http.get<Brand[]>(this.baseUrl + 'brands', { params: httpParams });
  }

  getBrand(id: string): Observable<Brand> {
    return this.http.get<Brand>(this.baseUrl + 'brands/' + id);
  }

  create(dto: CreateBrand): Observable<Brand> {
    return this.http.post<Brand>(this.baseUrl + 'brands', dto);
  }

  update(id: string, dto: CreateBrand): Observable<Brand> {
    return this.http.put<Brand>(this.baseUrl + 'brands/' + id, dto);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'brands/' + id);
  }
}
