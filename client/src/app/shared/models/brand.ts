export interface Brand {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBrand {
  name: string;
  description: string;
  logoUrl: string;
}
