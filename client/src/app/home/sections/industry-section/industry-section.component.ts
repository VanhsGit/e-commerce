import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {
  IndustryContent,
  IndustryImage,
  IndustryTheme,
} from './industry-section.model';

interface ThemeClasses {
  section: string;
  eyebrow: string;
  icon: string;
  price: string;
  button: string;
  glow: string;
  chip: string;
  panel: string;
}

const THEMES: Record<IndustryTheme, ThemeClasses> = {
  sky: {
    section: 'bg-slate-50',
    eyebrow: 'bg-sky-100 text-sky-800',
    icon: 'bg-sky-100 text-sky-700',
    price: 'text-sky-700',
    button: '!bg-sky-600 hover:!bg-sky-700',
    glow: 'bg-sky-400/20',
    chip: 'border-sky-200 bg-sky-50 text-sky-800',
    panel: 'border-sky-100 bg-sky-50/80',
  },
  amber: {
    section: 'bg-white',
    eyebrow: 'bg-amber-100 text-amber-900',
    icon: 'bg-amber-100 text-amber-700',
    price: 'text-amber-700',
    button: '!bg-amber-500 hover:!bg-amber-600',
    glow: 'bg-amber-400/20',
    chip: 'border-amber-200 bg-amber-50 text-amber-900',
    panel: 'border-amber-100 bg-amber-50/80',
  },
  sage: {
    section: 'bg-emerald-50/50',
    eyebrow: 'bg-emerald-100 text-emerald-900',
    icon: 'bg-emerald-100 text-emerald-700',
    price: 'text-emerald-700',
    button: '!bg-emerald-600 hover:!bg-emerald-700',
    glow: 'bg-emerald-400/20',
    chip: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    panel: 'border-emerald-100 bg-emerald-50/80',
  },
};

@Component({
  selector: 'app-home-industry',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './industry-section.component.html',
})
export class IndustrySectionComponent {
  @Input({ required: true }) content!: IndustryContent;

  readonly listingPath = '/products';

  get classes(): ThemeClasses {
    return THEMES[this.content.theme];
  }

  get queryParams(): Record<string, string> {
    return { type: this.content.kind };
  }

  get galleryClasses(): string {
    switch (this.content.galleryLayout) {
      case 'split':
        return 'lg:col-span-7 lg:order-1';
      case 'panorama':
        return 'lg:col-span-8 lg:order-2';
      case 'mosaic':
        return 'lg:col-span-7 lg:order-2';
    }
  }

  get contentClasses(): string {
    switch (this.content.galleryLayout) {
      case 'split':
        return 'lg:col-span-5 lg:order-2';
      case 'panorama':
        return 'lg:col-span-4 lg:order-1';
      case 'mosaic':
        return 'lg:col-span-5 lg:order-1';
    }
  }

  trackImage(_index: number, image: IndustryImage): string {
    return `${image.src}-${image.label}`;
  }
}
