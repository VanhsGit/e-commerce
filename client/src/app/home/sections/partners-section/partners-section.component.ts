import { Component, computed, input, isSignal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from '../../../shared/models/company';

@Component({
  selector: 'app-home-partners',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './partners-section.component.html',
})
export class PartnersSectionComponent {
  readonly companies = input<Company[] | Signal<Company[]>>([]);

  readonly companiesList = computed<Company[]>(() => {
    const value = this.companies();
    if (isSignal(value)) {
      return value();
    }
    return value as Company[];
  });
}
