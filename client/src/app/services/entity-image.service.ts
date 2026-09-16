import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EntityImage } from '../shared/models/entity-image';

@Injectable({ providedIn: 'root' })
export class EntityImageService {
  private readonly baseUrl = environment.apiUrl + 'entityimages';

  constructor(private readonly http: HttpClient) {}

  list(search?: string): Observable<EntityImage[]> {
    let params = new HttpParams();
    if (search?.trim()) params = params.set('search', search.trim());
    return this.http.get<EntityImage[]>(this.baseUrl, { params });
  }

  upload(file: File): Observable<EntityImage> {
    const data = new FormData();
    data.append('file', file, file.name);
    return this.http.post<EntityImage>(this.baseUrl, data);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
