import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { Component, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EntityImageService } from '../../../services/entity-image.service';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { ProductColorOption } from '../../../shared/models/product-category';
import { validateColorOptions } from '../color-options';
import { ColorImagesPickerComponent } from './color-images-picker.component';
import { ColorOptionsEditorComponent } from './color-options-editor.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, ColorOptionsEditorComponent],
  template: `
    <form [formGroup]="form">
      <app-color-options-editor [value]="colors()" (valueChange)="colors.set($event)"></app-color-options-editor>
    </form>
  `,
})
class ColorEditorHostComponent {
  readonly form = new FormGroup({});
  readonly colors = signal<ProductColorOption[]>([
    { name: 'Đỏ', hexCode: '#f00', imageUrl: '/red.jpg' },
    { name: '', hexCode: '#fff', imageUrl: '/white.jpg' },
  ]);
}

describe('ColorOptionsEditorComponent', () => {
  it('syncs the visible Vietnamese name before saving while IME composition is active', async () => {
    await TestBed.configureTestingModule({
      imports: [ColorEditorHostComponent],
      providers: [provideNoopAnimations(), provideAppIcons(), { provide: EntityImageService, useValue: {} }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ColorEditorHostComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    const input = fixture.nativeElement.querySelector('[name="color-name-1"]') as HTMLInputElement;

    input.dispatchEvent(new CompositionEvent('compositionstart'));
    input.value = 'Trắng';
    input.dispatchEvent(new InputEvent('input', { data: 'Trắng', isComposing: true }));

    // Saving reads the parent signal immediately, before compositionend or blur.
    expect(fixture.componentInstance.colors()[1].name).toBe('Trắng');
    expect(validateColorOptions(fixture.componentInstance.colors())).toBeNull();
    input.dispatchEvent(new CompositionEvent('compositionend', { data: 'Trắng' }));
    fixture.detectChanges();
    expect(fixture.componentInstance.colors()[1].name).toBe('Trắng');
  });

  it('syncs typed names to the product form and keeps the remaining name after deleting a colour', async () => {
    await TestBed.configureTestingModule({
      imports: [ColorEditorHostComponent],
      providers: [provideNoopAnimations(), provideAppIcons(), { provide: EntityImageService, useValue: {} }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ColorEditorHostComponent);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const editor = fixture.debugElement.query(By.directive(ColorOptionsEditorComponent)).componentInstance as ColorOptionsEditorComponent;
    const input = fixture.nativeElement.querySelector('[name="color-name-1"]') as HTMLInputElement;
    input.value = 'Trắng';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance.colors()[1].name).toBe('Trắng');
    expect(fixture.componentInstance.colors()[1].hexCode).toBe('#fff');
    expect(validateColorOptions(fixture.componentInstance.colors())).toBeNull();

    editor.remove(0);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('[name="color-name-0"]').value).toBe('Trắng');
    expect(fixture.componentInstance.colors().length).toBe(1);
    expect(validateColorOptions(fixture.componentInstance.colors())).toBeNull();

    const remainingInput = fixture.nativeElement.querySelector('[name="color-name-0"]') as HTMLInputElement;
    remainingInput.value = 'Trắng ngà';
    remainingInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    await fixture.whenStable();
    expect(fixture.componentInstance.colors()[0].name).toBe('Trắng ngà');
  });

  it('edits a named multi-image colour, hides hex fields and clears the legacy image after removing all photos', async () => {
    await TestBed.configureTestingModule({
      imports: [ColorOptionsEditorComponent],
      providers: [provideNoopAnimations(), provideAppIcons(), { provide: EntityImageService, useValue: {} }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ColorOptionsEditorComponent);
    fixture.componentRef.setInput('value', [{ name: 'Đỏ đun', hexCode: '#b91c1c', imageUrl: '/old.png' }]);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const editor = fixture.componentInstance;
    expect(editor.rows[0].imageUrls).toEqual(['/old.png']);
    expect(fixture.nativeElement.querySelector('[name="color-name-0"]').value).toBe('Đỏ đun');
    expect(fixture.nativeElement.querySelector('input[type="color"]')).toBeNull();
    expect(fixture.nativeElement.textContent).not.toContain('Mã màu');
    const picker = fixture.debugElement.query(By.directive(ColorImagesPickerComponent)).componentInstance as ColorImagesPickerComponent;
    picker.valueChange.emit(['/front.png', '/back.png']);
    expect(editor.rows[0].imageUrls).toEqual(['/front.png', '/back.png']);
    expect(editor.rows[0].name).toBe('Đỏ đun');
    picker.valueChange.emit([]);
    expect(editor.rows[0].imageUrl).toBe('');
    expect(editor.rows[0].imageUrls).toEqual([]);
  });

  it('waits for every colour upload and releases the state when an uploading colour is removed', () => {
    const editor = new ColorOptionsEditorComponent();
    editor.add();
    editor.add();
    const busy = spyOn(editor.uploadingChange, 'emit');
    editor.setUploading(editor.rows[0], true);
    editor.setUploading(editor.rows[1], true);
    editor.setUploading(editor.rows[0], false);
    expect(busy.calls.mostRecent().args[0]).toBeTrue();
    editor.remove(1);
    expect(busy.calls.mostRecent().args[0]).toBeFalse();
  });
});
