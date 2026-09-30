import { ProductCategory } from '../../shared/models/product-category';

export interface CategoryOption {
  id: string;
  /** "Cha / Con" */
  label: string;
  depth: number;
}

/** Làm phẳng cây danh mục thành danh sách option theo thứ tự cha trước con. */
export function flattenCategoryTree(
  nodes: ProductCategory[] | null | undefined,
  prefix = '',
  depth = 0,
): CategoryOption[] {
  const result: CategoryOption[] = [];
  for (const node of nodes ?? []) {
    const label = prefix ? `${prefix} / ${node.name}` : node.name;
    result.push({ id: node.id, label, depth });
    result.push(...flattenCategoryTree(node.children, label, depth + 1));
  }
  return result;
}
