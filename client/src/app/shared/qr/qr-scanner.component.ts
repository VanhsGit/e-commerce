import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
  OnDestroy,
  Output,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import jsQR from 'jsqr';
import { Observable, map } from 'rxjs';

/** Khoảng cách giữa 2 lần giải mã (ms): đủ mượt, không ngốn CPU như vòng lặp liên tục. */
const SCAN_INTERVAL_MS = 150;
/** Thu nhỏ khung hình khi giải mã bằng jsQR để nhanh hơn trên điện thoại yếu. */
const MAX_DECODE_WIDTH = 640;

interface DetectedBarcode {
  rawValue: string;
}
interface BarcodeDetectorLike {
  detect(source: CanvasImageSource): Promise<DetectedBarcode[]>;
}
interface BarcodeDetectorCtor {
  new (options?: { formats?: string[] }): BarcodeDetectorLike;
}

export type QrScannerErrorCode =
  | 'insecure'
  | 'unsupported'
  | 'denied'
  | 'no-camera'
  | 'in-use'
  | 'unknown';

export interface QrScannerError {
  code: QrScannerErrorCode;
  message: string;
}

/** Đổi lỗi getUserMedia thành thông báo tiếng Việt. Tách riêng để dễ kiểm thử. */
export function describeCameraError(error: unknown): QrScannerError {
  const name = (error as { name?: string } | null)?.name;
  switch (name) {
    case 'NotAllowedError':
    case 'SecurityError':
      return {
        code: 'denied',
        message:
          'Bạn chưa cho phép truy cập camera. Hãy cấp quyền camera cho trang web trong cài đặt trình duyệt rồi thử lại.',
      };
    case 'NotFoundError':
    case 'OverconstrainedError':
    case 'DevicesNotFoundError':
      return { code: 'no-camera', message: 'Không tìm thấy camera trên thiết bị này.' };
    case 'NotReadableError':
    case 'AbortError':
      return {
        code: 'in-use',
        message: 'Không mở được camera, có thể ứng dụng khác đang sử dụng. Hãy đóng ứng dụng đó rồi thử lại.',
      };
    default:
      return { code: 'unknown', message: 'Không thể bật camera. Vui lòng thử lại hoặc nhập mã thủ công.' };
  }
}

/**
 * Quét mã QR bằng camera, dùng trong MatDialog (hoặc nhúng trực tiếp và nghe `scanned`).
 * Giải mã bằng BarcodeDetector gốc nếu có, ngược lại vẽ khung hình lên canvas rồi dùng jsQR.
 * Phát đúng một giá trị rồi dừng; camera luôn được tắt khi đóng / hủy component.
 */
@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.scss',
})
export class QrScannerComponent implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly dialogRef = inject<MatDialogRef<QrScannerComponent, string>>(MatDialogRef, { optional: true });

  /** Phát nội dung QR (hoặc mã nhập tay) đúng một lần. */
  @Output() readonly scanned = new EventEmitter<string>();

  private readonly videoRef = viewChild<ElementRef<HTMLVideoElement>>('video');

  readonly status = signal<'starting' | 'scanning' | 'error'>('starting');
  readonly error = signal<QrScannerError | null>(null);
  readonly manualCode = signal('');
  readonly decodingFile = signal(false);
  readonly fileMessage = signal('');

  private stream: MediaStream | null = null;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private detector: BarcodeDetectorLike | null = null;
  private stopped = false;
  private finished = false;

  /** Mở trong dialog; hoàn thành với chuỗi QR, hoặc `undefined` nếu người dùng đóng. */
  static open(dialog: MatDialog): Observable<string | undefined> {
    return dialog
      .open<QrScannerComponent, void, string>(QrScannerComponent, {
        width: '440px',
        maxWidth: '96vw',
        autoFocus: false,
        restoreFocus: true,
        panelClass: 'qr-scanner-dialog',
      })
      .afterClosed()
      .pipe(map((value) => value || undefined));
  }

  constructor() {
    // Tắt camera ngay khi dialog bắt đầu đóng (trước cả khi component bị hủy).
    this.dialogRef?.beforeClosed().subscribe(() => this.stop());
  }

  ngAfterViewInit(): void {
    void this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  close(): void {
    this.stop();
    this.dialogRef?.close();
  }

  /** Thử lại sau lỗi (VD: vừa cấp quyền camera). */
  retry(): void {
    this.stop();
    this.stopped = false;
    this.finished = false;
    this.error.set(null);
    this.status.set('starting');
    void this.start();
  }

  submitManual(): void {
    const value = this.manualCode().trim();
    if (value) this.finish(value);
  }

  private async start(): Promise<void> {
    if (typeof window !== 'undefined' && window.isSecureContext === false) {
      this.fail({
        code: 'insecure',
        message:
          'Camera chỉ hoạt động trên kết nối an toàn (HTTPS hoặc localhost). Hãy mở trang bằng HTTPS, hoặc chụp ảnh mã QR / nhập mã thủ công bên dưới.',
      });
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      this.fail({
        code: 'unsupported',
        message: 'Trình duyệt này không hỗ trợ truy cập camera. Vui lòng nhập mã thủ công.',
      });
      return;
    }

    let stream: MediaStream;
    try {
      stream = await this.openCamera();
    } catch (error) {
      if (!this.stopped) this.fail(describeCameraError(error));
      return;
    }

    // Người dùng đã đóng dialog trong lúc chờ cấp quyền: tắt luồng vừa mở ngay, không để rò camera.
    if (this.stopped) {
      stream.getTracks().forEach((track) => track.stop());
      return;
    }
    this.stream = stream;

    const video = this.videoRef()?.nativeElement;
    if (!video) {
      this.stop();
      return;
    }
    video.srcObject = stream;
    try {
      await video.play();
    } catch (error) {
      if (!this.stopped) this.fail(describeCameraError(error));
      this.stop();
      return;
    }
    if (this.stopped) return;

    this.detector = this.createDetector();
    this.status.set('scanning');
    this.zone.runOutsideAngular(() => this.scheduleScan());
  }

  private async openCamera(): Promise<MediaStream> {
    try {
      return await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
    } catch (error) {
      // Thiết bị không có camera "environment": thử lại với camera bất kỳ (VD: webcam laptop).
      if ((error as { name?: string })?.name === 'OverconstrainedError') {
        return navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      }
      throw error;
    }
  }

  private createDetector(): BarcodeDetectorLike | null {
    const ctor = (window as unknown as { BarcodeDetector?: BarcodeDetectorCtor }).BarcodeDetector;
    if (!ctor) return null;
    try {
      return new ctor({ formats: ['qr_code'] });
    } catch {
      return null;
    }
  }

  private scheduleScan(): void {
    if (this.stopped) return;
    this.timer = setTimeout(() => void this.scanOnce(), SCAN_INTERVAL_MS);
  }

  private async scanOnce(): Promise<void> {
    this.timer = null;
    const video = this.videoRef()?.nativeElement;
    if (this.stopped || !video) return;

    let text: string | null = null;
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA && video.videoWidth > 0) {
      try {
        text = this.detector ? await this.detectNative(video) : this.detectWithJsQr(video);
      } catch {
        // BarcodeDetector lỗi (VD: không hỗ trợ qr_code): chuyển hẳn sang jsQR.
        this.detector = null;
      }
    }
    if (this.stopped) return;
    if (text) {
      const value = text;
      this.zone.run(() => this.finish(value));
      return;
    }
    this.scheduleScan();
  }

  private async detectNative(video: HTMLVideoElement): Promise<string | null> {
    const codes = await this.detector!.detect(video);
    return codes.find((code) => code.rawValue)?.rawValue ?? null;
  }

  private detectWithJsQr(video: HTMLVideoElement): string | null {
    const scale = Math.min(1, MAX_DECODE_WIDTH / video.videoWidth);
    const width = Math.max(1, Math.round(video.videoWidth * scale));
    const height = Math.max(1, Math.round(video.videoHeight * scale));
    const canvas = (this.canvas ??= document.createElement('canvas'));
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) return null;
    context.drawImage(video, 0, 0, width, height);
    const image = context.getImageData(0, 0, width, height);
    return jsQR(image.data, width, height, { inversionAttempts: 'dontInvert' })?.data || null;
  }

  /** Giải mã từ ảnh chụp / chọn từ máy (dùng được cả khi camera trực tiếp bị chặn, VD: HTTP). */
  async onFileSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.decodingFile.set(true);
    this.fileMessage.set('');
    try {
      const bitmap = await createImageBitmap(file);
      const scale = Math.min(1, 1280 / Math.max(bitmap.width, bitmap.height));
      const width = Math.max(1, Math.round(bitmap.width * scale));
      const height = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext('2d', { willReadFrequently: true });
      context?.drawImage(bitmap, 0, 0, width, height);
      bitmap.close();
      const image = context?.getImageData(0, 0, width, height);
      const result = image ? jsQR(image.data, width, height) : null;
      if (result?.data) this.finish(result.data);
      else this.fileMessage.set('Không đọc được mã QR trong ảnh. Hãy chụp lại gần và rõ hơn.');
    } catch {
      this.fileMessage.set('Không đọc được ảnh này. Vui lòng thử ảnh khác.');
    } finally {
      this.decodingFile.set(false);
    }
  }

  private fail(error: QrScannerError): void {
    this.error.set(error);
    this.status.set('error');
  }

  private finish(value: string): void {
    if (this.finished) return;
    this.finished = true;
    this.stop();
    this.scanned.emit(value);
    this.dialogRef?.close(value);
  }

  /** Dừng vòng quét và giải phóng camera. Gọi nhiều lần vẫn an toàn. */
  private stop(): void {
    this.stopped = true;
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    this.stream?.getTracks().forEach((track) => track.stop());
    this.stream = null;
    const video = this.videoRef()?.nativeElement;
    if (video) {
      video.pause();
      video.srcObject = null;
      video.removeAttribute('src');
    }
    this.canvas = null;
    this.detector = null;
  }
}
