import {
  AgriculturalMachineCategory,
  AgriculturalMachineProduct,
  CreateAgriculturalMachineProduct,
  UpdateAgriculturalMachineProduct,
} from '../../shared/models/agriculturalMachineProduct';
import {
  CreateElectricBikeProduct,
  ElectricBikeCategory,
  ElectricBikeProduct,
  UpdateElectricBikeProduct,
} from '../../shared/models/electricBikeProduct';
import {
  CreateElectricalApplianceProduct,
  ElectricalApplianceProduct,
  ElectricalApplianceType,
  UpdateElectricalApplianceProduct,
} from '../../shared/models/electrical-appliance-product';

type InputValue = string | number | null | undefined;

export interface ElectricBikeFormValue {
  name: string | null;
  brand: string | null;
  model: string | null;
  category: ElectricBikeCategory | null;
  description: string | null;
  price: InputValue;
  stockQuantity: InputValue;
  pictureUrl: string | null;
  voltage: string | null;
  power: string | null;
  batteryCapacity: string | null;
  compatibility: string | null;
  companyId: InputValue;
  brandId: InputValue;
  isUsed: boolean | null;
}

export interface AgriculturalMachineFormValue {
  name: string | null;
  brand: string | null;
  model: string | null;
  category: AgriculturalMachineCategory | null;
  description: string | null;
  price: InputValue;
  stockQuantity: InputValue;
  pictureUrl: string | null;
  engineType: string | null;
  power: string | null;
  fuelType: string | null;
  capacity: string | null;
  compatibility: string | null;
  companyId: InputValue;
  brandId: InputValue;
  isUsed: boolean | null;
}

export interface ElectricalApplianceFormValue {
  name: string | null;
  brand: string | null;
  model: string | null;
  type: ElectricalApplianceType | null;
  description: string | null;
  price: InputValue;
  stockQuantity: InputValue;
  pictureUrl: string | null;
  power: string | null;
  voltage: string | null;
  capacity: string | null;
  compatibility: string | null;
  companyId: InputValue;
  brandId: InputValue;
  isUsed: boolean | null;
}

const text = (value: string | null | undefined): string => value?.trim() ?? '';
const nullable = (value: string | null | undefined): string | null =>
  value?.trim() ? value.trim() : null;
const id = (value: InputValue): string => value === null || value === undefined ? '' : String(value);
const number = (value: InputValue): number => Number(value ?? 0);

export function electricBikeToForm(product: ElectricBikeProduct): ElectricBikeFormValue {
  return {
    name: product.name, brand: product.brand, model: product.model, category: product.category,
    description: product.description, price: product.price, stockQuantity: product.stockQuantity,
    pictureUrl: product.pictureUrl, voltage: product.voltage, power: product.power,
    batteryCapacity: product.batteryCapacity, compatibility: product.compatibility,
    companyId: product.companyId, brandId: product.brandId, isUsed: product.isUsed !== false,
  };
}

export function electricBikeCreateDto(
  raw: ElectricBikeFormValue,
  metadata: Record<string, string>,
): CreateElectricBikeProduct {
  return {
    name: text(raw.name), brand: text(raw.brand), model: text(raw.model),
    category: raw.category ?? ElectricBikeCategory.ElectricBikeModel,
    description: text(raw.description), price: number(raw.price), stockQuantity: number(raw.stockQuantity),
    pictureUrl: text(raw.pictureUrl), voltage: nullable(raw.voltage), power: nullable(raw.power),
    batteryCapacity: nullable(raw.batteryCapacity), compatibility: nullable(raw.compatibility),
    companyId: id(raw.companyId), brandId: id(raw.brandId), metadata: { ...metadata },
    isUsed: raw.isUsed !== false,
  };
}

export function electricBikeUpdateDto(
  productId: string,
  raw: ElectricBikeFormValue,
  metadata: Record<string, string>,
): UpdateElectricBikeProduct {
  return { id: productId, ...electricBikeCreateDto(raw, metadata) };
}

export function agriculturalMachineToForm(
  product: AgriculturalMachineProduct,
): AgriculturalMachineFormValue {
  return {
    name: product.name, brand: product.brand, model: product.model, category: product.category,
    description: product.description, price: product.price, stockQuantity: product.stockQuantity,
    pictureUrl: product.pictureUrl, engineType: product.engineType, power: product.power,
    fuelType: product.fuelType, capacity: product.capacity, compatibility: product.compatibility,
    companyId: product.companyId, brandId: product.brandId, isUsed: product.isUsed !== false,
  };
}

export function agriculturalMachineCreateDto(
  raw: AgriculturalMachineFormValue,
  metadata: Record<string, string>,
): CreateAgriculturalMachineProduct {
  return {
    name: text(raw.name), brand: text(raw.brand), model: text(raw.model),
    category: raw.category ?? AgriculturalMachineCategory.MachineModel,
    description: text(raw.description), price: number(raw.price), stockQuantity: number(raw.stockQuantity),
    pictureUrl: text(raw.pictureUrl), engineType: nullable(raw.engineType), power: nullable(raw.power),
    fuelType: nullable(raw.fuelType), capacity: nullable(raw.capacity),
    compatibility: nullable(raw.compatibility), companyId: id(raw.companyId), brandId: id(raw.brandId),
    metadata: { ...metadata }, isUsed: raw.isUsed !== false,
  };
}

export function agriculturalMachineUpdateDto(
  productId: string,
  raw: AgriculturalMachineFormValue,
  metadata: Record<string, string>,
): UpdateAgriculturalMachineProduct {
  return { id: productId, ...agriculturalMachineCreateDto(raw, metadata) };
}

export function electricalApplianceToForm(
  product: ElectricalApplianceProduct,
): ElectricalApplianceFormValue {
  return {
    name: product.name, brand: product.brand, model: product.model, type: product.type,
    description: product.description, price: product.price, stockQuantity: product.stockQuantity,
    pictureUrl: product.pictureUrl, power: product.power, voltage: product.voltage,
    capacity: product.capacity, compatibility: product.compatibility, companyId: product.companyId,
    brandId: product.brandId, isUsed: product.isUsed !== false,
  };
}

export function electricalApplianceCreateDto(
  raw: ElectricalApplianceFormValue,
  metadata: Record<string, string>,
): CreateElectricalApplianceProduct {
  return {
    name: text(raw.name), brand: text(raw.brand), model: text(raw.model),
    type: raw.type ?? ElectricalApplianceType.PressureWasher, description: text(raw.description),
    price: number(raw.price), stockQuantity: number(raw.stockQuantity), pictureUrl: text(raw.pictureUrl),
    power: nullable(raw.power), voltage: nullable(raw.voltage), capacity: nullable(raw.capacity),
    compatibility: nullable(raw.compatibility), companyId: id(raw.companyId), brandId: id(raw.brandId),
    metadata: { ...metadata }, isUsed: raw.isUsed !== false,
  };
}

export function electricalApplianceUpdateDto(
  productId: string,
  raw: ElectricalApplianceFormValue,
  metadata: Record<string, string>,
): UpdateElectricalApplianceProduct {
  return { id: productId, ...electricalApplianceCreateDto(raw, metadata) };
}
