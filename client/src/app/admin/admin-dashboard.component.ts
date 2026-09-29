import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AccountService } from '../account/account.service';
import { CompanyService } from '../services/company.service';
import { BrandService } from '../services/brand.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { ElectricalApplianceService } from '../services/electrical-appliance.service';
import { Company } from '../shared/models/company';
import { Brand } from '../shared/models/brand';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';
import { ElectricalApplianceProduct } from '../shared/models/electrical-appliance-product';
import { ImgFallbackDirective } from '../shared/directives/img-fallback.directive';
import { AdminPageHeaderComponent } from './shared/page-header/admin-page-header.component';
import { AdminEmptyStateComponent } from './shared/empty-state/admin-empty-state.component';
import { MatIconModule } from '@angular/material/icon';
import { VndCurrencyPipe } from '../shared/pipes/vnd-currency.pipe';

interface StatCard {
  title: string;
  value: number;
  icon: string;
  color: string;
  bg: string;
  path: string;
  suffix?: string;
  hint: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    AdminEmptyStateComponent,
    AdminPageHeaderComponent,
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    ImgFallbackDirective,
    VndCurrencyPipe,
  ],
  templateUrl: './admin-dashboard.component.html',
  styles: [
    `
      :host ::ng-deep .stat-card .mat-mdc-card-content {
        padding: 20px 24px;
      }
      .stat-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        color: #fff;
      }
    `,
  ],
})
export class AdminDashboardComponent implements OnInit {
  private readonly companyService = inject(CompanyService);
  private readonly brandService = inject(BrandService);
  private readonly bikeService = inject(ElectricBikeService);
  private readonly agriService = inject(AgriculturalMachineService);
  private readonly applianceService = inject(ElectricalApplianceService);
  readonly accountService = inject(AccountService);

  readonly user = this.accountService.currentUser;
  readonly loading = signal(true);

  readonly companies = signal<Company[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly bikes = signal<ElectricBikeProduct[]>([]);
  readonly agris = signal<AgriculturalMachineProduct[]>([]);
  readonly appliances = signal<ElectricalApplianceProduct[]>([]);

  productCategoryLabel(
    p: ElectricBikeProduct | AgriculturalMachineProduct | ElectricalApplianceProduct,
  ): string {
    return (
      (p as ElectricBikeProduct | AgriculturalMachineProduct).categoryName ??
      (p as ElectricalApplianceProduct).typeName ??
      ''
    );
  }

  recentProducts(): (
    | ElectricBikeProduct
    | AgriculturalMachineProduct
    | ElectricalApplianceProduct
  )[] {
    const merged: (
      | ElectricBikeProduct
      | AgriculturalMachineProduct
      | ElectricalApplianceProduct
    )[] = [...this.bikes(), ...this.agris(), ...this.appliances()];
    return merged
      .sort((a, b) => {
        const ta = new Date(a.createdAt || 0).getTime();
        const tb = new Date(b.createdAt || 0).getTime();
        return tb - ta;
      })
      .slice(0, 5);
  }

  statCards(): StatCard[] {
    const totalStock =
      this.bikes().reduce((s, p) => s + (p.stockQuantity || 0), 0) +
      this.agris().reduce((s, p) => s + (p.stockQuantity || 0), 0) +
      this.appliances().reduce((s, p) => s + (p.stockQuantity || 0), 0);
    return [
      {
        title: 'Công ty',
        value: this.companies().length,
        icon: 'apartment',
        color: '#0ea5e9',
        bg: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
        path: '/admin/companies',
        hint: 'Đối tác & nhà cung cấp',
      },
      {
        title: 'Thương hiệu',
        value: this.brands().length,
        icon: 'sell',
        color: '#8b5cf6',
        bg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        path: '/admin/brands',
        hint: 'Nhãn hiệu sản phẩm',
      },
      {
        title: 'Sản phẩm',
        value: this.bikes().length + this.agris().length + this.appliances().length,
        icon: 'inventory_2',
        color: '#10b981',
        bg: 'linear-gradient(135deg, #10b981, #0ea5e9)',
        path: '/admin/electric-bikes',
        hint: 'Tất cả danh mục',
      },
      {
        title: 'Tổng tồn kho',
        value: totalStock,
        icon: 'archive',
        color: '#f59e0b',
        bg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        path: '/admin/electric-bikes',
        suffix: ' SP',
        hint: 'Số lượng sản phẩm còn hàng',
      },
    ];
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    forkJoin({
      companies: this.companyService.getCompanies(),
      brands: this.brandService.getBrands(),
      bikes: this.bikeService.getAll(),
      agris: this.agriService.getAll(),
      appliances: this.applianceService.getAll(),
    }).subscribe({
      next: (res) => {
        this.companies.set(res.companies);
        this.brands.set(res.brands);
        this.bikes.set(res.bikes);
        this.agris.set(res.agris);
        this.appliances.set(res.appliances);
      },
      error: () => {},
      complete: () => this.loading.set(false),
    });
  }
}
