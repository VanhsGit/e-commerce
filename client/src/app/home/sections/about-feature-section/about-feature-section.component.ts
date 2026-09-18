import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [CommonModule, ImgFallbackDirective],
  templateUrl: './about-feature-section.component.html',
})
export class AboutFeatureSectionComponent {}
