import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
    ImgFallbackDirective,
  ],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  @Output() navigate = new EventEmitter<string>();

  readonly listingPath = '/products';
  readonly allProductsQueryParams = { type: 'all' as const };
}
