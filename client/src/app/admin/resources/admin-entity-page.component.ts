import { CommonModule, KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NzTableModule } from 'ng-zorro-antd/table';
import { environment } from '../../../environments/environment';
import { ConfirmService } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotifyService } from '../../shared/services/notify.service';
import { AdminFieldConfig, AdminResourceConfig } from '../shared/admin-resource.types';
import {
  AdminDetailListComponent,
  AdminDetailRowComponent,
} from '../shared/detail-list/admin-detail-list.component';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-admin-entity-page',
  standalone: true,
  imports: [
    AdminDetailListComponent,
    AdminDetailRowComponent,
    AdminPageHeaderComponent,
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTooltipModule,
    NzTableModule,
    MetadataEditorComponent,
  ],
  templateUrl: './admin-entity-page.component.html',
})
export class AdminEntityPageComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly messages = inject(NotifyService);
  private readonly confirm = inject(ConfirmService);
  private readonly dialog = inject(MatDialog);

  @ViewChild('formDialog') private formDialog!: TemplateRef<unknown>;
  @ViewChild('viewDialog') private viewDialog!: TemplateRef<unknown>;

  private formRef?: MatDialogRef<unknown>;
  private viewRef?: MatDialogRef<unknown>;

  @Input({ required: true }) config!: AdminResourceConfig;

  rows: Record<string, any>[] = [];
  form = new FormGroup<Record<string, FormControl<any>>>({});
  metadata: Record<string, string> = {};
  editing: Record<string, any> | null = null;
  viewing: Record<string, any> | null = null;
  loading = false;
  saving = false;

  ngOnInit(): void {
    for (const field of this.config.fields.filter(field => field.type !== 'metadata')) {
      const initial = field.type === 'json'
        ? JSON.stringify(field.defaultValue ?? {}, null, 2)
        : this.defaultValue(field);
      this.form.addControl(
        field.name,
        new FormControl(initial, field.required ? Validators.required : []),
      );
    }
    this.load();
  }

  get editableFields(): AdminFieldConfig[] {
    return this.config.fields.filter(field => field.type !== 'metadata');
  }

  get hasMetadata(): boolean {
    return this.config.fields.some(field => field.type === 'metadata');
  }

  get rowLabel(): string {
    return this.editing?.['name']
      || this.editing?.['shortName']
      || this.editing?.['email']
      || this.editing?.['buyerEmail']
      || '';
  }

  inputType(field: AdminFieldConfig): 'text' | 'email' {
    return field.name.toLowerCase().includes('email') ? 'email' : 'text';
  }

  load(): void {
    this.loading = true;
    this.http
      .get<Record<string, any>[]>(`${environment.apiUrl}${this.config.endpoint}?includeInactive=true`)
      .subscribe({
        next: rows => this.rows = rows,
        error: () => {
          this.loading = false;
          this.messages.error(`Không tải được ${this.config.title}`);
        },
        complete: () => this.loading = false,
      });
  }

  open(record?: Record<string, any>): void {
    this.editing = record ?? null;
    const values: Record<string, any> = {};
    for (const field of this.editableFields) {
      const value = record?.[field.name] ?? this.defaultValue(field);
      values[field.name] = field.type === 'json' ? JSON.stringify(value, null, 2) : value;
    }
    this.form.reset(values);
    this.metadata = { ...(record?.['metadata'] ?? {}) };
    this.formRef = this.dialog.open(this.formDialog, {
      width: '900px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
  }

  closeForm(): void {
    this.formRef?.close();
  }

  viewDetail(record: Record<string, any>): void {
    this.viewing = record;
    this.viewRef = this.dialog.open(this.viewDialog, {
      width: '780px',
      maxWidth: '95vw',
      panelClass: 'admin-dialog',
    });
    this.viewRef.afterClosed().subscribe(() => (this.viewing = null));
  }

  closeView(): void {
    this.viewRef?.close();
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = { ...this.form.getRawValue() } as Record<string, any>;
    try {
      for (const field of this.editableFields.filter(field => field.type === 'json')) {
        payload[field.name] = JSON.parse(payload[field.name]);
      }
    } catch {
      this.messages.error('JSON không hợp lệ.');
      return;
    }

    if (this.hasMetadata) payload['metadata'] = this.metadata;
    if (this.editing && (
      this.config.entityType === 'ElectricBikeProduct'
      || this.config.entityType === 'AgriculturalMachineProduct'
    )) {
      payload['id'] = this.editing['id'];
    }

    this.saving = true;
    const request = this.editing
      ? this.http.put(`${environment.apiUrl}${this.config.endpoint}/${this.editing['id']}`, payload)
      : this.http.post(`${environment.apiUrl}${this.config.endpoint}`, payload);
    request.subscribe({
      next: () => {
        this.messages.success('Đã lưu dữ liệu');
        this.closeForm();
        this.load();
      },
      error: error => {
        this.saving = false;
        this.messages.error(this.errorText(error));
      },
      complete: () => this.saving = false,
    });
  }

  deactivate(record: Record<string, any>): void {
    const label = record['name'] || record['email'] || record['id'];
    this.confirm
      .open({
        title: 'Ngừng sử dụng',
        message: `Ngừng sử dụng ${label}?`,
        okText: 'Ngừng dùng',
        danger: true,
      })
      .subscribe(confirmed => {
        if (!confirmed) return;
        this.http
          .delete(`${environment.apiUrl}${this.config.endpoint}/${record['id']}`)
          .subscribe({
            next: () => {
              this.messages.success('Đã ngừng sử dụng');
              this.load();
            },
            error: error => this.messages.error(this.errorText(error)),
          });
      });
  }

  reactivate(record: Record<string, any>): void {
    const payload = { ...record, isUsed: true };
    if (this.config.entityType === 'Order') delete payload['total'];

    this.http.put(`${environment.apiUrl}${this.config.endpoint}/${record['id']}`, payload).subscribe({
      next: () => {
        this.messages.success('Đã kích hoạt lại');
        this.load();
      },
      error: error => this.messages.error(this.errorText(error)),
    });
  }

  private errorText(error: any): string {
    if (typeof error?.error === 'string') return error.error;
    return error?.error?.message
      || error?.error?.errors?.join?.(', ')
      || 'Không thể lưu dữ liệu';
  }

  private defaultValue(field: AdminFieldConfig): unknown {
    if (field.defaultValue !== undefined) return field.defaultValue;
    if (field.type === 'boolean') return true;
    if (field.type === 'number') return 0;
    return '';
  }

  trackByKey(_: number, item: KeyValue<string, string>): string {
    return item.key;
  }
}
