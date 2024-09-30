import { IPet } from './IPets';

export interface IPetsListResponse {
  currentPage: number;
  pageSize: number;
  total: number | null;
  pets: IPet[] | null;
}
