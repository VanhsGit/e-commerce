import { Unzip, UnzipInflate, UnzipPassThrough } from 'fflate';
import { ProductCategory } from '../../shared/models/product-category';

const MAX_ARCHIVE_SIZE = 100 * 1024 * 1024;
const MAX_ENTRY_COUNT = 5000;
const MAX_UNCOMPRESSED_SIZE = 250 * 1024 * 1024;
const IMAGE_TYPES: Record<string, string> = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

export interface MachineProductZipFolder {
  name: string;
  relativePath: string;
  categoryId: string | null;
  categoryPath: string;
  images: File[];
}

interface CategoryPath {
  id: string;
  names: string[];
}

function normalizeName(value: string): string {
  return value.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('vi');
}

function categoryPaths(categories: ProductCategory[]): CategoryPath[] {
  const paths: CategoryPath[] = [];
  const visit = (nodes: ProductCategory[], parentNames: string[]): void => {
    for (const category of nodes) {
      if (category.kind !== 'machine') continue;
      const names = [...parentNames, category.name];
      paths.push({ id: category.id, names });
      visit(category.children ?? [], names);
    }
  };
  visit(categories, []);
  return paths;
}

function imageType(fileName: string): string | null {
  const extension = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
  return IMAGE_TYPES[extension] ?? null;
}

function extractZipEntries(data: Uint8Array): Promise<Map<string, Uint8Array>> {
  return new Promise((resolve, reject) => {
    const entries = new Map<string, Uint8Array>();
    let entryCount = 0;
    let declaredSize = 0;
    let extractedSize = 0;
    let pendingFiles = 0;
    let inputComplete = false;
    let settled = false;

    const fail = (error: Error): void => {
      if (settled) return;
      settled = true;
      reject(error);
    };
    const finishIfReady = (): void => {
      if (!settled && inputComplete && pendingFiles === 0) {
        settled = true;
        resolve(entries);
      }
    };

    try {
      const unzip = new Unzip((file) => {
        if (settled) return;
        entryCount++;
        if (entryCount > MAX_ENTRY_COUNT) {
          fail(new Error(`File ZIP vượt quá giới hạn ${MAX_ENTRY_COUNT} tệp.`));
          return;
        }

        if (file.name.endsWith('/')) {
          entries.set(file.name, new Uint8Array());
          return;
        }
        const type = imageType(file.name.split('/').pop() ?? '');
        if (!type) {
          entries.set(file.name, new Uint8Array());
          return;
        }

        declaredSize += file.originalSize ?? 0;
        if (declaredSize > MAX_UNCOMPRESSED_SIZE) {
          fail(new Error('Tổng dung lượng giải nén vượt quá 250 MB.'));
          return;
        }

        pendingFiles++;
        const chunks: Uint8Array[] = [];
        let fileSize = 0;
        file.ondata = (error, chunk, final) => {
          if (settled) return;
          if (error) {
            fail(new Error('Không thể giải nén ảnh trong file ZIP.'));
            return;
          }
          fileSize += chunk.byteLength;
          extractedSize += chunk.byteLength;
          if (fileSize > MAX_UNCOMPRESSED_SIZE || extractedSize > MAX_UNCOMPRESSED_SIZE) {
            fail(new Error('Tổng dung lượng giải nén vượt quá 250 MB.'));
            return;
          }
          chunks.push(chunk);
          if (final) {
            const content = new Uint8Array(fileSize);
            let offset = 0;
            for (const part of chunks) {
              content.set(part, offset);
              offset += part.byteLength;
            }
            entries.set(file.name, content);
            pendingFiles--;
            finishIfReady();
          }
        };
        try {
          file.start();
        } catch {
          pendingFiles--;
          fail(new Error('File ZIP sử dụng định dạng nén ảnh không được hỗ trợ.'));
        }
      });
      unzip.register(UnzipPassThrough);
      unzip.register(UnzipInflate);
      unzip.push(data, true);
      inputComplete = true;
      finishIfReady();
    } catch {
      fail(new Error('Không thể đọc file ZIP. Vui lòng kiểm tra lại file.'));
    }
  });
}

export async function parseMachineProductZip(
  archive: File,
  categories: ProductCategory[],
): Promise<MachineProductZipFolder[]> {
  if (!archive.name.toLowerCase().endsWith('.zip')) {
    throw new Error('Vui lòng chọn file ZIP.');
  }
  if (archive.size === 0 || archive.size > MAX_ARCHIVE_SIZE) {
    throw new Error('File ZIP phải có dung lượng từ 1 byte đến 100 MB.');
  }

  let entries: Map<string, Uint8Array>;
  try {
    entries = await extractZipEntries(new Uint8Array(await archive.arrayBuffer()));
  } catch (error) {
    if (error instanceof Error) throw error;
    throw new Error('Không thể đọc file ZIP. Vui lòng kiểm tra lại file.');
  }

  const directories = new Set<string>();
  const childDirectories = new Set<string>();
  const imagesByDirectory = new Map<string, File[]>();

  for (const [rawPath, content] of entries) {
    const path = rawPath.replace(/\\/g, '/').replace(/^\.\/+/, '');
    const isDirectory = path.endsWith('/');
    const parts = path.split('/').filter(Boolean);
    if (path.startsWith('/') || /^[a-zA-Z]:\//.test(path)
      || path.includes('\0')
      || !parts.length || parts.some((part) => part === '.' || part === '..')) {
      throw new Error('File ZIP có đường dẫn thư mục không hợp lệ.');
    }
    if (parts[0] === '__MACOSX' || parts.some((part) => part.startsWith('._'))) {
      continue;
    }

    const directoryParts = isDirectory ? parts : parts.slice(0, -1);
    for (let index = 1; index <= directoryParts.length; index++) {
      const directory = directoryParts.slice(0, index).join('/');
      directories.add(directory);
      if (index > 1) {
        childDirectories.add(directoryParts.slice(0, index - 1).join('/'));
      }
    }
    if (isDirectory) continue;

    const type = imageType(parts[parts.length - 1]);
    if (!type) continue;
    const directory = directoryParts.join('/');
    const images = imagesByDirectory.get(directory) ?? [];
    images.push(new File([content], parts[parts.length - 1], { type }));
    imagesByDirectory.set(directory, images);
  }

  const knownCategories = categoryPaths(categories);
  const folders: MachineProductZipFolder[] = [];
  for (const path of directories) {
    const parts = path.split('/');
    if (parts.length < 2 || childDirectories.has(path)) continue;

    const parentNames = parts.slice(0, -1).map(normalizeName);
    const matchingCategories = knownCategories.filter((category) => {
      const names = category.names.map(normalizeName);
      return names.length <= parentNames.length
        && names.every((name, index) => name === parentNames[parentNames.length - names.length + index]);
    });
    const longestMatchLength = Math.max(0, ...matchingCategories.map((category) => category.names.length));
    const bestMatches = matchingCategories.filter((category) => category.names.length === longestMatchLength);
    const matchedCategory = bestMatches.length === 1 ? bestMatches[0] : null;

    folders.push({
      name: parts[parts.length - 1],
      relativePath: path,
      categoryId: matchedCategory?.id ?? null,
      categoryPath: matchedCategory?.names.join(' / ') ?? parts.slice(0, -1).join(' / '),
      images: imagesByDirectory.get(path) ?? [],
    });
  }

  return folders.sort((left, right) => left.relativePath.localeCompare(right.relativePath, 'vi'));
}
