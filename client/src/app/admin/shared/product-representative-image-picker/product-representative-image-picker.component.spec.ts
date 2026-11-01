import { ProductRepresentativeImagePickerComponent } from './product-representative-image-picker.component';

describe('ProductRepresentativeImagePickerComponent', () => {
  it('lists unique images from the product colors', () => {
    const component = new ProductRepresentativeImagePickerComponent();
    component.colors = [
      { name: 'Đỏ', hexCode: '', imageUrl: '', imageUrls: ['/red-front.jpg', '/shared.jpg'] },
      { name: 'Xanh', hexCode: '', imageUrl: '/shared.jpg', imageUrls: ['/shared.jpg', '/blue.jpg'] },
    ];

    expect(component.imageOptions).toEqual([
      { url: '/red-front.jpg', colorName: 'Đỏ' },
      { url: '/shared.jpg', colorName: 'Đỏ' },
      { url: '/blue.jpg', colorName: 'Xanh' },
    ]);
  });

  it('keeps an existing representative image available and emits selection changes', () => {
    const component = new ProductRepresentativeImagePickerComponent();
    component.colors = [{ name: 'Đỏ', hexCode: '', imageUrl: '', imageUrls: ['/red.jpg'] }];
    component.value = '/existing-cover.jpg';
    const emitted: string[] = [];
    component.valueChange.subscribe((value) => emitted.push(value));

    expect(component.imageOptions[0]).toEqual({
      url: '/existing-cover.jpg',
      colorName: 'Ảnh đại diện hiện tại',
    });

    component.select('/red.jpg');
    component.clear();

    expect(emitted).toEqual(['/red.jpg', '']);
  });
});
