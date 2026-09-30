import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { CategoryHeroContent } from '../../shared/models/category-page-content';
import { KindTheme } from '../../shared/models/kind-theme';

/** Hero xe điện: chia đôi, ảnh lớn nghiêng nhẹ bên phải, số liệu thành hàng dưới chữ. */
@Component({
  selector: 'app-bike-hero',
  standalone: true,
  imports: [NgClass, MatIconModule, ImgFallbackDirective],
  styleUrls: ['./hero-base.scss'],
  styles: [
    `
      .bike__stage {
        perspective: 1400px;
      }
      .bike__frame {
        position: absolute;
        inset: 1.25rem -0.75rem -0.75rem 1.25rem;
        border: 1px solid rgba(255, 255, 255, 0.22);
        border-radius: 2rem;
      }
      .bike__media {
        position: relative;
        margin: 0;
        overflow: hidden;
        aspect-ratio: 4 / 3.3;
        border: 1px solid rgba(255, 255, 255, 0.16);
        border-radius: 2rem 0.75rem 2rem 0.75rem;
        box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
        transition: transform 500ms ease;
      }
      @media (min-width: 1024px) {
        .bike__media {
          transform: rotateY(-7deg) rotateZ(1.5deg);
        }
        .bike__stage:hover .bike__media {
          transform: rotateY(-2deg) rotateZ(0deg);
        }
      }
      .bike__veil {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 55%, rgba(4, 31, 28, 0.55));
      }
    `,
  ],
  template: `
    <section class="hero" aria-labelledby="landing-title">
      <div class="hero__orb hero__orb--a" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--b" aria-hidden="true"></div>
      <div class="hero__grid" aria-hidden="true"></div>

      <div class="hero__inner mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div class="grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
          <div class="min-w-0">
            <span
              class="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em]"
              [ngClass]="theme().badge"
            >
              <mat-icon class="!h-4 !w-4" [svgIcon]="'hero:' + theme().icon"></mat-icon>
              {{ hero().badge }}
            </span>

            <h1
              id="landing-title"
              class="mt-6 break-words text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {{ hero().title }}
              <span class="block bg-gradient-to-r bg-clip-text text-transparent" [ngClass]="theme().gradientText">
                {{ hero().highlightedTitle }}
              </span>
            </h1>

            <p class="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">{{ hero().description }}</p>

            <div class="mt-8 flex flex-wrap gap-3">
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
                class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/15"
                (click)="secondary.emit()"
              >
                {{ hero().secondaryCtaLabel }}
              </button>
            </div>

            <dl class="mt-10 grid max-w-xl grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:gap-6">
              @for (metric of hero().metrics; track $index) {
                <div class="min-w-0">
                  <dt class="break-words text-xl font-black text-white sm:text-3xl">{{ metric.value }}</dt>
                  <dd class="mt-1 text-[11px] font-semibold leading-snug text-slate-400 sm:text-sm">
                    {{ metric.label }}
                  </dd>
                </div>
              }
            </dl>
          </div>

          <div class="bike__stage relative min-w-0 lg:pr-3">
            <span class="bike__frame hidden lg:block" aria-hidden="true"></span>
            <figure class="bike__media">
              <img appImgFallback [src]="hero().imageSrc" [alt]="hero().imageAlt" />
              <span class="bike__veil" aria-hidden="true"></span>
            </figure>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BikeHeroComponent {
  readonly hero = input.required<CategoryHeroContent>();
  readonly theme = input.required<KindTheme>();
  readonly primary = output<void>();
  readonly secondary = output<void>();
}
