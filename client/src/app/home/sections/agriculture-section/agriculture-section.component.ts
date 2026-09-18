import { Component, computed, EventEmitter, Input, isSignal, Output, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AgriculturalMachineProduct } from '../../../shared/models/agriculturalMachineProduct';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductCardItem } from '../../../shared/components/product-card/product-card-item.model';

@Component({
  selector: 'app-home-agriculture',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
    ProductCardComponent,
  ],
  templateUrl: './agriculture-section.component.html',
})
export class AgricultureSectionComponent {
  @Input() products!: AgriculturalMachineProduct[] | Signal<AgriculturalMachineProduct[]>;
  @Input() featuredCount?: number = 4;
  @Output() navigate = new EventEmitter<string>();

  readonly productList = computed<AgriculturalMachineProduct[]>(() => {
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
      kind: 'machine' as const,
      id: p.id,
      name: p.name,
      brandName: p.brandName,
      model: p.model,
      categoryName: p.categoryName,
      description: p.description,
      price: p.price,
      pictureUrl: p.pictureUrl,
      companyName: p.companyName,
      chip1: p.engineType ?? undefined,
      chip2: p.power ?? undefined,
      chip3: p.capacity ?? undefined,
    })),
  );

  getDetailUrl(id: number) {
    return ['/product-detail', 'machine', id];
  }


  readonly highlights = [
    {
      icon: 'fa-clock-o',
      title: 'Gặt 4 – 6 sào mỗi giờ',
      note: 'Rút ngắn mùa vụ, giảm tới 70% chi phí thuê nhân công.',
    },
    {
      icon: 'fa-certificate',
      title: 'Nhập khẩu chính ngạch',
      note: 'Máy Nhật Bản – Hàn Quốc, đầy đủ giấy tờ CO – CQ và hóa đơn VAT.',
    },
    {
      icon: 'fa-wrench',
      title: 'Kỹ thuật xuống tận ruộng',
      note: 'Xử lý sự cố trong 24 giờ, kho phụ tùng luôn sẵn hàng.',
    },
    {
      icon: 'fa-handshake-o',
      title: 'Trả góp theo mùa vụ',
      note: 'Chính sách riêng cho hợp tác xã và hộ canh tác diện tích lớn.',
    },
  ];

  readonly allMachinesQueryParams = { type: 'machine' as const };
  readonly listingPath = '/products';
}
