import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';

type WarrantyStatus = 'active' | 'expired' | 'notfound';

interface WarrantyRecord {
  serialNumber: string;
  productId: number;
  productKind: 'bike' | 'machine';
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
    NzButtonModule,
    NzInputModule,
  ],
  templateUrl: './warranty-section.component.html',
})
export class WarrantySectionComponent {
  @Input() serial!: string;
  @Input() phone!: string;
  @Input() result!: WarrantyLookupResult | null;
  @Input() submitted!: boolean;

  @Output() serialChange = new EventEmitter<string>();
  @Output() phoneChange = new EventEmitter<string>();
  @Output() lookup = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
}
