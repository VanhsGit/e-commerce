import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { Observable, finalize } from 'rxjs';
import {
  DEFAULT_HOME_PAGE_CONTENT,
  HomePageContent,
  isSupportedHomePageContent,
} from '../../home/home-content.model';
import { HomeContentService } from '../../home/home-content.service';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import { RepresentativeImagePickerComponent } from '../shared/representative-image-picker/representative-image-picker.component';
import { createHomeContentForm, readHomeContentForm } from './home-content-form';

@Component({
  selector: 'app-home-content-admin-page',
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
    RepresentativeImagePickerComponent,
  ],
  templateUrl: './home-content-admin-page.component.html',
  styles: [
    `
      /* Tab có lỗi: chấm đỏ nhỏ cạnh tên tab */
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

      /* Khối phụ (thẻ, ảnh, chỉ số...) trong từng tab - gọn hơn admin-card */
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

      /* Danh sách mục lặp lại dạng hàng gọn thay vì khối lớn */
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

      /* Thanh lưu cuối form: luôn hiện, có chỉ báo "chưa lưu" */
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
export class HomeContentAdminPageComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(HomeContentService);
  private readonly notify = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);

  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly loadFailed = signal(false);
  readonly updatedAt = signal<string | null>(null);
  /** Tab đang chọn trong mat-tab-group (0 = Hero, cuối = CTA). */
  readonly selectedTabIndex = signal(0);
  readonly warrantyFields = [
    ['badge', 'Nhãn dịch vụ'], ['heading', 'Tiêu đề'], ['introduction', 'Giới thiệu'],
    ['warrantyPanelHeading', 'Tiêu đề tra cứu bảo hành'], ['warrantyPanelHelp', 'Mô tả tra cứu bảo hành'],
    ['serialLabel', 'Nhãn số serial'], ['serialHint', 'Gợi ý số serial'], ['phoneLabel', 'Nhãn số điện thoại'],
    ['searchButtonLabel', 'Nút tra cứu bảo hành'], ['productPanelHeading', 'Tiêu đề tra cứu sản phẩm'],
    ['productPanelHelp', 'Mô tả tra cứu sản phẩm'], ['productTypeLabel', 'Nhãn loại sản phẩm'],
    ['productCodeLabel', 'Nhãn mã sản phẩm'], ['productButtonLabel', 'Nút xem chi tiết'],
    ['catalogueButtonLabel', 'Nút danh mục'], ['tipLabel', 'Nhãn mẫu thử'],
    ['browseBikesLabel', 'Nút xem xe điện'], ['browseMachinesLabel', 'Nút xem máy nông nghiệp'],
  ] as const;
  readonly ctaFields = [
    ['heading', 'Tiêu đề'], ['highlightedHeading', 'Tiêu đề nhấn mạnh'], ['description', 'Mô tả'],
    ['phone', 'Số điện thoại'], ['phoneButtonLabel', 'Nhãn nút gọi'], ['email', 'Email'],
    ['emailButtonLabel', 'Nhãn nút email'], ['workingHoursLabel', 'Nhãn giờ làm việc'],
    ['workingHoursValue', 'Giờ làm việc'], ['addressLabel', 'Nhãn địa chỉ'], ['addressValue', 'Địa chỉ'],
    ['supportLabel', 'Nhãn hỗ trợ'], ['supportValue', 'Thông tin hỗ trợ'],
  ] as const;

  form = createHomeContentForm(this.fb, cloneDefault());

  get heroCards(): FormArray {
    return this.form.get('hero.cards') as FormArray;
  }

  get heroMetrics(): FormArray {
    return this.form.get('hero.metrics') as FormArray;
  }

  get industries(): FormArray {
    return this.form.get('industries') as FormArray;
  }

  get commitmentItems(): FormArray {
    return this.form.get('commitments.items') as FormArray;
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.loadFailed.set(false);
    this.service.get().pipe(finalize(() => this.loading.set(false))).subscribe({
      next: (response) => {
        if (!isSupportedHomePageContent(response.content)) {
          this.loadFailed.set(true);
          this.notify.error('Phiên bản nội dung trang chủ chưa được hỗ trợ');
          return;
        }
        this.form = createHomeContentForm(this.fb, response.content);
        this.form.markAsPristine();
        this.updatedAt.set(response.updatedAt || null);
        this.selectedTabIndex.set(0);
      },
      error: () => {
        this.loadFailed.set(true);
        this.notify.error('Không tải được nội dung trang chủ');
      },
    });
  }

  /** Dùng cho chấm đỏ trên nhãn tab: chỉ báo lỗi sau khi người dùng đã chạm vào (hoặc đã bấm Lưu). */
  tabInvalid(group: FormGroup): boolean {
    return group.invalid && group.touched;
  }

  private firstInvalidTabIndex(): number | null {
    const groups: FormGroup[] = [
      this.group(this.form.get('hero')!),
      ...this.industries.controls.map((c) => this.group(c)),
      this.group(this.form.get('commitments')!),
      this.group(this.form.get('warranty')!),
      this.group(this.form.get('cta')!),
    ];
    const index = groups.findIndex((g) => g.invalid);
    return index === -1 ? null : index;
  }

  save(): void {
    if (this.form.invalid || this.saving()) {
      this.form.markAllAsTouched();
      const invalidTab = this.firstInvalidTabIndex();
      if (invalidTab !== null) this.selectedTabIndex.set(invalidTab);
      return;
    }
    const content = readHomeContentForm(this.form);
    this.saving.set(true);
    this.service.update(content).pipe(finalize(() => this.saving.set(false))).subscribe({
      next: (response) => {
        this.form = createHomeContentForm(this.fb, response.content);
        this.form.markAsPristine();
        this.updatedAt.set(response.updatedAt);
        this.notify.success('Đã cập nhật nội dung trang chủ');
      },
      error: (error) => this.notify.error(error?.error?.message || 'Lưu nội dung trang chủ thất bại'),
    });
  }

  restoreDefaults(): void {
    const apply = () => {
      this.form = createHomeContentForm(this.fb, cloneDefault());
      this.form.markAsDirty();
      this.selectedTabIndex.set(0);
      this.notify.success('Đã nạp nội dung mặc định. Nhấn “Lưu thay đổi” để xuất bản.');
    };
    if (!this.form.dirty) {
      apply();
      return;
    }
    this.confirm.open({
      title: 'Khôi phục nội dung mặc định?',
      message: 'Các thay đổi chưa lưu hiện tại sẽ bị thay thế. Nội dung chỉ được xuất bản sau khi bạn nhấn Lưu thay đổi.',
      okText: 'Khôi phục',
      cancelText: 'Hủy',
    }).subscribe((confirmed) => {
      if (confirmed) apply();
    });
  }

  setImage(path: string, value: string): void {
    const control = this.form.get(path);
    control?.setValue(value);
    control?.markAsDirty();
    this.form.markAsDirty();
  }

  hasUnsavedChanges(): boolean {
    return this.form.dirty && !this.saving();
  }

  confirmLeave(): Observable<boolean> {
    return this.confirm.open({
      title: 'Rời trang khi chưa lưu?',
      message: 'Các thay đổi nội dung trang chủ chưa được lưu sẽ bị mất.',
      okText: 'Rời trang',
      cancelText: 'Ở lại',
      danger: true,
    });
  }

  group(control: AbstractControl): FormGroup {
    return control as FormGroup;
  }

  array(control: AbstractControl, path: string): FormArray {
    return control.get(path) as FormArray;
  }

  industryLabel(index: number): string {
    return ['Xe điện', 'Máy nông nghiệp', 'Điện gia dụng'][index] ?? `Ngành hàng ${index + 1}`;
  }
}

function cloneDefault(): HomePageContent {
  return JSON.parse(JSON.stringify(DEFAULT_HOME_PAGE_CONTENT));
}
