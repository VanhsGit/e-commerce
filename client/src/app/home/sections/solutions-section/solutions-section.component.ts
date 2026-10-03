import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HomeSolutionsContent } from '../../home-content.model';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';

@Component({
  selector: 'app-home-solutions',
  standalone: true,
  host: { class: 'block' },
  imports: [MatIconModule, ImgFallbackDirective],
  templateUrl: './solutions-section.component.html',
  styleUrl: './solutions-section.component.scss',
})
export class SolutionsSectionComponent {
  @Input({ required: true }) content!: HomeSolutionsContent;
  @Input() mobile = false;
  @Output() navigate = new EventEmitter<string>();
}
