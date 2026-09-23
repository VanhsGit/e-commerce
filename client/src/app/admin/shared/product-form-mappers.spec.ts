import { AgriculturalMachineCategory } from '../../shared/models/agriculturalMachineProduct';
import { ElectricBikeCategory } from '../../shared/models/electricBikeProduct';
import { ElectricalApplianceType } from '../../shared/models/electrical-appliance-product';
import {
  agriculturalMachineToForm,
  agriculturalMachineUpdateDto,
  electricalApplianceCreateDto,
  electricalApplianceToForm,
  electricalApplianceUpdateDto,
  electricBikeToForm,
  electricBikeUpdateDto,
} from './product-form-mappers';

describe('product form mappers', () => {
  it('maps an appliance response to a safe update DTO', () => {
    const response: any = {
      id: 'ea-1', name: 'Máy bơm', brand: 'Điện Cơ Việt', model: 'MB-125',
      type: ElectricalApplianceType.WaterPump, typeName: 'Máy Bơm',
      description: 'Máy bơm dân dụng', price: 2500000, stockQuantity: 10,
      pictureUrl: '/pump.jpg', power: '125W', voltage: '220V', capacity: null,
      compatibility: null, companyId: 'company-1', companyName: 'Công ty A',
      brandId: 'brand-1', brandName: 'Thương hiệu A', metadata: {}, isUsed: true,
      createdAt: new Date(), updatedAt: new Date(),
    };

    const dto: any = electricalApplianceUpdateDto(
      response.id,
      electricalApplianceToForm(response),
      { warrantyMonths: '12' },
    );

    expect(dto).toEqual(jasmine.objectContaining({
      id: 'ea-1', type: ElectricalApplianceType.WaterPump,
      companyId: 'company-1', brandId: 'brand-1', price: 2500000, isUsed: true,
    }));
    expect(dto.companyName).toBeUndefined();
    expect(dto.brandName).toBeUndefined();
    expect(dto.typeName).toBeUndefined();
    expect(dto.createdAt).toBeUndefined();
  });

  it('normalizes empty appliance specifications to null', () => {
    const dto = electricalApplianceCreateDto({
      name: 'Máy bơm', brand: 'Điện Cơ Việt', model: 'MB-125',
      type: ElectricalApplianceType.WaterPump, description: '', price: '2500000',
      stockQuantity: '10', pictureUrl: '', power: '', voltage: ' ', capacity: '',
      compatibility: '', companyId: 'company-1', brandId: 'brand-1', isUsed: true,
    }, {});

    expect(dto.power).toBeNull();
    expect(dto.voltage).toBeNull();
    expect(dto.capacity).toBeNull();
    expect(dto.compatibility).toBeNull();
  });

  it('strips read-only fields from bike updates', () => {
    const response: any = {
      id: 'bike-1', name: 'Xe điện', brand: 'A', model: 'X',
      category: ElectricBikeCategory.ElectricBikeModel, categoryName: 'Xe',
      description: '', price: 1, stockQuantity: 2, pictureUrl: '', voltage: null,
      power: null, batteryCapacity: null, compatibility: null, companyId: 'c1',
      companyName: 'Company', brandId: 'b1', brandName: 'Brand', metadata: {},
      isUsed: true, createdAt: new Date(), updatedAt: new Date(),
    };
    const dto: any = electricBikeUpdateDto(response.id, electricBikeToForm(response), {});
    expect(dto.companyName).toBeUndefined();
    expect(dto.brandName).toBeUndefined();
    expect(dto.categoryName).toBeUndefined();
    expect(dto.createdAt).toBeUndefined();
  });

  it('strips read-only fields from agricultural machine updates', () => {
    const response: any = {
      id: 'machine-1', name: 'Máy cày', brand: 'A', model: 'X',
      category: AgriculturalMachineCategory.MachineModel, categoryName: 'Máy',
      description: '', price: 1, stockQuantity: 2, pictureUrl: '', engineType: null,
      power: null, fuelType: null, capacity: null, compatibility: null,
      companyId: 'c1', companyName: 'Company', brandId: 'b1', brandName: 'Brand',
      metadata: {}, isUsed: true, createdAt: new Date(), updatedAt: new Date(),
    };
    const dto: any = agriculturalMachineUpdateDto(
      response.id,
      agriculturalMachineToForm(response),
      {},
    );
    expect(dto.companyName).toBeUndefined();
    expect(dto.brandName).toBeUndefined();
    expect(dto.categoryName).toBeUndefined();
    expect(dto.updatedAt).toBeUndefined();
  });
});
