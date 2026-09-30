import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  CategoryPageContent,
  CategoryPageContentResponse,
} from '../shared/models/category-page-content';
import { ProductKind } from '../shared/models/product-category';

@Injectable({ providedIn: 'root' })
export class CategoryPageContentService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.apiUrl + 'categoryPageContent';

  get(kind: ProductKind): Observable<CategoryPageContentResponse> {
    return this.http.get<CategoryPageContentResponse>(`${this.url}/${kind}`);
  }

  update(kind: ProductKind, content: CategoryPageContent): Observable<CategoryPageContentResponse> {
    return this.http.put<CategoryPageContentResponse>(`${this.url}/${kind}`, content);
  }
}
