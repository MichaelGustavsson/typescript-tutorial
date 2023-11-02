import { Movie } from './movie';

export interface BaseInfo {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}
