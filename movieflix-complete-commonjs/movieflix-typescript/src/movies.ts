import fetchData from './utilities/http.js';
import { BaseInfo } from './models/baseInfo.js';

const listAllMovies = async (page: number = 1): Promise<BaseInfo> => {
  const response = await fetchData('movies/list', page);
  const { data } = await response.json();
  return data as BaseInfo;
};

const searchMovies = async (criteria: string, page: number = 1): Promise<BaseInfo> => {
  const response = await fetchData('movies/search', page, criteria);
  const { data } = await response.json();

  return data as BaseInfo;
};

export { listAllMovies, searchMovies };
