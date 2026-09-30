import { CommonModule } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { catchError, forkJoin, of } from 'rxjs';
import { ProductCategoryService } from '../../services/product-category.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import {
  PRODUCT_KIND_LABELS,
  ProductCategory,
  ProductKind,
  UpdateProductCategory,
} from '../../shared/models/product-category';
import { NotifyService } from '../../shared/services/notify.service';
import { apiErrorMessage } from '../shared/api-error';
import { AdminEmptyStateComponent } from '../shared/empty-state/admin-empty-state.component';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';
import { slugify } from '../shared/slugify';

const KINDS: ProductKind[] = ['bike', 'machine', 'appliance'];
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Một dòng của bảng cây đã làm phẳng theo trạng thái đóng/mở. */
export interface CategoryRow {
  node: ProductCategory;
  depth: number;
  childCount: number;
  /** Cha trực tiếp (null ở cấp gốc). */
  parent: ProductCategory | null;
}

@Component({
  selector: 'app-product-categories-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminEmptyStateComponent,
    AdminPageHeaderComponent,
    MetadataEditorComponent,
    RepresentativeImagePickerComponent,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTooltipModule,
    NzTableModule,
  ],
  templateUrl: './product-categories-admin-page.component.html',
})
export class ProductCategoriesAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(ProductCategoryService);
  private readonly notify = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly dialog = inject(MatDialog);

  @ViewChild('formDialog') private formDialog!: TemplateRef<unknown>;
  private formRef?: MatDialogRef<unknown>;

  readonly kinds = KINDS;
  readonly kindLabels = PRODUCT_KIND_LABELS;
  readonly kindIcons: Record<ProductKind, string> = {
    bike: 'electric_moped',
    machine: 'agriculture',
    appliance: 'bolt',
  };

  readonly trees = signal<Record<ProductKind, ProductCategory[]>>({ bike: [], machine: [], appliance: [] });
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly selectedKindIndex = signal(0);
  /** Id các danh mục đang thu gọn (mặc định mở hết để thấy ngay 3 cấp). */
  readonly collapsed = signal<ReadonlySet<string>>(new Set());

  readonly editing = signal<ProductCategory | null>(null);
  readonly dialogKind = signal<ProductKind>('bike');
  readonly metadata = signal<Record<string, string>>({});

  readonly rows = computed<Record<ProductKind, CategoryRow[]>>(() => {
    const trees = this.trees();
    const collapsed = this.collapsed();
    return {
      bike: flatten(trees.bike, collapsed),
      machine: flatten(trees.machine, collapsed),
      appliance: flatten(trees.appliance, collapsed),
    };
  });

  /** Tổng số danh mục (mọi cấp) từng kind, hiển thị trên nhãn tab. */
  readonly totals = computed<Record<ProductKind, number>>(() => {
    const trees = this.trees();
    return {
      bike: countAll(trees.bike),
      machine: countAll(trees.machine),
      appliance: countAll(trees.appliance),
    };
  });

  /** Chỉ danh mục gốc cùng kind, bỏ chính nó và hậu duệ của nó. */
  readonly parentOptions = computed<ProductCategory[]>(() => {
    const roots = this.trees()[this.dialogKind()];
    const self = this.editing();
    if (!self) return roots;
    const excluded = new Set<string>([self.id, ...descendantIds(self)]);
    return roots.filter((r) => !excluded.has(r.id));
  });

  readonly form = this.fb.group({
    name: ['', Validators.required],
    slug: ['', [Validators.required, Validators.pattern(SLUG_PATTERN)]],
    parentId: [null as string | null],
    description: [''],
    imageUrl: [''],
    sortOrder: [0, Validators.required],
    isUsed: [true],
  });

  /** Còn tự sinh slug từ tên cho tới khi người dùng sửa tay. */
  private slugAuto = true;

  ngOnInit(): void {
    this.load();
    this.form.controls.name.valueChanges.subscribe(() => this.syncAutoSlug());
    this.form.controls.parentId.valueChanges.subscribe(() => this.syncAutoSlug());
  }

  get currentKind(): ProductKind {
    return KINDS[this.selectedKindIndex()] ?? 'bike';
  }

  load(): void {
    this.loading.set(true);
    const fetch = (kind: ProductKind) =>
      this.service.getAll({ kind, tree: true }).pipe(
        catchError((error) => {
          this.notify.error(apiErrorMessage(error, `Không tải được danh mục ${PRODUCT_KIND_LABELS[kind]}`));
          return of([] as ProductCategory[]);
        }),
      );
    forkJoin({ bike: fetch('bike'), machine: fetch('machine'), appliance: fetch('appliance') }).subscribe({
      next: (res) => {
        this.trees.set(res);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  // ---- Cây ----

  toggle(id: string): void {
    this.collapsed.update((set) => {
      const next = new Set(set);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  isCollapsed(id: string): boolean {
    return this.collapsed().has(id);
  }

  expandAll(): void {
    this.collapsed.set(new Set());
  }

  collapseAll(kind: ProductKind): void {
    const ids = new Set(this.collapsed());
    walk(this.trees()[kind], (n) => {
      if (n.children?.length) ids.add(n.id);
    });
    this.collapsed.set(ids);
  }

  levelLabel(depth: number): string {
    return `Cấp ${depth + 1}`;
  }

  // ---- Form ----

  open(kind: ProductKind, record?: ProductCategory, parent?: ProductCategory): void {
    this.editing.set(record ?? null);
    this.dialogKind.set(kind);
    this.metadata.set({ ...(record?.metadata ?? {}) });
    this.slugAuto = !record;
    const parentId = record ? record.parentId : (parent?.id ?? null);
    this.form.reset({
      name: record?.name ?? '',
      slug: record?.slug ?? '',
      parentId,
      description: record?.description ?? '',
      imageUrl: record?.imageUrl ?? '',
      sortOrder: record?.sortOrder ?? this.nextSortOrder(kind, parentId),
      isUsed: record ? record.isUsed !== false : true,
    });
    this.formRef = this.dialog.open(this.formDialog, {
      width: '900px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
    this.formRef.afterClosed().subscribe(() => this.editing.set(null));
  }

  close(): void {
    this.formRef?.close();
  }

  /** Người dùng gõ tay vào slug: ngừng tự sinh. Xóa trống thì bật lại tự sinh. */
  onSlugInput(): void {
    this.slugAuto = !this.form.controls.slug.value;
    if (this.slugAuto) this.syncAutoSlug();
  }

  regenerateSlug(): void {
    this.slugAuto = true;
    this.syncAutoSlug();
  }

  /** Slug con có tiền tố slug cha (khớp quy ước seed) vì (Kind, Slug) là duy nhất. */
  composeSlug(name: string, parentId: string | null): string {
    const base = slugify(name);
    if (!base) return '';
    const parent = parentId ? this.trees()[this.dialogKind()].find((r) => r.id === parentId) : null;
    return parent?.slug ? `${parent.slug}-${base}` : base;
  }

  private syncAutoSlug(): void {
    if (!this.slugAuto) return;
    const { name, parentId } = this.form.getRawValue();
    this.form.controls.slug.setValue(this.composeSlug(name ?? '', parentId), { emitEvent: false });
  }

  private nextSortOrder(kind: ProductKind, parentId: string | null): number {
    const siblings = parentId
      ? (this.trees()[kind].find((r) => r.id === parentId)?.children ?? [])
      : this.trees()[kind];
    return siblings.reduce((max, s) => Math.max(max, s.sortOrder ?? 0), 0) + 10;
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const raw = this.form.getRawValue();
    const current = this.editing();
    const dto: UpdateProductCategory = {
      id: current?.id ?? '',
      kind: current?.kind ?? this.dialogKind(),
      name: (raw.name ?? '').trim(),
      slug: (raw.slug ?? '').trim(),
      parentId: raw.parentId || null,
      description: (raw.description ?? '').trim(),
      imageUrl: (raw.imageUrl ?? '').trim(),
      sortOrder: Number(raw.sortOrder ?? 0),
      metadata: { ...this.metadata() },
      isUsed: raw.isUsed !== false,
    };
    this.saving.set(true);
    const request = current ? this.service.update(current.id, dto) : this.service.create(dto);
    request.subscribe({
      next: () => {
        this.saving.set(false);
        this.notify.success(current ? 'Đã cập nhật danh mục' : 'Đã thêm danh mục');
        this.close();
        this.load();
      },
      // Giữ hộp thoại mở và hiện nguyên văn thông báo của API (trùng slug, quá 3 cấp...)
      error: (error) => {
        this.saving.set(false);
        this.notify.error(apiErrorMessage(error, 'Lưu danh mục thất bại'));
      },
    });
  }

  toggleActive(node: ProductCategory): void {
    const next = node.isUsed === false;
    const dto: UpdateProductCategory = {
      id: node.id,
      kind: node.kind,
      name: node.name,
      slug: node.slug,
      parentId: node.parentId,
      description: node.description ?? '',
      imageUrl: node.imageUrl ?? '',
      sortOrder: node.sortOrder ?? 0,
      metadata: { ...(node.metadata ?? {}) },
      isUsed: next,
    };
    this.service.update(node.id, dto).subscribe({
      next: () => {
        this.notify.success(next ? 'Đã kích hoạt lại danh mục' : 'Đã ngừng dùng danh mục');
        this.load();
      },
      error: (error) => {
        this.notify.error(apiErrorMessage(error, 'Thao tác thất bại'));
        this.load(); // trả công tắc về đúng trạng thái thật
      },
    });
  }

  remove(node: ProductCategory): void {
    this.confirm
      .delete(`Bạn có chắc muốn xóa danh mục "${node.name}" không?`)
      .subscribe((confirmed) => {
        if (!confirmed) return;
        this.service.remove(node.id).subscribe({
          next: () => {
            this.notify.success('Đã xóa danh mục');
            this.load();
          },
          error: (error) => this.notify.error(apiErrorMessage(error, 'Xóa danh mục thất bại')),
        });
      });
  }

  metadataCount(m: Record<string, string> | null | undefined): number {
    return m ? Object.keys(m).length : 0;
  }
}

function flatten(
  nodes: ProductCategory[],
  collapsed: ReadonlySet<string>,
  depth = 0,
  parent: ProductCategory | null = null,
): CategoryRow[] {
  const result: CategoryRow[] = [];
  for (const node of nodes) {
    const children = node.children ?? [];
    result.push({ node, depth, childCount: children.length, parent });
    if (children.length && !collapsed.has(node.id)) {
      result.push(...flatten(children, collapsed, depth + 1, node));
    }
  }
  return result;
}

function walk(nodes: ProductCategory[], fn: (n: ProductCategory) => void): void {
  for (const n of nodes) {
    fn(n);
    walk(n.children ?? [], fn);
  }
}

function countAll(nodes: ProductCategory[]): number {
  let count = 0;
  walk(nodes, () => count++);
  return count;
}

function descendantIds(node: ProductCategory): string[] {
  const ids: string[] = [];
  walk(node.children ?? [], (n) => ids.push(n.id));
  return ids;
}
