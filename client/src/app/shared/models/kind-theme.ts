import { ProductKind } from './product-category';

/** Giao diện đơn giản: mọi ngành dùng chung một tông emerald/slate. Class Tailwind phải viết đầy đủ để được quét. */
export interface KindTheme {
  focus: string;
}

const NEUTRAL: KindTheme = {
  focus: 'focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600',
};

export const KIND_THEME: Record<ProductKind, KindTheme> = {
  bike: NEUTRAL,
  machine: NEUTRAL,
  appliance: NEUTRAL,
};
