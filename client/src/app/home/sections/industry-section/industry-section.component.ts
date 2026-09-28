import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { IndustryContent, IndustryTheme } from './industry-section.model';

interface ThemeClasses {
  section: string;
  eyebrow: string;
  icon: string;
  price: string;
  button: string;
  glow: string;
}

const THEMES: Record<IndustryTheme, ThemeClasses> = {
  sky: {
    section: 'bg-slate-50',
    eyebrow: 'bg-sky-100 text-sky-800',
    icon: 'bg-sky-100 text-sky-700',
    price: 'text-sky-700',
    button: '!bg-sky-600 hover:!bg-sky-700',
    glow: 'bg-sky-400/20',
  },
  amber: {
    section: 'bg-white',
    eyebrow: 'bg-amber-100 text-amber-900',
    icon: 'bg-amber-100 text-amber-700',
    price: 'text-amber-700',
    button: '!bg-amber-500 hover:!bg-amber-600',
    glow: 'bg-amber-400/20',
  },
  sage: {
    section: 'bg-emerald-50/50',
    eyebrow: 'bg-emerald-100 text-emerald-900',
    icon: 'bg-emerald-100 text-emerald-700',
    price: 'text-emerald-700',
    button: '!bg-emerald-600 hover:!bg-emerald-700',
    glow: 'bg-emerald-400/20',
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

  get mediaOrder(): string {
    return this.content.mediaPosition === 'left' ? 'lg:order-1' : 'lg:order-2';
  }

  get contentOrder(): string {
    return this.content.mediaPosition === 'left' ? 'lg:order-2' : 'lg:order-1';
  }
}
