import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { Observable, catchError, finalize, forkJoin, map, of } from 'rxjs';
import { CategoryPageContentService } from '../../services/category-page-content.service';
import { SiteSettingsService } from '../../services/site-settings.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import {
  DEFAULT_CATEGORY_PAGE_CONTENT,
  isSupportedCategoryPageContent,
} from '../../shared/models/category-page-content';
import { DEFAULT_SITE_SETTINGS, isSupportedSiteSettings } from '../../shared/models/site-settings';
import {
  PRODUCT_KIND_LABELS,
  PRODUCT_KIND_ROUTES,
  ProductKind,
} from '../../shared/models/product-category';
import { NotifyService } from '../../shared/services/notify.service';
import { apiErrorMessage } from '../shared/api-error';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import {
  createCategoryPageForm,
  createSiteSettingsForm,
  readCategoryPageForm,
  readSiteSettingsForm,
} from './category-page-content-form';

type FieldDef = readonly [key: string, label: string, multiline?: boolean];

interface FieldGroup {
  key: string;
  title: string;
  fields: readonly FieldDef[];
}

interface SectionDef {
  key: string;
  label: string;
}

const KINDS: ProductKind[] = ['bike', 'machine', 'appliance'];
const SITE_TAB_LABEL = 'Thông tin chung';

interface KindState {
  loading: boolean;
  saving: boolean;
  loadFailed: boolean;
  updatedAt: string | null;
  sectionIndex: number;
}

@Component({
  selector: 'app-category-pages-admin-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatTabsModule,
    AdminPageHeaderComponent,
  ],
  templateUrl: './category-pages-admin-page.component.html',
  styles: [
    `
      .tab-label {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .tab-dot {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 999px;
        background: #dc2626;
      }
      .tab-dot--amber {
        background: #d97706;
      }
      .admin-subcard {
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        background: #f8fafc;
        padding: 14px;
      }
      .admin-subcard--nested {
        background: #fff;
      }
      .admin-subcard__title {
        margin: 0;
        font-size: 13px;
        font-weight: 700;
        color: #334155;
      }
      .admin-compact-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .admin-compact-row {
        display: grid;
        grid-template-columns: 88px 1fr 1fr;
        align-items: center;
        gap: 10px;
      }
      .admin-compact-row__label {
        font-size: 12px;
        font-weight: 600;
        color: #64748b;
      }
      @media (max-width: 639px) {
        .admin-compact-row {
          grid-template-columns: 1fr;
        }
      }
      .admin-save-bar {
        position: sticky;
        bottom: 16px;
        z-index: 10;
        margin-top: 16px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(4px);
        padding: 14px 16px;
        box-shadow: 0 -4px 16px rgba(15, 23, 42, 0.08);
      }
      .admin-save-bar__dirty {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-right: auto;
        font-size: 13px;
        font-weight: 600;
        color: #b45309;
      }
    `,
  ],
})
export class CategoryPagesAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(CategoryPageContentService);
  private readonly notify = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly siteService = inject(SiteSettingsService);

  readonly kinds = KINDS;
  readonly kindLabels = PRODUCT_KIND_LABELS;
  readonly kindRoutes = PRODUCT_KIND_ROUTES;

  /** Tab ngoài đang mở: 0 = Thông tin chung, 1..3 = ngành hàng. Lưu chỉ ghi tài liệu đang mở. */
  readonly selectedTabIndex = signal(0);
  readonly isSiteTab = computed(() => this.selectedTabIndex() === 0);
  readonly siteTabLabel = SITE_TAB_LABEL;

  siteForm = createSiteSettingsForm(this.fb, DEFAULT_SITE_SETTINGS);
  readonly siteState = signal<KindState>(newState());

  readonly siteFields: readonly FieldGroup[] = [
    {
      key: 'brand',
      title: 'Thương hiệu',
      fields: [
        ['name', 'Tên thương hiệu'],
        ['tagline', 'Khẩu hiệu dưới logo'],
      ],
    },
    {
      key: 'contact',
      title: 'Liên hệ',
      fields: [
        ['phoneLabel', 'Nhãn nút gọi (ví dụ Hotline)'],
        ['phone', 'Số điện thoại (dùng cho liên kết gọi)'],
        ['phoneDisplay', 'Số điện thoại hiển thị'],
        ['email', 'Email'],
        ['address', 'Địa chỉ', true],
        ['workingHours', 'Giờ làm việc'],
        ['zaloUrl', 'Liên kết Zalo (không bắt buộc)'],
        ['facebookUrl', 'Liên kết Facebook (không bắt buộc)'],
      ],
    },
    {
      key: 'footer',
      title: 'Chân trang',
      fields: [
        ['description', 'Giới thiệu ngắn', true],
        ['navHeading', 'Tiêu đề cột điều hướng'],
        ['contactHeading', 'Tiêu đề cột liên hệ'],
        ['copyright', 'Dòng bản quyền'],
      ],
    },
  ];
  /** Trạng thái riêng từng kind (signal object thay mới mỗi lần đổi để template cập nhật). */
  readonly states = signal<Record<ProductKind, KindState>>({
    bike: newState(),
    machine: newState(),
    appliance: newState(),
  });

  /** Mỗi kind một form độc lập: chuyển tab không làm mất thay đổi chưa lưu ở kind khác. */
  forms: Record<ProductKind, FormGroup> = {
    bike: createCategoryPageForm(this.fb, DEFAULT_CATEGORY_PAGE_CONTENT.bike),
    machine: createCategoryPageForm(this.fb, DEFAULT_CATEGORY_PAGE_CONTENT.machine),
    appliance: createCategoryPageForm(this.fb, DEFAULT_CATEGORY_PAGE_CONTENT.appliance),
  };

  /** Chỉ các mục còn được chỉnh sửa trong giao diện (khớp thứ tự tab trong template). */
  readonly sections: SectionDef[] = [
    { key: 'hero', label: 'Hero' },
    { key: 'intro', label: 'Giới thiệu' },
    { key: 'highlights', label: 'Điểm mạnh' },
    { key: 'catalog', label: 'Danh sách SP' },
    { key: 'faq', label: 'FAQ' },
    { key: 'cta', label: 'CTA' },
  ];

  readonly catalogFields: FieldDef[] = [
    ['heading', 'Tiêu đề'],
    ['description', 'Mô tả', true],
    ['allCategoriesLabel', 'Nhãn "Tất cả danh mục"'],
    ['allBrandsLabel', 'Nhãn "Tất cả thương hiệu"'],
    ['searchPlaceholder', 'Gợi ý ô tìm kiếm'],
    ['sortLabel', 'Nhãn sắp xếp'],
    ['sortDefaultLabel', 'Sắp xếp: mặc định'],
    ['sortPriceAscLabel', 'Sắp xếp: giá tăng dần'],
    ['sortPriceDescLabel', 'Sắp xếp: giá giảm dần'],
    ['sortNameAscLabel', 'Sắp xếp: tên A-Z'],
    ['sortNewestLabel', 'Sắp xếp: mới nhất'],
    ['priceFromLabel', 'Nhãn giá từ'],
    ['priceToLabel', 'Nhãn giá đến'],
    ['clearFiltersLabel', 'Nút xóa bộ lọc'],
    ['resultSuffixLabel', 'Hậu tố số kết quả'],
    ['detailButtonLabel', 'Nút xem chi tiết'],
    ['emptyTitle', 'Tiêu đề khi không có SP'],
    ['emptyDescription', 'Mô tả khi không có SP', true],
  ];

  readonly ctaFields: FieldDef[] = [
    ['heading', 'Tiêu đề'],
    ['highlightedHeading', 'Tiêu đề nhấn mạnh'],
    ['description', 'Mô tả', true],
    ['phone', 'Số điện thoại'],
    ['phoneButtonLabel', 'Nhãn nút gọi'],
    ['email', 'Email'],
    ['emailButtonLabel', 'Nhãn nút email'],
    ['note', 'Ghi chú', true],
  ];

  /** Ngành hàng của tab đang mở (ở tab Thông tin chung trả 'bike', chỉ dùng cho nút xem trang). */
  get currentKind(): ProductKind {
    return KINDS[this.selectedTabIndex() - 1] ?? 'bike';
  }

  get busy(): boolean {
    const state = this.isSiteTab() ? this.siteState() : this.state(this.currentKind);
    return state.loading || state.saving;
  }

  ngOnInit(): void {
    this.loadSite();
    this.loadAll();
  }

  /** Nạp thông tin chung; lỗi thì giữ form mặc định và báo riêng. */
  loadSite(): void {
    this.siteState.update((s) => ({ ...s, loading: true, loadFailed: false }));
    this.siteService
      .reload()
      .pipe(catchError(() => of(null)))
      .subscribe((response) => {
        if (!response || !isSupportedSiteSettings(response.content)) {
          this.siteState.update((s) => ({ ...s, loading: false, loadFailed: true }));
          this.notify.error(
            response ? 'Phiên bản thông tin chung chưa được hỗ trợ' : 'Không tải được thông tin chung',
          );
          return;
        }
        this.siteForm = createSiteSettingsForm(this.fb, response.content);
        this.siteForm.markAsPristine();
        this.siteState.update((s) => ({ ...s, loading: false, updatedAt: response.updatedAt || null }));
      });
  }

  saveSite(): void {
    if (this.siteState().saving) return;
    if (this.siteForm.invalid) {
      this.siteForm.markAllAsTouched();
      return;
    }
    const content = readSiteSettingsForm(this.siteForm);
    this.siteState.update((s) => ({ ...s, saving: true }));
    this.siteService
      .update(content)
      .pipe(finalize(() => this.siteState.update((s) => ({ ...s, saving: false }))))
      .subscribe({
        next: (response) => {
          this.siteForm = createSiteSettingsForm(this.fb, response.content);
          this.siteForm.markAsPristine();
          this.siteState.update((s) => ({ ...s, updatedAt: response.updatedAt }));
          this.notify.success('Đã cập nhật thông tin chung');
        },
        error: (error) => this.notify.error(apiErrorMessage(error, 'Lưu thông tin chung thất bại')),
      });
  }

  restoreSiteDefaults(): void {
    const apply = () => {
      this.siteForm = createSiteSettingsForm(this.fb, DEFAULT_SITE_SETTINGS);
      this.siteForm.markAsDirty();
      this.notify.success('Đã nạp nội dung mặc định. Nhấn “Lưu thay đổi” để xuất bản.');
    };
    if (!this.siteForm.dirty) {
      apply();
      return;
    }
    this.confirm
      .open({
        title: 'Khôi phục nội dung mặc định?',
        message:
          'Các thay đổi chưa lưu của Thông tin chung sẽ bị thay thế. ' +
          'Nội dung chỉ được xuất bản sau khi bạn nhấn Lưu thay đổi.',
        okText: 'Khôi phục',
        cancelText: 'Hủy',
      })
      .subscribe((confirmed) => {
        if (confirmed) apply();
      });
  }

  siteGroupInvalid(key: string): boolean {
    const control = this.siteForm.get(key);
    return !!control && control.invalid && control.touched;
  }

  siteInvalid(): boolean {
    return this.siteForm.invalid && this.siteForm.touched;
  }

  siteDirty(): boolean {
    return this.siteForm.dirty;
  }

  state(kind: ProductKind): KindState {
    return this.states()[kind];
  }

  private patchState(kind: ProductKind, patch: Partial<KindState>): void {
    this.states.update((all) => ({ ...all, [kind]: { ...all[kind], ...patch } }));
  }

  /** Nạp đủ 3 kind song song; kind nào lỗi thì giữ nội dung mặc định và báo riêng. */
  loadAll(): void {
    for (const kind of KINDS) this.patchState(kind, { loading: true, loadFailed: false });
    forkJoin(
      KINDS.map((kind) =>
        this.service.get(kind).pipe(
          map((response) => ({ kind, response })),
          catchError(() => of({ kind, response: null })),
        ),
      ),
    ).subscribe((results) => {
      for (const { kind, response } of results) {
        if (!response) {
          this.patchState(kind, { loading: false, loadFailed: true });
          this.notify.error(`Không tải được nội dung trang ${PRODUCT_KIND_LABELS[kind]}`);
          continue;
        }
        if (!isSupportedCategoryPageContent(kind, response.content)) {
          this.patchState(kind, { loading: false, loadFailed: true });
          this.notify.error(`Phiên bản nội dung trang ${PRODUCT_KIND_LABELS[kind]} chưa được hỗ trợ`);
          continue;
        }
        this.forms[kind] = createCategoryPageForm(this.fb, response.content);
        this.forms[kind].markAsPristine();
        this.patchState(kind, {
          loading: false,
          updatedAt: response.updatedAt || null,
          sectionIndex: 0,
        });
      }
    });
  }

  form(kind: ProductKind): FormGroup {
    return this.forms[kind];
  }

  /** Chấm đỏ trên tab section: chỉ hiện sau khi người dùng đã chạm vào hoặc đã bấm Lưu. */
  sectionInvalid(kind: ProductKind, key: string): boolean {
    const control = this.forms[kind].get(key);
    return !!control && control.invalid && control.touched;
  }

  kindInvalid(kind: ProductKind): boolean {
    return this.forms[kind].invalid && this.forms[kind].touched;
  }

  kindDirty(kind: ProductKind): boolean {
    return this.forms[kind].dirty;
  }

  setSectionIndex(kind: ProductKind, index: number): void {
    this.patchState(kind, { sectionIndex: index });
  }

  /** Lưu tài liệu của tab đang mở (Thông tin chung hoặc một ngành hàng), không đụng tài liệu khác. */
  save(): void {
    if (this.isSiteTab()) {
      this.saveSite();
      return;
    }
    const kind = this.currentKind;
    const form = this.forms[kind];
    if (this.state(kind).saving) return;
    if (form.invalid) {
      form.markAllAsTouched();
      const invalid = this.sections.findIndex((s) => form.get(s.key)?.invalid);
      if (invalid !== -1) this.patchState(kind, { sectionIndex: invalid });
      return;
    }
    const content = readCategoryPageForm(form);
    this.patchState(kind, { saving: true });
    this.service
      .update(kind, content)
      .pipe(finalize(() => this.patchState(kind, { saving: false })))
      .subscribe({
        next: (response) => {
          this.forms[kind] = createCategoryPageForm(this.fb, response.content);
          this.forms[kind].markAsPristine();
          this.patchState(kind, { updatedAt: response.updatedAt });
          this.notify.success(`Đã cập nhật nội dung trang ${PRODUCT_KIND_LABELS[kind]}`);
        },
        error: (error) =>
          this.notify.error(apiErrorMessage(error, `Lưu nội dung trang ${PRODUCT_KIND_LABELS[kind]} thất bại`)),
      });
  }

  restoreDefaults(): void {
    if (this.isSiteTab()) {
      this.restoreSiteDefaults();
      return;
    }
    const kind = this.currentKind;
    const apply = () => {
      this.forms[kind] = createCategoryPageForm(this.fb, DEFAULT_CATEGORY_PAGE_CONTENT[kind]);
      this.forms[kind].markAsDirty();
      this.patchState(kind, { sectionIndex: 0 });
      this.notify.success('Đã nạp nội dung mặc định. Nhấn “Lưu thay đổi” để xuất bản.');
    };
    if (!this.forms[kind].dirty) {
      apply();
      return;
    }
    this.confirm
      .open({
        title: 'Khôi phục nội dung mặc định?',
        message:
          `Các thay đổi chưa lưu của trang ${PRODUCT_KIND_LABELS[kind]} sẽ bị thay thế. ` +
          'Nội dung chỉ được xuất bản sau khi bạn nhấn Lưu thay đổi.',
        okText: 'Khôi phục',
        cancelText: 'Hủy',
      })
      .subscribe((confirmed) => {
        if (confirmed) apply();
      });
  }

  setImage(kind: ProductKind, path: string, value: string): void {
    const control = this.forms[kind].get(path);
    control?.setValue(value);
    control?.markAsDirty();
    this.forms[kind].markAsDirty();
  }

  /** Bất kỳ form nào (thông tin chung hoặc 3 ngành hàng) còn thay đổi chưa lưu. */
  hasUnsavedChanges(): boolean {
    return (
      (this.siteForm.dirty && !this.siteState().saving) ||
      KINDS.some((kind) => this.forms[kind].dirty && !this.state(kind).saving)
    );
  }

  confirmLeave(): Observable<boolean> {
    const dirty = [
      ...(this.siteForm.dirty ? [SITE_TAB_LABEL] : []),
      ...KINDS.filter((kind) => this.forms[kind].dirty).map((kind) => PRODUCT_KIND_LABELS[kind]),
    ];
    return this.confirm.open({
      title: 'Rời trang khi chưa lưu?',
      message: `Nội dung chưa lưu của: ${dirty.join(', ')} sẽ bị mất.`,
      okText: 'Rời trang',
      cancelText: 'Ở lại',
      danger: true,
    });
  }

  group(control: AbstractControl | null): FormGroup {
    return control as FormGroup;
  }

  array(form: FormGroup, path: string): FormArray {
    return form.get(path) as FormArray;
  }
}

function newState(): KindState {
  return { loading: false, saving: false, loadFailed: false, updatedAt: null, sectionIndex: 0 };
}
