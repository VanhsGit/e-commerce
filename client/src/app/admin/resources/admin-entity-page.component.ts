import { CommonModule, KeyValue } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { environment } from '../../../environments/environment';
import { CmInputComponent } from '../../shared/components/cm-input/cm-input.component';
import { AdminFieldConfig, AdminResourceConfig } from '../shared/admin-resource.types';
import { MetadataEditorComponent } from '../shared/metadata-editor/metadata-editor.component';
import { AdminPageHeaderComponent } from '../shared/page-header/admin-page-header.component';

@Component({
  selector: 'app-admin-entity-page',
  standalone: true,
  imports: [
    AdminPageHeaderComponent,
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzSelectModule,
    NzSwitchModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    CmInputComponent,
    MetadataEditorComponent,
  ],
  templateUrl: './admin-entity-page.component.html',
})
export class AdminEntityPageComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly messages = inject(NzMessageService);

  @Input({ required: true }) config!: AdminResourceConfig;

  rows: Record<string, any>[] = [];
  form = new FormGroup<Record<string, FormControl<any>>>({});
  metadata: Record<string, string> = {};
  editing: Record<string, any> | null = null;
  viewing: Record<string, any> | null = null;
  modalOpen = false;
  viewOpen = false;
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
    this.modalOpen = true;
  }

  viewDetail(record: Record<string, any>): void {
    this.viewing = record;
    this.viewOpen = true;
  }

  closeView(): void {
    this.viewing = null;
    this.viewOpen = false;
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
        this.modalOpen = false;
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
    if (!window.confirm(`Ngừng sử dụng ${record['name'] || record['email'] || record['id']}?`)) return;

    this.http.delete(`${environment.apiUrl}${this.config.endpoint}/${record['id']}`).subscribe({
      next: () => {
        this.messages.success('Đã ngừng sử dụng');
        this.load();
      },
      error: error => this.messages.error(this.errorText(error)),
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
