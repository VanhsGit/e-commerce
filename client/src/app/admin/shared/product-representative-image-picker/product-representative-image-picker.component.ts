import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImgFallbackDirective } from '../../../shared/directives/img-fallback.directive';
import { ProductColorOption } from '../../../shared/models/product-category';
import { colorGallery } from '../../../shared/utils/product-images';

interface ProductImageOption {
  url: string;
  colorName: string;
}

@Component({
  selector: 'app-product-representative-image-picker',
  standalone: true,
  imports: [CommonModule, ImgFallbackDirective],
  templateUrl: './product-representative-image-picker.component.html',
})
export class ProductRepresentativeImagePickerComponent {
  @Input() colors: ProductColorOption[] = [];
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  get imageOptions(): ProductImageOption[] {
    const seen = new Set<string>();
    const options = this.colors.flatMap((color) =>
      colorGallery(color)
        .filter((url) => {
          if (seen.has(url)) return false;
          seen.add(url);
          return true;
        })
        .map((url) => ({ url, colorName: color.name })),
    );
    const current = this.value.trim();

    if (current && !seen.has(current)) {
      options.unshift({ url: current, colorName: 'Ảnh đại diện hiện tại' });
    }

    return options;
  }

  select(url: string): void {
    this.value = url;
    this.valueChange.emit(url);
  }

  clear(): void {
    this.value = '';
    this.valueChange.emit('');
  }
}
