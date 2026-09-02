import { ShopParams } from './../shared/models/shopParams';
import { Type } from './../shared/models/productType';
import { Brand } from './../shared/models/brand';
import { ShopService } from './shop.service';
import { Product } from '../shared/models/product';
import { Component, OnInit, ViewChild, ElementRef, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProductItemComponent } from './product-item/product-item.component';
import { PagerComponent } from '../shared/components/pager/pager.component';
import { PagingHeaderComponent } from '../shared/components/paging-header/paging-header.component';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, NzButtonModule, ProductItemComponent, PagerComponent, PagingHeaderComponent],
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
  @ViewChild('search', { static: false }) searchTerm!: ElementRef;
  readonly products = signal<Product[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly types = signal<Type[]>([]);
  readonly shopParams = signal<ShopParams>(new ShopParams());
  readonly totalCount = signal(0);
  readonly hasProducts = computed(() => this.totalCount() > 0);
  readonly sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to High', value: 'priceAsc' },
    { name: 'Price: High to Low', value: 'priceDesc' },
  ];

  constructor(private shopService: ShopService) {}

  async ngOnInit(): Promise<void> {
    await this.getProducts();
    await this.getBrands();
    await this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams()).subscribe((response) => {
      this.products.set(response.data);
      this.shopParams.update((params) => ({ ...params, pageNumber: response.pageIndex, pageSize: response.pageSize }));        this.totalCount.set(response.count);
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe((response) => {
      this.brands.set([{ id: 0, name: 'All' }, ...response]);
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe((response) => {
      this.types.set([{ id: 0, name: 'All' }, ...response]);
    });
  }

  onBrandSelected(brandId: number) {
    this.shopParams.update((params) => ({ ...params, brandId, pageNumber: 1 }));
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.shopParams.update((params) => ({ ...params, typeId, pageNumber: 1 }));
    this.getProducts();
  }

  onSortSelected(sort: string) {
    this.shopParams.update((params) => ({ ...params, sort }));
    this.getProducts();
  }

  onPageChanged(event: number) {
    const current = this.shopParams();
    if (current.pageNumber !== event) {
      this.shopParams.update((params) => ({ ...params, pageNumber: event }));
      this.getProducts();
    }
  }

  onSearch() {
    const value = this.searchTerm.nativeElement.value;
    this.shopParams.update((params) => ({ ...params, search: value, pageNumber: 1 }));
    this.getProducts();
  }

  onReset() {
    this.searchTerm.nativeElement.value = '';
    this.shopParams.set(new ShopParams());
    this.getProducts();
  }
}
