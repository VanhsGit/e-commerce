import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CategoryPageContent } from '../../shared/models/category-page-content';
import { SiteSettings } from '../../shared/models/site-settings';

/** Trường hệ thống: hiển thị nhưng không cho sửa (vẫn được gửi lại nguyên giá trị). */
const SYSTEM_FIELDS = new Set(['version', 'kind', 'icon', 'accent']);

type ValidatorsFor = (path: string, value: unknown) => ValidatorFn[];

export function createCategoryPageForm(
  fb: FormBuilder,
  content: CategoryPageContent,
): FormGroup {
  return buildControl(fb, clone(content), '', categoryValidators) as FormGroup;
}

/** Form "Thông tin chung" (header/footer) dựng bằng cùng bộ dựng form động. */
export function createSiteSettingsForm(fb: FormBuilder, content: SiteSettings): FormGroup {
  return buildControl(fb, clone(content), '', siteValidators) as FormGroup;
}

export function readSiteSettingsForm(form: FormGroup): SiteSettings {
  return clone(form.getRawValue() as SiteSettings);
}

export function readCategoryPageForm(form: FormGroup): CategoryPageContent {
  return clone(form.getRawValue() as CategoryPageContent);
}

function buildControl(
  fb: FormBuilder,
  value: unknown,
  path: string,
  validators: ValidatorsFor,
): AbstractControl {
  if (Array.isArray(value)) {
    return new FormArray(value.map((item, index) => buildControl(fb, item, `${path}.${index}`, validators)));
  }

  if (value !== null && typeof value === 'object') {
    const controls: Record<string, AbstractControl> = {};
    for (const [key, child] of Object.entries(value)) {
      controls[key] = buildControl(fb, child, path ? `${path}.${key}` : key, validators);
    }
    return new FormGroup(controls);
  }

  const segments = path.split('.');
  const field = segments[segments.length - 1] ?? '';
  return fb.control(
    { value, disabled: SYSTEM_FIELDS.has(field) },
    validators(path, value),
  );
}

const PHONE_PATTERN = /^\+?[0-9][0-9 .()\-]{5,19}$/;
const OPTIONAL_SITE_FIELDS = new Set(['contact.zaloUrl', 'contact.facebookUrl']);

function categoryValidators(path: string, value: unknown): ValidatorFn[] {
  if (typeof value !== 'string') return [];
  if (path === 'cta.email') return [Validators.required, Validators.email];
  if (path === 'cta.phone') {
    return [Validators.required, Validators.pattern(PHONE_PATTERN)];
  }
  return [Validators.required];
}

function siteValidators(path: string, value: unknown): ValidatorFn[] {
  if (typeof value !== 'string') return [];
  if (path === 'contact.email') return [Validators.required, Validators.email];
  if (path === 'contact.phone') return [Validators.required, Validators.pattern(PHONE_PATTERN)];
  if (OPTIONAL_SITE_FIELDS.has(path)) return [Validators.pattern(/^$|^https?:\/\/\S+$/i)];
  return [Validators.required];
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
