import { EntityType } from '../shared/models/entity-image';

export type AdminFieldType = 'text' | 'textarea' | 'number' | 'boolean' | 'select' | 'metadata' | 'json';

export interface AdminFieldOption {
  label: string;
  value: string | number;
}

export interface AdminFieldConfig {
  name: string;
  label: string;
  type: AdminFieldType;
  required?: boolean;
  defaultValue?: unknown;
  options?: AdminFieldOption[];
}

export interface AdminResourceConfig {
  title: string;
  endpoint: string;
  entityType: EntityType;
  fields: AdminFieldConfig[];
}

const activeField: AdminFieldConfig = { name: 'isUsed', label: 'Đang sử dụng', type: 'boolean', defaultValue: true };
const metadataField: AdminFieldConfig = { name: 'metadata', label: 'Metadata', type: 'metadata', defaultValue: {} };

export const ADMIN_RESOURCES: Record<string, AdminResourceConfig> = {
  companies: {
    title: 'Công ty', endpoint: 'companies', entityType: 'Company',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'description', label: 'Mô tả', type: 'textarea' },
      { name: 'logoUrl', label: 'Logo URL cũ', type: 'text' },
      { name: 'address', label: 'Địa chỉ', type: 'text' },
      { name: 'phoneNumber', label: 'Điện thoại', type: 'text' },
      { name: 'email', label: 'Email', type: 'text' },
      { name: 'website', label: 'Website', type: 'text' }, metadataField, activeField,
    ],
  },
  brands: {
    title: 'Thương hiệu', endpoint: 'brands', entityType: 'Brand',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'description', label: 'Mô tả', type: 'textarea' },
      { name: 'logoUrl', label: 'Logo URL cũ', type: 'text' }, metadataField, activeField,
    ],
  },
  'electric-bikes': {
    title: 'Xe điện', endpoint: 'electricBikeProducts', entityType: 'ElectricBikeProduct',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true },
      { name: 'brand', label: 'Nhãn hiển thị', type: 'text', required: true },
      { name: 'model', label: 'Model', type: 'text', required: true },
      { name: 'category', label: 'Loại', type: 'select', required: true, defaultValue: 1, options: [{ label: 'Mẫu xe', value: 1 }, { label: 'Phụ tùng', value: 2 }] },
      { name: 'description', label: 'Mô tả', type: 'textarea', required: true },
      { name: 'price', label: 'Giá', type: 'number', defaultValue: 0 },
      { name: 'stockQuantity', label: 'Tồn kho', type: 'number', defaultValue: 0 },
      { name: 'pictureUrl', label: 'Ảnh URL cũ', type: 'text' },
      { name: 'voltage', label: 'Điện áp', type: 'text' }, { name: 'power', label: 'Công suất', type: 'text' },
      { name: 'batteryCapacity', label: 'Dung lượng pin', type: 'text' }, { name: 'compatibility', label: 'Tương thích', type: 'text' },
      { name: 'companyId', label: 'Company ID', type: 'number', required: true }, { name: 'brandId', label: 'Brand ID', type: 'number', required: true },
      metadataField, activeField,
    ],
  },
  'agricultural-machines': {
    title: 'Máy nông nghiệp', endpoint: 'agriculturalMachineProducts', entityType: 'AgriculturalMachineProduct',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true }, { name: 'brand', label: 'Nhãn hiển thị', type: 'text', required: true },
      { name: 'model', label: 'Model', type: 'text', required: true },
      { name: 'category', label: 'Loại', type: 'select', defaultValue: 1, options: [{ label: 'Máy', value: 1 }, { label: 'Phụ tùng', value: 2 }] },
      { name: 'description', label: 'Mô tả', type: 'textarea', required: true }, { name: 'price', label: 'Giá', type: 'number', defaultValue: 0 },
      { name: 'stockQuantity', label: 'Tồn kho', type: 'number', defaultValue: 0 }, { name: 'pictureUrl', label: 'Ảnh URL cũ', type: 'text' },
      { name: 'engineType', label: 'Động cơ', type: 'text' }, { name: 'power', label: 'Công suất', type: 'text' },
      { name: 'fuelType', label: 'Nhiên liệu', type: 'text' }, { name: 'capacity', label: 'Công suất chứa', type: 'text' },
      { name: 'compatibility', label: 'Tương thích', type: 'text' }, { name: 'companyId', label: 'Company ID', type: 'number', required: true },
      { name: 'brandId', label: 'Brand ID', type: 'number', required: true }, metadataField, activeField,
    ],
  },
  products: {
    title: 'Sản phẩm', endpoint: 'products', entityType: 'Product',
    fields: [
      { name: 'name', label: 'Tên', type: 'text', required: true }, { name: 'description', label: 'Mô tả', type: 'textarea', required: true },
      { name: 'price', label: 'Giá', type: 'number', defaultValue: 0 }, { name: 'pictureUrl', label: 'Ảnh URL cũ', type: 'text' },
      { name: 'productTypeId', label: 'Product Type ID', type: 'number', required: true },
      { name: 'productBrandId', label: 'Product Brand ID', type: 'number', required: true },
      { name: 'companyId', label: 'Company ID', type: 'number', required: true }, activeField,
    ],
  },
  'product-brands': { title: 'Nhãn sản phẩm', endpoint: 'productBrands', entityType: 'ProductBrand', fields: [{ name: 'name', label: 'Tên', type: 'text', required: true }, activeField] },
  'product-types': { title: 'Loại sản phẩm', endpoint: 'productTypes', entityType: 'ProductType', fields: [{ name: 'name', label: 'Tên', type: 'text', required: true }, activeField] },
  'delivery-methods': {
    title: 'Phương thức giao hàng', endpoint: 'deliveryMethods', entityType: 'DeliveryMethod',
    fields: [
      { name: 'shortName', label: 'Tên ngắn', type: 'text', required: true }, { name: 'deliveryTime', label: 'Thời gian', type: 'text', required: true },
      { name: 'description', label: 'Mô tả', type: 'textarea', required: true }, { name: 'price', label: 'Phí', type: 'number', defaultValue: 0 }, activeField,
    ],
  },
  users: {
    title: 'Người dùng', endpoint: 'admin/users', entityType: 'User',
    fields: [{ name: 'email', label: 'Email', type: 'text', required: true }, { name: 'displayName', label: 'Tên hiển thị', type: 'text' }, activeField],
  },
  orders: {
    title: 'Đơn hàng', endpoint: 'admin/orders', entityType: 'Order',
    fields: [
      { name: 'buyerEmail', label: 'Email khách', type: 'text', required: true },
      { name: 'deliveryMethodId', label: 'Delivery Method ID', type: 'number', required: true },
      { name: 'subtotal', label: 'Tạm tính', type: 'number' },
      { name: 'status', label: 'Trạng thái', type: 'select', defaultValue: 0, options: [{ label: 'Pending', value: 0 }, { label: 'Payment Received', value: 1 }, { label: 'Payment Failed', value: 2 }] },
      { name: 'paymentIntentId', label: 'Payment Intent', type: 'text' },
      { name: 'shipToAddress', label: 'Địa chỉ (JSON)', type: 'json', required: true, defaultValue: { firstName: '', lastName: '', street: '', city: '', state: '', zipcode: '' } },
      { name: 'orderItems', label: 'Sản phẩm (JSON array)', type: 'json', required: true, defaultValue: [] }, activeField,
    ],
  },
};
