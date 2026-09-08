import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {
  CreateElectricBikeProduct,
  ElectricBikeProduct,
  UpdateElectricBikeProduct,
} from '../shared/models/electricBikeProduct';

@Injectable({
  providedIn: 'root',
})
export class ElectricBikeService {
  baseUrl = environment.apiUrl + 'electricBikeProducts';

  constructor(private http: HttpClient) {}

  getAll(companyId?: number, brandId?: number): Observable<ElectricBikeProduct[]> {
    let params = new HttpParams();
    if (companyId) params = params.set('companyId', companyId.toString());
    if (brandId) params = params.set('brandId', brandId.toString());
    return this.http.get<ElectricBikeProduct[]>(this.baseUrl, { params });
  }

  getById(id: number): Observable<ElectricBikeProduct> {
    return this.http.get<ElectricBikeProduct>(this.baseUrl + '/' + id);
  }

  create(dto: CreateElectricBikeProduct): Observable<ElectricBikeProduct> {
    return this.http.post<ElectricBikeProduct>(this.baseUrl, dto);
  }

  update(id: number, dto: UpdateElectricBikeProduct): Observable<ElectricBikeProduct> {
    return this.http.put<ElectricBikeProduct>(this.baseUrl + '/' + id, dto);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }
}
