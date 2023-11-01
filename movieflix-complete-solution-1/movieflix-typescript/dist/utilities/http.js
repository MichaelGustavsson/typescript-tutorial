var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state } from './state.js';
const fetchData = (endpoint, page = 1, criteria) => __awaiter(void 0, void 0, void 0, function* () {
    const API_URL = state.api.baseUrl;
    let url = '';
    if (criteria) {
        url = `${API_URL}${endpoint}/${criteria}&page=${page}`;
    }
    else {
        url = `${API_URL}${endpoint}?page=${page}`;
    }
    const response = yield fetch(url);
    return response;
});
export default fetchData;
