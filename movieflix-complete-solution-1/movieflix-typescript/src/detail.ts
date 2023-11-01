import fetchData from './utilities/http.js';
import { MovieInfo } from './models/movie-info.js';

const getMovieInfo = async (id: number): Promise<MovieInfo> => {
  const response = await fetchData(`movies/${id}`);
  const { data } = await response.json();

  return data as MovieInfo;
};

export default getMovieInfo;
