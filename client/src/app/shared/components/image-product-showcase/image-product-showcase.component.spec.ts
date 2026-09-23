import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageProductShowcaseComponent } from './image-product-showcase.component';

describe('ImageProductShowcaseComponent', () => {
  let fixture: ComponentFixture<ImageProductShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageProductShowcaseComponent, RouterTestingModule],
    }).compileComponents();
    fixture = TestBed.createComponent(ImageProductShowcaseComponent);
    fixture.componentRef.setInput('title', 'Sản phẩm');
    fixture.componentRef.setInput('eyebrow', 'Nổi bật');
    fixture.componentRef.setInput('kind', 'appliance');
  });

  it('renders only active image cards', () => {
    fixture.componentRef.setInput('items', [
      { id: '1', name: 'Máy bơm', typeName: 'Máy Bơm', pictureUrl: '/pump.jpg', isUsed: true },
      { id: '2', name: 'Mô tơ', typeName: 'Mô Tơ', pictureUrl: '/motor.jpg', isUsed: false },
    ]);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.image-product-card').length).toBe(1);
  });
});
