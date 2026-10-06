import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * API đôi khi trả 200 nhưng body rỗng (proxy/gateway, 204, ...). Khi đó
 * `HttpClient.get<T[]>` phát ra `null`, và mọi chỗ gọi `.length` / `*ngFor`
 * sau đó sẽ nổ giữa change detection - trang đứng im ở trạng thái loading.
 * Toán tử này luôn đưa về một mảng.
 */
export function asArray<T>(): OperatorFunction<T[] | null | undefined, T[]> {
  return map((value) => (Array.isArray(value) ? value : []));
}
