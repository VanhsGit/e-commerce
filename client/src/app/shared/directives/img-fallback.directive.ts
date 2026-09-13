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
    }
  }

  private applyFallback(): void {
    if (this.isFallbackActive) return;
    this.isFallbackActive = true;
    this.el.nativeElement.src = this.fallbackSrc;
  }
}
