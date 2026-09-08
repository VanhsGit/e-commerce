import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Subject, takeUntil } from 'rxjs';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { CompanyService } from '../services/company.service';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { AgriculturalMachineProduct } from '../shared/models/agriculturalMachineProduct';
import { Company } from '../shared/models/company';
import { AccountService } from '../account/account.service';

type ProductKind = 'bike' | 'agri';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
    NzSkeletonModule,
    NzAlertModule,
    NzDescriptionsModule,
    NzDividerModule,
  ],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly bikeService = inject(ElectricBikeService);
  private readonly agriService = inject(AgriculturalMachineService);
  private readonly companyService = inject(CompanyService);
  private readonly accountService = inject(AccountService);

  private readonly destroy = new Subject<void>();

  readonly loading = signal(true);
  readonly error = signal<string | null>(null);
  readonly authRequired = signal(false);

  readonly bike = signal<ElectricBikeProduct | null>(null);
  readonly agri = signal<AgriculturalMachineProduct | null>(null);
  readonly company = signal<Company | null>(null);

  kind: ProductKind = 'bike';
  productId = 0;

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy)).subscribe((params) => {
      const kindParam = params['kind'] as ProductKind;
      const id = Number(params['id']);
      this.kind = kindParam === 'agri' ? 'agri' : 'bike';
      this.productId = id;
      this.load();
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  private load(): void {
    this.loading.set(true);
    this.error.set(null);
    this.authRequired.set(false);
    this.bike.set(null);
    this.agri.set(null);
    this.company.set(null);

    if (this.kind === 'bike') {
      this.bikeService.getById(this.productId).subscribe({
        next: (r) => {
          this.bike.set(r);
          this.loadCompany(r.companyId);
        },
        error: (e) => this.handleError(e),
      });
    } else {
      if (!this.accountService.currentUser()) {
        this.authRequired.set(true);
        this.loading.set(false);
        return;
      }
      this.agriService.getById(this.productId).subscribe({
        next: (r) => {
          this.agri.set(r);
          this.loadCompany(r.companyId);
        },
        error: (e) => this.handleError(e),
      });
    }
  }

  private loadCompany(id: number): void {
    this.companyService.getCompany(id).subscribe({
      next: (c) => {
        this.company.set(c);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  private handleError(e: any): void {
    this.loading.set(false);
    this.error.set(e?.message || 'Product not found or access denied.');
  }

  currentImage(): string {
    return (
      this.bike()?.pictureUrl || this.agri()?.pictureUrl || 'assets/images/placeholder.png'
    );
  }

  currentName(): string {
    return this.bike()?.name || this.agri()?.name || '';
  }

  currentDescription(): string {
    return this.bike()?.description || this.agri()?.description || '';
  }

  currentBrandName(): string {
    return this.bike()?.brandName || this.agri()?.brandName || '';
  }

  currentModel(): string {
    return this.bike()?.model || this.agri()?.model || '';
  }

  currentPrice(): number {
    return this.bike()?.price || this.agri()?.price || 0;
  }

  currentStock(): number {
    return this.bike()?.stockQuantity || this.agri()?.stockQuantity || 0;
  }
}
