const httpClient = require('../utils/httpClient');

exports.listMovies = async (req, res) => {
  const page = req.query.page !== undefined ? req.query.page : 1;
  // https://api.themoviedb.org/3/discover/movie
  const response = await httpClient('discover/movie', page);

  res.status(response.statusCode).json(response);
};

exports.searchMovies = async (req, res) => {
  const page = req.query.page !== undefined ? req.query.page : 1;
  const query = req.params.query;

  // https://api.themoviedb.org/3/search/movie
  const response = await httpClient('search/movie', page, query);
  res.status(response.statusCode).json(response);
};

exports.getMovie = async (req, res) => {
  if (req.params.id === undefined) {
    res.status(400).json({ success: false, message: 'Bad request, movie id is missing' });
    return;
  }

  const id = req.params.id;
  // https://api.themoviedb.org/3/movie/
  const response = await httpClient(`movie/${id}`);

  res.status(response.statusCode).json(response);
};
