export interface Pagination<T = unknown> {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: T[];
  }