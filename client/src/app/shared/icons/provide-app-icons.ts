import {
  ENVIRONMENT_INITIALIZER,
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_ICONS_MINI, APP_ICONS_OUTLINE } from './app-icons';

/** Icon nét (Heroicons outline 24) – dùng cho icon cỡ lớn, mặc định. */
export const ICON_NS_OUTLINE = 'hero';
/** Icon đặc (Heroicons solid 20) – dùng cho icon ≤20px: trong nút, matSuffix. */
export const ICON_NS_MINI = 'mini';

/**
 * Nạp toàn bộ bộ icon vào MatIconRegistry dưới hai namespace, nhờ đó
 * `<mat-icon svgIcon="hero:delete">` dùng được ở mọi nơi mà không phải
 * khai báo gì thêm trong từng component.
 *
 * Nạp bằng literal (không phải URL) nên không tốn request và không cần
 * HttpClient – icon hiện ngay ở lần render đầu, kể cả khi offline.
 */
export function provideAppIcons(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => {
        const registry = inject(MatIconRegistry);
        const sanitizer = inject(DomSanitizer);

        const register = (ns: string, icons: Record<string, string>): void => {
          for (const [name, svg] of Object.entries(icons)) {
            registry.addSvgIconLiteralInNamespace(
              ns,
              name,
              sanitizer.bypassSecurityTrustHtml(svg),
            );
          }
        };

        register(ICON_NS_OUTLINE, APP_ICONS_OUTLINE);
        register(ICON_NS_MINI, APP_ICONS_MINI);
      },
    },
  ]);
}
