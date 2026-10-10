import {
  Directive,
  booleanAttribute,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { imageThumbnail } from '../utils/image-thumbnail';

@Directive({
  selector: 'img',
  standalone: true,
})
export class ImgFallbackDirective implements OnInit, OnChanges {
  private readonly fallbackSrc = 'assets/images/img-ph.jpg';
  private isFallbackActive = false;

  @Input() src: string | null | undefined;
  @Input({ transform: booleanAttribute }) useThumbnail = false;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    this.checkAndApplyFallback();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src'] || changes['useThumbnail']) {
      this.isFallbackActive = false;
      this.checkAndApplyFallback();
    }
  }

  @HostListener('error')
  onError(): void {
    this.applyFallback();
  }

  private checkAndApplyFallback(): void {
    const currentSrc =
      this.src ?? this.el.nativeElement.getAttribute('src') ?? null;

    if (
      currentSrc === null ||
      currentSrc === undefined ||
      currentSrc === '' ||
      currentSrc.trim() === ''
    ) {
      this.applyFallback();
      return;
    }

    const resolvedSrc = this.resolveImageUrl(this.useThumbnail ? imageThumbnail(currentSrc) : currentSrc);
    if (resolvedSrc && this.el.nativeElement.src !== resolvedSrc) {
      this.el.nativeElement.src = resolvedSrc;
    }
  }

  private resolveImageUrl(value: string): string {
    try {
      const parsed = new URL(value, window.location.origin);
      const isLocalHost =
        parsed.hostname === 'localhost' ||
        parsed.hostname === '127.0.0.1' ||
        parsed.hostname === '::1';

      if (isLocalHost) {
        parsed.protocol = window.location.protocol;
        parsed.host = window.location.host;
      }

      const isLegacyMediaPath =
        parsed.pathname === '/content/entity-images' ||
        parsed.pathname.startsWith('/content/entity-images/');
      if (parsed.origin === window.location.origin && isLegacyMediaPath) {
        parsed.pathname = `/api${parsed.pathname}`;
      }

      return parsed.toString();
    } catch {
      return value;
    }
  }

  private applyFallback(): void {
    if (this.isFallbackActive) return;
    this.isFallbackActive = true;
    this.el.nativeElement.src = this.fallbackSrc;
  }
}
