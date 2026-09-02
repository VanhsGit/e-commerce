import {
  Component,
  OnInit,
  ElementRef,
  Self,
  input,
  viewChild,
} from '@angular/core';

import {
  ControlValueAccessor,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzInputModule],
  templateUrl: './text-input.component.html',
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  // @ViewChild('input', { static: true }) input: ElementRef;
  input = viewChild.required<ElementRef>('input');

  // @Input() type = 'text';
  type = input<string>('text');

  // @Input() label: string;
  label = input.required<string>();

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;

    const validators = control!.validator ? [control!.validator] : [];

    const asyncValidators = control!.asyncValidator
      ? [control!.asyncValidator]
      : [];

    control!.setValidators(validators);
    control!.setAsyncValidators(asyncValidators);
    control!.updateValueAndValidity();
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.onChangeCallback(input.value);
  }

  onTouched() {
    this.onTouchedCallback();
  }

  writeValue(obj: any): void {
    this.input().nativeElement.value = obj || '';
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  private onChangeCallback: any = () => {};
  private onTouchedCallback: any = () => {};
}
