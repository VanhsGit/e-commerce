import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DEFAULT_HOME_PAGE_CONTENT, HomeRecruitmentContent } from '../../home-content.model';

@Component({
  selector: 'app-home-recruitment',
  standalone: true,
  host: { class: 'block' },
  imports: [MatIconModule],
  templateUrl: './recruitment-section.component.html',
})
export class RecruitmentSectionComponent {
  @Input() content: HomeRecruitmentContent = DEFAULT_HOME_PAGE_CONTENT.recruitment;
}
