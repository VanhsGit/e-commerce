export type EntityType =
  | 'Company'
  | 'Brand'
  | 'ElectricBikeProduct'
  | 'AgriculturalMachineProduct'
  | 'Product'
  | 'ProductBrand'
  | 'ProductType'
  | 'Order'
  | 'DeliveryMethod'
  | 'User';

export interface EntityImage {
  id: number;
  entityType: EntityType;
  entityId: string;
  imageType: string;
  url: string;
  originalFileName: string;
  mimeType: string;
  fileSize: number;
  sortOrder: number;
  isUsed: boolean;
  createdAt: string;
}
