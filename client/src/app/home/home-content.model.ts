import { HomeHeroContent } from './sections/industry-section/industry-content';
import {
  IndustryContent,
  IndustryKind,
} from './sections/industry-section/industry-section.model';

export interface HomeNavigationContent {
  heading: string;
  homeLabel: string;
  recruitmentLabel: string;
}

export interface HomeCompanyContent {
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  imageSrc: string;
  imageAlt: string;
  highlights: { title: string; description: string }[];
}

export interface HomeSolutionsContent {
  heading: string;
  previousLabel: string;
  nextLabel: string;
  images: { imageSrc: string; imageAlt: string; kind: HomeSolutionKind }[];
}

export type HomeSolutionKind = IndustryKind | 'appliance';

export interface HomeRecruitmentContent {
  badge: string;
  heading: string;
  intro: string;
  positionsHeading: string;
  benefitsHeading: string;
  sitesHeading: string;
  applyHeading: string;
  applyText: string;
  closing: string;
  positions: { count: number; title: string; note: string }[];
  benefits: string[];
  sites: { label: string; address: string }[];
  hotlines: { display: string; tel: string }[];
}

export interface HomeCommitmentItem {
  icon: string;
  accent: string;
  title: string;
  description: string;
}

export interface HomeCommitmentsContent {
  title: string;
  description: string;
  items: HomeCommitmentItem[];
}

/**
 * Nội dung khối "Tra cứu sản phẩm" ở trang chủ (tên `warranty` là di sản, giữ nguyên để không phá
 * tài liệu đã lưu trên server, API và trình soạn thảo admin; server bắt buộc đủ mọi trường).
 * Đang dùng: productPanelHeading, productPanelHelp, productTypeLabel, productCodeLabel,
 * productButtonLabel, catalogueButtonLabel, browseBikesLabel, browseMachinesLabel.
 * LEGACY / KHÔNG CÒN HIỂN THỊ (tra cứu bảo hành đã bị gỡ): badge, heading, introduction,
 * warrantyPanelHeading, warrantyPanelHelp, serialLabel, serialHint, phoneLabel,
 * searchButtonLabel, tipLabel.
 */
export interface HomeWarrantyContent {
  badge: string;
  heading: string;
  introduction: string;
  warrantyPanelHeading: string;
  warrantyPanelHelp: string;
  serialLabel: string;
  serialHint: string;
  phoneLabel: string;
  searchButtonLabel: string;
  productPanelHeading: string;
  productPanelHelp: string;
  productTypeLabel: string;
  productCodeLabel: string;
  productButtonLabel: string;
  catalogueButtonLabel: string;
  tipLabel: string;
  browseBikesLabel: string;
  browseMachinesLabel: string;
}

export interface HomeCtaContent {
  heading: string;
  highlightedHeading: string;
  description: string;
  phone: string;
  phoneButtonLabel: string;
  email: string;
  emailButtonLabel: string;
  workingHoursLabel: string;
  workingHoursValue: string;
  addressLabel: string;
  addressValue: string;
  supportLabel: string;
  supportValue: string;
}

export interface HomePageContent {
  version: number;
  hero: HomeHeroContent;
  navigation: HomeNavigationContent;
  company: HomeCompanyContent;
  solutions: HomeSolutionsContent;
  recruitment: HomeRecruitmentContent;
  industries: IndustryContent[];
  commitments: HomeCommitmentsContent;
  warranty: HomeWarrantyContent;
  cta: HomeCtaContent;
}

export interface HomeContentResponse {
  content: HomePageContent;
  updatedAt: string;
}

export function isSupportedHomePageContent(
  value: unknown,
): value is HomePageContent {
  if (!hasRequiredShape(value, EMPTY_HOME_PAGE_CONTENT, '')) return false;

  const content = value as HomePageContent;
  return (
    content.version === 1 &&
    content.hero.cards.map((card) => card.kind).join(',') === 'bike,machine' &&
    content.industries.map((industry) => industry.kind).join(',') ===
      'bike,machine' &&
    content.solutions.images.every((image) =>
      ['bike', 'machine', 'appliance'].includes(image.kind),
    ) &&
    content.recruitment.positions.every(
      (position) => Number.isInteger(position.count) && position.count > 0,
    )
  );
}

export function resolveHomePageContent(value: unknown): HomePageContent | null {
  return isSupportedHomePageContent(value) ? value : null;
}

export const EMPTY_HOME_PAGE_CONTENT: HomePageContent = {
  version: 0,
  hero: {
    badge: '',
    title: '',
    highlightedTitle: '',
    description: '',
    desktopImageSrc: '',
    mobileImageSrc: '',
    contactLabel: '',
    warrantyLabel: '',
    cards: [
      {
        kind: 'bike',
        anchor: '',
        imageSrc: '',
        imageAlt: '',
        eyebrow: '',
        title: '',
        description: '',
        icon: '',
      },
      {
        kind: 'machine',
        anchor: '',
        imageSrc: '',
        imageAlt: '',
        eyebrow: '',
        title: '',
        description: '',
        icon: '',
      },
    ],
    metrics: [
      { value: '', label: '' },
      { value: '', label: '' },
      { value: '', label: '' },
    ],
  },
  navigation: { heading: '', homeLabel: '', recruitmentLabel: '' },
  company: {
    eyebrow: '',
    title: '',
    description: '',
    detail: '',
    imageSrc: '',
    imageAlt: '',
    highlights: [{ title: '', description: '' }],
  },
  solutions: {
    heading: '',
    previousLabel: '',
    nextLabel: '',
    images: [{ imageSrc: '', imageAlt: '', kind: 'bike' }],
  },
  recruitment: {
    badge: '',
    heading: '',
    intro: '',
    positionsHeading: '',
    benefitsHeading: '',
    sitesHeading: '',
    applyHeading: '',
    applyText: '',
    closing: '',
    positions: [{ count: 1, title: '', note: '' }],
    benefits: [''],
    sites: [{ label: '', address: '' }],
    hotlines: [{ display: '', tel: '' }],
  },
  industries: [
    {
      kind: 'bike',
      theme: 'sky',
      anchor: '',
      galleryLayout: 'kinetic',
      gallery: {
        main: { src: '', caption: '', label: '' },
        secondary: [{ src: '', caption: '', label: '' }],
      },
      eyebrow: '',
      title: '',
      slogan: '',
      description: '',
      detail: '',
      categories: [''],
      highlights: [{ icon: '', title: '', note: '' }],
      service: { icon: '', title: '', note: '' },
      priceFrom: '',
      ctaLabel: '',
    },
    {
      kind: 'machine',
      theme: 'amber',
      anchor: '',
      galleryLayout: 'field',
      gallery: {
        main: { src: '', caption: '', label: '' },
        secondary: [{ src: '', caption: '', label: '' }],
      },
      eyebrow: '',
      title: '',
      slogan: '',
      description: '',
      detail: '',
      categories: [''],
      highlights: [{ icon: '', title: '', note: '' }],
      service: { icon: '', title: '', note: '' },
      priceFrom: '',
      ctaLabel: '',
    },
  ],
  commitments: {
    title: '',
    description: '',
    items: [{ icon: '', accent: '', title: '', description: '' }],
  },
  warranty: {
    badge: '',
    heading: '',
    introduction: '',
    warrantyPanelHeading: '',
    warrantyPanelHelp: '',
    serialLabel: '',
    serialHint: '',
    phoneLabel: '',
    searchButtonLabel: '',
    productPanelHeading: '',
    productPanelHelp: '',
    productTypeLabel: '',
    productCodeLabel: '',
    productButtonLabel: '',
    catalogueButtonLabel: '',
    tipLabel: '',
    browseBikesLabel: '',
    browseMachinesLabel: '',
  },
  cta: {
    heading: '',
    highlightedHeading: '',
    description: '',
    phone: '',
    phoneButtonLabel: '',
    email: '',
    emailButtonLabel: '',
    workingHoursLabel: '',
    workingHoursValue: '',
    addressLabel: '',
    addressValue: '',
    supportLabel: '',
    supportValue: '',
  },
};

const VARIABLE_LISTS = new Set([
  'solutions.images',
  'recruitment.positions',
  'recruitment.benefits',
  'recruitment.sites',
  'recruitment.hotlines',
  'company.highlights',
  'commitments.items',
]);

function isVariableList(path: string): boolean {
  return (
    VARIABLE_LISTS.has(path) ||
    /^industries\.\d+\.(categories|highlights|gallery\.secondary)$/.test(path)
  );
}

function hasRequiredShape(
  value: unknown,
  template: unknown,
  path: string,
): boolean {
  if (Array.isArray(template)) {
    if (isVariableList(path)) {
      return (
        Array.isArray(value) &&
        value.length > 0 &&
        value.every((item) => hasRequiredShape(item, template[0], `${path}.*`))
      );
    }
    return (
      Array.isArray(value) &&
      value.length === template.length &&
      template.every((item, index) =>
        hasRequiredShape(value[index], item, `${path}.${index}`),
      )
    );
  }

  if (template !== null && typeof template === 'object') {
    if (value === null || typeof value !== 'object' || Array.isArray(value))
      return false;
    const record = value as Record<string, unknown>;
    return Object.entries(template).every(([key, item]) =>
      hasRequiredShape(record[key], item, path ? `${path}.${key}` : key),
    );
  }

  if (typeof template === 'string')
    return (
      typeof value === 'string' &&
      (path === 'recruitment.positions.*.note' || value.trim().length > 0)
    );
  return typeof value === typeof template;
}
