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

  getAll(companyId?: number, brandId?: number): Observable<AgriculturalMachineProduct[]> {
    let params = new HttpParams();
    if (companyId) params = params.set('companyId', companyId.toString());
    if (brandId) params = params.set('brandId', brandId.toString());
    return this.http.get<AgriculturalMachineProduct[]>(this.baseUrl, { params });
  }

  getById(id: number): Observable<AgriculturalMachineProduct> {
    return this.http.get<AgriculturalMachineProduct>(this.baseUrl + '/' + id);
  }

  create(dto: CreateAgriculturalMachineProduct): Observable<AgriculturalMachineProduct> {
    return this.http.post<AgriculturalMachineProduct>(this.baseUrl, dto);
  }

  update(
    id: number,
    dto: UpdateAgriculturalMachineProduct,
  ): Observable<AgriculturalMachineProduct> {
    return this.http.put<AgriculturalMachineProduct>(this.baseUrl + '/' + id, dto);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + id);
  }
}
