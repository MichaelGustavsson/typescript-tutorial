const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });

const app = express();

// Setting middleware...
app.use(cors());

app.get('/api/v1/movies/list', async (req, res) => {
  const page = req.query.page !== undefined ? req.query.page : 1;
  const url = `${process.env.BASE_URL}discover/movie?page=${page}&language=sv-SE&sort_by=popularity.desc`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `bearer ${process.env.TOKEN}`,
    },
  };
  const response = await fetch(url, options);

  if (response.status === 200) {
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(404).json({ success: false, message: 'Could not find any movies' });
  }
});

app.get('/api/v1/movies/search/:query', async (req, res) => {
  const page = req.query.page !== undefined ? req.query.page : 1;
  const query = req.params.query;

  const url = `${process.env.BASE_URL}search/movie?query=${query}&page=${page}&language=sv-SE&sort_by=popularity.desc`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `bearer ${process.env.TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  if (response.status === 200) {
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(404).json({ success: false, message: 'Could not find any movies' });
  }
});

app.get('/api/v1/movies/:id', async (req, res) => {
  if (req.params.id === undefined) {
    res.status(400).json({ success: false, message: 'Bad request, movie id is missing' });
    return;
  }

  const id = req.params.id;

  const url = `${process.env.BASE_URL}movie/${id}?language=sv-SE`;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: `bearer ${process.env.TOKEN}`,
    },
  };

  const response = await fetch(url, options);
  if (response.status === 200) {
    const result = await response.json();
    res.status(200).json({ success: true, data: result });
  } else {
    res.status(404).json({ success: false, message: 'Could not find any movies' });
  }
});

// One pipe may not work on windows environments, try with two...
const PORT = 3000 | process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
