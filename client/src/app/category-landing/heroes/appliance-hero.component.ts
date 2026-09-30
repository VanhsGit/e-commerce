import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ImgFallbackDirective } from '../../shared/directives/img-fallback.directive';
import { CategoryHeroContent } from '../../shared/models/category-page-content';
import { KindTheme } from '../../shared/models/kind-theme';

interface CollageTile {
  shape: string;
  position: string;
  offset: string;
  /** Trên mobile chỉ hiện 3 ô đầu. */
  small: boolean;
}

/** Hero điện cơ: chữ căn giữa phía trên, bên dưới là collage ảnh so le (cùng một ảnh, cắt khác nhau). */
@Component({
  selector: 'app-appliance-hero',
  standalone: true,
  imports: [NgClass, MatIconModule, ImgFallbackDirective],
  styleUrls: ['./hero-base.scss'],
  template: `
    <section class="hero" aria-labelledby="landing-title">
      <div class="hero__orb hero__orb--a" aria-hidden="true"></div>
      <div class="hero__orb hero__orb--b" aria-hidden="true"></div>
      <div class="hero__grid" aria-hidden="true"></div>

      <div class="hero__inner mx-auto max-w-7xl px-4 pb-14 pt-14 md:px-6 md:pb-20 md:pt-20 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
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

          <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{{ hero().description }}</p>

          <div class="mt-8 flex flex-wrap justify-center gap-3">
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

          <dl class="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:gap-6">
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

        <div class="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-4">
          @for (tile of tiles; track $index) {
            <figure
              class="m-0 overflow-hidden rounded-2xl border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              [ngClass]="[tile.shape, tile.offset, tile.small ? '' : 'hidden md:block']"
            >
              <img
                appImgFallback
                [src]="hero().imageSrc"
                [alt]="$index === 0 ? hero().imageAlt : ''"
                [attr.aria-hidden]="$index === 0 ? null : 'true'"
                [ngClass]="tile.position"
              />
            </figure>
          }
        </div>
      </div>
    </section>
  `,
})
export class ApplianceHeroComponent {
  readonly hero = input.required<CategoryHeroContent>();
  readonly theme = input.required<KindTheme>();
  readonly primary = output<void>();
  readonly secondary = output<void>();

  /** Ô đầu chiếm cả hàng trên mobile; từ md so le theo chiều dọc. */
  readonly tiles: CollageTile[] = [
    { shape: 'col-span-2 aspect-[16/9] md:col-span-1 md:aspect-[3/4]', position: 'object-left', offset: 'md:mt-10', small: true },
    { shape: 'aspect-square md:aspect-[4/5]', position: 'object-center', offset: 'md:mt-0', small: true },
    { shape: 'aspect-square', position: 'object-right', offset: 'md:mt-14', small: true },
    { shape: 'aspect-[3/4]', position: 'object-top', offset: 'md:mt-4', small: false },
  ];
}
