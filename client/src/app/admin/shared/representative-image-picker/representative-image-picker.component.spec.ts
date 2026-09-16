import { EventEmitter } from '@angular/core';
import { EntityImage } from '../../../shared/models/entity-image';
import { RepresentativeImagePickerComponent } from './representative-image-picker.component';

describe('RepresentativeImagePickerComponent', () => {
  it('emits the selected media URL', () => {
    const component = Object.create(RepresentativeImagePickerComponent.prototype) as RepresentativeImagePickerComponent;
    component.valueChange = new EventEmitter<string>();
    spyOn(component.valueChange, 'emit');

    component.select({ id: '1', url: '/content/entity-images/library/a.png' } as EntityImage);

    expect(component.valueChange.emit).toHaveBeenCalledWith('/content/entity-images/library/a.png');
  });
});
