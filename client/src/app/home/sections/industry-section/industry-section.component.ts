import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import {
  IndustryContent,
  IndustryImage,
} from './industry-section.model';

@Component({
  selector: 'app-home-industry',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    ImgFallbackDirective,
  ],
  templateUrl: './industry-section.component.html',
  styleUrl: './industry-section.component.scss',
})
export class IndustrySectionComponent {
  @Input({ required: true }) content!: IndustryContent;

  readonly listingPath = '/products';

  get queryParams(): Record<string, string> {
    return { type: this.content.kind };
  }

  get themeClass(): string {
    return `industry--${this.content.theme}`;
  }

  get layoutClass(): string {
    return `industry-scene--${this.content.galleryLayout}`;
  }

  trackImage(_index: number, image: IndustryImage): string {
    return `${image.src}-${image.label}`;
  }
}
