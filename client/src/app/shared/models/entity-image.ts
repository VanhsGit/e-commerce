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
  id: string;
  url: string;
  originalFileName: string;
  mimeType: string;
  fileSize: number;
  isUsed: boolean;
  createdAt: string;
}
