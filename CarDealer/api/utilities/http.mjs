import fetch from 'node-fetch';

let baseUrl = process.env.BASE_URL;

const responseType = {
  status: 'Not found',
  statusCode: 404,
  error: null,
  data: null,
};

const fetchData = async (id = null) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  let url = baseUrl;

  if (id !== null) {
    url = url + `/${id}`;
  } else {
    url += '?_sort=id&_order=desc';
  }

  const response = await fetch(url, options);

  if (response.ok) {
    const result = await response.json();

    responseType.status = 'Success';
    responseType.statusCode = 200;
    responseType.data = result;

    return responseType;
  } else {
    responseType.error = 'Kunde inte hitta några bilar, något gick fel...';
    return responseType;
  }
};

const addData = async (body) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (response.status !== 201) {
    responseType.statusCode = 500;
    responseType.status = 'Error';
    responseType.error = 'Ett fel inträffade när data skulle sparas';
    return responseType;
  } else {
    const result = await response.json();
    responseType.statusCode = 201;
    responseType.status = 'Success';
    responseType.data = result;
    return responseType;
  }
};

export { fetchData, addData };
