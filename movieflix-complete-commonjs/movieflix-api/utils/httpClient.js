const fetch = require('node-fetch');

const response = {
  status: 'Not found',
  statusCode: 404,
  data: null,
  error: null,
};

const fetchData = async (endpoint, page = 1, query = null) => {
  let url = `${process.env.BASE_URL}${endpoint}?page=${page}&language=sv-SE&sort_by=popularity.desc`;

  if (query) {
    url += `&query=${query}`;
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `bearer ${process.env.TOKEN}`,
    },
  };
  const result = await fetch(url, options);

  if (result.status === 200) {
    const data = await result.json();

    response.status = 'Success';
    response.statusCode = 200;
    response.data = data;

    return response;
  } else {
    response.error = 'Could not find any movies';
    return response;
  }
};

module.exports = fetchData;
