import { ProductMainCategory } from './productFull';

export class ShopParams {
  brandId = 0;
  typeId = 0;
  companyId = 0;
  mainCategory?: ProductMainCategory;
  bicycleCategoryId = 0;
  agricultureMachineId = 0;
  sort = 'name';
  pageNumber = 1;
  pageSize = 6;
  search?: string;
}

