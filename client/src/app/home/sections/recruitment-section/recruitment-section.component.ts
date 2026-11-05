import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HomeRecruitmentContent } from '../../home-content.model';

@Component({
  selector: 'app-home-recruitment',
  standalone: true,
  host: { class: 'block' },
  imports: [MatIconModule],
  templateUrl: './recruitment-section.component.html',
})
export class RecruitmentSectionComponent {
  @Input({ required: true }) content!: HomeRecruitmentContent;
}
