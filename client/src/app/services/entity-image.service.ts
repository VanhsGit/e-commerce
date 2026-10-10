import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defer, Observable, switchMap } from 'rxjs';
import { ImageOptimizerService } from './image-optimizer.service';
import { environment } from '../../environments/environment';
import { EntityImage } from '../shared/models/entity-image';
import { asArray } from '../shared/utils/as-array';

@Injectable({ providedIn: 'root' })
export class EntityImageService {
  private readonly baseUrl = environment.apiUrl + 'entityimages';

  constructor(private readonly http: HttpClient, private readonly optimizer: ImageOptimizerService) {}

  list(search?: string): Observable<EntityImage[]> {
    let params = new HttpParams();
    if (search?.trim()) params = params.set('search', search.trim());
    return this.http.get<EntityImage[]>(this.baseUrl, { params }).pipe(asArray());
  }

  upload(file: File): Observable<EntityImage> {
    return defer(() => this.optimizer.optimize(file)).pipe(switchMap((optimized) => {
      const data = new FormData();
      data.append('file', optimized, optimized.name);
      return this.http.post<EntityImage>(this.baseUrl, data);
    }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
