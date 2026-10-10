import { TestBed } from '@angular/core/testing';
import { of, Subject, throwError } from 'rxjs';
import { EntityImageService } from '../../../services/entity-image.service';
import { NotifyService } from '../../../shared/services/notify.service';
import { ColorImagesPickerComponent } from './color-images-picker.component';

describe('ColorImagesPickerComponent', () => {
  let upload: jasmine.Spy;
  let errors: jasmine.Spy;

  beforeEach(() => {
    upload = jasmine.createSpy('upload');
    errors = jasmine.createSpy('error');
    TestBed.configureTestingModule({ providers: [
      { provide: EntityImageService, useValue: { upload } },
      { provide: NotifyService, useValue: { error: errors, success: () => undefined } },
    ] });
  });

  const event = (...names: string[]): Event => ({ target: {
    files: names.map((name) => new File(['image'], name, { type: 'image/png' })), value: 'files',
  } } as unknown as Event);

  it('uploads multiple images in the chosen order, keeping existing photos', () => {
    upload.and.callFake((file: File) => of({ url: '/' + file.name }));
    const picker = TestBed.runInInjectionContext(() => new ColorImagesPickerComponent());
    picker.value = ['/existing.png'];
    const emitted = spyOn(picker.valueChange, 'emit');
    picker.pick(event('front.png', 'back.png'));
    expect(picker.value).toEqual(['/existing.png', '/front.png', '/back.png']);
    expect(emitted.calls.mostRecent().args[0]).toEqual(picker.value);
    expect(picker.uploading).toBeFalse();
    picker.remove(1);
    expect(picker.value).toEqual(['/existing.png', '/back.png']);
  });

  it('keeps successful uploads when another file fails', () => {
    upload.and.callFake((file: File) => file.name === 'bad.png'
      ? throwError(() => ({ error: 'Ảnh không hợp lệ' })) : of({ url: '/' + file.name }));
    const picker = TestBed.runInInjectionContext(() => new ColorImagesPickerComponent());
    picker.pick(event('front.png', 'bad.png', 'back.png'));
    expect(picker.value).toEqual(['/front.png', '/back.png']);
    expect(errors).toHaveBeenCalledWith('Ảnh không hợp lệ');
    expect(picker.uploading).toBeFalse();
  });

  it('prevents another batch or removal until the current upload finishes', () => {
    const pending = new Subject<{ url: string }>();
    upload.and.returnValue(pending);
    const picker = TestBed.runInInjectionContext(() => new ColorImagesPickerComponent());
    picker.value = ['/existing.png'];
    const busy = spyOn(picker.uploadingChange, 'emit');
    picker.pick(event('front.png'));
    picker.pick(event('other.png'));
    picker.remove(0);
    expect(picker.uploading).toBeTrue();
    expect(upload).toHaveBeenCalledTimes(1);
    expect(picker.value).toEqual(['/existing.png']);
    pending.next({ url: '/front.png' });
    pending.complete();
    expect(picker.uploading).toBeFalse();
    expect(busy.calls.allArgs()).toEqual([[true], [false]]);
  });
});
