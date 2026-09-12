import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {
  CreateElectricBikeProduct,
  ElectricBikeProduct,
  UpdateElectricBikeProduct,
} from '../shared/models/electricBikeProduct';

export interface ElectricBikeListParams {
  search?: string | null;
  companyId?: string | number | null;
  brandId?: string | number | null;
  category?: number | null;
  isUsed?: boolean | null;
}

@Injectable({
  providedIn: 'root',
})
export class ElectricBikeService {
  baseUrl = environment.apiUrl + 'electricBikeProducts';

  constructor(private http: HttpClient) {}

  getAll(params?: ElectricBikeListParams): Observable<ElectricBikeProduct[]> {
    let httpParams = new HttpParams();
    if (params?.search) httpParams = httpParams.set('search', params.search);
    if (params?.companyId !== undefined && params.companyId !== null && String(params.companyId).length > 0) {
      httpParams = httpParams.set('companyId', String(params.companyId));
    }
    if (params?.brandId !== undefined && params.brandId !== null && String(params.brandId).length > 0) {
      httpParams = httpParams.set('brandId', String(params.brandId));
    }
    if (params?.category !== undefined && params.category !== null) {
      httpParams = httpParams.set('category', String(params.category));
    }
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    return this.http.get<ElectricBikeProduct[]>(this.baseUrl, { params: httpParams });
  }

  getById(id: string): Observable<ElectricBikeProduct> {
    return this.http.get<ElectricBikeProduct>(this.baseUrl + '/' + id);
  }

  create(dto: CreateElectricBikeProduct): Observable<ElectricBikeProduct> {
    return this.http.post<ElectricBikeProduct>(this.baseUrl, dto);
  }

  update(id: string, dto: UpdateElectricBikeProduct): Observable<ElectricBikeProduct> {
    return this.http.put<ElectricBikeProduct>(this.baseUrl + '/' + id, dto);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }
}
