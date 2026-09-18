import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: 'img',
  standalone: true,
})
export class ImgFallbackDirective implements OnInit, OnChanges {
  private readonly fallbackSrc = 'assets/images/img-ph.jpg';
  private isFallbackActive = false;

  @Input() src: string | null | undefined;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    this.checkAndApplyFallback();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
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

    const resolvedSrc = this.resolveImageUrl(currentSrc);
    if (resolvedSrc && this.el.nativeElement.src !== resolvedSrc) {
      this.el.nativeElement.src = resolvedSrc;
    }
  }

  private resolveImageUrl(value: string): string {
    try {
      const parsed = new URL(value, window.location.origin);
      if (
        parsed.hostname === 'localhost' ||
        parsed.hostname === '127.0.0.1' ||
        parsed.hostname === '::1'
      ) {
        return `${window.location.origin}${parsed.pathname}${parsed.search}${parsed.hash}`;
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
