const express = require('express');

const cors = require('cors');
const movies = require('./routes/movies-routes');

require('dotenv').config({ path: './config/.env' });

const app = express();

/************* Middleware ******************/
app.use(cors());
// http://localhost:3000//api/v1/movies
app.use('/api/v1/movies', movies);
/*******************************************/

// One pipe may not work on windows environments, try with two...
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
