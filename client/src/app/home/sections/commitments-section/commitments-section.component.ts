import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { HomeCommitmentsContent } from '../../home-content.model';

@Component({
  selector: 'app-home-commitments',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './commitments-section.component.html',
})
export class CommitmentsSectionComponent {
  @Input({ required: true }) content!: HomeCommitmentsContent;
}
