var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchData from './utilities/http.js';
const listAllMovies = (page = 1, criteria = '') => __awaiter(void 0, void 0, void 0, function* () {
    const url = 'http://localhost:3001/api/v1/movies/list';
    const response = yield fetch(url);
    const movies = yield response.json();
    console.log(movies.data);
    // const response = await fetchData('movie/popular', page, criteria);
    return movies.data;
});
const searchMovies = (criteria, page = 1) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetchData('search/movie', page, criteria);
    const movies = yield response.json();
    return movies;
});
export { listAllMovies, searchMovies };
