export interface Company {
  id: number;
  name: string;
  description: string;
  logoUrl: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  createdAt: Date;
  updatedAt: Date;
  metadata: Record<string, any>;
}

export interface CreateCompany {
  name: string;
  description: string;
  logoUrl: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  metadata?: Record<string, any>;
}
