/**
 * Dọn API/wwwroot rồi copy bản build mới nhất của Angular vào đó.
 *
 * API phục vụ SPA từ API/wwwroot (xem Startup.Configure), nhưng `ng build` lại
 * đổ ra client/dist/client. Không có bước copy này thì chạy API sẽ ra bundle cũ
 * và mọi thay đổi ở client đều "không có tác dụng".
 *
 * Dùng: npm run build:wwwroot   (đã gồm bước ng build)
 */
import { existsSync } from 'node:fs';
import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dist = resolve(here, '..', 'dist', 'client');
const wwwroot = resolve(here, '..', '..', 'API', 'wwwroot');

if (!existsSync(dist)) {
  console.error(`Chưa có bản build tại ${dist}. Chạy "npm run build" trước.`);
  process.exit(1);
}

// Giữ lại các thư mục không do ng build sinh ra (vd wwwroot/lib đã gitignore).
const KEEP = new Set(['lib']);

await mkdir(wwwroot, { recursive: true });
for (const entry of await readdir(wwwroot)) {
  if (KEEP.has(entry)) continue;
  await rm(join(wwwroot, entry), { recursive: true, force: true });
}

for (const entry of await readdir(dist)) {
  await cp(join(dist, entry), join(wwwroot, entry), { recursive: true });
}

console.log(`Da copy ${dist} -> ${wwwroot}`);
