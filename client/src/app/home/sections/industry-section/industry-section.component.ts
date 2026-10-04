import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Observable, Subject, catchError, map, of, switchMap } from 'rxjs';
import { CategoryLandingComponent } from '../../../category-landing/category-landing.component';
import { ElectricBikeService } from '../../../services/electric-bike.service';
import { AgriculturalMachineService } from '../../../services/agricultural-machine.service';
import { ElectricalApplianceService } from '../../../services/electrical-appliance.service';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductCardItem } from '../../../shared/components/product-card/product-card-item.model';
import { ElectricBikeProduct } from '../../../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../../../shared/models/agriculturalMachineProduct';
import { ElectricalApplianceProduct } from '../../../shared/models/electrical-appliance-product';
import { PRODUCT_KIND_ROUTES } from '../../../shared/models/product-category';
import { IndustryContent } from './industry-section.model';

type PreviewProduct = ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct;

@Component({
  selector: 'app-home-industry',
  standalone: true,
  host: { class: 'block' },
  imports: [CommonModule, RouterLink, ProductCardComponent, CategoryLandingComponent],
  templateUrl: './industry-section.component.html',
})
export class IndustrySectionComponent implements OnChanges {
  @Input({ required: true }) content!: IndustryContent;
  @Input() mobile = false;
  readonly products = signal<ProductCardItem[]>([]);
  private readonly bikeService = inject(ElectricBikeService);
  private readonly machineService = inject(AgriculturalMachineService);
  private readonly applianceService = inject(ElectricalApplianceService);
  private readonly previewKind$ = new Subject<IndustryContent['kind'] | null>();

  constructor() {
    this.previewKind$.pipe(
      switchMap((kind) => kind === null ? of([]) : this.loadPreview(kind).pipe(catchError(() => of([])))),
      takeUntilDestroyed(),
    ).subscribe((products) => this.products.set(products));
  }

  ngOnChanges(): void {
    this.products.set([]);
    this.previewKind$.next(this.mobile ? null : this.content.kind);
  }

  get listingPath(): string {
    return PRODUCT_KIND_ROUTES[this.content.kind];
  }

  trackProduct(_index: number, product: ProductCardItem): string {
    return `${product.kind}-${product.id}`;
  }

  private loadPreview(kind: IndustryContent['kind']): Observable<ProductCardItem[]> {
    const request: Observable<PreviewProduct[]> = kind === 'bike'
      ? this.bikeService.getAll({ isUsed: true })
      : kind === 'machine'
        ? this.machineService.getAll({ isUsed: true })
        : this.applianceService.getAll({ isUsed: true });
    return request.pipe(map((products) => products.filter((p) => p.isUsed !== false).slice(0, 8).map((p) => {
      const chips = kind === 'bike'
        ? [(p as ElectricBikeProduct).voltage, p.power, (p as ElectricBikeProduct).batteryCapacity]
        : kind === 'machine'
          ? [(p as AgriculturalMachineProduct).engineType, p.power, (p as AgriculturalMachineProduct).capacity]
          : [p.power, (p as ElectricalApplianceProduct).voltage, (p as ElectricalApplianceProduct).capacity];
      const colors = (p.colors ?? []).filter((color) => !!color.name || !!color.hexCode);
      return {
        kind, id: p.id, name: p.name, brandName: p.brandName, model: p.model ?? '',
        categoryName: p.categoryPath || p.categoryName || (p as ElectricalApplianceProduct).typeName,
        description: p.description, price: p.price, stockQuantity: p.stockQuantity,
        pictureUrl: p.pictureUrl, companyName: p.companyName,
        chip1: chips[0] ?? undefined, chip2: chips[1] ?? undefined, chip3: chips[2] ?? undefined,
        colors: colors.length ? colors : undefined,
      };
    })));
  }
}
