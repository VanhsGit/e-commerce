/**
 * Sinh src/app/shared/icons/app-icons.ts từ hai bộ icon trong node_modules.
 *
 *   npm run icons:gen
 *
 * Thêm icon mới: khai báo trong tools/icon-map.mjs rồi chạy lại lệnh trên.
 * Đừng sửa tay app-icons.ts – lần sinh sau sẽ ghi đè.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ICON_MAP } from './icon-map.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const HERO = join(here, '../node_modules/heroicons');
const LUCIDE = join(here, '../node_modules/lucide-static/icons');
const OUT = join(here, '../src/app/shared/icons/app-icons.ts');

/**
 * Rút gọn SVG và bỏ các thuộc tính chỉ có ý nghĩa với file gốc.
 *
 * Chỉ đụng vào thẻ <svg> ngoài cùng: xoá width/height trên toàn file sẽ cắt
 * mất kích thước của <rect> con bên trong (icon toggle/checkbox mất hết khung).
 * MatIcon tự đặt lại width/height = 100% nên bỏ trên thẻ gốc là an toàn.
 */
function clean(svg) {
  let s = svg.replace(/<!--[\s\S]*?-->/g, '').replace(/\s+/g, ' ').trim();
  const open = s.match(/<svg [^>]*>/);
  let head = open[0];
  for (const attr of ['aria-hidden', 'data-slot', 'class', 'width', 'height']) {
    head = head.replace(new RegExp(` ${attr}="[^"]*"`), '');
  }
  return (head + s.slice(open[0].length))
    .replace(/> </g, '><')
    .replace(/ >/g, '>')
    .replace(/ \/>/g, '/>');
}

const hero = (name, variant) =>
  clean(readFileSync(join(HERO, variant, `${name}.svg`), 'utf8'));
// Lucide vẽ nét 2; hạ về 1.5 cho khớp Heroicons outline, bản mini giữ 2 cho rõ ở cỡ nhỏ.
const lucide = (name, width) =>
  clean(readFileSync(join(LUCIDE, `${name}.svg`), 'utf8')).replace(
    'stroke-width="2"',
    `stroke-width="${width}"`,
  );

const outline = {};
const mini = {};
for (const [key, [src, name]] of Object.entries(ICON_MAP)) {
  outline[key] = src === 'h' ? hero(name, '24/outline') : lucide(name, '1.5');
  mini[key] = src === 'h' ? hero(name, '20/solid') : lucide(name, '2');
}

const counts = Object.values(ICON_MAP).reduce(
  (acc, [src]) => ({ ...acc, [src]: (acc[src] ?? 0) + 1 }),
  {},
);

const block = (name, icons) =>
  `export const ${name}: Readonly<Record<string, string>> = {\n` +
  Object.keys(icons)
    .sort()
    .map((k) => `  '${k}':\n    '${icons[k].replace(/'/g, "\'")}',\n`)
    .join('') +
  '};\n';

const file =
  `/**
 * Bộ icon dùng chung – SINH TỰ ĐỘNG, đừng sửa tay.
 * Sinh lại bằng: npm run icons:gen   (khai báo icon ở tools/icon-map.mjs)
 *
 * Nguồn:
 *  - Heroicons (MIT) – ${counts.h} icon: outline 24 + solid 20 (mini).
 *  - Lucide (ISC)    – ${counts.l} icon Heroicons không có (tractor, bike, leaf,
 *    droplet, factory, gauge, headset, gem...), đã chỉnh stroke-width cho khớp.
 *
 * Key là tên theo nghĩa dùng trong app, không phải tên file của bộ icon.
 * Đăng ký qua MatIconRegistry trong provide-app-icons.ts:
 *   <mat-icon svgIcon="hero:delete">  -> outline 24 (mặc định)
 *   <mat-icon svgIcon="mini:delete">  -> solid 20 (trong nút / matSuffix)
 */

` +
  block('APP_ICONS_OUTLINE', outline) +
  '\n' +
  block('APP_ICONS_MINI', mini);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, file, 'utf8');
console.log(
  `app-icons.ts: ${Object.keys(ICON_MAP).length} icon x 2 biến thể, ${file.length} bytes`,
);
