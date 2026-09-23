import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImgFallbackDirective } from '../../directives/img-fallback.directive';

export type ImageShowcaseKind = 'bike' | 'machine' | 'appliance';

export interface ImageShowcaseItem {
  id: string;
  name: string;
  typeName: string;
  pictureUrl: string;
  isUsed?: boolean;
}

@Component({
  selector: 'app-image-product-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink, ImgFallbackDirective],
  templateUrl: './image-product-showcase.component.html',
  styleUrl: './image-product-showcase.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageProductShowcaseComponent {
  readonly title = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly kind = input.required<ImageShowcaseKind>();
  readonly items = input<ImageShowcaseItem[]>([]);
  readonly browseAll = output<void>();

  readonly visibleItems = computed(() =>
    this.items().filter((item) => item.isUsed !== false),
  );
}
