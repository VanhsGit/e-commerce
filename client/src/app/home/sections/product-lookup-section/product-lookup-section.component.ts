import { Component, Input, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PRODUCT_KIND_ROUTES, ProductKind } from '../../../shared/models/product-category';
import { ProductLookupService } from '../../../shared/qr/product-lookup.service';
import { QrScannerComponent } from '../../../shared/qr/qr-scanner.component';
import { HomeWarrantyContent } from '../../home-content.model';

type LookupState =
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'error'; message: string };

/**
 * Khối "Tra cứu sản phẩm" ở trang chủ: nhập mã/ID thủ công hoặc quét QR bằng camera.
 * Chỉ dùng các trường `product*` / `browse*` / `catalogueButtonLabel` của HomeWarrantyContent;
 * các trường tra cứu bảo hành (serial, phone, searchButtonLabel, warrantyPanel*, tipLabel,
 * badge, heading, introduction) là di sản, không còn hiển thị.
 */
@Component({
  selector: 'app-home-product-lookup',
  standalone: true,
  host: { class: 'block' },
  imports: [FormsModule, MatIconModule, NzButtonModule, NzInputModule, NzSelectModule],
  templateUrl: './product-lookup-section.component.html',
})
export class ProductLookupSectionComponent {
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly lookupService = inject(ProductLookupService);

  @Input() mobile = false;
  @Input({ required: true }) content!: HomeWarrantyContent;

  /** Loại đang chọn; null = để hệ thống tự nhận diện theo ID. */
  readonly kind = signal<ProductKind | null>(null);
  readonly code = signal('');
  readonly state = signal<LookupState>({ type: 'idle' });

  /** Nhấn "Xem chi tiết" (hoặc Enter). */
  submit(): void {
    const raw = this.code().trim();
    if (!raw) {
      const kind = this.kind();
      if (kind) {
        void this.router.navigate([PRODUCT_KIND_ROUTES[kind]]);
      } else {
        this.state.set({ type: 'error', message: 'Vui lòng nhập mã sản phẩm hoặc quét mã QR.' });
      }
      return;
    }
    this.lookup(raw);
  }

  /** Mở camera quét QR, quét xong tra cứu luôn. */
  scan(): void {
    QrScannerComponent.open(this.dialog).subscribe((value) => {
      if (!value) return;
      this.code.set(value);
      this.lookup(value);
    });
  }

  browseAll(kind: ProductKind | 'all'): void {
    void this.router.navigate([kind === 'all' ? '/' : PRODUCT_KIND_ROUTES[kind]]);
  }

  private lookup(raw: string): void {
    this.state.set({ type: 'loading' });
    this.lookupService.resolve(raw, this.kind()).subscribe({
      next: (outcome) => {
        if (outcome.status === 'found') {
          this.state.set({ type: 'idle' });
          void this.router.navigate(['/product-detail', outcome.kind, outcome.id]);
        } else if (outcome.status === 'invalid') {
          this.state.set({ type: 'error', message: 'Mã sản phẩm không hợp lệ. Vui lòng kiểm tra lại hoặc quét lại mã QR.' });
        } else {
          this.state.set({
            type: 'error',
            message: `Không tìm thấy sản phẩm với mã "${raw}". Vui lòng kiểm tra lại mã hoặc thử quét lại.`,
          });
        }
      },
      error: () => this.state.set({ type: 'error', message: 'Không thể tra cứu lúc này. Vui lòng thử lại sau.' }),
    });
  }
}
