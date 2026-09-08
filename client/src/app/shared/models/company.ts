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
}

export interface CreateCompany {
  name: string;
  description: string;
  logoUrl: string;
  address: string;
  phoneNumber: string;
  email: string;
  website: string;
}
