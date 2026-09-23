export enum ElectricalApplianceType {
  PressureWasher = 1,
  HandTool = 2,
  ConstructionMachine = 3,
  Motor = 4,
  WaterPump = 5,
  Battery = 6,
}

export interface ElectricalApplianceProduct {
  id: string;
  name: string;
  brand: string;
  brandName: string;
  model: string;
  type: ElectricalApplianceType;
  typeName: string;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  power: string | null;
  voltage: string | null;
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

export interface CreateElectricalApplianceProduct {
  name: string;
  brand: string;
  model: string;
  type: ElectricalApplianceType;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  power: string | null;
  voltage: string | null;
  capacity: string | null;
  compatibility: string | null;
  companyId: string;
  brandId: string;
  metadata?: Record<string, string>;
  isUsed?: boolean;
}

export interface UpdateElectricalApplianceProduct extends CreateElectricalApplianceProduct {
  id: string;
}

export const ELECTRICAL_APPLIANCE_TYPE_LABELS: Record<ElectricalApplianceType, string> = {
  [ElectricalApplianceType.PressureWasher]: 'Máy rửa xe',
  [ElectricalApplianceType.HandTool]: 'Dụng cụ cầm tay',
  [ElectricalApplianceType.ConstructionMachine]: 'Máy xây dựng',
  [ElectricalApplianceType.Motor]: 'Mô Tơ',
  [ElectricalApplianceType.WaterPump]: 'Máy Bơm',
  [ElectricalApplianceType.Battery]: 'Ắc quy các loại',
};
