import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CategoryLandingComponent } from '../../../category-landing/category-landing.component';
import { IndustryContent } from './industry-section.model';

@Component({
  selector: 'app-home-industry',
  standalone: true,
  host: { class: 'block' },
  imports: [CommonModule, CategoryLandingComponent],
  templateUrl: './industry-section.component.html',
})
export class IndustrySectionComponent {
  @Input({ required: true }) content!: IndustryContent;
}
