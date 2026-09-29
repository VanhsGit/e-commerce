import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { HomeHeroCard, HomeHeroContent } from '../industry-section/industry-content';
import { IndustryKind } from '../industry-section/industry-section.model';

@Component({
  selector: 'app-home-hero',
  standalone: true,
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
  @Output() navigate = new EventEmitter<string>();

  readonly themeClasses: Record<IndustryKind, { chip: string; button: string; text: string }> = {
    bike: {
      chip: 'border-sky-300/20 bg-sky-300/10 text-sky-200',
      button: '!bg-sky-500 !text-white',
      text: 'text-sky-300',
    },
    machine: {
      chip: 'border-amber-300/20 bg-amber-300/10 text-amber-200',
      button: '!bg-amber-400 !text-amber-950',
      text: 'text-amber-300',
    },
    appliance: {
      chip: 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200',
      button: '!bg-emerald-400 !text-emerald-950',
      text: 'text-emerald-300',
    },
  };

  trackCard(_: number, card: HomeHeroCard): IndustryKind {
    return card.kind;
  }
}
