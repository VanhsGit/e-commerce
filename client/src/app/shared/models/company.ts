export interface Company {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  createdAt: Date;
  updatedAt: Date;
  metadata: Record<string, string>;
  isUsed?: boolean;
}

export interface CreateCompany {
  name: string;
  description: string;
  logoUrl: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
  metadata?: Record<string, string>;
  isUsed?: boolean;
}
