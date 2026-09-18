import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-company-story',
  standalone: true,
  imports: [MatIconModule, 
    CommonModule,
  ],
  templateUrl: './company-story-section.component.html',
})
export class CompanyStorySectionComponent {
  @Input() story: any | null = null;
}
