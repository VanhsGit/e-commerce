import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-cm-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NzInputModule],
  templateUrl: './cm-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CmInputComponent),
      multi: true,
    },
  ],
})
export class CmInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() name = 'cm-input';
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() required = false;

  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  private onChangeCallback: (value: string) => void = () => {};
  private onTouchedCallback: () => void = () => {};

  writeValue(value: string | null | undefined): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onValueChange(value: string): void {
    this.value = value;
    this.onChangeCallback(value);
    this.valueChange.emit(value);
  }

  onBlur(): void {
    this.onTouchedCallback();
  }
}
