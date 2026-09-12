export interface ProductCardItem {
  kind: 'bike' | 'machine';
  id: number;
  name: string;
  brandName: string;
  model: string;
  categoryName: string;
  description: string;
  price: number;
  pictureUrl: string;
  companyName: string;
  chip1?: string;
  chip2?: string;
  chip3?: string;
}
