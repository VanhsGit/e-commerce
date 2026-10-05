import { EventEmitter } from '@angular/core';
import { of, throwError } from 'rxjs';
import { EntityImage } from '../../../shared/models/entity-image';
import { RepresentativeImagePickerComponent } from './representative-image-picker.component';

function createComponent(): RepresentativeImagePickerComponent {
  return Object.create(
    RepresentativeImagePickerComponent.prototype,
  ) as RepresentativeImagePickerComponent;
}

function fileInputEvent(file: File | null): Event {
  const input = document.createElement('input');
  input.type = 'file';
  if (file) {
    Object.defineProperty(input, 'files', { value: [file] });
  }
  return { target: input } as unknown as Event;
}

describe('RepresentativeImagePickerComponent', () => {
  it('clears the current product image', () => {
    const component = createComponent();
    component.value = '/api/content/entity-images/library/a.png';
    component.valueChange = new EventEmitter<string>();
    let emitted: string | undefined;
    component.valueChange.subscribe(value => emitted = value);
    component.clear();
    expect(component.value).toBe('');
    expect(emitted).toBe('');
  });

  it('uploads immediately once a file is picked, with no separate confirm step', () => {
    const component = createComponent();
    component.valueChange = new EventEmitter<string>();
    const uploaded: EntityImage = { id: '2', url: '/content/entity-images/library/new.png' } as EntityImage;
    const uploadSpy = jasmine.createSpy('upload').and.returnValue(of(uploaded));
    (component as unknown as { service: { upload: typeof uploadSpy } }).service = { upload: uploadSpy };
    (component as unknown as { message: { success: () => void } }).message = { success: () => {} };
    spyOn(component.valueChange, 'emit');

    const file = new File(['x'], 'a.png', { type: 'image/png' });
    component.pick(fileInputEvent(file));

    expect(uploadSpy).toHaveBeenCalledWith(file);
    expect(component.uploading).toBeFalse();
    expect(component.valueChange.emit).toHaveBeenCalledWith('/content/entity-images/library/new.png');
  });

  it('shows a spinner state (uploading=true) while the upload request is in flight', () => {
    const component = createComponent();
    component.valueChange = new EventEmitter<string>();
    (component as unknown as { service: { upload: () => unknown } }).service = {
      upload: () => ({ pipe: () => ({ subscribe: () => {} }) }),
    };

    const file = new File(['x'], 'b.png', { type: 'image/png' });
    component.pick(fileInputEvent(file));

    expect(component.uploading).toBeTrue();
  });

  it('does nothing when the file input has no file selected', () => {
    const component = createComponent();
    component.valueChange = new EventEmitter<string>();
    component.uploading = false;
    const uploadSpy = jasmine.createSpy('upload');
    (component as unknown as { service: { upload: typeof uploadSpy } }).service = { upload: uploadSpy };

    component.pick(fileInputEvent(null));

    expect(uploadSpy).not.toHaveBeenCalled();
    expect(component.uploading).toBeFalse();
  });

  it('surfaces an upload error via the notify service without throwing', () => {
    const component = createComponent();
    component.valueChange = new EventEmitter<string>();
    (component as unknown as { service: { upload: () => unknown } }).service = {
      upload: () => throwError(() => ({ error: 'Tải ảnh thất bại' })),
    };
    const errorSpy = jasmine.createSpy('error');
    (component as unknown as { message: { error: typeof errorSpy } }).message = { error: errorSpy };

    const file = new File(['x'], 'c.png', { type: 'image/png' });
    expect(() => component.pick(fileInputEvent(file))).not.toThrow();

    expect(errorSpy).toHaveBeenCalledWith('Tải ảnh thất bại');
    expect(component.uploading).toBeFalse();
  });
});
