import {
  isMultilineMetadata,
  metadataDisplayLabel,
  metadataFieldLabel,
  metadataWithIntroduction,
  metadataWithSpecifications,
  metadataWithWarranty,
  metadataWithoutIntroduction,
  metadataWithoutSpecifications,
  metadataWithoutWarranty,
  userMetadata,
} from './metadata-editor.component';

describe('Metadata editor CSV fields', () => {
  it('labels imported product fields clearly', () => {
    expect(metadataFieldLabel('Warranty', 'value')).toBe('Warranty / Chính sách bảo hành');
    expect(metadataFieldLabel('PriceNote', 'value')).toBe('PriceNote / Ghi chú giá');
    expect(metadataFieldLabel('ColorsFromCsv', 'value')).toBe('ColorsFromCsv / Màu từ CSV');
    expect(metadataFieldLabel('Specifications', 'value')).toBe('Specifications / Thông số kỹ thuật');
  });

  it('uses friendly labels for known CSV metadata in the detail view', () => {
    expect(metadataDisplayLabel('Warranty')).toBe('Warranty / Chính sách bảo hành');
    expect(metadataDisplayLabel('Specifications')).toBe('Specifications / Thông số kỹ thuật');
    expect(metadataDisplayLabel('custom')).toBe('custom');
  });

  it('uses multiline controls for warranty and specifications', () => {
    expect(isMultilineMetadata('Warranty')).toBeTrue();
    expect(isMultilineMetadata('Specifications')).toBeTrue();
    expect(isMultilineMetadata('PriceNote')).toBeFalse();
  });

  it('moves specifications into a dedicated field without losing other metadata', () => {
    const metadata = {
      Specifications: 'Tốc độ tối đa: 40 km/h',
      PriceNote: 'Giá tạm',
    };

    expect(metadataWithoutSpecifications(metadata)).toEqual({
      PriceNote: 'Giá tạm',
    });
    expect(
      metadataWithSpecifications(metadata, '  Tốc độ tối đa: 45 km/h  '),
    ).toEqual({
      PriceNote: 'Giá tạm',
      Specifications: 'Tốc độ tối đa: 45 km/h',
    });
    expect(metadataWithSpecifications(metadata, '  ')).toEqual({
      PriceNote: 'Giá tạm',
    });
  });

  it('preserves imported metadata while excluding only internal image data', () => {
    expect(userMetadata({
      Warranty: 'Bảo hành',
      PriceNote: 'Giá tạm',
      ColorsFromCsv: 'Trắng, Đen',
      Specifications: 'Tốc độ: 40km/h',
      seedImageUrls: 'internal',
    })).toEqual({
      Warranty: 'Bảo hành',
      PriceNote: 'Giá tạm',
      ColorsFromCsv: 'Trắng, Đen',
      Specifications: 'Tốc độ: 40km/h',
    });
  });

  it('moves warranty into its dedicated field without losing other metadata', () => {
    const metadata = {
      Warranty: 'CSV policy',
      PriceNote: 'Temporary price',
      seedImageUrls: 'internal',
    };
    expect(metadataWithoutWarranty(metadata)).toEqual({
      PriceNote: 'Temporary price',
      seedImageUrls: 'internal',
    });
    expect(metadataWithWarranty(metadata, 'Updated policy')).toEqual({
      PriceNote: 'Temporary price',
      seedImageUrls: 'internal',
      Warranty: 'Updated policy',
    });
    expect(metadataWithWarranty(metadata, '  ')).toEqual({
      PriceNote: 'Temporary price',
      seedImageUrls: 'internal',
    });
  });

  it('moves product introduction into its dedicated field without losing metadata', () => {
    const metadata = {
      Introduction: 'Old intro',
      Warranty: 'Warranty policy',
      PriceNote: 'Temporary price',
    };

    expect(metadataWithoutIntroduction(metadata)).toEqual({
      Warranty: 'Warranty policy',
      PriceNote: 'Temporary price',
    });
    expect(
      metadataWithIntroduction(metadata, '  Product introduction  '),
    ).toEqual({
      Warranty: 'Warranty policy',
      PriceNote: 'Temporary price',
      Introduction: 'Product introduction',
    });
    expect(metadataWithIntroduction(metadata, '  ')).toEqual({
      Warranty: 'Warranty policy',
      PriceNote: 'Temporary price',
    });
  });
});
