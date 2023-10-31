import fetchData from './utilities/http.js';
import { BaseInfo } from './models/baseInfo.js';

const listAllMovies = async (page: number = 1, criteria: string = ''): Promise<BaseInfo> => {
  const response = await fetchData('movie/popular', page, criteria);
  const movies = await response.json();

  return movies as BaseInfo;
};

const searchMovies = async (criteria: string, page: number = 1): Promise<BaseInfo> => {
  const response = await fetchData('search/movie', page, criteria);
  const movies = await response.json();
  return movies as BaseInfo;
};

export { listAllMovies, searchMovies };
