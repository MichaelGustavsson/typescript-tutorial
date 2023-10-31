import { state } from './state.js';

const fetchData = async (endpoint: string, page = 1, criteria?: string): Promise<Response> => {
  const API_KEY = state.api.key;
  const API_URL = state.api.baseUrl;

  let url: string = '';

  if (criteria) {
    url = `${API_URL}${endpoint}?query=${criteria}&api_key=${API_KEY}&language=sv-SE&page=${page}`;
  } else {
    url = `${API_URL}${endpoint}?api_key=${API_KEY}&language=sv-SE&page=${page}`;
  }

  const response = await fetch(url);

  return response;
};

export default fetchData;
