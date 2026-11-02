import { AgriculturalMachineCategory } from '../../shared/models/agriculturalMachineProduct';
import { ElectricBikeCategory } from '../../shared/models/electricBikeProduct';
import {
  agriculturalMachineToForm,
  agriculturalMachineUpdateDto,
  electricBikeToForm,
  electricBikeUpdateDto,
} from './product-form-mappers';

describe('product form mappers', () => {
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

describe('product form mappers - category and colours', () => {
  it('sends categoryId and drops empty colour rows', () => {
    const dto = electricBikeUpdateDto(
      'bike-1',
      {
        name: 'Xe', brand: 'H', model: 'M', category: ElectricBikeCategory.ElectricBikeModel,
        description: 'd', price: 1, stockQuantity: 1, pictureUrl: '', voltage: '', power: '',
        batteryCapacity: '', compatibility: '', companyId: 'c', brandId: 'b', isUsed: true,
        categoryId: 'cat-bike-133-12a-ban-full',
      },
      {},
      [
        { name: '  ', hexCode: '', imageUrl: '' },
        { name: ' Đỏ đun ', hexCode: ' #b91c1c ', imageUrl: '' },
      ],
    );

    expect(dto.categoryId).toBe('cat-bike-133-12a-ban-full');
    expect(dto.colors).toEqual([{ name: 'Đỏ đun', hexCode: '#b91c1c', imageUrl: '', imageUrls: [] }]);
  });

});
