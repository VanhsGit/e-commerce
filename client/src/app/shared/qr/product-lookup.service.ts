import { HttpContext } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, switchMap } from 'rxjs';
import { SILENT_HTTP_ERRORS } from '../../core/interceptors/silent-errors.context';
import { AgriculturalMachineService } from '../../services/agricultural-machine.service';
import { ElectricBikeService } from '../../services/electric-bike.service';
import { ElectricalApplianceService } from '../../services/electrical-appliance.service';
import { ProductKind } from '../models/product-category';
import { parseQrPayload } from './qr-payload';

export const PRODUCT_KIND_ORDER: readonly ProductKind[] = ['bike', 'machine', 'appliance'];

/** Hàm dò 1 loại: phát ra giá trị bất kỳ nếu tồn tại, lỗi nếu không. */
export type KindProbe = (kind: ProductKind, id: string) => Observable<unknown>;

/**
 * Tìm loại sản phẩm chứa `id`. Mỗi lần dò có catchError riêng nên 1-2 lần "miss" (404) không làm hỏng cả chuỗi.
 * - Có `hint`: dò loại đó trước (đường nhanh), trượt mới dò nốt 2 loại còn lại song song.
 * - Không có `hint`: dò cả 3 loại song song, ưu tiên theo thứ tự bike > machine > appliance.
 */
export function resolveKind(
  id: string,
  probe: KindProbe,
  hint: ProductKind | null = null,
): Observable<ProductKind | null> {
  const hit = (kind: ProductKind): Observable<ProductKind | null> =>
    probe(kind, id).pipe(
      map(() => kind as ProductKind | null),
      catchError(() => of(null as ProductKind | null)),
    );
  const probeAll = (kinds: readonly ProductKind[]): Observable<ProductKind | null> =>
    forkJoin(kinds.map(hit)).pipe(map((found) => found.find((kind) => kind !== null) ?? null));

  if (!hint) return probeAll(PRODUCT_KIND_ORDER);
  return hit(hint).pipe(
    switchMap((found) => (found ? of(found) : probeAll(PRODUCT_KIND_ORDER.filter((k) => k !== hint)))),
  );
}

export type ProductLookupOutcome =
  | { status: 'found'; kind: ProductKind; id: string }
  | { status: 'notfound' }
  | { status: 'invalid' };

/** Tra cứu sản phẩm từ chuỗi người dùng nhập hoặc nội dung quét từ QR. */
@Injectable({ providedIn: 'root' })
export class ProductLookupService {
  private readonly bikes = inject(ElectricBikeService);
  private readonly machines = inject(AgriculturalMachineService);
  private readonly appliances = inject(ElectricalApplianceService);

  /** Request dò tìm không được phép toast / chuyển sang /not-found (xem ErrorInterceptor). */
  private silent(): { context: HttpContext } {
    return { context: new HttpContext().set(SILENT_HTTP_ERRORS, true) };
  }

  private readonly probe: KindProbe = (kind, id) => {
    switch (kind) {
      case 'bike': return this.bikes.getById(id, this.silent());
      case 'machine': return this.machines.getById(id, this.silent());
      case 'appliance': return this.appliances.getById(id, this.silent());
    }
  };

  resolve(raw: string, hint: ProductKind | null = null): Observable<ProductLookupOutcome> {
    const parsed = parseQrPayload(raw);
    if (!parsed) return of({ status: 'invalid' });
    const preferred = parsed.kind ?? hint;
    return resolveKind(parsed.id, this.probe, preferred).pipe(
      map((kind): ProductLookupOutcome => (kind ? { status: 'found', kind, id: parsed.id } : { status: 'notfound' })),
    );
  }
}
