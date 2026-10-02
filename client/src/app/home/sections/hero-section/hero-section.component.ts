import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { HomeHeroCard, HomeHeroContent } from '../industry-section/industry-content';
import { IndustryKind } from '../industry-section/industry-section.model';

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
})
export class HeroSectionComponent {
  @Input({ required: true }) content!: HomeHeroContent;
  @Output() navigate = new EventEmitter<string>();

  trackCard(_: number, card: HomeHeroCard): IndustryKind {
    return card.kind;
  }
}
