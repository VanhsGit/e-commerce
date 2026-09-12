import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { Brand, CreateBrand } from '../shared/models/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  baseUrl = environment.apiUrl;
  cache: Brand[] = [];

  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    if (this.cache.length > 0) return of(this.cache);
    return this.http.get<Brand[]>(this.baseUrl + 'brands');
  }

  getBrand(id: string): Observable<Brand> {
    const b = this.cache.find((x) => x.id === id);
    if (b) return of(b);
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
