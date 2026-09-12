import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-company-story',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './company-story-section.component.html',
})
export class CompanyStorySectionComponent {
  @Input() story: any | null = null;
}
