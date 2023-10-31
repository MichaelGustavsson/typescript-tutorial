import fetchData from './utilities/http.js';
import { BaseInfo } from './models/baseInfo.js';

const listAllMovies = async (page: number = 1, criteria: string = ''): Promise<BaseInfo> => {
  const url = 'http://localhost:3001/api/v1/movies/list';
  const response = await fetch(url);
  const movies = await response.json();
  console.log(movies.data);

  // const response = await fetchData('movie/popular', page, criteria);
  return movies.data as BaseInfo;
};

const searchMovies = async (criteria: string, page: number = 1): Promise<BaseInfo> => {
  const response = await fetchData('search/movie', page, criteria);
  const movies = await response.json();
  return movies as BaseInfo;
};

export { listAllMovies, searchMovies };
