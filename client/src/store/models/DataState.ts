export interface DataState<T> {
  data: T[];
  loaded: boolean;
  pagination?: {
    total: number;
    page: number;
  };
}
