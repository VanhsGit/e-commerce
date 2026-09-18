import { Component, computed, EventEmitter, Input, isSignal, Output, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ElectricBikeProduct } from '../../../shared/models/electricBikeProduct';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductCardItem } from '../../../shared/components/product-card/product-card-item.model';

@Component({
  selector: 'app-home-bikes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
    ProductCardComponent,
  ],
  templateUrl: './bikes-section.component.html',
})
export class BikesSectionComponent {
  @Input() products!: ElectricBikeProduct[] | Signal<ElectricBikeProduct[]>;
  @Input() featuredCount?: number = 4;
  @Output() navigate = new EventEmitter<string>();

  readonly productList = computed<ElectricBikeProduct[]>(() => {
    if (isSignal(this.products)) {
      return this.products().filter((p) => p.isUsed !== false);
    }
    return (this.products ?? []).filter((p) => p.isUsed !== false);
  });

  readonly featuredProducts = computed(() =>
    this.productList().slice(0, this.featuredCount ?? 4),
  );

  readonly featuredCardItems = computed<ProductCardItem[]>(() =>
    this.featuredProducts().map((p) => ({
      kind: 'bike' as const,
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      pictureUrl: p.pictureUrl,
      companyName: p.companyName,
      chip1: p.voltage ?? undefined,
      chip2: p.power ?? undefined,
      chip3: p.batteryCapacity ?? undefined,
    })),
  );

  getDetailUrl(id: number) {
    return ['/product-detail', 'bike', id];
  }


  readonly highlights = [
    {
      icon: 'fa-battery-full',
      title: 'Đi 80 – 120 km mỗi lần sạc',
      note: 'Sạc đầy 4 – 6 giờ, khoảng 3.000đ tiền điện cho 100 km.',
    },
    {
      icon: 'fa-shield',
      title: 'Bảo hành xe 3 năm',
      note: 'Riêng pin lithium bảo hành tới 5 năm hoặc 30.000 km.',
    },
    {
      icon: 'fa-credit-card',
      title: 'Trả góp 0% lãi suất',
      note: 'Trả trước từ 20%, duyệt hồ sơ và nhận xe ngay trong ngày.',
    },
    {
      icon: 'fa-truck',
      title: 'Giao lắp tận nhà',
      note: 'Miễn phí giao xe nội thành, hỗ trợ vận chuyển 63 tỉnh thành.',
    },
  ];

  readonly allBikesQueryParams = { type: 'bike' as const };
  readonly listingPath = '/products';
}
