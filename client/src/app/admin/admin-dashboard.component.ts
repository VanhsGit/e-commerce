import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { AccountService } from '../account/account.service';
import { CompanyService } from '../services/company.service';
import { BrandService } from '../services/brand.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { AgriculturalMachineService } from '../services/agricultural-machine.service';
import { CreateCompany } from '../shared/models/company';
import { CreateBrand } from '../shared/models/brand';
import {
  CreateElectricBikeProduct,
  ElectricBikeCategory,
  UpdateElectricBikeProduct,
} from '../shared/models/electricBikeProduct';
import {
  AgriculturalMachineCategory,
  CreateAgriculturalMachineProduct,
  UpdateAgriculturalMachineProduct,
} from '../shared/models/agriculturalMachineProduct';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTabsModule,
    NzTableModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzPopconfirmModule,
    NzTagModule,
    NzCardModule,
    NzStatisticModule,
    NzDividerModule,
  ],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly msg = inject(NzMessageService);
  private readonly accountService = inject(AccountService);
  private readonly companyService = inject(CompanyService);
  private readonly brandService = inject(BrandService);
  private readonly bikeService = inject(ElectricBikeService);
  private readonly agriService = inject(AgriculturalMachineService);

  readonly user = this.accountService.currentUser;

  companies = signal<any[]>([]);
  brands = signal<any[]>([]);
  bikes = signal<any[]>([]);
  agris = signal<any[]>([]);

  loadingCompanies = false;
  loadingBrands = false;
  loadingBikes = false;
  loadingAgris = false;

  submittingCompany = false;
  submittingBrand = false;
  submittingBike = false;
  submittingAgri = false;

  companyModalOpen = false;
  brandModalOpen = false;
  bikeModalOpen = false;
  agriModalOpen = false;

  editingCompany: any = null;
  editingBrand: any = null;
  editingBike: any = null;
  editingAgri: any = null;

  companyForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    logoUrl: [''],
    address: [''],
    phoneNumber: [''],
    email: ['', [Validators.email]],
    website: [''],
  });

  brandForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    logoUrl: [''],
  });

  bikeForm = this.fb.group({
    id: [null as number | null],
    name: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    category: [1, Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    stockQuantity: [0, Validators.required],
    pictureUrl: [''],
    voltage: [''],
    power: [''],
    batteryCapacity: [''],
    compatibility: [''],
    companyId: [0 as number | null],
    brandId: [0 as number | null],
  });

  agriForm = this.fb.group({
    id: [null as number | null],
    name: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    category: [1, Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    stockQuantity: [0, Validators.required],
    pictureUrl: [''],
    engineType: [''],
    power: [''],
    fuelType: [''],
    capacity: [''],
    compatibility: [''],
    companyId: [0 as number | null],
    brandId: [0 as number | null],
  });

  ngOnInit(): void {
    this.refreshCompanies();
    this.refreshBrands();
    this.refreshBikes();
    this.refreshAgris();
  }

  tabChanged(_: number): void {}

  // ==================== COMPANIES ====================
  refreshCompanies(): void {
    this.loadingCompanies = true;
    this.companyService.getCompanies().subscribe({
      next: (r) => this.companies.set(r),
      error: () => this.msg.error('Failed to load companies'),
      complete: () => (this.loadingCompanies = false),
    });
  }

  openCompanyModal(c?: any): void {
    this.editingCompany = c || null;
    if (c) {
      this.companyForm.patchValue({
        name: c.name,
        description: c.description,
        logoUrl: c.logoUrl,
        address: c.address,
        phoneNumber: c.phoneNumber,
        email: c.email,
        website: c.website,
      });
    } else {
      this.companyForm.reset();
    }
    this.companyModalOpen = true;
  }

  submitCompany(): void {
    if (this.companyForm.invalid) {
      this.companyForm.markAllAsTouched();
      return;
    }
    this.submittingCompany = true;
    const dto = this.companyForm.value as CreateCompany;
    const req = this.editingCompany
      ? this.companyService.update(this.editingCompany.id, dto)
      : this.companyService.create(dto);
    req.subscribe({
      next: () => {
        this.msg.success(this.editingCompany ? 'Company updated' : 'Company created');
        this.companyModalOpen = false;
        this.refreshCompanies();
      },
      error: (e) =>
        this.msg.error(e?.error?.message || 'Failed to save company'),
      complete: () => (this.submittingCompany = false),
    });
  }

  removeCompany(id: number): void {
    this.companyService.remove(id).subscribe({
      next: () => {
        this.msg.success('Company deleted');
        this.refreshCompanies();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Delete failed'),
    });
  }

  // ==================== BRANDS ====================
  refreshBrands(): void {
    this.loadingBrands = true;
    this.brandService.getBrands().subscribe({
      next: (r) => this.brands.set(r),
      error: () => this.msg.error('Failed to load brands'),
      complete: () => (this.loadingBrands = false),
    });
  }

  openBrandModal(b?: any): void {
    this.editingBrand = b || null;
    if (b) {
      this.brandForm.patchValue({
        name: b.name,
        description: b.description,
        logoUrl: b.logoUrl,
      });
    } else {
      this.brandForm.reset();
    }
    this.brandModalOpen = true;
  }

  submitBrand(): void {
    if (this.brandForm.invalid) {
      this.brandForm.markAllAsTouched();
      return;
    }
    this.submittingBrand = true;
    const dto = this.brandForm.value as CreateBrand;
    const req = this.editingBrand
      ? this.brandService.update(this.editingBrand.id, dto)
      : this.brandService.create(dto);
    req.subscribe({
      next: () => {
        this.msg.success(this.editingBrand ? 'Brand updated' : 'Brand created');
        this.brandModalOpen = false;
        this.refreshBrands();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Failed to save brand'),
      complete: () => (this.submittingBrand = false),
    });
  }

  removeBrand(id: number): void {
    this.brandService.remove(id).subscribe({
      next: () => {
        this.msg.success('Brand deleted');
        this.refreshBrands();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Delete failed'),
    });
  }

  // ==================== ELECTRIC BIKES ====================
  refreshBikes(): void {
    this.loadingBikes = true;
    this.bikeService.getAll().subscribe({
      next: (r) => this.bikes.set(r),
      error: () => this.msg.error('Failed to load bikes'),
      complete: () => (this.loadingBikes = false),
    });
  }

  openBikeModal(p?: any): void {
    this.editingBike = p || null;
    if (p) {
      this.bikeForm.patchValue({
        id: p.id,
        name: p.name,
        brand: p.brand,
        model: p.model,
        category: p.category,
        description: p.description,
        price: p.price,
        stockQuantity: p.stockQuantity,
        pictureUrl: p.pictureUrl,
        voltage: p.voltage,
        power: p.power,
        batteryCapacity: p.batteryCapacity,
        compatibility: p.compatibility,
        companyId: p.companyId,
        brandId: p.brandId,
      });
    } else {
      this.bikeForm.reset({
      category: 1,
      price: 0,
      stockQuantity: 0,
    });
    }
    this.bikeModalOpen = true;
  }

  submitBike(): void {
    if (this.bikeForm.invalid) {
      this.bikeForm.markAllAsTouched();
      return;
    }
    this.submittingBike = true;
    const raw: any = this.bikeForm.value;
    const data: any = {
      name: raw.name,
      brand: raw.brand,
      model: raw.model,
      category: raw.category as ElectricBikeCategory,
      description: raw.description,
      price: raw.price,
      stockQuantity: raw.stockQuantity,
      pictureUrl: raw.pictureUrl || '',
      voltage: raw.voltage || null,
      power: raw.power || null,
      batteryCapacity: raw.batteryCapacity || null,
      compatibility: raw.compatibility || null,
      companyId: raw.companyId,
      brandId: raw.brandId,
    };
    const req = this.editingBike
      ? this.bikeService.update(this.editingBike.id, data as UpdateElectricBikeProduct)
      : this.bikeService.create(data as CreateElectricBikeProduct);
    req.subscribe({
      next: () => {
        this.msg.success(this.editingBike ? 'Product updated' : 'Product created');
        this.bikeModalOpen = false;
        this.refreshBikes();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Failed to save product'),
      complete: () => (this.submittingBike = false),
    });
  }

  removeBike(id: number): void {
    this.bikeService.remove(id).subscribe({
      next: () => {
        this.msg.success('Product deleted');
        this.refreshBikes();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Delete failed'),
    });
  }

  // ==================== AGRICULTURAL MACHINES ====================
  refreshAgris(): void {
    this.loadingAgris = true;
    this.agriService.getAll().subscribe({
      next: (r) => this.agris.set(r),
      error: () => this.msg.error('Failed to load agri machines'),
      complete: () => (this.loadingAgris = false),
    });
  }

  openAgriModal(p?: any): void {
    this.editingAgri = p || null;
    if (p) {
      this.agriForm.patchValue({
        id: p.id,
        name: p.name,
        brand: p.brand,
        model: p.model,
        category: p.category,
        description: p.description,
        price: p.price,
        stockQuantity: p.stockQuantity,
        pictureUrl: p.pictureUrl,
        engineType: p.engineType,
        power: p.power,
        fuelType: p.fuelType,
        capacity: p.capacity,
        compatibility: p.compatibility,
        companyId: p.companyId,
        brandId: p.brandId,
      });
    } else {
      this.agriForm.reset({ category: 1, price: 0, stockQuantity: 0 });
    }
    this.agriModalOpen = true;
  }

  submitAgri(): void {
    if (this.agriForm.invalid) {
      this.agriForm.markAllAsTouched();
      return;
    }
    this.submittingAgri = true;
    const raw: any = this.agriForm.value;
    const data: any = {
      name: raw.name,
      brand: raw.brand,
      model: raw.model,
      category: raw.category as AgriculturalMachineCategory,
      description: raw.description,
      price: raw.price,
      stockQuantity: raw.stockQuantity,
      pictureUrl: raw.pictureUrl || '',
      engineType: raw.engineType || null,
      power: raw.power || null,
      fuelType: raw.fuelType || null,
      capacity: raw.capacity || null,
      compatibility: raw.compatibility || null,
      companyId: raw.companyId,
      brandId: raw.brandId,
    };
    const req = this.editingAgri
      ? this.agriService.update(this.editingAgri.id, data as UpdateAgriculturalMachineProduct)
      : this.agriService.create(data as CreateAgriculturalMachineProduct);
    req.subscribe({
      next: () => {
        this.msg.success(this.editingAgri ? 'Product updated' : 'Product created');
        this.agriModalOpen = false;
        this.refreshAgris();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Failed to save product'),
      complete: () => (this.submittingAgri = false),
    });
  }

  removeAgri(id: number): void {
    this.agriService.remove(id).subscribe({
      next: () => {
        this.msg.success('Product deleted');
        this.refreshAgris();
      },
      error: (e) => this.msg.error(e?.error?.message || 'Delete failed'),
    });
  }
}
