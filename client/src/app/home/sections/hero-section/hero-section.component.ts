import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { HOME_HERO, HomeHeroCard } from '../industry-section/industry-content';
import { IndustryKind } from '../industry-section/industry-section.model';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NzButtonModule,
    MatIconModule,
    ImgFallbackDirective,
  ],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {
  @Output() navigate = new EventEmitter<string>();

  readonly listingPath = '/products';
  readonly content = HOME_HERO;

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

  queryParams(kind: IndustryKind): Record<string, string> {
    return { type: kind };
  }

  cardLayout(index: number): string {
    return index === 0 ? 'sm:row-span-2 sm:min-h-0' : '';
  }

  trackCard(_: number, card: HomeHeroCard): IndustryKind {
    return card.kind;
  }
}
