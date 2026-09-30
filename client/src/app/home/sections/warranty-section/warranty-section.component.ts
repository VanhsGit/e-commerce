import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { MatIconModule } from '@angular/material/icon';
import { HomeWarrantyContent } from '../../home-content.model';

type ProductKind = 'bike' | 'machine' | 'appliance';
type WarrantyStatus = 'active' | 'expired' | 'notfound';

interface WarrantyRecord {
  serialNumber: string;
  productId: string;
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
  imports: [MatIconModule, 
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
  ],
  templateUrl: './warranty-section.component.html',
  styleUrl: './warranty-section.component.scss',
})
export class WarrantySectionComponent {
  @Input({ required: true }) content!: HomeWarrantyContent;
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

}
