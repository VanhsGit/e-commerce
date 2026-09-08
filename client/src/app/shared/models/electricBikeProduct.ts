export enum ElectricBikeCategory {
  ElectricBikeModel = 1,
  ElectricBikePart = 2,
}

export interface ElectricBikeProduct {
  id: number;
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
  companyId: number;
  companyName: string;
  brandId: number;
  createdAt: Date;
  updatedAt: Date;
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
  companyId: number;
  brandId: number;
}

export interface UpdateElectricBikeProduct {
  id: number;
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
  companyId: number;
  brandId: number;
}
