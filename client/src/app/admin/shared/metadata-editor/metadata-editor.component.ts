import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

interface MetadataRow { key: string; value: string; }

const CSV_METADATA_LABELS: Record<string, { key: string; value: string }> = {
  Warranty: { key: 'Key — Warranty', value: 'Warranty / Chính sách bảo hành' },
  PriceNote: { key: 'Key — PriceNote', value: 'PriceNote / Ghi chú giá' },
  ColorsFromCsv: { key: 'Key — ColorsFromCsv', value: 'ColorsFromCsv / Màu từ CSV' },
  Specifications: { key: 'Key — Specifications', value: 'Specifications / Thông số kỹ thuật' },
};

export function metadataFieldLabel(key: string, field: 'key' | 'value'): string {
  return CSV_METADATA_LABELS[key]?.[field] ?? (field === 'key' ? 'Key' : 'Value');
}

export function metadataDisplayLabel(key: string): string {
  return CSV_METADATA_LABELS[key]?.value ?? key;
}

export function isMultilineMetadata(key: string): boolean {
  return key === 'Warranty' || key === 'Specifications';
}

export function metadataWithoutWarranty(metadata?: Record<string, string> | null): Record<string, string> {
  const result = { ...(metadata ?? {}) };
  delete result['Warranty'];
  delete result['warranty'];
  delete result['Bảo hành'];
  return result;
}

export function metadataWithWarranty(
  metadata: Record<string, string> | null | undefined,
  warranty: string,
): Record<string, string> {
  const result = metadataWithoutWarranty(metadata);
  const value = warranty.trim();
  if (value) result['Warranty'] = value;
  return result;
}

export function userMetadata(value?: Record<string, string> | null): Record<string, string> {
  const metadata = { ...(value ?? {}) };
  delete metadata['seedImageUrls'];
  return metadata;
}

@Component({
  selector: 'app-metadata-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
  ],
  templateUrl: './metadata-editor.component.html',
})
export class MetadataEditorComponent implements OnChanges {
  @Input() value: Record<string, string> = {};
  @Output() valueChange = new EventEmitter<Record<string, string>>();
  rows: MetadataRow[] = [];
  duplicateKeys = false;
  readonly fieldLabel = metadataFieldLabel;
  readonly displayLabel = metadataDisplayLabel;
  readonly isMultiline = isMultilineMetadata;

  ngOnChanges(): void {
    this.rows = Object.entries(userMetadata(this.value)).map(([key, value]) => ({ key, value: String(value ?? '') }));
  }

  add(): void { this.rows.push({ key: '', value: '' }); }
  remove(index: number): void { this.rows.splice(index, 1); this.emit(); }

  emit(): void {
    const cleaned = this.rows.map(row => ({ key: row.key.trim(), value: String(row.value ?? '') })).filter(row => row.key);
    this.duplicateKeys = new Set(cleaned.map(row => row.key)).size !== cleaned.length;
    if (!this.duplicateKeys) {
      const metadata: Record<string, string> = {};
      if (this.value?.['seedImageUrls']) metadata['seedImageUrls'] = this.value['seedImageUrls'];
      for (const row of cleaned) {
        if (row.key !== 'seedImageUrls') metadata[row.key] = row.value;
      }
      this.valueChange.emit(metadata);
    }
  }
}
