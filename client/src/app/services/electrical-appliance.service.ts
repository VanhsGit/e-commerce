import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  CreateElectricalApplianceProduct,
  ElectricalApplianceProduct,
  ElectricalApplianceType,
  UpdateElectricalApplianceProduct,
} from '../shared/models/electrical-appliance-product';

export interface ElectricalApplianceListParams {
  search?: string | null;
  companyId?: string | number | null;
  brandId?: string | number | null;
  type?: ElectricalApplianceType | number | null;
  isUsed?: boolean | null;
}

@Injectable({ providedIn: 'root' })
export class ElectricalApplianceService {
  private readonly baseUrl = environment.apiUrl + 'electricalApplianceProducts';

  constructor(private readonly http: HttpClient) {}

  getAll(params?: ElectricalApplianceListParams): Observable<ElectricalApplianceProduct[]> {
    let httpParams = new HttpParams();
    if (params?.search?.trim()) httpParams = httpParams.set('search', params.search.trim());
    if (params?.companyId !== undefined && params.companyId !== null && `${params.companyId}`) {
      httpParams = httpParams.set('companyId', `${params.companyId}`);
    }
    if (params?.brandId !== undefined && params.brandId !== null && `${params.brandId}`) {
      httpParams = httpParams.set('brandId', `${params.brandId}`);
    }
    if (params?.type !== undefined && params.type !== null) {
      httpParams = httpParams.set('type', `${params.type}`);
    }
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', `${params.isUsed}`);
    }
    return this.http.get<ElectricalApplianceProduct[]>(this.baseUrl, { params: httpParams });
  }

  getById(id: string): Observable<ElectricalApplianceProduct> {
    return this.http.get<ElectricalApplianceProduct>(`${this.baseUrl}/${id}`);
  }

  create(dto: CreateElectricalApplianceProduct): Observable<ElectricalApplianceProduct> {
    return this.http.post<ElectricalApplianceProduct>(this.baseUrl, dto);
  }

  update(id: string, dto: UpdateElectricalApplianceProduct): Observable<ElectricalApplianceProduct> {
    return this.http.put<ElectricalApplianceProduct>(`${this.baseUrl}/${id}`, dto);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
