import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { HomePageContent } from '../../home/home-content.model';

const SYSTEM_FIELDS = new Set([
  'version',
  'kind',
  'theme',
  'anchor',
  'galleryLayout',
  'icon',
  'accent',
  'objectPosition',
]);

export function createHomeContentForm(
  fb: FormBuilder,
  content: HomePageContent,
): FormGroup {
  return buildControl(fb, clone(content), '') as FormGroup;
}

export function readHomeContentForm(form: FormGroup): HomePageContent {
  return clone(form.getRawValue() as HomePageContent);
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
  if (path.endsWith('.objectPosition')) return [];
  return [Validators.required];
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
