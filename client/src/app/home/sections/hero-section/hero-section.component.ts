import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { HomeHeroContent } from '../industry-section/industry-content';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  host: { class: 'block' },
  imports: [
    CommonModule,
    MatIconModule,
    ImgFallbackDirective,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  @Input({ required: true }) content!: HomeHeroContent;
  @Input() mobile = false;
  @Output() navigate = new EventEmitter<string>();

  trackCard(_index: number, card: HomeHeroContent['cards'][number]): string {
    return card.kind;
  }
}
