import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-about',
  standalone: true,
  imports: [MatIconModule, CommonModule, ImgFallbackDirective],
  templateUrl: './about-feature-section.component.html',
})
export class AboutFeatureSectionComponent {}
