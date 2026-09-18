import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  inject,
} from '@angular/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

/**
 * Cắt bớt nội dung ô quá dài và chỉ bật tooltip khi chữ thật sự bị cắt.
 *
 * Dùng `appEllipsis` cho ô một dòng, thêm `[appEllipsisLines]="2"` để kẹp
 * nhiều dòng. Khi nội dung hiển thị khác với nội dung đầy đủ (ví dụ ô ghép
 * nhiều trường) thì truyền chuỗi đầy đủ qua `[appEllipsis]`.
 */
@Directive({
  selector: '[appEllipsis]',
  standalone: true,
  hostDirectives: [NzTooltipDirective],
  host: {
    class: 'app-ellipsis',
    '[class.app-ellipsis--clamp]': 'lines > 1',
    '[style.-webkit-line-clamp]': 'lines > 1 ? lines : null',
  },
})
export class EllipsisTooltipDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly tooltip = inject(NzTooltipDirective, { self: true });

  /** Chuỗi hiển thị trong tooltip; bỏ trống thì lấy text của chính phần tử. */
  @Input('appEllipsis') fullText?: string | null;

  /** Số dòng tối đa trước khi cắt. Mặc định 1 dòng. */
  @Input('appEllipsisLines') lines = 1;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.tooltip.title = this.isTruncated()
      ? this.fullText?.trim() || this.host.nativeElement.innerText.trim()
      : null;
  }

  private isTruncated(): boolean {
    const el = this.host.nativeElement;
    return (
      el.scrollWidth - el.clientWidth > 1 || el.scrollHeight - el.clientHeight > 1
    );
  }
}
