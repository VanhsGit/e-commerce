import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CategoryPageContent } from '../../shared/models/category-page-content';

/** Trường hệ thống: hiển thị nhưng không cho sửa (vẫn được gửi lại nguyên giá trị). */
const SYSTEM_FIELDS = new Set(['version', 'kind', 'icon', 'accent']);

export function createCategoryPageForm(
  fb: FormBuilder,
  content: CategoryPageContent,
): FormGroup {
  return buildControl(fb, clone(content), '') as FormGroup;
}

export function readCategoryPageForm(form: FormGroup): CategoryPageContent {
  return clone(form.getRawValue() as CategoryPageContent);
}

function buildControl(fb: FormBuilder, value: unknown, path: string): AbstractControl {
  if (Array.isArray(value)) {
    return new FormArray(value.map((item, index) => buildControl(fb, item, `${path}.${index}`)));
  }

  if (value !== null && typeof value === 'object') {
    const controls: Record<string, AbstractControl> = {};
    for (const [key, child] of Object.entries(value)) {
      controls[key] = buildControl(fb, child, path ? `${path}.${key}` : key);
    }
    return new FormGroup(controls);
  }

  const segments = path.split('.');
  const field = segments[segments.length - 1] ?? '';
  return fb.control(
    { value, disabled: SYSTEM_FIELDS.has(field) },
    validatorsFor(path, value),
  );
}

function validatorsFor(path: string, value: unknown): ValidatorFn[] {
  if (typeof value !== 'string') return [];
  if (path === 'cta.email') return [Validators.required, Validators.email];
  if (path === 'cta.phone') {
    return [Validators.required, Validators.pattern(/^\+?[0-9][0-9 .()\-]{5,19}$/)];
  }
  return [Validators.required];
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
