const express = require('express');
const { listMovies, searchMovies, getMovie } = require('../controllers/movies-controller.js');

const router = express.Router();

// http://localhost:3000//api/v1/movies/list
router.route('/list').get(listMovies);
// http://localhost:3000//api/v1/movies/search/john wick
router.route('/search/:query').get(searchMovies);
// http://localhost:3000//api/v1/movies/123456789
router.route('/:id').get(getMovie);

module.exports = router;
