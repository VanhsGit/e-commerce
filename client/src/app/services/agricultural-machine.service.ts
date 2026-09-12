import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import {
  AgriculturalMachineProduct,
  CreateAgriculturalMachineProduct,
  UpdateAgriculturalMachineProduct,
} from '../shared/models/agriculturalMachineProduct';

@Injectable({
  providedIn: 'root',
})
export class AgriculturalMachineService {
  baseUrl = environment.apiUrl + 'agriculturalMachineProducts';

  constructor(private http: HttpClient) {}

  getAll(companyId?: string, brandId?: string): Observable<AgriculturalMachineProduct[]> {
    let params = new HttpParams();
    if (companyId) params = params.set('companyId', companyId);
    if (brandId) params = params.set('brandId', brandId);
    return this.http.get<AgriculturalMachineProduct[]>(this.baseUrl, { params });
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
