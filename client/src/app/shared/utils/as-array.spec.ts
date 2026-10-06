import { of } from 'rxjs';
import { asArray } from './as-array';

describe('asArray', () => {
  it('passes an array through unchanged', () => {
    let result: unknown;
    of([1, 2]).pipe(asArray()).subscribe((v) => (result = v));
    expect(result).toEqual([1, 2]);
  });

  it('turns an empty 200 body (null) into an empty array', () => {
    let result: unknown;
    of(null).pipe(asArray<number>()).subscribe((v) => (result = v));
    expect(result).toEqual([]);
  });
});
