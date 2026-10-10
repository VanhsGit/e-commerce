import { TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { EntityImageService } from '../../../services/entity-image.service';
import { provideAppIcons } from '../../../shared/icons/provide-app-icons';
import { ColorImagesPickerComponent } from './color-images-picker.component';
import { ColorOptionsEditorComponent } from './color-options-editor.component';

describe('ColorOptionsEditorComponent', () => {
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
