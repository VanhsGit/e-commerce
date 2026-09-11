import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { EntityType } from '../../shared/models/entity-image';
import { EntityImageManagerComponent } from '../shared/entity-image-manager/entity-image-manager.component';

@Component({
  selector: 'app-admin-media-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzSelectModule, EntityImageManagerComponent],
  template: `<section class="space-y-5"><div><p class="text-xs font-bold uppercase tracking-[.2em] text-sky-600">Media</p><h2 class="text-3xl font-black">Thư viện ảnh entity</h2></div><div class="grid gap-3 rounded-xl bg-white p-5 shadow-sm md:grid-cols-2"><nz-select [(ngModel)]="entityType"><nz-option *ngFor="let type of entityTypes" [nzLabel]="type" [nzValue]="type"></nz-option></nz-select><input nz-input [(ngModel)]="entityId" placeholder="Entity ID" /></div><app-entity-image-manager *ngIf="entityId" [entityType]="entityType" [entityId]="entityId"></app-entity-image-manager></section>`,
})
export class AdminMediaPageComponent {
  entityType: EntityType = 'Product';
  entityId = '';
  entityTypes: EntityType[] = ['Company', 'Brand', 'ElectricBikeProduct', 'AgriculturalMachineProduct', 'Product', 'ProductBrand', 'ProductType', 'Order', 'DeliveryMethod', 'User'];
}
