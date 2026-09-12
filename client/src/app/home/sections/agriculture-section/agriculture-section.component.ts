import { Component, computed, EventEmitter, Input, isSignal, Output, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AgriculturalMachineProduct } from '../../../shared/models/agriculturalMachineProduct';

@Component({
  selector: 'app-home-agriculture',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
  ],
  templateUrl: './agriculture-section.component.html',
})
export class AgricultureSectionComponent {
  @Input() products!: AgriculturalMachineProduct[] | Signal<AgriculturalMachineProduct[]>;
  @Input() featuredCount?: number = 4;
  @Output() navigate = new EventEmitter<string>();

  readonly productList = computed<AgriculturalMachineProduct[]>(() => {
    if (isSignal(this.products)) {
      return this.products();
    }
    return this.products ?? [];
  });

  readonly featuredProducts = computed(() =>
    this.productList().slice(0, this.featuredCount ?? 4),
  );

  getDetailUrl(id: number) {
    return ['/product-detail', 'machine', id];
  }
}
