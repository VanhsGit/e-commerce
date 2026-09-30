import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KindTheme } from '../../models/kind-theme';
import { PRODUCT_KIND_LABELS, PRODUCT_KIND_ROUTES, ProductCategory, ProductKind } from '../../models/product-category';

/**
 * Thanh danh mục nằm dưới header trên 3 trang ngành hàng.
 * Chỉ điều hướng bằng `?category=`; trạng thái active đọc lại từ URL nên luôn khớp với catalog của trang.
 */
@Component({
  selector: 'cm-category-bar',
  standalone: true,
  imports: [NgClass, RouterLink],
  template: `
    <nav class="border-t" [ngClass]="theme().headerTint" [attr.aria-label]="'Danh mục ' + kindLabel()">
      <div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <ul class="bar-scroll flex gap-2 overflow-x-auto py-2">
          <li class="shrink-0">
            <a
              [routerLink]="route()"
              [queryParams]="{ category: null }"
              queryParamsHandling="merge"
              class="chip px-3.5 py-1.5 text-xs"
              [ngClass]="!activeSlug() ? theme().barChipOn : theme().barChipOff"
              [attr.aria-current]="!activeSlug() ? 'true' : null"
            >
              Tất cả
            </a>
          </li>
          @for (root of roots(); track root.id) {
            <li class="shrink-0">
              <a
                [routerLink]="route()"
                [queryParams]="{ category: root.slug }"
                queryParamsHandling="merge"
                class="chip px-3.5 py-1.5 text-xs"
                [ngClass]="activeRoot()?.id === root.id ? theme().barChipOn : theme().barChipOff"
                [attr.aria-current]="activeRoot()?.id === root.id ? 'true' : null"
              >
                {{ root.name }}
              </a>
            </li>
          }
        </ul>
        @if (activeRoot(); as parent) {
          @if (parent.children?.length) {
            <ul class="bar-scroll flex gap-1.5 overflow-x-auto pb-2" [attr.aria-label]="'Phân loại ' + parent.name">
              @for (child of parent.children; track child.id) {
                <li class="shrink-0">
                  <a
                    [routerLink]="route()"
                    [queryParams]="{ category: child.slug }"
                    queryParamsHandling="merge"
                    class="chip px-3 py-1 text-[11px]"
                    [ngClass]="activeSlug() === child.slug ? theme().barSubChipOn : theme().barSubChipOff"
                    [attr.aria-current]="activeSlug() === child.slug ? 'true' : null"
                  >
                    {{ child.name }}
                  </a>
                </li>
              }
            </ul>
          }
        }
      </div>
    </nav>
  `,
  styles: [
    `
      .chip {
        display: inline-block;
        white-space: nowrap;
        border-width: 1px;
        border-radius: 999px;
        font-weight: 700;
        transition: all 150ms ease;
      }
      .bar-scroll {
        scrollbar-width: none;
        -webkit-overflow-scrolling: touch;
      }
      .bar-scroll::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
})
export class CategoryBarComponent {
  readonly kind = input.required<ProductKind>();
  readonly roots = input.required<ProductCategory[]>();
  readonly theme = input.required<KindTheme>();
  readonly activeSlug = input<string | null>(null);

  readonly route = computed(() => PRODUCT_KIND_ROUTES[this.kind()]);
  readonly kindLabel = computed(() => PRODUCT_KIND_LABELS[this.kind()]);

  /** Danh mục gốc đang mở: chính nó hoặc cha của danh mục con đang chọn. */
  readonly activeRoot = computed(() => {
    const slug = this.activeSlug();
    if (!slug) return null;
    return (
      this.roots().find((r) => r.slug === slug || (r.children ?? []).some((c) => c.slug === slug)) ?? null
    );
  });
}
