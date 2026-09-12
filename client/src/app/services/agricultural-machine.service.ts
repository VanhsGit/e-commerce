import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {
  AgriculturalMachineProduct,
  CreateAgriculturalMachineProduct,
  UpdateAgriculturalMachineProduct,
} from '../shared/models/agriculturalMachineProduct';

export interface AgriculturalMachineListParams {
  search?: string | null;
  companyId?: string | number | null;
  brandId?: string | number | null;
  category?: number | null;
  isUsed?: boolean | null;
}

@Injectable({
  providedIn: 'root',
})
export class AgriculturalMachineService {
  baseUrl = environment.apiUrl + 'agriculturalMachineProducts';

  constructor(private http: HttpClient) {}

  getAll(params?: AgriculturalMachineListParams): Observable<AgriculturalMachineProduct[]> {
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
    return this.http.get<AgriculturalMachineProduct[]>(this.baseUrl, { params: httpParams });
  }

  getById(id: string): Observable<AgriculturalMachineProduct> {
    return this.http.get<AgriculturalMachineProduct>(this.baseUrl + '/' + id);
  }

  create(dto: CreateAgriculturalMachineProduct): Observable<AgriculturalMachineProduct> {
    return this.http.post<AgriculturalMachineProduct>(this.baseUrl, dto);
  }

  update(
    id: string,
    dto: UpdateAgriculturalMachineProduct,
  ): Observable<AgriculturalMachineProduct> {
    return this.http.put<AgriculturalMachineProduct>(this.baseUrl + '/' + id, dto);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }
}
