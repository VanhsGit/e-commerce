import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

interface MetadataRow { key: string; value: string; }

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

  ngOnChanges(): void {
    this.rows = Object.entries(this.value || {}).map(([key, value]) => ({ key, value: String(value ?? '') }));
  }

  add(): void { this.rows.push({ key: '', value: '' }); }
  remove(index: number): void { this.rows.splice(index, 1); this.emit(); }

  emit(): void {
    const cleaned = this.rows.map(row => ({ key: row.key.trim(), value: String(row.value ?? '') })).filter(row => row.key);
    this.duplicateKeys = new Set(cleaned.map(row => row.key)).size !== cleaned.length;
    if (!this.duplicateKeys) {
      const metadata: Record<string, string> = {};
      for (const row of cleaned) metadata[row.key] = row.value;
      this.valueChange.emit(metadata);
    }
  }
}
