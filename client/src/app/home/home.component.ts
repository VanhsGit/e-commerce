import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CompanyService } from '../services/company.service';
import { ElectricBikeService } from '../services/electric-bike.service';
import { Company } from '../shared/models/company';
import { ElectricBikeProduct } from '../shared/models/electricBikeProduct';
import { ElectricBikeCategory } from '../shared/models/electricBikeProduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NzButtonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly companyService = inject(CompanyService);
  private readonly bikeService = inject(ElectricBikeService);

  readonly companies = signal<Company[]>([]);
  readonly bikeModels = signal<ElectricBikeProduct[]>([]);
  readonly bikeParts = signal<ElectricBikeProduct[]>([]);

  async ngOnInit(): Promise<void> {
    this.loadData();
  }

  private loadData() {
    this.companyService.getCompanies().subscribe((r) => this.companies.set(r));
    this.bikeService.getAll().subscribe((r) => {
      this.bikeModels.set(r.filter((x) => x.category === ElectricBikeCategory.ElectricBikeModel));
      this.bikeParts.set(r.filter((x) => x.category === ElectricBikeCategory.ElectricBikePart));
    });
  }

  getBikeDetailUrl(id: number) {
    return ['/product-detail', 'bike', id];
  }
}

