import { Component, Input } from '@angular/core';
import { HomeCompanyContent } from '../../home-content.model';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';

@Component({
  selector: 'app-home-company',
  standalone: true,
  host: { class: 'block' },
  imports: [ImgFallbackDirective],
  templateUrl: './company-section.component.html',
})
export class CompanySectionComponent {
  @Input({ required: true }) content!: HomeCompanyContent;
}
