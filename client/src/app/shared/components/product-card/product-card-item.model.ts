export interface ProductCardItem {
  kind: 'bike' | 'machine' | 'appliance';
  id: string;
  name: string;
  brandName: string;
  model: string;
  categoryName: string;
  description: string;
  price: number;
  stockQuantity: number;
  pictureUrl: string;
  companyName: string;
  chip1?: string;
  chip2?: string;
  chip3?: string;
  /** Màu sắc hiển thị dạng chấm tròn (tuỳ chọn). */
  colors?: { name: string; hexCode: string }[];
  /** Nhãn nút xem chi tiết (tuỳ chọn, lấy từ CMS). */
  detailLabel?: string;
}
