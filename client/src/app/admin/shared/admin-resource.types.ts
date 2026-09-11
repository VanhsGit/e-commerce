import { EntityType } from '../../shared/models/entity-image';

export type AdminFieldType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'boolean'
  | 'select'
  | 'metadata'
  | 'json';

export interface AdminFieldOption {
  label: string;
  value: string | number;
}

export interface AdminFieldConfig {
  name: string;
  label: string;
  type: AdminFieldType;
  required?: boolean;
  defaultValue?: unknown;
  options?: AdminFieldOption[];
}

export interface AdminResourceConfig {
  title: string;
  endpoint: string;
  entityType: EntityType;
  fields: AdminFieldConfig[];
}
