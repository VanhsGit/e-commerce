export type ProductKind = 'bike' | 'machine' | 'appliance';

export interface ProductColorOption {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface ProductCategory {
  id: string;
  kind: ProductKind;
  name: string;
  slug: string;
  parentId: string | null;
  parentName: string | null;
  description: string;
  imageUrl: string;
  sortOrder: number;
  metadata: Record<string, string>;
  productCount: number;
  createdAt: Date;
  updatedAt: Date;
  isUsed?: boolean;
  children: ProductCategory[];
}

export interface CreateProductCategory {
  kind: ProductKind;
  name: string;
  slug: string;
  parentId: string | null;
  description: string;
  imageUrl: string;
  sortOrder: number;
  metadata?: Record<string, string>;
  isUsed?: boolean;
}

export interface UpdateProductCategory extends CreateProductCategory {
  id: string;
}

export const PRODUCT_KIND_LABELS: Record<ProductKind, string> = {
  bike: 'Xe điện',
  machine: 'Máy nông nghiệp',
  appliance: 'Đồ điện',
};

export const PRODUCT_KIND_ROUTES: Record<ProductKind, string> = {
  bike: '/xe-dien',
  machine: '/may-nong-nghiep',
  appliance: '/do-dien',
};
