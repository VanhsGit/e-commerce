export enum ElectricBikeCategory {
  ElectricBikeModel = 1,
  ElectricBikePart = 2,
}

export interface ElectricBikeProduct {
  id: string;
  name: string;
  brand: string;
  brandName: string;
  model: string;
  category: ElectricBikeCategory;
  categoryName: string;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  voltage: string | null;
  power: string | null;
  batteryCapacity: string | null;
  compatibility: string | null;
  companyId: string;
  companyName: string;
  brandId: string;
  createdAt: Date;
  updatedAt: Date;
  metadata: Record<string, string>;
  isUsed?: boolean;
}

export interface CreateElectricBikeProduct {
  name: string;
  brand: string;
  model: string;
  category: ElectricBikeCategory;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  voltage: string | null;
  power: string | null;
  batteryCapacity: string | null;
  compatibility: string | null;
  companyId: string;
  brandId: string;
  metadata?: Record<string, string>;
  isUsed?: boolean;
}

export interface UpdateElectricBikeProduct {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: ElectricBikeCategory;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  voltage: string | null;
  power: string | null;
  batteryCapacity: string | null;
  compatibility: string | null;
  companyId: string;
  brandId: string;
  metadata?: Record<string, string>;
  isUsed?: boolean;
}
