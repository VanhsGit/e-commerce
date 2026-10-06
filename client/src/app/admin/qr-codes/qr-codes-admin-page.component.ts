import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Observable, catchError, map, of } from 'rxjs';
import { AgriculturalMachineService } from '../../services/agricultural-machine.service';
import { ElectricBikeService } from '../../services/electric-bike.service';
import { ElectricalApplianceService } from '../../services/electrical-appliance.service';
import { ProductCategoryService } from '../../services/product-category.service';
import { ProductCategory, ProductKind } from '../../shared/models/product-category';
import { QrCodeService } from '../../shared/qr/qr-code.service';
import { qrPdfFilename } from '../../shared/qr/qr-pdf-layout';
import { QrPdfItem, QrPdfService } from '../../shared/qr/qr-pdf.service';
import { NotifyService } from '../../shared/services/notify.service';
import { CategoryOption, flattenCategoryTree } from '../shared/category-options';
import { AdminEmptyStateComponent } from '../shared/empty-state/admin-empty-state.component';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';

/** Phần tối thiểu của sản phẩm mà trang này cần (chung cho cả 3 loại). */
export interface QrProductRow {
  id: string;
  name: string;
  model: string;
  brandName: string;
  categoryPath: string | null;
  isUsed?: boolean;
  kind: ProductKind;
}

export interface QrLabel {
  row: QrProductRow;
  dataUrl: string;
}

export const QR_KIND_OPTIONS: { value: ProductKind; label: string }[] = [
  { value: 'bike', label: 'Xe điện' },
  { value: 'machine', label: 'Máy nông nghiệp' },
  { value: 'appliance', label: 'Đồ điện dân dụng' },
];

/**
 * Chọn sản phẩm -> sinh QR chứa đúng ID sản phẩm -> in tem / tải PNG.
 *
 * Hành vi chọn dòng (selection):
 *  - Danh sách đã chọn lưu theo ID (kèm dữ liệu dòng để dựng tem), KHÔNG phụ thuộc trang hay bộ lọc:
 *    sang trang khác, đổi bộ lọc, tìm kiếm hoặc đổi loại sản phẩm đều giữ nguyên các dòng đã chọn.
 *  - Ô chọn ở tiêu đề chỉ tác động lên các dòng ĐANG HIỂN THỊ ở trang hiện tại (đúng ý "chọn tất cả trang này").
 *  - Bộ đếm "Đã chọn N" tính trên toàn bộ lựa chọn, kể cả dòng đang bị lọc ẩn; "Bỏ chọn tất cả" xóa hết.
 *  - Sau khi bấm "Tạo QR", tem được chụp lại theo lựa chọn lúc đó; chọn thêm/bớt sau đó cần bấm "Tạo QR" lại.
 */
@Component({
  selector: 'app-qr-codes-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NzTableModule,
    AdminEmptyStateComponent,
    AdminPageHeaderComponent,
  ],
  templateUrl: './qr-codes-admin-page.component.html',
  styleUrl: './qr-codes-admin-page.component.scss',
  // Style in cần áp dụng cho bản sao của tem được gắn vào <body> lúc in.
  encapsulation: ViewEncapsulation.None,
})
export class QrCodesAdminPageComponent implements OnInit, OnDestroy {
  private readonly bikes = inject(ElectricBikeService);
  private readonly machines = inject(AgriculturalMachineService);
  private readonly appliances = inject(ElectricalApplianceService);
  private readonly categories = inject(ProductCategoryService);
  private readonly qr = inject(QrCodeService);
  private readonly qrPdf = inject(QrPdfService);
  private readonly msg = inject(NotifyService);

  private readonly sheet = viewChild<ElementRef<HTMLElement>>('sheet');

  readonly kindOptions = QR_KIND_OPTIONS;
  readonly kind = signal<ProductKind>('bike');
  readonly rows = signal<QrProductRow[]>([]);
  readonly loading = signal(false);
  readonly categoryTree = signal<ProductCategory[]>([]);
  readonly categoryOptions = computed<CategoryOption[]>(() => flattenCategoryTree(this.categoryTree()));

  readonly searchDraft = signal('');
  readonly categoryFilter = signal<string | null>(null);
  readonly statusFilter = signal<'active' | 'inactive' | null>(null);

  /** Các dòng đang hiển thị ở trang hiện tại của nz-table. */
  readonly pageRows = signal<readonly QrProductRow[]>([]);
  private readonly selection = signal<ReadonlyMap<string, QrProductRow>>(new Map());
  readonly selectedRows = computed(() => Array.from(this.selection().values()));
  readonly selectedCount = computed(() => this.selection().size);
  readonly allPageChecked = computed(
    () => this.pageRows().length > 0 && this.pageRows().every((row) => this.selection().has(row.id)),
  );
  readonly pageIndeterminate = computed(
    () => !this.allPageChecked() && this.pageRows().some((row) => this.selection().has(row.id)),
  );

  readonly labels = signal<QrLabel[]>([]);
  readonly generating = signal(false);
  readonly exporting = signal(false);

  private searchDebounce?: ReturnType<typeof setTimeout>;
  private requestSeq = 0;
  private printRoot?: HTMLElement;
  private readonly onAfterPrint = () => this.cleanupPrint();

  ngOnInit(): void {
    this.reload();
  }

  ngOnDestroy(): void {
    clearTimeout(this.searchDebounce);
    this.cleanupPrint();
  }

  // ---- Tải dữ liệu ----------------------------------------------------------------------

  onKindChange(kind: ProductKind): void {
    this.kind.set(kind);
    this.categoryFilter.set(null);
    this.reload();
  }

  onSearchChange(value: string): void {
    this.searchDraft.set(value);
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => this.reload(false), 300);
  }

  applyFilters(): void {
    this.reload(false);
  }

  reload(loadCategories = true): void {
    const kind = this.kind();
    const seq = ++this.requestSeq;
    this.loading.set(true);
    const params = {
      search: this.searchDraft().trim(),
      categoryId: this.categoryFilter(),
      isUsed:
        this.statusFilter() === 'active' ? true : this.statusFilter() === 'inactive' ? false : null,
    };
    this.fetch(kind, params).subscribe({
      next: (rows) => {
        if (seq !== this.requestSeq) return; // bỏ kết quả của request cũ
        this.rows.set(rows);
        this.loading.set(false);
      },
      error: () => {
        if (seq !== this.requestSeq) return;
        this.rows.set([]);
        this.loading.set(false);
        this.msg.error('Không tải được danh sách sản phẩm');
      },
    });
    if (loadCategories) {
      this.categories
        .getAll({ kind, tree: true, isUsed: true })
        .pipe(catchError(() => of([] as ProductCategory[])))
        .subscribe((tree) => {
          if (kind === this.kind()) this.categoryTree.set(tree);
        });
    }
  }

  private fetch(
    kind: ProductKind,
    params: { search: string; categoryId: string | null; isUsed: boolean | null },
  ): Observable<QrProductRow[]> {
    const source: Observable<
      { id: string; name: string; model: string; brandName: string; categoryPath: string | null; isUsed?: boolean }[]
    > =
      kind === 'bike'
        ? this.bikes.getAll(params)
        : kind === 'machine'
          ? this.machines.getAll(params)
          : this.appliances.getAll(params);
    return source.pipe(
      map((list) =>
        list.map((p) => ({
          id: p.id,
          name: p.name,
          model: p.model,
          brandName: p.brandName,
          categoryPath: p.categoryPath,
          isUsed: p.isUsed,
          kind,
        })),
      ),
    );
  }

  // ---- Chọn dòng ------------------------------------------------------------------------

  isSelected(row: QrProductRow): boolean {
    return this.selection().has(row.id);
  }

  toggleRow(row: QrProductRow, checked: boolean): void {
    this.selection.update((current) => {
      const next = new Map(current);
      if (checked) next.set(row.id, row);
      else next.delete(row.id);
      return next;
    });
  }

  /** Ô chọn ở tiêu đề: chỉ chọn / bỏ chọn các dòng của trang đang hiển thị. */
  togglePage(checked: boolean): void {
    this.selection.update((current) => {
      const next = new Map(current);
      for (const row of this.pageRows()) {
        if (checked) next.set(row.id, row);
        else next.delete(row.id);
      }
      return next;
    });
  }

  clearSelection(): void {
    this.selection.set(new Map());
  }

  onPageData(rows: readonly QrProductRow[]): void {
    this.pageRows.set(rows);
  }

  kindLabel(kind: ProductKind): string {
    return QR_KIND_OPTIONS.find((o) => o.value === kind)?.label ?? kind;
  }

  brandLine(row: QrProductRow): string {
    return [row.brandName, row.model].filter(Boolean).join(' · ') || '—';
  }

  // ---- Sinh QR / in / tải ---------------------------------------------------------------

  async generate(): Promise<void> {
    const selected = this.selectedRows();
    if (selected.length === 0 || this.generating()) return;
    this.generating.set(true);
    try {
      const labels = await Promise.all(
        selected.map(async (row) => ({
          row,
          // Payload là đúng ID sản phẩm, không thêm gì khác.
          dataUrl: await this.qr.toDataUrl(this.qr.productPayload(row.id)),
        })),
      );
      this.labels.set(labels);
      this.msg.success(`Đã tạo ${labels.length} mã QR`);
    } catch {
      this.msg.error('Không tạo được mã QR');
    } finally {
      this.generating.set(false);
    }
  }

  /**
   * Xuất các sản phẩm đã chọn thành một file PDF tem QR, sinh ngay ở trình duyệt.
   * Không phụ thuộc nút "Tạo QR": lấy trực tiếp lựa chọn hiện tại.
   */
  async exportPdf(): Promise<void> {
    const selected = this.selectedRows();
    if (selected.length === 0 || this.exporting()) return;
    this.exporting.set(true);
    try {
      const kindLabel = this.kindLabel(this.kind());
      await this.qrPdf.export({
        items: selected.map((row): QrPdfItem => ({
          payload: this.qr.productPayload(row.id),
          title: row.name,
          subtitle: this.brandLine(row),
        })),
        heading: `Mã QR sản phẩm · ${kindLabel} · ${selected.length} tem`,
        filename: qrPdfFilename(kindLabel, new Date()),
      });
      this.msg.success(`Đã xuất PDF ${selected.length} tem QR`);
    } catch {
      this.msg.error('Không xuất được file PDF');
    } finally {
      this.exporting.set(false);
    }
  }

  downloadPng(label: QrLabel): void {
    const safeId = label.row.id.replace(/[^A-Za-z0-9_-]+/g, '_');
    this.qr.download(label.dataUrl, `qr-${safeId}.png`);
  }

  /**
   * In riêng khu vực tem: sao chép tem vào một node gắn trực tiếp dưới <body>,
   * rồi @media print ẩn mọi thứ khác (xem scss). Node được gỡ khi in xong (`afterprint`).
   */
  print(): void {
    const source = this.sheet()?.nativeElement;
    if (!source || this.labels().length === 0) return;
    this.cleanupPrint();
    const root = document.createElement('div');
    root.className = 'qr-print-root';
    root.appendChild(source.cloneNode(true));
    document.body.appendChild(root);
    document.body.classList.add('qr-printing');
    this.printRoot = root;
    window.addEventListener('afterprint', this.onAfterPrint, { once: true });
    window.print();
  }

  private cleanupPrint(): void {
    window.removeEventListener('afterprint', this.onAfterPrint);
    this.printRoot?.remove();
    this.printRoot = undefined;
    document.body.classList.remove('qr-printing');
  }
}
