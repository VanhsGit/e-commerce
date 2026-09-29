import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
    AdminPageHeaderComponent,
    RepresentativeImagePickerComponent,
  ],
  templateUrl: './home-content-admin-page.component.html',
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
      },
      error: () => {
        this.loadFailed.set(true);
        this.notify.error('Không tải được nội dung trang chủ');
      },
    });
  }

  save(): void {
    if (this.form.invalid || this.saving()) {
      this.form.markAllAsTouched();
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
