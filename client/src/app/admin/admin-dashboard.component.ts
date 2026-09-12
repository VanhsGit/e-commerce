import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { AccountService } from '../account/account.service';
import { CompanyService } from '../services/company.service';
import { BrandService } from '../services/brand.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { Company } from '../shared/models/company';
import { Brand } from '../shared/models/brand';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';

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
    CommonModule,
    RouterLink,
    NzAvatarModule,
    NzButtonModule,
    NzCardModule,
    NzStatisticModule,
    NzGridModule,
    NzIconModule,
    NzEmptyModule,
    NzSkeletonModule,
    NzDividerModule,
    NzTagModule,
    NzSpaceModule,
  ],
  templateUrl: './admin-dashboard.component.html',
  styles: [
    `
      :host ::ng-deep .stat-card .ant-card-body { padding: 20px 24px; }
      .stat-icon {
        width: 52px; height: 52px; border-radius: 14px;
        display: inline-flex; align-items: center; justify-content: center;
        font-size: 22px; color: #fff;
      }
      .quick-link {
        display: flex; align-items: center; gap: 14px;
        padding: 16px; border-radius: 12px; cursor: pointer;
        transition: all .2s ease; text-decoration: none;
        border: 1px solid #e2e8f0; color: #0f172a; background: #fff;
      }
      .quick-link:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08); border-color: #cbd5e1; }
      .quick-icon {
        width: 44px; height: 44px; border-radius: 10px;
        display: inline-flex; align-items: center; justify-content: center;
        font-size: 18px; color: #fff; flex-shrink: 0;
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
    { label: 'Công ty', icon: 'fa-building', path: '/admin/companies', description: 'Quản lý đối tác & nhà cung cấp', accent: 'linear-gradient(135deg, #0ea5e9, #0284c7)' },
    { label: 'Thương hiệu', icon: 'fa-tags', path: '/admin/brands', description: 'Nhãn hiệu sản phẩm', accent: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
    { label: 'Xe điện', icon: 'fa-bicycle', path: '/admin/electric-bikes', description: 'Danh mục xe & phụ tùng', accent: 'linear-gradient(135deg, #10b981, #059669)' },
    { label: 'Máy nông nghiệp', icon: 'fa-cogs', path: '/admin/agricultural-machines', description: 'Máy & phụ tùng nông nghiệp', accent: 'linear-gradient(135deg, #f59e0b, #d97706)' },
    { label: 'Người dùng', icon: 'fa-users', path: '/admin/users', description: 'Tài khoản & phân quyền', accent: 'linear-gradient(135deg, #ef4444, #dc2626)' },
    { label: 'Thư viện ảnh', icon: 'fa-picture-o', path: '/admin/media', description: 'Upload & quản lý hình ảnh', accent: 'linear-gradient(135deg, #ec4899, #be185d)' },
  ];

  recentProducts(): (ElectricBikeProduct | AgriculturalMachineProduct)[] {
    const merged: (ElectricBikeProduct | AgriculturalMachineProduct)[] = [
      ...this.bikes(),
      ...this.agris(),
    ];
    return merged.sort((a, b) => {
      const ta = new Date(a.createdAt || 0).getTime();
      const tb = new Date(b.createdAt || 0).getTime();
      return tb - ta;
    }).slice(0, 5);
  }

  statCards(): StatCard[] {
    const totalStock =
      this.bikes().reduce((s, p) => s + (p.stockQuantity || 0), 0) +
      this.agris().reduce((s, p) => s + (p.stockQuantity || 0), 0);
    return [
      {
        title: 'Công ty',
        value: this.companies().length,
        icon: 'fa-building',
        color: '#0ea5e9',
        bg: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
        path: '/admin/companies',
        hint: 'Đối tác & nhà cung cấp',
      },
      {
        title: 'Thương hiệu',
        value: this.brands().length,
        icon: 'fa-tags',
        color: '#8b5cf6',
        bg: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        path: '/admin/brands',
        hint: 'Nhãn hiệu sản phẩm',
      },
      {
        title: 'Sản phẩm',
        value: this.bikes().length + this.agris().length,
        icon: 'fa-cubes',
        color: '#10b981',
        bg: 'linear-gradient(135deg, #10b981, #0ea5e9)',
        path: '/admin/electric-bikes',
        hint: 'Xe điện & máy nông nghiệp',
      },
      {
        title: 'Tổng tồn kho',
        value: totalStock,
        icon: 'fa-warehouse',
        color: '#f59e0b',
        bg: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        path: '/admin/electric-bikes',
        suffix: ' SP',
        hint: 'Số lượng sản phẩm còn hàng',
      },
    ];
  }

  ngOnInit(): void {
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
