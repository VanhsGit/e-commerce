import { zipSync, strToU8 } from 'fflate';
import { ProductCategory } from '../../shared/models/product-category';
import { parseMachineProductZip } from './machine-product-zip-import';

describe('parseMachineProductZip', () => {
  const categories: ProductCategory[] = [
    {
      id: 'category-1',
      kind: 'machine',
      name: 'Máy bơm nước',
      slug: 'may-bom-nuoc',
      parentId: null,
      parentName: null,
      description: '',
      imageUrl: '',
      sortOrder: 1,
      metadata: {},
      productCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
      children: [],
    },
  ];

  function archive(contents: Record<string, Uint8Array>): File {
    return new File([zipSync(contents)], 'products.zip', { type: 'application/zip' });
  }

  it('creates a product folder from each leaf and matches its parent category', async () => {
    const zip = archive({
      'Nong nghiep/Máy bơm nước/Máy bơm GX100/01.jpg': strToU8('image one'),
      'Nong nghiep/Máy bơm nước/Máy bơm GX100/02.png': strToU8('image two'),
      'Nong nghiep/Máy bơm nước/Máy bơm GX100/ghi-chu.txt': strToU8('ignored'),
      'Nong nghiep/Máy bơm nước/Sản phẩm chưa có ảnh/': new Uint8Array(),
    });

    const products = await parseMachineProductZip(zip, categories);
    const machine = products.find((product) => product.name === 'Máy bơm GX100');
    const emptyProduct = products.find((product) => product.name === 'Sản phẩm chưa có ảnh');

    expect(products.length).toBe(2);
    expect(machine).toEqual(jasmine.objectContaining({
      name: 'Máy bơm GX100',
      categoryId: 'category-1',
      categoryPath: 'Máy bơm nước',
    }));
    expect(machine?.images.map((image) => image.name)).toEqual(['01.jpg', '02.png']);
    expect(emptyProduct).toEqual(jasmine.objectContaining({
      name: 'Sản phẩm chưa có ảnh',
      categoryId: 'category-1',
      images: [],
    }));
  });

  it('does not associate a product with an ambiguous or unknown category', async () => {
    const zip = archive({
      'Nong nghiep/Danh muc khong ton tai/San pham/01.jpg': strToU8('image'),
    });

    const products = await parseMachineProductZip(zip, categories);

    expect(products[0].categoryId).toBeNull();
  });

  it('rejects invalid archive paths', async () => {
    const zip = archive({
      '../outside/01.jpg': strToU8('image'),
    });

    await expectAsync(parseMachineProductZip(zip, categories))
      .toBeRejectedWithError('File ZIP có đường dẫn thư mục không hợp lệ.');
  });

  it('rejects files that are not ZIP archives', async () => {
    const file = new File([strToU8('not a zip')], 'products.txt');

    await expectAsync(parseMachineProductZip(file, categories))
      .toBeRejectedWithError('Vui lòng chọn file ZIP.');
  });
});
