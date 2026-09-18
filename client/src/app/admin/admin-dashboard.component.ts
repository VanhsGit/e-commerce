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
import { Company } from '../shared/models/company';
import { Brand } from '../shared/models/brand';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';
import { ImgFallbackDirective } from '../shared/directives/img-fallback.directive';
import { AdminPageHeaderComponent } from './shared/page-header/admin-page-header.component';
import { AdminEmptyStateComponent } from './shared/empty-state/admin-empty-state.component';
import { MatIconModule } from '@angular/material/icon';

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

interface Shortcut {
  label: string;
  icon: string;
  path: string;
  description: string;
  accent: string;
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
  ],
  templateUrl: './admin-dashboard.component.html',
  styles: [
    `
      :host ::ng-deep .stat-card .mat-mdc-card-content {
        padding: 20px 24px;
      }
      .dashboard-avatar {
        width: 44px;
        height: 44px;
        border-radius: 999px;
        background: linear-gradient(135deg, #0ea5e9, #6366f1);
        color: #fff;
        font-weight: 900;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
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
      .quick-link {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 16px;
        border-radius: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-decoration: none;
        border: 1px solid #e2e8f0;
        color: #0f172a;
        background: #fff;
      }
      .quick-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        border-color: #cbd5e1;
      }
      .quick-icon {
        width: 44px;
        height: 44px;
        border-radius: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: #fff;
        flex-shrink: 0;
      }
    `,
  ],
})
export class AdminDashboardComponent implements OnInit {
  private readonly companyService = inject(CompanyService);
  private readonly brandService = inject(BrandService);
  private readonly bikeService = inject(ElectricBikeService);
  private readonly agriService = inject(AgriculturalMachineService);
  readonly accountService = inject(AccountService);

  readonly user = this.accountService.currentUser;
  readonly loading = signal(true);

  readonly companies = signal<Company[]>([]);
  readonly brands = signal<Brand[]>([]);
  readonly bikes = signal<ElectricBikeProduct[]>([]);
  readonly agris = signal<AgriculturalMachineProduct[]>([]);

  readonly shortcuts: Shortcut[] = [
    {
      label: 'Công ty',
      icon: 'apartment',
      path: '/admin/companies',
      description: 'Quản lý đối tác & nhà cung cấp',
      accent: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
    },
    {
      label: 'Thương hiệu',
      icon: 'sell',
      path: '/admin/brands',
      description: 'Nhãn hiệu sản phẩm',
      accent: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    },
    {
      label: 'Xe điện',
      icon: 'pedal_bike',
      path: '/admin/electric-bikes',
      description: 'Danh mục xe & phụ tùng',
      accent: 'linear-gradient(135deg, #10b981, #059669)',
    },
    {
      label: 'Máy nông nghiệp',
      icon: 'settings',
      path: '/admin/agricultural-machines',
      description: 'Máy & phụ tùng nông nghiệp',
      accent: 'linear-gradient(135deg, #f59e0b, #d97706)',
    },
    {
      label: 'Người dùng',
      icon: 'group',
      path: '/admin/users',
      description: 'Tài khoản & phân quyền',
      accent: 'linear-gradient(135deg, #ef4444, #dc2626)',
    },
    {
      label: 'Thư viện ảnh',
      icon: 'image',
      path: '/admin/media',
      description: 'Upload & quản lý hình ảnh',
      accent: 'linear-gradient(135deg, #ec4899, #be185d)',
    },
  ];

  recentProducts(): (ElectricBikeProduct | AgriculturalMachineProduct)[] {
    const merged: (ElectricBikeProduct | AgriculturalMachineProduct)[] = [
      ...this.bikes(),
      ...this.agris(),
    ];
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
      this.agris().reduce((s, p) => s + (p.stockQuantity || 0), 0);
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
        value: this.bikes().length + this.agris().length,
        icon: 'inventory_2',
        color: '#10b981',
        bg: 'linear-gradient(135deg, #10b981, #0ea5e9)',
        path: '/admin/electric-bikes',
        hint: 'Xe điện & máy nông nghiệp',
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
    }).subscribe({
      next: (res) => {
        this.companies.set(res.companies);
        this.brands.set(res.brands);
        this.bikes.set(res.bikes);
        this.agris.set(res.agris);
      },
      error: () => {},
      complete: () => this.loading.set(false),
    });
  }
}
