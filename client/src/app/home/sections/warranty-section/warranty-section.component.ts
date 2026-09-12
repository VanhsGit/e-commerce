import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

type ProductKind = 'bike' | 'machine';
type WarrantyStatus = 'active' | 'expired' | 'notfound';

interface WarrantyRecord {
  serialNumber: string;
  productId: number;
  productKind: ProductKind;
  productName: string;
  brandName: string;
  customerName: string;
  customerPhone: string;
  purchaseDate: Date;
  warrantyMonths: number;
  warrantyEndDate: Date;
  serviceCenter: string;
  servicePhone: string;
  notes: string[];
  status: 'active' | 'expired';
  daysLeft: number;
}

interface WarrantyLookupResult {
  status: WarrantyStatus;
  record?: WarrantyRecord;
  message: string;
}

@Component({
  selector: 'app-home-warranty',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
  ],
  templateUrl: './warranty-section.component.html',
})
export class WarrantySectionComponent {
  @Input() serial!: string;
  @Input() phone!: string;
  @Input() result!: WarrantyLookupResult | null;
  @Input() submitted!: boolean;
  @Input() lookupKind!: ProductKind;
  @Input() lookupProductId!: string;

  @Output() serialChange = new EventEmitter<string>();
  @Output() phoneChange = new EventEmitter<string>();
  @Output() lookup = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
  @Output() lookupKindChange = new EventEmitter<ProductKind>();
  @Output() lookupProductIdChange = new EventEmitter<string>();
  @Output() lookupProduct = new EventEmitter<void>();
  @Output() browseAll = new EventEmitter<ProductKind | 'all'>();

  readonly listingPath = '/products';
  readonly allProductsQueryParams = { type: 'all' as const };
  readonly bikesQueryParams = { type: 'bike' as const };
  readonly machinesQueryParams = { type: 'machine' as const };
}
