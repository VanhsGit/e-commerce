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

const VARIABLE_LISTS = new Set([
  'solutions.images', 'recruitment.positions', 'recruitment.benefits',
  'recruitment.sites', 'recruitment.hotlines',
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

export function createHomeContentRow(fb: FormBuilder, value: unknown, path: string): AbstractControl {
  return buildControl(fb, clone(value), path);
}

function buildControl(fb: FormBuilder, value: unknown, path: string): AbstractControl {
  if (Array.isArray(value)) {
    return new FormArray(value.map((item, index) => buildControl(fb, item, `${path}.${index}`)),
      VARIABLE_LISTS.has(path) ? [(control) => control.value.length >= 1 ? null : { minLength: true }] : []);
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
    { value, disabled: SYSTEM_FIELDS.has(field) && !/^solutions\.images\.\d+\.kind$/.test(path) },
    validatorsFor(path, value),
  );
}

function validatorsFor(path: string, value: unknown): ValidatorFn[] {
  if (/^recruitment\.positions\.\d+\.count$/.test(path)) {
    return [Validators.required, (control) =>
      Number.isSafeInteger(control.value) && control.value > 0 ? null : { positiveInteger: true }];
  }
  if (/^solutions\.images\.\d+\.kind$/.test(path)) {
    return [Validators.required, Validators.pattern(/^(bike|machine|appliance)$/)];
  }
  if (typeof value !== 'string') return [];
  if (/^recruitment\.positions\.\d+\.note$/.test(path)) return [];
  if ((path.endsWith('.imageSrc') && !path.startsWith('hero.cards.')) || path === 'hero.desktopImageSrc' || path === 'hero.mobileImageSrc') {
    return [Validators.required, imageSourceValidator];
  }
  if (path === 'cta.email') return [Validators.required, Validators.email];
  if (path === 'cta.phone' || /^recruitment\.hotlines\.\d+\.tel$/.test(path)) {
    return [Validators.required, Validators.pattern(/^\+?[0-9][0-9 .()\-]{5,19}$/)];
  }
  if (path.endsWith('.objectPosition')) return [];
  return [Validators.required, (control) => typeof control.value === 'string' && control.value.trim() ? null : { required: true }];
}

const imageSourceValidator: ValidatorFn = (control) => {
  const value = control.value;
  if (typeof value !== 'string' || /[\s\\]/.test(value)) return { imageSource: true };
  if (/^https?:\/\//i.test(value)) {
    try {
      const url = new URL(value);
      return url.hostname && !url.username && !url.password ? null : { imageSource: true };
    } catch { return { imageSource: true }; }
  }
  return /^(?:assets\/|\/(?!\/)).+/.test(value)
    && !/(?:^|\/)(?:\.|\.\.)(?:\/|$)/.test(value)
    && !/%2e|%2f|%5c/i.test(value) ? null : { imageSource: true };
};

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
