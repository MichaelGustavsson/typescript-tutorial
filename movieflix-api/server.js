const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config({ path: './config/.env' });

const app = express();

// Setting middleware...
app.use(cors());

app.get('/api/v1/movies/list', async (req, res) => {
  const url = `${process.env.BASE_URL}discover/movie?page=1&language=sv-SE&sort_by=popularity.desc`;

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
    res.status(200).json({ success: true, message: 'movies list is working!', data: result });
  } else {
    res.status(404).json({ success: false, message: 'Could not find any movies' });
  }
});

app.get('/api/v1/movies/search/:query', (req, res) => {
  res.status(200).json({ success: true, message: 'movies search is working! ' + req.params.query });
});

app.get('/api/v1/movie/:id', (req, res) => {
  res.status(200).json({ success: true, message: 'movie is working! ' + req.params.id });
});

const PORT = 3000 | process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
