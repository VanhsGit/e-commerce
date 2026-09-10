export enum AgriculturalMachineCategory {
  MachineModel = 1,
  MachinePart = 2,
}

export interface AgriculturalMachineProduct {
  id: number;
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
  companyId: number;
  companyName: string;
  brandId: number;
  createdAt: Date;
  updatedAt: Date;
  metadata: Record<string, any>;
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
  companyId: number;
  brandId: number;
  metadata?: Record<string, any>;
}

export interface UpdateAgriculturalMachineProduct {
  id: number;
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
  companyId: number;
  brandId: number;
  metadata?: Record<string, any>;
}
