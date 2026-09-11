import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EntityImage, EntityType } from '../shared/models/entity-image';

@Injectable({ providedIn: 'root' })
export class EntityImageService {
  private readonly baseUrl = environment.apiUrl + 'entityimages';

  constructor(private readonly http: HttpClient) {}

  list(entityType: EntityType, entityId: string, includeInactive = true): Observable<EntityImage[]> {
    const params = new HttpParams().set('includeInactive', includeInactive);
    return this.http.get<EntityImage[]>(`${this.baseUrl}/${entityType}/${entityId}`, { params });
  }

  upload(entityType: EntityType, entityId: string, imageType: string, sortOrder: number, file: File): Observable<EntityImage> {
    const data = new FormData();
    data.append('file', file, file.name);
    data.append('imageType', imageType);
    data.append('sortOrder', String(sortOrder));
    return this.http.post<EntityImage>(`${this.baseUrl}/${entityType}/${entityId}`, data);
  }

  update(image: EntityImage): Observable<EntityImage> {
    return this.http.put<EntityImage>(`${this.baseUrl}/${image.id}`, {
      imageType: image.imageType,
      sortOrder: image.sortOrder,
      isUsed: image.isUsed,
    });
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
