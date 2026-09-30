import { ProductKind } from './product-category';

/** Toàn bộ màu theo ngành hàng nằm ở đây; class Tailwind phải viết đầy đủ để được quét. */
export interface KindTheme {
  icon: string;
  glowA: string;
  glowB: string;
  badge: string;
  gradientText: string;
  primaryBtn: string;
  eyebrow: string;
  accentText: string;
  iconBox: string;
  check: string;
  chipOn: string;
  chipOff: string;
  subChipOn: string;
  subChipOff: string;
  focus: string;
  soft: string;
  ctaGradient: string;
  ctaHighlight: string;
  ctaButton: string;
  bar: string;
}

export const KIND_THEME: Record<ProductKind, KindTheme> = {
  bike: {
    icon: 'electric_moped',
    glowA: 'rgba(56, 189, 248, 0.26)',
    glowB: 'rgba(52, 211, 153, 0.2)',
    badge: 'border-sky-300/30 bg-sky-300/10 text-sky-200',
    gradientText: 'from-sky-300 via-teal-200 to-emerald-300',
    primaryBtn: 'bg-sky-400 text-sky-950 shadow-sky-500/30 hover:bg-sky-300',
    eyebrow: 'text-sky-700',
    accentText: 'text-sky-700',
    iconBox: 'bg-sky-100 text-sky-700',
    check: 'bg-emerald-100 text-emerald-700',
    chipOn: 'border-sky-600 bg-sky-600 text-white shadow-md shadow-sky-600/25',
    chipOff: 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700',
    subChipOn: 'border-emerald-600 bg-emerald-600 text-white',
    subChipOff: 'border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-400',
    focus: 'focus:border-sky-400 focus:ring-2 focus:ring-sky-200',
    soft: 'from-sky-50 via-white to-emerald-50',
    ctaGradient: 'from-sky-700 via-teal-700 to-emerald-700',
    ctaHighlight: 'text-lime-200',
    ctaButton: 'text-sky-900',
    bar: 'from-sky-500 to-emerald-500',
  },
  machine: {
    icon: 'agriculture',
    glowA: 'rgba(251, 191, 36, 0.24)',
    glowB: 'rgba(249, 115, 22, 0.16)',
    badge: 'border-amber-300/30 bg-amber-300/10 text-amber-200',
    gradientText: 'from-amber-200 via-amber-300 to-orange-300',
    primaryBtn: 'bg-amber-400 text-amber-950 shadow-amber-500/30 hover:bg-amber-300',
    eyebrow: 'text-amber-700',
    accentText: 'text-amber-700',
    iconBox: 'bg-amber-100 text-amber-700',
    check: 'bg-amber-100 text-amber-700',
    chipOn: 'border-amber-500 bg-amber-500 text-amber-950 shadow-md shadow-amber-500/25',
    chipOff: 'border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-700',
    subChipOn: 'border-amber-600 bg-amber-600 text-white',
    subChipOff: 'border-amber-200 bg-amber-50 text-amber-800 hover:border-amber-400',
    focus: 'focus:border-amber-400 focus:ring-2 focus:ring-amber-200',
    soft: 'from-amber-50 via-white to-orange-50',
    ctaGradient: 'from-amber-600 via-orange-600 to-amber-700',
    ctaHighlight: 'text-yellow-100',
    ctaButton: 'text-amber-900',
    bar: 'from-amber-400 to-orange-500',
  },
  appliance: {
    icon: 'bolt',
    glowA: 'rgba(167, 139, 250, 0.26)',
    glowB: 'rgba(56, 189, 248, 0.2)',
    badge: 'border-violet-300/30 bg-violet-300/10 text-violet-200',
    gradientText: 'from-violet-300 via-indigo-200 to-sky-300',
    primaryBtn: 'bg-violet-400 text-violet-950 shadow-violet-500/30 hover:bg-violet-300',
    eyebrow: 'text-violet-700',
    accentText: 'text-violet-700',
    iconBox: 'bg-violet-100 text-violet-700',
    check: 'bg-sky-100 text-sky-700',
    chipOn: 'border-violet-600 bg-violet-600 text-white shadow-md shadow-violet-600/25',
    chipOff: 'border-slate-200 bg-white text-slate-700 hover:border-violet-300 hover:text-violet-700',
    subChipOn: 'border-sky-600 bg-sky-600 text-white',
    subChipOff: 'border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-400',
    focus: 'focus:border-violet-400 focus:ring-2 focus:ring-violet-200',
    soft: 'from-violet-50 via-white to-sky-50',
    ctaGradient: 'from-violet-700 via-indigo-700 to-sky-700',
    ctaHighlight: 'text-sky-200',
    ctaButton: 'text-violet-900',
    bar: 'from-violet-500 to-sky-500',
  },
};
