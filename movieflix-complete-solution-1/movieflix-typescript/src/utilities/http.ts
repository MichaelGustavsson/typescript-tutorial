import { state } from './state.js';

const fetchData = async (endpoint: string, page = 1, criteria?: string): Promise<Response> => {
  const API_URL = state.api.baseUrl;

  let url: string = '';

  if (criteria) {
    url = `${API_URL}${endpoint}/${criteria}&page=${page}`;
  } else {
    url = `${API_URL}${endpoint}?page=${page}`;
  }

  const response = await fetch(url);

  return response;
};

export default fetchData;
