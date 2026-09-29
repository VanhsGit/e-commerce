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

  get sceneClasses(): string {
    switch (this.content.galleryLayout) {
      case 'kinetic':
        return 'lg:grid lg:grid-cols-12 lg:items-center lg:gap-16';
      case 'field':
        return 'lg:block lg:min-h-[980px]';
      case 'constellation':
        return 'lg:grid lg:grid-cols-12 lg:items-center lg:gap-16';
    }
  }

  get contentClasses(): string {
    switch (this.content.galleryLayout) {
      case 'kinetic':
        return 'order-2 lg:order-1 lg:col-span-5';
      case 'field':
        return 'order-2 lg:absolute lg:left-0 lg:top-16 lg:z-30 lg:w-[43%] lg:rounded-[2.5rem] lg:bg-white/95 lg:p-10 lg:shadow-2xl lg:backdrop-blur-md xl:p-12';
      case 'constellation':
        return 'order-2 lg:order-1 lg:col-span-5';
    }
  }

  get stageClasses(): string {
    switch (this.content.galleryLayout) {
      case 'kinetic':
        return 'order-1 lg:order-2 lg:col-span-7 lg:min-h-[820px]';
      case 'field':
        return 'order-1 lg:absolute lg:inset-0 lg:min-h-[980px]';
      case 'constellation':
        return 'order-1 lg:order-2 lg:col-span-7 lg:min-h-[780px]';
    }
  }

  get mainImageClasses(): string {
    switch (this.content.galleryLayout) {
      case 'kinetic':
        return 'h-[500px] w-full rounded-[3.5rem_1.5rem_4.5rem_1.5rem] sm:h-[620px] lg:absolute lg:right-0 lg:top-12 lg:h-[720px] lg:w-[86%] lg:rounded-[7rem_2rem_6rem_2rem]';
      case 'field':
        return 'h-[520px] w-full rounded-[3rem_1.5rem_3rem_1.5rem] sm:h-[660px] lg:absolute lg:inset-0 lg:h-full lg:rounded-[4rem]';
      case 'constellation':
        return 'mx-auto h-[520px] w-full rounded-[45%_55%_38%_62%/42%_36%_64%_58%] sm:h-[640px] lg:absolute lg:right-[8%] lg:top-10 lg:h-[700px] lg:w-[76%]';
    }
  }

  secondaryImageClasses(index: number): string {
    const mobile =
      'relative h-44 w-[72vw] max-w-[280px] shrink-0 snap-center overflow-hidden rounded-[2rem] shadow-xl ring-4 ring-white lg:max-w-none';

    const positions: Record<IndustryContent['galleryLayout'], string[]> = {
      kinetic: [
        'lg:absolute lg:left-0 lg:top-24 lg:h-64 lg:w-48 lg:-rotate-6',
        'lg:absolute lg:-right-3 lg:bottom-8 lg:h-60 lg:w-60 lg:rotate-6',
      ],
      field: [
        'lg:absolute lg:bottom-[-2.5rem] lg:left-[46%] lg:h-52 lg:w-[17%] lg:-rotate-3',
        'lg:absolute lg:bottom-[-1rem] lg:left-[65%] lg:h-48 lg:w-[17%] lg:rotate-2',
        'lg:absolute lg:bottom-[-3.25rem] lg:right-0 lg:h-56 lg:w-[17%] lg:-rotate-2',
      ],
      constellation: [
        'lg:absolute lg:left-0 lg:top-8 lg:h-44 lg:w-44 lg:-rotate-6 lg:rounded-full',
        'lg:absolute lg:right-0 lg:top-24 lg:h-52 lg:w-40 lg:rotate-6',
        'lg:absolute lg:bottom-20 lg:left-0 lg:h-44 lg:w-52 lg:rotate-3',
        'lg:absolute lg:bottom-0 lg:right-16 lg:h-44 lg:w-44 lg:-rotate-3 lg:rounded-full',
      ],
    };

    return `${mobile} ${positions[this.content.galleryLayout][index] ?? ''}`;
  }

  trackImage(_index: number, image: IndustryImage): string {
    return `${image.src}-${image.label}`;
  }
}
