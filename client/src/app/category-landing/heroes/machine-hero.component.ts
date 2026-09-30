import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { CategoryHeroContent } from '../../shared/models/category-page-content';
import { KindTheme } from '../../shared/models/kind-theme';

/** Hero máy nông nghiệp: ảnh full-bleed phía sau, thẻ chữ góc dưới trái, số liệu thành dải đáy. Mobile: xếp chồng. */
@Component({
  selector: 'app-machine-hero',
  standalone: true,
  imports: [NgClass, MatIconModule, ImgFallbackDirective],
  styleUrls: ['./hero-base.scss'],
  styles: [
    `
      .machine__veil {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(4, 31, 28, 0) 35%, rgba(4, 31, 28, 0.85));
      }
      @media (min-width: 1024px) {
        .machine__veil {
          background:
            linear-gradient(90deg, rgba(4, 31, 28, 0.85), rgba(4, 31, 28, 0.15) 70%),
            linear-gradient(180deg, rgba(4, 31, 28, 0) 40%, rgba(4, 31, 28, 0.8));
        }
      }
    `,
  ],
  template: `
    <section class="hero" aria-labelledby="landing-title">
      <div class="relative aspect-[16/10] w-full lg:absolute lg:inset-0 lg:aspect-auto">
        <img appImgFallback [src]="hero().imageSrc" [alt]="hero().imageAlt" />
        <span class="machine__veil" aria-hidden="true"></span>
      </div>

      <div class="hero__inner mx-auto max-w-7xl px-4 md:px-6 lg:flex lg:min-h-[40rem] lg:items-end lg:px-8 lg:pb-36 lg:pt-28">
        <div
          class="min-w-0 py-10 md:py-12 lg:max-w-xl lg:rounded-2xl lg:border lg:border-white/15 lg:bg-slate-950/65 lg:p-9 lg:shadow-2xl lg:backdrop-blur-md"
        >
          <span
            class="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em]"
            [ngClass]="theme().badge"
          >
            <mat-icon class="!h-4 !w-4" [svgIcon]="'hero:' + theme().icon"></mat-icon>
            {{ hero().badge }}
          </span>

          <h1
            id="landing-title"
            class="mt-5 break-words text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl"
          >
            {{ hero().title }}
            <span class="block bg-gradient-to-r bg-clip-text text-transparent" [ngClass]="theme().gradientText">
              {{ hero().highlightedTitle }}
            </span>
          </h1>

          <p class="mt-5 text-base leading-8 text-slate-300">{{ hero().description }}</p>

          <div class="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-black shadow-lg transition hover:-translate-y-0.5"
              [ngClass]="theme().primaryBtn"
              (click)="primary.emit()"
            >
              {{ hero().primaryCtaLabel }}
              <mat-icon class="!h-4 !w-4" svgIcon="hero:arrow_forward"></mat-icon>
            </button>
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white/15"
              (click)="secondary.emit()"
            >
              {{ hero().secondaryCtaLabel }}
            </button>
          </div>
        </div>
      </div>

      <div class="relative z-[2] border-t border-white/15 bg-slate-950/60 backdrop-blur lg:absolute lg:inset-x-0 lg:bottom-0">
        <dl class="mx-auto grid max-w-7xl grid-cols-3 gap-2 px-4 py-5 sm:gap-6 md:px-6 lg:px-8">
          @for (metric of hero().metrics; track $index) {
            <div class="min-w-0 sm:flex sm:items-baseline sm:gap-3">
              <dt class="break-words text-xl font-black text-white sm:text-3xl">{{ metric.value }}</dt>
              <dd class="mt-1 text-[11px] font-semibold leading-snug text-slate-300 sm:mt-0 sm:text-sm">
                {{ metric.label }}
              </dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
})
export class MachineHeroComponent {
  readonly hero = input.required<CategoryHeroContent>();
  readonly theme = input.required<KindTheme>();
  readonly primary = output<void>();
  readonly secondary = output<void>();
}
