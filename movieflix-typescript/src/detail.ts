import fetchData from './utilities/http.js';
import { MovieInfo } from './models/movie-info.js';

const getMovieInfo = async (id: number): Promise<MovieInfo> => {
  const response = await fetchData('movie/' + id);
  const movie = await response.json();

  return movie as MovieInfo;
};

export default getMovieInfo;
