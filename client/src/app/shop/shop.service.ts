import { environment } from './../../environments/environment';
import { ShopParams } from './../shared/models/shopParams';
import { Type } from './../shared/models/productType';
import { Brand } from './../shared/models/brand';
import { Pagination } from '../shared/models/pagination';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Product } from '../shared/models/product';
import { Observable, of } from 'rxjs';
import {
  CreateProduct,
  ProductFull,
  UpdateProduct,
} from '../shared/models/productFull';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.apiUrl;
  products: ProductFull[] = [];
  brands: Brand[] = [];
  types: Type[] = [];

  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if (shopParams.companyId !== 0) {
      params = params.append('companyId', shopParams.companyId.toString());
    }

    if (shopParams.mainCategory) {
      params = params.append('mainCategory', shopParams.mainCategory.toString());
    }

    if (shopParams.bicycleCategoryId !== 0) {
      params = params.append(
        'bicycleCategoryId',
        shopParams.bicycleCategoryId.toString(),
      );
    }

    if (shopParams.agricultureMachineId !== 0) {
      params = params.append(
        'agricultureMachineId',
        shopParams.agricultureMachineId.toString(),
      );
    }

    if(shopParams.search){
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());

    return this.http.get<Pagination>(this.baseUrl + 'products', {  params });
  }

  getBrands() {
    if(this.brands.length > 0){
      return of(this.brands);
    }

    return this.http.get<Brand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    if(this.types.length > 0){
      return of(this.types);
    }
    
    return this.http.get<Type[]>(this.baseUrl + 'products/types');
  }

  getProduct(id: number){
    const product = this.products.find(p => p.id === id);

    if(product){
      return of(product);
    }
    return this.http.get<ProductFull>(this.baseUrl + 'products/' + id);
  }

  createProduct(dto: CreateProduct): Observable<ProductFull> {
    return this.http.post<ProductFull>(this.baseUrl + 'products', dto);
  }

  updateProduct(id: number, dto: UpdateProduct): Observable<ProductFull> {
    return this.http.put<ProductFull>(this.baseUrl + 'products/' + id, dto);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + 'products/' + id);
  }
}

