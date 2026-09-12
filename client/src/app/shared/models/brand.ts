export interface Brand {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  createdAt: Date;
  updatedAt: Date;
  metadata: Record<string, string>;
  isUsed?: boolean;
}

export interface CreateBrand {
  name: string;
  description: string;
  logoUrl: string;
  metadata?: Record<string, string>;
  isUsed?: boolean;
}
