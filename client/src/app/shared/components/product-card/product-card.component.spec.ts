import { provideRouter } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { ProductCardItem } from './product-card-item.model';

describe('ProductCardComponent price', () => {
  const product: ProductCardItem = {
    kind: 'bike',
    id: 'bike-1',
    name: 'Xe điện mẫu',
    brandName: 'Hãng',
    model: 'M1',
    categoryName: '',
    description: '',
    price: 2500000,
    stockQuantity: 1,
    imageUrl: '',
    companyName: 'Công ty',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductCardComponent],
      providers: [provideRouter([])],
    });
  });

  it('displays the formatted product price', () => {
    const fixture = TestBed.createComponent(ProductCardComponent);
    fixture.componentRef.setInput('product', product);
    fixture.detectChanges();

    expect(
      (fixture.nativeElement as HTMLElement).querySelector('.product-card__price')?.textContent,
    ).toContain('2.500.000 ₫');
  });

  it('displays contact when the product price is zero', () => {
    const fixture = TestBed.createComponent(ProductCardComponent);
    fixture.componentRef.setInput('product', { ...product, price: 0 });
    fixture.detectChanges();

    expect(
      (fixture.nativeElement as HTMLElement).querySelector('.product-card__price')?.textContent,
    ).toContain('Liên hệ');
  });
});
