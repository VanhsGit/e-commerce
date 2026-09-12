export enum AgriculturalMachineCategory {
  MachineModel = 1,
  MachinePart = 2,
}

export interface AgriculturalMachineProduct {
  id: string;
  name: string;
  brand: string;
  brandName: string;
  model: string;
  category: AgriculturalMachineCategory;
  categoryName: string;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  engineType: string | null;
  power: string | null;
  fuelType: string | null;
  capacity: string | null;
  compatibility: string | null;
  companyId: string;
  companyName: string;
  brandId: string;
  createdAt: Date;
  updatedAt: Date;
  metadata: Record<string, string>;
  isUsed?: boolean;
}

export interface CreateAgriculturalMachineProduct {
  name: string;
  brand: string;
  model: string;
  category: AgriculturalMachineCategory;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  engineType: string | null;
  power: string | null;
  fuelType: string | null;
  capacity: string | null;
  compatibility: string | null;
  companyId: string;
  brandId: string;
  metadata?: Record<string, string>;
  isUsed?: boolean;
}

export interface UpdateAgriculturalMachineProduct {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: AgriculturalMachineCategory;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  engineType: string | null;
  power: string | null;
  fuelType: string | null;
  capacity: string | null;
  compatibility: string | null;
  companyId: string;
  brandId: string;
  metadata?: Record<string, string>;
  isUsed?: boolean;
}
