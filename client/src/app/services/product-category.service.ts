import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, shareReplay, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import {
  CreateProductCategory,
  ProductCategory,
  ProductKind,
  UpdateProductCategory,
} from '../shared/models/product-category';
import { asArray } from '../shared/utils/as-array';

export interface ProductCategoryListParams {
  kind?: ProductKind | null;
  parentId?: string | null;
  isUsed?: boolean | null;
  search?: string | null;
  tree?: boolean | null;
}

/** Enum phía API nhận tên PascalCase khi ghi dữ liệu. */
const KIND_TO_API: Record<ProductKind, 'Bike' | 'Machine'> = {
  bike: 'Bike',
  machine: 'Machine',
};

export function toApiKind(kind: ProductKind): 'Bike' | 'Machine' {
  return KIND_TO_API[kind];
}

@Injectable({ providedIn: 'root' })
export class ProductCategoryService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl + 'productCategories';

  getAll(params?: ProductCategoryListParams): Observable<ProductCategory[]> {
    let httpParams = new HttpParams();
    if (params?.kind) httpParams = httpParams.set('kind', params.kind);
    if (params?.parentId) httpParams = httpParams.set('parentId', params.parentId);
    if (params?.isUsed !== undefined && params.isUsed !== null) {
      httpParams = httpParams.set('isUsed', String(params.isUsed));
    }
    if (params?.search?.trim()) httpParams = httpParams.set('search', params.search.trim());
    if (params?.tree !== undefined && params.tree !== null) {
      httpParams = httpParams.set('tree', String(params.tree));
    }
    return this.http.get<ProductCategory[]>(this.baseUrl, { params: httpParams }).pipe(asArray());
  }

  private navTree$?: Observable<ProductCategory[]>;

  /** Tải riêng từng ngành để bỏ qua các bản ghi ngành cũ không còn trong enum hiện tại. */
  getNavTree(): Observable<ProductCategory[]> {
    if (!this.navTree$) {
      this.navTree$ = forkJoin({
        bikes: this.getAll({ kind: 'bike', tree: true, isUsed: true }),
        machines: this.getAll({ kind: 'machine', tree: true, isUsed: true }),
      }).pipe(
        map(({ bikes, machines }) => [...bikes, ...machines]),
        catchError((err) => {
          this.navTree$ = undefined;
          return throwError(() => err);
        }),
        shareReplay(1),
      );
    }
    return this.navTree$;
  }

  getById(id: string): Observable<ProductCategory> {
    return this.http.get<ProductCategory>(`${this.baseUrl}/${id}`);
  }

  create(dto: CreateProductCategory): Observable<ProductCategory> {
    return this.http.post<ProductCategory>(this.baseUrl, { ...dto, kind: toApiKind(dto.kind) })
      .pipe(tap(() => this.navTree$ = undefined));
  }

  update(id: string, dto: UpdateProductCategory): Observable<ProductCategory> {
    return this.http.put<ProductCategory>(`${this.baseUrl}/${id}`, {
      ...dto,
      kind: toApiKind(dto.kind),
    }).pipe(tap(() => this.navTree$ = undefined));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(tap(() => this.navTree$ = undefined));
  }
}
