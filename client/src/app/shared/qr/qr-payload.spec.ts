import { Observable, of, throwError } from 'rxjs';
import { ProductKind } from '../models/product-category';
import { resolveKind } from './product-lookup.service';
import { parseQrPayload } from './qr-payload';
import { describeCameraError } from './qr-scanner.component';

describe('parseQrPayload', () => {
  it('accepts a bare product ID unchanged (the format the admin QR page generates)', () => {
    expect(parseQrPayload('eb000001-0000-0000-0000-000000000101')).toEqual({
      id: 'eb000001-0000-0000-0000-000000000101',
      kind: null,
    });
    expect(parseQrPayload('  SP_01.a  ')).toEqual({ id: 'SP_01.a', kind: null });
  });

  it('extracts kind and id from full URLs and kind/id paths', () => {
    expect(parseQrPayload('https://shop.example.com/product-detail/machine/am-1?x=1#top')).toEqual({
      id: 'am-1',
      kind: 'machine',
    });
    expect(parseQrPayload('/product-detail/bike/eb-9')).toEqual({ id: 'eb-9', kind: 'bike' });
    expect(parseQrPayload('appliance/ea-3')).toEqual({ id: 'ea-3', kind: 'appliance' });
    expect(parseQrPayload('xe-dien/eb-2')).toEqual({ id: 'eb-2', kind: 'bike' });
    expect(parseQrPayload('product-detail/appliance/a%2D1')).toEqual({ id: 'a-1', kind: 'appliance' });
  });

  it('falls back to the last path segment of an unrecognised URL, without a kind', () => {
    expect(parseQrPayload('https://example.com/p/abc-123')).toEqual({ id: 'abc-123', kind: null });
  });

  it('rejects empty, whitespace-containing and malformed payloads', () => {
    for (const bad of [null, undefined, '', '   ', 'hai từ', 'a b', 'https://', '<script>', 'x'.repeat(3000)]) {
      expect(parseQrPayload(bad as string | null | undefined))
        .withContext(String(bad).slice(0, 20))
        .toBeNull();
    }
  });
});

describe('resolveKind', () => {
  const miss = (): Observable<unknown> => throwError(() => ({ status: 404 }));
  const run = (probe: (kind: ProductKind, id: string) => Observable<unknown>, hint: ProductKind | null = null) => {
    let result: ProductKind | null | undefined;
    resolveKind('id-1', probe, hint).subscribe((kind) => (result = kind));
    return result;
  };

  it('returns the only kind that resolves, swallowing the two expected misses', () => {
    expect(run((kind) => (kind === 'appliance' ? of({}) : miss()))).toBe('appliance');
  });

  it('returns null when all three kinds miss or error', () => {
    expect(run(() => miss())).toBeNull();
  });

  it('prefers bike > machine > appliance when several resolve and no hint is given', () => {
    expect(run((kind) => (kind === 'bike' ? miss() : of({})))).toBe('machine');
  });

  it('probes only the hinted kind first and skips the others on a hit', () => {
    const probed: ProductKind[] = [];
    const result = run((kind) => {
      probed.push(kind);
      return of({});
    }, 'machine');
    expect(result).toBe('machine');
    expect(probed).toEqual(['machine']);
  });

  it('falls back to the other two kinds when the hint misses', () => {
    const probed: ProductKind[] = [];
    const result = run((kind) => {
      probed.push(kind);
      return kind === 'appliance' ? of({}) : miss();
    }, 'bike');
    expect(result).toBe('appliance');
    expect(probed).toEqual(['bike', 'machine', 'appliance']);
  });
});

describe('describeCameraError', () => {
  it('maps getUserMedia failures to Vietnamese messages', () => {
    expect(describeCameraError({ name: 'NotAllowedError' }).code).toBe('denied');
    expect(describeCameraError({ name: 'NotFoundError' }).code).toBe('no-camera');
    expect(describeCameraError({ name: 'NotReadableError' }).code).toBe('in-use');
    const unknown = describeCameraError(new Error('x'));
    expect(unknown.code).toBe('unknown');
    expect(unknown.message).toContain('camera');
  });
});
